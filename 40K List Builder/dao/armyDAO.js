var daoHelper = require('./DAOHelper');

var armyDAO = {
    tableName: "army",
    getAll:function(callback) {
        var sql = "select * from "+this.tableName+";";
        daoHelper.callSql(sql, [], "getAll", callback);
    }
};

module.exports = armyDAO;