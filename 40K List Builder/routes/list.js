var express = require('express');
var router = express.Router();
var armyDAO = require('../dao/armyDAO');
var factionDAO = require('../dao/factionDAO');
var subFactionDAO = require('../dao/subFactionDAO');
var unitDAO = require('../dao/unitDAO');

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

/* outdated by the one below
router.get('/books', function(req, res) {
    bookDAO.getAll(function (result) {
        var books = result;
        res.send(result)
    })
});
*/

router.get("/armies", function(req, res) {
    armyDAO.getAll(function (result) {
        var army = result;
        res.render("page/armies",
            {armies: army})
    })
});

router.get("/faction/:army", function(req, res) {
    var army = req.param("army");
    factionDAO.getAllByArmy(army, function(result) {
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

module.exports = router;