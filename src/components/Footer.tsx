import React from 'react';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Plane" size={32} className="text-blue-400" />
              <h3 className="text-2xl font-bold">АвиаКарго</h3>
            </div>
            <p className="text-gray-400">
              Надежная авиадоставка грузов по всей России. Быстро, безопасно, профессионально.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Экспресс доставка</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Стандартная доставка</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Температурные грузы</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Опасные грузы</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Поддержка</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Отследить груз</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Калькулятор</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Документы</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 АвиаКарго. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}