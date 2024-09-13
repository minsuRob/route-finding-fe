import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import * as Localization from "expo-localization";

import en from "./en.json";
import ko from "./ko.json";

const resources = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
};
let savedLanguage = "en";
// let savedLanguage = await AsyncStorage.getItem("language");
// console.log("Localization.locale");
// console.log(Localization.locale);
// not working
if (!savedLanguage) {
  savedLanguage = Localization.locale;
}

i18n.use(initReactI18next).init({
  resources: resources, // 현재 사용할 언어 모듈
  lng: savedLanguage,
  fallbackLng: "en", // lng를 사용할수 없을때 기본언어
  supportedLngs: ["en", "ko"], // 허용할 언어배열
  compatibilityJSON: "v3",
  interpolation: {
    escapeValue: false, // XSS 주입을 피하기 위해 설정
  },
});

export default i18n;
