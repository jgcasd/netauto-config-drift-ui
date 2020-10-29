<template>
<div class="get-config mx-4 mb-4">
  <h1 class="subtitle-1 grey--text">GetConfig</h1>
  <v-container class="my-5">
    <v-row class="mb-3" align="center" justify="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>
            Get Config
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-select
                v-model="device"
                :items="allDevices"
                :menu-props="{ maxHeight: '400' }"
                label="Devices"
                persistent-hint
              ></v-select>
              <v-select
                v-model="library"
                :items="allLibraries"
                :menu-props="{ maxHeight: '400' }"
                label="Library"
                persistent-hint
              ></v-select>
              <v-text-field label="Command" v-model="command"></v-text-field>
              <v-btn flat text class="success mx-0 mt-3" @click="submit" :loading="loading">Submit</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";

    export default {
      data() {
        return {
          device: "",
          command: "",
          library: "",
        };
      },
      computed: {
        ...mapGetters(["allDevices", "allLibraries"]),
      },
      methods: {
        ...mapActions(["sendCommand"]),
        submit() {
          const payload = {
            device: this.device,
            library: this.library,
            command: this.command,
          };
          this.sendCommand(payload);
        }
      },
    }
</script>

<style scoped>

</style>