const perguntas = [
  {
    pergunta: "O que mais te atrai?",
    A: "Resolver problemas com lógica",
    B: "Ajudar pessoas",
    C: "Organizar projetos",
  },
  {
    pergunta: "Qual atividade você curte mais?",
    A: "Programar ou mexer no computador",
    B: "Trabalhar em equipe",
    C: "Planejar tarefas ou liderar",
  },
  {
    pergunta: "Qual seu estilo de trabalho?",
    A: "Autônomo e criativo",
    B: "Colaborativo e humano",
    C: "Focado e estratégico",
  },
  {
    pergunta: "Onde você se imagina atuando?",
    A: "Empresa de tecnologia",
    B: "Hospital ou ONG",
    C: "Escritório ou empresa",
  },
  {
    pergunta: "Qual ferramenta você prefere usar?",
    A: "Linguagens de programação e softwares",
    B: "Equipamentos médicos e humanos",
    C: "Planilhas e agendas",
  },
  {
    pergunta: "Como você prefere tomar decisões?",
    A: "Baseado em dados e lógica",
    B: "Considerando o impacto nas pessoas",
    C: "Pensando em estratégias e resultados",
  },
  {
    pergunta: "Qual ambiente você prefere para trabalhar?",
    A: "Laboratório de tecnologia ou escritório",
    B: "Clínica, hospital ou escola",
    C: "Empresa, escritório administrativo",
  },
  {
    pergunta: "Como você resolve problemas?",
    A: "Analisando códigos e sistemas",
    B: "Escutando e ajudando pessoas",
    C: "Organizando e delegando tarefas",
  },
  {
    pergunta: "O que mais te motiva?",
    A: "Criar e inovar com tecnologia",
    B: "Fazer a diferença na vida das pessoas",
    C: "Gerenciar e liderar equipes",
  },
];

const pontos = { A: 0, B: 0, C: 0 };

const mensagem = {
  A:
    "Você tem perfil para Tecnologia! Cursos sugeridos: Técnico em Informática, Análise e Desenvolvimento de Sistemas, Ciência da Computação.",
  B:
    "Você tem perfil para Saúde! Cursos sugeridos: Técnico em Enfermagem, Farmácia, Psicologia.",
  C:
    "Você tem perfil para Gestão! Cursos sugeridos: Técnico em Administração, Logística, Gestão Empresarial.",
};

const cursos = {
  A: [
    "Técnico em Informática",
    "Análise e Desenvolvimento de Sistemas",
    "Ciência da Computação",
  ],
  B: ["Técnico em Enfermagem", "Farmácia", "Psicologia"],
  C: ["Técnico em Administração", "Logística", "Gestão Empresarial"],
};

const cursosDetalhados = {
  "Técnico em Informática": {
    "Cursos Técnicos": [
      "Desenvolvimento de Sistemas - SENAI",
      "Informática para Internet - ETEC",
    ],
    Faculdades: [
      "Análise e Desenvolvimento de Sistemas - ULBRA",
      "Ciência da Computação - PUCRS",
    ],
  },
  Farmácia: {
    "Cursos Técnicos": ["Técnico em Farmácia - Senac", "Assistente de Laboratório - IF"],
    Faculdades: ["Farmácia - ULBRA", "Farmácia - UFRGS"],
  },
  Logística: {
    "Cursos Técnicos": ["Técnico em Logística - Senac", "Gestão de Estoques - ETEC"],
    Faculdades: [
      "Logística - ULBRA",
      "Administração com ênfase em Logística - Unisinos",
    ],
  },
  "Técnico em Enfermagem": {
    "Cursos Técnicos": ["Enfermagem - Senac", "Cuidador de Idosos - ETEC"],
    Faculdades: ["Enfermagem - ULBRA", "Enfermagem - Feevale"],
  },
  "Técnico em Administração": {
    "Cursos Técnicos": ["Administração - Senac", "Gestão Empresarial - ETEC"],
    Faculdades: ["Administração - ULBRA", "Administração - PUCRS"],
  },
  "Análise e Desenvolvimento de Sistemas": {
    "Cursos Técnicos": ["Análise de Sistemas - Senai", "Programação Web - ETEC"],
    Faculdades: ["Análise e Desenvolvimento de Sistemas - ULBRA"],
  },
  "Ciência da Computação": {
    "Cursos Técnicos": ["Informática - ETEC"],
    Faculdades: ["Ciência da Computação - PUCRS", "Ciência da Computação - UFRGS"],
  },
  Psicologia: {
    "Cursos Técnicos": ["Auxiliar de Psicologia - Senac"],
    Faculdades: ["Psicologia - ULBRA", "Psicologia - PUCRS"],
  },
  "Gestão Empresarial": {
    "Cursos Técnicos": ["Gestão de Projetos - Senac", "Administração - ETEC"],
    Faculdades: ["Administração - PUCRS"],
  },
};

let indicePergunta = 0;

function iniciarQuiz() {
  document.getElementById("inicio").classList.add("oculto");
  document.getElementById("resultado").classList.add("oculto");
  document.getElementById("detalhes-curso").classList.add("oculto");
  document.getElementById("quiz").classList.remove("oculto");

  indicePergunta = 0;
  pontos.A = 0;
  pontos.B = 0;
  pontos.C = 0;
  mostrarPergunta();
}

function mostrarPergunta() {
  const perguntaAtual = perguntas[indicePergunta];
  document.getElementById("pergunta").textContent = perguntaAtual.pergunta;
  document.getElementById("btnA").textContent = `A) ${perguntaAtual.A}`;
  document.getElementById("btnB").textContent = `B) ${perguntaAtual.B}`;
  document.getElementById("btnC").textContent = `C) ${perguntaAtual.C}`;
  document.getElementById("detalhes-curso").classList.add("oculto");
}

function responder(letra) {
  pontos[letra]++;
  indicePergunta++;

  if (indicePergunta < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  document.getElementById("quiz").classList.add("oculto");
  document.getElementById("resultado").classList.remove("oculto");

  let maior = "A";
  if (pontos.B > pontos[maior]) maior = "B";
  if (pontos.C > pontos[maior]) maior = "C";

  document.getElementById("mensagem").textContent = mensagem[maior];

  const container = document.getElementById("cursos-container");
  container.innerHTML = `<h3>Cursos sugeridos:</h3><ul>${cursos[maior]
    .map(
      (curso) =>
        `<li onclick="mostrarDetalhes('${curso}')" style="cursor:pointer;">${curso}</li>`
    )
    .join("")}</ul>`;
}

function mostrarDetalhes(nomeCurso) {
  const detalhes = cursosDetalhados[nomeCurso];
  const div = document.getElementById("detalhes-curso");

  if (detalhes) {
    div.classList.remove("oculto");
    div.innerHTML = `
      <h4>Mais sobre: ${nomeCurso}</h4>
      <strong>Cursos Técnicos:</strong>
      <ul>${detalhes["Cursos Técnicos"]
        .map((item) => `<li>${item}</li>`)
        .join("")}</ul>
      <strong>Faculdades:</strong>
      <ul>${detalhes["Faculdades"]
        .map((item) => `<li>${item}</li>`)
        .join("")}</ul>
    `;
  } else {
    div.classList.remove("oculto");
    div.innerHTML = "<p>Informações ainda não disponíveis.</p>";
  }
}

function reiniciarQuiz() {
  document.getElementById("resultado").classList.add("oculto");
  document.getElementById("detalhes-curso").classList.add("oculto");
  document.getElementById("inicio").classList.remove("oculto");
}
