
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

    $form.on('mouseenter', function () {
        $(this).css('background-color', '#f0f0f0');
    });

    $form.on('mouseleave', function () {
        $(this).css('background-color', '');
    });

    //boton que muestre mensaje al completar form

    $('.btn').on('click', function () {
        alert('formulario enviado exitosamente!')
    })
})
