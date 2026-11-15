# Где запускать JavaScript

Выберите удобный вариант. Оба подходят для всех уроков и задач курса.

| Вариант | Когда выбрать | Как запустить |
| --- | --- | --- |
| Песочница в браузере | Окружение ещё не настроено или вы работаете с другого компьютера | Открыть [TryCode](https://trycode.pw/), выбрать JavaScript и вставить код |
| VS Code и Node.js | Окружение уже готово или вы хотите сохранять решения в файлах | Сохранить файл `.js` и выполнить `node имя-файла.js` в терминале |

Можно начать в песочнице и перейти к локальной работе позже. Настройка компьютера не является условием участия в занятиях.

## 1. Работа в песочнице

1. Откройте [TryCode](https://trycode.pw/) или другую JavaScript-песочницу.
2. Выберите JavaScript. Скопируйте один пример из урока или один блок `{ ... }` из `examples/dayNN.js`.
3. Запустите код и сравните вывод `console.log` с ожидаемым.
4. Для задачи скопируйте заготовку из `practice/dayNN.js`, допишите решение и проверочные вызовы.
5. Сохраняйте свой код перед закрытием страницы. Для следующего примера заменяйте содержимое редактора.

Файлы доступны прямо на GitHub; скачивать репозиторий не обязательно. Если повторный запуск сообщает о повторном объявлении переменной, сохраните решение и перезапустите среду песочницы или обновите страницу.

## 2. Если окружение уже установлено

В VS Code откройте **Terminal → New Terminal** («Терминал → Создать терминал») и проверьте:

```bash
node --version
npm --version
```

Если обе команды показывают версии, переходите к разделу «Первый локальный запуск». Примеры курса совместимы с Node.js 20 и новее; при новой установке выбирайте актуальную **LTS**. Статус версий указан на [странице выпусков Node.js](https://nodejs.org/en/about/previous-releases).

Node.js выполняет JavaScript на компьютере. npm — менеджер пакетов, который поставляется вместе с обычной установкой Node.js. Для учебных примеров устанавливать пакеты не требуется.

## 3. Установка VS Code

Скачайте редактор с [официального сайта Visual Studio Code](https://code.visualstudio.com/download). Выберите свою ОС и архитектуру компьютера.

| ОС | Что сделать | Официальная инструкция |
| --- | --- | --- |
| Windows | Запустите User Installer и завершите установку. После установки откройте VS Code | [Windows](https://code.visualstudio.com/docs/setup/windows) |
| macOS | Распакуйте архив и перенесите Visual Studio Code в Applications («Программы») | [macOS](https://code.visualstudio.com/docs/setup/mac) |
| Linux | Установите пакет для своего дистрибутива: `.deb` для Debian/Ubuntu или `.rpm` для Fedora/RHEL | [Linux](https://code.visualstudio.com/docs/setup/linux) |

Откройте **File → Open Folder** («Файл → Открыть папку»), создайте и выберите папку для своих решений, например `js-practice`. Для запуска команд используйте встроенный терминал: **Terminal → New Terminal**. Подсветка JavaScript, подсказки и отладчик уже [встроены в VS Code](https://code.visualstudio.com/docs/nodejs/working-with-javascript).

## 4. Node.js через nvm: macOS и Linux

nvm позволяет устанавливать и переключать версии Node.js. Для macOS/Linux используется [nvm-sh/nvm](https://github.com/nvm-sh/nvm#installing-and-updating). На Windows переходите к следующему разделу.

Откройте системный Terminal. Команды вводите по одной, без символов приглашения `$`.

На macOS при первой настройке установите инструменты командной строки Apple и дождитесь завершения установки:

```bash
xcode-select --install
```

Если они уже установлены, повторная установка не нужна. В стандартном macOS с zsh создайте файл настроек, если его ещё нет:

```bash
touch ~/.zshrc
```

Установите nvm официальным скриптом:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.41.0/install.sh | bash
```

Закройте и заново откройте Terminal. Проверьте nvm, установите LTS и выберите её по умолчанию:

```bash
command -v nvm
nvm install --lts
nvm use --lts
nvm alias default 'lts/*'
node --version
npm --version
```

`command -v nvm` должен вывести `nvm`; две последние команды — номера версий. Команды nvm выполняются от обычного пользователя, без `sudo`.

Если Linux сообщает `curl: command not found`, установите curl пакетным менеджером своего дистрибутива. Для Ubuntu/Debian:

```bash
sudo apt update
sudo apt install curl
```

После этого повторите установку nvm. Если nvm не найден, проверьте [раздел устранения проблем](https://github.com/nvm-sh/nvm#troubleshooting-on-linux): установщик должен добавить загрузку nvm в профиль вашего shell. В zsh это обычно `~/.zshrc`, в bash — `~/.bashrc` или `~/.bash_profile`. Для fish нужен отдельный способ интеграции; для этой инструкции используйте bash или zsh.

## 5. Node.js через nvm: Windows

На Windows используется отдельный проект **NVM for Windows**. Здесь описана актуальная ветка **v2**. Команды macOS/Linux с `--lts` и установочным bash-скриптом для неё не подходят.

1. Откройте [официальную инструкцию установки NVM for Windows](https://docs.nvm-windows.com/install/installers/).
2. В разделе **Community Build** скачайте установщик для своей архитектуры: x64 или ARM64.
3. Запустите установщик от обычного пользователя и пройдите мастер настройки. Если найдена отдельная установка Node.js, прочитайте предложенный вариант переноса **Adopt**; при уже работающем окружении переустановка для курса не требуется.
4. Закройте и заново откройте PowerShell, а также VS Code, если он уже был открыт.

В PowerShell выполните:

```powershell
nvm install lts
nvm use lts
nvm list
node --version
npm --version
```

`nvm list` показывает установленные версии; `node` и `npm` должны вывести номера версий. Синтаксис: [install](https://docs.nvm-windows.com/command/nvm/install/), [use lts](https://docs.nvm-windows.com/command/nvm/use/lts/), [list](https://docs.nvm-windows.com/command/nvm/list/).

Если у вас уже установлена v1, можно оставить её: установите LTS командой `nvm install lts`, посмотрите номер через `nvm list` и выполните `nvm use НОМЕР_ВЕРСИИ`, подставив точный номер. В v1 для переключения обычно нужен PowerShell от администратора; [инструкция v1](https://github.com/nvm-windows/nvm/blob/1.2.2/README.md).

Если PowerShell блокирует `npm.ps1`, используйте `npm.cmd --version` и `npm.cmd test` либо выберите **Command Prompt** в списке профилей терминала VS Code.

## 6. Первый локальный запуск

После установки Node.js полностью перезапустите VS Code. Откройте свою папку `js-practice` через **File → Open Folder**.

1. Создайте файл `day01.js`.
2. Вставьте код:

```javascript
console.log("Привет, JavaScript!");
console.log(2 + 3);
```

3. Сохраните файл: `Ctrl+S` (macOS: `Cmd+S`).
4. Откройте **Terminal → New Terminal** и выполните из папки с файлом:

```bash
node day01.js
```

Ожидаемый вывод:

```text
Привет, JavaScript!
5
```

Дальше копируйте в файл пример или заготовку из нужного дня. Начиная со второго дня, после своей функции добавляйте вызовы через `console.log`: объявление функции само по себе результата не выводит. После изменения кода сохраняйте файл и запускайте команду заново.

Если вы скачали весь репозиторий через **Code → Download ZIP** и распаковали архив, откройте его папку в VS Code. Из корня репозитория можно запускать готовые примеры:

```bash
node examples/day01.js
```

Для работы с одной задачей достаточно своего файла; установка Git и скачивание всего репозитория необязательны. Локальный запуск и встроенный терминал описаны также в [руководстве VS Code по Node.js](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial).

## 7. Расширения VS Code

Откройте **Extensions** («Расширения»): `Ctrl+Shift+X` (macOS: `Cmd+Shift+X`). Найдите расширение по идентификатору из таблицы, откройте карточку и нажмите **Install**. [Как управлять расширениями](https://code.visualstudio.com/docs/configure/extensions/extension-marketplace).

| Расширение | Идентификатор | Для чего |
| --- | --- | --- |
| [Prettier — Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) | `esbenp.prettier-vscode` | Автоматически расставляет отступы и форматирует код |
| [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) | `usernamehw.errorlens` | Показывает сообщения диагностики рядом со строкой кода |
| [Russian Language Pack](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-ru) | `MS-CEINTL.vscode-language-pack-ru` | Переводит интерфейс на русский, если так удобнее |

В репозитории есть рекомендации в [`.vscode/extensions.json`](../.vscode/extensions.json). Если открыли его целиком, найдите в Extensions раздел **Recommended** и установите нужные расширения. Они не устанавливаются автоматически.

### Prettier: форматирование при сохранении

В репозитории уже есть [настройки папки](../.vscode/settings.json) для JavaScript. После установки расширения они включают Prettier и форматирование при сохранении.

Для своей папки `js-practice` создайте внутри неё каталог `.vscode` и файл `settings.json`:

```json
{
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.tabSize": 2,
    "editor.insertSpaces": true
  }
}
```

Если файл уже существует, добавьте ключ `[javascript]` в имеющийся объект. Настройки относятся к открытой папке. Подробнее: [настройки VS Code](https://code.visualstudio.com/docs/configure/settings) и [документация расширения Prettier](https://github.com/prettier/prettier-vscode#default-formatter).

Проверка: создайте файл `format-check.js` со строкой ниже и сохраните:

```javascript
const numbers=[1,2,3];console.log(numbers);
```

Prettier должен расставить пробелы и разделить инструкции по строкам. Через палитру команд (`Ctrl+Shift+P`, macOS: `Cmd+Shift+P`) можно вызвать **Format Document With...**, выбрать **Prettier** и назначить его форматтером по умолчанию.

Для этих упражнений достаточно встроенной в расширение версии Prettier: `npm install` для форматирования не требуется. Если форматирование не сработало, проверьте, что файл сохранён с расширением `.js`, Prettier включён и выбран форматтером, а в коде нет синтаксической ошибки. Prettier меняет оформление; правильность алгоритма проверяйте своими вызовами.

### Error Lens и язык интерфейса

Error Lens работает сразу после установки. Для проверки временно напишите `const = 1;`: рядом появится сообщение о синтаксической ошибке. Затем удалите эту строку. Он показывает диагностику редактора, поэтому не найдёт все ошибки алгоритма. Если сообщения мешают, вызовите **Error Lens: Toggle (Enable/Disable) Everything** через палитру команд.

Для русского интерфейса установите Russian Language Pack, вызовите **Configure Display Language** через палитру команд, выберите `ru` и перезапустите редактор по подсказке.

### ESLint: для проектов с настроенными правилами

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), идентификатор `dbaeumer.vscode-eslint`, — полезное расширение для анализа кода по правилам проекта. Ему нужны библиотека ESLint и конфигурация в проекте; одного расширения недостаточно. В learnJS этот инструмент не настроен и для занятий не требуется. В проекте, где ESLint уже подготовлен, установите расширение и откройте панель **Problems** для просмотра замечаний; Prettier оставьте форматтером.

## 8. Если запуск не получился

| Что происходит | Что проверить |
| --- | --- |
| `node` или `nvm` не найден | Перезапустите терминал и VS Code. На macOS/Linux проверьте загрузку nvm в профиль shell; на Windows — завершение установки и раздел [Troubleshooting](https://docs.nvm-windows.com/troubleshooting/general/) |
| `Cannot find module` при `node day01.js` | Файл сохранён? Терминал открыт в его папке? Посмотрите содержимое через `ls` (macOS/Linux) или `dir` (Windows) |
| Нет вывода | Есть ли вызов `console.log`? После объявления функции есть её вызов? |
| После изменений вывод прежний | Сохраните файл и снова выполните команду `node` |
| `document is not defined` | `document` относится к странице браузера. Примеры основных уроков курса его не используют; DOM-примеры из дополнительных справочников запускайте в браузере |

Если настройка занимает время, продолжайте урок в песочнице. Все задачи курса доступны обоими способами.

[К программе курса](../README.md) · [К справочнику](README.md)
