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

[Veja ao vivo](https://g31-calculadora-javascript.now.sh/)

-----------------------------------------------------------------------------------------------------

<h3 align="left">04 - Lista de Compras com VueJs</h3>
<img src="https://drive.google.com/uc?export=view&id=1jL09UxOBXwkadSs12C7NFttdC4f9Kdpy" width="360" />
<p align="left">Loja do Mago, um shopping fake que vende itens e habilidades para desenvolvedores. Construído com VueJs, foi feita para explorar conceitos de reatividade, renderização condicional, binding, entre outros recursos como a criação e utilização de métodos na instância utilizada.</p>

<h4 align="left">Criado com:</h4>
<p align="left">VueJs - Scripts e renderização</p>
<p align="left">CSS Flexbox.</p>

<h4 align="left">Como funciona?</h4>
<p align="left">Uma instância Vue foi criada no elemento '#shopping-list', que contempla todos os itens da aplicação. Em seu estado 'default', a lista de itens da loja está oculta, sendo exibido apenas os itens selecionados (ou uma mensagem de carrinho vazio, caso nenhum item tenha sido escolhido na lista). Quando o botão 'Ver Loja' é clicado, o estado da instância é alterado para 'edit', exibindo os produtos disponíveis acima do resultado da loja. Clicando em 'comprar', o item selecionado é adicionado na lista de compras e tem sua classe e botão alterados, impedindo a inserção duplicada, através de um bind que verifica sua propriedade 'purchased', um booleano. Quando o botão remover é clicado, ele é removido da lista e volta ao seu comportamento e aparência padrão. Na lista de compras, havendo presença de itens selecionados, surge um botão 'finalizar' que direciona o usuário a um novo estado ('finished') que exibe uma mensagem de pedido finalizado.</p>

[Veja ao vivo](https://g31-lista-de-compras-vuejs.now.sh/)

-----------------------------------------------------------------------------------------------------

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

[Veja ao vivo](https://g31-weather-app-react.vercel.app/)

-----------------------------------------------------------------------------------------------------

<h3 align="left">06 - Pomodoro Timer com JavaScript</h3>
<img src="https://drive.google.com/uc?export=view&id=12ouedWAu-5unQ8kGU6g1H1PdLTvvR3jb" width="360" />
<p align="left">A aplicação permite a customização dos tempos de foco e de pausa, individualmente. É possível iniciar e pausar o timer, além de reiniciar a página ao estado original.</p>

<h4 align="left">Criado com:</h4>
<p align="left">JavaScript</p>
<p align="left">CSS Flexbox</p>

<h4 align="left">Como funciona?</h4>
<p align="left">Os elementos de texto dos timers, os botões e os inputs do tempo são selecionados no JavaScript com o método 'querySelector'. Os botões executam funções através de Event Listeners que resetam (botão Reset) a página, além de iniciar (botão Iniciar) ou interromper (botão Pausar) a função 'timer', que executa uma série de condicionais nas propriedades 'innerText' dos elementos de texto, realizando o decremento adequado a funcionalidade de timer, manipulando diretamente os dados dos elementos no DOM. Ao fim dos ciclos de foco e pausa, é exibido um alerta ao usuário, para que ele possa dar sequência ao próximo ciclo. Finalizados os dois, é feito um incremento no contador de ciclos.</p>

[Veja ao vivo](https://g31-pomodoro-timer.now.sh/)

-----------------------------------------------------------------------------------------------------

<h3 align="left">07 - Painel Drag and Drop com Vue.js</h3>
<img src="https://drive.google.com/uc?export=view&id=1GqVizuvCB5olm_CxuuCK5L5HLrZkjjle" width="360" />
<p align="left">Painel no estilo kan ban, com três estados para as atividades, que podem ser incluídas através do formulário do cabeçalho e movidas de um quadro para o outro.</p>

<h4 align="left">Criado com:</h4>
<p align="left">Vue.js (Vue CLI)</p>
<p align="left">CSS Flexbox</p>

<h4 align="left">Como funciona?</h4>
<p align="left">O formulário do topo usa um input com v-model para a variável 'newCard' que é adicionada, através do método 'addCard()' ao array 'cards', que é renderizado no primeiro quadro, através da diretiva v-for. Quando um card é selecionado, sua ID é armazenada no Local Storage e seu display é alterado para 'none', através de um método no componente 'Card'. Quando o usuário solta o card em um quadro, um método do componente 'Board' é executado, utilizando a ID armazenada no Local Storage para assumir o card como filho, através do método 'appendChild()'. </p>

[Veja ao vivo](https://g31-painel-drag-and-drop.now.sh/)

-----------------------------------------------------------------------------------------------------

<h3 align="left">08 - Editor de Fotos com React</h3>
<img src="https://drive.google.com/uc?export=view&id=1_CVbvb6a3_HDQE6VBaf8zw8E392E1iZR" width="360" />
<p align="left">Editor de fotos que permite carregar uma imagem PNG ou JPG e aplicar filtros CSS nela, com a opção de exportação do canvas onde a imagem foi editada.</p>

<p align="left">Nota de má funcionalidade: no mobile, o app não exporta a imagem da maneira adequada. Por algum motivo, o canvas e a sua referência no DOM parecem ter medidas distintas, fazendo com que a imagem seja exportada com faixas pretas a direita e abaixo. Fico aberto a sugestões sobre como resolver esse bug.</p>

<h4 align="left">Criado com:</h4>
<p align="left">React</p>

<h4 align="left">Como funciona?</h4>
<p align="left">No cabeçalho, quando uma imagem é selecionada, uma função é executada através do atributo 'onChange' do input, que reseta os valores de configuração padrão (atribuindo a constante 'defaultValues' ao estado 'adjustedValues') e gera uma url temporária para a imagem que renderiza na 'img' abaixo do header. Essa imagem recebe os estilos através de um hook de efeito, que atualiza uma template com a propriedade filter e todos os valores aplicáveis através dos controles abaixo, vindos do estado 'adjustedValues'. Nos controles, os botões mudam o estado 'valuesIndex' que é utilizado para acessar os valores individuais da 'adjustedValue'. Quando o input range é alterado, o filtro selecionado nos botões é aplicado através do atributo 'onChange' desse input. Para a exportação, foi utilizada a dependência 'html-to-image', que imprime o canvas com os filtros aplicados em uma imagem JPEG.</p>

[Veja ao vivo]()

-----------------------------------------------------------------------------------------------------

<h3 align="left">09 - App de Meditação com JavaScript</h3>
<img src="https://drive.google.com/uc?export=view&id=1rbykzmNhNZNZ553OrRvAuwx4nLgbc2Cq" width="360" />
<p align="left">App para auxiliar a meditação, com dois temas ambientes (e vídeos de fundo correspondentes), três opções de duração e botão play/pause com relógio regressivo.</p>

<h4 align="left">Criado com:</h4>
<p align="left">JavaScript</p>

<h4 align="left">Como funciona?</h4>
<p align="left">Os elementos do DOM são capturados no script através do método 'querySelector', além de declaradas a medida da circunferência do círculo animado ao redor do play (outlineLength) e o tempo de duração da aplicação em modo play (fakeDuration). Para mudar o tema ambiente, utiliza-se um forEach nos botões capturados e atribui-se um Event Listener (pointerdown) para cada um, que altera as sources do video e do som, através dos atributos 'data-video' e 'data-sound' nos elementos HTML. Para mudar o tempo, também é utilizado um forEach nos botões, seguidos de Listeners (pointerdown) que alteram a 'fakeDuration', através do atributo 'data-time' nos elementos, além de alterar o texto do relógio regressivo. No botão play, também há um Event Listener (pointerdown), que executa a função 'checkPlaying()', verificando se o som está pausado ou em execução, tomando a ação correspondente com o vídeo de fundo, o som selecionado e o ícone do botão, que alterna entre play e pause. Por último, é executado o método 'ontimeupdate', no elemento de áudio, que decrementa o relógio, anima o círculo ao redor do botão e retorna o app ao estado original quando a 'fakeDuration' é menor que o tempo de execução, com vídeo e áudio pausados e botão habilitado como play.</p>

[Veja ao vivo]()
