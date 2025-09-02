import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface TrackingSectionProps {
  trackingCode: string;
  setTrackingCode: (code: string) => void;
}

export default function TrackingSection({ trackingCode, setTrackingCode }: TrackingSectionProps) {
  return (
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
  );
}