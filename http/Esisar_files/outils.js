(function($) {
	
	// outils fiche
	
	var resizeText = function(multiplier) {
		var $el = $('.contenu');
		var coef = 1;
		
		if ($el.css('font-size') === '') {
			$el.css('font-size', '16px');
		}
		
		var newpx = parseFloat($el.css('font-size')) + (multiplier * coef);
		if (newpx < 6) newpx = 6;
		if (newpx > 30) newpx = 30;
		
		$el.css('font-size', newpx + 'px');
	};
	
	var sendMail = function(url, title) { // TODO
		var email = prompt('Saisissez l\'email du destinataire');
		if (email != null) {
			window.open('mailto:' + email + '?subject=Partage&body=Bonjour,\nJe vous recommande cette page : <a href="' + url + '">' + title + '</a>.\nCOMMENTAIRE\nSIGNATURE\n');			
		}
	};
	
	var getQueryParameters = function() {
		if (window.location.href.indexOf("?") < 0) return [];
		
		var query = window.location.href.split("?")[1].split("#")[0].split("&");
		var params = [];
		query.forEach(function(v) {
			var h = v.split("=");
			params[h[0]] = h[1];
		});
		return params;
	};
	
	$(window).load(function() {
		
		$('[data-role=zoom-in]').click(function() {
			resizeText(1);
		});
		
		$('[data-role=zoom-out]').click(function() {
			resizeText(-1);
		});
		
		$('[data-role=print]').click(function() {
			window.print();
		});
		
		$('[data-role=pdf]').click(function() {
			var href = $(this).attr('data-href');
			var params = getQueryParameters();
			var currentTab = (window.location.hash == "" ? (params["page-active-tab"] === undefined ? "" : params["page-active-tab"]) : window.location.hash.substr(1));
			var location = href + (currentTab == "" ? "" : (href.indexOf("?") < 0 ? "?" : "&") + "page-active-tab=" + currentTab).replace('&', '%26').replace('?', '%3F').replace('=', '%3D');
			window.location.replace(location);
		});
		
		$('[data-role=share]').click(function() {
			var href = $(this).attr('data-href');
			var params = getQueryParameters();
			var currentTab = (window.location.hash == "" ? (params["page-active-tab"] === undefined ? "" : params["page-active-tab"]) : window.location.hash.substr(1));
			window.open(href + (currentTab == "" ? "" : "#" + currentTab), '');
		});
		
		$('[data-role=mail]').click(function() {
			var href = $(this).attr('data-href');
			var params = getQueryParameters();
			var currentTab = (window.location.hash == "" ? (params["page-active-tab"] === undefined ? "" : params["page-active-tab"]) : window.location.hash.substr(1));
			var location = href + (currentTab == "" ? "" : (href.indexOf("?") < 0 ? "?" : "&") + "page-active-tab=" + currentTab).replace('&', '%26').replace('?', '%3F').replace('=', '%3D');
			window.location.replace(location)
		});
	});
	
	// formulaire de recherche simple
	
	$(window).load(function() {
		$('[data-for]').click(function() {
			var target = '#' + $(this).attr('data-for');
			$(target).click();
		});
		
		$('[data-for]').keypress(function(e) {
			e.preventDefault();
			if (e.which == 32) {				
				var target = '#' + $(this).attr('data-for');
				$(target).click();
			}
			return false;
		});
	});
	
})(jQuery);