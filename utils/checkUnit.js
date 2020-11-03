const checkUnit = (temp, unit) => {
    let newTemp = 0;
    switch(unit){
      case "kevin":
        newTemp = temp.toFixed(2);
        return newTemp + "°K";
      case "celsius":
        newTemp = (temp-273.15).toFixed(2);
        return newTemp + "°C";
      case "fahrenheit":
        newTemp = ((temp-273.15)*(9/5)+32).toFixed(2);
        return newTemp + "°F";
      default:
        return temp + "°K";
    }
  } 

export default checkUnit;