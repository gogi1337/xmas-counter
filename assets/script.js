const year = new Date().getFullYear()
const day = new Date().getDay()
const month = new Date().getMonth()

let newyear = new Date(year + 1, 0, 1).getTime()
let christmas = new Date(month == 11 && day >= 25 ? year + 1 : year, 11, 25).getTime()

let speed = 1
let angle = Math.floor(Math.random() * 361);

function convertMS(milliseconds) {
    var day, hour, minute, seconds;
    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    return {
        day: day,
        hour: hour,
        minute: minute,
        seconds: seconds
    };
}

console.log(convertMS(newyear - Date.now()));
console.log(convertMS(christmas - Date.now()))

document.addEventListener("DOMContentLoaded", function (event) {
    const ny = document.getElementById('ny')
    const xmas = document.getElementById('xmas')

    function writeTimeNY() {
        let dur = newyear - Date.now()
        if (dur > 0) {
            let time = convertMS(dur)
            ny.innerText = `${time.day}days ${time.hour}hrs ${time.minute}mins ${time.seconds}secs`
            fitText(ny, 1);
        } else {
            ny.innerText = "Happy New Year!"
        }
    }
    setInterval(writeTimeNY, 10)

    function writeTimeXmas() {
        let dur = christmas - Date.now()
        if (dur > 0) {
            let time = convertMS(dur)
            xmas.innerText = `${time.day}days ${time.hour}hrs ${time.minute}mins ${time.seconds}secs`
            fitText(xmas, 1);
        } else {
            xmas.innerText = "Happy Christmas!"
        }
    }
    setInterval(writeTimeXmas, 10);
})

function moveNY() {
    let height = window.innerHeight
    let width = window.innerWidth
    
    let bounce = document.getElementById('bounce_ny')
    if(!bounce) return console.warn('The bounce object didn\'t exist when trying to move')
    let props = bounce.getBoundingClientRect()
    let x = false
    let y = false
    if (props.x <= 0) x = 'right'
    if (props.x + props.width >= width) x = 'left'
    if (props.y <= 0) x = 'top'
    if (props.x + props.height >= height) y = 'bottom'
}

function moveXmas() {
    let height = window.innerHeight
    let width = window.innerWidth
    
    let bounce = document.getElementById('bounce_xmas')
    if(!bounce) return console.warn('The bounce object didn\'t exist when trying to move')
    let props = bounce.getBoundingClientRect()
    let x = false
    let y = false
    if (props.x <= 0) x = 'right'
    if (props.x + props.width >= width) x = 'left'
    if (props.y <= 0) x = 'top'
    if (props.x + props.height >= height) y = 'bottom'
}