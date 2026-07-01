import React from 'react';

const portfolioData = [
  { category: "Moda & Kampanya", title: "Global Moda Çekimleri", image: "/images/moda.jpeg" },
  { category: "Gelinlik & Stüdyo", title: "Ethereal Bride Collection", image: "/images/gelinlik.jpg" },
  { category: "Ürün & Reklam", title: "Premium Ürün Serisi", image: "/images/katalog.png" },
  { category: "Kozmetik", title: "Güzellik ve Bakım", image: "/images/parfum.png" },
  { category: "Takı & Mücevher", title: "Zarif Dokunuşlar", image: "/images/mücevher.jpeg" },
  { category: "Mobilya", title: "Modern Yaşam Alanları", image: "/images/mobilya.jpeg" },
  { category: "Aksesuar", title: "Detaylarda Gizli Şıklık", image: "/images/aksesuar.jpeg" },
  { category: "Mimari Dönüşüm", title: "Mekansal Yenilenme", image: "/images/dönüşüm.jpeg" }, // Yeni Eklendi
  { category: "Mekan & Mimari", title: "Modern Mekan Vizyonu", image: "/images/mekan.jpeg" }
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-[#F5F0EA] px-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20">
          <p className="text-[#3D0A0F] text-[11px] uppercase tracking-[4px] mb-4">Portfolyo</p>
          <h2 className="text-[3rem] font-serif text-[#3D0A0F]">Seçilmiş Çalışmalarımız</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioData.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-[#E5DACE]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { e.target.src = '/images/hero.model.png'; }}
                />
              </div>
              <p className="text-[#3D0A0F]/60 text-[11px] uppercase tracking-[2px] mb-2 font-medium">{item.category}</p>
              <h3 className="text-xl font-serif text-[#3D0A0F]">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}