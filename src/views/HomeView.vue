<template>
    <v-container class="d-flex justify-center align-center mt-8">
        <start-session />
    </v-container>
</template>

<script>
  import StartSession from '../components/StartSession'

  export default {
    name: 'login',

    components: {
      StartSession,
    },
  }
</script>
