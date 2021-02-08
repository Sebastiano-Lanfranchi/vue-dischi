  new Vue({
    el: '#root',
    data:{
    diskList: [],
    genreList : [],
    genreSelect: 'ALL',

  },
    mounted(){
      // const self = this; ??????
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then(response => {
        this.diskList = response.data.response;
      });
    },
    methods: {
    filterGenre : function(){
      this.diskList.forEach(item => {
        if(this.genreList.includes(item.genre)){
            return
          }else{
            this.genreList.push(item.genre)
          }
      });
      }

    },
  })
  Vue.config.devtools = true
