class Media {
	async getCamera(audio = true, video = true) {
		return navigator.getMediaDevices.getUserMedia({
			video,
			audio,
		});
	}
}
