import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600">Полный спектр авиатранспортных услуг</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: 'Zap', color: 'text-yellow-500', title: 'Экспресс доставка', desc: 'Срочная доставка в течение 24 часов', text: 'Максимально быстрая доставка критически важных грузов по всей России.', price: 'От 180 ₽/кг' },
            { icon: 'Package', color: 'text-blue-500', title: 'Стандартная доставка', desc: 'Оптимальное соотношение цены и скорости', text: 'Надежная доставка в течение 2-3 дней по выгодным тарифам.', price: 'От 120 ₽/кг' },
            { icon: 'Thermometer', color: 'text-red-500', title: 'Температурный режим', desc: 'Специальные условия хранения', text: 'Доставка грузов с соблюдением температурного режима от -18°C до +25°C.', price: 'От 250 ₽/кг' }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-md">
                <CardHeader>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3, type: 'spring', stiffness: 200 }}
                  >
                    <Icon name={service.icon as any} size={40} className={`${service.color} mb-4`} />
                  </motion.div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.text}</p>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                  >
                    <Badge variant="secondary">{service.price}</Badge>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}