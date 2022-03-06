function alertString() {
var str = "家园网-开发部,2014";
alert(str.substring(0,3));
alert(str.substring(4,7));
alert(str.substring(8,12));
}
function changeCss(e) {
    document.getElementById("style").href = "Stylesheets/style" +
        e.id.substring(2) + ".css";
}
function move() {
    document.getElementById("moveDiv").style.marginLeft =
        (parseInt(getComputedStyle(document.getElementById("moveDiv")).marginLeft) +
         1).toString() + "px";
}
function moveClick() {
    var x = setInterval("move()",10)
}
