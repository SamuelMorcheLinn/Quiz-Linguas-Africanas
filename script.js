
const perguntas = [
    {
        categoria: "🌍 LÍNGUAS AFRICANAS • ORIGEM DAS PALAVRAS",
        pergunta: "A palavra 'moleque' vem de qual grupo de línguas?",
        contexto: "Muitas palavras que usamos no português brasileiro possuem raízes em línguas africanas.",
        opcoes: [
            "Iorubá",
            "Tupi",
            "Línguas bantas (como o quimbundo e o quicongo)",
            "Árabe"
        ],
        correta: 2,
        dica: "Pense no grupo linguístico ao qual pertencem o quimbundo e o quicongo.",
        explicacao: "Vem do banto: em quimbundo, 'muleke' significa criança, menino. Hoje a palavra é usada para garoto."
    },
    {
        categoria: "🌍 LÍNGUAS AFRICANAS • QUIMBUNDO",
        pergunta: "De qual língua africana vem a palavra 'caçula'?",
        contexto: "A palavra é usada para identificar o filho mais novo de uma família.",
        opcoes: [
            "Quimbundo",
            "Latim",
            "Tupi",
            "Iorubá"
        ],
        correta: 0,
        dica: "É uma língua banta muito presente nas palavras de origem africana do português brasileiro.",
        explicacao: "Vem do quimbundo 'kazuli', o membro mais novo da família. Algumas fontes citam o quicongo; as duas são línguas bantas."
    },
    {
        categoria: "🌍 LÍNGUAS AFRICANAS • VOCABULÁRIO",
        pergunta: "Em quimbundo, 'kisambu' deu origem à palavra 'caçamba'. O que era um 'kisambu'?",
        contexto: "Algumas palavras mudaram de uso ao longo do tempo, mas preservaram parte de seu significado.",
        opcoes: [
            "Uma estrada de terra",
            "Um tipo de barco",
            "Uma ferramenta de corte",
            "Um cesto grande"
        ],
        correta: 3,
        dica: "Pense em um objeto utilizado para carregar e transportar coisas.",
        explicacao: "Antes de ser a parte do caminhão que carrega entulho, a caçamba era um cesto grande."
    },
    {
        categoria: "🌍 LÍNGUAS AFRICANAS • QUIMBUNDO",
        pergunta: "A palavra 'camundongo' vem do quimbundo 'ka-mundongo'. O que ela significava?",
        contexto: "Algumas palavras chegaram ao português brasileiro mantendo praticamente o mesmo significado.",
        opcoes: [
            "Pássaro pequeno",
            "Ratinho",
            "Peixe de rio",
            "Cobra"
        ],
        correta: 1,
        dica: "É um animal pequeno que costuma aparecer em desenhos animados.",
        explicacao: "Em quimbundo, 'ka-mundongo' já queria dizer 'ratinho'. O português manteve o sentido."
    },
    {
        categoria: "🌍 LÍNGUAS AFRICANAS • VOCABULÁRIO",
        pergunta: "De qual língua africana vem a palavra 'cafuné' (carícia na cabeça)?",
        contexto: "Essa palavra representa uma demonstração de carinho bastante comum no Brasil.",
        opcoes: [
            "Iorubá",
            "Tupi",
            "Latim",
            "Quimbundo"
        ],
        correta: 3,
        dica: "É uma língua banta de origem angolana.",
        explicacao: "Vem do quimbundo 'kifune'. Alguns autores dizem que a origem exata é incerta, mas o quimbundo é a atribuição mais citada."
    },
    {
        categoria: "🌍 LÍNGUAS AFRICANAS • QUIMBUNDO",
        pergunta: "Em quimbundo, 'kitanda' deu origem à palavra 'quitanda'. O que era uma 'kitanda'?",
        contexto: "A palavra está relacionada ao comércio de alimentos.",
        opcoes: [
            "Casa de farinha",
            "Festa de colheita",
            "Feira ou tabuleiro de produtos frescos",
            "Tipo de panela"
        ],
        correta: 2,
        dica: "Pense em um lugar onde são vendidos frutas, verduras e outros alimentos.",
        explicacao: "A origem já tinha a ideia de venda de alimentos frescos. Hoje 'quitanda' é a lojinha de frutas, verduras e outros alimentos."
    },
    {
        categoria: "🌍 LÍNGUAS AFRICANAS • HISTÓRIA",
        pergunta: "Em quimbundo, 'sanzala' deu origem à palavra 'senzala'. Qual era o sentido original?",
        contexto: "A história do Brasil também foi marcada pela influência das línguas africanas.",
        opcoes: [
            "Moradia, habitação",
            "Celeiro",
            "Praça do mercado",
            "Ferramenta de plantio"
        ],
        correta: 0,
        dica: "Está relacionado ao lugar onde uma família vive.",
        explicacao: "Em quimbundo, 'sanzala' é a habitação de uma família. No Brasil, passou a nomear o alojamento dos africanos escravizados."
    },
    {
        categoria: "🌍 LÍNGUAS AFRICANAS • HISTÓRIA",
        pergunta: "A palavra 'quilombo' vem do banto 'kilombo'. Qual era o sentido original?",
        contexto: "Os quilombos tiveram papel fundamental na resistência à escravização no Brasil.",
        opcoes: [
            "Plantação",
            "Mercado",
            "Rio",
            "Acampamento ou fortaleza"
        ],
        correta: 3,
        dica: "Pense em um local organizado para proteção e defesa.",
        explicacao: "A palavra é de origem banta (quimbundo e umbundo). No Brasil, nomeou comunidades formadas por pessoas que resistiram à escravização."
    },
    {
        categoria: "🌍 LÍNGUAS AFRICANAS • EXPRESSÕES",
        pergunta: "Na expressão 'foi pro beleléu', a palavra vem do quimbundo 'mbalale'. O que ela significava?",
        contexto: "Expressões populares também carregam histórias de diferentes culturas.",
        opcoes: [
            "Festa",
            "Sepultura, cemitério",
            "Viagem",
            "Doença"
        ],
        correta: 1,
        dica: "É um lugar relacionado à morte e ao sepultamento.",
        explicacao: "Por isso 'ir pro beleléu' significa acabar, morrer ou desaparecer."
    },
    {
        categoria: "🌍 LÍNGUAS AFRICANAS • VOCABULÁRIO",
        pergunta: "Em quimbundo, 'kubaba' deu origem à palavra 'babá'. O que significava?",
        contexto: "A palavra está relacionada ao cuidado e ao carinho com crianças.",
        opcoes: [
            "Cozinhar",
            "Cantar",
            "Embalar uma criança para dormir",
            "Lavar roupa"
        ],
        correta: 2,
        dica: "Imagine uma pessoa colocando um bebê para dormir no colo.",
        explicacao: "Hoje a babá é quem cuida de uma criança, e a origem africana já falava em acalentar o bebê."
    },
    {
        categoria: "🌍 LÍNGUAS AFRICANAS • CULTURA",
        pergunta: "A palavra 'berimbau', o instrumento ligado à capoeira, vem de qual língua?",
        contexto: "A capoeira é uma manifestação cultural brasileira com fortes raízes africanas.",
        opcoes: [
            "Quimbundo",
            "Iorubá",
            "Tupi",
            "Árabe"
        ],
        correta: 0,
        dica: "É uma língua banta que também deu origem a palavras como moleque e quitanda.",
        explicacao: "Vem do quimbundo 'mbirimbau'."
    },
    {
        categoria: "🌍 LÍNGUAS AFRICANAS • QUICONGO",
        pergunta: "De qual língua africana vem a palavra 'dengo' (carinho, manha)?",
        contexto: "A palavra é muito utilizada para expressar carinho e afeto.",
        opcoes: [
            "Iorubá",
            "Tupi",
            "Latim",
            "Quicongo"
        ],
        correta: 3,
        dica: "É uma língua pertencente ao grupo banto.",
        explicacao: "Vem do quicongo 'ndégo' ou 'ndengu', ligado a doçura e carinho. Alguns autores citam o quimbundo; as duas são línguas bantas."
    },
    {
        categoria: "🌍 LÍNGUAS AFRICANAS • VOCABULÁRIO",
        pergunta: "A palavra 'muvuca' vem do quicongo 'mvúka'. O que significava?",
        contexto: "É uma palavra que continua sendo utilizada no cotidiano brasileiro.",
        opcoes: [
            "Silêncio",
            "Caminhada longa",
            "Aglomeração de pessoas",
            "Banquete"
        ],
        correta: 2,
        dica: "Pense em um lugar lotado, com muitas pessoas juntas.",
        explicacao: "O sentido quase não mudou: hoje 'muvuca' é um lugar cheio, confuso e barulhento."
    },
    {
        categoria: "🌍 LÍNGUAS AFRICANAS • QUIMBUNDO",
        pergunta: "A palavra 'fubá' vem do quimbundo 'mfuba'. O que significava?",
        contexto: "A palavra está presente na culinária brasileira.",
        opcoes: [
            "Farinha",
            "Fogueira",
            "Panela",
            "Colheita"
        ],
        correta: 0,
        dica: "É um ingrediente utilizado para preparar bolos e outros alimentos.",
        explicacao: "Em quimbundo, 'mfuba' era farinha (de milho ou arroz). No Brasil, ficou como o nome da farinha fina de milho."
    },
    {
        categoria: "🌍 LÍNGUAS AFRICANAS • IORUBÁ",
        pergunta: "De qual língua africana vem a palavra 'axé'?",
        contexto: "A palavra possui grande importância cultural e religiosa em tradições afro-brasileiras.",
        opcoes: [
            "Quimbundo",
            "Iorubá",
            "Tupi",
            "Latim"
        ],
        correta: 1,
        dica: "É uma língua falada principalmente na Nigéria.",
        explicacao: "Vem do iorubá 'àṣẹ', ligado às ideias de energia e força vital."
    },
    {
        categoria: "🌍 LÍNGUAS AFRICANAS • ORIXÁS",
        pergunta: "Os nomes de orixás como Ogum, Xangô e Iemanjá vêm de qual língua?",
        contexto: "Os orixás fazem parte de tradições religiosas de origem africana.",
        opcoes: [
            "Quimbundo",
            "Tupi",
            "Árabe",
            "Iorubá"
        ],
        correta: 3,
        dica: "É a mesma língua da qual vem a palavra axé.",
        explicacao: "São nomes de divindades do candomblé e vêm do iorubá, língua da Nigéria."
    },
    {
        categoria: "🌍 LÍNGUAS AFRICANAS • CULTURA",
        pergunta: "A palavra 'samba' tem origem em línguas de qual grupo africano?",
        contexto: "O samba é um dos ritmos mais conhecidos da cultura brasileira.",
        opcoes: [
            "Iorubá",
            "Tupi",
            "Banto (quimbundo e quicongo)",
            "Árabe"
        ],
        correta: 2,
        dica: "Quimbundo e quicongo pertencem a esse grupo linguístico.",
        explicacao: "Há duas explicações para o sentido: 'semba' (umbigada) ou 'kusamba' (rezar, orar). A raiz banta aparece nas fontes consultadas."
    },
    {
        categoria: "🌍 LÍNGUAS AFRICANAS • CURIOSIDADES",
        pergunta: "Qual destas palavras NÃO tem origem africana?",
        contexto: "O português brasileiro recebeu influências de diversas línguas, inclusive indígenas.",
        opcoes: [
            "Moleque",
            "Quitanda",
            "Abacaxi",
            "Caçula"
        ],
        correta: 2,
        dica: "Essa palavra tem origem em uma língua indígena brasileira.",
        explicacao: "'Abacaxi' vem do tupi, uma língua indígena. As outras vêm de línguas bantas."
    },
    {
        categoria: "🌍 LÍNGUAS AFRICANAS • CURIOSIDADES",
        pergunta: "Qual destas palavras NÃO veio de uma língua africana?",
        contexto: "Nem todas as palavras do português brasileiro possuem origem africana.",
        opcoes: [
            "Cafuné",
            "Dengo",
            "Fubá",
            "Janela"
        ],
        correta: 3,
        dica: "Essa palavra possui origem no latim.",
        explicacao: "'Janela' vem do latim 'ianuella', que significa pequena porta. As outras vêm de línguas bantas."
    },
    {
        categoria: "🌍 LÍNGUAS AFRICANAS • FAMÍLIAS LINGUÍSTICAS",
        pergunta: "Quimbundo, quicongo e umbundo pertencem a qual grupo de línguas africanas?",
        contexto: "As línguas podem ser organizadas em famílias de acordo com suas origens e características.",
        opcoes: [
            "Tupi-guarani",
            "Banto",
            "Latino",
            "Germânico"
        ],
        correta: 1,
        dica: "É o grupo linguístico que aparece em muitas palavras de origem africana no português brasileiro.",
        explicacao: "São línguas bantas, e muitas palavras do português do Brasil vêm delas. O iorubá, falado principalmente na Nigéria, não é banto."
    }
];

const CHAVE_RANKING = "raizesAfricanasRanking_v1";

let indiceAtual = 0;
let pontuacao = 0;
let jogadorAtual = "";
let inicioPartida = 0;
let intervaloTimer = null;

// O jogador tem somente 3 ajudas para o quiz inteiro.
let ajudasRestantes = 3;

let respondida = false;

const intro = document.getElementById("intro");
const quiz = document.getElementById("quiz");
const resultado = document.getElementById("result");
const ranking = document.getElementById("ranking");

// Recebe o nome do jogador.
document.getElementById("playerForm").addEventListener("submit", event => {
    event.preventDefault();

    const nome = document.getElementById("playerName").value.trim();

    if (!nome) {
        alert("Digite seu nome para começar!");
        return;
    }

    jogadorAtual = nome.slice(0, 22);

    iniciarQuiz();
});

// Controla qual tela aparece.
function mostrarTela(tela) {
    [intro, quiz, resultado, ranking].forEach(secao => {
        secao.classList.add("hidden");
    });

    tela.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Inicia uma nova partida.
function iniciarQuiz() {
    indiceAtual = 0;
    pontuacao = 0;

    // Recupera as 3 ajudas ao começar uma nova partida.
    ajudasRestantes = 3;

    inicioPartida = Date.now();

    clearInterval(intervaloTimer);

    intervaloTimer = setInterval(atualizarTimer, 1000);

    document.getElementById("currentPlayer").textContent = jogadorAtual;

    mostrarTela(quiz);
    carregarPergunta();
    atualizarTimer();
}

// Atualiza o cronômetro.
function atualizarTimer() {
    const segundos = Math.floor((Date.now() - inicioPartida) / 1000);

    document.getElementById("timer").textContent =
        "⏱ " + formatarTempo(segundos);
}

// Formata segundos em minutos e segundos.
function formatarTempo(segundos) {
    return `${String(Math.floor(segundos / 60)).padStart(2, "0")}:${String(segundos % 60).padStart(2, "0")}`;
}

// Carrega a pergunta atual.
function carregarPergunta() {
    const p = perguntas[indiceAtual];

    respondida = false;

    document.getElementById("counter").textContent =
        `${String(indiceAtual + 1).padStart(2, "0")} / ${perguntas.length}`;

    document.getElementById("progressBar").style.width =
        `${(indiceAtual / perguntas.length) * 100}%`;

    document.getElementById("category").textContent = p.categoria;
    document.getElementById("question").textContent = p.pergunta;
    document.getElementById("context").textContent = p.contexto;

    document.getElementById("hint").textContent = "💡 " + p.dica;
    document.getElementById("hint").classList.add("hidden");

    document.getElementById("hintBtn").textContent = "💡 Ver dica";
    document.getElementById("hintBtn").disabled = false;

    atualizarBotaoAjuda();

    document.getElementById("feedback").classList.add("hidden");
    document.getElementById("nextBtn").classList.add("hidden");

    const options = document.getElementById("options");

    options.innerHTML = "";

    p.opcoes.forEach((opcao, index) => {
        const botao = document.createElement("button");

        botao.className = "option";
        botao.textContent = `${String.fromCharCode(65 + index)}. ${opcao}`;
        botao.type = "button";

        botao.addEventListener("click", () => {
            corrigirResposta(index);
        });

        options.appendChild(botao);
    });
}

// Mostra ou esconde a dica.
function mostrarDica() {
    const hint = document.getElementById("hint");

    hint.classList.toggle("hidden");

    document.getElementById("hintBtn").textContent =
        hint.classList.contains("hidden")
            ? "💡 Ver dica"
            : "💡 Esconder dica";
}

// Elimina duas alternativas incorretas.
// Essa ajuda pode ser usada somente 3 vezes no quiz inteiro.
function usarAjuda() {
    if (ajudasRestantes <= 0 || respondida) {
        return;
    }

    const correta = perguntas[indiceAtual].correta;

    const incorretas = [...document.querySelectorAll(".option")]
        .map((botao, index) => ({
            botao,
            index
        }))
        .filter(item =>
            item.index !== correta && !item.botao.disabled
        );

    // Embaralha as alternativas incorretas.
    incorretas.sort(() => Math.random() - 0.5);

    // Elimina duas alternativas.
    incorretas.slice(0, 2).forEach(item => {
        item.botao.classList.add("eliminated");
        item.botao.disabled = true;
    });

    // Desconta uma utilização do limite total.
    ajudasRestantes--;

    atualizarBotaoAjuda();
}

// Atualiza o botão e mostra quantas ajudas ainda restam.
function atualizarBotaoAjuda() {
    const botao = document.getElementById("fiftyBtn");

    botao.disabled = ajudasRestantes <= 0 || respondida;

    if (ajudasRestantes > 0) {
        botao.innerHTML =
            `✂️ Eliminar 2 opções <span>${ajudasRestantes} ${ajudasRestantes === 1 ? "uso restante" : "usos restantes"}</span>`;
    } else {
        botao.innerHTML =
            "✂️ Ajuda esgotada <span>0 usos restantes</span>";
    }
}

// Corrige a resposta selecionada.
function corrigirResposta(indiceEscolhido) {
    if (respondida) {
        return;
    }

    respondida = true;

    const p = perguntas[indiceAtual];

    const acertou = indiceEscolhido === p.correta;

    if (acertou) {
        pontuacao += 10;
    }

    document.querySelectorAll(".option").forEach((botao, index) => {
        botao.disabled = true;

        if (index === p.correta) {
            botao.classList.add("correct");
        } else if (index === indiceEscolhido) {
            botao.classList.add("wrong");
        }
    });

    const feedback = document.getElementById("feedback");

    feedback.classList.remove("hidden");

    const titulo = acertou
        ? "✦ Muito bem! +10 pontos"
        : "✦ Não foi dessa vez!";

    const strong = document.createElement("strong");
    strong.textContent = titulo;

    const paragrafo = document.createElement("p");
    paragrafo.textContent = p.explicacao;

    feedback.replaceChildren(strong, paragrafo);

    const nextBtn = document.getElementById("nextBtn");

    nextBtn.classList.remove("hidden");

    nextBtn.textContent =
        indiceAtual === perguntas.length - 1
            ? "VER RESULTADO →"
            : "PRÓXIMA PERGUNTA →";

    atualizarBotaoAjuda();
}

// Avança para a próxima pergunta.
function proximaPergunta() {
    indiceAtual++;

    if (indiceAtual < perguntas.length) {
        carregarPergunta();
    } else {
        mostrarResultado();
    }
}

// Recupera o ranking salvo no localStorage.
function obterRanking() {
    try {
        const dados = JSON.parse(localStorage.getItem(CHAVE_RANKING));

        return Array.isArray(dados) ? dados : [];

    } catch (erro) {
        return [];
    }
}

// Salva o resultado do jogador.
function salvarResultado(novoResultado) {
    const lista = obterRanking();

    const chave = novoResultado.nome.trim().toLocaleLowerCase("pt-BR");

    const existente = lista.find(item =>
        item.nome.trim().toLocaleLowerCase("pt-BR") === chave
    );

    if (existente) {

        // Atualiza somente se o jogador melhorar sua pontuação.
        const melhorou =
            novoResultado.pontos > existente.pontos ||
            (
                novoResultado.pontos === existente.pontos &&
                novoResultado.tempo < existente.tempo
            );

        if (melhorou) {
            Object.assign(existente, novoResultado);
        }

    } else {
        lista.push(novoResultado);
    }

    // Maior pontuação primeiro; em caso de empate, menor tempo.
    lista.sort((a, b) =>
        b.pontos - a.pontos || a.tempo - b.tempo
    );

    localStorage.setItem(CHAVE_RANKING, JSON.stringify(lista));

    return lista;
}

// Exibe o resultado final.
function mostrarResultado() {
    clearInterval(intervaloTimer);

    const tempo = Math.floor((Date.now() - inicioPartida) / 1000);

    const percentual = Math.round(
        (pontuacao / (perguntas.length * 10)) * 100
    );

    document.getElementById("progressBar").style.width = "100%";

    document.getElementById("score").textContent =
        `${pontuacao / 10}/${perguntas.length}`;

    document.getElementById("pointsResult").textContent = pontuacao;

    document.getElementById("timeResult").textContent =
        formatarTempo(tempo);

    document.getElementById("percentResult").textContent =
        percentual + "%";

    let titulo;
    let texto;

    if (percentual === 100) {
        titulo = "Conhecimento extraordinário!";
        texto = "Você acertou todas as perguntas. Continue explorando novos conhecimentos!";

    } else if (percentual >= 70) {
        titulo = "Excelente resultado!";
        texto = "Você demonstrou um ótimo entendimento dos assuntos. Continue assim!";

    } else if (percentual >= 40) {
        titulo = "Bom começo!";
        texto = "Você já aprendeu bastante, mas ainda pode evoluir. Leia as explicações e tente novamente.";

    } else {
        titulo = "Toda jornada começa assim!";
        texto = "Aproveite para revisar as explicações e tente novamente. O importante é aprender!";
    }

    document.getElementById("resultTitle").textContent = titulo;
    document.getElementById("resultText").textContent = texto;

    const lista = salvarResultado({
        nome: jogadorAtual,
        pontos: pontuacao,
        acertos: pontuacao / 10,
        total: perguntas.length,
        tempo: tempo,
        data: new Date().toISOString()
    });

    const posicao = lista.findIndex(item =>
        item.nome.trim().toLocaleLowerCase("pt-BR") ===
        jogadorAtual.trim().toLocaleLowerCase("pt-BR")
    ) + 1;

    document.getElementById("rankMessage").textContent =
        `🏆 ${posicao}º lugar no ranking! Sua melhor pontuação foi salva.`;

    mostrarTela(resultado);
}

// Abre a tela de classificação.
function abrirRanking() {
    renderizarRanking();
    mostrarTela(ranking);
}

// Monta o ranking e o pódio.
function renderizarRanking() {
    const lista = obterRanking().sort((a, b) =>
        b.pontos - a.pontos || a.tempo - b.tempo
    );

    const podium = document.getElementById("podium");
    const rankingList = document.getElementById("rankingList");

    podium.innerHTML = "";
    rankingList.innerHTML = "";

    if (!lista.length) {
        podium.innerHTML = `
            <div class="empty-ranking" style="grid-column:1/-1">
                🏆 Ainda não há jogadores no ranking.<br>
                Seja o primeiro a concluir o desafio!
            </div>
        `;

        rankingList.innerHTML = `
            <div class="empty-ranking">
                As pontuações aparecerão aqui depois da primeira partida.
            </div>
        `;

        return;
    }

    const medalhas = ["🥇", "🥈", "🥉"];
    const ordem = [1, 0, 2];

    ordem.forEach(posicao => {
        const jogador = lista[posicao];

        const card = document.createElement("div");

        card.className = "podium-card" +
            (posicao === 0 ? " first" : "");

        if (!jogador) {
            card.innerHTML = `
                <div class="podium-medal">🏅</div>
                <span class="podium-name">—</span>
                <span class="podium-score">—</span>
                <div class="podium-label">AGUARDANDO</div>
            `;
        } else {
            card.innerHTML = `
                <div class="podium-medal">${medalhas[posicao]}</div>
                <span class="podium-name"></span>
                <span class="podium-score">${jogador.pontos} pontos</span>
                <div class="podium-label">
                    ${jogador.acertos}/${jogador.total} ACERTOS
                </div>
            `;

            card.querySelector(".podium-name").textContent =
                jogador.nome;
        }

        podium.appendChild(card);
    });

    // Exibe os dez melhores jogadores.
    lista.slice(0, 10).forEach((jogador, index) => {
        const linha = document.createElement("div");

        linha.className = "rank-row";

        linha.innerHTML = `
            <div class="rank-position">#${index + 1}</div>

            <div>
                <div class="rank-player"></div>

                <div class="rank-detail">
                    ${jogador.acertos}/${jogador.total} acertos •
                    ${formatarTempo(jogador.tempo)}
                </div>
            </div>

            <div class="rank-score">
                ${jogador.pontos} pts
            </div>
        `;

        linha.querySelector(".rank-player").textContent =
            jogador.nome;

        rankingList.appendChild(linha);
    });
}

// Começa outra partida com o mesmo jogador.
function jogarNovamente() {
    iniciarQuiz();
}

// Volta para a tela inicial.
function voltarInicio() {
    clearInterval(intervaloTimer);
    mostrarTela(intro);
}

// Apaga toda a classificação.
function limparRanking() {
    const senha = prompt("Digite a senha para limpar o ranking:");

    if (senha === null) return;

    if (senha !== "1234") {
        alert("Senha incorreta! O ranking não foi apagado.");
        return;
    }

    if (confirm("Tem certeza que deseja apagar todo o ranking?")) {
        localStorage.removeItem(CHAVE_RANKING);
        renderizarRanking();
        alert("Ranking apagado com sucesso!");
    }
}