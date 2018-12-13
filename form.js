

window.onload = function() {
	var go = document.getElementById("go");
	var start = document.getElementById("start");
	var question = document.getElementById("question");
	var img = document.getElementById("img");
	var variants = document.getElementById("variants");
	var checkAns = document.getElementById("checkAns");
	var right = document.getElementById("right");
	var next = document.getElementById("next");
	var rightAns = document.getElementById("rightAns");

	/*Создаем функцию-кноструктор*/

	function Human(img, ans1, ans2, ans3, right) {
		this.img = img;
		this.ans1 = ans1;
		this.ans2 = ans2;
		this.ans3 = ans3;
		this.right = right;
	}


	/*Создаем экземпляры*/

	var person1 = new Human("img/1.png", "Сергеенко Алексей", "Ковганов Дмитрий",  "Козлова Аня", "Ковганов Дмитрий"),
		person2 = new Human("img/2.png",  "Ковганов Дмитрий", "Ляпустина Ирина", "Козлова Аня", "Ляпустина Ирина"),
		person3 = new Human("img/3.png", "Сергеенко Алексей",  "Ковганов Дмитрий", "Ляпустина Ирина", "Сергеенко Алексей"),
		person4 = new Human("img/4.png",  "Ковганов Дмитрий", "Ляпустина Ирина","Козлова Аня", "Козлова Аня");

	/*Создаем массив объектов*/

	var arrHuman = [person1, person2, person3, person4];

	/*получаем рандомное число*/

	var rand = Math.floor(Math.random() * arrHuman.length);

	/**выводим рандомное изображение */

	var randImg = arrHuman[rand].img;
	img.innerHTML  = "<img src='" + randImg + " '>";

	/**выводим варианты ответов*/ 

	for (var key in arrHuman[rand]) {
		if (key != "img" && key != "right") {
			variants.innerHTML += "<div class='inputGroup'><input name='radio' value='" + arrHuman[rand][key] +"' type='radio' id = '" + key +"'><label for='"+ key +"'>"+ arrHuman[rand][key] +"</label></div>";
		}
	}

	/*обрабатываем данные радио-баттонов*/
		
	checkAns.onclick = function() {
		var checkBtnArr = document.getElementsByName("radio");

		for(var i=0; i< checkBtnArr.length; i++) {

		if(checkBtnArr[i].checked) {

		var gender = document.querySelector('input[name = "radio"]:checked').value; //получаем значение выбранной кнопки 
						
		if (gender == arrHuman[rand].right) { //сравниваем с верным ответом
							question.style.display = "none";
							right.style.display = "flex";
						}

						else {
							question.style.display = "none";
							wrong.style.display = "flex";
							rightAns.innerHTML = "Правильный ответ: "+arrHuman[rand].right;
						}
			
					}

					
				}
			};

};








