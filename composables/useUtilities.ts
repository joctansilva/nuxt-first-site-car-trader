export const useUtilities = () => {
  function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substring(1);
    });
  }

  function milesToKilometer(milesAsString: string): string {
    const miles = parseFloat(milesAsString);

    if (!isNaN(miles)) {
      if (miles === 0) {
        return "0 Kilometro";
      }
      const kilometers = miles * 1.60934;
      const roundedKilometers = kilometers.toFixed(3);
      return roundedKilometers + " kilometros";
    } else {
      return "Valor inválido";
    }
  }

  function dolarsToReais(priceAsString: string): string {
    const price = parseFloat(priceAsString);

    if (!isNaN(price)) {
      const valueInReais = price * 4.9;
      const roundedValue = valueInReais.toFixed(3);
      return roundedValue;
    } else {
      return "Valor Inválido";
    }
  }

  return {
    toTitleCase,
    milesToKilometer,
    dolarsToReais,
  };
};
