import React from "react"

const dateString = () => {
    let d = new Date();
    return d.getMonth() + 1 + "/" + d.getDate() +"/" + d.getFullYear(); 
}

const Signature = () => {
  return (
    <form className="ml-10 w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-signature"
          >
             Signature
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-signature"
            type="text"
          />
          <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>
        <div class="w-full md:w-1/3 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-date"
          >
            Date
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-date"
            type="date"
          />
        </div>
      </div>
      <button class="flex-end bg-blue-900 text-white font-semibold text-xl px-8 py-2 outline-none rounded-full text-center uppercase" type="submit">Agree</button>
  </form>
  )
}

export default Signature
