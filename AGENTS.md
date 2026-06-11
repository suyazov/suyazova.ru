# AGENTS.md — suyazova.ru

## О проекте

Сайт-лендинг для **Анны Суязовой** — консультанта по управлению детскими садами.

- **Домен:** https://suyazova.ru
- **Репозиторий:** https://github.com/suyazov/suyazova.ru
- **Путь на сервере:** `/var/www/suyazova.ru`
- **Тип:** статический лендинг (собран на Vite/React), плюс PHP-скрипт для приёма заявок.

## Структура

```
/var/www/suyazova.ru/
├── index.html              # Точка входа, подключает assets/index-*.js/css
├── assets/                 # Собранные JS/CSS и шрифты
├── assets.json             # Описание ключевых изображений (для AI-редактирования)
├── send-lead.php           # Обработчик формы заявок, отправляет в Telegram
├── .env                    # Секреты (НЕ в git)
├── favicon.ico
├── logo.png / logo-big.png
└── *.jpg                   # Фото и скриншоты
```

## Важные правила

### Секреты

- **Никогда не коммитьте `.env`** — там токен Telegram-бота и chat ID.
- На сервере файл `.env` уже создан и добавлен в `.gitignore`.
- Если нужно изменить секреты — редактируйте только `.env` на сервере.

### Обновления сайта

- Любые изменения файлов в `/var/www/suyazova.ru` автоматически коммитятся и пушатся в GitHub.
- За автопуш отвечает systemd path unit `suyazova-autopush`.
- Ручной пуш тоже доступен: `cd /var/www/suyazova.ru && git push origin main`.

### PHP-скрипт

- `send-lead.php` читает `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID` из `.env`.
- Имеет базовую защиту от спама и ботов (rate limit по IP, honeypot, проверка User-Agent).

## Контакты / доступы

- GitHub: `git@github.com:suyazov/suyazova.ru`
- SSH-ключ для GitHub: `/root/.ssh/id_github_account`
