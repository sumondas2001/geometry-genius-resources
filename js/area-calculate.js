//    truangle 
function calculateTriangleArea(){
     // get triangle base value
     const baseInput = document.getElementById('triangle-base');
     const baseInputText = baseInput.value;
     const baseInputValue = parseFloat(baseInputText);

     // get triangle hight value

     const hightInput = document.getElementById('triangle-hight');
     const hightInputText = hightInput.value;
     const hightInputValue = parseFloat(hightInputText);

     const area = 0.5 * baseInputValue * hightInputValue;

     const triangleArea = document.getElementById('triangle-area');
     triangleArea.innerText = area;


     console.log(area)
}

//  Rectangle

function calculateRectangleArea(){
     const WidthInput = document.getElementById('rectangle-width');
     const WidthInputText = WidthInput.value;
     const widthValue = parseFloat(WidthInputText);

     const lengthInput = document.getElementById('rectangle-length');
     const lengthInputText = lengthInput.value;
     const lengthValue = parseFloat(lengthInputText);

     const rectangleareaValue = widthValue * lengthValue;

     const rectangleArea = document.getElementById('rectangle-area');
     rectangleArea.innerText = rectangleareaValue;


     console.log(area)

}


function calculateParallelogramArea(){
     console.log('clicked')
}