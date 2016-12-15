function Button(text) {
	this.text = text || 'Hello';  //domyślna wartość to 'hello'
}

Button.prototype = {     // stworzenie nowych buttonów na stronie
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);   // po kliknięciu w przycisk wyświetli tekst na ekranie komputera
		});
		$("body").append(this.$element);
		   // lub this.$element.appendTo($(‘body’));  (umieszczenie w DOM)
	}

}

//Konstrukcja this.$element ma za zadanie trzymać w właściwości element przycisk (element DOM), który stworzyliśmy za pomocą jQuery.

var btn1 = new Button('Hello');
btn1.create();