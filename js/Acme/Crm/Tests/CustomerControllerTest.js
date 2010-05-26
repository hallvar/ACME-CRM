JDS.using('JsTest', 'Acme.Crm.Models.CustomerList', 'Acme.Crm.Controllers.CustomerController');

var _ = JDS.defineClass(function Acme$Crm$Tests$CustomerControllerTest() {
	this.mock = null;
	this.model = null;
	this.controller = null;
	
	this.inherit(Acme.Crm.Tests.CustomerControllerTest, JsTest);
});

_.prototype.setup = function() {
	this.mock = new MockControl();
	this.model = this.mock.createMock(Acme.Crm.Models.CustomerList);
	this.controller = new Acme.Crm.Controllers.CustomerController(this.model);
	
	this.renderDiv = document.createElement('div');
	document.body.appendChild(this.renderDiv);
}

_.prototype.tearDown = function() {
	this.mock = null;
	this.model = null;
	this.controller = null;
	
	//this.renderDiv.parentNode.removeChild(this.renderDiv);
}

_.prototype.test_When_there_are_customers_then_they_must_be_in_the_list_of_customers_view = function() {
	// Arrange
	var customers = [{
			name: "Arne Banan",
			details: "Er en ordentlig kar som vi maa behandle godt"
		},{
			name: "Nilse Mann",
			details: "En kjeltring. Du skulle sett hva han gjorde på Loerdag!"
		},{
			name: "Kari Nordmann",
			details: "Flott dame!"
		}]; 
	
	this.model
		.expects().getCustomers()
		.andReturn(customers);
		            
	// Act
	this.controller.renderCustomerList(this.renderDiv);
	
	// Assert
	this.assertAreEqual(customers.length, this.renderDiv.firstChild.childNodes.length);
	this.mock.verify();
}

_.prototype.test_When_there_is_a_customer_in_list_of_customers_view_then_customers_name_must_be_displayed = function() {
	// Arrange
	var customers = [{
			name: "Arne Banan",
			details: "Er en ordentlig kar som vi maa behandle godt"
		},{
			name: "Nilse Mann",
			details: "En kjeltring. Du skulle sett hva han gjorde på Loerdag!"
		},{
			name: "Kari Nordmann",
			details: "Flott dame!"
		}]; 
	
	this.model
		.expects().getCustomers()
		.andReturn(customers);
		
	// Act
	this.controller.renderCustomerList(this.renderDiv);
	
	// Assert
	for (var i = 0; i < customers.length; i++) {
		this.assertIsTrue(this.renderDiv.innerHTML.indexOf(customers[i].name) >= 0);
	}
	this.mock.verify();
};