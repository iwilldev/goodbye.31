<h3 align="left">23 - Metrônomo com React</h3>
<img src="https://omagotemum.site/assets/img/portfolio/goodbye31/23/project.png" width="640" />
<p align="left">Metrômono com variação de tempo e batidas.</p>

<h4 align="left">Criado com:</h4>
<p align="left">React</p>

<h4 align="left">Como funciona?</h4>
<p align="left">A interface conta com dois ajustes, sendo um de tempo, através de um input do tipo range, e um de batidas, através de um select com quatro opções (2, 3, 4, 6). Quando o botão 'Iniciar' é pressionado, a função 'startStop' verifica o estado de valor booleano 'playing', invertendo seu valor. Quando o input de tempo é alterado, a função 'handleBpmChange' é executada, alterando o estado 'bpm' com o novo valor e verificando o estado de 'playing', zerando o contador (estado 'count') caso o metrônomo esteja sendo executado. Na alteração no select de batidas, o estado 'beatsPerMeasure' é alterado com o novo valor. O script principal é executado dentro de um hook de efeito, que é tem, como dependências, os quatro estados da aplicação é alterado. Após a criação dos dois objetos de áudio ('click1' e 'click2'), é executada uma condicional para o estado 'playing' que, sendo verdadeiro, inicial um timer que alterna entre os dois sons, conforme o número de batidas selecionadas, em um intervalo de tempo compatível com o que foi selecionado no input correspondente.</p>

<h4 align="left">Como executar localmente:</h4>
<p align="left"><b>yarn install</b>: Instala as dependências necessárias para o projeto</p>
<p align="left"><b>yarn start</b>: Executa o projeto em modo de desenvolvimento em localhost:3000</p>

Mais scripts disponíveis na documentação do [Create React App](https://github.com/facebook/create-react-app).

[Veja ao vivo](https://metronome-react.vercel.app)
