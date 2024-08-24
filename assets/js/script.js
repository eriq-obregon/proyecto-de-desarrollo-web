
$(document).ready(function () {

    //evento para hacer zoom en img
    $('.img').on('mouseenter', function () {
        $(this).addClass('zoom');
    });

    $('.img').on('mouseleave', function () {
        $(this).removeClass('zoom');
    });
    
    //evento para cambiar color del bk

    const $form = $('form');
 
    $form.on('mouseenter', function() {
        $(this).css('background-color', '#190f85');
    });
 
    $form.on('mouseleave', function() {
        $(this).css('background-color', '');
    });

    //boton que muestre mensaje al completar form

   


    var modal = document.getElementById('myModal');
    var link = document.querySelector('a[href="contacto.html"]');
    var span = document.getElementsByClassName('close');


    // abrir modal y cerrar modal

    function abrirModal(e) {
        e.preventDefault();
        fetch('contacto.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('modalBody').innerHTML = data;
                modal.style.display = 'block';
    
                const closeBtn = document.querySelector('.close-btn');
                closeBtn.addEventListener('click', cerrarModal);
            });
    }
    
    function cerrarModal() {
        modal.style.display = 'none';
    }
    
    link.addEventListener('click', abrirModal);


})


