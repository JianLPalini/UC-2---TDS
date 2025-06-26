function escolherPersonagem(){
    let escolhaClasse = prompt("Informe a classe do Herói que você deseja: ")
    let nível = prompt("Qual nível do seu personagem: ")

    if(escolhaClasse === "Guerreiro") {
        if(nível >= 50 ){
            alert(`Você é um guerreiro lendário! Classe: ${escolharClasse}`)
        }else{
            alert("Continue upando, seu noob!!!")
        }
    }else if(escolhaClasse === "Mago"){
            alert(`Você domina a magia suprema! Classe: ${escolhaClasse}`)
            if(nível >= 50 ){
            }else{
                alert("Continue upando, seu noob!!!")
            }
    }else if(escolhaClasse === "Arqueiro"){
            alert(`Você é um mestre das flechas! Classe: ${escolhaClasse}`)
            if(nível >= 50 ){
            }else{
                    alert("Continue upando, seu noob!!!")
            }
        } else {
            alert("Classe não reconhecida.")
        
        }
}
escolherPersonagem()
