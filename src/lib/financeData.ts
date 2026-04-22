import type { Employee, SystemSettings, ExpenseCategory, Drop } from '@/types/finance';

// Дропы (платежные провайдеры)
export const initialDrops: Drop[] = [
  { id: 'drop1', name: 'Дроп 1', commission: 22 },
  { id: 'drop2', name: 'Дроп 2', commission: 20 },
  { id: 'drop3', name: 'Дроп 3', commission: 25 },
];

// Команда Вохи
const vohaTeam: Employee[] = [
  { id: 'futbolist', name: 'Футболист', role: 'manager', team: 'voha', salary: 350, percentRastamozhka: 15, percentDobiv: 10, percentProfit: 0, isSpecial: false, percentDobivDyadya: 5 },
  { id: 'milosh', name: 'Милош', role: 'manager', team: 'voha', salary: 350, percentRastamozhka: 15, percentDobiv: 10, percentProfit: 0, isSpecial: false, percentDobivDyadya: 5 },
  { id: 'hata', name: 'Хата', role: 'manager', team: 'voha', salary: 350, percentRastamozhka: 15, percentDobiv: 10, percentProfit: 0, isSpecial: false, percentDobivDyadya: 5 },
  { id: 'brus', name: 'Брус', role: 'manager', team: 'voha', salary: 350, percentRastamozhka: 15, percentDobiv: 10, percentProfit: 0, isSpecial: false, percentDobivDyadya: 5 },
  { id: 'berlet', name: 'Берлет', role: 'manager', team: 'voha', salary: 350, percentRastamozhka: 15, percentDobiv: 10, percentProfit: 0, isSpecial: false, percentDobivDyadya: 5 },
  { id: 'poltava', name: 'Полтава', role: 'manager', team: 'voha', salary: 350, percentRastamozhka: 15, percentDobiv: 10, percentProfit: 0, isSpecial: false, percentDobivDyadya: 5 },
  { id: 'maer', name: 'Маер', role: 'manager', team: 'voha', salary: 350, percentRastamozhka: 15, percentDobiv: 10, percentProfit: 0, isSpecial: false, percentDobivDyadya: 5 },
  { id: 'voha', name: 'Воха', role: 'manager', team: 'voha', salary: 0, percentRastamozhka: 15, percentDobiv: 10, percentProfit: 0, isSpecial: false, percentDobivDyadya: 5 },
  { id: 'bodya', name: 'Бодя', role: 'manager', team: 'voha', salary: 350, percentRastamozhka: 15, percentDobiv: 10, percentProfit: 0, isSpecial: false, percentDobivDyadya: 5 },
];



// Клоузеры
const closers: Employee[] = [
  { id: 'vanya', name: 'Ваня', role: 'closer', team: null, salary: 0, percentRastamozhka: 0, percentDobiv: 5, percentProfit: 0, isSpecial: false },
  { id: 'pasha', name: 'Паша', role: 'closer', team: null, salary: 0, percentRastamozhka: 0, percentDobiv: 5, percentProfit: 0, isSpecial: false },
  { id: 'dyadya', name: 'Дядя', role: 'closer', team: null, salary: 0, percentRastamozhka: 0, percentDobiv: 10, percentProfit: 0, isSpecial: false },
  { id: 'vanya_pasha', name: 'Ваня + Паша (Вместе)', role: 'closer', team: null, salary: 0, percentRastamozhka: 0, percentDobiv: 10, percentProfit: 0, isSpecial: false },
];

// IT отдел
const itDepartment: Employee[] = [
  { id: 'it_dept', name: 'IT отдел', role: 'it', team: null, salary: 3000, percentRastamozhka: 0, percentDobiv: 0, percentProfit: 0, isSpecial: false },
];

// Особые роли
const specialRoles: Employee[] = [
  { id: 'philipp_plein_special', name: 'Philipp Plein (ОП)', role: 'special', team: null, salary: 500, percentRastamozhka: 0, percentDobiv: 0, percentProfit: 0, isSpecial: true },
  { id: 'piton_special', name: 'Питон (ОП)', role: 'special', team: null, salary: 500, percentRastamozhka: 0, percentDobiv: 0, percentProfit: 0, isSpecial: true },
  { id: 'exel_special', name: 'EXEL (ОП)', role: 'special', team: null, salary: 500, percentRastamozhka: 0, percentDobiv: 0, percentProfit: 0, isSpecial: true },
  { id: 'ceo_special', name: 'CEO (ОП)', role: 'special', team: null, salary: 500, percentRastamozhka: 0, percentDobiv: 0, percentProfit: 0, isSpecial: true },
  { id: 'sportik_special', name: 'Спортик', role: 'special', team: null, salary: 1000, percentRastamozhka: 0, percentDobiv: 0, percentProfit: 0, isSpecial: true },
];

export const initialEmployees: Employee[] = [
  ...vohaTeam,
  ...closers,
  ...itDepartment,
  ...specialRoles,
];

// Настройки системы
export const initialSettings: SystemSettings = {
  currentPeriodId: 'period-2026-01-26',
  securityCost: 30000, // раз в 2 месяца
  rentCost: 15500, // раз в 2 месяца
  itSalaries: {
    it_dept: 3000,
  },
  minSalary: 350,
};

// Категории расходов
export const initialExpenseCategories: ExpenseCategory[] = [
  { id: 'cat-security', name: 'Безопасность', type: 'fixed' },
  { id: 'cat-rent', name: 'Аренда', type: 'fixed' },
  { id: 'cat-traffic-ads', name: 'Трафик АДС', type: 'personal' },
  { id: 'cat-manual-ads', name: 'Ручной закуп АДС', type: 'personal' },
  { id: 'cat-rusnoj-tg', name: 'Русной закуп ТГ', type: 'personal' },
  { id: 'cat-avito', name: 'Авито', type: 'personal' },
  { id: 'cat-yandex-direct', name: 'Яндекс директ', type: 'personal' },
  { id: 'cat-yandex', name: 'Яндекс', type: 'personal' },
  { id: 'cat-tg-boost', name: 'Накрутка на ТГ', type: 'personal' },
  { id: 'cat-subscriptions', name: 'Подписки', type: 'common' },
  { id: 'cat-content', name: 'Контент', type: 'personal' },
  { id: 'cat-tech', name: 'Тех. расходы', type: 'tech' },
  { id: 'cat-telephony', name: 'Телефония', type: 'common' },
  { id: 'cat-office', name: 'Офисные расходы', type: 'common' },
  
  // Telegram Channels
  { id: 'cat-chan-autoprigon024', name: 't.me/autoprigon024', type: 'personal' },
  { id: 'cat-chan-PapaEuroCar', name: 't.me/PapaEuroCar', type: 'personal' },
  { id: 'cat-chan-AutoSelection_EU', name: 't.me/AutoSelection_EU', type: 'personal' },
  { id: 'cat-chan-WestToDrive', name: 't.me/WestToDrive', type: 'personal' },
  { id: 'cat-chan-Way_Home_RU', name: 't.me/Way_Home_RU', type: 'personal' },
  { id: 'cat-chan-PodZakazLab', name: 't.me/PodZakazLab', type: 'personal' },
  { id: 'cat-chan-Europa_Motors', name: 't.me/Europa_Motors', type: 'personal' },
  { id: 'cat-chan-FastCarDelivery01', name: 't.me/FastCarDelivery01', type: 'personal' },
  { id: 'cat-chan-Car_Import_RU01', name: 't.me/Car_Import_RU01', type: 'personal' },
  { id: 'cat-chan-GrandImport', name: 't.me/GrandImport', type: 'personal' },
  { id: 'cat-chan-Euro_avto_tut', name: 't.me/Euro_avto_tut', type: 'personal' },
  { id: 'cat-chan-Prigon_EU_AUTO', name: 't.me/Prigon_EU_AUTO', type: 'personal' },
  { id: 'cat-chan-Auto_ImportFromEU', name: 't.me/Auto_ImportFromEU', type: 'personal' },
  { id: 'cat-chan-Auto_euro_zdes', name: 't.me/Auto_euro_zdes', type: 'personal' },
];

// Расчет общей ЗП IT отдела
export const getTotalITSalary = (settings: SystemSettings): number => {
  return settings.itSalaries.it_dept || 3000;
};

// Расчет постоянных расходов за период (1/4 от суммы за 2 месяца)
export const getFixedExpensesPerPeriod = (settings: SystemSettings): number => {
  return (settings.securityCost + settings.rentCost) / 4;
};
