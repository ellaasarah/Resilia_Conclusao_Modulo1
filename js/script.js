function escolha(pergunta, caminhoProximaParte, caminhoFimJogo) {
    while (resposta != 1 || resposta != 2) {
        var resposta = prompt(
            pergunta
        );

        if (resposta == 1) {
            window.location.href = caminhoProximaParte;
            break;
        } else if (resposta == 2) {
            window.location.href = caminhoFimJogo;
            break;
        } else {
            alert("Digite 1 ou 2");
        }
    }
}