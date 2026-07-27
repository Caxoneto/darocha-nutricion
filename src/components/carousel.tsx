import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '../lib/utils';

export function Carousel() {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const slides = [
    {
      key: 'slide1',
      image: '/hero_darocha.jpg',
      tagKey: 'carousel.slide1Tag',
      titleKey: 'carousel.slide1Title',
      descKey: 'carousel.slide1Desc'
    },
    {
      key: 'slide2',
      image: '/method_step4.jpg',
      tagKey: 'carousel.slide2Tag',
      titleKey: 'carousel.slide2Title',
      descKey: 'carousel.slide2Desc'
    },
    {
      key: 'slide3',
      image: '/body_training.jpg',
      tagKey: 'carousel.slide3Tag',
      titleKey: 'carousel.slide3Title',
      descKey: 'carousel.slide3Desc'
    }
  ];

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
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
        aria-label="Fases del Protocolo DaRoCha Nutrición"
        className="overflow-hidden rounded-xl border border-outline-variant/30 shadow-2xl"
      >
        <div ref={emblaRef} className="embla">
          <div className="embla__container flex">
            {slides.map((slide, index) => (
              <div
                key={slide.key}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} de ${slides.length}`}
                className="embla__slide flex-[0_0_100%] min-w-0 relative"
              >
                <div className="relative h-[380px] md:h-[450px] w-full overflow-hidden p-md md:p-xl flex flex-col justify-end">
                  {/* Slide Background Image */}
                  <img
                    src={slide.image}
                    alt={t(slide.titleKey)}
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>

                  <div className="max-w-2xl relative z-10">
                    <span className="font-label-caps text-label-caps text-primary-container mb-xs inline-block border border-primary-container/40 bg-primary-container/20 backdrop-blur-md px-sm py-1 rounded">
                      {t(slide.tagKey)}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-headline-lg uppercase text-on-surface tracking-tight mb-xs">
                      {t(slide.titleKey)}
                    </h3>
                    <p className="font-body-lg text-body-md md:text-body-lg text-tertiary">
                      {t(slide.descKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-md flex items-center justify-center gap-sm">
        <button
          onClick={scrollPrev}
          aria-label="Anterior diapositiva"
          className="flex h-10 w-10 items-center justify-center rounded border border-outline-variant/40 bg-surface-container text-on-surface transition-all hover:bg-primary-container hover:text-[#050608] hover:border-primary-container active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex gap-xs items-center" role="tablist" aria-label="Selector de diapositiva">
          {slides.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === selectedIndex}
              aria-label={`Diapositiva ${index + 1}`}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                'h-1.5 transition-all rounded-full cursor-pointer',
                index === selectedIndex ? 'w-10 bg-primary-container shadow-[0_0_10px_rgba(255,87,26,0.6)]' : 'w-3 bg-outline-variant/40 hover:bg-outline-variant'
              )}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          aria-label="Siguiente diapositiva"
          className="flex h-10 w-10 items-center justify-center rounded border border-outline-variant/40 bg-surface-container text-on-surface transition-all hover:bg-primary-container hover:text-[#050608] hover:border-primary-container active:scale-95 cursor-pointer"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
