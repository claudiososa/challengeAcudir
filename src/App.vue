<template>
  <v-app>

    <v-row>
      <v-col cols="12" class="d-flex justify-end">
        <v-switch label="Modo Oscuro" v-model="modeDark"></v-switch>
      </v-col>
    </v-row>
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
#app {
  background: url('https://ohlaladani.com.br/wp-content/uploads/wallpaper-OHLALADANI_DESKTOP_WALLPAPERS_AVENTURA-2.jpg')
    no-repeat center center fixed !important;
  background-size: cover;
}


</style>
