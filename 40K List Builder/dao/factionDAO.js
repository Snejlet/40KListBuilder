var daoHelper = require('./DAOHelper');

var factionDAO = {
    tableName: "faction",
    getAll:function(callback) {
        var sql = "select * from "+this.tableName+";";
        daoHelper.callSql(sql, [], "getAll", callback);
    },
    getAllByArmy:function(side, callback) {
        var sql = "select * from "+this.tableName+" where side = ?;";
        daoHelper.callSql(sql, [side], "getAllByArmy", callback);
    }
};

module.exports = factionDAO;