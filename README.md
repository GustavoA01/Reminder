<h1>Reminder</h1>

<p>Este é um projeto de uma página de um site de lembretes que tem a funcionalidade de adicionar nome e data a um lembrete. Os lembretes com mesma data aparecerão agrupados como lista abaixo de sua respectiva data, que estarão ordenadas em ordem crescente. Também é possível remover um lembrete da lista e, caso não haja mais nenhum lembrete de uma determinada data, a data desta lista também será removida. Ademais, uma premissa </p>

<h2>Premissas assumidas</h2>

<p>Como premissa para realizar o projeto, foi assumido que os lembretes criados pelo usuário não seriam guardados em banco de dados ou localStorage, nem que era necessário usar ou criar uma api usando node.js. Além disso, também foi assuimido que o projeto deve ser responsivo, uma vez que o usuários têm telas de tamanhos diferentes. Outra premissa é de que o usuário náo irá escrever uma grande quantidade de lembretes, uma vez que não é comum que isso aconteça no dia a dia, o que permitiu o uso do método bolha para ordenar os lembretes. </p>

<h2>Decisões de projeto</h2>

<p>Para realizar o projeto, foi utilizado HTML, CSS e Javascript, juntamente com o framework ReactJS. O React foi escolhido devido à sua facilidade em manipular essas três ferramentas, pois permite integrar o HTML ao Javascript, possibilitando a repetição de componentes criados separadamente, como os lembretes, com maior facilidade, além de permitir que apenas os componentes da tela que se alteraram em uma renderização sejam re-renderizados, o que aumenta a velocidade de recarregamento. Foi utilizado também o Typescript, que permite que o Javascript tenha uma tipagem nas suas variáveis para eveitar erros no código. Além disso, também foram usadas as bibliotecas styled-components, date-fns e moment. O styled-components foi escolhido devido à sua facilidade de integração com o ReactJS, já que também permite que o CSS seja escrito em Typescript e que suas estilizações possam ser utilizadas em todo o projeto. O date-fns e o moment foram usados principalmente para formatar e comparar as datas digitadas pelo usuário, já que este não pode escrever datas que já passaram e os lembretes precisam estar ordenados em ordem crescente pelo tempo. Para armazenar os dados que serão exibidos na tela, foi utilizado o hook useState do React, que permite adicionar e atualizar estados de forma assíncrona para as variáveis que serão renderizadas na tela, além de permitir o armazenamento de diferentes tipos de dados. Para ordenar os lembretes, foi utilizado o método de bolha, pois é de simples implementação e foi assumido como premissa que o usuário não criará uma grande quantidade de lembretes, o que torna o bolha mais adequado nessa situação.</p>

<h2>Como executar</h2>

<p>Para executar o projeto, basta ter o visual studio code intalado no computador. Ao abrir o aplicativo, abra o terminal e digite "npm run dev". Após isso, o programa executára no local host indicado no terminal e será possível ver o site na página deste local host</p>
>>>>>>> b2e9b385a2ad14ca9a8fb5a663b007ec064a1873
