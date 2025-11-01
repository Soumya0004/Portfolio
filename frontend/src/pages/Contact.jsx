import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_mug514e',       // your Service ID
        'template_6icabrj',      // your Template ID
        formRef.current,
        'pIY1fJ98Uj6YK-ZXI'      // your Public Key
      )
      .then(
        (result) => {
         toast.success ("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Try again later.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 graph-bg">
      <div className="text-3xl text-[#9190ee] py-5 text-center">
        <span>{"{"}</span>
        <span>#</span>
        <span>{"}"}</span>
      </div>

      <div className="flex items-center justify-center text-center">
        <p className="text-4xl sm:text-6xl lg:text-[8rem] font-pixel text-white leading-tight">
          <span>{"<"}</span>
          <span className="text-white">"</span>
          <span className="text-[#9796fa] px-2 sm:px-3">contact_me</span>
          <span className="text-white">"</span>
          <span>{">"}</span>
        </p>
      </div>

      <p className="text-white text-base sm:text-lg max-w-2xl mx-auto text-center leading-relaxed mt-6">
        Let's build something amazing together! Whether it's an idea, project, or collaboration — feel free to reach out anytime.
      </p>

      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="mt-16 max-w-3xl mx-auto text-[#9190ee] text-lg sm:text-xl flex flex-col gap-y-6 px-4 sm:px-8"
      >
        <div className="flex flex-col">
          <label htmlFor="name">_name</label>
          <input
            name="name"
            id="name"
            type="text"
            className="border-b-2 border-gray-600 bg-transparent text-white focus:outline-none py-1"
            placeholder="Your name"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">_email</label>
          <input
            name="email"
            id="email"
            type="email"
            className="border-b-2 border-gray-600 bg-transparent text-white focus:outline-none py-1"
            placeholder="Your email"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message">_message</label>
          <textarea
            name="message"
            id="message"
            rows={4}
            className="border-b-2 border-gray-600 bg-transparent text-white focus:outline-none py-1"
            placeholder="Write your message..."
            required
          />
        </div>

        <div className="flex items-center justify-center pt-6">
          <button
            type="submit"
            className="bg-[#9796fa] text-[#1a1a1b] px-6 py-2 rounded-md transition text-xl"
          >
            <span className="text-white text-2xl">{"{ send }"}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
