var MONGOLAB_URI = "mongodb://Admin:Admin@ds225028.mlab.com:25028/monster";
//mongodb://jlongden:Custerdead101@ds031832.mlab.com:31832/qacard

module.exports = {
    port: process.env.PORT || 3000,
    mongolab_uri: MONGOLAB_URI//process.env.MONGOLAB_URI
}