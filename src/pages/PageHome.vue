<template>
  <div id="app">
    <nav class="blue darken-2">
      <div class="nav-wrapper"></div>
    </nav>
    <div v-if="action == 'lista'">
      <a
        @click="mostraCardCriacao"
        class="btn-floating btn-large waves-effect waves-light blue"
      >
        <i class="fa-solid fa-circle-plus"></i>
      </a>
      <tarefa-list :title="action" :tasks="listaDeTarefa" />
    </div>
    <div v-else-if="action == 'cria'">
      <tarefa-form
        :title="action"
        @enviaTarefa="finalizaCriacao($event)"
        @interacao="abacate($event)"
      />
    </div>
  </div>
</template>

<script>
import TarefaList from '../components/TarefaList.vue'
import TarefaForm from '../components/TarefaForm.vue'
import tasksApi from '../tasksApi.js'

export default {
  components: {
    TarefaList,
    TarefaForm,
  },
  data: () => {
    return {
      listaDeTarefa: [],
      action: 'lista',
    }
  },
  created() {
    this.buscaTarefas()
  },
  methods: {
    buscaTarefas() {
      tasksApi.getTasks((data) => {
        this.listaDeTarefa = data
      })
    },
    mostraCardCriacao() {
      this.action = 'cria'
    },
    finalizaCriacao(event) {
      tasksApi.postTask(event, () => {
        this.buscaTarefas()
        console.log('passei aqui')
        this.action = 'lista'
      })
    },
    abacate(event) {
      console.log(event)
    },
  },
}
</script>

<style></style>
