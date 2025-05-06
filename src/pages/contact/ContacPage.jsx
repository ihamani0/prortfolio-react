/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import PatternRow from "../../ui/PatternRow";
import PatternDots from "../../ui/PatternDots";
import ContactForm from "./ContactForm";

import IconSocialMedia from "../../ui/IconSocialMedia";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { LocateFixedIcon, Mail, Phone } from "lucide-react";
import { useContact } from "../../hooks/useContact";
import Spinner from "../../ui/Spinner";
import ErrorMessage from "../../components/ErrorMessage";
import EmptyState from "../../components/EmptyState";
import BackgroundDeco from "../../ui/BackgroundDeco";
import HeroSection from "./HeroSection";
import ContactDetails from "./ContactDetails";
import Signature from "./Signature";

function ContacPage() {
  const { t } = useTranslation();

  const { data, error, isLoading } = useContact();
  const { email, phone, location } = data?.contact?.[0] || {};
  const socialMedia = data?.resume?.[0]?.social_media_links?.[0] || {};

  useEffect(() => {
    document.title = "HAMANI || Contact";
  }, []);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage message={error?.message} />;
  // Add specific check for empty data if needed
  if (!data) return <EmptyState />;

  return (
    <div className="min-h-screen relative rtl:font-mada">


      <section className="flex flex-col">
        <div className="my-10"></div>

        <HeroSection t={t} socialMedia={socialMedia} email={email} />

        <div className="my-15"></div>

        <ContactDetails t={t} email={email} phone={phone} location={location} />

        <div className="my-15"></div>

        <PatternRow>
          <motion.div
            className="border-s-4 border-gray-700 dark:border-gray-300 px-4 py-6 spcae-y-4"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -50 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <h1 className=" text-lg md:text-3xl lg:text-6xl font-semibold text-gray-700 dark:text-gray-200">
              {t("get_into_touch")}
            </h1>
            <p className="text-gray-900 dark:text-gray-200 md:w-1/2 mt-3">
              {t("get_into_touch_desc")}
            </p>
          </motion.div>
        </PatternRow>

        <div className="my-15"></div>

        <PatternDots className="">
          <div className="max-w-5xl mx-auto ">
            <ContactForm />
          </div>
        </PatternDots>

        <div className="my-10"></div>

        <Signature />
      </section>
    </div>
  );
}

export default ContacPage;
