var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello, buenas tardes!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        bucl:[
            { message:"Aquí"  },
            { message:"probando la lista" },
            { message:'y el vue.js' },
        ]
    }
  })  

  var app3 = new Vue({ 
    el: '#app-3',
    data: {
        message: 'Imagen!',
        imag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Lynx_lynx2.jpg/368px-Lynx_lynx2.jpg"
    }
});