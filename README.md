## RestoRunner
### Web-приложение для доставки еды

Приложение ["RestoRunner"](https://resto--runner.herokuapp.com) позволяет бесконтактно заказать еду в гостиничный номер напрямую из ресторана отеля, в котором проживает постоялец. Заказчик хотел получить современное, функциональное и адаптивное под мобильные устройства веб-приложение с возможностью заказать еду в гостиничный номер напрямую из ресторана отеля. Интерфейс приложения состоит из трех частей: 
1. Клиентская - это та часть в которой пользователь заказывает еду;
2. Административная - включает в себя функционал учета всех заказов, возможностьих редактирования и отправки их на доставку;
3. Со стороны кухни - контроль готовности заказов. 

#### Клиентская часть:
- Шапка приложения
- Поиск
- Слайдер


- Авторизация
  для комнаты №2 (**/room/2**):
 phone **9999999902**
 pincode **0002**
 <img src="/readme/authorization.png"  height="500" >

- Главная страница
 <img src="/readme/main_page.png"  height="500" >

- Меню
 <img src="/readme/menu.png"  height="500" >

- Страница с заказами пользователя
 <img src="/readme/orders.png"  height="500" >

- Страница с корзиной пользователя
 <img src="/readme/cart.png"  height="500" >

#### Панель управления администратора:
- Просмотр актуальных заказов, с возможностью изменить состояние заказа и его редактирование
 <img src="/readme/admin_main_page.png"  height="500" >

- Панель редактирования заказа
 <img src="/readme/edit_panel.png"  height="500" >

#### Панель управления на кухне:
- Просмотр актуальных заказов, с возможностью изменить состояние заказа 
 <img src="/readme/cookmaster_main_page.png"  height="500" >

## Стек технологий:
**JavaScript**

**DB**: PostgreSQL, Sequelize ORM

**Back**: Node.js, Express

**Front**: React + Redux, Redux-Saga, HTML5, CSS, Material UI


## Планы развития:
* Полнофункциональное внедрение оплаты
* Адаптация приложения под все виды устройств

### Установка:
В директории 2 папки:
* **server/** Отвечает за back-end. 
   * cd server
   * npm i
   * npx sequelize db:create
   * npx sequelize db:migrate
   * npx sequelize db:seed:all
   * npm run dev
* **client/** - front-end. 
   * cd client 
   * npm i
   * npm start

