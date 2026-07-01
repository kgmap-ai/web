import React from 'react';

const services = [
  { title: "Moda & Kampanya", desc: "Yapay zeka destekli premium moda ve kampanya görsel üretimi." },
  { title: "Gelinlik & Stüdyo", desc: "Gelinlik stüdyoları için büyüleyici ve gerçekçi dijital çekimler." },
  { title: "Ürün & Reklam", desc: "E-ticaret ve markanız için dikkat çekici reklam görselleri." },
  { title: "Sosyal Medya", desc: "Sosyal medya hesaplarınız için özgün ve etkileşim odaklı içerikler." },
  { title: "Web Site Kurulumu", desc: "Markanıza özel, modern ve kullanıcı dostu web tasarım çözümleri." },
  { title: "Sayfa Yönetimi", desc: "Dijital ayak izinizi güçlendiren profesyonel yönetim hizmetleri." },
  { title: "Mekan Tanıtımı", desc: "Modern görselleştirme teknikleriyle etkileyici mekan sunumları." },
  { title: "Dekorasyon & Mimari", desc: "Mimari görselleştirme ve iç mekan tasarım projeleri." }
];

export default function Services() {
  return (
    <section className="py-24 bg-[#E5DACE]/20 px-16">
      <div className="max-w-[1400px] mx-auto">

        {/* Başlık Bölümü */}
        <div className="mb-20">
          <p className="text-[#3D0A0F] text-[11px] uppercase tracking-[4px] mb-4">Hizmetlerimiz</p>
          <h2 className="text-[3rem] font-serif text-[#3D0A0F]">Markanız için <br /> özel çözümler</h2>
        </div>

        {/* 8'li Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {services.map((item, index) => (
            <div key={index} className="flex flex-col border-l border-[#3D0A0F]/20 pl-6">
              <h3 className="text-[18px] font-serif text-[#3D0A0F] mb-3">{item.title}</h3>
              <p className="text-[#3D0A0F]/70 text-[14px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}