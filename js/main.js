new Vue({
  el: '#root',
  data:{
  disk: [],
  genreList : [],
  genreSelect : 'All'
},
  mounted(){
    const self = this;
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(response => {
      console.log(response)
      self.disk = response.data.response;
    })
  },
  methods: {
  filterGenre : function(){
    const self = this;
    const optionGenre = [];
    this.disk.forEach(item => {
      this.optionGenre.push(item.genre)
    });
    this.genreList =  optionGenre.filter((item,index)=>{
      return optionGenre.indexOf(item) === item
    })

  }

  },
})
Vue.config.devtools = true
