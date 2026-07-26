import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '../lib/utils';

export function Carousel() {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const slides = [
    { key: 'slide1' },
    { key: 'slide2' },
    { key: 'slide3' },
    { key: 'slide4' },
  ];

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="relative">
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={t('carousel.slide1.title')}
        className="overflow-hidden rounded-xl border border-outline-variant/30"
      >
        <div ref={emblaRef} className="embla">
          <div className="embla__container flex">
            {slides.map((slide, index) => (
              <div
                key={slide.key}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${slides.length}`}
                className="embla__slide flex-[0_0_100%] min-w-0 relative"
              >
                <div className="relative h-[420px] md:h-[480px] w-full glass-card p-md md:p-xl flex flex-col justify-center">
                  <div className="max-w-2xl relative z-10">
                    <span className="font-label-caps text-label-caps text-primary-container mb-md inline-block border border-primary-container/30 bg-primary-container/10 px-sm py-1 rounded">
                      PASO 0{index + 1}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-headline-lg uppercase text-on-surface tracking-tight mb-sm">
                      {t(`carousel.${slide.key}.title`)}
                    </h3>
                    <p className="font-body-lg text-body-lg text-tertiary">
                      {t(`carousel.${slide.key}.desc`)}
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-md flex items-center justify-center gap-sm">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label={t('carousel.prev')}
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded border border-outline-variant/40 bg-surface-container text-on-surface transition-all hover:bg-primary-container hover:text-[#050608] hover:border-primary-container disabled:opacity-30 disabled:cursor-not-allowed'
          )}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex gap-xs items-center" role="tablist" aria-label="Slide picker">
          {slides.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === selectedIndex}
              aria-label={`${index + 1} of ${slides.length}`}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                'h-1.5 transition-all rounded-full',
                index === selectedIndex ? 'w-10 bg-primary-container shadow-[0_0_10px_rgba(255,87,26,0.6)]' : 'w-3 bg-outline-variant/40 hover:bg-outline-variant'
              )}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label={t('carousel.next')}
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded border border-outline-variant/40 bg-surface-container text-on-surface transition-all hover:bg-primary-container hover:text-[#050608] hover:border-primary-container disabled:opacity-30 disabled:cursor-not-allowed'
          )}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
