<template>
   <v-app id="inspire" class="pa-0 ma-0">
    <v-app-bar
      app
      color="warning"
    >
    <v-toolbar-title>ACUDIR Actividades</v-toolbar-title>
        <v-spacer></v-spacer>
       <v-switch color="black" class="pt-4" label="Modo Oscuro" v-model="modeDark"></v-switch>
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
