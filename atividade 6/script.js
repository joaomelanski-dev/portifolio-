function site (){
   let nome;
   let result;
   let agora = new Date 

   nome = prompt ("qual é seu nome?");
   result = window.document.getElementById('resultado');

     result.innerHTML = `<p>Olá, ${nome}! é um prazer te conhecer! <br> o sistema me enviou a sequinte informação:</br> <mark>${agora}</mark> </p>`


}