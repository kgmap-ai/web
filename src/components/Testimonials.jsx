import React from 'react';
import { Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Ebru Ş.",
    role: "Butik Kurucusu",
    text: "KG-MAP AI Studio ile çalışmak, butik koleksiyon çekimlerimizde devrim yarattı. Dijital modellerin gerçekçiliği ve kumaş dokularındaki detaylar gerçekten büyüleyici."
  },
  {
    id: 2,
    name: "Sarah A.",
    role: "Fashion Creative Director",
    text: "The digital model production provided by KG-MAP AI is impeccable. It perfectly captured our brand's modest elegance and saved us months of physical photoshoot planning."
  },
  {
    id: 3,
    name: "فاطمة م.",
    role: "مؤسسة علامة تجارية",
    text: "بفضل خدمات KG-MAP AI، تحولت تجربة عرض مجموعتنا إلى مستوى جديد من الرقي الرقمي. الجودة والتفاصيل تفوق التوقعات."
  },
];

const Testimonials = () => {
  return (
    <section className="section border-t border-gold/20">
      <div className="flex flex-col items-center mb-24">
        <h2 className="title">Müşteri Yorumları</h2>
        <div className="w-px h-24 bg-gold mt-12 mb-8"></div>
        <p className="subtitle">Referanslarımız</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 max-w-6xl mx-auto px-6">
        {reviews.map(review => (
          <div key={review.id} className="flex flex-col group" dir={review.id === 3 ? "rtl" : "ltr"}>
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