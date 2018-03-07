var express = require('express');
var router = express.Router();
var armyDAO = require('../dao/armyDAO');
var factionDAO = require('../dao/factionDAO');
var subFactionDAO = require('../dao/subFactionDAO');

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

router.get("/factionImperium", function(req, res) {
    //res.render("page/partials/factionImperium");
    factionDAO.getAll(function (result) {
        var faction = result;
        res.render("page/partials/factionImperium",
            {factions: faction})
    })
});

router.get("/factionChaos", function(req, res) {
    //res.render("page/partials/factionChaos")
    factionDAO.getAll(function (result) {
        var faction = result;
        res.render("page/partials/factionChaos",
            {factions: faction})
    })
});

router.get("/factionXenos", function(req, res) {
    //res.render("page/partials/factionXenos")
    factionDAO.getAll(function (result) {
        var faction = result;
        res.render("page/partials/factionXenos",
            {factions: faction})
    })
});

router.get("/subFactionAdeptusAstartes", function(req, res) {
    subFactionDAO.getAll(function (result) {
        var subfaction = result;
        res.render("page/partials/subFactionAdeptusAstartes",
            {subfactions: subfaction})
    })
});

router.get("/subFactionAstraMilitarum", function(req, res) {
    subFactionDAO.getAll(function (result) {
        var subfaction = result;
        res.render("page/partials/subFactionAstraMilitarum",
            {subfactions: subfaction})
    })
});

router.get("/subFactionAdeptusMechanicus", function(req, res) {
    subFactionDAO.getAll(function (result) {
        var subfaction = result;
        res.render("page/partials/subFactionAdeptusMechanicus",
            {subfactions: subfaction})
    })
});

router.get("/subFactionQuestorImperialis", function(req, res) {
    subFactionDAO.getAll(function (result) {
        var subfaction = result;
        res.render("page/partials/subFactionQuestorImperialis",
            {subfactions: subfaction})
    })
});

router.get("/subFactionAdeptusMinistorum", function(req, res) {
    subFactionDAO.getAll(function (result) {
        var subfaction = result;
        res.render("page/partials/subFactionAdeptusMinistorum",
            {subfactions: subfaction})
    })
});

router.get("/subFactionAdeptusAstraTelepathica", function(req, res) {
    subFactionDAO.getAll(function (result) {
        var subfaction = result;
        res.render("page/partials/subFactionAdeptusAstraTelepathica",
            {subfactions: subfaction})
    })
});

router.get("/subFactionOfficioAssassinorum", function(req, res) {
    subFactionDAO.getAll(function (result) {
        var subfaction = result;
        res.render("page/partials/subFactionOfficioAssassinorum",
            {subfactions: subfaction})
    })
});

router.get("/subFactionInquisition", function(req, res) {
    subFactionDAO.getAll(function (result) {
        var subfaction = result;
        res.render("page/partials/subFactionInquisition",
            {subfactions: subfaction})
    })
});

router.get("/subFactionAdeptusCustodes", function(req, res) {
    subFactionDAO.getAll(function (result) {
        var subfaction = result;
        res.render("page/partials/subFactionAdeptusCustodes",
            {subfactions: subfaction})
    })
});

router.get("/subFactionFortifications", function(req, res) {
    subFactionDAO.getAll(function (result) {
        var subfaction = result;
        res.render("page/partials/subFactionFortifications",
            {subfactions: subfaction})
    })
});

module.exports = router;