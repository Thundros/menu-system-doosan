
	window.onload = function ( ) {

		document.addEventListener ( 'contextmenu', function ( evt ) {
			evt.preventDefault ( );
		}, false );

		this.stats = new Stats ( );
		document.body.appendChild ( this.stats.dom );

		this.__game = new Phaser.Game ( this.__config );

		window.focus ( );

	}


