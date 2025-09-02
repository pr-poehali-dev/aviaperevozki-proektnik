import React, { useState, useEffect } from 'react';
import { useTelegram } from '@/hooks/useTelegram';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Calculator from '@/components/Calculator';
import ServicesSection from '@/components/ServicesSection';
import TrackingSection from '@/components/TrackingSection';
import TariffsSection from '@/components/TariffsSection';
import AboutSection from '@/components/AboutSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

export default function Index() {
  const { user, theme, showMainButton, hideMainButton, sendData } = useTelegram();
  
  const [calculator, setCalculator] = useState({
    weight: '',
    from: '',
    to: '',
    cargo: 'standard'
  });
  const [trackingCode, setTrackingCode] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    const weight = parseFloat(calculator.weight);
    if (!weight) return;
    
    const baseRate = calculator.cargo === 'express' ? 180 : 120;
    const price = weight * baseRate;
    setCalculatedPrice(price);
    
    if (user) {
      sendData({
        action: 'calculate_price',
        user_id: user.id,
        weight,
        cargo_type: calculator.cargo,
        from: calculator.from,
        to: calculator.to,
        price
      });
    }
  };
  
  useEffect(() => {
    if (calculatedPrice && user) {
      showMainButton('Заказать доставку', () => {
        sendData({
          action: 'order_delivery',
          user_id: user.id,
          order_data: {
            weight: calculator.weight,
            cargo_type: calculator.cargo,
            from: calculator.from,
            to: calculator.to,
            price: calculatedPrice
          }
        });
      });
    } else {
      hideMainButton();
    }
  }, [calculatedPrice, user, calculator, showMainButton, hideMainButton, sendData]);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' : 'bg-gradient-to-br from-slate-50 to-blue-50'}`}>
      <Header user={user} theme={theme} />
      <HeroSection />
      <Calculator 
        calculator={calculator}
        setCalculator={setCalculator}
        calculatedPrice={calculatedPrice}
        calculatePrice={calculatePrice}
      />
      <ServicesSection />
      <TrackingSection 
        trackingCode={trackingCode}
        setTrackingCode={setTrackingCode}
      />
      <TariffsSection />
      <AboutSection />
      <ContactsSection />
      <Footer />
    </div>
  );
}