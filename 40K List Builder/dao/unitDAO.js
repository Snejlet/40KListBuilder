var daoHelper = require('./DAOHelper');

var unitDAO = {
    tableName: "unit",
    getAll:function(callback) {
        var sql = "select * from "+this.tableName+";";
        daoHelper.callSql(sql, [], "getAll", callback);
    },
    getAllBySubFaction:function(subFaction, callback) {
        var sql = "select * from "+this.tableName+" where subfaction = ?;";
        daoHelper.callSql(sql, [subFaction], "getAllBySubFaction", callback);
    },
    getUnitById:function(id, callback) {
        var sql = "select * from "+this.tableName+" where id = ?;";
        daoHelper.callSql(sql, [id], "getUnitById", callback);
    }
};

module.exports = unitDAO;