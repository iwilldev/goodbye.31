<h3 align="left">21 - Lista de Tarefas com Vuetify</h3>
<img src="https://omagotemum.site/assets/img/portfolio/goodbye31/21/project.png" width="640" />
<p align="left">Lista de tarefas criada utilizando Vue.js e o framework de interface Vuetify.</p>

<h4 align="left">Criado com:</h4>
<p align="left">Vue.js (Vue CLI)</p>
<p align="left">Vuetify</p>

<h4 align="left">Como funciona?</h4>
<p align="left">As tarefas são armazenadas no array 'tasks' da propriedade 'data()'. Quando o usuário cria uma nova tarefa, o método 'addTask()' é executado, criando um novo objeto com um id dinâmico, o nome escolhido pelo usuário e o valor 'false' para a propriedade 'done' (feito), adicionando esse objeto ao array 'tasks', através do 'push()'. Quando o usuário exclui uma tarefa, o método 'deleteTask()' retorna um novo array de 'tasks' através do método 'filter()', com todas as tarefas exceto a que tem o id da deletada, gerando uma nova lista sem essa tarefa. Quando uma tarefa é concluída pelo usuário, o método 'doneTask()' utiliza o método 'filter()' para encontrar a tarefa com o mesmo id e inverter o valor booleano da propriedade 'done'. Esses três métodos executam o método updateLocalStorage(), que adiciona os valores ao Local Storage do navegador, mantendo-os salvos para uma futura sessão, através do hook 'created()' que recupera esses dados quando o componente Todo.vue é montado. Para garantir uma boa experiência na interface, binds e classes dinâmicas alteram a aparência das tarefas, conforme interação do usuário.</p>

<h4 align="left">Como executar localmente:</h4>
<p align="left"><b>yarn install</b>: Instala as dependências necessárias para o projeto</p>
<p align="left"><b>yarn serve</b>: Executa o projeto em modo de desenvolvimento em localhost:8080</p>

[Veja ao vivo](https://g31-lista-de-tarefas.vercel.app/)
