<template>
   <v-app id="inspire" class="pa-0 ma-0">
    <v-app-bar
      app
      color="warning"
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
        console.log('watch..');
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
  background: url('https://ohlaladani.com.br/wp-content/uploads/wallpaper-OHLALADANI_DESKTOP_WALLPAPERS_AVENTURA-2.jpg')
    no-repeat center center fixed !important;
  background-size: cover;
  background-color: darkslateblue;
}


</style>
