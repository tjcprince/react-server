var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/queryUsers', function(req, res, next) {
  var currentPage = req.body.currentPage;
  console.log(currentPage);
  var users=[];
  for(var i=0;i<5;i++){
    users.push({
      id:'id_'+i+'_第'+(currentPage+1)+"页",
      name:'张三_'+i+'_第'+(currentPage+1)+"页",
      age:'1_'+i+'_第'+(currentPage+1)+"页"
    })
  }
  var returnObj={
    list:users,
    total:100
  }
  res.json(returnObj);
})
module.exports = router;
