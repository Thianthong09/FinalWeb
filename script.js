setInterval(Run,100);
function Run(){
    const a = document.createElement('i');
    a.classList.add('fa-brands');
    a.classList.add('fa-octopus-deploy');
    a.style.left = Math.random()* window.innerWidth+'px';
    a.style.animationDuration = Math.random()*3+2+'s';
    a.style.opacity = Math.random();
    a.style.fontSize = Math.random()*10+10+'px';
    document.body.appendChild(a);

    setTimeout(()=>{
        a.remove();
    },5000)
}