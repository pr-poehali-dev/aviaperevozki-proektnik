import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600">Полный спектр авиатранспортных услуг</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Icon name="Zap" size={40} className="text-yellow-500 mb-4" />
              <CardTitle>Экспресс доставка</CardTitle>
              <CardDescription>Срочная доставка в течение 24 часов</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Максимально быстрая доставка критически важных грузов по всей России.</p>
              <Badge variant="secondary">От 180 ₽/кг</Badge>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Icon name="Package" size={40} className="text-blue-500 mb-4" />
              <CardTitle>Стандартная доставка</CardTitle>
              <CardDescription>Оптимальное соотношение цены и скорости</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Надежная доставка в течение 2-3 дней по выгодным тарифам.</p>
              <Badge variant="secondary">От 120 ₽/кг</Badge>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Icon name="Thermometer" size={40} className="text-red-500 mb-4" />
              <CardTitle>Температурный режим</CardTitle>
              <CardDescription>Специальные условия хранения</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Доставка грузов с соблюдением температурного режима от -18°C до +25°C.</p>
              <Badge variant="secondary">От 250 ₽/кг</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}