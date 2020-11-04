<h3 align="left">12 - Quadro de Desenho com JavaScript</h3>
<img src="https://drive.google.com/uc?export=view&id=10dPax6l7JU-COhzFPzNh_eAFByDpoHuD" width="360" />
<p align="left">Quadro de desenho com variação de tamanho e cor do pincel.</p>

<h4 align="left">Criado com:</h4>
<p align="left">JavaScript</p>

<h4 align="left">Como funciona?</h4>
<p align="left">No HTML, o canvas tem medidas fixas a fim de evitar distorções no desenhos. Na barra abaixo, há três elementos que interagem com ele: um input do tipo 'range', que altera o tamanho do pincel (changeBrushSize()); um input do tipo 'color', que altera a cor utilizada (changeBrushColor()); e um botão que limpa o canvas (clearCanvas()). Os inputs enviam, como parâmetro, seu valor respectivo, que é aplicado as variáveis ('size' e 'color') utilizadas nas funções de desenho. O botão utiliza o método 'clearRect', do contexto, para limpar a tela. No canvas, foram inclusos quatro Listeners: para registrar a posição inicial de um traço ('pointerdown'); para interromper o traço e resetar a posição utilizada ('pointerup'); para detectar movimentos no touch e convertê-los para um evento de mouse ('touchmove'); e para detectar movimento do mouse ('mousemove') e, havendo toque/clique no trajeto, executar as funções de desenho: 'drawLine' e 'drawCircle', utilizadas em conjunto para gerar um traçado suave e com curvas, conforme as ações do usuário. A 'drawcircle' tem como parâmetro a posição (x,y) atual do ponteiro, desenhando círculos com diâmetro conforme valor do input e preenchidos com a cor selecionada, a cada ciclo da função. A 'drawLine' tem como parâmetro as posições (x,y) do início do toque (listener 'pointerdown') e do final do toque (listener 'pointerup'), traçando uma linha com a largura conforme valor do input e com a cor selecionada. As propriedades e métodos utilizados nas duas funções são nativas do método 'getContext' que foi atribuído em '2d' a constante 'context'.</p>

<h4 align="left">Como executar localmente:</h4>
<p align="left">Baixe a pasta e abra o arquivo 'index.html'</p>

[Veja ao vivo](https://g31-quadro-desenho.now.sh/)
