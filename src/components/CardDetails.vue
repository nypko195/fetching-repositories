<template>
   <section> 
      <h2>Детали репозитория: {{ selectedCardData.name }}</h2>      
      <ul>
         <li>Forks: {{selectedCardData.forks}}</li>
      </ul>          
   </section>  
</template>

<script>


export default {
   props: ['id'],   
   data() {
      return {
         selectedCardData: [],
      }
   },
   computed: {
      repositories() {                    
         return this.$store.getters.response;
      },
   },
   methods: { 
      searchRepositories() {      
      let cardData = [];
         for(let item in this.repositories) {
            const obj = {
               id: this.repositories[item].id,
               name: this.repositories[item].name,
               forks: this.repositories[item].forks,
               url: this.repositories[item].url,
               desc: this.repositories[item].desc               
            }            
            cardData.push(obj);                     
         }
                  
         this.selectedCardData = cardData.find(arr => arr.id === +this.id);        
         console.log(this.selectedCardData);             
      }      
   }, 
   created() {
      this.searchRepositories();
   }
}
</script>

<style scoped>
   section {
      text-align: center;
   }
   ul {
      text-decoration: none;
   }
   li {
      list-style-type: none
   }
</style>