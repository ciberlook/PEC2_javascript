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



console.log('findOne error');
//findOne(users, { key: 'name', value: 'Fermin' })


/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
async function main1() {
    try {
        const f = await findOne(users, { key: 'name', value: 'Carlos' });
        //Definición de funciones callback: onSucess y onError
        console.log(`user: ${f.name}`);

    } catch (err) {
        console.log(err);
    }

}

async function main2() {
    try {

        const v = await findOne(users, { key: 'name', value: 'Fermin' });
    } catch (err) {
        console.log(err);
    }

}

main1();
//main2();