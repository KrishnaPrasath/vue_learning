let app = new Vue({
    el : '#app',
    data : {
        message : 'Hello World!',
        seen : true,
        todo : [
            { text : "One", key : 1 },
            { text : "Two", key : 2 },
            { text : "One", key : 3 },
        ]
    }
});

let li = new Vue({
    el : "#li",
    data : {
        arr : [
            { text : "One", key : 1 },
            { text : "Two", key : 2 },
            { text : "One", key : 3 },
        ]
    }
});

let btn = new Vue({
    el : "#btn",
    data:{
        message : "Reverse this!"
    },
    methods : {
        click : function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
});

let model = new Vue({
    el : "#model",
    data : {
        message : "Hello World!"
    }
})

Vue.component( 'todo-item',{
    props : ['todo'],
    template : "<li>{{ todo.text }}</li>"
})

app.message = "I've changed the data";
app.seen = false;
li.arr.push({"text":"Four"});