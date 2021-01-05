import React from "react"

const Signature = () => {
  return (
    <form action="http://localhost:3000/register/agree" method="post" className="ml-10 w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="signature"
          >
            Signature
          </label>
          <input
            required
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="signature"
            name="signature"
            type="text"
          />
          <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        </div>
        <div class="w-full md:w-1/3 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="date"
          >
            Date
          </label>
          <input
            required
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-date"
            type="date"
            name="date"
          />
          <input
            type="hidden"
            value="<blockquote>
            <p>The undersigned hereby applies for membership or renewal, in the Kayak Fishing Association of NY, Ltd. (“KFA”). I have read, understand and agree to the KFA Bylaws and the inherent risk in participating in the activities of KFA, including fishing trips, which KFA may make available to members. I understand that KFA activities may take me into remote areas, and that I may not be able to be promptly evacuated or receive proper medical care in the event of injury or disease. I further understand that I am solely responsible for all costs of medical treatment and transportation.</p>
            
            <p>I represent that I have the knowledge and experience to kayak in any sea or water condition and weather in which I choose to participate. I acknowledge that I am solely responsible for my decision to participate even if the KFA or any of its members decides to kayak or fish.</p>
            
            <p>Intending to be legally bound, for myself, my heirs, executors, and administrators, except to the extent that indemnity insurance might be available, I waive, release, indemnify, and hold harmless, KFA, its Officers, Board of Directors,and members, against any and all claims for personal injury, disease, death, and property damage or loss, that I may incur, arising out of or connected in any way with any and all KFA activities (“Claims”). I assume the risk of undertaking all KFA activities, including related travel. I will pay all defendants’ attorneys’ fees and costs if I bring a legal action withrespect to any Claims.</p>
            </blockquote>"
            name="agreement"
            />
        </div>
      </div>
      <button
        class="flex-end bg-blue-900 text-white font-semibold text-xl px-8 py-2 outline-none rounded-full text-center uppercase"
        type="submit"
      >
        Agree
      </button>
    </form>
  )
}

export default Signature
