const DB = require('./mongo_test')
DB.fetchDocs((result) => {
    console.log(result[0].option);
});