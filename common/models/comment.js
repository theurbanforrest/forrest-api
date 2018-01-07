'use strict';

module.exports = function(Comment) {

	//GET /Comments/getname
	Comment.getName = function(shopId, cb) {
	    Comment.findById( shopId, function (err, instance) {
	        var response = "Name of comment is " + instance.name;
	        cb(null, response);
	        console.log(response);
	    });
	}

	Comment.remoteMethod (
        'getName',
        {
          http: {path: '/getname', verb: 'get'},
          accepts: {arg: 'id', type: 'number', http: { source: 'query' } },
          returns: {arg: 'name', type: 'string'}
        }
    );
};
