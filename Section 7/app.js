let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  beforeCreate(){
    console.log('beforeCreate() function has been called', this.message)
  },
  created(){
    console.log('create() function has been called', this.message)
  },
  beforeMount(){
    console.log('beforeMount() function has been called', this.$el)
  },
  mounted(){
    console.log('mounted() function has been called', this.$el)
  },
  beforeUpdate(){
    console.log('beforeUpdated() function has been called')
  },
  updated(){
    console.log('updated() function has been called')
  },
  beforeUnmount(){
    console.log('beforeUnmount() function has been called')
  },
  unmounted(){
    console.log('unmounted() function has been called')
  }
})

vm.mount('#app')

// setTimeout(()=> {
//   vm.mount('#app')
// },3000)