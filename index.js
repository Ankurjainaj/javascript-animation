function clicked() {
    var x = document.getElementsByClassName("sky");
    var i = 0;
    k = setInterval(() => {
        x[0].style.backgroundPositionX = i + "px";
        i++;
    }, 1);
    audio.play();
}

function clicked2() {
    clearInterval(k);
    audio.pause();

}


var audio = document.createElement('audio');
audio.setAttribute('src', 'jet-sound-effect.mp3');
audio.loop = true;

// let arr=['url(images/bird1.png)','url(images/bird2.png)','url(images/bird3.png)','url(images/bird4.png)'];
// setInterval(anim(),20);
// function anim()
// {
//     let a=0;
//     var obj = document.getElementById("bird");

//     a++;
//     if(a==4)
//     a=0;
//     obj.style.backgroundImage = arr[a];

// }