
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel } from './components/carousel';
import { LanguageSwitcher } from './components/language-switcher';
import { InstagramIcon } from './components/instagram-icon';
import './i18n';

function App() {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('method');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<'body' | 'mind' | 'nutrition'>('body');
  const [activeMethodStep, setActiveMethodStep] = useState<number>(0);

  const methodSteps = [
    {
      number: '01',
      titleKey: 'method.step1Title',
      descKey: 'method.step1Desc',
      image: '/method_step1.jpg',
      badge: '01. EVALUACIÓN & DIAGNÓSTICO'
    },
    {
      number: '02',
      titleKey: 'method.step2Title',
      descKey: 'method.step2Desc',
      image: '/method_step2.jpg',
      badge: '02. CONTROL & PLAN DE ALIMENTACIÓN'
    },
    {
      number: '03',
      titleKey: 'method.step3Title',
      descKey: 'method.step3Desc',
      image: '/method_step3.jpg',
      badge: '03. DISEÑO DE PROTOCOLO'
    },
    {
      number: '04',
      titleKey: 'method.step4Title',
      descKey: 'method.step4Desc',
      image: '/method_step4.jpg',
      badge: '04. EJECUCIÓN E ITERACIÓN'
    }
  ];

  const serviceImages = {
    body: {
      src: '/body_training.jpg',
      alt: 'Entrenamiento Físico de Élite',
      badge: 'Fuerza & Rendimiento'
    },
    mind: {
      src: '/mind_conditioning.jpg',
      alt: 'Acondicionamiento Cognitivo y Foco',
      badge: 'Claridad Mental & Foco'
    },
    nutrition: {
      src: '/nutrition_plan.jpg',
      alt: 'Nutrición de Precisión y Plan de Alimentación',
      badge: 'Nutrición de Precisión'
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['method', 'services', 'impact', 'team'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* TopNavBar Component */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-xl border-b border-outline-variant/20" aria-label="Navegación principal">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-gutter py-sm">
          <a href="#" className="flex items-center gap-xs cursor-pointer" aria-label="Roman Method inicio">
            <img alt="Roman Method Logo" className="h-9 w-auto object-contain" src="/logo.svg" />
            <span className="font-display-xl text-headline-md tracking-tighter text-primary-container uppercase hidden md:block">
              {t('footer.brand')}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-md font-label-caps text-label-caps">
            <button
              onClick={() => scrollToSection('method')}
              aria-label={t('nav.method')}
              className={`transition-all duration-300 uppercase ${
                activeSection === 'method'
                  ? 'text-primary font-bold border-b-2 border-primary-container pb-1'
                  : 'text-tertiary hover:text-on-surface hover:text-primary-container'
              }`}
            >
              {t('nav.method')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              aria-label={t('nav.services')}
              className={`transition-all duration-300 uppercase ${
                activeSection === 'services'
                  ? 'text-primary font-bold border-b-2 border-primary-container pb-1'
                  : 'text-tertiary hover:text-on-surface hover:text-primary-container'
              }`}
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('impact')}
              aria-label={t('nav.impact')}
              className={`transition-all duration-300 uppercase ${
                activeSection === 'impact'
                  ? 'text-primary font-bold border-b-2 border-primary-container pb-1'
                  : 'text-tertiary hover:text-on-surface hover:text-primary-container'
              }`}
            >
              {t('nav.impact')}
            </button>
            <button
              onClick={() => scrollToSection('team')}
              aria-label={t('nav.team')}
              className={`transition-all duration-300 uppercase ${
                activeSection === 'team'
                  ? 'text-primary font-bold border-b-2 border-primary-container pb-1'
                  : 'text-tertiary hover:text-on-surface hover:text-primary-container'
              }`}
            >
              {t('nav.team')}
            </button>
          </div>

          <div className="flex items-center gap-xs sm:gap-sm font-label-caps text-label-caps">
            <a
              href="https://instagram.com/romanmethod"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Síguenos en Instagram"
              title="Instagram @romanmethod"
              className="inline-flex items-center justify-center p-2 rounded-full border border-outline-variant/40 bg-surface-container/60 text-tertiary hover:text-primary-container hover:border-primary-container transition-all active:scale-95 shadow-sm"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <LanguageSwitcher />
            <button
              onClick={() => scrollToSection('team')}
              aria-label={t('nav.consultation')}
              className="hidden sm:block bg-primary-container text-[#050608] px-sm py-xs rounded hover:bg-primary transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(255,87,26,0.4)] uppercase font-semibold"
            >
              {t('nav.consultation')}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden flex items-center justify-center p-xs text-on-surface hover:text-primary transition-colors focus:outline-none"
            >
              <span className="material-symbols-outlined" style={{ fontSize: "28px" }}>
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0a0c10]/95 backdrop-blur-2xl border-b border-outline-variant/30 px-gutter py-md flex flex-col gap-md animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-xs">
              <button
                onClick={() => scrollToSection('method')}
                className={`text-left py-sm font-label-caps text-[14px] uppercase transition-colors border-b border-outline-variant/10 ${
                  activeSection === 'method' ? 'text-primary-container font-bold' : 'text-tertiary hover:text-on-surface'
                }`}
              >
                {t('nav.method')}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`text-left py-sm font-label-caps text-[14px] uppercase transition-colors border-b border-outline-variant/10 ${
                  activeSection === 'services' ? 'text-primary-container font-bold' : 'text-tertiary hover:text-on-surface'
                }`}
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection('impact')}
                className={`text-left py-sm font-label-caps text-[14px] uppercase transition-colors border-b border-outline-variant/10 ${
                  activeSection === 'impact' ? 'text-primary-container font-bold' : 'text-tertiary hover:text-on-surface'
                }`}
              >
                {t('nav.impact')}
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className={`text-left py-sm font-label-caps text-[14px] uppercase transition-colors border-b border-outline-variant/10 ${
                  activeSection === 'team' ? 'text-primary-container font-bold' : 'text-tertiary hover:text-on-surface'
                }`}
              >
                {t('nav.team')}
              </button>
            </div>
            <button
              onClick={() => scrollToSection('team')}
              className="w-full bg-primary-container text-[#050608] py-sm rounded uppercase font-semibold font-label-caps text-label-caps text-center shadow-[0_0_20px_rgba(255,87,26,0.4)] active:scale-95"
            >
              {t('nav.consultation')}
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-xl overflow-hidden min-h-[90vh] flex items-center bg-obsidian-glow">
        <div className="max-w-container-max mx-auto px-gutter w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <div className="flex flex-col gap-md">
            <div className="inline-flex items-center gap-xs font-label-caps text-label-caps text-primary uppercase border border-primary/30 px-xs py-base rounded w-fit bg-primary/5">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: "16px" }}>bolt</span>
              {t('hero.badge')}
            </div>
            <h1 className="font-display-xl text-headline-lg-mobile md:text-display-xl uppercase text-on-surface leading-tight tracking-tighter">
              {i18n.language === 'es' ? (
                <>
                  TU MEJOR VERSIÓN <br />
                  <span className="text-gradient">NO ESPERA.</span>
                </>
              ) : (
                <>
                  YOUR BEST SELF <br />
                  <span className="text-gradient">WON'T WAIT.</span>
                </>
              )}
            </h1>
            <p className="font-body-lg text-body-lg text-tertiary max-w-xl">{t('hero.subtitle')}</p>
            <div className="flex flex-wrap gap-sm mt-sm">
              <button
                onClick={() => scrollToSection('team')}
                className="bg-primary-container text-[#050608] font-label-caps text-label-caps px-md py-sm rounded hover:bg-primary transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(255,87,26,0.4)] uppercase font-semibold"
              >
                {t('hero.cta1')}
              </button>
              <button
                onClick={() => scrollToSection('method')}
                className="border border-outline text-on-surface font-label-caps text-label-caps px-md py-sm rounded hover:bg-surface-variant transition-all duration-300 active:scale-95 uppercase flex items-center gap-xs"
              >
                <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>play_arrow</span> {t('hero.cta2')}
              </button>
            </div>
          </div>

          <div className="relative h-[60vh] lg:h-[80vh] w-full rounded-xl overflow-hidden glass-card border-none">
            <img
              alt="Atleta de alto rendimiento"
              className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-90"
              src="/hero_athlete.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-sm left-sm right-sm flex gap-xs">
              <div className="bg-surface/80 backdrop-blur-md border border-outline-variant/30 p-sm rounded-lg flex-1">
                <div className="text-primary-container font-headline-md text-headline-md">{t('hero.stat1Value')}</div>
                <div className="font-label-caps text-label-caps text-tertiary uppercase">{t('hero.stat1Label')}</div>
              </div>
              <div className="bg-surface/80 backdrop-blur-md border border-outline-variant/30 p-sm rounded-lg flex-1">
                <div className="text-primary-container font-headline-md text-headline-md">{t('hero.stat2Value')}</div>
                <div className="font-label-caps text-label-caps text-tertiary uppercase">{t('hero.stat2Label')}</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* The Method Section */}
      <section className="py-xl bg-background relative overflow-hidden" id="method">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 80% 50%, rgba(255, 87, 26, 0.1) 0%, transparent 50%)", pointerEvents: "none" }}></div>
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-xl items-center">
          
          {/* Left Column: 4 Interactive Method Steps */}
          <div className="lg:col-span-6 flex flex-col gap-md order-2 lg:order-1">
            <div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-on-surface">
                <span className="text-tertiary-fixed-dim">{t('method.sectionLabel')}</span> <br />
                <span className="text-gradient">{t('method.title')}</span>
              </h2>
              <p className="font-body-md text-body-md text-tertiary mt-xs">{t('method.subtitle')}</p>
            </div>

            <div className="flex flex-col gap-xs sm:gap-sm">
              {methodSteps.map((step, index) => {
                const isActive = activeMethodStep === index;
                return (
                  <button
                    key={step.number}
                    onClick={() => setActiveMethodStep(index)}
                    className={`text-left p-sm rounded-lg flex gap-sm border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'glass-card border-primary-container bg-surface-container/90 shadow-[0_0_20px_rgba(255,87,26,0.25)]'
                        : 'bg-surface-container/30 border-outline-variant/20 hover:border-outline-variant/50 hover:bg-surface-container/50'
                    }`}
                  >
                    <div className={`font-label-caps text-label-caps pt-0.5 font-bold ${
                      isActive ? 'text-primary-container' : 'text-tertiary'
                    }`}>
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-label-caps text-label-caps uppercase mb-xs transition-colors ${
                        isActive ? 'text-primary-container font-bold' : 'text-on-surface'
                      }`}>
                        {t(step.titleKey)}
                      </h3>
                      <p className="font-body-md text-body-md text-tertiary text-[13px] sm:text-[14px]">
                        {t(step.descKey)}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Layered Stacked Image Carousel */}
          <div className="lg:col-span-6 relative h-[420px] lg:h-[500px] order-1 lg:order-2">
            {/* Peek-behind Stacked Image Card */}
            <div className="absolute inset-0 transform translate-x-3 translate-y-3 scale-[0.96] rounded-xl overflow-hidden glass-card border border-outline-variant/20 opacity-30 pointer-events-none">
              <img
                src={methodSteps[(activeMethodStep + 1) % methodSteps.length].image}
                alt="Próxima fase"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Active Main Image Display */}
            <div className="relative w-full h-full rounded-xl overflow-hidden glass-card border border-outline-variant/40 shadow-2xl transition-all duration-500">
              <img
                key={activeMethodStep}
                alt={t(methodSteps[activeMethodStep].titleKey)}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 mix-blend-luminosity animate-in fade-in duration-500"
                src={methodSteps[activeMethodStep].image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
              
              {/* Badge & Navigation Controls Overlay */}
              <div className="absolute top-md right-md glass-card px-sm py-xs rounded flex items-center gap-xs">
                <div className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_8px_rgba(255,87,26,0.8)]"></div>
                <span className="font-label-caps text-[10px] sm:text-label-caps uppercase text-on-surface tracking-wider">
                  {methodSteps[activeMethodStep].badge}
                </span>
              </div>

              {/* Step Navigation Dots */}
              <div className="absolute bottom-md left-md right-md flex justify-between items-center">
                <div className="flex gap-xs">
                  {methodSteps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveMethodStep(i)}
                      aria-label={`Ir al paso ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        activeMethodStep === i ? 'w-8 bg-primary-container shadow-[0_0_8px_rgba(255,87,26,0.8)]' : 'w-2 bg-outline-variant/50 hover:bg-outline-variant'
                      }`}
                    />
                  ))}
                </div>
                <div className="font-label-caps text-[10px] text-tertiary bg-background/80 px-xs py-1 rounded border border-outline-variant/30">
                  PASO {activeMethodStep + 1} DE {methodSteps.length}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Method Carousel Slider */}
        <div className="max-w-container-max mx-auto px-gutter mt-xl">
          <div className="mb-md">
            <span className="font-label-caps text-label-caps text-primary uppercase">{t('method.sectionLabel')} EN ACCIÓN</span>
            <h3 className="font-headline-md text-headline-md uppercase text-on-surface">FASES DEL PROTOCOLO</h3>
          </div>
          <Carousel />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-xl bg-surface-container-lowest" id="services">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="mb-lg text-center md:text-left">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-on-surface">
              <span className="text-tertiary-fixed-dim">{t('trident.sectionLabel')}</span> <br />
              <span className="text-gradient">{t('trident.title')}</span>
            </h2>
            <p className="font-body-md text-body-md text-tertiary mt-sm max-w-2xl">{t('trident.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-center">
            {/* Interactive Cards Column */}
            <div className="lg:col-span-6 grid grid-cols-1 gap-sm">
              {/* Card 1: Body */}
              <button
                onClick={() => setSelectedService('body')}
                className={`text-left glass-card rounded-xl p-md flex flex-col gap-xs relative overflow-hidden transition-all duration-300 cursor-pointer ${
                  selectedService === 'body'
                    ? 'border-primary-container shadow-[0_0_30px_rgba(255,87,26,0.3)] bg-surface-container/80'
                    : 'hover:border-outline-variant/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded bg-surface-variant flex items-center justify-center border border-outline-variant/50">
                    <span className="material-symbols-outlined text-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>fitness_center</span>
                  </div>
                  <span className={`font-label-caps text-[10px] uppercase px-xs py-0.5 rounded ${
                    selectedService === 'body' ? 'bg-primary-container text-[#050608] font-bold' : 'text-tertiary bg-surface-variant/40'
                  }`}>
                    01 / {t('trident.bodyTitle')}
                  </span>
                </div>
                <h3 className="font-headline-md text-[22px] uppercase text-on-surface mt-xs">{t('trident.bodyTitle')}</h3>
                <p className="font-body-md text-body-md text-tertiary text-[14px]">{t('trident.bodyDesc')}</p>
                <div className="w-full h-1 bg-surface-variant rounded mt-xs overflow-hidden">
                  <div className={`h-full bg-primary-container transition-all duration-500 ${selectedService === 'body' ? 'w-full shadow-[0_0_10px_rgba(255,87,26,0.8)]' : 'w-[20%]'}`}></div>
                </div>
              </button>

              {/* Card 2: Mind */}
              <button
                onClick={() => setSelectedService('mind')}
                className={`text-left glass-card rounded-xl p-md flex flex-col gap-xs relative overflow-hidden transition-all duration-300 cursor-pointer ${
                  selectedService === 'mind'
                    ? 'border-secondary shadow-[0_0_30px_rgba(198,198,204,0.3)] bg-surface-container/80'
                    : 'hover:border-outline-variant/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded bg-surface-variant flex items-center justify-center border border-outline-variant/50">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                  </div>
                  <span className={`font-label-caps text-[10px] uppercase px-xs py-0.5 rounded ${
                    selectedService === 'mind' ? 'bg-secondary text-[#050608] font-bold' : 'text-tertiary bg-surface-variant/40'
                  }`}>
                    02 / {t('trident.mindTitle')}
                  </span>
                </div>
                <h3 className="font-headline-md text-[22px] uppercase text-on-surface mt-xs">{t('trident.mindTitle')}</h3>
                <p className="font-body-md text-body-md text-tertiary text-[14px]">{t('trident.mindDesc')}</p>
                <div className="w-full h-1 bg-surface-variant rounded mt-xs overflow-hidden">
                  <div className={`h-full bg-secondary transition-all duration-500 ${selectedService === 'mind' ? 'w-full shadow-[0_0_10px_rgba(198,198,204,0.8)]' : 'w-[20%]'}`}></div>
                </div>
              </button>

              {/* Card 3: Nutrition */}
              <button
                onClick={() => setSelectedService('nutrition')}
                className={`text-left glass-card rounded-xl p-md flex flex-col gap-xs relative overflow-hidden transition-all duration-300 cursor-pointer ${
                  selectedService === 'nutrition'
                    ? 'border-primary shadow-[0_0_30px_rgba(255,181,158,0.3)] bg-surface-container/80'
                    : 'hover:border-outline-variant/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded bg-surface-variant flex items-center justify-center border border-outline-variant/50">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant_menu</span>
                  </div>
                  <span className={`font-label-caps text-[10px] uppercase px-xs py-0.5 rounded ${
                    selectedService === 'nutrition' ? 'bg-primary text-[#050608] font-bold' : 'text-tertiary bg-surface-variant/40'
                  }`}>
                    03 / {t('trident.nutritionTitle')}
                  </span>
                </div>
                <h3 className="font-headline-md text-[22px] uppercase text-on-surface mt-xs">{t('trident.nutritionTitle')}</h3>
                <p className="font-body-md text-body-md text-tertiary text-[14px]">{t('trident.nutritionDesc')}</p>
                <div className="w-full h-1 bg-surface-variant rounded mt-xs overflow-hidden">
                  <div className={`h-full bg-primary transition-all duration-500 ${selectedService === 'nutrition' ? 'w-full shadow-[0_0_10px_rgba(255,181,158,0.8)]' : 'w-[20%]'}`}></div>
                </div>
              </button>
            </div>

            {/* Dynamic Image Preview Column */}
            <div className="lg:col-span-6 relative h-[420px] lg:h-[480px] rounded-xl overflow-hidden glass-card border border-outline-variant/40">
              <img
                key={selectedService}
                src={serviceImages[selectedService].src}
                alt={serviceImages[selectedService].alt}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 animate-in fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-md left-md right-md flex items-center justify-between">
                <div className="glass-card px-sm py-xs rounded flex items-center gap-xs">
                  <div className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_8px_rgba(255,87,26,0.8)]"></div>
                  <span className="font-label-caps text-label-caps uppercase text-on-surface tracking-wider">
                    {serviceImages[selectedService].badge}
                  </span>
                </div>
                <span className="font-label-caps text-[10px] uppercase text-tertiary bg-background/80 backdrop-blur-md border border-outline-variant/40 px-xs py-1 rounded">
                  {selectedService.toUpperCase()} PROTOCOL
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-xl bg-surface-container-lowest border-t border-outline-variant/10" id="impact">
        <div className="max-w-container-max mx-auto px-gutter">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-center text-on-surface mb-lg">
            {i18n.language === 'es' ? (
              <>
                IMPACTO <span className="text-gradient">PROBADO</span>
              </>
            ) : (
              <>
                PROVEN <span className="text-gradient">IMPACT</span>
              </>
            )}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-xs md:gap-sm">
            <div className="glass-card p-sm md:p-md rounded-lg flex flex-col items-center justify-center text-center">
              <div className="font-display-xl text-[40px] md:text-display-xl text-primary-container">{t('impact.stat1Value')}</div>
              <div className="font-label-caps text-[10px] md:text-label-caps uppercase text-tertiary mt-xs">{t('impact.stat1Label')}</div>
            </div>
            <div className="glass-card p-sm md:p-md rounded-lg flex flex-col items-center justify-center text-center">
              <div className="font-display-xl text-[40px] md:text-display-xl text-on-surface">{t('impact.stat2Value')}</div>
              <div className="font-label-caps text-[10px] md:text-label-caps uppercase text-tertiary mt-xs">{t('impact.stat2Label')}</div>
            </div>
            <div className="glass-card p-sm md:p-md rounded-lg flex flex-col items-center justify-center text-center">
              <div className="font-display-xl text-[40px] md:text-display-xl text-on-surface">{t('impact.stat3Value')}</div>
              <div className="font-label-caps text-[10px] md:text-label-caps uppercase text-tertiary mt-xs">{t('impact.stat3Label')}</div>
            </div>
            <div className="glass-card p-sm md:p-md rounded-lg flex flex-col items-center justify-center text-center">
              <div className="font-display-xl text-[40px] md:text-display-xl text-primary-container">{t('impact.stat4Value')}</div>
              <div className="font-label-caps text-[10px] md:text-label-caps uppercase text-tertiary mt-xs">{t('impact.stat4Label')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-xl relative bg-background overflow-hidden" id="team">
        <div className="absolute inset-0 bg-primary-container/5"></div>
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="glass-card rounded-xl p-lg border border-primary-container/30 text-center max-w-3xl mx-auto flex flex-col items-center shadow-[0_0_50px_rgba(255,87,26,0.1)]">
            <span className="material-symbols-outlined text-primary-container text-[48px] mb-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
              shield_person
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-on-surface mb-sm">
              <span className="text-gradient">{t('cta.title')}</span>
            </h2>
            <p className="font-body-md text-body-md text-tertiary mb-md">{t('cta.subtitle')}</p>
            <form className="w-full max-w-md flex flex-col gap-sm" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="email-input" className="sr-only">
                {t('cta.placeholder')}
              </label>
              <input
                id="email-input"
                name="email"
                aria-label={t('cta.placeholder')}
                className="w-full bg-[#0A0C10] border-0 border-b border-outline-variant px-sm py-sm text-on-surface font-body-md focus:ring-0 focus:border-primary-container transition-colors placeholder:text-tertiary-fixed-dim"
                placeholder={t('cta.placeholder')}
                type="email"
                required
              />
              <button
                className="w-full bg-primary-container text-[#050608] font-label-caps text-label-caps px-md py-sm rounded hover:bg-primary transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(255,87,26,0.4)] uppercase mt-xs font-semibold"
                type="submit"
                aria-label={t('cta.button')}
              >
                {t('cta.button')}
              </button>
            </form>
            <div className="font-label-caps text-[10px] text-tertiary-fixed-dim mt-sm uppercase tracking-widest">{t('cta.note')}</div>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <footer className="w-full py-xl bg-surface-container-lowest border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-md items-center">
          <div className="flex flex-col gap-sm">
            <div className="flex items-center gap-xs">
              <img alt="Roman Method Logo" className="h-8 w-auto object-contain" src="/logo.svg" />
              <span className="font-display-xl text-headline-md text-primary uppercase tracking-tighter">{t('footer.brand')}</span>
            </div>
            <p className="font-body-md text-body-md text-tertiary-fixed-dim text-[12px] uppercase tracking-wider">{t('footer.tagline')}</p>
          </div>
          <div className="flex flex-wrap gap-md font-body-md text-body-md md:justify-end items-center">
            <a
              className="inline-flex items-center gap-xs text-tertiary-fixed-dim hover:text-primary-container transition-colors duration-300"
              href="https://instagram.com/romanmethod"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" /> Instagram
            </a>
            <a className="text-tertiary-fixed-dim hover:text-primary-fixed transition-colors duration-300" href="#">
              {t('footer.link1')}
            </a>
            <a className="text-tertiary-fixed-dim hover:text-primary-fixed transition-colors duration-300" href="#">
              {t('footer.link2')}
            </a>
            <a className="text-tertiary-fixed-dim hover:text-primary-fixed transition-colors duration-300" href="#">
              {t('footer.link3')}
            </a>
            <a className="text-tertiary-fixed-dim hover:text-primary-fixed transition-colors duration-300" href="#">
              {t('footer.link4')}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

