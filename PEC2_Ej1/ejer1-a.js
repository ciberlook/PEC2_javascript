//Funcion con tres parametros: un arreglo, un objeto, y otro objeto con dos funciones callback
//La forma en que se pasan los parametros a la funcion permite el acceso directo a las propiedades, gracias a la técnica "Object destructuring"
//La ejecución de la búsqueda se lleva a cabo tras esperar 2 segundos
//Para la búsqueda se ejecuta el método find que itera sobre cada elemento y lo compara con el valor. Si no hay coincidencia devuelve 'undefined'
//Por último, si encuentra el valor ejecuta la funcion onSuccess y si no, onError
const findOne = (list, { key, value }, { onSuccess, onError }) => {
    //Esta función tambien recibe como parametro una funcion anonima que tambien es un callback
    setTimeout(() => {
        const element = list.find(element => element[key] === value);
        element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
    }, 2000);
};

//Definición de funciones callback: onSucess y onError
const onSuccess = ({ name }) => console.log(`user: ${name}`);
const onError = ({ msg }) => console.log(msg);

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
findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });

console.log('findOne error');
findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });

/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/