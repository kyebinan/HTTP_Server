
COOKIES_CNIL={messages:{accepted:"Vous avez accepté le dépôt de cookies",refused:"Vous avez refusé le dépôt de cookies",welcome:"Ce site utilise Google Analytics à des fins de mesure d'audience.",welcome_accepted:"Vous avez donné votre consentement pour le dépôt de cookies de mesure d'audience dans votre navigateur.",welcome_refused:"Vous vous êtes opposé au dépôt de cookies de mesure d'audience dans votre navigateur.",button:{accept_short:"J'accepte",refuse_short:"Je refuse"}}};var CookieCNIL=CookieCNIL||(function(){var gaProperty,disableStr,enSavoirPlus,firstCall=false;function addEvent(elem,event,fn){if(elem&&event&&fn){if(elem.addEventListener){elem.addEventListener(event,fn,false);}else{elem.attachEvent("on"+event,function(){return(fn.call(elem,window.event));});}}}
function getCookieExpireDate(){var cookieTimeout=33696000000;var date=new Date();date.setTime(date.getTime()+cookieTimeout);var expires="; expires="+date.toGMTString();return expires;}
function checkFirstVisit(){var consentCookie=getCookie('hasConsent');if(!consentCookie){return true;}}
function showBanner(){var bodytag=document.getElementsByTagName('body')[0];var div=document.createElement('div');div.setAttribute('id','cookie-banner');div.setAttribute('width','70%');div.innerHTML='<div class="banner_cookie">'+COOKIES_CNIL.messages.welcome+'<span class="banner_cookie__buttons">'+enSavoirPlus+'<a class="banner_cookie__button--accept" href="javascript:CookieCNIL.accept()">'+COOKIES_CNIL.messages.button.accept_short+'</a> <a class="banner_cookie__button--refuse" href="javascript:CookieCNIL.decline()">'+COOKIES_CNIL.messages.button.refuse_short+'</a></span></div>';bodytag.insertBefore(div,bodytag.firstChild);document.getElementsByTagName('body')[0].className+=' cookie-banner';createInformAndAskDiv();}
function closeMessage(){document.getElementsByTagName('body')[0].removeChild(document.getElementById('cookie-banner'));}
function getCookie(NameOfCookie){if(document.cookie.length>0){begin=document.cookie.indexOf(NameOfCookie+"=");if(begin!=-1){begin+=NameOfCookie.length+1;end=document.cookie.indexOf(";",begin);if(end==-1){end=document.cookie.length;}
return unescape(document.cookie.substring(begin,end));}}
return null;}
function getInternetExplorerVersion(){var rv=-1;if(navigator.appName=='Microsoft Internet Explorer'){var ua=navigator.userAgent;var re=new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");if(re.exec(ua)!=null){rv=parseFloat(RegExp.$1);}}else if(navigator.appName=='Netscape'){var ua=navigator.userAgent;var re=new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");if(re.exec(ua)!=null){rv=parseFloat(RegExp.$1);}}
return rv;}
function askDNTConfirmation(){var r=confirm("La signal DoNotTrack de votre navigateur est activé, confirmez vous activer \
                        la fonction DoNotTrack?")
return r;}
function notToTrack(){if((navigator.doNotTrack&&(navigator.doNotTrack=='yes'||navigator.doNotTrack=='1'))||(navigator.msDoNotTrack&&navigator.msDoNotTrack=='1')){var isIE=(getInternetExplorerVersion()!=-1)
if(!isIE){return true;}
return false;}}
function isToTrack(){if(navigator.doNotTrack&&(navigator.doNotTrack=='no'||navigator.doNotTrack==0)){return true;}}
function clearCookie(name,domain,path){try{function Get_Cookie(check_name){var a_all_cookies=document.cookie.split(';'),a_temp_cookie='',cookie_name='',cookie_value='',b_cookie_found=false;for(i=0;i<a_all_cookies.length;i++){a_temp_cookie=a_all_cookies[i].split('=');cookie_name=a_temp_cookie[0].replace(/^\s+|\s+$/g,'');if(cookie_name==check_name){b_cookie_found=true;if(a_temp_cookie.length>1){cookie_value=unescape(a_temp_cookie[1].replace(/^\s+|\s+$/g,''));}
return cookie_value;break;}
a_temp_cookie=null;cookie_name='';}
if(!b_cookie_found){return null;}}
if(Get_Cookie(name)){var domain=domain||document.domain;var path=path||"/";document.cookie=name+"=; expires="+new Date(0)+"; domain="+domain+"; path="+path;}}
catch(err){console.log(err);}}
function getDomains(){var domain=document.domain,domains=[];if(domain&&domain[0]!='.'){domain='.'+domain;}
while(domain){domains.push(domain);var nextDotIndex=domain.indexOf('.');if(nextDotIndex==0){domain=domain.substring(1,domain.length);domains.push(domain);nextDotIndex=domain.indexOf('.');}
if(nextDotIndex>0){domain=domain.substring(nextDotIndex,domain.length);}else{domain=null;}}
return domains;}
function deleteAnalyticsCookies(){var path="/";var domains=getDomains();var cookieNames=["__utma","__utmb","__utmc","__utmt","__utmv","__utmz","_ga","_gat"]
for(var i=0;i<cookieNames.length;i++){for(var j=0;j<domains.length;j++){clearCookie(cookieNames[i],domains[j],path);}}}
function createInformAndAskDiv(){var bodytag=document.getElementsByTagName('body')[0];var div=document.createElement('div');div.setAttribute('id','inform-and-ask');div.style.width=window.innerWidth+"px";div.style.height=window.innerHeight+"px";div.style.display="none";div.style.position="fixed";div.innerHTML='<div style="width: 300px; background-color: white; repeat scroll 0% 0% white;\
        border: 1px solid #cccccc; padding :10px 10px;text-align:center; position: fixed; top:30px; \
        left:50%; margin-top:0px; margin-left:-150px; z-index:100000; opacity:1" id="inform-and-consent">\
        <div><span><b>Les cookies Google Analytics</b></span></div><br><div>Ce site utilise  des cookies\
        de Google Analytics,    ces cookies nous aident à  identifier le contenu qui vous interesse le plus\
        ainsi qu\'à  repérer certains dysfonctionnements. Vos données de navigations sur ce site sont\
        envoyées à  Google Inc</div><div style="padding :10px 10px;text-align:center;"><button\
        style="margin-right:50px;text-decoration:underline;" name="S\'opposer" onclick="tagAnalyticsCNIL.CookieConsent.gaOptout();\
        tagAnalyticsCNIL.CookieConsent.hideInform();" id="optout-button" >S\'opposer</button>\
        <button style="text-decoration:underline;" name="cancel" onclick="tagAnalyticsCNIL.CookieConsent.hideInform()"\
        >Accepter</button></div></div>';bodytag.insertBefore(div,bodytag.firstChild);}
function isClickOnOptOut(evt){return(evt.target.parentNode.id=='cookie-banner'||evt.target.parentNode.parentNode.id=='cookie-banner'||evt.target.id=='optout-button'||evt.target.id=='more-informations')}
function consent(evt){if(!isClickOnOptOut(evt)){if(!clickprocessed){evt.preventDefault();document.cookie='hasConsent=true; '+getCookieExpireDate()+' ; path=/';callGoogleAnalytics();clickprocessed=true;window.setTimeout(function(){evt.target.click();},1000)}}}
function callGoogleAnalytics(){if(firstCall){return;}else{firstCall=true;}
var _gaq=_gaq||[];_gaq.push(['_setAccount',gaProperty]);_gaq.push(['_trackPageview']);(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create',gaProperty,'auto');ga('send','pageview');}
return{init:function(args,more){gaProperty=args;enSavoirPlus=more;disableStr='ga-disable-'+args;},gaOptin:function(){document.cookie=disableStr+'=false;'+getCookieExpireDate()+' ; path=/';document.cookie='hasConsent=true;'+getCookieExpireDate()+' ; path=/';var div=document.getElementById('cookie-banner');if(div!=null){div.innerHTML='<div class="banner_cookie__accepted">'+COOKIES_CNIL.messages.welcome_accepted+'<span class="icon icon-close banner_cookie__close"></span></div>'
setTimeout(function(){div.style="display :none;";},4000);}
var close=document.querySelector('.banner_cookie__close');addEvent(close,'click',closeMessage);window[disableStr]=false;},gaOptout:function(){document.cookie=disableStr+'=true;'+getCookieExpireDate()+' ; path=/';document.cookie='hasConsent=false;'+getCookieExpireDate()+' ; path=/';var div=document.getElementById('cookie-banner');if(div!=null){div.innerHTML='<div class="banner_cookie__refused">'+COOKIES_CNIL.messages.welcome_refused+'<span class="icon icon-close banner_cookie__close"></span></div>';setTimeout(function(){div.style="display :none;";},4000);}
var close=document.querySelector('.banner_cookie__close');addEvent(close,'click',closeMessage);window[disableStr]=true;deleteAnalyticsCookies();},showInform:function(){var div=document.getElementById("inform-and-ask");div.style.display="";},hideInform:function(){var div=document.getElementById("inform-and-ask");div.style.display="none";var div=document.getElementById("cookie-banner");div.style.display="none";},decline:function(){this.gaOptout();},accept:function(){this.gaOptin();},hasConsent:function(){return'true'===getCookie('hasConsent');},launchWithConsent:function(){var consentCookie=getCookie('hasConsent');clickprocessed=false;if(!consentCookie){if(notToTrack()){tagAnalyticsCNIL.CookieConsent.gaOptout()
alert("You've enabled DNT, we're respecting your choice")}else{if(isToTrack()){consent();}else{if(window.addEventListener){window.addEventListener("load",showBanner,false);document.addEventListener("click",consent,false);}else{window.attachEvent("onload",showBanner);document.attachEvent("onclick",consent);}}}}else{if(document.cookie.indexOf('hasConsent=false')>-1){window[disableStr]=true;}else{window[disableStr]=false;}
callGoogleAnalytics();}}}}());