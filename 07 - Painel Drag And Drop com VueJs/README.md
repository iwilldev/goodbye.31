<h3 align="left">07 - Painel Drag and Drop com Vue.js</h3>
<img src="https://drive.google.com/uc?export=view&id=1GqVizuvCB5olm_CxuuCK5L5HLrZkjjle" width="360" />
<p align="left">Painel no estilo kan ban, com três estados para as atividades, que podem ser incluídas através do formulário do cabeçalho e movidas de um quadro para o outro.</p>

<h4 align="left">Criado com:</h4>
<p align="left">Vue.js (Vue CLI)</p>
<p align="left">CSS Flexbox</p>

<h4 align="left">Como funciona?</h4>
<p align="left">O formulário do topo usa um input com v-model para a variável 'newCard' que é adicionada, através do método 'addCard()' ao array 'cards', que é renderizado no primeiro quadro, através da diretiva v-for. Quando um card é selecionado, sua ID é armazenada no Local Storage e seu display é alterado para 'none', através de um método no componente 'Card'. Quando o usuário solta o card em um quadro, um método do componente 'Board' é executado, utilizando a ID armazenada no Local Storage para assumir o card como filho, através do método 'appendChild()'. </p>

<h4 align="left">Como executar localmente:</h4>
<p align="left"><b>yarn install</b>: Instala as dependências necessárias para o projeto</p>
<p align="left"><b>yarn serve</b>: Executa o projeto em modo de desenvolvimento em localhost:8080</p>

[Veja ao vivo](https://g31-painel-drag-and-drop.now.sh/)
