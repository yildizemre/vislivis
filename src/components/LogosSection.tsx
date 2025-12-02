import { Quote } from 'lucide-react';

const LogosSection = () => {

  const testimonials = [
    {
      company: 'Boyner',
      logo: '/boyner-logo.png', // Placeholder text if image not available, or styled text
      text: "Vislivis ile mağaza içi müşteri davranışlarını anlamlandırmak operasyonel verimliliğimizi %40 artırdı. Yapay zeka destekli analizler sayesinde stok yönetiminden personel planlamasına kadar her alanda veri odaklı kararlar alabiliyoruz.",
      author: "Operasyon Direktörü",
      metric: "%40 Verimlilik Artışı",
      color: "from-orange-600 to-orange-800"
    },
    {
      company: 'Beymen',
      logo: '/beymen-logo.png',
      text: "Lüks perakendecilikte müşteri deneyimi her şeydir. Vislivis'in sunduğu gerçek zamanlı içgörüler, müşterilerimize sunduğumuz hizmet kalitesini mükemmelleştirmemize yardımcı oldu. Mağaza içi dönüşüm oranlarımızda ciddi bir artış yakaladık.",
      author: "Teknoloji ve İnovasyon Müdürü",
      metric: "2.5x Dönüşüm Artışı",
      color: "from-slate-800 to-black"
    }
  ];

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
    <section className="py-20 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/50 via-transparent to-transparent"></div>
        <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.03) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(15, 23, 42, 0.03) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            Referanslarımız
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Perakende Liderlerinin <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Vislivis Deneyimi</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            Sektörün öncü markaları operasyonlarını yapay zeka ile dönüştürüyor.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-24">
          {testimonials.map((item, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-200 to-slate-300 rounded-3xl transform rotate-1 opacity-50 group-hover:rotate-2 transition-transform duration-500"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-xl border border-slate-100 h-full flex flex-col">
                <Quote className="w-12 h-12 text-blue-100 absolute top-8 right-8" />
                
                <div className="mb-8">
                  <h3 className={`text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    {item.company}
                  </h3>
                </div>

                <p className="text-slate-600 text-lg leading-relaxed mb-8 flex-grow italic">
                  "{item.text}"
                </p>

                <div className="flex items-end justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div className="font-bold text-slate-900">{item.company} Ekibi</div>
                    <div className="text-sm text-slate-500">{item.author}</div>
                  </div>
                  <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg font-bold text-sm">
                    {item.metric}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logos Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase mb-8">
            Önde Gelen Perakende Zincirlerinin Tercihi
          </h3>
        </div>

        {/* Logos Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="group flex items-center justify-center p-6 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
              >
                <div className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${logo.color} bg-clip-text text-transparent opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300`}>
                  {logo.name}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center justify-center space-x-2 text-slate-500 bg-slate-50 px-6 py-3 rounded-full border border-slate-200">
              <span className="font-semibold text-slate-900">140+</span>
              <span>Perakende Markasına Katılın</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
