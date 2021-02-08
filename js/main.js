new Vue({
  el: '#root',
  data:{
  disk: [],
},
  methods: {

  },
  mounted(){
    const self = this;
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(response => {
      console.log(response)
      self.disk = response.data.response
    })
  }
})
Vue.config.devtools = true
