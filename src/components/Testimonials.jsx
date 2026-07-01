import React from 'react';
import { Quote } from 'lucide-react';

const reviews = [
  { id: 1, name: "Elif S.", role: "Moda Tasarımcısı", text: "Stüdyo maliyetlerini sıfıra indirerek harika katalog çekimleri elde ettik. Yapay zeka ile bu kadar gerçekçi sonuçlar alacağımızı tahmin etmiyordum." },
  { id: 2, name: "Canan Y.", role: "E-Ticaret Yöneticisi", text: "Ürünlerimizi farklı mekanlarda saniyeler içinde görselleştirmeleri inanılmaz. Satışlarımızda gözle görülür bir artış oldu." },
  { id: 3, name: "Ahmet K.", role: "Ajans Kurucusu", text: "Hızlı, profesyonel ve kesinlikle premium bir hizmet. Sosyal medya içeriklerimiz artık çok daha kaliteli." },
];

const Testimonials = () => {
  return (
    <section className="section border-t border-gold/20">
      <div className="flex flex-col items-center mb-24">
        <h2 className="title">Müşteri Yorumları</h2>
        <div className="w-px h-24 bg-gold mt-12 mb-8"></div>
        <p className="subtitle">Referanslarımız</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 max-w-6xl mx-auto">
        {reviews.map(review => (
          <div key={review.id} className="flex flex-col group">
            <Quote className="text-gold/30 mb-8 group-hover:text-burgundy transition-colors duration-500" size={48} strokeWidth={1} />
            <p className="text-title font-heading text-xl md:text-2xl font-light mb-10 leading-relaxed italic flex-grow">
              "{review.text}"
            </p>
            <div>
              <div className="w-12 h-px bg-burgundy mb-4"></div>
              <h4 className="text-title font-medium tracking-widest uppercase text-sm">{review.name}</h4>
              <p className="text-desc font-light text-sm mt-2 tracking-wide">{review.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
