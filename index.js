var express = require('../../');
var app = module.exports = express();
var users = require('./db');
var fs = require('fs');

// so either you can deal with different types of formatting
// for expected response in index.js
app.get('/', function(req, res){
  res.format({
    html: function(){
      res.send('<ul>' + users.map(function(user){
        return '<li>' + user.name + '</li>';
      }).join('') + '</ul>');
    },

    text: function(){
      res.send(users.map(function(user){
        return ' - ' + user.name + '\n';
      }).join(''));
    },

    json: function(){
      res.json(users);
    }
  });
});

// or you could write a tiny middleware like
// this to add a layer of abstraction
// and make things a bit more declarative:

function format(path) {
  var obj = require(path);
  return function(req, res){
    res.format(obj);
  };
}
function render(){
	return function(request, response){
		//var url = request.url;
		var filename = 'output.txt';
		//url.substring(url.lastIndexOf('/')+1);
			//console.log('url: ' + url);
			console.log('   filename: ' + filename);
			var readStream = fs.createReadStream('./' + filename);
		    // We replaced all the event handlers with a simple call to readStream.pipe()
			response.writeHead(200, {'Content-Type': 'application/octet-stream',"Content-Disposition": "attachment; filename=" + filename}); 
		    readStream.pipe(response);
		    //response.end();
			//res.format(obj);
  };
}
//format('./users')
app.get('/upload',render() );

/* istanbul ignore next */
if (!module.parent) {
  app.listen(8447);
  console.log('Express started on port 8447');
}
