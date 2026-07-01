import React from 'react';
import { Instagram, MessageCircle, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="iletisim" className="section border-t border-gold/20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* Info */}
        <div className="flex flex-col justify-center">
          <h2 className="title mb-8">İletişim</h2>
          <div className="w-16 h-px bg-gold mb-10"></div>
          <p className="text-desc font-light mb-16 text-lg max-w-md leading-relaxed">
            Markanız için en iyi görsel çözümleri üretmek için buradayız. Projenizi konuşmak ve detayları netleştirmek için bizimle iletişime geçin.
          </p>

          <div className="space-y-10">
            <a
              href="https://instagram.com/kgmap.aistudio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-8 text-title hover:text-burgundy transition group"
            >
              <div className="w-14 h-14 border border-gold/50 rounded-full flex items-center justify-center group-hover:border-burgundy transition-all duration-500">
                <Instagram size={22} className="text-gold group-hover:text-burgundy transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <span className="text-lg font-light tracking-widest uppercase text-sm">
                @kgmap.aistudio
              </span>
            </a>
            <a
              href="https://wa.me/905399441808"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-8 text-title hover:text-burgundy transition group"
            >
              <div className="w-14 h-14 border border-gold/50 rounded-full flex items-center justify-center group-hover:border-burgundy transition-all duration-500">
                <MessageCircle size={22} className="text-gold group-hover:text-burgundy transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <span className="text-lg font-light tracking-widest uppercase text-sm">
                WhatsApp
              </span>
            </a>
            <a href="#" className="flex items-center space-x-8 text-title hover:text-burgundy transition group">
              <div className="w-14 h-14 border border-gold/50 rounded-full flex items-center justify-center group-hover:border-burgundy transition-all duration-500">
                <Mail size={22} className="text-gold group-hover:text-burgundy transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <span className="text-lg font-light tracking-widest uppercase text-sm">
                hello@kgmapstudio.com
              </span>
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-heading font-light mb-12 text-title tracking-widest uppercase">Mesaj Gönderin</h3>
          <form className="space-y-12">
            <div>
              <input type="text" placeholder="Adınız Soyadınız" className="w-full bg-transparent border-b border-gold/40 py-4 text-title font-light focus:outline-none focus:border-burgundy transition-colors placeholder:text-desc/50 text-lg tracking-wide" />
            </div>
            <div>
              <input type="email" placeholder="E-Posta Adresiniz" className="w-full bg-transparent border-b border-gold/40 py-4 text-title font-light focus:outline-none focus:border-burgundy transition-colors placeholder:text-desc/50 text-lg tracking-wide" />
            </div>
            <div>
              <textarea rows="3" placeholder="Projenizden veya ihtiyaçlarınızdan bahsedin..." className="w-full bg-transparent border-b border-gold/40 py-4 text-title font-light focus:outline-none focus:border-burgundy transition-colors placeholder:text-desc/50 resize-none text-lg tracking-wide"></textarea>
            </div>
            <button type="button" className="btn-primary w-full md:w-auto mt-4 px-12 py-5 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">Mesajı Gönder</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
