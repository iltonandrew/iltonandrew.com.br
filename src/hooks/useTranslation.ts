import { useRouter } from 'next/router';
import { useMemo } from 'react';

// Import translation data
import ptBR from '../../locales/pt-BR/common.json';
import en from '../../locales/en/common.json';

const translations = {
  'pt-BR': ptBR,
  'en': en,
};

export function useTranslation() {
  const router = useRouter();
  const locale = router.locale || 'pt-BR';
  
  const t = useMemo(() => {
    return (key: string) => {
      const keys = key.split('.');
      let value: any = translations[locale as keyof typeof translations];
      
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          return key; // Return the key if translation not found
        }
      }
      
      return typeof value === 'string' ? value : key;
    };
  }, [locale]);

  return { t, locale };
}