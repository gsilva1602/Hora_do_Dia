function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos. `
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'manhã.png'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML += `<strong><p>Bom Dia!</p></strong>`
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
        msg.innerHTML += `<strong><p>Boa Tarde!</p></strong>`
    } else {
        // BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#515154'
        msg.innerHTML += `<strong><p>Boa Noite</p>!</strong>`
    }
}