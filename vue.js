var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Luis!'
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