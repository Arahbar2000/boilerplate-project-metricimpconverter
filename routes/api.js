/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res) {
      try {
        let input = req.query.input;
        let initNum = convertHandler.getNum(input);
        let initUnit = convertHandler.getUnit(input);
        if (!initNum && !initUnit) throw new Error("invalid number and unit");
        if (!initNum) throw new Error("invalid number");
        if (!initUnit) throw new Error("invalid unit");
        let returnNum = convertHandler.convert(initNum, initUnit);
        returnNum = parseFloat(returnNum.toFixed(5));
        let returnUnit = convertHandler.getReturnUnit(initUnit);
        if (initUnit.toUpperCase() === 'L') initUnit = initUnit.toUpperCase();
        if (returnUnit.toUpperCase() === 'L') returnUnit = returnUnit.toUpperCaseCase();
        let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
        res.status(200).json({ initNum, initUnit, returnNum, returnUnit, string: toString});
      } catch (err) {
        res.status(200).send(err.message);
      }
    });
    
};
