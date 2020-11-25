<h3 align="left">24 - Gerador de Paletas com React</h3>
<img src="https://omagotemum.site/assets/img/portfolio/goodbye31/24/project.png" width="640" />
<p align="left">Gerador de paletas de cores a partir de código hexadecimal de 6 dígitos.</p>

<h4 align="left">Criado com:</h4>
<p align="left">React</p>

<h4 align="left">Como funciona?</h4>
<p align="left">Quando o usuário aplica uma cor em formato HEX (#000000) no campo, o estado 'queryColor' é atualizado com o novo valor através da 'onChange'. Quando o formulário é enviado, a função 'generateColors()' é executada utilizando esse valor de 'queryColor' como parâmetro, convertendo-o para o formato HSL. Os valores individuais de Hue, Saturation e Lightness são armazenados em um objeto no estado 'hslProp' que é condição para renderização de uma lista de componentes que retornam combinações diferentes para aquela cor. Esses componentes recebem o 'hslProp' através da propriedade 'colors'. Essa prop é dependência para um hook de efeito de cada componente que recebe esses valores e gera mais 4 cores através da função 'generateCardColors', com variações correspondentes a combinação, atribuindo-as em um array com useState(). Na renderização do componente, os cards de cores são gerados com o método 'map()' percorrendo o array de cores. Cada card retorna o componente ColorCard, com a cor de fundo corresponde e os três formatos (HEX, RGB e HSL) em texto. As funções para conversão entre padrões foram retiradas do artigo 'Converting Color Spaces in JavaScript' de Jon Kantner para o CSS-Tricks.</p>

<h4 align="left">Como executar localmente:</h4>
<p align="left"><b>yarn install</b>: Instala as dependências necessárias para o projeto</p>
<p align="left"><b>yarn start</b>: Executa o projeto em modo de desenvolvimento em localhost:3000</p>

[Artigo de Jon Kantner - CSS Tricks](https://css-tricks.com/converting-color-spaces-in-javascript/).

Mais scripts disponíveis na documentação do [Create React App](https://github.com/facebook/create-react-app).

[Veja ao vivo](https://mago-iris.vercel.app)
