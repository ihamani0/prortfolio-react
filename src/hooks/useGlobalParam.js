import { useContext } from "react";
import { ThemeContext, LanguageContext, DataContext } from "../contexts/contexts";

// export const useGlobalParam = () => {
//   const context = useContext(ParamContext);
//   if (context === undefined)
//     throw new Error("You must hook inside Provider Cities");
//   return context;
// };

export const useThemeContext = ()=>{
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("You must hook inside Provider Cities");
  return context;
}

export const useLanguageContext = ()=>{
  const context = useContext(LanguageContext);
  if (context === undefined)
    throw new Error("You must hook inside Provider Cities");
  return context;
}



export const useDataContext = ()=>{
  const context = useContext(DataContext);
  if (context === undefined)
    throw new Error("You must hook inside Provider Cities");
  return context;
}
