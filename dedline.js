const arrayContent = ["<img src=\"castle.png\" alt=\"pic1\"><p>За́мок</p>", 
"<img src=\"rampart.jpg\" alt=\"pic2\"><p>Оплот</p>",
 "<img src=\"tower.jpg\" alt=\"pic3\"><p>Башня</p>", 
 "<img src=\"fortress.jpg\" alt=\"pic4\"><p>Крепость</p>"];

 function changeTheContent(number, obj){
 	obj.innerHTML = arrayContent[number];
 }

const selectedLine = document.querySelectorAll('.lines');
const selectMainContent = document.querySelector('.pattern_content');

for (var i=0; i< selectedLine.length; i++){
	selectedLine[i].addEventListener('click', changeTheContent(i,selectMainContent));
}
