<h3 align="left">08 - Editor de Fotos com React</h3>
<img src="https://omagotemum.site/assets/img/portfolio/goodbye31/08/project.png" width="640" />
<p align="left">Editor de fotos que permite carregar uma imagem PNG ou JPG e aplicar filtros CSS nela, com a opção de exportação do canvas onde a imagem foi editada.</p>

<p align="left">Nota de má funcionalidade: no mobile, o app não exporta a imagem da maneira adequada. Por algum motivo, o canvas e a sua referência no DOM parecem ter medidas distintas, fazendo com que a imagem seja exportada com faixas pretas a direita e abaixo. Fico aberto a sugestões sobre como resolver esse bug.</p>

<h4 align="left">Criado com:</h4>
<p align="left">React</p>

<h4 align="left">Como funciona?</h4>
<p align="left">No cabeçalho, quando uma imagem é selecionada, uma função é executada através do atributo 'onChange' do input, que reseta os valores de configuração padrão (atribuindo a constante 'defaultValues' ao estado 'adjustedValues') e gera uma url temporária para a imagem que renderiza na 'img' abaixo do header. Essa imagem recebe os estilos através de um hook de efeito, que atualiza uma template com a propriedade filter e todos os valores aplicáveis através dos controles abaixo, vindos do estado 'adjustedValues'. Nos controles, os botões mudam o estado 'valuesIndex' que é utilizado para acessar os valores individuais da 'adjustedValue'. Quando o input range é alterado, o filtro selecionado nos botões é aplicado através do atributo 'onChange' desse input. Para a exportação, foi utilizada a dependência 'html-to-image', que imprime o canvas com os filtros aplicados em uma imagem JPEG.</p>

<h4 align="left">Como executar localmente:</h4>
<p align="left"><b>yarn install</b>: Instala as dependências necessárias para o projeto</p>
<p align="left"><b>yarn start</b>: Executa o projeto em modo de desenvolvimento em localhost:3000</p>

Mais scripts disponíveis na documentação do [Create React App](https://github.com/facebook/create-react-app).

[Veja ao vivo](https://g31-editor-de-fotos.now.sh/)
