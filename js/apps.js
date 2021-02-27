function menu() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('menu');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('menu-active')
        
        if(menu.classList.contains('menu-active')){
            menuBtn.innerHTML = 'Close';
            menuBtn.style.backgroundColor = '#F7C901'
        } else {
            menuBtn.innerHTML = 'Menu';
            menuBtn.style.backgroundColor = '#ffef02'
            
        }
    })

}

menu();