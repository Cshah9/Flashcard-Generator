function ClozeCard(text, cloze) {

	if ( text.includes(cloze) ) {
		this.fullText = text;
		this.cloze = cloze;	
		this.partial = text.replace(cloze, " ... "); 
		
	}
	else {
		console.log("Cannot create this card becuase '", cloze,"' doesn't appear in '", text, "'");
	}
}


module.exports = ClozeCard;