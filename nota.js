//Teste a função com diferentes nostas//
verificarAprovacao(8);
verificarAprovacao(5.5);
verificarAprovacao(3);

function verificarAprovacao() {
    const nota = parseFloat(document.getElementById("notaInput").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(nota) || nota < 0 || nota > 10) {
        resultado.textContent = "Nota inválida. Insira um valor entre 0 e 10.";
        resultado.style.color = "red";
        return;
    }

    if (nota >= 7) {
        resultado.textContent = "Parabéns!!! Você foi aprovado!";
        resultado.style.color = "green";
    } else if (nota >= 5) {
        resultado.textContent = "Atenção!! Você está de recuperação!";
        resultado.style.color = "orange";
    } else {
        resultado.textContent = "Infelizmente, você foi reprovado";
        resultado.style.color = "red";
    }
}