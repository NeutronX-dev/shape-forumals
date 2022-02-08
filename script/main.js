// GLOBALS:
let OVERIDE_PI = Math.PI

class Sphere {
    constructor() {
        this.radius = null
        this.volume = null
        this.diameter = null
        this.circumference = null
        this.surface_area = null
    }
    SetRadius(radius) {
        let pi = OVERIDE_PI
        this.radius=radius
        this.diameter = radius * 2
        this.circumference = (2 * pi) * radius
        this.surface_area = 4 * Math.PI * (radius ^ 2);
        this.volume = ((4 / 3) * pi) * (radius * radius * radius)
    }

    SetVolume(volume) {
        this.radius = Math.cbrt(volume * 3 / 4)
        this.SetRadius(this.radius)
    }
}


// API:
const MakeSphere = () => {
    return new Sphere()
}


// Functionality:
let print = console.log;
console.log = (...args) => {
    for (let i = 0; i < args.length; i++) {
        args[i] = JSON.stringify(args[i]);
    }
    return "<br>" + args.join("<br>")
}

let text_area = document.getElementById("analyze")
let output = document.getElementById("output")

let execute = () => {
    try {
        output.innerHTML = "OUTPUT: <span style=\"color: green;\">" + eval(text_area.value) + "</span>"
    } catch (e) {
        output.innerHTML = "OUTPUT: <span style=\"color: red;\">" + e + "</span>"
    }
}
text_area.onkeyup = execute
execute()