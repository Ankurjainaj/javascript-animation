function clicked()
{
    var x = document.getElementsByClassName("sky");
    var i=0;
        setInterval(() => {
                    x[0].style.backgroundPositionX=i+"px";
                    i++;
        }, 0.9);    
        
}