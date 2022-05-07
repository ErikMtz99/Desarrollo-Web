app.component('menu-component', {
    template: `<!-- A grey horizontal navbar that becomes vertical on small screens -->
    <nav class="navbar fixed-top navbar-expand-lg" style="background-color: #e3f2fd;">
        <div class="container-fluid">
          <!-- Links -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" style ="color:black;" href="index.html">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style ="color:black;"href="customer.html">Inventario</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style ="color:black;"href="about.html">Sobre la Tienda</a>
            </li>
          </ul>
          <div class="end-text">
            <b>{{ user }}</b> <button class="btn btn-outline-primary btn-sm" style ="color:black;" @click="logOut()">Log out</button>
          </div>
        </div> 
    </nav>`,
    props: {
        user: String
    },
    data(){
        return {
            testValue: ''
        }
    },
    emits: ['response'],
    methods: {
        toFather(){
            this.$emit('response', this.testValue);
        },
        logOut(){
          sessionStorage.removeItem('sessionData');
          window.location.href = 'login.html';
        }
    }
})
