function campeonato(){

    inscritos = inscritos
    let times = 0;
    let inscritos = 0;
    let sobra = inscritos % 3

    inscritos = prompt("Qual a quantidade de inscritos? ");

    time = Math.floor(inscritos / 3);
    sobra = inscritos % 3;
      
    if(inscritos >= 3){
     times = (inscritos - sobras ) / 3;
    }
    
    document.getElementById('resultado').innerHTML =
    "total de inscritos: " + inscritos;

     document.getElementById('resultado').innerHTML +=
      " times possiveis: " + times;

     document.getElementById('resultado').innerHTML +=
     " sobras: " + sobras;

     if(times >= 4){
       document.getElementById('resultado').innerHTML +=
       "campeonato vai acontecer!";
     }else{
         document.getElementById('resultado').innerHTML +=
         "ainda não temos 4 times "
     }
}