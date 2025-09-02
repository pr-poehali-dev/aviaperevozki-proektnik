import { useEffect, useState } from 'react';
import {
  backButton,
  closingBehavior,
  initData,
  mainButton,
  themeParams,
  viewport,
  WebApp,
} from '@telegram-apps/sdk';

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
}

interface UseTelegramReturn {
  webApp: WebApp | null;
  user: TelegramUser | null;
  initDataUnsafe: any;
  isExpanded: boolean;
  theme: 'light' | 'dark';
  showMainButton: (text: string, onClick: () => void) => void;
  hideMainButton: () => void;
  showBackButton: (onClick: () => void) => void;
  hideBackButton: () => void;
  sendData: (data: any) => void;
  close: () => void;
  ready: () => void;
}

export function useTelegram(): UseTelegramReturn {
  const [webApp, setWebApp] = useState<WebApp | null>(null);
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [initDataUnsafe, setInitDataUnsafe] = useState<any>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      setWebApp(tg);
      setUser(tg.initDataUnsafe?.user || null);
      setInitDataUnsafe(tg.initDataUnsafe);
      setIsExpanded(tg.isExpanded);
      setTheme(tg.colorScheme === 'dark' ? 'dark' : 'light');

      // Инициализация SDK компонентов
      try {
        initData.restore();
        themeParams.restore();
        mainButton.restore();
        backButton.restore();
        viewport.restore();
        closingBehavior.restore();
        
        // Расширяем viewport
        if (viewport.state.status === 'ready') {
          viewport.expand();
        }
      } catch (error) {
        console.log('Telegram WebApp SDK initialization:', error);
      }

      // Готовность приложения
      tg.ready();
    }
  }, []);

  const showMainButton = (text: string, onClick: () => void) => {
    if (webApp) {
      try {
        if (mainButton.state.status === 'ready') {
          mainButton.setText(text);
          mainButton.show();
          mainButton.on('click', onClick);
        } else {
          webApp.MainButton.text = text;
          webApp.MainButton.show();
          webApp.MainButton.onClick(onClick);
        }
      } catch (error) {
        console.log('Main button error:', error);
      }
    }
  };

  const hideMainButton = () => {
    if (webApp) {
      try {
        if (mainButton.state.status === 'ready') {
          mainButton.hide();
        } else {
          webApp.MainButton.hide();
        }
      } catch (error) {
        console.log('Hide main button error:', error);
      }
    }
  };

  const showBackButton = (onClick: () => void) => {
    if (webApp) {
      try {
        if (backButton.state.status === 'ready') {
          backButton.show();
          backButton.on('click', onClick);
        } else {
          webApp.BackButton.show();
          webApp.BackButton.onClick(onClick);
        }
      } catch (error) {
        console.log('Back button error:', error);
      }
    }
  };

  const hideBackButton = () => {
    if (webApp) {
      try {
        if (backButton.state.status === 'ready') {
          backButton.hide();
        } else {
          webApp.BackButton.hide();
        }
      } catch (error) {
        console.log('Hide back button error:', error);
      }
    }
  };

  const sendData = (data: any) => {
    if (webApp) {
      webApp.sendData(JSON.stringify(data));
    }
  };

  const close = () => {
    if (webApp) {
      webApp.close();
    }
  };

  const ready = () => {
    if (webApp) {
      webApp.ready();
    }
  };

  return {
    webApp,
    user,
    initDataUnsafe,
    isExpanded,
    theme,
    showMainButton,
    hideMainButton,
    showBackButton,
    hideBackButton,
    sendData,
    close,
    ready,
  };
}

// Типы для глобального объекта Telegram
declare global {
  interface Window {
    Telegram?: {
      WebApp: any;
    };
  }
}