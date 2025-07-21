import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import cast1    from './assets/halls/cast1.jpg';
import cast2    from './assets/halls/cast2.jpg';
import cast3    from './assets/halls/cast3.jpg';

import content1 from './assets/halls/content1.jpg';
import content2 from './assets/halls/content2.jpg';
import content3 from './assets/halls/content3.jpg';

import cyclo1   from './assets/halls/cyclo1.jpg';
import cyclo2   from './assets/halls/cyclo2.jpg';
import cyclo3   from './assets/halls/cyclo3.jpg';

import basicImg   from './assets/packages/basic.png';
import workingImg from './assets/packages/working.png';
import contenttImg from './assets/packages/contentt.png';
import proImg     from './assets/packages/pro.png';

import video1 from './assets/portfolio/1.mov';
import poster1 from './assets/portfolio/1.png';
import video2 from './assets/portfolio/2.mov';
import poster2 from './assets/portfolio/2.png';
import video3 from './assets/portfolio/3.mov';
import poster3 from './assets/portfolio/3.png';
import video4 from './assets/portfolio/4.mov';
import poster4 from './assets/portfolio/4.png';
import video5 from './assets/portfolio/5.mov';
import poster5 from './assets/portfolio/5.png';
import video6 from './assets/portfolio/6.mov';
import poster6 from './assets/portfolio/6.png';
import video7 from './assets/portfolio/7.mov';
import poster7 from './assets/portfolio/7.png';
import video8 from './assets/portfolio/8.mov';
import poster8 from './assets/portfolio/8.png';
import video9 from './assets/portfolio/9.mov';
import poster9 from './assets/portfolio/9.png';
import video10 from './assets/portfolio/10.mov';
import poster10 from './assets/portfolio/10.png';


// Языковые данные
const languages = {
  uz: {
    title: 'STUDIO 21',
    buttons: {
      rental: 'Studiya ijari',
      packages: 'Ijara paketlari',
      production: 'Prodakshn',
      portfolio: 'Portfolio',
      rules: 'Qoidalar'
    },
    subtitles: {
      packages: '60% gacha tejamkor',
      production: 'Reels, Podcast, YouTube'
    },
    contact: {
      phone: 'Telefon',
      email: 'Email',
      instagram: 'Instagram'
    },
    modals: {
      rental: {
        title: 'Studiya ijari',
        book: 'Bron qilish',
        halls: {
          cast: 'CAST zali',
          content: 'CONTENT zali',
          cyclo: 'CYCLO zali'
        }
      },
      packages: {
        title: 'Ijara paketlari',
        book: 'Bron qilish'
      },
      portfolio: {
        title: 'Portfolio',
        reels: 'Reels',
        youtube: 'YouTube'
      }
    }
  },
  ru: {
    title: 'STUDIO 21',
    buttons: {
      rental: 'Аренда студии',
      packages: 'Пакеты на аренду',
      production: 'Продакшн',
      portfolio: 'Портфолио',
      rules: 'Правила'
    },
    subtitles: {
      packages: 'на 60% выгодно',
      production: 'Reels, Podcast, YouTube'
    },
    contact: {
      phone: 'Телефон',
      email: 'Email',
      instagram: 'Instagram'
    },
    modals: {
      rental: {
        title: 'Аренда студии',
        book: 'Забронировать',
        halls: {
          cast: 'Зал CAST',
          content: 'Зал CONTENT',
          cyclo: 'Зал CYCLO'
        }
      },
      packages: {
        title: 'Пакеты на аренду',
        book: 'Забронировать'
      },
      portfolio: {
        title: 'Портфолио',
        reels: 'Рилсы',
        youtube: 'YouTube'
      }
    }
  },
  en: {
    title: 'STUDIO 21',
    buttons: {
      rental: 'Studio Rental',
      packages: 'Rental Packages',
      production: 'Production',
      portfolio: 'Portfolio',
      rules: 'Rules'
    },
    subtitles: {
      packages: 'up to 60% savings',
      production: 'Reels, Podcast, YouTube'
    },
    contact: {
      phone: 'Phone',
      email: 'Email',
      instagram: 'Instagram'
    },
    modals: {
      rental: {
        title: 'Studio Rental',
        book: 'Book Now',
        halls: {
          cast: 'CAST Hall',
          content: 'CONTENT Hall',
          cyclo: 'CYCLO Hall'
        }
      },
      packages: {
        title: 'Rental Packages',
        book: 'Book Now'
      },
      portfolio: {
        title: 'Portfolio',
        reels: 'Reels',
        youtube: 'YouTube'
      }
    }
  }
};

function App() {
  const [loading, setLoading] = useState(true);
  const [showLanguageSelect, setShowLanguageSelect] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('ru');
  const [activeModal, setActiveModal] = useState(null);
  const [selectedHall, setSelectedHall] = useState(null);
  const [portfolioFilter, setPortfolioFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
const [currentIndex, setCurrentIndex] = useState(0);

  const t = languages[selectedLanguage];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowLanguageSelect(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setShowLanguageSelect(false);
  };

  const halls = {
    cast: {
      name: t.modals.rental.halls.cast,
      description: 'Профессиональная пространство для reels и подкастов',
      price: { day: '650 000', evening: '750 000', night: '950 000' },
   images: [cast1, cast2, cast3],
      features: ['Профессиональное освещение', 'Два микрофона']
    },
    content: {
      name: t.modals.rental.halls.content,
      description: 'Создание контента для социальных сетей',
      price: { day: '800 000', evening: '900 000', night: '1 100 000' },
images: [content1 ,content2, content3],
      features: ['Панорманые окна', 'Два микрофона']
    },
    cyclo: {
      name: t.modals.rental.halls.cyclo,
      description: 'Зал циклорама для съемок коммерческих проектов',
      price: { day: '500 000', evening: '600 000', night: '800 000' },
images: [cyclo1, cyclo2, cyclo3],
      features: ['Белая циклорама','Съёмка коммерческих проектов']
    }
  };

  const packages = [
    {
      name: '🟢 Базовый',
      hours: '4 часа в месяц',
      prices: { day: '1 600 000', evening: '2 000 000', night: '2 400 000' },
      image: basicImg
    },
    {
      name: '🔵 Рабочий',
      hours: '8 часов в месяц',
      prices: { day: '2 900 000', evening: '3 700 000', night: '4 500 000' },
      image: workingImg
    },
    {
      name: '⚫ Контент',
      hours: '12 часов в месяц',
      prices: { day: '4 000 000', evening: '5 300 000', night: '6 500 000' },
      image: contenttImg
    },
    {
      name: '🟤 Профи',
      hours: '20 часов в месяц',
      prices: { day: '5 800 000', evening: '7 800 000', night: '9 600 000' },
      image: proImg
    }
  ];

  const portfolioItems = {
reels: [
    { id: 1, type: 'local', title: 'Reel 1', videoSrc: video1, poster: poster1 },
    { id: 2, type: 'local', title: 'Reel 2', videoSrc: video2, poster: poster2 },
  { id: 3, type: 'local', title: 'Reel 3', videoSrc: video3, poster: poster3 },
  { id: 4, type: 'local', title: 'Reel 4', videoSrc: video4, poster: poster4 },
  { id: 5, type: 'local', title: 'Reel 5', videoSrc: video5, poster: poster5 },
  { id: 6, type: 'local', title: 'Reel 6', videoSrc: video6, poster: poster6 },
  { id: 7, type: 'local', title: 'Reel 7', videoSrc: video7, poster: poster7 },
  { id: 8, type: 'local', title: 'Reel 8', videoSrc: video8, poster: poster8 },
  { id: 9, type: 'local', title: 'Reel 9', videoSrc: video9, poster: poster9 },
    { id: 10, type: 'local', title: 'Reel 10', videoSrc: video10, poster: poster10 },
  ],
    youtube: [
      { id: 6, type: 'youtube', title: 'SmartCarrier | Джамшид Киргизов', videoId: 'UWSns2IvfcE' },
      { id: 7, type: 'youtube', title: 'MAGNIT | Tanangiz necha yoshda?', videoId: 'RZJ2f1wRD9A' },
      { id: 8, type: 'youtube', title: 'SEREDIN | Дмитрий Косаченко - Mcosmetic', videoId: 'M5BFQ5lg' },
      { id: 9, type: 'youtube', title: 'SmartCarrier | 278,000$ за 4 месяца', videoId: 'U7vze-72uP0' },
      { id: 10, type: 'youtube', title: 'SMARTLIFE | IPHONE 16', videoId: 'kpZJSmh3IWA' }
    ]
  };

  const getFilteredPortfolio = () => {
    if (portfolioFilter === 'all') {
      return [...portfolioItems.reels, ...portfolioItems.youtube];
    }
    return portfolioItems[portfolioFilter] || [];
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <motion.div
          className="logo-container"
          initial={{ filter: 'blur(20px)', opacity: 0, scale: 0.8 }}
          animate={{ filter: 'blur(0px)', opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="logo">21</h1>
        </motion.div>
      </div>
    );
  }

  if (showLanguageSelect) {
    return (
      <div className="language-select-screen">
        <motion.div
          className="language-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="language-title">Choose Language / Til tanlang / Выберите язык</h2>
          <div className="language-buttons">
            <motion.button
              className="language-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLanguageSelect('uz')}
            >
              🇺🇿 O'zbek
            </motion.button>
            <motion.button
              className="language-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLanguageSelect('ru')}
            >
              🇷🇺 Русский
            </motion.button>
            <motion.button
              className="language-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLanguageSelect('en')}
            >
              🇬🇧 English
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="app">
      <motion.div
        className="main-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="main-logo-container"
          initial={{ filter: 'blur(10px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="main-logo">21</h1>
        </motion.div>

        <motion.div
          className="buttons-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {[
            { key: 'rental', label: t.buttons.rental, icon: '🏠' },
            { key: 'packages', label: t.buttons.packages, icon: '📦', subtitle: t.subtitles.packages },
            { key: 'production', label: t.buttons.production, icon: '🎬', subtitle: t.subtitles.production },
            { key: 'portfolio', label: t.buttons.portfolio, icon: '🎨' },
            { key: 'rules', label: t.buttons.rules, icon: '📋' }
          ].map((button, index) => (
            <motion.button
              key={button.key}
              className="glass-button"
              initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
              animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveModal(button.key)}
            >
              <span className="button-icon">{button.icon}</span>
              <span className="button-label">{button.label}</span>
              {button.subtitle && (
                <span className="button-subtitle">{button.subtitle}</span>
              )}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="contact-info"
          initial={{ filter: 'blur(10px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <span>+998 (90) 333-33-66</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <span>vusialstudio@gmail.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <span>@21vstudio</span>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {activeModal && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setActiveModal(null);
              setSelectedHall(null);
            }}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, filter: 'blur(10px)', opacity: 0 }}
              animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
              exit={{ scale: 0.8, filter: 'blur(10px)', opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-button"
                onClick={() => {
                  setActiveModal(null);
                  setSelectedHall(null);
                }}
              >
                ✕
              </button>
              
              <div className="modal-body">
                {activeModal === 'rental' && !selectedHall && (
                  <div className="rental-content">
                    <h2 className="modal-title">{t.modals.rental.title}</h2>
                    <div className="halls-grid">
                      {Object.entries(halls).map(([key, hall]) => (
                        <motion.div
                          key={key}
                          className="hall-card"
                          whileHover={{ scale: 1.02 }}
                          onClick={() => setSelectedHall(key)}
                        >
                          <img src={hall.images[0]} alt={hall.name} />
                          <div className="hall-info">
                            <h3>{hall.name}</h3>
                            <p>{hall.description}</p>
                            <div className="hall-prices">
                              <span>День: {hall.price.day} сум</span>
                              <span>Вечер: {hall.price.evening} сум</span>
                              <span>Ночь: {hall.price.night} сум</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

{activeModal === 'rental' && selectedHall && (
  <div className="hall-detail">
    <button
      className="back-button"
      onClick={() => {
        setSelectedHall(null);
        setCurrentIndex(0);
      }}
    >
      ← Назад
    </button>

    <h2 className="modal-title">{halls[selectedHall].name}</h2>

    {/* Главное фото */}
    <div style={{ position: 'relative', textAlign: 'center' }}>
      <img
        src={halls[selectedHall].images[currentIndex]}
        alt={`${halls[selectedHall].name} ${currentIndex + 1}`}
        onClick={() => setLightboxIndex(currentIndex)}
        style={{
          width: '100%',
          maxHeight: '400px',
          objectFit: 'cover',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 8,
          right: 8,
          background: 'rgba(0,0,0,0.6)',
          color: '#fff',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '12px',
          pointerEvents: 'none'
        }}
      >
        Нажмите, чтобы увеличить
      </div>
    </div>

    {/* Мини‑превью */}
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '12px' }}>
      {halls[selectedHall].images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`thumb ${idx + 1}`}
          onClick={() => setCurrentIndex(idx)}
          style={{
            width: '60px',
            height: '60px',
            objectFit: 'cover',
            borderRadius: '4px',
            margin: '0 6px',
            cursor: 'pointer',
            boxShadow:
              currentIndex === idx
                ? '0 0 0 2px #ff6600'
                : '0 0 2px rgba(0,0,0,0.3)'
          }}
        />
      ))}
    </div>

    {/* Lightbox */}
    {lightboxIndex !== null && (
      <div
        className="lightbox"
        onClick={() => setLightboxIndex(null)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          cursor: 'zoom-out'
        }}
      >
        <button
          onClick={e => {
            e.stopPropagation();
            setLightboxIndex(
              (lightboxIndex - 1 + halls[selectedHall].images.length) %
                halls[selectedHall].images.length
            );
          }}
          style={{
            position: 'absolute',
            left: '16px',
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '2rem',
            cursor: 'pointer'
          }}
        >
          &lt;
        </button>

        <img
          src={halls[selectedHall].images[lightboxIndex]}
          alt="lightbox"
          onClick={e => e.stopPropagation()}
          style={{
            width: 'auto',
            height: '80vh',
            maxWidth: '90vw',
            objectFit: 'contain'
          }}
        />

        <button
          onClick={e => {
            e.stopPropagation();
            setLightboxIndex((lightboxIndex + 1) % halls[selectedHall].images.length);
          }}
          style={{
            position: 'absolute',
            right: '16px',
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '2rem',
            cursor: 'pointer'
          }}
        >
          &gt;
        </button>
      </div>
    )}

    {/* Информация о зале */}
    <div className="hall-detail-info" style={{ marginTop: '16px' }}>

      <h3>Особенности:</h3>
      <ul>
        {halls[selectedHall].features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <h3>Стоимость:</h3>
      <div className="price-list">
        <div>
          🌅 День (09:00-18:00): {halls[selectedHall].price.day} сум/час
        </div>
        <div>
          🌆 Вечер (18:00-24:00): {halls[selectedHall].price.evening} сум/час
        </div>
        <div>
          🌃 Ночь (24:00-06:00): {halls[selectedHall].price.night} сум/час
        </div>
      </div>
<a
  className="book-button"
  style={{ display: 'inline-block', marginTop: '16px' }}
  href={`https://t.me/vcompany21?text=Хочу заказать зал: ${encodeURIComponent(halls[selectedHall].name)}. Можно подробнее?`}
  target="_blank"
  rel="noopener noreferrer"
>
  Заказать
</a>

    </div>
  </div>
)}


                {activeModal === 'packages' && (
                  <div className="packages-content">
                    <h2 className="modal-title">{t.modals.packages.title}</h2>
                    <p className="packages-subtitle">💸 Выгода до 60% по сравнению с почасовой оплатой!</p>
                    <div className="packages-grid">
                      {packages.map((pkg, index) => (
                        <div key={index} className="package-card">
                          <img src={pkg.image} alt={pkg.name} />
                          <div className="package-info">
                            <h3>{pkg.name}</h3>
                            <p className="package-hours">{pkg.hours}</p>
                            <div className="package-prices">
                              <div>День: {pkg.prices.day} сум</div>
                              <div>Вечер: {pkg.prices.evening} сум</div>
                              <div>Ночь: {pkg.prices.night} сум</div>
                            </div>
                          <a
  className="book-button"
  href={`https://t.me/vcompany21?text=Хочу заказать пакет: ${encodeURIComponent(pkg.name)}. Можно подробнее?`}
  target="_blank"
  rel="noopener noreferrer"
>
  {t.modals.packages.book}
</a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

          {activeModal === 'portfolio' && (
  <div className="portfolio-content">
    <h2 className="modal-title">{t.modals.portfolio.title}</h2>
    <div className="portfolio-filter">
      <button
        className={`filter-button ${portfolioFilter === 'all' ? 'active' : ''}`}
        onClick={() => setPortfolioFilter('all')}
      >
        Все
      </button>
      <button
        className={`filter-button ${portfolioFilter === 'reels' ? 'active' : ''}`}
        onClick={() => setPortfolioFilter('reels')}
      >
        {t.modals.portfolio.reels}
      </button>
      <button
        className={`filter-button ${portfolioFilter === 'youtube' ? 'active' : ''}`}
        onClick={() => setPortfolioFilter('youtube')}
      >
        {t.modals.portfolio.youtube}
      </button>
    </div>
    <div className="portfolio-grid">
      {getFilteredPortfolio().map(item => (
        <div key={item.id} className="video-card">
          {item.type === 'youtube' ? (
            <iframe
  src={`https://www.youtube.com/embed/${item.videoId}`}
  title={item.title}
  frameBorder="0"
  allowFullScreen
            ></iframe>
          ) : (
            <video
              src={item.videoSrc}
              poster={item.poster}
              controls
              style={{ width: '100%', aspectRatio: '9/16', objectFit: 'cover' }}
            />
          )}
          <div className="video-info">
            <h3>{item.title}</h3>
            <p className="video-type">
              {item.type === 'youtube' ? 'YouTube' : 'Instagram'}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

                {activeModal === 'production' && (
                  <div className="production-content">
                    <h2 className="modal-title">Продакшн</h2>
                    <div className="services-grid">
                      <div className="service-card">
                        <h3>REELS</h3>
                        <p className="service-price">от 450.000 сум / 1 reels (мин. 5 reels)</p>
                        <ul className="service-details">
                          <li>// Аренда студии: 3 часа</li>
                          <li>// Услуги оператора: Есть</li>
                          <li>// Оборудование: 3 источника света/1 камера</li>
                          <li>// Монтаж: 5 reels</li>
                        </ul>
                      <a
  href="https://t.me/vcompany21?text=Хочу заказать REELS. Можно подробнее?"
  className="book-button"
  target="_blank"
  rel="noopener noreferrer"
>
  Заказать
</a>

                      </div>
                      <div className="service-card">
                        <h3>ПОДКАСТ</h3>
                        <p className="service-price">3.500.000 сум</p>
                        <p className="service-description">Профессиональная запись в течение 3 часов для 2 человек</p>
                        <ul className="service-details">
                          <li>// Аренда студии: 3 часа</li>
                          <li>// Услуги оператора: 2 часа</li>
                          <li>// Оборудование: 3 источника света/3 камеры/2 микрофона</li>
                          <li>// Монтаж: Склейка</li>
                        </ul>
<a
  className="book-button"
  href="https://t.me/vcompany21?text=Хочу заказать ПОДКАСТ. Можно подробнее?"
  target="_blank"
  rel="noopener noreferrer"
>
  Заказать
</a>

                      </div>
                      <div className="service-card">
                        <h3>YOUTUBE</h3>
                        <p className="service-price">от 2.000.000 сум / 1 шт (по запросу)</p>
                        <p className="service-description">Отличное решение для блогеров, экспертов и брендов</p>
                        <ul className="service-details">
                          <li>// Аренда студии: 1 час</li>
                          <li>// Услуги оператора: 1 час</li>
                          <li>// Оборудование: 3 источника света/1 камера</li>
                          <li>// Монтаж: 1 ролик</li>
                        </ul>
                   <a
  className="book-button"
  href="https://t.me/vcompany21?text=Хочу заказать YOUTUBE. Можно подробнее?"
  target="_blank"
  rel="noopener noreferrer"
>
  Заказать
</a>

                      </div>
                    </div>
                  </div>
                )}

                {activeModal === 'rules' && (
  <>
    <div className="rules-content">
      <h2 className="modal-title">Правила бронирования и аренды STUDIO 21</h2>

      <div className="rules-section">
        <h3>🗓 БРОНИРОВАНИЕ</h3>
        <ul>
          <li>Бронирование становится действительным только после 100% предоплаты от стоимости услуг</li>
          <li>В стоимость аренды входит до 5 человек в зале, включая съёмочную команду</li>
          <li>При превышении лимита — доплата 25 000 сум/чел в час</li>
          <li>При отмене или переносе бронирования предоплата не возвращается</li>
        </ul>
      </div>

      <div className="rules-section">
        <h3>🏠 АРЕНДА</h3>
        <ul>
          <li>Подготовка к съёмке и сбор оборудования должны быть завершены в рамках оплаченного времени</li>
          <li>Началом брони считается заявленное время, а не фактическое прибытие</li>
          <li>Минимальное время аренды — 1 час</li>
          <li>Студию необходимо покинуть за 5 минут до окончания аренды для подготовки зала к следующему клиенту</li>
          <li>После съёмки необходимо убрать свои вещи и оставить зал в чистом и исходном состоянии</li>
        </ul>
      </div>

      <div className="rules-section">
        <h3>⛔️ В СТУДИИ ЗАПРЕЩЕНО</h3>
        <ul>
          <li>Находиться в зале в уличной обуви! (разрешается только абсолютно чистая сменная обувь)</li>
          <li>Курить, распивать спиртные напитки и находиться под воздействием запрещённых веществ</li>
          <li>Использовать конфетти, хлопушки, красящие вещества</li>
          <li>Повреждать/ломать оборудование и декорации — ущерб оплачивается арендатором</li>
          <li>Использовать скотч, клей, сверлить стены и иные механические воздействия на оборудование или интерьер</li>
        </ul>
      </div>
    </div>

    <div className="rules-section">
      <h3>🤖 ИИ‑КОНТЕНТ / АВАТАРЫ:</h3>
      <p>
        Если вы используете съёмочный материал, отснятый в студии, для создания ИИ‑аватаров, дипфейков или генеративного контента, студия оставляет за собой право:
      </p>
      <ul>
        <li>приостановить съёмку без возврата оплаты</li>
        <li>
          подать претензию на авторские права на использованные фоны/объекты/свет, если они явно распознаются и принадлежат студии
        </li>
      </ul>
      <p>
        📚 Согласно Закону Республики Узбекистан «Об авторском праве и смежных правах» (статья 5), объектами авторского права признаются:
      </p>
      <ul>
        <li>
          Произведения архитектуры, дизайна интерьера, декора и иные произведения, созданные в результате творческой деятельности.
        </li>
      </ul>
      <p>
        📌 Это означает, что использование узнаваемого пространства или элементов студии в коммерческих ИИ‑проектах может нарушать авторские права владельца студии, если предварительно не согласовано.
      </p>
    </div>
  </>
)}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;