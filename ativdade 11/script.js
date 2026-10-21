function horas(){
    let agora = new Date;
    let hora = agora.getHours();
    let min = agora.getMinutes();
    let seg = agora.getSeconds();

    let mostrar = document.getElementById('resultado')

    mostrar.innerHTML = `<p> Agora são ${hora} ${min} ${seg} minutos.</p>`;

   if(min >= 10 && min <=20){
   mostrar.innerHTML = `<p> Agora são ${hora} ${min} ${seg} minutos.</p>                     
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhyJOPWe259CG1Kq8eGPn3gR5x0cuREJWbP2Wg7RGyg&s=10"`;
                       
   }
}