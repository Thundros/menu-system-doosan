

	var Button = new Phaser.Class

	({

		Extends : Phaser.GameObjects.Container, 

		initialize :

		function Button ( ) {

			Phaser.Scene.call ( this, {

				key : 'Button', 
				active : true, 

			} );

		}, 

		CreateButton : function ( __objData ) {

			this.__objData = __objData;
			console.error ( this.__objData );

			this.__scene = this.__objData.scene;
			this.__add = this.__objData.add;
			this.__x = this.__objData.x;
			this.__y = this.__objData.y;
			this.__key1 = this.__objData.key1;
			this.__key2 = this.__objData.key2;
			this.__bText = this.__objData.text;
			this.__buttonLocked = this.__objData.locked;
			this.__targetScene = this.__objData.targetScene;

			this.x = this.__x;
			this.y = this.__y;

			console.error ( this.__scene );
			console.error ( this.__add );
			console.error ( this.__x );
			console.error ( this.__y );
			console.error ( this.__key1 );
			console.error ( this.__key2 );
			console.error ( this.__bText );
			console.error ( this.__buttonLocked );
			console.error ( this.__targetScene );

			this.button = this.__scene.add.sprite ( 0, 0, this.__key1 ).setInteractive ( );

			this.cameras.main.centerOn ( 0, 0 );

			this.__bX = ( this.button.x );
			this.__bY = ( this.button.y );
			this.__bW = ( this.button.width );
			this.__bH = ( this.button.height );

			this.__text = this.__scene.add.text ( 0, 0, this.__bText, {
				fontSize : '32px', fill : '#fff', 
			} );

			Phaser.Display.Align.In.Center ( this.__text, this.button );
			// this.__add ( this.button );
			// this.__add ( this.__text );

			this.button.on ( 'pointerover', function ( ) {
				if ( this.__buttonLocked === false ) {
					this.button.setTexture ( this.__key2 );
				}
			}.bind ( this ) );

			this.button.on ( 'pointerout', function ( ) {
				if ( this.__buttonLocked === false ) {
					this.button.setTexture ( this.__key1 );
				}
			}.bind ( this ) );

			this.__scene.add.existing ( this );

			return this.button;

		}, 

		UpdateButton : function ( __buttonAlpha, __buttonAlphaLevel, __buttonAlphaDuration )

		{

			this.__buttonAlpha = __buttonAlpha;
			this.__buttonAlphaLevel = __buttonAlphaLevel;
			this.__buttonAlphaDuration = __buttonAlphaDuration;

			if ( this.__buttonAlpha === this.__buttonAlphaLevel )

			{

				this.__buttonLocked = false;

			}

		}

	});


