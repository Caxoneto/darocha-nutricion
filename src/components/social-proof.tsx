import { useTranslation } from 'react-i18next';

export function SocialProof() {
  const { t } = useTranslation();
  const stats = t('socialProof.stats', { returnObjects: true }) as Array<{
    value: string;
    label: string;
  }>;

  return (
    <section className="border-y border-glacier/10 bg-obsidian-900 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-display font-black tracking-tighter text-white md:text-5xl italic uppercase">
            {t('socialProof.title')}
          </h2>
          <p className="mt-4 text-glacier text-lg">{t('socialProof.subtitle')}</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl font-display font-black text-solar italic tracking-tighter">
                {stat.value}
              </div>
              <div className="mt-4 text-sm font-bold uppercase tracking-widest text-glacier font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
