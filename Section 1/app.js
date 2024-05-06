const vm = Vue.createApp({
    data(){
        return{
            firstName: 'Millicent',
            lastName: 'Benson',
            url:'https://www.google.com',
            raw_url: '<a href="https://www.google.com" target="_blank">Google🔍</a>'
        }
    },

    methods: {
        fullName(){
            return `${this.firstName}  ${this.lastName.toUpperCase()}`
        }
    }
}).mount('#app')

// setTimeout(() => {
//     vm.firstName = 'Bob';
// }, 2000);


// Vue.createApp({
//     data(){
//         return{
//             firstName: 'John',
//             lastName: 'Kofi'
//         }
//     }
// }).mount('#vapp')