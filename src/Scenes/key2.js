
	var key2 = new Phaser.Class

	({

		Extends : Phaser.Scene,

		initialize :

		function key2 ( ) {

			Phaser.Scene.call ( this, {

				key : 'key2',
				active : false,

			} );

		}, 
		
		myFunc : function ( ) {
			console.error ( 'HI FROM KEY2!' );
		}, 

	});

	this.key2.myFunc ( );


