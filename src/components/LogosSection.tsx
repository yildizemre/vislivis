const LogosSection = () => {

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
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="text-xs font-bold tracking-[0.3em] text-slate-300 uppercase mb-6">
            REFERANSLARIMIZ
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] tracking-tight">
            Perakende liderlerinin Vislivis deneyimi
          </h2>
        </div>

        {/* Testimonials Layout - Matching the clean side-by-side look */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto mb-32 items-start">
          {/* Boyner Column */}
          <div className="flex flex-col space-y-8">
            {/* Header */}
            <div>
              <h3 className="text-4xl font-bold text-[#ff8a65] mb-3">Boyner</h3> {/* Slightly softer orange/red like Boyner logo */}
              <p className="text-slate-400 text-sm font-medium tracking-wide">Perakende Analitiği Direktörü, Boyner</p>
            </div>

            {/* Quote */}
            <p className="text-slate-500 text-lg font-light leading-relaxed italic">
              "Vislivis ile mağaza içi verimliliğimizi kampanya dönemlerinde anlık olarak takip edebiliyoruz. Rehber paneller, sıcak ve soğuk bölgeleri netleştirerek ekiplerimizin doğru hamleleri kısa sürede yapmasını sağladı."
            </p>

            {/* Metric */}
            <div className="pt-4">
               <p className="text-cyan-500 font-bold text-sm tracking-wide">Boyner, ziyaretçi başına geliri %18 artırdı.</p>
            </div>

            {/* Footer Author */}
            <div className="pt-2">
              <p className="text-slate-300 text-xs font-medium">
                Ebru Saatçi · Perakende Analitiği Direktörü, Boyner
              </p>
            </div>
          </div>

          {/* Beymen Column */}
          <div className="flex flex-col space-y-8">
            {/* Header */}
            <div>
              <h3 className="text-4xl font-bold text-[#1a237e] mb-3">Beymen</h3>
              <p className="text-slate-400 text-sm font-medium tracking-wide">Müşteri Deneyimi Lideri, Beymen</p>
            </div>

            {/* Quote */}
            <p className="text-slate-500 text-lg font-light leading-relaxed italic">
              "Vislivis panelleri, premium müşteri yolculuğunu gerçek zamanlı görmemizi sağlıyor. Kasada bekleme sürelerini ve VIP alanlardaki yoğunluğu saniyeler içinde ölçebildiğimiz için müşteri memnuniyetinde belirgin artış yakaladık."
            </p>

            {/* Metric */}
            <div className="pt-4 space-y-1">
               <p className="text-[#1a237e] font-bold text-sm tracking-wide">2.5x Dönüşüm Artışı</p>
               <p className="text-slate-500 text-xs">Beymen, VIP müşteri memnuniyetini %24 yükseltti.</p>
            </div>
          </div>
        </div>

        {/* Logos Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase">
            ÖNDE GELEN PERAKENDE ZİNCİRLERİNİN TERCİHİ
          </h3>
        </div>

        {/* Logos Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="w-full flex items-center justify-center group cursor-pointer"
              >
                <div className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${logo.color} bg-clip-text text-transparent transition-all duration-300 transform group-hover:scale-110`}>
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
