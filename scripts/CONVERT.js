const form = document.querySelector('form');
const amount = document.getElementById('amount');
const fromCurrency = document.getElementById('from_unit');
const toCurrency = document.getElementById('to_unit');
const result = document.getElementById('result');

function lengthConverter(valNum) {
    document.getElementById("outputMeters").innerHTML = valNum / 0.0022046;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const value = amount.value;

    if (from === 'cm' && to === 'inch') {
        // Unit conversion from cm to inch
        const convertedValue = (value / 2.54).toFixed(2);
        result.innerHTML = `${value} ${from} is equal to ${convertedValue} ${to}`;
    } else if (from === 'inch' && to === 'cm') {
        // Unit conversion from inch to cm
        const convertedValue = (value * 2.54).toFixed(2);
        result.innerHTML = `${value} ${from} is equal to ${convertedValue} ${to}`;
    } else if (from === 'kg' && to === 'lb') {
        // Unit conversion from kg to lb
        const convertedValue = (value * 2.20462).toFixed(2);
        result.innerHTML = `${value} ${from} is equal to ${convertedValue} ${to}`;
    } else if (from === 'lb' && to === 'kg') {
        // Unit conversion from lb to kg
        const convertedValue = (value * 0.453592).toFixed(2);
        result.innerHTML = `${value} ${from} is equal to ${convertedValue} ${to}`;
    } else if (from === 'km' && to === 'mi') {
        // Unit conversion from km to mi
        const convertedValue = (value * 0.621371).toFixed(2);
        result.innerHTML = `${value} ${from} is equal to ${convertedValue} ${to}`;
    } else if (from === 'mi' && to === 'km') {
        // Unit conversion from mi to km
        const convertedValue = (value * 1.60934).toFixed(2);
        result.innerHTML = `${value} ${from} is equal to ${convertedValue} ${to}`;
    } else {
        // Unsupported conversion
        result.innerHTML = 'Unsupported conversion.';
    }
});

