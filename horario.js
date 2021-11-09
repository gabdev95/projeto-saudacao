function carregar () {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 1
msg.innerHTML = `Agora são ${hora} horas!`
if(hora >= 0 && hora < 12) {
    //bom dia
    img.src = '/img/bomdia.png'
    //background amarelo e azul
    document.body.style.background = '#76A6D2'
} else if (hora >= 12 && hora <= 17) {
    //boa tarde
    img.src = '/img/boatarde.png'
    //background amarelo e laranja
    document.body.style.background = '#FF9200'
} else {
    //boa noite
    img.src = '/img/boanoite.png'
    //background azul e azul escuro
    document.body.style.background = '#48459E'
}

}