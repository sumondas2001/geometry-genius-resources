//    truangle 
function calculateTriangleArea(){
     // get triangle base value
     const baseInput = document.getElementById('triangle-base');
     const baseInputText = baseInput.value;
     const baseInputValue = parseFloat(baseInputText);

     // console.log(typeof baseInputText)

     // get triangle hight value

     const hightInput = document.getElementById('triangle-hight');
     const hightInputText = hightInput.value;
     const hightInputValue = parseFloat(hightInputText);

     const area = 0.5 * baseInputValue * hightInputValue;

     const triangleArea = document.getElementById('triangle-area');
     triangleArea.innerText = area;


     // console.log(area)
}

//  Rectangle

function calculateRectangleArea(){
     const WidthInput = document.getElementById('rectangle-width');
     const WidthInputText = WidthInput.value;
     const widthValue = parseFloat(WidthInputText);

     

     const lengthInput = document.getElementById('rectangle-length');
     const lengthInputText = lengthInput.value;
     const lengthValue = parseFloat(lengthInputText);

     if(isNaN(widthValue) || isNaN(lengthValue)){
          alert('please insert number');
          return;
          // console.log('plz enter your number')
     }
     const rectangleareaValue = widthValue * lengthValue;

     const rectangleArea = document.getElementById('rectangle-area');
     rectangleArea.innerText = rectangleareaValue;

    


     // console.log(area)

}

// parallelogram 
function calculateParallelogramArea(){

     const base = getInputValue('parallelogram-base');

     const height = getInputValue('parallelogram-height');

     if(isNaN(base) || isNaN(height)){
          alert('please insert number');
          return;
     }

     const area = base * height;
     setElementInnerText('parallelogram-area',area);

     // console.log(parallelogramArea)
}
// ellipse
function calculateEllipseArea(){
     const ellipseLarge = getInputValue('ellipse-large-radius');
     const ellipseShort = getInputValue('ellipse-short-radius');
     
     const area = 3.14 * ellipseLarge * ellipseShort;
     
     const areaToDecimal = area.toFixed(2);

     setElementInnerText('ellipse-area', areaToDecimal);
}

// pentagon
function calculatePentagonArea(){
     const pentagonPerimeter = getInputValue('Pentagon-perimeter');

     const pentagonBase = getInputValue('Pentagon-base');
     if(isNaN(pentagonPerimeter) || isNaN(pentagonBase)){
          alert('please insert number');
          return;
     }

     const area = 0.5 * pentagonPerimeter * pentagonBase;

     setElementInnerText('Pentagon-area', area);
}
// Rhombus
function calculateRhombusArea(){
     const diagonal1 = getInputValue('diagonal-1');
     const diagonal2 = getInputValue('diagonal-2');

     if(isNaN(diagonal1) || isNaN(diagonal2)){
          alert('please insert number');
          return;
     }
     const area = 0.5 * diagonal1 * diagonal2;
     setElementInnerText('rhombus-area', area);
}


// reusable get input value filed number

function getInputValue(Id){
     const inputFiled = document.getElementById(Id);
     const inputValueText = inputFiled.value;
     const value = parseFloat(inputValueText); 
     return value;
}

// reusable set span, p, div, etc text

function setElementInnerText(elementId ,area){
     const element = document.getElementById(elementId);
     element.innerText = area;
}