let menu = document.getElementById('menu')

function clickMenu(){

    if(menu.style.display == 'flex'){
        menu.style.display = 'none';
    }else{
        menu.style.display = 'flex';
    }
    
}

function mudouTamanho(){
    if(window.innerWidth >768){
        menu.style.display = 'flex';
    }else{
        menu.style.display = 'none';
    }
}


function clickFundo(){

    if(window.innerWidth <= 768){
        menu.style.display = 'none';
    }
}
