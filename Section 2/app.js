let vm = Vue.createApp({
    data(){
        return {
            isPurple: false,
            selectedColor: '',
            size: 150
        }
    },
    computed: {
        circleClasses(){
            return {purple: this.isPurple}
        },
        circleTransform(){
            return [{ width: this.size + 'px', height: this.size + 'px', lineHeight: this.size + 'px' },
            { transform: 'rotate(30deg)' }
            ]
        }
    }
}).mount('#app')