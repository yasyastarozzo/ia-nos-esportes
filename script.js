const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Durante a aula de educação física, a turma foi dividida em grupos para aprender mais sobre esportes coletivos. Seu grupo ficou responsável por apresentar sobre o vôlei. O professor sugeriu usar vídeos e imagens para enriquecer a apresentação. O que você faz?",
        alternativas: [
            {
                texto: "Busca vídeos de jogos profissionais de vôlei e usa uma IA para resumir os principais movimentos e regras do esporte.",
                afirmacao: "Usou a IA para facilitar o aprendizado da equipe e trouxe conteúdo claro e interessante para a apresentação."
            },
            {
                texto: "Decide fazer a própria apresentação sem usar nenhuma tecnologia, pesquisando em livros e lembrando o que aprendeu nas aulas.",
                afirmacao: "Confiou em seus próprios conhecimentos e mostrou que é possível apresentar bem sem usar recursos digitais."
            }
        ]
    },
    {
        enunciado:  "Durante os treinos de vôlei, sua turma está se preparando para um campeonato intercolegial. O professor permite o uso de celulares para melhorar o desempenho dos jogadores. Qual decisão você toma?",
        alternativas: [
            {
                texto: "Grava os treinos da equipe para depois assistir com um aplicativo de análise de movimento e entender os erros.",
                afirmacao: "Percebeu que a tecnologia pode ajudar a melhorar o desempenho técnico e começou a aplicar isso em outros esportes também."
            },
            {
                texto: "Prefere treinar da forma tradicional, sem usar nenhum tipo de tecnologia para não se distrair.",
                afirmacao: "Entendeu que o mais importante era manter o foco no treino e confiar na repetição para aperfeiçoar os movimentos."
            }
        ]
    },
    {
        enunciado: "Durante um jogo de vôlei entre turmas, um colega do seu time começa a errar muitos passes e fica desmotivado. Você percebe que o time está começando a reclamar com ele. O que você faz?",
        alternativas: [
            {
                texto: "Chama o grupo para uma conversa rápida e reforça que todos erram, mas o mais importante é o trabalho em equipe.",
                afirmacao: "Mostrou liderança e empatia, ajudando o grupo a jogar com mais união e respeito."
            },
            {
                texto: "Fica em silêncio para não gerar conflito, mas tenta compensar os erros do colega jogando com mais atenção.",
                afirmacao: "Assumiu responsabilidade e buscou equilibrar o jogo com dedicação, mesmo sem se envolver diretamente no conflito."
            }
        ]
    },
    {
        enunciado: "Em uma aula teórica, a professora de educação física comenta como a IA está sendo usada no esporte profissional, inclusive no vôlei. Ela propõe uma roda de conversa sobre o tema. Qual é sua opinião?",
        alternativas: [
            {
                texto: "Acha incrível como a IA pode analisar jogadas e prevenir lesões em atletas de alto rendimento.",
                afirmacao: "Ficou ainda mais interessado em tecnologia aplicada ao esporte e pensa em estudar essa área no futuro."
            },
            {
                texto: "Acredita que o esporte deveria continuar sendo mais humano, sem tanta interferência de máquinas.",
                afirmacao: "Reforçou a importância do treino físico e emocional como pilares principais no desenvolvimento esportivo."
            }
        ]
    },
    {
        enunciado: "Seu time está montando uma estratégia para um campeonato de vôlei entre escolas. Um colega sugere usar uma IA para simular as jogadas do time adversário e criar um plano de jogo. O que você acha disso?",
        alternativas: [
            {
                texto: "Concorda com a ideia, desde que as informações usadas sejam públicas e o uso da IA seja apenas para estudo e treino.",
                afirmacao: "Mostrou responsabilidade ao equilibrar tecnologia e ética no uso de estratégias esportivas."
            },
            {
                texto: "Discorda, pois acha injusto usar tecnologia para ganhar vantagem em uma competição entre escolas.",
                afirmacao: "Demonstrou senso ético e preocupação com o jogo limpo e a igualdade entre os times."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 1990...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
