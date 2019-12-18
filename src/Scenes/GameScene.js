
	var GameScene = new Phaser.Class

	({

		Extends : Phaser.Scene,

		initialize :

		function GameScene ( ) {

			Phaser.Scene.call ( this, {

				key : 'GameScene',
				active : false,

			} );

		},

		createAudio : function ( __objData ) {

			this.__objData = __objData;

			this.__soundID = this.__objData.soundID;
			this.__soundData = this.__objData.soundData;

			this.sys.game.globals.model.bgMusicPlaying = false;

			this.__model1 = this.sys.game.globals.model;

			if ( this.__model1.musicOn === true && this.__model1.bgMusicPlaying === false ) {

				this.__model1.musicOn = false;

				this.__sound1 = this.sound.add ( this.__soundID, this.__soundData );
				this.sound.pauseOnBlur = false;

				this.sys.game.globals.sound.stop ( );
				this.__sound1.play ( );
				this.__model1.bgMusicPlaying = true;
				this.sys.game.globals.sound = this.__sound1;

			}

			else

			{

				this.sys.game.globals.sound.stop ( );
				this.__model1.bgMusicPlaying = false;

			}

			if ( this.__model1.bgMusicPlaying === false ) {

				this.sys.game.globals.sound.play ( );
				this.__model1.bgMusicPlaying = true;

			}

			return this.__lvlMusic;

		},

		preload : function ( ) {

			console.log ( 'HELLO FROM GAME SCENE!' );

			this.__stats = new Stats ( );
			document.body.appendChild ( this.__stats.dom );

		},

		create : function ( ) {

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
				soundID : this.__soundTrack [ 1 ],
				soundData : this.__soundData [ 1 ],
			});

		},

		update : function ( ) {

			this.__stats.update ( );

		}

	});


