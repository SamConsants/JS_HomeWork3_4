var element = document.createElement('div');
element.classList.add('topic');
element.innerHTML = 'Тест по программированию';

var content = {
	header: 'Тест по программированию',
	question: ['Вопрос №1','Вопрос №2','Вопрос №3'];
	checkboxName: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
	id: ['1','2', '3','4', '5','6', '7', '8', '9'];
	answer: ['Вариант ответа №1','Вариант ответа №2', 'Вариант ответа №3',
            'Вариант ответа №1','Вариант ответа №2', 'Вариант ответа №3',
            'Вариант ответа №1','Вариант ответа №2', 'Вариант ответа №3'];
    submit: 'Проверить результаты'
} 

var k = 0;

var header = document.createElement('h2');
	header.innerHTML = xontent.header;
	header.style.marginBottom = '60px';
	header.style.fontFamily = 'Arial';
	header.style.textAlign = 'center';


var parent = document.body;