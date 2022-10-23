<template>
    <v-row>
        <v-spacer></v-spacer>
        <v-col cols="6">
            <v-text-field
                v-model="search"
                label="Filtrar actividades"
            ></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-data-table
                :headers="headers"
                :items="$store.state.activities.data"
                class="elevation-1"
                item-key="id"
                loading="true"
                :search="search"
                :items-per-page="8"
                :options="options"
                no-data-text="No hay registros para mostrar"
                no-results-text="No hay resultados"
                :footer-props="{
                    'items-per-page-text':'Registros por Página',
                    'items-per-page-all-text': 'Todos',
                    }"
            >

            <template v-slot:[`item.actions`]="{ item }">
                <v-btn
                class="ma-2"
                outlined
                small
                fab
                color="success"
                @click="showItem(item)"
                >
                <v-icon>mdi-eye</v-icon>
                </v-btn>

                <v-btn
                class="ma-2"
                outlined
                small
                fab
                color="warning"
                @click="deleteItem(item)"
                >
                <v-icon>mdi-delete</v-icon>
                </v-btn>
            </template>
            </v-data-table>
        </v-col>
        <v-dialog
        v-model="dialog"
        persistent
        max-width="650"
        >
            <v-card>
                <v-card-title class="text-h5">
                Confirmas que deseas quitar la actividad?
                </v-card-title>
                <v-card-text>
                    <strong>Actividad: </strong><span class="text-h6">{{ itemSelected.activity }}</span>
                </v-card-text>

                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="green darken-1"
                    text
                    @click="dialog = false"
                >
                    Cancelar
                </v-btn>
                <v-btn
                    color="green darken-1"
                    text
                    @click="actionRemoveItem()"
                >
                   Aceptar
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    name: 'ListActivities',

    data() {
        return {
            options: {
                itemsPerPage: 5
            },
            search:'',
            itemSelected: '',
            dialog: false,
            headers:[
                {text:'Actividad' , value: 'activity'},
                {text:'Tipo' , value: 'type'},
                {text:'Acciones' , value: 'actions', sortable: false},
            ]
        };
    },

    mounted() {
    },

    methods: {

        //Envio dato que va utilziar el componente viewDetail
        showItem(item){
            this.$emit('showItem', item)
        },
        deleteItem(item){
            this.dialog = true
            this.itemSelected = item
        },

        //quita item seleccionado (actividad) del store y cierro modal
        actionRemoveItem(){
            this.$emit('showItem', {})
            this.$store.dispatch('activities/removeItem', this.itemSelected)
            this.dialog = false
        }
    },
};
</script>

<style scoped>

</style>
