import { useQuery } from "@tanstack/react-query";
import { supabase } from "../config/supabase";

const fetchResume = async (lang) => {
  //   const suffix = getLangSuffix();

  const { data, error } = await supabase
    .from("about_me")
    .select(
      `
        name_${lang},
        stack_${lang},
        contact (
          email,
          phone,
          location
        ),
        resume(
          resume_path,
          profile_path,
          social_media_links (
            facebook,
            github,
            instagram,
            linkidin
          ),
          experience (
            title_${lang},
            desc_${lang}
          ),
          formation (
            title_${lang},
            date_range ,
            location_${lang},
            desc_${lang}
          ),
          skill(
            title,
            desc_${lang}
          ),
          language(
            title_${lang},
            desc_${lang}
          ),
          centres(
            title_${lang}
          )
          
        )
    `
    )
    .single();

  if (error) {
    console.error("Supabase fetch error:", error); // Log for debugging
    throw error;
  }

  // Enhance data with public URLs
  const enhancedData = {
    ...data,
    contact: Array.isArray(data.contact) ? data.contact[0] : data.contact,
    resume: Array.isArray(data.resume) ? data.resume[0] : data.resume,
  };

  if (enhancedData?.resume?.resume_path) {
    const { data: resumeUrl } = supabase.storage
      .from("portfolie")
      .getPublicUrl(enhancedData.resume.resume_path);
    enhancedData.resume.resume_url = resumeUrl.publicUrl;
  }

  if (enhancedData?.resume?.profile_path) {
    const { data: profileUrl } = supabase.storage
      .from("portfolie")
      .getPublicUrl(enhancedData.resume.profile_path);
    enhancedData.resume.profile_url = profileUrl.publicUrl;
  }
  return enhancedData;
};

export const useResume = (lang) => {
  return useQuery({
    queryKey: ["resume", lang], // refetch when lang changes
    queryFn: () => fetchResume(lang),
  });
};
