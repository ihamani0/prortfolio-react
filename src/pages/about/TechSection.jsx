import React from "react";
import PatternRow from "../../ui/PatternRow";
import TitleTechGrid from "./TitleTechGrid";
import TechGrid from "./TechGrid";

function TechSection({ techGroups, t }) {
  return (
    <>
      <PatternRow className="ps-4">
        <TitleTechGrid title={t("front_end")} />
        <TechGrid Teches={techGroups.frontend} />
      </PatternRow>
      <div className="my-15"></div>
      <PatternRow className="ps-4">
        <TitleTechGrid title={t("back_end")} />
        <TechGrid Teches={techGroups.backend} />
      </PatternRow>

      <div className="my-15"></div>
      <PatternRow className="ps-4">
        <TitleTechGrid title={t("database")} />
        <TechGrid Teches={techGroups.database} />
      </PatternRow>

      <div className="my-15"></div>
      <PatternRow className="ps-4">
        <TitleTechGrid title={t("other")} />
        <TechGrid Teches={techGroups.other} />
      </PatternRow>
    </>
  );
}

export default TechSection;
