
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"650",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__d",
      "convert_case_to":1,
      "vtp_elementSelector":"body \u003E header \u003E div.bottom \u003E div \u003E div \u003E h1 \u003E a",
      "vtp_selectorType":"CSS"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",1],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*\\\/es\\\/$","value","portada principal"],["map","key",".*\\\/global\\\/$","value","portada principal"],["map","key",".*\\\/fotos\\\/$","value","portada fotos"],["map","key",".*\\\/videos\\\/$","value","portada videos"],["map","key",".*\\\/fotos\\\/.*\\\/$","value",["macro",2]],["map","key",".*\\\/videos\\\/.*\\\/$","value",["macro",2]],["map","key",".*\\\/entre-todos\\\/$","value","entre todos"],["map","key",".*\\\/temas\\\/.*","value","temas"],["map","key",".*\\\/personajes\\\/.*","value","personajes"],["map","key",".*\\\/lugares\\\/.*","value","lugares"],["map","key",".*\\\/organismos\\\/.*","value","organismo"],["map","key",".*\\\/historias\/.*","value","historias"],["map","key",".*\\\/cata-mayor\/.*","value","cata mayor"],["map","key",".*\\\/ultimas\\-noticias\\\/$","value","ultimas noticias"],["map","key",".*\\\/sorteos\/.*","value","sorteos"],["map","key",".*\\\/cuore\\\/.*","value","cuore"]]
    },{
      "function":"__v",
      "convert_null_to":["macro",3],
      "convert_undefined_to":["macro",3],
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conSection"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return contentGroupSection=\"\"==",["escape",["macro",4],8,16],"||void 0==",["escape",["macro",4],8,16],"?",["escape",["macro",5],8,16],":",["escape",["macro",4],8,16],"}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"diarioinformacion.com informacion.es lne.es levante-emv.com farodevigo.es laprovincia.es diariodemallorca.es laopinioncoruna.es diariodeibiza.es laopiniondemalaga.es diaridegirona.cat laopiniondemurcia.es laopiniondezamora.es mallorcazeitung.es superdeporte.es regio7.cat emporda.info eldia.es compramejor.es neomotor.com autohebdosport.es campusfcbarcelona.com castellonfire.com cataladelany.cat cochescastellon.com codigonuevo.com cordobilla.com cuore.es stilo.es diariocordoba.com diariolagrada.com digitalcamera.es elperiodico.cat elperiodico.com elperiodicodearagon.com elperiodicodelazulejo.es elperiodicoextremadura.com elperiodicomediterraneo.com entradascastellon.com grupozeta.es lacronicabadajoz.com revistacuore.com sport.es woman.es zetagestion.com zetakiosko.com zetaventure.com laloterianavidad.com loterianadal.cat premios-cine.com canwerun.com 40prensaiberica.es prensaiberica360.es ewoman.es tourgestionandohijos.com buscandorespuestas.com cuidamostusalud.es tendencias21.net nomadiantravel.com premiosin4.es talentojovencv.com microrrelatosfalleros.com productosdenuestratierra.com guiaturismocv.com galiciaenvinos.es faroeduca.es velagalicia.es farodaescola.es faroimpulsa.es restaurantesdemallorca.com mallorcaliv.se mallorcapremiumreview.com manjaria.es businessdemallorca.es ticktisimo.com elturismoquequeremos.com tourbajamar.com tourinmoforum.com farogaming.es eventosprensaiberica.es premiosinnobankia.com becontent.es prensaiberica.es renr.es compramejormx.com compramejor.us cazadoresofertas.com iberempleos.es iberpisos.es tucasa.com cambalache.es valencia.esmart.com.es 55mejoresrestaurantes.com urbanvlc.com levantetv.es la977.com esquicatalunya.cat adoptaunpelut.cat tourcityhub.com restaurantsaufmallorca.com carreraspopularesasturias.com premiosprincesa.es albergaria.es costabravagirona.cat grupoeldia.com terramoll.es institutomoll.com informaciontv.es fotosantiguasdemallorca.com clubdiariodemallorca.es diariodeibiza.com revistahistoriayarte.es albaeditorial.es revistaconestilo.com\".split(\" \");\nreturn b.filter(function(a){if(-1===document.location.hostname.indexOf(a))return a}).join(\",\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"newPageName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",9],8,16],".replace(\/.*\\\/\\\/[^\\\/]*\/,\"\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"newPageTitle"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(f){var g=f.get(\"sendHitTask\");f.set(\"sendHitTask\",function(c){try{var d=c.get(\"hitPayload\"),b=d.replace(\/(^\\?)\/,\"\").split(\"\\x26\").map(function(a){return a=a.split(\"\\x3d\"),this[a[0]]=decodeURIComponent(a[1]),this}.bind({}))[0];d=\/^cd(\\d+)$\/;for(var e in b)e.match(d)\u0026\u0026\"\"===b[e]\u0026\u0026(b[e]=\"N\/A\");b.cd8=b.cid;c.set(\"hitPayload\",Object.keys(b).map(function(a){return a+\"\\x3d\"+encodeURIComponent(b[a])}).join(\"\\x26\"),!0);g(c)}catch(a){g(c)}})}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"campaignName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"campaignSource"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"campaignMedium"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hComment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hShareFacebook"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hShareTwitter"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hShareGoogle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hShareLinkedin"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hSharePinterest"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hShareEmail"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hSharePrint"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hSendLetter"
    },{
      "function":"__uv"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dl - hDownDoc"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hEngagementTotal"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"busquedasSinResultados"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hVideoStart"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hVideoComplete"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hShareWhatsapp"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hShareTelegram"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hShareFacebookMessenger"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hVideoStartContent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userInfo"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hierarchy_1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hierarchy_2"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hierarchy_3"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conTags"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"CID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conAuthor"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conPerson"
    },{
      "function":"__k",
      "convert_null_to":"undefined",
      "convert_undefined_to":"undefined",
      "vtp_decodeCookie":true,
      "vtp_name":"previousPage"
    },{
      "function":"__k",
      "convert_null_to":"undefined",
      "convert_undefined_to":"undefined",
      "vtp_decodeCookie":true,
      "vtp_name":"previousScroll"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conTecPlatform"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"tecAdblock"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pubTarget"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.hostname.split(\".\").slice(-2).join(\".\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conMod"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conIdpage"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conPub"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return newContentSection=\"\"==",["escape",["macro",4],8,16],"||\"N\/A\"==",["escape",["macro",4],8,16],"?",["escape",["macro",3],8,16],":",["escape",["macro",4],8,16],"}catch(a){}})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",54],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*\\.grupozeta.es.*","value","corporativos"],["map","key",".*\\.zetagestion.com.*","value","corporativos"],["map","key",".*\\.redaragon.com.*","value","regionales"],["map","key",".*\\.codigonuevo.com.*","value","nativos"],["map","key",".*\\.zetakiosko.com.*","value","corporativos"],["map","key",".*\\.campusfcbarcelona.com.*","value","sport"],["map","key",".*\\.elperiodico.cat.*","value","elperiodico"],["map","key",".*viajar.elperiodico.com.*","value","revistas"],["map","key",".*\\.elperiodico.com.*","value","elperiodico"],["map","key",".*\\.cataladelany.cat.*","value","elperiodico"],["map","key",".*\\.diariocordoba.com.*","value","regionales"],["map","key",".*\\.elperiodicoextremadura.com.*","value","regionales"],["map","key",".*\\.elperiodicomediterraneo.com.*","value","regionales"],["map","key",".*\\.lacronicabadajoz.com.*","value","regionales"],["map","key",".*\\.elperiodicodearagon.com.*","value","regionales"],["map","key",".*\\.diariolagrada.com.*","value","nativos"],["map","key",".*\\.elperiodicodelazulejo.es.*","value","regionales"],["map","key",".*\\.cordobilla.com.*","value","regionales"],["map","key",".*\\.enciclopedia-aragonesa.com.*","value","regionales"],["map","key",".*\\.sport.es.*","value","sport"],["map","key",".*\\.digitalcamera.es.*","value","revistas"],["map","key",".*\\.woman.es.*","value","revistas"],["map","key",".*\\.autohebdosport\\.es.*","value","revistas"],["map","key",".*\\.cuorestilo.*","value","revistas"],["map","key",".*\\.stilo.es.*","value","revistas"],["map","key",".*\\.zetaventure.com.*","value","nativos"],["map","key",".*\\.cuore.es.*","value","revistas"]]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__d",
      "convert_case_to":1,
      "vtp_elementSelector":"body \u003E header \u003E div.bottom \u003E div \u003E div \u003E h1 \u003E span",
      "vtp_selectorType":"CSS"
    },{
      "function":"__c",
      "vtp_value":"(not set)"
    },{
      "function":"__d",
      "convert_case_to":1,
      "convert_null_to":["macro",58],
      "convert_undefined_to":["macro",58],
      "vtp_elementSelector":"h1",
      "vtp_selectorType":"CSS"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",1],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*\\\/es\\\/$","value","portada catalunya"],["map","key",".*\\\/global\\\/$","value","portada global"],["map","key",".*\\\/fotos\\\/$","value","fotos"],["map","key",".*\\\/videos\\\/$","value","videos"],["map","key",".*\\\/fotos\\\/.*\\\/$|.*\\\/videos\\\/.*\\\/$","value",["macro",57]],["map","key",".*\\\/entre-todos\\\/$","value","entre todos"],["map","key",".*\\\/temas\\\/.*|.*\\\/personajes\\\/.*|.*\\\/lugares\\\/.*|.*\\\/organismos\\\/.*|.*\\\/historias\\\/.*","value",["macro",59]],["map","key",".*\\\/cata-mayor\\\/$","value","cata mayor"],["map","key",".*\\\/actualidad-gastronomica\\\/$","value","actualidad gastronomica"],["map","key",".*\\\/ultimas\\-noticias\\\/$","value","ultimas noticias"],["map","key",".*\\\/sorteos\/.*","value",["macro",59]]]
    },{
      "function":"__v",
      "convert_null_to":["macro",60],
      "convert_undefined_to":["macro",60],
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conSubsection"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return newContentSubsection=\"\"==",["escape",["macro",61],8,16],"||\"N\/A\"==",["escape",["macro",61],8,16],"?",["escape",["macro",60],8,16],":",["escape",["macro",61],8,16],"}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return Date.now().toString()})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conTime"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userState"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"siteVersion"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"multimediaType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conMultimedia"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"prodType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchTerm"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"typeError"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hierarchy_4"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conFront"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conPayment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conRelArticle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conAgency"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conRelOpinion"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hierarchy_5"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"numOfAdPositions"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"numOfAdImpresions"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"typeOfAd"
    },{
      "function":"__ctv"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return navigator.userAgent})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",84],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","iPhone","value","mobile iOS"],["map","key","iPad","value","tablet iOS"],["map","key","^(?=.*Android)(?!.*Mobile).*","value","tablet android"],["map","key","^(?=.*Android)(?=.*Mobile).*","value","mobile android"],["map","key","^(?!.*BlackBerry)(?!.*iPad)(?!.*Android)(?!.*tablet)(?!.*Mobile).*","value","desktop"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecPayment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecDelivery"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecSubscriptions"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hierarchy_6"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.querySelector(\"link[rel\\x3d'canonical']\").href})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"edition"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",42],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","jose.*antonio.*zarzalejos|j\\..*a\\..*z\\.","value","global"],["map","key","jordi.*sevilla|j\\..*s\\.","value","global"],["map","key","miriam.*ruiz|m\\..*r\\.","value","global"],["map","key","rebeca.*queimaliños|r\\..*q\\.","value","global"],["map","key","juan.*jose.*fernandez|j\\..*j\\..*fernandez|j\\..*j\\..*f\\.","value","global"],["map","key","luis.*rendueles|l\\..*r\\.","value","global"],["map","key","vanesa.*lozano|v\\..*l\\.","value","global"],["map","key","mamen.*hidalgo|m\\..*h\\.","value","global"],["map","key","maria.*aragon|m\\..*a\\.","value","global"],["map","key","angel.*rull|a\\.rull|a\\.r\\.","value","global"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=document.location.hostname,b=document.location.pathname;return conprodEdition=\"www.elperiodico.com\"==a\u0026\u0026\"\/es\/global\/\"==b||\"global\"==",["escape",["macro",92],8,16],"?\"global\":\"catalunya\"}catch(c){return conprodEdition}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoAutor"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[],b={1:\"sport\",2:\"elperiodico\",3:\"lne\",4:\"levante-emv\",5:\"informacion\",5:\"informacion\",6:\"farodevigo\",7:\"woman\",8:\"superdeporte\",9:\"laprovincia\",10:\"laopiniondemurcia\",11:\"diariodemallorca\",12:\"cuore\",13:\"elperiodicodearagon\",14:\"laopiniondemalaga\",15:\"eldia\",16:\"diaridegirona\",17:\"diariodeibiza\",18:\"diariodecordoba\",19:\"elperiodicomediterraneo\",20:\"laopiniondezamora\",21:\"laopinioncoruna\",22:\"elperiodicoextremadura\",23:\"codigonuevo\",24:\"viajar\",25:\"regio7\",26:\"mallorcazeitung\",\n27:\"laloterianavidad\",28:\"stilo\",30:\"labolsadelcorredor\",31:\"emporda\",32:\"diariolagrada\",33:\"lacronicabadajoz\",34:\"autohebdosport\",35:\"digitalcamera\",36:\"loterianadal\",37:\"castellonfire\",38:\"carreraspopularesasturias\",39:\"elperiodicodelazulejo\",40:\"albergaria\",41:\"zetakiosko\",42:\"adoptaunpelut\",43:\"cuidamostusalud\",44:\"galiciaenvinos\",45:\"farodaescola\",46:\"velagalicia\",47:\"elturismoquequeremos\",48:\"guapisimas\",49:\"cazadoresofertas\",50:\"tourcityhub\",51:\"premioscine\",52:\"manjaria\",53:\"presstucasa\",\n54:\"mejorcoche\",55:\"neomotor\",56:\"iberempleos\",57:\"iberpisos\",58:\"buscandorespuestas\",59:\"tendencias21\",60:\"elperiodicodecatalunya\"};JSON.parse(localStorage._mo_s)._mo_s.forEach(function(c){b[c]\u0026\u0026a.push(b[c])});return a.join(\",\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conSource"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userIdUnified"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userRegisterDate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userLastLogin"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userTypeUnified"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userTypeUnifiedHit"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"accessType"
    },{
      "function":"__j",
      "convert_null_to":"n\/a",
      "convert_undefined_to":"n\/a",
      "convert_true_to":"oculta",
      "convert_false_to":"visible",
      "vtp_name":"document.hidden"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conWords"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003Cdocument.getElementsByClassName(\"carousel-articles\").length\u0026\u0026\"noticia\"===",["escape",["macro",5],8,16],"||\"directo\"===",["escape",["macro",5],8,16],"?\"true\":\"false\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.location.href.replace([document.location.origin,document.location.pathname].join(\"\"),\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return localStorage.getItem(\"_mo_id\")})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",54],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*\\.autohebdosport\\.es.*","value","autohebdo"],["map","key",".*\\.cordobilla\\.com.*","value","cordoba"],["map","key",".*\\.diariocordoba\\.com.*","value","cordoba"],["map","key",".*\\.diariolagrada\\.com.*","value","la grada"],["map","key",".*\\.elperiodicodearagon\\.com.*","value","el periodico de aragon"],["map","key",".*\\.elperiodicodelazulejo\\.es.*","value","el periodico del azulejo"],["map","key",".*\\.elperiodicoextremadura\\.com.*","value","el periodico de extremadura"],["map","key",".*\\.elperiodicomediterraneo\\.com.*","value","el periodico mediterraneo"],["map","key",".*\\.lacronicabadajoz\\.com.*","value","la cronica de badajoz"],["map","key",".*\\.sport\\.es.*","value","sport"],["map","key",".*\\.stilo\\.es.*","value","stilo"],["map","key",".*\\.elperiodico\\.cat.*","value","el periodico"],["map","key",".*\\.elperiodico\\.com.*","value","el periodico"],["map","key",".*\\.woman\\.es.*","value","woman"],["map","key",".*\\.cuore\\.es.*","value","cuore"],["map","key",".*\\.castellonfire\\.com.*","value","el periodico mediterraneo"],["map","key",".*\\.codigonuevo\\.com.*","value","codigo nuevo"]]
    },{
      "function":"__jsm",
      "convert_true_to":"true",
      "convert_false_to":"false",
      "vtp_javascript":["template","(function(){return(window.Didomi?void 0===window.Didomi.getUserConsentStatusForVendor(\"c:ga360\")?\"-\":!0===window.Didomi.getUserConsentStatusForVendor(\"c:ga360\")?\"1\":\"0\":\"-\")+\"|\"+(window.Didomi?void 0===window.Didomi.getUserConsentStatusForVendor(\"google\")?\"-\":!0===window.Didomi.getUserConsentStatusForVendor(\"google\")?\"1\":\"0\":\"-\")})();"]
    },{
      "function":"__j",
      "vtp_name":"Notification.permission"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(window.cmp_config\u0026\u0026window.cmp_config.group2?window.cmp_config.group2:\"-\")+\"|\"+(window.Didomi?window.__tcfapi\u0026\u0026window.__cmp?\"3\":window.__tcfapi?\"2\":window.__cmp?\"1\":\"0\":\"-\")+\"|\"+(window.Didomi?!0===window.Didomi.getUserConsentStatusForVendor(\"google\")?\"1\":\"0\":\"-\")})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",54],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"UA-111275328-1",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*\\.autohebdosport\\.es.*","value","UA-76538257-1"],["map","key",".*\\.stilo\\.es.*","value","UA-76538257-1"],["map","key",".*\\.woman\\.es.*","value","UA-76538257-1"],["map","key",".*\\.elperiodico\\.com.*","value","UA-76538257-1"],["map","key",".*\\.elperiodico\\.cat.*","value","UA-76538257-1"],["map","key",".*\\.sport\\.es.*","value","UA-76538257-1"],["map","key",".*\\.sport-english\\.com.*","value","UA-76538257-1"],["map","key",".*\\.digitalcamera\\.es.*","value","UA-76538257-1"],["map","key",".*\\.lacronicabadajoz.com.*","value","UA-76538257-1"],["map","key",".*\\.enciclopedia-aragonesa.com.*","value","UA-76538257-1"],["map","key",".*\\.elperiodicomediterraneo.com.*","value","UA-76538257-1"],["map","key",".*\\.elperiodicoextremadura.com.*","value","UA-76538257-1"],["map","key",".*\\.elperiodicodelazulejo.es.*","value","UA-76538257-1"],["map","key",".*\\.elperiodicodearagon.com.*","value","UA-76538257-1"],["map","key",".*\\.diariolagrada.com.*","value","UA-76538257-1"],["map","key",".*\\.diariocordoba.com.*","value","UA-76538257-1"],["map","key",".*\\.cordobilla.com.*","value","UA-76538257-1"],["map","key",".*\\.cochescastellon.com.*","value","UA-76538257-1"],["map","key",".*\\.grupozeta.es.*","value","UA-76538257-1"],["map","key",".*\\.zetagestion.com.*","value","UA-76538257-1"],["map","key",".*\\.zetakiosko.com.*","value","UA-76538257-1"],["map","key",".*\\.zetaventure.*","value","UA-76538257-1"],["map","key",".*\\.codigonuevo.com.*","value","UA-76538257-1"],["map","key",".*\\.cuore\\.es.*","value","UA-76538257-1"],["map","key",".*\\.castellonfire\\.com.*","value","UA-76538257-1"],["map","key",".*\\.revistaviajar\\.es.*","value","UA-76538257-1"],["map","key",".*\\.redextremadura\\.com.*","value","UA-76538257-1"],["map","key",".*\\.revistacuore.com\\.com.*","value","UA-76538257-1"],["map","key",".*\\.cuorestilo\\.com.*","value","UA-76538257-1"],["map","key",".*\\.interviu\\.es.*","value","UA-76538257-1"],["map","key",".*\\.tiempodehoy\\.com.*","value","UA-76538257-1"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",6]]],
      "vtp_autoLinkDomains":["macro",7],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","userId","value",["macro",8]],["map","fieldName","page","value",["macro",10]],["map","fieldName","title","value",["macro",11]],["map","fieldName","allowLinker","value","true"],["map","fieldName","customTask","value",["macro",12]],["map","fieldName","useAmpClientId","value","true"],["map","fieldName","campaignName","value",["macro",13]],["map","fieldName","campaignSource","value",["macro",14]],["map","fieldName","campaignMedium","value",["macro",15]]],
      "vtp_metric":["list",["map","index","1","metric",["macro",16]],["map","index","2","metric",["macro",17]],["map","index","3","metric",["macro",18]],["map","index","4","metric",["macro",19]],["map","index","5","metric",["macro",20]],["map","index","6","metric",["macro",21]],["map","index","7","metric",["macro",22]],["map","index","8","metric",["macro",23]],["map","index","9","metric",["macro",24]],["map","index","10","metric",["macro",25]],["map","index","11","metric",["macro",26]],["map","index","12","metric",["macro",27]],["map","index","13","metric",["macro",25]],["map","index","14","metric",["macro",28]],["map","index","15","metric",["macro",29]],["map","index","16","metric",["macro",30]],["map","index","17","metric",["macro",31]],["map","index","18","metric",["macro",32]],["map","index","19","metric",["macro",33]],["map","index","20","metric",["macro",34]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",35]],["map","index","2","dimension",["macro",8]],["map","index","3","dimension",["macro",36]],["map","index","4","dimension",["macro",37]],["map","index","5","dimension",["macro",38]],["map","index","6","dimension",["macro",39]],["map","index","7","dimension",["macro",40]],["map","index","8","dimension",["macro",41]],["map","index","9","dimension",["macro",42]],["map","index","10","dimension",["macro",43]],["map","index","11","dimension",["macro",44]],["map","index","12","dimension",["macro",45]],["map","index","13","dimension",["macro",46]],["map","index","14","dimension",["macro",47]],["map","index","15","dimension",["macro",48]],["map","index","16","dimension",["macro",49]],["map","index","17","dimension",["macro",50]],["map","index","18","dimension",["macro",51]],["map","index","19","dimension",["macro",52]],["map","index","20","dimension",["macro",53]],["map","index","21","dimension",["macro",55]],["map","index","22","dimension",["macro",56]],["map","index","23","dimension",["macro",62]],["map","index","24","dimension",["macro",63]],["map","index","25","dimension",["macro",64]],["map","index","26","dimension",["macro",65]],["map","index","27","dimension",["macro",54]],["map","index","28","dimension",["macro",66]],["map","index","29","dimension",["macro",5]],["map","index","30","dimension",["macro",67]],["map","index","31","dimension",["macro",25]],["map","index","32","dimension",["macro",68]],["map","index","33","dimension",["macro",25]],["map","index","34","dimension",["macro",69]],["map","index","35","dimension",["macro",70]],["map","index","36","dimension",["macro",71]],["map","index","37","dimension",["macro",72]],["map","index","38","dimension",["macro",73]],["map","index","39","dimension",["macro",74]],["map","index","40","dimension",["macro",75]],["map","index","41","dimension",["macro",76]],["map","index","42","dimension",["macro",77]],["map","index","43","dimension",["macro",78]],["map","index","44","dimension",["macro",79]],["map","index","45","dimension",["macro",80]],["map","index","46","dimension",["macro",81]],["map","index","47","dimension",["macro",82]],["map","index","48","dimension",["macro",83]],["map","index","49","dimension",["macro",85]],["map","index","50","dimension",["macro",86]],["map","index","51","dimension",["macro",87]],["map","index","52","dimension",["macro",88]],["map","index","53","dimension",["macro",89]],["map","index","54","dimension",["macro",90]],["map","index","55","dimension",["macro",91]],["map","index","56","dimension",["macro",92]],["map","index","57","dimension",["macro",93]],["map","index","58","dimension",["macro",94]],["map","index","59","dimension",["macro",59]],["map","index","60","dimension",["macro",95]],["map","index","61","dimension",["macro",96]],["map","index","62","dimension",["macro",97]],["map","index","63","dimension",["macro",98]],["map","index","64","dimension",["macro",99]],["map","index","65","dimension",["macro",100]],["map","index","66","dimension",["macro",101]],["map","index","67","dimension",["macro",102]],["map","index","68","dimension",["macro",103]],["map","index","69","dimension",["macro",104]],["map","index","70","dimension",["macro",105]],["map","index","71","dimension",["macro",106]],["map","index","72","dimension",["macro",25]],["map","index","73","dimension",["macro",25]],["map","index","74","dimension",["macro",25]],["map","index","75","dimension",["macro",25]],["map","index","76","dimension",["macro",25]],["map","index","77","dimension",["macro",25]],["map","index","78","dimension",["macro",25]],["map","index","79","dimension",["macro",25]],["map","index","80","dimension",["macro",25]],["map","index","81","dimension",["macro",25]],["map","index","82","dimension",["macro",25]],["map","index","83","dimension",["macro",25]],["map","index","84","dimension",["macro",25]],["map","index","85","dimension",["macro",25]],["map","index","86","dimension",["macro",25]],["map","index","87","dimension",["macro",25]],["map","index","88","dimension",["macro",25]],["map","index","89","dimension",["macro",25]],["map","index","90","dimension",["macro",25]],["map","index","91","dimension",["macro",25]],["map","index","92","dimension",["macro",25]],["map","index","93","dimension",["macro",25]],["map","index","94","dimension",["macro",25]],["map","index","95","dimension",["macro",25]],["map","index","96","dimension",["macro",25]],["map","index","97","dimension",["macro",25]],["map","index","98","dimension",["macro",25]],["map","index","99","dimension",["macro",25]],["map","index","100","dimension",["macro",25]],["map","index","101","dimension",["macro",107]],["map","index","102","dimension",["macro",108]],["map","index","103","dimension",["macro",109]],["map","index","104","dimension",["macro",110]],["map","index","105","dimension",["macro",111]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",112],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",54],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"UA-111275328-111",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*\\.autohebdosport\\.es.*","value","UA-684170-11"],["map","key","HARDCODEDcataladelany.cat","value","UA-27432863-5"],["map","key",".*\\.cochescastellon.com.*","value","UA-29023668-4"],["map","key",".*\\.codigonuevo.com","value","UA-45905816-1"],["map","key",".*\\.contactosyrelax.com.*","value","UA-684003-17"],["map","key",".*\\.cordobilla.com.*","value","UA-29023668-5"],["map","key",".*\\.diariocordoba.com.*","value","UA-684003-5"],["map","key",".*\\.diariolagrada.com.*","value","UA-29023668-1"],["map","key",".*\\.digitalcamera.es.*","value","UA-684120-19"],["map","key",".*\\.elperiodico.cat.*","value","UA-684003-20"],["map","key",".*\\.elperiodico.com.*","value","UA-684003-7"],["map","key",".*\\.elperiodicodearagon.com.*","value","UA-684003-2"],["map","key",".*\\.elperiodicodelazulejo.es.*","value","UA-29023668-2"],["map","key",".*\\.elperiodicoextremadura.com.*","value","UA-684003-8"],["map","key",".*\\.elperiodicomediterraneo.com.*","value","UA-684003-10"],["map","key",".*\\.enciclopedia-aragonesa.com.*","value","UA-309878-2"],["map","key",".*\\.grupozeta.es.*","value","UA-684003-1"],["map","key",".*\\.lacronicabadajoz.com.*","value","UA-684003-23"],["map","key",".*\\.sport.es.*","value","UA-684120-1"],["map","key",".*\\.stilo\\.es.*","value","UA-684170-12"],["map","key",".*\\.woman\\.es.*","value","UA-684170-4"],["map","key",".*\\.zetagestion.com.*","value","UA-29023668-3"],["map","key",".*\\.zetakiosko.com.*","value","UA-684003-31"],["map","key",".*\\.zetaventure.*","value","UA-29023668-10"],["map","key",".*\\.sport-english.com.*","value","UA-29023668-6"],["map","key",".*\\.cuore\\.es.*","value","UA-684120-3"],["map","key",".*\\.castellonfire\\.com.*","value","UA-29023668-12"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","page","value",["macro",10]],["map","fieldName","title","value",["macro",11]],["map","fieldName","customTask","value",["macro",12]],["map","fieldName","campaignName","value",["macro",13]],["map","fieldName","campaignSource","value",["macro",14]],["map","fieldName","campaignMedium","value",["macro",15]]],
      "vtp_useHashAutoLink":false,
      "vtp_autoLinkDomains":["macro",7],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",35]],["map","index","2","dimension",["macro",8]],["map","index","3","dimension",["macro",25]],["map","index","4","dimension",["macro",40]],["map","index","5","dimension",["macro",42]],["map","index","6","dimension",["macro",44]],["map","index","7","dimension",["macro",45]],["map","index","8","dimension",["macro",46]],["map","index","9","dimension",["macro",47]],["map","index","10","dimension",["macro",51]],["map","index","11","dimension",["macro",52]],["map","index","12","dimension",["macro",4]],["map","index","13","dimension",["macro",56]],["map","index","14","dimension",["macro",61]],["map","index","15","dimension",["macro",64]],["map","index","16","dimension",["macro",67]],["map","index","17","dimension",["macro",25]],["map","index","18","dimension",["macro",70]],["map","index","19","dimension",["macro",71]],["map","index","20","dimension",["macro",25]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",114],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=JSON.parse(JSON.stringify(",["escape",["macro",121],8,16],"));a.checkout\u0026\u0026a.checkout.actionField\u0026\u0026a.checkout.actionField.id\u0026\u0026(a.purchase=a.checkout,delete a.checkout);return{ecommerce:a}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialAct"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialTarg"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialNetwork"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","useAmpClientId","value","true"],["map","fieldName","allowLinker","value","true"],["map","fieldName","page","value",["macro",10]],["map","fieldName","title","value",["macro",11]],["map","fieldName","customTask","value",["macro",12]]],
      "vtp_useHashAutoLink":false,
      "vtp_autoLinkDomains":["macro",7],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",35]],["map","index","2","dimension",["macro",8]],["map","index","3","dimension",["macro",36]],["map","index","4","dimension",["macro",40]],["map","index","5","dimension",["macro",42]],["map","index","6","dimension",["macro",43]],["map","index","7","dimension",["macro",44]],["map","index","8","dimension",["macro",45]],["map","index","9","dimension",["macro",46]],["map","index","10","dimension",["macro",47]],["map","index","11","dimension",["macro",51]],["map","index","12","dimension",["macro",52]],["map","index","13","dimension",["macro",53]],["map","index","14","dimension",["macro",56]],["map","index","15","dimension",["macro",62]],["map","index","16","dimension",["macro",64]],["map","index","17","dimension",["macro",5]],["map","index","18","dimension",["macro",70]],["map","index","19","dimension",["macro",71]],["map","index","20","dimension",["macro",75]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",114],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","useAmpClientId","value","true"],["map","fieldName","page","value",["macro",10]],["map","fieldName","title","value",["macro",11]],["map","fieldName","customTask","value",["macro",12]]],
      "vtp_useHashAutoLink":false,
      "vtp_autoLinkDomains":["macro",7],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",35]],["map","index","2","dimension",["macro",8]],["map","index","3","dimension",["macro",36]],["map","index","4","dimension",["macro",40]],["map","index","5","dimension",["macro",42]],["map","index","6","dimension",["macro",43]],["map","index","7","dimension",["macro",44]],["map","index","8","dimension",["macro",45]],["map","index","9","dimension",["macro",46]],["map","index","10","dimension",["macro",47]],["map","index","11","dimension",["macro",51]],["map","index","12","dimension",["macro",52]],["map","index","13","dimension",["macro",4]],["map","index","14","dimension",["macro",56]],["map","index","15","dimension",["macro",61]],["map","index","16","dimension",["macro",64]],["map","index","17","dimension",["macro",5]],["map","index","18","dimension",["macro",67]],["map","index","19","dimension",["macro",70]],["map","index","20","dimension",["macro",71]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",114],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","customTask","value",["macro",12]]],
      "vtp_useHashAutoLink":false,
      "vtp_autoLinkDomains":["macro",7],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",35]],["map","index","2","dimension",["macro",8]],["map","index","3","dimension",["macro",36]],["map","index","4","dimension",["macro",40]],["map","index","5","dimension",["macro",42]],["map","index","6","dimension",["macro",43]],["map","index","7","dimension",["macro",44]],["map","index","8","dimension",["macro",45]],["map","index","9","dimension",["macro",46]],["map","index","10","dimension",["macro",47]],["map","index","11","dimension",["macro",51]],["map","index","12","dimension",["macro",52]],["map","index","13","dimension",["macro",4]],["map","index","14","dimension",["macro",56]],["map","index","15","dimension",["macro",61]],["map","index","16","dimension",["macro",64]],["map","index","17","dimension",["macro",5]],["map","index","18","dimension",["macro",67]],["map","index","19","dimension",["macro",70]],["map","index","20","dimension",["macro",71]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",114],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",54],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^viajar\\.*elperiodico.com$|^viajar\\.especiales\\.elperiodico\\.com$","value","UA-684170-3"],["map","key","^neomotor\\-dev\\.sport\\.es$|^neomotor\\.sport\\.es$","value","UA-545688-97"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",6]]],
      "vtp_autoLinkDomains":["macro",7],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","userId","value",["macro",8]],["map","fieldName","page","value",["macro",10]],["map","fieldName","allowLinker","value","true"],["map","fieldName","customTask","value",["macro",12]],["map","fieldName","title","value",["macro",11]],["map","fieldName","campaignName","value",["macro",13]],["map","fieldName","campaignSource","value",["macro",14]],["map","fieldName","campaignMedium","value",["macro",15]]],
      "vtp_metric":["list",["map","index","1","metric",["macro",16]],["map","index","2","metric",["macro",17]],["map","index","3","metric",["macro",18]],["map","index","4","metric",["macro",19]],["map","index","5","metric",["macro",20]],["map","index","6","metric",["macro",21]],["map","index","7","metric",["macro",22]],["map","index","8","metric",["macro",23]],["map","index","9","metric",["macro",24]],["map","index","10","metric",["macro",25]],["map","index","11","metric",["macro",26]],["map","index","12","metric",["macro",27]],["map","index","13","metric",["macro",25]],["map","index","14","metric",["macro",28]],["map","index","15","metric",["macro",29]],["map","index","16","metric",["macro",30]],["map","index","17","metric",["macro",31]],["map","index","18","metric",["macro",32]],["map","index","19","metric",["macro",33]],["map","index","20","metric",["macro",34]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",35]],["map","index","2","dimension",["macro",8]],["map","index","3","dimension",["macro",36]],["map","index","4","dimension",["macro",37]],["map","index","5","dimension",["macro",38]],["map","index","6","dimension",["macro",39]],["map","index","7","dimension",["macro",40]],["map","index","8","dimension",["macro",41]],["map","index","9","dimension",["macro",42]],["map","index","10","dimension",["macro",43]],["map","index","11","dimension",["macro",44]],["map","index","12","dimension",["macro",45]],["map","index","13","dimension",["macro",46]],["map","index","14","dimension",["macro",47]],["map","index","15","dimension",["macro",48]],["map","index","16","dimension",["macro",49]],["map","index","17","dimension",["macro",50]],["map","index","18","dimension",["macro",51]],["map","index","19","dimension",["macro",52]],["map","index","20","dimension",["macro",53]],["map","index","21","dimension",["macro",55]],["map","index","22","dimension",["macro",56]],["map","index","23","dimension",["macro",62]],["map","index","24","dimension",["macro",63]],["map","index","25","dimension",["macro",64]],["map","index","26","dimension",["macro",65]],["map","index","27","dimension",["macro",54]],["map","index","28","dimension",["macro",66]],["map","index","29","dimension",["macro",5]],["map","index","30","dimension",["macro",67]],["map","index","31","dimension",["macro",25]],["map","index","32","dimension",["macro",68]],["map","index","33","dimension",["macro",25]],["map","index","34","dimension",["macro",69]],["map","index","35","dimension",["macro",70]],["map","index","36","dimension",["macro",71]],["map","index","37","dimension",["macro",72]],["map","index","38","dimension",["macro",73]],["map","index","39","dimension",["macro",74]],["map","index","40","dimension",["macro",75]],["map","index","41","dimension",["macro",76]],["map","index","42","dimension",["macro",77]],["map","index","43","dimension",["macro",78]],["map","index","44","dimension",["macro",79]],["map","index","45","dimension",["macro",80]],["map","index","46","dimension",["macro",81]],["map","index","47","dimension",["macro",82]],["map","index","48","dimension",["macro",83]],["map","index","49","dimension",["macro",85]],["map","index","50","dimension",["macro",86]],["map","index","51","dimension",["macro",87]],["map","index","52","dimension",["macro",88]],["map","index","53","dimension",["macro",89]],["map","index","54","dimension",["macro",90]],["map","index","55","dimension",["macro",91]],["map","index","56","dimension",["macro",92]],["map","index","57","dimension",["macro",93]],["map","index","58","dimension",["macro",94]],["map","index","59","dimension",["macro",59]],["map","index","60","dimension",["macro",95]],["map","index","61","dimension",["macro",96]],["map","index","62","dimension",["macro",97]],["map","index","63","dimension",["macro",98]],["map","index","64","dimension",["macro",99]],["map","index","65","dimension",["macro",100]],["map","index","66","dimension",["macro",101]],["map","index","67","dimension",["macro",102]],["map","index","68","dimension",["macro",103]],["map","index","69","dimension",["macro",104]],["map","index","70","dimension",["macro",105]],["map","index","71","dimension",["macro",106]],["map","index","72","dimension",["macro",25]],["map","index","73","dimension",["macro",25]],["map","index","74","dimension",["macro",25]],["map","index","75","dimension",["macro",25]],["map","index","76","dimension",["macro",25]],["map","index","77","dimension",["macro",25]],["map","index","78","dimension",["macro",25]],["map","index","79","dimension",["macro",25]],["map","index","80","dimension",["macro",25]],["map","index","81","dimension",["macro",25]],["map","index","82","dimension",["macro",25]],["map","index","83","dimension",["macro",25]],["map","index","84","dimension",["macro",25]],["map","index","85","dimension",["macro",25]],["map","index","86","dimension",["macro",25]],["map","index","87","dimension",["macro",25]],["map","index","88","dimension",["macro",25]],["map","index","89","dimension",["macro",25]],["map","index","90","dimension",["macro",25]],["map","index","91","dimension",["macro",25]],["map","index","92","dimension",["macro",25]],["map","index","93","dimension",["macro",25]],["map","index","94","dimension",["macro",25]],["map","index","95","dimension",["macro",25]],["map","index","96","dimension",["macro",25]],["map","index","97","dimension",["macro",25]],["map","index","98","dimension",["macro",25]],["map","index","99","dimension",["macro",25]],["map","index","100","dimension",["macro",25]],["map","index","101","dimension",["macro",107]],["map","index","102","dimension",["macro",108]],["map","index","103","dimension",["macro",109]],["map","index","104","dimension",["macro",110]],["map","index","105","dimension",["macro",111]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",112],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"icon-person\"==",["escape",["macro",133],8,16],"?\"clickin login\":\"icon-menu\"==",["escape",["macro",133],8,16],"?\"clickin menu\":\"icon-search\"==",["escape",["macro",133],8,16],"?\"clickin buscar\":\"clickin ",["escape",["macro",132],7],"\";return a.toLowerCase()})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",136],8,16],";switch(a){case \"start\":return\"video start\";case \"progress\":return\"video progress \"+",["escape",["macro",137],8,16],"+\"%\";case \"complete\":return\"video complete\"}})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",139],8,16],";return a})();"]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","customTask","value",["macro",12]]],
      "vtp_useHashAutoLink":false,
      "vtp_autoLinkDomains":["macro",7],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",35]],["map","index","2","dimension",["macro",8]],["map","index","3","dimension",["macro",36]],["map","index","4","dimension",["macro",40]],["map","index","5","dimension",["macro",42]],["map","index","6","dimension",["macro",43]],["map","index","7","dimension",["macro",44]],["map","index","8","dimension",["macro",45]],["map","index","9","dimension",["macro",46]],["map","index","10","dimension",["macro",47]],["map","index","11","dimension",["macro",51]],["map","index","12","dimension",["macro",52]],["map","index","13","dimension",["macro",4]],["map","index","14","dimension",["macro",56]],["map","index","15","dimension",["macro",61]],["map","index","16","dimension",["macro",64]],["map","index","17","dimension",["macro",5]],["map","index","18","dimension",["macro",70]],["map","index","19","dimension",["macro",71]],["map","index","20","dimension",["macro",75]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",114],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"marketing",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",73],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*sport\\.es\\\/en\\\/.*","value","UA-29023668-6"],["map","key",".*\\\/cuore\\\/.*","value","UA-684120-3"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",56],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"visitas apps otras",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^android\\-app\\:\\\/\\\/.*google.*","value","visitas apps google"],["map","key","^android\\-app\\:\\\/\\\/.*facebook.*","value","visitas apps facebook"],["map","key","^android\\-app\\:\\\/\\\/.*twitter.*","value","visitas apps twitter"],["map","key","^android\\-app\\:\\\/\\\/.*linkedin.*","value","visitas apps linkedin"],["map","key","^android\\-app\\:\\\/\\\/.*whatsapp.*","value","visitas apps whatsapp"],["map","key","^android\\-app\\:\\\/\\\/.*telegram.*","value","visitas apps telegram"],["map","key","^android\\-app\\:\\\/\\\/.*slack.*","value","visitas apps slack"],["map","key","^android\\-app\\:\\\/\\\/.*axelspringer.*","value","visitas apps upday"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"timingLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"timingCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"timingVar"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"timingValue"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",54],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*elperiodico\\.com$","value","543294242492583"],["map","key",".*sport\\.es$","value","2155644554468315"],["map","key",".*codigonuevo\\.com$","value","240492043191976"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",54],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*\\.diariocordoba\\.com.*","value","diariocordoba.com"],["map","key",".*\\.elperiodicodearagon\\.com.*","value","elperiodicodearagon.com"],["map","key",".*\\.elperiodicoextremadura\\.com.*","value","elperiodicoextremadura.com"],["map","key",".*\\.elperiodicomediterraneo\\.com.*","value","elperiodicomediterraneo.com"],["map","key",".*\\.lacronicabadajoz\\.com.*","value","lacronicabadajoz.com"],["map","key",".*\\.sport\\.es.*","value","sport.es"],["map","key",".*\\.stilo\\.es.*","value","stilo.es"],["map","key",".*\\.elperiodico\\.cat.*","value","elperiodico.cat"],["map","key",".*\\.elperiodico\\.com.*","value","elperiodico.com"],["map","key",".*\\.woman\\.es.*","value","woman.es"],["map","key",".*\\.cuore\\.es.*","value","cuore.es"],["map","key",".*\\.codigonuevo\\.com.*","value","codigonuevo.com"]]
    },{
      "function":"__jsm",
      "convert_null_to":"anon",
      "convert_undefined_to":"anon",
      "vtp_javascript":["template","(function(){try{return\"\"==",["escape",["macro",101],8,16],"||\"anonimo\"==",["escape",["macro",101],8,16],"?newUserType=\"anon\":\"registrado\"==",["escape",["macro",101],8,16],"?newUserType=\"lgdin\":\"suscriptor\"==",["escape",["macro",101],8,16],"\u0026\u0026(newUserType=\"paid\"),newUserType}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a;return a=\"noticia\"===",["escape",["macro",5],8,16],"\u0026\u0026\"contenido abierto\"===",["escape",["macro",102],8,16],"||\"noticia\"===",["escape",["macro",5],8,16],"\u0026\u0026\"ninguno\"===",["escape",["macro",102],8,16],"||\"noticia\"===",["escape",["macro",5],8,16],"\u0026\u0026void 0===",["escape",["macro",102],8,16],"?\",noticia free\":\"noticia\"===",["escape",["macro",5],8,16],"\u0026\u0026\"mas periodico\"===",["escape",["macro",102],8,16],"?\",noticia premium\":\"\"}catch(b){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a;return a=\"amp\"===",["escape",["macro",46],8,16],"?\",noticia amp\":\"fia\"===",["escape",["macro",46],8,16],"?\",noticia fia\":\"\"}catch(b){}})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",54],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"false",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","www.elperiodico.com","value","true"],["map","key","www.sport.es","value","true"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",73],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*viajar\\.elperiodico\\.com.*","value","G-JPL1C8B2KJ"],["map","key",".*byzness\\.elperiodico\\.com.*","value","G-F21ZGSZHBV"],["map","key",".*neomotor\\.sport\\.es.*","value","G-R4FHW7J9KY"],["map","key",".*sport\\.es\\\/labolsadelcorredor\\\/.*","value","G-KCZEJPWQK2"],["map","key",".*\\.autohebdosport\\.es.*","value","G-6FVBYZ7FXQ"],["map","key",".*\\.cordobilla.com.*","value","G-7CLRC7WGNK"],["map","key",".*\\.diariocordoba.com.*","value","G-LNB9L8EZ2K"],["map","key",".*\\.elperiodicodearagon.com.*","value","G-EYHTSKB4ES"],["map","key",".*\\.elperiodicodelazulejo.es.*","value","G-QR55XGTQLE"],["map","key",".*\\.elperiodicoextremadura.com.*","value","G-KE7NZJVD1J"],["map","key",".*\\.elperiodicomediterraneo.com.*","value","G-Z7CQSDVBGV"],["map","key",".*\\.sport.es.*","value","G-BMQYM5G4CR"],["map","key",".*\\.stilo\\.es.*","value","G-KNY3T96SLF"],["map","key",".*\\.elperiodico.cat.*","value","G-06JQ9LJWEN"],["map","key",".*\\.elperiodico.com.*","value","G-YCJHYESXNK"],["map","key",".*\\.woman\\.es.*","value","G-0Y3CBW8DWV"],["map","key",".*\\.cuore\\.es.*","value","G-MPFXJC542J"],["map","key",".*\\.castellonfire\\.com.*","value","G-ZVB6K7WRYB"],["map","key",".*\\.cuidamostusalud\\.es.*","value","G-703NESTYCF"],["map","key",".*\\.codigonuevo.com.*","value","G-YL25F66FBY"],["map","key",".*\\.lacronicabadajoz.com.*","value","G-N61V8S62MG"],["map","key",".*\\.digitalcamera\\.es.*","value","G-VB8B3R5YCP"],["map","key",".*\\ewoman\\.es.*","value","G-DCPCSYZ7JB"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",46],
      "vtp_map":["list",["map","key","fia","value","fbia"],["map","key","fbia","value","fbia"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=localStorage.getItem(\"_cmp_comscore\");return userConsentComscore=\"1\"===a?1:\"0\"===a?0:\"\"}catch(b){}})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_campaign",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"outbrain-link",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"(not set)\";try{var b=document.location.hostname,c=document.location.pathname;\"www.elperiodico.com\"==b\u0026\u00260==c.indexOf(\"\/es\/port\/\")\u0026\u0026\"noticia\"==",["escape",["macro",5],8,16],"?a=\"\/\/sites.grupozeta.es\/window\/port\":!b.match(\/bb-pre.sport.es|bb-pub-pro.sport.es|www.sport.es\/)||\"noticia\"!=",["escape",["macro",5],8,16],"\u0026\u0026\"\/es\/\"!=c\u0026\u0026\"partido\"!=",["escape",["macro",5],8,16],"?\"www.elperiodico.com\"==b\u0026\u00260==c.indexOf(\"\/es\/cuore\/\")||\"www.cuore.es\"==b?a=\"\/\/sites.grupozeta.es\/window\/cuore\":\"www.stilo.es\"==b?a=\"\/\/sites.grupozeta.es\/window\/stilo\":\n\"viajar.elperiodico.com\"==b?a=\"\/\/sites.grupozeta.es\/window\/viajar\":!b.match(\/bb-pre.elperiodico.cat|bb-pre.elperiodico.com|bb-pub-pro.elperiodico.com|bb-pub-pro.elperiodico.cat|www.elperiodico.cat|www.elperiodico.com\/)||\"directo\"!=",["escape",["macro",5],8,16],"\u0026\u0026\"noticia\"!=",["escape",["macro",5],8,16],"\u0026\u0026\"participacion carta\"!=",["escape",["macro",5],8,16],"\u0026\u0026\"\/es\/\"!=c\u0026\u0026\"\/es\/global\/\"!=c\u0026\u0026\"\/ca\/\"!=c?\"www.woman.es\"!=b\u0026\u0026\"test.woman.es\"!=b||\"\/\"==c||\"noticia\"!=",["escape",["macro",5],8,16],"?b.match(\/www.diariocordoba.com\/)\u0026\u0026\"\/\"==c?a=\"\/\/sites.grupozeta.es\/window\/diariocordoba\":\n\"www.elperiodicodearagon.com\"==b\u0026\u0026\"\/\"==c?a=\"\/\/sites.grupozeta.es\/window\/elperiodicodearagon\":b.match(\/www.elperiodicomediterraneo.com\/)\u0026\u0026\"\/\"==c?a=\"\/\/sites.grupozeta.es\/window\/elperiodicomediterraneo\":b.match(\/www.elperiodicoextremadura.com\/)\u0026\u0026\"\/\"==c?a=\"\/\/sites.grupozeta.es\/window\/elperiodicoextremadura\":\"www.autohebdosport.es\"==b\u0026\u0026\"\/\"==c\u0026\u0026(a=\"\/\/sites.grupozeta.es\/window\/autohebdosport\"):a=\"\/\/sites.grupozeta.es\/window\/woman\":a=\"\/\/sites.grupozeta.es\/window\/elperiodico\":a=\"\/\/sites.grupozeta.es\/window\/sport\";\nreturn a}catch(d){return a}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"(not set)\";try{var b=document.location.hostname;!b.match(\/bb-pre.elperiodico.com||bb-pub-pro.elperiodico.com|beta.elperiodico.com|bb-pre.elperiodico.cat|beta-pre.elperiodico.cat|beta.elperiodico.cat\/)||\"\/es\/\"!=location.pathname\u0026\u0026\"\/es\/global\/\"!=location.pathname?!b.match(\/pro-ep-cds-int.gz.es|www.elperiodico.com\/)||\"\/es\/\"!=location.pathname\u0026\u0026\"\/es\/global\/\"!=location.pathname||(a=\"\/\/sites.grupozeta.es\/window\/secundaria\/elperiodico\"):a=\"\/\/sites.grupozeta.es\/window\/secundaria\/elperiodico\";\nreturn a}catch(c){return a}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"gtm_main"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",162],8,16],";return(b||document.location.search).replace(\/(^\\?)\/,\"\").split(\"$\").map(function(a){return a=a.split(\":\"),this[a[0]]=a[1],this}.bind({}))[0]._pn})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",54],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","www.elperiodico.com","value","ELPCATKPXchAoG6r"],["map","key","www.woman.es","value","EPI_015_906_559"],["map","key","byzness.elperiodico.com","value","EPI_015_906_559"],["map","key","www.stilo.es","value","EPI_015_906_559"],["map","key","viajar.elperiodico.com","value","EPI_015_906_559"],["map","key","www.cogidonuevo.com","value","EPI_015_906_559"],["map","key","www.elperiodicomediterraneo.com","value","ELPCATKPXchAoG6r"],["map","key","www.lacronicabadajoz.com","value","ELPCATKPXchAoG6r"],["map","key","www.elperiodicodearagon.com","value","ELPCATKPXchAoG6r"],["map","key","www.elperiodicoextremadura.com","value","ELPCATKPXchAoG6r"],["map","key","www.diariocordoba.com","value","ELPCATKPXchAoG6r"],["map","key","www.sport.es","value","ELPCATKPXchAoG6r"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",73],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*viajar\\.elperiodico\\.com.*","value","1137450034148974955"],["map","key",".*neomotor\\.sport\\.es.*","value","1135142222616940686"],["map","key",".*sport\\.es\\\/labolsadelcorredor\\\/.*","value","1135180859564342723"],["map","key",".*\\\/cuore\\\/.*","value","1136306761136467327"],["map","key",".*\\.autohebdosport\\.es.*","value","1135180859564342705"],["map","key",".*\\.cordobilla.com.*","value","1138558566923729580"],["map","key",".*\\.diariocordoba.com.*","value","1138558566923729580"],["map","key",".*\\.elperiodicodearagon.com.*","value","1138558566923729579"],["map","key",".*\\.elperiodicodelazulejo.es.*","value","1136309704169974320"],["map","key",".*\\.elperiodicoextremadura.com.*","value","1136306761136467324"],["map","key",".*\\.elperiodicomediterraneo.com.*","value","1137432658362050947"],["map","key",".*\\.sport.es.*","value","1135180859564342700"],["map","key",".*\\.stilo\\.es.*","value","1137432658362050949"],["map","key",".*\\.elperiodico.cat.*","value","1138585257100094564"],["map","key",".*\\.elperiodico.com.*","value","1136306761136467322"],["map","key",".*\\.woman\\.es.*","value","1135180859564342703"],["map","key",".*\\.cuore\\.es.*","value","1136306761136467327"],["map","key",".*\\.castellonfire\\.com.*","value","1137435600198708953"],["map","key",".*\\.codigonuevo.com.*","value","1135180859564342722"],["map","key",".*\\.lacronicabadajoz.com.*","value","1136306761136467326"],["map","key",".*\\.digitalcamera\\.es.*","value","1135180859564342706"],["map","key",".*\\woman\\.es.*","value","1136286185542710345"]]
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",54],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*viajar\\.elperiodico\\.com$","value","1403255986554882,387756554626985"],["map","key",".*guapisimas\\.stilo\\.es$","value","341391756893738,340040929409363"],["map","key",".*elperiodico\\.com$","value","387756554626985"],["map","key",".*sport\\.es$","value","339564252820763"],["map","key",".*woman\\.es$","value","443245065697754"],["map","key",".*stilo\\.es$","value","340040929409363"],["map","key",".*cuore\\.es$","value","112144865467385"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=document.getElementsByTagName(\"iframe\"),a=0;a\u003Cb.length;a++)if(\/^https?:\\\/\\\/player.vimeo.com\/.test(b[a].src))return!0;return!1})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",54],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","www.diariocordoba.com","value","32c53972-74b0-4e7e-a0fb-0f181f404737"],["map","key","www.sport.es","value","9c2d7e5e-2341-4fbb-95c5-e158ecbf27fa"],["map","key","www.elperiodico.com","value","7b4c2c69-0a82-4a72-984e-4b9714a69463"],["map","key","www.elperiodicodearagon.com","value","16d3ff3d-2f8e-4b6d-ae4e-d9f4c14657cc"],["map","key","www.elperiodicoextremadura.com","value","6cd45c5e-890b-435b-a2dd-8311db8daf88"],["map","key","www.elperiodicomediterraneo.com","value","4f76b3a4-4e3c-45fd-8857-71c31e2f7303"],["map","key","www.woman.es","value","bfda8a35-8de9-4003-9f8c-b09b4e317bc9"],["map","key","www.stilo.es","value","c4d5c690-a343-42a8-a23b-8ece26201515"],["map","key","www.codigonuevo.com","value","371a7494-d0f9-4e8d-a459-6cda4de278fb"],["map","key","viajar.elperiodico.com","value","2ef1e0d3-e212-4e59-88f4-7451602b189a"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pubAudience"
    },{
      "function":"__c",
      "vtp_value":"auto"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"tecAdblock"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conLangPathname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dl - conWords"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"numOfResults"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nombreProceso"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pasoProceso"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"producto"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"esAsync"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sendGaAsync"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",162],8,16],";return(b||document.location.search).replace(\/(^\\?)\/,\"\").split(\"$\").map(function(a){return a=a.split(\":\"),this[a[0]]=a[1],this}.bind({}))[0]._sn})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",162],8,16],";return\"1\"==b.replace(\/(^\\?)\/,\"\").split(\"$\").map(function(a){return a=a.split(\":\"),this[a[0]]=a[1],this}.bind({}))[0]._ss?\"1\":\"0\"})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",181],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^[1-5]$","value","low value"],["map","key","^([6-9]|10)$","value","mid value"],["map","key","^1[1-9]$|[2-9]\\d+|\\d{3,}","value","high value"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",162],8,16],";return(b||document.location.search).replace(\/(^\\?)\/,\"\").split(\"$\").map(function(a){return a=a.split(\":\"),this[a[0]]=a[1],this}.bind({}))[0].ses_id})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"userTimingTag"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(){dataLayer.push({event:\"clear-metrics\",hComment:void 0,hShareLinkedin:void 0,hShareFacebook:void 0,hShareGoogle:void 0,hShareTwitter:void 0,hSharePrint:void 0,hSharePinterest:void 0,hShareEmail:void 0,hSendLetter:void 0,hShareWhatsapp:void 0,hShareTelegram:void 0,hShareFacebookMessenger:void 0,hDownDoc:void 0,cMetricEngageTime:void 0,hVideoStart:void 0,hVideoComplete:void 0})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b={desktop:992,tablet:768,mobile:0},a;for(a in b)if(window.screen.width\u003E=b[a])return a})();"]
    },{
      "function":"__c",
      "convert_case_to":1,
      "vtp_value":["macro",132]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"z-visited"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",54],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","www.elperiodicodearagon.com","value","El Periódico de Aragón"],["map","key","www.elperiodico.com","value","El Periódico"],["map","key","www.elperiodicomediterraneo.com","value","El Periódico Mediterraneo"],["map","key","www.elperiodicoextremadura.com","value","El Periódico Extremadura"],["map","key","www.diariocordoba.com","value","Diario Córdoba"],["map","key","www.sport.es","value","Sport"],["map","key","beta-pre.sport.es","value","Sport"],["map","key","www.woman.es","value","Woman"],["map","key","www.cuore.es","value","Cuore"],["map","key","viajar.elperiodico.com","value","Viajar"],["map","key","www.codigonuevo.com","value","Código Nuevo"],["map","key","www.stilo.es","value","Stilo"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",54],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","www.elperiodicodearagon.com","value","https:\/\/r2017.zetaestaticos.com\/aragon\/img\/ep-mini.png"],["map","key","www.elperiodico.com","value","https:\/\/est.elperiodico.com\/ep-static\/img\/ep-mini.png"],["map","key","www.elperiodicomediterraneo.com","value","https:\/\/r2017.zetaestaticos.com\/mediterraneo\/img\/ep-mini.png"],["map","key","www.elperiodicoextremadura.com","value","https:\/\/r2017.zetaestaticos.com\/extremadura\/img\/ep-mini.png"],["map","key","www.diariocordoba.com","value","https:\/\/r2017.zetaestaticos.com\/cordoba\/img\/ep-mini.png"],["map","key","www.sport.es","value","https:\/\/est.sport.es\/img\/sp-mini.png"],["map","key","www.woman.es","value","https:\/\/www.woman.es\/static-docs\/woman-logop.png"],["map","key","www.cuore.es","value","https:\/\/www.cuore.es\/static-docs\/cuore-logop.png"],["map","key","viajar.elperiodico.com","value","https:\/\/viajar.elperiodico.com\/static-docs\/viajar-logop.png"],["map","key","www.codigonuevo.com","value","https:\/\/www.codigonuevo.com\/static-docs\/CN-logop.png"],["map","key","www.stilo.es","value","https:\/\/www.stilo.es\/static-docs\/stilo-logop.png"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var b=",["escape",["macro",56],8,16],",a=0;a=b.indexOf(\"?\");-1==a\u0026\u0026(a=b.indexOf(\"#\"));-1!=a\u0026\u0026(newURL=b.substring(0,a));return newURL}catch(c){}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page_type"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return localStorage.getItem(\"_cmp_i_group\")})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",54],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*elperiodico.cat.*","value","OPT-TX6HXSX"],["map","key",".*elperiodico.com.*","value","OPT-K2K2JGG"]]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_medium",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__r"
    }],
  "tags":[{
      "function":"__html",
      "priority":1000,
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"SCRIPT\");a.type=\"text\/javascript\";a.src=\"https:\/\/analytics-cdn.prensaiberica.es\/static\/javascript\/mo.min.js\";document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":168
    },{
      "function":"__cvt_2613943_1232",
      "priority":10,
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_comscorekw":["macro",156],
      "vtp_c1":2,
      "vtp_cs_ucfr":["macro",157],
      "vtp_c2":"8731705",
      "tag_id":1233
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",113],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":2
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",115],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":5
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",116],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",117],
      "vtp_eventCategory":["macro",118],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",119],
      "vtp_eventLabel":["macro",120],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":7
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",116],
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",122],
      "vtp_eventValue":["macro",117],
      "vtp_eventCategory":["macro",118],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",119],
      "vtp_eventLabel":["macro",120],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":9
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":["macro",123],
      "vtp_gaSettings":["macro",113],
      "vtp_socialActionTarget":["macro",124],
      "vtp_socialNetwork":["macro",125],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "vtp_enableGA4Schema":false,
      "tag_id":11
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",116],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",117],
      "vtp_eventCategory":["macro",118],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",115],
      "vtp_eventAction":["macro",119],
      "vtp_eventLabel":["macro",120],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":16
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":["macro",123],
      "vtp_gaSettings":["macro",115],
      "vtp_socialActionTarget":["macro",124],
      "vtp_socialNetwork":["macro",125],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "vtp_enableGA4Schema":false,
      "tag_id":17
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",126],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":18
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",116],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",117],
      "vtp_eventCategory":["macro",118],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",126],
      "vtp_eventAction":["macro",119],
      "vtp_eventLabel":["macro",120],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":20
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":["macro",123],
      "vtp_gaSettings":["macro",126],
      "vtp_socialActionTarget":["macro",124],
      "vtp_socialNetwork":["macro",125],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "vtp_enableGA4Schema":false,
      "tag_id":21
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",116],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",117],
      "vtp_eventCategory":["macro",118],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",127],
      "vtp_eventAction":["macro",119],
      "vtp_eventLabel":["macro",120],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":22
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",127],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":23
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":["macro",123],
      "vtp_gaSettings":["macro",127],
      "vtp_socialActionTarget":["macro",124],
      "vtp_socialNetwork":["macro",125],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "vtp_enableGA4Schema":false,
      "tag_id":24
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",116],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",117],
      "vtp_eventCategory":["macro",118],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",128],
      "vtp_eventAction":["macro",119],
      "vtp_eventLabel":["macro",120],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":27
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",128],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":28
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":["macro",123],
      "vtp_gaSettings":["macro",128],
      "vtp_socialActionTarget":["macro",124],
      "vtp_socialNetwork":["macro",125],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "vtp_enableGA4Schema":false,
      "tag_id":29
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",116],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",117],
      "vtp_eventCategory":["macro",118],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",126],
      "vtp_eventAction":["macro",119],
      "vtp_eventLabel":["macro",120],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":32
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",126],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":33
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":["macro",123],
      "vtp_gaSettings":["macro",126],
      "vtp_socialActionTarget":["macro",124],
      "vtp_socialNetwork":["macro",125],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "vtp_enableGA4Schema":false,
      "tag_id":34
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":["macro",129],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":35
    },{
      "function":"__paused",
      "vtp_originalTagType":"hjtc",
      "tag_id":48
    },{
      "function":"__paused",
      "vtp_originalTagType":"hjtc",
      "tag_id":68
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"internal link",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",131],
      "vtp_eventAction":"clickin breaking news",
      "vtp_eventLabel":["macro",132],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":72
    },{
      "function":"__paused",
      "vtp_originalTagType":"hjtc",
      "tag_id":78
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"acciones usuarios",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",131],
      "vtp_eventAction":["macro",134],
      "vtp_eventLabel":["macro",73],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":88
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"acciones noticias",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",131],
      "vtp_eventAction":"ver comentarios",
      "vtp_eventLabel":["macro",73],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":104
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"clubep",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",131],
      "vtp_eventAction":["macro",132],
      "vtp_eventLabel":["macro",73],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":114
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"recirculacion link",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",131],
      "vtp_eventAction":["template","clickin ",["macro",56]],
      "vtp_eventLabel":["macro",73],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":128
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"acciones noticias",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",131],
      "vtp_eventAction":"clickin noticia relacionada izquierda",
      "vtp_eventLabel":["macro",130],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":131
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"acciones noticias",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",131],
      "vtp_eventAction":"lectura completa",
      "vtp_eventLabel":["macro",73],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":137
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"acciones noticias",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",126],
      "vtp_eventAction":"lectura completa",
      "vtp_eventLabel":["macro",73],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":139
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"video youtube",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",131],
      "vtp_eventAction":["macro",138],
      "vtp_eventLabel":["macro",140],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":149
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"video youtube",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",141],
      "vtp_eventAction":["macro",138],
      "vtp_eventLabel":["macro",140],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":150
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"video youtube",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",126],
      "vtp_eventAction":["macro",138],
      "vtp_eventLabel":["macro",140],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":151
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"video youtube",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",128],
      "vtp_eventAction":["macro",138],
      "vtp_eventLabel":["macro",140],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":152
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"video youtube",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",115],
      "vtp_eventAction":["macro",138],
      "vtp_eventLabel":["macro",140],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":153
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"video youtube",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",127],
      "vtp_eventAction":["macro",138],
      "vtp_eventLabel":["macro",140],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":154
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"marketing link",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",131],
      "vtp_eventAction":["template","clickin ",["macro",142]],
      "vtp_eventLabel":["macro",73],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":156
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":["macro",143],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":160
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"acciones portada principal",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",131],
      "vtp_eventAction":"clickin ultimas noticias",
      "vtp_eventLabel":["macro",130],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":173
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"navegadores apps",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",131],
      "vtp_eventAction":["macro",144],
      "vtp_eventLabel":["macro",56],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":979
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"acciones noticias",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",131],
      "vtp_eventAction":"clickin noticia relacionada carrusel",
      "vtp_eventLabel":["macro",130],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":994
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_TIMING",
      "vtp_timingLabel":["macro",145],
      "vtp_gaSettings":["macro",131],
      "vtp_timingCategory":["macro",146],
      "vtp_timingVar":["macro",147],
      "vtp_timingValue":["macro",148],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTiming":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1022
    },{
      "function":"__cvt_2613943_1024",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_disablePushState":false,
      "vtp_pixelId":["macro",149],
      "vtp_standardEventName":"ViewContent",
      "vtp_disableAutoConfig":false,
      "vtp_enhancedEcommerce":false,
      "vtp_dpoLDU":false,
      "vtp_eventName":"standard",
      "vtp_objectPropertiesFromVariable":false,
      "vtp_consent":true,
      "vtp_advancedMatching":false,
      "tag_id":1026
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":1097
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"video vimeo",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",131],
      "vtp_eventAction":["macro",119],
      "vtp_eventLabel":["macro",120],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1172
    },{
      "function":"__cvt_2613943_1200",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_uid":"63417",
      "vtp_useCanonical":true,
      "vtp_domain":["macro",150],
      "vtp_useCanonicalDomain":true,
      "vtp__acct":["macro",151],
      "vtp_type":["macro",5],
      "vtp_sections":["template",["macro",53],["macro",152],["macro",153]],
      "vtp_flickerControl":["macro",154],
      "vtp_authors":["macro",42],
      "tag_id":1202
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_sendPageView":true,
      "vtp_measurementId":["macro",155],
      "vtp_enableUserProperties":true,
      "vtp_enableGA4Name":true,
      "tag_id":1225
    },{
      "function":"__cvt_2613943_1024",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_disablePushState":false,
      "vtp_pixelId":["macro",149],
      "vtp_disableAutoConfig":false,
      "vtp_enhancedEcommerce":false,
      "vtp_dpoLDU":false,
      "vtp_eventName":"custom",
      "vtp_objectPropertiesFromVariable":false,
      "vtp_customEventName":"unete",
      "vtp_consent":true,
      "vtp_advancedMatching":false,
      "tag_id":1248
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"outbrain link",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",131],
      "vtp_eventAction":["template","clickin ",["macro",159]],
      "vtp_eventLabel":["macro",73],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1260
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"acciones usuarios",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",131],
      "vtp_eventAction":"navegacion barra menu",
      "vtp_eventLabel":["macro",134],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1268
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["template",["macro",49]," link"],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",131],
      "vtp_eventAction":"clickin ver mas",
      "vtp_eventLabel":["macro",73],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1278
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-PKBMNST","nickname","EPI ADS"]],
      "vtp_boundaries":["list"],
      "vtp_enableTypeRestrictions":false,
      "tag_id":1279
    },{
      "function":"__cl",
      "tag_id":1280
    },{
      "function":"__cl",
      "tag_id":1281
    },{
      "function":"__cl",
      "tag_id":1282
    },{
      "function":"__cl",
      "tag_id":1283
    },{
      "function":"__cl",
      "tag_id":1284
    },{
      "function":"__cl",
      "tag_id":1285
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":".ep-themes",
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"100",
      "vtp_uniqueTriggerId":"2613943_695",
      "tag_id":1286
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25,50,75",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":false,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"2613943_753",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1287
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25,50,75",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":false,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"2613943_757",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1288
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25,50,75",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":false,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"2613943_758",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1289
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25,50,75",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":false,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"2613943_759",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1290
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25,50,75",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":false,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"2613943_760",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1291
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25,50,75",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":false,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"2613943_761",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1292
    },{
      "function":"__cl",
      "tag_id":1293
    },{
      "function":"__cl",
      "tag_id":1294
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"10,20,30,40,50,60,70,80,90,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"2613943_1055",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1295
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"30000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"2613943_1095",
      "tag_id":1296
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","2613943_1096_1095","2613943_1096_695"],
      "vtp_uniqueTriggerId":"2613943_1096",
      "tag_id":1297
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"2613943_1096_1095",
      "tag_id":1298
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"2613943_1096_695",
      "tag_id":1300
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"20000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"2613943_1216",
      "tag_id":1301
    },{
      "function":"__cl",
      "tag_id":1302
    },{
      "function":"__cl",
      "tag_id":1303
    },{
      "function":"__cl",
      "tag_id":1304
    },{
      "function":"__cl",
      "tag_id":1305
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer[0].event\u0026\u0026\"datalayer-initialized\"!=window.dataLayer[0].event\u0026\u0026(function(){!function(k){window.Cookies=k();var l=!1;if(\"function\"==typeof define\u0026\u0026define.amd\u0026\u0026(define(k),l=!0),\"object\"==typeof exports\u0026\u0026(module.exports=k(),l=!0),!l){var d=window.Cookies,a=window.Cookies=k();a.noConflict=function(){return window.Cookies=d,a}}}(function(){function k(){for(var d=0,a={};d\u003Carguments.length;d++){var f=arguments[d],g;for(g in f)a[g]=f[g]}return a}function l(d){function a(f,g,h){if(\"undefined\"!=\ntypeof document){if(1\u003Carguments.length){if(\"number\"==typeof(h=k({path:\"\/\"},a.defaults,h)).expires){var n=new Date;n.setMilliseconds(n.getMilliseconds()+864E5*h.expires);h.expires=n}h.expires=h.expires?h.expires.toUTCString():\"\";try{var p=JSON.stringify(g);\/^[\\{\\[]\/.test(p)\u0026\u0026(g=p)}catch(y){}g=d.write?d.write(g,f):encodeURIComponent(String(g)).replace(\/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)\/g,decodeURIComponent);f=(f=(f=encodeURIComponent(String(f))).replace(\/%(23|24|26|2B|5E|60|7C)\/g,\ndecodeURIComponent)).replace(\/[\\(\\)]\/g,escape);p=\"\";for(var u in h)h[u]\u0026\u0026(p+=\"; \"+u,!0!==h[u]\u0026\u0026(p+=\"\\x3d\"+h[u]));return document.cookie=f+\"\\x3d\"+g+p}f||(p={});u=document.cookie?document.cookie.split(\"; \"):[];for(var z=\/(%[0-9A-Z]{2})+\/g,x=0;x\u003Cu.length;x++){var A=u[x].split(\"\\x3d\"),q=A.slice(1).join(\"\\x3d\");this.json||'\"'!==q.charAt(0)||(q=q.slice(1,-1));try{n=A[0].replace(z,decodeURIComponent);if(q=d.read?d.read(q,n):d(q,n)||q.replace(z,decodeURIComponent),this.json)try{q=JSON.parse(q)}catch(y){}if(f===\nn){p=q;break}f||(p[n]=q)}catch(y){}}return p}}return a.set=a,a.get=function(f){return a.call(a,f)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(f,g){a(f,\"\",k(g,{expires:-1}))},a.withConverter=l,a}return l(function(){})});var b=18E5,r=function(k){var l={};try{k=k.split(\"$\");for(var d=0;d\u003Ck.length;d++){var a=k[d].split(\":\"),f=a[0],g=a[1].split(\";\")[0],h=void 0;h=\"\";try{h=decodeURIComponent(g)}catch(p){}\"\"==h\u0026\u0026(h=unescape(g));var n=h;l[f]=n}}catch(p){}return l},\nw=function(k){try{var l=[];for(m in k)l.push(m+\":\"+k[m]);Cookies.set(\"gtm_main\",l.join(\"$\"),{expires:365,path:\"\/\",domain:\".\"+document.location.host.replace(\"www.\",\"\")})}catch(d){}},v=(new Date).getTime();b=v+parseInt(b);if(\"undefined\"==typeof Cookies.get(\"gtm_main\")\u0026\u0026\"undefined\"==typeof Cookies.get(\"utag_main\")){console.log(\"FIRST SESSION\");var e={ses_id:v,_pn:1,_sn:1,_ss:1,_st:b,_fh:1};w(e)}else if(\"undefined\"==typeof Cookies.get(\"gtm_main\")\u0026\u0026\"undefined\"!=typeof Cookies.get(\"utag_main\")){e=Cookies.get(\"utag_main\").split(\"$\");\nvar t=[],m;for(m in e)e[m].match\u0026\u0026e[m].match(\/^(_sn|_pn|_fh|_ss|_st|ses_id)\/)\u0026\u0026t.push(e[m].split(\";\")[0]);Cookies.set(\"gtm_main\",t.join(\"$\"),{expires:365,path:\"\/\",domain:\".\"+document.location.host.replace(\"www.\",\"\")})}e=r(Cookies.get(\"gtm_main\"));0\u003Cv-e._st?(console.log(\"NUEVA SESSION\"),e.ses_id=v,e._st=b,e._pn=1,e._sn=parseInt(e._sn)+1,e._ss=1,e._fh=0):1!=e._fh\u0026\u00260\u003Ce._pn\u0026\u0026(console.log(\"INCREMENTAR VALORES\"),e._pn=parseInt(e._pn)+1,e._ss=0,e._fh=0);e._fh=0;w(e);try{\"1\"==e._ss\u0026\u0026(document.cookie=\"userTimingTag\\x3d0;path\\x3d\/;domain\\x3d.\"+\nlocation.hostname.replace(\"www.\",\"\")+\";expires\\x3d\")}catch(k){}console.log(\"SESSION STATE DATA\",r(Cookies.get(\"gtm_main\")))}(),function(){try{if(function(e,t){var m=function(l){if(\"object\"!==typeof l.document)throw Error(\"Cookies.js requires a `window` with a `document` object\");var d=function(a,f,g){return 1===arguments.length?d.get(a):d.set(a,f,g)};d._document=l.document;d._cacheKeyPrefix=\"cookey.\";d._maxExpireDate=new Date(\"Fri, 31 Dec 9999 23:59:59 UTC\");d.defaults={path:\"\/\",secure:!1};d.get=\nfunction(a){d._cachedDocumentCookie!==d._document.cookie\u0026\u0026d._renewCache();a=d._cache[d._cacheKeyPrefix+a];return a===t?t:decodeURIComponent(a)};d.set=function(a,f,g){g=d._getExtendedOptions(g);g.expires=d._getExpiresDate(f===t?-1:g.expires);d._document.cookie=d._generateCookieString(a,f,g);return d};d.expire=function(a,f){return d.set(a,t,f)};d._getExtendedOptions=function(a){return{path:a\u0026\u0026a.path||d.defaults.path,domain:a\u0026\u0026a.domain||d.defaults.domain,expires:a\u0026\u0026a.expires||d.defaults.expires,secure:a\u0026\u0026\na.secure!==t?a.secure:d.defaults.secure}};d._isValidDate=function(a){return\"[object Date]\"===Object.prototype.toString.call(a)\u0026\u0026!isNaN(a.getTime())};d._getExpiresDate=function(a,f){f=f||new Date;\"number\"===typeof a?a=Infinity===a?d._maxExpireDate:new Date(f.getTime()+1E3*a):\"string\"===typeof a\u0026\u0026(a=new Date(a));if(a\u0026\u0026!d._isValidDate(a))throw Error(\"`expires` parameter cannot be converted to a valid Date instance\");return a};d._generateCookieString=function(a,f,g){a=a.replace(\/[^#$\u0026+\\^`|]\/g,encodeURIComponent);\na=a.replace(\/\\(\/g,\"%28\").replace(\/\\)\/g,\"%29\");f=(f+\"\").replace(\/[^!#$\u0026-+\\--:\u003C-\\[\\]-~]\/g,encodeURIComponent);g=g||{};a=a+\"\\x3d\"+f+(g.path?\";path\\x3d\"+g.path:\"\");a+=g.domain?\";domain\\x3d\"+g.domain:\"\";a+=g.expires?\";expires\\x3d\"+g.expires.toUTCString():\"\";return a+(g.secure?\";secure\":\"\")};d._getCacheFromString=function(a){var f={};a=a?a.split(\"; \"):[];for(var g=0;g\u003Ca.length;g++){var h=d._getKeyValuePairFromCookieString(a[g]);f[d._cacheKeyPrefix+h.key]===t\u0026\u0026(f[d._cacheKeyPrefix+h.key]=h.value)}return f};\nd._getKeyValuePairFromCookieString=function(a){var f=a.indexOf(\"\\x3d\");f=0\u003Ef?a.length:f;var g=a.substr(0,f);try{var h=decodeURIComponent(g)}catch(n){console\u0026\u0026\"function\"===typeof console.error\u0026\u0026console.error('Could not decode cookie with key \"'+g+'\"',n)}return{key:h,value:a.substr(f+1)}};d._renewCache=function(){d._cache=d._getCacheFromString(d._document.cookie);d._cachedDocumentCookie=d._document.cookie};d._areEnabled=function(){var a=\"1\"===d.set(\"cookies.js\",1).get(\"cookies.js\");d.expire(\"cookies.js\");\nreturn a};d.enabled=d._areEnabled();return d},k=e\u0026\u0026\"object\"===typeof e.document?m(e):m;\"function\"===typeof define\u0026\u0026define.amd?define(function(){return k}):\"object\"===typeof exports?(\"object\"===typeof module\u0026\u0026\"object\"===typeof module.exports\u0026\u0026(exports=module.exports=k),exports.Cookies=k):e.Cookies=k}(\"undefined\"===typeof window?this:window),window.utag_data){var b={event:\"datalayer-initialized\"},r;for(r in window.utag_data)r.match(\/^(cp|va|ut|meta|dom|_)\/)||(b[r]=\"null\"===window.utag_data[r]?void 0:\nwindow.utag_data[r]);(function(){try{b.previous_page=Cookies.get(\"previous_page\");var e=location.pathname.split(\"\/\");\"undefined\"!=typeof utag_data.newPageName\u0026\u0026\"\"!=utag_data.newPageName\u0026\u0026(e=utag_data.newPageName,e=e.replace(\/.*\\\/\\\/[^\\\/]*\/,\"\"),e=e.split(\"\/\"));for(var t=9\u003Ce.length?9:e.length,m=0;10\u003Em;m++)\"string\"==typeof utag_data[\"_pathname\"+m]\u0026\u0026(b[\"_pathname\"+m]=void 0);for(c=1;c\u003Ct;c++)b[\"_pathname\"+c]=\"undefined\"!=typeof e[c]\u0026\u0026\"\"!=e[c]?e[c]:\"\";b.hierarchy_1=(\"\/\"+b._pathname1+\"\/\").replace(\/\\\/+\/g,\n\"\/\")||\"\/\";b.hierarchy_2=\"undefined\"!=typeof b._pathname2?(\"\/\"+[b._pathname2].join(\"\/\")+\"\/\").replace(\/\\\/+\/g,\"\/\")||\"\/\":\"\";b.hierarchy_3=\"undefined\"!=typeof b._pathname3?(\"\/\"+[b._pathname3].join(\"\/\")+\"\/\").replace(\/\\\/+\/g,\"\/\")||\"\/\":\"\";b.hierarchy_4=\"undefined\"!=typeof b._pathname4?([\"\/\"+b._pathname4].join(\"\/\")+\"\/\").replace(\/\\\/+\/g,\"\/\")||\"\/\":\"\";b.hierarchy_5=\"undefined\"!=typeof b._pathname5?([\"\/\"+b._pathname5].join(\"\/\")+\"\/\").replace(\/\\\/+\/g,\"\/\")||\"\/\":\"\";b.hierarchy_6=\"undefined\"!=typeof b._pathname6?(\"\/\"+\n[b._pathname6,b._pathname7,b._pathname8,b._pathname9].join(\"\/\")+\"\/\").replace(\/\\\/+\/g,\"\/\")||\"\/\":\"\"}catch(k){}})();\"undefined\"!=typeof b.conWords\u0026\u0026(b.conTime=parseInt(b.conWords\/400+1).toString());b.searchTerm\u0026\u0026(b.newPageName=document.location.pathname+\"?searchTerm\\x3d\"+b.searchTerm);try{b.typeError\u0026\u0026(b.typeError=\"error \"+b.typeError)}catch(e){}b.cookieDomain=function(){var e=location.hostname.split(\".\");e.shift();return e=e.join(\".\")}();b.timeStamp=Date.now().toString();b.userId=b.userId||Cookies.get(\"_userId\")||\n\"\";b.userAgent=navigator.userAgent;var w={\"\\u00c1\":\"A\",\"\\u0102\":\"A\",\"\\u1eae\":\"A\",\"\\u1eb6\":\"A\",\"\\u1eb0\":\"A\",\"\\u1eb2\":\"A\",\"\\u1eb4\":\"A\",\"\\u01cd\":\"A\",\"\\u00c2\":\"A\",\"\\u1ea4\":\"A\",\"\\u1eac\":\"A\",\"\\u1ea6\":\"A\",\"\\u1ea8\":\"A\",\"\\u1eaa\":\"A\",\"\\u00c4\":\"A\",\"\\u01de\":\"A\",\"\\u0226\":\"A\",\"\\u01e0\":\"A\",\"\\u1ea0\":\"A\",\"\\u0200\":\"A\",\"\\u00c0\":\"A\",\"\\u1ea2\":\"A\",\"\\u0202\":\"A\",\"\\u0100\":\"A\",\"\\u0104\":\"A\",\"\\u00c5\":\"A\",\"\\u01fa\":\"A\",\"\\u1e00\":\"A\",\"\\u023a\":\"A\",\"\\u00c3\":\"A\",\"\\ua732\":\"AA\",\"\\u00c6\":\"AE\",\"\\u01fc\":\"AE\",\"\\u01e2\":\"AE\",\"\\ua734\":\"AO\",\n\"\\ua736\":\"AU\",\"\\ua738\":\"AV\",\"\\ua73a\":\"AV\",\"\\ua73c\":\"AY\",\"\\u1e02\":\"B\",\"\\u1e04\":\"B\",\"\\u0181\":\"B\",\"\\u1e06\":\"B\",\"\\u0243\":\"B\",\"\\u0182\":\"B\",\"\\u0106\":\"C\",\"\\u010c\":\"C\",\"\\u00c7\":\"C\",\"\\u1e08\":\"C\",\"\\u0108\":\"C\",\"\\u010a\":\"C\",\"\\u0187\":\"C\",\"\\u023b\":\"C\",\"\\u010e\":\"D\",\"\\u1e10\":\"D\",\"\\u1e12\":\"D\",\"\\u1e0a\":\"D\",\"\\u1e0c\":\"D\",\"\\u018a\":\"D\",\"\\u1e0e\":\"D\",\"\\u01f2\":\"D\",\"\\u01c5\":\"D\",\"\\u0110\":\"D\",\"\\u018b\":\"D\",\"\\u01f1\":\"DZ\",\"\\u01c4\":\"DZ\",\"\\u00c9\":\"E\",\"\\u0114\":\"E\",\"\\u011a\":\"E\",\"\\u0228\":\"E\",\"\\u1e1c\":\"E\",\"\\u00ca\":\"E\",\"\\u1ebe\":\"E\",\"\\u1ec6\":\"E\",\n\"\\u1ec0\":\"E\",\"\\u1ec2\":\"E\",\"\\u1ec4\":\"E\",\"\\u1e18\":\"E\",\"\\u00cb\":\"E\",\"\\u0116\":\"E\",\"\\u1eb8\":\"E\",\"\\u0204\":\"E\",\"\\u00c8\":\"E\",\"\\u1eba\":\"E\",\"\\u0206\":\"E\",\"\\u0112\":\"E\",\"\\u1e16\":\"E\",\"\\u1e14\":\"E\",\"\\u0118\":\"E\",\"\\u0246\":\"E\",\"\\u1ebc\":\"E\",\"\\u1e1a\":\"E\",\"\\ua76a\":\"ET\",\"\\u1e1e\":\"F\",\"\\u0191\":\"F\",\"\\u01f4\":\"G\",\"\\u011e\":\"G\",\"\\u01e6\":\"G\",\"\\u0122\":\"G\",\"\\u011c\":\"G\",\"\\u0120\":\"G\",\"\\u0193\":\"G\",\"\\u1e20\":\"G\",\"\\u01e4\":\"G\",\"\\u1e2a\":\"H\",\"\\u021e\":\"H\",\"\\u1e28\":\"H\",\"\\u0124\":\"H\",\"\\u2c67\":\"H\",\"\\u1e26\":\"H\",\"\\u1e22\":\"H\",\"\\u1e24\":\"H\",\"\\u0126\":\"H\",\n\"\\u00cd\":\"I\",\"\\u012c\":\"I\",\"\\u01cf\":\"I\",\"\\u00ce\":\"I\",\"\\u00cf\":\"I\",\"\\u1e2e\":\"I\",\"\\u0130\":\"I\",\"\\u1eca\":\"I\",\"\\u0208\":\"I\",\"\\u00cc\":\"I\",\"\\u1ec8\":\"I\",\"\\u020a\":\"I\",\"\\u012a\":\"I\",\"\\u012e\":\"I\",\"\\u0197\":\"I\",\"\\u0128\":\"I\",\"\\u1e2c\":\"I\",\"\\ua779\":\"D\",\"\\ua77b\":\"F\",\"\\ua77d\":\"G\",\"\\ua782\":\"R\",\"\\ua784\":\"S\",\"\\ua786\":\"T\",\"\\ua76c\":\"IS\",\"\\u0134\":\"J\",\"\\u0248\":\"J\",\"\\u1e30\":\"K\",\"\\u01e8\":\"K\",\"\\u0136\":\"K\",\"\\u2c69\":\"K\",\"\\ua742\":\"K\",\"\\u1e32\":\"K\",\"\\u0198\":\"K\",\"\\u1e34\":\"K\",\"\\ua740\":\"K\",\"\\ua744\":\"K\",\"\\u0139\":\"L\",\"\\u023d\":\"L\",\"\\u013d\":\"L\",\n\"\\u013b\":\"L\",\"\\u1e3c\":\"L\",\"\\u1e36\":\"L\",\"\\u1e38\":\"L\",\"\\u2c60\":\"L\",\"\\ua748\":\"L\",\"\\u1e3a\":\"L\",\"\\u013f\":\"L\",\"\\u2c62\":\"L\",\"\\u01c8\":\"L\",\"\\u0141\":\"L\",\"\\u01c7\":\"LJ\",\"\\u1e3e\":\"M\",\"\\u1e40\":\"M\",\"\\u1e42\":\"M\",\"\\u2c6e\":\"M\",\"\\u0143\":\"N\",\"\\u0147\":\"N\",\"\\u0145\":\"N\",\"\\u1e4a\":\"N\",\"\\u1e44\":\"N\",\"\\u1e46\":\"N\",\"\\u01f8\":\"N\",\"\\u019d\":\"N\",\"\\u1e48\":\"N\",\"\\u0220\":\"N\",\"\\u01cb\":\"N\",\"\\u00d1\":\"N\",\"\\u01ca\":\"NJ\",\"\\u00d3\":\"O\",\"\\u014e\":\"O\",\"\\u01d1\":\"O\",\"\\u00d4\":\"O\",\"\\u1ed0\":\"O\",\"\\u1ed8\":\"O\",\"\\u1ed2\":\"O\",\"\\u1ed4\":\"O\",\"\\u1ed6\":\"O\",\"\\u00d6\":\"O\",\n\"\\u022a\":\"O\",\"\\u022e\":\"O\",\"\\u0230\":\"O\",\"\\u1ecc\":\"O\",\"\\u0150\":\"O\",\"\\u020c\":\"O\",\"\\u00d2\":\"O\",\"\\u1ece\":\"O\",\"\\u01a0\":\"O\",\"\\u1eda\":\"O\",\"\\u1ee2\":\"O\",\"\\u1edc\":\"O\",\"\\u1ede\":\"O\",\"\\u1ee0\":\"O\",\"\\u020e\":\"O\",\"\\ua74a\":\"O\",\"\\ua74c\":\"O\",\"\\u014c\":\"O\",\"\\u1e52\":\"O\",\"\\u1e50\":\"O\",\"\\u019f\":\"O\",\"\\u01ea\":\"O\",\"\\u01ec\":\"O\",\"\\u00d8\":\"O\",\"\\u01fe\":\"O\",\"\\u00d5\":\"O\",\"\\u1e4c\":\"O\",\"\\u1e4e\":\"O\",\"\\u022c\":\"O\",\"\\u01a2\":\"OI\",\"\\ua74e\":\"OO\",\"\\u0190\":\"E\",\"\\u0186\":\"O\",\"\\u0222\":\"OU\",\"\\u1e54\":\"P\",\"\\u1e56\":\"P\",\"\\ua752\":\"P\",\"\\u01a4\":\"P\",\"\\ua754\":\"P\",\n\"\\u2c63\":\"P\",\"\\ua750\":\"P\",\"\\ua758\":\"Q\",\"\\ua756\":\"Q\",\"\\u0154\":\"R\",\"\\u0158\":\"R\",\"\\u0156\":\"R\",\"\\u1e58\":\"R\",\"\\u1e5a\":\"R\",\"\\u1e5c\":\"R\",\"\\u0210\":\"R\",\"\\u0212\":\"R\",\"\\u1e5e\":\"R\",\"\\u024c\":\"R\",\"\\u2c64\":\"R\",\"\\ua73e\":\"C\",\"\\u018e\":\"E\",\"\\u015a\":\"S\",\"\\u1e64\":\"S\",\"\\u0160\":\"S\",\"\\u1e66\":\"S\",\"\\u015e\":\"S\",\"\\u015c\":\"S\",\"\\u0218\":\"S\",\"\\u1e60\":\"S\",\"\\u1e62\":\"S\",\"\\u1e68\":\"S\",\"\\u0164\":\"T\",\"\\u0162\":\"T\",\"\\u1e70\":\"T\",\"\\u021a\":\"T\",\"\\u023e\":\"T\",\"\\u1e6a\":\"T\",\"\\u1e6c\":\"T\",\"\\u01ac\":\"T\",\"\\u1e6e\":\"T\",\"\\u01ae\":\"T\",\"\\u0166\":\"T\",\"\\u2c6f\":\"A\",\n\"\\ua780\":\"L\",\"\\u019c\":\"M\",\"\\u0245\":\"V\",\"\\ua728\":\"TZ\",\"\\u00da\":\"U\",\"\\u016c\":\"U\",\"\\u01d3\":\"U\",\"\\u00db\":\"U\",\"\\u1e76\":\"U\",\"\\u00dc\":\"U\",\"\\u01d7\":\"U\",\"\\u01d9\":\"U\",\"\\u01db\":\"U\",\"\\u01d5\":\"U\",\"\\u1e72\":\"U\",\"\\u1ee4\":\"U\",\"\\u0170\":\"U\",\"\\u0214\":\"U\",\"\\u00d9\":\"U\",\"\\u1ee6\":\"U\",\"\\u01af\":\"U\",\"\\u1ee8\":\"U\",\"\\u1ef0\":\"U\",\"\\u1eea\":\"U\",\"\\u1eec\":\"U\",\"\\u1eee\":\"U\",\"\\u0216\":\"U\",\"\\u016a\":\"U\",\"\\u1e7a\":\"U\",\"\\u0172\":\"U\",\"\\u016e\":\"U\",\"\\u0168\":\"U\",\"\\u1e78\":\"U\",\"\\u1e74\":\"U\",\"\\ua75e\":\"V\",\"\\u1e7e\":\"V\",\"\\u01b2\":\"V\",\"\\u1e7c\":\"V\",\"\\ua760\":\"VY\",\n\"\\u1e82\":\"W\",\"\\u0174\":\"W\",\"\\u1e84\":\"W\",\"\\u1e86\":\"W\",\"\\u1e88\":\"W\",\"\\u1e80\":\"W\",\"\\u2c72\":\"W\",\"\\u1e8c\":\"X\",\"\\u1e8a\":\"X\",\"\\u00dd\":\"Y\",\"\\u0176\":\"Y\",\"\\u0178\":\"Y\",\"\\u1e8e\":\"Y\",\"\\u1ef4\":\"Y\",\"\\u1ef2\":\"Y\",\"\\u01b3\":\"Y\",\"\\u1ef6\":\"Y\",\"\\u1efe\":\"Y\",\"\\u0232\":\"Y\",\"\\u024e\":\"Y\",\"\\u1ef8\":\"Y\",\"\\u0179\":\"Z\",\"\\u017d\":\"Z\",\"\\u1e90\":\"Z\",\"\\u2c6b\":\"Z\",\"\\u017b\":\"Z\",\"\\u1e92\":\"Z\",\"\\u0224\":\"Z\",\"\\u1e94\":\"Z\",\"\\u01b5\":\"Z\",\"\\u0132\":\"IJ\",\"\\u0152\":\"OE\",\"\\u1d00\":\"A\",\"\\u1d01\":\"AE\",\"\\u0299\":\"B\",\"\\u1d03\":\"B\",\"\\u1d04\":\"C\",\"\\u1d05\":\"D\",\"\\u1d07\":\"E\",\n\"\\ua730\":\"F\",\"\\u0262\":\"G\",\"\\u029b\":\"G\",\"\\u029c\":\"H\",\"\\u026a\":\"I\",\"\\u0281\":\"R\",\"\\u1d0a\":\"J\",\"\\u1d0b\":\"K\",\"\\u029f\":\"L\",\"\\u1d0c\":\"L\",\"\\u1d0d\":\"M\",\"\\u0274\":\"N\",\"\\u1d0f\":\"O\",\"\\u0276\":\"OE\",\"\\u1d10\":\"O\",\"\\u1d15\":\"OU\",\"\\u1d18\":\"P\",\"\\u0280\":\"R\",\"\\u1d0e\":\"N\",\"\\u1d19\":\"R\",\"\\ua731\":\"S\",\"\\u1d1b\":\"T\",\"\\u2c7b\":\"E\",\"\\u1d1a\":\"R\",\"\\u1d1c\":\"U\",\"\\u1d20\":\"V\",\"\\u1d21\":\"W\",\"\\u028f\":\"Y\",\"\\u1d22\":\"Z\",\"\\u00e1\":\"a\",\"\\u0103\":\"a\",\"\\u1eaf\":\"a\",\"\\u1eb7\":\"a\",\"\\u1eb1\":\"a\",\"\\u1eb3\":\"a\",\"\\u1eb5\":\"a\",\"\\u01ce\":\"a\",\"\\u00e2\":\"a\",\"\\u1ea5\":\"a\",\n\"\\u1ead\":\"a\",\"\\u1ea7\":\"a\",\"\\u1ea9\":\"a\",\"\\u1eab\":\"a\",\"\\u00e4\":\"a\",\"\\u01df\":\"a\",\"\\u0227\":\"a\",\"\\u01e1\":\"a\",\"\\u1ea1\":\"a\",\"\\u0201\":\"a\",\"\\u00e0\":\"a\",\"\\u1ea3\":\"a\",\"\\u0203\":\"a\",\"\\u0101\":\"a\",\"\\u0105\":\"a\",\"\\u1d8f\":\"a\",\"\\u1e9a\":\"a\",\"\\u00e5\":\"a\",\"\\u01fb\":\"a\",\"\\u1e01\":\"a\",\"\\u2c65\":\"a\",\"\\u00e3\":\"a\",\"\\ua733\":\"aa\",\"\\u00e6\":\"ae\",\"\\u01fd\":\"ae\",\"\\u01e3\":\"ae\",\"\\ua735\":\"ao\",\"\\ua737\":\"au\",\"\\ua739\":\"av\",\"\\ua73b\":\"av\",\"\\ua73d\":\"ay\",\"\\u1e03\":\"b\",\"\\u1e05\":\"b\",\"\\u0253\":\"b\",\"\\u1e07\":\"b\",\"\\u1d6c\":\"b\",\"\\u1d80\":\"b\",\"\\u0180\":\"b\",\n\"\\u0183\":\"b\",\"\\u0275\":\"o\",\"\\u0107\":\"c\",\"\\u010d\":\"c\",\"\\u00e7\":\"c\",\"\\u1e09\":\"c\",\"\\u0109\":\"c\",\"\\u0255\":\"c\",\"\\u010b\":\"c\",\"\\u0188\":\"c\",\"\\u023c\":\"c\",\"\\u010f\":\"d\",\"\\u1e11\":\"d\",\"\\u1e13\":\"d\",\"\\u0221\":\"d\",\"\\u1e0b\":\"d\",\"\\u1e0d\":\"d\",\"\\u0257\":\"d\",\"\\u1d91\":\"d\",\"\\u1e0f\":\"d\",\"\\u1d6d\":\"d\",\"\\u1d81\":\"d\",\"\\u0111\":\"d\",\"\\u0256\":\"d\",\"\\u018c\":\"d\",\"\\u0131\":\"i\",\"\\u0237\":\"j\",\"\\u025f\":\"j\",\"\\u0284\":\"j\",\"\\u01f3\":\"dz\",\"\\u01c6\":\"dz\",\"\\u00e9\":\"e\",\"\\u0115\":\"e\",\"\\u011b\":\"e\",\"\\u0229\":\"e\",\"\\u1e1d\":\"e\",\"\\u00ea\":\"e\",\"\\u1ebf\":\"e\",\"\\u1ec7\":\"e\",\n\"\\u1ec1\":\"e\",\"\\u1ec3\":\"e\",\"\\u1ec5\":\"e\",\"\\u1e19\":\"e\",\"\\u00eb\":\"e\",\"\\u0117\":\"e\",\"\\u1eb9\":\"e\",\"\\u0205\":\"e\",\"\\u00e8\":\"e\",\"\\u1ebb\":\"e\",\"\\u0207\":\"e\",\"\\u0113\":\"e\",\"\\u1e17\":\"e\",\"\\u1e15\":\"e\",\"\\u2c78\":\"e\",\"\\u0119\":\"e\",\"\\u1d92\":\"e\",\"\\u0247\":\"e\",\"\\u1ebd\":\"e\",\"\\u1e1b\":\"e\",\"\\ua76b\":\"et\",\"\\u1e1f\":\"f\",\"\\u0192\":\"f\",\"\\u1d6e\":\"f\",\"\\u1d82\":\"f\",\"\\u01f5\":\"g\",\"\\u011f\":\"g\",\"\\u01e7\":\"g\",\"\\u0123\":\"g\",\"\\u011d\":\"g\",\"\\u0121\":\"g\",\"\\u0260\":\"g\",\"\\u1e21\":\"g\",\"\\u1d83\":\"g\",\"\\u01e5\":\"g\",\"\\u1e2b\":\"h\",\"\\u021f\":\"h\",\"\\u1e29\":\"h\",\"\\u0125\":\"h\",\n\"\\u2c68\":\"h\",\"\\u1e27\":\"h\",\"\\u1e23\":\"h\",\"\\u1e25\":\"h\",\"\\u0266\":\"h\",\"\\u1e96\":\"h\",\"\\u0127\":\"h\",\"\\u0195\":\"hv\",\"\\u00ed\":\"i\",\"\\u012d\":\"i\",\"\\u01d0\":\"i\",\"\\u00ee\":\"i\",\"\\u00ef\":\"i\",\"\\u1e2f\":\"i\",\"\\u1ecb\":\"i\",\"\\u0209\":\"i\",\"\\u00ec\":\"i\",\"\\u1ec9\":\"i\",\"\\u020b\":\"i\",\"\\u012b\":\"i\",\"\\u012f\":\"i\",\"\\u1d96\":\"i\",\"\\u0268\":\"i\",\"\\u0129\":\"i\",\"\\u1e2d\":\"i\",\"\\ua77a\":\"d\",\"\\ua77c\":\"f\",\"\\u1d79\":\"g\",\"\\ua783\":\"r\",\"\\ua785\":\"s\",\"\\ua787\":\"t\",\"\\ua76d\":\"is\",\"\\u01f0\":\"j\",\"\\u0135\":\"j\",\"\\u029d\":\"j\",\"\\u0249\":\"j\",\"\\u1e31\":\"k\",\"\\u01e9\":\"k\",\"\\u0137\":\"k\",\n\"\\u2c6a\":\"k\",\"\\ua743\":\"k\",\"\\u1e33\":\"k\",\"\\u0199\":\"k\",\"\\u1e35\":\"k\",\"\\u1d84\":\"k\",\"\\ua741\":\"k\",\"\\ua745\":\"k\",\"\\u013a\":\"l\",\"\\u019a\":\"l\",\"\\u026c\":\"l\",\"\\u013e\":\"l\",\"\\u013c\":\"l\",\"\\u1e3d\":\"l\",\"\\u0234\":\"l\",\"\\u1e37\":\"l\",\"\\u1e39\":\"l\",\"\\u2c61\":\"l\",\"\\ua749\":\"l\",\"\\u1e3b\":\"l\",\"\\u0140\":\"l\",\"\\u026b\":\"l\",\"\\u1d85\":\"l\",\"\\u026d\":\"l\",\"\\u0142\":\"l\",\"\\u01c9\":\"lj\",\"\\u017f\":\"s\",\"\\u1e9c\":\"s\",\"\\u1e9b\":\"s\",\"\\u1e9d\":\"s\",\"\\u1e3f\":\"m\",\"\\u1e41\":\"m\",\"\\u1e43\":\"m\",\"\\u0271\":\"m\",\"\\u1d6f\":\"m\",\"\\u1d86\":\"m\",\"\\u0144\":\"n\",\"\\u0148\":\"n\",\"\\u0146\":\"n\",\n\"\\u1e4b\":\"n\",\"\\u0235\":\"n\",\"\\u1e45\":\"n\",\"\\u1e47\":\"n\",\"\\u01f9\":\"n\",\"\\u0272\":\"n\",\"\\u1e49\":\"n\",\"\\u019e\":\"n\",\"\\u1d70\":\"n\",\"\\u1d87\":\"n\",\"\\u0273\":\"n\",\"\\u00f1\":\"n\",\"\\u01cc\":\"nj\",\"\\u00f3\":\"o\",\"\\u014f\":\"o\",\"\\u01d2\":\"o\",\"\\u00f4\":\"o\",\"\\u1ed1\":\"o\",\"\\u1ed9\":\"o\",\"\\u1ed3\":\"o\",\"\\u1ed5\":\"o\",\"\\u1ed7\":\"o\",\"\\u00f6\":\"o\",\"\\u022b\":\"o\",\"\\u022f\":\"o\",\"\\u0231\":\"o\",\"\\u1ecd\":\"o\",\"\\u0151\":\"o\",\"\\u020d\":\"o\",\"\\u00f2\":\"o\",\"\\u1ecf\":\"o\",\"\\u01a1\":\"o\",\"\\u1edb\":\"o\",\"\\u1ee3\":\"o\",\"\\u1edd\":\"o\",\"\\u1edf\":\"o\",\"\\u1ee1\":\"o\",\"\\u020f\":\"o\",\"\\ua74b\":\"o\",\n\"\\ua74d\":\"o\",\"\\u2c7a\":\"o\",\"\\u014d\":\"o\",\"\\u1e53\":\"o\",\"\\u1e51\":\"o\",\"\\u01eb\":\"o\",\"\\u01ed\":\"o\",\"\\u00f8\":\"o\",\"\\u01ff\":\"o\",\"\\u00f5\":\"o\",\"\\u1e4d\":\"o\",\"\\u1e4f\":\"o\",\"\\u022d\":\"o\",\"\\u01a3\":\"oi\",\"\\ua74f\":\"oo\",\"\\u025b\":\"e\",\"\\u1d93\":\"e\",\"\\u0254\":\"o\",\"\\u1d97\":\"o\",\"\\u0223\":\"ou\",\"\\u1e55\":\"p\",\"\\u1e57\":\"p\",\"\\ua753\":\"p\",\"\\u01a5\":\"p\",\"\\u1d71\":\"p\",\"\\u1d88\":\"p\",\"\\ua755\":\"p\",\"\\u1d7d\":\"p\",\"\\ua751\":\"p\",\"\\ua759\":\"q\",\"\\u02a0\":\"q\",\"\\u024b\":\"q\",\"\\ua757\":\"q\",\"\\u0155\":\"r\",\"\\u0159\":\"r\",\"\\u0157\":\"r\",\"\\u1e59\":\"r\",\"\\u1e5b\":\"r\",\"\\u1e5d\":\"r\",\n\"\\u0211\":\"r\",\"\\u027e\":\"r\",\"\\u1d73\":\"r\",\"\\u0213\":\"r\",\"\\u1e5f\":\"r\",\"\\u027c\":\"r\",\"\\u1d72\":\"r\",\"\\u1d89\":\"r\",\"\\u024d\":\"r\",\"\\u027d\":\"r\",\"\\u2184\":\"c\",\"\\ua73f\":\"c\",\"\\u0258\":\"e\",\"\\u027f\":\"r\",\"\\u015b\":\"s\",\"\\u1e65\":\"s\",\"\\u0161\":\"s\",\"\\u1e67\":\"s\",\"\\u015f\":\"s\",\"\\u015d\":\"s\",\"\\u0219\":\"s\",\"\\u1e61\":\"s\",\"\\u1e63\":\"s\",\"\\u1e69\":\"s\",\"\\u0282\":\"s\",\"\\u1d74\":\"s\",\"\\u1d8a\":\"s\",\"\\u023f\":\"s\",\"\\u0261\":\"g\",\"\\u1d11\":\"o\",\"\\u1d13\":\"o\",\"\\u1d1d\":\"u\",\"\\u0165\":\"t\",\"\\u0163\":\"t\",\"\\u1e71\":\"t\",\"\\u021b\":\"t\",\"\\u0236\":\"t\",\"\\u1e97\":\"t\",\"\\u2c66\":\"t\",\n\"\\u1e6b\":\"t\",\"\\u1e6d\":\"t\",\"\\u01ad\":\"t\",\"\\u1e6f\":\"t\",\"\\u1d75\":\"t\",\"\\u01ab\":\"t\",\"\\u0288\":\"t\",\"\\u0167\":\"t\",\"\\u1d7a\":\"th\",\"\\u0250\":\"a\",\"\\u1d02\":\"ae\",\"\\u01dd\":\"e\",\"\\u1d77\":\"g\",\"\\u0265\":\"h\",\"\\u02ae\":\"h\",\"\\u02af\":\"h\",\"\\u1d09\":\"i\",\"\\u029e\":\"k\",\"\\ua781\":\"l\",\"\\u026f\":\"m\",\"\\u0270\":\"m\",\"\\u1d14\":\"oe\",\"\\u0279\":\"r\",\"\\u027b\":\"r\",\"\\u027a\":\"r\",\"\\u2c79\":\"r\",\"\\u0287\":\"t\",\"\\u028c\":\"v\",\"\\u028d\":\"w\",\"\\u028e\":\"y\",\"\\ua729\":\"tz\",\"\\u00fa\":\"u\",\"\\u016d\":\"u\",\"\\u01d4\":\"u\",\"\\u00fb\":\"u\",\"\\u1e77\":\"u\",\"\\u00fc\":\"u\",\"\\u01d8\":\"u\",\"\\u01da\":\"u\",\n\"\\u01dc\":\"u\",\"\\u01d6\":\"u\",\"\\u1e73\":\"u\",\"\\u1ee5\":\"u\",\"\\u0171\":\"u\",\"\\u0215\":\"u\",\"\\u00f9\":\"u\",\"\\u1ee7\":\"u\",\"\\u01b0\":\"u\",\"\\u1ee9\":\"u\",\"\\u1ef1\":\"u\",\"\\u1eeb\":\"u\",\"\\u1eed\":\"u\",\"\\u1eef\":\"u\",\"\\u0217\":\"u\",\"\\u016b\":\"u\",\"\\u1e7b\":\"u\",\"\\u0173\":\"u\",\"\\u1d99\":\"u\",\"\\u016f\":\"u\",\"\\u0169\":\"u\",\"\\u1e79\":\"u\",\"\\u1e75\":\"u\",\"\\u1d6b\":\"ue\",\"\\ua778\":\"um\",\"\\u2c74\":\"v\",\"\\ua75f\":\"v\",\"\\u1e7f\":\"v\",\"\\u028b\":\"v\",\"\\u1d8c\":\"v\",\"\\u2c71\":\"v\",\"\\u1e7d\":\"v\",\"\\ua761\":\"vy\",\"\\u1e83\":\"w\",\"\\u0175\":\"w\",\"\\u1e85\":\"w\",\"\\u1e87\":\"w\",\"\\u1e89\":\"w\",\"\\u1e81\":\"w\",\n\"\\u2c73\":\"w\",\"\\u1e98\":\"w\",\"\\u1e8d\":\"x\",\"\\u1e8b\":\"x\",\"\\u1d8d\":\"x\",\"\\u00fd\":\"y\",\"\\u0177\":\"y\",\"\\u00ff\":\"y\",\"\\u1e8f\":\"y\",\"\\u1ef5\":\"y\",\"\\u1ef3\":\"y\",\"\\u01b4\":\"y\",\"\\u1ef7\":\"y\",\"\\u1eff\":\"y\",\"\\u0233\":\"y\",\"\\u1e99\":\"y\",\"\\u024f\":\"y\",\"\\u1ef9\":\"y\",\"\\u017a\":\"z\",\"\\u017e\":\"z\",\"\\u1e91\":\"z\",\"\\u0291\":\"z\",\"\\u2c6c\":\"z\",\"\\u017c\":\"z\",\"\\u1e93\":\"z\",\"\\u0225\":\"z\",\"\\u1e95\":\"z\",\"\\u1d76\":\"z\",\"\\u1d8e\":\"z\",\"\\u0290\":\"z\",\"\\u01b6\":\"z\",\"\\u0240\":\"z\",\"\\ufb00\":\"ff\",\"\\ufb03\":\"ffi\",\"\\ufb04\":\"ffl\",\"\\ufb01\":\"fi\",\"\\ufb02\":\"fl\",\"\\u0133\":\"ij\",\n\"\\u0153\":\"oe\",\"\\ufb06\":\"st\",\"\\u2090\":\"a\",\"\\u2091\":\"e\",\"\\u1d62\":\"i\",\"\\u2c7c\":\"j\",\"\\u2092\":\"o\",\"\\u1d63\":\"r\",\"\\u1d64\":\"u\",\"\\u1d65\":\"v\",\"\\u2093\":\"x\"};String.prototype.latinise=function(){return this.replace(\/[^A-Za-z0-9\\[\\] ]\/g,function(e){return w[e]||e})};String.prototype.latinize=String.prototype.latinise;String.prototype.isLatin=function(){return this==this.latinise()};var v=[\"gaIdentifier\",\"globalGaIdentifier\",\"newPageTitle\"];for(c in b)try{\"undefined\"!=typeof b[c]\u0026\u0026-1==v.indexOf(c)\u0026\u0026(b[c]=b[c]instanceof\nArray||b[c]instanceof Object?b[c]:b[c].toString().latinise().trim().toLowerCase())}catch(e){}try{b.conLangPathname=(\"\/\"+b._pathname1+\"\/\").replace(\/\\\/+\/g,\"\/\")||\"\/\"}catch(e){}\"undefined\"!=typeof b.newPageName\u0026\u0026(b.newPageName=b.newPageName.replace(\/.*\\\/\\\/[^\\\/]*\/,\"\"));b.typeOfAd||console.log(\"NO ADS\");for(r in b)\"\"==b[r]\u0026\u0026(b[r]=void 0);dataLayer.push(b);\"\"!=b.userId\u0026\u0026Cookies.set(\"userId\",b.userId,{domain:b.cookieDomain,expires:2592E3});Cookies.set(\"previous_page\",document.location.pathname,{domain:b.cookieDomain,\nexpires:3600});Cookies.set(\"lastUserState\",b.userState,{domain:b.cookieDomain,expires:2592E3})}else dataLayer.push({event:\"datalayer-initialized\"})}catch(e){console.log(\"UTAG DL CONVERSION ERROR\",e),dataLayer.push({event:\"datalayer-initialized\"})}}());\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.utag||(window.utag={id:\"grupozeta.main-web\",o:{},sender:{},send:{},view:function(a,c,d){console.log(\"DEBUG\",a)},link:function(a,c,d){console.log(\"DEBUG\",a)}});try{var g=window.utag.link;window.utag.link=function(){console.log(\"UTAG LINK INTERCEPTED\",arguments);if(arguments[0].eventCategory\u0026\u0026arguments[0].eventAction){var a={event:\"gaEvent\",eventCategory:arguments[0].eventCategory,eventAction:arguments[0].eventAction,eventLabel:arguments[0].eventLabel||void 0,eventValue:arguments[0].eventValue||\nvoid 0,hComment:void 0,hShareLinkedin:void 0,hShareFacebook:void 0,hShareGoogle:void 0,hShareTwitter:void 0,hSharePrint:void 0,hSharePinterest:void 0,hShareEmail:void 0,hSendLetter:void 0,hShareWhatsapp:void 0,hShareTelegram:void 0,hShareFacebookMessenger:void 0,hDownDoc:void 0,cMetricEngageTime:void 0,hVideoStart:void 0,hVideoComplete:void 0};\"acciones noticias\"==arguments[0].eventCategory\u0026\u0026\"enviar comentario\"==arguments[0].eventAction\u0026\u0026\"enviado\"==arguments[0].eventLabel\u0026\u0026(a.hComment=1);dataLayer.push(a)}if(arguments[0].eventCategory\u0026\u0026\narguments[0].eventAction\u0026\u0026arguments[0].pasoProceso\u0026\u0026\"realizar el pago\"==arguments[0].pasoProceso)try{google_tag_manager[\"GTM-TTM3HX\"].dataLayer.get(\"pasoProceso\");var c=google_tag_manager[\"GTM-TTM3HX\"].dataLayer.get(\"ecCategory\"),d=google_tag_manager[\"GTM-TTM3HX\"].dataLayer.get(\"ecName\").split(\"|\"),e=google_tag_manager[\"GTM-TTM3HX\"].dataLayer.get(\"ecPrice\")?google_tag_manager[\"GTM-TTM3HX\"].dataLayer.get(\"ecPrice\").split(\"|\"):google_tag_manager[\"GTM-TTM3HX\"].dataLayer.get(\"ecRevenue\"),f=google_tag_manager[\"GTM-TTM3HX\"].dataLayer.get(\"ecProductId\").split(\"|\");\ngoogle_tag_manager[\"GTM-TTM3HX\"].dataLayer.get(\"ecSubscriptions\").split(\"|\");var h=google_tag_manager[\"GTM-TTM3HX\"].dataLayer.get(\"ecVariant\").split(\"|\");a={checkout:{currencyCode:\"EUR\",actionField:{step:2},products:[]}};for(var b=0;b\u003Cf.length;b++)a.checkout.products.push({id:f[b],name:d[b],brand:\"elperiodico\",category:c,variant:h[b],price:e[b]});dataLayer.push({event:\"eec-suscripciones-checkout-step\",eventCategory:\"ecommerce\",eventAction:\"checkout step\",eventLabel:\"2\",eventValue:void 0,nonInteraction:!1,\necommerce:a})}catch(k){}return g.apply(this,arguments)};var e=window.utag.view;window.utag.view=function(){arguments[0]\u0026\u0026arguments[0].eventCategory\u0026\u0026arguments[0].eventCategory.match(\/^scroll\/)?(dataLayer.push({event:\"gaEvent\",eventCategory:arguments[0].eventCategory,eventAction:arguments[0].eventAction,eventLabel:arguments[0].eventLabel,conType:arguments[0].conType,conAuthor:arguments[0].conAuthor,conPayment:arguments[0].conPayment,conSection:arguments[0].conSection,conSubsection:arguments[0].conSubsection,\nconFront:arguments[0].conFront,conRelArticle:arguments[0].conRelArticle,conRelOpinion:arguments[0].conRelOpinion,conPerson:arguments[0].conPerson,conPub:arguments[0].conPub,conMod:arguments[0].conMod,conIdpage:arguments[0].conIdpage,conWords:arguments[0].conWords,conTags:arguments[0].conTags}),dataLayer.push({event:\"virtual-pageview\",newPageTitle:arguments[0].newPageTitle,newPageName:arguments[0].newPageName,conType:arguments[0].conType,conAuthor:arguments[0].conAuthor,conPayment:arguments[0].conPayment,\nconSection:arguments[0].conSection,conSubsection:arguments[0].conSubsection,conFront:arguments[0].conFront,conRelArticle:arguments[0].conRelArticle,conRelOpinion:arguments[0].conRelOpinion,conPerson:arguments[0].conPerson,conPub:arguments[0].conPub,conMod:arguments[0].conMod,conIdpage:arguments[0].conIdpage,conWords:arguments[0].conWords,conTags:arguments[0].conTags})):dataLayer.push({event:\"virtual-pageview\",newPageTitle:void 0,newPageName:arguments[0].newPageName||void 0});return e.apply(this,arguments)}}catch(a){console.log(\"LOG\",\na)}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":3
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){!function(d){var k=!1;if(\"function\"==typeof define\u0026\u0026define.amd\u0026\u0026(define(d),k=!0),\"object\"==typeof exports\u0026\u0026(module.exports=d(),k=!0),!k){var a=window.Cookies,b=window.Cookies=d();b.noConflict=function(){return window.Cookies=a,b}}}(function(){function d(){for(var a=0,b={};a\u003Carguments.length;a++){var c=arguments[a],e;for(e in c)b[e]=c[e]}return b}function k(a){function b(c,e,f){if(\"undefined\"!=typeof document){if(1\u003Carguments.length){if(\"number\"==typeof(f=d({path:\"\/\"},b.defaults,f)).expires){var l=\nnew Date;l.setMilliseconds(l.getMilliseconds()+864E5*f.expires);f.expires=l}f.expires=f.expires?f.expires.toUTCString():\"\";try{var h=JSON.stringify(e);\/^[\\{\\[]\/.test(h)\u0026\u0026(e=h)}catch(r){}e=a.write?a.write(e,c):encodeURIComponent(String(e)).replace(\/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)\/g,decodeURIComponent);c=(c=(c=encodeURIComponent(String(c))).replace(\/%(23|24|26|2B|5E|60|7C)\/g,decodeURIComponent)).replace(\/[\\(\\)]\/g,escape);h=\"\";for(var m in f)f[m]\u0026\u0026(h+=\"; \"+m,!0!==f[m]\u0026\u0026(h+=\"\\x3d\"+\nf[m]));return document.cookie=c+\"\\x3d\"+e+h}c||(h={});m=document.cookie?document.cookie.split(\"; \"):[];for(var t=\/(%[0-9A-Z]{2})+\/g,p=0;p\u003Cm.length;p++){var u=m[p].split(\"\\x3d\"),g=u.slice(1).join(\"\\x3d\");this.json||'\"'!==g.charAt(0)||(g=g.slice(1,-1));try{l=u[0].replace(t,decodeURIComponent);if(g=a.read?a.read(g,l):a(g,l)||g.replace(t,decodeURIComponent),this.json)try{g=JSON.parse(g)}catch(r){}if(c===l){h=g;break}c||(h[l]=g)}catch(r){}}return h}}return b.set=b,b.get=function(c){return b.call(b,c)},\nb.getJSON=function(){return b.apply({json:!0},[].slice.call(arguments))},b.defaults={},b.remove=function(c,e){b(c,\"\",d(e,{expires:-1}))},b.withConverter=k,b}return k(function(){})});try{var v=function(){var d=[\"ad-0\",\"ad-container\",\"ad-top\",\"contentAd\"],k=\"ad-container\",a=document.createElement(\"div\");a.id=k;a.classList=d.join(\" \");a.style.width=\"1px\";a.style.height=\"1px\";a.style.position=\"absolute\";a.style.left=\"-100%\";document.body.appendChild(a);d=window.getComputedStyle(a);return\"none\"===d.display||\n\"hidden\"===d.visibility?\"adblock activado\":\"adblock desactivado\"},q=Cookies.get(\"tecAdblock\"),n=v();\"undefined\"==typeof q||\"undefined\"==q?(console.log(\"CREA COOKIE\"),Cookies.set(\"tecAdblock\",n,{expires:365,path:\"\/\",domain:\".\"+document.location.host.replace(\"www.\",\"\")}),dataLayer.push({event:\"gaEvent\",\"event-name\":\"adblock-state-change\",tecAdblock:n,eventCategory:\"estado adblock\",eventAction:n,eventLabel:",["escape",["macro",73],8,16],",nonInteraction:!0})):q!=n\u0026\u0026(console.log(\"UPDATEA COOKIE\"),Cookies.set(\"tecAdblock\",\nn,{expires:365,path:\"\/\",domain:\".\"+document.location.host.replace(\"www.\",\"\")}),dataLayer.push({event:\"gaEvent\",\"event-name\":\"adblock-state-change\",tecAdblock:n,eventCategory:\"cambio estado adblock\",eventAction:n,eventLabel:",["escape",["macro",73],8,16],",nonInteraction:!0}))}catch(d){}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":4
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eif(\"undefined\"!=typeof jQuery\u0026\u0026\"function\"==typeof jQuery().on){try{jQuery(document).on(\"mousedown\",'map area[href^\\x3d\"(http:|https:)?\/\/\"]',function(){var b=location.hostname.split(\".\");b.shift();var h=b.join(\".\"),a=\"outbrain.com\",f=\"taboola.com\";b=jQuery(this).attr(\"href\");if(\"undefined\"!=typeof b\u0026\u0026-1==b.indexOf(h)\u0026\u0026-1==b.indexOf(a)\u0026\u0026-1==b.indexOf(f)){h=jQuery(this).attr(\"title\")||jQuery(this).attr(\"alt\")||\"[map exit link]\";a=\"exit link\";f=b;getDomain(f);var c=\".\"+getDomain(document.location.href);\nf=h.trim();var m=\"diarioinformacion.com informacion.es lne.es levante-emv.com farodevigo.es laprovincia.es diariodemallorca.es laopinioncoruna.es diariodeibiza.es laopiniondemalaga.es diaridegirona.cat laopiniondemurcia.es laopiniondezamora.es mallorcazeitung.es superdeporte.es regio7.cat emporda.info eldia.es compramejor.es neomotor.com autohebdosport.es campusfcbarcelona.com castellonfire.com cataladelany.cat cochescastellon.com codigonuevo.com cordobilla.com cuore.es stilo.es diariocordoba.com diariolagrada.com digitalcamera.es elperiodico.cat elperiodico.com elperiodicodearagon.com elperiodicodelazulejo.es elperiodicoextremadura.com elperiodicomediterraneo.com entradascastellon.com grupozeta.es lacronicabadajoz.com revistacuore.com sport.es woman.es zetagestion.com zetakiosko.com zetaventure.com laloterianavidad.com loterianadal.cat premios-cine.com canwerun.com 40prensaiberica.es prensaiberica360.es ewoman.es tourgestionandohijos.com buscandorespuestas.com cuidamostusalud.es tendencias21.net nomadiantravel.com premiosin4.es talentojovencv.com microrrelatosfalleros.com productosdenuestratierra.com guiaturismocv.com galiciaenvinos.es faroeduca.es velagalicia.es farodaescola.es faroimpulsa.es restaurantesdemallorca.com mallorcaliv.se mallorcapremiumreview.com manjaria.es businessdemallorca.es ticktisimo.com elturismoquequeremos.com tourbajamar.com tourinmoforum.com farogaming.es eventosprensaiberica.es premiosinnobankia.com becontent.es prensaiberica.es renr.es compramejormx.com compramejor.us cazadoresofertas.com iberempleos.es iberpisos.es tucasa.com cambalache.es valencia.esmart.com.es 55mejoresrestaurantes.com urbanvlc.com levantetv.es la977.com esquicatalunya.cat adoptaunpelut.cat tourcityhub.com restaurantsaufmallorca.com carreraspopularesasturias.com premiosprincesa.es albergaria.es costabravagirona.cat grupoeldia.com terramoll.es institutomoll.com informaciontv.es fotosantiguasdemallorca.com clubdiariodemallorca.es diariodeibiza.com revistahistoriayarte.es albaeditorial.es revistaconestilo.com\".split(\" \");\nif(b!=c){for(c=0;c\u003Cm.length;c++)if(-1\u003Cb.indexOf(m[c])){a=\"epi link\";f=void 0!=jQuery(this).parents(\"div[data-gztm-object]:first\").attr(\"data-gztm-object\")?jQuery(this).parents(\"div[data-gztm-object]:first\").attr(\"data-gztm-object\"):h.trim();break}-1\u003Cb.indexOf(\"outbrain.com\")\u0026\u0026(a=\"outbrain link\");-1\u003Cb.indexOf(\"taboola.com\")\u0026\u0026(a=\"taboola link\",f=jQuery.trim(jQuery(this).find(\".branding\").text()),b=jQuery.trim(jQuery(this).attr(\"title\")));dataLayer.push({event:\"gaEvent\",eventCategory:a,eventAction:f,\neventLabel:b,eventValue:void 0,nonInteraction:!1})}}})}catch(b){}(function(){jQuery(document).on(\"mousedown\",\"a\",function(){try{var b=\"javascript:,mailto,localhost,bc.marfeel.com\",h=\"exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls\",a=this,f=this,c=a.text?a.text:a.innerText?a.innerText:\"\";\"\"!=c\u0026\u0026!\/^\\s+$\/.test(c)||\"undefined\"==typeof a.innerHTML||(c=a.innerHTML.toLowerCase(),-1\u003Cc.indexOf(\"\\x3cimg \")\u0026\u0026(d=c.indexOf('alt\\x3d\"'),-1\u003Cd?(e=c.indexOf('\"',d+5),c=c.substring(d+5,e)):(d=c.indexOf('src\\x3d\"'),-1\u003Cd\u0026\u0026\n(e=c.indexOf('\"',d+5),c=c.substring(d+5,e)))));var m=a.href.split(\"?\")[0];a={event_name:\"link\",link_obj:this,link_text:c,link_url:m,link_type:\"exit link\"};var p=[location.hostname].concat(b.split(\",\"));for(d=0;d\u003Cp.length;d++)if(-1\u003Cm.indexOf(p[d])){a.link_type=\"link\";break}p=h.split(\",\");for(d=0;d\u003Cp.length;d++)if(e=new RegExp(p[d]+\"$\"),e.test(m)){a.link_type=\"download link\";break}h=function(g){g=g.match(\/:\\\/\\\/(www[0-9]?\\.)?(.[^\/:]+)\/i);g=null!=g\u0026\u00262\u003Cg.length\u0026\u0026\"string\"===typeof g[2]\u0026\u00260\u003Cg[2].length?g[2]:\nnull;var q=g;if(null!=g){var n=g.split(\".\").reverse();null!=n\u0026\u00261\u003Cn.length\u0026\u0026(q=n[1]+\".\"+n[0],-1!=g.toLowerCase().indexOf(\".co.uk\")\u0026\u00262\u003Cn.length\u0026\u0026(q=n[2]+\".\"+q))}return q};if(\"\"!=a.link_text\u0026\u0026\"\\x3cbr\\x3e\"!=a.link_text\u0026\u0026\"\"!=a.link_url)if(\"download link\"==a.link_type)dataLayer.push({event:\"gaEvent\",eventCategory:a.link_type,eventAction:a.link_text.trim(),eventLabel:a.link_url,eventValue:void 0,nonInteraction:!1,hDownDoc:1});else if(\"exit link\"==a.link_type){b=\"diarioinformacion.com informacion.es lne.es levante-emv.com farodevigo.es laprovincia.es diariodemallorca.es laopinioncoruna.es diariodeibiza.es laopiniondemalaga.es diaridegirona.cat laopiniondemurcia.es laopiniondezamora.es mallorcazeitung.es superdeporte.es regio7.cat emporda.info eldia.es compramejor.es neomotor.com autohebdosport.es campusfcbarcelona.com castellonfire.com cataladelany.cat cochescastellon.com codigonuevo.com cordobilla.com cuore.es stilo.es diariocordoba.com diariolagrada.com digitalcamera.es elperiodico.cat elperiodico.com elperiodicodearagon.com elperiodicodelazulejo.es elperiodicoextremadura.com elperiodicomediterraneo.com entradascastellon.com grupozeta.es lacronicabadajoz.com revistacuore.com sport.es woman.es zetagestion.com zetakiosko.com zetaventure.com laloterianavidad.com loterianadal.cat premios-cine.com canwerun.com 40prensaiberica.es prensaiberica360.es ewoman.es tourgestionandohijos.com buscandorespuestas.com cuidamostusalud.es tendencias21.net nomadiantravel.com premiosin4.es talentojovencv.com microrrelatosfalleros.com productosdenuestratierra.com guiaturismocv.com galiciaenvinos.es faroeduca.es velagalicia.es farodaescola.es faroimpulsa.es restaurantesdemallorca.com mallorcaliv.se mallorcapremiumreview.com manjaria.es businessdemallorca.es ticktisimo.com elturismoquequeremos.com tourbajamar.com tourinmoforum.com farogaming.es eventosprensaiberica.es premiosinnobankia.com becontent.es prensaiberica.es renr.es compramejormx.com compramejor.us cazadoresofertas.com iberempleos.es iberpisos.es tucasa.com cambalache.es valencia.esmart.com.es 55mejoresrestaurantes.com urbanvlc.com levantetv.es la977.com esquicatalunya.cat adoptaunpelut.cat tourcityhub.com restaurantsaufmallorca.com carreraspopularesasturias.com premiosprincesa.es albergaria.es costabravagirona.cat grupoeldia.com terramoll.es institutomoll.com informaciontv.es fotosantiguasdemallorca.com clubdiariodemallorca.es diariodeibiza.com revistahistoriayarte.es albaeditorial.es revistaconestilo.com\".split(\" \");\nvar k=a.link_url;k=\".\"+h(k);var r=\".\"+h(document.location.href),l=a.link_text.trim();if(k!=r){for(k=0;k\u003Cb.length;k++)if(-1\u003Ca.link_url.indexOf(b[k])){a.link_type=\"epi link\";l=void 0!=jQuery(f).parents(\"[data-gztm-object]:first\").attr(\"data-gztm-object\")?jQuery(f).parents(\"[data-gztm-object]:first\").attr(\"data-gztm-object\"):a.link_text.trim();break}-1\u003Ca.link_url.indexOf(\"outbrain.com\")\u0026\u0026(a.link_type=\"outbrain link\");-1\u003Ca.link_url.indexOf(\"trc.taboola.com\")\u0026\u0026(a.link_type=\"taboola link\",l=jQuery.trim(jQuery(this).find(\".branding\").text()),\na.link_url=jQuery.trim(jQuery(this).attr(\"title\")));dataLayer.push({event:\"gaEvent\",eventCategory:a.link_type,eventAction:l,eventLabel:a.link_url,eventValue:void 0,nonInteraction:!1})}else void 0!=jQuery(f).parents(\"[data-gztm-object]:first\").attr(\"data-gztm-object\")\u0026\u0026(a.link_type=\"internal link\",l=jQuery(f).parents(\"[data-gztm-object]:first\").attr(\"data-gztm-object\"),dataLayer.push({event:\"gaEvent\",eventCategory:a.link_type,eventAction:l,eventLabel:a.link_url,eventValue:void 0,nonInteraction:!1}))}else\"link\"==\na.link_type\u0026\u0026(b=\"diarioinformacion.com informacion.es lne.es levante-emv.com farodevigo.es laprovincia.es diariodemallorca.es laopinioncoruna.es diariodeibiza.es laopiniondemalaga.es diaridegirona.cat laopiniondemurcia.es laopiniondezamora.es mallorcazeitung.es superdeporte.es regio7.cat emporda.info eldia.es compramejor.es neomotor.com autohebdosport.es campusfcbarcelona.com castellonfire.com cataladelany.cat cochescastellon.com codigonuevo.com cordobilla.com cuore.es stilo.es diariocordoba.com diariolagrada.com digitalcamera.es elperiodico.cat elperiodico.com elperiodicodearagon.com elperiodicodelazulejo.es elperiodicoextremadura.com elperiodicomediterraneo.com entradascastellon.com grupozeta.es lacronicabadajoz.com revistacuore.com sport.es woman.es zetagestion.com zetakiosko.com zetaventure.com laloterianavidad.com loterianadal.cat premios-cine.com canwerun.com 40prensaiberica.es prensaiberica360.es ewoman.es tourgestionandohijos.com buscandorespuestas.com cuidamostusalud.es tendencias21.net nomadiantravel.com premiosin4.es talentojovencv.com microrrelatosfalleros.com productosdenuestratierra.com guiaturismocv.com galiciaenvinos.es faroeduca.es velagalicia.es farodaescola.es faroimpulsa.es restaurantesdemallorca.com mallorcaliv.se mallorcapremiumreview.com manjaria.es businessdemallorca.es ticktisimo.com elturismoquequeremos.com tourbajamar.com tourinmoforum.com farogaming.es eventosprensaiberica.es premiosinnobankia.com becontent.es prensaiberica.es renr.es compramejormx.com compramejor.us cazadoresofertas.com iberempleos.es iberpisos.es tucasa.com cambalache.es valencia.esmart.com.es 55mejoresrestaurantes.com urbanvlc.com levantetv.es la977.com esquicatalunya.cat adoptaunpelut.cat tourcityhub.com restaurantsaufmallorca.com carreraspopularesasturias.com premiosprincesa.es albergaria.es costabravagirona.cat grupoeldia.com terramoll.es institutomoll.com informaciontv.es fotosantiguasdemallorca.com clubdiariodemallorca.es diariodeibiza.com revistahistoriayarte.es albaeditorial.es revistaconestilo.com\".split(\" \"),\nk=a.link_url,k=\".\"+h(k),r=\".\"+h(document.location.href),l=a.link_text.trim(),k==r\u0026\u0026void 0!=jQuery(f).parents(\"[data-gztm-object]:first\").attr(\"data-gztm-object\")\u0026\u0026(a.link_type=\"internal link\",l=jQuery(f).parents(\"[data-gztm-object]:first\").attr(\"data-gztm-object\"),dataLayer.push({event:\"gaEvent\",eventCategory:a.link_type,eventAction:l,eventLabel:a.link_url,eventValue:void 0,nonInteraction:!1})))}catch(g){}})})()};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":6
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.socialAction=function(a,c,e){var d={linkedin:\"hShareLinkedin\",facebook:\"hShareFacebook\",\"google +\":\"hShareGoogle\",google:\"hShareGoogle\",\"google plus\":\"hShareGoogle\",twitter:\"hShareTwitter\",imprimir:\"hSharePrint\",pinterest:\"hSharePinterest\",email:\"hShareEmail\",\"enviar amigo\":\"hShareEmail\",\"enviar carta del lector\":\"hSendLetter\",whatsapp:\"hShareWhatsapp\",telegram:\"hShareTelegram\",messenger:\"hShareFacebookMessenger\"};c=c.toLowerCase();if(\"undefined\"!=typeof a\u0026\u0026\"\"!=a){a=a.toLowerCase();d=d[a];\nvar b={event:\"gaEvent\",eventCategory:\"acciones noticias\",eventAction:c+\" \"+a,eventLabel:e,eventValue:void 0,hComment:void 0,hShareLinkedin:void 0,hShareFacebook:void 0,hShareGoogle:void 0,hShareTwitter:void 0,hSharePrint:void 0,hSharePinterest:void 0,hShareEmail:void 0,hSendLetter:void 0,hShareWhatsapp:void 0,hShareTelegram:void 0,hShareFacebookMessenger:void 0,hDownDoc:void 0,hEngagementTotal:1,hVideoStart:void 0,hVideoComplete:void 0};b[d]=1;dataLayer.push(b);b={event:\"gaSocial\",socialNetwork:a,\nsocialAct:c,socialTarg:e,hComment:void 0,hShareLinkedin:void 0,hShareFacebook:void 0,hShareGoogle:void 0,hShareTwitter:void 0,hSharePrint:void 0,hSharePinterest:void 0,hShareEmail:void 0,hSendLetter:void 0,hShareWhatsapp:void 0,hShareTelegram:void 0,hShareFacebookMessenger:void 0,hDownDoc:void 0,hEngagementTotal:void 0,hVideoStart:void 0,hVideoComplete:void 0};dataLayer.push(b)}else d=d[c],b={event:\"gaEvent\",eventCategory:\"acciones noticias\",eventAction:c,eventLabel:e,eventValue:void 0,hComment:void 0,\nhShareLinkedin:void 0,hShareFacebook:void 0,hShareGoogle:void 0,hShareTwitter:void 0,hSharePrint:void 0,hSharePinterest:void 0,hShareEmail:void 0,hSendLetter:void 0,hShareWhatsapp:void 0,hShareTelegram:void 0,hShareFacebookMessenger:void 0,hDownDoc:void 0,hEngagementTotal:void 0,hVideoStart:void 0,hVideoComplete:void 0},b[d]=1,dataLayer(b)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":12
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var url=\"",["escape",["macro",160],7],"\";if(url===\"(not set)\")return;var s=document.createElement(\"script\");s.type=\"text\/javascript\";s.async=true;s.src=url;var x=document.getElementsByTagName(\"script\")[0];x.parentNode.insertBefore(s,x)})();(function(){var url=\"",["escape",["macro",161],7],"\";if(url===\"(not set)\")return;var s=document.createElement(\"script\");s.type=\"text\/javascript\";s.async=true;s.src=url;var x=document.getElementsByTagName(\"script\")[0];x.parentNode.insertBefore(s,x)})();\n(function(){var loadedMo=new Promise(function(resolve,reject){fetch(\"https:\/\/analytics.prensaiberica.es\/api\/delivery\/sites\",{\"method\":\"GET\",\"mode\":\"cors\",\"credentials\":\"include\"}).then(function(response){return response.json()}).then(function(data){localStorage.setItem(\"_mo_s\",JSON.stringify(data));resolve()})[\"catch\"](function(err){console.error(\"ERROR:\",err)})});loadedMo.then(function(){(function(){var curSite=null;var config={bannerColumns:[\"wA\",\"wB\",\"wC\",\"wD\"]};var getCookie=function(name){var value=\n\"; \"+document.cookie;var parts=value.split(\"; \"+name+\"\\x3d\");if(parts.length===2)return parts.pop().split(\";\").shift();else return null};var paintNewRegionals=function(columns){var c1=document.getElementById(\"z-sites\");if(!c1)return;columns.forEach(function(column,i){var cc=document.createElement(\"div\");cc.className=\"ATresCol ATresCol-tp AUnaCol-ml AUnaCol-mp Col\";c1.appendChild(cc);var c2=document.createElement(\"div\");c2.className=\"CajaNoticia NoticiaDestacada SinergiasZeta\";c2.setAttribute(\"data-gztm-object\",\n\"widget portada dinamico \"+(i+1));cc.appendChild(c2);var c3=document.createElement(\"a\");c3.href=column.link;c3.target=\"_blank\";c3.className=\"FotoNoticia\";c2.appendChild(c3);var c4=document.createElement(\"img\");c4.src=column.image;c4.title=column.title;c4.alt=column.title;c3.appendChild(c4);var c5=document.createElement(\"div\");c5.className=\"DatosCajaNoticia\";c2.appendChild(c5);var c6=document.createElement(\"h2\");c5.appendChild(c6);var c7=document.createElement(\"a\");c7.href=column.link;c7.target=\"_blank\";\nc6.appendChild(c7);var c8=document.createTextNode(column.title);c7.appendChild(c8);var c9=document.createElement(\"p\");c9.className=\"Publicacion\";c5.appendChild(c9);var c10=document.createElement(\"a\");c10.href=column.logoLink;c10.target=\"_blank\";c9.appendChild(c10);var c11=document.createElement(\"img\");c11.src=column.logoImage;c10.appendChild(c11);var c12=document.createElement(\"div\");c12.className=\"Recorte\";c5.appendChild(c12)})};var paintElperiodicoNew=function(columns,columns2){var paintContent=\nfunction(c2,column,i,isDetail,isHome2){var isBranded=isHome2\u0026\u0026column.kicker\u0026\u0026column.kickerImage;var c3=document.createElement(\"article\");c3.className=\"ep-article medio\"+(isBranded?\" branded-content\":\"\");c3.setAttribute(\"data-gztm-object\",\"widget \"+(isDetail?\"noticia\":\"portada\")+\" dinamico \"+(i+1));c2.appendChild(c3);if(isBranded){var c14=document.createElement(\"div\");c14.className=\"brand\";c3.appendChild(c14);var c15=document.createElement(\"p\");c15.className=\"name\";c14.appendChild(c15);var c19=document.createTextNode(column.kicker);\nc15.appendChild(c19);var c16=document.createElement(\"div\");c16.className=\"img\";c14.appendChild(c16);var c17=document.createElement(\"a\");c16.appendChild(c17);var c18=document.createElement(\"img\");c18.src=column.kickerImage;c18.alt=\"branded\";c18.width=100;c18.height=35;c17.appendChild(c18)}var c4=document.createElement(\"div\");c4.className=\"thumb\";c3.appendChild(c4);var c5=document.createElement(\"a\");c5.href=column.link;c5.target=\"_blank\";c5.title=column.title;c4.appendChild(c5);var c6=document.createElement(\"img\");\nc6.src=column.image;c6.title=column.title;c6.alt=column.title;c5.appendChild(c6);var c7=document.createElement(\"div\");c7.className=\"txt\";c3.appendChild(c7);var c8=document.createElement(\"h2\");c8.className=\"title\";c7.appendChild(c8);var c9=document.createElement(\"a\");c9.href=column.link;c9.target=\"_blank\";c9.title=column.title;c8.appendChild(c9);var c10=document.createTextNode(column.title);c9.appendChild(c10);var c11=document.createElement(\"div\");c11.className=\"site\";c3.appendChild(c11);var c12=document.createElement(\"a\");\nc12.href=column.logoLink;c12.target=\"_blank\";c11.appendChild(c12);var c13=document.createElement(\"img\");c13.src=column.logoImage;c12.appendChild(c13)};var paintMiniContent=function(c2,column,i){var c3=document.createElement(\"article\");c3.className=\"ep-article lateral\";c3.setAttribute(\"data-gztm-object\",\"widget noticia dinamico \"+(i+1));c2.appendChild(c3);var c11=document.createElement(\"div\");c11.className=\"site\";c3.appendChild(c11);var c12=document.createElement(\"a\");c12.href=column.logoLink;c12.target=\n\"_blank\";c11.appendChild(c12);var c13=document.createElement(\"img\");c13.src=column.logoImage;c12.appendChild(c13);var c4=document.createElement(\"div\");c4.className=\"thumb\";c3.appendChild(c4);var c5=document.createElement(\"a\");c5.href=column.link;c5.target=\"_blank\";c5.title=column.title;c4.appendChild(c5);var c6=document.createElement(\"img\");c6.src=column.image;c6.title=column.title;c6.alt=column.title;c5.appendChild(c6);var c7=document.createElement(\"div\");c7.className=\"txt\";c3.appendChild(c7);var c8=\ndocument.createElement(\"h4\");c8.className=\"title\";c7.appendChild(c8);var c9=document.createElement(\"a\");c9.href=column.link;c9.target=\"_blank\";c9.title=column.title;c8.appendChild(c9);var c10=document.createTextNode(column.title);c9.appendChild(c10)};(function(){var c1=document.getElementById(\"z-sites-n\");if(!c1)return;if(!columns)return;c1.className=\"container\";var c2=document.createElement(\"section\");c2.className=\"blockpad\";c1.appendChild(c2);var c3=document.createElement(\"div\");c3.className=\"row-center\";\nc2.appendChild(c3);columns.forEach(function(column,i){var c4=document.createElement(\"div\");c4.className=\"col-xs-12 col-sm-4 col-md-4\";c3.appendChild(c4);paintContent(c4,column,i,false,false)})})();(function(){var c1=document.getElementById(\"z-sites-n2\");if(!c1)return;if(!columns2)return;c1.className=\"container\";var c2=document.createElement(\"section\");c2.className=\"blockpad\";c1.appendChild(c2);var c3=document.createElement(\"div\");c3.className=\"row-center\";c2.appendChild(c3);columns2.forEach(function(column,\ni){var c4=document.createElement(\"div\");c4.className=\"col-xs-12 col-sm-4 col-md-4\";c3.appendChild(c4);paintContent(c4,column,i,false,true)})})();(function(){var c1=document.getElementById(\"z-sites-na\");if(!c1)return;if(!columns)return;c1.className=\"ep-intelligent\";columns.forEach(function(column,i){paintMiniContent(c1,column,i)})})();(function(){var c1=document.getElementById(\"z-sites-desktop\");if(!c1)return;if(!window.matchMedia(\"(min-width: 768px)\").matches)return;if(!columns)return;c1.className=\n\"container\";var c2=document.createElement(\"section\");c2.className=\"blockpad\";c1.appendChild(c2);var c3=document.createElement(\"div\");c3.className=\"row-center\";c2.appendChild(c3);columns.forEach(function(column,i){var c4=document.createElement(\"div\");c4.className=\"col-xs-12 col-sm-4 col-md-4\";c3.appendChild(c4);paintContent(c4,column,i,false,false)})})();(function(){var c1=document.getElementById(\"z-sites-mobile\");if(!window.matchMedia(\"(max-width: 767px)\").matches)return;if(!c1)return;if(!columns)return;\nc1.className=\"ep-intelligent\";columns.forEach(function(column,i){paintMiniContent(c1,column,i)})})()};var zSites={onbarcelona:{id:\"onbarcelona\",name:\"OnBarcelona\",domains:[\"www.elperiodico.com\",\"www.elperiodico.cat\",\"bb-pub-pro.elperiodico.com\",\"bb-pre.elperiodico.com\",\"bb-pub-pro.elperiodico.cat\",\"bb-pre.elperiodico.cat\"],path:\"\/es\/onbarcelona\/\",paint:function(columns){paintElperiodicoNew(columns)},visited:false},bolsadelcorredor:{id:\"bolsadelcorredor\",name:\"Bolsa del Corredor\",domains:[\"www.sport.es\"],\npath:\"\/labolsadelcorredor\/\",paint:function(){},visited:false},fueradejuego:{id:\"fueradejuego\",name:\"Fuera de Juego\",domains:[\"www.sport.es\",\"bb-pub-pro.sport.es\",\"bb-pre.sport.es\"],path:\"\/es\/noticias\/fuera-de-juego\/\",paint:function(){},visited:false},extra:{id:\"extra\",name:\"Extra\",domains:[\"www.elperiodico.com\",\"www.elperiodico.cat\",\"bb-pub-pro.elperiodico.com\",\"bb-pre.elperiodico.com\",\"bb-pub-pro.elperiodico.cat\",\"bb-pre.elperiodico.cat\"],path:\"\/es\/extra\/\",paint:function(columns){paintElperiodicoNew(columns)},\nvisited:false},yotele:{id:\"yotele\",name:\"Yotele\",domains:[\"www.elperiodico.com\",\"www.elperiodico.cat\",\"bb-pub-pro.elperiodico.com\",\"bb-pre.elperiodico.com\",\"bb-pub-pro.elperiodico.cat\",\"bb-pre.elperiodico.cat\"],path:\"\/es\/yotele\/\",paint:function(columns){paintElperiodicoNew(columns)},visited:false},cuore:{id:\"cuore\",name:\"Cuore\",domains:[\"www.elperiodico.com\"],path:\"\/es\/cuore\/\",paint:function(columns){var c1=document.getElementById(\"z-sites\");var isMobile=typeof rendered_version!==\"undefined\"\u0026\u0026rendered_version===\n\"mobile\";if(!c1)return;c1.className=\"feednews\";if(isMobile){var m1=document.createElement(\"div\");m1.className=\"carousel js-flickity\";c1.appendChild(m1)}columns.forEach(function(column,i){var container;if(isMobile){var m2=document.createElement(\"ul\");m2.className=\"carousel-cell\";m1.appendChild(m2);var m3=document.createElement(\"li\");m2.appendChild(m3);container=m3}else container=c1;var c2=document.createElement(\"div\");c2.className=\"feedenter\";c2.setAttribute(\"data-gztm-object\",\"widget portada dinamico \"+\n(i+1));container.appendChild(c2);var c3=document.createElement(\"div\");c3.className=\"feedphoto\";c2.appendChild(c3);var c4=document.createElement(\"a\");c4.href=column.link;c4.target=\"_blank\";c3.appendChild(c4);var c5=document.createElement(\"img\");c5.src=column.image;c4.appendChild(c5);var c6=document.createElement(\"div\");c6.className=\"feedtext\";c2.appendChild(c6);var c7=document.createElement(\"a\");c7.href=column.link;c7.target=\"_blank\";c6.appendChild(c7);var c8=document.createElement(\"h2\");c7.appendChild(c8);\nvar c9=document.createTextNode(column.title);c8.appendChild(c9);var c10=document.createElement(\"div\");c10.className=\"logomag\";c6.appendChild(c10);var c11=document.createElement(\"a\");c11.href=column.logoLink;c11.target=\"_blank\";c10.appendChild(c11);var c12=document.createElement(\"img\");c12.src=column.logoImage;c11.appendChild(c12)});if(isMobile\u0026\u0026typeof Flickity!==\"undefined\")var flkty=new Flickity(\"#z-sites .carousel\",{freeScroll:true,setGallerySize:false,pageDots:false,wrapAround:true})},visited:false},\nwoman:{id:\"woman\",name:\"Woman\",domains:[\"www.woman.es\",\"test.woman.es\"],paint:function(columns){var c1=document.getElementById(\"z-sites\");var isMobile=typeof rendered_version!==\"undefined\"\u0026\u0026rendered_version===\"mobile\";if(!c1)return;var c1b=document.createElement(\"div\");c1b.className=isMobile?\"carousel-main js-flickity\":\"smartnews\";c1.appendChild(c1b);columns.forEach(function(column,i){var container;if(isMobile){var m1=document.createElement(\"div\");m1.className=\"carousel-cell\";c1b.appendChild(m1);\ncontainer=m1}else container=c1b;var c2=document.createElement(\"div\");c2.className=\"newscontent\";c2.setAttribute(\"data-gztm-object\",\"widget noticia dinamico \"+(i+1));container.appendChild(c2);var c3=document.createElement(\"div\");c3.className=\"newsnails\";c2.appendChild(c3);var c4=document.createElement(\"div\");c4.className=\"rowinformation\";c3.appendChild(c4);var c5=document.createElement(\"ul\");c4.appendChild(c5);var c6=document.createElement(\"li\");c5.appendChild(c6);var c7=document.createElement(\"a\");\nc7.href=column.logoLink;c7.target=\"_blank\";c6.appendChild(c7);var c8=document.createElement(\"img\");c8.src=column.logoImage;c7.appendChild(c8);var c9=document.createElement(\"a\");c9.href=column.link;c9.target=\"_blank\";c3.appendChild(c9);var c10=document.createElement(\"img\");c10.src=column.image;c9.appendChild(c10);var c11=document.createElement(\"div\");c11.className=\"newstext\";c2.appendChild(c11);var c12=document.createElement(\"a\");c12.href=column.link;c12.target=\"_blank\";c11.appendChild(c12);var c13=\ndocument.createElement(\"h1\");c12.appendChild(c13);var c14=document.createTextNode(column.title);c13.appendChild(c14)});if(isMobile\u0026\u0026typeof Flickity!==\"undefined\")var flkty=new Flickity(\"#z-sites .carousel-main\",{contain:true,setGallerySize:true,prevNextButtons:true,initialIndex:1,pageDots:false,wrapAround:true})},visited:false},elperiodico:{id:\"elperiodico\",name:\"El Peri\\u00f3dico\",domains:[\"www.elperiodico.com\",\"www.elperiodico.cat\",\"bb-pub-pro.elperiodico.com\",\"bb-pre.elperiodico.com\",\"bb-pub-pro.elperiodico.cat\",\n\"bb-pre.elperiodico.cat\"],paint:function(columns,columns2){paintElperiodicoNew(columns,columns2)},visited:false},sport:{id:\"sport\",name:\"Sport\",domains:[\"www.sport.es\",\"bb-pub-pro.sport.es\",\"bb-pre.sport.es\"],paint:function(columns){var paintContent=function(c3,column,i,length){var c4=document.createElement(\"div\");c4.className=\"col-xs-12 col-sm-12 \"+(length===3?\"col-md-4 col-lg-4\":\"col-md-3 col-lg-3\")+\" col\";c3.appendChild(c4);var c5=document.createElement(\"article\");c5.className=\"sp-noticia new-centered new-border\";\nc5.setAttribute(\"data-gztm-object\",\"widget portada dinamico \"+(i+1));c4.appendChild(c5);var c6=document.createElement(\"figure\");c6.className=\"thumb\";c5.appendChild(c6);var c7=document.createElement(\"a\");c7.href=column.link;c7.target=\"_blank\";c6.appendChild(c7);var c8=document.createElement(\"img\");c8.src=column.image;c7.appendChild(c8);var c9=document.createElement(\"div\");c9.className=\"txt\";c5.appendChild(c9);var c10=document.createElement(\"h2\");c10.className=\"title\";c9.appendChild(c10);var c11=document.createElement(\"a\");\nc11.href=column.link;c11.target=\"_blank\";c10.appendChild(c11);var c12=document.createTextNode(column.title);c11.appendChild(c12);var c13=document.createElement(\"div\");c13.className=\"site\";c5.appendChild(c13);var c14=document.createElement(\"a\");c14.href=column.logoLink;c14.target=\"_blank\";c13.appendChild(c14);var c15=document.createElement(\"img\");c15.src=column.logoImage;c15.className=\"loading\";c14.appendChild(c15)};var paintMiniContent=function(c4,column,i){var c5=document.createElement(\"article\");\nc5.className=\"sp-noticia new-centered new-border\";c5.setAttribute(\"data-gztm-object\",\"widget noticia dinamico \"+(i+1));c4.appendChild(c5);var c6=document.createElement(\"figure\");c6.className=\"thumb\";c5.appendChild(c6);var c7=document.createElement(\"a\");c7.href=column.link;c7.target=\"_blank\";c6.appendChild(c7);var c8=document.createElement(\"img\");c8.src=column.image;c7.appendChild(c8);var c9=document.createElement(\"div\");c9.className=\"txt\";c5.appendChild(c9);var c10=document.createElement(\"h2\");c10.className=\n\"title\";c9.appendChild(c10);var c11=document.createElement(\"a\");c11.href=column.link;c11.target=\"_blank\";c10.appendChild(c11);var c12=document.createTextNode(column.title);c11.appendChild(c12);var c13=document.createElement(\"div\");c13.className=\"site\";c5.appendChild(c13);var c14=document.createElement(\"a\");c14.href=column.logoLink;c14.target=\"_blank\";c13.appendChild(c14);var c15=document.createElement(\"img\");c15.src=column.logoImage;c15.className=\"loading\";c14.appendChild(c15)};(function(){var c1=\ndocument.getElementById(\"z-sites\");if(!c1)return;c1.className=\"container\";var c2=document.createElement(\"section\");c2.className=\"blockpad\";c1.appendChild(c2);var c3=document.createElement(\"div\");c3.className=\"row\";c2.appendChild(c3);columns.forEach(function(column,i){paintContent(c3,column,i,columns.length)})})();(function(){var c1=document.getElementById(\"z-sites-desktop\");if(!window.matchMedia(\"(min-width: 768px)\").matches)return;if(!c1)return;c1.className=\"container\";var c2=document.createElement(\"section\");\nc2.className=\"blockpad\";c1.appendChild(c2);var c3=document.createElement(\"div\");c3.className=\"row\";c2.appendChild(c3);columns.forEach(function(column,i){paintContent(c3,column,i,columns.length)})})();(function(){var c1=document.getElementById(\"z-sites-mobile\");if(!window.matchMedia(\"(max-width: 767px)\").matches)return;if(!c1)return;c1.className=\"container\";var c2=document.createElement(\"section\");c2.className=\"blockpad\";c1.appendChild(c2);var c3=document.createElement(\"div\");c3.className=\"row\";c2.appendChild(c3);\ncolumns.forEach(function(column,i){paintContent(c3,column,i,columns.length)})})();(function(){var c1=document.getElementById(\"z-sites-na\");if(!c1)return;c1.className=\"sp-intelligent\";columns.forEach(function(column,i){paintMiniContent(c1,column,i)})})()},visited:false},diariolagrada:{id:\"diariolagrada\",name:\"Diario La Grada\",domains:[\"www.diariolagrada.com\"],paint:function(){},visited:false},elperiodicomediterraneo:{id:\"elperiodicomediterraneo\",name:\"El Peri\\u00f3dico Mediterraneo\",domains:[\"www.elperiodicomediterraneo.com\"],\npaint:paintNewRegionals,visited:false},diariocordoba:{id:\"diariocordoba\",name:\"Diario C\\u00f3rdoba\",domains:[\"www.diariocordoba.com\",\"beta.diariocordoba.com\"],paint:paintNewRegionals,visited:false},elperiodicoextremadura:{id:\"elperiodicoextremadura\",name:\"El Peri\\u00f3dico Extremadura\",domains:[\"www.elperiodicoextremadura.com\"],paint:paintNewRegionals,visited:false},elperiodicodearagon:{id:\"elperiodicodearagon\",name:\"El Peri\\u00f3dico de Arag\\u00f3n\",domains:[\"www.elperiodicodearagon.com\"],paint:paintNewRegionals,\nvisited:false},codigonuevo:{id:\"codigonuevo\",name:\"C\\u00f3digo Nuevo\",domains:[\"www.codigonuevo.com\"],paint:function(){},visited:false},digitalcamera:{id:\"digitalcamera\",name:\"Digital Camera\",domains:[\"www.digitalcamera.es\"],paint:function(){},visited:false},autohebdosport:{id:\"autohebdosport\",name:\"Autohebdo Sport\",domains:[\"www.autohebdosport.es\",\"test.autohebdosport.es\"],paint:function(columns){var c1=document.getElementById(\"z-sites\");var isMobile=typeof rendered_version!==\"undefined\"\u0026\u0026rendered_version===\n\"mobile\";if(!c1)return;c1.className=\"smallnewadd margbox\";if(isMobile){var m1=document.createElement(\"div\");m1.className=\"carousel-main js-flickity\";c1.appendChild(m1)}else{var d1=document.createElement(\"div\");d1.className=\"smallnew\";c1.appendChild(d1)}columns.forEach(function(column,i){var container;if(isMobile){var m2=document.createElement(\"div\");m2.className=\"carousel-cell\";m1.appendChild(m2);var m3=document.createElement(\"ul\");m2.appendChild(m3);var m4=document.createElement(\"li\");m3.appendChild(m4);\ncontainer=m4}else container=d1;var c2=document.createElement(\"a\");c2.href=column.link;c2.setAttribute(\"data-gztm-object\",\"widget portada dinamico \"+(i+1));container.appendChild(c2);var c3=document.createElement(\"div\");c3.className=\"zoomnailnew\";c2.appendChild(c3);var c4=document.createElement(\"div\");c4.className=\"categoriatag tagwid\";c3.appendChild(c4);var c5=document.createElement(\"p\");c4.appendChild(c5);var c6=document.createElement(\"img\");c6.src=column.logoImage;c5.appendChild(c6);var c7=document.createElement(\"div\");\nc7.className=\"smallnewphoto\"+(isMobile?\" carrsmart\":\"\");c3.appendChild(c7);var c8=document.createElement(\"img\");c8.src=column.image;c7.appendChild(c8);var c9=document.createElement(\"div\");c9.className=\"smallewphototext\"+(isMobile?\" carrsmart\":\"\");c3.appendChild(c9);var c10=document.createElement(\"h2\");c9.appendChild(c10);var c11=document.createTextNode(column.title);c10.appendChild(c11)});if(isMobile\u0026\u0026typeof Flickity!==\"undefined\")var flkty=new Flickity(\"#z-sites .carousel-main\",{contain:true,setGallerySize:true,\nprevNextButtons:true,initialIndex:1,pageDots:false,wrapAround:true})},visited:false},stilo:{id:\"stilo\",name:\"Stilo\",domains:[\"www.stilo.es\",\"test.stilo.es\"],paint:function(columns){var c1=document.getElementById(\"z-sites\");if(!c1)return;c1.className=\"smartnews\";var c2=document.createElement(\"ul\");c1.appendChild(c2);columns.forEach(function(column,i){var c3=document.createElement(\"li\");c3.setAttribute(\"data-gztm-object\",\"widget portada dinamico \"+(i+1));c2.appendChild(c3);var c4=document.createElement(\"div\");\nc4.className=\"smartnewsBox\";c3.appendChild(c4);var c5=document.createElement(\"div\");c5.className=\"smartnewsImage\";c4.appendChild(c5);var c6=document.createElement(\"a\");c6.href=column.link;c6.target=\"_blank\";c5.appendChild(c6);var c7=document.createElement(\"img\");c7.src=column.image;c6.appendChild(c7);var c8=document.createElement(\"a\");c8.href=column.logoLink;c8.target=\"_blank\";c8.className=\"smartnewsInformation\";c5.appendChild(c8);var c9=document.createElement(\"img\");c9.src=column.logoImage;c8.appendChild(c9);\nvar c10=document.createElement(\"a\");c10.className=\"smartnewsText\";c10.href=column.link;c10.target=\"_blank\";c4.appendChild(c10);var c11=document.createElement(\"h2\");c10.appendChild(c11);var c12=document.createTextNode(column.title);c11.appendChild(c12)})},visited:false},triatletasenred:{id:\"triatletasenred\",name:\"Triatletas en Red\",domains:[\"triatletasenred.sport.es\"],paint:function(){},visited:false},areajugones:{id:\"areajugones\",name:\"Area Jugones\",domains:[\"areajugones.sport.es\"],paint:function(){},\nvisited:false},viajar:{id:\"viajar\",name:\"Viajar\",domains:[\"viajar.elperiodico.com\",\"test.viajar.elperiodico.com\"],paint:function(columns){var c1=document.getElementById(\"z-sites\");var isMobile=typeof rendered_version!==\"undefined\"\u0026\u0026rendered_version===\"mobile\";var container;if(!c1)return;c1.className=isMobile?\"feednews\":\"feedrow\";if(isMobile){var m1=document.createElement(\"div\");m1.className=\"carousel js-flickity\";c1.appendChild(m1);container=m1}else{var c2=document.createElement(\"section\");c1.appendChild(c2);\nvar c3=document.createElement(\"div\");c3.className=\"news\";c2.appendChild(c3);container=c3}columns.forEach(function(column,i){var container2;if(isMobile){var m2=document.createElement(\"ul\");m2.className=\"carousel-cell\";container.appendChild(m2);var m3=document.createElement(\"li\");m2.appendChild(m3);container2=m3}else container2=container;var c4=document.createElement(\"div\");c4.className=\"newscontent \"+(i===columns.length-1\u0026\u0026!isMobile?\"marginfeed\":\"newsmargin\");c4.setAttribute(\"data-gztm-object\",\"widget portada dinamico \"+\n(i+1));container2.appendChild(c4);var c5=document.createElement(\"div\");c5.className=\"newsnails\";c4.appendChild(c5);var c6=document.createElement(\"div\");c6.className=\"rowinformation \"+(isMobile?\"feedimglogo\":\"rowmarginleft\");c5.appendChild(c6);var c7=document.createElement(\"ul\");c6.appendChild(c7);var c8=document.createElement(\"li\");c7.appendChild(c8);var c9=document.createElement(\"a\");c9.href=column.logoLink;c9.target=\"_blank\";c8.appendChild(c9);var c10=document.createElement(\"img\");c10.src=column.logoImage;\nc9.appendChild(c10);var c11=document.createElement(\"a\");c11.href=column.link;c11.target=\"_blank\";c5.appendChild(c11);var c12=document.createElement(\"img\");c12.src=column.image;c11.appendChild(c12);var c13=document.createElement(\"div\");c13.className=\"newstext\";c4.appendChild(c13);var c14=document.createElement(\"a\");c14.href=column.link;c14.target=\"_blank\";c13.appendChild(c14);var c15=document.createElement(\"h1\");c14.appendChild(c15);var c16=document.createTextNode(column.title);c15.appendChild(c16);\nif(!isMobile)container2.appendChild(document.createTextNode(\"\\n\"))});if(isMobile\u0026\u0026typeof Flickity!==\"undefined\")var flkty=new Flickity(\"#z-sites .carousel\",{freeScroll:true,setGallerySize:false,pageDots:false,wrapAround:true})},visited:false},castellonfire:{id:\"castellonfire\",name:\"Castellon Fire\",domains:[\"www.castellonfire.com\"],paint:function(){},visited:false},compramejor:{id:\"compramejor\",name:\"Compra Mejor\",domains:[\"www.compramejor.es\"],paint:function(){},visited:false},lne:{id:\"lne\",name:\"La Nueva Espa\\u00f1a\",\nvisited:false},farodevigo:{id:\"farodevigo\",name:\"Faro de Vigo\",visited:false},levanteemv:{id:\"levanteemv\",name:\"Levante EMV\",visited:false},informacion:{id:\"informacion\",name:\"Diario Informacion\",visited:false},superdeporte:{id:\"superdeporte\",name:\"Superdeporte\",visited:false},laprovincia:{id:\"laprovincia\",name:\"La Provincia\",visited:false},laopiniondemurcia:{id:\"laopiniondemurcia\",name:\"La Opinion de Murcia\",visited:false},diariodemallorca:{id:\"diariodemallorca\",name:\"Diario de Mallorca\",visited:false},\nlaopiniondemalaga:{id:\"laopiniondemalaga\",name:\"La Opinion de Malaga\",visited:false},eldia:{id:\"eldia\",name:\"El Dia\",visited:false},diaridegirona:{id:\"diaridegirona\",name:\"Diari de Girona\",visited:false},diariodeibiza:{id:\"diariodeibiza\",name:\"Diario de Ibiza\",visited:false},laopiniondezamora:{id:\"laopiniondezamora\",name:\"La Opini\\u00f3n de Zamora\",visited:false},regio7:{id:\"regio7\",name:\"Regio 7\",visited:false},mallorcazeitung:{id:\"mallorcazeitung\",name:\"Mallorca Zeitung\",visited:false},laloterianavidad:{id:\"laloterianavidad\",\nname:\"La Loteria de Navidad\",visited:false},emporda:{id:\"emporda\",name:\"Empord\\u00e1\",visited:false},lacronicabadajoz:{id:\"lacronicabadajoz\",name:\"La Cr\\u00f3nica Badajoz\",visited:false},loterianadal:{id:\"loterianadal\",name:\"Loter\\u00eda nadal\",visited:false}};(function(){for(var key in zSites){var zSite=zSites[key];if(!zSites.hasOwnProperty(key))continue;if(zSite.domains!=undefined){if(zSite.domains.indexOf(document.location.hostname)===-1)continue}else continue;if(zSite.path\u0026\u0026!document.location.pathname.match(\"^\"+\nzSite.path))continue;curSite=zSite;break}})();(function(){var fetchVisitedSites=localStorage.getItem(\"_mo_s\");fetchVisitedSites=JSON.parse(fetchVisitedSites)[\"_mo_s\"];if(fetchVisitedSites===undefined||fetchVisitedSites.length==0)return;fetchVisitedSites.forEach(function(visitedSiteId){if(visitedSiteId==1)visitedSiteId=\"sport\";else if(visitedSiteId==2)visitedSiteId=\"elperiodico\";else if(visitedSiteId==3)visitedSiteId=\"lne\";else if(visitedSiteId==4)visitedSiteId=\"levanteemv\";else if(visitedSiteId==\n5)visitedSiteId=\"informacion\";else if(visitedSiteId==6)visitedSiteId=\"farodevigo\";else if(visitedSiteId==7)visitedSiteId=\"woman\";else if(visitedSiteId==8)visitedSiteId=\"superdeporte\";else if(visitedSiteId==9)visitedSiteId=\"laprovincia\";else if(visitedSiteId==10)visitedSiteId=\"laopiniondemurcia\";else if(visitedSiteId==11)visitedSiteId=\"diariodemallorca\";else if(visitedSiteId==12)visitedSiteId=\"cuore\";else if(visitedSiteId==13)visitedSiteId=\"elperiodicodearagon\";else if(visitedSiteId==14)visitedSiteId=\n\"laopiniondemalaga\";else if(visitedSiteId==15)visitedSiteId=\"eldia\";else if(visitedSiteId==16)visitedSiteId=\"diaridegirona\";else if(visitedSiteId==17)visitedSiteId=\"diariodeibiza\";else if(visitedSiteId==18)visitedSiteId=\"diariocordoba\";else if(visitedSiteId==19)visitedSiteId=\"elperiodicomediterraneo\";else if(visitedSiteId==20)visitedSiteId=\"laopiniondezamora\";else if(visitedSiteId==21)visitedSiteId=\"laopinioncoruna\";else if(visitedSiteId==22)visitedSiteId=\"elperiodicoextremadura\";else if(visitedSiteId==\n23)visitedSiteId=\"codigonuevo\";else if(visitedSiteId==24)visitedSiteId=\"viajar\";else if(visitedSiteId==25)visitedSiteId=\"regio7\";else if(visitedSiteId==26)visitedSiteId=\"mallorcazeitung\";else if(visitedSiteId==27)visitedSiteId=\"laloterianavidad\";else if(visitedSiteId==28)visitedSiteId=\"stilo\";else if(visitedSiteId==29)visitedSiteId=\"byzness\";else if(visitedSiteId==30)visitedSiteId=\"bolsadelcorredor\";else if(visitedSiteId==31)visitedSiteId=\"emporda\";else if(visitedSiteId==32)visitedSiteId=\"diariolagrada\";\nelse if(visitedSiteId==33)visitedSiteId=\"lacronicabadajoz\";else if(visitedSiteId==34)visitedSiteId=\"autohebdosport\";else if(visitedSiteId==35)visitedSiteId=\"digitalcamera\";else if(visitedSiteId==36)visitedSiteId=\"loterianadal\";else visitedSiteId=\"unknown\";if(visitedSiteId==\"unknown\")return;if(zSites[visitedSiteId]!=undefined)zSites[visitedSiteId].visited=true});var cookieVisitedSites=getCookie(\"z-visited\");if(!cookieVisitedSites)return;cookieVisitedSites.split(\",\").forEach(function(visitedSiteId){if(!zSites[visitedSiteId])return;\nzSites[visitedSiteId].visited=true})})();(function(){var banners=[];var ivl;if(!curSite)return;ivl=setInterval(function(){if(typeof zSitesBanners===\"undefined\")return;clearInterval(ivl);banners=JSON.parse(zSitesBanners);(function(){var columns=[];config.bannerColumns.forEach(function(column){var i;var banner;var site;var selectedBanner=null;if(banners[column]){for(i=0;i\u003Cbanners[column].length;i++){banner=banners[column][i];site=zSites[banner.siteId];if(!site)continue;if(site.visited)continue;if(site.id===\ncurSite.id)continue;selectedBanner=banner;break}if(!selectedBanner)for(i=0;i\u003Cbanners[column].length;i++){banner=banners[column][i];site=zSites[banner.siteId];if(!site)continue;if(site.id===curSite.id)continue;selectedBanner=banner;break}}if(!selectedBanner)return;columns.push({name:column,link:selectedBanner.titleLink,image:selectedBanner.image,title:selectedBanner.title,logoImage:selectedBanner.logoImg,logoLink:selectedBanner.logoLink,kicker:selectedBanner.kicker,kickerImage:selectedBanner.kickerImg})});\ncurSite.paint(columns)})()},500)})();(function(){var banners=[];var times=40;if(!curSite)return;var load=function(){if(\"",["escape",["macro",161],7],"\"===\"(not set)\")return;if(typeof zSitesBanners2===\"undefined\")if(times\u003C=0)return;else{times--;setTimeout(load,500);return}banners=JSON.parse(zSitesBanners2);(function(){var columns=[];config.bannerColumns.forEach(function(column){var i;var banner;var site;var selectedBanner=null;if(banners[column]){for(i=0;i\u003Cbanners[column].length;i++){banner=banners[column][i];\nsite=zSites[banner.siteId];if(!site)continue;if(site.visited)continue;if(site.id===curSite.id)continue;selectedBanner=banner;break}if(!selectedBanner)for(i=0;i\u003Cbanners[column].length;i++){banner=banners[column][i];site=zSites[banner.siteId];if(!site)continue;if(site.id===curSite.id)continue;selectedBanner=banner;break}}if(!selectedBanner)return;columns.push({name:column,link:selectedBanner.titleLink,image:selectedBanner.image,title:selectedBanner.title,logoImage:selectedBanner.logoImg,logoLink:selectedBanner.logoLink,\nkicker:selectedBanner.kicker,kickerImage:selectedBanner.kickerImg})});curSite.paint(null,columns)})()};load()})()})()})[\"catch\"](function(error){console.log(error)})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":25
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar loadInstallBanner=setInterval(function(){\"undefined\"!==typeof zUtils\u0026\u0026zUtils.installBanner\u0026\u0026zUtils.installBanner.init?(console.log(\"loadInstallBanner: Done\"),clearInterval(loadInstallBanner),zUtils.installBanner.init()):console.log(\"loadInstallBanner: Retry\")},1E3);\u003C\/script\u003E  ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":45
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var e=null,k=[{id:\"onbarcelona\",name:\"OnBarcelona\",domains:[\"www.elperiodico.com\"],path:\"\/es\/noticias\/onbarcelona\/\"},{id:\"bolsadelcorredor\",name:\"Bolsa del Corredor\",domains:[\"www.sport.es\"],path:\"\/labolsadelcorredor\/\"},{id:\"fueradejuego\",name:\"Fuera de Juego\",domains:[\"www.sport.es\"],path:\"\/es\/noticias\/fuera-de-juego\/\"},{id:\"esports\",name:\"eSports\",domains:[\"www.sport.es\"],path:\"\/es\/noticias\/esports\/\"},{id:\"extra\",name:\"Extra\",domains:\"www.elperiodico.com www.elperiodico.cat pre.elperiodico.com beta-pre.elperiodico.com beta.elperiodico.com pre.elperiodico.cat beta-pre.elperiodico.cat beta.elperiodico.cat\".split(\" \"),\npath:\"\/es\/noticias\/extra\/\"},{id:\"port\",name:\"Port\",domains:[\"www.elperiodico.com\",\"test.elperiodico.com\"],path:\"\/es\/port\/\"},{id:\"yotele\",name:\"Yotele\",domains:[\"www.elperiodico.com\"],path:\"\/es\/yotele\/\"},{id:\"cuore\",name:\"Cuore\",domains:[\"www.cuore.es\",\"test.cuore.es\"]},{id:\"woman\",name:\"Woman\",domains:[\"www.woman.es\",\"test.woman.es\"]},{id:\"elperiodico\",name:\"El Peri\\u00f3dico\",domains:[\"www.elperiodico.com\",\"www.elperiodico.cat\"]},{id:\"sport\",name:\"Sport\",domains:[\"www.sport.es\",\"beta-pre.sport.es\"]},\n{id:\"diariolagrada\",name:\"Diario La Grada\",domains:[\"www.diariolagrada.com\"]},{id:\"elperiodicomediterraneo\",name:\"El Peri\\u00f3dico Mediterraneo\",domains:[\"www.elperiodicomediterraneo.com\"]},{id:\"diariocordoba\",name:\"Diario C\\u00f3rdoba\",domains:[\"www.diariocordoba.com\"]},{id:\"lacronicabadajoz\",name:\"La Cr\\u00f3nica Badajoz\",domains:[\"www.lacronicabadajoz.com\"]},{id:\"elperiodicoextremadura\",name:\"El Peri\\u00f3dico Extremadura\",domains:[\"www.elperiodicoextremadura.com\"]},{id:\"elperiodicodearagon\",\nname:\"El Peri\\u00f3dico de Arag\\u00f3n\",domains:[\"www.elperiodicodearagon.com\"]},{id:\"codigonuevo\",name:\"C\\u00f3digo Nuevo\",domains:[\"www.codigonuevo.com\"]},{id:\"digitalcamera\",name:\"Digital Camera\",domains:[\"www.digitalcamera.es\"]},{id:\"autohebdosport\",name:\"Autohebdo Sport\",domains:[\"www.autohebdosport.es\",\"test.autohebdosport.es\"]},{id:\"stilo\",name:\"Stilo\",domains:[\"www.stilo.es\",\"test.stilo.es\"]},{id:\"triatletasenred\",name:\"Triatletas en Red\",domains:[\"triatletasenred.sport.es\"]},{id:\"areajugones\",\nname:\"Area Jugones\",domains:[\"areajugones.sport.es\"]},{id:\"viajar\",name:\"Viajar\",domains:[\"viajar.elperiodico.com\",\"test.viajar.elperiodico.com\"]},{id:\"castellonfire\",name:\"Castellon Fire\",domains:[\"www.castellonfire.com\"]},{id:\"compramejor\",name:\"Compra Mejor\",domains:[\"www.compramejor.es\"]}],f=function(b){var c=document.createElement(\"a\");c.href=b;return c.hostname},l=function(b){var c=\"; \"+document.cookie;b=c.split(\"; \"+b+\"\\x3d\");return 2===b.length?b.pop().split(\";\").shift():null},g=function(b,\nc){var a=null;k.forEach(function(d){a||-1===d.domains.indexOf(b)||d.path\u0026\u0026!c.match(\"^\"+d.path)||(a=d)});return a};(function(){var b=g(document.location.hostname,document.location.pathname),c=f(document.referrer);var a=document.referrer;var d=document.createElement(\"a\");d.href=a;a=d.pathname;c=g(c,a);b\u0026\u0026c\u0026\u0026c.id!==b.id\u0026\u0026(e=c)})();(function(){var b=[],c;e\u0026\u0026(function(){var a=!1,d=l(\"z-visited\");d\u0026\u0026d.split(\",\").forEach(function(h){b.push(h);h===e.id\u0026\u0026(a=!0,console.debug('GLOB Setter-ref: \"'+e.name+'\" was already marked as visited'))});\na||(b.push(e.id),console.debug('GLOB Setter-ref: Mark \"'+e.name+'\" as visited'))}(),function(){var a=new Date,d=(a.getMonth()+1)%12;a=a.getFullYear();0===d\u0026\u0026a++;c=new Date(a,d,1)}(),function(){var a=\".\"+f(document.location.href);document.cookie=\"z-visited\\x3d\"+b.join(\",\")+\";expires\\x3d\"+c+\";domain\\x3d\"+a+\";path\\x3d\/\"}())})()})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.querySelectorAll('h2 \\x3e a[href^\\x3d\"\/\"][title],h2 \\x3e a[href*\\x3d\"\/\/www.elperiodico.com\"][title]').forEach(function(a,c){a.addEventListener(\"mousedown\",function(){try{var a=\"\/es\/\"==location.pathname?\"clickin edicion catalunya\":\"\/es\/global\/\"==location.pathname?\"clickin edicion global\":\"clickin edicion (not-set)\";var b=this.title;var d=c+1;b\u0026\u0026dataLayer.push({event:\"gaEvent\",eventCategory:\"acciones portada principal\",eventAction:a,eventLabel:b+\" - \"+d,eventValue:void 0,nonInteraction:!1})}catch(e){}})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":53
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,a,c,d,e){var f=b.getElementsByTagName(a)[0];b.getElementById(c)||(a=b.createElement(\"script\"),a.id=c,a.async=1,a.h=d,a.t=e,b=encodeURI(btoa(b.referrer)),a.src=\"\/\/\"+d+\"\/pixel\/js\/\"+e+\"\/\"+b,f.parentNode.insertBefore(a,f))})(document,\"script\",\"dogtrack-pixel\",\"spixel.socy.es\",",["escape",["macro",164],8,16],");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":54
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar _egoiaq=_egoiaq||[];(function(){var c=\"https:\"==document.location.protocol?\"https:\/\/egoimmerce.e-goi.com\/\":\"http:\/\/egoimmerce.e-goi.com\/\";_egoiaq.push([\"setClientId\",\"142233\"]);_egoiaq.push([\"setSubscriber\",\"",["escape",["macro",8],7],"\"]);_egoiaq.push([\"setTrackerUrl\",c+\"collect\"]);_egoiaq.push([\"trackPageView\"]);var a=document,b=a.createElement(\"script\");a=a.getElementsByTagName(\"script\")[0];b.type=\"text\/javascript\";b.defer=!0;b.async=!0;b.src=c+\"egoimmerce.js\";a.parentNode.insertBefore(b,a)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":80
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_linkedin_partner_id=\"487714\";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=487714\u0026amp;fmt=gif\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":89
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var k=document.createElement(\"script\");k.type=\"text\/javascript\";k.async=!0;k.src=\"https:\/\/estaticos.elperiodico.com\/es\/ext_resources\/ads\/konodrac\/mark-collector.iife.js\";var m=document.getElementsByTagName(\"script\")[0];m.parentNode.insertBefore(k,m);var n=",["escape",["macro",73],8,16],".split(\"\/\"),q=function(p){var c={digitalData:{page:{category:{channel:",["escape",["macro",54],8,16],"},pageInfo:{language:\"es\"},sysInfo:{sysEnv:\"web\"}}}};\"undefined\"===typeof MarkCollector?60\u003Cp||setTimeout(function(){q(p+1)},\n500):(console.log(\"KD: Initializing user tracker...\"),function(){var d=",["escape",["macro",5],8,16],",e=",["escape",["macro",4],8,16],",f=",["escape",["macro",61],8,16],",g=",["escape",["macro",40],8,16],",h=",["escape",["macro",42],8,16],",a=",["escape",["macro",43],8,16],",b=\"adblock desactivado\"!==",["escape",["macro",47],8,16],",r=",["escape",["macro",51],8,16],",t=n[0]+\"\/\/\"+n[2]+",["escape",["macro",1],8,16],",l=\"\";\"logado\"===",["escape",["macro",65],8,16],"\u0026\u0026(l=\"\"+",["escape",["macro",8],8,16],");d\u0026\u0026(c.digitalData.page.category.pageType=d);e\u0026\u0026(c.digitalData.page.category.primaryCategory=e);f\u0026\u0026(c.digitalData.page.category.subCategory=\nf);g\u0026\u0026(c.digitalData.page.category.topics=g.split(\",\"));h\u0026\u0026(c.digitalData.page.category.author=h);a\u0026\u0026(c.digitalData.page.category.editor=a);b\u0026\u0026(c.digitalData.page.category.adblockStatus=b);r\u0026\u0026(c.digitalData.page.pageInfo.pageID=r);t\u0026\u0026(c.digitalData.pageInstanceID=t);\"\"!==l\u0026\u0026location.hostname.match(\/www.elperiodico.com|www.elperiodico.cat\/)\u0026\u0026(c.digitalData.user={profile:{profileID:l}})}(),MarkCollector.init(\"db9cc360-eda9-11e8-babd-69ceed32a787\",\"GrupoZ Application\",\"GrupoZ View\",c).then(function(d){var e=\nd.find(function(a){return a.event\u0026\u0026\"View\"==a.event.eventName});e\u0026\u0026MarkCollector.eventController.recordActiveTagEvent(e,{})[\"catch\"](function(a){console.log(a)});var f=d.find(function(a){return a.event\u0026\u0026\"Before Unload\"==a.event.eventName});f\u0026\u0026window.addEventListener(\"pagehide\",function(){MarkCollector.eventController.recordActiveTagEvent(f,{})[\"catch\"](function(a){console.log(a)})});var g=d.find(function(a){return a.event\u0026\u0026\"Component View\"==a.event.eventName});g\u0026\u0026document.addEventListener(\"KonoVirtualPageView\",\nfunction(a){a=a.detail;var b={digitalData:{page:{category:{channel:",["escape",["macro",54],8,16],"},pageInfo:{language:\"es\"},sysInfo:{sysEnv:\"web\"}}}};a.pageType\u0026\u0026(b.digitalData.page.category.pageType=a.pageType);a.editor\u0026\u0026(b.digitalData.page.category.editor=a.editor);a.pageID\u0026\u0026(b.digitalData.page.pageInfo.pageID=a.pageID);a.title\u0026\u0026(b.digitalData.page.pageInfo.title=a.title);a.pageInstanceID\u0026\u0026(b.digitalData.pageInstanceID=a.pageInstanceID);MarkCollector.eventController.recordActiveTagEvent(g,b);MarkCollector.setViewContext(b)});\nvar h=d.find(function(a){return a.event\u0026\u0026\"Share\"==a.event.eventName});h\u0026\u0026document.addEventListener(\"KonoShare\",function(a){a=a.detail;MarkCollector.eventController.recordActiveTagEvent(h,{socialMediaType:a.socialMediaType})[\"catch\"](function(b){console.log(b)})})})[\"catch\"](function(d){console.log(d)}))};q(0)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":100
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=new CustomEvent(\"KonoVirtualPageView\",{detail:{title:",["escape",["macro",11],8,16],",pageInstanceID:",["escape",["macro",9],8,16],"}});document.dispatchEvent(a)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":102
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=new CustomEvent(\"KonoShare\",{detail:{socialMediaType:",["escape",["macro",125],8,16],"}});document.dispatchEvent(a)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":103
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cX=window.cX||{};window.cX.callQueue=window.cX.callQueue||[];window.cX.callQueue.push([\"requireConsent\"]);window.cX.callQueue.push([\"setSiteId\",",["escape",["macro",165],8,16],"]);window.cX.callQueue.push([\"sendPageViewEvent\"]);(function(c,a,b,d){b=c.createElement(a);b.type=\"text\/java\"+a;b.async=\"async\";b.src=\"http\"+(\"https:\"===location.protocol?\"s:\/\/s\":\":\/\/\")+\"cdn.cxense.com\/cx.js\";d=c.getElementsByTagName(a)[0];d.parentNode.insertBefore(b,d)})(document,\"script\");\nwindow.didomiOnReady=window.didomiOnReady||[];window.didomiOnReady.push(function(c){c.getObservableOnUserConsentStatusForVendor(\"412\").subscribe(function(a){!0===a?window.cX.callQueue.push([\"setConsent\",{pv:!0,segment:!0,ad:!0,recs:!0}]):window.cX.callQueue.push([\"setConsent\",{pv:!1,segment:!1,ad:!1,recs:!1}])})});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":158
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var v=function(){if(\"undefined\"!=typeof jwplayer){var h=function(a){return new Promise(function(e,b){(function k(l){return function(){if(5\u003C=l)return b();var g=jwplayer(a);if(g\u0026\u0026g.id)return e(g);setTimeout(k(l+1),500)}})(0)()})};try{var m=[25,50,75],d=[],r=0,q=function(a,e,b){for(var c=0;c\u003Ca.length;c++)if(a[c][e]==b)return c;return null},n=\"playlistItem\",w=\"adImpression\",x=\"adComplete\",y=\"firstFrame\",z=\"beforeComplete\",A=\"complete\",B=\"error\",C=\"setupError\",D=\"adError\",E=\"time\",u=function(a,\ne){d.push({id:a.id,markers:[]});a.reset=function(b){if(b==n){var c=q(d,\"id\",a.id);d[c].markers=[]}b==n\u0026\u0026(a.hasStarted=!1,a.hasStartedContent=!1,a.hasFiredStartPreRoll=!1,a.hasFiredEndPreRoll=!1,a.hasFiredPreRollAdError=!1,a.hasFiredPostRoll=!1,a.hasFiredPostRollAdError=!1,a.hasEndedContent=!1)};a.getStage=function(){if(a.hasStartedContent){if(a.hasStartedContent\u0026\u0026!a.hasEndedContent)return\"mid\";a.hasFiredPostRoll=!0;return\"post\"}return\"pre\"};a.pushPercent=function(b){var c=function(){var f=[],p;for(p in m){var t=\nm[p];t\u003C=b\u0026\u0026f.push(t)}return f},l=function(f){f!=m[0]||a.hasStartedContent||a.pushStartVideoContent();d[k].markers.push(f);dataLayer.push({event:\"video\",eventCategory:\"video jwplayer\",eventAction:\"video progress \"+f+\"%\",eventLabel:a.getPlaylistItem().title||a.getPlaylistItem().file.split(\"\/\").pop(),eventValue:void 0,nonInteraction:!1,hShareLinkedin:void 0,hShareFacebook:void 0,hShareGoogle:void 0,hShareTwitter:void 0,hSharePrint:void 0,hSharePinterest:void 0,hShareEmail:void 0,hSendLetter:void 0,hShareWhatsapp:void 0,\nhShareTelegram:void 0,hShareFacebookMessenger:void 0,hDownDoc:void 0,cMetricEngageTime:void 0,hVideoStart:void 0,hVideoStartContent:void 0,hVideoComplete:void 0,player_id:a.id,interaction:\"Progress \"+f+\"%\",video_url:a.getPlaylistItem().file,video_title:a.getPlaylistItem().title,duration:a.getDuration(),width:a.getWidth(),height:a.getHeight(),position:a.getPosition(),resolutions:[].map.call(a.getQualityLevels(),function(p){return p.label}),volume:a.getVolume(),player_type:a.getProvider(),stream_type:a.streamType,\ncurrent_state:a.state,nonInteraction:!1})},k=q(d,\"id\",a.id);lowerMarkers=c();for(var g in lowerMarkers)c=lowerMarkers[g],-1==d[k].markers.indexOf(c)\u0026\u0026l(c)};a.pushStartVideoEvent=function(){a.hasStarted=!0;dataLayer.push({event:\"video\",eventCategory:\"video jwplayer\",eventAction:\"video start\",eventLabel:a.getPlaylistItem().title||a.getPlaylistItem().file.split(\"\/\").pop(),eventValue:void 0,nonInteraction:!1,hShareLinkedin:void 0,hShareFacebook:void 0,hShareGoogle:void 0,hShareTwitter:void 0,hSharePrint:void 0,\nhSharePinterest:void 0,hShareEmail:void 0,hSendLetter:void 0,hShareWhatsapp:void 0,hShareTelegram:void 0,hShareFacebookMessenger:void 0,hDownDoc:void 0,cMetricEngageTime:void 0,hVideoStart:1,hVideoStartContent:void 0,hVideoComplete:void 0,player_id:a.id,interaction:\"Ready\",video_url:a.getPlaylistItem().file,video_title:a.getPlaylistItem().title,duration:a.getDuration(),width:a.getWidth(),height:a.getHeight(),position:a.getPosition(),volume:a.getVolume(),player_type:a.getProvider(),stream_type:a.streamType,\ncurrent_state:a.state,nonInteraction:!1})};a.pushStartAdEvent=function(){a.hasStartedContent?a.hasStartedContent\u0026\u0026a.hasEndedContent\u0026\u0026(a.hasFiredPostRoll=!0):(a.hasStarted||a.pushStartVideoEvent(),a.hasFiredStartPreRoll=!0);dataLayer.push({event:\"video\",eventCategory:\"video jwplayer\",eventAction:\"video start \"+a.getStage()+\"roll\",eventLabel:a.getPlaylistItem().title||a.getPlaylistItem().file.split(\"\/\").pop(),eventValue:void 0,nonInteraction:!1,hShareLinkedin:void 0,hShareFacebook:void 0,hShareGoogle:void 0,\nhShareTwitter:void 0,hSharePrint:void 0,hSharePinterest:void 0,hShareEmail:void 0,hSendLetter:void 0,hShareWhatsapp:void 0,hShareTelegram:void 0,hShareFacebookMessenger:void 0,hDownDoc:void 0,cMetricEngageTime:void 0,hVideoStart:void 0,hVideoStartContent:void 0,hVideoComplete:void 0,player_id:a.id,interaction:\"Play\",video_url:a.getPlaylistItem().file,video_title:a.getPlaylistItem().title,duration:a.getDuration(),width:a.getWidth(),height:a.getHeight(),position:a.getPosition(),volume:a.getVolume(),\nplayer_type:a.getProvider(),stream_type:a.streamType,current_state:a.state,nonInteraction:!1})};a.pushEndAdEvent=function(){a.hasStartedContent?a.hasStartedContent\u0026\u0026a.hasEndedContent\u0026\u0026(a.hasFiredPostRoll=!0):(a.hasFiredStartPreRoll||a.pushStartAdEvent(),a.hasFiredEndPreRoll=!0);dataLayer.push({event:\"video\",eventCategory:\"video jwplayer\",eventAction:\"video end \"+a.getStage(\"end\")+\"roll\",eventLabel:a.getPlaylistItem().title||a.getPlaylistItem().file.split(\"\/\").pop(),eventValue:void 0,nonInteraction:!1,\nhShareLinkedin:void 0,hShareFacebook:void 0,hShareGoogle:void 0,hShareTwitter:void 0,hSharePrint:void 0,hSharePinterest:void 0,hShareEmail:void 0,hSendLetter:void 0,hShareWhatsapp:void 0,hShareTelegram:void 0,hShareFacebookMessenger:void 0,hDownDoc:void 0,cMetricEngageTime:void 0,hVideoStart:void 0,hVideoStartContent:void 0,hVideoComplete:void 0,player_id:a.id,interaction:\"Play\",video_url:a.getPlaylistItem().file,video_title:a.getPlaylistItem().title,duration:a.getDuration(),width:a.getWidth(),height:a.getHeight(),\nposition:a.getPosition(),volume:a.getVolume(),player_type:a.getProvider(),stream_type:a.streamType,current_state:a.state,nonInteraction:!1})};a.pushAdErrorEvent=function(b){a.hasFiredStartPreRoll?a.hasFiredPostRoll||(a.hasFiredPostRoll=!0,a.hasFiredPostRollAdError=!0):(a.hasStarted||a.pushStartVideoEvent(),a.hasFiredStartPreRoll=!0,a.hasFiredEndPreRoll=!0,a.hasFiredPreRollAdError=!0);b||(b={},b.message=\"Unable to fire \"+a.getStage()+\"-roll\");actionMessage=\"adblock activado\"==",["escape",["macro",47],8,16],"?\n\"video blocked ads\":\"video error \"+a.getStage()+\"roll\";dataLayer.push({event:\"video\",eventCategory:\"video jwplayer\",eventAction:actionMessage,eventLabel:a.getPlaylistItem().title||a.getPlaylistItem().file.split(\"\/\").pop(),eventValue:void 0,nonInteraction:!1,hShareLinkedin:void 0,hShareFacebook:void 0,hShareGoogle:void 0,hShareTwitter:void 0,hSharePrint:void 0,hSharePinterest:void 0,hShareEmail:void 0,hSendLetter:void 0,hShareWhatsapp:void 0,hShareTelegram:void 0,hShareFacebookMessenger:void 0,hDownDoc:void 0,\ncMetricEngageTime:void 0,hVideoStart:void 0,hVideoStartContent:void 0,hVideoComplete:void 0,player_id:a.id,interaction:b.message,video_url:a.getPlaylistItem().file,video_title:a.getPlaylistItem().title,duration:a.getDuration(),width:a.getWidth(),height:a.getHeight(),position:a.getPosition(),volume:a.getVolume(),player_type:a.getProvider(),stream_type:a.streamType,current_state:a.state,nonInteraction:!1})};a.pushStartVideoContent=function(){a.hasFiredStartPreRoll||a.hasFiredEndPreRoll||a.hasFiredPreRollAdError||\na.pushAdErrorEvent(void 0);a.hasStartedContent=!0;dataLayer.push({event:\"video\",eventCategory:\"video jwplayer\",eventAction:\"video start content\",eventLabel:a.getPlaylistItem().title||a.getPlaylistItem().file.split(\"\/\").pop(),eventValue:void 0,nonInteraction:!1,hShareLinkedin:void 0,hShareFacebook:void 0,hShareGoogle:void 0,hShareTwitter:void 0,hSharePrint:void 0,hSharePinterest:void 0,hShareEmail:void 0,hSendLetter:void 0,hShareWhatsapp:void 0,hShareTelegram:void 0,hShareFacebookMessenger:void 0,\nhDownDoc:void 0,cMetricEngageTime:void 0,hVideoStart:void 0,hVideoStartContent:1,hVideoComplete:void 0,player_id:a.id,interaction:\"Play\",video_url:a.getPlaylistItem().file,video_title:a.getPlaylistItem().title,duration:a.getDuration(),width:a.getWidth(),height:a.getHeight(),position:a.getPosition(),resolutions:[].map.call(a.getQualityLevels(),function(b){return b.label}),volume:a.getVolume(),player_type:a.getProvider(),stream_type:a.streamType,current_state:a.state,nonInteraction:!1})};a.on(n,function(b){a.reset(n);\na.pushStartVideoEvent()});a.on(w,function(b){a.pushStartAdEvent()});a.on(x,function(b){a.pushEndAdEvent()});a.on(y,function(b){a.pushStartVideoContent()});a.on(z,function(b){a.pushPercent(100);a.hasEndedContent=!0;dataLayer.push({event:\"video\",eventCategory:\"video jwplayer\",eventAction:\"video end content\",eventLabel:a.getPlaylistItem().title||a.getPlaylistItem().file.split(\"\/\").pop(),eventValue:void 0,nonInteraction:!1,hShareLinkedin:void 0,hShareFacebook:void 0,hShareGoogle:void 0,hShareTwitter:void 0,\nhSharePrint:void 0,hSharePinterest:void 0,hShareEmail:void 0,hSendLetter:void 0,hShareWhatsapp:void 0,hShareTelegram:void 0,hShareFacebookMessenger:void 0,hDownDoc:void 0,cMetricEngageTime:void 0,hVideoStart:void 0,hVideoStartContent:void 0,hVideoComplete:void 0,player_id:a.id,interaction:\"Content Complete\",video_url:a.getPlaylistItem().file,video_title:a.getPlaylistItem().title,duration:a.getDuration(),width:a.getWidth(),height:a.getHeight(),position:a.getPosition(),resolutions:[].map.call(a.getQualityLevels(),\nfunction(c){return c.label}),volume:a.getVolume(),player_type:a.getProvider(),stream_type:a.streamType,current_state:a.state,nonInteraction:!1})});a.on(A,function(b){a.hasFiredPostRoll||a.hasFiredPostRollAdError||a.pushAdErrorEvent(void 0);dataLayer.push({event:\"video\",eventCategory:\"video jwplayer\",eventAction:\"video complete\",eventLabel:a.getPlaylistItem().title||a.getPlaylistItem().file.split(\"\/\").pop(),eventValue:void 0,nonInteraction:!1,hShareLinkedin:void 0,hShareFacebook:void 0,hShareGoogle:void 0,\nhShareTwitter:void 0,hSharePrint:void 0,hSharePinterest:void 0,hShareEmail:void 0,hSendLetter:void 0,hShareWhatsapp:void 0,hShareTelegram:void 0,hShareFacebookMessenger:void 0,hDownDoc:void 0,cMetricEngageTime:void 0,hVideoStart:void 0,hVideoStartContent:void 0,hVideoComplete:1,player_id:a.id,interaction:\"Complete\",video_url:a.getPlaylistItem().file,video_title:a.getPlaylistItem().title,duration:a.getDuration(),width:a.getWidth(),height:a.getHeight(),position:a.getPosition(),resolutions:[].map.call(a.getQualityLevels(),\nfunction(c){return c.label}),volume:a.getVolume(),player_type:a.getProvider(),stream_type:a.streamType,current_state:a.state,nonInteraction:!1})});a.on(B,function(b){dataLayer.push({event:\"video\",eventCategory:\"video jwplayer\",eventAction:\"video error\",eventLabel:a.getPlaylistItem().title||a.getPlaylistItem().file.split(\"\/\").pop(),eventValue:void 0,nonInteraction:!1,hShareLinkedin:void 0,hShareFacebook:void 0,hShareGoogle:void 0,hShareTwitter:void 0,hSharePrint:void 0,hSharePinterest:void 0,hShareEmail:void 0,\nhSendLetter:void 0,hShareWhatsapp:void 0,hShareTelegram:void 0,hShareFacebookMessenger:void 0,hDownDoc:void 0,cMetricEngageTime:void 0,hVideoStart:void 0,hVideoStartContent:void 0,hVideoComplete:void 0,player_id:a.id,interaction:b.message,video_url:a.getPlaylistItem().file,video_title:a.getPlaylistItem().title,duration:a.getDuration(),width:a.getWidth(),height:a.getHeight(),position:a.getPosition(),resolutions:[].map.call(a.getQualityLevels(),function(c){return c.label}),volume:a.getVolume(),player_type:a.getProvider(),\nstream_type:a.streamType,current_state:a.state,nonInteraction:!1})});a.on(C,function(b){dataLayer.push({event:\"video\",eventCategory:\"video jwplayer\",eventAction:\"video error setup\",eventLabel:a.getPlaylistItem().title||a.getPlaylistItem().file.split(\"\/\").pop(),eventValue:void 0,nonInteraction:!1,hVideoStart:void 0,hVideoStartContent:void 0,hVideoComplete:void 0,player_id:a.id,interaction:b.message,video_url:a.getPlaylistItem().file,video_title:a.getPlaylistItem().title,duration:a.getDuration(),width:a.getWidth(),\nheight:a.getHeight(),position:a.getPosition(),resolutions:[].map.call(a.getQualityLevels(),function(c){return c.label}),volume:a.getVolume(),player_type:a.getProvider(),stream_type:a.streamType,current_state:a.state,nonInteraction:!1})});a.on(D,function(b){a.pushAdErrorEvent(b)});a.on(E,function(b){b=Math.floor(100*b.position\/b.duration);var c=q(d,\"id\",a.id);-1\u003Cm.indexOf(b)\u0026\u0026-1==d[c].markers.indexOf(b)\u0026\u0026a.pushPercent(b)});e+=1;h(e).then(function(b){u(b,e)})[\"catch\"](function(b){b\u0026\u0026console.log(b)})};\nh(r).then(function(a){u(a,r)})[\"catch\"](function(a){a\u0026\u0026console.log(a)})}catch(a){}}};0\u003Cdocument.querySelectorAll('[data-actas\\x3d\"video\"],.video [id^\\x3d\"feature\"],a.ThumbNailBOTR:not([style])').length?document.querySelectorAll('[data-actas\\x3d\"video\"],.video [id^\\x3d\"feature\"],[data-video-play],a.ThumbNailBOTR:not([style])').forEach(function(h){h.addEventListener(\"click\",function d(){h.removeEventListener(\"click\",d);v()})}):v()})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":159
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"beforeunload\",function(){window.dataLayer.push({event:\"before.unload\"})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1051
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\/*\n js-cookie v3.0.0-rc.0 | MIT *\/\n!function(d,h){\"object\"==typeof exports\u0026\u0026\"undefined\"!=typeof module?module.exports=h():\"function\"==typeof define\u0026\u0026define.amd?define(h):(d=d||self,function(){var f=d.Cookies,e=d.Cookies=h();e.noConflict=function(){return d.Cookies=f,e}}())}(this,function(){function d(f){for(var e=1;e\u003Carguments.length;e++){var m=arguments[e],l;for(l in m)f[l]=m[l]}return f}var h={read:function(f){return f.replace(\/%3B\/g,\";\")},write:function(f){return f.replace(\/;\/g,\"%3B\")}};return function l(e,m){function n(a,g,b){if(\"undefined\"!=\ntypeof document){\"number\"==typeof(b=d({},m,b)).expires\u0026\u0026(b.expires=new Date(Date.now()+864E5*b.expires));b.expires\u0026\u0026(b.expires=b.expires.toUTCString());a=h.write(a).replace(\/=\/g,\"%3D\");g=e.write(String(g),a);var k=\"\",c;for(c in b)b[c]\u0026\u0026(k+=\"; \"+c,!0!==b[c]\u0026\u0026(k+=\"\\x3d\"+b[c].split(\";\")[0]));return document.cookie=a+\"\\x3d\"+g+k}}return Object.create({set:n,get:function(a){if(\"undefined\"!=typeof document\u0026\u0026(!arguments.length||a)){for(var g=document.cookie?document.cookie.split(\"; \"):[],b={},k=0;k\u003Cg.length;k++){var c=\ng[k].split(\"\\x3d\"),p=c.slice(1).join(\"\\x3d\");c=h.read(c[0]).replace(\/%3D\/g,\"\\x3d\");if(b[c]=e.read(p,c),a===c)break}return a?b[a]:b}},remove:function(a,g){n(a,\"\",d({},g,{expires:-1}))},withAttributes:function(a){return l(this.converter,d({},this.attributes,a))},withConverter:function(a){return l(d({},this.converter,a),this.attributes)}},{attributes:{value:Object.freeze(m)},converter:{value:Object.freeze(e)}})}(h,{path:\"\/\"})});Cookies.set(\"previousScroll\",",["escape",["macro",166],8,16],",{domain:\".",["escape",["macro",49],7],"\"});\nCookies.set(\"previousPage\",",["escape",["macro",73],8,16],",{domain:\".",["escape",["macro",49],7],"\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1053
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.fbAsyncInit=function(){",["escape",["macro",167],8,16],".split(\",\").forEach(function(a){FB.init({appId:a,autoLogAppEvents:!0,xfbml:!0,version:\"v8.0\"})})};\u003C\/script\u003E\n\u003Cscript async defer crossorigin=\"anonymous\" data-gtmsrc=\"https:\/\/connect.facebook.net\/en_US\/sdk.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1102
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar dataLayer=\"undefined\"!==typeof dataLayer\u0026\u0026dataLayer instanceof Array?dataLayer:[],videoLabels=[],lastP=[],_playerTitle={},_playerAuthor={},_playerAuthorURL={},_playerUploadDate={};try{init()}catch(a){dataLayer.push({event:\"gtm.error\",errorMessage:e.message,tag:\"TOOL - Vimeo Video Listener\"})}\nfunction init(){try{var a=document.getElementsByTagName(\"iframe\");for(i=0;i\u003Ca.length;++i){var b=a[i].getAttribute(\"src\");if(\/player\\.vimeo\\.com\\\/video\/.test(b)){a[i].hasAttribute(\"id\")||a[i].setAttribute(\"id\",\"vimeo_id_\"+i);var c=!1;\/api=\/.test(b)||(b=updateUrl(b,\"api\",1),c=!0);\/player_id=\/.test(b)||(b=updateUrl(b,\"player_id\",a[i].getAttribute(\"id\")),c=!0);c\u0026\u0026a[i].setAttribute(\"src\",b);videoLabels[a[i].getAttribute(\"id\")]=a[i].getAttribute(\"src\")}}window.addEventListener?window.addEventListener(\"message\",\nonMessageReceived,!1):window.attachEvent(\"onmessage\",onMessageReceived,!1)}catch(d){}}function updateUrl(a,b,c){try{return a+(\/\\?\/.test(a)?\"\\x26\":\"?\")+b+\"\\x3d\"+c}catch(d){}}function onMessageReceived(a){try{var b=a.data;\"string\"===typeof b\u0026\u0026(b=JSON.parse(b));switch(b.event){case \"ready\":onReady(b);break;case \"play\":onPlay(b);break;case \"ended\":onFinish(b)}}catch(c){}}\nfunction post(a,b){try{a={method:a};b\u0026\u0026(a.value=b);JSON.stringify(a);var c=document.getElementsByTagName(\"iframe\"),d;for(i=0;i\u003Cc.length;++i){var f=c[i].getAttribute(\"src\");\/player\\.vimeo\\.com\\\/video\/.test(f)\u0026\u0026((d=c[i].getAttribute(\"src\").split(\"?\")[0].split(\"\/\/\")[0])||(f=\"https:\"+c[i].getAttribute(\"src\").split(\"?\")[0]),c[i].contentWindow.postMessage(a,f))}}catch(g){}}function getLabel(a){try{return videoLabels[a].split(\"?\")[0].split(\"\/\").pop()}catch(b){}}\nfunction getVimeoInfo(a,b){b=document.createElement(\"script\");b.type=\"text\/javascript\";b.src=a;document.getElementsByTagName(\"body\")[0].appendChild(b)}function vimeoCallback(a){_playerTitle[a.video_id]=a.title;_playerAuthor[a.video_id]=a.author_name;_playerAuthorURL[a.video_id]=a.author_url;_playerUploadDate[a.video_id]=a.upload_date}\nfunction onReady(a){try{getVimeoInfo(\"https:\/\/www.vimeo.com\/api\/oembed.json?url\\x3dhttps:\/\/vimeo.com\/\"+getLabel(a.player_id)+\"\\x26callback\\x3dvimeoCallback\",vimeoCallback),post(\"addEventListener\",\"play\"),post(\"addEventListener\",\"finish\")}catch(b){}}\nfunction onPlay(a){try{dataLayer.push({event:\"gtm.vimeo\",eventCategory:\"video vimeo\",eventAction:\"video start\",eventLabel:_playerTitle[getLabel(a.player_id)].toLowerCase()+\" - \"+getLabel(a.player_id),eventValue:void 0,vimeo_playerID:getLabel(a.player_id),vimeo_playerTitle:_playerTitle[getLabel(a.player_id)].toLowerCase(),vimeo_playerAuthor:_playerAuthor[getLabel(a.player_id)].toLowerCase(),vimeo_playerAuthorURL:_playerAuthorURL[getLabel(a.player_id)].toLowerCase(),vimeo_playerUploadDate:_playerUploadDate[getLabel(a.player_id)],\nnonInteractive:!0})}catch(b){}}\nfunction onFinish(a){try{dataLayer.push({event:\"gtm.vimeo\",eventCategory:\"video vimeo\",eventAction:\"video complete\",eventLabel:_playerTitle[getLabel(a.player_id)].toLowerCase()+\" - \"+getLabel(a.player_id),eventValue:void 0,vimeo_playerID:getLabel(a.player_id),vimeo_playerTitle:_playerTitle[getLabel(a.player_id)].toLowerCase(),vimeo_playerAuthor:_playerAuthor[getLabel(a.player_id)].toLowerCase(),vimeo_playerAuthorURL:_playerAuthorURL[getLabel(a.player_id)].toLowerCase(),vimeo_playerUploadDate:_playerUploadDate[getLabel(a.player_id)],\nnonInteractive:!0})}catch(b){}};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1174
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var p=[25,50,75],b=[],g=!0,n=function(h){var f=function(a,d,q){for(var e=0;e\u003Ca.length;e++)if(a[e][d]==q)return e;return null},m=function(){if(\"play\"==k){var a=f(b,\"id\",c);b[a].markers=[];dataLayer.push({event:\"video\",eventCategory:\"video laliga\",eventAction:\"video start content\",eventLabel:b[a].title,eventValue:void 0,nonInteraction:!1,hShareLinkedin:void 0,hShareFacebook:void 0,hShareGoogle:void 0,hShareTwitter:void 0,hSharePrint:void 0,hSharePinterest:void 0,hShareEmail:void 0,hSendLetter:void 0,\nhShareWhatsapp:void 0,hShareTelegram:void 0,hShareFacebookMessenger:void 0,hDownDoc:void 0,cMetricEngageTime:void 0,hVideoStart:1,hVideoStartContent:void 0,hVideoComplete:void 0,player_id:c,interaction:\"Ready\",video_url:void 0,video_title:b[a].title,duration:b[a].duration,width:void 0,height:void 0,position:void 0,volume:void 0,player_type:void 0,stream_type:void 0,current_state:void 0,nonInteraction:!1})}else if(\"complete\"==k)a=f(b,\"id\",c),dataLayer.push({event:\"video\",eventCategory:\"video laliga\",\neventAction:\"video end content\",eventLabel:b[a].title,eventValue:void 0,nonInteraction:!1,hShareLinkedin:void 0,hShareFacebook:void 0,hShareGoogle:void 0,hShareTwitter:void 0,hSharePrint:void 0,hSharePinterest:void 0,hShareEmail:void 0,hSendLetter:void 0,hShareWhatsapp:void 0,hShareTelegram:void 0,hShareFacebookMessenger:void 0,hDownDoc:void 0,cMetricEngageTime:void 0,hVideoStart:void 0,hVideoStartContent:void 0,hVideoComplete:1,player_id:c,interaction:\"Ready\",video_url:void 0,video_title:b[a].title,\nduration:b[a].duration,width:void 0,height:void 0,position:void 0,volume:void 0,player_type:void 0,stream_type:void 0,current_state:void 0,nonInteraction:!1});else if(\"time\"==k\u0026\u0026(a=f(b,\"id\",c),null!=a)){var d=l.currentTime;d=Math.floor(100*d\/b[a].duration);-1\u003Cp.indexOf(d)\u0026\u0026-1==b[a].markers.indexOf(d)\u0026\u0026(b[a].markers.push(d),dataLayer.push({event:\"video\",eventCategory:\"video liga\",eventAction:\"video progress \"+d+\"%\",eventLabel:b[a].title,eventValue:void 0,nonInteraction:!1,hShareLinkedin:void 0,hShareFacebook:void 0,\nhShareGoogle:void 0,hShareTwitter:void 0,hSharePrint:void 0,hSharePinterest:void 0,hShareEmail:void 0,hSendLetter:void 0,hShareWhatsapp:void 0,hShareTelegram:void 0,hShareFacebookMessenger:void 0,hDownDoc:void 0,cMetricEngageTime:void 0,hVideoStart:void 0,hVideoStartContent:void 0,hVideoComplete:void 0,player_id:c,interaction:\"Complete\",video_url:void 0,video_title:b[a].title,duration:b[a].duration,width:void 0,height:void 0,position:void 0,volume:void 0,player_type:void 0,stream_type:void 0,current_state:void 0,\nnonInteraction:!1}))}},r=function(){var a=new Headers;a.append(\"x-api-key\",\"5d4165e7ddb66776bb841407\");a={method:\"GET\",headers:a,mode:\"cors\",cache:\"default\"};return new Request(\"https:\/\/api-cms.playerclipslaliga.tv\/api\/v1\/clips\/\"+c,a)},t=h.data.cb;if(\"eventsplayer\"===t){var l=h.data.obj,k=l.event,c=l.idClip;null==f(b,\"id\",c)\u0026\u0026g?(g=!1,fetch(r()).then(function(a){if(200===a.status)return a.json();throw Error(\"Something went wrong on api server!\");}).then(function(a){b.push({id:c,createdAt:a.createdAt,\nduration:a.duration,title:a.title,markers:[]});g=!0;m()})[\"catch\"](function(a){console.error(a)})):m()}};0\u003Cdocument.querySelectorAll('iframe[src*\\x3d\"playerclipslaliga\"]').length\u0026\u0026document.querySelectorAll('iframe[src*\\x3d\"playerclipslaliga\"]').forEach(function(h){window.addEventListener?window.addEventListener(\"message\",n,!1):window.attachEvent\u0026\u0026window.attachEvent(\"onmessage\",n)})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1178
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window._mo=window._mo||{};window._mo.execQue=window._mo.execQue||[];window._mo.execQue.push({\"function\":function(){window._mo.vPV()}})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1208
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-vendor=\"c:indigitall\"\u003E(function(){var a=document.createElement(\"script\");a.src=\"\/js\/sdk.min.js\";a.async=\"true\";a.addEventListener(\"load\",function(){indigitall.init({appKey:\"",["escape",["macro",169],7],"\",urlDeviceApi:\"https:\/\/eu2.device-api.indigitall.com\/v1\",workerPath:\"\/js\/worker.min.js\"})});document.head.appendChild(a)})();\u003C\/script\u003E "],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1214
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.head||document.getElementsByTagName(\"head\")[0],a=document.createElement(\"style\");a.id=\"chartbeat-flicker-control-style\";a.type=\"text\/css\";b.appendChild(a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1218
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"datalayer-initialized"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"virtual-pageview"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"autohebdosport.es|primeralinea.es|revistacuore.com|cuore.es|stilo.es|woman.es|digitalcamera.es|interviu.es|tiempodehoy.com"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"autohebdosport.es|cuore.es|stilo.es|woman.es|digitalcamera.es"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gaEvent"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"video"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^eec"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gaSocial"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"autohebdosport.es|primeralinea.es|revistacuore.com|cuore.es|stilo.es|woman.es|digitalcamera.es"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"elperiodico.cat|elperiodico.com"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"elperiodico.com|elperiodico.cat"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"\\.sport.es|elbalonrosa.com|sport-english.com|codigonuevo.com"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"\\.sport.es"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"\\.sport.es|sport-english.com|codigonuevo.com"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"lacronicabadajoz.com|enciclopedia-aragonesa.com|elperiodicomediterraneo.com|elperiodicoextremadura.com|elperiodicodelazulejo.es|elperiodicodearagon.com|diariolagrada.com|diariocordoba.com|cordobilla.com|cochescastellon.com|castellonfire.com"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"contactosyrelax.com|grupozeta.es|newsuperjuegos.com|zetagestion.com|zetakiosko.com|zetaventure"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"grupozeta.es|zetagestion.com|zetakiosko.com|zetaventure"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"^viajar\\.*elperiodico.com$|^viajar\\.especiales\\.elperiodico\\.com$|^neomotor\\-dev\\.sport\\.es$|^neomotor\\.sport\\.es$"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"pre.sport.es|beta-pre.sport.es|www.sport.es"
    },{
      "function":"_cn",
      "arg0":["macro",54],
      "arg1":"codigonuevo.com"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.load"
    },{
      "function":"_css",
      "arg0":["macro",130],
      "arg1":".ep-ticker .ep-ticker-content .title a"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",73],
      "arg1":".*elperiodico\\.com\\\/es\\\/$|.*7843454$"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"www.elperiodico.com|www.elperiodico.cat"
    },{
      "function":"_re",
      "arg0":["macro",132],
      "arg1":"^buscar$|^cercar$|^suscríbete$|^subscriu-t'hi$|^iniciar sesión$|^inicia sessió$|^cerrar sesión$|^tancar sessió$|^únete$|^uneix\\-te$|^uneix\\-t\\'hi$|^únete\\ gratis$|^uneix\\-t\\'hi\\ gratis$|^inicia sesión$|^inicia sessió$|^login$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"www.elperiodico.com|www.elperiodico.cat",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",133],
      "arg1":"icon-person|icon-search"
    },{
      "function":"_re",
      "arg0":["macro",133],
      "arg1":"comments comment-count comments-scroll-button|disqus-comment-count"
    },{
      "function":"_re",
      "arg0":["macro",132],
      "arg1":"^ver comentarios$|^comentarios$",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",54],
      "arg1":"clubep.elperiodico.com"
    },{
      "function":"_re",
      "arg0":["macro",132],
      "arg1":"DATE DE ALTA AHORA|EMPIEZA A DISFRUTAR DE LAS PROPUESTAS",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",73],
      "arg1":"?recirculacion-link"
    },{
      "function":"_css",
      "arg0":["macro",130],
      "arg1":"* div.box-left \u003E div.ep-related-long \u003E div.middle \u003E div.item *"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.triggerGroup"
    },{
      "function":"_re",
      "arg0":["macro",135],
      "arg1":"(^$|((^|,)2613943_1096($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",135],
      "arg1":"(^$|((^|,)2613943_753($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",135],
      "arg1":"(^$|((^|,)2613943_758($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",135],
      "arg1":"(^$|((^|,)2613943_759($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",135],
      "arg1":"(^$|((^|,)2613943_760($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",135],
      "arg1":"(^$|((^|,)2613943_761($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",135],
      "arg1":"(^$|((^|,)2613943_757($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",73],
      "arg1":"?marketing"
    },{
      "function":"_re",
      "arg0":["macro",73],
      "arg1":".*sport\\.es\\\/en\\\/.*|.*\\\/cuore\\\/.*"
    },{
      "function":"_css",
      "arg0":["macro",130],
      "arg1":".article-24-7 *"
    },{
      "function":"_sw",
      "arg0":["macro",56],
      "arg1":"http"
    },{
      "function":"_re",
      "arg0":["macro",56],
      "arg1":"^$"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.dom"
    },{
      "function":"_css",
      "arg0":["macro",130],
      "arg1":".carousel-related *"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gaTiming"
    },{
      "function":"_cn",
      "arg0":["macro",54],
      "arg1":"elperiodico.com"
    },{
      "function":"_cn",
      "arg0":["macro",54],
      "arg1":"sport.es"
    },{
      "function":"_eq",
      "arg0":["macro",102],
      "arg1":"mas periodico"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.vimeo"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"stilo.es|codigonuevo.com|cuore.es|woman.es|elperiodicodearagon.com|elperiodicomediterraneo.com|diariocordoba.com|elperiodicoextremadura.com|lacronicabadajoz.com|sport.es|elperiodico.com|elperiodico.cat"
    },{
      "function":"_re",
      "arg0":["macro",132],
      "arg1":"^únete$|^uneix\\-te$|^uneix\\-t\\'hi$|^únete\\ gratis$|^uneix\\-t\\'hi\\ gratis$",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",158],
      "arg1":"relanzamiento-2020"
    },{
      "function":"_cn",
      "arg0":["macro",73],
      "arg1":"?outbrain-link"
    },{
      "function":"_re",
      "arg0":["macro",133],
      "arg1":"bottom-nav__link bottom-nav__link--home|icon-menu|site-navigation__link"
    },{
      "function":"_re",
      "arg0":["macro",132],
      "arg1":"Ver más|Cargar más|Leer más noticias",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":".*elperiodico.com.*|.*elperiodico.cat.*",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"noticia"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",135],
      "arg1":"(^$|((^|,)2613943_1095($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":".*elperiodico.com.*|.*elperiodico.cat.*"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"noticia"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",135],
      "arg1":"(^$|((^|,)2613943_695($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",103],
      "arg1":"visible"
    },{
      "function":"_eq",
      "arg0":["macro",54],
      "arg1":"usuarios.elperiodico.com"
    },{
      "function":"_eq",
      "arg0":["macro",160],
      "arg1":"(not set)"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"bb-pre.sport.es"
    },{
      "function":"_eq",
      "arg0":["macro",163],
      "arg1":"1"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"labolsadelcorredor"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"portada principal"
    },{
      "function":"_cn",
      "arg0":["macro",54],
      "arg1":"www.elperiodico.com"
    },{
      "function":"_re",
      "arg0":["macro",73],
      "arg1":"www.stilo.es|www.codigonuevo.com|byzness.elperiodico.com|viajar.elperiodico.com|www.elperiodico.com|www.woman.es|www.elperiodicodearagon.com|www.elperiodicomediterraneo.com|www.diariocordoba.com|www.elperiodicoextremadura.com|www.lacronicabadajoz.com|www.sport.es"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/labolsadelcorredor\/"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"suscripciones.elperiodico.com|clubep.elperiodico.com"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"www.elperiodico.cat|www.elperiodico.com|suscripciones.elperiodico.com|subscripcions.elperiodico.cat|pdf.elperiodico.com|pdf.elperiodico.cat"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":".*sport.es|.*elperiodico.com|.*elperiodico.cat|.*diariocordoba.com|.*viajar.elperiodico.com|.*stilo.es|.*autohebdosport.es|.*digitalcamera.es|.*codigonuevo.com|.*elperiodicomediterraneo.com|.*elperiodicodearagon.com|.*elperiodicoextremadura.com|.*woman.es|.*cuore.es|.*lacronicabadajoz.com|.*elperiodicodelazulejo.es|.*cordobilla.com|.*castellonfire.com|.*grupozeta.es|.*zetagestion.com|.*zetakiosko.com|.*redextremadura.com"
    },{
      "function":"_re",
      "arg0":["macro",73],
      "arg1":".*areajugones.sport.es.*|.*minijuegos.sport.es.*|.*minijuegos.cuore.es.*|.*stories.woman.es.*|.*stories.stilo.es.*|.*stories.viajar.elperiodico.com.*|.*sport.es\/labolsadelcorredor.*|.*enciclopedia-aragonesa.com.*|.*viajar.elperiodico.com\/cupones.*|.*stilo.es\/cupones.*|.*woman.es\/cupones.*|.*cuore.es\/cupones.*|.*descuentos.interviu.es.*|.*precio-coche.sport.es.*|.*triatletasenred.sport.es.*"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":".*sport.es|.*elperiodico.com|.*elperiodico.cat|.*diariocordoba.com|.*viajar.elperiodico.com|.*stilo.es|.*autohebdosport.es|.*digitalcamera.es|.*codigonuevo.com|.*elperiodicomediterraneo.com|.*elperiodicodearagon.com|.*elperiodicoextremadura.com|.*woman.es|.*cuore.es|.*diariolagrada.com|.*lacronicabadajoz.com|.*elperiodicodelazulejo.es|.*cordobilla.com|.*castellonfire.com|.*grupozeta.es|.*zetagestion.com|.*zetakiosko.com"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"beta-pre.elperiodico.com|beta-pre.elperiodico.cat|www.sport.es|www.elperiodico.com|www.elperiodico.cat|www.elperiodicodearagon.*|www.diariocordoba.*|www.elperiodicomediterraneo.*|www.elperiodicoextremadura.*|www.castellonfire.*|www.elperiodicodelazulejo.*"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"before.unload"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":".*viajar\\.elperiodico\\.com$|.*guapisimas\\.stilo\\.es$|.*elperiodico\\.com$|.*sport\\.es$|.*woman\\.es$|.*stilo\\.es$|.*cuore\\.es$"
    },{
      "function":"_eq",
      "arg0":["macro",168],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"www.sport.es|www.elperiodico.com|www.diariocordoba.com|www.elperiodicodearagon.com|www.elperiodicoextremadura.com|www.elperiodicomediterraneo.com|www.woman.es|www.stilo.es"
    },{
      "function":"_re",
      "arg0":["macro",135],
      "arg1":"(^$|((^|,)2613943_1216($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"chartbeat-add-mab-styles"
    }],
  "rules":[
    [["if",0],["add",2,49,1]],
    [["if",1],["add",2,1]],
    [["if",0,2],["add",3]],
    [["if",1,3],["add",3]],
    [["if",4],["add",4]],
    [["if",5],["add",4]],
    [["if",6],["add",5]],
    [["if",7],["add",6]],
    [["if",4,8],["add",7]],
    [["if",3,5],["add",7]],
    [["if",3,7],["add",8]],
    [["if",0,9],["add",9]],
    [["if",1,10],["add",9,93]],
    [["if",4,9],["add",10]],
    [["if",5,9],["add",10]],
    [["if",7,9],["add",11,94]],
    [["if",4,11],["add",12]],
    [["if",5,12],["add",12]],
    [["if",0,13],["add",13]],
    [["if",1,13],["add",13]],
    [["if",7,11],["add",14]],
    [["if",4,14],["add",15]],
    [["if",5,14],["add",15]],
    [["if",0,14],["add",16]],
    [["if",1,14],["add",16]],
    [["if",7,14],["add",17]],
    [["if",4,15],["add",18]],
    [["if",5,16],["add",18]],
    [["if",0,16],["add",19]],
    [["if",1,16],["add",19]],
    [["if",7,16],["add",20]],
    [["if",17,18],["add",21]],
    [["if",1,17],["add",21]],
    [["if",18,19],["add",22]],
    [["if",20,21],["add",23,45]],
    [["if",22,23],["add",24]],
    [["if",18,24],["add",25]],
    [["if",23,25,26],["add",26]],
    [["if",23,27,28],["add",26]],
    [["if",23,29],["add",27]],
    [["if",23,30],["add",27]],
    [["if",23,31,32],["add",28]],
    [["if",21,33],["add",29]],
    [["if",23,34],["add",30]],
    [["if",35,36],["add",31,32]],
    [["if",37,38],["add",33]],
    [["if",15,37,39],["add",34]],
    [["if",9,37,40],["add",35]],
    [["if",14,37,41],["add",36]],
    [["if",3,37,42],["add",37]],
    [["if",12,37,43],["add",38]],
    [["if",21,44],["add",39]],
    [["if",18,45],["add",40]],
    [["if",1,45],["add",40]],
    [["if",23,46],["add",41]],
    [["if",49],["unless",47,48],["add",42]],
    [["if",23,50],["add",43]],
    [["if",51],["add",44]],
    [["if",21,52],["add",45]],
    [["if",21,53],["add",45]],
    [["if",0,9,54],["add",46]],
    [["if",55],["add",47]],
    [["if",18,56],["add",48]],
    [["if",23,57,58],["add",50]],
    [["if",21,59],["add",51]],
    [["if",23,25,60],["add",52]],
    [["if",23,61],["add",53]],
    [["if",18],["add",54,80,55,56,57,58,59,60,61,68,69,72,76,77,78,79]],
    [["if",21],["add",62,63,64,65,66,67,70,81,82,87,97,83,84]],
    [["if",18,62,63],["add",71]],
    [["if",64,65],["add",73]],
    [["if",66,67,68,69],["add",74]],
    [["if",18,70],["add",75]],
    [["if",21],["unless",72],["add",85]],
    [["if",21,73,74],["unless",75],["add",86]],
    [["if",21,76,77],["add",88]],
    [["if",18,78],["unless",79],["add",89]],
    [["if",21,80],["add",90,91]],
    [["if",0,81],["add",92]],
    [["if",18,82],["unless",83],["add",95,0]],
    [["if",1,84],["unless",83],["add",95,102]],
    [["if",21,85],["add",96,101]],
    [["if",86],["add",98]],
    [["if",21,88],["add",99]],
    [["if",49,89],["add",100]],
    [["if",64,90,91],["add",103]],
    [["if",92],["add",104]],
    [["if",18,71],["block",80,82,87]],
    [["if",71,87],["block",98]]]
},
"runtime":[[50,"__cvt_2613943_1024",[46,"a"],[52,"b",["require","createQueue"]],[52,"c",["require","callInWindow"]],[52,"d",["require","aliasInWindow"]],[52,"e",["require","copyFromWindow"]],[52,"f",["require","setInWindow"]],[52,"g",["require","injectScript"]],[52,"h",["require","makeTableMap"]],[52,"i",["require","makeNumber"]],[52,"j",["require","getType"]],[52,"k",["require","copyFromDataLayer"]],[52,"l",["require","Math"]],[52,"m",["require","logToConsole"]],[52,"n",[30,["e","_fbq_gtm_ids"],[7]]],[52,"o",[17,[15,"a"],"pixelId"]],[52,"p",[7,"AddPaymentInfo","AddToCart","AddToWishlist","CompleteRegistration","Contact","CustomizeProduct","Donate","FindLocation","InitiateCheckout","Lead","PageView","Purchase","Schedule","Search","StartTrial","SubmitApplication","Subscribe","ViewContent"]],[52,"q",["k","ecommerce",1]],[52,"r",[51,"",[7,"bg"],["m",[15,"bg"]],[2,[15,"a"],"gtmOnFailure",[7]]]],[52,"s",[51,"",[7,"bg","bh"],[55,"bi",[15,"bh"],[46,[22,[2,[15,"bh"],"hasOwnProperty",[7,[15,"bi"]]],[46,[43,[15,"bg"],[15,"bi"],[16,[15,"bh"],[15,"bi"]]]]]]],[36,[15,"bg"]]]],[52,"t",[51,"",[7,"bg"],[36,[8,"id",[17,[15,"bg"],"id"],"quantity",[17,[15,"bg"],"quantity"]]]]],[41,"u","v","w"],[22,[17,[15,"a"],"enhancedEcommerce"],[46,[22,[28,[15,"q"]],[46,[36,["r","Facebook Pixel: No valid \"ecommerce\" object found in dataLayer"]]]],[22,[17,[15,"q"],"detail"],[46,[3,"u","ViewContent"],[3,"v","detail"]],[46,[22,[17,[15,"q"],"add"],[46,[3,"u","AddToCart"],[3,"v","add"]],[46,[22,[17,[15,"q"],"checkout"],[46,[3,"u","InitiateCheckout"],[3,"v","checkout"]],[46,[22,[17,[15,"q"],"purchase"],[46,[3,"u","Purchase"],[3,"v","purchase"]],[46,[36,["r","Facebook Pixel: Most recently pushed \"ecommerce\" object must be one of types \"detail\", \"add\", \"checkout\" or \"purchase\"."]]]]]]]]]],[22,[30,[28,[17,[16,[15,"q"],[15,"v"]],"products"]],[21,["j",[17,[16,[15,"q"],[15,"v"]],"products"]],"array"]],[46,[36,["r","Facebook pixel: Most recently pushed \"ecommerce\" object did not have a valid \"products\" array."]]]],[3,"w",[8,"content_type","product","contents",[2,[17,[16,[15,"q"],[15,"v"]],"products"],"map",[7,[15,"t"]]],"value",[2,[17,[16,[15,"q"],[15,"v"]],"products"],"reduce",[7,[51,"",[7,"bg","bh"],[52,"bi",[10,[2,[15,"l"],"round",[7,[26,[26,["i",[30,[17,[15,"bh"],"price"],0]],[30,[17,[15,"bh"],"quantity"],1]],100]]],100]],[36,[0,[15,"bg"],[15,"bi"]]]],0]],"currency",[30,[17,[15,"q"],"currencyCode"],"USD"]]],[22,[18,[2,[7,"InitiateCheckout","Purchase"],"indexOf",[7,[15,"u"]]],[27,1]],[46,[43,[15,"w"],"num_items",[2,[17,[16,[15,"q"],[15,"v"]],"products"],"reduce",[7,[51,"",[7,"bg","bh"],[36,[0,[15,"bg"],["i",[30,[17,[15,"bh"],"quantity"],1]]]]],0]]]]]]],[52,"x",[39,[1,[17,[15,"a"],"advancedMatchingList"],[17,[17,[15,"a"],"advancedMatchingList"],"length"]],["h",[17,[15,"a"],"advancedMatchingList"],"name","value"],[8]]],[52,"y",[39,[1,[17,[15,"a"],"objectPropertyList"],[17,[17,[15,"a"],"objectPropertyList"],"length"]],["h",[17,[15,"a"],"objectPropertyList"],"name","value"],[8]]],[52,"z",[39,[20,["j",[17,[15,"a"],"objectPropertiesFromVariable"]],"object"],[17,[15,"a"],"objectPropertiesFromVariable"],[8]]],[52,"ba",["s",[15,"z"],[15,"y"]]],[52,"bb",["s",[30,[15,"w"],[8]],[15,"ba"]]],[3,"u",[30,[15,"u"],[39,[20,[17,[15,"a"],"eventName"],"custom"],[17,[15,"a"],"customEventName"],[39,[20,[17,[15,"a"],"eventName"],"variable"],[17,[15,"a"],"variableEventName"],[17,[15,"a"],"standardEventName"]]]]],[52,"bc",[39,[20,[2,[15,"p"],"indexOf",[7,[15,"u"]]],[27,1]],"trackSingleCustom","trackSingle"]],[52,"bd",[39,[20,[17,[15,"a"],"consent"],false],"revoke","grant"]],[52,"be",[51,"",[7],[41,"bg"],[3,"bg",["e","fbq"]],[22,[15,"bg"],[46,[36,[15,"bg"]]]],["f","fbq",[51,"",[7],[52,"bh",["e","fbq.callMethod.apply"]],[22,[15,"bh"],[46,["c","fbq.callMethod.apply",[45],[15,"arguments"]]],[46,["c","fbq.queue.push",[15,"arguments"]]]]]],["d","_fbq","fbq"],["b","fbq.queue"],[36,["e","fbq"]]]],[52,"bf",["be"]],["bf","consent",[15,"bd"]],[22,[17,[15,"a"],"dpoLDU"],[46,["bf","dataProcessingOptions",[7,"LDU"],["i",[17,[15,"a"],"dpoCountry"]],["i",[17,[15,"a"],"dpoState"]]]]],[2,[2,[15,"o"],"split",[7,","]],"forEach",[7,[51,"",[7,"bg"],[22,[20,[2,[15,"n"],"indexOf",[7,[15,"bg"]]],[27,1]],[46,[22,[17,[15,"a"],"disableAutoConfig"],[46,["bf","set","autoConfig",false,[15,"bg"]]]],[22,[17,[15,"a"],"disablePushState"],[46,["f","fbq.disablePushState",true]]],["bf","init",[15,"bg"],[15,"x"]],["bf","set","agent","tmSimo-GTM-WebTemplate",[15,"bg"]],[2,[15,"n"],"push",[7,[15,"bg"]]],["f","_fbq_gtm_ids",[15,"n"],true]]],[22,[17,[15,"a"],"eventId"],[46,["bf",[15,"bc"],[15,"bg"],[15,"u"],[15,"bb"],[8,"eventID",[17,[15,"a"],"eventId"]]]],[46,["bf",[15,"bc"],[15,"bg"],[15,"u"],[15,"bb"]]]]]]],["g","https://connect.facebook.net/en_US/fbevents.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"fbPixel"]],[50,"__cvt_2613943_1200",[46,"a"],[52,"b",["require","logToConsole"]],[52,"c",["require","queryPermission"]],[52,"d",["require","injectScript"]],[52,"e",["require","encodeUriComponent"]],[52,"f",["require","setInWindow"]],[52,"g",["require","createQueue"]],[52,"h",["g","dataLayer"]],[52,"i",[8,"uid",[17,[15,"a"],"uid"],"domain",[17,[15,"a"],"domain"],"flickerControl",[17,[15,"a"],"flickerControl"],"useCanonical",[17,[15,"a"],"useCanonical"],"useCanonicalDomain",[17,[15,"a"],"useCanonicalDomain"],"sections",[17,[15,"a"],"sections"],"authors",[17,[15,"a"],"authors"],"type",[17,[15,"a"],"type"]]],[22,[17,[15,"a"],"_acct"],[46,[53,["b","CHART_BEAT: ACCOUNT DATA"],[52,"l",["g","_cbq"]],["l",[7,"_acct",[17,[15,"a"],"_acct"]]]]]],["f","_sf_async_config",[15,"i"]],[52,"j","https://static.chartbeat.com/js/chartbeat.js"],[52,"k","https://static.chartbeat.com/js/chartbeat_mab.js"],[22,["c","inject_script",[15,"j"]],[46,["d",[15,"j"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],[15,"j"]],[22,[20,[17,[15,"a"],"flickerControl"],"true"],[46,["h",[8,"event","chartbeat-add-mab-styles"]],["d",[15,"k"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],[15,"k"]]]]],[46,["b","GTM-DEBUG :: Chartbeat \u003e\u003e Current script src is not allowed in permissions configuration"],[2,[15,"a"],"gtmOnFailure",[7]]]]],[50,"__cvt_2613943_1232",[46,"a"],[50,"k",[46],[52,"m",["h","COMSCORE"]],[2,[15,"m"],"beacon",[7,[15,"j"]]]],[52,"b",["require","logToConsole"]],[52,"c",["require","queryPermission"]],[52,"d",["require","createQueue"]],[52,"e",["require","injectScript"]],[52,"f",["require","encodeUriComponent"]],[52,"g",["require","makeInteger"]],[52,"h",["require","copyFromWindow"]],[52,"i",["d","_comscore"]],[52,"j",[8,"c1",[17,[15,"a"],"c1"],"c2",[17,[15,"a"],"c2"]]],[22,[17,[15,"a"],"name"],[46,[43,[15,"j"],"name",[17,[15,"a"],"name"]]]],[22,[17,[15,"a"],"ns_type"],[46,[43,[15,"j"],"ns_type",[17,[15,"a"],"ns_type"]]]],[22,[17,[15,"a"],"ns_site"],[46,[43,[15,"j"],"ns_site",[17,[15,"a"],"ns_site"]]]],[22,[17,[15,"a"],"pctype"],[46,[43,[15,"j"],"pctype",[17,[15,"a"],"pctype"]]]],[22,[17,[15,"a"],"class1"],[46,[43,[15,"j"],"class1",[17,[15,"a"],"class1"]]]],[22,[17,[15,"a"],"class2"],[46,[43,[15,"j"],"class2",[17,[15,"a"],"class2"]]]],[22,[17,[15,"a"],"class3"],[46,[43,[15,"j"],"class3",[17,[15,"a"],"class3"]]]],[22,[17,[15,"a"],"download"],[46,[43,[15,"j"],"download",[17,[15,"a"],"download"]]]],[22,[17,[15,"a"],"useraction"],[46,[43,[15,"j"],"useraction",[17,[15,"a"],"useraction"]]]],[22,[21,[17,[15,"a"],"cs_ucfr"],""],[46,[22,[17,[15,"a"],"cs_ucfr"],[46,[43,[15,"a"],"cs_ucfr",["g",[17,[15,"a"],"cs_ucfr"]]]]]]],[43,[15,"j"],"cs_ucfr",[17,[15,"a"],"cs_ucfr"]],[22,[17,[15,"a"],"comscorekw"],[46,[43,[15,"j"],"comscorekw",[17,[15,"a"],"comscorekw"]]]],[52,"l","https://sb.scorecardresearch.com/cs/8731705/beacon.js"],[22,["c","inject_script",[15,"l"]],[46,["e",[15,"l"],[15,"k"],[17,[15,"a"],"gtmOnFailure"],[15,"l"]]],[46,["b","GTM-DEBUG :: Comscore \u003e\u003e Current script src is not allowed in permissions configuration"],[2,[15,"a"],"gtmOnFailure",[7]]]]]]
,"permissions":{"__cvt_2613943_1024":{"access_globals":{"keys":[{"key":"fbq","read":true,"write":true,"execute":false},{"key":"_fbq_gtm","read":true,"write":true,"execute":false},{"key":"_fbq","read":false,"write":true,"execute":false},{"key":"_fbq_gtm_ids","read":true,"write":true,"execute":false},{"key":"fbq.callMethod.apply","read":true,"write":false,"execute":true},{"key":"fbq.queue.push","read":false,"write":false,"execute":true},{"key":"fbq.queue","read":true,"write":true,"execute":false},{"key":"fbq.disablePushState","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/connect.facebook.net\/en_US\/fbevents.js"]},"logging":{"environments":"debug"},"read_data_layer":{"keyPatterns":["ecommerce"]}},"__cvt_2613943_1200":{"logging":{"environments":"debug"},"inject_script":{"urls":["https:\/\/static.chartbeat.com\/js\/chartbeat.js","https:\/\/static.chartbeat.com\/js\/chartbeat_mab.js"]},"access_globals":{"keys":[{"key":"_sf_async_config","read":true,"write":true,"execute":true},{"key":"_cbq","read":true,"write":true,"execute":true},{"key":"dataLayer","read":true,"write":true,"execute":true}]}},"__cvt_2613943_1232":{"logging":{"environments":"debug"},"inject_script":{"urls":["https:\/\/sb.scorecardresearch.com\/cs\/8731705\/beacon.js"]},"access_globals":{"keys":[{"key":"_comscore","read":true,"write":true,"execute":true},{"key":"dataLayer","read":true,"write":true,"execute":true},{"key":"COMSCORE","read":true,"write":true,"execute":true}]}}}
,"sandboxed_scripts":["__cvt_2613943_1024","__cvt_2613943_1200","__cvt_2613943_1232"]


};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ba,da=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},fa=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:da(a)}},ha="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ia;
if("function"==typeof Object.setPrototypeOf)ia=Object.setPrototypeOf;else{var ja;a:{var ka={Fg:!0},la={};try{la.__proto__=ka;ja=la.Fg;break a}catch(a){}ja=!1}ia=ja?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ma=ia,na=function(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(ma)ma(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.wi=b.prototype},pa=this||self,sa=function(a){if(a&&a!=pa)return qa(a.document);null===ra&&(ra=qa(pa.document));return ra},ua=/^[\w+/_-]+[=]{0,2}$/,ra=null,qa=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&ua.test(c))return c}return""},ya=function(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"},za=function(a,b){function c(){}c.prototype=b.prototype;a.wi=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Pi=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}},Aa=function(a){return a};var Ba=function(a,b){this.a=a;this.i=b};var Ca=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},Da=function(){this.B={};this.m=!1;this.F={}};Da.prototype.get=function(a){return this.B["dust."+a]};Da.prototype.set=function(a,b){this.m||(a="dust."+a,this.F.hasOwnProperty(a)||(this.B[a]=b))};Da.prototype.has=function(a){return this.B.hasOwnProperty("dust."+a)};var Ea=function(a){var b=[],c;for(c in a.B)a.B.hasOwnProperty(c)&&b.push(c.substr(5));return b};var k=function(a){this.i=new Da;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(Ca(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};ba=k.prototype;ba.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
ba.set=function(a,b){if("length"===a){if(!Ca(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else Ca(a)?this.a[Number(a)]=b:this.i.set(a,b)};ba.get=function(a){return"length"===a?this.length():Ca(a)?this.a[Number(a)]:this.i.get(a)};ba.length=function(){return this.a.length};ba.Dc=function(){for(var a=Ea(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new k(a)};
var Fa=function(a,b){if(Ca(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.F.hasOwnProperty(d)||delete c.B[d]}};ba=k.prototype;ba.pop=function(){return this.a.pop()};ba.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};ba.shift=function(){return this.a.shift()};ba.splice=function(a,b,c){return new k(this.a.splice.apply(this.a,arguments))};ba.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
ba.has=function(a){return Ca(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var Ga=function(){function a(f,g){if(b[f]){if(b[f].vc+g>b[f].max)throw Error("Quota exceeded");b[f].vc+=g}}var b={},c=void 0,d=void 0,e={Vh:function(f){c=f},ff:function(){c&&a(c,1)},Xh:function(f){d=f},Na:function(f){d&&a(d,f)},si:function(f,g){b[f]=b[f]||{vc:0};b[f].max=g},vh:function(f){return b[f]&&b[f].vc||0},reset:function(){b={}},dh:a};e.onFnConsume=e.Vh;e.consumeFn=e.ff;e.onStorageConsume=e.Xh;e.consumeStorage=e.Na;e.setMax=e.si;e.getConsumed=e.vh;e.reset=e.reset;e.consume=e.dh;return e};var Ha=function(a,b){this.F=a;this.R=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new Da;this.a=this.B=void 0};Ha.prototype.add=function(a,b){Ia(this,a,b,!1)};var Ia=function(a,b,c,d){if(!a.i.m)if(a.F.Na(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.F["dust."+b]=!0}else a.i.set(b,c)};
Ha.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.Na(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};Ha.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};Ha.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Ja=function(a){var b=new Ha(a.F,a);a.B&&(b.B=a.B);b.R=a.R;b.a=a.a;return b};var Ka=function(){},La=function(a){return"function"==typeof a},m=function(a){return"string"==typeof a},Ma=function(a){return"number"==typeof a&&!isNaN(a)},Na=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Oa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Pa=function(a,b){if(a&&Na(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Qa=function(a,b){if(!Ma(a)||
!Ma(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ta=function(a,b){for(var c=new Ra,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ua=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Va=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Wa=function(a){return Math.round(Number(a))||0},Xa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Ya=function(a){var b=[];if(Na(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Za=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},$a=function(){return(new Date).getTime()},Ra=function(){this.prefix="gtm.";this.values={}};Ra.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ra.prototype.get=function(a){return this.values[this.prefix+a]};
var ab=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},db=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},eb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},gb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},mb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},nb=function(a,b){var c=B;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=Oa(b,d))return}return d},
ob=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},pb=function(a){var b=[];Ua(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var rb=function(a,b){Da.call(this);this.a=a;this.R=b};na(rb,Da);rb.prototype.toString=function(){return this.a};rb.prototype.Dc=function(){return new k(Ea(this))};rb.prototype.i=function(a,b){a.F.ff();return this.R.apply(tb(this,a),Array.prototype.slice.call(arguments,1))};var tb=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return Na(d)?ub(e,d):d};c.prototype.F=function(d){return vb(this.m,d)};c.prototype.B=function(){return b.F};return new c(a,b)};
rb.prototype.Qa=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var vb=function(a,b){for(var c,d=0;d<b.length&&!(c=ub(a,b[d]),c instanceof Ba);d++);return c},ub=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof rb))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.B;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var wb=function(){Da.call(this)};na(wb,Da);wb.prototype.Dc=function(){return new k(Ea(this))};var xb={control:function(a,b){return new Ba(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.B().Na(a.length+f.length);return new rb(a,function(){return function(g){var h=Ja(d);void 0===h.a&&(h.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),p=0;p<l.length;p++)if(l[p]=this.a(l[p]),l[p]instanceof Ba)return l[p];for(var n=e.get("length"),q=
0;q<n;q++)q<l.length?h.add(e.get(q),l[q]):h.add(e.get(q),void 0);h.add("arguments",new k(l));var t=vb(h,f);if(t instanceof Ba)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.B();b.Na(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Na(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.B(),c=new wb,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Na(g);c.set(e,f)}return c},undefined:function(){}};var yb=function(){this.m=Ga();this.a=new Ha(this.m)},zb=function(a,b,c){var d=new rb(b,c);d.m=!0;a.a.set(b,d)};yb.prototype.Ac=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};yb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=ub(this.a,arguments[c]);return b};yb.prototype.B=function(a,b){var c=Ja(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=d=ub(c,arguments[e]);return d};var Ab=function(a){if(a instanceof Ab)return a;this.ra=a};Ab.prototype.toString=function(){return String(this.ra)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Bb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Cb=function(a){if(null==a)return String(a);var b=Bb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Db=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Eb=function(a){if(!a||"object"!=Cb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Db(a,"constructor")&&!Db(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Db(a,b)},E=function(a,b){var c=b||("array"==Cb(a)?[]:{}),d;for(d in a)if(Db(a,d)){var e=a[d];"array"==Cb(e)?("array"!=Cb(c[d])&&(c[d]=[]),c[d]=E(e,c[d])):Eb(e)?(Eb(c[d])||(c[d]={}),c[d]=E(e,c[d])):c[d]=e}return c};var Hb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var p=Ea(h),n=0;n<p.length;n++)l[p[n]]=g(h.get(p[n]))},g=function(h){var l=Oa(d,h);if(-1<l)return e[l];if(h instanceof k){var p=[];d.push(h);e.push(p);for(var n=h.Dc(),q=0;q<n.length();q++)p[n.get(q)]=g(h.get(n.get(q)));return p}if(h instanceof wb){var t={};d.push(h);e.push(t);f(h,t);return t}if(h instanceof rb){var r=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=Fb(u[v],b,!!c);var w=b?b.F:Ga(),y=new Ha(w);
b&&(y.a=b.a);return g(h.i.apply(h,[y].concat(u)))};d.push(h);e.push(r);f(h,r);return r}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Fb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var p in h)h.hasOwnProperty(p)&&l.set(p,g(h[p]))},g=function(h){var l=Oa(d,
h);if(-1<l)return e[l];if(Na(h)||Va(h)){var p=new k([]);d.push(h);e.push(p);for(var n in h)h.hasOwnProperty(n)&&p.set(n,g(h[n]));return p}if(Eb(h)){var q=new wb;d.push(h);e.push(q);f(h,q);return q}if("function"===typeof h){var t=new rb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=Hb(this.a(v[w]),b,!!c);return g((0,this.m.R)(h,h,v))});d.push(h);e.push(t);f(h,t);return t}var r=typeof h;if(null===h||"string"===r||"number"===r||"boolean"===r)return h;};return g(a)};var Ib=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Jb=function(a){if(void 0===a||Na(a)||Eb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Kb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Ib(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):Fa(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Ib(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):Fa(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Lb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Mb=new Ba("break"),Nb=new Ba("continue"),Ob=function(a,b){return this.a(a)+this.a(b)},Pb=function(a,b){return this.a(a)&&this.a(b)},Qb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Oa(Lb,b))return Fb(a[b].apply(a,Ib(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var d=a.get(b);if(d instanceof rb){var e=Ib(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=Oa(Kb.supportedMethods,b)){var f=Ib(c);
f.unshift(this.m);return Kb[b].apply(a,f)}}if(a instanceof rb||a instanceof wb){if(a.has(b)){var g=a.get(b);if(g instanceof rb){var h=Ib(c);h.unshift(this.m);return g.i.apply(g,h)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof rb?a.a:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Ib(c))}if(a instanceof Ab&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Rb=function(a,b){a=this.a(a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");
var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Ub=function(a){var b=Ja(this.m),c=vb(b,Array.prototype.slice.apply(arguments));if(c instanceof Ba)return c},Vb=function(){return Mb},Wb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof Ba)return d}},Xb=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);Ia(b,d,e,
!0)}}},Yb=function(){return Nb},Zb=function(a,b,c){var d=new k;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.add(a,this.a(f))},$b=function(a,b){return this.a(a)/this.a(b)},ac=function(a,b){a=this.a(a);b=this.a(b);var c=a instanceof Ab,d=b instanceof Ab;return c||d?c&&d?a.ra==b.ra:!1:a==b},bc=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function dc(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=vb(f,d);if(g instanceof Ba){if("break"===g.a)break;if("return"===g.a)return g}}}function ec(a,b,c){if("string"===typeof b)return dc(a,function(){return b.length},function(f){return f},c);if(b instanceof wb||b instanceof k||b instanceof rb){var d=b.Dc(),e=d.length();return dc(a,function(){return e},function(f){return d.get(f)},c)}}
var fc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return ec(function(e){d.set(a,e);return d},b,c)},gc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return ec(function(e){var f=Ja(d);Ia(f,a,e,!0);return f},b,c)},hc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return ec(function(e){var f=Ja(d);f.add(a,e);return f},b,c)},mc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return ic(function(e){d.set(a,e);return d},b,c)},nc=
function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return ic(function(e){var f=Ja(d);Ia(f,a,e,!0);return f},b,c)},oc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return ic(function(e){var f=Ja(d);f.add(a,e);return f},b,c)};
function ic(a,b,c){if("string"===typeof b)return dc(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof k)return dc(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var pc=function(a,b,c,d){function e(n,q){for(var t=0;t<f.length();t++){var r=f.get(t);q.add(r,n.get(r))}}var f=this.a(a);if(!(f instanceof k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.m;d=this.a(d);var h=Ja(g);for(e(g,h);ub(h,b);){var l=vb(h,d);if(l instanceof Ba){if("break"===l.a)break;if("return"===l.a)return l}var p=Ja(g);e(h,p);ub(p,c);h=p}},qc=function(a){a=this.a(a);var b=this.m,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},rc=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof wb||a instanceof k||a instanceof rb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:Ca(b)&&(c=a[b]);else if(a instanceof Ab)return;return c},sc=function(a,b){return this.a(a)>this.a(b)},
tc=function(a,b){return this.a(a)>=this.a(b)},uc=function(a,b){a=this.a(a);b=this.a(b);a instanceof Ab&&(a=a.ra);b instanceof Ab&&(b=b.ra);return a===b},vc=function(a,b){return!uc.call(this,a,b)},wc=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.F(d);if(e instanceof Ba)return e},xc=function(a,b){return this.a(a)<this.a(b)},yc=function(a,b){return this.a(a)<=this.a(b)},Ac=function(a,b){return this.a(a)%this.a(b)},Bc=function(a,b){return this.a(a)*this.a(b)},Cc=function(a){return-this.a(a)},
Dc=function(a){return!this.a(a)},Ec=function(a,b){return!ac.call(this,a,b)},Fc=function(){return null},Gc=function(a,b){return this.a(a)||this.a(b)},Hc=function(a,b){var c=this.a(a);this.a(b);return c},Ic=function(a){return this.a(a)},Jc=function(a){return Array.prototype.slice.apply(arguments)},Kc=function(a){return new Ba("return",this.a(a))},Lc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof rb||
a instanceof k||a instanceof wb)&&a.set(b,c);return c},Mc=function(a,b){return this.a(a)-this.a(b)},Nc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Na(d)||!Na(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===this.a(d[h]))if(f=this.a(e[h]),f instanceof Ba){var l=f.a;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=this.a(e[e.length-1]),f instanceof Ba&&("return"===f.a||"continue"===
f.a)))return f},Oc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},Pc=function(a){a=this.a(a);return a instanceof rb?"function":typeof a},Qc=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Rc=function(a,b,c,d){var e=this.a(d);if(this.a(c)){var f=this.F(e);if(f instanceof Ba){if("break"===f.a)return;if("return"===f.a)return f}}for(;this.a(a);){var g=this.F(e);if(g instanceof Ba){if("break"===g.a)break;if("return"===g.a)return g}this.a(b)}},
Sc=function(a){return~Number(this.a(a))},Tc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},Uc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},Vc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},Xc=function(a,b){return Number(this.a(a))&Number(this.a(b))},Yc=function(a,b){return Number(this.a(a))^Number(this.a(b))},Zc=function(a,b){return Number(this.a(a))|Number(this.a(b))};var ad=function(){this.a=new yb;$c(this)};ad.prototype.Ac=function(a){return bd(this.a.i(a))};
var dd=function(a,b){return bd(cd.a.B(a,b))},$c=function(a){var b=function(d,e){var f=a.a,g=String(e);xb.hasOwnProperty(d)&&zb(f,g||d,xb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){zb(a.a,String(d),e)};c(0,Ob);c(1,Pb);c(2,Qb);c(3,Rb);c(53,Ub);c(4,Vb);c(5,Wb);c(52,Xb);c(6,Yb);c(9,Wb);c(50,Zb);c(10,$b);c(12,ac);c(13,bc);c(47,fc);c(54,gc);c(55,hc);c(63,pc);c(64,mc);c(65,nc);c(66,oc);c(15,qc);c(16,rc);c(17,rc);c(18,sc);c(19,tc);c(20,uc);c(21,vc);c(22,wc);
c(23,xc);c(24,yc);c(25,Ac);c(26,Bc);c(27,Cc);c(28,Dc);c(29,Ec);c(45,Fc);c(30,Gc);c(32,Hc);c(33,Hc);c(34,Ic);c(35,Ic);c(46,Jc);c(36,Kc);c(43,Lc);c(37,Mc);c(38,Nc);c(39,Oc);c(40,Pc);c(41,Qc);c(42,Rc);c(58,Sc);c(57,Tc);c(60,Uc);c(61,Vc);c(56,Xc);c(62,Yc);c(59,Zc)},fd=function(){var a=cd,b=ed();zb(a.a,"require",b)},gd=function(a,b){a.a.a.R=b};
function bd(a){if(a instanceof Ba||a instanceof rb||a instanceof k||a instanceof wb||a instanceof Ab||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};
var hd=[],id={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},jd=function(a){return id[a]},kd=/[\x00\x22\x26\x27\x3c\x3e]/g;var od=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,pd={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},qd=function(a){return pd[a]};hd[7]=function(a){return String(a).replace(od,qd)};
hd[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(od,qd)+"'"}};var Bd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Cd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Dd=function(a){return Cd[a]};hd[16]=function(a){return a};var Fd;
var Gd=[],Hd=[],Id=[],Jd=[],Kd=[],Ld={},Md,Nd,Od,Pd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Qd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Ld[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(d&&b&&b.cf&&b.cf(a[f]),e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):Fd(c,e,b)},Sd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&
(d[e]=Rd(a[e],b,c));return d},Td=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Ld[b];return c?c.priorityOverride||0:0},Rd=function(a,b,c){if(Na(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Rd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=Gd[f];if(!g||b.Ad(g))return;c[f]=!0;try{var h=Sd(g,b,c);h.vtp_gtmEventId=b.id;d=Qd(h,b);Od&&(d=Od.fh(d,h))}catch(y){b.tf&&b.tf(y,Number(f)),
d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Rd(a[l],b,c)]=Rd(a[l+1],b,c);return d;case "template":d=[];for(var p=!1,n=1;n<a.length;n++){var q=Rd(a[n],b,c);Nd&&(p=p||q===Nd.jc);d.push(q)}return Nd&&p?Nd.ih(d):d.join("");case "escape":d=Rd(a[1],b,c);if(Nd&&Na(a[1])&&"macro"===a[1][0]&&Nd.Hh(a))return Nd.bi(d);d=String(d);for(var t=2;t<a.length;t++)hd[a[t]]&&(d=hd[a[t]](d));return d;case "tag":var r=a[1];if(!Jd[r])throw Error("Unable to resolve tag reference "+r+".");return d=
{kf:a[2],index:r};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Ud(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Ud=function(a,b,c){try{return Md(Sd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Vd=function(){var a=function(b){return{toString:function(){return b}}};return{Kf:a("consent"),$d:a("convert_case_to"),ae:a("convert_false_to"),be:a("convert_null_to"),ce:a("convert_true_to"),de:a("convert_undefined_to"),Gi:a("debug_mode_metadata"),Ma:a("function"),wg:a("instance_name"),xg:a("live_only"),yg:a("malware_disabled"),zg:a("metadata"),Ji:a("original_activity_id"),Ki:a("original_vendor_template_id"),Cg:a("once_per_event"),Te:a("once_per_load"),Xe:a("setup_tags"),Ye:a("tag_id"),Ze:a("teardown_tags")}}();var Wd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};na(Wd,Error);function Xd(a,b){if(Na(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Xd(a[c],b[c])}};var Yd=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};na(Yd,Error);var Zd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var ae=function(){return function(a,b){a instanceof Yd||(a=new Yd(a,$d));b&&a.a.push(b);throw a;}};function $d(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ma(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var be=null,ee=function(a){function b(q){for(var t=0;t<q.length;t++)d[q[t]]=!0}var c=[],d=[];be=ce(a);for(var e=0;e<Hd.length;e++){var f=Hd[e],g=de(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var p=[],n=0;n<Jd.length;n++)c[n]&&!d[n]&&(p[n]=!0);return p},de=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=be(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=be(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},ce=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Ud(Id[c],a));return b[c]}};var fe={fh:function(a,b){b[Vd.$d]&&"string"===typeof a&&(a=1==b[Vd.$d]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Vd.be)&&null===a&&(a=b[Vd.be]);b.hasOwnProperty(Vd.de)&&void 0===a&&(a=b[Vd.de]);b.hasOwnProperty(Vd.ce)&&!0===a&&(a=b[Vd.ce]);b.hasOwnProperty(Vd.ae)&&!1===a&&(a=b[Vd.ae]);return a}};var ge=function(){this.a={}};function he(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Wd(c,d,g);}}function ie(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));he(e,b,d,g);he(f,b,d,g)}}}};var me=function(a){var b=je.C,c=this;this.i=new ge;this.a={};var d={},e=ie(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ua(a,function(f,g){var h={};Ua(g,function(l,p){var n=ke(l,p);h[l]=n.assert;d[l]||(d[l]=n.L)});c.a[f]=function(l,p){var n=h[l];if(!n)throw le(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);n.apply(void 0,q);e.apply(void 0,q)}})},oe=function(a){return ne.a[a]||
function(){}};function ke(a,b){var c=Pd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=le;try{return Qd(c)}catch(d){return{assert:function(e){throw new Wd(e,{},"Permission "+e+" is unknown.");},L:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function le(a,b,c){return new Wd(a,b,c)};var pe=!1;var qe={};qe.Bi=Xa('');qe.oh=Xa('');var re=pe,se=qe.oh,te=qe.Bi;var He=/^[a-z$_][\w$]*$/i,Ie=/^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i;
var Je=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Ke=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Je(b,"/*")&&(b=b.slice(0,-2));Je(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Le=/^[a-z0-9-]+$/i,Me=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Oe=function(a,b){var c;if(!(c=!Ne(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Le.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,p=b[g];if(!Me.exec(p))throw Error("Invalid Wildcard");var n=p.slice(8),q=n.slice(0,n.indexOf("/")),t;var r=l.hostname,u=q;if(0!==u.indexOf("*."))t=r.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=r.toLowerCase().indexOf(u.toLowerCase());t=-1===v?!1:r.length===u.length?
!0:r.length!==u.length+v?!1:"."===r[v-1]}if(t){var w=n.slice(n.indexOf("/"));h=Ke(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},Ne=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var Re=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Se={Fn:"function",DustMap:"Object",List:"Array"},G=function(a,b,c){for(var d=0;d<b.length;d++){var e=Re.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],p=typeof l;if(null===l||"undefined"===p){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var n=typeof l;l instanceof rb?n="Fn":l instanceof k?n="List":l instanceof wb?n="DustMap":
l instanceof Ab&&(n="OpaqueValue");if(n!=h)throw Error("Error in "+a+". Argument "+f+" has type "+n+", which does not match required type "+(Se[h]||h)+".");}}};function Te(a){return""+a}
function Ue(a,b){var c=[];return c};var Ve=function(a,b){var c=new rb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},We=function(a,b){var c=new wb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];La(e)?c.set(d,Ve(a+"_"+d,e)):(Ma(e)||m(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var Xe=function(a,b){G(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new wb;return d=We("AssertApiSubject",c)};var Ye=function(a,b){G(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new wb;return d=We("AssertThatSubject",c)};function Ze(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(Hb(arguments[d],c));return Fb(a.apply(null,b))}}var af=function(){for(var a=Math,b=$e,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Ze(a[e].bind(a)))}return c};var bf=function(a){var b;return b};var cf=function(a){var b;return b};var df=function(a){G(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var ef=function(a){G(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var ff=function(a){G(this.i.a,["message:?string"],arguments);};var gf=function(a,b){G(this.i.a,["min:!number","max:!number"],arguments);return Qa(a,b)};var hf=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.Rg.apply(null,Array.prototype.slice.call(arguments,1))};var jf=function(){hf(this,"read_container_data");var a=new wb;a.set("containerId",'GTM-TTM3HX');a.set("version",'650');a.set("environmentName",'');a.set("debugMode",re);a.set("previewMode",te);a.set("environmentMode",se);a.m=!0;return a};var kf=function(){return(new Date).getTime()};var lf=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof rb)return"function";if(a instanceof Ab){a=a.ra;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var mf=function(a){function b(c){return function(d){try{return c(d)}catch(e){(re||te)&&a.call(this,e.message)}}}return{parse:b(function(c){return Fb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Hb(c))})}};var nf=function(a){return Wa(Hb(a,this.m))};var of=function(a){return Number(Hb(a,this.m))};var pf=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var qf=function(a,b,c){var d=null,e=!1;G(this.i.a,["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new wb;for(var f=0;f<a.length();f++){var g=a.get(f);g instanceof wb&&g.has(b)&&g.has(c)&&(d.set(g.get(b),g.get(c)),e=!0)}return e?d:null};var $e="floor ceil round max min abs pow sqrt".split(" ");var rf=function(){var a={};return{wh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},ui:function(b,c){a[b]=c},reset:function(){a={}}}},sf=function(a,b){G(this.i.a,["apiName:!string","mock:?*"],arguments);};var tf=function(){this.a={};this.i={}};tf.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};
tf.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.i.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.a[a]=c?void 0:La(b)?Ve(a,b):We(a,b)};
var uf=function(a,b,c){if(a.i.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.a.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.i[b]=La(c)?Ve(b,c):We(b,c)};function vf(){var a={};return a};var H={Ab:"_ee",od:"_syn",Ni:"_uei",Li:"_pci",Xc:"event_callback",bc:"event_timeout",ia:"gtag.config"};H.Ia="gtag.get";H.la="purchase";H.Za="refund";H.Ha="begin_checkout";H.Xa="add_to_cart";H.Ya="remove_from_cart";H.Tf="view_cart";H.ie="add_to_wishlist";H.ya="view_item";H.he="view_promotion";H.fe="select_promotion";H.Sc="select_item";H.Yb="view_item_list";H.ee="add_payment_info";H.Sf="add_shipping_info";
H.Ba="value_key",H.Aa="value_callback";H.ja="allow_ad_personalization_signals";H.ed="restricted_data_processing";H.ob="allow_google_signals";H.ka="cookie_expires";H.ac="cookie_update";H.xb="session_duration";H.oa="user_properties";H.La="transport_url";H.N="ads_data_redaction";H.s="ad_storage";H.I="analytics_storage";H.Lf="region";H.Mf="wait_for_update";H.Ke=[H.la,H.Za,H.Ha,H.Xa,H.Ya,H.Tf,H.ie,H.ya,H.he,H.fe,H.Yb,H.Sc,H.ee,H.Sf];H.Je=[H.ja,H.ob,H.ac];H.Le=[H.ka,H.bc,H.xb];var wf={},xf=function(a,b){wf[a]=wf[a]||[];wf[a][b]=!0},yf=function(a){for(var b=[],c=wf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var I=function(a){xf("GTM",a)};function zf(a){if(Error.captureStackTrace)Error.captureStackTrace(this,zf);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}za(zf,Error);zf.prototype.name="CustomError";var Af=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");zf.call(this,d+c[e])};za(Af,zf);Af.prototype.name="AssertionError";var Bf=function(a,b){throw new Af("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var Cf=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Df=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Ef,Ff=function(){if(void 0===Ef){var a=null,b=pa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Aa,createScript:Aa,createScriptURL:Aa})}catch(c){pa.console&&pa.console.error(c.message)}Ef=a}else Ef=a}return Ef};var Hf=function(a,b){this.a=b===Gf?a:""};Hf.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var Gf={};var If=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Jf;a:{var Kf=pa.navigator;if(Kf){var Lf=Kf.userAgent;if(Lf){Jf=Lf;break a}}Jf=""}var Mf=function(a){return-1!=Jf.indexOf(a)};var Of=function(a,b,c){this.a=c===Nf?a:""};Of.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var Pf=function(a){if(a instanceof Of&&a.constructor===Of)return a.a;Bf("expected object of type SafeHtml, got '"+a+"' of type "+ya(a));return"type_error:SafeHtml"},Nf={},Rf=new Of(pa.trustedTypes&&pa.trustedTypes.emptyHTML||"",0,Nf);var Sf={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},Tf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;var c=a.firstChild.firstChild;a.innerHTML=Pf(Rf);return!c.parentElement}),Uf=function(a,b){if(a.tagName&&Sf[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+
a.tagName+".");if(Tf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Pf(b)};var Vf=function(a){var b=Ff(),c=b?b.createHTML(a):a;return new Of(c,null,Nf)};var B=window,L=document,Wf=navigator,Xf=L.currentScript&&L.currentScript.src,Yf=function(a,b){var c=B[a];B[a]=void 0===c?b:c;return B[a]},Zf=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},$f=function(a,b,c){var d=L.createElement("script");d.type="text/javascript";d.async=!0;var e,f=Ff(),g=f?f.createScriptURL(a):a;e=new Hf(g,Gf);var h;a:{try{var l=d&&d.ownerDocument,p=l&&(l.defaultView||l.parentWindow);
p=p||pa;if(p.Element&&p.Location){h=p;break a}}catch(w){}h=null}if(h&&"undefined"!=typeof h.HTMLScriptElement&&(!d||!(d instanceof h.HTMLScriptElement)&&(d instanceof h.Location||d instanceof h.Element))){var n;var q=typeof d;if("object"==q&&null!=d||"function"==q)try{n=d.constructor.displayName||d.constructor.name||Object.prototype.toString.call(d)}catch(w){n="<object could not be stringified>"}else n=void 0===d?"undefined":null===d?"null":typeof d;Bf("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
"HTMLScriptElement",n)}var t;e instanceof Hf&&e.constructor===Hf?t=e.a:(Bf("expected object of type TrustedResourceUrl, got '"+e+"' of type "+ya(e)),t="type_error:TrustedResourceUrl");d.src=t;var r=sa(d.ownerDocument&&d.ownerDocument.defaultView);r&&d.setAttribute("nonce",r);Zf(d,b);c&&(d.onerror=c);var u=sa();u&&d.setAttribute("nonce",u);var v=L.getElementsByTagName("script")[0]||L.body||L.head;v.parentNode.insertBefore(d,v);return d},ag=function(){if(Xf){var a=Xf.toLowerCase();if(0===a.indexOf("https://"))return 2;
if(0===a.indexOf("http://"))return 3}return 1},bg=function(a,b){var c=L.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=L.body&&L.body.lastChild||L.body||L.head;d.parentNode.insertBefore(c,d);Zf(c,b);void 0!==a&&(c.src=a);return c},cg=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},dg=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):
a.attachEvent&&a.attachEvent("on"+b,c)},eg=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){B.setTimeout(a,0)},fg=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},gg=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},hg=function(a){var b=L.createElement("div");Uf(b,Vf("A<div>"+a+"</div>"));
b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},ig=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},jg=function(a){Wf.sendBeacon&&Wf.sendBeacon(a)||cg(a)},kg=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var lg={},mg=function(a){return void 0==lg[a]?!1:lg[a]};var ng=[];function og(){var a=Yf("google_tag_data",{});a.ics||(a.ics={entries:{},set:pg,update:qg,addListener:rg,notifyListeners:sg,active:!1});return a.ics}
function pg(a,b,c,d,e,f){var g=og();g.active=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},p=l.region,n=c&&m(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(n===e||(n===d?p!==e:!n&&!p)){var q=!!(f&&0<f&&void 0===l.update),t={region:n,initial:"granted"===b,update:l.update,quiet:q};h[a]=t;q&&B.setTimeout(function(){h[a]===t&&t.quiet&&(t.quiet=!1,tg(a),sg(),xf("TAGGING",2))},f)}}}
function qg(a,b){var c=og();c.active=!0;if(void 0!=b){var d=ug(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=ug(a);f.quiet?(f.quiet=!1,tg(a)):g!==d&&tg(a)}}function rg(a,b){ng.push({ef:a,rh:b})}function tg(a){for(var b=0;b<ng.length;++b){var c=ng[b];Na(c.ef)&&-1!==c.ef.indexOf(a)&&(c.xf=!0)}}function sg(a){for(var b=0;b<ng.length;++b){var c=ng[b];if(c.xf){c.xf=!1;try{c.rh({df:a})}catch(d){}}}}
var ug=function(a){var b=og().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},vg=function(a){return!(og().entries[a]||{}).quiet},wg=function(){return mg("gtag_cs_api")?og().active:!1},xg=function(a,b){og().addListener(a,b)},yg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!vg(b[e]))return!0;return!1}if(c()){var d=!1;xg(b,function(e){d||c()||(d=!0,a(e))})}else a({})},zg=function(a,b){if(!1===ug(b)){var c=!1;xg([b],function(d){!c&&ug(b)&&(a(d),c=!0)})}};var Ag=[H.s,H.I],Bg=function(a){var b=a[H.Lf];b&&I(40);var c=a[H.Mf];c&&I(41);for(var d=Na(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<Ag.length;f++){var g=Ag[f],h=a[Ag[f]],l=d[e];og().set(g,h,l,"ES","ES-CT",c)}},Cg=function(a,b){for(var c=0;c<Ag.length;c++){var d=Ag[c],e=a[Ag[c]];og().update(d,e)}og().notifyListeners(b)},Dg=function(a){var b=ug(a);return void 0!=b?b:!0},Eg=function(){for(var a=[],b=0;b<Ag.length;b++){var c=ug(Ag[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},Fg=function(a,b){yg(a,b)};var Hg=function(a){return Gg?L.querySelectorAll(a):null},Ig=function(a,b){if(!Gg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!L.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Jg=!1;if(L.querySelectorAll)try{var Kg=L.querySelectorAll(":root");Kg&&1==Kg.length&&Kg[0]==L.documentElement&&(Jg=!0)}catch(a){}var Gg=Jg;var Lg=function(a){if(L.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!B.getComputedStyle)return!0;var c=B.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=B.getComputedStyle(d,
null))}return!1};
var Mg=function(){var a=L.body,b=L.documentElement||a&&a.parentElement,c,d;if(L.compatMode&&"BackCompat"!==L.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};I(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Ng=function(a){var b=Mg(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var Og=[],Pg=!(!B.IntersectionObserver||!B.IntersectionObserverEntry),Qg=function(a,b,c){for(var d=new B.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<Og.length;f++)if(!Og[f])return Og[f]=d,f;return Og.push(d)-1},Rg=function(a,b,c){function d(h,l){var p={top:0,bottom:0,right:0,left:0,width:0,height:0},n={boundingClientRect:h.getBoundingClientRect(),
intersectionRatio:l,intersectionRect:p,isIntersecting:0<l,rootBounds:p,target:h,time:$a()};N(function(){return a(n)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(h,l){return h-l});return function(){for(var h=0;h<b.length;h++){var l=Ng(b[h]);if(l>e[h])for(;f[h]<c.length-1&&l>=c[f[h]+1];)d(b[h],l),f[h]++;else if(l<e[h])for(;0<=f[h]&&l<=c[f[h]];)d(b[h],l),f[h]--;e[h]=l}}},Sg=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Pg){var e=!1;N(function(){e||
Rg(a,b,c)()});return Qg(function(f){e=!0;for(var g={jb:0};g.jb<f.length;g={jb:g.jb},g.jb++)N(function(h){return function(){return a(f[h.jb])}}(g))},b,c)}return B.setInterval(Rg(a,b,c),1E3)},Tg=function(a){Pg?0<=a&&a<Og.length&&Og[a]&&(Og[a].disconnect(),Og[a]=void 0):B.clearInterval(a)};var Ug=/:[0-9]+$/,Vg=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Yg=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Wg(a.protocol)||Wg(B.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
B.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||B.location.hostname).replace(Ug,"").toLowerCase());return Xg(a,b,c,d,e)},Xg=function(a,b,c,d,e){var f,g=Wg(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Zg(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Ug,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||xf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Oa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Vg(f,e,!1,void 0));break;case "extension":var p=a.pathname.split(".");f=1<p.length?p[p.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Wg=function(a){return a?a.replace(":",
"").toLowerCase():""},Zg=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},$g=function(a){var b=L.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||xf("TAGGING",1),c="/"+c);var d=b.hostname.replace(Ug,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},ah=function(a){function b(p){var n=p.split("=")[0];return 0>d.indexOf(n)?p:n+"=0"}function c(p){return p.split("&").map(b).filter(function(n){return void 0!=
n}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=$g(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var bh=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),ch=["SCRIPT","IMG","SVG","PATH","BR"],dh=["BR"];function eh(a){var b;if(a===L.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=eh(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
function fh(){var a;var b=[],c=L.body;if(c){for(var d=c.querySelectorAll("*"),e=0;e<d.length&&1E4>e;e++){var f=d[e];if(!(0<=ch.indexOf(f.tagName.toUpperCase()))){for(var g=!1,h=0;h<f.childElementCount&&1E4>h;h++)if(!(0<=dh.indexOf(f.children[h].tagName.toUpperCase()))){g=!0;break}g||b.push(f)}}a={elements:b,status:1E4<d.length?"2":"1"}}else a={elements:b,status:"4"};for(var l=a,p=l.elements,n=[],q=0;q<p.length;q++){var t=p[q],r=t.textContent;t.value&&(r=t.value);if(r){var u=r.match(bh);if(u){var v=
u[0],w;if(B.location){var y=Xg(B.location,"host",!0);w=0<=v.toLowerCase().indexOf(y)}else w=!1;w||n.push({element:t,Wd:v})}}}for(var x=[],z=10<n.length?"3":l.status,A=0;A<n.length&&10>A;A++){var C=n[A].element;x.push({Wd:n[A].Wd,querySelector:eh(C),tagName:C.tagName,isVisible:!Lg(C),type:1})}return{elements:x,status:z}}var je={},O=null,th=Math.random();je.C="GTM-TTM3HX";je.oc="bu0";je.Ii="";var uh={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},vh={__paused:!0,__tg:!0},wh;for(wh in uh)uh.hasOwnProperty(wh)&&(vh[wh]=!0);var xh="www.googletagmanager.com/gtm.js";
var yh=xh,zh=Xa(""),Ah=null,Bh=null,Ch="//www.googletagmanager.com/a?id="+je.C+"&cv=650",Dh={},Eh={},Fh=function(){var a=O.sequence||1;O.sequence=a+1;return a};var Gh={},Hh=new Ra,Ih={},Jh={},Mh={name:"dataLayer",set:function(a,b){E(ob(a,b),Ih);Kh()},get:function(a){return Lh(a,2)},reset:function(){Hh=new Ra;Ih={};Kh()}},Lh=function(a,b){return 2!=b?Hh.get(a):Nh(a)},Nh=function(a,b){var c=a.split(".");b=b||[];for(var d=Ih,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Oa(b,d))return}return d},Oh=function(a,b){Jh.hasOwnProperty(a)||(Hh.set(a,b),E(ob(a,b),Ih),Kh())},Kh=function(a){Ua(Jh,function(b,c){Hh.set(b,c);E(ob(b,
void 0),Ih);E(ob(b,c),Ih);a&&delete Jh[b]})},Ph=function(a,b,c){Gh[a]=Gh[a]||{};var d=1!==c?Nh(b):Hh.get(b);"array"===Cb(d)||"object"===Cb(d)?Gh[a][b]=E(d):Gh[a][b]=d},Qh=function(a,b){if(Gh[a])return Gh[a][b]},Rh=function(a,b){Gh[a]&&delete Gh[a][b]};var Uh={},Vh=function(a,b){if(B._gtmexpgrp&&B._gtmexpgrp.hasOwnProperty(a))return B._gtmexpgrp[a];void 0===Uh[a]&&(Uh[a]=Math.floor(Math.random()*b));return Uh[a]};function Wh(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Yh=function(a,b,c,d){return Xh(d)?Wh(a,String(b||document.cookie),c):[]},ai=function(a,b,c,d,e){if(Xh(e)){var f=Zh(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=$h(f,function(g){return g.yc},b);if(1===f.length)return f[0].id;f=$h(f,function(g){return g.Ob},c);return f[0]?f[0].id:void 0}}};function bi(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Yh(b,f,!1,d).indexOf(c)}
var fi=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!Xh(c.wa))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=ci(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.Sh);g=e(g,"samesite",
c.li);c.oi&&(g=f(g,"secure"));var p=c.domain;if("auto"===p){for(var n=di(),q=void 0,t=!1,r=0;r<n.length;++r){var u="none"!==n[r]?n[r]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(w){q=w;continue}t=!0;if(!ei(u,c.path)&&bi(v,a,b,c.wa))return 0}if(q&&!t)throw q;return 1}p&&"none"!==p&&(g=e(g,"domain",p));g=f(g,c.flags);d&&d(a,h);return ei(p,c.path)?1:bi(g,a,b,c.wa)?0:1},gi=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return fi(a,b,c)};
function $h(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function Zh(a,b,c){for(var d=[],e=Yh(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),yc:1*l[0]||1,Ob:1*l[1]||1}))}}return d}
var ci=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},hi=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,ii=/(^|\.)doubleclick\.net$/i,ei=function(a,b){return ii.test(document.location.hostname)||"/"===b&&hi.test(a)},di=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;ii.test(e)||hi.test(e)||a.push("none");
return a},Xh=function(a){if(!mg("gtag_cs_api")||!a||!wg())return!0;if(!vg(a))return!1;var b=ug(a);return null==b?!0:!!b};var ji=function(){for(var a=Wf.userAgent+(L.cookie||"")+(L.referrer||""),b=a.length,c=B.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round($a()/1E3)].join(".")},mi=function(a,b,c,d,e){var f=ki(b);return ai(a,f,li(c),d,e)},ni=function(a,b,c,d){var e=""+ki(c),f=li(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},ki=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},li=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function oi(a,b,c){var d,e=a.Nb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||$a())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var pi=["1"],qi={},vi=function(a){var b=si(a.prefix);qi[b]||ti(b,a.path,a.domain)||(ui(b,ji(),a),ti(b,a.path,a.domain))};function ui(a,b,c){var d=ni(b,"1",c.domain,c.path),e=oi(c);e.wa="ad_storage";gi(a,d,e)}function ti(a,b,c){var d=mi(a,b,c,pi,"ad_storage");d&&(qi[a]=d);return d}function si(a){return(a||"_gcl")+"_au"};function wi(){for(var a=xi,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function yi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var xi,zi;function Ai(a){xi=xi||yi();zi=zi||wi();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,h=e?a.charCodeAt(c+2):0,l=f>>2,p=(f&3)<<4|g>>4,n=(g&15)<<2|h>>6,q=h&63;e||(q=64,d||(n=64));b.push(xi[l],xi[p],xi[n],xi[q])}return b.join("")}
function Bi(a){function b(l){for(;d<a.length;){var p=a.charAt(d++),n=zi[p];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(p))throw Error("Unknown base64 encoding at char: "+p);}return l}xi=xi||yi();zi=zi||wi();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var Ci;var Gi=function(){var a=Di,b=Ei,c=Fi(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){dg(L,"mousedown",d);dg(L,"keyup",d);dg(L,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Hi=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Fi().decorators.push(f)},Ii=function(a,b,c){for(var d=Fi().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,p=a,n=!!g.sameHost;if(l&&(n||p!==L.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(p)){h=!0;break a}}else if(0<=p.indexOf(l[q])||n&&0<=l[q].indexOf(p)){h=!0;break a}h=!1}if(h){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&eb(e,g.callback())}}return e},Fi=function(){var a=Yf("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Ji=/(.*?)\*(.*?)\*(.*)/,Ki=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Li=/^(?:www\.|m\.|amp\.)+/,Mi=/([^?#]+)(\?[^#]*)?(#.*)?/;function Ni(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Pi=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Ai(String(d))))}var e=b.join("*");return["1",Oi(e),e].join("*")},Oi=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ci)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Ci=d;for(var l=4294967295,p=0;p<c.length;p++)l=l>>>8^Ci[(l^c.charCodeAt(p))&255];return((l^-1)>>>0).toString(36)},Ri=function(){return function(a){var b=$g(B.location.href),c=b.search.replace("?",""),d=Vg(c,"_gl",!1,!0)||"";a.query=Qi(d)||{};var e=Yg(b,"fragment").match(Ni("_gl"));a.fragment=Qi(e&&e[3]||"")||{}}},Si=function(a){var b=Ri(),c=Fi();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(eb(d,e.query),a&&eb(d,e.fragment));return d},
Qi=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Ji.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var p=g[2],n=0;n<b;++n)if(p===Oi(h,n)){l=!0;break a}l=!1}if(l){for(var q={},t=h?h.split("*"):[],r=0;r<t.length;r+=2)q[t[r]]=Bi(t[r+1]);return q}}}}catch(u){}};
function Ti(a,b,c,d){function e(n){var q=n,t=Ni(a).exec(q),r=q;if(t){var u=t[2],v=t[4];r=t[1];v&&(r=r+u+v)}n=r;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+p}d=void 0===d?!1:d;var f=Mi.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",p=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function Ui(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Ii(b,1,c),e=Ii(b,2,c),f=Ii(b,3,c);if(gb(d)){var g=Pi(d);c?Vi("_gl",g,a):Wi("_gl",g,a,!1)}if(!c&&gb(e)){var h=Pi(e);Wi("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var p=l,n=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){Wi(p,n,q,void 0);break a}if("form"===q.tagName.toLowerCase()){Vi(p,n,q);break a}}"string"==typeof q&&Ti(p,n,q,void 0)}}
function Wi(a,b,c,d){if(c.href){var e=Ti(a,b,c.href,void 0===d?!1:d);If.test(e)&&(c.href=e)}}
function Vi(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=L.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var p=Ti(a,b,c.action);If.test(p)&&(c.action=p)}}}
var Di=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Ui(e,e.hostname)}}catch(g){}},Ei=function(a){try{if(a.action){var b=Yg($g(a.action),"host");Ui(a,b)}}catch(c){}},Xi=function(a,b,c,d){Gi();Hi(a,b,"fragment"===c?2:1,!!d,!1)},Yi=function(a,b){Gi();Hi(a,[Xg(B.location,"host",!0)],b,!0,!0)},Zi=function(){var a=L.location.hostname,b=Ki.exec(L.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(Li,""),l=e.replace(Li,""),p;if(!(p=h===l)){var n="."+l;p=h.substring(h.length-n.length,h.length)===n}return p},$i=function(a,b){return!1===a?!1:a||b||Zi()};var aj=/^\w+$/,bj=/^[\w-]+$/,cj=/^~?[\w-]+$/,dj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},ej=function(){if(!mg("gtag_cs_api")||!wg())return!0;var a=ug("ad_storage");return null==a?!0:!!a},fj=function(a,b){vg("ad_storage")?ej()?a():zg(a,"ad_storage"):b?xf("TAGGING",3):yg(function(){fj(a,!0)},["ad_storage"])},ij=function(a){var b=[];if(!L.cookie)return b;var c=Yh(a,L.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=gj(c[d]);e&&-1===Oa(b,e)&&b.push(e)}return hj(b)};
function jj(a){return a&&"string"==typeof a&&a.match(aj)?a:"_gcl"}
var lj=function(){var a=$g(B.location.href),b=Yg(a,"query",!1,void 0,"gclid"),c=Yg(a,"query",!1,void 0,"gclsrc"),d=Yg(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Vg(e,"gclid",!1,void 0);c=c||Vg(e,"gclsrc",!1,void 0)}return kj(b,c,d)},kj=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(bj))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":mg("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},nj=function(a){var b=lj();fj(function(){mj(b,a)})};
function mj(a,b,c){function d(l,p){var n=oj(l,e);n&&gi(n,p,f)}b=b||{};var e=jj(b.prefix);c=c||$a();var f=oi(b,c,!0);f.wa="ad_storage";var g=Math.round(c/1E3),h=function(l){return["GCL",g,l].join(".")};a.aw&&(!0===b.cj?d("aw",h("~"+a.aw[0])):d("aw",h(a.aw[0])));a.dc&&d("dc",h(a.dc[0]));a.gf&&d("gf",h(a.gf[0]));a.ha&&d("ha",h(a.ha[0]));a.gp&&d("gp",h(a.gp[0]))}
var qj=function(a,b){var c=Si(!0);fj(function(){for(var d=jj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==dj[f]){var g=oj(f,d),h=c[g];if(h){var l=Math.min(pj(h),$a()),p;b:{for(var n=l,q=Yh(g,L.cookie,void 0,"ad_storage"),t=0;t<q.length;++t)if(pj(q[t])>n){p=!0;break b}p=!1}if(!p){var r=oi(b,l,!0);r.wa="ad_storage";gi(g,h,r)}}}}mj(kj(c.gclid,c.gclsrc),b)})},oj=function(a,b){var c=dj[a];if(void 0!==c)return b+c},pj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function gj(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var rj=function(a,b,c,d,e){if(Na(b)){var f=jj(e),g=function(){for(var h={},l=0;l<a.length;++l){var p=oj(a[l],f);if(p){var n=Yh(p,L.cookie,void 0,"ad_storage");n.length&&(h[p]=n.sort()[n.length-1])}}return h};fj(function(){Xi(g,b,c,d)})}},hj=function(a){return a.filter(function(b){return cj.test(b)})},sj=function(a,b){for(var c=jj(b.prefix),d={},e=0;e<a.length;e++)dj[a[e]]&&(d[a[e]]=dj[a[e]]);fj(function(){Ua(d,function(f,g){var h=Yh(c+g,L.cookie,void 0,"ad_storage");if(h.length){var l=h[0],p=pj(l),
n={};n[f]=[gj(l)];mj(n,b,p)}})})};function tj(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var uj=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(wg()){var c=lj();if(tj(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);Yi(function(){return d},3);Yi(function(){var e={};return e._up="1",e},1)}}},vj=function(){var a;if(ej()){for(var b=[],c=L.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Td:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].Td]||(g[b[h].Td]=[]),g[b[h].Td].push({timestamp:l[1],th:l[2]}))}a=g}else a={};return a};var wj=/^\d+\.fls\.doubleclick\.net$/;function xj(a,b){vg(H.s)?Dg(H.s)?a():zg(a,H.s):b?I(42):Fg(function(){xj(a,!0)},[H.s])}function yj(a){var b=$g(B.location.href),c=Yg(b,"host",!1);if(c&&c.match(wj)){var d=Yg(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function zj(a,b,c){if("aw"==a||"dc"==a){var d=yj("gcl"+a);if(d)return d.split(".")}var e=jj(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Dg(H.s)&&c,g;g=lj()[a]||[];if(0<g.length)return f?["0"]:g}var h=oj(a,e);return h?ij(h):[]}
var Aj=function(a){var b=yj("gac");if(b)return!Dg(H.s)&&a?"0":decodeURIComponent(b);var c=vj(),d=[];Ua(c,function(e,f){for(var g=[],h=0;h<f.length;h++)g.push(f[h].th);g=hj(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Bj=function(a,b){var c=lj().dc||[];xj(function(){vi(b);var d=qi[si(b.prefix)],e=!1;if(d&&0<c.length){var f=O.joined_au=O.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+d;jg(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var p=si(b.prefix),n=qi[p];n&&ui(p,n,b)}})};var Cj=/[A-Z]+/,Dj=/\s/,Ej=function(a){if(m(a)&&(a=Za(a),!Dj.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Cj.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],D:d}}}}},Gj=function(a){for(var b={},c=0;c<a.length;++c){var d=Ej(a[c]);d&&(b[d.id]=d)}Fj(b);var e=[];Ua(b,function(f,g){e.push(g)});return e};
function Fj(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.D[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Hj=function(){var a=!1;return a};var Jj=function(a,b,c,d){return(2===Ij()||d||"http:"!=B.location.protocol?a:b)+c},Ij=function(){var a=ag(),b;if(1===a)a:{var c=yh;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=L.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Xj=function(a){return Dg(H.s)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=ah(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},Yj=function(){var a;if(!(a=zh)){var b;if(!0===B._gtmdgs)b=!0;else{var c=Wf&&Wf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Wa("1");return Vh(1,100)<d?Vh(2,2):-1},Zj=function(a){var b;return b};var ak=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),bk={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ck={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},dk="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var fk=function(a){var b;Lh("gtm.allowlist")&&I(52);b=Lh("gtm.allowlist");b||(b=Lh("gtm.whitelist"));b&&I(9);
var c=b&&mb(Ya(b),bk),d;Lh("gtm.blocklist")&&I(51);d=Lh("gtm.blocklist");d||(d=Lh("gtm.blacklist"));d||(d=Lh("tagTypeBlacklist"))&&I(3);d?I(8):d=[];ek()&&(d=Ya(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Oa(Ya(d),"google")&&I(2);var e=
d&&mb(Ya(d),ck),f={};return function(g){var h=g&&g[Vd.Ma];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Eh[h]||[],p=a(h,l);if(b){var n;if(n=p)a:{if(0>Oa(c,h))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>Oa(c,l[q])){I(11);n=!1;break a}}else{n=!1;break a}n=!0}p=n}var t=!1;if(d){var r=0<=Oa(e,h);if(r)t=r;else{var u=Ta(e,l||[]);u&&I(10);t=u}}var v=!p||t;v||!(0<=Oa(l,"sandboxedScripts"))||c&&-1!==Oa(c,"sandboxedScripts")||(v=Ta(e,dk));return f[h]=v}},
ek=function(){return ak.test(B.location&&B.location.hostname)};var gk={active:!0,isAllowed:function(){return!0}},hk=function(a){var b=O.zones;return b?b.checkState(je.C,a):gk},ik=function(a){var b=O.zones;!b&&a&&(b=O.zones=a());return b};var jk=function(){},kk=function(){};var lk=!1,mk=0,nk=[];function ok(a){if(!lk){var b=L.createEventObject,c="complete"==L.readyState,d="interactive"==L.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){lk=!0;for(var e=0;e<nk.length;e++)N(nk[e])}nk.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function pk(){if(!lk&&140>mk){mk++;try{L.documentElement.doScroll("left"),ok()}catch(a){B.setTimeout(pk,50)}}}var qk=function(a){lk?a():nk.push(a)};var rk={},sk={},tk=function(a,b,c,d){if(!sk[a]||vh[b]||"__zone"===b)return-1;var e={};Eb(d)&&(e=E(d,e));e.id=c;e.status="timeout";return sk[a].tags.push(e)-1},uk=function(a,b,c,d){if(sk[a]){var e=sk[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function vk(a){for(var b=rk[a]||[],c=0;c<b.length;c++)b[c]();rk[a]={push:function(d){d(je.C,sk[a])}}}
var yk=function(a,b,c){sk[a]={tags:[]};La(b)&&wk(a,b);c&&B.setTimeout(function(){return vk(a)},Number(c));return xk(a)},wk=function(a,b){rk[a]=rk[a]||[];rk[a].push(db(function(){return N(function(){b(je.C,sk[a])})}))};function xk(a){var b=0,c=0,d=!1;return{add:function(){c++;return db(function(){b++;d&&b>=c&&vk(a)})},Qg:function(){d=!0;b>=c&&vk(a)}}};var zk=function(){function a(d){return!Ma(d)||0>d?0:d}if(!O._li&&B.performance&&B.performance.timing){var b=B.performance.timing.navigationStart,c=Ma(Mh.get("gtm.start"))?Mh.get("gtm.start"):0;O._li={cst:a(c-b),cbt:a(Bh-b)}}};var Dk={},Ek=function(){return B.GoogleAnalyticsObject&&B[B.GoogleAnalyticsObject]},Fk=!1;
var Gk=function(a){B.GoogleAnalyticsObject||(B.GoogleAnalyticsObject=a||"ga");var b=B.GoogleAnalyticsObject;if(B[b])B.hasOwnProperty(b)||I(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);B[b]=c}zk();return B[b]},Hk=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Ek();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},Ik=function(a){};
var Kk=function(a){},Jk=function(){return B.GoogleAnalyticsObject||"ga"},Lk=function(a,b){return function(){var c=Ek(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var Qk=function(){return"&tc="+Jd.filter(function(a){return a}).length},Tk=function(){2022<=Rk().length&&Sk()},Vk=function(){Uk||(Uk=B.setTimeout(Sk,500))},Sk=function(){Uk&&(B.clearTimeout(Uk),Uk=void 0);void 0===Wk||Xk[Wk]&&!Yk&&!Zk||($k[Wk]||al.Jh()||0>=bl--?(I(1),$k[Wk]=!0):(al.hi(),cg(Rk()),Xk[Wk]=!0,cl=dl=el=Zk=Yk=""))},Rk=function(){var a=Wk;if(void 0===a)return"";var b=yf("GTM"),c=yf("TAGGING");return[fl,Xk[a]?"":"&es=1",gl[a],b?"&u="+b:"",c?"&ut="+c:"",Qk(),Yk,Zk,el?el:"",dl,cl,"&z=0"].join("")},
hl=function(){return[Ch,"&v=3&t=t","&pid="+Qa(),"&rv="+je.oc].join("")},il="0.005000">Math.random(),fl=hl(),jl=function(){fl=hl()},Xk={},Yk="",Zk="",cl="",dl="",el="",Wk=void 0,gl={},$k={},Uk=void 0,al=function(a,b){var c=0,d=0;return{Jh:function(){if(c<a)return!1;$a()-d>=b&&(c=0);return c>=a},hi:function(){$a()-d>=b&&(c=0);c++;d=$a()}}}(2,1E3),bl=1E3,kl=function(a,b,c){if(il&&!$k[a]&&b){a!==Wk&&(Sk(),Wk=a);var d,e=String(b[Vd.Ma]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;Yk=Yk?Yk+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(Ld[g]?"1":"2")+d;cl=cl?cl+"."+h:"&ti="+h;Vk();Tk()}},ll=function(a,b,c){if(il&&!$k[a]){a!==Wk&&(Sk(),Wk=a);var d=c+b;Zk=Zk?Zk+"."+d:"&epr="+d;Vk();Tk()}},ml=function(a,b,c){};
var nl=function(){return!1},ol=function(){var a={};return function(b,c,d){}};function pl(a,b,c,d){var e=Jd[a],f=ql(a,b,c,d);if(!f)return null;var g=Rd(e[Vd.Xe],c,[]);if(g&&g.length){var h=g[0];f=pl(h.index,{K:f,J:1===h.kf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function ql(a,b,c,d){function e(){if(f[Vd.yg])h();else{var w=Sd(f,c,[]);var z=tk(c.id,String(f[Vd.Ma]),Number(f[Vd.Ye]),w[Vd.zg]),A=!1;w.vtp_gtmOnSuccess=function(){if(!A){A=!0;var F=$a()-D;kl(c.id,Jd[a],"5");uk(c.id,z,"success",
F);g()}};w.vtp_gtmOnFailure=function(){if(!A){A=!0;var F=$a()-D;kl(c.id,Jd[a],"6");uk(c.id,z,"failure",F);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;kl(c.id,f,"1");var C=function(){var F=$a()-D;kl(c.id,f,"7");uk(c.id,z,"exception",F);A||(A=!0,h())};var D=$a();try{Qd(w,c)}catch(F){C(F)}}}var f=Jd[a],g=b.K,h=b.J,l=b.terminate;if(c.Ad(f))return null;var p=Rd(f[Vd.Ze],c,[]);if(p&&p.length){var n=p[0],q=pl(n.index,{K:g,J:h,terminate:l},c,d);if(!q)return null;g=q;h=2===n.kf?l:q}if(f[Vd.Te]||f[Vd.Cg]){var t=f[Vd.Te]?Kd:c.xi,r=g,u=h;if(!t[a]){e=db(e);
var v=rl(a,t,e);g=v.K;h=v.J}return function(){t[a](r,u)}}return e}function rl(a,b,c){var d=[],e=[];b[a]=sl(d,e,c);return{K:function(){b[a]=tl;for(var f=0;f<d.length;f++)d[f]()},J:function(){b[a]=ul;for(var f=0;f<e.length;f++)e[f]()}}}function sl(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function tl(a){a()}function ul(a,b){b()};var xl=function(a,b,c){for(var d=[],e=0;e<Jd.length;e++)if(a[e]){var f=Jd[e];var g=c.add();try{var h=pl(e,{K:g,J:g,terminate:g},b,e);h?d.push({Ff:e,yf:Td(f),Ac:h}):(vl(e,b),g())}catch(p){g()}}c.Qg();d.sort(wl);for(var l=0;l<d.length;l++)d[l].Ac();return 0<d.length};function wl(a,b){var c,d=b.yf,e=a.yf;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Ff,h=b.Ff;f=g>h?1:g<h?-1:0}return f}
function vl(a,b){if(!il)return;var c=function(d){var e=b.Ad(Jd[d])?"3":"4",f=Rd(Jd[d][Vd.Xe],b,[]);f&&f.length&&c(f[0].index);kl(b.id,Jd[d],e);var g=Rd(Jd[d][Vd.Ze],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var yl=!1,Dl=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(yl)return!1;yl=!0}var d=hk(b),e=!1;if(!d.active){var f=!0;if("gtm.js"===c){f=!1,e=!0,d=hk(Number.MAX_SAFE_INTEGER);}if(f)return!1}il&&!$k[b]&&Wk!==b&&(Sk(),Wk=b,cl=Yk="",gl[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,Vk());
var g={id:b,name:c,Ad:fk(d.isAllowed),xi:[],tf:function(){I(6)},cf:zl(b)},h=yk(b,a.eventCallback,a.eventTimeout);Al(b);var l=ee(g);e&&(l=Bl(l));var p=xl(l,g,h);"gtm.js"!==c&&"gtm.sync"!==c||Kk(je.C);switch(c){case "gtm.init":I(19),p&&I(20)}return Cl(l,
p)};function zl(a){return function(b){il&&(Jb(b)||ml(a,"input",b))}}function Al(a){Ph(a,"event",1);Ph(a,"ecommerce",1);Ph(a,"gtm");Ph(a,"eventModel");}
function Bl(a){var b=[];for(var c=0;c<a.length;c++)a[c]&&uh[String(Jd[c][Vd.Ma])]&&(b[c]=!0);return b}function Cl(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Jd[c]&&!vh[String(Jd[c][Vd.Ma])])return!0;return!1}function El(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return $g(""+c+b).href}}function Fl(a,b){return Gl()?El(a,b):void 0}function Gl(){var a=!1;return a};var Hl=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.K=function(){};this.J=function(){};this.eventId=void 0},Il=function(a){var b=new Hl;b.eventModel=a;return b},Jl=function(a,b){a.targetConfig=b;return a},Kl=function(a,b){a.containerConfig=b;return a},Ll=function(a,b){a.a=b;return a},Ml=function(a,b){a.globalConfig=b;return a},Nl=function(a,b){a.K=b;return a},Ol=function(a,b){a.J=b;return a};
Hl.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Pl=function(a){function b(e){Ua(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ua(c,function(e){d.push(e)});return d};var Ql;if(3===je.oc.length)Ql="g";else{var Rl="G";Ql=Rl}
var Sl={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Ql,OPT:"o"},Tl=function(a){var b=je.C.split("-"),c=b[0].toUpperCase(),d=Sl[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===je.oc.length){var g="w";f="2"+g}else f="";return f+d+je.oc+e};var Ul=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var Vl=function(){return Mf("iPhone")&&!Mf("iPod")&&!Mf("iPad")};Mf("Opera");Mf("Trident")||Mf("MSIE");Mf("Edge");!Mf("Gecko")||-1!=Jf.toLowerCase().indexOf("webkit")&&!Mf("Edge")||Mf("Trident")||Mf("MSIE")||Mf("Edge");-1!=Jf.toLowerCase().indexOf("webkit")&&!Mf("Edge")&&Mf("Mobile");Mf("Macintosh");Mf("Windows");Mf("Linux")||Mf("CrOS");var Wl=pa.navigator||null;Wl&&(Wl.appVersion||"").indexOf("X11");Mf("Android");Vl();Mf("iPad");Mf("iPod");Vl()||Mf("iPad")||Mf("iPod");Jf.toLowerCase().indexOf("kaios");var Xl=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var Yl=function(){};var Zl=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},$l=function(a,b){this.i=a;this.a=null;this.B={};this.R=0;this.F=void 0===b?500:b;this.m=null};na($l,Yl);
var bm=function(a){return"function"===typeof a.i.__tcfapi||null!=am(a)};
$l.prototype.addEventListener=function(a){var b={},c=Df(function(){return a(b)}),d=0;-1!==this.F&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.F));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=Zl(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{cm(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};$l.prototype.removeEventListener=function(a){a&&a.listenerId&&cm(this,"removeEventListener",null,a.listenerId)};
var em=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var p=dm(a.vendor.consents,void 0===d?"755":d);l=p&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:p&&dm(a.purpose.consents,b)}else l=!0;else l=1===h?a.purpose&&a.vendor?dm(a.purpose.legitimateInterests,
b)&&dm(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},dm=function(a,b){return!(!a||!a[b])},cm=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(am(a)){fm(a);var f=++a.R;a.B[f]=c;if(a.a){var g={};a.a.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},am=function(a){if(a.a)return a.a;a.a=Xl(a.i,"__tcfapiLocator");return a.a},fm=function(a){a.m||(a.m=function(b){try{var c;c=("string"===
typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.B[c.callId](c.returnValue,c.success)}catch(d){}},Ul(a.i,a.m))};var gm={1:0,3:0,4:0,7:3,9:3,10:3};function hm(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var im=hm("",550),jm=hm("",500);function km(){var a=O.tcf||{};return O.tcf=a}
var lm=function(a,b){this.m=a;this.a=b;this.i=$a();},mm=function(a){},nm=function(a){},tm=function(){var a=km(),b=new $l(B,3E3),c=new lm(b,a);if((om()?!0===B.gtag_enable_tcf_support:!1!==B.gtag_enable_tcf_support)&&!a.active&&("function"===typeof B.__tcfapi||bm(b))){a.active=!0;a.Pb={};pm();var d=setTimeout(function(){qm(a);rm(a);d=null},jm);try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)qm(a),rm(a),mm(c);else{var f;if(!1===e.gdprApplies)f=sm(),b.removeEventListener(e);
else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in gm)if(gm.hasOwnProperty(h))if("1"===h){var l=e,p=!0;p=void 0===p?!1:p;var n;var q=l;!1===q.gdprApplies?n=!0:(void 0===q.internalErrorState&&(q.internalErrorState=Zl(q)),n="error"===q.cmpStatus||0!==q.internalErrorState||"loaded"===q.cmpStatus&&("tcloaded"===q.eventStatus||"useractioncomplete"===q.eventStatus)?!0:!1);g["1"]=n?!1===l.gdprApplies||"tcunavailable"===l.tcString||
void 0===l.gdprApplies&&!p||"string"!==typeof l.tcString||!l.tcString.length?!0:em(l,"1",0):!1}else g[h]=em(e,h,gm[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.Pb=f,rm(a),mm(c))}}),nm(c)}catch(e){d&&(clearTimeout(d),d=null),qm(a),rm(a)}}};function qm(a){a.type="e";a.tcString="tcunavailable";a.Pb=sm()}function pm(){var a={};Bg((a.ad_storage="denied",a.wait_for_update=im,a))}
var om=function(){var a=!1;a=!0;return a};function sm(){var a={},b;for(b in gm)gm.hasOwnProperty(b)&&(a[b]=!0);return a}function rm(a){var b={};Cg((b.ad_storage=a.Pb["1"]?"granted":"denied",b))}
var um=function(){var a=km();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},vm=function(){var a=km();return a.active?a.tcString||"":""},wm=function(a){if(!gm.hasOwnProperty(String(a)))return!0;var b=km();return b.active&&b.Pb?!!b.Pb[String(a)]:!0};function xm(a,b,c){function d(n){var q;O.reported_gclid||(O.reported_gclid={});q=O.reported_gclid;var t=f+(n?"gcu":"gcs");if(!q[t]){q[t]=!0;var r=[],u=function(z,A){A&&r.push(z+"="+encodeURIComponent(A))},v="https://www.google.com";if(wg()){var w=Dg(H.s);u("gcs",Eg());n&&u("gcu","1");O.dedupe_gclid||(O.dedupe_gclid=""+ji());u("rnd",O.dedupe_gclid);if((!f||g&&"aw.ds"!==g)&&Dg(H.s)){var y=ij("_gcl_aw");u("gclaw",y.join("."))}u("url",String(B.location).split(/[?#]/)[0]);u("dclid",ym(b,h));!w&&b&&(v=
"https://pagead2.googlesyndication.com")}u("gdpr_consent",vm());"1"===Si(!1)._up&&u("gtm_up","1");u("gclid",ym(b,f));u("gclsrc",g);u("gtm",Tl(!c));var x=v+"/pagead/landing?"+r.join("&");jg(x)}}var e=lj(),f=e.gclid||"",g=e.gclsrc,h=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),p=wg();if(l||p)p?Fg(function(){d();Dg(H.s)||zg(function(n){return d(!0,n.df)},H.s)},[H.s]):d()}
function ym(a,b){var c=a&&!Dg(H.s);return b&&c?"0":b}var hn=function(){var a=!0;wm(7)&&wm(9)&&wm(10)||(a=!1);var b=!0;b=!1;b&&!gn()&&(a=!1);return a},gn=function(){var a=!0;wm(3)&&wm(4)||(a=!1);return a};var En=!1;function Fn(){var a=O;return a.gcq=a.gcq||new Gn}
var Hn=function(a,b,c){Fn().register(a,b,c)},In=function(a,b,c,d){Fn().push("event",[b,a],c,d)},Jn=function(a,b){Fn().push("config",[a],b)},Kn=function(a,b,c,d){Fn().push("get",[a,b],c,d)},Ln=function(a){return Fn().getRemoteConfig(a)},Mn={},Nn=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},On=function(a,b,c,d,e){this.type=a;this.m=b;this.U=c||"";this.a=d;this.i=e},Gn=function(){this.m={};this.i={};this.a=[]},Pn=function(a,b){var c=Ej(b);return a.m[c.containerId]=
a.m[c.containerId]||new Nn},Qn=function(a,b,c){if(b){var d=Ej(b);if(d&&1===Pn(a,b).status){Pn(a,b).status=2;var e={};il&&(e.timeoutId=B.setTimeout(function(){I(38);Vk()},3E3));a.push("require",[e],d.containerId);Mn[d.containerId]=$a();if(Hj()){}else{var g=
"/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=B.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=Fl(c,g)||h;$f(l)}}}},Rn=function(a,b,c,d){if(d.U){var e=Pn(a,d.U),f=e.m;if(f){var g=E(c),h=E(e.targetConfig[d.U]),l=E(e.containerConfig),p=E(e.i),n=E(a.i),q=Lh("gtm.uniqueEventId"),t=Ej(d.U).prefix,r=Ol(Nl(Ml(Ll(Kl(Jl(Il(g),h),l),p),n),function(){ll(q,t,"2");}),function(){
ll(q,t,"3");});try{ll(q,t,"1");f(d.U,b,d.m,r)}catch(u){ll(q,t,"4");}}}};ba=Gn.prototype;
ba.register=function(a,b,c){var d=Pn(this,a);if(3!==d.status){d.m=b;d.status=3;if(c){d.i=c}var e=Ej(a),f=Mn[e.containerId];if(void 0!==f){var g=O[e.containerId].bootstrap,h=e.prefix.toUpperCase();O[e.containerId]._spx&&(h=h.toLowerCase());var l=Lh("gtm.uniqueEventId"),p=h,n=$a()-g;if(il&&!$k[l]){l!==Wk&&(Sk(),Wk=l);var q=p+"."+Math.floor(g-f)+"."+Math.floor(n);dl=
dl?dl+","+q:"&cl="+q}delete Mn[e.containerId]}this.flush()}};ba.push=function(a,b,c,d){var e=Math.floor($a()/1E3);Qn(this,c,b[0][H.La]||this.i[H.La]);En&&c&&Pn(this,c).a&&(d=!1);this.a.push(new On(a,e,c,b,d));d||this.flush()};ba.insert=function(a,b,c){var d=Math.floor($a()/1E3);0<this.a.length?this.a.splice(1,0,new On(a,d,c,b,!1)):this.a.push(new On(a,d,c,b,!1))};
ba.flush=function(a){for(var b=this,c=[],d=!1;this.a.length;){var e=this.a[0];if(e.i)En?!e.U||Pn(this,e.U).a?(e.i=!1,this.a.push(e)):c.push(e):(e.i=!1,this.a.push(e));else switch(e.type){case "require":if(3!==Pn(this,e.U).status&&!a){En&&this.a.push.apply(this.a,c);return}il&&B.clearTimeout(e.a[0].timeoutId);break;case "set":Ua(e.a[0],function(t,r){E(ob(t,r),b.i)});break;case "config":var f=e.a[0],g=!!f[H.ic];delete f[H.ic];var h=Pn(this,e.U),l=Ej(e.U),p=l.containerId===l.id;g||(p?h.containerConfig=
{}:h.targetConfig[e.U]={});h.a&&g||Rn(this,H.ia,f,e);h.a=!0;delete f[H.Ab];p?E(f,h.containerConfig):E(f,h.targetConfig[e.U]);En&&(d=!0);break;case "event":Rn(this,e.a[1],e.a[0],e);break;case "get":var n={},q=(n[H.Ba]=e.a[0],n[H.Aa]=e.a[1],n);Rn(this,H.Ia,q,e);}this.a.shift()}En&&(this.a.push.apply(this.a,c),d&&this.flush())};ba.getRemoteConfig=function(a){return Pn(this,a).i};var Sn=function(a,b,c){};var Tn=function(a,b,c,d){};var Un=function(a){};var Vn=function(a,b,c){};var Wn=function(a,b){G(this.i.a,["toPath:!string","fromPath:!string"],arguments);hf(this,"access_globals","write",a);hf(this,"access_globals","read",b);var c=a.split("."),d=b.split("."),e=[];var f=nb(c,e),g=nb(d,e);if(void 0===f||void 0===g)return!1;f[c[c.length-1]]=g[d[d.length-1]];
return!0};var Xn=function(a,b){var c;G(this.i.a,["path:!string"],[a]);hf(this,"access_globals","execute",a);for(var d=a.split("."),e=B,f=e[d[0]],g=1;f&&g<d.length;g++){e=f;f=f[d[g]];}if("function"!==Cb(f))return;var h=!1;
for(var l=[],p=1;p<arguments.length;p++)l.push(Hb(arguments[p],this.m,h));var n=(0,this.m.R)(f,e,l);c=Fb(n,this.m);void 0===c&&void 0!==n&&I(45);return c};var Yn=function(a){};var Zn=!1,$n=[];function ao(){if(!Zn){Zn=!0;for(var a=0;a<$n.length;a++)N($n[a])}}var bo=function(a){Zn?N(a):$n.push(a)};var co=function(a){G(this.i.a,["listener:!Fn"],arguments);hf(this,"process_dom_events","window","load");bo(Hb(a))};var eo=function(a,b){var c;if(G(this.i.a,["key:!string","dataLayerVersion:?number"],arguments),hf(this,"read_data_layer",a),2!==(b||2))c=Lh(a,1);else{var d=[];c=Nh(a,d)}var e=!1;var f=Fb(c,this.m,e);void 0===f&&void 0!==c&&I(45);return f};var fo=function(a){var b;G(this.i.a,["path:!string"],arguments);hf(this,"access_globals","read",a);var c=a.split("."),d=B,e;for(e=0;e<c.length-1;e++){d=d[c[e]];if(null==d)return;}b=d[c[e]];var f=!1;var g=Fb(b,this.m,f);void 0===g&&void 0!==b&&I(45);return g};var go=function(a,b){var c=null,d=!1;
return Fb(c,this.m,d)};var ho=function(a){var b;G(this.i.a,["path:!string"],arguments);hf(this,"access_globals","readwrite",a);var c=a.split("."),d=[];var e=nb(c,d),f=c[c.length-1];if(void 0===e)throw Error("Path "+a+" does not exist.");var g=e[f];void 0===g&&(g=[],e[f]=g);b=function(){if(!La(g.push))throw Error("Object at "+a+" in window is not an array.");
g.push.apply(g,Array.prototype.slice.call(arguments,0))};var h=!1;return Fb(b,this.m,h)};var io=function(a){var b;return b};var jo=function(a,b){b=void 0===b?!0:b;var c;return c};var ko=function(a){var b=null;return b};var lo=function(a,b){var c;return c};var mo=function(a,b){var c;return c};var no=function(a){var b="";return b};function oo(a,b){};var po=function(a){var b="";return b};var qo=function(){hf(this,"get_user_agent");return B.navigator.userAgent};var ro=function(a,b){};var so={},to=function(a,b,c,d){G(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);hf(this,"inject_script",a);var e=this.m,f=function(){b instanceof rb&&b.Qa(e)},g=function(){c instanceof rb&&c.Qa(e)};if(!d){$f(a,f,g);return}var h=d;so[h]?(so[h].onSuccess.push(f),so[h].onFailure.push(g)):(so[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=so[h].onSuccess,p=0;p<l.length;p++)N(l[p]);l.push=function(n){N(n);
return 0}},g=function(){for(var l=so[h].onFailure,p=0;p<l.length;p++)N(l[p]);so[h]=null},$f(a,f,g));};var uo=function(){return!1},vo={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var wo=function(){try{hf(this,"logging")}catch(c){return}if(!console)return;for(var a=Array.prototype.slice.call(arguments,0),b=0;b<a.length;b++)a[b]=Hb(a[b],this.m);console.log.apply(console,a);};var xo=function(a){var b=void 0;return b};var yo=function(a,b){var c=!1;G(this.i.a,["permission:!string"],[a]);for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;++e)d[e]=Hb(d[e],this.m);d.unshift(this);try{hf.apply(null,d),c=!0}catch(f){return!1}return c};var zo=function(){var a="";return a};var Ao=function(){var a="";return a};var Bo=function(a,b,c){};var Co=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var Do=function(a,b,c){G(this.i.a,["path:!string","value:?*","overrideExisting:?boolean"],arguments);hf(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=B,g;for(g=0;g<e.length-1;g++){f=f[e[g]];if(void 0===f)return!1;}if(void 0===
f[e[g]]||c)return f[e[g]]=Hb(b,this.m,d),!0;return!1};function Eo(a,b,c){};var Fo=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var Go=function(a,b,c){var d=this;};var Ho={},Io={};Ho.getItem=function(a){var b=null;return b};
Ho.setItem=function(a,b){};
Ho.removeItem=function(a){};Ho.clear=function(){};var Jo=function(a){var b;return b};var ed=function(){var a=new tf;Hj()?(a.add("injectHiddenIframe",Ka),a.add("injectScript",Ka)):(a.add("injectHiddenIframe",ro),a.add("injectScript",to));var b=Bo;a.add("Math",af());a.add("TestHelper",vf());a.add("addEventCallback",Un);a.add("aliasInWindow",Wn);a.add("assertApi",Xe);a.add("assertThat",Ye);a.add("callInWindow",
Xn);a.add("callLater",Yn);a.add("copyFromDataLayer",eo);a.add("copyFromWindow",fo);a.add("createArgumentsQueue",go);a.add("createQueue",ho);a.add("decodeUri",bf);a.add("decodeUriComponent",cf);a.add("encodeUri",df);a.add("encodeUriComponent",ef);a.add("fail",ff);a.add("fromBase64",io,!("atob"in B));a.add("generateRandom",gf);a.add("getContainerVersion",jf);a.add("getCookieValues",jo);a.add("getQueryParameters",lo);a.add("getReferrerQueryParameters",mo);a.add("getReferrerUrl",no);a.add("getTimestamp",
kf);a.add("getTimestampMillis",kf);a.add("getType",lf);a.add("getUrl",po);a.add("localStorage",vo,!uo());a.add("logToConsole",wo);a.add("makeInteger",nf);a.add("makeNumber",of);a.add("makeString",pf);a.add("makeTableMap",qf);a.add("mock",sf);a.add("queryPermission",yo);a.add("readCharacterSet",zo);a.add("readTitle",Ao);a.add("sendPixel",b);a.add("setCookie",Co);a.add("setInWindow",Do);a.add("sha256",Go);a.add("templateStorage",Ho);a.add("toBase64",Jo,!("btoa"in B));a.add("JSON",mf(function(c){var d=this.m.a;d&&d.log.call(this,"error",c)}));
return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.i.hasOwnProperty(c))b:{var f=this.m.a;if(f){var g=f.Ib();if(g&&0!==g.indexOf("__cvt_")){e=!0;break b}}e=!1}if(e)d=a.i.hasOwnProperty(c)?a.i[c]:void 0;else throw Error(c+" is not a valid API name.");}return d}};var cd,ne;
function Ko(){var a=data.runtime||[],b=data.runtime_lines;cd=new ad;Lo();Fd=function(e,f,g){Mo(f);var h=new wb;Ua(f,function(r,u){var v=Fb(u);void 0===v&&void 0!==u&&I(44);h.set(r,v)});cd.a.a.B=ae();var l={Rg:oe(e),eventId:void 0!==g?g.id:void 0,Ib:function(){return e},log:function(){}};if(nl()){var p=ol(),n=void 0,q=void 0;l.fa={i:{},a:function(r,u,v){1===u&&(n=r);7===u&&(q=v);p(r,u,v)},m:rf()};l.log=function(r,u){if(n){var v=Array.prototype.slice.call(arguments,1);p(n,4,{level:r,source:q,message:v})}}}var t=
dd(l,[e,h]);cd.a.a.B=void 0;t instanceof Ba&&"return"===t.a&&(t=t.i);return Hb(t)};fd();for(var c=0;c<a.length;c++){var d=a[c];if(!Na(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&Xd(d,b[c]);cd.Ac(d)}}function Mo(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;La(b)&&(a.gtmOnSuccess=function(){N(b)});La(c)&&(a.gtmOnFailure=function(){N(c)})}
function Lo(){var a=cd;O.SANDBOXED_JS_SEMAPHORE=O.SANDBOXED_JS_SEMAPHORE||0;gd(a,function(b,c,d){O.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{O.SANDBOXED_JS_SEMAPHORE--}})}function No(a){void 0!==a&&Ua(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Eh[e]=Eh[e]||[];Eh[e].push(b)}})};var Oo="HA GF G UA AW DC".split(" "),Po=!1,Qo={},Ro=!1;function So(a,b){var c={event:a};b&&(c.eventModel=E(b),b[H.Xc]&&(c.eventCallback=b[H.Xc]),b[H.bc]&&(c.eventTimeout=b[H.bc]));return c}function To(){return Po}
var Wo={config:function(a){},consent:function(a){function b(){To()&&
E(a[2],{subcommand:a[1]})}if(3===a.length){I(39);var c=Fh(),d=a[1];"default"===d?(b(),Bg(a[2])):"update"===d&&(b(),Cg(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&m(b)){var c;if(2<a.length){if(!Eb(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=So(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return Ro=!0,To(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=
a[1],c=a[2],d=ne.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;2==a.length&&Eb(a[1])?b=E(a[1]):3==a.length&&m(a[1])&&(b={},Eb(a[2])||Na(a[2])?b[a[1]]=E(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};
Wo.get=function(a){};var Xo={policy:!0};
var Yo=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},$o=function(a){var b=Zo(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var qp=function(a){if(pp(a))return a;this.a=a};qp.prototype.zh=function(){return this.a};var pp=function(a){return!a||"object"!==Cb(a)||Eb(a)?!1:"getUntrustedUpdateValue"in a};qp.prototype.getUntrustedUpdateValue=qp.prototype.zh;var rp=[];var tp=!1,up=function(a){return B["dataLayer"].push(a)},vp=function(a){var b=O["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function wp(a){var b=a._clear;Ua(a,function(d,e){"_clear"!==d&&(b&&Oh(d,void 0),Oh(d,e))});Ah||(Ah=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Fh(),a["gtm.uniqueEventId"]=c,Oh("gtm.uniqueEventId",c));return Dl(a)}
function xp(){for(var a=!1;!tp&&0<rp.length;){tp=!0;delete Ih.eventModel;Kh();
var f=rp.shift();if(null!=f){var g=pp(f);if(g){var h=f;f=pp(h)?h.getUntrustedUpdateValue():void 0;for(var l=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],p=0;p<l.length;p++){var n=l[p],q=Lh(n,1);if(Na(q)||Eb(q))q=E(q);Jh[n]=q}}try{if(La(f))try{f.call(Mh)}catch(z){}else if(Na(f)){var t=f;if(m(t[0])){var r=t[0].split("."),u=r.pop(),v=t.slice(1),w=Lh(r.join("."),2);if(void 0!==w&&null!==w)try{w[u].apply(w,v)}catch(z){}}}else{if(Va(f)){a:{var y=f;if(y.length&&m(y[0])){var x=
Wo[y[0]];if(x&&(!g||!Xo[y[0]])){f=x(y);break a}}f=void 0}if(!f){tp=!1;continue}}a=wp(f)||a}}finally{g&&Kh(!0)}}tp=!1}return!a}function yp(){var a=xp();try{Yo(B["dataLayer"],je.C)}catch(b){}return a}
var Ap=function(){var a=Yf("dataLayer",[]),b=Yf("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};qk(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});bo(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<O.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new qp(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);rp.push.apply(rp,e);if(300<
this.length)for(I(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return xp()&&h};var d=a.slice(0);rp.push.apply(rp,d);zp()&&N(yp)},zp=function(){var a=!0;return a};var Bp={};Bp.jc=new String("undefined");
var Cp=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Bp.jc?b:a[d]);return c.join("")}};Cp.prototype.toString=function(){return this.a("undefined")};Cp.prototype.valueOf=Cp.prototype.toString;Bp.Eg=Cp;Bp.md={};Bp.ih=function(a){return new Cp(a)};var Dp={};Bp.ii=function(a,b){var c=Fh();Dp[c]=[a,b];return c};Bp.hf=function(a){var b=a?0:1;return function(c){var d=Dp[c];if(d&&"function"===typeof d[b])d[b]();Dp[c]=void 0}};Bp.Hh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Bp.bi=function(a){if(a===Bp.jc)return a;var b=Fh();Bp.md[b]=a;return'google_tag_manager["'+je.C+'"].macro('+b+")"};Bp.Th=function(a,b,c){a instanceof Bp.Eg&&(a=a.a(Bp.ii(b,c)),b=Ka);return{yd:a,K:b}};var Ep=function(a,b,c){function d(f,g){var h=f[g];return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||fg(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Fp=function(a){O.hasOwnProperty("autoEventsSettings")||(O.autoEventsSettings={});var b=O.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Gp=function(a,b,c){Fp(a)[b]=c},Hp=function(a,b,c,d){var e=Fp(a),f=ab(e,b,d);e[b]=c(f)},Ip=function(a,b,c){var d=Fp(a);return ab(d,b,c)};var Jp=["input","select","textarea"],Kp=["button","hidden","image","reset","submit"],Lp=function(a){var b=a.tagName.toLowerCase();return!Pa(Jp,function(c){return c===b})||"input"===b&&Pa(Kp,function(c){return c===a.type.toLowerCase()})?!1:!0},Mp=function(a){return a.form?a.form.tagName?a.form:L.getElementById(a.form):ig(a,["form"],100)},Np=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(Lp(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var Op=!!B.MutationObserver,Pp=void 0,Qp=function(a){if(!Pp){var b=function(){var c=L.body;if(c)if(Op)(new MutationObserver(function(){for(var e=0;e<Pp.length;e++)N(Pp[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;dg(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<Pp.length;e++)N(Pp[e])}))})}};Pp=[];L.body?b():N(b)}Pp.push(a)};
var aq=function(a,b,c){function d(){var g=a();f+=e?($a()-e)*g.playbackRate/1E3:0;e=$a()}var e=0,f=0;return{zc:function(g,h,l){var p=a(),n=p.jf,q=void 0!==l?Math.round(l):void 0!==h?Math.round(p.jf*h):Math.round(p.jh),t=void 0!==h?Math.round(100*h):0>=n?0:Math.round(q/n*100),r=L.hidden?!1:.5<=Ng(c);d();var u=Ep(c,"gtm.video",[b]);u["gtm.videoProvider"]="youtube";u["gtm.videoStatus"]=g;u["gtm.videoUrl"]=p.url;u["gtm.videoTitle"]=p.title;u["gtm.videoDuration"]=Math.round(n);u["gtm.videoCurrentTime"]=
Math.round(q);u["gtm.videoElapsedTime"]=Math.round(f);u["gtm.videoPercent"]=t;u["gtm.videoVisible"]=r;up(u)},ki:function(){e=$a()},pd:function(){d()}}};var bq=B.clearTimeout,cq=B.setTimeout,R=function(a,b,c){if(Hj()){b&&N(b)}else return $f(a,b,c)},dq=function(){return new Date},eq=function(){return B.location.href},fq=function(a){return Yg($g(a),"fragment")},gq=function(a){return Zg($g(a))},hq=function(a,b){return Lh(a,b||2)},iq=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=up(a)):d=up(a);return d},jq=function(a,b){B[a]=b},T=function(a,b,c){b&&
(void 0===B[a]||c&&!B[a])&&(B[a]=b);return B[a]},kq=function(a,b,c){return Yh(a,b,void 0===c?!0:!!c)},lq=function(a,b,c){return 0===gi(a,b,c)},mq=function(a,b){if(Hj()){b&&N(b)}else bg(a,b)},nq=function(a){return!!Ip(a,"init",!1)},oq=function(a){Gp(a,"init",!0)},pq=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":yh;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";R(Jj("https://","http://",c))},qq=function(a,
b){var c=a[b];return c},rq=function(a,b,c){il&&(Jb(a)||ml(c,b,a))};
var sq=Bp.Th;function Pq(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Qq=new Ra;function Rq(a,b){function c(g){var h=$g(g),l=Yg(h,"protocol"),p=Yg(h,"host",!0),n=Yg(h,"port"),q=Yg(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,p,n,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Sq(a){return Tq(a)?1:0}
function Tq(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Na(c)){for(var d=0;d<c.length;d++){var e=E(a,{});E({arg1:c[d],any_of:void 0},e);if(Sq(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(r){}}f=!1}return f;case "_ew":return Pq(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Oa(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var n=a.ignore_case?"i":void 0;try{var q=String(c)+n,t=Qq.get(q);t||(t=new RegExp(c,n),Qq.set(q,t));p=t.test(b)}catch(r){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Rq(b,c)}return!1};var Uq={},Vq=encodeURI,X=encodeURIComponent,Wq=cg;var Xq=function(a,b){if(!a)return!1;var c=Yg($g(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Yq=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Uq.Ih=function(){var a=!1;return a};var Lr=null,Mr=[],Nr=0,Or=null;function Pr(a){if(!B.MutationObserver)return!1;try{return Lr||(Lr=new MutationObserver(Qr),Lr.observe(L.documentElement,{subtree:!0,childList:!0,attributes:!0,characterData:!0}),Nr=$a()),Mr.push(a),!0}catch(b){return!1}}function Qr(){var a=$a()-Nr;0<=a?(Or&&(B.clearTimeout(Or),Or=null),Rr()):Or||(Or=B.setTimeout(function(){Rr();Or=null},0-a))}
function Rr(){Nr=$a();var a=Mr;Mr=[];for(var b=fa(a),c=b.next();!c.done;c=b.next()){var d=c.value;d()}Lr&&(Lr.takeRecords(),Mr.length||(Lr&&(Lr.disconnect(),Lr=null),Or&&(B.clearTimeout(Or),Or=null)))};function Cs(){return B.gaGlobal=B.gaGlobal||{}}var Ds=function(){var a=Cs();a.hid=a.hid||Qa();return a.hid},Es=function(a,b){var c=Cs();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};function dt(a,b){}function et(a){var b=$g(a),c=b.search;return b.protocol+"//"+b.hostname+b.pathname+(c?c+"&richsstsse":"?richsstsse")};var lt=function(a,b){var c;var d=Ns(a);d?(Ls(d,a)||(I(25),a.abort()),c=d):c=void 0;var e=c,f;a:{var g=a.M[H.$a];g?(g=""+g,Is(g,a)||(I(31),a.abort()),Es(g,Dg(H.I)),f=g):(I(32),a.abort(),f="")}return{clientId:f,Cf:e}};var mt=window,nt=document,ot=function(a){var b=mt._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===mt["ga-disable-"+a])return!0;try{var c=mt.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Wh("AMP_TOKEN",String(nt.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return nt.getElementById("__gaOptOutExtension")?!0:!1};function rt(a){delete a.eventModel[H.Ab];ut(a.eventModel)}
var ut=function(a){Ua(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.oa]||{};Ua(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var xt=function(a,b,c){In(b,c,a)},yt=function(a,b,c){In(b,c,a,!0)},At=function(a,b){};
function zt(a,b){}var Z={b:{}};
Z.b.gaawc=["google"],function(){function a(b,c,d){for(var e=0;e<c.length;e++)b.hasOwnProperty(c[e])&&(b[c[e]]=d(b[c[e]]))}(function(b){Z.__gaawc=b;Z.__gaawc.g="gaawc";Z.__gaawc.h=!0;Z.__gaawc.priorityOverride=10})(function(b){var c=String(b.vtp_measurementId),d=Yq(b.vtp_fieldsToSet,"name","value")||{};if(d.hasOwnProperty(H.oa)||b.vtp_userProperties){var e=d[H.oa]||{};E(Yq(b.vtp_userProperties,"name","value"),e);d[H.oa]=e}a(d,H.Je,function(f){return Xa(f)});a(d,H.Le,function(f){return Number(f)});
d.send_page_view=b.vtp_sendPageView;Jn(d,c);N(b.vtp_gtmOnSuccess)})}();Z.b.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.g="ctv";Z.__ctv.h=!0;Z.__ctv.priorityOverride=0})(function(){return"650"})}();
Z.b.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var z=[],A=x.split(","),C=0;C<A.length;C++){var D=Number(A[C]);if(isNaN(D))return[];n.test(A[C])||z.push(D)}return z}function c(){var x=0,z=0;return function(){var A=Mg(),C=A.height;x=Math.max(v.scrollLeft+A.width,x);z=Math.max(v.scrollTop+C,z);return{lh:x,mh:z}}}function d(){r=T("self");
u=r.document;v=u.scrollingElement||u.body&&u.body.parentNode;y=c()}function e(x,z,A,C){var D=l(z),F={},M;for(M in D){F.Va=M;if(D.hasOwnProperty(F.Va)){var Q=Number(F.Va);x<Q||(iq({event:"gtm.scrollDepth","gtm.scrollThreshold":Q,"gtm.scrollUnits":A.toLowerCase(),"gtm.scrollDirection":C,"gtm.triggers":D[F.Va].join(",")}),Hp("sdl",z,function(ca){return function(ea){delete ea[ca.Va];return ea}}(F),{}))}F={Va:F.Va}}}function f(){var x=y(),z=x.lh,A=x.mh,C=z/v.scrollWidth*100,D=A/v.scrollHeight*100;e(z,
"horiz.pix",q.mc,t.Me);e(C,"horiz.pct",q.kc,t.Me);e(A,"vert.pix",q.mc,t.$e);e(D,"vert.pct",q.kc,t.$e);Gp("sdl","pending",!1)}function g(){var x=250,z=!1;u.scrollingElement&&u.documentElement&&r.addEventListener&&(x=50,z=!0);var A=0,C=!1,D=function(){C?A=cq(D,x):(A=0,f(),nq("sdl")&&!a()&&(eg(r,"scroll",F),eg(r,"resize",F),Gp("sdl","init",!1)));C=!1},F=function(){z&&y();A?C=!0:(A=cq(D,x),Gp("sdl","pending",!0))};return F}function h(x,z,A){if(z){var C=b(String(x));Hp("sdl",A,function(D){for(var F=0;F<
C.length;F++){var M=String(C[F]);D.hasOwnProperty(M)||(D[M]=[]);D[M].push(z)}return D},{})}}function l(x){return Ip("sdl",x,{})}function p(x){N(x.vtp_gtmOnSuccess);var z=x.vtp_uniqueTriggerId,A=x.vtp_horizontalThresholdsPixels,C=x.vtp_horizontalThresholdsPercent,D=x.vtp_verticalThresholdUnits,F=x.vtp_verticalThresholdsPixels,M=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case q.mc:h(A,z,"horiz.pix");break;case q.kc:h(C,z,"horiz.pct")}switch(D){case q.mc:h(F,z,"vert.pix");
break;case q.kc:h(M,z,"vert.pct")}nq("sdl")?Ip("sdl","pending")||(w||(d(),w=!0),N(function(){return f()})):(d(),w=!0,v&&(oq("sdl"),Gp("sdl","pending",!0),N(function(){f();if(a()){var Q=g();dg(r,"scroll",Q);dg(r,"resize",Q)}else Gp("sdl","init",!1)})))}var n=/^\s*$/,q={kc:"PERCENT",mc:"PIXELS"},t={$e:"vertical",Me:"horizontal"},r,u,v,w=!1,y;(function(x){Z.__sdl=x;Z.__sdl.g="sdl";Z.__sdl.h=!0;Z.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?p(x):bo(function(){p(x)})})}();

Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=T("google_tag_manager");var d=c&&c.e&&c.e(b);rq(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
Z.b.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.priorityOverride=0})(function(a){rq(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Z.b.d=["google"],function(){(function(a){Z.__d=a;Z.__d.g="d";Z.__d.h=!0;Z.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=Hg(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=L.getElementById(a.vtp_elementId);b&&(d?c=fg(b,d):c=gg(b));return Za(String(b&&c))})}();
Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(Qh(a.vtp_gtmEventId,"event"))})}();
Z.b.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.priorityOverride=0})(function(a){var b=hq("gtm.referrer",1)||L.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Yg($g(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):gq(String(b)):String(b)})}();
Z.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Ep(c,"gtm.click");iq(d)}}(function(b){Z.__cl=b;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.priorityOverride=0})(function(b){if(!nq("cl")){var c=T("document");dg(c,"click",a,!0);oq("cl")}N(b.vtp_gtmOnSuccess)})}();
Z.b.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=T(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];rq(c,"j",a.vtp_gtmEventId);return c})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return kq(a.vtp_name,hq("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],p=l.key;l.read&&e.push(p);l.write&&f.push(p);l.execute&&g.push(p)}return{assert:function(n,q,t){if(!m(t))throw d(n,{},"Key must be a string.");if("read"===q){if(-1<Oa(e,t))return}else if("write"===q){if(-1<Oa(f,t))return}else if("readwrite"===q){if(-1<Oa(f,t)&&-1<Oa(e,t))return}else if("execute"===q){if(-1<Oa(g,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(n,{},"Prohibited "+q+" on global variable: "+
t+".");},L:a}})}();Z.b.r=["google"],function(){(function(a){Z.__r=a;Z.__r.g="r";Z.__r.h=!0;Z.__r.priorityOverride=0})(function(a){return Qa(a.vtp_min,a.vtp_max)})}();
Z.b.tg=["google"],function(){function a(g){f.push(g);1<f.length||N(function(){var h=f.join(",");f=[];iq({event:"gtm.triggerGroup","gtm.triggers":h})})}function b(g,h){var l=c[h],p=l.indexOf(g);-1!==p&&(l.splice(p,1),l.length||a(h))}var c={},d={},e=[],f=[];(function(g){Z.__tg=g;Z.__tg.g="tg";Z.__tg.h=!0;Z.__tg.priorityOverride=0})(function(g){N(g.vtp_gtmOnSuccess);var h=g.vtp_uniqueTriggerId,l=g.vtp_triggerIds,p=g.vtp_firingId;
if(g.vtp_isListeningTag){var n=d[p];n?b(p,n):e.push(p)}else{c[h]=l;for(var q=0,t;t=l[q];q++)d[t]=h;for(var r=0;r<e.length;r++)b(e[r],h)}})}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:hq("gtm.url",1))||eq();var d=b[a("vtp_component")];if(!d||"URL"==d)return gq(String(c));var e=$g(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],p;g?Na(h)?p=h:p=String(h).replace(/\s+/g,
"").split(","):p=[String(h)];for(var n=0;n<p.length;n++){var q=Yg(e,"QUERY",void 0,void 0,p[n]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=Yg(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=hq(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;rq(d,"v",a.vtp_gtmEventId);return d})}();
Z.b.tl=["google"],function(){function a(b){return function(){if(b.Dd&&b.Ed>=b.Dd)b.zd&&T("self").clearInterval(b.zd);else{b.Ed++;var c=dq().getTime();iq({event:b.O,"gtm.timerId":b.zd,"gtm.timerEventNumber":b.Ed,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Dd,"gtm.timerStartTime":b.Ef,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Ef,"gtm.triggers":b.Ai})}}}(function(b){Z.__tl=b;Z.__tl.g="tl";Z.__tl.h=!0;Z.__tl.priorityOverride=0})(function(b){N(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{O:b.vtp_eventName,Ed:0,interval:Number(b.vtp_interval),Dd:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Ai:String(b.vtp_uniqueTriggerId||"0"),Ef:dq().getTime()};c.zd=T("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.b.ua=["google"],function(){function a(q){return Dg(q)}function b(q,t){if(wg()&&!e[q]){var r=function(){var u=Ek(),v="gtm"+Fh(),w=p(t),y={name:v};l(w,y,!0);u("create",q,y);u(function(){u.remove(v)})};zg(r,H.I);zg(r,H.s);e[q]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,
useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},l=function(q,t,r){var u=0;if(q)for(var v in q)if(!h[v]&&q.hasOwnProperty(v)&&(r&&f[v]||!r&&void 0===f[v])){var w=g[v]?Xa(q[v]):q[v];"anonymizeIp"!=v||w||
(w=void 0);t[v]=w;u++}return u},p=function(q){var t={};q.vtp_gaSettings&&E(Yq(q.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),t);E(Yq(q.vtp_fieldsToSet,"fieldName","value"),t);Dg(H.I)||(t.storage="none");Dg(H.s)||(t.allowAdFeatures=!1,t.storeGac=!1);hn()||(t.allowAdFeatures=!1);gn()||(t.allowAdPersonalizationSignals=!1);q.vtp_transportUrl&&(t._x_19=q.vtp_transportUrl);
return t},n=function(q){function t(ta,aa){void 0!==aa&&F("set",ta,aa)}var r={},u={},v={},w={};if(q.vtp_gaSettings){var y=q.vtp_gaSettings;E(Yq(y.vtp_contentGroup,"index","group"),u);E(Yq(y.vtp_dimension,"index","dimension"),v);E(Yq(y.vtp_metric,"index","metric"),w);var x=E(y);x.vtp_fieldsToSet=void 0;x.vtp_contentGroup=void 0;x.vtp_dimension=
void 0;x.vtp_metric=void 0;q=E(q,x)}E(Yq(q.vtp_contentGroup,"index","group"),u);E(Yq(q.vtp_dimension,"index","dimension"),v);E(Yq(q.vtp_metric,"index","metric"),w);var z=p(q),A=Gk(q.vtp_functionName);if(La(A)){var C="",D="";q.vtp_setTrackerName&&"string"==typeof q.vtp_trackerName?""!==q.vtp_trackerName&&(D=q.vtp_trackerName,C=D+"."):(D="gtm"+Fh(),C=D+".");var F=function(ta){var aa=[].slice.call(arguments,0);aa[0]=C+aa[0];A.apply(window,aa)},M=function(ta,aa){return void 0===aa?aa:ta(aa)},Q=function(ta,
aa){if(aa)for(var hb in aa)aa.hasOwnProperty(hb)&&F("set",ta+hb,aa[hb])},ca=function(){var ta={transaction_id:"id",affiliation:"affiliation",value:"revenue",tax:"tax",shipping:"shipping",coupon:"coupon",item_list_name:"list"},aa={},hb=(aa[H.Sc]="click",aa[H.ya]="detail",aa[H.Xa]="add",aa[H.Ya]="remove",aa[H.Ha]="checkout",aa[H.la]="purchase",aa[H.Za]="refund",aa),Sb={item_id:"id",item_name:"name",item_list_name:"list",item_brand:"brand",
item_category:"category",item_variant:"variant",index:"position",promotion_id:"id",promotion_name:"name",creative_name:"creative",creative_slot:"position"},jc=function(bb,lb){for(var cb in bb)ta.hasOwnProperty(cb)&&(bb[lb]=bb[lb]||{},bb[lb].actionField=bb[lb].actionField||{},bb[lb].actionField[ta[cb]]=bb[cb])},ib=function(bb){for(var lb=[],cb={},Tb=0;Tb<bb.length;cb={lb:cb.lb},Tb++)cb.lb={},Ua(bb[Tb],function(xd){return function(ri,Vm){Sb.hasOwnProperty(ri)?xd.lb[Sb[ri]]=Vm:xd.lb[ri]=Vm}}(cb)),lb.push(cb.lb);
return lb},sb=function(bb,lb,cb){if(!Eb(lb))return!1;for(var Tb=ab(Object(lb),cb,[]),xd=0;Tb&&xd<Tb.length;xd++)F(bb,Tb[xd]);return!!Tb&&0<Tb.length},V;if(q.vtp_useEcommerceDataLayer){var jb=!1;q.vtp_useGA4SchemaForEcommerce&&(V=Qh(q.vtp_gtmEventId,"eventModel"),jb=!!V);jb||(V=hq("ecommerce",1))}else q.vtp_ecommerceMacroData&&(V=q.vtp_ecommerceMacroData.ecommerce,
!V&&q.vtp_useGA4SchemaForEcommerce&&(V=q.vtp_ecommerceMacroData));if(!Eb(V))return;V=Object(V);if(q.vtp_useGA4SchemaForEcommerce){V.currencyCode=V.currencyCode||V.currency;var kb=String(Qh(q.vtp_gtmEventId,"event"));if("view_item_list"===kb&&!V.impressions&&V.items)V.impressions=ib(V.items);else if("view_promotion"===kb&&!V.promoView&&V.items)V.promoView={},V.promoView.promotions=ib(V.items);else if("select_promotion"===kb&&!V.promoClick)V.items&&(V.promoClick={},V.promoClick.promotions=ib(V.items)),
jc(V,"promoClick");else if(hb.hasOwnProperty(kb)){var Gb=hb[kb];V[Gb]||(V.items&&(V[Gb]={},V[Gb].products=ib(V.items)),jc(V,Gb))}}var ve=ab(z,"currencyCode",V.currencyCode);void 0!==ve&&F("set","&cu",ve);sb("ec:addImpression",V,"impressions");if(sb("ec:addPromo",V[V.promoClick?"promoClick":"promoView"],"promotions")&&V.promoClick){F("ec:setAction","promo_click",V.promoClick.actionField);return}for(var vd="detail checkout checkout_option click add remove purchase refund".split(" "),wd="refund purchase remove checkout checkout_option add click detail".split(" "),
kc=0;kc<vd.length;kc++){var lc=V[vd[kc]];if(lc){sb("ec:addProduct",lc,"products");F("ec:setAction",vd[kc],lc.actionField);if(il)for(var zc=0;zc<wd.length;zc++){var Qf=V[wd[zc]];if(Qf){Qf!==lc&&I(13);break}}break}}},ea={name:D};l(z,ea,!0);var wa=q.vtp_trackingId||r.trackingId;A("create",wa,ea);F("set","&gtm",Tl(!0));
wg()&&(F("set","&gcs",Eg()),b(wa,q));z._x_19&&(null==Xf&&delete z._x_19,z._x_20&&!d[D]&&(d[D]=!0,A(Lk(D,String(z._x_20)))));q.vtp_enableRecaptcha&&F("require","recaptcha","recaptcha.js");(function(ta,aa){void 0!==q[aa]&&F("set",ta,q[aa])})("nonInteraction","vtp_nonInteraction");Q("contentGroup",u);Q("dimension",v);Q("metric",w);var J={};l(z,J,!1)&&F("set",J);var K;
q.vtp_enableLinkId&&F("require","linkid","linkid.js");F("set","hitCallback",function(){var ta=z&&z.hitCallback;La(ta)&&ta();q.vtp_gtmOnSuccess()});if("TRACK_EVENT"==q.vtp_trackType){q.vtp_enableEcommerce&&(F("require","ec","ec.js"),ca());var W={hitType:"event",eventCategory:String(q.vtp_eventCategory||r.category),eventAction:String(q.vtp_eventAction||r.action),eventLabel:M(String,q.vtp_eventLabel||r.label),eventValue:M(Wa,q.vtp_eventValue||
r.value)};l(K,W,!1);F("send",W);}else if("TRACK_SOCIAL"==q.vtp_trackType){var U={hitType:"social",socialNetwork:String(q.vtp_socialNetwork),socialAction:String(q.vtp_socialAction),socialTarget:String(q.vtp_socialActionTarget)};l(K,U,!1);F("send",U);}else if("TRACK_TRANSACTION"==q.vtp_trackType){}else if("TRACK_TIMING"==
q.vtp_trackType){var oa={hitType:"timing",timingCategory:String(q.vtp_timingCategory||r.category),timingVar:String(q.vtp_timingVar||r.name),timingValue:Wa(q.vtp_timingValue||r.value),timingLabel:M(String,q.vtp_timingLabel||r.label)};l(K,oa,!1);F("send",oa);}else if("DECORATE_LINK"==q.vtp_trackType){}else if("DECORATE_FORM"==q.vtp_trackType){}else if("TRACK_DATA"==q.vtp_trackType){}else{q.vtp_enableEcommerce&&(F("require","ec","ec.js"),ca());if(q.vtp_doubleClick||"DISPLAY_FEATURES"==q.vtp_advertisingFeaturesType){var cc=
"_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");F("require","displayfeatures",void 0,{cookieName:cc})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==q.vtp_advertisingFeaturesType){var fb="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");F("require","adfeatures",{cookieName:fb})}K?F("send","pageview",K):F("send","pageview");q.vtp_autoLinkDomains&&Hk(C,q.vtp_autoLinkDomains,!!q.vtp_useHashAutoLink,!!q.vtp_decorateFormsAutoLink);
Xa(z.urlPassthrough)&&Ik(C)}if(!c){var qb=q.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";q.vtp_useInternalVersion&&!q.vtp_useDebugVersion&&(qb="internal/"+qb);c=!0;var ue=Fl(z._x_19,"/analytics.js"),Wc=Jj("https:","http:","//www.google-analytics.com/"+qb,z&&!!z.forceSSL);R("analytics.js"===qb&&ue?ue:Wc,function(){var ta=Ek();ta&&ta.loaded||q.vtp_gtmOnFailure();},
q.vtp_gtmOnFailure)}}else N(q.vtp_gtmOnFailure)};(function(q){Z.__ua=q;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0})(function(q){Fg(function(){n(q)},[H.I,H.s])})}();


Z.b.uv=["google"],function(){(function(a){Z.__uv=a;Z.__uv.g="uv";Z.__uv.h=!0;Z.__uv.priorityOverride=0})(function(){})}();

Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!m(f))throw d(e,{},"Script URL must be a string.");try{if(Oe($g(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},L:a}})}();


Z.b.ytl=["google"],function(){function a(){var v=Math.round(1E9*Math.random())+"";return L.getElementById(v)?a():v}function b(v,w){if(!v)return!1;for(var y=0;y<q.length;y++)if(0<=v.indexOf("//"+q[y]+"/"+w))return!0;return!1}function c(v){var w=-1!==v.indexOf("?")?"&":"?";if(-1<v.indexOf("origin="))return v+w+"enablejsapi=1";if(!r){var y=T("document");r=y.location.protocol+"//"+y.location.hostname;y.location.port&&(r+=":"+y.location.port)}return v+w+"enablejsapi=1&origin="+encodeURIComponent(r)}function d(v,
w){var y=v.getAttribute("src");if(b(y,"embed/")){if(0<y.indexOf("enablejsapi=1"))return!0;if(w)return v.setAttribute("src",c(y)),!0}return!1}function e(v,w){if(!v.getAttribute("data-gtm-yt-inspected-"+w.Ud)&&(v.setAttribute("data-gtm-yt-inspected-"+w.Ud,"true"),d(v,w.pf))){v.id||(v.id=a());var y=T("YT"),x=y.get(v.id);x||(x=new y.Player(v.id));var z=g(x,w),A={},C;for(C in z)A.kb=C,z.hasOwnProperty(A.kb)&&x.addEventListener(A.kb,function(D){return function(F){return z[D.kb](F.data)}}(A)),A={kb:A.kb}}}
function f(v){N(function(){function w(){for(var x=y.getElementsByTagName("iframe"),z=x.length,A=0;A<z;A++)e(x[A],v)}var y=T("document");w();Qp(w)})}function g(v,w){var y,x;function z(){wa=aq(function(){return{url:W,title:U,jf:K,jh:v.getCurrentTime(),playbackRate:P}},w.Ud,v.getIframe());K=0;U=W="";P=1;return A}function A(Y){switch(Y){case t.PLAYING:K=Math.round(v.getDuration());W=v.getVideoUrl();if(v.getVideoData){var oa=v.getVideoData();U=oa?oa.title:""}P=v.getPlaybackRate();w.bh?wa.zc("start"):wa.pd();
J=p(w.di,w.ci,v.getDuration());return C(Y);default:return A}}function C(){xa=v.getCurrentTime();S=dq().getTime();wa.ki();ea();return D}function D(Y){var oa;switch(Y){case t.ENDED:return M(Y);case t.PAUSED:oa="pause";case t.BUFFERING:var Sa=v.getCurrentTime()-xa;oa=1<Math.abs((dq().getTime()-S)/1E3*P-Sa)?"seek":oa||"buffering";v.getCurrentTime()&&(w.ah?wa.zc(oa):wa.pd());ca();return F;case t.UNSTARTED:return z(Y);default:return D}}function F(Y){switch(Y){case t.ENDED:return M(Y);case t.PLAYING:return C(Y);
case t.UNSTARTED:return z(Y);default:return F}}function M(){for(;x;){var Y=y;bq(x);Y()}w.$g&&wa.zc("complete",1);return z(t.UNSTARTED)}function Q(){}function ca(){x&&(bq(x),x=0,y=Q)}function ea(){if(J.length&&0!==P){var Y=-1,oa;do{oa=J[0];if(oa.Ra>v.getDuration())return;Y=(oa.Ra-v.getCurrentTime())/P;if(0>Y&&(J.shift(),0===J.length))return}while(0>Y);y=function(){x=0;y=Q;0<J.length&&J[0].Ra===oa.Ra&&(J.shift(),wa.zc("progress",oa.wf,oa.Af));ea()};x=cq(y,1E3*Y)}}var wa,J=[],K,W,U,P,xa,S,va=z(t.UNSTARTED);
x=0;y=Q;return{onStateChange:function(Y){va=va(Y)},onPlaybackRateChange:function(Y){xa=v.getCurrentTime();S=dq().getTime();wa.pd();P=Y;ca();ea()}}}function h(v){for(var w=v.split(","),y=w.length,x=[],z=0;z<y;z++){var A=parseInt(w[z],10);isNaN(A)||100<A||0>A||x.push(A/100)}x.sort(function(C,D){return C-D});return x}function l(v){for(var w=v.split(","),y=w.length,x=[],z=0;z<y;z++){var A=parseInt(w[z],10);isNaN(A)||0>A||x.push(A)}x.sort(function(C,D){return C-D});return x}function p(v,w,y){var x=v.map(function(C){return{Ra:C,
Af:C,wf:void 0}});if(!w.length)return x;var z=w.map(function(C){return{Ra:C*y,Af:void 0,wf:C}});if(!x.length)return z;var A=x.concat(z);A.sort(function(C,D){return C.Ra-D.Ra});return A}function n(v){var w=!!v.vtp_captureStart,y=!!v.vtp_captureComplete,x=!!v.vtp_capturePause,z=h(v.vtp_progressThresholdsPercent+""),A=l(v.vtp_progressThresholdsTimeInSeconds+""),C=!!v.vtp_fixMissingApi;if(w||y||x||z.length||A.length){var D={bh:w,$g:y,ah:x,ci:z,di:A,pf:C,Ud:void 0===v.vtp_uniqueTriggerId?"":v.vtp_uniqueTriggerId},
F=T("YT"),M=function(){f(D)};N(v.vtp_gtmOnSuccess);if(F)F.ready&&F.ready(M);else{var Q=T("onYouTubeIframeAPIReady");jq("onYouTubeIframeAPIReady",function(){Q&&Q();M()});N(function(){for(var ca=T("document"),ea=ca.getElementsByTagName("script"),wa=ea.length,J=0;J<wa;J++){var K=ea[J].getAttribute("src");if(b(K,"iframe_api")||b(K,"player_api"))return}for(var W=ca.getElementsByTagName("iframe"),U=W.length,P=0;P<U;P++)if(!u&&d(W[P],D.pf)){R("https://www.youtube.com/iframe_api");u=!0;break}})}}else N(v.vtp_gtmOnSuccess)}
var q=["www.youtube.com","www.youtube-nocookie.com"],t={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},r,u=!1;(function(v){Z.__ytl=v;Z.__ytl.g="ytl";Z.__ytl.h=!0;Z.__ytl.priorityOverride=0})(function(v){v.vtp_triggerStartOption?n(v):qk(function(){n(v)})})}();



Z.b.aev=["google"],function(){function a(r,u){var v=Qh(r,"gtm");if(v)return v[u]}function b(r,u,v,w){w||(w="element");var y=r+"."+u,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(r,w);if(z&&(x=v(z),n[y]=x,q.push(y),35<q.length)){var A=q.shift();delete n[A]}}return x}function c(r,u,v){var w=a(r,t[u]);return void 0!==w?w:v}function d(r,u){if(!r)return!1;var v=e(eq());Na(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++){var x=u[y];if(x.hasOwnProperty("is_regex"))if(x.is_regex)try{x=
new RegExp(x.domain)}catch(A){continue}else x=x.domain;if(x instanceof RegExp){if(x.test(r))return!1}else{var z=x;if(0!=z.length){if(0<=e(r).indexOf(z))return!1;w.push(e(z))}}}return!Xq(r,w)}function e(r){p.test(r)||(r="http://"+r);return Yg($g(r),"HOST",!0)}function f(r,u,v){switch(r){case "SUBMIT_TEXT":return b(u,"FORM."+r,g,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+r,h);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",
v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function g(r){switch(r.tagName.toLowerCase()){case "input":return fg(r,"value");case "button":return gg(r);default:return null}}function h(r){if("form"===r.tagName.toLowerCase()&&r.elements){for(var u=0,v=0;v<r.elements.length;v++)Lp(r.elements[v])&&
u++;return u}}function l(r,u,v){var w=a(r,"interactedFormField");return w&&fg(w,u)||v}var p=/^https?:\/\//i,n={},q=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(r){Z.__aev=r;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=
0})(function(r){var u=r.vtp_gtmEventId,v=r.vtp_defaultValue,w=r.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||v;case "TEXT":return b(u,w,gg)||v;case "URL":var x;a:{var z=String(a(u,"elementUrl")||v||""),A=$g(z),C=String(r.vtp_component||"URL");switch(C){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,r.vtp_affiliatedDomains);break a;default:x=Yg(A,C,r.vtp_stripWww,r.vtp_defaultPages,r.vtp_queryKey)}}return x;case "ATTRIBUTE":var D;if(void 0===r.vtp_attribute)D=c(u,
w,v);else{var F=r.vtp_attribute,M=a(u,"element");D=M&&fg(M,F)||v||""}return D;case "MD":var Q=r.vtp_mdValue,ca=b(u,"MD",Xp);return Q&&ca?$p(ca,Q)||v:ca||v;case "FORM":return f(String(r.vtp_component||"SUBMIT_TEXT"),u,v);default:var ea=c(u,w,v);rq(ea,"aev",r.vtp_gtmEventId);return ea}})}();Z.b.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.priorityOverride=0})(function(a){var b=E(a),c=b;c[Vd.Ma]=null;c[Vd.wg]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.b.read_data_layer=["google"],function(){function a(b,c){return{key:c}}(function(b){Z.__read_data_layer=b;Z.__read_data_layer.g="read_data_layer";Z.__read_data_layer.h=!0;Z.__read_data_layer.priorityOverride=0})(function(b){var c=b.vtp_keyPatterns||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!m(f))throw d(e,{},"Keys must be strings.");try{var g;a:{for(var h=0;h<c.length;h++){var l=f,p=c[h];if(!Ie.exec(p))throw Error("Invalid key wildcard");var n=p.indexOf(".*"),q=-1!==n&&n===
p.length-2,t=q?p.slice(0,p.length-2):p,r;b:if(0===l.length)r=!1;else{for(var u=l.split("."),v=0;v<u.length;v++)if(!He.exec(u[v])){r=!1;break b}r=!0}if(!r||t.length>l.length||!q&&l.length!=p.length?0:q?0===l.indexOf(t)&&(l===t||"."==l.charAt(t.length)):l===t){g=!0;break a}}g=!1}if(g)return}catch(w){throw d(e,{},"Invalid key filter.");}throw d(e,{},"Prohibited read from data layer variable: "+f+".");},L:a}})}();
Z.b.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.g="remm";Z.__remm.h=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var l=new RegExp(h,e);if(l.test(b)){var p=c[g].value;a.vtp_replaceAfterMatch&&(p=String(b).replace(l,p));f=p;break}}rq(f,"remm",a.vtp_gtmEventId);return f})}();Z.b.logging=["google"],function(){function a(){return{}}(function(b){Z.__logging=b;Z.__logging.g="logging";Z.__logging.h=!0;Z.__logging.priorityOverride=0})(function(b){var c=b.vtp_environments||"debug",d=b.vtp_createPermissionError;return{assert:function(e){if("all"!==c&&!Uq.Ih())throw d(e,{},"Logging is not enabled in all environments");},L:a}})}();
Z.b.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.g="smm";Z.__smm.h=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Yq(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;rq(d,"smm",a.vtp_gtmEventId);return d})}();



Z.b.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.priorityOverride=0})(function(a){N(a.vtp_gtmOnFailure)})}();

Z.b.zone=[],function(){function a(n){for(var q=n.vtp_boundaries||[],t=0;t<q.length;t++)if(!q[t])return!1;return!0}function b(n){var q=je.C,t=q+":"+n.vtp_gtmTagId,r=hq("gtm.uniqueEventId")||0,u=ik(function(){return new g}),v=a(n),w=n.vtp_enableTypeRestrictions?n.vtp_whitelistedTypes.map(function(D){return D.typeId}):null;w=w&&mb(w,f);if(u.registerZone(t,r,v,w))for(var y=n.vtp_childContainers.map(function(D){return D.publicId}),x=0;x<y.length;x++){var z=String(y[x]);if(u.registerChild(z,q,t)){var A=
0!==z.indexOf("GTM-");if(A){var C=function(D,F){iq(arguments)};C("js",new Date);p?(C("config",z),l||pq(z,A)):(O.addTargetToGroup(z),Jn({},z))}else pq(z,A)}}}var c={active:!1,isAllowed:function(){return!1},Kh:function(){return!1}},d={active:!0,isAllowed:function(){return!0},Kh:function(){return!0}},e={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},f={cl:["ecl"],ecl:["cl"],ehl:["hl"],hl:["ehl"]},g=function(){this.a={};this.i={}};g.prototype.checkState=function(n,q){var t=
this.a[n];if(!t)return d;var r=this.checkState(t.vf,q);if(!r.active)return c;for(var u=[],v=0;v<t.Yd.length;v++){var w=this.i[t.Yd[v]];w.Lb(q)&&u.push(w)}return u.length?{active:!0,isAllowed:function(y,x){x=x||[];var z=r.isAllowed;if(!z(y,x))return!1;for(var A=0;A<u.length;++A)if(u[A].isAllowed(y,x))return!0;return!1}}:c};g.prototype.unregisterChild=function(n){delete this.a[n]};g.prototype.registerZone=function(n,q,t,r){var u=this.i[n];if(u)return u.m(q,t),!1;if(!t)return!1;this.i[n]=new h(q,r);
return!0};g.prototype.registerChild=function(n,q,t){var r=this.a[n];if(!r&&O[n]||r&&r.vf!==q)return!1;if(r)return r.Yd.push(t),!1;this.a[n]={vf:q,Yd:[t]};return!0};var h=function(n,q){this.a=[{eventId:n,Lb:!0}];this.i=null;if(q){this.i={};for(var t=0;t<q.length;t++)this.i[q[t]]=!0}};h.prototype.m=function(n,q){var t=this.a[this.a.length-1];n<=t.eventId||t.Lb!=q&&this.a.push({eventId:n,Lb:q})};h.prototype.Lb=function(n){if(!this.a||0==this.a.length)return!1;for(var q=this.a.length-1;0<=q;q--)if(this.a[q].eventId<=
n)return this.a[q].Lb;return!1};h.prototype.isAllowed=function(n,q){q=q||[];if(!this.i||e[n]||this.i[n])return!0;for(var t=0;t<q.length;++t)if(this.i[q[t]])return!0;return!1};var l=!1;var p=!0;p=!1;(function(n){Z.__zone=n;Z.__zone.g="zone";Z.__zone.h=
!0;Z.__zone.priorityOverride=0})(function(n){b(n);N(n.vtp_gtmOnSuccess)})}();
Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var p=L.createElement("script");p.async=!1;p.type="text/javascript";p.id=h.id;p.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(p.charset=h.charset);var n=h.getAttribute("data-gtmsrc");n&&(p.src=n,Zf(p,l));d.insertBefore(p,null);n||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];h.firstChild;)q.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,q,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(t){N(g)}}}var c=function(d){if(L.body){var e=d.vtp_gtmOnFailure,f=sq(d.vtp_html,d.vtp_gtmOnSuccess,
e),g=f.yd,h=f.K;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(L.body,hg(g),h,e)()}else cq(function(){c(d)},200)};Z.__html=c;Z.__html.g="html";Z.__html.h=
!0;Z.__html.priorityOverride=0}();






Z.b.evl=["google"],function(){function a(){var f=Number(hq("gtm.start"))||0;return dq().getTime()-f}function b(f,g,h,l){function p(){if(!Lg(f.target)){g.has(d.nc)||g.set(d.nc,""+a());g.has(d.jd)||g.set(d.jd,""+a());var q=0;g.has(d.qc)&&(q=Number(g.get(d.qc)));q+=100;g.set(d.qc,""+q);if(q>=h){var t=Ep(f.target,"gtm.elementVisibility",[g.a]),r=Ng(f.target);t["gtm.visibleRatio"]=Math.round(1E3*r)/10;t["gtm.visibleTime"]=h;t["gtm.visibleFirstTime"]=Number(g.get(d.jd));t["gtm.visibleLastTime"]=Number(g.get(d.nc));
iq(t);l()}}}if(!g.has(d.Cb)&&(0==h&&p(),!g.has(d.cb))){var n=T("self").setInterval(p,100);g.set(d.Cb,n)}}function c(f){f.has(d.Cb)&&(T("self").clearInterval(Number(f.get(d.Cb))),f.i(d.Cb))}var d={Cb:"polling-id-",jd:"first-on-screen-",nc:"recent-on-screen-",qc:"total-visible-time-",cb:"has-fired-"},e=function(f,g){this.element=f;this.a=g};e.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.a)};e.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.a)};e.prototype.set=function(f,g){this.element.setAttribute("data-gtm-vis-"+f+this.a,g)};e.prototype.i=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.a)};(function(f){Z.__evl=f;Z.__evl.g="evl";Z.__evl.h=!0;Z.__evl.priorityOverride=0})(function(f){function g(){var y=!1,x=null;if("CSS"===l){try{x=Hg(p)}catch(F){I(46)}y=!!x&&v.length!=x.length}else if("ID"===l){var z=L.getElementById(p);z&&(x=[z],y=1!=v.length||v[0]!==z)}x||(x=[],y=0<v.length);if(y){for(var A=0;A<v.length;A++){var C=
new e(v[A],r);c(C)}v=[];for(var D=0;D<x.length;D++)v.push(x[D]);0<=w&&Tg(w);0<v.length&&(w=Sg(h,v,[t]))}}function h(y){var x=new e(y.target,r);y.intersectionRatio>=t?x.has(d.cb)||b(y,x,q,"ONCE"===u?function(){for(var z=0;z<v.length;z++){var A=new e(v[z],r);A.set(d.cb,"1");c(A)}Tg(w);if(n&&Pp)for(var C=0;C<Pp.length;C++)Pp[C]===g&&Pp.splice(C,1)}:function(){x.set(d.cb,"1");c(x)}):(c(x),"MANY_PER_ELEMENT"===u&&x.has(d.cb)&&(x.i(d.cb),x.i(d.qc)),x.i(d.nc))}var l=f.vtp_selectorType,p;"ID"===l?p=String(f.vtp_elementId):
"CSS"===l&&(p=String(f.vtp_elementSelector));var n=!!f.vtp_useDomChangeListener,q=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,t=(Number(f.vtp_onScreenRatio)||50)/100,r=f.vtp_uniqueTriggerId,u=f.vtp_firingFrequency,v=[],w=-1;g();n&&Qp(g);N(f.vtp_gtmOnSuccess)})}();


var Bt={};Bt.macro=function(a){if(Bp.md.hasOwnProperty(a))return Bp.md[a]},Bt.onHtmlSuccess=Bp.hf(!0),Bt.onHtmlFailure=Bp.hf(!1);Bt.dataLayer=Mh;Bt.callback=function(a){Dh.hasOwnProperty(a)&&La(Dh[a])&&Dh[a]();delete Dh[a]};Bt.bootstrap=0;Bt._spx=!1;function Ct(){O[je.C]=Bt;eb(Eh,Z.b);Nd=Nd||Bp;Od=fe}
function Dt(){lg.gtm_3pds=!0;lg.gtag_cs_api=!0;O=B.google_tag_manager=B.google_tag_manager||{};tm();if(O[je.C]){var a=O.zones;a&&a.unregisterChild(je.C);}else{for(var b=data.resource||{},c=b.macros||[],d=
0;d<c.length;d++)Gd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)Jd.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)Id.push(g[h]);for(var l=b.rules||[],p=0;p<l.length;p++){for(var n=l[p],q={},t=0;t<n.length;t++)q[n[t][0]]=Array.prototype.slice.call(n[t],1);Hd.push(q)}Ld=Z;Md=Sq;var r=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;Ko();ne=new me(r);if(void 0!==u)for(var w=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");Eh[x]=w}No(v);Ct();Ap();
lk=!1;mk=0;if("interactive"==L.readyState&&!L.createEventObject||"complete"==L.readyState)ok();else{dg(L,"DOMContentLoaded",ok);dg(L,"readystatechange",ok);if(L.createEventObject&&L.documentElement.doScroll){var z=!0;try{z=!B.frameElement}catch(M){}z&&pk()}dg(B,"load",ok)}Zn=!1;"complete"===L.readyState?ao():dg(B,"load",ao);
a:{if(!il)break a;B.setInterval(jl,864E5);}Bh=(new Date).getTime();}}
(function(a){var e=!0;
e=!1;if(e){a();return}var f=function(){var p=B["google.tagmanager.debugui2.queue"];p||(p=[],B["google.tagmanager.debugui2.queue"]=p,$f("https://www.googletagmanager.com/debug/bootstrap"));return p},g="x"===Yg(B.location,"query",
!1,void 0,"gtm_debug");if(!g&&L.referrer){var h=$g(L.referrer);g="tagassistant.google.com"===Xg(h,"host")}if(!g){var l=Yh("__TAG_ASSISTANT");g=l.length&&l[0].length}B.__TAG_ASSISTANT_API&&(g=!0);if(g&&Xf){f().push({messageType:"CONTAINER_STARTING",data:{scriptSource:Xf,resume:function(){a()}}});return}a()})(Dt);

})()
