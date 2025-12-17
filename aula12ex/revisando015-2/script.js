// TENTANDO MEXER COM MUITA DATA
function verificar() {
    var res = document.getElementById('res');
    var date = new Date();
    var anoAt = date.getFullYear();

    var dateNascTJS = document.querySelector('input#dateNascStr');
    var partes = dateNascTJS.value.split("-"); // [ano, mes, dia]

    // Criar a data no fuso local
    var dateNasc = new Date(partes[0], partes[1], partes[2]);

    var anoNasc = dateNasc.getFullYear();
    var mesNasc = dateNasc.getMonth();
    var diaNasc = dateNasc.getDate();

    var meses = ["Janeiro","Fevereiro","Março","Abril","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
    var mesNome = meses[dateNasc.getMonth()];


    var idade = anoAt - anoNasc;

    res.innerHTML = `Você nasceu no dia ${diaNasc} do mês ${mesNome} do ano de ${anoNasc} e você possui ${idade} anos.`;
}
