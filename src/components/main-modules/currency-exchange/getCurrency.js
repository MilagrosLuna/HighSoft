// Funcion con el fetch para consumir la API de cambio de divisas

export const getCurrencyValues = (wantedCurrency, targetStateSetter)=>{
    fetch('https://v6.exchangerate-api.com/v6/29002abcc558e30b03e9bcba/latest/'+wantedCurrency)
    .then(res => res.json())
    .then(res => targetStateSetter(res))
};

// Funcion para calcular los cambios de divisa
// pasamos en la funcion los parametros necesarios para el calculo

export const getChangeValue = (data, amount, originCurrency, destinyCurrency, setResultTo)=>{
    // chequeamos que ambas monedas sean admitidas para continuar
    if (data.conversion_rates[originCurrency] && data.conversion_rates[destinyCurrency]){
        const originChangeRate = data.conversion_rates[originCurrency];
        const destinyChangeRate = data.conversion_rates[destinyCurrency];
        const changeValue = (amount / originChangeRate) * destinyChangeRate;
        setResultTo(changeValue.toFixed(3));
    }
    // si no son admitidas ambas monedas devolvemos un mensaje de error
     else {
        setResultTo("error");
    }
};