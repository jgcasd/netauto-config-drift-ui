<template>
  <nav>

    <v-snackbar v-model="snackbar" :timeout="4000" color="success">
      <span>Awesome! You added a new project.</span>
      <v-btn flat text color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-row justify="center">
        <v-col cols="6">
          <v-avatar size="100">
            <img src="/45569fae-92ab-421a-919b-b43609bedd7b_200x200.png" />
          </v-avatar>
        </v-col>
      </v-row>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">
              {{ link.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Config</span><span>Drift</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="grey"
            flat
            text
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-chevron-down</v-icon>
            <span>menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="link in links" :key="link.text" :to="link.route">
            <v-list-item-title>
              {{ link.text }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>


<script>

export default {
  data() {
    return {
      drawer: false,
      links: [
        {icon: 'mdi-clipboard-text-multiple', text: 'Task Manager', route: '/task-manager'},
        {icon: 'mdi-file-upload', text: 'Send Config', route: '/send-config'},
        {icon: 'mdi-file-download', text: 'Get Config', route: '/get-config'}
      ],
      snackbar: false
    }
  },
}
</script>

<style scoped>

</style>