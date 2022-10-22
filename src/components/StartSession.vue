<template>
  <v-container class="mt-8">
        <v-form ref="formLogin">
            <v-row class="d-flex flex-column justify-center align-center">

                <v-col cols="12" md="4" class="d-flex flex-column justify-center align-center row-container px-4">
                    <img :src="logo" width="300" alt="logo_acudir" >
                </v-col>
                <v-col cols="12" md="4" class="d-flex flex-column justify-center row-container px-6">

                    <v-label>Usuario</v-label>
                    <v-text-field
                    type="text"
                    dense
                    label=""
                    :background-color="(!isDark) ? 'white' : 'grey'"
                    append-icon="mdi-account"
                    outlined
                    :rules="[rules.required]"
                    v-model="formLogin.username"
                    >
                    </v-text-field>

                    <v-label>Contrasena</v-label>
                    <v-text-field
                    type="password"
                    label=""
                    dense
                    append-icon="mdi-lock"
                    outlined
                    :rules="[rules.required, rules.min]"
                    :background-color="(!isDark) ? 'white' : 'grey'"
                    v-model="formLogin.password">
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="4" class="d-flex flex-column justify-center">
                    <v-btn medium @click="validForm">Ingresar</v-btn>
            </v-col>
        </v-row>
    </v-form>
  </v-container>
</template>

<script>

import logo from '../assets/acudir_logo.png'

export default {
  name: 'StartSession',

  data() {
    return {
        logo: logo,
        formLogin: {
            username: '',
            password: '',
        },
        rules: {
                    min: v => v.length >= 8 || 'Min 8 caracteres',
                    required: v => !!v || 'Este dato es Requerido',
                },
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
    validForm(){
        if (this.$refs.formLogin.validate()) {
            this.login()
        }


    },
    login(){
        this.$store.dispatch('login/login', this.formLogin)
        console.log('llegue a login');
    }
  },
};
</script>

<style scoped>

  .row-container {
    background-color: rgb(180, 192, 192);
  }
</style>
