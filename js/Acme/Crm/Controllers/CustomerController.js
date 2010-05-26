JDS.using('Acme.Crm.Models.CustomerList');

var _ = JDS.defineClass(function Acme$Crm$Controllers$CustomerController(model) {
	if(!model) {
		throw new Error("No model specified for the controller contructor");
	}
	
	this.model = model;	
});

_.prototype = {
	/**
	 * Render a list of the customers to the specified DOM element
	 * @param {Object} el
	 */
	renderCustomerList: function(el) {
		var customers = this.model.getCustomers();
		
		var listDiv = document.createElement('div');
		listDiv.className = 'customers list';
		
		for(var i=0;i < customers.length;i++) {
			var c = customers[i];
			
			var customerDiv = document.createElement("div");
			customerDiv.className = 'customer item';
			customerDiv.innerHTML = ['<label>Name: </label><span class="name">'+c.name+'</span>',
									 '<div class="details">'+c.details+'</div>'].join('');
			listDiv.appendChild(customerDiv);
		}
		
		el.appendChild(listDiv);
	}
}
