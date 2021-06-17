export const agilityImageLoader = ({src, quality, width, height}) => {

	if (width) {
		src = `${src}${src.indexOf("?") === -1 ? "?w=" : "&w="}${width}`
	}

	if (height) {
		src = `${src}${src.indexOf("?") === -1 ? "?h=" : "&h="}${height}`
	}

	if (quality) {
		src = `${src}${src.indexOf("?") === -1 ? "?q=" : "&q="}${quality}`
	}


	return src
}