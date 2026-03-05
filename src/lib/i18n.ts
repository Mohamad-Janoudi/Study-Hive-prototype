import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "../../public/locales/en/common.json";
import arCommon from "../../public/locales/ar/common.json";

type Language = "en" | "ar";

const resources = {
  en: {
    common: enCommon
  },
  ar: {
    common: arCommon
  }
};

if (typeof window !== "undefined" && !i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    supportedLngs: ["en", "ar"],
    debug: false
  });
}

export type { Language };
export default i18n;
