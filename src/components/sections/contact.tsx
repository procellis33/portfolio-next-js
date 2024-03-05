"use client";

import React from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import useSectionInView from "@/hooks/useSectionInView";
import SectionHeading from "@/components/sections/common/sectionHeading";
import SubmitBtn from "@/components/sections/common/submitButton";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-[min(100%,38rem)] scroll-mt-28 text-center sm:mb-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:aleksey55121@gmail.com">
          aleksey55121@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        id="SubmitForm"
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error || data?.error) {
            const err = error
              ? error
              : data && data.error
                ? "Oops... Something went wrong. Is your email correct?"
                : "Something went wrong";
            toast.error(err);
            return;
          }

          const form = document.getElementById(
            "SubmitForm",
          ) as HTMLFormElement | null;
          if (form) {
            form.reset();
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="borderBlack h-14 rounded-lg p-4 px-4 outline-black transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="borderBlack my-3 h-52 max-h-[25rem] min-h-[13rem] rounded-lg p-4 outline-black transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
