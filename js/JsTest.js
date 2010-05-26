/* Copyright (c) 2010, Hallvar Helleseth (hallvar@gmail.com). All Rights Reserved.
 * Released under the MIT licence (www.opensource.org/licenses/mit-license.php)
 */

/**
 * An overly simple JavaScript test framework
 */
var _ = JDS.defineClass(function JsTest() {

});

_.prototype = {
	setup: function() {
	},
	
	tearDown: function() {                                                       
	},
	
  	run: function() {
		for(var k in this) {
        	if(typeof this[k] == 'function' && k.indexOf('test_') === 0) {
            	this.setup();   
				try {
					this.log('Running the test "'+k+'": ')
				    this[k]();
					this.log("Success.");
				} catch(ex) {
					this.log('The test "'+k+'" threw an exception: '+ex);
				}	
				this.tearDown();
			}
		}
	},
	
	assertAreEqual: function(expected, actual, msg) {
		if(expected != actual) {
			this.log('Failed.');
			this.log('Expected: "'+expected+'", actual: "'+actual+'".');
			 
			if(msg) {
				this.log(msg);
			}
		}
	},
	
	assertIsTrue: function(expression, msg) {
	   if(!expression) {
			this.log('Failed.');
			this.log("Expected: true, actual: false");
			
			if(msg) {
				this.log(msg);
			}
		} 
	},
	
	log: function(msg) {
		if(typeof(console) != 'undefined') {
			console.log(msg);           
		} else {
			var div = document.createElement('div');
			div.innerHTML = msg;
			document.body.appendChild(div);
		}
	}
};