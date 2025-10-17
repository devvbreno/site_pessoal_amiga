const menu = document.getElementsByClassName('menu-icon')[0]


menu.addEventListener('click', () => {
    const mobile_menu = document.getElementsByClassName('mobile-menu')[0]
    let menu_img = menu.children[0]
    if (mobile_menu.classList.contains('open')) {
        mobile_menu.classList.remove('open')
        menu_img.src = 'assets/white_menu_2.png'
        // menu_img.style.width = '32px' 
        // menu_img.style.heigth = '32px' 
    }
    else {
        mobile_menu.classList.add('open')
        menu_img.src = 'assets/cancel2_white.png'
        // menu_img.style.width = '16px' 
        // menu_img.style.heigth = '16px' 
    }
})