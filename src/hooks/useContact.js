import { useQuery } from "@tanstack/react-query";
import { supabase } from "../config/supabase";

const fetchContact = async () => {
  //   const suffix = getLangSuffix();

  const { data, error } = await supabase
    .from("about_me")
    .select(
      `
        contact(
            email,
            phone,
            location
        ),
        resume(
            social_media_links(facebook,instagram,github,linkidin,twitter_x)
        )
    `
    )
    .single();

  if (error) throw error;

  return data;
};

export const useContact = () => {
  return useQuery({
    queryKey: ["contact"], // refetch when lang changes
    queryFn: () => fetchContact(),
  });
};
