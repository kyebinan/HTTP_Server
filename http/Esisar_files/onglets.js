(function($) {
	function mod2(n, min, max, delta) {
		n += delta;

		if (n >= max) {
			n = min;
		}
		else if (n < min) {
			n = max - 1;
		}

		return n;
	}

	function objectIndexOf(object, value) {
		var key = null;
		for (var k in object) {
			if (object.hasOwnProperty(k) && object[k] === value) {
				key = k;
			}
		}
		return key;
	}

	$("*[data-ui=tabs]").each(function() {
		var $t = $(this);

		var changerOngletRelatif = function($u, delta) {
			$tabs = $u.find("a[data-ui=tabs-tab]");
			$activeTab = $u.find("a[data-ui=tabs-tab][data-ui-state=tabs-tab-active]");

			tabIndex = mod2($tabs.index($activeTab), 0, $tabs.length, -delta);
			$newTab = $tabs[tabIndex];

			showTab($($newTab).attr("href"));
		};
		
		var hideTabs = function(id) {
			$t.find("*[data-ui=tabs-container]").removeAttr('data-ui-state').removeClass('tabs-state-active').hide();

			if (id != null) {
				$t.find("*[data-ui=tabs-header] a[data-ui=tabs-tab], *[data-ui=tab-triggerer]").removeAttr("data-ui-state").removeClass('tabs-state-active');
			}
		};
		
		var showTab = function(id) {
			var st = $(document).scrollTop();
			hideTabs(id);
			$(id).show().attr('data-ui-state', 'tabs-tab-active').addClass('tabs-state-active');
			$t.find("*[data-ui=tabs-header] a[data-ui=tabs-tab][href=" + id + "], *[data-ui=tab-triggerer][data-ui-target=" + id.substr(1) + "]").attr("data-ui-state", "tabs-tab-active").addClass('tabs-state-active');
			
			window.location.href = window.location.href.split('#')[0] + id;
			$(document).scrollTop(st);
			$(document).trigger("showtab", id);
		};
		
		$t.find("*[data-ui=tabs-header] a[data-ui=tabs-tab]").click(function(e) {
			e.preventDefault();
			showTab($(this).attr("href"));
			return false;
		}).attr("tabindex", "-1");
		
		$t.find("*[data-ui=tab-triggerer]").click(function(e) {
			e.preventDefault();
			showTab("#" + $(this).attr("data-ui-target"));
			return false;
		});

		
		$t.bind('keyup', function(e) {
			var key = e.keyCode || e.which;
			$u = $(this);
			if ([37, 39].indexOf(key) >= 0) {
				changerOngletRelatif($u, 38 - key);
			}
		});
		
		function getQueryParameters() {
			if (window.location.href.indexOf("?") < 0) return [];
			
			var query = window.location.href.split("?")[1].split("#")[0].split("&");
			var params = [];
			query.forEach(function(v) {
				var h = v.split("=");
				params[h[0]] = h[1];
			});
			return params;
		}
		
		$(window).load(function() {
			var params = getQueryParameters();
			if (params["page-active-tab"] !== undefined) {
				showTab("#" + params["page-active-tab"]);
			} else {
				if (window.location.hash != "") {			
					showTab(window.location.hash);
				} else {
					showTab($($t.find("*[data-ui=tabs-header] a[data-ui=tabs-tab]")[0]).attr("href"));
				}
			}
			$(document).scrollTop(0);
		});
	});
})(jQuery);