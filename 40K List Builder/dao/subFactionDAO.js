var daoHelper = require('./DAOHelper');

var subFactionDAO = {
    tableName: "subfaction",
    getAll:function(callback) {
        var sql = "select * from "+this.tableName+";";
        daoHelper.callSql(sql, [], "getAll", callback);
    },
    getAllByFaction:function(faction,callback) {
        var sql = "select * from "+this.tableName+" where faction = ?;";
        daoHelper.callSql(sql, [faction], "getAllByFaction", callback);
    }
};

module.exports = subFactionDAO;