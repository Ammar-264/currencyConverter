import inquirer from 'inquirer'

type ExchangeRates = {
    [currency: string]: {
        [convertCurrency: string]: number;
    };
};

const exchangeRates :ExchangeRates = {
    PKR: {
        BD: 0.0013,
        USD: 0.0036
    },
    BD: {
        PKR: 744.47,
        USD: 2.65
    },
    USD: {
        PKR: 280.63,
        BD: 0.38
    }
};

async function currencyConverter(){

    let userInputs = await inquirer.prompt([
        {
            type:"list",
            name:"actualCurrency",
        choices:['PKR' , 'BD' , 'USD'],
        message:"which currency you want to convert ? "
    },
    {
        type:"list",
        name:"convertCurrency",
        choices:['PKR' , 'BD' , 'USD'],
        message:"in which currency you want to convert ? "
    },
    {
        type:"number",
        message:"how much amount you want to convert : ",
        name:"amount"
    }
])


const actualCurrency = userInputs.actualCurrency;
const convertCurrency = userInputs.convertCurrency;
const amount = userInputs.amount;

if(actualCurrency === convertCurrency ){
   return console.log('Kindly Select Currency Properly');
    
}


const conversionRate = exchangeRates[actualCurrency][convertCurrency];

const convertedAmount = amount * conversionRate;

console.log(`${amount} ${actualCurrency} to ${convertCurrency} is ${convertedAmount}`);

}

currencyConverter()