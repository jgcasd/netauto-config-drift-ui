<template>
  <div class="dashboard mx-4 mb-4">
    <h1 class="subtitle-1 grey--text">Task Manager</h1>
    <v-container class="my-5">
      <v-card>
        <v-card-title>
          Task List
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="allTasks"
          :search="search"
          :expanded.sync="expanded"
          show-expand
          item-key="task_id"
        >

          <template v-slot:[`item.status`]="{ item }">
            <v-chip
              :color="getColor(item.status)"
              small
            >
              {{ item.status }}
            </v-chip>
          </template>

        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            <pre>{{ item.output }}</pre>
          </td>
        </template>

        </v-data-table>
      </v-card>
    </v-container>
  </div>
</template>


<script>
  import { mapGetters, mapActions } from "vuex";

  export default {
    data () {
      return {
        search: '',
        expanded: [],
        singleExpand: false,
        headers: [
          { text: 'Task ID', value: 'task_id' },
          { text: 'Status', value: 'status' },
          { text: 'Device', value: 'device' },
          { text: 'Enqueued Time', value: 'enqueued_time' },
          { text: 'Completed Time', value: 'completed_time' },
          { text: '', value: 'data-table-expand' },
        ]
      }
    },
    methods: {
      getColor (status) {
        if (status === "completed") return 'success'
        else if (status === "in_progress") return 'primary'
        else if (status === "requested") return 'info'
        else return 'error'
      },
      ...mapActions(["fetchTasks"]),
    },
    computed: {
      ...mapGetters(["allTasks"]),
    },
    created() {
      this.fetchTasks();
    },
  }
</script>


<style scoped>

</style>