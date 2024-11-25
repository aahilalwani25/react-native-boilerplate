import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { languageResources } from "../global/languages/language-resource";

i18next.use(initReactI18next).init({
    compatibilityJSON:'v3',
    lng:'en',
    fallbackLng:'en',   //if package is searching for a key that is not available in json file, then fall back to eng
    resources: languageResources
})

export default i18next;