function estacao(){
    let mes = prompt("Digite o mês por  extenso (ex:  Setembro):")
    let mostrar = document.getElementById('resultado');

mes = mes.toUpperCase();

if(mes == 'DEZEMBRO' || mes == 'JANEIRO' ||  mes == 'FEVEREIRO'){
 alert("A estação é VERÃO")
}if(mes == 'MARÇO' || mes == 'ABRIL' ||  mes == 'MAIO'){
 alert("A estação é OUTONO") 
}if(mes == 'JUNHO' || mes == 'JULHO' ||  mes == 'AGOSTO'){
 alert("A estação é INVERNO ")
}if(mes == 'SETEMBRO' || mes == 'OUTUBRO' ||  mes == 'NOVEMBRO'){
 alert("A estação é PRIMAVERA")
}








}    