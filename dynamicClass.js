$(document).ready(function () {

	dVal('flexClass')

})


function dVal(clas) {
	$('.' + clas).dynamicVal({});
}

$.fn.dynamicVal = function () {

	var elem = $(this)


	elem.each(function () {
		var elClasses = $(this).attr('class').split(' ');
		for (var index in elClasses) {

			var wid = /^width-\d+$/
			var padingT = /^pt-\d+$/
			var padingL = /^pl-\d+$/
			var padingR = /^pr-\d+$/
			var padingB = /^pb-\d+$/
			var marginT = /^mt-\d+$/
			var marginL = /^ml-\d+$/
			var marginR = /^mr-\d+$/
			var marginB = /^mr-\d+$/
			var margin = /^m-\d+$/
			var height = /^height-\d+$/
			var fontSize = /^fontS-\d+$/
			var bordAll = /^bord-\d+$/
			var bordRad = /^bRad-\d+$/


			var className = elClasses[index]
			var classNum = className.split('-')[1];


			if (className.match(wid)) {
				$('.' + className).css('width', classNum + 'px')
			}

			if (className.match(padingT)) {
				$('.' + className).css('padding-top', classNum + 'px')
			}

			if (className.match(padingL)) {
				$('.' + className).css('padding-left', classNum + 'px')
			}

			if (className.match(padingR)) {
				$('.' + className).css('padding-right', classNum + 'px')
			}

			if (className.match(padingB)) {
				$('.' + className).css('padding-bottom', classNum + 'px')
			}

			if (className.match(marginT)) {
				$('.' + className).css('margin-top', classNum + 'px')
			}

			if (className.match(marginR)) {
				$('.' + className).css('margin-right', classNum + 'px')
			}

			if (className.match(marginB)) {
				$('.' + className).css('margin-bottom', classNum + 'px')
			}
			if (className.match(marginL)) {
				$('.' + className).css('margin-left', classNum + 'px')
			}

			if (className.match(height)) {
				$('.' + className).css('height', classNum + 'px')
			}

			if (className.match(fontSize)) {
				$('.' + className).css('font-size', classNum + 'px')
			}

			if (className.match(bordAll)) {
				$('.' + className).css('border', classNum + 'px' + ' ' + 'solid')
			}

			if (className.match(bordRad)) {
				$('.' + className).css('border-radius', classNum + 'px')
			}
			if (className.match(margin)) {
				$('.' + className).css('margin', classNum + 'px')
			}


		}
	});


};