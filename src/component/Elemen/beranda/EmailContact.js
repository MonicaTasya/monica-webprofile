"use client";
import { HA4 } from "../Typography";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const EmailContact = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    console.log("Form data:", {
      name: e.target.sender_name.value,
      email: e.target.sender_email.value,
      message: e.target.message.value,
    });

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then((res) => {
        console.log("SUCCESS!", res.status, res.text);
        setStatus("Email sent successfully!");
        e.target.reset();
        setTimeout(() => setStatus(""), 3000);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setStatus(`Failed to send: ${err.text || err.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <form
      className="flex flex-col gap-2 text-[3vw] md:text-[2vw] lg:text-[1vw]"
      onSubmit={sendEmail}
    >
      <label className="w-[80vw] md:w-[50vw] border-2 border-[#3F506E] rounded-lg p-2">
        <input
          placeholder="Your name"
          type="text"
          name="sender_name"
          required
          className="border-none outline-none bg-transparent w-[70vw] lg:w-[45vw]"
        />
      </label>
      <label className="w-[80vw] md:w-[50vw] border-2 border-[#3F506E] rounded-lg p-2">
        <input
          placeholder="Your Email"
          type="email"
          name="sender_email"
          required
          className="border-none outline-none bg-transparent w-[70vw] lg:w-[45vw]"
        />
      </label>
      <label className="flex flex-col w-[80vw] md:w-[50vw] border-2 border-[#3F506E] rounded-lg p-2">
        <textarea
          placeholder="Your Message"
          name="message"
          rows="3"
          required
          className="border-none outline-none bg-transparent"
        />
      </label>
      <button type="submit" disabled={loading} className="w-fit">
        <HA4 className="text-[#152746] px-3 border-3 border-[#152746] cursor-pointer hover:text-white bg-transparent hover:bg-[#152746] duration-400 rounded-3xl">
          {loading ? "Sending..." : "Send"}
        </HA4>
      </button>
      {status && (
        <p
          className={`text-sm ${
            status.includes("Failed") ? "text-red-600" : "text-[#152746]"
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
};

export default EmailContact;
