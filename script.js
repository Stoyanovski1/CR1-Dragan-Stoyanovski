/* script purpose
1. include the 12 numbers in the clock, around the SVG circle
1. rotate the hands of the clock as well as the mask to show the current time in the svg
1. include the current time in the span describing the controls
1. react to a click on the buttons to update the time on the clock and on the buttons also
*/

// utility functions
// function returning the input number as a string _and_ adding a 0 to numbers smaller than 10
// const zeroPadded = number => ((number >= 10) ? number.toString() : `0${number}`);

// function taking as input an hour value in the [0-23] range and returning the 12 hours format
// const twelveClock = (twentyFourClock) => {
// if (twentyFourClock === 0) {
//     return 12;
// }
// if (twentyFourClock > 12) {
//     return twentyFourClock - 12;
// }
// return twentyFourClock;
// };

// 1. SVG clock face
// const clockFace = document.querySelector('svg g.clock--face');
// add the twelve numbers by rotating, translating and then rotating back text elements
// ! add a zero to the numbers smaller than 10 through the utility function
// for (let i = 0; i < 12; i += 1) {
//     clockFace.innerHTML += `
//     <text
//         transform="rotate(${-90 + 30 * (i + 1)}) translate(34 0) rotate(${90 - 30 * (i + 1)})" >
//         ${zeroPadded(i + 1)}
//     </text>
//   `;
// }


// SVG & BUTTONS current time
// retrieve the current number of hours, minutes and seconds
// const now = new Date();
// const hours = now.getHours();
// const minutes = now.getMinutes();
// const seconds = now.getSeconds();

// as hours in the 0-23 range, normalize the values in the 1-12 range
// const time = {
//     hours: twelveClock(hours), // 1-12
//     minutes, // 0-59
//     seconds, // 0-59
// };

// create another object describing the time's value, for the rotation of the hands
// this to avoid the glitch occurring when the time goes back to 0 (or back to 1 for the hours)
// const rotation = {
//     hours: twelveClock(hours),
//     minutes,
//     seconds,
// };

// use the values to update the svg and the text of the span elements
// const entries = Object.entries(time);
// entries.forEach(([key, value]) => {
//     anime({
//         targets: `g.${key}`,
//         transform: (key === 'hours') ? `rotate(${-15 + value * 30})` : `rotate(${value * 6})`,
//         duration: 2000,
//     });

//     const span = document.querySelector(`span.control--${key}`);
//     span.textContent = zeroPadded(value);
// });


// BUTTONS click event
// const buttons = document.querySelectorAll('button');

// function returning new values for the time and rotation object, according to the input instructions
// function updateValues(instructions) {
/* destructure the necessary information
key: hours, minutes or seconds
operation: + or -
timeValue: number in the [1-12] or [0-59] range
rotationValue: number
*/
// const { key, operation } = instructions;
// const { timeValue, rotationValue } = instructions;

// create a number of degrees based on the previous value and the current operation
// const degrees = operation === '+' ? rotationValue + 1 : rotationValue - 1;
// create a number of hours/minutes/seconds on the basis of the operation
// let value = operation === '+' ? timeValue + 1 : timeValue - 1;

// format the value to fall in the prescribed range
// if (key === 'hours') {
//     value = value > 12 ? 1 : value === 0 ? 12 : value;
// } else {
//     value = value > 59 ? 0 : value < 0 ? 59 : value;
// }

// return the updated time and rotation value
//     return { value, degrees };
// }


// function called when a click is registered on the button elements
// function handleClick() {
// retrieve the necessary information from the wrapping container and the current element
// const key = this.parentElement.getAttribute('data-control');
// const operation = this.textContent;
// retrieve the previous values
// const timeValue = time[key];
// const rotationValue = rotation[key];

// based on the set instruction call the function updating the time and rotation values
// const instructions = {
//     key,
//     operation,
//     timeValue,
//     rotationValue,
// };
// const { value, degrees } = updateValues(instructions);

// update the objects
// time[key] = value;
// rotation[key] = degrees;

// update the position of the matching hand
// anime({
//     targets: `g.${key}`,
//     transform: (key === 'hours') ? `rotate(${-15 + degrees * 30})` : `rotate(${degrees * 6})`,
//     duration: 400,
// remove the event listeners from the input buttons until the animation is complete
//     begin: () => buttons.forEach(button => button.removeEventListener('click', handleClick)),
//     complete: () => buttons.forEach(button => button.addEventListener('click', handleClick))
// });

// update the text of the matching span
// const span = document.querySelector(`span.control--${key}`);
// span.textContent = zeroPadded(value);
// }

// buttons.forEach(button => button.addEventListener('click', handleClick));

//---------------------------
// particlesJS("particles-js", { "particles": { "number": { "value": 265, "density": { "enable": true, "value_area": 709.5329696319886 } }, "color": { "value": "#cfbebe" }, "shape": { "type": "triangle", "stroke": { "width": 1, "color": "#f9e8e8" }, "polygon": { "nb_sides": 4 }, "image": { "src": "img/img-git", "width": 100, "height": 100 } }, "opacity": { "value": 0, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 15.767399325155303, "random": true, "anim": { "enable": false, "speed": 9.723133766012792, "size_min": 1.6205222943354654, "sync": false } }, "line_linked": { "enable": true, "distance": 141.90659392639773, "color": "#ffffff", "opacity": 0.5282078773927026, "width": 0.3153479865031061 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": true, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "window", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });
// var count_particles, stats, update;
// stats = new Stats;
// stats.setMode(0);
// stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector('.js-count-particles');
// update = function() {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; }
//     requestAnimationFrame(update);
// };
// requestAnimationFrame(update);;