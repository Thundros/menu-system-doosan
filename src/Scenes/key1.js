
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

		__ActivateAction : function ( __options, __on3 ) {

			this.__options = __options;
			this.__on3 = __on3;

			console.log ( this.__options );

			if ( this.__on3 === true ) { this.__options.setTexture ( 'checkedBox' ); }
			if ( this.__on3 === false ) { this.__options.setTexture ( 'box' ); }

			console.log ( this.__options );
			console.log ( this.__on3 );

		}, 

		updateAudio : function ( ) {

			if ( this.model.musicOn === false ) {

				this.__Option [ 1 ].setTexture ( 'box' );
				this.sys.game.globals.sound.stop ( );
				this.model.bgMusicPlaying = false;

			}

			else

			{

				this.__Option [ 1 ].setTexture ( 'checkedBox' );

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

		updateOptions : function ( __opt ) {

			this.__opt = __opt;

			if ( this.model.optionOn === false ) {

				this.__opt.setTexture ( 'box' );
				this.model.optionOn = true;

			}

			else

			{

				this.__opt.setTexture ( 'checkedBox' );
				this.model.optionOn = false;

			}

		}, 

		init : function ( ) {



		}, 
		
		create : function ( ) {

			this.model = this.sys.game.globals.model;

			// this.__container = new Container ( );

			this.__scene = this;

			this.__Option = [ ];

			this.__optionText = [ ];

			this.__btnObjects = [ ];
			this.__txtObjects = [ ];

			this.__button = [ ];

			this.__buttonFadeInAlphaLevel = [ ];
			this.__buttonFadeInAlphaDuration = [ ];

			this.__buttonTargetScene = [

				'TitleScene', 

			];

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
				'Option 1', 'Option 2', 'Debug', 
			];

			this.__optionButtonX = [
				( ( ( this.__CONFIG_HALF_WIDTH ) - ( 150 / 2 ) ) - ( 48 ) ), 
				( ( ( this.__CONFIG_HALF_WIDTH ) - ( 150 / 2 ) ) - ( 48 ) ), 
			];

			this.__optionButtonY = [
				( ( this.__CONFIG_HEIGHT ) - ( 455 ) ), 
				( ( this.__CONFIG_HEIGHT ) - ( 385 ) ), 
			];

			this.__optionTitleX = [
				( ( this.__CONFIG_HALF_WIDTH ) - ( 150 / 2 ) ), 
			];

			this.__optionTitleY = [
				( ( this.__CONFIG_HALF_HEIGHT ) - ( 200 ) ), 
			];

			this.__optionLabelX = [
				( ( ( this.__CONFIG_HALF_WIDTH ) - ( 150 / 2 ) ) - ( 4 ) ), 
				( ( ( this.__CONFIG_HALF_WIDTH ) - ( 150 / 2 ) ) - ( 4 ) ), 
			];

			this.__optionLabelY = [
				( ( this.__CONFIG_HEIGHT ) - ( 460 ) ), 
				( ( this.__CONFIG_HEIGHT ) - ( 390 ) ), 
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

			for ( this.__i = 0; this.__i <= 1; this.__i++ ) {
				this.__Option [ this.__i ] = this.add.image (
					this.__optionButtonX [ this.__i ], 
					this.__optionButtonY [ this.__i ], 
					'box'
				);
			}

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

			this.__optionText [ 0 ] = this.add.text (
				( this.__optionLabelX [ 0 ] ), 
				( this.__optionLabelY [ 0 ] ), 
				this.__textArray [ 3 ], 
				{
					fontSize : 24, 
				}
			);

			this.__optionText [ 1 ] = this.add.text (
				( this.__optionLabelX [ 1 ] ), 
				( this.__optionLabelY [ 1 ] ), 
				this.__textArray [ 4 ], 
				{
					fontSize : 24, 
				}
			);

			this.__Option [ 0 ].setInteractive ( );
			this.__Option [ 1 ].setInteractive ( );

			this.__myArrowLeft.setInteractive ( );
			this.__myArrowRight.setInteractive ( );

			this.__button [ 0 ] = this.CreateGameButton ({
				scene : this, add : this.add, x : ( __config.width / 2 ), 
				y : ( ( __config.height / 2 ) + ( 100 ) ), key1 : 'blueButton1', key2 : 'blueButton2', 
				text : 'Main Menu', targetScene : 'TitleScene', locked : false, 
			});

			this.__buttonFadeInAlphaLevel [ 0 ] = this.__fadeInMenu ( ).__buttonAlphaLevel [ 0 ];
			this.__buttonFadeInAlphaDuration [ 0 ] = this.__fadeInMenu ( ).__buttonAlphaDuration [ 0 ];

			this.__btnObjects.push ( this.__button [ 0 ] );
			this.__txtObjects.push ( this.__text );

			this.__btnObjects [ 0 ].button.on ( 'pointerdown', function ( ) {
				this.__scene.tweens.add ({
					targets : this.children.getChildren ( ), 
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

			this.__Option [ 0 ].on ( 'pointerup', function ( ) {
				// this.__Option [ 0 ].setTexture ( 'checkedBox' );
				// this.__Option [ 0 ].setTexture ( 'box' );
				// this.__on1 = ! this.__on1;
				// this.__ActivateAction ( this.__Option [ 0 ], this.__on1 );
				this.model.optionOn = ( ! ( this.model.optionOn ) );
				this.updateOptions ( this.__Option [ 0 ] );
			}.bind ( this ) );

			this.__Option [ 1 ].on ( 'pointerdown', function ( ) {
				// this.__Option [ 1 ].setTexture ( 'checkedBox' );
				// this.__Option [ 1 ].setTexture ( 'box' );
				// this.__on2 = ! this.__on2;
				// this.__ActivateAction ( this.__Option [ 1 ], this.__on2 );
				this.model.optionOn = ( ! ( this.model.optionOn ) );
				this.updateOptions ( this.__Option [ 1 ] );
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

			this.__btnObjects [ 0 ].button.on ( 'pointerdown', function ( ) {
				this.__scene.tweens.add ({
					targets : this.children.getChildren ( ), 
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

			// this.updateAudio ( );

		}, 

		update : function ( ) {



		}, 

	});


