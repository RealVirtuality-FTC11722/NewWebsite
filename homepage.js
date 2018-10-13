var menuButton = document.getElementById('MenuButton');
var HamTop = document.getElementById('TopSandwich');
var HamMid = document.getElementById('MidSandwich');
var HamBot = document.getElementById('BotSandwich');

menuButton.addEventListener("click", function(){
	//play animation
	HamTop.classList.toggle('played');
	HamMid.classList.toggle('played');
	HamBot.classList.toggle('played');
})
