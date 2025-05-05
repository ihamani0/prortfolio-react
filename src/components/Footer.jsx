import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {

  const {t} = useTranslation();
  return (
    <div className="text-center dark:text-gray-200 text-gray-700">
      Copyright ©{new Date().getFullYear()}. {t("all_rights_resrved")} 
    </div>
  );
}

export default Footer;
