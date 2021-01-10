import mock from '../utils/mock'; 

// mock.onPost('/api/home/login').reply(200, {
//     'id' : 1,
//     'username' : 'ismaelchaquir',
//     'email' : 'ismaelchaquir@gmail.com'
// });

mock.onPost('/api/home/login').reply((config) => {
    //  console.log(config)
     const { email , password} = JSON.parse(config.data);

     if(email !== 'ismaelchaquir@gmail.com' || password !== 'admin'){
             return [400, { message: 'seu e-mail ou senha estao incorrectos'}]
     }

     const user = {
         id:1,
         name: 'ismael chaquir',
         username: 'ismaelchaquir',
         email: 'ismaelchaquir@gmail.com'
     }

     return [200, {user}]
   
});
