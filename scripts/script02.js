var strongItems = document.getElementsByTagName("strong");
var paragraf = document.getElementById("hajlajt");

paragraf.addEventListener("mouseover", function()
    {for(var i=0; i < strongItems.length; i++) 
    {strongItems[i].style.color = "green";}
});
paragraf.addEventListener("mouseout", function()
    {for(var i=0; i < strongItems.length; i++) 
    {strongItems[i].style.color = "black";}
});