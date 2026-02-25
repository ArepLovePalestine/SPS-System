
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Image as ImageIcon } from 'lucide-react';
import { Language } from '../types';

interface PictureGalleryProps {
  lang: Language;
}

const PictureGallery: React.FC<PictureGalleryProps> = ({ lang }) => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800', title: 'Main Campus' },
    { url: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800', title: 'Library' },
    { url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800', title: 'Research Lab' },
    { url: 'https://images.unsplash.com/photo-1523240715630-362a98f1f58b?q=80&w=800', title: 'Student Hub' },
    { url: 'https://images.unsplash.com/photo-1541829070764-84a7d30dee3f?q=80&w=800', title: 'Auditorium' },
    { url: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=800', title: 'Convocation' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop" 
            alt="Gallery" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 w-full">
          <nav className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 mb-6">
            <Link to="/" className="hover:text-white transition-colors">HOME</Link>
            <ChevronRight size={12} />
            <span className="text-white">{lang === 'EN' ? 'PICTURE GALLERY' : 'GALERI GAMBAR'}</span>
          </nav>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-4"
          >
            {lang === 'EN' ? 'Campus Life' : 'Kehidupan Kampus'}
          </motion.h1>
          <p className="text-xl text-white/90 font-light max-w-2xl">
            {lang === 'EN' 
              ? 'A visual journey through the vibrant UTeM campus.' 
              : 'Perjalanan visual melalui kampus UTeM yang ceria.'}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-700"
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2000ms]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <h3 className="text-white font-serif text-xl font-bold">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="py-12 border-t border-gray-100 text-center">
        <Link to="/" className="text-[10px] font-bold text-gray-400 hover:text-[#A51C30] uppercase tracking-widest transition-colors">
          {lang === 'EN' ? 'Back to Home' : 'Kembali ke Utama'}
        </Link>
      </div>
    </div>
  );
};

export default PictureGallery;
