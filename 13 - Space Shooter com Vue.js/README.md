<h3 align="left">13 - Space Shooter com VueJs</h3>
<img src="https://omagotemum.site/assets/img/portfolio/goodbye31/13/project.png" width="640" />
<p align="left">Jogo no estilo arcade compatível com PC (pelo teclado) e smartphones (pelos botões virtuais). O jogo é interrompido se o usuário perder as 10 energias, que são retiradas quando um alien consegue tocar a base do quadro do jogo.</p>

<h4 align="left">Criado com:</h4>
<p align="left">Vue.js, JavaScript e CSS</p>

<h4 align="left">Como funciona?</h4>
<p align="left">Uma instância Vue foi criada na div '.wrapper', concentrando os dados do jogador (x, y, angle, bullets), do jogo (score, energy) e dos inimigos (enemies e enemyReached). Ao ser renderizada, ela executa os métodos 'updateBullet' e 'updateEnemy', através de 'created'. Nos métodos, 'rotateClockwise()' e 'rotateCounterClockwise()' alteram a variável 'angle', que afeta o player, através de um 'transform' aplicado nos estilos; o 'fire()' cria um novo bullet (com as posições e ângulo do jogador) no array 'bullets', que é afetado pelo 'updateBullet', que utiliza o objeto 'Math' para calcular o trajeto do disparo em função do ângulo do jogador, sendo interrompido e removi do array 'bullets', quando cai na condicional do método 'outOfScreen()', que verifica se o disparo saiu das coordenadas x e y da tela do jogo. O método 'checkCollision()' testa se um dos disparos e um dos inimigos estão na mesma posição. Caso positivo, um ponto é acrescentado em 'score' e o inimigo "atingido" é removido do array 'enemies'. O método 'enemyReachedBottom()' testa se um dos inimigos alcançou a base da tela, removendo-o do array 'enemies', trocando a condição de 'enemyReached' para 'true' e removendo um ponto de 'energy', seguido de um 'setTimeout' que retorna a condição de 'enemyReached' para 'false'. Essa variável é usada como teste em um ternário que acrescenta uma classe ao container do jogo, fazendo com que a tela dê uma leve chacoalhada, quando o jogador perde uma energia. O 'updateEnemy()' acrescenta um inimigo no array 'enemies', em posição aleatória no eixo x, usando um 'setInterval' que incrementa sua posição no eixo y, fazendo com que ele se mova pra baixo. Esse método executada o 'enemyReachedBottom()' para cada inimigo. Há um Listener no documento ('keydown), que captura entradas de teclas e, caso sejam as teclas jogáveis, executa os métodos correspondentes, descritos em tela.</p>

<h4 align="left">Como executar localmente:</h4>
<p align="left">Baixe a pasta e abra o arquivo 'index.html'</p>

[Veja ao vivo](https://g31-space-shooter.now.sh/)
