import {createI18n} from 'vue-i18n'

const messages = {
    en: {
        home: 'Home',
        projects: 'Projects',
        curriculum: 'Curriculum'
    },
    pt: {
        home: 'Início',
        projects: 'Projetos',
        curriculum: 'Currículo'
    }
}


export default createI18n({
    legacy: false,
    locale: localStorage.getItem('lang') || 'en',
    fallbackLocale: 'en',
    messages
})
