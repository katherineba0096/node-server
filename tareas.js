const readline = require('readline-sync')

const chalk = require("chalk")


const tareas = [];



function agregarTarea() {

    const indicador = readline.question(chalk.blue('indique una tarea, ej " T1,T2": '));
    const descripcion = readline.question(chalk.blue('agrege una descripcion: '));
    tareas.push({ indicador, descripcion, completada: false });
    console.log();
    console.log(chalk.bold.green('LA TAREA SE CREO DE MANERA EXITOSA'));

};

function completarTarea() {

    const indicador = readline.question(chalk.yellow('tarea a completar: '));
    const tarea = tareas.find(tarea => tarea.indicador === indicador);
    if (tarea) {
        tarea.completada = true;
        console.log(chalk.bold.green('LA TAREAS SE COMPLETO DE MANERA EXITOSA'));

    } else {
        console.log(chalk.red('LA TAREA NO FUE ENCONTRADA'));
    }

};


function eliminarTarea() {
    const indicador = readline.question(chalk.red('tarea a eliminar: '));
    const tareasIndex = tareas.findIndex(tarea => tarea.indicador === indicador);
    if (tareasIndex !== -1) {
        tareas.splice(tareasIndex, 1);
        console.log(chalk.bold.green('LA TAREA SE ELIMINO DE MANERA EXITOSA'));

    } else {
        console.log(chalk.red('LA TAREA NO FUE ENCONTRADA'));
    }

};


function main() {
    while (true) {
        console.log(chalk.bold.cyan('\nMenu'));
        console.log()
        console.log(chalk.italic.cyanBright('"VAMOS A CUMPLIR TUS METAS"'))
        console.log()
        console.log(chalk.blue('1. Agregar tarea'));
        console.log(chalk.yellow('2. Completar tarea'));
        console.log(chalk.red('3. Eliminar tarea'));
        console.log(chalk.magenta('4. Lista de tareas'));
        console.log();


        const option = readline.question(chalk.bold.cyan('Elige una opcion '));

        switch (option) {
            case '1':
                agregarTarea();
                break;
            case '2':
                completarTarea();
                break;
            case '3':
                eliminarTarea();
                break;
            case '4':
                console.log('\nlista de tareas:');
                console.table(tareas)
                break;

            default:
                console.log('invalida');
        }

    }

}

main();
