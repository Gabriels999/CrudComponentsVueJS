<template>
  <div class="hello">
    <h1>{{ title }} Tarefas</h1>
    <ul class="collection">
      <li class="collection-item" v-for="task in tasks" :key="task.id">
        <h5>
          {{ task.title }}
          <span class="task-badge right-align">{{ task.project }}</span>
        </h5>
        <edit-button />
        <delete-button />
      </li>
    </ul>
  </div>
</template>

<script>
import DeleteButton from '../components/DeleteButton.vue'
import EditButton from '../components/EditButton.vue'

export default {
  components: { DeleteButton, EditButton },
  name: 'TarefaList',
  props: {
    title: String,
    tasks: Array,
  },
  methods: {
    recebeInteracao(event) {
      console.log(event)
      this.$emit('interacao', event)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.task-badge {
  background-color: #929292;
  color: white;
  padding: 6px;
  border-radius: 6px;
  font-size: 0.8rem;
  vertical-align: middle;
}
</style>
