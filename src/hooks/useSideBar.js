import { useQuery } from "@tanstack/react-query";
import { supabase } from "../config/supabase";

const fetchdata = async (lang) => {
  //   const suffix = getLangSuffix();

  const { data, error } = await supabase
    .from("about_me")
    .select(
      `
          name_${lang},
          stack_${lang},
          avatar_path
      `
    )
    .single();

  if (error) throw error;

  const avatarPath = data.avatar_path;
  const {
    data: { publicUrl },
  } = supabase.storage
    .from("portfolie") // Replace with your bucket name
    .getPublicUrl(avatarPath);

  return { ...data, AvatarpublicUrl: publicUrl };
};

export const useSideBar = (lang) => {
  return useQuery({
    queryKey: ["sidebar", lang], // refetch when lang changes
    queryFn: () => fetchdata(lang),
  });
};
