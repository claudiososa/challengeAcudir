<template>
  <v-container fluid >
    <v-row class="d-flex flex-column  align-center justify-center">
      <v-col cols="12" md="3" class="d-flex flex-column justify-center">
        <v-label>Usuario</v-label>
        <v-text-field
        type=""
        
        error-count=""
        placeholder=""
        dense
        :background-color="(!isDark) ? 'white' : 'grey'"
       label=""
        append-icon=""
        v-model="user" outlined color>
        </v-text-field>
        <v-label>Contrasena</v-label>
        <v-text-field
        type="password"
        error-count=""
        placeholder=""
        :background-color="(!isDark) ? 'white' : 'grey'"
        label=""
        dense
        append-icon=""
        v-model="password">
        </v-text-field>

      </v-col>
      <v-col cols="12" md="3" class="d-flex flex-column justify-center">
            <v-btn medium elevation="" color="">Ingresar</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'StartSession',

  data() {
    return {
      user: null,
      password: null
    };
  },

  mounted() {

  },

  computed: {
    isDark(){
      return this.$store.state.modeDark
    }
  },

  methods: {

  },
};
</script>

<style scoped>

  .row-container {
    background-color: azure;
  }
</style>