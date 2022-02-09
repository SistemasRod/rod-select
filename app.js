$(document).ready(function(){
    
    ScrollReveal().reveal('#nosotros',{delay: 500, easing: 'ease-in' });
    ScrollReveal().reveal('#marcas',{delay: 500, easing: 'ease-in' });
    ScrollReveal().reveal('#beneficios',{delay: 500, easing: 'ease-in' });
    //ScrollReveal().reveal('#proyectos_especiales',{delay: 500, easing: 'ease-in' });
    ScrollReveal().reveal('#clientes',{delay: 500, easing: 'ease-in' });

    //codigo del slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 500,
        speed: 500,
        auto: true,
        
    });

    var estado = true;
    $('#menu-btn').click(function(){
        let menu = $('#menu > ul');
        if(estado == false){
            menu.hide();
            estado = !estado;
        }else{
            menu.show();
            estado = !estado;
        }
    });

    $('#enviar').click(function(e){
        e.preventDefault();
        let nombre = $('#nombre').val();
        let email = $('#correo').val();
        let telefono = $('#telefono').val();
        
        //enviarDatos(prospecto);
        axios.post('http://77.243.85.199:3000/api/rodselect/prospecto',{
            nombre, email, telefono
        })
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        })
        
    })


})