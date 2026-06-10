# Техническая спецификация — Анна Суязова

## Зависимости

### Уже включены (webapp-building init)
- React 19 + TypeScript + Vite
- Tailwind CSS 3.4.19
- shadcn/ui (40+ компонентов)
- Radix UI primitives
- Lucide React иконки
- clsx, tailwind-merge

### Дополнительные зависимости

| Пакет | Назначение |
|-------|------------|
| *нет* | Все необходимые зависимости уже включены в shadcn/ui |

---

## Компоненты

### shadcn/ui (уже установлены)

| Компонент | Назначение |
|-----------|------------|
| `Button` | CTA-кнопки (Primary, Secondary, Ghost) |
| `Input` | Поля формы (имя, телефон, город) |
| `Textarea` | Поле сообщения в форме |
| `Select` | Dropdown «Что интересует» |
| `Card` | Карточки услуг, отзывов |
| `Badge` | Trust badges, награды |

### Кастомные компоненты

| Компонент | Описание | Принимает |
|-----------|----------|-----------|
| `Navigation` | Фиксированный хедер с blur-эффектом | — |
| `MobileMenu` | Fullscreen мобильное меню | `isOpen`, `onClose` |
| `SectionHeader` | Заголовок секции (label + h2 + subtitle) | `label`, `title`, `subtitle?` |
| `ServiceCard` | Карточка услуги с иконкой и списком | `icon`, `title`, `description`, `features` |
| `ProcessStep` | Шаг процесса с номером | `number`, `title`, `description` |
| `TestimonialCard` | Карточка отзыва | `quote`, `author`, `role`, `screenshot?` |
| `AwardBadge` | Бейдж награды | `icon`, `title`, `year` |
| `ContactLink` | Ссылка на контакт с иконкой | `href`, `icon`, `label`, `value` |
| `ScrollReveal` | Обертка для анимации появления | `children`, `delay?`, `direction?` |

---

## Хуки

| Хук | Назначение |
|-----|------------|
| `useScrollHeader` | Отслеживание скролла для смены фона навигации (threshold 50px) |
| `useScrollReveal` | IntersectionObserver для анимаций появления секций |
| `useMediaQuery` | Определение мобильного/десктоп breakpoints |

---

## Анимации — реализация

| Анимация | Библиотека | Подход | Сложность |
|----------|------------|--------|-----------|
| Scroll-triggered entrance | CSS transitions + IntersectionObserver | Кастомный хук `useScrollReveal`, CSS-классы `.revealed` | Medium |
| Hero entrance sequence | CSS keyframes | CSS animation с `animation-delay` для stagger | Low |
| Nav background transition | CSS transition | `transition: background, border 300ms` | Low |
| Card hover lift | CSS transition | `transition: transform, box-shadow 300ms` | Low |
| Button hover | CSS transition | `transition: background, border-color 200ms` | Low |
| Mobile menu slide | CSS transition | `transition: transform, opacity 400ms` | Low |
| Stagger children | CSS transition + delay | `transition-delay: ${index * 100}ms` | Low |

**Вывод**: Все анимации реализуются через CSS transitions/keyframes + IntersectionObserver. Никаких дополнительных библиотек не требуется.

---

## Состояния и логика

### Навигация
- Состояние: `scrolled` (boolean) — флаг после 50px скролла
- Состояние: `mobileMenuOpen` (boolean) — управление мобильным меню

### Форма
- Состояние: поля формы (`name`, `phone`, `city`, `interest`, `message`)
- Валидация: обязательные поля (имя, телефон), минимальная длина
- Отправка: `mailto:` ссылка или `fetch` к форм-обработчику

---

## Структура проекта

```
src/
├── sections/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Team.tsx
│   ├── About.tsx
│   ├── Testimonials.tsx
│   ├── Process.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── components/
│   ├── SectionHeader.tsx
│   ├── ServiceCard.tsx
│   ├── ProcessStep.tsx
│   ├── TestimonialCard.tsx
│   ├── AwardBadge.tsx
│   ├── ContactLink.tsx
│   └── ScrollReveal.tsx
├── hooks/
│   ├── useScrollHeader.ts
│   └── useScrollReveal.ts
├── App.tsx
├── main.tsx
└── index.css
public/
├── anna-white-laptop.jpg
├── anna-red-dress.jpg
├── anna-fireplace.jpg
└── testimonial-screenshot.jpg
```

---

## CSS-стратегия

### Tailwind кастомизации (tailwind.config.js)

```js
// Добавить в theme.extend
colors: {
  'bg-primary': '#fffaf7',
  'bg-secondary': '#f5efe9',
  'bg-dark': '#0d1b3e',
  'text-primary': '#172033',
  'text-muted': '#60708c',
  'accent': '#e73c47',
  'accent-dark': '#c42835',
  'accent-soft': '#fef2f2',
  'border-custom': '#e8e0d8',
}
```

### Глобальные стили (index.css)

- CSS-переменные для дизайн-токенов
- Класс `.scroll-reveal` для IntersectionObserver-анимаций
- Класс `.scroll-reveal.revealed` для активного состояния
- `scroll-behavior: smooth` для якорных ссылок
- Сброс стандартных стилей
