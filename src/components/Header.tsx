import React from 'react';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  user: any;
  theme: 'light' | 'dark';
}

export default function Header({ user, theme }: HeaderProps) {
  return (
    <header className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-sm sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Icon name="Plane" size={32} className="text-blue-600" />
            <div className="flex flex-col">
              <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>АвиаКарго</h1>
              {user && (
                <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Привет, {user.first_name}! 👋
                </span>
              )}
            </div>
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
  );
}