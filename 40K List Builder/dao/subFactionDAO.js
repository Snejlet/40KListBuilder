var daoHelper = require('./DAOHelper');

var subFactionDAO = {
    tableName: "subfaction",
    getAll:function(callback) {
        var sql = "select * from "+this.tableName+";";
        daoHelper.callSql(sql, [], "getAll", callback);
    }
};

module.exports = subFactionDAO;