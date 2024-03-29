import React from "react";

export default function getInTouchSection() {
  return (
    <div className="mb-32">
      <h2
        className="text-2xl md:text-4xl font-semibold my-10"
        id="get_in_touch"
      >
        Let&apos;s get in touch!
      </h2>
      <form
        action="https://formsubmit.co/9b892c13c562fecdcb79ae29467a769f"
        method="POST"
        className="w-full md:w-1/2 mx-auto"
      >
        <div className="field flex flex-col mb-8">
          <label htmlFor="fullname" className="mb-2">
            Fullname
          </label>
          <input
            id="fullname"
            type="text"
            name="fullname"
            className="h-12 px-6 border border-accent"
          />
        </div>
        <div className="field flex flex-col mb-8">
          <label htmlFor="email" className="mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="h-12 px-6 border border-accent"
          />
        </div>
        <div className="field flex flex-col mb-8">
          <label htmlFor="help" className="mb-2">
            How can I help you ?
          </label>
          <textarea
            name="howToHelp"
            id="help"
            rows="5"
            cols="33"
            className="px-6 py-3 border border-accent"
          ></textarea>
        </div>
        <button
          type="submit"
          className="transition ease-in-out delay-250 hover:translate-x-2 hover:drop-shadow-xl rounded w-full md:w-full cursor-pointer py-4 px-6 text-center bg-accent text-white"
        >
          ✈️ Get Your Free Consultation
        </button>
      </form>
    </div>
  );
}
