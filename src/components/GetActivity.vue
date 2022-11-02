<template>
    <v-btn
        @click="getData"
        color="primary">
            Generar Nueva Actividad
        </v-btn>
</template>

<script>
export default {
    name: 'ChallengeAcudirGetActivity',

    data() {
        return {

        };
    },
    methods: {
        async getData(){
            try {
                const res = await this.$http.get(`${process.env.VUE_APP_URL_ACTIVITIES}`)

                if(res.statusText === 'OK'){
                    const findItem2 = this.$store.state.activities.data.find( e => e.key === res.data.key);

                    if(!findItem2){
                        this.$store.dispatch('activities/addActivity', res.data)

                        //Agrego prop new como true, dato que el componente viewDetail utiliza
                        // para mostrar mensaje como una nueva Actividad
                        const newItem = {
                                ...res.data,
                                new: true
                            }

                        this.$emit('showItem', newItem)
                    }else {
                        res.data.duplicate = true
                        this.$emit('showItem', res.data)
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
};
</script>
