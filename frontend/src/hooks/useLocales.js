import { useTranslation } from 'react-i18next';
// '@mui
import { enUS, ptBR } from '@mui/material/locale';

// ----------------------------------------------------------------------

const LANGS = [
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
    icon: '/icons/flag_england.svg',
  },
  {
    label: 'Brazil',
    value: 'br',
    systemValue: ptBR,
    icon: '/icons/flag_brazil.svg',
  },
 
];

export default function useLocales() {
  const { i18n, t: translate } = useTranslation();
  const langStorage = localStorage.getItem('i18nextLng');
  const currentLang = LANGS.find((_lang) => _lang.value === langStorage) || LANGS[1];

  const handleChangeLanguage = (newlang) => {
    i18n.changeLanguage(newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate,
    currentLang,
    allLang: LANGS,
  };
}
