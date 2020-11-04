<h3 align="left">14 - Jogo da Velha com React</h3>
<img src="https://drive.google.com/uc?export=view&id=18ajS4aPeZtL8DkUpeKWgK-MXdQ3AvPJ4" width="360" />
<p align="left">Reprodução do clássico, com transição entre jogadores (X ou O) e histórico de jogadas com possibilidade de regressão.</p>

<h4 align="left">Criado com:</h4>
<p align="left">React</p>
<p align="left">O 'helper.js', bem como as instruções para esse projeto, foram uma cortesia do canal 'codeSTACKr' no YouTube.</p>

<h4 align="left">Como funciona?</h4>
<p align="left">O componente 'Square' renderiza o 'value' recebido nas props em um botão, além de herdar o 'onClick' do componente 'Board'. O componente 'Board' usa a função 'map' no array 'squares' recebido nas props e, para cada item, renderiza um 'Square', passando para ele o 'value' correspondente a posição do array 'square' e o 'onClick' recebido nas props do componente 'Game'. No componente 'Game', a 'history' armazena o histórico de jogadas, sendo iniciada através do 'useState' como um array de 9 posições nulas. A 'stepNumber' armazena a posição da última jogada, relacionada ao histórico. 'xIsNext' indica qual é o próximo jogador, alternando entre 'true' e 'false'. A 'winner' usa o método 'calculateWinner' do 'helper.js' para verificar se, na condição atual, a mesa apresenta uma jogada vencedora, dentre as possíveis. 'xO' retorna a jogada (X ou O), testando a 'xIsNext' em um ternário. A função 'handleClick()', que é repassada para o 'Board' e o 'Square' através do 'onClick', recebe como parâmetro a posição da jogada, acrescentando-a a constante 'historyPoint' que é atribuída, com a 'stepNumber' como index, a constante 'current' que é armazenada, através de um spread operator, a constante 'squares'. É executada uma condicional que verifica se há um vencedor ('winner') ou se a posição clicada está preenchida (squares[index]). Caso não retorne positivo, a jogada é atribuída a posição correspondente (squares[index] = xO), o histórico é atualizado, bem como a posição da jogada atual nele, além da 'xIsNext' ter seu valor atribuído ao oposto. A função 'jumpTo()' retorna o quadro a jogada correspondente, armazenada na 'stepNumber', além de usar o próprio 'step' para verificar que era o jogador da vez, vendo se a chave da posição, dividida por 2, é par. A 'renderMoves()' renderiza o histórico, conforme as jogadas acontecem. Os botões gerados executam a 'jumpTo()'. No return principal, o componente 'Board' é renderizado, recebendo como 'squares' o histórico de jogadas.</p>

<h4 align="left">Como executar localmente:</h4>
<p align="left"><b>yarn install</b>: Instala as dependências necessárias para o projeto</p>
<p align="left"><b>yarn start</b>: Executa o projeto em modo de desenvolvimento em localhost:3000</p>

Mais scripts disponíveis na documentação do [Create React App](https://github.com/facebook/create-react-app).

[Veja ao vivo](https://g31-jogo-da-velha.now.sh/)
