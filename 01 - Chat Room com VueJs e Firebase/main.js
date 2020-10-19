const config = {
  apiKey: process.env.API_KEY,
  authDomain: "vue-chat-room-12e0f.firebaseapp.com",
  databaseURL: "https://vue-chat-room-12e0f.firebaseio.com",
  projectId: "vue-chat-room-12e0f",
  storageBucket: "vue-chat-room-12e0f.appspot.com",
  messagingSenderId: "326331860261",
  appId: "1:326331860261:web:c0381e4642ee9ae1f206cc",
  measurementId: "G-QRVTPPFWL5"
}

firebase.initializeApp(config)

const database = firebase.database()
const messagesRef = database.ref('messages');

new Vue({
  el: "#chat",

  data: {
    messages: [],
    messageText: '',
    nickname: 'guest',
    editingMessage: null
  },

  methods: {
    storeMessage() {
      messagesRef.push().set({nickname: this.nickname, text: this.messageText})
      this.messageText = ''
    },
    deleteMessage(message) {
      messagesRef.child(message.id).remove()
    },
    editMessage(message) {
      this.editingMessage = message;
      this.messageText = message.text;
    },
    cancelEditing(){
      this.editingMessage = null;
      this.messageText = '';
    },
    updateMessage() {
      messagesRef.child(this.editingMessage.id).update({text: this.messageText});
      this.cancelEditing();
    }
  },

  created () {
    messagesRef.on('child_added', snapshot => {
      this.messages.unshift({...snapshot.val(), id: snapshot.key});
      if(snapshot.val().nickname !== this.nickname) {
        nativeToast({
          message: `Nova Mensagem de ${snapshot.val().nickname}`,
          type: 'success'
        })
      }
    });
    messagesRef.on('child_removed', snapshot => {
      const deletedMessage = this.messages.find(message => message.id === snapshot.key);
      const index = this.messages.indexOf(deletedMessage);
      this.messages.splice(index, 1);
      if(snapshot.val().nickname !== this.nickname) {
        nativeToast({
          message: `Mensagem de ${snapshot.val().nickname} apagada`,
          type: 'warning'
        })
      }
    });
    messagesRef.on('child_changed', snapshot => {
      const updatedMessage = this.messages.find(message => message.id === snapshot.key);
      updatedMessage.text = snapshot.val().text;
      if(snapshot.val().nickname !== this.nickname) {
        nativeToast({
          message: `Mensagem de ${snapshot.val().nickname} editada`,
          type: 'info'
        })
      }
    });
  }
})