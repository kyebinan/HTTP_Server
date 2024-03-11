/**
 * Ce plugin jQuery permet de gérer une rotation des éléments fils d'un élément
 * principal du DOM, en déplacer le dernier élément à la première place et
 * vice-versa.
 * 
 * Son utilisation peut se faire de deux manières : en utilisant l'attribut
 * data-reorg-trigger sur les éléments du Dom qui doivent déclencher la
 * rotation, et en utilisant l'attribut data-reorg-target sur l'élément
 * qui subit la rotation de ses éléments fils, ou simplement via un appel de 
 * la fonction reorg() sur un élément jQuery.
 * Les rotations sont déclenchées à l'aide d'événements, qui peuvent être
 * décrits dans l'attribut data-reorg-action de tous les éléments HTML
 * possédant déjà l'attribut data-reorg-trigger.
 * Les deux actions/événements utilisables sont "rewind" et "forward".
 * 
 * Principe de fonctionnement :
 * 
 * <div data-reorg-trigger="toto" data-reorg-action="rewind"> En arrière </div>
 * <ul data-reorg-target="toto">
 *   <li> 1 </li>
 *   <li> 2 </li>
 *   <li> 3 </li>
 *   <li> 4 </li>
 * </ul>
 * <div data-reorg-trigger="toto" data-reorg-action="forward"> En avant </div>
 * 
 * => Au départ, la liste sera disposée ainsi :
 * 1 2 3 4
 * 
 * => En cliquant sur "En arrière", la liste sera disposée ainsi :
 * 4 1 2 3
 * 
 * => En cliquant à nouveau sur "En arrière", la liste sera disposée ainsi :
 * 3 4 1 2
 * 
 * => En cliquand sur "En avant", en tenant compte de nos deux actions
 * précédentes, la liste sera disposée ainsi :
 * 4 1 2 3
 * 
 * => De nouveau, on clique sur "En avant", la liste revient dans son ordre
 * de départ :
 * 1 2 3 4
 */

(function($) {
	
	$.fn.reorg = function() {
		return this.each(function() {
			var $t = $(this);
			// principe : on clone l'élément à replacer dans une variable
			// on le supprime du flux HTML, et on le rajoute à l'opposé d'où il
			// se trouvait.
			$t.on('rewind', function() {
				$element = $t.children().last().clone();
				$t.children('*:last-child').remove();
				$t.prepend($element);
			});
			$t.on('forward', function() {
				$element = $t.children().first().clone();
				$t.children('*:first-child').remove();
				$t.append($element);
			});
		});
	};
	
	$(window).load(function() {
		// Par défaut, tous les éléments comportant l'attribut HTML
		// data-reorg-target obtiennent le comportement de reorg.js, il reste
		// cependant possible d'utiliser reorg.js en appelant la méthode
		// reorg() sur un élément jQuery.
		$('[data-reorg-target]').reorg();

		// Par défaut, tous les éléments comportant l'attribut HTML 
		// data-reorg-trigger obtiennent sont affectés à des événements
		// dépendant de ce qui est décrit dans l'attribut data-reorg-action. 
		// Pour le moment seulement deux événéments possible : rewind et 
		// forward.
		$('[data-reorg-trigger]').click(function() {
			var $t = $(this);
			var action = $t.attr('data-reorg-action');
			var target = $t.attr('data-reorg-trigger');
			$('[data-reorg-target=' + target + ']').trigger(action);		
		});		

		// A l'aide du plugin swipe, on gère les gestes tactiles horizontaux 
		// (traitement spécifique qui devrait être dans un autre fichier .js)
		$('[data-reorg-target], [data-reorg-target] *').swipe({
			swipe: function(e, dir, dist, dur, fingc) {
				var $t = $(this);
				var target = $t.attr('data-reorg-target') || $t.parents('[data-reorg-target]').attr('data-reorg-target');
				console.log(target);
				
				if (dir === 'left') {
					$('[data-reorg-target=' + target + ']').trigger('forward');
				} else if (dir === 'right') {
					$('[data-reorg-target=' + target + ']').trigger('rewind');
				}
			}
		});
		
	});
})(jQuery);