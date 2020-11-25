<h3 align="left">16 - Validação de Formulário com Vue.js</h3>
<img src="https://omagotemum.site/assets/img/portfolio/goodbye31/16/project.png" width="640" />
<p align="left">Exemplo de formulário com validação no lado do cliente, utilizando Vue.js, Vuelidate, classes dinâmicas e renderização condicional, para otimizar a experiência e orientar o usuário durante o preenchimento.</p>

<h4 align="left">Criado com:</h4>
<p align="left">Vue.js, Vuelidate, Axios e CSS</p>

<h4 align="left">Como funciona?</h4>
<p align="left">Uma instância Vue foi criada na div '#app', com os dados do formulário declarados em um objeto (form) retornado pelo 'data()'. Utilizando o Vuelidate, a propriedade 'validations' foi adicionada a instância, utilizando métodos nativos apropriados para verificar o nome, a idade e o e-mail. Para o nome de usuário do GitHub, o validador aguarda a requisição a API, através do Axios, para validar o preenchimento. Na validação da pergunta (Prefere 'dia' ou 'noite'?), o validador verifica se o valor preenchido é correspondente a uma das opções. As mensagens de erro na tela são renderizadas através da diretiva 'v-if', caso o campo retorne o erro, utilizando a referência dos dados computados pelo Vuelidate para o formulário ($v.form.NOME_DO_CAMPO.VALIDADOR_OU_ERRO). Para melhoras a experiência, foram adicionadas classes dinâmicas aos campos, que mudam sua aparência em situações de erro, ou de validade do dado, utilizando a diretiva 'v-bind' de forma implícita (:class). As classes 'error' e 'valid' são adicionadas ao campo caso seus respectivos métodos (shouldAppendErrorClass e shouldAppendValidClass) retornem 'true'. Os campos também retornarão erro, caso o usuário selecione um campo, não digite nada e passe para outro campo, através do evento 'blur', utilizando a diretiva 'v-on' (@blur="$v.form.NOME_DO_CAMPO.$touch()"). Para o efeito do label, o 'font-size' é reduzido no arquivo CSS, caso o input esteja seleciodado (input:focus + label), e com a 'v-bind' no próprio elemento, caso exista um dado no campo, adicionando a classe 'toggle', que causa o mesmo efeito (:class="{toggle: form.NOME_DO_CAMPO}").</p>

<h4 align="left">Como executar localmente:</h4>
<p align="left">Baixe a pasta e abra o arquivo 'index.html'</p>

[Veja ao vivo](https://g31-validacao-form.now.sh/)
