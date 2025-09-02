import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface CalculatorProps {
  calculator: {
    weight: string;
    from: string;
    to: string;
    cargo: string;
  };
  setCalculator: (calculator: any) => void;
  calculatedPrice: number | null;
  calculatePrice: () => void;
}

export default function Calculator({ calculator, setCalculator, calculatedPrice, calculatePrice }: CalculatorProps) {
  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Калькулятор стоимости</h2>
          <p className="text-xl text-gray-600">Рассчитайте стоимость доставки вашего груза</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
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
                <motion.div 
                  className="text-center sm:text-left"
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
                >
                  <p className="text-sm text-gray-600">Стоимость доставки:</p>
                  <motion.p 
                    className="text-3xl font-bold text-green-600"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2, type: 'spring', stiffness: 300 }}
                  >
                    {calculatedPrice.toLocaleString()} ₽
                  </motion.p>
                </motion.div>
              )}
            </div>
          </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}