<template>
  <div class="row">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-content">
          <h3 class="card-title">{{ title }} Tarefa</h3>
          <form action="">
            <label for="title">Title:</label>
            <input type="text" name="title" v-model="novaTarefa.title" />
            <label for="project">Project:</label>
            <input type="text" name="project" v-model="novaTarefa.project" />
            <a class="waves-effect waves-light btn-large" @click="criarTarefa"
              >Criar</a
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data: () => {
    return {
      novaTarefa: {
        title: '',
        project: '',
      },
    }
  },
  methods: {
    criarTarefa() {
      this.$emit('enviaTarefa', this.novaTarefa)
    },
  },
}
</script>
