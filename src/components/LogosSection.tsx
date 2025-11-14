import { useLanguage } from '../contexts/LanguageContext';

const LogosSection = () => {
  const { t } = useLanguage();

  const logos = [
    { name: 'Migros', color: 'from-orange-500 to-orange-600' },
    { name: 'CarrefourSA', color: 'from-blue-500 to-blue-700' },
    { name: 'BİM', color: 'from-yellow-500 to-yellow-600' },
    { name: 'A101', color: 'from-red-500 to-red-600' },
    { name: 'ŞOK', color: 'from-purple-500 to-purple-600' },
    { name: 'Gratis', color: 'from-pink-500 to-pink-600' },
    { name: 'Watsons', color: 'from-green-500 to-green-600' },
    { name: 'MediaMarkt', color: 'from-red-600 to-red-700' }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.03) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(15, 23, 42, 0.03) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 font-semibold mb-3">
            {t('logos.badge')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            {t('logos.title')}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <div
                key={logo.name}
                className="group flex items-center justify-center p-6 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${logo.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 text-lg font-light">
            {t('logos.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
