const { createApp } = Vue;

createApp({
    data() {
        return {
            tasks: [
                {
                    id: 1,
                    text: 'Prendere le zucche',
                    done: true
                },
                {
                    id: 2,
                    text: 'Prendere le caramelle',
                    done: true
                },
                {
                    id: 3,
                    text: 'Preparare il vestito',
                    done: false
                },
                
            ],
            ultimoid : 3,
            addtask :"",
    }
    
},
  methods: {
    removeTask(i){
        this.tasks.splice(i, 1)
    },
    newtask(){
        this.ultimoid++;
        const newitem= {
            id: this.ultimoid,
            text: this.addtask,
            done: false
        }
        this.tasks.unshift(newitem);
        this.addtask = '';
    },

    toggleDone(task) {
        task.done = !task.done; 
    },

}
    



}).mount('#app');