import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Plane" size={32} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">АвиаКарго</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#tariffs" className="text-gray-700 hover:text-blue-600 transition-colors">Тарифы</a>
              <a href="#tracking" className="text-gray-700 hover:text-blue-600 transition-colors">Отслеживание</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">О компании</a>
              <a href="#contacts" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Калькулятор стоимости</h2>
            <p className="text-xl text-gray-600">Рассчитайте стоимость доставки вашего груза</p>
          </div>
          
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Calculator" size={24} className="text-blue-600" />
                <span>Расчет стоимости доставки</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="weight">Вес груза (кг)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="Введите вес"
                    value={calculator.weight}
                    onChange={(e) => setCalculator({...calculator, weight: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cargo-type">Тип груза</Label>
                  <Select value={calculator.cargo} onValueChange={(value) => setCalculator({...calculator, cargo: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип груза" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Стандартный груз</SelectItem>
                      <SelectItem value="express">Экспресс доставка</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="from">Откуда</Label>
                  <Input
                    id="from"
                    placeholder="Город отправления"
                    value={calculator.from}
                    onChange={(e) => setCalculator({...calculator, from: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="to">Куда</Label>
                  <Input
                    id="to"
                    placeholder="Город назначения"
                    value={calculator.to}
                    onChange={(e) => setCalculator({...calculator, to: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button 
                  onClick={calculatePrice} 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  size="lg"
                >
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                
                {calculatedPrice && (
                  <div className="text-center sm:text-left">
                    <p className="text-sm text-gray-600">Стоимость доставки:</p>
                    <p className="text-3xl font-bold text-green-600">{calculatedPrice.toLocaleString()} ₽</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Tracking Section */}
      <section id="tracking" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Отслеживание груза</h2>
            <p className="text-xl text-gray-600">Узнайте актуальный статус вашего отправления</p>
          </div>
          
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Search" size={24} className="text-blue-600" />
                <span>Поиск по трек-номеру</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex space-x-4">
                <Input
                  placeholder="Введите трек-номер (например: AC123456789RU)"
                  value={trackingCode}
                  onChange={(e) => setTrackingCode(e.target.value)}
                  className="flex-1"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="Search" size={20} className="mr-2" />
                  Отследить
                </Button>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-4 text-gray-600">
                  <Icon name="Info" size={20} />
                  <p>Введите трек-номер для получения актуальной информации о статусе доставки</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tariffs Section */}
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

      {/* About Section */}
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

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами для оформления заказа</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="shadow-xl">
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

      {/* Footer */}
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
    </div>
  );
}