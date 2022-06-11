import React from "react";

export default function getInTouchSection() {
  return (
    <div className="mb-32">
      <h2 className="text-2xl md:text-4xl font-semibold my-10">
        Let&apos;s get in touch!
      </h2>
      <form
        action="https://formsubmit.co/9b892c13c562fecdcb79ae29467a769f"
        method="POST"
        className="w-full md:w-1/2 mx-auto"
      >
        <div className="field flex flex-col mb-8">
          <label htmlFor="fullname" className="mb-4">
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
          <label htmlFor="email" className="mb-4">
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
          <label htmlFor="help" className="mb-4">
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
          className="w-full md:w-1/3 cursor-pointer py-4 px-6 text-center bg-accent text-white"
        >
          ✈️ Send
        </button>
      </form>
    </div>
  );
}
