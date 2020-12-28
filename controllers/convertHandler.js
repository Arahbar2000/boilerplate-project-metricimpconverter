/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    const regex = /[a-zA-Z]+$/
    let splitIndex = input.search(regex);
    if (splitIndex === 0) return 1;
    let result = input.substring(0, splitIndex);
    fractionSplit = result.split('/');
    if (fractionSplit.length === 1) return parseFloat(fractionSplit[0]);
    if (fractionSplit.length > 2) return null;
    return parseFloat(fractionSplit[0]) / parseFloat(fractionSplit[1]);
  };
  
  this.getUnit = function(input) {
    const units = new Set(['L', 'gal', 'lbs', 'kg', 'mi', 'km']);
    const regex = /[a-zA-Z]+$/
    let splitIndex = input.search(regex);
    let result = input.substring(splitIndex, input.length);
    result = result.toUpperCase() === 'L' ? result.toUpperCase() : result.toLowerCase();
    if (!units.has(result)) return null;
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    const REF = {
      'L': 'gal',
      'gal': 'L',
      'lbs': 'kg',
      'kg': 'lbs',
      'mi': 'km',
      'km': 'mi'
    }
    let result;
    if (initUnit.toUpperCase() === 'L') result = REF[initUnit.toUpperCase()];
    else result = REF[initUnit.toLowerCase()];
    return result;
  };

  this.spellOutUnit = function(unit) {
    const REF = {
      'L': 'liters',
      'gal': 'gallons',
      'lbs': 'pounds',
      'kg': 'kilograms',
      'mi': 'miles',
      'km': 'kilometers'
    }
    let result = REF[unit];
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const REF = {
      'L': 1/galToL,
      'gal': galToL,
      'lbs': lbsToKg,
      'kg': 1/lbsToKg,
      'mi': miToKm,
      'km': 1/miToKm
    }
    let result = parseFloat(initNum * REF[initUnit]);
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    const newInitNum = parseFloat(initNum.toFixed(5)).toString();
    const newReturnNum = parseFloat(returnNum.toFixed(5)).toString();
    const newInitUnit = this.spellOutUnit(initUnit);
    const newReturnUnit = this.spellOutUnit(returnUnit);
    const result = `${newInitNum} ${newInitUnit} converts to ${newReturnNum} ${newReturnUnit}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
