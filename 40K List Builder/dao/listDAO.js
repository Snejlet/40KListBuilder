var daoHelper = require('./DAOHelper');

var listDAO = {
    tablename: "lists",
    getAll:function(callback) {
        var sql = "select * from "+this.tablename+";";
        daoHelper.callSql(sql, [], "getAll", callback);
    },
    insertIntoLists:function(listname, callback) {
        var sql = "insert into lists set ?;";
        daoHelper.callSql(sql, [listname], "insert", callback);
    }
};

module.exports = listDAO;