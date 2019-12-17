
	var PreloaderScene = new Phaser.Class

	({

		Extends : Phaser.Scene,

		initialize :

		function PreloaderScene ( ) {

			Phaser.Scene.call ( this, {

				key : 'PreloaderScene',
				active : true,

			} );

		},

		countJSObjectData : function ( __objData ) {

			this.__objData = __objData;

			return Object.keys ( this.__objData ).length;

		},

		centerX : function ( ) {

			return ( this.sys.game.config.width / 2 );

		},

		centerY : function ( ) {

			return ( this.sys.game.config.height / 2 );

		},

		init : function ( ) {

			this.readyCount = 0;

		},

		preload : function ( ) {

			console.log ( 'HELLO FROM PRELOADERSCENE!' );

			// Add Logo Image
			this.add.image ( ( window.innerWidth / 2 ), this.centerY ( ) - 100, 'logo' );

			// Display Progress Bar
			var progressBar = this.add.graphics ( );
			var progressBox = this.add.graphics ( );
			progressBox.fillStyle ( 0x0064DD, 0.8 );
			progressBox.fillRect ( this.centerX ( ), this.centerY ( ), 50 );

			var width = this.cameras.main.width;
			var height = this.cameras.main.height;

			var loadingText = this.make.text ({
				x : ( window.innerWidth / 2 ),
				y : ( height / 2 - 50 ),
				text : 'Loading...',
				style :
				{
					font : '20px monospace',
					fill : '#ffffff',
				}
			}).setOrigin ( 0.5, 0.5 );

			var percentText = this.make.text ({
				x : ( window.innerWidth / 2 ),
				y : ( ( height / 2 ) - 25 ),
				text : '0%',
				style :
				{
					font : '18px monospace',
					fill : '#ffffff',
				}
			}).setOrigin ( 0.5, 0.5 );

			var assetText = this.make.text ({
				x : ( ( window.innerWidth / 2 ) ),
				y : ( ( window.innerHeight / 2 ) + ( 50 ) ),
				text : '',
				style :
				{
					font : '24px monospace',
					fill : '#0064DD',
				}
			}).setOrigin ( 0.5, 0.5 );

			// Update Progress Bar

			this.load.on ( 'progress', function ( value ) {
				percentText.setText ( ( parseInt ( value * 100 ) + '%' ) );
				progressBar.clear ( );
				progressBar.fillStyle ( 0x0064DD, 1 );
				progressBar.fillRect (
					( ( window.innerWidth / 2  ) - ( 150 ) ),
					( ( window.innerHeight / 2 ) + ( 75  ) ),
					( ( 300 * value ) ),
					( ( 10 ) )
				);
			} );

			// Update File Progress Text

			this.load.on ( 'fileprogress', function ( file ) {
					assetText.setText ( 'Loading asset : ' + file.key );
			} );

			// remove progress bar when complete

			this.load.on ( 'complete', function ( ) {

				progressBar.destroy ( );
				progressBox.destroy ( );
				loadingText.destroy ( );
				percentText.destroy ( );
				assetText.destroy ( );

				this.ready ( );

			}.bind ( this ) );

			this.timedEvent = this.time.delayedCall (

				3, this.ready, [ ], // CONFIG HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				this

			);

			// Load Assets needed in our Game

			this.load.image ( 'blueButton1', 'assets/ui/blue_button02.png' );
			this.load.image ( 'blueButton2', 'assets/ui/blue_button03.png' );
			this.load.image ( 'phaserLogo', 'assets/logo.png' );
			this.load.image ( 'box', 'assets/ui/grey_box.png' );
			this.load.image ( 'checkedBox', 'assets/ui/blue_boxCheckmark.png' );

			this.__BGM_Data = {
				ids : [
					'bgMusic', 'lvl1Music',
				],
				files : [
					'assets/TownTheme.mp3', 'assets/TownTheme2.mp3',
				],
			};

			this.__BGM_Data_Length = ( this.countJSObjectData ( this.__BGM_Data ) );

			for ( this.__i = 0; this.__i < ( this.__BGM_Data_Length ); this.__i++ ) {

				console.log ( this.__BGM_Data.ids [ this.__i ] );
				console.log ( this.__BGM_Data.files [ this.__i ] );

				this.load.audio ( this.__BGM_Data.ids [ this.__i ], [
					this.__BGM_Data.files [ this.__i ],
				] );

			}

		},

		ready : function ( ) {

			this.readyCount++;
			if ( this.readyCount === 2 ) { this.scene.start ( 'TitleScene' ); }

		}

	});
