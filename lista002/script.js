function  carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('image')
var data = new Date()
var hora = data.getHours()
//var hora = 18
msg.innerHTML = `Agora são ${hora} horas`;
if (hora >= 0 && hora < 12) {
//BOM DIA!
  img.src='fotomanha.jpg'
  document.body.style.background = '#759a04'
} else if(hora >= 12 && hora <= 18) {
    //BOA TARDE!
    img.src = 'fototarde.jpg'
    document.body.style.background = '#e2e45e'
} else {
    // BOA NOITE!
    img.src = 'fotonoite.jpg'
    document.body.style.background = '#000000'
}

}