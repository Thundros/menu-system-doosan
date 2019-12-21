
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

			this.__buttonObj = {

				scene : this.__objData.scene,
				x : this.__objData.x,
				y : this.__objData.y,
				key1 : this.__objData.key1,
				key2 : this.__objData.key2,
				text : this.__objData.text,
				targetScene : this.__objData.targetScene,
				locked : this.__objData.locked,

			}

			this.__buttons = new Button ( this.__buttonObj.scene, {

				x : this.__buttonObj.x,
				y : this.__buttonObj.y,
				key1 : this.__buttonObj.key1,
				key2 : this.__buttonObj.key2,
				text : this.__buttonObj.text,
				targetScene : this.__buttonObj.targetScene,
				locked : this.__buttonObj.locked,

			} );

			return this.__buttons;

		},

		updateAudio : function ( ) {

			console.error ( this.sys.game.globals );

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

			this.__container = new Container ( );

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
            //this.add.rectangle((this.__CONFIG_WIDTH/2),0, 1, 2000, 0xffffff).setOrigin(0,0); // half the screen

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


			this.__menuButton = this.CreateGameButton ({
				scene : this,
				x : ( __config.width / 2 ),
				y : ( ( __config.height / 2 ) + ( 100 ) ),
				key1 : 'blueButton1',
				key2 : 'blueButton2',
				text : 'Menu',
				targetScene : 'TitleScene',
				locked : false,
			});

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
				if ( __OPTIONS_CURR_PAGE_COUNT < ( __OPTIONS_MIN_SCENE_COUNT ) ) {
					__OPTIONS_CURR_PAGE_COUNT = __OPTIONS_MAX_SCENE_COUNT;
				}
				console.log ( 'key' + __OPTIONS_CURR_PAGE_COUNT );
				this.input.input.stopPropagation ( );
				this.scene.scene.start ( 'key' + __OPTIONS_CURR_PAGE_COUNT );
			} );

			this.__myArrowRight.on ( 'pointerdown', function ( ) {
				// Where Pagination going forwards works
				__OPTIONS_CURR_PAGE_COUNT += 1;
				if ( __OPTIONS_CURR_PAGE_COUNT > ( __OPTIONS_MAX_SCENE_COUNT ) ) {
					__OPTIONS_CURR_PAGE_COUNT = __OPTIONS_MIN_SCENE_COUNT;
				}
				this.scene.scene.start ( 'key' + __OPTIONS_CURR_PAGE_COUNT );
				console.log ( 'key' + __OPTIONS_CURR_PAGE_COUNT );
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


