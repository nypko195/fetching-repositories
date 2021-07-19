<template>
   <div>
      <section class="search">
         <h2>Поиск репозиториев</h2>
         <label for>
            <input type="text" placeholder="Введите никнейм" v-model.trim="search">            
         </label>         
         <button @click.enter="requests">Поиск</button>
         <p v-if="warning" class="warning">Необходимо ввести никнейм искомого пользователя!</p>
         <p v-else-if="error.show" class="warning">{{error.message}}</p>
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
         warning: false,            
         error: {
            message: '',
            show: false,
         }
      }
   },
   methods: {          
      async requests() {
         this.$store.commit('renewalState', {
            search: this.search
         })

         if(this.search === '') {
            this.warning = true;                            
            return
         }
         try {
            await this.$store.dispatch('requestReprisitories');
            this.show = true;            
            this.warning = false;
            this.search = '';
         } catch (error) { 
            this.show = false;             
            this.error.show = true;
            this.search = '';
            this.error.message = 'Такой никнейм не существует!';            
         }   
      },          
   },    
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
   .warning {
      color: #E32636;
      font-size: 18px;
      font-weight: 700;
   }  
</style>