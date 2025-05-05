import { useQuery } from "@tanstack/react-query";
import { supabase } from "../config/supabase";

const fetchPortfolio = async (lang) => {
  const { data, error } = await supabase
    .from("portfolio")
    .select(
      `
        desc_${lang},
        projects (
            id,
            title,
            thumb_path
        )
        
    `
    )
    .single();

  if (data?.projects?.length > 0) {
    data.projects = data.projects.map((project) => {
      const publicUrl = supabase.storage
        .from("portfolie")
        .getPublicUrl(project.thumb_path).data?.publicUrl;
      return { ...project, publicProjectUrl: publicUrl };
    });
  }

  if (error) throw error;

  return data;
};

export const usePortfolio = (lang) => {
  return useQuery({
    queryKey: ["portfolio", lang], // refetch when lang changes
    queryFn: () => fetchPortfolio(lang),
  });
};
