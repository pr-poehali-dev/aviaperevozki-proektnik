import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function ContactsSection() {
  return (
    <section id="contacts" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
          <p className="text-xl text-gray-600">Свяжитесь с нами для оформления заказа</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Контактная информация</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <Icon name="Phone" size={24} className="text-blue-600" />
                <div>
                  <p className="font-semibold">Телефон</p>
                  <p className="text-gray-600">+7 (800) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Icon name="Mail" size={24} className="text-blue-600" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">info@aviakargo.ru</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Icon name="MapPin" size={24} className="text-blue-600" />
                <div>
                  <p className="font-semibold">Адрес офиса</p>
                  <p className="text-gray-600">г. Москва, ул. Авиационная, д. 10</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Icon name="Clock" size={24} className="text-blue-600" />
                <div>
                  <p className="font-semibold">Режим работы</p>
                  <p className="text-gray-600">Пн-Пт: 08:00-20:00, Сб-Вс: 09:00-18:00</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Получить консультацию</CardTitle>
              <CardDescription>Оставьте заявку и мы свяжемся с вами</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Ваше имя" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" placeholder="+7 (___) ___-__-__" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Сообщение</Label>
                <Input id="message" placeholder="Опишите ваш груз и требования" />
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}