import { useQuery } from "@tanstack/react-query";
import { supabase } from "../config/supabase";

async function fetechProjectReview(lang, id) {
  const { data, error } = await supabase
    .from("projects")
    .select(
      `
                title,
                thumb_path,
                services,
                live_preview_url,
                github_link,
                project_technology(
                    technology(id,name)
                ),
                project_trans(
                    project_overview_${lang},
                    project_features_${lang}
                )
            )
            
        `
    )
    .eq("id", id)
    .single();

  if (error) throw error;

  const enhancedData = { ...data };

  if (data?.thumb_path) {
    const {
      data: { publicUrl },
      error: publicUrlError,
    } = supabase.storage
      .from("portfolie")  
      .getPublicUrl(data.thumb_path);

    if (publicUrlError) throw publicUrlError;
    enhancedData.publicProjectUrl = publicUrl;
  }
  return enhancedData;
}

export const useProjects = (lang, id) => {
  return useQuery({
    queryKey: ["project_review", lang, id],
    queryFn: () => fetechProjectReview(lang, id),

    // only run when both params are truthy
    enabled: Boolean(lang && id),
  });
};
