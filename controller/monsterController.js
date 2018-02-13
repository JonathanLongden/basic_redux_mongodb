
var monsterModel = require('./../model/monsterModel');

module.exports = {
    create: function(req, res, next) {
        //req.body._user = req.user._id;
        // console.log(req);
        // console.log(res);
        console.log(res.body);

        var Monster = new monsterModel(req.body);

        Monster.save(function(err, result) {
            if (err) {
                res.send(err);
            }
            //add sale id to req
            req.id = result._id;
            //call userControl.addSale

            console.log(req.user);
            next();

        });
    },
    createbyself: function(req, res, next) {
        console.log(res.body);
        var Monster = new monsterModel(req.body);
        Monster.save(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    },
    read: function(req, res) {
        monsterModel
            .find(req.query)
            .exec(function(err, result) {
                if (err) {
                    res.send(err);
                }
                res.send(result);
            })
    },
    readById: function(req, res) {
        monsterModel.findById(req.params.id, req.body, function(err, result) {
            if (err) {
                res.send(err);
            }
            res.send(result);
        })
    },
    readByUser: function(req, res) {
        monsterModel.find({ _user: req.user._id }).exec(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    },
    update: function(req, res) {
        monsterModel.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (err) {
                res.send(err);
            }
            res.send(result);
        })
    },
    delete: function(req, res, next) {
        monsterModel.findByIdAndRemove(req.params.id, req.body, function(err, result) {
            if (err) {
                res.send(err);
            }
            req._user = result._user;
            next();
            //res.send(result);
        })
    }
}