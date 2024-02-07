const perguntas = [
  {
    pergunta: "Qual time ganhou o Campeonato Brasileiro de 1998?",
    respostas: [
      "Palmeiras",
      "Corinthians",
      "Coritiba"
    ],
    correta: 0
  },
  {
    pergunta: "Quem foi o artilheiro da Copa do Mundo de 1994?",
    respostas: [
      "Romário",
      "Bebeto",
      "Ronaldo"
    ],
    correta: 0
  },
  {
    pergunta: "Qual jogador brasileiro foi apelidado de 'Rei do Drible' nos anos 90?",
    respostas: [
      "Romário",
      "Ronaldinho Gaúcho",
      "Rivaldo"
    ],
    correta: 1
  },
  {
    pergunta: "Qual clube brasileiro venceu a Copa Libertadores da América em 1992?",
    respostas: [
      "São Paulo",
      "Flamengo",
      "Grêmio"
    ],
    correta: 2
  },
  {
    pergunta: "Quem era o técnico da Seleção Brasileira na conquista da Copa do Mundo de 1994?",
    respostas: [
      "Carlos Alberto Parreira",
      "Zagallo",
      "Felipão"
    ],
    correta: 1
  },
  {
    pergunta: "Qual jogador brasileiro foi o destaque na Copa do Mundo de 1998?",
    respostas: [
      "Ronaldo",
      "Rivaldo",
      "Roberto Carlos"
    ],
    correta: 0
  },
  {
    pergunta: "Qual foi o clube brasileiro que ganhou a Supercopa Libertadores em 1997?",
    respostas: [
      "Grêmio",
      "Cruzeiro",
      "Santos"
    ],
    correta: 1
  },
  {
    pergunta: "Quem foi o artilheiro do Campeonato Brasileiro de 1995?",
    respostas: [
      "Túlio Maravilha",
      "Romário",
      "Edmundo"
    ],
    correta: 0
  },
  {
    pergunta: "Qual jogador brasileiro ganhou o prêmio de Melhor do Mundo da FIFA em 1994?",
    respostas: [
      "Romário",
      "Ronaldo",
      "Rivaldo"
    ],
    correta: 0
  },
  {
    pergunta: "Qual clube brasileiro foi campeão da Copa do Brasil em 1997?",
    respostas: [
      "Grêmio",
      "Palmeiras",
      "Vasco da Gama"
    ],
    correta: 2
  }
];

  
    // cria uma constante e obtem as tags no documento HTML, com o uso do "document.querySelector()". 
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou repetição
  for(const item of perguntas) {
    
    // cria uma constante, obtem os elementos do template e clona-os 
    const quizItem = template.content.cloneNode(true)
    
    // seleciona a constante "quizItem", com o uso do "querySelector()" seleciona o "h3" e usando o "textContent" obtem todos os elementos do "h3". 
    quizItem.querySelector('h3').textContent = item.pergunta
    
    //loop ou repetição
    for(let resposta of item.respostas) {
      
      // cria uma constante, obtem os elementos do template e clona-os
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
        
      // seleciona a const "dt", com o uso do "querySelector()" seleciona o "span" e usando o "textContent" obtem todos os elementos do "span".
      dt.querySelector('span').textContent = resposta

      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))

      dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }

        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }

      quizItem.querySelector('dl').appendChild(dt)
    }
  
    // seleciona a const "quizItem", com o "querySelector()" seleciona o "dl dt" e remove a "Resposta A" originalmente usada como base para as outras respostas. 
    quizItem.querySelector('dl dt').remove()
    
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }