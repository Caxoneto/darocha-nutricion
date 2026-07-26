import { useTranslation } from 'react-i18next';
import { SpainFlagIcon, UKFlagIcon } from './flag-icons';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  const isEs = i18n.language === 'es';

  return (
    <button
      onClick={toggle}
      aria-label={isEs ? "Switch language to English" : "Cambiar idioma a Español"}
      title={isEs ? "Switch to English" : "Cambiar a Español"}
      className="inline-flex items-center gap-2 rounded-full border border-outline-variant/40 bg-surface-container/60 px-3 py-1.5 text-xs font-semibold text-on-surface transition-all hover:border-primary-container hover:bg-surface-container active:scale-95 shadow-sm"
    >
      {isEs ? (
        <>
          <UKFlagIcon className="w-5 h-5" />
          <span className="font-label-caps tracking-wider">EN</span>
        </>
      ) : (
        <>
          <SpainFlagIcon className="w-5 h-5" />
          <span className="font-label-caps tracking-wider">ES</span>
        </>
      )}
    </button>
  );
}
