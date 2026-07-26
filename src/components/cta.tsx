import { useTranslation } from 'react-i18next';

export function CTA() {
  const { t } = useTranslation();

  return (
    <section className="relative py-32 bg-obsidian-900 border-t border-glacier/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-solar/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-5xl font-display font-black tracking-tighter text-white md:text-7xl italic uppercase">
          {t('cta.title')}
        </h2>
        <p className="mt-6 text-xl text-glacier font-medium">{t('cta.subtitle')}</p>
        <div className="mt-12">
          <button className="btn-primary h-16 px-12 text-xl font-black uppercase tracking-widest">
            {t('cta.button')}
          </button>
        </div>
        <p className="mt-6 text-sm text-glacier/50 font-mono tracking-widest">{t('cta.note')}</p>
      </div>
    </section>
  );
}
