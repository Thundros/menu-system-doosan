
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
		
		init : function ( ) {

		}, 
		
		create : function ( ) {

			console.error ( 'KEY1' );

		}, 

		update : function ( ) {

		}, 

	});


