
	var CreditsScene = new Phaser.Class

	({

		Extends : Phaser.Scene, 

		initialize : 

		function CreditsScene ( ) {

			Phaser.Scene.call ( this, {

				key : 'CreditsScene', 
				active : false, 

			} );

		}, 

		create : function ( ) {

			this.creditsText = this.add.text ( 0, 0, 'Credits', {
				fontSize : '32px', 
				fill : '#fff', 
			} );

			this.madeByText = this.add.text ( 0, 0, 'Created By :: { Placeholder }', {
				fontSize : '26px', 
				fill : '#fff', 
			} );

			this.zone = this.add.zone (
				( __config.width / 2 ), ( __config.height / 2 ), ( __config.width ), 
				( __config.height ), 
			);

			Phaser.Display.Align.In.Center (

				this.creditsText, this.zone

			);

			Phaser.Display.Align.In.Center (

				this.madeByText, this.zone

			);

			this.madeByText.setY ( 1000 );

			this.creditsTween = this.tweens.add ({
				targets : this.creditsText, y : -100, ease : 'Power1', 
				duration : 3000, delay : 1000, 
				onComplete : function ( )
				{
					this.destroy;
				}
			});

			this.madeByTween = this.tweens.add ({
				targets : this.madeByText, y : -300, ease : 'Power1', 
				duration : 8000, delay : 1000, 
				onComplete : function ( ) {
					this.madeByTween.destroy;
					this.scene.start ( 'TitleScene' );
				}.bind ( this )
			});

		}

	});


