import React from 'react';

export default function Footer() {
  return (
    <footer className="py-24 bg-[#F5F0EA] px-16 border-t border-[#3D0A0F]/10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Sol Taraf */}
        <div>
          <p className="text-[#3D0A0F] text-[11px] uppercase tracking-[4px] mb-4">İletişim</p>
          <h2 className="text-[3rem] font-serif text-[#3D0A0F] mb-8">Projelerinizi <br />Konuşalım</h2>
          <p className="text-[#3D0A0F]/70 text-lg">Dijital vizyonunuzu gerçeğe dönüştürmek için hazırım. Profesyonel iş birlikleri ve merak ettikleriniz için bana ulaşın.</p>
        </div>

        {/* Sağ Taraf: İletişim Bilgileri (Düzenlendi) */}
        <div className="flex flex-col justify-center">
          <div className="mb-12">
            <p className="text-[#3D0A0F]/60 text-[11px] uppercase tracking-[2px] mb-2">E-posta Adresi</p>
            <a href="mailto:kubra@kgmapstudyo.com" className="text-[2rem] font-serif text-[#3D0A0F] hover:underline">
              kubra@kgmapstudyo.com
            </a>
          </div>

          <div>
            <p className="text-[#3D0A0F]/60 text-[11px] uppercase tracking-[2px] mb-2">Telefon & WhatsApp</p>
            <a href="https://wa.me/905399441808" target="_blank" rel="noreferrer" className="text-[2rem] font-serif text-[#3D0A0F] hover:underline">
              0539 944 18 08
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-[1400px] mx-auto mt-20 pt-8 border-t border-[#3D0A0F]/10 text-[10px] text-[#3D0A0F]/40 uppercase tracking-[2px]">
        © 2026 KG-MAP AI STYLING. TÜM HAKLARI SAKLIDIR.
      </div>
    </footer>
  );
}