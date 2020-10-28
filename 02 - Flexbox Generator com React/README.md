<h3 align="left">02 - Flexbox Generator com React</h3>
<img src="https://drive.google.com/uc?export=view&id=1NWiMdt2uXFzPE_ldnUR4Ukb1X8zX7HMh" width="360" />
<p align="left">Aplicação criada para demonstrar o comportamento de um flex-container, através da alteração de suas propriedades.<br><br>
A tela é dividida em duas partes (horizontalmente, no desktop, e verticalmente, nas telas menores), sendo metade para um "controller", onde você pode alterar as propriedades do container através dos respectivos 'select', e a outra para um preview do container e o código CSS gerado pelo controller.<br><br>
Criado com 'create-react-app', pode ser executada e enviada para a produção com os scripts padrão.
</p>

<h4 align="left">Para executar localmente:</h4>
<p align="left">Baixe o projeto e abre o arquivo 'index.html'.</p>

<h4 align="left">Criado com:</h4>
<p align="left">ReactJS / Create React App</p>
<p align="left">React HTML Parser, para exibir o código CSS com quebra de linha :P</p>
<p align="left">E muuuuuito Flexbox <3</p>

<h4 align="left">Como funciona?</h4>
<p align="left">No controller, cada 'select' altera (através da 'onChange') uma propriedade (aplicada com spread operator) a um objeto armazenado em um estado (criado com 'useState') em sintaxe JavaScript.</p>
<p align="left">Esses estilos são aplicados ao container do preview através de sua propriedade 'style'.</p>
<p align="left">Esse objeto é percorrido, dentro de um hook de efeito, e retorna um array com as propriedades (que são reescritas de camelCase para kebab-case, através do método 'replace()') e seus valores, quando não forem padrão, concatenando os textos no formato CSS, que é impresso na tela, com quebra de linha, utilizando o React HTML Parser.
</p>

<h4 align="left">Como executar localmente:</h4>
<p align="left"><b>yarn install</b>: Instala as dependências necessárias para o projeto</p>
<p align="left"><b>yarn start</b>: Executa o projeto em modo de desenvolvimento em localhost:3000</p>

Mais scripts disponíveis na documentação do [Create React App](https://github.com/facebook/create-react-app).

[Veja ao vivo](https://g31-flexbox-generator.vercel.app/)
