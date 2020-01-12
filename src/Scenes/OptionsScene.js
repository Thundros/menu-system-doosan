
	var OptionsScene = new Phaser.Class

	({

		Extends : Phaser.Scene, 

		initialize : 

		function OptionsScene ( ) {

			Phaser.Scene.call ( this, {

				key : 'OptionsScene', 
				active : false, 

			} );

		}, 

		CreateGameButton : function ( __objData ) {

			this.__objData = __objData;
			this.__buttons = new Button ( );

			this.__buttons.CreateButton ({

				scene : this.__objData.scene, 
				add : this.__objData.add, 
				x : this.__objData.x, 
				y : this.__objData.y, 
				key1 : this.__objData.key1, 
				key2 : this.__objData.key2, 
				text : this.__objData.text, 
				targetScene : this.__objData.targetScene, 
				locked : this.__objData.locked, 

			});

			return this.__buttons;

		}, 

		__fadeInMenu : function ( ) {

			this.__buttonTarget = [

				this.gameButton, this.optionsButton, this.creditsButton, 

			];

			this.__buttonAlphaLevel = [

				0.25, 0.50, 1.0, 

			];

			this.__buttonAlphaDuration = [

				1000, 1000, 1000, 

			];

			return {

				__buttonTargets : this.__buttonTarget, 
				__buttonAlphaLevel : this.__buttonAlphaLevel, 
				__buttonAlphaDuration : this.__buttonAlphaDuration, 

			}

		}, 

		__fadeOutMenu : function ( ) {

			this.__buttonTarget = [

				this.gameButton, this.optionsButton, this.creditsButton, 

			];

			this.__buttonAlphaLevel = [

				0.25, 0.50, 1.0, 

			];

			this.__buttonAlphaDuration = [

				500, 1000, 2000, 

			];

			return {

				__buttonTargets : this.__buttonTarget, 
				__buttonAlphaLevel : this.__buttonAlphaLevel, 
				__buttonAlphaDuration : this.__buttonAlphaDuration, 

			}

		}, 

		fadeButtons : function ( ) {

			this.__scene.tweens.add ({
				targets : this.__btnObjects, 
				repeat : 0, 
				duration : 750, 
				alpha : 0, 
				yoyo : false, 
				onComplete : ( ) => {
					this.__scene.scene.start (
						this.__buttonTargetScene, 
					);
				}
			});

		}, 

		updateAudio : function ( ) {

			if ( this.model.musicOn === false ) {

				this.__musicButton.setTexture ( 'box' );
				this.sys.game.globals.sound.stop ( );
				this.model.bgMusicPlaying = false;

			}

			else

			{

				this.__musicButton.setTexture ( 'checkedBox' );

				if ( this.model.bgMusicPlaying === false ) {

					this.sys.game.globals.sound.play ( );
					this.model.bgMusicPlaying = true;

				}

			}

			if ( this.model.soundOn === false ) {

				this.__soundButton.setTexture ( 'box' );

			}

			else

			{

				this.__soundButton.setTexture ( 'checkedBox' );

			}

		}, 

		create : function ( ) {

			this.model = this.sys.game.globals.model;

			this.__scene = this;

			this.__button = [ ];

			this.__buttonFadeInAlphaLevel = [ ];
			this.__buttonFadeOutAlphaLevel = [ ];

			this.__buttonFadeInAlphaDuration = [ ];
			this.__buttonFadeOutAlphaDuration = [ ];

			// this.__container = new Container ( );

			this.__CONFIG_WIDTH = ( __config.width );
			this.__CONFIG_HEIGHT = ( __config.height );

			this.__CONFIG_HALF_WIDTH = ( this.__CONFIG_WIDTH / 2 );
			this.__CONFIG_HALF_HEIGHT = ( this.__CONFIG_HEIGHT / 2 );

			this.__WINDOW_WIDTH = ( window.innerWidth );
			this.__WINDOW_HEIGHT = ( window.innerHeight );

			this.__WINDOW_HALF_WIDTH = ( this.__WINDOW_WIDTH / 2 );
			this.__WINDOW_HALF_HEIGHT = ( this.__WINDOW_HEIGHT / 2 );

            // "150 is the size of the font, 50 is the offset"
            // "the font size is 150 i vaguely recall"
            //this.add.rectangle((this.__CONFIG_WIDTH/2), 0, 1, 2000, 0xffffff).setOrigin(0, 0); // half the screen

            this.__half = ( this.__CONFIG_WIDTH / 2 );
            this.__quarter = ( this.__half / 2 );

            this.__halfLeft = ( this.__half - this.__quarter );
            this.__halfRight = ( this.__half + this.__quarter );

            this.add.rectangle ( ( this.__halfLeft - ( 150 / 2 ) ), 0, 1, 2000, 0xffffff ).setOrigin ( 0, 0 ); // half the screen
            this.add.rectangle ( ( this.__half ), 0, 1, 2000, 0xffffff ).setOrigin ( 0, 0 ); // half the screen
            this.add.rectangle ( ( this.__halfRight + ( 150 / 2 ) ), 0, 1, 2000, 0xffffff ).setOrigin ( 0, 0 ); // half the screen

			this.__textArray = [
				'<', '>', 'Options', 
				'Sound Enabled', 'Music Enabled', 
				'Debug', 
			];

			this.__musicButtonX = [
				( ( ( this.__CONFIG_HALF_WIDTH ) - ( 150 / 2 ) ) - ( 48 ) ), 
			];

			this.__musicButtonY = [
				( ( this.__CONFIG_HEIGHT ) - ( 385 ) ), 
			];

			this.__soundButtonX = [
				( ( ( this.__CONFIG_HALF_WIDTH ) - ( 150 / 2 ) ) - ( 48 ) ), 
			];

			this.__soundButtonY = [
				( ( this.__CONFIG_HEIGHT ) - ( 455 ) ), 
			];

			this.__optionTitleX = [
				( ( this.__CONFIG_HALF_WIDTH ) - ( 150 / 2 ) ), 
			];

			this.__optionTitleY = [
				( ( this.__CONFIG_HALF_HEIGHT ) - ( 200 ) ), 
			];

			this.__musicLabelX = [
				( ( ( this.__CONFIG_HALF_WIDTH ) - ( 150 / 2 ) ) - ( 4 ) ), 
			];

			this.__musicLabelY = [
				( ( this.__CONFIG_HEIGHT ) - ( 390 ) ), 
			];

			this.__soundLabelX = [
				( ( ( this.__CONFIG_HALF_WIDTH ) - ( 150 / 2 ) ) - ( 4 ) ), 
			];

			this.__soundLabelY = [
				( ( this.__CONFIG_HEIGHT ) - ( 460 ) ), 
			];

			this.__arrowLeftX = [
				( ( ( this.__CONFIG_HALF_WIDTH / 2 ) - ( 150 / 2 ) ) - 5 ), 
			];

			this.__arrowLeftY = [
				( ( this.__CONFIG_HALF_HEIGHT ) - ( 250 / 2 ) ), 
			];

			this.__arrowRightX = [
				( ( this.__halfRight + ( 150 / 2 ) ) - ( 150 / 2 ) - 9 ), 
			];

			this.__arrowRightY = [
				( ( this.__CONFIG_HALF_HEIGHT ) - ( 250 / 2 ) ), 
			];

			this.__musicButton = this.add.image (
				this.__musicButtonX [ 0 ], 
				this.__musicButtonY [ 0 ], 
				'checkedBox'
			);

			this.__soundButton = this.add.image (
				this.__soundButtonX [ 0 ], 
				this.__soundButtonY [ 0 ], 
				'checkedBox'
			);

			this.__text = this.add.text (
				( this.__optionTitleX [ 0 ] ), 
				( this.__optionTitleY [ 0 ] ), 
				this.__textArray [ 2 ], 
				{
					fontSize : 40, 
				}
			);

			/*

				this.add.rectangle ( this.__halfLeft, 0, 1, 2000, 0xffffff ).setOrigin ( 0, 0 );
				this.add.rectangle ( this.__halfRight, 0, 1, 2000, 0xffffff ).setOrigin ( 0, 0 );

				this.add.rectangle ( this.__arrowLeftX [ 0 ], this.__arrowLeftY [ 0 ], 150, 150, 0xff0000 ).setOrigin ( 0, 0 ); // where the left is now
				this.add.rectangle ( this.__arrowRightX [ 0 ], this.__arrowRightY [ 0 ], 150, 150, 0xff0000 ).setOrigin ( 0, 0 ); // where the right is now

				this.add.rectangle ( this.__halfLeft - 150 / 2, this.__arrowLeftY [ 0 ] - 250, 150, 150, 0x00ff00 ).setOrigin ( 0, 0 ); // where I think it should go
				this.add.rectangle ( this.__halfRight - 150 / 2, this.__arrowRightY [ 0 ] - 250, 150, 150, 0x00ff00 ).setOrigin ( 0, 0 ); // where I think it should go

			*/

			this.__myArrowLeft = this.add.text (
				( this.__arrowLeftX [ 0 ] ), 
				( this.__arrowLeftY [ 0 ] ), 
				this.__textArray [ 0 ], 
				{
					fontSize : 150, 
				}
			);

			this.__myArrowRight = this.add.text (
				( this.__arrowRightX [ 0 ] ), 
				( this.__arrowRightY [ 0 ] ), 
				this.__textArray [ 1 ], 
				{
					fontSize : 150, 
				}
			);

			this.__musicText = this.add.text (
				( this.__musicLabelX [ 0 ] ), 
				( this.__musicLabelY [ 0 ] ), 
				'Music Enabled', 
				{
					fontSize : 24, 
				}
			);

			this.__soundText = this.add.text (
				( this.__soundLabelX [ 0 ] ), 
				( this.__soundLabelY [ 0 ] ), 
				'Sound Enabled', 
				{
					fontSize : 24, 
				}
			);

			this.__musicButton.setInteractive ( );
			this.__soundButton.setInteractive ( );

			this.__myArrowLeft.setInteractive ( );
			this.__myArrowRight.setInteractive ( );

			this.__buttonX = [
				( __config.width / 2 ), 
			];

			this.__buttonY = [
				( ( __config.height / 2 ) + ( 100 ) ), 
			];

			this.__buttonKeys = [

				'blueButton1', 'blueButton2', 

			];

			this.__buttonText = [

				'Main Menu', 

			];

			this.__buttonTargetScene = [

				'TitleScene', 

			];

			this.__buttonLocked = [

				false, false, false, 

			];

			this.__btnObjects = [ ];

			// Game

			console.log ( this.__scene );
			console.log ( this.add );
			console.log ( this.__buttonX [ 0 ] );
			console.log ( this.__buttonY [ 0 ] );
			console.log ( this.__buttonKeys [ 0 ] );
			console.log ( this.__buttonKeys [ 1 ] );
			console.log ( this.__buttonText [ 0 ] );
			console.log ( this.__buttonTargetScene [ 0 ] );
			console.log ( this.__buttonLocked [ 0 ] );

			this.__button [ 0 ] = this.CreateGameButton ({
				scene : this.__scene, add : this.add, x : this.__buttonX [ 0 ], 
				y : this.__buttonY [ 0 ], key1 : this.__buttonKeys [ 0 ], key2 : this.__buttonKeys [ 1 ], 
				text : this.__buttonText [ 0 ], targetScene : this.__buttonTargetScene [ 0 ], locked : this.__buttonLocked [ 0 ]
			});

			this.__buttonFadeInAlphaLevel [ 0 ] = this.__fadeInMenu ( ).__buttonAlphaLevel [ 0 ];
			this.__buttonFadeInAlphaDuration [ 0 ] = this.__fadeInMenu ( ).__buttonAlphaDuration [ 0 ];

			this.__btnObjects.push ( this.__button [ 0 ] );

			this.__btnObjects [ 0 ].button.on ( 'pointerdown', function ( ) {
				this.__scene.tweens.add ({
					targets : this.__btnObjects.flatMap ( ( b ) => [ b.button, b.__text ] ), 
					repeat : 0, 
					duration : 750, 
					alpha : { from : 1.0, to : 0.0 }, 
					yoyo : false, 
					onComplete : ( ) => {
						this.__scene.scene.start (
							this.__buttonTargetScene [ 0 ], 
						);
					}
				});
			}.bind ( this ) );

			this.__musicButton.on ( 'pointerdown', function ( ) {
				this.model.musicOn = ( ! ( this.model.musicOn ) );
				this.updateAudio ( );
			}.bind ( this ) );

			this.__soundButton.on ( 'pointerdown', function ( ) {
				this.model.soundOn = ( ! ( this.model.soundOn ) );
				this.updateAudio ( );
			}.bind ( this ) );

			this.__myArrowLeft.on ( 'pointerdown', function ( ) {
				// Where Pagination going backwards works
				__OPTIONS_CURR_PAGE_COUNT -= 1;
				if ( __OPTIONS_CURR_PAGE_COUNT !== 0 ) {
					if ( __OPTIONS_CURR_PAGE_COUNT < ( __OPTIONS_MIN_SCENE_COUNT ) ) {
						__OPTIONS_CURR_PAGE_COUNT = __OPTIONS_MAX_SCENE_COUNT;
					}
					this.scene.input.stopPropagation ( );
					this.scene.scene.start ( 'key' + __OPTIONS_CURR_PAGE_COUNT );
				}
				if ( __OPTIONS_CURR_PAGE_COUNT === 0 ) {
					this.scene.scene.start ( 'OptionsScene' );
				}
			} );

			this.__myArrowRight.on ( 'pointerdown', function ( ) {
				// Where Pagination going forwards works
				__OPTIONS_CURR_PAGE_COUNT += 1;
				if ( __OPTIONS_CURR_PAGE_COUNT !== 0 ) {
					if ( __OPTIONS_CURR_PAGE_COUNT > ( __OPTIONS_MAX_SCENE_COUNT ) ) {
						__OPTIONS_CURR_PAGE_COUNT = __OPTIONS_MIN_SCENE_COUNT;
					}
					this.scene.input.stopPropagation ( );
					this.scene.scene.start ( 'key' + __OPTIONS_CURR_PAGE_COUNT );
				}
				if ( __OPTIONS_CURR_PAGE_COUNT === 0 ) {
					this.scene.scene.start ( 'OptionsScene' );
				}
			} );

			/*

				this.__container.create ({
					scene : this, x : 0, y : 0, 
					w : 100, h : 100, useChildIndex : false, 
				});

				this.__container.debug ({
					container : this.__container, 
					add : this.add, 
					x : this.__container.x, 
					y : this.__container.y, 
					w : this.__container.w, 
					h : this.__container.h, 
				});

			*/

			this.updateAudio ( );

		}, 

	});


