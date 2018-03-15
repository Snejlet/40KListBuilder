var daoHelper = require('./DAOHelper');

var sideDAO = {
    tableName: "side",
    getAll:function(callback) {
        var sql = "select * from "+this.tableName+";";
        daoHelper.callSql(sql, [], "getAll", callback);
    }
};

module.exports = sideDAO;