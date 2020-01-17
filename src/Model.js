
	class Model {

		constructor ( ) {

			this._soundOn = true;
			this._musicOn = true;
			this._bgMusicPlaying = false;

			// HACK!!!

			this._optionOn = false;

		}

		set musicOn ( value ) {

			this._musicOn = value;

		}

		get musicOn ( ) {

			return this._musicOn;

		}

		set soundOn ( value ) {

			this._soundOn = value;

		}

		get soundOn ( ) {

			return this._soundOn;

		}

		set bgMusicPlaying ( value ) {

			this._bgMusicPlaying = value;

		}

		get bgMusicPlaying ( ) {

			return this._bgMusicPlaying;

		}

		set optionOn ( value ) {

			this._optionOn = value;

		}

		get optionOn ( ) {

			return this._optionOn;

		}

	}


