// Perguntas com 8 alternativas (A a H)
const perguntas = [
  {
    pergunta: "O que mais te atrai?",
    A: "Resolver problemas com lógica",
    B: "Ajudar pessoas",
    C: "Organizar projetos",
    D: "Cuidar da natureza",
    E: "Criar algo novo e artístico",
    F: "Proteger a sociedade",
    G: "Construir ou projetar coisas",
    H: "Lidar com animais e plantações"
  },
  {
    pergunta: "Qual atividade você curte mais?",
    A: "Programar ou mexer no computador",
    B: "Trabalhar em equipe",
    C: "Planejar e liderar",
    D: "Reciclar e preservar",
    E: "Desenhar, editar ou criar conteúdo",
    F: "Seguir normas e fiscalizar",
    G: "Fazer cálculos e projetos físicos",
    H: "Trabalhar ao ar livre no campo"
  },
  {
    pergunta: "Qual seu estilo de trabalho?",
    A: "Autônomo e criativo",
    B: "Colaborativo e humano",
    C: "Focado e estratégico",
    D: "Sustentável e consciente",
    E: "Expressivo e inovador",
    F: "Regrado e vigilante",
    G: "Preciso e técnico",
    H: "Prático e produtivo"
  },
  {
    pergunta: "Onde você se imagina atuando?",
    A: "Empresa de tecnologia",
    B: "Hospital ou ONG",
    C: "Escritório ou empresa",
    D: "Organização ambiental",
    E: "Estúdio ou agência criativa",
    F: "Corpo de bombeiros ou CIPA",
    G: "Obra ou laboratório de engenharia",
    H: "Fazenda ou cooperativa"
  }
];

// Contadores de pontos para cada perfil
let pontos = {
  A: 0, B: 0, C: 0, D: 0,
  E: 0, F: 0, G: 0, H: 0
};

let indicePergunta = 0;

// Inicia o quiz
function iniciarQuiz() {
  document.getElementById("tela-inicial").classList.add("oculto");
  document.getElementById("quiz").classList.remove("oculto");
  mostrarPergunta();
}

// Mostra a pergunta atual
function mostrarPergunta() {
  const atual = perguntas[indicePergunta];
  document.getElementById("pergunta").textContent = atual.pergunta;
  for (let letra in atual) {
    if (letra !== "pergunta") {
      document.getElementById(`btn${letra}`).textContent = atual[letra];
    }
  }
}

// Processa a resposta e avança
function responder(opcao) {
  pontos[opcao]++;
  indicePergunta++;
  if (indicePergunta < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

// Exibe o resultado final
function mostrarResultado() {
  document.getElementById("quiz").classList.add("oculto");
  document.getElementById("resultado").classList.remove("oculto");

  // Perfis com mensagens
  const perfis = {
    A: "Tecnologia – Técnico em Informática",
    B: "Saúde/Educação – Técnico em Enfermagem ou Pedagogia",
    C: "Gestão – Técnico em Administração",
    D: "Meio Ambiente – Técnico em Meio Ambiente",
    E: "Design/Criação – Técnico em Design Gráfico",
    F: "Segurança – Técnico em Segurança do Trabalho",
    G: "Engenharia/Construção – Técnico em Edificações ou Mecânica",
    H: "Agropecuária – Técnico em Agropecuária ou Agronegócio"
  };

  // Descobre o maior pontuaador
  let maior = 'A';
  for (let letra in pontos) {
    if (pontos[letra] > pontos[maior]) {
      maior = letra;
    }
  }

  const mensagem = `Sua área é: ${perfis[maior]}. Matricule-se já e prepare-se para o futuro!`;
  document.getElementById("mensagem").textContent = mensagem;
}

// Reinicia o quiz
function reiniciarQuiz() {
  for (let letra in pontos) pontos[letra] = 0;
  indicePergunta = 0;
  document.getElementById("resultado").classList.add("oculto");
  document.getElementById("tela-inicial").classList.remove("oculto");
}
