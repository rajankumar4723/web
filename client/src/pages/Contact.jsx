import React, { useState } from "react";
import F from "./F";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submitHandler = async (e) => {

    e.preventDefault();
    console.log(name, email, message);
    // try {
    //   const { data } = await axios.post(
    //     `${server}/users/new`,
    //     {
    //       name,
    //       email,
    //       password,
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   toast.success(data.message);
    // } catch (error) {
    //   toast.error(error.response.data.message);
    //   console.log(error);
    //   z;
    // }
  };
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-8 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-4xl font-bold text-center mb-6">Contact Me</h1>
          <form className="space-y-6" onSubmit={submitHandler}>
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Your Email"
              />
            </div>
           
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                rows="4"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-cyan-600 text-white font-semibold rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <F />
    </>
  );
};

export default Contact;
