// Tringle

function calculateTringle(){
    // base
    // const base=getInputValue('traingle-base');
    // const baseFieldSting=baseField.value;
    // const base=parseFloat(baseFieldSting);
    // // height
    // const heightField=document.getElementById('traingle-height');
    // const heightFieldSting=heightField.value;
    // const height=parseFloat(heightFieldSting);
    // const area=0.5*base*height;
    // const areaSpan=document.getElementById('area-amount');
    // areaSpan.innerText=area;
    const base=getInputValue('traingle-base');
    const height=getInputValue('traingle-height');
    const area=0.5*base*height;
    setElementValue('area-amount',area);


}
// Ractangle
function calculateRactangle(){
//     // base
//    const ractangleBase=document.getElementById('ractangle-base');
//    const ractangleBaseString=ractangleBase.value;
//    const base=parseFloat(ractangleBaseString);
// //    height
// const ractangleHeight=document.getElementById('ractangle-base');
//    const ractangleHeightString=ractangleHeight.value;
//    const height=parseFloat(ractangleHeightString);
//    const area=base*height;
   
//    const areaSpan=document.getElementById('ractangle-amount');
//     areaSpan.innerText=area;
const base=getInputValue('ractangle-base');
    const height=getInputValue('ractangle-height');
    const area=base*height;
    setElementValue('ractangle-area',area);
}
// Parallelogram
function calculateParallelogram(){
    const base= getInputValue('parallelogram-base');
    const height= getInputValue('parallelogram-height');
    if(isNaN(base) ||isNaN(height)){
        alert("please enteer a number");
        return;
    }
    const area=base*height;
    setElementValue('parallelogram-area',area);
    caculateAreaTotal('parallelogram',area);
}
// Ellipse
function calculateEllipse(){
    const base= getInputValue('ellipse-base');
    const height= getInputValue('ellipse-height');
    const elipiseArea=3.1415*base*height;
    const area=elipiseArea.toFixed(3);

    setElementValue('ellipse-area',area);

}
// common-function
function getInputValue(inputVal){
    // base
    const inputField=document.getElementById(inputVal);
    const inputFieldSting=inputField.value;
    const val=parseFloat(inputFieldSting);
    return val;
    
}
// innertext-value-set
function setElementValue(elementId,area){
    const element=document.getElementById(elementId);
    element.innerText=area;

}
function caculateAreaTotal(shapeType,area){
    const calculationEntry=document.getElementById('calculaton-entry');
    const p=document.createElement('p');
    p.innerHTML=`${shapeType} ${area} cm<sup>2</sup> <button class="btn btn-primary">convert</button>`
    calculationEntry.appendChild(p);



}

