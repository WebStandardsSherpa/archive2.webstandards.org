//
// Author: various, but primarily Eric Costello
// Maintainers: David Eisenberg, Steven Champeon
// Release: 1.0
// $RCSfile: wsp.js,v $
// $Revision: 1.20 $
// $Date: 2002/08/13 02:10:38 $
//

// writes nav4-specific stylesheet
if (document.layers) { document.writeln('<link rel="stylesheet" type="text/css" href="/inc/css/wsp_ns4_only.css" />')
}

// cookie functions modified from code found at Alexei Kourbatov's
// http://javascripter.net/faq/
function setCookie(name,value) {
 document.cookie = name + "=" + escape(value)
  + ";path=/;expires=12/26/2020";
}
	
function readCookie(name) {
 var c = "" + document.cookie;
 var i = c.indexOf(name);
 if ((i == -1) || (name == "")) {
  return "";
 }
 var l = c.indexOf(';',i);
 if (l == -1) {
  l = c.length;
 }
 return unescape(c.substring(i+name.length+1,l));
}


// from http://javascriptworld.com/scripts/chap09/script02.html

if (document.layers) {
 origWidth = window.innerWidth;
 origHeight = window.innerHeight;
}

function resizeFix() {
 if (document.layers) {
  if ((window.innerWidth != origWidth) ||
      (window.innerHeight != origHeight)) {
   window.location.reload()
  }
 }
}

window.onresize = resizeFix;
window.onload = init;

function init() {
 initRollOvers();
// writeControls();
// writeLinkControls(); 
// updateExternalLinks();
}

function initRollOvers() {
 var logo;
 if (document.getElementById) {
  logo = document.getElementById('logo');
 } else {
  return false;
 }
 /*if (document.all) {*/
  logo.onmouseover = swapI;
  logo.onmouseout = swapI;
 /*} else {
  logo.addEventListener('mouseover',swapI,false);
  logo.addEventListener('mouseout',swapI,false);
 }*/
  return true;
}

function swapI(e) {
 e = (e) ? e : event;
 thisI = (e.srcElement) ? e.srcElement : e.target;
 if((thisI.status != 'a') &&
    (thisI.status != 'p')) {
  thisI.src = '/img/' + thisI.id + '_a.gif';
  thisI.status='a';
 } else if(thisI.status != 'p') {
  thisI.src='/img/'+thisI.id+'.gif';
  thisI.status='';
 }
}
