<h3 align="left">18 - Are You Human? com JavaScript</h3>
<img src="https://drive.google.com/uc?export=view&id=18IXAPtBbeV9NR6JOVQ5GheaE327mXtQo" width="360" />
<p align="left">Verificador por toque/clique, no estilo CAPTCHA. Quando o usuário pressiona a área, uma barra enche da esquerda para a direita, até o fim da caixa. O botão de envio só é liberado se o toque for interrompido com a ponta da barra dentro da área vermelha, que aparece em posições aleatórias, a cada tentativa.</p>

<h4 align="left">Criado com:</h4>
<p align="left">JavaScript e CSS</p>

<h4 align="left">Como funciona?</h4>
<p align="left">No início do script, seis constantes são criadas, a partir dos elementos da página, utilizando o método 'querySelector: 'submitButton', que é o botão de envio do formulário, 'openTestButton', que é o botão que habilita o teste, 'testMessage' e 'testBox' que fazem parte do validador, sendo a mensagem de orientação e a área de toque, e 'bar' e 'trigger', que são a barra que "enche" e a área onde ela deve ser interrompida, respectivamente. No 'openTestButton' há um Listener (pointerdown) que remove a classe 'hidden' da 'testBox' e da 'testMessage', além de adicioná-la a si, tornando-se invisível enquanto habilita a visualização da área de teste. Na 'testBox' há dois listeners. O 'pointerdown' exibe o 'trigger' e o posiciona aleatoriamente, além de atribuir o valor 'true' a variável 'isPressed' e executar a função 'fillBar()', que usa um 'setInterval' para aumentar a largura da barra, sendo interrompido quando a barra chega ao fim da 'testBox', ou quando a condição de 'isPressed' for 'false'. Já no 'pointerup', a 'isPressed' recebe o valor 'false' e é feita uma condicional para verificar se a barra "parou" dentro do 'trigger'. Caso positivo, a 'testMessage' recebe 'Verificado!', através do 'innerHTML', a 'testBox' recebe a classe 'hidden' e o 'submitButton' é habilitado. Se a condição for negativa, os elementos são resetados para uma nova tentativa.</p>

<h4 align="left">Como executar localmente:</h4>
<p align="left">Baixe a pasta e abra o arquivo 'index.html'</p>

[Veja ao vivo](https://g31-are-you-human.now.sh/)
