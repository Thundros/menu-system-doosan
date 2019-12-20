
	var key1 = new Phaser.Class

	({

		Extends : Phaser.Scene,

		initialize :

		function key1 ( ) {

			Phaser.Scene.call ( this, {

				key : 'key1',
				active : false,

			} );

		}, 
		
		myFunc : function ( ) {
			console.error ( 'HI FROM KEY1!' );
		}, 

	});


