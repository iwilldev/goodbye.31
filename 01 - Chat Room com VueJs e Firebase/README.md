<h3 align="left">01 - Chat Room com VueJs e Firebase</h3>
<img src="https://omagotemum.site/assets/img/portfolio/goodbye31/01/project.png" width="640" />
<p align="left">A aplicação foi criada importando o unpkg do Vue e abstraindo os scripts em um arquivo JS. Demais recursos foram importados através de links, no próprio HTML. Não há necessidade de instalação de dependências ou de execução de scripts para executá-la. Basta baixar os arquivos e abrir o 'index.html' no seu navegador.</p>

<h4 align="left">Criado com:</h4>
<p align="left">VueJs - Scripts e renderização</p>
<p align="left">Firebase - realtime storage</p>
<p align="left">Native Toast - notificação</p>

<h4 align="left">Como funciona?</h4>
<p align="left">Dentro da instância Vue, foram criados os dados a serem utilizados na aplicação, bem como os métodos que manipulam esses dados e interagem com o storage. A comunicação em tempo real com o storage do Firebase, através dos seus métodos nativos, fica dentro do hook 'created', que é executado a cada nova renderização da aplicação, além de atualizar as informações na tela através dos dados recebidos do storage, mantendo o chat com um ótimo tempo de resposta.</p>

<h4 align="left">Como executar localmente:</h4>
<p align="left">Baixe a pasta e abra o arquivo 'index.html'</p>

[Veja ao vivo](https://g31-chat-vue-firebase.now.sh/)
