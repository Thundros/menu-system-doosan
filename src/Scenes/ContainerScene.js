
	var Container = new Phaser.Class

	({

		Extends : Phaser.GameObjects.Container, 

		initialize : 

		function Container ( ) {

			Phaser.Scene.call ( this, {

				key : 'OptionsContainer', 
				active : false, 

			} );

		}, 

		emptyObject : function ( object ) {

			this.__object = object;

			return (
				Object.keys ( this.__object ).length === 0 && 
				this.__object.constructor === Object
			);

		}, 

		create : function ( __objData ) {

			this.__objData = __objData;
			this.__childData = this.__objData.childData;

			this.__scene = this.__objData.scene;
			this.__x = this.__objData.x;
			this.__y = this.__objData.y;
			this.__w = this.__objData.w;
			this.__h = this.__objData.h;

			this.__useChildIndex = this.__objData.useChildIndex;

			if ( this.__useChildIndex === true ) {
				if ( typeof ( this.__childData ) === 'object' ) {
					if ( this.emptyObject ( this.__childData ) ) {
						return console.error (
							'\r\n' + 
								'CHILD DATA DOES NOT EXIST!' + '\r\n' + 
								'PLEASE ADD CHILD DATA & TRY AGAIN!' + 
							'\r\n\r\n'
						);
					}
				}
			}

			if ( this.__useChildIndex === true ) {

				this.__child = this.__childData.children;
				this.__childIndex = this.__childData.index;

				console.error ( this.__child );

				// console.error ( this.__childIndex );

			}

			this.__useScrollFactor = this.__objData.useScrollFactor;
			this.__setNonExclusive = this.__objData.setNonExclusive;
			this.__setInteractive = this.__objData.setInteractive;
			this.__interactiveGeometry = this.__objData.intGeom;
			this.__contains = this.__objData.contains;

			this.__container = this.__scene.add.container (
				this.__x, 
				this.__y
			);

			this.__container.setSize (
				this.__w, 
				this.__h
			);

			if ( this.__objData.useChildIndex === false ) {

				this.__container.add ( this.__child );

			}

			if ( this.__useChildIndex === true ) {

				this.__container.addAt (
					this.__child, 
					this.__childIndex
				);

			}

			if ( this.__useScrollFactor === true ) {

				this.__container.setScrollFactor (
					this.__scrollX, 
					this.__scrollY
				);

			}

			if ( this.__useScrollFactorChildren === true ) {

				this.__container.setScrollFactor (
					this.__scrollX, 
					this.__scrollY, 
					true
				);

			}

			if ( this.__setInteractive === true ) {

				this.__container.setInteractive (
					this.__interactiveGeometry, 
					this.__contains
				);

			}

			if ( this.__setNonExclusive === true ) {

				this.__container.setExclusive ( false );
	
			}

			return this.__container;

		}, 

		exists : function ( __objData ) {

			this.__objData = __objData;

			this.__container = this.__objData.container;
			this.__child = this.__objData.childData.children;

			return (
				this.__container.exists ( this.__child )
			);

		}, 

		getWidth : function ( container ) {

			this.__container = container;

			return ( this.__container.width );

		}, 

		getHeight : function ( container ) {

			this.__container = container;

			return ( this.__container.height );

		}, 

		getSize : function ( container, which ) {

			which = which || 2;

			this.__container = container;
			this.__which = which;

			if ( this.__which === 0 ) { return ( this.getWidth ( this.__container ) ); }
			if ( this.__which === 1 ) { return ( this.getHeight ( this.__container ) ); }

			if ( this.__which === 2 ) {

				return {
					width : this.getWidth ( this.__container ), 
					height : this.getHeight ( this.__container ), 
				}

			}

		}, 

		setWidth : function ( container, width ) {

			this.__container = container;
			this.__width = width;
			this.__container.width = ( this.__width );

			return ( this.__container.width );

		}, 

		setHeight : function ( container, height ) {

			this.__container = container;
			this.__height = height;
			this.__container.height = ( this.__height );

			return ( this.__container.height );

		}, 

		setSize : function ( container, width, height, which ) {

			which = which || 2;

			this.__container = container;

			this.__width = width;
			this.__height = height;

			this.__which = which;

			if ( this.__which === 0 ) { this.__container.setSize ( this.__width, this.getHeight ( this.__container ) ); }
			if ( this.__which === 1 ) { this.__container.setSize ( this.getWidth ( this.__container ), this.__height ); }
			if ( this.__which === 2 ) { this.__container.setSize ( this.__width, this.__height ); }

		}, 

		debug : function ( container, add ) {

			this.__container = container;
			this.__add = add;

			this.__half = ( this.__CONFIG_WIDTH / 2 );
			this.__quarter = ( this.__half / 2 );

			this.__halfLeft = ( this.__half - this.__quarter );
			this.__halfRight = ( this.__half + this.__quarter );

			if ( this.__container ) {

				this.__add.rectangle (
					( this.__container.x ), 
					( this.__container.y ), 
					( this.__container.width ), 
					( this.__container.height ), 
					( 0xffffff )
				).setOrigin ( 0, 0 );

			}

		}, 

		preUpdate : function ( time, delta ) {

		}, 

		destroy : function ( container ) {

			this.__container = container;

			this.__container.destroy ( );

		}

	});


