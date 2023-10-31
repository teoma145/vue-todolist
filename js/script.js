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
    }
}
    



}).mount('#app');