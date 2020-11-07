const ano = parseInt(prompt('Digite o ano em que você nasceu:'))
const nome = prompt('Digite seu nome:')

const anoAtual = '2020'
    
dados = anoAtual - ano;    
function nomeeidade (nome, dados) {
    alert(`Bem-Vindo, seu nome é ${nome} e você tem ${dados} anos.`);
}
nomeeidade (nome, dados);