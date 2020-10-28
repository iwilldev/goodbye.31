<h3 align="left">05 - App de Clima com React</h3>
<img src="https://drive.google.com/uc?export=view&id=1AqJf9-hZGo_z7FM8m5y34xTbVn9SFxmS" width="360" />
<p align="left">Utilizando a API da OpenWeatherMap, a aplicação permite buscar o clima atual em qualquer local do mundo, através da barra de busca, exibindo um resultado com aparência dinâmica que varia conforme a condição do clima e a temperatura do local buscado.</p>

<p align="left">ATUALIZAÇÃO: Seguindo as dicas do mestre <a href="https://www.linkedin.com/in/emanuelcandido/">Emanuel Cândido</a> , incluí um botão ao lado da caixa de busca, além de uma mensagem alternativa para quando a 'query' da busca estiver vazia, orientando o usuário a buscar a cidade através da barra.</p>

<h4 align="left">Criado com:</h4>
<p align="left">React</p>
<p align="left">CSS Flexbox</p>
<p align="left">API da OpenWeatherMap</p>

<h4 align="left">Como funciona?</h4>
<p align="left">Quando o usuário busca um local na barra de busca, a aplicação faz uma requisição a API, retornando os dados para exibição. Na renderização do container do app, são feitas verificações condicionais que retornam até nove variações de ícones conforme o clima e duas baseadas na temperatura. Após verificação, são aplicadas as classes correspondentes ao resultado obtido através da API.</p>

<h4 align="left">Como executar localmente:</h4>
<p align="left"><b>yarn install</b>: Instala as dependências necessárias para o projeto</p>
<p align="left"><b>yarn start</b>: Executa o projeto em modo de desenvolvimento em localhost:3000</p>

Mais scripts disponíveis na documentação do [Create React App](https://github.com/facebook/create-react-app).

[Veja ao vivo](https://g31-weather-app-react.vercel.app/)
