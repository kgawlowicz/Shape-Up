const MAX = 600;
let container = document.getElementById('shape-container');


class Shape {
    constructor(){
        let xVal = randomVal(0,MAX);
        console.log(xVal);
        let yVal= randomVal(0,MAX);
        let size = randomVal(25, 100);
        this.div = document.createElement('div');
        this.div.style.left = `${xVal}px`;
        this.div.style.top = `${yVal}px`;
    }

    drawShape() {

    }

    // updateLocation(){
    //     let xVal = randomVal(0,MAX);
    //     let yVal= randomVal(0,MAX);
    //     this.div.style.left = `${xVal}px`;
    //     this.div.style.top = `${yVal}px`;
    // }
}

//get user input from input boxes (by ID or classname),
//set this.shape.style.(width/height) equal to userInput.value

class Square extends Shape {
    constructor() {
        super();
        this.div.classList.add('square');
        container.appendChild(this.div);
        this.drawShape()
    }

    // drawShape() {
    //     let blah = userinput.value
    //     this.shape.style.width = `${blah}px`
    // }
}

let addSquare = document.getElementById('addSquare');
addSquare.addEventListener('click',insertSquare);


function insertSquare(){
    let square = new Square();
    let length=document.getElementById('length')
    console.log(length.value)
}

// let addRectangle = document.getElementById('addRectangle');
// addRectangle.addEventListener('click',insertRectangle);

// function insertRectangle() {
//     let rectangle = new Shape('rectangle');
// }

function randomVal(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}