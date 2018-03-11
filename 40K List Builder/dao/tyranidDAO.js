var daoHelper = require('./DAOHelper');

var tyranidDAO = {
    tableName: "tyranid",
    getAll:function(callback) {
        var sql = "select * from "+this.tableName+";";
        daoHelper.callSql(sql, [], "getAll", callback);
    }
};

module.exports = tyranidDAO;