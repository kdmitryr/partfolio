# Клик — портфолио Дмитрия Кондратьева

Fullstack-разработчик: веб-сервисы на Laravel и PHP, интеграции с ЮKassa, Telegram-боты, парсеры, лендинги и интернет-магазины.

**Сайт портфолио: https://kdmitryr.github.io/partfolio/**

PDF-версия: [portfolio-klik.pdf](portfolio-klik.pdf)

## Проекты

| # | Проект | Что это |
|---|--------|---------|
| 01 | [MySort](https://musort.ru/) | Сервис выноса мусора по подписке, Laravel, ЮKassa, Яндекс ID, PWA |
| 02 | Оплата умной розетки | ЮKassa включает массажное кресло, таймер и гарантированное отключение |
| 03 | [Белый квадрат](https://beliy-kvadrat.ru/) | Сайт дизайнерского ремонта с калькулятором сметы |
| 04 | Formul | Интернет-магазин итальянской мебели, 500+ фабрик |
| 05 | Blogwave | Платформа технических блогов, REST API |
| 06 | Парсер компаний без сайта | Node.js + API 2ГИС, база лидов |
| 07 | Локальная нейросеть для киберзащиты | Поиск уязвимостей и справка по устранению |
| 08 | Telegram-боты для заявок | Заявка с сайта → бот → уведомление владельцу |
| 09 | Автоперевод инструкции | Python: OCR, стирание оригинала, русский текст, PDF |
| 10 | БайкалСтрой | Лендинг: дома из сибирской сосны и кедра |
| 11 | SIM Terminal | Тренажёр биржевого терминала |

## Контакты

- Telegram: [@Kuza_Adidas](https://t.me/Kuza_Adidas)
- E-mail: kuza.adidas@bk.ru
- ВКонтакте: [Создание сайтов | Клик](https://vk.ru/club241566581)

---

## Публикация

Сайт статический (HTML, CSS, немного JS) и лежит в корне репозитория; `.nojekyll` отключает обработку Jekyll.

Деплой делает workflow `.github/workflows/pages.yml` при пуше в `main` и по кнопке Run workflow. Чтобы он заработал, в **Settings → Pages → Build and deployment → Source** нужно один раз выбрать **GitHub Actions**: создать сайт Pages сам workflow не может, токену Actions это не разрешено.

PDF пересобирается скриптом `tools/make-pdf.mjs`:

```sh
npm i playwright && npx playwright install chromium
python3 -m http.server 8765 &
node tools/make-pdf.mjs
```
