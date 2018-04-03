var quotes = new Array();
var current = 0;
var previous = 0;

function displayQuotes() {
	console.log("\n\n");
	for(var i=0; i<quotes.length; i++) {
		console.log(i + ": " + quotes[i].quote + " - " + quotes[i].priority);
	}
	console.log("\n\n")
}

function sortQuotes() {
	quotes.sort(
		function(one, two) {
			return two.priority - one.priority;
		}
	);
}

function createQuote(quote, attributed) {
	quotes.push(new Quote(quote, attributed));
	sortQuotes();
	displayQuotes();
}

function randomizeCurrent() {
	var chance = 0;
	while(true) {
		console.log("\nRandomizing Current\n");
		current = Math.trunc(Math.random() * (quotes.length - 1));
		chance = Math.trunc(Math.random() * 4 + 1);
		if(chance < 5 + quotes[current].priority && current != previous){
			break;
		}
	}
}

createQuote("Life is like a box of chocolates, you never know what you're gonna get.", "Forest Gump");
createQuote("If you want to change the world, take a look at yourself and make a change.", "Michael Jackson");
createQuote("Do. Or do not. There is no try.", "Yoda");
createQuote("If it doesn't kill you, it will make you stronger, but if it kills you you'll be dead.", "Jonathan Coulton");
createQuote("A horse! A horse! My Kingdom for a horse!", "King Richard III in Shakespear's \"Richard III\"");
createQuote("The only thing that saves us from the bureaucracy is inefficienty", "Eugene McCarthy");
createQuote("He who destroys a good book, kills reason itself", "John Milton");
createQuote("Let him that would move the world first move himself.", "Socrates");
console.log("\n\nDefault Quotes loaded!\n\n");