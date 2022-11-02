<template>
    <v-container class="mt-6 borde-col" fluid >
        <v-row class="d-flex flex-column justify-center align-end ">
            <v-col cols="12" v-if="item.activity">
                <v-row>
                    <v-col cols="12" v-if="item.activity">
                        <strong>Detalle de la Actividad</strong>
                    </v-col>
                    <v-col cols="12">
                        <span class="mr-3"><strong>Actividad: </strong>{{ item.activity}}</span>
                    </v-col>
                    <v-col cols="12">
                        <span class="mr-3"><strong>Participantes: </strong> {{ item.participants}} </span>
                    </v-col>
                    <v-col cols="12">
                        <span class="mr-3"><strong>Tipo: </strong>{{ item.type}} </span>
                    </v-col>
                    <v-col cols="12" v-if="item.new">
                        <v-alert class="primary"><strong>Actividad Agregada</strong></v-alert>
                    </v-col>
                    <v-col v-if="item.duplicate">
                        <v-alert   class="red"><strong>Ya existe. No puede ser Agregada</strong></v-alert>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="12" v-else class="d-flex justify-start">
                    No hay actividad seleccionada
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
export default {
    name: 'ViewDetail',
    props:{
        item: {
            type: Object,
            required: true
        }
    },
};
</script>
<style scoped>
    .borde-col {
        border:2px solid rgb(233, 228, 223)
    }
</style>
