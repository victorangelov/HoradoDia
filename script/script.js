//alert('Olá! mather fucker')
function carregar(){
    //acessando elemento div msg e img via dom
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    //criando objeto do tipo date
    var date = new Date()
    //resgatando a hora do objeto date e jogando na variável hora
    var hora = date.getHours()
    //let hora = 19 para testar as variações de foto hora e plano de fundo
    //alterando informações da mensagem via dom da div id msg
    msg.innerHTML = `Agora são ${hora} horas.`
    //verificando a hora do dia com estrutua condicional
    if (hora >= 0 && hora < 12){
        //bom dia
        //alterando source do img via dom
        img.src = 'img/manha.jpeg'
        //alterando papel de parede do body via dom
        document.body.style.background = '#e2cd9f'  
    } else if(hora < 18){
        //boa tarde
        img.src = 'img/tarde.jpeg'
        document.body.style.background = '#b9846f'
    } else {
        //boa noite
        img.src = 'img/noite.jpeg'
        document.body.style.background = '#515154'
    }
}