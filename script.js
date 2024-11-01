function elementCreator(){
    var myCon = document.getElementByTd('container');
    var a = document.createElement('h2');
    var b = document.createTextNode("Hello");
    a.appendChild(b);
    myCon.appendChild(a);
}
function elementupdator(){
    var a = document.getElementById('container');
    a.style.color='blue',a.style.fontSize='20px';
}
function elementdeletor(){
    var a = document.getElementById('container');
    a.remove();
}