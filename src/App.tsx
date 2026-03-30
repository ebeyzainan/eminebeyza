/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sun, Moon, Menu, X, Linkedin, Instagram, Mail, ExternalLink, ChevronRight, Briefcase, Code, Sparkles, Mic } from 'lucide-react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check system preference on initial load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Hakkımda', href: '#hakkimda' },
    { name: 'Özgeçmiş', href: '#ozgecmis' },
    { name: 'Yayınlar', href: '#yayinlar' },
    { name: 'İletişim', href: '#iletisim' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="text-xl font-bold tracking-tighter">EBİ.</a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {link.name}
                </a>
              ))}
              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" aria-label="Gece/Gündüz Modu">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" aria-label="Gece/Gündüz Modu">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={toggleMenu} className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">
        {/* Hakkımda (Hero) Section */}
        <section id="hakkimda" className="min-h-[calc(100vh-4rem)] flex items-center py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
              >
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl">
                  <img 
                    src="https://i.imgur.com/Qpddsg8.jpeg" 
                    alt="Emine Beyza İnan" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if direct imgur link fails
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1 text-center md:text-left"
              >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                  Emine Beyza İnan
                </h1>
                <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-6">
                  Yeni Medya ve İletişim Öğrencisi
                </h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-2xl">
                  <p>
                    Üsküdar Üniversitesi İletişim Fakültesi Yeni Medya ve İletişim bölümü öğrencisiyim. İçerik üretimi, sosyal medya yönetimi ve dijital iletişim alanlarına ilgi duyuyor; bu alanlarda kendimi geliştirmeye yönelik çalışmalar yürütüyorum.
                  </p>
                  <p>
                    Yaratıcı bakış açımı güçlendirmeyi ve iletişim alanında etkili projeler üreterek dijital dünyadaki yenilikleri yakından takip etmeyi hedefliyorum.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                  <a href="#iletisim" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors shadow-lg shadow-blue-600/20">
                    İletişime Geç
                  </a>
                  <a href="#ozgecmis" className="px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-full font-medium transition-colors border border-slate-200 dark:border-slate-700 shadow-sm">
                    Özgeçmişi İncele
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Özgeçmiş Section */}
        <section id="ozgecmis" className="py-20 bg-white dark:bg-slate-900/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                <Briefcase className="text-blue-600 dark:text-blue-400" />
                Özgeçmiş
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Eğitim & Deneyim */}
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-slate-900"></div>
                    <h3 className="text-xl font-bold mb-1">Üsküdar Üniversitesi</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">İletişim Fakültesi - Yeni Medya ve İletişim</p>
                    <p className="text-slate-600 dark:text-slate-400">
                      Üniversite hayatım boyunca çeşitli akademik ve uygulamalı projelerde aktif rol aldım. İlk projemle bir yarışmaya katılarak proje geliştirme ve ekip çalışması konularında deneyim kazandım.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-600 ring-4 ring-white dark:ring-slate-900"></div>
                    <h3 className="text-xl font-bold mb-1">Proje Geliştirme & İçerik Üretimi</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Bağımsız Çalışmalar</p>
                    <p className="text-slate-600 dark:text-slate-400">
                      Hâlihazırda yeni projeler üretmekte ve bu projeleri yarışma süreçlerine hazırlayarak geliştirmeye devam etmekteyim. İletişim ve yeni medya sektöründe aktif olarak yer almayı amaçlıyorum.
                    </p>
                  </div>
                </div>

                {/* Yetenekler */}
                <div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Sparkles className="text-blue-600 dark:text-blue-400" size={20} />
                    Yetenekler & İlgi Alanları
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {['İçerik Üretimi', 'Sosyal Medya Yönetimi', 'Dijital İletişim', 'Video Kurgulama', 'Trend Analizi', 'Web Sitesi Tasarımı', 'Proje Geliştirme', 'Ekip Çalışması'].map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Yayınlar Section */}
        <section id="yayinlar" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                <Code className="text-blue-600 dark:text-blue-400" />
                Yayınlar & Projeler
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Proje Kartı 1 */}
                <a href="https://www.instagram.com/siberokur/" target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors shadow-sm hover:shadow-md h-full flex flex-col">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Instagram className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
                      Siberokur
                      <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      İlk proje sayfamız. Dijital dünyadaki yenilikleri takip ederek içerik üretimi ve sosyal medya yönetimi üzerine çalışmalar.
                    </p>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-1 mt-auto">
                      İncele <ChevronRight size={16} />
                    </span>
                  </div>
                </a>

                {/* Proje Kartı 2 */}
                <a href="https://ikibeyzabirdilara.netlify.app/" target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors shadow-sm hover:shadow-md h-full flex flex-col">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Code className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
                      2B1D
                      <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      Ekip çalışması ile geliştirdiğimiz ilk web sitesi projesi.
                    </p>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-1 mt-auto">
                      İncele <ChevronRight size={16} />
                    </span>
                  </div>
                </a>

                {/* Proje Kartı 3 */}
                <a href="https://open.spotify.com/show/1yrPQfREokqLzPms6uyNrn?si=5b799af7b8154dbf" target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors shadow-sm hover:shadow-md h-full flex flex-col">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Mic className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
                      BİZBİZE
                      <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      İletişim, yeni medya ve güncel konular üzerine sohbetler gerçekleştirdiğimiz podcast projemiz.
                    </p>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-1 mt-auto">
                      Dinle <ChevronRight size={16} />
                    </span>
                  </div>
                </a>

                {/* Proje Kartı 4 */}
                <a href="https://www.instagram.com/kulturratlasi/" target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition-colors shadow-sm hover:shadow-md h-full flex flex-col">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Instagram className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
                      Kültür Atlası
                      <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      Kültür, sanat ve tarih üzerine içerikler ürettiğimiz, dijital dünyada kültürel mirasımızı tanıtan projemiz.
                    </p>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-1 mt-auto">
                      İncele <ChevronRight size={16} />
                    </span>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* İletişim Section */}
        <section id="iletisim" className="py-20 bg-white dark:bg-slate-900/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6">İletişime Geçin</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg">
                İletişim ve yeni medya sektöründeki projeleriniz, işbirlikleri veya sadece merhaba demek için bana ulaşabilirsiniz.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://www.linkedin.com/feed/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-xl font-medium transition-colors w-full sm:w-auto justify-center"
                >
                  <Linkedin size={24} />
                  LinkedIn
                </a>
                <a 
                  href="https://www.instagram.com/byzaainan/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040] hover:opacity-90 text-white rounded-xl font-medium transition-opacity w-full sm:w-auto justify-center"
                >
                  <Instagram size={24} />
                  Instagram
                </a>
                <a 
                  href="mailto:beyzainan29@gmail.com" 
                  className="flex items-center gap-3 px-6 py-4 bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-xl font-medium transition-colors w-full sm:w-auto justify-center"
                >
                  <Mail size={24} />
                  E-posta
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} Emine Beyza İnan. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}
