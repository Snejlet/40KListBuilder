var express = require('express');
var router = express.Router();
var sideDAO = require('../dao/sideDAO');
var factionDAO = require('../dao/factionDAO');
var subFactionDAO = require('../dao/subFactionDAO');
var unitDAO = require('../dao/unitDAO');
var listDAO = require('../dao/listDAO');
var unitListDAO = require('../dao/unitListDAO');

router.get('/', function(req, res) {
    console.log("At the front page");
    res.redirect("/frontPage.html");
});

router.get('/test', function(req, res) {
    console.log("At the testing page");
    res.redirect("/testPage.html");
});

router.get('/oldFrontPage', function(req, res) {
    console.log("At the old front page");
    res.redirect("/frontPageReference.html");
});

router.get("/createNewList", function (req, res) {
    console.log("At the list creating page");
    res.redirect("/createNew.html");
});

router.get("/adminPage", function (req, res) {
    console.log("At the admin page");
    res.redirect("/adminPage.html");
});

router.post("/createdNewList", function (req, res) {
    console.log(req.body);
    var listname = req.body;
   listDAO.insertIntoLists(listname, function(result) {
       var list = result;
       console.log(list);
       res.redirect("/frontPage.html")
   })
});

/*
router.post("/newUnitAdded", function (req, res) {
   console.log(req.body);
   var name = req.body;
   listDAO.insertIntoLists(name, function(result) {

   })
});
*/

router.post("/listUnit/create", function (req, res) {
    console.log(req.body);
    var id = req.body;
    unitListDAO.newUnitAdded(id, function(result) {
        var unitList = result;
       doGetAllPartial(req,res);
    })
});
function doGetAllPartial(req, res){
    unitListDAO.getAll(function (result) {
        res.render("page/partials/tableElement",
            {unitLists: result})
    })
}

router.get("/getAllPartial", doGetAllPartial);


/* outdated by the one below
router.get('/books', function(req, res) {
    bookDAO.getAll(function (result) {
        var books = result;
        res.send(result)
    })
});
*/

router.get("/armies", function (req, res) {
    console.log(req.body);
    listDAO.getAll(function (result) {
        var lists = result;
        res.render("page/armies",
            {lists: lists})
    })
});

router.get("/side", function(req, res) {
    console.log(req.body);
    sideDAO.getAll(function (result) {
        var side = result;
        res.render("page/partials/side",
            {sides: side})
    })
});

router.get("/faction/:side", function(req, res) {
    var side = req.param("side");
    factionDAO.getAllByArmy(side, function(result) {
        var faction = result;
        res.render("page/partials/faction",
            {factions: faction})
    })
});

router.get("/subFaction/:faction", function(req, res) {
    var faction = req.param("faction");
    subFactionDAO.getAllByFaction(faction,function (result) {
        var subfaction = result;
        res.render("page/partials/subFaction",
            {subfactions: subfaction})
    });
});

router.get("/unit/:subFaction", function(req, res) {
    var subFaction = req.param("subFaction");
    unitDAO.getAllBySubFaction(subFaction,function (result) {
        var unit = result;
        res.render("page/partials/unit",
            {units: unit})
    })
});

router.get("/added/:id", function(req, res) {
    var id = req.param("id");
    unitDAO.getUnitById(id, function (result) {
        var unit = result;
        res.render("page/partials/tableElement",
            {units: unit});
        console.log(unit);
    })
});

router.get("/adminDatabase", function (req, res) {
   res.render("page/partials/adminDatabase")
});

module.exports = router;