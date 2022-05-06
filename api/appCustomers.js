var app = Vue.createApp({
    data() {
        return {
            userName: '',
            userType: '',
            customers: [],
            customersCmb: [],
            customerId: '',
            urlBase: 'http://localhost:5000'
        }
    },
    methods:{
        async getCustomer(){
            var Id = this.customerId != ''? '/' + this.customerId : this.customerId;
            this.customers = await this.CallApi(this.urlBase + '/customer' + Id, 'GET', null);
            this.customerId = '';
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
        },
        CustomerData(Id){
            Id = Id != ''? '?Id=' + Id : Id;
            window.location.href = 'customerdata.html' + Id;
        },
        async DeleteCustomer(Id){
            const result = await this.CallApi(this.urlBase + '/customer/' + Id, 'DELETE', null)
            
		    if(result == 'OK'){
                this.getCustomer();
                alert('Se elimino registro correctamente')
            }
            else{
                alert('Hubo un error, favor de contactar al administrador.');
            }
        },
        setSessionData(){
            const sessionData = sessionStorage.getItem('sessionData');
            if(sessionData == null){
                window.location.href = 'login.html';
            }
            else{
                const objSessionData = JSON.parse(sessionData);
                this.userName = objSessionData.userName;
                this.userType = objSessionData.profile;
            }
        }
    },
    computed:{
        totalCustomers(){
            return this.customers.length;
        }
    },
    mounted(){
        this.setSessionData();
        if(this.userName != '') this.getCustomer();
    }
})