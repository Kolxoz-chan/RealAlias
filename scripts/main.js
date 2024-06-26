function play()
{
	main_menu.style["display"] = "none";
	card_menu.style["display"] = "none"
	select_menu.style["display"] = "block";
	
	reset_data()
}

function reset_data()
{
	words_by_categories = {
		"База" : [].concat(base_words),
		"Начинающие" : ["Аватарка","Алгоритм","Бит","Браузер","Блокнот","Вай-Фай","Вирус","Ворд","Гаджет","Глюк","Папка","Флешка","Драйвер","Клик","Клава","Логин","Электронная почта","Горячая клавиша","Расширение файла ","Архив","Интернет","Компьютер ","Монитор","Системный блок","Процессор","Видеокарта","Звуковаякарта","Материнская плата","Блок питания","Жетский диск","Операционная система","Файл","Курсор мыши","Пиксель","Графический редактор","Колонки","Наушники","Веб-камера","Принтер","Сканер","Проектор","Меню","Ник","Ноутбук","Обои","Оперативка","Пират","Антивирус","Программа","Презентация","скриншот","Слайд","Спам","кулер","дисковод","дискета","планшет","Информация","Экран","Микросхема","Айтишник","Хакер","Юзер"],
		"2D графика" : ["Альфа-канал","Баннер","Гифка","Исходник","Логотип","Иконка","Кривая Безье","Анимация","Штапм","Пластырь","Кисть","Булевые операции","Контур","Заливка","Градиент","Текст","Направляющие","Режим слоя","Фигура","Группа","Кегель","Текстура","Экспорт","Цветовая палитра","Растровая графика","Векторная графика ","Муар","Миниатюры","Редизайн","Референс","Скин"].concat(base_words),
		"3D графика" : ["Дедлайн","Ключевой кадр","Вершина","Ребро","Полигон","3d курсор","Коллекция","Материал","Рендеринг","Меш объект","Кривая Безье","Рычаг","Модификатор","Экструдивароние","Родительская связь","Шкала времени","Вид спереди","Масштабирование","Вращение","Свойство","Режим редактирования","Центр объекта","Примитив","Ось","Сцена","Камера","Блик","Источник освещения","Зеркало","3D графика","Воксельная графика","Рыбий глаз"].concat(base_words),
		"Веб-технологии" : ["IP (айпи)","Биткоин","Битая ссылка","Бэкап","Бэкенд","Фронтенд","Варезник","Вебинар","Вики ","Выделенка","Гайд ","Гитхаб","Джаваскрипт","Джуниор","Дисконнект","Домен","Линк","Мировая паутина","Модем","Модератор","Сайт","Страница","HTML","Тег","Атрибут","Цветовая палитра","Гиперссылка","Фреймворк","Фаервол","Сервер","Хостинг","Облако","Модем","Онлайн","Оптика","Сеть","Офлайн","Официальный сайт","Пинг","Паутина ","Подкаст","Поплыла вёрстка","Интерфейс","Верстка","Пост","Провайдер","Прокси-сервер","Протокол","Маршрутизатор","Куки","Поисковик","Трафик","Рунет","root","Cёрфер ","Свайп ","Сёрфинг","Сессия","Сетевик","Локальная сеть","Сисадмин","Скроллинг","Стретч","Стрим","Стример","Субдомен","Туториал","Урл","Почтовый сервер","Адаптивный","Капча","Авторизация","Переадресация","Хедер","Блочная верстка","Таблица"].concat(base_words),
		"Программисты" : ["Апгрейд","Апдейт","Архиватор","База Данных","Бан","Батон","Тостер","Бета-версия ","Бета-тестер","Библиотека ","Биткоин","Болванка","Бутявка","Валидация","Винда","Геймпад","Геймплей","Гитхаб","Переменная","Гуру","Даблтап","Движок","Девелопер","Декремент","Демка","Деструктор","Дефолтный","Динамический массив","Змея","Итерация","Кодер","Компилятор","Линуксоид","Лиса","Массив","Биос","Мыло","Мануал","Мышкодром","Слеш","Периферия","Пинговать","Фиксить","Радиобаттон","Виджет","Рандом","Ребут","Рекурсия","Релиз ","Инструкция","Сервис пак","Синий экран (смерти)","Синтаксис","Синтаксическая ошибка","Скилл ","Софт","Тимлид","Дистрибутив","Айдишник","Хинт"].concat(base_words),
		"Робототехники" : ["Последовательное соединение","Параллельное соединение","Макетная плата","Светодиод","электромотор ","Ротор","Источник питания","Провод","Батарейка","Крона","Переключатель","Кнопка","Лампочка","Робот ","Рычаг","Трение","Колесо","Наклонная плоскость","Конструктор","Мультиметр","Диэлектрик","Микросхема","Клемма"].concat(base_words),
		"Профи" : ["ЗЫ","Железячник","Дыра","ДоС ","Войтивайти","Инсталлировать","Интерпретатор","Индусский код","Имхо","Имплементация","Идентификатор","Ирка","Кастомер","Касперыч","Кибибайт","Кирпич","Кора дуба","Корень","Костыль","Лаг","Лапша ","Лист","Макрос","Зафейлить","Стек","Репозиторий","Паттерн","Монолит","Опенсорс ","Аутентификация","Область видимости","Форточки","Откат","Отладчик","Очепятка","Паркинг ","Пень","Песочница","Пилить (жечь) болванку ","Пилот","Офтопик ","PC speaker","Побитовые операции","Превьюшка","Пушить","Репозиторий","Саппорт","Свап ","Стек","Транслитерация","Утилита","Плагин"].concat(base_words),
	}
}

function generate_word(cat, pass=false)
{
	if(current_word && current_cat && !pass)
	{
		var index = words_by_categories[current_cat].indexOf(current_word)
		if(index >= 0)
		{
			words_by_categories[current_cat].splice(index, 1)
		}
	}
	
	var words = words_by_categories[cat]
	
	if(words.length > 0)
	{
		var num = Math.floor(Math.random() * words.length)
		current_word = words[num]
		card.animate(
		[
			{ transform: "rotate3d(0, 1, 0, 0deg)",  color : "white"},
			{ transform: "rotate3d(0, 1, 0, 180deg)",  color : "white"}, 
			{ transform: "rotate3d(0, 1, 0, 360deg)" ,  color : "black"}
		], 
		{ duration: 500 })
		
		var r = Math.round(Math.random() * 255)
		var g = Math.round(Math.random() * 255)
		var b = Math.round(Math.random() * 255)
		
		var dr = Math.round(r / 2)
		var dg = Math.round(g / 2)
		var db = Math.round(b / 2)
		
		card.style["border"] = "5px solid " + `rgb(${dr}, ${dg}, ${db})`
		card.style["box-shadow"] = "0 0 10px black, inset 0 0 50px " + `rgb(${r}, ${g}, ${b})`
	}
	else
	{
		current_word = "Игра окончена<br>Все молодцы"
	}
	
	card.innerHTML = current_word.toUpperCase()
}


var main_menu = document.getElementById("main-menu")
var select_menu = document.getElementById("select-menu")
var card_menu = document.getElementById("card-menu")
var cetegory_title = document.getElementById("cetegory-title")
var card = document.getElementById("card")
var card_text = document.getElementById("card-text")
var categories_list = document.getElementById("categories-list")

var current_word = ""
var current_cat = ""
var words_by_categories = {}
var base_words = ["Аватарка","Авторизация","Админ","Аккаунт","Алгоритм","Баг","Байт","Бит","Блок-схема","Блютус","Бот","Браузер","Блокнот","Вай-Фай","Винт","Вирус","Ворд","Гаджет","Глюк","Грызун","Папка","Диск","Дистрибутив","Драйвер","Еррор","Железо","Капс Лок","Капча","Клава","Клик","Копипаст","Лайфхак ","Логин","Горячая клавиша","Расширение файла ","Архив","Интернет","Компьютер ","Монитор","Системный блок","Процессор","Видеокарта","Звуковая карта","Материнская плата","Блок питания","Жетский диск","Операционная система","Файл","Курсор мыши","Пиксель","Графический редактор","Колонки","Наушники","Веб-камера","Принтер","Сканер","Проектор","Тачпад","Меню","Ник","Ноутбук","Обои","Оперативка","Цикл","Условие","Переменная","Пират","Антивирус","Пиратка","Программа","Презентация","скриншот","Слайд","Спам","Тестировщик","кулер","дисковод","дискета","планшет","Информация","Экран","Микросхема","Оптический диск","Кратковременная память","Айтишник","Хакер","Юзер","Пароль"]
var images = {
	"База" : "base.jpg",
	"2D графика" : "graph.jpg",
	"3D графика" : "graph3.jpg",
	"Веб-технологии" : "web.jpg",
	"Программисты" : "prog.jpg",
	"Робототехники" : "rob.jpg",
	"Профи" : "prof.jpg",
	"Начинающие" : "mlad.jpg"
	
}

reset_data()
for(var key in words_by_categories)
{
	var but = document.createElement("div")
	categories_list.appendChild(but)
	but.textContent = key
	but.category = key
	but.classList.add("category")
	but.style["background-image"] = "url(images/" + images[key] + ")"
	but.onclick = function()
	{
		current_cat = this.category
		
		select_menu.style["display"] = "none"
		card_menu.style["display"] = "block"
		cetegory_title.textContent = current_cat
		
		generate_word(current_cat)
	}
}


