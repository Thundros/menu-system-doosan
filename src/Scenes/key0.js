
	var key0 = new Phaser.Class

	({

		Extends : Phaser.Scene,

		initialize :

		function key0 ( ) {

			Phaser.Scene.call ( this, {

				key : 'key0',
				active : false,

			} );

		}, 
		
		myFunc : function ( ) {
			console.error ( 'HI FROM KEY0!' );
		}, 

	});


