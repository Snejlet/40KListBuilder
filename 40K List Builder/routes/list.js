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

router.get("/subFactionHereticAstartes", function(req, res) {
    subFactionDAO.getAll(function (result) {
        var subfaction = result;
        res.render("page/partials/subFactionHereticAstartes",
            {subfactions: subfaction})
    })
});

router.get("/subFactionDaemons", function(req, res) {
    subFactionDAO.getAll(function (result) {
        var subfaction = result;
        res.render("page/partials/subFactionDaemons",
            {subfactions: subfaction})
    })
});

router.get("/subFactionQuestorTraitoris", function(req, res) {
    subFactionDAO.getAll(function (result) {
        var subfaction = result;
        res.render("page/partials/subFactionQuestorTraitoris",
            {subfactions: subfaction})
    })
});

router.get("/subFactionChaosBastions", function(req, res) {
    subFactionDAO.getAll(function (result) {
        var subfaction = result;
        res.render("page/partials/subFactionChaosBastions",
            {subfactions: subfaction})
    })
});

router.get("/subFactionEldar", function(req, res) {
    subFactionDAO.getAll(function (result) {
        var subfaction = result;
        res.render("page/partials/subFactionEldar",
        {subfactions: subfaction})
    })
});

router.get("/subFactionNecrons", function(req, res) {
    subFactionDAO.getAll(function (result) {
        var subfaction = result;
        res.render("page/partials/subFactionNecrons",
            {subfactions: subfaction})
    })
});

router.get("/subFactionOrks", function(req, res) {
    subFactionDAO.getAll(function (result) {
        var subfaction = result;
        res.render("page/partials/subFactionOrks",
            {subfactions: subfaction})
    })
});

router.get("/subFactionTau", function(req, res) {
    subFactionDAO.getAll(function (result) {
        var subfaction = result;
        res.render("page/partials/subFactionTau",
            {subfactions: subfaction})
    })
});

router.get("/subFactionTyranids", function(req, res) {
    subFactionDAO.getAll(function (result) {
        var subfaction = result;
        res.render("page/partials/subFactionTyranids",
            {subfactions: subfaction})
    });
});

router.get("/subFactionGenestealerCults", function(req, res) {
    subFactionDAO.getAll(function (result) {
        var subfaction = result;
        res.render("page/partials/subFactionGenestealerCults",
            {subfactions: subfaction})
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