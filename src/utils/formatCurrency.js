const formatCurrency = (value, currency) => {
    let price = value.toLocaleString('pt-br', {style: 'currency', currency})    
    return price;    
}

export default formatCurrency;
