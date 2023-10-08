import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold mb-4">Get In Touch</h1>
        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[100px]">
          <div className="border py-[20px] px-[25px]">
            <p>
              4214 Arlington Avenue Des Arc, <br /> AR 72040, USA
            </p>
          </div>
          <div className="border py-[20px] px-[25px]">
            <p>(+1) 518-636-6052</p>
            <p>Mon-Sat 9:00am-5:00pm</p>
          </div>
          <div className="border py-[20px] px-[25px]">
            <p>Info@carhut.com</p>
            <p>24 X 7 online support</p>
          </div>
        </div>
        <div className="mb-[10px]">
          <h2 className="text-xl font-semibold mb-2">Send us a message</h2>
          <form>
            <div className="flex gap-x-[15px] flex-col md:flex-row lg:flex-row">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input bg-white px-[25px] py-[3px]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input bg-white px-[25px] py-[3px]"
                />
              </div>
            </div>
            <div className="flex gap-x-[15px] flex-col md:flex-row lg:flex-row">
              <div>
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input bg-white px-[25px] py-[3px]"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input bg-white px-[25px] py-[3px]"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea bg-white px-[35px] py-[10px]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
