const soundcloud = document.querySelector('.sound-cloud');
const off = document.querySelector('#off');
const on = document.querySelector('#on');
const myAudio =document.querySelector('#myAudio');

off.addEventListener('click', ()=> soundTrack('off'));
on.addEventListener('click', ()=> soundTrack('on'));

const soundTrack = (soundState)=> {
    if(soundState == 'off'){
        on.style.display = 'block';
        off.style.display='none';
        soundcloud.style.color = "pink";
        myAudio.play();
    }else{
        off.style.display = 'block';
        on.style.display = 'none';
        soundcloud.style.color = "#f3709e";
        myAudio.pause();
    }
}

const btnBars = document.querySelector('.bars');
const btnTimes = document.querySelector('.times');
const sideNav = document.querySelector('.aside');

btnBars.addEventListener('click', () => myFunc('open'));
btnTimes.addEventListener('click', () => myFunc('close'));

const myFunc =(navCond) => {
    if(navCond ==='open'){
        sideNav.classList.add('show-nav');
        btnTimes.style.display = 'block';
        btnBars.style.display = 'none';
    }
    else{
        sideNav.classList.remove('show-nav');
        btnTimes.style.display = 'none';
        btnBars.style.display = 'block';

    }
}


$(document).ready(function (){
    if(!$("#myCanvas").tagcanvas({
        textColour: "pink",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
    }, "tags")){
        // something went wrong hide the canvas container,
        $("#myCanvasContainer");
    }
})


const nameInput = document.querySelector('.name')
const emailInput = document.querySelector('.email')
const subjectInput = document.querySelector('.subject')
const textareaInput = document.querySelector('.textarea')

const contactForm = document.querySelector('.contact-form')

contactForm.addEventListener('submit', (evt) => {
  evt.preventDefault()
  validateInput()
})

const validateInput = () => {
  let email = emailInput.value
  let textarea = textareaInput.value

  if (!email && !textarea) {
    setError(emailInput.parentElement)
    setError(textareaInput.parentElement)
    showMessage('Please fill in the required inputs')
  } else if (!email && textarea) {
    setSuccess(textareaInput.parentElement)
    setError(emailInput.parentElement)
    showMessage("Oops Email can't be empty")
  } else if (!textarea && email) {
    setSuccess(emailInput.parentElement)
    setError(textareaInput.parentElement)
    showMessage('Please provide a message')
  } else if (email && textarea) {
    emailjs.sendForm('service_2rrso67', 'template_t3sg1gm', contactForm, 'Of0jfcXNap6MSOyy5');
    setSuccess(emailInput.parentElement)
    setSuccess(textareaInput.parentElement)
    showMessage('Message sent successfully', 'green')
    textareaInput.value = ''
    emailInput.value = ''
    nameInput.value = ''
    subjectInput.value = ''
  }
}

const setError = (input) => {
  if (input.classList.contains('success')) {
    input.classList.remove('success')
  } else {
    input.classList.add('error')
  }
}
const setSuccess = (input) => {
  if (input.classList.contains('error')) {
    input.classList.remove('error')
  } else {
    input.classList.add('success')
  }
}

const messageDiv = document.querySelector('.message')
const showMessage = (message, updateColor) => {
  const divContent = document.createElement('div')
  divContent.textContent = message
  divContent.classList.add('message-content')
  divContent.style.backgroundColor = updateColor
  messageDiv.prepend(divContent)

  messageDiv.style.transform = `translate(${(0, 0)}%)`
  setTimeout(() => {
    divContent.classList.add('hide')
    divContent.addEventListener('transitionend', () => {
      divContent.remove()
    })
  }, 5000)
}


const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let heartImage = new Image();
heartImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEM0lEQVR4Xu2YXYgbVRTH/+dM4tbdLZs0q4gfLVsoKLRoHwShCMWikmQRktk++VLw460PCm0Foe0iqBUfVARR8EHwLZ1UcKfxo1IEoSBFxFXpm4pKa9tkk13YmiZzj0xqdSlpN3c+A5n7EkjOuf/z/91z79wMYcQHjbh/JACSDhhxAskWGPEGSA7BZAskW2DECSRbYMQbIHkKBLoFlkulnGrzHoAecqDuYhEW5ktEtOiAvppeqPw5SMfV8+V7mWmPANtJqTsUkTLAFwD5nhw+NfV5pTHIPIPEBALgcrH0AAsfEVJlBqf7CStASOELMXg+t1A50y+mkS/vAslhIX6c0b87FVTHUGR1UzQ//al1bhCTt4rxBUAAahbKLyuiIwykQAyenATGx0HpMYAJUAJpNaFWWr06XBAG5L0pdeVFqtXa7ne/7N63Yer2lbeJ8fyghlwQBJ7P2tarBMigeTfGeQYge/cazVXnI4CeJiZw7k5wbhowUn1qEXTO/Qw43f9+E+B0d5yfonabUl3DBvGj3kyojzPjqX1UqThe8j0DWCrOvQPIfkrfBmPLDGhsw//mOh2g2wGUu94CubIK5+KFfmC+AcitYZeX4q/nKEVv5WrHX/AyhycAjVmzQAIbqTRSW7eB0mngahtOvQ5ZaUJcABEPEvVE5uSJL3VltQHI0aPc+nbxJyHcb2ze2tvz6tJfcC5f7K12jGMxY1sP6p4H2gBaRfNJBXxGExuR2jID5/dfoVaWY/S9Vloey9rV0zrFaANo5M333dPa2DwDWW5BNQN7JOvUfbPYd7O2tV9nIm0AS0XzByLewffcB+eP33S0Qo9VcM7m7E8e1hHSB5A3l2lyYqN0u72Db5iGUqjnata0Tk3aAOrF0lUjPZaO46Rf15jCarZmTawbtybAC4A6gzfpiEQYez5rW3fr6GkDaM6aZ0TwiI5IZLEiX2dPVnfr6GkDaBTmjhHJQR2R6GLllaxdPayjpw1gKW/uBOM7HZGoYgVqxyb7xI86etoA3MnrxdIphvu/f3gGEWqZBaugW5EnAI1iabsCnzWAMV3BMOIF6m/FvNPL+wFPAFwTzVnzORF8EIYh3TkJ8mzGrn6om+fGewbQg1CcOySQ170IB5VDJIcyC9U3vM7nC4Ar2iiYLxHhNa8F+Mkj0IGMffxNf3P4yf43Nw4IQZj3vQXWsosSQlDmAwUQ1XYI0nzgAMI+GIM2HwqAsCCEYT40AEFDCMt8qACuXZbKB0XomJ8HTZjmQwfgF0LY5iMB4BVCFOYjA6ALISrzkQLoQSiYB4Rwy3t7lOYjB7AehKjNxwLgZhDiMB8bgBshxGU+VgDXLkvlZ9xPry8z/Nwvruf6fh8QRBFxzpEAiJP+MGgnHTAMqxBnDUkHxEl/GLSTDhiGVYizhqQD4qQ/DNpJBwzDKsRZw8h3wD+x9H5QGmopLQAAAABJRU5ErkJggg==";

let w, h, hearts = [];
let mouse = {
	x: undefined,
	y: undefined
}

function init() {
	resizeReset();
	animationLoop();
}

function resizeReset() {
	w = canvas.width = window.innerWidth;
	h = canvas.height = window.innerHeight;
}

function animationLoop() {
	ctx.clearRect(0, 0, w, h);
	ctx.globalCompositeOperation = 'lighter';
	drawHearts();

	let temp = [];
	for (let i = 0; i < hearts.length; i++) {
		if (hearts[i].time <= hearts[i].ttl) {
			temp.push(hearts[i]);
		}
	}
	hearts = temp;

	requestAnimationFrame(animationLoop);
}

function drawHearts() {
	for (let i = 0; i < hearts.length; i++) {
		hearts[i].update();
		hearts[i].draw();
	}
}

function mousemove(e) {
	mouse.x = e.x;
	mouse.y = e.y;

	hearts.push(new Heart());
}

function mouseout() {
	mouse.x = undefined;
	mouse.y = undefined;
}

function getRandomInt(min, max) {
	return Math.round(Math.random() * (max - min)) + min;
}

function easeOutQuart(x) {
	return 1 - Math.pow(1 - x, 4);
}

class Heart {
    constructor() {
        this.start = {
            x: mouse.x + getRandomInt(-20, 20),
            y: mouse.y + getRandomInt(-20, 20),
            size: heartImage.width * 0.3 // Reduce the size by adjusting this multiplier
        };
        this.end = {
            x: this.start.x + getRandomInt(-200, 200),
            y: this.start.y + getRandomInt(-600, -400)
        };

        this.x = this.start.x;
        this.y = this.start.y;
        this.size = this.start.size; // Initial size of the heart

        this.time = 0;
        this.ttl = 120; // Time-to-live for the animation
    }

    draw() {
        // Draw heart at the reduced size
        ctx.drawImage(heartImage, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
    }

    update() {
        if (this.time <= this.ttl) {
            let progress = 1 - (this.ttl - this.time) / this.ttl;

            this.size = this.start.size * (1 - easeOutQuart(progress));
            this.x = this.x + (this.end.x - this.x) * 0.005;
            this.y = this.y + (this.end.y - this.y) * 0.005;
        }
        this.time++;
    }
}


window.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", resizeReset);
window.addEventListener("mousemove", mousemove);
window.addEventListener("mouseout", mouseout);


