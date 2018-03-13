var daoHelper = require('./DAOHelper');

var factionDAO = {
    tableName: "faction",
    getAll:function(callback) {
        var sql = "select * from "+this.tableName+";";
        daoHelper.callSql(sql, [], "getAll", callback);
    },
    getAllByArmy:function(army, callback) {
        var sql = "select * from "+this.tableName+" where army = ?;";
        daoHelper.callSql(sql, [army], "getAllByArmy", callback);
    }
};

module.exports = factionDAO;