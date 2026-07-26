import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-glacier/10 bg-obsidian-900 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <div className="text-xl font-display font-bold italic tracking-tighter text-white uppercase">
              {t('footer.brand')}
            </div>
            <div className="mt-1 text-xs font-mono tracking-widest text-glacier/50 uppercase">{t('footer.tagline')}</div>
          </div>
          <div className="text-xs font-mono text-glacier/50 tracking-widest uppercase">
            © {new Date().getFullYear()} {t('footer.brand')}. {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
}
