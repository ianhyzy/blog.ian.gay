function swapReseed() {
	if ($('reseed').className.match(/ hide$/)) {
		$('reseed').className=$('reseed').className.substr(0,$('reseed').className.length-5);
		$('swapreseed').innerHTML="(Hide)";
	} else {
		$('reseed').className=$('reseed').className+' hide';
		$('swapreseed').innerHTML="(Show)";
	}

	return false;
}