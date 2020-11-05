Vue.use(vuelidate.default);

new Vue({
  el: '#app',
  data () {
    return {
      form: {
        name: null,
        age: null,
        email: null,
        githubUserName: null,
        time: null,
      }
    }
  },
  validations: {
    form: {
      name: {
        required: validators.required
      },
      age: {
        required: validators.required,
        number: validators.integer,
        between: validators.between(12, 120)
      },
      email: {
        required: validators.required,
        email: validators.email
      },
      time: {
        dayOrNight: value => value === 'dia' || value === 'noite'
      },
      githubUserName: {
        required: validators.required,
        exists(value) {
          if (!value) {
            return true;
          }
          return axios.get(`//api.github.com/users/${value}`)
        }
        
      }
    }
  },
  methods: {
    shouldAppendValidClass(field) {
      return !field.$invalid && field.$model;
    },
    shouldAppendErrorClass(field) {
      return field.$error;
    },
    submitForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        console.log('Formulário enviado!', this.form)
      } else {
        console.log('Formulário inválido. Verifique os campos!')
      }
    }
  }
})