export default {   
   namesRepres(nickname) {     
      let urlApi = `https://api.github.com/users/${nickname}/repos`;      
      return urlApi;
   },   
}