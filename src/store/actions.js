import helpersApi from "../helpers/helpersApi";
import helpersArr from "../helpers/helpersArr";

export default {
   async  requestReprisitories(context) { 
      let nameRepres = context.getters.nameRepres;
      let urlGitApi = helpersApi.namesRepres(nameRepres);   

      const response = await fetch(urlGitApi)
      const arrDataGitApi = await response.json(); 
      
      console.log(arrDataGitApi)

      if(!response.ok) {
         console.log(arrDataGitApi);
         
         const error = new Error(arrDataGitApi.message || 'Не найден, попробуйте снова.')         
         throw error;         
      }

      let readyDataGitApi = helpersArr.bruteForceResponceApi(arrDataGitApi);     

      context.commit('requestResponse', readyDataGitApi);         
   },   
}