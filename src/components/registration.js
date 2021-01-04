import React from "react"

const Registration = () => {
  return (
    <form className="m-5 p-5 w-full max-w-lg" action="https://n6vn9rsexi.execute-api.us-east-1.amazonaws.com/main/register" method="post">
      <h1>Registration Form</h1>   
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="name"
            name="name"
            type="text"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="email"
          >
            email
          </label>
          <input
          required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            name="email"
            type="email"
          />
        </div>
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="kfaForumName"
          >
            KFA Forum Name
          </label>
          <input
          required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="kfaForumName"
            name="kfaForumName"
            type="text"
          />
        </div>

        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="address1"
          >
            Address 1
          </label>
          <input
          required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="address1"
            name="address1"
            type="text"
          />
        </div>

        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="address2"
          >
            Address 2
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="address2"
            name="address2"
            type="text"
          />
        </div>
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="city"
          >
            City
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="city"
            name="city"
            type="text"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
          
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="state"
          >
            State
          </label>
          <select
          required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="state"
            name="state"
            defaultValue="NY"
          >
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="zip"
          >
            Zip
          </label>
          <input
          required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="zip"
            name="zip"
            type="numeric"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="phone1"
          >
            Primary Phone
          </label>
          <input
          required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="phone1"
            name="phone1"
            type="tel"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="phone2"
          >
            Other Phone
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="phone2"
            name="phone2"
            type="tel"
          />
        </div>

        <h4 className="mt-10 ml-2">
          In case of emergency, when reasonably feasible, contact:
        </h4>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
          
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="ecName"
          >
            Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="ecName"
            name="ecName"
            type="text"
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="ecRelationship"
          >
            Relationship
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="ecRelationship"
            name="ecRelationship"
            type="text"
          />
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="ecMobile"
          >
            Mobile
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="ecMobile"
            name="ecMobile"
            type="tel"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="ecHome"
          >
            Home
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="ecHome"
            name="ecHome"
            type="tel"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="ecWork"
          >
            Work
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="ecWork"
            name="ecWork"
            type="tel"
          />
        </div>
      </div>
      <h4 className="mt-10">
          Registration Type:
        </h4>
      <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-1/2 md:w-1/2 lg:w-1/3 px-3">
        <label
          className="w-1/2 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="renewal"
        >
          Renewal
        </label>
        <input
        required
          className="w-1/2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="renewal"
          name="renewal"
          value="true"
          type="radio"
        />
        </div>
      <div className="w-1/4 md:w-1/2 lg:w-1/3 px-3">

        <label
          className="w-1/2 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="new-membership"
        >
          New
        </label>
        <input
          className="w-1/2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="new-membership"
          name="renewal"
          value="false"
          type="radio"
          required
        />
      </div>
      </div>
      <p>Clicking "Sign Up" will send you to PayPal to pay the $25 dues. Please do not press back.</p>
      <input type="submit" value="Sign Up" className="flex-end bg-blue-900 text-white font-semibold text-xl px-8 py-2 outline-none rounded-full text-center uppercase"/>
    </form>
  )
}

export default Registration
