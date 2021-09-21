const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  suite("getNum", function(){

    test("read a whole number", function(done){
      assert.equal(convertHandler.getNum("3km"), 3)
      done()
    })

    test("read a decimal number", function(done){
      assert.equal(convertHandler.getNum("3.1mi"), 3.1)
      done()
    })

    test("read a fractional input", function(done){
      assert.equal(convertHandler.getNum("4/2kg"), 2)
      done()
    })

    test(" read a fractional input with a decimal", function(done){
      assert.equal(convertHandler.getNum("3.1/2gal"), 1.55)
      done()
    })

    test ("return an error on a double-fraction", function(done){
      assert.isNull(convertHandler.getNum("3/2/3L"), "double-fraction")
      done()
    })

    test("default to a numerical input of 1", function(done){
      assert.equal(convertHandler.getNum("L"), 1)
      done()
    })
  })

  suite("getUnit", function(){
    test("read each valid input unit", function(done){
      let input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG']
      input.forEach(i => {
        assert.equal(convertHandler.getUnit(i).toLowerCase(), i.toLowerCase())
      })
      done()
    })

    test("return an error for an invalid input unit",function(done){
      assert.isNull(convertHandler.getUnit("kfld"), "invalid input unit")
      done()
    })

  })

  suite("getReturnUnit", function(){
    test("return the correct return unit", function(done){
      let input = ['gal','L','mi','km','lbs','kg']
      let expect = ['L','gal','km','mi','kg','lbs']
      input.forEach((element, i) => {
        assert.equal(convertHandler.getReturnUnit(element), expect[i])
      })
      done()
    })
  })

  suite("spellOutUnit", function(){
    test("correctly return the spelled-out string", function(done){
      let input = ['gal','L','mi','km','lbs','kg']
      let expect = ["gallons","liters","miles","kilometers","pounds","kilograms"]
      input.forEach((element, i) => {
        assert.equal(convertHandler.spellOutUnit(element), expect[i])
      })
      done()
    })
  })



  suite("convert", function(){
    test("galToL", function(done){
      var input = input = [5, 'gal']
      var expect = 18.92705
      assert.approximately(convertHandler.convert(input[0], input[1]), expect, 0.1)
      done()
    })
    test("lToGal", function(done){
      var input = input = [5, 'L']
      var expect = 1.32086
      assert.approximately(convertHandler.convert(input[0], input[1]), expect, 0.1)
      done()
    })
    test("kmToMi", function(done){
      var input = input = [5, 'km']
      var expect = 3.10686
      assert.approximately(convertHandler.convert(input[0], input[1]), expect, 0.1)
      done()
    })
    test("MiToKm", function(done){
      var input = input = [5, 'mi']
      var expect = 8.04670
      assert.approximately(convertHandler.convert(input[0], input[1]), expect, 0.1)
      done()
    })
    test("KgToLbs", function(done){
      var input = input = [5, 'kg']
      var expect = 11.02312
      assert.approximately(convertHandler.convert(input[0], input[1]), expect, 0.1)
      done()
    })
    test("lbsToKg", function(done){
      var input = input = [5, 'lbs']
      var expect = 2.26796
      assert.approximately(convertHandler.convert(input[0], input[1]), expect, 0.1)
      done()
    })
  })

});

