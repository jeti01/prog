const toggle = document.querySelector(".toggle")
const main = document.querySelector(".main")
const logo = document.querySelectorAll(".logo")
const icons = document.querySelectorAll(".icons")
const icon = document.querySelectorAll(".icon")


const tl = new TimelineMax({ paused: true, reversed: true });

tl.to(main, 0.5, {y: 0},
"+=0.2")

.fromTo( logo, 0.5, {opacity:0, y:-10}, {opacity:1, y:0},
"+=0.3")
.fromTo(icons,0.5,{opacity:0, y:-10},{opacity:1, y:0},
"-=0.5")
.fromTo(icon,0.5,{opacity:0, y:-10},{opacity:1, y:0},
"+=0.2");

toggle.addEventListener('click', () => {
    
    tl.reversed() ? tl.play() : tl.reverse();

    let value = toggle.classList.contains('active')

	if (value) {
		toggle.classList.remove('active')
	} else{
		toggle.classList.add('active')
	}
    
});

