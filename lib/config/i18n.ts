import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as Localization from 'expo-localization';
import en from './locales/en.json';
export const LANGUAGES = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    schema: en,
  },
} as const;

export type LanguageCode = keyof typeof LANGUAGES;

const getDeviceLanguage = (): LanguageCode => {
  const locales = Localization.getLocales();

  if (locales.length > 0) {
    const deviceLanguage = locales[0].languageCode as LanguageCode;

    if (Object.keys(LANGUAGES).includes(deviceLanguage)) {
      return deviceLanguage;
    }
  }

  return 'en';
};

const resources = {
  en: {translation: en},
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getDeviceLanguage(),
    fallbackLng: 'en',
    defaultNS: 'translation',
    ns: ['translation'],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    keySeparator: '.',
    nsSeparator: ':',
    returnEmptyString: false,
  });



Object.values(LANGUAGES).forEach(lang => {
  if (Object.keys(lang.schema).length > 0) {
    i18n.addResourceBundle(lang.code, 'translation', lang.schema, true, true);
  }
});

export const changeLanguage = async (languageCode: LanguageCode): Promise<void> => {
  await i18n.changeLanguage(languageCode);
};

export const getAvailableLanguages = () => {
  return Object.entries(LANGUAGES).map(([code, info]) => ({
    ...info,
  }));
};

export default i18n;
