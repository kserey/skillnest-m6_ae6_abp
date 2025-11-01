const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const chalk = require('chalk').default;
const { convertTemperature } = require('./helpers/convert');

// ==== CONFIG YARGS ====
const argv = yargs(hideBin(process.argv))
    .option('temp', {
        alias: 't',
        type: 'number',
        description: 'Valor numérico de la temperatura a convertir.'
    })
    .option('unidad', {
        alias: 'u',
        type: 'string',
        description: 'Unidad de origen: "c" para Celsius o "f" para Fahrenheit.'
    })

    .demandOption(['temp', 'unidad'], chalk.red('Error: Los parámetros --temp y --unidad son obligatorios.'))
    .help()
    .argv;


    // ==== LÓGICA PRINCIPAL ====
    try {
        const { temp, unidad } = argv;

        const validUnits = ['c', 'f'];
        if (!validUnits.includes(unidad.toLowerCase())) {
            console.log(chalk.yellow(`Advertencia: Unidad desconocida "${unidad}". Intentando continuar con la validación interna...`));
        }
        
        const result = convertTemperature(temp, unidad);

        const rawMessage = `
        ✅ Conversión Exitosa:
        Temperatura original: ${chalk.cyan(temp)} ${chalk.cyan(unidad.toUpperCase())}
        Temperatura convertida: ${chalk.green(result.temp)} ${chalk.green(result.unit)}
        `;
        console.log(chalk.green(rawMessage));

    } catch (error) {
        console.error(chalk.red.bold(`❌ Error en la operación:`), chalk.red(error.message));
        console.log(chalk.magenta('\nUsa --help para ver las opciones disponibles.')); 
    }