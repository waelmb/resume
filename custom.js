'use strict'

var anchorLinks, dest, anchor
anchorLinks = document.querySelector('nav').querySelectorAll('a')

for (var i = 0; i < anchorLinks.length; i++) {
	anchorLinks[i].addEventListener('click', function () {
		navigation.close()
		anchor = this.getAttribute('href')
		dest = document.querySelector(anchor)
		window.scroll({ top: dest.offsetTop - 30, behavior: 'smooth' })
	})
}
