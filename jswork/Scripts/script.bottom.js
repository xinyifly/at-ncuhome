var even_li = document.getElementById("ul1").getElementsByTagName("li");
for (var i = 0; i < even_li.length; i++)
{
    if(i % 2 == 0)
    {
        even_li.item(i).style.backgroundColor = "gray";
    }
}
