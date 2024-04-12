let obj ={};
obj?.name?.age;  //conditonoal chaining
//if there is any key value pair within obj then that would deal with the key value pair otherwsise obj?.name is undefined aqnd we cannot read the properties of undefined hence the check will then return false and age won't be accessed 
//output: undefined