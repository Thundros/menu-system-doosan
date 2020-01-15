
	var TitleScene = new Phaser.Class

	({

		Extends : Phaser.Scene, 

		initialize :

		function TitleScene ( ) {

			Phaser.Scene.call ( this, {

				key : 'TitleScene', 
				active : false, 

			} );

		}, 

		// /*

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

		createAudio : function ( __objData ) {

			this.__objData = __objData;

			this.__soundID = this.__objData.soundID;
			this.__soundData = this.__objData.soundData;

			this.model1 = this.sys.game.globals.model;

			if ( this.model1.musicOn === true && this.model1.bgMusicPlaying === false ) {

				console.error ( this.__soundID );
				console.error ( this.__soundData );

				this.sound1 = this.sound.add ( this.__soundID, this.__soundData );

				this.sound1.play ( );

				this.model1.bgMusicPlaying = true;
				this.sys.game.globals.sound = this.sound1;

			}

			return this.__lvlMusic;

		}, 

		preload : function ( ) {

			console.log ( 'HELLO FROM TITLE SCENE!' );

			this.__stats = new Stats ( );
			document.body.appendChild ( this.__stats.dom );

		}, 

		create : function ( ) {

			this.__scene = this;

			this.__button = [ ];

			this.__buttonFadeInAlphaLevel = [ ];
			this.__buttonFadeOutAlphaLevel = [ ];

			this.__buttonFadeInAlphaDuration = [ ];
			this.__buttonFadeOutAlphaDuration = [ ];

			this.__buttonX = [

				( __config.width / 2 ), 
				( __config.width / 2 ), 
				( __config.width / 2 ), 

			];

			this.__buttonY = [

				( ( __config.height / 2 ) - 100 ), 
				( ( __config.height / 2 ) ), 
				( ( __config.height / 2 ) + 100 )

			];

			this.__buttonKeys = [

				'blueButton1', 'blueButton2', 

			];

			this.__buttonText = [

				'Play', 'Options', 'Credits', 

			];

			this.__buttonTargetScene = [

				'GameScene', 'OptionsScene', 'CreditsScene', 

			];

			this.__buttonLocked = [

				false, false, false, 

			];

			this.__btnObjects = [ ];

			for ( let __i = 0; __i <= 2; __i++ ) {

				// Game

				this.__button [ __i ] = this.CreateGameButton ({
					scene : this.__scene, add : this.add, x : this.__buttonX [ __i ], 
					y : this.__buttonY [ __i ], key1 : this.__buttonKeys [ 0 ], key2 : this.__buttonKeys [ 1 ], 
					text : this.__buttonText [ __i ], targetScene : this.__buttonTargetScene [ __i ], locked : this.__buttonLocked [ __i ]
				});

				this.__buttonFadeInAlphaLevel [ __i ] = this.__fadeInMenu ( ).__buttonAlphaLevel [ __i ];
				this.__buttonFadeInAlphaDuration [ __i ] = this.__fadeInMenu ( ).__buttonAlphaDuration [ __i ];

				this.__btnObjects.push ( this.__button [ __i ] );

				this.__btnObjects [ __i ].button.on ( 'pointerdown', function ( ) {
					this.__scene.tweens.add ({
						targets : this.children.getChildren ( ), // this.__btnObjects.flatMap ( ( b ) => [ b.button, b.__text ] ), 
						repeat : 0, 
						duration : 750, 
						alpha : { from : 1.0, to : 0.0 }, 
						yoyo : false, 
						onComplete : ( ) => {
							this.__scene.scene.start (
								this.__buttonTargetScene [ __i ], 
							);
						}
					});
				}.bind ( this ) );

			}

			this.__soundTrack = [

				'bgMusic', 'lvl1Music', 

			];

			this.__soundData = [

				{
					volume : 0.1, 
					loop : true, 
				}, 

				{
					volume : 0.1, 
					loop : true, 
				}, 

			];

			this.createAudio({
				soundID : this.__soundTrack [ 0 ], 
				soundData : this.__soundData [ 0 ], 
			});

		}, 

		centerButton : function ( gameObject, offset = 0 ) {

			Phaser.Display.Align.In.Center ( gameObject, this.add.zone (

				( __config.width / 2 ), ( ( __config.height / 2 ) - ( offset * 100 ) ), 
				__config.width, __config.height

			) );

		}, 

		centerButtonText : function ( gameText, gameButton ) {

			Phaser.Display.Align.In.Center (

				gameText, gameButton

			);

		}, 

		update : function ( ) {

			this.__stats.update ( );

			for ( let __i = 0; __i <= 2; __i++ ) {

				this.__button [ __i ].UpdateButton (

					this.__button [ __i ].alpha, 
					this.__fadeInMenu ( ).__buttonAlphaLevel [ __i ], 
					this.__fadeInMenu ( ).__buttonAlphaDuration [ __i ]

				);

			}

		}

	});


