app.component('menu-component', {
    template: `<!-- A grey horizontal navbar that becomes vertical on small screens -->
    <nav class="navbar navbar-expand-sm bg-light">
        <div class="container-fluid">
          <!-- Links -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="customer.html">Base de Datos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">Sobre la página</a>
            </li>
          </ul>
          <div class="end-text">
            <b>{{ user }}</b> <button class="btn btn-outline-primary btn-sm" @click="logOut()">Log out</button>
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