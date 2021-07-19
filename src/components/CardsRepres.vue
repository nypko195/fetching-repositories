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
         <div class="list-btn">
            <button class="btn" @click="pagePrev">Назад</button>
            <p>{{page}}</p>
            <button class="btn" @click="pageNext">Вперед</button> 
         </div>                                   
      </ul>      
   </div>   
</template>

<script>
import CardItem from './CardItem.vue';

export default {   
   components: {
      CardItem
   }, 
   data() {
      return {  
         arr: [],       
         page: 1,
      }
   },     
   computed: {
      repositories() {                    
         return this.$store.getters.response.slice(this.filterStart, this.filterEnd);
      }, 
      filterStart() {
         const start = (this.page - 1) * 4;
         return start; 
      },  
      filterEnd() {
          const end = this.page * 4;  
         return end;
      }
   },
   methods: {
      pageNext() {          
         this.page++       
      },
      pagePrev() {
         if(this.page === 1) {
            return;
         }             
         this.page--
         
      }
   }               
}
</script>

<style scoped>  
   ul  { 
      position: relative;
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
   .list-btn {
      margin: 0 auto;
      margin-top: 10px;
      display: flex;
      align-items: center;
      position: absolute;
      top: 98%;
      left: 38%;
   }
   .list-btn p {      
      margin-left: 10px;
      font-weight: 700;     
   }
   .btn {      
      margin-left: 10px;
      border: 1px solid #A3DBFF;
      background-color: #fff;
      font-weight: 700;
      text-transform: uppercase;
      padding: 3px 5px;            
      border-radius: 10px;
      height: 25px;
   }
   .btn:first-child {
      margin: 0;
   }
   .btn:hover {
      box-shadow: 0px 5px 42px 22px rgba(161, 161, 161, 0.51);
   }
</style>