function changediv(x)
{
    x.style.backgroundColor = "green";
    x.style.height = "200px";
    x.style.width = "200px";
}
function sum()
{
    var a = parseInt(document.getElementById("input1").value);
    var b = parseInt(document.getElementById("input2").value);
    alert(a + b);
}
function time()
{
    var day = ["日", "一", "二", "三", "四", "五", "六"];
    var time = new Date();
    alert("今天是" + time.getFullYear() + "年" + (time.getMonth() + 1) + "月" + time.getDate() + "日星期" + day[time.getDay()]);
}
function get()
{
    alert(document.getElementById("div2").offsetWidth + "px");
}
