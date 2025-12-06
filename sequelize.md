# Подробная инструкция по работе с Sequelize и PostgreSQL

## 1. Установка зависимостей

Выполните в терминале:

```bash
npm install sequelize pg pg-hstore sequelize-cli dotenv
```

- `sequelize` — ORM для Node.js
- `pg` — драйвер PostgreSQL
- `pg-hstore` — парсер для хранения объектов
- `sequelize-cli` — утилита для миграций и сидеров
- `dotenv` — загрузка переменных окружения из `.env`

---

## 2. Организация структуры проекта и `.sequelizerc`

Для удобства создайте файл `.sequelizerc` в корне проекта:

```javascript
const path = require('path');
require('dotenv').config({ quiet: true });

module.exports = {
  config: path.resolve('db', 'config', 'database.json'),
  'models-path': path.resolve('db', 'models'),
  'seeders-path': path.resolve('db', 'seeders'),
  'migrations-path': path.resolve('db', 'migrations'),
};
```

**Зачем нужен `.sequelizrc`:**

- Позволяет хранить миграции, модели и сидеры в отдельных папках (например, внутри `db/`).
- Загружает переменные окружения из `.env`.
- Все команды `sequelize-cli` будут использовать указанные пути.

---

## 3. Инициализация структуры проекта

```bash
npx sequelize-cli init
```

Создаст папки:

- `models` — модели данных
- `migrations` — миграции
- `seeders` — сидеры
- `config` — настройки подключения

---

## 4. Настройка подключения к базе данных

### 4.1. Использование `.env` и переменной окружения

Создайте файл `.env` в корне проекта:

```env
DATABASE_URL=postgres://ваш_логин:ваш_пароль@127.0.0.1:5432/название_бд
```

### 4.2. Настройка файла конфигурации

В `db/config/database.json` (или `config/config.json` если не используете `.sequelizrc`) укажите:

```json
{
  "development": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres"
  }
}
```

Sequelize будет использовать строку подключения из `.env`.

---

## 5. Создание и управление базой данных

- Создать базу данных:

  ```bash
  npx sequelize-cli db:create
  ```

- Удалить базу данных:

  ```bash
  npx sequelize-cli db:drop
  ```

---

## 6. Миграции и модели

### 6.1. Создание миграции

Для создания пустой миграции используйте команду:

```bash
npx sequelize-cli migration:generate --name create-users
```

В сгенерированном файле миграции добавьте необходимые атрибуты:

```javascript
await queryInterface.createTable('Users', {
  id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, unique: true, allowNull: false },
  age: { type: Sequelize.INTEGER, allowNull: true },
  isActive: { type: Sequelize.BOOLEAN, defaultValue: true },
  createdAt: { allowNull: false, type: Sequelize.DATE },
  updatedAt: { allowNull: false, type: Sequelize.DATE },
});
```

**Описание атрибутов:**

- `name` — обязательное строковое поле
- `email` — обязательное уникальное строковое поле
- `age` — необязательное числовое поле
- `isActive` — булево поле с дефолтным значением `true`
- `createdAt`, `updatedAt` — обязательные поля времени

### 6.1.1. Быстрое создание модели и миграции с атрибутами

Для автоматического создания модели и миграции с нужными атрибутами используйте команду:

```bash
npx sequelize-cli model:generate --name User --attributes name:string,email:string,age:integer,isActive:boolean
```

- Эта команда создаст модель `User` и миграцию с полями `name`, `email`, `age`, `isActive`.
- Типы данных указываются строчными буквами: `string`, `integer`, `boolean` и т.д.

**Важно:** Команда `migration:generate` не поддерживает автоматическое добавление атрибутов через параметры. Для генерации миграции с атрибутами используйте именно `model:generate`.

После генерации вы можете вручную доработать миграцию, например, добавить `allowNull`, `unique` и другие параметры для полей.

---

### 6.2. Пример миграции

```javascript
await queryInterface.createTable('Users', {
  id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
  name: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING, unique: true },
  createdAt: { allowNull: false, type: Sequelize.DATE },
  updatedAt: { allowNull: false, type: Sequelize.DATE },
});
```

**Для связей добавляйте внешние ключи:**

```javascript
profileId: {
  type: Sequelize.INTEGER,
  references: { model: 'Profiles', key: 'id' },
  onUpdate: 'CASCADE',
  onDelete: 'SET NULL'
}
```

### 6.3. Применение миграций

```bash
npx sequelize-cli db:migrate
```

- Применяет все миграции к базе данных.

---

### 6.4. Создание моделей

Для создания модели используйте команду:

```bash
npx sequelize-cli model:generate --name User --attributes name:string,email:string,age:integer,isActive:boolean
```

- Эта команда создаст файл модели в папке `models` и миграцию в папке `migrations`.
- После генерации вы можете вручную доработать модель, например, добавить валидации, методы или изменить параметры полей.

**Пример содержимого модели (`db/models/user.js`):**

```javascript
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Определение связей, например:
      // User.hasOne(models.Profile, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      age: DataTypes.INTEGER,
      isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
```

**Важно:**

- В файле модели можно описывать связи между моделями в методе `associate`.
- Все изменения в структуре таблицы должны сопровождаться соответствующими миграциями.

---

## 7. Сидеры (seeders)

### 7.1. Создание сидера

```bash
npx sequelize-cli seed:generate --name demo-user
```

### 7.2. Пример сидера

```javascript
await queryInterface.bulkInsert(
  'Users',
  [{ name: 'Ivan', email: 'ivan@mail.com', createdAt: new Date(), updatedAt: new Date() }],
  {}
);
```

### 7.3. Применение сидов

```bash
npx sequelize-cli db:seed:all
```

- Применяет все сидеры (заполняет таблицы начальными данными).

---

## 8. Связи между таблицами

### 8.1. Один к одному (One-to-One)

**В миграции:**

```javascript
userId: {
  type: Sequelize.INTEGER,
  references: { model: 'Users', key: 'id' }
}
```

**В моделях:**

```javascript
User.hasOne(Profile, { foreignKey: 'userId' });
Profile.belongsTo(User, { foreignKey: 'userId' });
```

### 8.2. Один ко многим (One-to-Many)

**В миграции:**

```javascript
userId: {
  type: Sequelize.INTEGER,
  references: { model: 'Users', key: 'id' }
}
```

**В моделях:**

```javascript
User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });
```

### 8.3. Многие ко многим (Many-to-Many)

**Создайте промежуточную таблицу миграцией:**

```javascript
await queryInterface.createTable('UserRoles', {
  userId: {
    type: Sequelize.INTEGER,
    references: { model: 'Users', key: 'id' },
  },
  roleId: {
    type: Sequelize.INTEGER,
    references: { model: 'Roles', key: 'id' },
  },
});
```

**В моделях:**

```javascript
User.belongsToMany(Role, { through: 'UserRoles', foreignKey: 'userId' });
Role.belongsToMany(User, { through: 'UserRoles', foreignKey: 'roleId' });
```

---

## 9. Откат миграций и сидов

- Откат последней миграции:

  ```bash
  npx sequelize-cli db:migrate:undo
  ```

- Откат всех миграций:

  ```bash
  npx sequelize-cli db:migrate:undo:all
  ```

- Откат всех сидов:

  ```bash
  npx sequelize-cli db:seed:undo:all
  ```

---

## 10. Основные команды sequelize-cli

- `npx sequelize-cli init` — инициализация структуры проекта
- `npx sequelize-cli db:create` — создать базу данных
- `npx sequelize-cli db:drop` — удалить базу данных
- `npx sequelize-cli model:generate --name ModelName --attributes ...` — создать модель и миграцию
- `npx sequelize-cli migration:generate --name migration-name` — создать пустую миграцию
- `npx sequelize-cli db:migrate` — применить миграции
- `npx sequelize-cli db:migrate:undo` — откатить последнюю миграцию
- `npx sequelize-cli db:migrate:undo:all` — откатить все миграции
- `npx sequelize-cli seed:generate --name seeder-name` — создать сидер
- `npx sequelize-cli db:seed:all` — применить все сидеры
- `npx sequelize-cli db:seed:undo:all` — откатить все сидеры

---

## 11. Пример структуры проекта

```bash
project/
├── db/
│   ├── config/
│   │   └── database.json
│   ├── migrations/
│   ├── models/
│   └── seeders/
├── node_modules/
├── .env
├── .sequelizerc
├── package.json
```

---

## 12. Полезные ссылки

- [Документация Sequelize](https://sequelize.org/)
- [Документация sequelize-cli](https://github.com/sequelize/cli)
- [Документация dotenv](https://github.com/motdotla/dotenv)

---
