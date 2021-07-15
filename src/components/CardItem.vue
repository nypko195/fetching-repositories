<template>    
   <li>     
      <p>Имя репозитория: <span>{{ name }}</span></p>
      <p>Описание: <span>{{ desc }}</span></p>
      <p>Url: <br> <a :href="url">{{ url }}</a></p>
      <p>Звездочки: <span>{{ stars }}</span></p>
      <p class="forks">Форки: <span>{{ forks }}</span></p>
      <router-link :to="urlCard" class="button">Подробнее</router-link>
   </li>      
</template>

<script>
export default {
   props: ['name', 'desc', 'url', 'stars', 'forks', 'id'],
   data() {
      return {
         idCard: null,
      }
   },
   computed: {
      urlCard() {
         return '/info/' + this.idCard;
      }
   },
   created() {
      const listId = [];
      listId.push(this.id);      

      const idCard = listId.find(arr => arr.id === this.$route.params.id)
      this.idCard = idCard
   },   
}
</script>

<style scoped>
   li {      
      display: flex;      
      flex-direction: column;
      width: 47%;
      background-color: #fff;  
      padding: 15px 5px 15px 5px; 
      border-radius: 10px;   
   }
   p {
      font-weight: 700;          
   }
   a {
      cursor: pointer;
      text-decoration: none;
      font-weight: 700;
      color: #333;
   } 
   .forks {
      height: 100%;
   }
   .button {
      border: 1px solid #A3DBFF;
      background: #A3DBFF;
      border-radius: 10px;
      padding: 3px 0;
   }  
</style>