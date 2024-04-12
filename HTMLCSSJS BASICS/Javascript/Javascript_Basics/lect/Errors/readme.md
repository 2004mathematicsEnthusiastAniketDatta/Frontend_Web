## Developer Problems

# Debugging a Type Error : cannot read property 'X' of undefined

var obj ={}; <br />
obj.name; //undefined <br/>
obj.name.age; //TypeError: cannot read properties of undefined <br/>
obj?.name?.age;  //conditonoal chaining

## Handling Asynchronous Operations

