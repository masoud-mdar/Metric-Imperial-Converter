const ConvertHandler = require("../controllers/convertHandler")

module.exports = (app) => {

    const getHandler = (req,res) => {
        let {input} = req.query
    
        let convertHandler = new ConvertHandler();
    
        const initNum = convertHandler.getNum(input)
        const initUnit = convertHandler.getUnit(input)
        const returnNum = convertHandler.convert(initNum,initUnit)
        const returnUnit = convertHandler.getReturnUnit(initUnit)
        const spelledInitUnit = convertHandler.spellOutUnit(initUnit)
        const spelledReturnedUnit = convertHandler.spellOutUnit(returnUnit)
        const string = convertHandler.getString(initNum, spelledInitUnit, returnNum, spelledReturnedUnit)
    
        return (!initNum || !initUnit) ? res.json({"error": string}) : res.json({initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: string})
    
    }
    
    app.route("/api/convert").get(getHandler)
}