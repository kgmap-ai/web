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
    <section className="py-24 bg-[#E5DACE]/20 px-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20">
          <p className="text-[#3D0A0F] text-[11px] uppercase tracking-[4px] mb-4">Referanslarımız</p>
          <h2 className="text-[3rem] font-serif text-[#3D0A0F]">Müşteri Memnuniyeti</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {reviews.map(review => (
            <div key={review.id} className="flex flex-col border-l border-[#3D0A0F]/20 pl-8 group" dir={review.id === 3 ? "rtl" : "ltr"}>
              <Quote className="text-[#3D0A0F]/20 mb-8 group-hover:text-[#3D0A0F] transition-colors duration-500" size={40} strokeWidth={1} />
              <p className="text-[#3D0A0F]/80 font-serif text-lg md:text-xl mb-10 leading-relaxed italic flex-grow">
                "{review.text}"
              </p>
              <div>
                <h4 className="text-[#3D0A0F] font-serif text-lg">{review.name}</h4>
                <p className="text-[#3D0A0F]/60 text-[13px] mt-1 tracking-wide uppercase">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;