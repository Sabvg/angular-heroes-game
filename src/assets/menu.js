$(document).ready(main);

var contador = 1;

function main() {

    $('.menu_bar').click(function() {
        // $('nav').toggle();
        // esta es la forma sencilla de hacerlo.

        //si el menu cuenta 1 es que está activado y si no que no lo está, por defecto es 1.
        if (contador == 1) {
            $('nav').animate({
                left: '0'
                    //ponemos a 0 el nav que teniamos con left:-100%, así aparece y animado.
            });
            contador = 0; // para que una vez se hizo click se ponga a 0 y así al volver a clicar se esconda,
            // si no la variable siempre vale 1 y se queda siempre visible.

        } else {
            $('nav').animate({
                left: '-100%'
                    //para que se vuelva a esconder
            });
            contador = 1; //para que vuelva a valer 1 la variable y al volver a clicar aparezca.
        }
    });

}