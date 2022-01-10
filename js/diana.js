function dianaParteUm() {
  var pergunta = '1. Descobrir quem são os amigos falsos.\n2. Desbravar as ruínas dilapidadas.'
  var caminhoProximaParte = "../diana/parte2.html"
  var caminhoFimJogo = "../diana/fim1.html"
  escolha(pergunta, caminhoProximaParte, caminhoFimJogo)

}

function dianaParteDois() {
  var pergunta = '1. Descobrir quem é de fato Graz’tz.\n2. Atacar Graz’tz'
  var caminhoProximaParte = "../diana/parte3.html"
  var caminhoFimJogo = "../diana/fim2.html"
  escolha(pergunta, caminhoProximaParte, caminhoFimJogo)
}

function dianaParteTres() {
  var pergunta = '1. Possivelmente é este homem possuído.\n2. Roubo a faca forjada.'
  var caminhoProximaParte = "../diana/final.html"
  var caminhoFimJogo = "../diana/fim3.html"
  escolha(pergunta, caminhoProximaParte, caminhoFimJogo)
}
