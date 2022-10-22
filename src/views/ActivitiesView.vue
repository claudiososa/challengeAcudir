<template>
    <v-row class="pa-6">
        <v-col class="d-flex justify-end">
            <span class="text-h5">Administración de lista de Actividades</span>
        </v-col>

        <v-col cols="12" class="d-flex justify-start">
            <GetActivity
                @showItem="showItem"
            />
        </v-col>

        <v-col cols="12" lg="4" class="d-flex justify-end align-start">
            <ViewDetail
            :item="itemSelected"
            />
        </v-col>

        <v-col cols="12" lg="8" class="d-flex justify-center">
            <ListActivities
            @showItem="showItem"
            />
        </v-col>
    </v-row>
</template>

  <script>
    import GetActivity from '../components/GetActivity'
    import ViewDetail from '../components/ViewDetail'
    import ListActivities from '../components/ListActivities'

    export default {
      name: 'Activities',

      components: {
        GetActivity,
        ViewDetail,
        ListActivities
      },
      data() {
        return {
            itemSelected:{},
        }
      },
      mounted(){
        if(!this.$store.state.login.userActive){
            this.$router.push({
                path:'/'
            })
        }
      },
      methods: {
        showItem(item){
            this.itemSelected = item
        },
      }
    }
  </script>

  <style  scoped>
    .bg {
        background-color: rgb(239, 245, 245);
    }
  </style>
