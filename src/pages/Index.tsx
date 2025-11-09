import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const menuData = {
  burgers: [
    { name: 'Классический чизбургер', price: 240 },
    { name: 'Двойной бургер с беконом', price: 320 },
    { name: 'Куриный бургер в тортилье', price: 280 },
    { name: 'Сэндвич с ветчиной и сыром', price: 220 },
    { name: 'Вегетарианский бургер с фалафелем', price: 260 }
  ],
  snacks: [
    { name: 'Картошка фри (маленькая/большая)', price: 120, priceAlt: 180 },
    { name: 'Наггетсы (6/12 шт.)', price: 150, priceAlt: 270 },
    { name: 'Сырные палочки (6 шт.)', price: 190 },
    { name: 'Луковые кольца (8 шт.)', price: 170 },
    { name: 'Куриные крылья (5 шт.)', price: 250 }
  ],
  salads: [
    { name: 'Цезарь с курицей', price: 290 },
    { name: 'Греческий салат', price: 270 },
    { name: 'Салат из свежих овощей', price: 180 },
    { name: 'Крабовый салат', price: 240 }
  ],
  sides: [
    { name: 'Картофель по-деревенски', price: 160 },
    { name: 'Рис с овощами', price: 140 },
    { name: 'Овощная смесь на пару', price: 130 }
  ],
  soups: [
    { name: 'Суп-пюре грибной', price: 190 },
    { name: 'Солянка', price: 210 },
    { name: 'Лапша куриная', price: 180 }
  ],
  drinks: [
    { name: 'Кола Добрая (0,5 л)', price: 150 },
    { name: 'Чай (чёрный/зелёный, 0,3 л)', price: 70 },
    { name: 'Кофе американо (0,2 л)', price: 80 },
    { name: 'Капучино (0,3 л)', price: 110 },
    { name: 'Морс ягодный (0,5 л)', price: 100 },
    { name: 'Лимонад домашний (0,5 л)', price: 120 }
  ],
  desserts: [
    { name: 'Чизкейк Нью-Йорк', price: 180 },
    { name: 'Пирожное «Наполеон»', price: 150 },
    { name: 'Брауни с мороженым', price: 200 },
    { name: 'Фруктовый салат', price: 170 },
    { name: 'Вафельный рожок с мороженым', price: 90 }
  ],
  combos: [
    { name: 'Обед № 1 (солянка + бургер + чай + пирожное)', price: 590 },
    { name: 'Обед № 2 (суп-пюре + курица с картошкой + морс + чизкейк)', price: 620 },
    { name: 'Обед № 3 (лапша + сэндвич + кофе + фруктовый салат)', price: 570 }
  ],
  kids: [
    { name: 'Мини-бургер с картошкой фри', price: 220 },
    { name: 'Макароны с сыром', price: 160 },
    { name: 'Куриные наггетсы с овощами', price: 200 },
    { name: 'Молочный коктейль (ванильный/шоколадный)', price: 140 },
    { name: 'Яблочные дольки с йогуртом', price: 120 }
  ]
};

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-primary flex items-center gap-2">
              <Icon name="Utensils" size={32} />
              Поел? Иди.
            </h1>
            <div className="flex gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className={`font-medium transition-colors hover:text-primary ${
                  activeSection === 'home' ? 'text-primary' : 'text-gray-600'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className={`font-medium transition-colors hover:text-primary ${
                  activeSection === 'menu' ? 'text-primary' : 'text-gray-600'
                }`}
              >
                Меню
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className={`font-medium transition-colors hover:text-primary ${
                  activeSection === 'contacts' ? 'text-primary' : 'text-gray-600'
                }`}
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-accent via-white to-orange-50">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                ⚡ Готовим за 5 минут
              </div>
              <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
                <span className="text-primary">Быстро.</span><br />
                Вкусно.<br />
                <span className="text-secondary">Сытно.</span>
              </h2>
              <p className="text-xl text-gray-700">
                Кафе быстрого питания в самом центре Красноярска. 
                <span className="font-bold text-primary">Готовим за 5 минут</span> — для тех, кто ценит время и качество!
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 bg-primary hover:bg-primary/90"
                  onClick={() => scrollToSection('menu')}
                >
                  <Icon name="ChefHat" size={20} className="mr-2" />
                  Смотреть меню
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => scrollToSection('contacts')}
                >
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Как добраться
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/bca0e680-ad96-45f8-a29d-fb0cf2ebe9c4/files/5e125c0f-5afe-4353-b3f3-a14b1fe13811.jpg"
                alt="Вкусная еда"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Icon name="Zap" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-primary">⚡ За 5 минут</p>
                    <p className="text-gray-600">готово и горячее!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наше меню</h2>
            <p className="text-xl text-gray-600">Выбирай что по душе — <span className="font-bold text-primary">приготовим за 5 минут!</span></p>
          </div>

          <Tabs defaultValue="burgers" className="w-full">
            <TabsList className="w-full flex-wrap h-auto gap-2 bg-accent/50 p-2 mb-8">
              <TabsTrigger value="burgers" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                <Icon name="Burger" size={18} className="mr-2" />
                Бургеры
              </TabsTrigger>
              <TabsTrigger value="snacks" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                <Icon name="Pizza" size={18} className="mr-2" />
                Закуски
              </TabsTrigger>
              <TabsTrigger value="salads" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                <Icon name="Salad" size={18} className="mr-2" />
                Салаты
              </TabsTrigger>
              <TabsTrigger value="sides" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                <Icon name="UtensilsCrossed" size={18} className="mr-2" />
                Гарниры
              </TabsTrigger>
              <TabsTrigger value="soups" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                <Icon name="Soup" size={18} className="mr-2" />
                Супы
              </TabsTrigger>
              <TabsTrigger value="drinks" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                <Icon name="Coffee" size={18} className="mr-2" />
                Напитки
              </TabsTrigger>
              <TabsTrigger value="desserts" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                <Icon name="IceCream" size={18} className="mr-2" />
                Десерты
              </TabsTrigger>
              <TabsTrigger value="combos" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                <Icon name="Package" size={18} className="mr-2" />
                Комплексы
              </TabsTrigger>
              <TabsTrigger value="kids" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                <Icon name="Baby" size={18} className="mr-2" />
                Детское
              </TabsTrigger>
            </TabsList>

            {Object.entries(menuData).map(([key, items]) => (
              <TabsContent key={key} value={key} className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item, idx) => (
                    <Card
                      key={idx}
                      className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/30"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg flex-1">{item.name}</h3>
                      </div>
                      <div className="flex items-end justify-between mt-4">
                        <div>
                          <span className="text-2xl font-bold text-primary">{item.price} ₽</span>
                          {item.priceAlt && (
                            <span className="text-xl font-bold text-primary ml-2">/ {item.priceAlt} ₽</span>
                          )}
                        </div>
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          <Icon name="Plus" size={16} />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Ждём вас каждый день!</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={32} className="text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Адрес</h3>
              <p className="text-gray-600">просп. Мира, 65</p>
              <p className="text-gray-600">г. Красноярск, 660049</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-secondary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Режим работы</h3>
              <p className="text-gray-600">Пн-Пт: 8:00 - 23:00</p>
              <p className="text-gray-600">Сб-Вс: 9:00 - 23:00</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Телефон</h3>
              <a href="tel:+79087772132" className="text-gray-600 hover:text-primary transition-colors">
                +7 (908) 777-21-32
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={32} className="text-secondary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Email</h3>
              <a href="mailto:Poelidi@mail.ru" className="text-gray-600 hover:text-secondary transition-colors">
                Poelidi@mail.ru
              </a>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <a href="tel:+79087772132">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить нам
              </Button>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Utensils" size={24} />
            <span className="text-xl font-bold">Поел? Иди.</span>
          </div>
          <p className="text-gray-400">© 2025 Кафе быстрого питания. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}