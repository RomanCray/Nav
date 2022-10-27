
const changeNav = () => {
    let nav = document.querySelector('.conteiner-nav-response');
    console.log('supersi');
    if (window.screen.width < 769) {
        if (document.querySelector('.conteiner-nav-response').offsetTop < document.documentElement.scrollTop) {

            document.querySelector('.conteiner-nav-response').setAttribute("class", "conteiner-nav-response float");
            document.querySelector('.content-nav-responsive.logo').setAttribute("class", "content-nav-responsive logo float");
            nav.style.background = 'rgba(255, 255, 255, .8)';
            nav.style.borderRadius = '3em';
            nav.style.width = '96vw';
            nav.style.color = '#000'
        }

        else {
            document.querySelector('.conteiner-nav-response').setAttribute("class", "conteiner-nav-response");
            document.querySelector('.content-nav-responsive.logo').setAttribute("class", "content-nav-responsive logo");
            nav.style.background = 'rgba(255, 255, 255, 0)';
            nav.style.color = '#fff'
        }
    } else {
        if (document.querySelector('.conteiner-nav').offsetTop < document.documentElement.scrollTop) {

            document.querySelector('.conteiner-nav').setAttribute("class", "conteiner-nav float");
            document.querySelector('.content-nav.logo').setAttribute("class", "content-nav logo float");
            var liv_nav = document.querySelectorAll('.content-nav__a');
            for (let i = 0; i < liv_nav.length; i++) {
                liv_nav[i].style.color = '#000';
            }
            nav.style.borderRadius = '3em';
            nav.style.width = '96vw';
            nav.style.background = 'rgba(255, 255, 255, .8)';
        }

        else {
            document.querySelector('.conteiner-nav').setAttribute("class", "conteiner-nav");
            document.querySelector('.content-nav.logo').setAttribute("class", "content-nav logo");
            var liv_nav = document.querySelectorAll('.content-nav__a');
            for (let i = 0; i < liv_nav.length; i++) {
                liv_nav[i].style.color = '#fff';
            }
            nav.style.background = 'rgba(255, 255, 255, 0)';
        }
    }
};

document.querySelector('.content-nav-responsive.nav').addEventListener('click', () => {

    let lista = document.querySelector('.lista');
    let nav = document.querySelector('.conteiner-nav-response');

    if (lista.className.indexOf('display') == -1) {

        lista.style.display = 'inline-block';
        nav.style.height = '100vh';
        nav.style.borderRadius = '0';
        nav.style.width = '100%';
        nav.style.backgroundColor = '#ec8323';
        nav.style.margin = '0px auto';
        nav.style.paddingTop = '20px';
        nav.style.color = '#fff'
        document.querySelector('.content-nav-responsive.logo').setAttribute("class", "content-nav-responsive logo");
        document.querySelector('.nav-responsive-icon').setAttribute('class', 'nav-responsive-icon fa-regular fa-circle-xmark');
    } else {

        lista.style.display = 'none';
        nav.style.height = '10vh';
        nav.style.margin = '20px auto';
        nav.style.paddingTop = '0';
        document.querySelector('.nav-responsive-icon').setAttribute('class', 'nav-responsive-icon fa-solid fa-bars');

        if (document.querySelector('.conteiner-nav-response').offsetTop < document.documentElement.scrollTop) {

            document.querySelector('.content-nav-responsive.logo').setAttribute("class", "content-nav-responsive logo float");
            nav.style.background = 'rgba(255, 255, 255, .8)';
            nav.style.borderRadius = '3em';
            nav.style.width = '96vw';
            nav.style.color = '#000'
        } else {

            nav.style.color = '#fff'
            nav.style.background = 'rgba(255, 255, 255, 0)';
            document.querySelector('.content-nav-responsive.logo').setAttribute("class", "content-nav-responsive logo");
        }
    }

    lista.classList.toggle('display');
});

window.addEventListener('scroll', changeNav);

const resposiveNav = () => {
    window.screen.width < 769 ? document.querySelector('.content-nav.nav').innerHTML = `
        <i class="fa-solid fa-bars">`: console.log();
}

// resposiveNav();

// window.screen.width