const vm = Vue.createApp({
    data(){
        return{
            firstName: 'John',
            middleName: '',
            lastName: 'Doe',
            url:'https://www.google.com',
            raw_url: '<a href="https://www.google.com" target="_blank">Google🔍</a>',
            age: 10
        }
    },

    methods: {
        fullName(){
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },
        increment(){
            this.age += 1;
        },
        decrement(){
            this.age -= 1;
        },
        updateLastName(msg,event){
            console.log(msg)
            this.lastName = event.target.value
        },
        updateMiddleName(event){
            this.middleName = event.target.value
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