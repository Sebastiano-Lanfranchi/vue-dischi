new Vue({
  el: '#root',
  data:{
  diskList: [],
  genreList : [],

},
  mounted(){
    const self = this;
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(response => {
      console.log(response)
      self.diskList = response.data.response;
    })
  },
  methods: {
  filterGenre : function(){
    const self = this;
    let optionGenre = [];
    this.diskList.forEach(item => {
      this.optionGenre.push(item.genre)
    });
    this.genreList =  optionGenre.filter((item,index)=>{
      return optionGenre.indexOf(item) === item
    })

  }

  },
})
Vue.config.devtools = true
