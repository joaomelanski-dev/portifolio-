function horas(){
    let agora = new Date;
    let hora = agora.getHours();
    let min = agora.getMinutes();
    let mostrar = document.getElementById('resultado');

    mostrar.innerHTML = `<p> Agora são ${hora} ${min} minutos.</p>`;

   if(min >= 11 && min <=20){
   mostrar.innerHTML = `<p> Agora são ${hora} horas e ${min} minutos.</p>                     
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhyJOPWe259CG1Kq8eGPn3gR5x0cuREJWbP2Wg7RGyg&s=10"`;
   }              
   if(min >= 21 && min <=30){
   mostrar.innerHTML = `<p> Agora são ${hora} horas e ${min} minutos.</p>   
                        <img src=""`
   }
}
