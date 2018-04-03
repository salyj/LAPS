// Quote Object Class Definition
var Quote = function(quote, attributed) {
	// Quote Object Instance Variables
	this.numDecline = 0; // How often a quote is declined
	this.numAccept = 0; // How often a quote is accepted
	this.quote = quote; // Quote text
	this.priority = 0; // Preference level (numAccept - numDecline) of this quote
	this.attributed = attributed; // The person who said the quote

	// Quote Object Getters
	this.getNumDecline = function() {
		return this.numDecline;
	}
	this.getNumAccept = function() {
		return this.numAccept;
	}
	this.getQuote = function() {
		return this.quote;
	}
	this.getPriority = function() {
		return this.priority;
	}
	this.getAttributed = function() {
		return this.attributed;
	}

	// Quote Object Setters
	this.setNumDecline = function(numDecline) {
		this.numDecline = numDecline;
	}
	this.setNumAccept = function(numAccept) {
		this.numAccept = numAccept;
	}
	this.setQuote = function(quote) {
		this.quote = quote;
	}
	this.setPriority = function(priority) {
		this.priority = priority;
	}
	this.setAttributed = function(attributed) {
		this.attributed = attributed;
	}

	// Quote Methods
	this.decline = function() {
		this.numDecline++;
	}
	this.accept = function() {
		this.numAccept++;
	}
	this.calcPriority = function() {
		this.priority = this.numAccept - this.numDecline;
	}
}