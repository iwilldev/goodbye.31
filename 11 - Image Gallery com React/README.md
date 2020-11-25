<h3 align="left">11 - Galeria de Imagens com React</h3>
<img src="https://omagotemum.site/assets/img/portfolio/goodbye31/11/project.png" width="640" />
<p align="left">A aplicação utiliza a API do Unsplash, fazendo uma requisição customizada que retorna imagens conforme a busca selecionada. Clicando no card, o usuário é redirecionado a outra rota onde pode visualizar a imagem em resolução maior, podendo ainda clicar nela para abrir sua versão com resolução máxima, em outra aba. Layout feito com CSS Flexbox, responsivo e sem nenhum breakpoint.</p>

<h4 align="left">Criado com:</h4>
<p align="left">React</p>
<p align="left">CSS Flexbox</p>
<p align="left">API do Unsplash</p>

<h4 align="left">Como funciona?</h4>
<p align="left">A barra de busca tem como valor o estado 'query', que é atualizado através do atributo 'onChange' do input. No submit do formulário, essa query é aplicada ao endereço de requisição, retornando um conjunto de imagens correspondentes abaixo do formulário. Para abrir a imagem na visualização foram utilizadas duas Locations Props, uma com a imagem a ser exibida e outra com o array armazenado no estado 'images', para que ao voltar através do botão, o usuário possa ver a última busca que realizou: quando o App é montado, um hook de efeito verifica se há dados nas locations props, retornando a busca realizada, caso positivo, ou mantendo a página em branco, aguardando nova busca.</p>

<h4 align="left">Como executar localmente:</h4>
<p align="left"><b>yarn install</b>: Instala as dependências necessárias para o projeto</p>
<p align="left"><b>yarn start</b>: Executa o projeto em modo de desenvolvimento em localhost:3000</p>

Mais scripts disponíveis na documentação do [Create React App](https://github.com/facebook/create-react-app).

[Veja ao vivo](https://g31-galeria-reativa.now.sh/)
