function ConvertHandler () {
  
    this.getNum = (input) => {

      let valid = true
      let dot = 0
      let div = 0
      
      let regex = /[a-z]/
      let tempArr = input.toLowerCase().split("")
      
      let index = tempArr.findIndex(i => regex.test(i))
  
      if (index < 0) {
        valid = false
        return null
        
      } else {
        let numArr = (index > 0) ? tempArr.slice(0,index) : [1]
  
        let numRegex = /[0-9]/
  
        numArr.map(i => {
          if (!numRegex.test(i)) {
            if (i !== "." && i !== "/") {
              valid = false
              return null
            } else if (i === ".") {
              ++ dot
            } else if (i === "/") {
              ++ div
            }
          }
        })
  
        if (dot > 1 || div > 1) {
          valid = false
          return null
        }
  
        let numFunc = (element) => numRegex.test(element)
  
        if (!numArr.some(numFunc)){
          valid = false
          return null
        }
  
        if (! valid) {
          return null
        } else {
          let num = eval(numArr.join(""))
          return num
        }
      }
      
    };
    
  
    this.getUnit = function(input) {
  
      let regex = /[a-z]/
      let tempArr = input.toLowerCase().split("")
      
      let index = tempArr.findIndex(i => regex.test(i))
  
      if (index < 0) {
        valid = false
        return null
        
      } else {
  
        let unitArr = tempArr.slice(index, tempArr.length + 1)
        let someFunction = (element) => (!regex.test(element))
        let unitInValid = unitArr.some(someFunction)
        // unitIValid true or false
        // if true, invalid unit
        if (unitInValid) {
          return null
        } else if (!unitInValid) {
          //console.log("ready to go")
          switch (unitArr.join("")){
            case "l":
              return "L"
            case "gal":
              return "gal"
            case "lbs":
              return "lbs"
            case "kg":
              return "kg"
            case "km":
              return "km"
            case "mi":
              return "mi"      
            default: 
              return null
          } 
        }
      }
    };
    
    this.getReturnUnit = function(initUnit) {
  
      switch (initUnit){
        case "km":
          return "mi"
        case "mi":
          return "km"
        case "gal":
          return "L"
        case "L":
          return "gal"
        case "lbs":
          return "kg"
        case "kg":
          return "lbs"
        default:
          return null
      }
    };
  
    this.spellOutUnit = function(unit) {
  
      switch (unit) {
        case "mi":
          return "mile(s)"
        case "km":
          return "kilometer(s)"
        case "L":
          return "liter(s)"
        case "gal":
          return "gallon(s)"
        case "kg":
          return "kilogram(s)"
        case "lbs":
          return "pound(s)"
        default:
          return ""
      }
    };
    
    this.convert = function(initNum, initUnit) {
  
      const galToL = 3.78541;
      const lbsToKg = 0.453592;
      const miToKm = 1.60934;
  
      let result
  
      switch (initUnit) {
        case "mi":
          result = initNum * miToKm
          break
        case "lbs":
          result = initNum * lbsToKg
          break
        case "gal":
          result = initNum * galToL
          break
        case "km":
          result = initNum / miToKm
          break
        case "kg":
          result = initNum / lbsToKg
          break
        case "L":
          result = initNum / galToL
          break
        default:
          return null
      }
      let fixedStr = result.toFixed(5)
      return parseFloat(fixedStr)
    };
    
    this.getString = function(initNum, initUnit, returnNum, returnUnit) {
  
      if (!initNum){
        if (!initUnit){
          return "Invalid Number and Unit"
        } else{
          return "Invalid Number"
        }
      }
      if (!initUnit){
        return "Invalid Unit"
      }
  
      let string = initNum + " " + initUnit + " converts to " + returnNum + " " + returnUnit
      
      return string;
    };
    
}
  
module.exports = ConvertHandler;