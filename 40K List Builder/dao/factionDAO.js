var daoHelper = require('./DAOHelper');

var factionDAO = {
    tableName: "faction",
    getAll:function(callback) {
        var sql = "select * from "+this.tableName+";";
        daoHelper.callSql(sql, [], "getAll", callback);
    }
};

module.exports = factionDAO;