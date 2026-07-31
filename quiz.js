// ==============================
// ELEMENTOS
// ==============================

const telaInicial = document.getElementById("telaInicial");
const quiz = document.getElementById("quiz");
const resultado = document.getElementById("resultado");
const rankingTela = document.getElementById("ranking");

const nomeInput = document.getElementById("nomeJogador");
const btnComecar = document.getElementById("btnComecar");
const btnProxima = document.getElementById("btnProxima");
const btnReiniciar = document.getElementById("btnReiniciar");
const btnNovo = document.getElementById("btnNovo");

const perguntaEl = document.getElementById("pergunta");
const respostasEl = document.getElementById("respostas");
const contador = document.getElementById("contador");
const progresso = document.getElementById("progresso");

const nomeResultado = document.getElementById("nomeResultado");
const acertosEl = document.getElementById("acertos");
const errosEl = document.getElementById("erros");
const porcentagemEl = document.getElementById("porcentagem");
const barraPorcentagem = document.getElementById("barraPorcentagem");
const rankEl = document.getElementById("rank");
const tabelaRanking = document.getElementById("tabelaRanking");

// ==============================
// VARIÁVEIS
// ==============================

let jogador = "";
let perguntaAtual = 0;
let acertos = 0;
let respostaSelecionada = null;

// ==============================
// PERGUNTAS
// ==============================

const perguntas = [

{
pergunta:"O que é asfixia?",

respostas:[
"Uma queimadura",
"A dificuldade ou interrupção da passagem de ar para os pulmões",
"Uma fratura",
"Um desmaio"
],

correta:1
},

{
pergunta:"Qual destes pode causar asfixia?",

respostas:[
"Engasgo",
"Dor de cabeça",
"Febre",
"Insolação"
],

correta:0
},

{
pergunta:"Em um adulto consciente engasgado que não consegue falar, o procedimento recomendado é:",

respostas:[
"Dar água",
"Fazer a Manobra de Heimlich",
"Colocar a pessoa deitada",
"Esperar melhorar"
],

correta:1
},

{
pergunta:"Se a vítima conseguir tossir durante o engasgo, deve-se:",

respostas:[
"Incentivar que continue tossindo",
"Dar tapas sem parar",
"Dar água",
"Colocar algo na boca"
],

correta:0
},

{
pergunta:"No afogamento, a primeira atitude deve ser:",

respostas:[
"Entrar na água sem pensar.",
"A primeira atitude deve ser garantir a segurança do socorrista antes de tentar qualquer resgate.",
"Sacudir a vítima",
"Dar comida"
],

correta:1
},

{
pergunta:"Após retirar a vítima da água e ela não respirar, deve-se:",

respostas:[
"Esperar alguns minutos",
"Iniciar RCP e acionar o SAMU",
"Dar água",
"Fazer caminhada"
],

correta:1
},

{
pergunta:"Qual número do SAMU?",

respostas:[
"190",
"193",
"192",
"197"
],

correta:2
},

{
pergunta:"No engasgo de um bebê, utiliza-se:",

respostas:[
"Heimlich igual ao adulto",
"Cinco tapas nas costas e cinco compressões no tórax",
"Água",
"Puxar a língua"
],

correta:1
},

{
pergunta:"É correto colocar o dedo na boca da vítima para retirar um objeto?",

respostas:[
"Sempre",
"Apenas se o objeto estiver visível",
"Nunca",
"Apenas em crianças"
],

correta:1
},

{
pergunta:"Qual destes NÃO é um sinal de asfixia grave?",

respostas:[
"Não consegue falar",
"Pele arroxeada",
"Tosse forte e eficiente",
"Dificuldade para respirar"
],

correta:2
},

{
pergunta:"Uma pessoa afogada pode aparentar estar bem e mesmo assim precisar de avaliação médica?",

respostas:[
"Sim",
"Não"
],

correta:0
},

{
pergunta:"O que NÃO deve ser feito em uma vítima de afogamento?",

respostas:[
"Acionar ajuda",
"Avaliar respiração",
"Pendurar a vítima de cabeça para baixo",
"Iniciar RCP quando necessário"
],

correta:2
},

{
pergunta:"A falta de oxigênio pode causar:",

respostas:[
"Lesão cerebral",
"Apenas febre",
"Dor muscular",
"Hipertensão"
],

correta:0
},

{
pergunta:"Qual é o principal objetivo da Manobra de Heimlich?",

respostas:[
"Fazer a vítima vomitar",
"Expulsar o corpo estranho das vias aéreas",
"Diminuir a febre",
"Melhorar a circulação"
],

correta:1
},

{
pergunta:"Uma vítima consciente de afogamento deve:",

respostas:[
"Ser observada e encaminhada para avaliação médica",
"Ir para casa imediatamente",
"Tomar refrigerante",
"Dormir"
],

correta:0
},

{
pergunta:"No afogamento, a causa principal da parada cardiorrespiratória é:",

respostas:[
"Falta de oxigênio",
"Hipertensão",
"Diabetes",
"Febre"
],

correta:0
},

{
pergunta:"Durante um resgate aquático, o ideal é:",

respostas:[
"Nadar até a vítima sem equipamentos",
"Utilizar objetos flutuantes quando possível",
"Mergulhar rapidamente",
"Ignorar riscos"
],

correta:1
},

{
pergunta:"Em uma vítima inconsciente por engasgo, deve-se:",

respostas:[
"Dar água",
"Iniciar atendimento conforme protocolo de RCP e acionar emergência",
"Levantar a vítima",
"Esperar"
],

correta:1
},

{
pergunta:"A coloração arroxeada da pele durante a asfixia indica:",

respostas:[
"Boa oxigenação",
"Falta de oxigênio",
"Febre",
"Pressão baixa"
],

correta:1
},

{
pergunta:"A melhor forma de prevenir afogamentos é:",

respostas:[
"Nadar sozinho",
"Respeitar regras de segurança, supervisão e uso de equipamentos quando necessário",
"Entrar em qualquer local",
"Correr na piscina"
],

correta:1
}

];

// ==============================
// COMEÇAR
// ==============================

btnComecar.addEventListener("click", () => {

    jogador = nomeInput.value.trim();

    if(jogador === ""){

        alert("Digite seu nome!");
        return;

    }

    telaInicial.classList.add("escondido");
    quiz.classList.remove("escondido");

    carregarPergunta();

});

// ==============================
// CARREGAR PERGUNTA
// ==============================

function carregarPergunta(){

    respostaSelecionada = null;

    btnProxima.style.display = "none";

    const atual = perguntas[perguntaAtual];

    contador.textContent =
    `Pergunta ${perguntaAtual+1} de ${perguntas.length}`;

    progresso.style.width =
    ((perguntaAtual)/perguntas.length)*100 + "%";

    perguntaEl.textContent = atual.pergunta;

    respostasEl.innerHTML = "";

    atual.respostas.forEach((texto,indice)=>{

        const botao = document.createElement("button");

        botao.textContent = texto;

        botao.onclick = ()=>selecionar(botao,indice);

        respostasEl.appendChild(botao);

    });

}

// ==============================
// SELECIONAR
// ==============================

function selecionar(botao,indice){

    if(respostaSelecionada!==null) return;

    respostaSelecionada = indice;

    const correta = perguntas[perguntaAtual].correta;

    const botoes = respostasEl.querySelectorAll("button");

    botoes.forEach((b,i)=>{

        if(i===correta){

            b.classList.add("correta");

        }

        if(i===indice && indice!==correta){

            b.classList.add("errada");

        }

        b.disabled=true;

    });

    if(indice===correta){

        acertos++;

    }

    btnProxima.style.display="block";

}

// ==============================
// PRÓXIMA
// ==============================

btnProxima.addEventListener("click",()=>{

    perguntaAtual++;

    if(perguntaAtual<perguntas.length){

        carregarPergunta();

    }else{

        mostrarResultado();

    }

});

// ==============================
// MOSTRAR RESULTADO
// ==============================

function mostrarResultado(){

    quiz.classList.add("escondido");
    resultado.classList.remove("escondido");

    const total = perguntas.length;

    const erros = total - acertos;

    const porcentagem = Math.round((acertos / total) * 100);


    nomeResultado.textContent = jogador;

    acertosEl.textContent = `${acertos}/${total}`;

    errosEl.textContent = erros;

    porcentagemEl.textContent = `${porcentagem}%`;


    setTimeout(()=>{

        barraPorcentagem.style.width = porcentagem + "%";

    },200);


    const rank = definirRank(porcentagem);

    rankEl.textContent = rank;


    salvarRanking({

        nome:jogador,

        porcentagem:porcentagem,

        rank:rank

    });


    setTimeout(()=>{

        mostrarRanking();

    },1500);

}


// ==============================
// DEFINIR RANK
// ==============================

function definirRank(porcentagem){


    if(porcentagem === 100){

        return "🏆 Mestre do Resgate";

    }


    if(porcentagem >= 90){

        return "🥇 Especialista";

    }


    if(porcentagem >= 80){

        return "🥈 Socorrista";

    }


    if(porcentagem >= 60){

        return "🥉 Aprendiz";

    }


    return "📚 Em Treinamento";


}

// ==============================
// MOSTRAR RANKING
// ==============================

function mostrarRanking(){


    rankingTela.classList.remove("escondido");


    tabelaRanking.innerHTML="";


    let ranking = JSON.parse(
        localStorage.getItem("rankingQuiz")
    ) || [];


    ranking.forEach((jogador,index)=>{


        const linha = document.createElement("tr");


        linha.innerHTML = `

            <td>${index+1}º</td>

            <td>${jogador.nome}</td>

            <td>${jogador.porcentagem}%</td>

            <td>${jogador.rank}</td>

        `;


        tabelaRanking.appendChild(linha);


    });


}


// ==============================
// JOGAR NOVAMENTE
// ==============================

btnReiniciar.addEventListener("click",()=>{


    resultado.classList.add("escondido");

    rankingTela.classList.add("escondido");

    telaInicial.classList.remove("escondido");


    nomeInput.value="";


    perguntaAtual=0;

    acertos=0;

    jogador="";


    barraPorcentagem.style.width="0%";


});

{
    // Use o IntelliSense para saber mais sobre os atributos possíveis.
    // Focalizar para exibir as descrições dos atributos existentes.
    // Para obter mais informações, acesse: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Open quiz.html",
            "file": "c:\\Users\\isabe\\Downloads\\quiz de primeiros socorros\\quiz.html"
        }
    ]
}