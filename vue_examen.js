var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello, Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        ciclo:[
            { message:"Tocar el violín"  },
            { message:"Ver series y películas" },
            { message:'Salir a caminar' },
            { message: 'Ver a mi familia y amigos'},
            { message: 'Jugar con mi gata'}
        ]
    }
});

var app3 = new Vue({ 
    el: '#app-3',
    data: {
        message: 'Imagen!',
        imag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Lynx_lynx2.jpg/368px-Lynx_lynx2.jpg"
    }
}); 

var app4 = new Vue({
  el: '#app-4',
  data: {
    contador: 0
  }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        value1: true,
        correo: 'erik@tec.mx'
    }
});