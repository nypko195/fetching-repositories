<template>
   <div>
      <section class="search">
         <h2>Поиск репозиториев</h2>
         <label for>
            <input type="text" placeholder="Введите никнейм" v-model.trim="search">
         </label>
         <button @click="requests">Поиск</button>
      </section>
      <section class="resutl" v-if="show">
         <cards-repres></cards-repres>
      </section>
   </div>
   
</template>

<script>
   import CardsRepres from './CardsRepres.vue';
   export default {
      components: {
         CardsRepres
      },
      data() {
         return {
            search: '',
            show: false,
         }
      },
      methods: {          
         requests() {
            this.$store.commit('renewalState', {
               search: this.search
            })

            if(this.search === '') {
               return
            } else {
               this.$store.dispatch('requestReprisitories');
               this.show = true;
               this.search = ''; 
            }         
         },         
      }
}
</script>

<style scoped>
   .search {
      text-align: center;
      margin-top: 30px;
   }
   .result {
      text-align: center;
      margin-top: 30px;
   }
   input {
      margin: 0 10px 0 0;
   }  
</style>