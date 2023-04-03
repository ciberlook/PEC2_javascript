//Al usar promesas ya no es necesario pasar como argumento las funciones callback
//La nueva funcion devuelve una promesa que en caso de resolverse devolverá el elemento y sino el mensaje de error
const findOne = (list, { key, value }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const element = list.find(element => element[key] === value);
            element ? resolve(element) : reject({ msg: 'ERROR: Element Not Found' })
        }, 2000);
    });
};



//Definición de lista
const users = [
    {
        name: 'Carlos',
        rol: 'Teacher'
    },
    {
        name: 'Ana',
        rol: 'Boss'
    }
];

//Las funciones se ejecutan de forma secuencial según son llamadas
//pero el resultado de la salida findOne demora 2 segundos desde su ejecución
//por eso sale más tarde que los logs de pantalla.
console.log('findOne success');

// passing an array of functions to static method all execute the promises in parallel
Promise.all([process(users, { key: 'name', value: 'Carlos' }), process(users, { key: 'name', value: 'Fermin' })])


console.log('findOne error');


/*
    We need to put the whole thing inside a function due to await/async not working outside a function
    on the other hand, the promise handles to events: onSuccess and onError which will be handled by try/catch
*/
async function process(list, { key, value }) {
    try {
        //If goes fine do this
        const f = await findOne(list, { key: key, value: value });
        console.log(`user: ${f.name}`);

    } catch (err) {
        //If goes wrong, show message
        console.log(err.msg);
    }

}