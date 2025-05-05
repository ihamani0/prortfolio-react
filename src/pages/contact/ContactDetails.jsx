/* eslint-disable no-unused-vars */
import { LocateFixedIcon, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

function ContactDetails({ t, phone, email, location }) {
  return (
    <div className="flex flex-col  py-4 ">
      <motion.div
        className="border-s-4 border-gray-700 dark:border-gray-200 px-4 py-6"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: -50 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <h1 className=" text-lg md:text-3xl lg:text-6xl font-semibold text-gray-700 dark:text-my-light">
          {t("contact_details")}
        </h1>
      </motion.div>
      <div className="col-span-full col-start-2 row-start-2 h-px bg-gray-950/15 dark:bg-white/10"></div>
      <motion.div
        className="my-4 px-4 flex flex-col lg:flex-row justify-between"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
      >
        <div className="border-s-4 border-s-gray-700 px-3 py-4 dark:border-s-gray-200 flex items-center text-gray-700 dark:text-gray-100/80 ">
          <Phone size={35} />
          <div className="flex flex-col ms-3">
            <p>{t("contact_Phone")}</p>
            <p>{phone}</p>
          </div>
        </div>

        <div className="border-s-4 border-s-gray-700 px-3 py-4 dark:border-s-gray-200 flex items-center text-gray-700 dark:text-gray-100/80 ">
          <LocateFixedIcon size={35} />
          <div className="flex flex-col ms-3">
            <p>{t("contact_location")}</p>
            <p>{location}</p>
          </div>
        </div>

        <div className="border-s-4 border-s-gray-700 px-3 py-4 dark:border-s-gray-200 flex items-center text-gray-700 dark:text-gray-100/80 ">
          <Mail size={35} />
          <div className="flex flex-col ms-3">
            <p>{t("contact_email")}</p>
            <p>{email}</p>
          </div>
        </div>
      </motion.div>
      <div className="col-span-full col-start-2 row-start-2 h-px bg-gray-950/15 dark:bg-white/10"></div>
    </div>
  );
}

export default ContactDetails;
