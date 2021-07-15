export default {
   async  requestReprisitories(context) { 
      let nameRepres = context.getters.nameRepres;
      const response = await fetch(`https://api.github.com/users/${nameRepres}/repos`)
      const responseData = await response.json();
      
      console.log(responseData);

      if(!response.ok) {
         console.log(responseData);
         
         const error = new Error(responseData.message || 'Не найден, попробуйте снова.')
         throw error;
      } 

         
      const readyData = [];

      for(let item in responseData) {
         const requiredData = {
            id: responseData[item].id,
            name: responseData[item].name,
            url: responseData[item].html_url,
            desc: responseData[item].description,
            stars: responseData[item].stargazers_count,
            forks: responseData[item].forks_count
         }
         readyData.push(requiredData)
      }

      context.commit('requestResponse', readyData);

      console.log(readyData);       
   }
}