import React from 'react';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Авиаперевозки по России
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Быстрая и надежная доставка грузов по всей территории РФ. 
            Профессиональные логистические решения для вашего бизнеса.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/img/a2eafc70-cc1e-44bf-ab7f-d28d4aff2d73.jpg" 
              alt="Грузовой самолет" 
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <Icon name="Clock" size={32} className="text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-2xl text-gray-900 mb-2">24ч</h3>
                <p className="text-gray-600">Экспресс доставка</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <Icon name="MapPin" size={32} className="text-red-600 mx-auto mb-3" />
                <h3 className="font-bold text-2xl text-gray-900 mb-2">200+</h3>
                <p className="text-gray-600">Городов России</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <Icon name="Package" size={32} className="text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-2xl text-gray-900 mb-2">99.8%</h3>
                <p className="text-gray-600">Сохранность груза</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <Icon name="Users" size={32} className="text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold text-2xl text-gray-900 mb-2">5000+</h3>
                <p className="text-gray-600">Довольных клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}