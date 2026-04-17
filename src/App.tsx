/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronRight,
  Building2,
  HardHat,
  Factory,
  Zap,
  Briefcase,
  CheckCircle2,
  Hexagon,
  Triangle,
  Box,
  CircleDot,
  Diamond,
  ArrowRight,
  Menu,
  Leaf,
  Package,
  Settings,
  Users,
  Wrench,
  X,
  MessageCircle
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Full Width Layout Container */}
      <div className="w-full min-h-screen flex flex-col pb-[56px] md:pb-0">
        
        {/* 1. Top Menu */}
        <div className="bg-slate-900 text-slate-300 text-xs sm:text-sm border-b border-slate-800">
          <div className="max-w-7xl mx-auto py-2 px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-3 sm:mb-0">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>0216 611 58 32</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@alkamekanik.com</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Pzt - Cma: 09:00 - 18:00</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        {/* 2. Header */}
        <header className="bg-white sticky top-0 z-50 border-b border-slate-100 shadow-sm">
          <div className="max-w-7xl mx-auto py-5 px-6 lg:px-12 flex justify-between items-center">
            <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-sm">
              <Hexagon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tighter text-slate-900 leading-none">ALKA</h1>
              <span className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase">Mekanik</span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-sm font-semibold text-primary">Ana Sayfa</a>
            <a href="#hakkimizda" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">Hakkımızda</a>
            <a href="#urunler" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">Ürünlerimiz</a>
            <a href="#hizmetlerimiz" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">Hizmetlerimiz</a>
            <a href="#partnerler" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">Partnerler</a>
            <a href="#iletisim" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">İletişim</a>
          </nav>

          <div className="hidden lg:block">
            <a href="#iletisim" className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2">
              Proje Danışmanlığı Alın
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-slate-900 p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          </div>

          {/* Mobile Nav Dropdown */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg py-4 px-6 flex flex-col gap-4 z-50 max-h-[calc(100vh-80px)] overflow-y-auto">
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold text-primary">Ana Sayfa</a>
              <a href="#hakkimizda" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold text-slate-600 hover:text-primary transition-colors">Hakkımızda</a>
              <a href="#urunler" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold text-slate-600 hover:text-primary transition-colors">Ürünlerimiz</a>
              <a href="#hizmetlerimiz" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold text-slate-600 hover:text-primary transition-colors">Hizmetlerimiz</a>
              <a href="#partnerler" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold text-slate-600 hover:text-primary transition-colors">Partnerler</a>
              <a href="#iletisim" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-semibold text-slate-600 hover:text-primary transition-colors">İletişim</a>
              <a href="#iletisim" onClick={() => setIsMobileMenuOpen(false)} className="mt-2 text-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm font-semibold text-sm transition-all shadow-md">
                Proje Danışmanlığı Alın
              </a>
            </div>
          )}
        </header>

        {/* 3. Hero Section */}
        <section className="relative h-[500px] lg:h-[650px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://picsum.photos/seed/engineering-architecture/1920/1080" 
              alt="Mühendislik Projesi" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary-light/30 text-primary-light text-xs font-semibold tracking-wide uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-primary-light animate-pulse"></span>
                Geleceği İnşa Ediyoruz
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                Mühendislikte <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                  Mükemmellik ve Güven
                </span>
              </h2>
              <p className="text-lg text-slate-300 mb-10 max-w-2xl leading-relaxed">
                Endüstriyel ve ticari projeleriniz için yenilikçi, güvenilir ve sürdürülebilir mühendislik çözümleri sunuyoruz. 20 yıllık tecrübemizle standartları yeniden belirliyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#hizmetlerimiz" className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-sm font-semibold text-center transition-all shadow-lg hover:shadow-primary/30">
                  Hizmetlerimizi İnceleyin
                </a>
                <a href="#iletisim" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-sm font-semibold text-center transition-all">
                  Bize Ulaşın
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Logo Belt (Partnerler) */}
        <section id="partnerler" className="bg-white py-12 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
              Güçlü Çözüm Ortaklarımız
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="font-bold text-lg sm:text-xl text-slate-800 tracking-wider">GRUNDFOS</div>
              <div className="font-bold text-lg sm:text-xl text-slate-800 tracking-wider">CALEFFİ</div>
              <div className="font-bold text-lg sm:text-xl text-slate-800 tracking-wider">REMEHA</div>
              <div className="font-bold text-lg sm:text-xl text-slate-800 tracking-wider">VİESSMANN</div>
              <div className="font-bold text-lg sm:text-xl text-slate-800 tracking-wider">REFLEX</div>
              <div className="font-bold text-lg sm:text-xl text-slate-800 tracking-wider">WATES</div>
              <div className="font-bold text-lg sm:text-xl text-slate-800 tracking-wider">NEMA</div>
              <div className="font-bold text-lg sm:text-xl text-slate-800 tracking-wider">ELİCENT</div>
              <div className="font-bold text-lg sm:text-xl text-slate-800 tracking-wider">RESTHERMA</div>
            </div>
          </div>
        </section>

        {/* 5. Services Section */}
        <section id="hizmetlerimiz" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Hizmetlerimiz</h3>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-6">Mekanik Sistemlerde Uçtan Uca Çözümler</h2>
              <p className="text-slate-600 text-lg">
                Projelendirmeden kuruluma, tedarikten satış sonrası bakıma kadar tüm süreçlerde yanınızdayız.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {/* Card 1 */}
              <div className="md:col-span-2 lg:col-span-2 relative bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500">
                  <img src="https://picsum.photos/seed/supply/600/400" alt="Ürün Tedariği" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary-50 text-primary rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                    <Package className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Ürün Tedariği</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Dünyanın önde gelen markalarının mekanik tesisat ve pompa sistemlerini projelerinize en uygun şekilde tedarik ediyoruz.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="md:col-span-2 lg:col-span-2 relative bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500">
                  <img src="https://picsum.photos/seed/parts/600/400" alt="Yedek Parça Tedariği" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary-50 text-primary rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                    <Settings className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Yedek Parça Tedariği</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Sistemlerinizin kesintisiz çalışması için ihtiyaç duyduğunuz orijinal yedek parçaları hızlı ve güvenilir şekilde sağlıyoruz.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="md:col-span-2 lg:col-span-2 relative bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500">
                  <img src="https://picsum.photos/seed/consulting/600/400" alt="Danışmanlık" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary-50 text-primary rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                    <Users className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Danışmanlık</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Mekanik sistem seçiminden enerji verimliliğine kadar uzman mühendis kadromuzla projenize özel danışmanlık sunuyoruz.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="md:col-span-2 lg:col-span-3 relative bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500">
                  <img src="https://picsum.photos/seed/installation/600/400" alt="Kurulum" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary-50 text-primary rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                    <HardHat className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Kurulum</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Tedarik edilen ürün ve sistemlerin saha montajını ve devreye alma işlemlerini profesyonel ekiplerimizle gerçekleştiriyoruz.
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="md:col-span-2 md:col-start-2 lg:col-span-3 lg:col-start-auto relative bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500">
                  <img src="https://picsum.photos/seed/maintenance/600/400" alt="Bakım Hizmetleri" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary-50 text-primary rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                    <Wrench className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">Bakım Hizmetleri</h4>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Sistemlerinizin ömrünü uzatmak ve verimliliğini korumak için periyodik bakım ve arıza onarım hizmetleri sağlıyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5.5. Products Section */}
        <section id="urunler" className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Geniş Ürün Yelpazemiz</h3>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-6">Satışını Yaptığımız Ürün Grupları</h2>
              <p className="text-slate-600 text-lg">
                Endüstriyel ve ticari tesisler için en kaliteli markaların mekanik donanımlarını sunuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Category 1 */}
              <div className="relative rounded-sm overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="absolute inset-0 z-0">
                  <img src="https://picsum.photos/seed/pumps/800/600" alt="Pompa Sistemleri" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/40"></div>
                </div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-end min-h-[400px]">
                  <div className="w-12 h-12 bg-primary text-white rounded-sm flex items-center justify-center mb-6 shadow-lg">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-6">Pompa ve Hidrofor Sistemleri</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Sirkülasyon Pompaları</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Yangın Hidroforları</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Atık Su Terfi İstasyonları</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Dozaj Sistemleri</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Category 2 */}
              <div className="relative rounded-sm overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="absolute inset-0 z-0">
                  <img src="https://picsum.photos/seed/hvac/800/600" alt="Isıtma ve Soğutma" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/40"></div>
                </div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-end min-h-[400px]">
                  <div className="w-12 h-12 bg-primary text-white rounded-sm flex items-center justify-center mb-6 shadow-lg">
                    <Factory className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-6">Isıtma ve Soğutma Sistemleri</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Merkezi Kazan Sistemleri (Yoğuşmalı, Yer & Duvar Tipi)</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Isı Pompaları</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Eşanjörler</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Boyler ve Akümülasyon Tankları</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Category 3 */}
              <div className="relative rounded-sm overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="absolute inset-0 z-0">
                  <img src="https://picsum.photos/seed/ventilation/800/600" alt="Havalandırma ve Tesisat" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/40"></div>
                </div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-end min-h-[400px]">
                  <div className="w-12 h-12 bg-primary text-white rounded-sm flex items-center justify-center mb-6 shadow-lg">
                    <Settings className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-6">Havalandırma ve Tesisat</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Aksiyel Fanlar (Duvar, Tavan, Kanal Tipi)</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Dinamik ve Statik Balans Vanaları</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Genleşme Tankları</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>Orijinal Yedek Parçalar</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. About Us Section */}
        <section id="hakkimizda" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="hidden sm:block absolute -top-6 -left-6 w-32 h-32 bg-primary-100 rounded-sm z-0"></div>
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-32 h-32 bg-slate-100 rounded-sm z-0"></div>
              <img 
                src="https://picsum.photos/seed/construction-site/800/900" 
                alt="Hakkımızda" 
                className="relative z-10 w-full h-[400px] sm:h-[500px] object-cover rounded-sm shadow-lg"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 -left-8 bg-primary text-white p-6 rounded-sm shadow-xl z-20 hidden md:block">
                <div className="text-4xl font-bold mb-1">20+</div>
                <div className="text-sm font-semibold text-primary-100 uppercase tracking-wider">Yıllık Tecrübe</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Hakkımızda</h3>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                Güçlü Temeller, <br/>Geleceğe Uzanan Vizyon
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                2005 yılından bu yana, ulusal ve uluslararası alanda yüzlerce başarılı projeye imza attık. Uzman kadromuz ve yenilikçi yaklaşımımızla, karmaşık mühendislik problemlerini çözüyor, sürdürülebilir ve güvenli yapılar inşa ediyoruz.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Amacımız, sadece yapılar inşa etmek değil, aynı zamanda topluma ve çevreye değer katan, nesiller boyu ayakta kalacak eserler bırakmaktır.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-slate-800">İleri Teknoloji Kullanımı</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-slate-800">Sürdürülebilir Çözümler</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-slate-800">Uluslararası Standartlar</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-slate-800">Zamanında Teslimat</span>
                </div>
              </div>

              <a href="#" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-sm font-semibold transition-colors">
                Kurumsal Profilimiz <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* 7. Contact Us Section */}
        <section id="iletisim" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h3 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Bize Ulaşın</h3>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-8">
                Projeleriniz İçin <br/>Hemen İletişime Geçin
              </h2>
              <p className="text-slate-600 text-lg mb-12 leading-relaxed">
                Yeni bir projeye mi başlıyorsunuz? Uzman mühendis kadromuzla size en uygun çözümleri sunmak için buradayız.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white border border-slate-200 shadow-sm rounded-sm flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">Ofis</h4>
                    <p className="text-slate-600 leading-relaxed">Esenşehir Mh. Nilgün Sk. No: 11 D: 4<br/>Ümraniye / İstanbul</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white border border-slate-200 shadow-sm rounded-sm flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">Depo</h4>
                    <p className="text-slate-600 leading-relaxed">Ihlamurkuyu Mah. Bilgin Sokak No: 9A<br/>Ümraniye / İstanbul</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white border border-slate-200 shadow-sm rounded-sm flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">Telefon</h4>
                    <p className="text-slate-600 leading-relaxed">0216 611 58 32</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white border border-slate-200 shadow-sm rounded-sm flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">E-Posta</h4>
                    <p className="text-slate-600 leading-relaxed">info@alkamekanik.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-sm p-6 sm:p-8 lg:p-10 text-slate-900 shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold mb-6">Mesaj Gönderin</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Ad Soyad</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Adınız Soyadınız" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">E-Posta</label>
                    <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="ornek@sirket.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Konu</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Proje Danışmanlığı" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Mesajınız</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" placeholder="Projenizden kısaca bahsedin..."></textarea>
                </div>
                <button type="button" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-sm transition-colors shadow-md">
                  Mesajı Gönder
                </button>
              </form>
            </div>

          </div>
        </section>

        {/* 8. Footer */}
        <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              
              {/* Brand */}
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-primary p-1.5 rounded-sm">
                  <Hexagon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-tighter text-white leading-none">ALKA</h2>
                  <span className="text-[9px] font-semibold tracking-widest text-slate-500 uppercase">Mekanik</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Sürdürülebilir, güvenli ve yenilikçi mühendislik çözümleriyle geleceğin yapılarını bugünden inşa ediyoruz.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Hızlı Bağlantılar</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-primary-light transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Ana Sayfa</a></li>
                <li><a href="#hakkimizda" className="hover:text-primary-light transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Hakkımızda</a></li>
                <li><a href="#urunler" className="hover:text-primary-light transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Ürünlerimiz</a></li>
                <li><a href="#partnerler" className="hover:text-primary-light transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Partnerler</a></li>
                <li><a href="#iletisim" className="hover:text-primary-light transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> İletişim</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Hizmetlerimiz</h4>
              <ul className="space-y-3">
                <li><a href="#hizmetlerimiz" className="hover:text-primary-light transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Ürün Tedariği</a></li>
                <li><a href="#hizmetlerimiz" className="hover:text-primary-light transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Yedek Parça Tedariği</a></li>
                <li><a href="#hizmetlerimiz" className="hover:text-primary-light transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Danışmanlık</a></li>
                <li><a href="#hizmetlerimiz" className="hover:text-primary-light transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Kurulum</a></li>
                <li><a href="#hizmetlerimiz" className="hover:text-primary-light transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> Bakım Hizmetleri</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">E-Bülten</h4>
              <p className="text-sm mb-4">Sektörel gelişmelerden ve projelerimizden haberdar olmak için bültenimize kayıt olun.</p>
              <form className="flex">
                <input type="email" placeholder="E-posta adresiniz" className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-l-sm focus:outline-none focus:border-primary text-sm text-white" />
                <button type="button" className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-r-sm transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Alka Mekanik Makina Endüstriyel San. Tic. Ltd. Şti. Tüm hakları saklıdır.</p>
              <span className="hidden md:inline text-slate-600">|</span>
              <p>
                <a href="https://kerimyeniyildiz.com.tr" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">SEO Uzmanı</a>
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
              <a href="#" className="hover:text-white transition-colors">Kullanım Koşulları</a>
              <a href="#" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</a>
            </div>
          </div>
          </div>
        </footer>

        {/* Mobile Sticky Action Bar */}
        <div className="md:hidden fixed bottom-0 left-0 w-full z-50 flex shadow-[0_-5px_15px_rgba(0,0,0,0.1)]">
          <a href="tel:02166115832" className="flex-1 bg-primary text-white py-4 flex items-center justify-center gap-2 font-semibold text-sm border-r border-white/20 active:bg-primary-dark transition-colors">
            <Phone className="w-5 h-5" />
            Hemen Ara
          </a>
          <a href="https://wa.me/902166115832" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#25D366] text-white py-4 flex items-center justify-center gap-2 font-semibold text-sm active:bg-[#1ea952] transition-colors">
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
