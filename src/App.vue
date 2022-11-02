<template>
   <v-app id="inspire" class="pa-0 ma-0">
    <v-app-bar
      app
      color="primary"
    >
    <v-toolbar-title>ACUDIR Actividades</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
            v-if="$store.state.login.userActive"
            color="black accent-4"
            text
        >
            <span> Usuario: {{ $store.state.login.userActive.username}}</span>

            <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-btn
            v-if="$store.state.login.userActive"
            @click="closeSession"
            color="black accent-4"
            text
        >
            <span>Salir</span>

            <v-icon>mdi-location-exit</v-icon>
        </v-btn>

       <!-- <v-switch color="black" class="pt-4" label="Modo Oscuro" v-model="modeDark"></v-switch> -->
    </v-app-bar>
    <v-main>
        <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    modeDark: true,
  }),
  mounted(){
    this.$vuetify.theme.dark = this.$store.state.modeDark
    this.modeDark = this.$store.state.modeDark
  },
  watch: {
    modeDark: {
      immediate: false,
      handler() {
        this.$store.dispatch('changeModeDark')
        this.$vuetify.theme.dark = this.$store.state.modeDark
      },
    },
  },
  methods: {
    closeSession(){
        this.$store.dispatch('login/closeSession')
        this.$router.push({
            path: '/'
        })
    }
  }
};
</script>
<style>
#inspire {
  background-size: cover;
}


</style>
