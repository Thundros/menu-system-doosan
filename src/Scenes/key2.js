
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
		
		init : function ( ) {

		}, 
		
		create : function ( ) {

			console.error ( 'KEY2' );

		}, 

		update : function ( ) {

		}, 

	});


