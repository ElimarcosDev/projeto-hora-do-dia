function carregar(){
var bom = document.getElementById("bom")
var msg = document.getElementById("msg") 
var dat = new Date;
var min = dat.getMinutes();
var hora = dat.getHours();
var bodi = document.getElementById("body")

if (hora >= 5 && hora < 12){
    bom.innerHTML = "Bom dia!"
    document.getElementById("imagem").src="imagens/manha.png"
    msg.innerHTML = `Agora são ${hora}:${min}`
    bodi.style.backgroundColor = '#E5CCA4'
    document.getElementById("audio").src="audios/Teyana Taylor, Kehlani - Morning (Official Video).mp3" 
    document.querySelector("link[rel='shortcut icon']").href = "imagens/manhaicon.png";
}
else if (hora >= 12 && hora < 18){
    bom.innerHTML = "Boa tarde!"
    document.getElementById("imagem").src="imagens/tarde.png"
    msg.innerHTML = `Agora são ${hora}:${min}`
    bodi.style.backgroundColor = '#FE7E01'
    document.querySelector("link[rel='shortcut icon']").href = "imagens/tardeicon.ico";
}
else{
    bom.innerHTML = "Boa noite!"
    document.getElementById("imagem").src="imagens/noite.png"
    msg.innerHTML = `Agora são ${hora}:${min}`
    bodi.style.backgroundColor = '#212A3D' 
    document.getElementById("audio").src="audios/Cage the Elephant - Trouble [LEGENDADO].mp3"
    document.querySelector("link[rel='shortcut icon']").href = "imagens/noiteicon.ico";   
}

}

