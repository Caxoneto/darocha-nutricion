import { useTranslation } from 'react-i18next';
import { Dumbbell, Brain, Apple, Heart } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Dumbbell,
  Brain,
  Apple,
  Heart,
};

export function Features() {
  const { t } = useTranslation();
  const items = t('features.items', { returnObjects: true }) as Array<{
    icon: string;
    title: string;
    desc: string;
  }>;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="label-tech text-solar mb-4 inline-block border border-solar/20 bg-solar/5 px-3 py-1">
            {t('features.sectionLabel')}
          </span>
          <h2 className="mt-4 text-5xl font-display font-black italic tracking-tighter text-white md:text-6xl uppercase">
            {t('features.title')}
          </h2>
          <p className="mt-6 text-lg text-glacier max-w-2xl mx-auto font-medium">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon] || Dumbbell;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-obsidian-700 p-8 transition-all hover:bg-obsidian-900 border-t border-glacier/10 hover:border-solar/50 hover:shadow-[0_0_30px_rgba(255,77,0,0.15)]"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-sm bg-solar/10 text-solar">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-glacier">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
