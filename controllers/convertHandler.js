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
    const units = new Set(['l', 'gal', 'lbs', 'kg', 'mi', 'km']);
    const regex = /[a-zA-Z]+$/
    let splitIndex = input.search(regex);
    let result = input.substring(splitIndex, input.length);
    result = result.toLowerCase();
    if (!units.has(result)) return null;
    if (result === 'l') return result.toUpperCase();
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    const REF = {
      'l': 'gal',
      'gal': 'l',
      'lbs': 'kg',
      'kg': 'lbs',
      'mi': 'km',
      'km': 'mi'
    }
    let result = REF[initUnit.toLowerCase()];
    if (result === 'l') return result.toUpperCase();
    return result;
  };

  this.spellOutUnit = function(unit) {
    const REF = {
      'l': 'liters',
      'gal': 'gallons',
      'lbs': 'pounds',
      'kg': 'kilograms',
      'mi': 'miles',
      'km': 'kilometers'
    }
    let result = REF[unit.toLowerCase()];
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const REF = {
      'l': 1/galToL,
      'gal': galToL,
      'lbs': lbsToKg,
      'kg': 1/lbsToKg,
      'mi': miToKm,
      'km': 1/miToKm
    }
    let result = parseFloat(initNum * REF[initUnit.toLowerCase()]);
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
