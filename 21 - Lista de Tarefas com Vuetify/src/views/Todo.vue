<template>
<div class="home pa-3">
  <v-text-field v-model="newTaskTitle" @click:append="addTask" @keyup.enter="addTask" hide-details clearable outlined label="Adicionar tarefa" append-icon="mdi-plus"></v-text-field>
  <v-list flat class="pt-0">
    <div v-for="task in tasks" :key="task.id">
      <v-list-item :class="{ 'blue lighten-4' : task.done }">
        <template v-slot:default>
          <v-list-item-action @click="doneTask(task.id)">
            <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title :class="{ 'text-decoration-line-through' : task.done }">{{task.title}}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action @click="deleteTask(task.id)">
            <v-btn icon>
              <v-icon color="red lighten-2">mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </template>

      </v-list-item>
      <v-divider></v-divider>
    </div>
  </v-list>
</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      newTaskTitle: '',
      tasks: []
    }
  },
  methods: {
    addTask() {
      if (this.newTaskTitle) {
        let newTask = {
          id: Date.now(),
          title: this.newTaskTitle,
          done: false
        }
        this.tasks.push(newTask)
        this.newTaskTitle = ''
      }
      this.updateLocalStorage()
    },
    doneTask(selectedId) {
      let task = this.tasks.filter(task => task.id === selectedId)[0]
      task.done = !task.done
      this.updateLocalStorage()
    },
    deleteTask(selectedId) {
      this.tasks = this.tasks.filter(task => task.id !== selectedId)
      this.updateLocalStorage()
    },
    updateLocalStorage() {
      localStorage.setItem('localStorageTasksMago', JSON.stringify(this.tasks));
    }
  },
  created() {
    let getTasks = JSON.parse(localStorage.getItem('localStorageTasksMago'))
    if (getTasks) {
      this.tasks = getTasks
    }
  }
}
</script>
