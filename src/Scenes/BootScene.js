
	var BootScene = new Phaser.Class

	({

		Extends : Phaser.Scene, 

		initialize : 

		function BootScene ( ) {

			Phaser.Scene.call ( this, {

				key : 'BootScene', 
				active : true, 

			} );

		}, 

		preload : function ( )

		{

			console.log ( 'HELLO FROM BOOT SCENE!' );

			this.load.image ( 'logo', 'assets/zenva_logo.png' );

		}, 

		create : function ( ) {

		}

	});


