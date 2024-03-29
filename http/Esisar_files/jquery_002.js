/*! jQuery ellipsis - v1.1.0 - 2013-11-26
* https://github.com/STAR-ZERO/jquery-ellipsis
* Copyright (c) 2013 Kenji Abe; Licensed MIT */
!function(a){a.fn.ellipsis=function(b){var c={row:1,onlyFullWords:!1,"char":"...",callback:function(){},position:"tail"};return b=a.extend(c,b),this.each(function(){var c=a(this),d=c.text(),e=d,f=e.length,g=c.height();c.text("a");var h=parseFloat(c.css("lineHeight"),10),i=c.height(),j=h>i?h-i:0,k=j*(b.row-1)+i*b.row;if(k>=g)return c.text(d),b.callback.call(this),void 0;var l=1,m=0,n=d.length;if("tail"===b.position){for(;n>l;)m=Math.ceil((l+n)/2),c.text(d.slice(0,m)+b["char"]),c.height()<=k?l=m:n=m-1;d=d.slice(0,l),b.onlyFullWords&&(d=d.replace(/[\u00AD\w\uac00-\ud7af]+$/,"")),d+=b["char"]}else if("middle"===b.position){for(var o=0;n>l;)m=Math.ceil((l+n)/2),o=Math.max(f-m,0),c.text(e.slice(0,Math.floor((f-o)/2))+b["char"]+e.slice(Math.floor((f+o)/2),f)),c.height()<=k?l=m:n=m-1;o=Math.max(f-l,0);var p=e.slice(0,Math.floor((f-o)/2)),q=e.slice(Math.floor((f+o)/2),f);b.onlyFullWords&&(p=p.replace(/[\u00AD\w\uac00-\ud7af]+$/,"")),d=p+b["char"]+q}c.text(d),b.callback.call(this)}),this}}(jQuery);

(function($) { $(window).load(function() {
	$("*[data-ellipsis]").ellipsis({
		rows: $(this).attr('data-ellipsis-rows'),
		onlyFullWords: $(this).attr('data-ellipsis-full-words') === 'true',
		char: $(this).attr('data-ellipsis') || '…',
		callback: function() {
			console.log('called');
		}
	});
});})(jQuery);