<h3 align="left">17 - Orion (Imagens do Espaço) com React</h3>
<img src="https://omagotemum.site/assets/img/portfolio/goodbye31/17/project.png" width="640" />
<p align="left">Utilizando a dependência 'react-calendar', a aplicação faz requisições a API 'Astronomy Picture of The Day' da NASA, retornando a imagem e um link para visualização em alta resolução.</p>

<h4 align="left">Criado com:</h4>
<p align="left">React, react-calendar, Axios, API 'APOD' da NASA.</p>

<h4 align="left">Como funciona?</h4>
<p align="left">Ao ser iniciada, a aplicação tem a data atual (new Date()) como valor do estado 'currentDate'. Esse valor é utilizado em um hook de efeito (useEffect) que tem o próprio 'currentDate' como dependência. A data é formatada usando três variáveis ('fullYear', 'month' e 'date') que são declaradas com os respectivos getters ('getFullYear', 'getMonth' e 'getDate') da instância 'Date()'. Esse valor formatado é declarado na constante 'fullDate' que é utilizada em uma template string que faz a requisição a API, utilizando o Axios. Na resposta, o objeto 'response.data' é atribuído ao estado 'image', que serve como condicional para renderizar o conteúdo dentro da div '.container': o título, o link para a imagem e a imagem em si, que são gerados com os valores das propriedades '.title', '.hdurl' e '.url' do objeto recebido da API. No menu da aplicação, há um calendário gerado através da 'react-calendar' que, ao ter um dia selecionado pelo usuário, altera o estado 'currentDate' para a data selecionada, reiniciando o script do useEffect citado acima e apresentando uma nova imagem na tela.</p>

<h4 align="left">Como executar localmente:</h4>
<p align="left"><b>yarn install</b>: Instala as dependências necessárias para o projeto</p>
<p align="left"><b>yarn start</b>: Executa o projeto em modo de desenvolvimento em localhost:3000</p>

Mais scripts disponíveis na documentação do [Create React App](https://github.com/facebook/create-react-app).

[Veja ao vivo](https://g31-orion.now.sh/)
