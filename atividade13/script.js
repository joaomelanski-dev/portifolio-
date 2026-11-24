function contar(){
    let saida = document.getElementyById('saida')
    let cont = 1
    while(cont <= 10){
       saida.InnerHTML += `<p> &#x1F449 <mark>${cont} </p>`
       cont++;;
}
}