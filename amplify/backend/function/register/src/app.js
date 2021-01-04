/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */ /*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
    See the License for the specific language governing permissions and limitations under the License.
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*/
require("dotenv").config()
const paypal = require("@paypal/checkout-server-sdk")
let clientId = process.env.PAYPAL_CLIENT_ID
let clientSecret = process.env.PAYPAL_CLIENT_SECRET
const AWS = require("aws-sdk")
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware")
var bodyParser = require("body-parser")
var express = require("express")

let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret)
let client = new paypal.core.PayPalHttpClient(environment)

AWS.config.update({ region: process.env.TABLE_REGION })

const dynamodb = new AWS.DynamoDB.DocumentClient()

let pendingTableName = "pendingRegistrations-" + process.env.ENV
let registrationTableName = "registrations-" + process.env.ENV

const userIdPresent = false // TODO: update in case is required to use that definition
const partitionKeyName = "id"
const partitionKeyType = "S"
const sortKeyName = "email"
const sortKeyType = "S"
const hasSortKey = sortKeyName !== ""
const path = "/register"
const UNAUTH = "UNAUTH"
const hashKeyPath = "/:" + partitionKeyName
const sortKeyPath = hasSortKey ? "/:" + sortKeyName : ""
// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())
app.use(
  express.urlencoded({
    extended: true,
  })
)
// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
})

const addPending = async (paypalId, payload) => {
  let putItemParams = {
    TableName: pendingTableName,
    Item: {
      id: paypalId,
      registration: payload,
    },
  }

  return new Promise((resolve, reject) => {
    dynamodb.put(putItemParams, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve("Stored")
      }
    })
  })
}

const copyPendingPurchase = async(id, payment) => {
  let getItemParams = {
    TableName: pendingTableName,
    Key: { id: id },
  }

  return await dynamodb.get(getItemParams, async (err, data) => {
    if (err) {
      reject("Could not load items: " + err.message)
    } else {
      const putItemParams = {
        TableName: registrationTableName,
        Item: {
          id: data.Item.id,
          registration: data.Item.registration,
          payment: payment,
        },
      }
      await dynamodb.put(putItemParams).promise()
    }
  }).promise()
}

// convert url string param to expected Type
const convertUrlType = (param, type) => {
  switch (type) {
    case "N":
      return Number.parseInt(param)
    default:
      return param
  }
}

async function capturePayment(token) {
  request = new paypal.orders.OrdersCaptureRequest(token)
  request.headers['PayPal-Mock-Response'] = '{"mock_application_codes" : "INSTRUMENT_DECLINED"}';
  request.requestBody({})
  return await client.execute(request)
}

let order = price => ({
  intent: "CAPTURE",
  application_context: {
    return_url: "http://localhost:3000/register/paid",
    cancel_url: "https://signup.kfa-ny.org",
    brand_name: "Kayak Fishing Association of NY",
    locale: "en-US",
    landing_page: "BILLING",
    user_action: "CONTINUE",
  },
  items: [
    {
      name: "KFA membership dues",
      description: "KFA membership dues",
      sku: "1",
      unit_amount: {
        currency_code: "USD",
        value: price,
      },
      quantity: "1",
      category: "DIGITAL_GOODS",
    },
  ],
  purchase_units: [
    {
      amount: {
        description: "KFA membership dues",
        currency_code: "USD",
        value: price,
      },
    },
  ],
})
app.get(path + "/paid", async function (req, res) {
  capturePayment(req.query["token"])
    .then(async payment => {
      console.log(payment)
     await copyPendingPurchase(req.query["token"], payment)
     res.redirect("https://signup.kfa-ny.org/success")
    })
  .catch(failure => res.send("<h3>There was a problem with your order. Please contact info@kfa-ny.org with the content below</h3><pre>" + "\n" + "ID: " + req.query["token"] + "\n" + JSON.stringify(failure) + "</pre>"))
})

app.post(path, async function (req, res) {
  let request = new paypal.orders.OrdersCreateRequest()
  request.requestBody(order(25.0))

  // Call API with your client and get a response for your call
  let createOrder = async function () {
    return await client
      .execute(request)
      .then(res => res)
      .catch(failure => {
        console.log(failure)
      })
  }
  await createOrder()
    .then(async response => {
      let approveLink = response.result.links.find(x => x.rel == "approve").href
      res.statusCode = 200
      await addPending(response.result.id, req.body)
      res.redirect(approveLink)
    })
    .catch(reason => "Transaction failed " + reason)
})

app.post(path + "/agree", function (_req, res) {
  res.redirect("https://signup.kfa-ny.org/registration/")
})

/********************************
 * HTTP Get method for list objects *
 ********************************/

// app.get(path + hashKeyPath, function(req, res) {
//   var condition = {}
//   condition[partitionKeyName] = {
//     ComparisonOperator: 'EQ'
//   }

//   if (userIdPresent && req.apiGateway) {
//     condition[partitionKeyName]['AttributeValueList'] = [req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH ];
//   } else {
//     try {
//       condition[partitionKeyName]['AttributeValueList'] = [ convertUrlType(req.params[partitionKeyName], partitionKeyType) ];
//     } catch(err) {
//       res.statusCode = 500;
//       res.json({error: 'Wrong column type ' + err});
//     }
//   }

//   let queryParams = {
//     TableName: tableName,
//     KeyConditions: condition
//   }

//   dynamodb.query(queryParams, (err, data) => {
//     if (err) {
//       res.statusCode = 500;
//       res.json({error: 'Could not load items: ' + err});
//     } else {
//       res.json(data.Items);
//     }
//   });
// });

// app.get(path + '/object' + hashKeyPath + sortKeyPath, function(req, res) {

// /*****************************************
//  * HTTP Get method for get single object *
//  *****************************************/

// app.get(path + '/object' + hashKeyPath + sortKeyPath, function(req, res) {
//   var params = {};
//   if (userIdPresent && req.apiGateway) {
//     params[partitionKeyName] = req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH;
//   } else {
//     params[partitionKeyName] = req.params[partitionKeyName];
//     try {
//       params[partitionKeyName] = convertUrlType(req.params[partitionKeyName], partitionKeyType);
//     } catch(err) {
//       res.statusCode = 500;
//       res.json({error: 'Wrong column type ' + err});
//     }
//   }
//   if (hasSortKey) {
//     try {
//       params[sortKeyName] = convertUrlType(req.params[sortKeyName], sortKeyType);
//     } catch(err) {
//       res.statusCode = 500;
//       res.json({error: 'Wrong column type ' + err});
//     }
//   }

//   let getItemParams = {
//     TableName: tableName,
//     Key: params
//   }

//   dynamodb.get(getItemParams,(err, data) => {
//     if(err) {
//       res.statusCode = 500;
//       res.json({error: 'Could not load items: ' + err.message});
//     } else {
//       if (data.Item) {
//         res.json(data.Item);
//       } else {
//         res.json(data) ;
//       }
//     }
//   });
// });

/************************************
 * HTTP post method for insert object *
 *************************************/

// app.post(path, function(req, res) {

//   if (userIdPresent) {
//     req.body['userId'] = req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH;
//   }

//   let putItemParams = {
//     TableName: tableName,
//     Item: req.body
//   }
//   dynamodb.put(putItemParams, (err, data) => {
//     if(err) {
//       res.statusCode = 500;
//       res.json({error: err, url: req.url, body: req.body});
//     } else{
//       res.json({success: 'post call succeed!', url: req.url, data: data})
//     }
//   });
// });

app.listen(3000, function () {
  console.log("App started")
})

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
