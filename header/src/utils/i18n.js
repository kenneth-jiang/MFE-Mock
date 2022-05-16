import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    description: {
                        part1: "A New Hope",
                        part2: "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
                    }
                },
            },
            es: {
                translation: {
                    description: {
                        part1: "Una nueva esperanza",
                        part2: "Es un período de guerra civil.\r\nRebeldes naves espaciales, golpeando a\r\n de una base oculta, han ganado su primera victoria contra el malvado Imperio Galáctico. Durante la batalla, Rebel\r\nspies logró robar secretos\r\nplanos al arma del Imperio\r\nultima, el DEATH\r\nSTAR, un espacio blindado\r\nstation con suficiente poder\r\nto destruir un planeta entero.\r\n\n\n\nPursued by the Empire's\r\nsinister agents, Princess\r",
                    }
                },
            },
            de: {
                translation: {
                    description: {
                        part1: "Eine neue Hoffnung",
                        part2: "Es ist eine Periode des Bürgerkrieges.\r\nRebel Raumschiffe, auffallend\r\n von einer versteckten Basis, haben gewonnen \r\nihr erste Sieg gegen\r\n das böse Galaktische Reich.\r\n\n\n\n Während der Schlacht, Rebel\r\nspies schaffte es, geheime \r\nplans zu stehlen, um die Empire's\r\nultimate Waffe, die DEATH\r\nSTAR, ein gepanzerter Raum\r\nstation mit genug Power\r\nto zerstören einen ganzen Planeten \ n\r\nPursued by the Empire's\r\nsinister Agenten, Princess",
                    }
                },
            },

        },
    })

export default i18n;
