import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">О компании АвиаКарго</h2>
            <p className="text-lg text-gray-600 mb-6">
              Мы специализируемся на авиаперевозках грузов по всей территории России с 2015 года. 
              Наша компания обеспечивает быструю, надежную и безопасную доставку для тысяч клиентов.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Собственный парк воздушных судов, современные логистические центры и опытная команда 
              профессионалов гарантируют высочайший уровень сервиса.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">9 лет</h3>
                <p className="text-gray-600">На рынке логистики</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-2">50+</h3>
                <p className="text-gray-600">Городов доставки</p>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="/img/89fc2e4e-9ab7-4824-8477-ef0846e3abdd.jpg" 
              alt="Логистический центр" 
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}