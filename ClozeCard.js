function ClozeCard(text, cloze) {
	this.fullText;
	this.cloze;
	this.partial;

	if ( text.includes(cloze) ) {


		this.addFullText(text);
		this.addCloze(cloze);
		this.createPartial();	
		

	}
	else {
		console.log("Cannot create this card becuase '", cloze,"' doesn't appear in '", text, "'");
	}
}

ClozeCard.prototype.addCloze = function(newCloze) {
	this.cloze = newCloze;
	console.log("--ClozeCard-- setting cloze:", this.cloze);
}

ClozeCard.prototype.addFullText = function(newText) {
	this.fullText = newText;
	console.log("--ClozeCard-- setting fullText:", this.fullText);
}
ClozeCard.prototype.createPartial = function() {
	this.partial = this.fullText.replace(this.cloze, " ... "); 
	console.log("--ClozeCard-- creating partial:", this.partial);
}

module.exports = ClozeCard;