var app = Vue.createApp({
    data() {
        return {
            urlBase: 'http://localhost:5000',
            user:{
                userName: '',
                password: ''
            }
        }
    },
    methods:{
        async login(){
            var data = {
                'userName': this.user.userName, 
                'password': this.user.password
            }
    
            const result = await this.CallApi(this.urlBase + '/user', 'POST', data);
            if(result.length > 0){
                sessionStorage.setItem('sessionData', JSON.stringify(result[0]));
                window.location.href = 'index.html';
            }
            else{
                alert('Usuario o contraseña invalidos');
                this.user.userName = '';
                this.user.password = '';
            }
        },
        async CallApi(url, method, data){
            const header = data == null? { 	method: method,
                                            headers: { 'Content-Type': 'application/json' }} :
                                         { 	method: method,
                                            body: JSON.stringify(data),
                                            headers: { 'Content-Type': 'application/json' }}
    
            try {
                const response = await fetch(url, header);
                return await response.json();
            }
            catch(error){
                alert('Hubo un error favor de contactar al admnistrador.');
            }
        }
    },
    mounted(){
        sessionStorage.removeItem('sessionData');
    }
})