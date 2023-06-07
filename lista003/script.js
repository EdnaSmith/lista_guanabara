function verificar() {
    var data = new Date()
     var ano = data.getFullYear()
     var fano = document. getElementById('txtano')
     var res = document.querySelector('div#res')
     if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verificar os dados e tente novamente!')
     } else{
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var gênero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (fsex[0].checked) {
                gênero = 'Homem'
                if (idade >=0 && idade < 10 ){
                    img.setAttribute('src','bebeH.jpg')
                    //Criança 
                } else if (idade <= 23) {
                    img.setAttribute('src','adolecendeH.jpg')
                        //jovem
                }else if (idade < 50){img.setAttribute('src','adultoH.jpg')
                    //Adultor
                }else{
                    //Idoso
                    img.setAttribute('src','vovô.jpg')
                }
            } else if (fsex[1].checked) {
                gênero = 'Mulher'
                    if (idade >= 0 && idade < 10 ){img.setAttribute('src','bebeM.jpg')
                        //Criança 
                        img.setAttribute('src','bebeM.jpg')
                    } else if (idade <= 23) {img.setAttribute('src','adolecendeM.jpg')
                            //jovem
                    }else if (idade < 50){img.setAttribute('src','mulher35.jpg')
                        //Adultor
                    }else{
                        //Idoso
                        img.setAttribute('src','vovô.jpg')
                    }
            }
            res.style.textAlingn = 'center'
            res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
            res.append(img)
     }
}