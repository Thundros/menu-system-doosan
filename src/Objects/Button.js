
	class Button extends Phaser.GameObjects.Container

	{

		constructor ( scene, __objData ) 

		{

			super ( scene, __objData );

			this.__objData = __objData;

			this.__scene = scene;
			this.__x = this.__objData.x;
			this.__y = this.__objData.y;
			this.__key1 = this.__objData.key1;
			this.__key2 = this.__objData.key2;
			this.__bText = this.__objData.text;
			this.__buttonLocked = this.__objData.locked;
			this.__targetScene = this.__objData.targetScene;

			this.x = this.__x;
			this.y = this.__y;

			this.button = this.__scene.add.sprite ( 0, 0, this.__key1 ).setInteractive ( );

			this.__bX = ( this.button.x );
			this.__bY = ( this.button.y );
			this.__bW = ( this.button.width );
			this.__bH = ( this.button.height );

			this.__text = this.__scene.add.text ( 0, 0, this.__bText, {
				fontSize : '32px', fill : '#fff', 
			} );

			Phaser.Display.Align.In.Center ( this.__text, this.button );
			this.add ( this.button );
			this.add ( this.__text );

			this.button.on ( 'pointerdown', function ( ) {
				if ( this.__buttonLocked === false ) {
					this.__scene.scene.start ( this.__targetScene );
				}
			}.bind ( this ) );

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

		}

		update ( __buttonAlpha, __buttonAlphaLevel, __buttonAlphaDuration )

		{

			__buttonAlphaLevel = __buttonAlphaLevel || 1.0;
			__buttonAlphaDuration = __buttonAlphaDuration || 1000;

			this.__buttonAlpha = __buttonAlpha;
			this.__buttonAlphaLevel = __buttonAlphaLevel;
			this.__buttonAlphaDuration = __buttonAlphaDuration;

			if ( this.__buttonAlpha === this.__buttonAlphaLevel )

			{

				this.__buttonLocked = false;

			}

		}

	}


