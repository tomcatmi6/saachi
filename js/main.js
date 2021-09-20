window.onload=function() {
    var burgerMenu = document.getElementById('toggle_menu_button');
    var menu = document.getElementById('nav_menu');

    burgerMenu.addEventListener('click',function(){
        this.classList.toggle("toggled");
        menu.classList.toggle("open");
      });

}
