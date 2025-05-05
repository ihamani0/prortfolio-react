import { useQuery } from "@tanstack/react-query";
import { supabase } from "../config/supabase";

const fetchAboutMe = async (lang) => {
  //   const suffix = getLangSuffix();

  const { data, error } = await supabase
    .from("about_me")
    .select(
      `
        name_${lang},
        short_desc_${lang},
        stack_${lang},
        long_desc_${lang},
        year_exp,
        avatar_path,
        timeline (
            year,
            title_${lang},
            desc_${lang}
            ),
        tech (
            name,
            category,
            svg_path ,
            desc_${lang}
            )
    `
    )
    .single();

  if (error) throw error;

  if (data?.tech?.length > 0) {
    data.tech = data.tech.map((tech) => {
      const publicUrl = supabase.storage
        .from("portfolie")
        .getPublicUrl(tech.svg_path)
        .data?.publicUrl;
      return { ...tech, svg: publicUrl };
    });
  }


  return data;
};

export const useAboutMe = (lang) => {
  return useQuery({
    queryKey: ["about_me", lang], // refetch when lang changes
    queryFn: () => fetchAboutMe(lang),
  });
};
