import React, { useState } from 'react';
import { Quote } from 'lucide-react';

const initialReviews = [
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
  }
];

const Testimonials = () => {

  const [reviews, setReviews] = useState(initialReviews);

  const [form, setForm] = useState({
    name: "",
    role: "",
    text: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.text) return;

    const newReview = {
      id: reviews.length + 1,
      name: form.name,
      role: form.role,
      text: form.text
    };

    setReviews([newReview, ...reviews]);

    setForm({
      name: "",
      role: "",
      text: ""
    });
  };

  return (
    <section className="py-28 bg-[#E5DACE]/20 px-6 md:px-16">
      <div className="max-w-[1400px] mx-auto">

        {/* TITLE */}
        <div className="mb-16 text-center">
          <p className="text-[#3D0A0F] text-[11px] uppercase tracking-[4px] mb-4">
            Referanslarımız
          </p>

          <h2 className="text-[2.5rem] md:text-[3rem] font-serif text-[#3D0A0F]">
            Müşteri Yorumları
          </h2>
        </div>

        {/* REVIEWS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col border-l border-[#3D0A0F]/20 pl-6"
            >
              <Quote className="text-[#3D0A0F]/20 mb-6" size={38} />

              <p className="text-[#3D0A0F]/80 italic mb-8 leading-relaxed">
                "{review.text}"
              </p>

              <div>
                <h4 className="text-[#3D0A0F] font-medium">
                  {review.name}
                </h4>
                <p className="text-[#3D0A0F]/60 text-sm">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FORM SECTION */}
        <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-sm border border-[#3D0A0F]/10">

          <h3 className="text-center text-2xl font-serif text-[#3D0A0F] mb-8">
            Yorum Bırak
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input
              className="p-4 border rounded-xl focus:outline-none focus:border-[#3D0A0F]"
              placeholder="Adınız"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              className="p-4 border rounded-xl focus:outline-none focus:border-[#3D0A0F]"
              placeholder="Marka / Görev"
              value={form.role}
              onChange={(e) =>
                setForm({ ...form, role: e.target.value })
              }
            />

            <textarea
              className="p-4 border rounded-xl h-32 focus:outline-none focus:border-[#3D0A0F]"
              placeholder="Yorumunuz"
              value={form.text}
              onChange={(e) =>
                setForm({ ...form, text: e.target.value })
              }
            />

            <button
              type="submit"
              className="bg-[#3D0A0F] text-white py-4 rounded-xl hover:opacity-90 transition"
            >
              Yorumu Gönder
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;