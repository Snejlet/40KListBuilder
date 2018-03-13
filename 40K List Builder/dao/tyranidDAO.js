var daoHelper = require('./DAOHelper');

var tyranidDAO = {
    tableName: "tyranid",
    getAll:function(callback) {
        var sql = "select * from "+this.tableName+";";
        daoHelper.callSql(sql, [], "getAll", callback);
    },
    getAllBySubFaction:function(subFaction,callback) {
        var sql = "select * from "+this.tableName+" where subfaction = ?;";
        daoHelper.callSql(sql, [subFaction], "getAllBySubFaction", callback);
    }
};

module.exports = tyranidDAO;