Проектная работа № 12 Яндекс.Практикум

Содержание
1. [Структура проекта](#structure)
2. [Этапы установки](#install)
3. [Конфигурационные файлы проекта](#config)
4. [Используемые модули](#modules)
5. [Версия](#version)
6. [Ссылка](#link)
7. [Автор](#author)


<a name='#structure'></a>
Структура проекта
|./src/index.html
    ./src – папка с файлами проекта
    ./src/blocks – папка, содержащая структуру папок и файлов стилей в соответствии со спецификацией БЭМ
    ./src/images – папка с изображениями
    ./src/js – папка с файлами скриптов javascript
    ./src/pages – папка с файлом index.css (основной файл стилей)
    ./src/vendor – папка с файлами шрифтов
    ./images – папка с изображениями для build сборки
    ./data - папка, содержащая файлы БД пользователей и карточек
    ./routes - папка, содержащая роуты для обработки запросов пользователей


<a name='#install'></a>
Этапы установки
Клонировать репозиторий

git clone https://github.com/Tatiana81/project12.git

Установить пакеты, указанные в разделе Используемые модули, с помощью npm install

В зависимости от решаемой задачи

 a. Запустить веб-сервер разработчика командой npm run dev для визуального контроля изменений.

 b. Запустить сборку проекта командой npm run build

 c. Запустить сервер для обработки запросов пользователей командой npm run start

<a name='config'></a>
Конфигурационные файлы проекта:
webpack.config.js содержит правила обработки файлов js, css, файлов изображений и шрифтов

package.json – общие настройки npm, включая скрипты запуска, точку входа, установленные модули.

babel.config.js – настройка поддержки javascript браузерами

postcss.config.js - настройка поддержки css браузерами

.nojekyll – обеспечение совместимости со структурой проекта, выполненной в соответствии с спецификацией БЭМ

app.js - точка входа. Скрипт, который запускается при старте сервера


<a name='modules'></a>
Используемые модули
express: 6.4.14
@babel/cli: 7.8.4
@babel/core: 7.9.0
@babel/preset-env: 7.9.0
babel-loader: 8.1.0
css-loader: 3.4.2, 
exports-loader: 0.7.0, 
file-loader: 6.0.0, 
gh-pages: 2.2.0, 
html-webpack-plugin: 3.2.0, 
image-webpack-loader: 6.0.0, 
imports-loader": 0.8.0, 
mini-css-extract-plugin: 0.9.0, 
optimize-css-assets-webpack-plugin: 5.0.3, 
postcss-import": 12.0.1, 
postcss-loader": 3.0.0, 
postcss-preset-env: 6.7.0, 
style-loader: 1.1.3, 
svg-inline-loader: 0.8.2, 
webpack: 4.42.0, 
webpack-cli: 3.3.11, 
webpack-dev-server: 3.10.3, 
webpack-md5-hash: 0.0.6

<a name='version'></a>
Версия: 1.0.1

<a name='link'></a>
Ссылка на адрес страницы: https://tatiana81.github.io/project12/

<a name='author'></a>
Автор: Суроева Татьяна
