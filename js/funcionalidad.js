
const changeNav = ()=> {
    if(document.querySelector('.conteiner-nav').offsetTop < document.documentElement.scrollTop){

        document.querySelector('.conteiner-nav').setAttribute("class","conteiner-nav float");
        document.querySelector('.content-nav.logo').setAttribute("class","content-nav logo float");
    }  
    else{
        document.querySelector('.conteiner-nav').setAttribute("class","conteiner-nav");
        document.querySelector('.content-nav.logo').setAttribute("class","content-nav logo");
    }    
};

window.addEventListener('scroll',changeNav);

const resposiveNav = () => {
    window.screen.width < 769 ? document.querySelector('.content-nav.nav').innerHTML=`
        <i class="fa-solid fa-bars">`:console.log();
}

resposiveNav();

// window.screen.width