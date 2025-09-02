import React from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Авиаперевозки по России
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Быстрая и надежная доставка грузов по всей территории РФ. 
            Профессиональные логистические решения для вашего бизнеса.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="/img/a2eafc70-cc1e-44bf-ab7f-d28d4aff2d73.jpg" 
              alt="Грузовой самолет" 
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: 'Clock', color: 'text-blue-600', value: '24ч', label: 'Экспресс доставка', delay: 0.1 },
                { icon: 'MapPin', color: 'text-red-600', value: '200+', label: 'Городов России', delay: 0.2 },
                { icon: 'Package', color: 'text-green-600', value: '99.8%', label: 'Сохранность груза', delay: 0.3 },
                { icon: 'Users', color: 'text-purple-600', value: '5000+', label: 'Довольных клиентов', delay: 0.4 }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + item.delay }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon name={item.icon as any} size={32} className={`${item.color} mx-auto mb-3`} />
                  <h3 className="font-bold text-2xl text-gray-900 mb-2">{item.value}</h3>
                  <p className="text-gray-600">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}