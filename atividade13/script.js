function contar(){
    let saida = document.getElementyById('saida')
    let cont = 1
    while(cont <= 10){
       saida.InnerHTML += `<p> &#xF449 <mark>${cont}</mark> </p>`
       cont++;;
}
saida.InnerHTML += `<p>&#xF33C1</p>`
}