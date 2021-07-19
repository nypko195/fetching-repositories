<template>   
   <div class="result"> 
      <h2>Cписок найденных репризиториев</h2>    
      <ul>      
         <card-item class="item" v-for="item in repositories" 
         :key="item.id"
         :id="item.id"
         :name="item.name"
         :url="item.url"
         :desc="item.desc"
         :stars="item.stars"
         :forks="item.forks"                    
         ></card-item>                                     
      </ul>      
   </div>   
</template>

<script>
import CardItem from './CardItem.vue';

export default {   
   components: {
      CardItem
   },      
   computed: {
      repositories() {                    
         return this.$store.getters.response;
      },                  
   },                
}
</script>

<style scoped>  
   ul  { 
      text-decoration: none;     
      display: flex;
      flex-direction: row; 
      flex-wrap: wrap;     
      border-radius: 10px;
      margin: 0 0 0 10px;
      padding: 0; 
      color: #000;  
      border-radius: 10px;   
   } 
   ul:first-child {
      margin: 0;
   }  
   .item {
      margin: 0 0 0 10px;
   }
   .item:first-child {
      margin: 0px;
   }
   .item:nth-child(odd) {
      margin: 0px;
   }
   .item:nth-child(n+3) {
      margin-top: 10px;
   }
</style>