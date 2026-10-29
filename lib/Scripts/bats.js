(function(){
    try{
        if(matchMedia('(prefers-reduced-motion: reduce)').matches)
            return;
    }
    catch(e){}
    try{
        if(sessionStorage.getItem('bats'))
            return;
        sessionStorage.setItem('bats','1')
    }
    catch(e){}
    var box=document.createElement('div');
    box.className='bats-box';
    box.setAttribute('aria-hidden','true');
    var P='M50 22C46 12 40 8 36 10C32 4 22 4 8 14C16 14 18 18 20 24C24 20 28 20 32 24C36 22 40 24 44 30C46 34 48 36 50 40C52 36 54 34 56 30C60 24 64 22 68 24C72 20 76 20 80 24C82 18 84 14 92 14C78 4 68 4 64 10C60 8 54 12 50 22Z';
    for(var i=0;i<26;i++){
        var s=24+Math.random()*60, o=document.createElement('div');
        o.className='bat';
        o.style.cssText='top:'+(4+Math.random()*80)+'vh;width:'+s+'px;animation-duration:'+(3.5+Math.random()*2.5)+'s;animation-delay:'+(Math.random()*2.5)+'s;opacity:'+Math.min(1,.55+s/200);
        o.innerHTML='<div class="bob" style="animation-duration:'+(.8+Math.random()*.9)+'s"><svg viewBox="0 0 100 50" style="animation-duration:'+(.45+Math.random()*.25)+'s"><path d="'+P+'"/></svg></div>';
        box.appendChild(o);
    }
    document.body.appendChild(box);
    setTimeout(function(){box.remove()},9500);
})();
