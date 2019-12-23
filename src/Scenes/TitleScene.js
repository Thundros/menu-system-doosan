
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

			this.__buttonAlphaLevel = [

				1.0, 0.50, 0.25, 

			];

			this.__buttonAlphaDuration = [

				1000, 1000, 1000,

			];

			this.tweens.add ({
				targets : this.gameButton,
				alpha : this.__buttonAlphaLevel [ 0 ],
				duration : this.__buttonAlphaDuration [ 0 ],
			});

			this.tweens.add ({
				targets : this.optionsButton,
				alpha : this.__buttonAlphaLevel [ 1 ],
				duration : this.__buttonAlphaDuration [ 1 ],
			});

			this.tweens.add ({
				targets : this.creditsButton,
				alpha : this.__buttonAlphaLevel [ 2 ],
				duration : this.__buttonAlphaDuration [ 2 ],
			});

			return {

				__buttonAlphaLevel : this.__buttonAlphaLevel,
				__buttonAlphaDuration : this.__buttonAlphaDuration,

			}

		}, 

		__fadeOutMenu : function ( ) {

			this.__buttonAlphaLevel = [

				0.0, 0.0, 0.0,

			];

			this.__buttonAlphaDuration = [

				1000, 1000, 1000,

			];

			this.tweens.add ({
				targets : this.gameButton,
				alpha : this.__buttonAlphaLevel [ 0 ],
				duration : this.__buttonAlphaDuration [ 0 ],
			});

			this.tweens.add ({
				targets : this.optionsButton,
				alpha : this.__buttonAlphaLevel [ 1 ],
				duration : this.__buttonAlphaDuration [ 1 ],
			});

			this.tweens.add ({
				targets : this.creditsButton,
				alpha : this.__buttonAlphaLevel [ 2 ],
				duration : this.__buttonAlphaDuration [ 2 ],
			});

			return {

				__buttonAlphaLevel : this.__buttonAlphaLevel,
				__buttonAlphaDuration : this.__buttonAlphaDuration,

			}

		}, 

		// */

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

			this.__buttonFadeOutAlphaDuration = [ ];
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

				true, true, true,

			];

			this.__btnObjects = [ ];

			for ( this.__i = 0; this.__i <= 2; this.__i++ ) {

				// Game

				this.__button [ this.__i ] = this.CreateGameButton ({
					scene : this.__scene, x : this.__buttonX [ this.__i ], y : this.__buttonY [ this.__i ],
					key1 : this.__buttonKeys [ 0 ], key2 : this.__buttonKeys [ 1 ], text : this.__buttonText [ this.__i ],
					targetScene : this.__buttonTargetScene [ this.__i ], locked : this.__buttonLocked [ this.__i ]
				});

				this.__btnObjects.push ( this.__button [ this.__i ] );

				this.__button [ this.__i ].alpha = 0.0;

				this.__buttonAlphaLevel [ this.__i ] = this.__fadeInMenu ( ).__buttonAlphaLevel [ this.__i ];
				this.__buttonAlphaDuration [ this.__i ] = this.__fadeInMenu ( ).__buttonAlphaDuration [ this.__i ];

				/*

				this.tweens.add ({
					targets : this.__button [ this.__i ], 
					alpha : this.__fadeInMenu ( ).__buttonAlphaLevel [ this.__i ], 
					duration : this.__fadeInMenu ( ).__buttonAlphaDuration [ this.__i ], 
				});

				*/

				this.tweens.add ({

					targets : this.__button [ this.__i ], 
					alpha : { from : 0, to : 1 }, 
					ease : 'Linear', 
					duration : 1000, 
					repeat : 0, 
					yoyo : false, 

					onComplete : ( ) => {

						this.__btnObjects.forEach ( ( btn, i ) => {

							btn.on ( 'pointerdown', ( ) => {
								btn.fillStyle ( 0xFF0000, 1 );
								btn.fillRect ( ( 100 * i ), 60, 80, 60 );
								this.btnObjects.forEach ( ( b ) => b.removeInteractive ( ) );
								// Fade out btns
								console.log ( btn.name );
								this.tweens.add ({
									targets : this.btnObjects, 
									alpha : { from : 1, to : 0 }, 
									ease : 'Linear', 
									duration : 2000, 
									repeat : 0, 
									yoyo : false, 
									onComplete : ( ) => {
										// change scene when all faded
										alert ( 'go to scene :: ' + btn.destination );
									}

								});

							} );

						} )

					}

				});

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

			for ( this.__i = 0; this.__i <= 2; this.__i++ ) {

				this.__button [ this.__i ].update (

					this.__button [ this.__i ].alpha,
					this.__buttonAlphaLevel [ this.__i ],
					this.__buttonAlphaDuration [ this.__i ]

				);

			}

		}

	});


