import { Quote } from 'lucide-react';

const LogosSection = () => {

  const testimonials = [
    {
      company: 'Boyner',
      text: "Vislivis ile mağaza içi verimliliğimizi kampanya dönemlerinde anlık olarak takip edebiliyoruz. Rehber paneller, sıcak ve soğuk bölgeleri netleştirerek ekiplerimizin doğru hamleleri kısa sürede yapmasını sağladı.",
      author: "Perakende Analitiği Direktörü",
      metric: "Boyner, ziyaretçi başına geliri %18 artırdı.",
      color: "text-orange-600"
    },
    {
      company: 'Beymen',
      text: "Lüks perakendecilikte müşteri deneyimi her şeydir. Vislivis'in sunduğu gerçek zamanlı içgörüler, müşterilerimize sunduğumuz hizmet kalitesini mükemmelleştirmemize yardımcı oldu. Mağaza içi dönüşüm oranlarımızda ciddi bir artış yakaladık.",
      author: "Teknoloji ve İnovasyon Müdürü",
      metric: "2.5x Dönüşüm Artışı",
      color: "text-slate-900"
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
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase mb-4">
            REFERANSLARIMIZ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Perakende liderlerinin Visilivis deneyimi
          </h2>
        </div>

        {/* Testimonials Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto mb-24">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <h3 className={`text-3xl font-bold ${item.color} mb-2`}>
                    {item.company}
                  </h3>
                  <div className="text-slate-400 text-sm font-medium">
                    {item.author}, {item.company}
                  </div>
                </div>

                <p className="text-slate-600 text-lg leading-relaxed mb-8 font-light italic relative">
                  <Quote className="w-8 h-8 text-slate-100 absolute -top-4 -left-4 -z-10" />
                  "{item.text}"
                </p>

                <div className="mt-auto pt-6 border-t border-slate-50">
                  <div className={`font-bold ${item.color} bg-slate-50 inline-block px-4 py-2 rounded-lg text-sm`}>
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
            ÖNDE GELEN PERAKENDE ZİNCİRLERİNİN TERCİHİ
          </h3>
        </div>

        {/* Logos Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="group flex items-center justify-center p-6 bg-white rounded-xl border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
              >
                <div className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${logo.color} bg-clip-text text-transparent opacity-60 group-hover:opacity-100 transition-all duration-300`}>
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
