
Vue.createApp({
    mounted(){
             var today = new Date();
             this.$refs.p.textContent = 'La fecha actual es:  ' + today;
    },

    data(){
        return{
            show: false, //this.name == 'Erik'? true : false,
            hideCompleted: false,
            name: 'Chihuahua',
            text: '',
            valor: 0,
            lugares: ['Oaxaca','San Luis Potosí','Tampico', 'Xalapa'],
            mex: 'Tampico',
            places: [
                { Estado: 'Oaxaca', ciudad: 'Puerto Escondido', l: 'Laguna de Manialtepec'},
                { Estado: 'Tamaulipas', ciudad: 'Tampico', l: 'Malecón y ver mapaches' },
                { Estado: 'San Luis Potosí', ciudad: 'San Luis Potosí', l: 'Teatro de la Paz' },
                { Estado: 'Veracruz', ciudad: 'Orizaba', l: 'Centro de la ciudad' },
                { Estado: 'Yucatán', ciudad: 'Mérida', l: 'Celestún' }
            ]
        }
    },

    methods: {

        alerta(){
            alert('Valor de name es: ' + this.name)
            //var nombre = this.name
            //this.name = 'Felipe'
            //nombre = 'Jose'
        },
        addline(){
            this.text += event.target.value;
            event.target.value = '';
        },

        toogleShow(){
            this.show = !this.show
        },
    },

    computed: {
        mostrar() {
            return this.places
           // return this.show
           //     ? this.tasks.filter((t) => !t.done)
            //    : this.tasks
        }
    },

}).mount('#app');