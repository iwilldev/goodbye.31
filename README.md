<img src="https://drive.google.com/uc?export=view&id=1He43OeabAk4bjXrjgrRzbQdEDHpoUwYp" width="100%" />

<h1 align="left">
  Goodbye.31
</h1>

<h3 align="left">É hora de dar tchau...</h3>
<p align="left">...aos meus 31 anos! :P.<br>E pra celebrar mais um ano de vida completo, no mês que vem, me desafiei a construir uma aplicação web todo dia, por 31 dias.<br>Acompanhe o repositório, dê sugestões e vamos juntos, nessa jornada!</p>


<h3 align="left">01 - Chat Room com VueJs e Firebase</h3>
<img src="https://drive.google.com/uc?export=view&id=1i7Ijq_rM3RWqKZjehKh52JTDZM2gorkU" width="360" />
<p align="left">A aplicação foi criada importando o unpkg do Vue e abstraindo os scripts em um arquivo JS. Demais recursos foram importados através de links, no próprio HTML. Não há necessidade de instalação de dependências ou de execução de scripts para executá-la. Basta baixar os arquivos e abrir o 'index.html' no seu navegador.</p>

<h4 align="left">Criado com:</h4>
<p align="left">VueJs - Scripts e renderização</p>
<p align="left">Firebase - realtime storage</p>
<p align="left">Native Toast - notificação</p>

<h4 align="left">Como funciona?</h4>
<p align="left">Dentro da instância Vue, foram criados os dados a serem utilizados na aplicação, bem como os métodos que manipulam esses dados e interagem com o storage. A comunicação em tempo real com o storage do Firebase, através dos seus métodos nativos, fica dentro do hook 'created', que é executado a cada nova renderização da aplicação, além de atualizar as informações na tela através dos dados recebidos do storage, mantendo o chat com um ótimo tempo de resposta.</p>

[Veja ao vivo](https://g31-chat-vue-firebase.now.sh/)

-----------------------------------------------------------------------------------------------------

<h3 align="left">02 - Flexbox Generator com React</h3>
<img src="https://drive.google.com/uc?export=view&id=1NWiMdt2uXFzPE_ldnUR4Ukb1X8zX7HMh" width="360" />
<p align="left">Aplicação criada para demonstrar o comportamento de um flex-container, através da alteração de suas propriedades.<br><br>
A tela é dividida em duas partes (horizontalmente, no desktop, e verticalmente, nas telas menores), sendo metade para um "controller", onde você pode alterar as propriedades do container através dos respectivos 'select', e a outra para um preview do container e o código CSS gerado pelo controller.<br><br>
Criado com 'create-react-app', pode ser executada e enviada para a produção com os scripts padrão, descritos no README da pasta.
</p>

<h4 align="left">Criado com:</h4>
<p align="left">ReactJS / Create React App</p>
<p align="left">React HTML Parser, para exibir o código CSS com quebra de linha :P</p>
<p align="left">E muuuuuito Flexbox <3</p>

<h4 align="left">Como funciona?</h4>
<p align="left">No controller, cada 'select' altera (através da 'onChange') uma propriedade (aplicada com spread operator) a um objeto armazenado em um estado (criado com 'useState') em sintaxe JavaScript.</p>
<p align="left">Esses estilos são aplicados ao container do preview através de sua propriedade 'style'.</p>
<p align="left">Esse objeto é percorrido, dentro de um hook de efeito, e retorna um array com as propriedades (que são reescritas de camelCase para kebab-case, através do método 'replace()') e seus valores, quando não forem padrão, concatenando os textos no formato CSS, que é impresso na tela, com quebra de linha, utilizando o React HTML Parser.
</p>

[Veja ao vivo](https://g31-flexbox-generator.vercel.app/)

-----------------------------------------------------------------------------------------------------

<h3 align="left">03 - Calculadora com JavaScript</h3>
<img src="https://drive.google.com/uc?export=view&id=1M_fSb7j7H8Q6lPYBYzGzBISRobNcekjQ" width="360" />
<p align="left">Calculadora simples, criada com HTML, CSS e JavaScript.
</p>

<h4 align="left">Criado com:</h4>
<p align="left">JavaScript, para validações de entradas de dados</p>
<p align="left">Biblioteca math.js, que calcula a expressão exibida na tela</p>
<p align="left">CSS Grid, para distribuir e organizar o layout da tela e dos botões.</p>

<h4 align="left">Como funciona?</h4>
<p align="left">Os dados digitados são armazenados e exibidos em uma 'textarea' (tela da calculadora) alterando o 'value' do elemento. Quando um número é digitado, é feita uma validação (através da função inputNumber()), que verifica se o conteúdo na tela é o resultado de uma expressão recém-calculada. Caso positivo, o número substitui o resultado, iniciando uma nova expressão. Caso contrário, como na presença de um número seguido de um operador, o número é inserido dando continuidade a expressão. Para a inclusão de um operador, é feita uma outra validação (através da função inputOperator()) que evita a inserção seguida de mais de um operador. O botão 'C' executa a função clearScreen() que reseta a calculadora para seu estado inicial. O botão '=' executa a função displayResult(), que utiliza o método 'evaluate()' da biblioteca Math.js, para transformar a string com os números e operadores em uma expressão, retornando seu resultado, além de informar que o conteúdo na tela é um resultado, reiniciando a primeira validação.</p>

[Veja ao vivo](https://g31-flexbox-generator.vercel.app/)
