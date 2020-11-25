<h3 align="left">25 - Carrossel com JavaScript</h3>
<img src="https://omagotemum.site/assets/img/portfolio/goodbye31/26/project.png" width="640" />
<p align="left">Carrossel de imagens com auto rolagem.</p>

<h4 align="left">Criado com:</h4>
<p align="left">JavaScript e CSS</p>

<h4 align="left">Como funciona?</h4>
<p align="left">O carrossel possui a propriedade overflow como 'hidden', fazendo com que o 'image-container' dentro dele não fuja do limite de espaço. No script, a função 'runCarousel()' é executada a cada 2 segundos através de um 'setInterval', fazendo com que o 'image-container' seja deslocado para a esquerda, através de um translateX (-600px multiplicados pelo "id da imagem") na propriedade transform. O controle para resetar o carrossel a posição original é feito através da variável 'imageId' que percorre um array com as imagens que estão dentro do container (constante 'images'). Chegando ao fim do array, a 'imageId' é igualada a zero, voltando o container para a posição inicial.</p>

<h4 align="left">Como executar localmente:</h4>
<p align="left">Baixe a pasta e abra o arquivo 'index.html'</p>

[Veja ao vivo](https://g31-js-carousel.vercel.app)
