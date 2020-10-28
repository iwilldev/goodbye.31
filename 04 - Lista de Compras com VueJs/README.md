<h3 align="left">04 - Lista de Compras com VueJs</h3>
<img src="https://drive.google.com/uc?export=view&id=1jL09UxOBXwkadSs12C7NFttdC4f9Kdpy" width="360" />
<p align="left">Loja do Mago, um shopping fake que vende itens e habilidades para desenvolvedores. Construído com VueJs, foi feita para explorar conceitos de reatividade, renderização condicional, binding, entre outros recursos como a criação e utilização de métodos na instância utilizada.</p>

<h4 align="left">Criado com:</h4>
<p align="left">VueJs - Scripts e renderização</p>
<p align="left">CSS Flexbox.</p>

<h4 align="left">Como funciona?</h4>
<p align="left">Uma instância Vue foi criada no elemento '#shopping-list', que contempla todos os itens da aplicação. Em seu estado 'default', a lista de itens da loja está oculta, sendo exibido apenas os itens selecionados (ou uma mensagem de carrinho vazio, caso nenhum item tenha sido escolhido na lista). Quando o botão 'Ver Loja' é clicado, o estado da instância é alterado para 'edit', exibindo os produtos disponíveis acima do resultado da loja. Clicando em 'comprar', o item selecionado é adicionado na lista de compras e tem sua classe e botão alterados, impedindo a inserção duplicada, através de um bind que verifica sua propriedade 'purchased', um booleano. Quando o botão remover é clicado, ele é removido da lista e volta ao seu comportamento e aparência padrão. Na lista de compras, havendo presença de itens selecionados, surge um botão 'finalizar' que direciona o usuário a um novo estado ('finished') que exibe uma mensagem de pedido finalizado.</p>

<h4 align="left">Como executar localmente:</h4>
<p align="left">Baixe a pasta e abra o arquivo 'index.html'</p>

[Veja ao vivo](https://g31-lista-de-compras-vuejs.now.sh/)
