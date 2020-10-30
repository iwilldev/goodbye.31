<h3 align="left">10 - Github Card com Vue.js.js</h3>
<img src="https://drive.google.com/uc?export=view&id=1dRwdcaLuiqqCP0NNV_pr4rTnzefwjxu5" width="360" />
<p align="left">A página consome a API do GitHub através do 'axios', fazendo uma requisição a duas rotas, retornando um resumo dos dados do perfil buscado e a linguagem mais utilizada nos repositórios</p>

<h4 align="left">Criado com:</h4>
<p align="left">Vue.js (Vue CLI)</p>
<p align="left">Semantic UI</p>
<p align="left">API do GitHub</p>

<h4 align="left">Como funciona?</h4>
<p align="left">Quando a aplicação é iniciada, o componente GithubCard faz uma requisição a API, através de seu hook 'created', retornando os dados do perfil, que são armazenado no objeto 'user', além dos dados dos repositórios desse perfil, que são percorridos, com o método 'map', e tem as linguagens utilizadas armazenadas no array languageList, que é usado como parâmetro para o método 'findMostFrequentLanguage' do componente, que usa os métodos 'reduce' e 'filter' para comparar a recorrência das linguagens e retornar a que é mais utilizada. Quando uma busca é realizada, a 'searchKey' da instância principal é incrementada e, sendo passada como prop do componente GithubCard, atua como watcher, refazendo todos os passos, desde a requisição até a atribuição dos novos dados.</p>

<h4 align="left">Como executar localmente:</h4>
<p align="left"><b>yarn install</b>: Instala as dependências necessárias para o projeto</p>
<p align="left"><b>yarn serve</b>: Executa o projeto em modo de desenvolvimento em localhost:8080</p>

[Veja ao vivo](https://g31-github-resume-card.now.sh/)
