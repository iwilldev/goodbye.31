let shoppingList = new Vue ({
  el: '#shopping-list',
  data: {
    state: 'default',
    header: 'Loja do Mago',
    shopMessage: 'Seu carrinho está vazio. Compre alguns itens.',
    endMessage: 'Seu pedido foi finalizado! Só não garantimos a entrega!',
    products: [
      {
        label: 'Troféu de Melhor Desenvolvedor da Semana',
        image: 'images/trofeu-desenvolvedor-ultima semana.png',
        purchased: false,
      },
      {
        label: 'Telas Sempre Bonitas sem Sofrência',
        image: 'images/telas-sempre-bonitas.png',
        purchased: false,
      },
      {
        label: 'Atrair Conhecimento sem Estudar',
        image: 'images/atrair-conhecimento-sem-estudar.png',
        purchased: false,
      },
      {
        label: 'Escudo Contra Bugs',
        image: 'images/escudo-contra-bugs.png',
        purchased: false,
      },
      {
        label: 'Fim das Tretas entre Frameworks',
        image: 'images/treta-sobre-frameworks.png',
        purchased: false,
      },
      {
        label: 'Saco de Dependências da NPM',
        image: 'images/saco-de-dependencias-da-npm.png',
        purchased: false,
      },
      {
        label: 'Remédio pra Dormir 8 horas',
        image: 'images/remedio-pra-dormir.png',
        purchased: false,
      },
      {
        label: 'Mais Prazo para Entrega',
        image: 'images/mais-prazo-para-entrega.png',
        purchased: false,
      },
      {
        label: 'Explodir Todos os Bugs',
        image: 'images/explodir-todos-os-bugs.png',
        purchased: false,
      },
      {
        label: 'Fazer Deploy sem Treta',
        image: 'images/deploy-sem-treta.png',
        purchased: false,
      },
    ],
    items: [],
  },
  methods: {
    saveItem: function(product) {
      this.items.push({
        label: product.label,
        image: product.image
      });
    },
    dropItem: function(product) {
      this.items = this.items.filter(item => {
        return product.label !== item.label;
      });
    },
    changeState: function(newState) {
      this.state = newState;
    },
    togglePurchased: function(item) {
      item.purchased = !item.purchased;
    }
  },
  computed: {
    reversedItems() {
      return this.items.slice(0).reverse();
    }
  }
})