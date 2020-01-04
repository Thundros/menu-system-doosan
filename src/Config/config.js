
	console.log ( 'HELLO FROM BEGINNING OF CONFIG!' );

	// { Internals Section }

	this.__PHASER_TYPE = ( Phaser.AUTO ); // Default :: { Phaser.AUTO } // Sets Phaser's type
	this.__PHASER_PARENT = ( 'phaser-example' );
	this.__PHASER_SCALE_MODE = ( Phaser.Scale.FIT ); // Default :: { Phaser.NONE }
	this.__PHASER_SCALE_AUTOCENTER = ( Phaser.Scale.CENTER_BOTH );

	// { Game Data Section }

	this.__GAME_DESYNCHRONIZED = ( true ); // ( Sets Game's `desynchronized` option - { Default's to `false` } )
	this.__GAME_PREMULTIPLIEDALPHA = ( true ); // ( Sets Game's `pre-multiplied alpha` option - { Default's to `false` } )
	this.__GAME_FAILIFMAJORPERFORMANCECAVEAT = ( true ); // ( Sets Game's `fail if major performance caveat` option - { Default's to `false` } )
	this.__GAME_POWERPREFERENCE = ( 'low-power' ); // ( Sets Game's `power preference` option - { Default's to `default` } )
	this.__GAME_WIDTH = ( window.innerWidth ); // ( Sets the Game's inner window width )
	this.__GAME_HEIGHT = ( window.innerHeight ); // ( Sets the Game's inner window's height )
	this.__GAME_PIXELRATIO = ( window.devicePixelRatio ); // ( Get's Device's Pixel Ratio )
	this.__GAME_SCREEN = ( this.screen ); // ( Gets the `screen` `data` )
	this.__GAME_TRANSPARENT = ( true ); // ( Sets `transparent` )
	this.__GAME_TITLE = ( 'Phaser 3 Template' ); // ( Sets Game's `title` )
	this.__RESOLUTION_WIDTH = ( this.__GAME_SCREEN.width ); // ( Gets the current `Resolution Width` of `Screen` )
	this.__RESOLUTION_HEIGHT = ( this.__GAME_SCREEN.height ); // ( Gets the current `Resolution Height` of `Screen` )
	this.__GAME_RATIO_WIDTH = ( this.__GAME_WIDTH * this.__GAME_PIXELRATIO ); // ( Gets Game Width * Pixel Ratio )
	this.__GAME_RATIO_HEIGHT = ( this.__GAME_HEIGHT * this.__GAME_PIXELRATIO ); // ( Gets Game Height * Pixel Ratio )
	this.__GAME_SCALERATIO = ( this.__GAME_PIXELRATIO / 3 );
	this.__GAME_PIXEL_ART = ( false ); // ( Default `Pixel Art` is `false` )
	this.__GAME_ANTIALIAS = ( false ); // ( Default `Anti Alias` is `false` )
	this.__GAME_BACKGROUND_COLOR = ( '#000' ); // ( Set to `Black` Background Color )
	this.__GAME_TARGETFPS = ( 60 ); // ( Default `Target FPS` is `60` )
	this.__GAME_MINFPS = ( 60 ); // ( Default `Minimum FPS` is `60` )
	this.__GAME_FORCESETTIMEOUT = ( true ); // ( Default `Force SetTimeout` is `false` )

	// { Scenes Section }

	this.__SCENES_ARRAY = [
		PreGameScene, key1, key2, 
	];

	// { Game Physics Section }

	this.__GAME_PHYSICS_GRAVITY = ( 500 ); // ( Default value is `500` )
	this.__GAME_PHYSICS_FPS = ( 100 ); // ( Default value is `100` )
	this.__GAME_PHYSICS_DEBUG = ( true ); // ( Default value is `false` )
	this.__GAME_SCENES = ( this.__SCENES_ARRAY ); // ( Default value is an `array` )
	this.__GAME_PHYSICS_DEFAULT = ( 'arcade' ); // ( Default value is `arcade` )

	this.__GAME_PHYSICS_TYPE = {

		arcade :  {
			debug : this.__GAME_PHYSICS_DEBUG, 
			gravity : {
				y : this.__GAME_PHYSICS_GRAVITY, 
			}, 
			fps : this.__GAME_PHYSICS_FPS, 
		}

	}

	// { Game Map Section }

	this.__MAP_TILE_WIDTH = ( 66 ); // ( Default `Tile Width` is `32` )
	this.__MAP_TILE_HEIGHT = ( 66 ); // ( Default `Tile Height is `32` )

	// { Game Camera Section }

	this.__CAMERA_VIEWPORT_X1 = ( 0 ); // ( Default `X1` is `0` )
	this.__CAMERA_VIEWPORT_X2 = ( 0 ); // ( Default `X2` is `0` )
	this.__CAMERA_VIEWPORT_Y1 = ( this.__GAME_WIDTH ); // ( Default `Viewport` `width` is `Game's Width` )
	this.__CAMERA_VIEWPORT_Y2 = ( this.__GAME_HEIGHT ); // ( Default `Viewport` `height` is `Game's Height` )
	this.__CAMERA_DEADZONE_WIDTH = ( this.__GAME_WIDTH ); // ( Default DeadZone `width` is `Game's Width` )
	this.__CAMERA_DEADZONE_HEIGHT = ( this.__GAME_HEIGHT ); // ( Default DeadZone `height` is `Game's Height` )
	this.__CAMERA_ZOOM_WIDTH = ( 1 ); // ( Default `Width` is `1` )
	this.__CAMERA_ZOOM_HEIGHT = ( 1 ); // ( Default `Height` is `1` )
	this.__CAMERA_LERP_XSPEED = ( 1 ); // ( Default `Lerp X-Speed` is `1` )
	this.__CAMERA_LERP_YSPEED = ( 1 ); // ( Default `Lerp Y-Speed` is `1` )

	// { Game Player Section }

	this.__PLAYER_MIN_MOVESPEED = ( 200 ); // ( Default is `200` )
	this.__PLAYER_MAX_MOVESPEED = ( 600 ); // ( Default is `600` )
	this.__PLAYER_MIN_JUMPSPEED = ( 250 ); // ( Default is `250` )
	this.__PLAYER_MAX_JUMPSPEED = ( 600 ); // ( Default is `600` )

	// { Options Scene Section }

	this.__OPTIONS_CURR_PAGE_COUNT = 0;

	this.__OPTIONS_MIN_SCENE_COUNT = 0;
	this.__OPTIONS_MAX_SCENE_COUNT = 2;

	// { Game Configuration }

	this.__config = {

		type : this.__PHASER_TYPE, 
		width : this.__GAME_WIDTH, 
		height : this.__GAME_HEIGHT, 
		parent : this.__PHASER_PARENT, 
		pixelArt : this.__GAME_PIXEL_ART, 
		antialias : this.__GAME_ANTIALIAS, 
		backgroundColor : this.__GAME_BACKGROUND_COLOR, 
		transparent : this.__GAME_TRANSPARENT, 
		desynchronized : this.__GAME_DESYNCHRONIZED, 
		premultipliedAlpha : this.__GAME_PREMULTIPLIEDALPHA, 
		failIfMajorPerformanceCaveat : this.__GAME_FAILIFMAJORPERFORMANCECAVEAT, 
		powerPreference : this.__GAME_POWERPREFERENCE, 
		title : this.__GAME_TITLE, 
		scene : this.__GAME_SCENES, 

		fps : {

			target : this.__GAME_TARGETFPS, 
			min : this.__GAME_MINFPS, 
			forceSetTimeOut : this.__GAME_FORCESETTIMEOUT, 

		}, 

		scale : {

			mode : this.__PHASER_SCALE_MODE, 
			autoCenter : this.__PHASER_SCALE_AUTOCENTER, 

		}, 

	}

	console.log ( 'HELLO FROM END OF CONFIG!' );


