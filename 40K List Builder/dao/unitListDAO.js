var daoHelper = require('./DAOHelper');

var unitListDAO = {
    tableName: "unitlist",
    getAll: function(callback) {
        var sql = "select * from "+this.tableName+";";
        daoHelper.callSql(sql, [], "getAll", callback)
    },
    newUnitAdded:function(unitid, callback) {
        var sql = "insert into "+this.tableName+" set ?;";
        daoHelper.callSql(sql, [unitid], "newUnitAdded", callback)
    }
};

module.exports = unitListDAO;