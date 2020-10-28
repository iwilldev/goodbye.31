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

<h4 align="left">Como executar localmente:</h4>
<p align="left">Baixe a pasta e abra o arquivo 'index.html'</p>

[Veja ao vivo](https://g31-calculadora-javascript.now.sh/)
