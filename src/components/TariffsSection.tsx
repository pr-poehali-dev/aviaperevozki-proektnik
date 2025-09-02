import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function TariffsSection() {
  return (
    <section id="tariffs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Тарифы</h2>
          <p className="text-xl text-gray-600">Выберите подходящий тариф для вашего груза</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="relative hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-center">Эконом</CardTitle>
              <CardDescription className="text-center">Для стандартных грузов</CardDescription>
              <div className="text-center mt-4">
                <span className="text-4xl font-bold text-gray-900">120 ₽</span>
                <span className="text-gray-600">/кг</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-green-500" />
                <span>Доставка 2-3 дня</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-green-500" />
                <span>Страхование включено</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-green-500" />
                <span>Отслеживание online</span>
              </div>
              <Button className="w-full mt-6">Выбрать тариф</Button>
            </CardContent>
          </Card>
          
          <Card className="relative hover:shadow-xl transition-shadow border-blue-500 border-2">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">Популярный</Badge>
            <CardHeader>
              <CardTitle className="text-center">Стандарт</CardTitle>
              <CardDescription className="text-center">Оптимальный выбор</CardDescription>
              <div className="text-center mt-4">
                <span className="text-4xl font-bold text-gray-900">180 ₽</span>
                <span className="text-gray-600">/кг</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-green-500" />
                <span>Доставка 1-2 дня</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-green-500" />
                <span>Приоритетная обработка</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-green-500" />
                <span>SMS уведомления</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-green-500" />
                <span>Расширенное страхование</span>
              </div>
              <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Выбрать тариф</Button>
            </CardContent>
          </Card>
          
          <Card className="relative hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-center">Премиум</CardTitle>
              <CardDescription className="text-center">Максимальный сервис</CardDescription>
              <div className="text-center mt-4">
                <span className="text-4xl font-bold text-gray-900">250 ₽</span>
                <span className="text-gray-600">/кг</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-green-500" />
                <span>Доставка за 24 часа</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-green-500" />
                <span>Персональный менеджер</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-green-500" />
                <span>Полное страхование</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={16} className="text-green-500" />
                <span>Температурный режим</span>
              </div>
              <Button className="w-full mt-6">Выбрать тариф</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}