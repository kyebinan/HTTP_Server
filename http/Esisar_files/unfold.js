/**
 * Ce plugin permet de gérer l'affichage/le masquage d'un élément en cliquant
 * sur un autre. Ce plugin peut avoir des utilisation diverses : création d'une
 * combobox en html, affichage d'un menu ou d'une "popup" au clic.
 * 
 *  Le fonctionnement par défaut s'effectue à l'aide d'attributs HTML dont le
 *  nom peut être modifié au besoin.
 *  
 *  Principe de fonctionnement avec la configuration par défaut :
 *  
 *  <div data-trigger="toto"> Afficher/Masquer titre </div>
 *  <h1 data-target="toto"> Le titre du document </h1>
 *  
 *  => Par défaut, l'élément <h1> est affiché dans la page (mais il peut être
 *  caché par défaut à l'aide d'un "display: none;" en CSS ou d'un .hide() en
 *  jQuery. En cliquant sur "Afficher/Masquer titre", le titre sera caché ou
 *  affiché en fonction de son état précédent. Notez qu'un élément qui a été
 *  affiché reçoit la classe "unfold" pour permettre l'utilisation de cette
 *  classe en CSS au besoin.
 */

//CE0106+JNTBLA
(function($) {
	$.fn.unfold = function(options) {
		
		var defaults = {
			attrTrigger: "data-trigger",
			attrTarget: "data-target",
			unfoldClass: "unfold",
			selectorPrefix: "selector:"
		};
		
		var params = $.extend(defaults, options);
		
		return this.each(function() {
			var $t = $(this);
			var pTarget = params.attrTarget;
			var pTrigger = params.attrTrigger;
			var pUnfold = params.unfoldClass;
			var pSelector = params.selectorPrefix;
			
			var attr = $(this).attr(pTrigger).trim();
			var selector = attr.startsWith(pSelector) ? attr.substr(pSelector.length).trim() : null;
			
			if (!attr.startsWith(pSelector)) {
				$(this).click(function(e) {
					e.stopPropagation();

					$("*[" + pTarget + "][" + pTarget + "!=\"" + attr + "\"]").hide();
					$("*[" + pTrigger + "][" + pTrigger + "!=\"" + attr + "\"]").removeClass(pUnfold);

					$("*[" + pTarget + "=\"" + attr + "\"]").toggle();
					$("*[" + pTrigger + "=\"" + attr + "\"]").toggleClass(pUnfold, $("*[" + pTarget + "=\"" + attr + "\"]").is(":visible"));
				});
			} else {
				
				$(this).click(function(e) {
					e.stopPropagation();
					
					$("*[" + pTrigger + "*=\"" + pSelector + "\"]").each(function() {
						var attrToHide = $(this).attr(pTrigger).substr(pSelector.length).trim();
						var attrOrig = $(attr.substr(pSelector.length).trim());
						if (! attrOrig.is(attrToHide)) {
							$(attrToHide).hide();
							$(this).removeClass(pUnfold);
						}
					});
					$("*[" + pTrigger + "=\"" + attr + "\"]").toggleClass(pUnfold);
					$(selector).toggle();
				});
			}
			
			$(document).click(function(e) {
				if (selector != null) {
					$(selector).hide();
				}
				$("*[" + pTarget + "=\"" + attr + "\"]").hide();
				$("*[" + pTrigger + "=\"" + attr + "\"]").removeClass(pUnfold);
			});
		});
	};
})(jQuery);