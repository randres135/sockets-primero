var socket = io()
socket.on('connect',function(){
    console.log('conectado al servidor')
})

//son para escuchar informacion
socket.on('disconnect',function(){
    console.log('Perdimos conexion con el servidor')
})

//los emit son para enviar informacion
socket.emit('enviarMensaje',{
    usuario:'Abel',
    mensaje:'holaa'
},function(resp){
    console.log('Respuesta server:',resp);
})

//escuchar informacion
socket.on('enviarMensaje',function(mensaje){
    console.log('Servidor',mensaje);
})
