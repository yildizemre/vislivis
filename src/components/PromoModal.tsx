import React, { useEffect, useState } from 'react';
import { X, Mail } from 'lucide-react';

type PromoModalProps = {
  backgroundSrc?: string;
  delayMs?: number;
};

const PromoModal: React.FC<PromoModalProps> = ({ backgroundSrc = '/panel1.jpeg', delayMs = 5000 }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const seen = sessionStorage.getItem('promo_seen');
    if (seen) return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem('promo_seen', '1');
    }, delayMs);
    return () => clearTimeout(t);
  }, [delayMs]);

  const close = () => setOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch(`/.netlify/functions/promo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company }),
      });
      if (!res.ok) {
        let msg = 'Gönderim başarısız';
        try {
          const data = await res.json();
          msg = data?.message || data?.error || msg;
        } catch {}
        throw new Error(msg);
      }
      window.location.href = '/tesekkurler';
      setOpen(false);
    } catch (err) {
      setError((err as Error).message || 'Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={close}></div>

      <div className="relative w-full max-w-3xl mx-4 overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={backgroundSrc}
            alt="Yeni modül arka plan"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 backdrop-blur-xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-10 text-white">
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Kapat"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm">
              (Yeni Modül)
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Kabinlerdeki Denemeyi Satışa Dönüştürün!
            </h3>
            <div className="text-white/90 max-w-2xl space-y-3">
              <p>
                Mağazanızın en kritik anını veriye dönüştürün. Yeni modülümüzle artık deneme kabinlerinde
                hangi ürünlerin, kaç kişi tarafından denendiğini ve bu denemelerin ne kadarının satışla
                sonuçlandığını net olarak görebilirsiniz.
              </p>
              <p>
                Örneğin: “Bu hafta turuncu gömleği 50 kişi denedi ve 15’i satın aldı.” gibi analizlerle
                stoklarınızı optimize edin, kampanya stratejilerinizi güçlendirin ve satışlarınızı artırın.
              </p>
              <p>
                Bu güçlü analizlere herkesten önce sahip olmak ister misiniz?
              </p>
            </div>
            <div className="mt-6 bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-sm text-white/70 leading-relaxed">
                Video: Kabin içi deneme takibi ile müşteri davranışlarını anlayın ve satış dönüşümlerinizi artırın.
              </p>
            </div>
          </div>

          <form
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="İsim"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-[#00cadc]"
              required
            />
            <input
              type="email"
              placeholder="E-posta"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-[#00cadc]"
              required
            />
            <input
              type="text"
              placeholder="Şirket"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-[#00cadc]"
            />

            <div className="sm:col-span-3 flex items-center gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#00cadc] hover:bg-cyan-500 text-gray-900 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#00cadc] disabled:opacity-60"
              >
                <Mail className="w-5 h-5 mr-2" />
                {submitting ? 'Gönderiliyor…' : 'Erken Erişim İste'}
              </button>
              <button
                type="button"
                onClick={close}
                className="px-6 py-3 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                Şimdi Değil
              </button>
            </div>

            {error && (
              <div className="sm:col-span-3 text-sm text-red-200">
                {error}
              </div>
            )}
          </form>

          <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-sm text-white/90 leading-relaxed italic">
              Müşterilerinizin biyometrik verilerine ihtiyaç duymadan, işletme içindeki hareket verilerinin takibi ile satış performansınızı optimize edin.
            </p>
          </div>
          
          <div className="mt-4 text-xs text-white/60">
            İpucu: Kabin içi deneme verileriyle, satış ve dönüşüm analizlerinizi bir üst seviyeye taşıyın.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoModal;


