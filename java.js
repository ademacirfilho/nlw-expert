const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "v myVar;"
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes métodos é usado para adicionar um elemento ao final de um array?",
      respostas: [
        "append()",
        "push()",
        "addToEnd()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual destas palavras-chave é usada para declarar uma função em JavaScript?",
      respostas: [
        "func",
        "function",
        "method"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
      respostas: [
        "Selecionar múltiplos elementos",
        "Selecionar o primeiro elemento que corresponde a um seletor CSS",
        "Selecionar elementos pelo nome da classe"
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'addEventListener()' é usado para fazer em JavaScript?",
      respostas: [
        "Adicionar um elemento HTML",
        "Adicionar um evento a um elemento HTML",
        "Adicionar uma classe a um elemento HTML"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'parseInt()' faz em JavaScript?",
      respostas: [
        "Analisa uma string e retorna um número inteiro",
        "Arredonda um número para o inteiro mais próximo",
        "Converte um número para uma string"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de comentar uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "' Este é um comentário"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'forEach()' em JavaScript?",
      respostas: [
        "Executar uma função para cada elemento em um array",
        "Selecionar todos os elementos de uma página da web",
        "Definir estilos CSS para múltiplos elementos"
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '+' faz em JavaScript?",
      respostas: [
        "Adição",
        "Concatenação de strings",
        "Ambas as opções anteriores"
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