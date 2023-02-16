import React from 'react'

const dataPosts = [
  {
    id: 0,
    title: "Sistema de leitor - CRUD",
    description:
      "É uma aplicação para java na qual foi montada no modelo MVC. Ao executar o projeto, ele abre uma interface gráfica construida em java na qual você pode fazer iserções, consultas, listagens, updates, e entre outros dos leitores.",
    image:
      "https://www.imagemhost.com.br/images/2023/02/15/crud.png",
    video: null,
    github: "https://github.com/KaiqueBM/Sistema-Leitor-CRUD",
    project: null,
    tags: [
      {
        name: "Java",
      },
      {
        name: "MySql",
      },
      {
        name: "MVC",
      },
    ],
  },{
    id: 1,
    title: "Mural de notas",
    description:
      "É uma aplicação web que serve de mural de notas. Basicamente, você tem uma página principal com um formulário na qual você pode usar colocar um título e uma descrição para uma nota e adicionar na tela. Em baixo, tem todas as notas adicionadas. O projeto ele tem integração entre o back-end e o front-end para o processamento das requisições, além de ser responsivo e tem armazenamento localstorage.",
    image:
      "https://www.imagemhost.com.br/images/2023/02/15/Screenshot_350.png",
    video: "https://www.youtube.com/embed/pbH3vCsswhY",
    github: "https://github.com/KaiqueBM/Mural-De-Notas",
    project: null,
    tags: [
      {
        name: "HTML",
      },{
        name: "CSS",
      },{
        name: "JS",
      },
      {
        name: "Node.js",
      }
    ],
  },{
    id: 2,
    title: "Sitema de chamada - Android Studio",
    description:
      "É uma aplicação mobile que funciona como uma chamada de aula. A primeira activity é para fazer um login, aonde você coloca o seu RA e a sua senha. Após fazer o login mostra os dados do aluno, como horário que fez login, nome, ra e a localização atual (lat e long). Com base nesses dados, ele vai ver se o aluno tem aula nesse dia. Caso tenha, se estiver dentro do horário da aula e na localização da sala, ele permite você registrar a presença, caso contrário aparece uma mensagem dizendo que você hoje não tem aula ou algo do gênero. É possível também consultar as matérias que você tem na sua grade.",
    image:
      "https://www.imagemhost.com.br/images/2023/02/15/Android.png",
    video: null,
    github: "https://github.com/KaiqueBM/Sistema-De-Chamada-De-Sala",
    project: null,
    tags: [
      {
        name: "Kotlin",
      },
      {
        name: "Android Studio",
      },
      {
        name: "SqLite",
      },
    ],
  },{
    id: 3,
    title: "Database do Valorant",
    description:
      "Essa aplicação foi construida em React utilizando Typescript e Bootstrap, além do Axios para fazer a conexão com a API da database do Valorant, mostrando assim todos os cosméticos e coleções do jogo além dos mapas.",
    image:
      "https://www.imagemhost.com.br/images/2023/02/15/Screenshot_349.png",
    video: "mEiXPhmVFvc",
    github: "https://github.com/KaiqueBM/valorant_database_items",
    project: null,
    tags: [
      {
        name: "React",
      },
      {
        name: "TS",
      },
      {
        name: "Axios",
      },
      {
        name: "Bootstrap",
      },
    ],
  },{
    id: 4,
    title: "NLW - Ecoleta",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis tellus at diam.",
    image:
      "https://www.imagemhost.com.br/images/2023/02/15/ecoleta.png",
    video: null,
    github: "https://github.com/KaiqueBM/NLW-01-Ecoleta",
    project: null,
    tags: [
      {
        name: "Node.js",
      },
      {
        name: "React",
      },
      {
        name: "React Native",
      },
    ],
  },{
    id: 5,
    title: "Monte seu hamburger",
    description:
      "Essa aplicação foi feito durante um curso colocando em prática os conceitos aprendidos de Vue.js. É um sistema crud basicamente, você consegue montar seu pedido e gerenciar todos os pedidos em uma outra página.",
    image:
      "https://www.imagemhost.com.br/images/2023/02/15/Screenshot_347.png",
    video: "https://www.youtube.com/embed/m6bqryWxF1M",
    github: "https://github.com/KaiqueBM/Make-Your-Burger",
    project: null,
    tags: [
      {
        name: "Vue.js",
      },
      {
        name: "CSS",
      },
      {
        name: "JS",
      },
    ],
  },{
      id: 6,
      title: "Ferragens Piratininga",
      description:
        "Foi desenvolvido um site em Wordpress para a empresa Ferragens Piratininga, utilizando bastante PHP e Javascript. Como eles vendem produtos, todo o script teve que ser feito em torno do plugin WooCommerce.",
      image:
        "https://www.imagemhost.com.br/images/2023/02/15/Screenshot_348.png",
      video: null,
      github: null,
      project: "http://www.ferragenspiratininga.com.br/",
      tags: [
        {
          name: "JS",
        },
        {
          name: "PHP",
        },
        {
          name: "WP",
        },
        {
          name: "WooCommerce",
        },
      ],
    },{
      id: 7,
      title: "Loja do Fortnite",
      description:
        "Essa aplicação foi desenvolvida consumindo a API da loja de itens do Fortnite. Basicamente é atualizado em tempo real com base na loja do jogo, mostrando todos os itens, bundles, com todos os detalhes. Consegue ver informações de preço, desconto, raridade, descrição e entre outras.",
      image:
        "https://raw.githubusercontent.com/KaiqueBM/fortnite_shop/master/assets/app_1.png",
      video: "https://www.youtube.com/embed/mdTjP9HbIG4",
      github: "https://github.com/KaiqueBM/fortnite_shop",
      project: null,
      tags: [
        {
          name: "React",
        },
        {
          name: "TS",
        },
        {
          name: "Bootstrap",
        },
        {
          name: "Axios",
        },
      ],
    },{
      id: 8,
      title: "NLW SETUP - Habits",
      description:
        "Essa aplicação foi desenvolvida durante a NLW SETUP realizada pela Rockseat. É um controle de hábitos, você pode registrar todo os dias se você realizado um determinado hábito ou até adicionar um novo hábito à sua rotina. Foi feito a parte do back-end, do banco de dados e do front-end.",
      image:
        "https://www.imagemhost.com.br/images/2023/02/15/app_1.png",
      video: "https://www.youtube.com/embed/Hq9LD9CzNJM",
      github: "https://github.com/KaiqueBM/nlw-setup",
      project: null,
      tags: [
        {
          name: "React",
        },
        {
          name: "TS",
        },
        {
          name: "Node.js",
        },
        {
          name: "Prisma",
        },
      ],
    },{
      id: 9,
      title: "FPVD",
      description:
        "Foi desenvolvido um site para a Federação Paulista de Voleibol para deficientes utilizando Wordpress, PHP e Javascript. Consegue ver as notícias mais recentes, todas as informações sobre a Federação, ver os clubes que participam da liga, os árbitros e até os projetos incetivados.",
      image:
        "https://www.imagemhost.com.br/images/2023/02/15/Screenshot_346.png",
      video: "https://www.youtube.com/embed/t_MKLTLmM7U",
      github: null,
      project: null,
      tags: [
        {
          name: "JS",
        },
        {
          name: "PHP",
        },
        {
          name: "WP",
        },
      ],
    },{
      id: 10,
      title: "Catálogo de filmes",
      description:
        "Desenvolvi uma aplicação web de um catálogo de filmes onde você pode ver os filmes mais populares do momento, filtrar por gêneros, pesquisar um filme especifico e entre outras funções. Consumi a api da The Movies DB, uma api bem completa para o que eu queria fazer. Utilizei nesse projeto React, Typescript e Tailwind. A listagem dos filmes é por sua popularidade atualmente. Fiz um esquema de paginação, mostrando 20 filmes por página. Você pode também filtrar pelos gêneros, listando apenas filmes de ação, comédio, e entre outros. Também tem a opção de pesquisar por um filme especifico, podendo até pesquisar por um filme que ainda não lançou. E para finalizar, pode mudar a linguagem do site por meio de um botão na nav.",
      image:
        "https://raw.githubusercontent.com/KaiqueBM/catalogo-de-filmes/master/assets/app_1.png",
      video: "https://www.youtube.com/embed/oS-VuN9uDG0",
      github: "https://github.com/KaiqueBM/catalogo-de-filmes",
      project: null,
      tags: [
        {
          name: "React",
        },{
          name: "TS",
        },{
          name: "Tailwind",
        },
        
      ],
    },{
      id: 11,
      title: "Yappi",
      description:
        "Aplicação criada para a empresa Yappi. Foi feito em Wordpress utilizando HTML, CSS, Javascript, PHP, Bootstrap, jQuery e Ajax. Além do blog, foi desenvolvido uma calculadora de juros composto, precisando criar um back end interno no WP, utilizando o Ajax para realizar a chamada.",
      image:
        "https://www.imagemhost.com.br/images/2023/02/15/Screenshot_345.png",
      video: "https://www.youtube.com/embed/GfNgF_zNnb0",
      github: null,
      project: "https://yappi.com.br/",
      tags: [
        {
          name: "JS",
        },
        {
          name: "PHP",
        },
        {
          name: "Ajax",
        },{
          name: "WP",
        },
      ],
    },
  ];

  export const data = dataPosts.reverse()