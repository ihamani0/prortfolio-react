import React from "react";
import PatternRow from "../../ui/PatternRow";
import IconSocialMedia from "../../ui/IconSocialMedia";

function HeroSection({
  t,
  socialMedia: { email, github, facebook, instagram, twitter_x, linkidin },
}) {
  return (
    <PatternRow className="my-5 py-6 ">
      <div className="flex flex-col items-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-7xl text-gray-800 dark:text-gray-200 font-semibold font-dancing-script text-center rtl:font-mada">
          {t("Contact")}
        </h1>
        <p className="text-gray-600 dark:text-gray-200 text-sm md:text-base text-center">
          {t("desc_contact_email")}
          <a href={`mailto:${email}`} className="text-orange-600 ">
            {" "}
            {email}
          </a>{" "}
          {t("desc_contact_social")}
        </p>
        <div className="flex items-center justify-center gap-10">
          {github && <IconSocialMedia href={github} variant="github" />}
          {facebook && <IconSocialMedia href={facebook} variant="facebook" />}
          {instagram && (
            <IconSocialMedia href={instagram} variant="instagram" />
          )}
          {twitter_x && <IconSocialMedia href={twitter_x} variant="x" />}
          {linkidin && <IconSocialMedia href={linkidin} variant="linkedin" />}
        </div>
      </div>
    </PatternRow>
  );
}

export default HeroSection;
