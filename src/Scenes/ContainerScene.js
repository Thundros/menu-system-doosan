
	var Container = new Phaser.Class

	({

		Extends : Phaser.Scene, 

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
			this.x = this.__objData.x;
			this.y = this.__objData.y;
			this.w = this.__objData.w;
			this.h = this.__objData.h;

			this.__useChildIndex = this.__objData.useChildIndex;

			if ( typeof ( this.__childData ) !== 'undefined' ) {
				this.__childDataCount = ( this.__childData.length );
			}

			if ( typeof ( this.__childData ) !== 'undefined' ) {
				this.__childDataCount = 1;
			}

			this.__container = this.__scene.add.container (
				this.x, 
				this.y
			);

			this.__container.setSize (
				this.w, 
				this.h
			);

			this.__children = [ ];
			this.__childIndex = [ ];

			// For each Child
			for ( this.__i = 0; this.__i < this.__childDataCount; this.__i++ ) {
				// If `use Child index` is `true`
				if ( this.__useChildIndex === true ) {
					// Set `this.__children [ ... ]` to 
					// `this.__childData [ this.__i ]`
					this.__children [ this.__i ] = this.__childData [ this.__i ];
					// Set the `Child` index
					this.__childIndex [ this.__i ] = this.__i;
					// If `this.__children [ this.__i ]`'s type 
					// is an object
					if ( typeof ( this.__children [ this.__i ] ) === 'object' ) {
						// If that `object is `NOT` `empty`
						if ( this.emptyObject ( this.__children [ this.__i ] ) === false ) {
							// If `NOT` using a `Child index`
							if ( this.__objData.useChildIndex === false ) {
								// Log A
								console.log ( 'A' );
								// Add the `children` 
								// to `container`
								this.__container.add ( this.__children [ this.__i ] );
							}
							// `IF` using a `Child index`
							if ( this.__objData.useChildIndex === true ) {
								// Log B
								console.log ( 'B' );
								// Set the `Child` to 
								// `index [ i ]`
								this.__container.addAt (
									this.__children [ this.__i ], 
									this.__childIndex [ this.__i ]
								);
							}
						}
					}
				}
			}

			this.__useScrollFactor = this.__objData.useScrollFactor;
			this.__setNonExclusive = this.__objData.setNonExclusive;
			this.__setInteractive = this.__objData.setInteractive;
			this.__interactiveGeometry = this.__objData.intGeom;
			this.__contains = this.__objData.contains;

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

		debug : function ( __objData ) {

			this.__objData = __objData;

			this.__container = this.__objData.container;
			this.__add = this.__objData.add;

			this.__x = this.__objData.x;
			this.__y = this.__objData.y;
			this.__w = this.__objData.w;
			this.__h = this.__objData.h;

			this.__half = ( this.__CONFIG_WIDTH / 2 );
			this.__quarter = ( this.__half / 2 );

			this.__halfLeft = ( this.__half - this.__quarter );
			this.__halfRight = ( this.__half + this.__quarter );

			console.error ( this.__x );
			console.error ( this.__y );
			console.error ( this.__w );
			console.error ( this.__h );

			if ( this.__container ) {

				this.__rect = (
					this.__add.rectangle (
						( this.__x ), 
						( this.__y ), 
						( this.__w ), 
						( this.__h ), 
					)
				);

				this.__color = this.__rect.strokeColor;

				this.__rect.setStrokeStyle (
					2, 0x0064DD, 1.0
				);

			}

		}, 

		preUpdate : function ( time, delta ) {

		}, 

		destroy : function ( container ) {

			this.__container = container;

			this.__container.destroy ( );

		}

	});


