import i18n from 'i18next'
import I18NextHttpBackend from 'i18next-http-backend'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
    // Подключение бэкенда i18next
    .use(I18NextHttpBackend)
    // Автоматическое определение языка 
    .use(I18nextBrowserLanguageDetector)
    // модуль инициализации
    .use(initReactI18next)
    .init({
        // Стандартный язык
        fallbackLng: localStorage.getItem('i18nextLng') || 'ru',
        // debug: true,
        // Распознавание и кэширование языковых кук
        detection: {
            order: ['queryString', 'cookie'],
            cache: ['cookie']
        },
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false
        }
    })

export default i18n;