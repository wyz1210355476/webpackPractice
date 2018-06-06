import {print} from './common/common.js';
import './style.css';
import Icon from './cp1.jpg';

console.log(print)
function component(){
	var text = new print("jack","18");
	var element = document.createElement("div");
	element.innerHTML = text.contact();
	element.classList.add("hello");
	var myIcon = new Image();
	myIcon.src = Icon;
	element.appendChild(myIcon);
	return element;
}

document.body.appendChild(component());