<h3 align="left">09 - App de Meditação com JavaScript</h3>
<img src="https://drive.google.com/uc?export=view&id=1rbykzmNhNZNZ553OrRvAuwx4nLgbc2Cq" width="360" />
<p align="left">App para auxiliar a meditação, com dois temas ambientes (e vídeos de fundo correspondentes), três opções de duração e botão play/pause com relógio regressivo.</p>

<h4 align="left">Criado com:</h4>
<p align="left">JavaScript</p>

<h4 align="left">Como funciona?</h4>
<p align="left">Os elementos do DOM são capturados no script através do método 'querySelector', além de declaradas a medida da circunferência do círculo animado ao redor do play (outlineLength) e o tempo de duração da aplicação em modo play (fakeDuration). Para mudar o tema ambiente, utiliza-se um forEach nos botões capturados e atribui-se um Event Listener (pointerdown) para cada um, que altera as sources do video e do som, através dos atributos 'data-video' e 'data-sound' nos elementos HTML. Para mudar o tempo, também é utilizado um forEach nos botões, seguidos de Listeners (pointerdown) que alteram a 'fakeDuration', através do atributo 'data-time' nos elementos, além de alterar o texto do relógio regressivo. No botão play, também há um Event Listener (pointerdown), que executa a função 'checkPlaying()', verificando se o som está pausado ou em execução, tomando a ação correspondente com o vídeo de fundo, o som selecionado e o ícone do botão, que alterna entre play e pause. Por último, é executado o método 'ontimeupdate', no elemento de áudio, que decrementa o relógio, anima o círculo ao redor do botão e retorna o app ao estado original quando a 'fakeDuration' é menor que o tempo de execução, com vídeo e áudio pausados e botão habilitado como play.</p>

<h4 align="left">Como executar localmente:</h4>
<p align="left">Baixe a pasta e abra o arquivo 'index.html'</p>

[Veja ao vivo](https://g31-app-meditacao.now.sh/)
