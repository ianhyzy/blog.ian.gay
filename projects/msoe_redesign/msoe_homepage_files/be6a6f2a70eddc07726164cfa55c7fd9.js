
// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (ToggleFeatured == null) var ToggleFeatured = {};
ToggleFeatured._path = '/dwr';
ToggleFeatured.toggleFeatured = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(ToggleFeatured._path, 'ToggleFeatured', 'toggleFeatured', p0, p1, p2, p3, callback);
}

;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.tips=="undefined"){jive.tips={}}jive.tips.welcomeSatNav=function(A,C){var B=C||new soy.StringBuilder();B.append('<h4 class="font-face-deco">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("tips.welcome.satnav.title"),[A.data.displayUserName])),"</h4><p>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("tips.welcome.satnav.body"),[]))," ",(A.data.mobileEnabled)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("tips.welcome.satnav.mobile.body"),[])):"","</p>");return C?"":B.toString()};jive.tips.browseActionListMode=function(A,C){var B=C||new soy.StringBuilder();B.append('<h4 class="font-face-deco">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("tips.browse.global.action.title"),[])),"</h4><p>");jive.shared.soy.i18nHelper({i18nKey:"tips.browse.global.action.list.body",arg0:'<span class="jive-icon-sml jive-icon-gear"></span>',noAutoEscape:"true"},B);B.append("</p>");return C?"":B.toString()};jive.tips.socialActionsTip=function(A,C){var B=C||new soy.StringBuilder();B.append("<p>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("tips.content.global.socialactions.body"),[])),"</p>");return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.autosearch=="undefined"){jive.autosearch={}}jive.autosearch.spotlightPopup=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="jive-spotlight-search-result" data-component="popup" style="display: none;"><div>');return C?"":B.toString()};jive.autosearch.spotlightView=function(A,C){var B=C||new soy.StringBuilder();B.append("<div>",(A.view=="frequent"||A.view=="recent"||A.view=="bookmarks")?'<p class="j-pop-desc"><strong>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.view.default.header"),[A.communityName]))+'</strong> <span class="j-ui-elem j-spotlight-arrow"></span></p><h5>'+((!A.availableViews["bookmarks"])?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.view.nobookmarks.title"),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.view.default.title"),[])))+'</h5><nav class="j-spotlightnav font-color-meta" >'+((A.availableViews["frequent"])?'<a data-component="button" data-view="frequent" class="'+((A.view=="frequent")?"j-active":"")+'">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.view.frequent.caption"),[]))+"</a>":"")+((A.availableViews["recent"])?'<a data-component="button" data-view="recent" class="'+((A.view=="recent")?"j-active":"")+'">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.view.recent.caption"),[]))+"</a>":"")+((A.availableViews["bookmarks"])?'<a data-component="button" data-view="bookmarks" class="'+((A.view=="bookmarks")?"j-active":"")+' j-last">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.view.bookmarks.caption"),[]))+"</a>":"")+"</nav>":((A.availableViews["frequent"]||A.availableViews["recent"]||A.availableViews["bookmarks"])?'<p class="j-pop-desc">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.view.search.header.history"),[]))+"</p>":"")+((A.view=="all"||A.view=="filtered")?"<h5>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.view.search.title"),[]))+' <span class="spinner" data-component="progressmeter" data-mode="undetermined" data-active="false" data-size="small"></span></h5>':"")+((A.availableViews["filtered"]&&A.availableViews["all"])?'<nav class="j-spotlightnav font-color-meta trimmed"><a data-component="button" data-view="all" class="'+((A.view=="all")?"j-active":"")+'">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.view.all.caption"),[]))+'</a><a data-component="button" data-view="filtered" class="'+((A.view=="filtered")?"j-active":"")+' j-last">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.view.filtered.caption"),[A.filterDisplayName]))+"</a></nav>":""),'<div class="j-spotlight-find" data-component="list" data-wrap="true"><div data-component="loadingpanel" class="j-spotlight-working font-color-meta"><div>',(A.view=="all"||A.view=="filtered")?"<p>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.view.search.searching.text"),[]))+"</p>":"<p>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.view.history.loading.text"),[]))+"</p>",'</div><span data-component="progressmeter" data-mode="undetermined" data-active="false"></span><div></div></div>');return C?"":B.toString()};jive.autosearch.results=function(A,C){var B=C||new soy.StringBuilder();if(A.results.pages&&A.results.pages.length){B.append('<div class="j-results" data-type="contents">',(!(A.view=="bookmarks")&&!(A.view=="filtered"))?'<h4 class="font-color-meta" id="header_content">Website Content</h4>':"");jive.autosearch.resultSection(soy.$$augmentData(A,{list:A.results.pages,type:"page",max:(!(A.view=="bookmarks")&&!(A.view=="filtered"))?"5":""}),B);B.append("</div>")}if(A.results.content&&A.results.content.length){B.append('<div class="j-results" data-type="contents">',(!(A.view=="bookmarks")&&!(A.view=="filtered"))?'<h4 class="font-color-meta" id="header_content">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.search_for.content"),[]))+"</h4>":"");jive.autosearch.resultSection(soy.$$augmentData(A,{list:A.results.content,type:"content",max:(!(A.view=="bookmarks")&&!(A.view=="filtered"))?"5":""}),B);B.append("</div>")}if(A.results.places&&A.results.places.length){B.append('<div class="j-results" data-type="places"><h4 class="font-color-meta"  id="header_places">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.search_for.places"),[])),"</h4>");jive.autosearch.resultSection(soy.$$augmentData(A,{list:A.results.places,type:"places",max:5}),B);B.append("</div>")}if(A.results.people&&A.results.people.length){B.append('<div class="j-results" data-type="people"><h4 class="font-color-meta" id="header_people">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.search_for.people"),[])),"</h4>");jive.autosearch.resultSection(soy.$$augmentData(A,{list:A.results.people,type:"people",max:5}),B);B.append("</div>")}B.append(((!A.results.content||!A.results.content.length)&&(!A.results.people||!A.results.people.length)&&(!A.results.places||!A.results.places.length))?'<div class="j-spotlight-empty font-color-meta">'+((A.view=="frequent")?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.view.frequent.empty.text"),[])):(A.view=="recent")?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.view.recent.empty.text"),[])):(A.view=="bookmarks")?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.view.bookmarks.empty.text"),[])):(A.view=="all"||A.view=="filtered")?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.view.search.empty.text"),[])):"")+"</div>":"");return C?"":B.toString()};jive.autosearch.resultSection=function(A,C){var B=C||new soy.StringBuilder();B.append('<ol aria-labelledby="header_',soy.$$escapeHtmlAttribute(A.type),'" role="listbox">');jive.autosearch.resultList(A,B);B.append((A.view=="bookmarks")?'<li class="j-listitem font-color-meta" data-component="listitem" role="option"><a class="more" href="'+jive.soy.func.normalizeUrl(window._jive_base_url,"/bookmarks")+'">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.history.bookmarks.link"),[]))+'<span class="arrow-right"></span></a></li>':(A.view=="all"||A.view=="filtered")?'<li class="j-listitem'+((A.max&&A.list.length>A.max)?" j-inactive":"")+' font-color-meta" data-component="listitem" role="option">'+((A.type=="content")?'<a class="more" href="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/search.jspa")))+"?q="+soy.$$escapeUri(A.searchTerm)+"&facet="+soy.$$escapeUri(A.type)+((A.view=="filtered")?"&"+soy.$$escapeUri(A.filterType)+"="+soy.$$escapeUri(A.filter):"")+'" >'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.results.all."+A.type+".link"),[]))+'<span class="arrow-right"></span></a>':(A.type=="page")?'<a class="more" href="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/search.jspa")))+"?q="+soy.$$escapeUri(A.searchTerm)+"&facet=content"+((A.view=="filtered")?"&"+soy.$$escapeUri(A.filterType)+"="+soy.$$escapeUri(A.filter):"")+'&type=page" >See all website content results<span class="arrow-right"></span></a>':'<a class="more" href="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/search.jspa")))+"?q="+soy.$$escapeUri(A.searchTerm)+"&facet="+soy.$$escapeUri(A.type)+((A.view=="filtered")?"&"+soy.$$escapeUri(A.filterType)+"="+soy.$$escapeUri(A.filter):"")+'" >'+((A.type=="places")?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.results.all.place.link"),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.results.all."+A.type+".link"),[])))+'<span class="arrow-right"></span></a>')+"</li>":(A.view=="recent")?'<li class="j-listitem'+((A.max&&A.list.length>A.max)?" j-inactive":"")+' font-color-meta" data-component="listitem" role="option"><a class="more" href="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/"+A.type)))+"?filterID=historyarchetype%5B"+((A.type=="places")?"containers":soy.$$escapeUri(A.type))+'%5D" >'+((A.type=="places")?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.history.recent.containers.link"),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.history.recent."+A.type+".link"),[])))+'<span class="arrow-right"></span></a></li>':"");if(A.view!="bookmarks"&&A.max&&A.list.length>A.max){B.append('<li class="j-listitem font-color-meta" data-component="listitem" role="option"><a href="#" class="more" data-component="button" data-command="more"><span role="presentation" aria-hidden="true">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.show.more"),[A.list.length-5])),'</span><span role="img" class="arrow-down" aria-hidden="true"></span>');jive.autosearch.showMoreAccessibleLabel({type:A.type,numMoreResults:A.list.length-5},B);B.append("</a></li>")}B.append("</ol>");return C?"":B.toString()};jive.autosearch.showMoreAccessibleLabel=function(A,C){var B=C||new soy.StringBuilder();B.append('<span class="j-508-label" id="',soy.$$escapeHtmlAttribute(A.type),'-show-more-label">',(A.type=="places")?(A.numMoreResults==1)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.show.more.places.singular"),[A.numMoreResults])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.show.more.places.plural"),[A.numMoreResults])):(A.type=="people")?(A.numMoreResults==1)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.show.more.people.singular"),[A.numMoreResults])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.show.more.people.plural"),[A.numMoreResults])):(A.numMoreResults==1)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.show.more.content.singular"),[A.numMoreResults])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.show.more.content.plural"),[A.numMoreResults])),"</span>");return C?"":B.toString()};jive.autosearch.resultList=function(A,G){var C=G||new soy.StringBuilder();var F=A.list;var E=F.length;for(var D=0;D<E;D++){var B=F[D];C.append('<li data-component="listitem" class="j-listitem ',(A.max&&D>=A.max)?"j-inactive":""," ",(A.type=="people")?"j-listitem-people":"",'" role="option">');switch(A.type){case"page":jive.autosearch.pageItem({item:B},C);break;case"content":jive.autosearch.contentItem({item:B},C);break;case"people":jive.autosearch.peopleItem({item:B},C);break;case"places":jive.autosearch.placeItem({item:B},C);break}C.append("</li>")}return G?"":C.toString()};jive.autosearch.contentItem=function(A,C){var B=C||new soy.StringBuilder();B.append('<a href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(A.item.resources.html.ref)),'" class="j-result-bookmark">');if(A.item.type=="favorite"){B.append('<span data-id="',soy.$$escapeHtmlAttribute(A.item.id),'" class="j-remove-mark jive-icon-med jive-icon-bookmark-ribbon" data-component="button" data-command="remove"></span>');if(A.item.favoriteObject.type=="url"){jive.autosearch.contentItemDetail(A,B)}else{jive.autosearch.contentItemDetail({item:A.item.favoriteObject},B)}}else{jive.autosearch.contentItemDetail(A,B)}B.append("</a>");return C?"":B.toString()};jive.autosearch.pageItem=function(A,C){var B=C||new soy.StringBuilder();B.append('<a href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(A.item.resources.html.ref)),'" class="j-result-bookmark">');jive.autosearch.pageItemDetail(A,B);B.append("</a>");return C?"":B.toString()};jive.autosearch.contentItemDetail=function(A,C){var B=C||new soy.StringBuilder();jive.shared.displayutil.icon(soy.$$augmentData(A.item,{size:"med"}),B);B.append((A.item.subject)?'<span class="result-title">'+soy.$$escapeHtml(A.item.subject)+'</span><span class="j-508-label">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.left_paren"),[]))+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.access.content.type."+A.item.type),[]))+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.right_paren"),[]))+"</span>":(A.item.parentContent&&A.item.parentContent.name)?'<span class="result-title">'+soy.$$escapeHtml(A.item.parentContent.name)+'</span><span class="j-508-label">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.left_paren"),[]))+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.access.content.type."+A.item.parentContent.type),[]))+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.right_paren"),[]))+"</span>":"",(A.item.author)?' <em class="font-color-meta-light">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("userbar.by.text"),[]))+" "+soy.$$escapeHtml(A.item.author.displayName)+", "+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("userbar.posted.text"),[]))+" "+soy.$$escapeHtml((A.item.updatedDate?dateFormat(parseFloat(A.item.updatedDate),"mmm d, yyyy"):""))+"</em>":"",(A.item.displayExternalAccess)?'<span class="font-color-meta-light j-browse-external-access"><em>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("partner.browse.ext_access"),[]))+"</em></span>":"");return C?"":B.toString()};jive.autosearch.pageItemDetail=function(A,C){var B=C||new soy.StringBuilder();jive.shared.displayutil.icon(soy.$$augmentData(A.item,{size:"med"}),B);B.append((A.item.subject)?'<span class="result-title">'+soy.$$escapeHtml(A.item.subject)+'</span><span class="j-508-label">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.left_paren"),[]))+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.access.content.type."+A.item.type),[]))+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.right_paren"),[]))+"</span>":(A.item.parentContent&&A.item.parentContent.name)?'<span class="result-title">'+soy.$$escapeHtml(A.item.parentContent.name)+'</span><span class="j-508-label">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.left_paren"),[]))+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.access.content.type."+A.item.parentContent.type),[]))+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.right_paren"),[]))+"</span>":"");return C?"":B.toString()};jive.autosearch.peopleItem=function(A,C){var B=C||new soy.StringBuilder();B.append('<a href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(A.item.resources.html.ref)),'">');jive.shared.displayutil.avatar({enabled:true,username:A.item.jive.username,id:null,displayName:A.item.displayName,visible:true,prop:null,avatarID:A.item.thumbnailId,size:24,hideTooltip:true,hideLink:true},B);B.append('<span class="result-title">',soy.$$escapeHtml(A.item.displayName),'</span><span class="j-508-label">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.left_paren"),[])),soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.user"),[])),soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.right_paren"),[])),"</span>",(A.item.title||A.item.department)?'<em class="font-color-meta-light">'+((A.item.title)?soy.$$escapeHtml(A.item.title)+" ":"")+((A.item.title&&A.item.department)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.result.people.in"),[]))+" ":"")+((A.item.department)?soy.$$escapeHtml(A.item.department):"")+"</em>":"",(A.item.displayExternalContributor)?'<span class="font-color-meta-light j-browse-external-access"><em>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("partner.browse.external.contributor"),[]))+"</em></span>":"","</a>");return C?"":B.toString()};jive.autosearch.placeItem=function(A,C){var B=C||new soy.StringBuilder();B.append('<a href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(A.item.resources.html.ref)),'"><span class="jive-icon-med jive-icon-',soy.$$escapeHtmlAttribute(A.item.type),'"></span><span class="result-title">',soy.$$escapeHtml(A.item.name),'</span><span class="j-508-label">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.left_paren"),[])),soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global."+A.item.type),[])),soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.right_paren"),[])),"</span>",(A.item.displayExternalAccess)?'<span class="font-color-meta-light j-browse-external-access"><em>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("partner.browse.ext_access"),[]))+"</em></span>":"","</a>");return C?"":B.toString()};jive.autosearch.overlay=function(A,C){var B=C||new soy.StringBuilder();B.append((A.type=="bookmark")?'<div class="j-tooltip" role="alert"><span class="jive-icon-med jive-icon-bookmark-ribbon"></span><span class="j-tooltip-content">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.placeholder.bookmark"),[]))+'</span><span class="j-ui-elem j-pointer"></span></div>':"");return C?"":B.toString()}
;
define("jive.component.PopupView",["jquery"],function(b){var a=jive.oo.Class.extend(function(c){c.init=function(d){this.$element=b(d)};this.toString=function(){return"[object PopupView]"};this.show=function(f,e,h,d,g){e=e?e:f;h=h!=null?h:true;d=d!=null?d:false;this.trigger=f;this.$element.popover({context:e,closeOnClick:true,closeOtherPopovers:h,putBack:true,destroyOnClose:false,focusPopover:d})};this.hide=function(){this.$element.trigger("close")};this.getTrigger=function(){return this.trigger};this.getState=function(){return this.$element.is(":visible")?"visible":"hidden"}});a.toString=function(){return"[wrapper PopupView]"};a.getBindName=function(){return"PopupView"};return a});
;
define("jive.component.ProgressMeterView",["jquery"],function(a){var b=jive.oo.Class.extend(function(c){c.init=function(d){this.$element=a(d)};this.toString=function(){return"[object ProgressMeterView]"};this.start=function(){if(!this.spinner){this.spinner=new jive.loader.LoaderView({inline:true,showLabel:false,size:this.$element.attr("data-size")});this.spinner.appendTo(this.$element);this.$element.attr("data-active",true)}};this.stop=function(){if(this.spinner){this.spinner.getContent().remove();this.spinner.destroy();this.$element.attr("data-active",false)}};this.getMode=function(){var d=this.$element.data("mode");return d?d:"undetermined"};this.isActive=function(){var d=this.$element.data("active");return d?d:false}});b.toString=function(){return"[wrapper ProgressMeterView]"};b.getBindName=function(){return"ProgressMeterView"};return b});
;
(function(a){a.fn.view=function(b,c){if(!jQuery.isFunction(b)){throw"IllegalViewParameterException"}if(!c&&b.getBindName){c=b.getBindName()}if(!c){throw"IllegalBindParameterException"}var e;if(this.length){var d=this.first();e=d.data(c);if(e==null){e=new b(d.get(0));d.data(c,e)}else{if(!(e instanceof b)){throw"PropertyAlreadyBoundException"}}}return e}})(jQuery);
;
define("jive.component.list",["jquery"],function(b){var a={};a.ListView=jive.oo.Class.extend(function(c){this.init=function(d){this.$element=b(d)};this.toString=function(){return"[object ListView]"};this.allowWrap=function(){return this.$element.data("wrap")==true};this.getListItemElements=function(){return this.$element.find("[data-component='listitem']:visible").get()};this.getListItems=function(){var d=[];b(this.getListItemElements()).each(function(e,f){d.push(b(f).view(a.ListItemView))});return d};this.getSelectedElement=function(){return b(this.getListItemElements()).filter(".j-selected").get(0)};this.getSelectedIndex=function(){var d=this.getSelectedElement();if(d){return b(this.getListItemElements()).index(d)}else{return -1}};this.select=function(e){var d=this.getListItemElements();if(b.isNumeric(e)){if(this.allowWrap()){e=this.wrapIndex(e)}e=d[e]}b(d).filter(".j-selected").removeClass("j-selected");b(e).addClass("j-selected")};this.incriment=function(e){if(e==0){return}var d=this.getSelectedIndex();if(e<0&&d==-1){e++}e=d+e;this.select(e)};c.wrapIndex=function(e){var d=this.getListItemElements().length;e=e%d;e=e<0?d+e:e;return e}});a.ListView.toString=function(){return"[wrapper ListView]"};a.ListView.getBindName=function(){return"ListView"};a.ListItemView=jive.oo.Class.extend(function(c){this.init=function(d){this.$element=b(d)};this.toString=function(){return"[object ListItemView]"};this.getListElement=function(){return this.$element.closest("[data-component='list']").get()};this.getList=function(){return b(this.getListElement()).view(item.ListView)};this.select=function(){this.getList().select(this.$element.get())}});a.ListItemView.toString=function(){return"[wrapper ListItemView]"};a.ListItemView.getBindName=function(){return"ListItemView"};return a});
;
jive.DeferredRestService=jive.oo.Class.extend(function(a){var b=jQuery;a.resourceType="abstract";a.displayGenericErrorMessages=true;a.putOnUpdate=false;a.init=function(d){var c=this;this.pluralizedResourceType=this.pluralizedResourceType||this.resourceType+"s";var e=jive.rest.url("/"+this.pluralizedResourceType);this.RESOURCE_ENDPOINT=(d&&d.forceSecure)?jive.secure(e):e;this.POST_RESOURCE_ENDPOINT=this.RESOURCE_ENDPOINT;this.defaultParams={}};this.suppressGenericErrorMessages=function(){this.displayGenericErrorMessages=false};a.commonAjaxRequest=function(j,e,d,h){var g=this,i,c,f;e=e.toUpperCase();if(e=="POST"){f={contentType:"application/json; charset=utf-8"};c=this.errorSaving}else{if(e=="GET"){c=this.errorFinding}else{if(e=="PUT"){f={contentType:"application/json; charset=utf-8"};c=this.errorUpdating}else{if(e=="DELETE"){c=this.errorDestroying}}}}b.ajax(b.extend({type:e,dataType:"json",success:i||function(k,m,l){g.normalizeID(k);j.resolve(k)},error:this.errorCallback(j,c),timeout:30000},f||{},d));return j};this.save=function(d){this.normalizeID(d);var c=this.saveUrl(d);var e=this.saveMethod(d);return this.commonAjaxRequest(new b.Deferred(),e,{url:c,data:JSON.stringify(this.withoutId(d))},d)};this.get=function(f,e){var c=this.RESOURCE_ENDPOINT+"/"+f,d=jQuery.extend({},this.defaultParams,e||{});return this.commonAjaxRequest(new b.Deferred(),"GET",{url:c,data:d})};this.findAll=function(e){var c=this.RESOURCE_ENDPOINT,d=b.extend({},this.defaultParams,e);return this.commonAjaxRequest(new b.Deferred(),"GET",{url:c,data:d})};this.destroy=function(e){var d=new b.Deferred(),c=this;if(e.hasOwnProperty("id")){e=e.id}b.ajax({type:"DELETE",url:this.RESOURCE_ENDPOINT+"/"+e,success:function(){d.emitSuccess()},error:function(f){c.maybeEmitError(d,c.errorDestroying,[null,f&&f.status])},timeout:30000});return d};a.normalizeID=function(c){var d=c?(c.id||c[this.resourceType+"ID"]):null;if(c&&d){c.id=d}};a.unwrapResponse=function(c){if(Object.keys(c).length===1){return c[Object.keys(c)[0]]}else{return c}};a.errorCallback=function(e,c){var d=this;return function(k,l,h){var i,g,f;try{i=JSON.parse(k.responseText)}catch(j){}g=i?i.message:null;f=(i&&i.code)?i.code:k.status;if(l!=="error"||k.status>=100){d.maybeEmitError(e,c,[g,f])}}};a.maybeEmitError=function(e,c,d){if(this.displayGenericErrorMessages){this.displayError(c())}e.reject.apply(e,d)};a.displayError=function(c){b(c).message({style:"error"})};a.errorSaving=function(){return jive.error.rest.soy.errorSaving({href:window.location})};a.errorFinding=function(){return jive.error.rest.soy.errorFinding({href:window.location})};a.errorUpdating=function(){return jive.error.rest.soy.errorUpdating({href:window.location})};a.errorDestroying=function(){return jive.error.rest.soy.errorDestroying({href:window.location})};a.withoutId=function(c){var d={};Object.keys(c).forEach(function(e){if(e!="id"){d[e]=c[e]}});return d};a.saveUrl=function(c){if(c.id){return this.RESOURCE_ENDPOINT+"/"+c.id}else{return this.POST_RESOURCE_ENDPOINT}};a.saveMethod=function(c){if(c.id&&this.putOnUpdate){return"PUT"}else{return"POST"}}});define("jive.DeferredRestService",function(){return jive.DeferredRestService});
;
/*
 * $Revision$
 * $Date$
 *
 * Copyright (C) 1999-2012 Jive Software. All rights reserved.
 *
 * This software is the proprietary information of Jive Software. Use is subject to license terms.
 */
/**
 * Interface to history REST service.
 *
 * @extends jive.DeferredRestService
 * @depends path=/resources/scripts/apps/shared/models/deferred_rest_service.js
 */
define(
    "jive.component.autosearch.SearchSource",
    ['jquery'],
    function ($)
    {

        return jive.DeferredRestService.extend(
            function(protect) {

                protect.resourceType = "search";

                this.init = function(options) {

                    this.RESOURCE_ENDPOINT =  _jive_base_url + "/api/core/v3/search";
                };
                this.createParams = function(searchTerm, filters, fields, sort, count, page){
                    var data = {};
                    data.sort = sort;
                    data.count = count;
                    data.filter = [];
                    if(fields){
                        data.fields = $.isArray(fields) ? fields.join(',') : fields;
                    }
                    if(filters){
                        for(var key in filters){
                            //TODO need to get this to handle array values in filters
                            data.filter.push(key + "(" +filters[key]+ ")");
                        }
                    }
                    if(searchTerm){
                        data.filter.push("search(" + searchTerm + ")");
                    }
                    return data;
                };

                this.query = function(type, searchTerm, filters, fields, sort, count, page){
                    var data = this.createParams(searchTerm, filters, fields, sort, count, page);
                    if(type === "contents"){
                        data.collapse = true;
                        
                        // MSW-668: This is how you would limit the type of the results:
                        //data.filter.push("type(page)");
                        //or, you could try this for just some user-generated content:
                        data.filter.push("type(discussion,post,document,event)");
                    } else if(type === "pages"){
                        // Filter for pages if that's the search type
                        data.collapse = true;
                        data.filter.push("type(page)");
                    }

                    // Pages is not a valid search endpoint, so switch it to contents
                    if (type === "pages"){
                        endpoint = "contents";
                    } else {
                        endpoint = type;
                    }
                    var url = this.RESOURCE_ENDPOINT + "/" + endpoint;
                    return this.commonAjaxRequest(new $.Deferred(), 'GET', {
                        url: url,
                        data: data
                    });
                };
            }
        );
    }
);
;
define("jive.component.autosearch.ActivitySource",["jquery"],function(a){return jive.DeferredRestService.extend(function(b){b.resourceType="search";this.init=function(c){this.RESOURCE_ENDPOINT=_jive_base_url+"/api/core/v3/activities/"};this.queryFrequent=function(e,c,f){var g={};g.count=f;if(c){g.fields=a.isArray(c)?c.join(","):c}var d=this.RESOURCE_ENDPOINT+"frequent/"+e;return this.commonAjaxRequest(new a.Deferred(),"GET",{url:d,data:g})};this.queryRecent=function(e,c,f){var g={};g.count=f;if(c){g.fields=a.isArray(c)?c.join(","):c}var d=this.RESOURCE_ENDPOINT+"recent/"+e;return this.commonAjaxRequest(new a.Deferred(),"GET",{url:d,data:g})}})});
;
define("jive.component.autosearch.ContentSource",["jquery"],function(a){return jive.RestService.extend(function(b){b.resourceType="search";this.init=function(c){this.suppressGenericErrorMessages();this.RESOURCE_ENDPOINT=_jive_base_url+"/api/core/v3/contents"};this.query=function(f,e){var g={};g.count=e;g.filter=[];if(f){for(var d in f){g.filter.push(d+"("+f[d]+")")}}var c=this.RESOURCE_ENDPOINT;return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:c,data:g})}})});
;
define("jive.component.autosearch.PeopleSource",["jquery"],function(a){return jive.RestService.extend(function(b){b.resourceType="search";this.init=function(c){this.suppressGenericErrorMessages();this.RESOURCE_ENDPOINT=_jive_base_url+"/api/core/v3/people"};this.query=function(f,e){var g={};g.count=e;g.filter=[];if(f){for(var d in f){g.filter.push(d+"("+f[d]+")")}}var c=this.RESOURCE_ENDPOINT;return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:c,data:g})}})});
;
define("jive.component.autosearch.PlaceSource",["jquery"],function(a){return jive.RestService.extend(function(b){b.resourceType="search";this.init=function(c){this.suppressGenericErrorMessages();this.RESOURCE_ENDPOINT=_jive_base_url+"/api/core/v3/places"};this.query=function(f,e){var g={};g.count=e;g.filter=[];if(f){for(var d in f){g.filter.push(d+"("+f[d]+")")}}var c=this.RESOURCE_ENDPOINT;return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:c,data:g})}})});
;
jive.BookmarkSource=jive.RestService.extend(function(a){a.resourceType="bookmark"});
;
define("jive.conc.FreshActionQueue",["jquery"],function(a){return function b(){var c=[];function d(g){var f=new a.Deferred();c.push(g);function e(){var h=c.lastIndexOf(g);if(h>-1){c=c.slice(h+1);g.then(function(){f.resolve.apply(f,arguments)},function(){f.reject.apply(f,arguments)})}}g.then(e,e,function(){f.notify.apply(f,arguments)});return f.promise()}return{push:d}}});
;
jive.namespace("search");jive.search.arrived=new Date().getTime();jive.search.SearchMetrics=jive.oo.Class.extend(function(a){var b=jQuery;a.init=function(d){this.data={name:d,referrer:document.referrer,pageArriveDate:jive.search.arrived,pageLeftDate:undefined,queries:[]};this.byName={};var c=this;b(window).on("beforeunload",function(){c.data.pageLeftDate=new Date().getTime();if(c.data.queries.length){c.commit(true)}})};this.commit=function(c){var d=JSON.stringify(this);return b.ajax({type:"POST",url:jive.app.url({path:"/api/core/v3/search/monitor"}),data:d,async:!c,contentType:"application/json",dataType:"json"})};this.addQuery=function(d,c){this.data.queries.push(d);if(c){this.byName[c]=d;if(c.slice(0,3)==="alt"){d.isAlternate=true}}return this};this.getQuery=function(c){return this.byName[c]};this.forEachCurrent=function(d){for(var c in this.byName){if(this.byName.hasOwnProperty(c)){d(this.byName[c],c)}}return this};this.setChoice=function(f,e,d){var g=this.byName[f];var c=g.getResult(e);g.setChoice({index:e,item:c,clickedUrl:d,date:new Date().getTime()});return this};this.toJSON=function(){return this.data}});jive.search.SearchMetricsQuery=jive.oo.Class.extend(function(a){a.init=function(c,b){this.data={query:c||"",sentDate:b||new Date().getTime(),returnedDate:undefined,results:[]}};this.addResults=function(b){var c=this.data.results;c.push.apply(c,b);return this};this.getResult=function(b){return this.data.results[b]};this.forEachResult=function(d){var c=this.data.results;for(var b in c){if(c.hasOwnProperty(b)){d(c[b],b)}}return this};this.setReturnedDate=function(b){this.data.returnedDate=b;return this};this.incPage=function(){this.data.pagesLoaded=(this.data.pagesLoaded||0)+1;return this};this.abort=function(){this.data.aborted=new Date().getTime();return this};this.setChoice=function(b){this.data.choice=b;return this};this.toJSON=function(){return this.data}});
;
/*jslint browser:true */
/*extern jive $j moreOptionsLinkText lessOptionsLinkText */

/**
 * A search model for Jive search
 *
 */

jive.namespace('search');  // Creates the jive.search namespace if it does not already exist.

// adding the jive.search.load() method, the rest is view code
(function($) {
    var search = jive.search,
        apiBaseUrl = jive.app.url({ path: '/api/core/v3'} ),
        facets = {
            pages: {
                url: apiBaseUrl + '/search/contents',
                validParams: [ 'count', 'startIndex', 'sort' ],
                validFilters: [ 'search', 'type', 'tag', 'author', 'place', 'after', 'language' ],
                defaults: {
                    collapse: 'true',
                    fields: 'rootType,type,subject,author,question,answer,parentPlace,parentContent,highlightSubject,highlightBody,highlightTags,published,updated,replyCount,likeCount,viewCount,visibleToExternalContributors,binaryURL',
                    filters: 'type(page)'
                }
            },
            content: {
                url: apiBaseUrl + '/search/contents',
                validParams: [ 'count', 'startIndex', 'sort' ],
                validFilters: [ 'search', 'type', 'tag', 'author', 'place', 'after', 'language' ],
                defaults: {
                    collapse: 'true',
                    fields: 'rootType,type,subject,author,question,answer,parentPlace,parentContent,highlightSubject,highlightBody,highlightTags,published,updated,replyCount,likeCount,viewCount,visibleToExternalContributors,binaryURL',
                    filters: 'type(post,document,discussion,message,poll,update,dm,event)'
                }
            },
            people: {
                url: apiBaseUrl + '/search/people',
                validParams: [ 'count', 'startIndex', 'sort' ],
                validFilters: [ 'search', 'nameonly' ],
                defaults: { }
            },
            places: {
                url: apiBaseUrl + '/search/places',
                validParams: [ 'count', 'startIndex', 'sort'],
                validFilters: [ 'search', 'type', 'tag' ],
                defaults: { }
            }
        };


    function getBaseUrl() {
        return apiBaseUrl;
    }

    function getUrl(facet) {
        return facets[facet].url;
    }

    /**
     * private
     */
    function request(url, params) {
        var promise = $.getJSON(url, params).done(function(results) {
            // if there are more results add them to the promise object
            if (results.links && results.links.next) {
                promise.next = request.bind(this, results.links.next, {});
            }

            promise.returnedDate = new Date().getTime();
        });

        promise.query = url + '?' + $.param(params);
        promise.sentDate = new Date().getTime();

        return promise;
    }

    /**
     * Queries the search API by the type provided. Returns a jQuery promise (jqXHR object) with possible next()
     * and prev() methods on it to query the next and previous pages. If either of these methods do not exist there are
     * no more pages in that direction.
     *
     * @param facet The type of objects to search, content, people, or places
     * @param params Params for the search include q, after, to, limit, etc.
     */
    function query(facet, params) {
        if (!facets.hasOwnProperty(facet))
            throw new Error('Invalid type, must be content, people, or places!!!');

        if (!params)
            throw new Error('Must provide params to query');

        var subset = $.extend({}, facets[facet].defaults),
            validParams = facets[facet].validParams;

        var url = search.getUrl(facet);

        // prepare parameters, limit to only valid ones to make logging/analytics more accurate and relevant
        validParams.forEach(function(param) {
            if (params[param]) {
                subset[param] = params[param];
            }
        });

        var filters = new Array();

        /*
         Why the Object check? Well, in the main search, the filters are passed as an object. 
         In the sidebar searches, they're not. We need to make sure to either concatenate an array or push a string
        */
        if (typeof params.filter === "object"){ // params.filter is passed in through URL params
            // For pages, only take the first param (if this comes in - ?q=json&type=document- only use q=json )
            if (facet == "pages"){
                filters.push(params.filter[0]);
            } else {
                filters = filters.concat(params.filter);
            }
        } else{
           filters.push(params.filter); 
        }

        // Are we using custom filtering defaults?
        if (null != facets[facet].defaults.filters){
            // Don't use the default filters if we're using a filter from the UI. Ex: If searching All Community Content, use default. If narrowing to discussions, don't use default content filter.
            if (-1 == filters.indexOf("type(discussion,message)") && -1 == filters.indexOf("type(post)")  && -1 == filters.indexOf("type(document)") && -1 == filters.indexOf("type(poll)") && -1 == filters.indexOf("type(update)")  && -1 == filters.indexOf("type(dm)") && -1 == filters.indexOf("type(event)") ){
                filters.push(facets[facet].defaults.filters);
            }
        }
        
        
        if (filters instanceof Array) {
            filters = filters.map(function(filter) {
                return filter.replace(/^after\((.*)\)$/, function(match, time) {
                    return 'after(' + convertSince(time) + ')';
                });
            });
        }

        subset.filter = filters;

        return request(url, subset);
    }


    function logMonitoring(data, sync) {
        var jsonBody = JSON.stringify(data);
        return $.ajax({
            type: 'POST',
            url: apiBaseUrl + '/search/monitor',
            data: jsonBody,
            async: !sync,
            contentType: 'application/json',
            dataType: 'json'
        });
    }


    // add a filter to the subset params formatting correctly
    function addFilter(params, filter, values) {
        if (!params.hasOwnProperty('filter')) params.filter = [];
        if ($.isArray(values)) values = values.join(',');
        params.filter.push(filter + '(' + values + ')');
    }




    var sinceValues = {
        day: 1,
        week: 7,
        month: 30,
        quarter: 90,
        year: 365
    };


    function convertSince(since) {
        var day = 86400000;
        var now = new Date();
        var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        var time = today.getTime();
        var days = sinceValues[since];

        if (!days) return false;
        var isoFormat = new Date(time - day*days).toISOString();
        return isoFormat.replace(/Z$/, '+0000');
    }

    if ( !Date.prototype.toISOString ) {

        ( function() {

            function pad(number) {
                var r = String(number);
                if ( r.length === 1 ) {
                    r = '0' + r;
                }
                return r;
            }

            Date.prototype.toISOString = function() {
                return this.getUTCFullYear()
                    + '-' + pad( this.getUTCMonth() + 1 )
                    + '-' + pad( this.getUTCDate() )
                    + 'T' + pad( this.getUTCHours() )
                    + ':' + pad( this.getUTCMinutes() )
                    + ':' + pad( this.getUTCSeconds() )
                    + '.' + String( (this.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
                    + 'Z';
            };

        }() );
    }

    search.query = query;
    search.logMonitoring = logMonitoring;
    search.getBaseUrl = getBaseUrl;
    search.getUrl = getUrl;


})(jQuery);
;
/*
 * $Revision$
 * $Date$
 *
 * Copyright (C) 1999-2012 Jive Software. All rights reserved.
 *
 * This software is the proprietary information of Jive Software. Use is subject to license terms.
 */
/**
 * @depends path=/resources/scripts/apps/autosearch/popup.js
 * @depends path=/resources/scripts/apps/autosearch/progressmeter.js
 * @depends path=/resources/scripts/apps/autosearch/list.js
 * @depends path=/themes/msoe_social/scripts/apps/autosearch/search_source.js
 * @depends path=/resources/scripts/apps/autosearch/activity_source.js
 * @depends path=/resources/scripts/apps/autosearch/content_source.js
 * @depends path=/resources/scripts/apps/autosearch/people_source.js
 * @depends path=/resources/scripts/apps/autosearch/place_source.js
 * @depends path=/resources/scripts/apps/shared/models/bookmark_source.js
 * @depends path=/resources/scripts/jive/fresh_action_queue.js
 * @depends path=/resources/scripts/jive/search/search-metrics.js
 * @depends path=/themes/msoe_social/scripts/jive/search/search.js
 * @depends path=/resources/scripts/jquery/jquery.utils.js
 * @depends path=/resources/scripts/jquery/jquery.view.js
 * @depends path=/resources/scripts/jquery/jquery.placeheld.js
 * @depends path=/resources/scripts/jquery/jquery.typeAhead.js
 * @depends path=/resources/scripts/jive/accessibility.js
 * @depends template=jive.autosearch.overlay scope=client
 * @depends template=jive.autosearch.spotlightPopup scope=client
 * @depends template=jive.autosearch.spotlightView scope=client
 * @depends template=jive.autosearch.results scope=client
 */
define(
    "jive.component.AutoSearchView",
    [
        'jquery',
        'jive.component.autosearch.SearchSource',
        'jive.component.autosearch.ActivitySource',
        'jive.component.autosearch.ContentSource',
        'jive.component.autosearch.PeopleSource',
        'jive.component.autosearch.PlaceSource',
        'jive.component.list',
        'jive.component.PopupView',
        'jive.component.ProgressMeterView',
        'jive.conc.FreshActionQueue'],
    function ($, SearchSource, ActivitySource, ContentSource, PeopleSource, PlaceSource, list, PopupView, ProgressMeterView, FreshActionQueue)
    {
        var autosearch = {};

        autosearch.init = function(){
            var $document = $(document);
            $("input[data-component='autosearch']").placeHeld();

            //attach listeners
            $document.on("focus.autosearchview", "input[data-component='autosearch']",
                function(event){
                    $(this).view(AutoSearchView); //create the view
                }
            );

            //global switchboard listener
            jive.switchboard.addListener('bookmark.create', function(bookmark) {
                //TODO this could move into the actual search element view
                var $searches = $("#j-spotlight-search");
                $searches.addClass("j-bookmark-created");
                $searches.append(jive.autosearch.overlay({type: 'bookmark'}));
                var $overlays = $searches.find(".j-tooltip");
                $overlays.fadeIn(250);
                setTimeout(
                    function(){
                        $searches.removeClass("j-bookmark-created");
                        $overlays.fadeOut(250, function() {
                            $(this).remove();
                        });
                    },
                    1500
                );
            });

        };

        var AutoSearchView =  jive.oo.Class.extend(
            function(protect){
                protect.init = function(element){
                    this.$element = $(element);
                    this.loadingQueue = new FreshActionQueue();
                    this.searchSource = new SearchSource();//considering using the jive.search JS library instead of a custom source
                    this.activitySource = new ActivitySource();
                    this.contentSource = new ContentSource();
                    this.peopleSource = new PeopleSource();
                    this.placeSource = new PlaceSource();
                    this.bookmarkSource = new jive.BookmarkSource();//TODO need to pull this in with the defines functionality
                    this.metrics = new jive.search.SearchMetrics('spotlight-search');//TODO need to pull this in with the defines functionality
                    this.$element.attr("maxlength", 250);//set programatically to make sure it never goes over a reasonable limit
                    if (this.$element.data("container")) {
                        var containerSplit = this.$element.data("container").split(":");
                        this.containerType = parseInt(containerSplit[0]);
                        this.containerId = parseInt(containerSplit[1]);
                        this.containerBrowseId = parseInt(this.$element.data("container-browseid"));
                        // initialize these values to the best of our ability
                        this.filterType = "place";
                        this.filter = [ "/places/" + this.containerBrowseId ];
                        this.displayName = this.$element.data("container-name");
                        this.forceFiltered = true;
                    }
                    else {
                        this.containerType = jive.global.containerType;
                        this.containerId = jive.global.containerID;
                        this.containerBrowseId = jive.global.containerBrowseId;
                    }

                    //TODO this could have problems due to the asynchronous of the events
                    //on initialization of object we need to get information about current location
                    //if currently viewing a person we need to get the person object to get display name
                    //values come from jive constants
                    if (this.containerType == 3) {
                        //use person service to get person
                        this.peopleSource.get(this.containerId).addCallback(
                            function(data){
                                if(data){
                                    formatResult("people", data);
                                    this.filterType = "author";
                                    this.filter = new RegExp("/[^/]*/[^/]*$").exec(data.resources.self.ref);
                                    this.displayName = data.displayName;
                                }
                            }.bind(this)
                        );
                    }
                    //if not a person, try to get the place object
                    else if (this.containerType != 2020) {
                        this.placeSource.get(this.containerBrowseId).addCallback(
                            function(data){
                                if(data && !(data.type == 'space' && data.parent == null)){
                                    this.filterType = "place";
                                    this.filter = new RegExp("/[^/]*/[^/]*$").exec(data.resources.self.ref);
                                    this.displayName = data.name;
                                }
                            }.bind(this)
                        );
                    }

                    var search = this;

                    //bind events to clear button if there is one
                    var $clearButton = $("[data-type='clear'][data-field='"+ this.$element.get(0).id + "']");
                    $clearButton.on("click",
                        function(event){
                            search.$element.focus();
                            search.$element.val("");
                            search.setView(null);
                            search.renderView();
                            search.loadViewContent();
                            $(this).removeClass("j-active");
                        }
                    );

                    function removeBookmark($row){
                        var id = $row.find("[data-component='button'][data-command='remove']").data("id");
                        search.deleteBookmark(id).addCallback(function(){
                            $row.fadeOut('fast', function() {
                                $row.remove();
                            });
                        });
                    }

                    //TypeAhead handles the majority of the user interaction
                    this.$element.typeAhead({
                        keystrokeWait: 250,
                        itemSelector: "li.j-listitem:visible",
                        tabSelector: "nav a[data-component='button'][data-view]:visible",
                        deselectOnMouseOut: true
                    }).on("keystroke", function keystrokeHandler(ev){
                        //keystroke events indicate that a non-navigation key was pressed, and the keystrokeWait has expired
                        var query = search.getSearchTerm();
                        if(query){
                            search.change();
                        }else{
                            search.clear();
                        }

                        var popup = search.getPopup();
                        if(popup.getState() == 'visible'){
                            if(query.length){
                                $clearButton.addClass("j-active");
                            } else {
                                $clearButton.removeClass("j-active");
                            }
                        }
                    }).on("focusWaitFinished", function(event){
                        //The input received focus and has held it for the focusWait interval
                        $(this).closest("[role=search]").addClass("focused");
                        var searchView = $(this).view(AutoSearchView);
                        if(!(searchView.getPopup().getState() == "visible")){
                            searchView.renderView();//render current view
                            searchView.loadViewContent();// load current view data
                        }
                    }).on("blurWaitFinished", function(event){
                        //The input lost focus, and hasn't had it for blurWait
                        $(this).closest("[role=search]").removeClass("focused")
                        .end().trigger("close");
                    }).on("selectionChosen", function(ev, typeAhead, $target, origEv){
                        //The user selected an item from the list, using either the keyboard or the mouse
                        var $link = $target.find("a:first");
                        if($link.is("[data-component='button']")){
                            if($link.is("[data-command='more']")){
                                //more expansion
                                var newSelection = $link.closest("ol").find("li.j-inactive").removeClass("j-inactive").first();
                                typeAhead.setSelected(newSelection);
                                $link.closest("li").addClass("j-inactive");
                            }
                            search.activateItem($target);
                        }else if($(origEv.target).is("[data-component='button']")){
                            var $origTarget = $(origEv.target);
                            if($origTarget.is("[data-command='remove']")){
                                //Remove bookmark button
                                removeBookmark($target);
                            }
                        } else {
                            if(origEv.type == "click" && (origEv.which == 2 || origEv.ctrlKey)){
                                //middle-click, new window
                                window.open($link.attr('href'));
                            }else{
                                window.location = $link.attr('href');
                            }
                        }
                    }).on("otherClick", function(event, typeAhead, $target){
                        //Tab navigation
                        if($target.is("[data-component='button'][data-view]")){
                            search.setView($target.data("view"));
                            search.renderView();
                            search.loadViewContent();
                        }
                    }).on("otherEnter", function(){
                        //Enter when nothing was selected.  Navigate to the full-page search.
                        search.navigateToSearchPage();
                    }).on("close", function(){
                        search.hidePopup();
                    }).attr('aria-autocomplete', 'list')
                    .attr('role', 'combobox');


                    //search button
                    $("[data-type='search'][data-field='"+ this.$element.get(0).id + "']").on("click",
                        function(event){
                            search.navigateToSearchPage();
                        }
                    );
                };
                this.toString = function(){return "[object AutoSearchView]";};

                protect.getCurrentView = function(){
                    var view = this.currentView;
                    if(view == null){
                        view = this.getDefaultView();
                    }
                    return view;
                };
                protect.getDefaultView = function(){
                    //if frequent is availabe return it
                    //else if bookmarks available return it
                    //else return null;
                    var availableViews = this.getAvailableViews();
                    if(availableViews["frequent"]){
                        return "frequent";
                    } else if(availableViews["bookmarks"]) {
                        return "bookmarks";
                    } else {
                        return null;
                    }
                };

                this.getPopupElement = function(){
                    var popupElement = this.$element.data("popupElement");//look for stored popup element
                    if(!popupElement){
                        var popupReference = this.$element.data("popup");//find element by linked if if provided
                        var $popupElement;
                        if(popupReference){
                            $popupElement = $("#" + popupReference);
                        } else {
                            $popupElement = $(jive.autosearch.spotlightPopup());//generate popup if does not already exist
                            this.$element.after($popupElement);
                        }
                        popupElement = $popupElement.get(0);
                        this.$element.data("popupElement", popupElement);
                    }
                    return popupElement;
                };

                protect.getSearchTerm = function(){
                    var query = this.$element.placeHeldVal();

                    // verify there are at least 2 non-whitespace characters
                    if((query.match(/[^\s]/g)||[]).length >= 2){
                        // reduce white space to single space
                        query = $.trim(query).replace(/\s+/g,' ');
                        // guard against single character wildcard searches like a* that can occur when appending a '*' to the query
                        while(query.length >= 2 && query.match(/\s\w$/)){
                            query = $.trim(query.substring(0, query.length - 2));
                        }
                        if(query.length >= 2){
                            return query;
                        }
                    }
                    return "";
                };
                this.activateItem = function(item){//this method is currently for search metrics only
                    var $item = $(item);
                    if(!$item.hasClass('more') && this.getCurrentView() == "all" || this.getCurrentView() == "filtered"){//only run this if we are in a search view
                        var index = $item.closest("[data-component='listitem']").prevAll("[data-component='listitem']").length;
                        var type = $item.closest("div[data-type]").attr("data-type");
                        this.metrics.setChoice(type, index, $item.get(0).href);
                    }
                };
                /**
                 * Returns the current PopupView object associated with this search
                 */
                this.getPopup = function(){
                    return $(this.getPopupElement()).view(PopupView);
                };
                this.hidePopup = function(){
                    this.getPopup().hide();
                };
                this.showPopup = function(force){
                    var popup = this.getPopup();
                    if(!$(this.getPopupElement()).is(":visible") || force){
                        var anchor = this.anchor ? $(this.anchor) : null;
                        if(anchor == null){
                            anchor = this.$element.data("popup-anchor");
                            anchor = anchor ? $("#" + anchor): this.$element;
                        }
                        this.getPopup().show(this.$element.get(0), anchor);
                        this.$element.data("typeAhead").setSuggestElement(this.getPopupElement());
                    }
                };
                this.setAnchor = function(node){
                    this.anchor = node;
                };
                /**
                 * Returns the current List element associated with this search
                 */
                protect.getListElement = function(){
                    var $popup = $(this.getPopupElement());
                    return $popup.find("[data-component='list']").get(0);
                };

                protect.specify = function(type, promise, params){
                    return promise.pipe(function(data){return {type : type, params: params, data: data};});
                };
                protect.fieldsFor = function(type){
                    if(type == "content"){
                        return [ "type", "id", "author", "subject", "visibleToExternalContributors", "published", "updated" ];
                    }
                    else if(type == "people"){
                        return [ "type", "id", "name", "displayName", "thumbnailId", "jive" ];
                    }
                    else if(type == "places"){
                        return [ "type", "id", "name", "displayName", "visibleToExternalContributors" ];
                    }
                    return [];
                };
                protect.loadFrequentlyViewed = function(){
                    var promises = [];
                    promises.push(this.specify("content", this.activitySource.queryFrequent("content", this.fieldsFor("content"), 10)));
                    promises.push(this.specify("people", this.activitySource.queryFrequent("people", this.fieldsFor("people"), 10)));
                    promises.push(this.specify("places", this.activitySource.queryFrequent("places", this.fieldsFor("places"), 10)));
                    return promises;
                };
                protect.loadBookmarks = function(){
                    var deferred = new $.Deferred();
                    this.contentSource.query({type : "favorite", author: "/people/" + _jive_current_user.ID}, 10).then(
                        //TODO this needs to handle errors as well as success
                        function(data){deferred.resolve(data);}
                    );
                    return [this.specify("content", deferred)];
                };
                protect.loadHistory = function(){
                    var promises = [];
                    promises.push(this.specify("content", this.activitySource.queryRecent("content", this.fieldsFor("content"), 10)));
                    promises.push(this.specify("people", this.activitySource.queryRecent("people", this.fieldsFor("people"), 10)));
                    promises.push(this.specify("places", this.activitySource.queryRecent("places", this.fieldsFor("places"), 10)));
                    return promises;
                };
                protect.executeSearch = function(){
                    var promises = [];
                    //executes each search asynchronously for each type
                    promises.push(this.performSearchQuery("pages", this.fieldsFor("content")));
                    promises.push(this.performSearchQuery("content", this.fieldsFor("content")));
                    if(this.getCurrentView() != 'filtered'){
                        promises.push(this.performSearchQuery("people", this.fieldsFor("people")));
                        promises.push(this.performSearchQuery("places", this.fieldsFor("places")));
                    }
                    return promises;
                };

                protect.performSearchQuery = function(type, fields){
                    var searchTerm = $.trim(this.getSearchTerm()) + '*',
                        filter     = null;
                    if(this.getCurrentView() == 'filtered'){
                        filter = {};
                        filter[this.filterType] = this.filter;
                    }
                    //build params for metrics
                    var queryType = type == "content" ? "contents" : type;//fixes plurality for search service query
                    
                    // Pages is not a valid search endpoint, so don't use it! But, DO keep it to pass to search_source.js
                    if (queryType == "pages"){
                        var queryEndpoint = "contents";
                    } else {
                        var queryEndpoint = queryType;
                    }
                    var params = this.searchSource.createParams(searchTerm, filter, fields, "relevanceDesc", 10);
                    var query = new jive.search.SearchMetricsQuery("/api/core/v3/search/" + queryType + "?" + $.param(params));//create search query
                    this.metrics.addQuery(query, queryType);//add metrics
                    return this.specify(type, this.searchSource.query(queryType, searchTerm, filter, fields, "relevanceDesc", 10).then(
                        this.processSearchResult.bind(this, query)
                    ), {searchTerm : searchTerm, filterType : this.filterType, filter: this.filter});
                };

                protect.processSearchResult = function(metricsQuery, data){
                    metricsQuery.setReturnedDate(new Date().getTime());
                    metricsQuery.addResults(data.list.map(toMetricInfo));
                };

                function toMetricInfo(result) {
                    return {
                        id: result.id,
                        type: result.type
                    }
                }

                this.deleteBookmark = function(id){
                    var promise = new jive.conc.Promise();
                    this.bookmarkSource.destroy(id).addCallback(function() {
                        jive.switchboard.emit('bookmark.destroy', jQuery.extend({}, {id: id}));
                        promise.emitSuccess();
                    });
                    return promise;
                };

                //this is copied from search-page.js and modified
                function formatResult(facet, result) {
                    if(result.type == 'favorite' && result.favoriteObject.type != 'url'){//added this to handle internal bookmarks
                        result = result.favoriteObject;

                        // figure out whether to display external access warning
                        result.displayExternalAccess = (!_jive_current_user.partner) && result.visibleToExternalContributors;

                    }
                    if (facet == 'content') {
                        if(result.published){
                            result.publishedDate = parseDate(result.published).getTime();
                        }
                        if(result.updated){
                            result.updatedDate = parseDate(result.updated).getTime();
                        }
                        // 2011-09-19T20:38:23.423+0000

                        // set name to use for display
                        if (result.author && !result.author.displayName) {
                            result.author.displayName = result.author.name.formatted || result.author.jive.username;
                        }
                        if(result.type == "file" && result.binaryURL){
                            result.extension = result.binaryURL.split('.').slice(-1).join('.').toLowerCase();
                        }
                        if(!result.subject && result.highlightSubject){
                            result.subject = result.highlightSubject;
                        }
                        if(!result.subject && result.parentContent){
                            result.subject = result.parentContent.name;
                        }
                        result.subject = $("<div>" + result.subject + "</div>").text();//strip markup from subject if there is any

                        // figure out whether to display external access warning
                        result.displayExternalAccess = (!_jive_current_user.partner) && result.visibleToExternalContributors;
                    } else if (facet == 'people') {
                        //format title and department
                        if (result.jive && result.jive.profile && result.jive.profile instanceof Array) {
                            $(result.jive.profile).each(function(i, field) {
                                if (field.jive_label == "Title") {
                                    result.title = field.value;
                                } else if (field.jive_label == "Department") {
                                    result.department = field.value;
                                }
                            });
                        }
                        // set name to use for display
                        if (!result.displayName) {
                            result.displayName = result.name.formatted || result.jive.username;
                        }
                        // figure out whether to display external contributor warning
                        result.displayExternalContributor = (!_jive_current_user.partner) && result.jive && result.jive.externalContributor;
                    } else {
                        result.displayExternalAccess = (!_jive_current_user.partner) && result.visibleToExternalContributors;
                    }
                }
                function parseDate(almostISOString) {
                    // from 2011-09-19T20:38:23.954+0000 to 2011-09-19T20:38:23.954Z the ecmascript standard
                    var isoString = almostISOString.replace(/\+\d+/, 'Z');
                    var date = new Date(isoString);
                    if (isNaN(date.getTime())) {
                        // from 2011-09-19T20:38:23.954Z to 2011/09/19 20:38:23 GMT the lame hack for IE
                        var formatForIE7etall = isoString.replace(/-/, '/').replace('T', ' ').replace(/\.\d+Z/, ' GMT');
                        date = new Date(formatForIE7etall);
                    }
                    return date;
                }

                protect.getAvailableViews = function(){
                    var views = {
                        bookmarks: !this.$element.is("[data-hidetypes~='bookmarks']"),
                        frequent: !this.$element.is("[data-hidetypes~='frequent']"),
                        recent: !this.$element.is("[data-hidetypes~='recent']"),
                        all: !this.$element.is("[data-hidetypes~='all']"),
                        filtered: this.filterType ? !this.$element.is( "[data-hidetypes~='filtered']") : false
                    };
                    return views;
                };
                /**
                 * Renders the current active view
                 * @param view a soy template for the view to render
                 */
                this.renderView = function(){
                    var currentView = this.getCurrentView();
                    if(currentView){//do not show any view if currentView is null
                        var $popupElement = $(this.getPopupElement());
                        $popupElement.empty();
                        $popupElement.append(jive.autosearch.spotlightView({view : currentView, availableViews : this.getAvailableViews(), filterDisplayName : this.displayName, communityName: this.$element.attr("data-community-name")}));
                        this.showPopup();//will show the popup if it is not already showing
                        if (currentView == "bookmarks" || currentView == "frequent" || currentView == "recent" || currentView == "all") {
                            jive.Accessibility.speak(jive.i18n.getMsg('search.view.default.title'));
                        } else {
                            jive.Accessibility.speak(jive.i18n.getMsg('search.view.search.title'));
                        }
                    } else {
                        this.hidePopup();
                    }
                };

                protect.startLoad = function(){
                    var $list = $(this.getPopupElement());
                    $list.attr("aria-busy", "true");
                    var $loading = $list.find("[data-component='loadingpanel']");
                    var $progressMeters = $list.find("[data-component='progressmeter']");
                    if($loading.length){
                        $progressMeters = $loading.find("[data-component='progressmeter']");
                    }
                    $progressMeters.each(function(index, item){$(item).view(ProgressMeterView).start();});
                };

                protect.endLoad = function(){
                    var $list = $(this.getPopupElement());
                    var $progressMeters = $list.find("[data-component='progressmeter']");
                    $progressMeters.each(function(index, item){$(item).view(ProgressMeterView).stop();});
                    $list.attr("aria-busy", "false");
                };

                this.loadViewContent = function(){
                    //start the indicator of progress
                    //call request to load data which will return an array of promisses
                    //combine those promises into a when
                    //push the when onto the loadingQueue
                    //add a then to the promise returned from the loading queue that
                    var currentView = this.getCurrentView();
                    var promises;
                    this.startLoad();
                    switch(currentView){
                        case "frequent":
                            promises = this.loadFrequentlyViewed();
                            break;
                        case "recent":
                            promises = this.loadHistory();
                            break;
                        case "bookmarks":
                            promises = this.loadBookmarks();
                            break;
                        case "all":
                        case "filtered":
                            promises = this.executeSearch();
                            break;
                    }
                    if(promises && promises.length){
                        var search = this;
                        var searchTerm = $.trim(this.getSearchTerm()) + '*';
                        this.loadingQueue.push($.when.apply($, promises))
                            .then(function(){search.processResult(currentView, searchTerm, Array.prototype.slice.call(arguments));});
                    }

                };

                protect.processResult = function(renderView, searchTerm, data){
                    if(renderView == this.getCurrentView()){
                        //console.debug("rendering view " + renderView);
                        this.endLoad();
                        var params = {view: renderView, searchTerm : searchTerm, filterType : this.filterType, filter: this.filter, results: {}};
                        if(data != null){
                            data.forEach(
                                function(result){
                                    if(result && result.data && result.data.list){
                                        result.data.list.forEach(
                                            function(item){
                                                formatResult(result.type, item);
                                            }
                                        );
                                        params.results[result.type] = result.data.list;
                                    }
                                }
                            );
                        }
                        //console.debug(params.results);
                        $(this.getListElement()).empty().append(jive.autosearch.results(params));
                        this.showPopup(true);
                    }
                    else {
                        //console.debug("Received Result for " + renderView + " while current view is " + this.getCurrentView());
                    }
                };

                /**
                 * sets a
                 * @param view
                 */
                this.setView = function(view){
                    this.currentView = view;
                };

                protect.change = function(){
                    //if not currently a search view, switch to view all
                    var currentView = this.getCurrentView();
                    if(currentView != "all" && currentView != "filtered"){
                        if (this.forceFiltered) {
                            this.setView("filtered");
                        }
                        else {
                            this.setView("all");
                        }
                        this.renderView();
                    }

                    this.loadViewContent();

                };

                protect.clear = function(){
                    var currentView = this.getCurrentView();
                    if(currentView == "all" || currentView == "filtered"){
                        this.setView(null);
                        this.renderView();
                    }

                    this.loadViewContent();

                };

                /**
                 * sends the browser to the dedicated search page.
                 */
                this.navigateToSearchPage = function() {
                    var query = {};

                    if(this.getSearchTerm().length > 0){
                        query["q"]=this.getSearchTerm();
                    }
                    if(this.getCurrentView() == 'filtered'){
                        query[this.filterType] =  this.filter;
                    }

                    window.location = _jive_base_url + "/search.jspa" + "?" + $.param(query);
                };
            }
        );
        AutoSearchView.toString = function(){return "[wrapper AutoSearchView]";};
        AutoSearchView.getBindName = function(){return "AutoSearchView";};
        $(document).ready(function(){autosearch.init();});//I don't like this being in document ready as it defeats some of the purpose of the delegation but is needed for dealing with our i18n key handling.
        return AutoSearchView;
    }
);

;
jive.namespace("Navbar.Menu.Satellite");jive.Navbar.Menu.Satellite.Source=jive.RestService.extend(function(a){a.resourceType=a.pluralizedResourceType="satellitemenu"});
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.browse=="undefined"){jive.browse={}}if(typeof jive.browse.user=="undefined"){jive.browse.user={}}jive.browse.user.userProfileImage=function(A,C){var B=C||new soy.StringBuilder();B.append((A.prop.profileImage.url)?'<a href="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,A.link)))+'" class="j-user-photo"><img src="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.resourceUrl(window._jive_base_url,"/6.0.2.0/","",A.prop.profileImage.url)))+'" alt="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("profile.image.primary"),[]))+'" width="200"/>'+((A.prop.isVisibleToPartner)?'<div class="j-browse-external-access"><span class="jive-icon-med jive-icon-partner" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("partner.browse.ext_access"),[]))+'"></span><span>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("partner.browse.external.contributor"),[]))+"</span></div>":"")+"</a>"+((A.prop.profileImage.viewingSelf&&A.prop.profileImage["default"])?'<span class="j-profile-img-text j-rc3"><a href="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/edit-profile-avatar!input.jspa")))+"?targetUser="+soy.$$escapeUri(A.id)+'" class="j-btn-global">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("profile.image.text.add.photo"),[]))+"</a></span>":""):"");return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.people=="undefined"){jive.people={}}if(typeof jive.people.profile=="undefined"){jive.people.profile={}}jive.people.profile.statusLevel=function(A,C){var B=C||new soy.StringBuilder();B.append((A.ready)?'<span class="j-status-levels"><img src="'+soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,A.imagePath))+'" alt="'+soy.$$escapeHtml(A.name)+'" title="'+soy.$$escapeHtml(A.name)+'"/>'+((A.showPoints)?soy.$$escapeHtml(A.name)+" ("+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("stslvl.points"),[A.pointLevel]))+")":"")+"</span>":"");return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.nav=="undefined"){jive.nav={}}if(typeof jive.nav.menu=="undefined"){jive.nav.menu={}}jive.nav.menu.generic=function(A,G){var B=G||new soy.StringBuilder();B.append("<ul>");var E=A.links;var F=E.length;for(var D=0;D<F;D++){var C=E[D];if(C.visible){jive.nav.menu.link(C,B)}}B.append("</ul>");return G?"":B.toString()};jive.nav.menu.link=function(A,C){var B=C||new soy.StringBuilder();B.append("<li",(A.itemCss)?' class="'+soy.$$escapeHtml(A.itemCss)+'"':""," ",(A.id=="jive-nav-link-nitro-store")?' style="display: none;"':"",'><a id="',soy.$$escapeHtml(A.id),'" href="',jive.soy.func.normalizeUrl(window._jive_base_url,A.url),'"',(A.urlParams&&A.urlParams.contentType)?' data-content-type="'+soy.$$escapeHtml(A.urlParams.contentType)+'" ':"",(A.headingKey)?' data-heading-key="'+soy.$$escapeHtml(A.headingKey)+'" ':"",(A.linkCss)?'class="'+soy.$$escapeHtml(A.linkCss)+'"':"",">",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.nameKey),[])),"</a></li>");return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.nav=="undefined"){jive.nav={}}jive.nav.satelliteNav=function(A,C){var B=C||new soy.StringBuilder();if(A.showSatelliteMenu){B.append('<a id="j-satNav" class="j-globalNavLink j-ui-elem" href="#"><span class="nav-link j-ui-elem">');jive.shared.displayutil.avatar(soy.$$augmentData(A.user,{hideLink:true,hideTooltip:true,size:24}),B);B.append((A.avatarOnly!=true)?'<span class="j-user-name j-navLabel">'+soy.$$escapeHtml(A.user.displayNameOverride?A.user.displayNameOverride:A.user.displayName)+"</span>":"",'<span id="j-satNav-more2" class="j-nav-more j-ui-elem"></span></span></a>');jive.shared.soy.resourceInlineJs({code:"$j(function(){new jive.Navbar.Menu.Satellite.Main('#j-satNav','#j-satNav-menu',{darkPopover:true,user:"+JSON.stringify(A.user).replace(/</g,"\\u003C").replace(/>/g,"\\u003E")+"});});"},B)}else{B.append('<a href="',jive.soy.func.normalizeUrl(window._jive_base_url,"/login.jspa"),'" title="',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("userbar.login.link"),[]))," / ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.registrationLink.nameKey),[])),'">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("userbar.login.link"),[])),'</a><span class="sep">/</span><a href="    ',"https://www.msoe.edu/external-register.jspa",'" title="',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("userbar.login.link"),[]))," / ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.registrationLink.nameKey),[])),'">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.registrationLink.nameKey),[])),"</a>")}B.append('<div id="j-satNav-menu" class="clearfix" style="display:none;"></div>');return C?"":B.toString()};jive.nav.profileMenu=function(A,G){var B=G||new soy.StringBuilder();B.append('<div><header class="j-pop-desc">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("userbar.welcome.gtitle"),[])),', <a class="j-welcome font-color-normal" href="',soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,A.user.link)),'">',soy.$$escapeHtml(A.user.displayNameOverride?A.user.displayNameOverride:A.user.displayName),'</a> <small class="font-color-meta font-color-meta-light j-welcome-logout">(<a href="',soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"/logout.jspa")),'">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("userbar.welcome.logout"),[])),'</a>)</small></header><section class="j-user-profile">');jive.browse.user.userProfileImage(A.user,B);B.append('<ul><li><a class="j-user-name font-color-normal" href="',jive.soy.func.normalizeUrl(window._jive_base_url,"/people/"+encodeURIComponent(A.user.username)),'">',soy.$$escapeHtml(A.user.displayNameOverride?A.user.displayNameOverride:A.user.displayName),"</a></li>",(A.user.prop.profile.title)?'<li class="font-color-meta-light j-user-prop title">'+soy.$$escapeHtml(A.user.prop.profile.title)+"</li>":"",(A.user.prop.profile.department)?'<li class="j-user-prop department">'+soy.$$escapeHtml(A.user.prop.profile.department)+"</li>":"",'</ul><ul class="j-other-info"><li>',soy.$$escapeHtml(A.user.email),"</li>",(A.user.prop.profile.primaryPhoneNumber)?"<li>"+soy.$$escapeHtml(A.user.prop.profile.primaryPhoneNumber.phoneNumber)+"</li>":"","<li>");if(A.user.prop.statuslevel){jive.people.profile.statusLevel(soy.$$augmentData(A.user.prop.statuslevel,{showPoints:true}),B)}B.append('</li></ul></section><section class="j-satellite-links j-nav-menu j-menu">');var F=A.satelliteMenuView.sections;var C=F.length;for(var D=0;D<C;D++){var E=F[D];if(E.visible){B.append('<h3 class="j-nav-menu-section font-color-meta-light">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(E.nameKey),[])),"</h3>");jive.nav.menu.generic({links:E.items},B)}}B.append("</section></div>");return G?"":B.toString()}
;
jive.namespace("Navbar.Menu.Satellite");jive.Navbar.Menu.Satellite.View=jive.Navbar.Menu.AbstractListView.extend(function(a,b){var c=jQuery;this.render=function(f){var d=this;var e=$j(jive.nav.profileMenu({satelliteMenuView:f,user:this.menuOpts.user}));this.setContent(e);d.$menu.on("click.satelliteNav","a.quick",function(g){g.preventDefault();d.emit("modalize",c(this).attr("href"))})}});
;
jive.namespace("Navbar.Menu.Satellite");jive.Navbar.Menu.Satellite.Main=jive.Navbar.Menu.Main.extend(function(a,b){this.init=function(d,f,e){var c=this;b.init.call(this,d,f,e);c.quickCreateView=new jive.Navbar.Menu.Create.QuickCreateView();c.quickCreateSource=new jive.Navbar.Menu.Create.QuickCreateSource();c.listView.addListener("modalize",function(g){c.url=g;c.quickCreateView.render()});c.quickCreateView.addListener("fetch",function(g){c.listView.close();c.quickCreateSource.fetch(c.url,g)})};a.buildListView=function(c,e,d){return new jive.Navbar.Menu.Satellite.View(c,e,d)};a.buildItemSource=function(){return new jive.Navbar.Menu.Satellite.Source()};a.sourceParams=function(){return{containerType:containerType,containerID:containerID}}});
;
/**
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);
;
/**
 * jQuery isHovered (http://mktgdept.com/jquery-ishovered)
 * A jQuery plugin to test if an element is currently hovered
 *
 * v0.0.1 - 11 June 2010
 *
 * Copyright (c) 2010 Chad Smith (http://twitter.com/chadsmith)
 * Dual licensed under the MIT and GPL licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/gpl-license.php
 *
 * Test if an element is hovered using: $(selector).isHovered() or $.isHovered(selector)
 *
 **/
;(function(b,c){b('*').hover(function(){b(this).data(c,1)},function(){b(this).data(c,0)}).data(c,0);b[c]=function(a){return b(a)[c]()};b.fn[c]=function(a){a=0;b(this).each(function(){a+=b(this).data(c)});return a>0}})(jQuery,'isHovered');
;
﻿var Navigation = function () {
	var _public = {};

	_public.init = function (options) {
		/* ====================== */
		/* Push Down Navigation   */
		/* ====================== */
		var currentTab;
		var navContainerDiv = $j("#mega_nav");
		
		// Main navigation over/out
		hoverIntentConfig = {    
			 over: slideDownNavHoverOver, // function = onMouseOver callback (REQUIRED)    
			 timeout: 15, // number = milliseconds delay before onMouseOut    
			 out: slideDownNavHoverOut, // function = onMouseOut callback (REQUIRED)
			 sensitivity: 15,
			 interval: 50
		};
		$j(".main_nav a.has_subnav").hoverIntent(hoverIntentConfig);		

		function slideDownNavHoverOut(){
			currentTab = null;
			slideNavUp($j("#" + $j(this).attr("id") + "_push_down"));
		}
		
		function slideNavUp(element){
			setTimeout(function(){slideUpNavTimed(element)},250); // give jQuery a chance to determine new mouse location
		}	
		
		// Timed action function called from main event binding
		function slideUpNavTimed(element){
			  if (!($j(element).isHovered()) && !($j("#" + $j(element).data().trigger.id).isHovered())){ // if not hovered over subnav or hovering over parent nav again
				  $j(element).fadeOut(0,"easeOutSine");
				  $j("#" + $j(element).data().trigger.id).removeClass("hover");
				  if ( !($j("#" +$j(currentTab).attr("id") + "_push_down").length > 0) ){ // Only slide parent up if not showing a subnav. This prevents the parent from animating when switching between two elements with subnav
					  $j(navContainerDiv).slideUp(100,"easeInSine");
				  }
			  }		
		}	
		
		
		// Main slide down function
		function slideDownNavHoverOver(){
			currentTab = $j(this);
			$j(currentTab).addClass("hover");	
			if ( $j("#" + $j(currentTab).attr("id") + "_push_down").length > 0){
				if (!($j("#" + $j(currentTab).attr("id") + "_push_down").is(":visible")) ){ // Only slide down if there is a target and if the target subnav isn't already displayed
					$j("#" + $j(currentTab).attr("id") + "_push_down").slideDown(0,"easeInSine",function(){
						$j(navContainerDiv).slideDown(150,"easeInSine");					
					});
				}
			}
		}
		
		// Sub navigation mouseout
		$j(".push_down").mouseout(function(){
			slideNavUp($j(this));
		});
		
		$j("a.no_link").click(function(){
			return false;
		});
	};

	return _public;
} ();

$j(function ($j) {
	Navigation.init();
});
;
// Generated by CoffeeScript 1.4.0
/*
jQuery Waypoints - v2.0.1
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t,e,n,r,i,o,l,s,f,u,a,c,h,d,p,w,y=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},v=[].slice;t=window.jQuery;e=t(window);i={horizontal:{},vertical:{}};o=1;s={};l="waypoints-context-id";a="resize.waypoints";c="scroll.waypoints";h=1;d="waypoints-waypoint-ids";p="waypoint";w="waypoints";n=function(){function e(e){var n=this;this.$element=e;this.element=e[0];this.didResize=false;this.didScroll=false;this.id="context"+o++;this.oldScroll={x:e.scrollLeft(),y:e.scrollTop()};this.waypoints={horizontal:{},vertical:{}};e.data(l,this.id);s[this.id]=this;e.bind(c,function(){var e;if(!n.didScroll){n.didScroll=true;e=function(){n.doScroll();return n.didScroll=false};return window.setTimeout(e,t[w].settings.scrollThrottle)}});e.bind(a,function(){var e;if(!n.didResize){n.didResize=true;e=function(){t[w]("refresh");return n.didResize=false};return window.setTimeout(e,t[w].settings.resizeThrottle)}})}e.prototype.doScroll=function(){var e,n=this;e={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(y.call(window,"ontouchstart")>=0&&(!e.vertical.oldScroll||!e.vertical.newScroll)){t[w]("refresh")}t.each(e,function(e,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;t.each(n.waypoints[e],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return t.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}};e.prototype.refresh=function(){var e,n,r,i=this;r=t.isWindow(this.element);n=this.$element.offset();this.doScroll();e={horizontal:{contextOffset:r?0:n.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:n.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?t[w]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return t.each(e,function(e,n){return t.each(i.waypoints[e],function(e,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=t.isWindow(r.element)?0:r.$element.offset()[n.offsetProp];if(t.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(n.contextDimension*i/100)}}r.offset=o-n.contextOffset+n.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=n.oldScroll)&&s<=r.offset){return r.trigger([n.backward])}else if(l!==null&&l>(f=n.oldScroll)&&f>=r.offset){return r.trigger([n.forward])}else if(l===null&&n.oldScroll>=r.offset){return r.trigger([n.forward])}})})};e.prototype.checkEmpty=function(){if(t.isEmptyObject(this.waypoints.horizontal)&&t.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([a,c].join(" "));return delete s[this.id]}};return e}();r=function(){function e(e,n,r){var o,l;r=t.extend({},t.fn[p].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var e;e=t[w]("viewportHeight");if(!t.isWindow(n.element)){e=n.$element.height()}return e-t(this).outerHeight()}}this.$element=e;this.element=e[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=n;this.enabled=r.enabled;this.id="waypoints"+h++;this.offset=null;this.options=r;n.waypoints[this.axis][this.id]=this;i[this.axis][this.id]=this;o=(l=e.data(d))!=null?l:[];o.push(this.id);e.data(d,o)}e.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};e.prototype.disable=function(){return this.enabled=false};e.prototype.enable=function(){this.context.refresh();return this.enabled=true};e.prototype.destroy=function(){delete i[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};e.getWaypointsByElement=function(e){var n,r;r=t(e).data(d);if(!r){return[]}n=t.extend({},i.horizontal,i.vertical);return t.map(r,function(t){return n[t]})};return e}();u={init:function(e,i){var o;if(i==null){i={}}if((o=i.handler)==null){i.handler=e}this.each(function(){var e,o,f,u;e=t(this);f=(u=i.context)!=null?u:t.fn[p].defaults.context;if(!t.isWindow(f)){f=e.closest(f)}f=t(f);o=s[f.data(l)];if(!o){o=new n(f)}return new r(e,o,i)});t[w]("refresh");return this},disable:function(){return u._invoke(this,"disable")},enable:function(){return u._invoke(this,"enable")},destroy:function(){return u._invoke(this,"destroy")},prev:function(t,e){return u._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return u._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(e,n,r){var i,o;if(e==null){e="vertical"}if(n==null){n=window}o=f.aggregate(n);i=[];this.each(function(){var n;n=t.inArray(this,o[e]);return r(i,n,o[e])});return this.pushStack(i)},_invoke:function(e,n){e.each(function(){var e;e=r.getWaypointsByElement(this);return t.each(e,function(t,e){e[n]();return true})});return this}};t.fn[p]=function(){var e,n;n=arguments[0],e=2<=arguments.length?v.call(arguments,1):[];if(u[n]){return u[n].apply(this,e)}else if(t.isFunction(n)){return u.init.apply(this,arguments)}else if(t.isPlainObject(n)){return u.init.apply(this,[null,n])}else if(!n){return t.error("jQuery Waypoints needs a callback function or handler option.")}else{return t.error("The "+n+" method does not exist in jQuery Waypoints.")}};t.fn[p].defaults={context:window,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};f={refresh:function(){return t.each(s,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=window.innerHeight)!=null?t:e.height()},aggregate:function(e){var n,r,o;n=i;if(e){n=(o=s[t(e).data(l)])!=null?o.waypoints:void 0}if(!n){return[]}r={horizontal:[],vertical:[]};t.each(r,function(e,i){t.each(n[e],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[e]=t.map(i,function(t){return t.element});return r[e]=t.unique(r[e])});return r},above:function(t){if(t==null){t=window}return f._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=window}return f._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=window}return f._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=window}return f._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return f._invoke("enable")},disable:function(){return f._invoke("disable")},destroy:function(){return f._invoke("destroy")},extendFn:function(t,e){return u[t]=e},_invoke:function(e){var n;n=t.extend({},i.vertical,i.horizontal);return t.each(n,function(t,n){n[e]();return true})},_filter:function(e,n,r){var i,o;i=s[t(e).data(l)];if(!i){return[]}o=[];t.each(i.waypoints[n],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return t.map(o,function(t){return t.element})}};t[w]=function(){var t,e;e=arguments[0],t=2<=arguments.length?v.call(arguments,1):[];if(f[e]){return f[e].apply(null,t)}else{return f.aggregate.call(null,e)}};t[w].settings={resizeThrottle:100,scrollThrottle:30};e.load(function(){return t[w]("refresh")})}).call(this);
;
// Generated by CoffeeScript 1.4.0
/*
Sticky Elements Shortcut for jQuery Waypoints - v2.0.1
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t,n,r;t=window.jQuery;n={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck"};r=function(n,r){n.wrap(r.wrapper);n.each(function(){var n;n=t(this);n.parent().height(n.height());return true});return n.parent()};t.waypoints("extendFn","sticky",function(e){var i;e=t.extend({},t.fn.waypoint.defaults,n,e);i=r(this,e);e.handler=function(n){var r,i;r=t(this).children(":first");i=n==="down"||n==="right";return r.toggleClass(e.stuckClass,i)};i.waypoint(e);return this})}).call(this);
;
var Sticky = function () {
	var _public = {};

	var StickySetup = function () {
		
		// Stick the SM tools to the start of the main_content (start of wordpress content, after wordpress intro), or start of jive content
		yOffset = 225; // default width, if all else fails
		var topWaypoint;

		// Too small for this sidebar include... sad
		if ($j("body").width() < 1100){
			$j("#sticky-social_media").hide();
			return false;
		}

		if ($j("#main_content").html() != null){
			yOffset = $j("#main_content").offset().top;
			topWaypoint = $j("#main_content");
		} else if ($j("#hub").html() != null){
			yOffset = $j("#j-main > .container").offset().top;
			topWaypoint = $j("#j-main > .container");
		} else {
			yOffset = $j("#j-main").offset().top;
			topWaypoint = $j("#j-main");
		}

		$j("#sticky-social_media").css({"top":yOffset});
		
		// Fix the SM tools once we've scrolled past the start of main content
		topWaypoint.waypoint(function(direction) {
			if (direction == "down"){
				$j("#sticky-social_media").css({"position":"fixed","top":"25px"});
			} else {
				$j("#sticky-social_media").css({"position":"absolute","top":yOffset});
			}
		});
		
		// As the sticky SM tools get close to the footer, get rid of them. By the Numbers is the start of the footer for WP pages.
		var bottomWaypoint;
		if ($j('#by_the_numbers').html() != null){
			bottomWaypoint = $j('#by_the_numbers');
		} else {
			bottomWaypoint = $j('#footer')	
		}
		bottomWaypoint.waypoint(function(direction) {
			if (direction == "down"){
				$j("#sticky-social_media").fadeOut(250);
			} else {
				$j("#sticky-social_media").fadeIn(250);
			}
		},{offset: 475});	
		
	};

	_public.init = function (options) {
		$j(document).ready(function(){
			StickySetup();
		});
	};

	return _public;
} ();

$j(function ($j) {
	Sticky.init();
});
;
/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,e,b){var c="hashchange",h=document,f,g=$.event.special,i=h.documentMode,d="on"+c in e&&(i===b||i>7);function a(j){j=j||location.href;return"#"+j.replace(/^[^#]*#?(.*)$/,"$1")}$.fn[c]=function(j){return j?this.bind(c,j):this.trigger(c)};$.fn[c].delay=50;g[c]=$.extend(g[c],{setup:function(){if(d){return false}$(f.start)},teardown:function(){if(d){return false}$(f.stop)}});f=(function(){var j={},p,m=a(),k=function(q){return q},l=k,o=k;j.start=function(){p||n()};j.stop=function(){p&&clearTimeout(p);p=b};function n(){var r=a(),q=o(m);if(r!==m){l(m=r,q);$(e).trigger(c)}else{if(q!==m){location.href=location.href.replace(/#.*/,"")+q}}p=setTimeout(n,$.fn[c].delay)}$.browser.msie&&!d&&(function(){var q,r;j.start=function(){if(!q){r=$.fn[c].src;r=r&&r+a();q=$('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){r||l(a());n()}).attr("src",r||"javascript:0").insertAfter("body")[0].contentWindow;h.onpropertychange=function(){try{if(event.propertyName==="title"){q.document.title=h.title}}catch(s){}}}};j.stop=k;o=function(){return a(q.location.href)};l=function(v,s){var u=q.document,t=$.fn[c].domain;if(v!==s){u.title=h.title;u.open();t&&u.write('<script>document.domain="'+t+'"<\/script>');u.close();q.location.hash=v}}})();return j})()})(jQuery,this);
;
(function ($) {
    $.fn.sevenSummits_tabbed_component = function (options) {
        // Default Values
        var defaults = {
            speed: 250,
            animateTabs: true,
            tabsSelector: ".tabbed_component_tabs li",
            contentSelector: ".tabbed_component_contents",
            activeClass: "active",
            activeContentClass: "active",
            contentContainerSelector: ".tabbed_component_contents"
        };

        options = $.extend(defaults, options);
		
		var topLevel = this;
		
		$(this).each(function() {
			var rootSelector = this;

			function tabSelected() {
				if(!$(this).hasClass(options.activeClass)) {
					$(options.tabsSelector, rootSelector).removeClass(options.activeClass);
					$(this, rootSelector).addClass(options.activeClass);

					$(options.contentSelector, rootSelector).find("." + options.activeContentClass).removeClass(options.activeContentClass).hide();
					if (options.animateTabs) {
						var height = $(options.contentSelector + " > :nth-child(" + ($(options.tabsSelector, rootSelector).index(this) + 1) + ")", rootSelector).addClass(options.activeContentClass).fadeIn(options.speed).height();
						$(options.contentContainerSelector, rootSelector).animate({height: height + 30}, options.speed);
					} else {
						var height = $(options.contentSelector + " > :nth-child(" + ($(options.tabsSelector, rootSelector).index(this) + 1) + ")", rootSelector).addClass(options.activeContentClass).show().height();
						$(options.contentContainerSelector, rootSelector).css({height: height + 30});
					}
				}
			}

			$(this).find(options.tabsSelector).click(tabSelected);
			tabSelected.apply($(this).find(options.tabsSelector).first());
		});
		
		$(window).hashchange(function() {
			var hash = location.hash;
			if(hash !== "" && hash.indexOf("tab") !== -1) {
				hash = hash.substr(1);
				hash.split("|").forEach(function(element) {
					var requestedTab = element.match(/tab([0-9]+)-([0-9]+)/);
					$(topLevel).eq(requestedTab[1] - 1).find(options.tabsSelector).eq(requestedTab[2] - 1).click();
					console.log(requestedTab);
				});
			}
		});
		$(window).hashchange();
    };
})(jQuery);  

$j(document).ready(function(){
    $j(".7S_tabbed_component").sevenSummits_tabbed_component();
});
;
/*===================================
    Ask Your Question Customization
    ===================================*/

    // disable submitting form when logged out
    if ($j(".authenticated-false")[0]){

        $j('.ask-a-question-container form').submit(function(){
            return false;
        });
        $j('.ask-a-question-container button').on('click', function(){
            return false;
        });
		
		var varAppendTimeoutHolder = '';

		$j('.ask-a-question-container input.ask-a-question-search').live('keyup', function(){
			
			var val = $j(this).val();
			
			var self = $j(this);
			
			//clear timeout
			clearTimeout(varAppendTimeoutHolder);
			
			//set timeout
			varAppendTimeoutHolder = setTimeout(function(){
			
	            if(val !== ''){
	            	
	            	$j('.ask-a-question-container').addClass('show-results');
	            	
	            	if($j('#askAQuestionLoggedOut').length == 0){	            		
						$j(self).parent().append('<div id="askAQuestionLoggedOut" style="margin-top: 10px; display: none;"><h4>Can\'t find your question?</h4><a type="submit" href="/login.jspa" class="j-btn-global" style="margin-top: 8px;">Login to ask it</a></div>');						
					}

					$j('#askAQuestionLoggedOut').fadeIn();
					
					$j('.ask-a-question-results h4').show();
				
				} else { 
					
	                $j('.ask-a-question-container').removeClass('show-results');
	                $j('.ask-a-question-results').remove();	
	                $j('#askAQuestionLoggedOut').hide();		
	
				}
			
			}, 600);
			
		});
		
    } 

;
// modified from http://www.scriptiny.com/2012/09/jquery-input-textarea-limiter/

(function($) {
    $.fn.extend( {
        limiter: function(limit) {
            $(this).on("keyup focus", function() {
                setCount(this, elem);
            });
            function setCount(src) {
                var chars = src.value.length;
                if (chars > limit) {
                    src.value = src.value.substr(0, limit);
                    chars = limit;
                }
                // Find nearest count div and update it
                elem = $(src).parent().next();
                $(".count",elem).html( limit - chars + " characters remaining.");
            }
            // Append a count div
            $(this).parent().next().html($(this).parent().next().html() + "<div class='count font-color-meta' style='font-style: italic; font-size: 11px;'></div>")
            
            setCount($(this)[0]);
        }
    });
})(jQuery);

$j(document).ready(function(){
    if ($j(".honors_and_awards textarea").length != 0) {$j(".honors_and_awards textarea").limiter(3000);}
    if ($j(".education textarea").length != 0) {$j(".education textarea").limiter(3000);}
    if ($j(".publications textarea").length != 0) {$j(".publications textarea").limiter(3000);}
});
;
// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// Place any jQuery/helper plugins in here.

;
/*!
 * selectivizr v1.0.2 - (c) Keith Clark, freely distributable under the terms of the MIT license.
 * selectivizr.com
 */
(function(j){function A(a){return a.replace(B,h).replace(C,function(a,d,b){for(var a=b.split(","),b=0,e=a.length;b<e;b++){var s=D(a[b].replace(E,h).replace(F,h))+o,l=[];a[b]=s.replace(G,function(a,b,c,d,e){if(b){if(l.length>0){var a=l,f,e=s.substring(0,e).replace(H,i);if(e==i||e.charAt(e.length-1)==o)e+="*";try{f=t(e)}catch(k){}if(f){e=0;for(c=f.length;e<c;e++){for(var d=f[e],h=d.className,j=0,m=a.length;j<m;j++){var g=a[j];if(!RegExp("(^|\\s)"+g.className+"(\\s|$)").test(d.className)&&g.b&&(g.b===!0||g.b(d)===!0))h=u(h,g.className,!0)}d.className=h}}l=[]}return b}else{if(b=c?I(c):!v||v.test(d)?{className:w(d),b:!0}:null)return l.push(b),"."+b.className;return a}})}return d+a.join(",")})}function I(a){var c=!0,d=w(a.slice(1)),b=a.substring(0,5)==":not(",e,f;b&&(a=a.slice(5,-1));var l=a.indexOf("(");l>-1&&(a=a.substring(0,l));if(a.charAt(0)==":")switch(a.slice(1)){case "root":c=function(a){return b?a!=p:a==p};break;case "target":if(m==8){c=function(a){function c(){var d=location.hash,e=d.slice(1);return b?d==i||a.id!=e:d!=i&&a.id==e}k(j,"hashchange",function(){g(a,d,c())});return c()};break}return!1;case "checked":c=function(a){J.test(a.type)&&k(a,"propertychange",function(){event.propertyName=="checked"&&g(a,d,a.checked!==b)});return a.checked!==b};break;case "disabled":b=!b;case "enabled":c=function(c){if(K.test(c.tagName))return k(c,"propertychange",function(){event.propertyName=="$disabled"&&g(c,d,c.a===b)}),q.push(c),c.a=c.disabled,c.disabled===b;return a==":enabled"?b:!b};break;case "focus":e="focus",f="blur";case "hover":e||(e="mouseenter",f="mouseleave");c=function(a){k(a,b?f:e,function(){g(a,d,!0)});k(a,b?e:f,function(){g(a,d,!1)});return b};break;default:if(!L.test(a))return!1}return{className:d,b:c}}function w(a){return M+"-"+(m==6&&N?O++:a.replace(P,function(a){return a.charCodeAt(0)}))}function D(a){return a.replace(x,h).replace(Q,o)}function g(a,c,d){var b=a.className,c=u(b,c,d);if(c!=b)a.className=c,a.parentNode.className+=i}function u(a,c,d){var b=RegExp("(^|\\s)"+c+"(\\s|$)"),e=b.test(a);return d?e?a:a+o+c:e?a.replace(b,h).replace(x,h):a}function k(a,c,d){a.attachEvent("on"+c,d)}function r(a,c){if(/^https?:\/\//i.test(a))return c.substring(0,c.indexOf("/",8))==a.substring(0,a.indexOf("/",8))?a:null;if(a.charAt(0)=="/")return c.substring(0,c.indexOf("/",8))+a;var d=c.split(/[?#]/)[0];a.charAt(0)!="?"&&d.charAt(d.length-1)!="/"&&(d=d.substring(0,d.lastIndexOf("/")+1));return d+a}function y(a){if(a)return n.open("GET",a,!1),n.send(),(n.status==200?n.responseText:i).replace(R,i).replace(S,function(c,d,b,e,f){return y(r(b||f,a))}).replace(T,function(c,d,b){d=d||i;return" url("+d+r(b,a)+d+") "});return i}function U(){var a,c;a=f.getElementsByTagName("BASE");for(var d=a.length>0?a[0].href:f.location.href,b=0;b<f.styleSheets.length;b++)if(c=f.styleSheets[b],c.href!=i&&(a=r(c.href,d)))c.cssText=A(y(a));q.length>0&&setInterval(function(){for(var a=0,c=q.length;a<c;a++){var b=q[a];if(b.disabled!==b.a)b.disabled?(b.disabled=!1,b.a=!0,b.disabled=!0):b.a=b.disabled}},250)}if(!/*@cc_on!@*/true){var f=document,p=f.documentElement,n=function(){if(j.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(a){return null}}(),m=/MSIE (\d+)/.exec(navigator.userAgent)[1];if(!(f.compatMode!="CSS1Compat"||m<6||m>8||!n)){var z={NW:"*.Dom.select",MooTools:"$$",DOMAssistant:"*.$",Prototype:"$$",YAHOO:"*.util.Selector.query",Sizzle:"*",jQuery:"*",dojo:"*.query"},t,q=[],O=0,N=!0,M="slvzr",R=/(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*/g,S=/@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))[^;]*;/g,T=/\burl\(\s*(["']?)(?!data:)([^"')]+)\1\s*\)/g,L=/^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/,B=/:(:first-(?:line|letter))/g,C=/(^|})\s*([^\{]*?[\[:][^{]+)/g,G=/([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g,H=/(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g,P=/[^\w-]/g,K=/^(INPUT|SELECT|TEXTAREA|BUTTON)$/,J=/^(checkbox|radio)$/,v=m>6?/[\$\^*]=(['"])\1/:null,E=/([(\[+~])\s+/g,F=/\s+([)\]+~])/g,Q=/\s+/g,x=/^\s*((?:[\S\s]*\S)?)\s*$/,i="",o=" ",h="$1";(function(a,c){function d(){try{p.doScroll("left")}catch(a){setTimeout(d,50);return}b("poll")}function b(d){if(!(d.type=="readystatechange"&&f.readyState!="complete")&&((d.type=="load"?a:f).detachEvent("on"+d.type,b,!1),!e&&(e=!0)))c.call(a,d.type||d)}var e=!1,g=!0;if(f.readyState=="complete")c.call(a,i);else{if(f.createEventObject&&p.doScroll){try{g=!a.frameElement}catch(h){}g&&d()}k(f,"readystatechange",b);k(a,"load",b)}})(j,function(){for(var a in z){var c,d,b=j;if(j[a]){for(c=z[a].replace("*",a).split(".");(d=c.shift())&&(b=b[d]););if(typeof b=="function"){t=b;U();break}}}})}}})(this);
;
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||function(a){"use strict";var c,d=a.documentElement,e=d.firstElementChild||d.firstChild,f=a.createElement("body"),g=a.createElement("div");return g.id="mq-test-1",g.style.cssText="position:absolute;top:-100em",f.style.background="none",f.appendChild(g),function(a){return g.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',d.insertBefore(f,e),c=42===g.offsetWidth,d.removeChild(f),{matches:c,media:a}}}(document);

/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(a){"use strict";function x(){u(!0)}var b={};if(a.respond=b,b.update=function(){},b.mediaQueriesSupported=a.matchMedia&&a.matchMedia("only all").matches,!b.mediaQueriesSupported){var q,r,t,c=a.document,d=c.documentElement,e=[],f=[],g=[],h={},i=30,j=c.getElementsByTagName("head")[0]||d,k=c.getElementsByTagName("base")[0],l=j.getElementsByTagName("link"),m=[],n=function(){for(var b=0;l.length>b;b++){var c=l[b],d=c.href,e=c.media,f=c.rel&&"stylesheet"===c.rel.toLowerCase();d&&f&&!h[d]&&(c.styleSheet&&c.styleSheet.rawCssText?(p(c.styleSheet.rawCssText,d,e),h[d]=!0):(!/^([a-zA-Z:]*\/\/)/.test(d)&&!k||d.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&m.push({href:d,media:e}))}o()},o=function(){if(m.length){var b=m.shift();v(b.href,function(c){p(c,b.href,b.media),h[b.href]=!0,a.setTimeout(function(){o()},0)})}},p=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),g=d&&d.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!g&&c;b.length&&(b+="/"),i&&(g=1);for(var j=0;g>j;j++){var k,l,m,n;i?(k=c,f.push(h(a))):(k=d[j].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,f.push(RegExp.$2&&h(RegExp.$2))),m=k.split(","),n=m.length;for(var o=0;n>o;o++)l=m[o],e.push({media:l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:f.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},s=function(){var a,b=c.createElement("div"),e=c.body,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",e||(e=f=c.createElement("body"),e.style.background="none"),e.appendChild(b),d.insertBefore(e,d.firstChild),a=b.offsetWidth,f?d.removeChild(e):e.removeChild(b),a=t=parseFloat(a)},u=function(b){var h="clientWidth",k=d[h],m="CSS1Compat"===c.compatMode&&k||c.body[h]||k,n={},o=l[l.length-1],p=(new Date).getTime();if(b&&q&&i>p-q)return a.clearTimeout(r),r=a.setTimeout(u,i),void 0;q=p;for(var v in e)if(e.hasOwnProperty(v)){var w=e[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?t||s():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?t||s():1)),w.hasquery&&(z&&A||!(z||m>=x)||!(A||y>=m))||(n[w.media]||(n[w.media]=[]),n[w.media].push(f[w.rules]))}for(var C in g)g.hasOwnProperty(C)&&g[C]&&g[C].parentNode===j&&j.removeChild(g[C]);for(var D in n)if(n.hasOwnProperty(D)){var E=c.createElement("style"),F=n[D].join("\n");E.type="text/css",E.media=D,j.insertBefore(E,o.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(c.createTextNode(F)),g.push(E)}},v=function(a,b){var c=w();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},w=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}();n(),b.update=n,a.addEventListener?a.addEventListener("resize",x,!1):a.attachEvent&&a.attachEvent("onresize",x)}})(this);
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.nav=="undefined"){jive.nav={}}if(typeof jive.nav.menu=="undefined"){jive.nav.menu={}}if(typeof jive.nav.menu.create=="undefined"){jive.nav.menu.create={}}jive.nav.menu.create.contentTypes=function(G,E){var C=E||new soy.StringBuilder();C.append('<div class="j-pop-desc">',(G.smallView)?'<a href="#" class="toggle j-menu-quick-toplink js-use-large-menu font-color-meta" role="presentation">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("nav.bar.create.use_large_link"),[]))+"</a>":'<a href="#" class="toggle j-menu-quick-toplink js-use-small-menu font-color-meta" role="presentation">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("nav.bar.create.use_small_link"),[]))+"</a>","<h2>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("nav.bar.create.link"),[])),"</h2></div>");var D=G.sections;var F=D.length;for(var B=0;B<F;B++){var A=D[B];if(A.visible){C.append('<strong class="j-menu-quick-sectionlabel font-color-meta-light">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.name),[])),'</strong><ul id="create-list-',soy.$$escapeHtml(B),'" class="j-icon-list js-create-list">');var J=A.items;var I=J.length;for(var K=0;K<I;K++){var H=J[K];if(H.visible){jive.nav.menu.create.contentTypeLinkItem(soy.$$augmentData(H,{smallView:G.smallView}),C)}}C.append("</ul>")}}return E?"":C.toString()};jive.nav.menu.create.contentTypeLinkItem=function(A,C){var B=C||new soy.StringBuilder();if(A.uploadable){B.append("<li>");jive.nav.menu.create.contentTypeLink(soy.$$augmentData(A.uploadLink,{upload:true,smallView:A.smallView}),B);B.append("</li>")}B.append("<li>");jive.nav.menu.create.contentTypeLink(A,B);B.append("</li>");return C?"":B.toString()};jive.nav.menu.create.contentTypeLink=function(A,C){var B=C||new soy.StringBuilder();if(A.iconCss){B.append('<a href="');jive.nav.menu.create.contentTypeHref(soy.$$augmentData(A,{legacy:((A.linkCss).match(new RegExp("js-legacy-create",""))||[]).length>0}),B);B.append('" class="',soy.$$escapeHtml(A.linkCss),'"',(A.urlParams&&A.urlParams.contentType)?' data-content-type="'+soy.$$escapeHtml(A.urlParams.contentType)+'"':"",(A.upload)?' data-upload="true"':"");if(((A.linkCss).match(new RegExp("quick",""))||[]).length>0){B.append(' data-quick-create-url="');jive.nav.menu.create.contentTypeHref(soy.$$augmentData(A,{legacy:true}),B);B.append('"')}B.append('><span class="',soy.$$escapeHtml(A.iconCss)," jive-icon-",(A.iconSize)?soy.$$escapeHtml(A.iconSize):(A.smallView)?"med":"big",'"></span>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.smallView&&A.smallNameKey?A.smallNameKey:A.nameKey),[])),"</a>")}B.append((!A.smallView&&A.descriptionKey)?"<p>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.descriptionKey),[]))+"</p>":"");return C?"":B.toString()};jive.nav.menu.create.contentTypeHref=function(A,C){var B=C||new soy.StringBuilder();B.append((A.legacy)?(A.urlParams)?soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,A.url)+"?"+jive.soy.func.buildParameterString(jQuery.extend({},(function(){var F={};var E=[["sr","cmenu"]];for(var D=0;D<E.length;D+=1){F[E[D][0]]=E[D][1]}return F})(),A.urlParams))):soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,A.url)+"?"+jive.soy.func.buildParameterString((function(){var F={};var E=[["sr","cmenu"]];for(var D=0;D<E.length;D+=1){F[E[D][0]]=E[D][1]}return F})())):"javascript:void(0)");return C?"":B.toString()};jive.nav.menu.create.quick=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="jive-modal jive-modal-quickcreate">');jive.shared.displayutil.a11yBoundary({type:"dialog"},B);B.append('<header class="j-modal-header"><h2 class="js-title">',soy.$$escapeHtml(A.title),'</h2></header><label class="j-508-label" id="close-modal-508">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close.modal"),[])),'</label><a href="#" class="j-modal-close-top close" aria-labelledby="close-modal-508" title="',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close.modal"),[])),'">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close"),[])),'  <span class="j-close-icon j-ui-elem" role="img"></span></a><section class="jive-modal-content">',A.body,"</section>");jive.shared.displayutil.a11yBoundary({type:"dialog",isEnd:true},B);B.append("</div>");return C?"":B.toString()}
;
jive=this.jive||{};jive.oo=jive.oo||{};jive.oo.resolve=function(b,a){var c;return a.superclass.extend(function(e,k){var j=a.definition,i,h=this;if(typeof j=="function"){j.call(h,e,k)}else{for(i in j){if(j.hasOwnProperty(i)){h[i]=j[i]}}}g(h);g(e);f(h);f(e);function g(l){d(l,function(m){if(b[m]===c){delete l[m]}})}function f(l){d(l,function(m){if(b[m]){l[b[m]]=l[m];delete l[m]}})}function d(m,n){for(var l in m){if(b.hasOwnProperty(l)&&m.hasOwnProperty(l)){n(l)}}}})};
;
jive.AbstractFlowController=jive.oo.Class.extend(function(a){a.init=function(d,c){var b=this;this.initialView=c;this.activeView=c;this.transitions=d;this.events=Object.keys(d);this.views=[c].concat(Object.values(d)).unique();this.resetHistory();b.views.forEach(function(e){b.events.forEach(function(f){e.addListener(f,function(){var h=Array.prototype.slice.call(arguments),g=b.transitions[f];b.transitionTo.apply(b,[g].concat(h));b.viewHistory.push({view:g,args:h});b.activeView=g})});e.addListener("back",function(){b.viewHistory.pop();var h=b.viewHistory.last(),f=h.view,g=h.args;if(b.transitionBack){b.transitionBack.apply(b,[f].concat(g))}else{b.transitionTo.apply(b,[f].concat(g))}b.activeView=f})})};a.transitionTo=jive.oo._abstract;a.resetHistory=function(){this.viewHistory=[{view:this.initialView,data:[]}]}});
;
jive.namespace("Navbar.Menu.Create");jive.Navbar.Menu.Create.CreateFlowController=jive.oo.compose(jive.oo.resolve({init:"initFlowController"},jive.AbstractFlowController),jive.oo.resolve({init:"initListView"},jive.Navbar.Menu.AbstractListView)).extend(function(a,b){a.init=function(c,e,f,d){this.initFlowController(f,d);this.initListView(c,e);this.views.forEach(function(g){g.addListener("browse",function(){jQuery(e).trigger("close")})})};this.render=function(c){this.activeView=this.initialView;this.activeView.render(c);this.setContent(this.activeView.getContent());this.setClass();this.resetHistory()};this.getContent=function(){return this.activeView.getContent()};a.setContent=function(c,d){this.setClass();b.setContent.call(this,c,d)};a.transitionTo=function(d){var f=Array.prototype.slice.call(arguments,1),c=this,e=this.activeView.getClass?this.activeView.getClass():"",h=d.getClass?d.getClass():"";var i=d.render.apply(d,f).addCallback(function(){var j=d.getContent();c.setContent(j,function(){j.find(":input:visible").first().focus()})});var g=f.last();if(f.last()&&f.last().emitSuccess&&f.last().emitError){i.addCallback(g.emitSuccess.bind(g));i.addErrback(g.emitError.bind(g))}};a.setClass=function(){var c=this.$menu,d=this.activeView.getClass?this.activeView.getClass():"";this.views.filter(function(e){return e.getClass||e.getClassToRemove}).forEach(function(f){var e=f.getClassToRemove?f.getClassToRemove():f.getClass;c.removeClass(e)});if(d){c.addClass(d)}}});
;
jive.namespace("Navbar.Menu.Create");jive.Navbar.Menu.Create.TypeChooserView=jive.AbstractView.extend(function(a){var b=jQuery;this.getContent=function(){return this.content};this.getClass=function(){if(this.data&&!this.data.smallView){return"j-choose-type j-large-view"}else{return"j-choose-type j-small-view"}};this.getClassToRemove=function(){return"j-choose-type j-small-view j-large-view"};this.render=function(d){var c=b(jive.nav.menu.create.contentTypes(this.data||d)),f=new jive.conc.Promise(),e=this;e.updateCurrentContainer();e.$items=c.filter(".js-create-list");e.$items.find("a").click(function(){var h=b(this).attr("data-content-type"),g=!!b(this).attr("data-upload");e.showSpinner({size:"small",showLabel:false,context:b(this).parent("li")});if(h&&b(this).hasClass("js-createmenu-containerchooser")){e.emitP("contentType",h,g).always(function(){e.hideSpinner()});return false}});e.$items.find("a.quick").click(function(){var h=b(this).attr("data-content-type"),g=b(this).data("quick-create-url");e.emit("quickCreate",h,g);return false});e.flatFind(c,".js-use-small-menu").click(function(g){e.data.smallView=true;e.emit("toggleView",true,e.data);g.preventDefault()});e.flatFind(c,".js-use-large-menu").click(function(g){e.data.smallView=false;e.emit("toggleView",false,e.data);g.preventDefault()});this.content=c;this.data=this.data||d;if(e.currentContainerType&&e.currentContainerID){$j(c).find("a.js-container-context").each(function(){$j(this).querystring("containerType="+e.currentContainerType+"&containerID="+e.currentContainerID)})}f.emitSuccess();return f};a.flatFind=function(d,c){return d.find(c).andSelf().filter(c)};a.updateCurrentContainer=function(){var c=this;if(containerType&&containerID&&(typeof c.currentContainerType=="undefined"||typeof c.currentContainerID=="undefined")){c.currentContainerID=containerID;c.currentContainerType=containerType}}});
;
jive.namespace("Navbar.Menu.Create");jive.Navbar.Menu.Create.QuickCreateView=jive.AbstractView.extend(function(a){var b=jQuery;this.render=function(){var d=new jive.conc.Promise();var c=this;c.emitP("fetch").addCallback(function(f){var h=c.separateScripts(f.body),g=h[0],e=h[1],j=(g.match(/data-title\s*=\s*(['"])(.+?)\1/)||[])[2]||"",i;j=b("<div/>",{html:j}).text();i=b(jive.nav.menu.create.quick({title:j,body:g}));i.lightbox_me({closeSelector:".close",closeClick:false,closeEsc:false,destroyOnClose:true,initialFocusSelector:"input[type=text]:first",additionalFocusSelectors:"div[contenteditable]",closeFocusSelector:"#navCreate",onLoad:function(){e();d.emitSuccess()},onClose:function(){i.trigger("lightboxclose");delete c.content}});c.content=i});return d}});
;
jive.namespace("Navbar.Menu.Create");jive.Navbar.Menu.Create.ContainerChooserView=jive.AbstractView.extend(function(a){var c=jQuery,b=jive.Navbar.Menu.Create;this.getContent=function(){return this.content};this.getClass=function(){return"j-choose-container"};this.render=function(){var e=new jive.conc.Promise(),d=this;this.emitP("render").addCallback(function(g){var f,h,i;d.content=c(jive.placepicker.containers(g));d.content.find(".back").one("click",function(j){d.emit("back");j.preventDefault()});d.content.filter(".j-menu-quick-bottomlink").one("click",function(j){d.emit("browse",g);j.preventDefault()});h=d.flatFind(d.content,".j-places-list");i=new jive.Placepicker.ContainerSearchView(d.flatFind(d.content,"input[name=container-filter]"),h);d.proxyListener(i,"search");e.emitSuccess()});return e};a.flatFind=function(e,d){return e.find("*").andSelf().filter(d)}});
;
jive.namespace("Navbar.Menu.Create");jive.Navbar.Menu.Create.QuickCreateSource=jive.oo.Class.extend(function(a){this.fetch=function(b,d){var c=d||new jive.conc.Promise();$j.get(b,function(e){c.emitSuccess({body:e})});return c}});
;
jive.namespace("Navbar.Menu.Create");jive.Navbar.Menu.CreateSource=jive.RestService.extend(function(a){a.resourceType=a.pluralizedResourceType="createmenu"});
;
jive.namespace("Placepicker");jive.Placepicker.SuggestedContainersSource=jive.RestService.extend(function(a,b){a.resourceType="container";a.init=function(c){b.init.call(this,c);$j.extend(this.defaultParams,{containerType:c.containerType,containerID:c.containerID});this.RESOURCE_ENDPOINT=jive.rest.url("/containers/suggested")}});
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.wall=="undefined"){jive.wall={}}jive.wall.renderStatusSuccess=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="j-successful-post clearfix"><h3 class="font-color-okay">',(A.entry&&A.entry.status=="AWAITING_MODERATION")?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("we.form.posted.moderation"),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("wallentry.status.post.success.title"),[])),'</h3><a href="javascript:void(0);" class="j-success-post-dismiss close">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("wallentry.status.post.success.dismiss"),[])),"</a>");jive.wall.renderActivityStatus(A,B);jive.statusinput.attachments.renderAttachments(A,B);B.append("</div>");return C?"":B.toString()};jive.wall.renderActivityStatus=function(A,C){var B=C||new soy.StringBuilder();B.append(A.entry.message);return C?"":B.toString()};jive.wall.commentForm=function(A,C){var B=C||new soy.StringBuilder();B.append('<li class="comment-form clearfix">');if(A.canComment){jive.shared.displayutil.avatar(soy.$$augmentData(A.user,{size:32,currentUserPartner:A.user.partner}),B);B.append('<div class="jive-comment-arrow"></div><div class="jive-comment-content"><div class="jive-info-box" style="display:none" aria-live="polite" aria-atomic="true"></div><div class="jive-warn-box" style="display:none" aria-live="polite" aria-atomic="true"></div><div class="jive-error-box" style="display:none" aria-live="polite" aria-atomic="true"></div><form id="s-c-form-',soy.$$escapeHtmlAttribute(A.statusID),'" name="',soy.$$escapeHtmlAttribute(A.statusID),'" data-status-id="',soy.$$escapeHtmlAttribute(A.statusID),'" class="j-form j-mb-comment-form js-mb-comment-form">');jive.wall.statusInput({statusInputIdPostfix:A.statusID,default508Txt:soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("we.form.comment.aria.link.hint"),[]))},B);B.append('<input type="hidden" name="imageURL" /><div class="j-rte-message" ',(!A.visibleToExtCollaborator)?'style="display:none"':"",'><span class="jive-icon-med jive-icon-partner"></span><span class="font-color-meta-light j-browse-external-access"><em>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("partner.content.reply.warn.visible"),[])),"</em></span></div>");jive.wall.statusInputErrorWarnBox(null,B);B.append('<div class="j-status-input-actions j-act-comment-actions clearfix"><input type="button" class="j-comment-submit j-btn-global j-btn-callout" id="',soy.$$escapeHtmlAttribute(A.statusID),'" value="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("we.form.button.comment.label"),[])),'" />');jive.wall.statusInputActionContainer({displayImageBtn:false,canCreateImage:A.canCreateImage,canCreateVideo:false,repost:false,canAtMention:A.canAtMention},B);B.append("</div></form></div>")}B.append("</li>");return C?"":B.toString()};jive.wall.repostForm=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="j-repost-form jive-form-container clearfix">',(A.mbCreationModerated)?'<div class="jive-content-moderation-box"><span class="jive-icon-med jive-icon-warn"></span>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("mod.content.create"),[]))+"</div>":"",'<div class="jive-info-box" style="display:none" aria-live="polite" aria-atomic="true"></div><div class="jive-warn-box" style="display:none" aria-live="polite" aria-atomic="true"></div><div class="jive-error-box" style="display:none" aria-live="polite" aria-atomic="true"></div><form id="s-r-form-',soy.$$escapeHtmlAttribute(A.statusID),'" name="',soy.$$escapeHtmlAttribute(A.statusID),'" data-status-id="',soy.$$escapeHtmlAttribute(A.statusID),'" class="js-mb-repost-form">');jive.wall.statusInput({statusInputIdPostfix:"s-r-input-"+soy.$$escapeHtml(A.statusID),messageCSSClasses:"j-eae-txt-area",default508Txt:soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.mb.default.aria.repost.label"),[]))},B);B.append('<input type="hidden" name="imageURL" />');jive.wall.statusInputErrorWarnBox(null,B);B.append('</form><div class="j-status-input-actions j-act-comment-actions clearfix">');jive.wall.statusInputActionContainer({displayImageBtn:true,canCreateImage:A.canCreateImage,canCreateVideo:true,repost:true,statusID:A.statusID,canAtMention:A.canAtMention},B);B.append("</div></div>");return C?"":B.toString()};jive.wall.statusInput=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id="statusInputs-',soy.$$escapeHtmlAttribute(A.statusInputIdPostfix),'" class="j-mb-entry"><div class="j-rc4 jive-statusinput-default font-color-meta  jive-statusinput ',(A.defaultTxtCSSClasses)?A.defaultTxtCSSClasses:"jive-form-element-text",' jive-js-statusinput-default" ',(A.immediatelyFocus)?'style="display:none;"':"",' tabindex="0" role="link"><div class="j-ui-elem triangle"></div>',(A.defaultTxt)?A.defaultTxt:"",(A.default508Txt)?'<span class="j-508-label" id="jive-508-label-message-'+soy.$$escapeHtmlAttribute(A.statusInputIdPostfix)+'">'+soy.$$escapeHtml(A.default508Txt)+"</span>":"",'</div><div id="message-',soy.$$escapeHtmlAttribute(A.statusInputIdPostfix),'" class="j-rc4 jive-js-statusinput ',(A.messageCSSClasses)?A.messageCSSClasses:"jive-statusinput jive-form-element-text",'" style="position:relative;"></div></div>');return C?"":B.toString()};jive.wall.statusInputNotificationBoxes=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="jive-info-box" style="display:none" aria-live="polite" aria-atomic="true"></div><div class="jive-warn-box" style="display:none" aria-live="polite" aria-atomic="true"></div><div class="jive-error-box" style="display:none" aria-live="polite" aria-atomic="true"></div>');return C?"":B.toString()};jive.wall.statusInputNotificationBox=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="',soy.$$escapeHtmlAttribute(A.cssClass),'" style="display:none" aria-live="polite" aria-atomic="true"></div>');return C?"":B.toString()};jive.wall.charLenErrors=function(A,C){var B=C||new soy.StringBuilder();B.append((A.error)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("we.chars.over"),[A.numChars])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("we.chars.remaining"),[A.numChars])));return C?"":B.toString()};jive.wall.submitErrors=function(A,C){var B=C||new soy.StringBuilder();B.append((A.key=="over")?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("we.form.character.limit.over"),[])):(A.key=="none")?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("we.form.character.limit.none"),[])):"");return C?"":B.toString()};jive.wall.statusInputErrorWarnBox=function(A,C){var B=C||new soy.StringBuilder();B.append('<span class="j-wall-error" style="display:none"><strong>');if(jive.i18n.i18nText(jive.i18n.getMsg("we.form.character.limit.over.many"),[])==1){jive.shared.soy.i18nHelper({i18nKey:"we.form.character.limit.over.one",arg0:'<span class="j-number-over"></span>',noAutoEscape:true},B)}else{jive.shared.soy.i18nHelper({i18nKey:"we.form.character.limit.over.many",arg0:'<span class="j-number-over"></span>',noAutoEscape:true},B)}B.append('</strong></span><span class="j-wall-warn" style="display:none"><strong>');jive.shared.soy.i18nHelper({i18nKey:"we.form.character.limit.left",arg0:'<span class="j-number-left"></span>',noAutoEscape:true},B);B.append('</strong></span><span class="jive-js-error-general j-rc2 j-mb-message" style="display:none" aria-live="polite" aria-atomic="true"><strong>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("we.form.statusInput.error"),[])),"</strong></span>");return C?"":B.toString()};jive.wall.statusInputActionContainer=function(A,C){var B=C||new soy.StringBuilder();B.append((A.canCreateImage&&A.displayImageBtn)?'<div class="jive-js-image-container j-attachment-container clearfix"></div>':"",(A.repost)?'<input type="button" class="j-repost-submit j-btn-callout" data-statusid="'+soy.$$escapeHtmlAttribute(A.statusID)+'" value="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("we.form.repost"),[]))+'"><input type="button" class="close" value="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.cancel"),[]))+'">':"",(A.canCreateImage&&A.displayImageBtn)?'<a href="javascript:void(0);" class="j-btn-global j-wall-meta-image jive-js-imgattach-button" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("we.form.addimage"),[]))+'"><span class="jive-icon-med jive-icon-photo"></span></a>':"",(A.canAtMention)?'<a href="javascript:void(0);" class="jive-js-mention-button j-wall-meta-reference j-btn-global" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("we.form.addlink"),[]))+'"><label id="j-status-mention-wall-label" class="j-508-label">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("we.form.addlink"),[]))+'</label><span class="jive-icon-med jive-icon-mention" aria-labelledby="j-status-mention-wall-label"></span></a>':"",(A.canCreateImage)?'<div class="j-wall-meta-image-container j-attach-tab j-rc4"><form method="post" enctype="multipart/form-data"><input type="file" name="image" /><input type="hidden" name="imageURL" /></form></div>':"",(A.canCreateVideo)?'<div class="j-wall-meta-video-container j-attach-tab j-rc4"><form method="post"><input type="file" name="image" /><input type="hidden" name="imageURL" /></form></div>':"");return C?"":B.toString()};jive.wall.deleteCommentConfirmation=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="jive-modal jive-modal-narrow" id="jive-modal-delete-we-comment"><header><h2 class="jive-modal-title jive-modal-delete-we-comment">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("we.delete.comment"),[])),'</h2></header><div class="jive-modal-content jive-modal-delete-we-comment clearfix"><div class="jive-warn-box" aria-live="polite" aria-atomic="true"><div><span class="jive-icon-med jive-icon-warn"></span>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("we.delete.comment.confirm_del"),[])),'</div></div><div class="jive-form-buttons"><input id="we-comment-delete-submit-button" type="button" class="jive-modal-close j-btn-callout" name="delete" value="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("we.delete.comment.button"),[])),'"><input id="we-comment-delete-close-button" type="button" class="jive-modal-close close" value="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.cancel"),[])),'"></div></div></div>');return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.statusinput=="undefined"){jive.statusinput={}}if(typeof jive.statusinput.containers=="undefined"){jive.statusinput.containers={}}jive.statusinput.containers.microbloggingStatusInput=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id="j-js-',soy.$$escapeHtmlAttribute(A.statusID),'" class="j-mb">');jive.wall.statusInputNotificationBoxes(null,B);jive.shared.displayutil.avatar(soy.$$augmentData(A.user,{size:46,useLinks:true,showHover:true,currentUserPartner:A.user.partner}),B);B.append('<form id="form-',soy.$$escapeHtmlAttribute(A.statusID),'" name="',soy.$$escapeHtmlAttribute(A.statusID),'">');jive.wall.statusInput({statusInputIdPostfix:A.statusID,messageCSSClasses:"j-eae-txt-area",defaultTxt:soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.mb.default.text"),[])),default508Txt:soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.mb.default.aria.post.label"),[])),immediatelyFocus:A.focusStatusUpdate},B);jive.statusinput.containers.renderAttachmentsContainer({removable:true},B);B.append('<input type="hidden" name="ID" value="',soy.$$escapeHtmlAttribute(A.statusID),'"/><input type="hidden" name="statusInputType" value="mb"/>');jive.statusinput.containers.statusInputActions({statusID:A.statusID,i18nSubmitKey:"eae.mb.submit.text",displayImageBtn:A.canCreateMbImage,i18nCancelKey:"eae.mb.comment.cancel.text",displayAtMentionBtn:A.canAtMention},B);jive.wall.statusInputErrorWarnBox(null,B);B.append("</form>");jive.statusinput.containers.statusInputActionContainer({canCreateImage:A.canCreateMbImage,canCreateVideo:A.canCreateMbVideo},B);if(A.latestStatusUpdate){B.append('<div class="j-mb-last-update font-color-meta" style="',(!A.latestStatusUpdate.text)?"display:none":"",'">');jive.statusinput.containers.microbloggingStatusInputLastUpdate(A,B);B.append("</div>")}B.append("</div>");return C?"":B.toString()};jive.statusinput.containers.microbloggingStatusInputModal=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id="jive-update-status-quick" class="jive-userbar-slidedown-status" data-title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("nav.bar.create.heading.status"),[])),'">',(A.isModerated)?'<div class="jive-content-moderation-box"><span class="jive-icon-med jive-icon-warn"></span>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("mod.content.create"),[]))+"</div>":"",'<div id="jive-quickstatuscreate-form">');jive.statusinput.containers.microbloggingStatusInput({statusID:"mb-modal-editor",user:A.user,focusStatusUpdate:true,canCreateMbImage:A.canCreateMbImage,canCreateMbVideo:A.canCreateMbVideo,canAtMention:A.canAtMention},B);B.append('</div></div><script type="text/javascript">$j(function() {var mb_create_modal = new jive.MicroBlogging.MBCreateModalController(); mb_create_modal.getMicrobloggingView().focus();});<\/script>');return C?"":B.toString()};jive.statusinput.containers.microbloggingStatusInputModalSuccess=function(A,C){var B=C||new soy.StringBuilder();B.append("<p>",(A.wallentry.status!="AWAITING_MODERATION")?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.mb.post.success.title"),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("we.form.posted.moderation"),[])),"</p>");return C?"":B.toString()};jive.statusinput.containers.microbloggingStatusInputLastUpdate=function(A,C){var B=C||new soy.StringBuilder();B.append("<strong>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.mb.last_update"),[])),"</strong> ",A.latestStatusUpdate.text,' <strong><a href="',jive.soy.func.normalizeUrl(window._jive_base_url,A.latestStatusUpdate.url),'" class="j-comment-count j-inline-link font-color-meta-light" title="',(A.latestStatusUpdate.commentcount==1)?soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.comments.singular"),[A.latestStatusUpdate.commentcount])):soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.comments.plural"),[A.latestStatusUpdate.commentcount])),'"><span class="jive-icon-sml jive-glyph-comment"></span>',soy.$$escapeHtml(A.latestStatusUpdate.commentcount),"</a></strong>");return C?"":B.toString()};jive.statusinput.containers.microbloggingStatusInputSuccess=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id="j-js-mb-success" class="j-mb-success-msg j-rc4"><header class="font-color-new">',(A.entry.status!="AWAITING_MODERATION")?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.mb.post.success.title"),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("we.form.posted.moderation"),[])),'<a href="javascript:void(0)" class="j-js-mb-success-dismiss j-mb-dismiss"><span class="jive-icon-sml jive-glyph-remove"></span></a></header><p>',A.entry.message,"</p><p>");if(A.entry&&A.entry.meta&&A.entry.meta.length>0){jive.statusinput.containers.renderAttachmentsContainer({id:"attachmentContainer-success",entry:A.entry,visible:true},B);B.append("<script type=\"text/javascript\">$j(function() {window.setInterval(function(){var attachmentView = new jive.MicroBlogging.AttachmentView({selector:'#attachmentContainer-success'}); attachmentView.postRender();}, 0);});<\/script>")}B.append("</p><div>");return C?"":B.toString()};jive.statusinput.containers.microbloggingCommentStatusInput=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="j-mb j-js-mb-comment j-act-reply-form">');jive.wall.statusInputNotificationBoxes(null,B);B.append('<form id="form-',soy.$$escapeHtmlAttribute(A.statusID),'" name="',soy.$$escapeHtmlAttribute(A.statusID),'">');jive.wall.statusInput({statusInputIdPostfix:A.statusID,messageCSSClasses:"j-eae-txt-area",defaultTxt:soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.mb.comment.default.text"),[])),default508Txt:soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.mb.comment.aria.hint"),[]))},B);B.append('<input type="hidden" name="ID" value="',soy.$$escapeHtmlAttribute(A.statusID),'"/><input type="hidden" name="contentID" value="',soy.$$escapeHtmlAttribute(A.jiveObject.id),'"/><input type="hidden" name="typeID" value="',soy.$$escapeHtmlAttribute(A.jiveObject.objectType),'"/><input type="hidden" name="statusInputType" value="mbComment"/>',(A.visibleToExtCollaborator)?'<div class="j-rte-message"><span class="jive-icon-med jive-icon-partner"></span><span class="font-color-meta-light j-browse-external-access"><em>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("partner.content.reply.warn.visible"),[]))+"</em></span></div>":"");jive.statusinput.containers.statusInputActions({statusID:A.statusID,i18nSubmitKey:"eae.mb.submit.text",displayImageBtn:false,i18nCancelKey:"eae.mb.comment.cancel.text",displayAtMentionBtn:A.canAtMention},B);jive.wall.statusInputErrorWarnBox(null,B);B.append('</form><div class="j-status-input-attach-action-container clearfix j-rc4"></div></div>');return C?"":B.toString()};jive.statusinput.containers.repostStatusInput=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="j-eae-repost-form j-act-reply-form">');jive.wall.statusInputNotificationBoxes(null,B);B.append('<form id="form-',soy.$$escapeHtmlAttribute(A.statusID),'" name="',soy.$$escapeHtmlAttribute(A.statusID),'">');jive.wall.statusInput({statusInputIdPostfix:A.statusID,messageCSSClasses:"j-eae-txt-area",defaultTxt:"",default508Txt:soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.mb.default.aria.repost.label"),[]))},B);jive.statusinput.containers.renderAttachmentsContainer({removable:true},B);B.append('<input type="hidden" name="ID" value="',soy.$$escapeHtmlAttribute(A.statusID),'"/><input type="hidden" name="subject" value="',soy.$$escapeHtmlAttribute(A.jiveObject.subject),'"/><input type="hidden" name="contentID" value="',soy.$$escapeHtmlAttribute(A.jiveObject.id),'"/><input type="hidden" name="typeID" value="',soy.$$escapeHtmlAttribute(A.jiveObject.objectType),'"/><input type="hidden" name="statusInputType" value="repost"/>');jive.statusinput.containers.statusInputActions({statusID:A.statusID,i18nSubmitKey:"eae.menu.repost",displayImageBtn:A.canCreateMbImage,displayAtMentionBtn:A.canAtMention,i18nCancelKey:"eae.mb.comment.cancel.text"},B);jive.wall.statusInputErrorWarnBox(null,B);B.append("</form>");jive.statusinput.containers.statusInputActionContainer({canCreateImage:A.canCreateMbImage,canCreateVideo:A.canCreateMbVideo},B);B.append("</div>");return C?"":B.toString()};jive.statusinput.containers.statusInputActions=function(A,C){var B=C||new soy.StringBuilder();B.append("<div id='",(A.idPrefix)?A.idPrefix:"status-input-actions-",soy.$$escapeHtmlAttribute(A.statusID),'\' class="j-status-input-actions" style="display:none"><a href="javascript:void(0);" class="j-status-input-submit j-btn-global j-btn-callout">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.i18nSubmitKey),[])),"</a>",(A.i18nCancelKey)?'<a href="javascript:void(0);" class="j-status-input-cancel j-btn-global close">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.i18nCancelKey),[]))+"</a>":"",(A.displayImageBtn)?'<p id="jive-js-imgattach-button-desc" class="j-508-label" aria-hidden="true">Press enter to select this button to upload an image.  If using JAWS, press Shift-Enter to select this button.</p><a href="javascript:void(0);" class="jive-js-imgattach-button j-wall-meta-image j-btn-global" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("we.form.addimage"),[]))+'" aria-label="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("we.form.addimage"),[]))+'" aria-describedby="jive-js-imgattach-button-desc"><span class="jive-icon-med jive-icon-photo"></span></a>':"",(A.displayAtMentionBtn)?'<a href="javascript:void(0);" class="jive-js-mention-button j-wall-meta-reference j-btn-global" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("we.form.addlink"),[]))+'" aria-label="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("we.form.addlink"),[]))+'"><span class="jive-icon-med jive-icon-mention" aria-labelledby="j-status-mention-label"></span></a>':"",'<span class="j-js-status-input-characters-remaining j-status-input-chars-left j-rc4"></span></div>');return C?"":B.toString()};jive.statusinput.containers.statusInputActionContainer=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="j-status-input-attach-action-container clearfix j-rc4">',(A.canCreateImage)?'<div class="j-meta-image-container j-attach-tab clearfix"><form method="post" enctype="multipart/form-data"><input type="file" name="image" /><input type="hidden" name="imageURL" /><input type="hidden" name="privateDM" value="'+((A.isPrivateDM)?"true":"false")+'" /></form></div>':"",(A.canCreateVideo)?'<div class="j-meta-video-container j-attach-tab clearfix"><form method="post"><input type="file" name="image" /><input type="hidden" name="imageURL" /><input type="hidden" name="privateDM" value="'+((A.isPrivateDM)?"true":"false")+'" /></form></div>':"","</div>");return C?"":B.toString()};jive.statusinput.containers.statusInputType=function(A,C){var B=C||new soy.StringBuilder();B.append('<input type="hidden" name="statusInputType" value="',soy.$$escapeHtmlAttribute(A.type),'"/>');return C?"":B.toString()};jive.statusinput.containers.renderAttachmentsContainer=function(A,C){var B=C||new soy.StringBuilder();B.append("<div ",(A.id)?'id="'+A.id+'" ':"",'class="jive-js-attachment-container j-attachment-container clearfix" ',(A.visible)?'style="display:block"':"",">");if(A.entry&&A.entry.meta){jive.statusinput.attachments.renderAttachments(A,B)}B.append("</div>");return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.statusinput=="undefined"){jive.statusinput={}}if(typeof jive.statusinput.attachments=="undefined"){jive.statusinput.attachments={}}jive.statusinput.attachments.renderAttachments=function(D,G){var E=G||new soy.StringBuilder();if(D.entry.meta){E.append('<a class="j-attachment-arrow j-attachment-arrow-left clearfix" href="javascript:void(0);"><span class="jive-icon-link-back"></span></a><ul class="j-attached-items clearfix">');var C=D.entry.meta;var F=C.length;for(var B=0;B<F;B++){var A=C[B];jive.statusinput.attachments.renderAttachment(soy.$$augmentData(D,{attachment:A,entry:D.entry,removable:D.removable}),E)}E.append((D.removable)?"<li class='j-attached-loading'></li>":"",'</ul><a class="j-attachment-arrow j-attachment-arrow-right clearfix" href="javascript:void(0);"><span class="jive-icon-link-forward"></span></a>')}return G?"":E.toString()};jive.statusinput.attachments.renderAttachment=function(A,C){var B=C||new soy.StringBuilder();switch(A.attachment.objectType){case 102:jive.statusinput.attachments.renderCommonAttachment(soy.$$augmentData(A,{linkUrl:jive.soy.func.normalizeUrl(window._jive_base_url,A.entry.jiveObjectURL),containerClass:"j-attached-document"}),B);break;case 111:jive.statusinput.attachments.renderCommonAttachment(soy.$$augmentData(A,{linkUrl:jive.soy.func.normalizeUrl(window._jive_base_url,A.attachment.fullImageUrl),containerClass:"j-attached-image"}),B);break;case 801:B.append('<li class="j-attached-video" ',(A.attachment.id)?'id="'+A.attachment.id+'"':"",'><a rel="fb" href="',A.attachment.properties.videoURL,'" style="width: ',soy.$$escapeHtml(A.attachment.properties.thumbnailWidth),"px; height: ",soy.$$escapeHtml(A.attachment.properties.thumbnailHeight),'px" class="j-attach-anchor j-attach-video"><img src="',jive.soy.func.normalizeUrl(window._jive_base_url,A.attachment.properties.thumbnailURL),'" width="',soy.$$escapeHtml(A.attachment.properties.thumbnailWidth),'" height="',soy.$$escapeHtml(A.attachment.properties.thumbnailHeight),'" alt="" /><span class="j-icon-play" style="display: none; position: absolute; left: ',soy.$$escapeHtml((A.attachment.properties.thumbnailWidth+12-40)/2),'px; top: 20px; "></span></a>',(A.removable)?'<a href="javascript:void(0);" class="j-remove-attachment">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.remove"),[]))+"</a>":"","</li>");break}return C?"":B.toString()};jive.statusinput.attachments.renderCommonAttachment=function(A,C){var B=C||new soy.StringBuilder();B.append("<li",(A.attachment.id)?' id="'+A.attachment.id+'"':"",(A.containerClass)?' class="'+soy.$$escapeHtml(A.containerClass)+'"':"",'><a href="',soy.$$escapeHtml(A.linkUrl),'" ',(A.attachment.originalURL)?'jiveOriginalURL="'+soy.$$escapeHtml(A.attachment.originalURL)+'"':"",'style="display: block;',(A.attachment.thumbnailWidth)?"width: "+soy.$$escapeHtml(A.attachment.thumbnailWidth)+"px;":"",(A.attachment.thumbnailHeight)?"height:"+soy.$$escapeHtml(A.attachment.thumbnailHeight)+"px;":"",'" class="j-attach-anchor"><img src="',jive.soy.func.normalizeUrl(window._jive_base_url,A.attachment.imageThumbnailUrl),'" ',(A.attachment.thumbnailWidth)?'width="'+soy.$$escapeHtml(A.attachment.thumbnailWidth)+'"':""," ",(A.attachment.thumbnailHeight)?'height="'+soy.$$escapeHtml(A.attachment.thumbnailHeight)+'"':"",' alt=""/></a>',(A.removable)?'<a href="javascript:void(0);" class="j-remove-attachment">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.remove"),[]))+"</a>":"","</li>");return C?"":B.toString()}
;
jive.namespace("MicroBlogging");jive.MicroBlogging.CommonController=jive.oo.Class.extend(function(a){jive.conc.observable(this);this.init=function(c){if(!c){c={}}this.microbloggingService=new jive.MicroBlogging.MicroBloggingSource();this.metaService=new jive.MetaSource();this.draftWallEntry=null;this.viewOptions=c.viewOptions||{};this.initMBView();this.manuallyRenderView=c.manuallyRenderView||false;this.submitURLParams={objectType:14,objectID:1};if(c.trackingID){this.submitURLParams.trackingID=c.trackingID}var b=this;this.microbloggingView.addListener("submit",function(d,e){b.submitHandler(d,e)}).addListener("linkURLMatch",function(d,e){console.log("linkURL match");b.metaService.createLink(d).addCallback(function(f){e.emitSuccess(f,d)}).addErrback(function(g,f){e.emitError(g,f)})}).addListener("imageURLMatch",function(f,d,e,h){b.draftData=e;function g(){var i=b.metaService.createImage(b.draftWallEntry.wallentry,f,f!=null,d);i.addCallback(function(j){h.emitSuccess(j,f)}).addErrback(function(k,j){h.emitError(k,j)})}if(b.draftWallEntry==null){b.createDraft(g,h)}else{g()}}).addListener("removeImage",function(e,d){b.metaService.remove(e).addCallback(function(f){d.emitSuccess(f)}).addErrback(function(g,f){d.emitError(g,f)})}).addListener("youtubeURLMatch",function(f,e,g){b.draftData=e;function d(){b.metaService.createVideo(b.draftWallEntry.wallentry,f).addCallback(function(h){b.metaService.fetch(h.id).addCallback(function(i){if(i.meta.length>0){g.emitSuccess(b.metaService.normalizeVideoData(i),f)}else{g.emitError(message,status)}}).addErrback(function(j,i){g.emitError(j,i)})}).addErrback(function(i,h){g.emitError(i,h)})}if(b.draftWallEntry==null){b.createDraft(d,g)}else{d()}}).addListener("cancel",function(){b.emit("cancel")});if(!this.manuallyRenderView){this.renderView()}};a.submitHandler=function(c,d){var b;if(this.draftWallEntry!=null){b=$j.extend(true,{},this.draftWallEntry,c)}else{b=c}this.submitServiceCall(b,d)};a.submitServiceCall=function(c,d){var b=this;this.microbloggingService.publishEntry(this.submitURLParams,c).addCallback(function(e){b.submitSuccessCallback(e,d)}).addErrback(function(f,e){b.submitErrCallback(f,e,d)})};a.submitSuccessCallback=function(b,c){this.draftWallEntry=null;b.wallentry=this.metaService.normalizeVideoData(b.wallentry);c.emitSuccess(b);this.emitP("submitSuccess",b)};a.submitErrCallback=function(c,b,d){d.emitError(c,b);this.emitP("submitError",c,b)};a.createDraft=function(d,c){var b=this;this.microbloggingService.createDraft({objectType:14,objectID:1},{wallentry:{}}).addCallback(function(e){b.draftWallEntry=e;d()}).addErrback(function(f,e){c.emitError(f,e)})};a.initMBView=function(){throw"initMBView method is abstract. Need to implmenet in subclass"};this.renderView=function(){this.microbloggingView.postRender()};this.getMicrobloggingView=function(){return this.microbloggingView}});
;
jive.namespace("MicroBlogging");jive.MicroBlogging.MicroBloggingSource=jive.RestService.extend(function(a){jive.conc.observable(this);a.resourceType="wall";a.pluralizedResourceType=a.resourceType;this.publishEntry=function(b,d){var c=this.RESOURCE_ENDPOINT+"/"+b.objectType+"/"+b.objectID+(b.trackingID?"?sr="+b.trackingID:"");if(jive.Trial&&jive.Trial.Controller){var e=jive.Trial.Controller.getActiveQuestAndStep();if(e.activeQuestID=="1836538113"&&e.activeQuestStep==0){d.wallentry.fromQuest=e.activeQuestID}}return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:c,data:JSON.stringify(d)},d)};this.createDraft=function(b,d){var c=this.RESOURCE_ENDPOINT+"/"+b.objectType+"/"+b.objectID+"/draft";return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:c,data:JSON.stringify(d)},d)};this.repost=function(b,d){var c=this.RESOURCE_ENDPOINT+"/repost/"+b.wallEntryID;return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:c,data:d},d)};this.createRepostDraft=function(b,d){var c=this.RESOURCE_ENDPOINT+"/repost/"+b.wallEntryID+"/draft";return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:c,data:JSON.stringify(d)},d)}});
;
jive.action=(function(){var a=_jive_base_url+"/";return{url:function(b,c){var d="";Object.keys(c).forEach(function(e){d+=e+"="+c[e]+"&"});if(d.length>0){d="?"+d.slice(0,d.length-1)}return a+b+".jspa"+d}}})();
;
jive.MetaSource=jive.RestService.extend(function(a){jive.conc.observable(this);a.resourceType="meta";a.pluralizedResourceType=a.resourceType;this.createLink=function(d){var e=new jive.conc.Promise(),b=this,c={url:jive.action.url("link-meta",{url:encodeURIComponent(d)}),dataType:"html",success:function(f){console.log("jive.MetaSource.createLink SUCCESS "+f);e.emitSuccess(f)},error:function(f){console.log("jive.MetaSource.createLink ERROR "+f);b.errorCallback(e,this.errorSaving)}};$j.ajax(c);return e};this.createVideo=function(d,g){var f=new jive.conc.Promise(),b=this,e={contentObjectType:d.objectType,object:d.objectId,videoURL:encodeURIComponent(g)},c={url:jive.action.url("video-link-meta",e),dataType:"json",success:function(h){console.log("jive.MetaSource.createVideo SUCCESS "+h);f.emitSuccess(h)},error:function(h){console.log("jive.MetaSource.createVideo ERROR "+h);b.errorCallback(f,this.errorSaving)}};$j.ajax(c);return f};this.normalizeVideoData=function(b){if(b.meta&&b.meta.length>0){b.meta.forEach(function(d){var c=d.properties;if(c!=undefined){var g={};if(c.entry!=undefined&&c.entry.length!=0){var f=c.entry;for(var e=0;e<f.length;e++){g[f[e].key]=f[e].value}}d.properties=g}})}else{b.meta=[]}return b};this.createImage=function(f,d,b,k){var h=this,c=this.RESOURCE_ENDPOINT+"/imageJackson/"+f.objectType+"/"+f.objectId+"/attachment",g="",j=new jive.conc.Promise();if(b){console.log("Got image url");g=encodeURIComponent(d);c=this.RESOURCE_ENDPOINT+"/imageJackson/"+f.objectType+"/"+f.objectId}var i={url:c,dataType:"xml",data:{imageURL:g},contentType:"text/xml; charset=utf-8",complete:function(m,l){if($j(m.responseXML).find("meta id").length>0){h.fetch($j(m.responseXML).find("meta id").text()).addCallback(function(p){j.emitSuccess(p)}).addErrback(function(q,p){h.errorCallback(j,this.errorSaving)})}else{var o=$j(m.responseXML).find("code").text();var n=$j(m.responseXML).find("message").text();j.emitError(n,o)}},error:function(n,p,o){console.log("Error jive.Wall.ImageMetaSource create"+n+", "+p+", "+o);var m=$j(n.responseXML).find("code").text();var l=$j(n.responseXML).find("message").text();h.errorCallback(j,this.errorSaving)}};if(b){var e=k.find("input[name=image]");if(e.length>0){e.val("")}}else{k.find("input[name=imageURL]").val("")}k.ajaxSubmit(i);return j};this.fetch=function(c){var b=this.RESOURCE_ENDPOINT+"/"+c;return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:b})};this.remove=function(c){var b=this.RESOURCE_ENDPOINT+"/remove/"+c;return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:b})}});
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.statusinput=="undefined"){jive.statusinput={}}if(typeof jive.statusinput.mention_warnings=="undefined"){jive.statusinput.mention_warnings={}}jive.statusinput.mention_warnings.jsI18nHelper=function(A,C){var B=C||new soy.StringBuilder();B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.key),[])));return C?"":B.toString()}
;
if(!jive.Selection){jive.Selection=$Class.extend({init:function(b,a,e,d,c){this._supportsDomRange=$j.isFunction(window.getSelection);this._selection=jive.Selection.getSelection(d,c);if(b!=null){if(this._supportsDomRange){if(this._selection.rangeCount==0){this._selection.addRange(jive.Selection.createRangeAtNode(b,c))}}this._doc=c;this._win=d;this._range=this.getRangeAt(0);this.moveToNodeAndCollapse(b,a,e)}else{this._range=this.getRangeAt(0)}},getSelection:function(){return this._selection},getRangeAt:function(a){return jive.Selection.getRangeAt(this._selection,a,this._doc)},makeRangeTheSelection:function(){if(!this._supportsDomRange){this._selection.empty();this._range.select()}else{if(this._selection.rangeCount>0){this._selection.removeAllRanges()}this._selection.addRange(this._range)}},rangeInsertNode:function(d){if(!this._supportsDomRange){var a=this.getRangeStartContainer();var c=this.getRangeStartOffset();var b=a.parentNode;if(a.nodeType==3){var g=new String(a.nodeValue);var f=document.createTextNode(g.substring(0,c));var e=document.createTextNode(g.substring(c));b.insertBefore(f,a);b.insertBefore(d,a.nextSibling);b.insertBefore(e,d.nextSibling);b.removeChild(a);this.moveToNodeAndCollapse(d,true)}else{b.insertBefore(d,a.nextSibling)}}else{this._range.insertNode(d)}},setRangeStart:function(b,a){if(!this._supportsDomRange){this._setRangeStartEndHelper(b,a,false)}else{this._range.setStart(b,a)}},setRangeEnd:function(a,b){if(!this._supportsDomRange){this._setRangeStartEndHelper(a,b,true)}else{this._range.setEnd(a,b)}},getRangeStartContainer:function(){if(!this._supportsDomRange){return this._getIERangeContainerHelper(true).container}else{return this._range.startContainer}},getRangeEndContainer:function(){if(!this._supportsDomRange){return this._getIERangeContainerHelper(false).container}else{return this._range.endContainer}},getRangeStartOffset:function(){if(!this._supportsDomRange){return this._getIERangeContainerHelper(true).offset}else{return this._range.startOffset}},getRangeEndOffset:function(){if(!this._supportsDomRange){return this._getIERangeContainerHelper(false).offset}else{return this._range.endOffset}},getWordAtRange:function(){return this._wordAtRangeCommon()},replaceWordAtRange:function(c,b,a){return this._wordAtRangeCommon(c,b,a)},_wordAtRangeCommon:function(e,a,b){var q=this.getRangeStartContainer();var k=jive.Selection.replaceNbspWithWhitespace(q.nodeValue);if(this.alignRangeWithNearestTextNode(q)){q=this.getRangeStartContainer();k=q.nodeValue}if(e==null){if(this._normalizeTextNode(q,this.getRangeStartOffset())){k=q.nodeValue;this._range.collapse(true);this.makeRangeTheSelection()}}var i=this.getRangeStartOffset();var o=new String(k).substring(0,i);var g=new String(k).substring(i);var f=/\S+$/,p=/^\S+/;if(e!=null&&e.length>0){a=a||"";b=b||{tag:"txt"};var l=a+e;o=o.replace(f,"");g=g.replace(p,"");if((g==null||g.length==0)&&b.tag!="txt"){g=" "}var c;if(b.tag=="txt"){c=document.createTextNode(l)}else{c=document.createElement(b.tag);for(var n in b.attrs){c.setAttribute(n,b.attrs[n])}c.innerHTML=l}var h=q.parentNode;if(o!=null&&o.length>0){h.insertBefore(document.createTextNode(o),q)}h.insertBefore(c,q);var j=null;if(g!=null&&g.length>0){j=document.createTextNode(g);h.insertBefore(j,q)}h.removeChild(q);var d=j==null?c:j;this.moveToNodeAndCollapse(d);return c}else{o=o.match(f);g=g.match(p);var m=(o==null?"":o)+(g==null?"":g);return m}},_normalizeTextNode:function(d,h){h=h||0;if(d==null||!d.nodeValue||jive.Selection.replaceNbspWithWhitespace(d.nodeValue).search(/\S+/)==-1){return false}var c="";var a=d.parentNode;function g(k){var j=k?d.previousSibling:d.nextSibling;while(j!=null&&j.nodeType==3&&jive.Selection.replaceNbspWithWhitespace(j.nodeValue).search(/\S+/)>-1){if(k){c=j.nodeValue+c}else{c+=j.nodeValue}var i=k?j.previousSibling:j.nextSibling;a.removeChild(j);j=i}}g(true);var f=c.length+h;c+=d.nodeValue;g(false);if(c!=d.nodeValue){if(!this._supportsDomRange){var e=this._range.duplicate();var b=document.createTextNode(c);a.replaceChild(b,d);this._range=e.duplicate();this._range.moveStart("character",f)}else{d.nodeValue=c;this.setRangeStart(d,f)}this._range.collapse(true);this.makeRangeTheSelection();return true}return false},insertNodeAtRange:function(b,c){var a=typeof b=="string"?document.createTextNode(b):b;c=c||0;if(this._supportsDomRange){this._range.collapse(true)}this.rangeInsertNode(a);if(a.nodeType==3){if(!this._normalizeTextNode(a,c)){if(!this._supportsDomRange){this._range.moveStart("character",c);this._range.collapse(true)}else{this.setRangeStart(b,c)}this.makeRangeTheSelection()}}},selectNode:function(a){this._range.selectNode(a)},collapseRange:function(a){this._range.collapse(!!a)},selectNodeContents:function(a){if(!this._supportsDomRange){var d=this.getRangeStartOffset()*-1;var c=this._range.duplicate();c.moveToElementText(c.parentElement());c.setEndPoint("StartToEnd",this._range);var b=c.text.length;this._range.moveStart("character",d);this._range.moveEnd("character",b);this._range.select()}else{this.getSelection().selectAllChildren(a)}},moveToNodeAndCollapse:function(b,a,c){if(a){this.setRangeStart(b,c)}else{this.setRangeEnd(b,c)}this._range.collapse(a);this.makeRangeTheSelection()},alignRangeWithNearestTextNode:function(a){a=a||this.getRangeStartContainer();if(a.nodeType!=3){var f=$j(a).contents();if(f.length>0){var c=this.getRangeStartOffset();var e=f.get(c);if(e.nodeType==3){this.init(d,false);return true}else{return this.alignRangeWithNearestTextNode(e)}}else{f=$j(a).parent().contents();var g=f.index(a);var b=false;var d=f.filter(function(h){return h<g&&this.nodeType==3}).last();if(d.length==0){d=f.filter(function(h){return h>g&&this.nodeType==3}).first();b=true}if(d.length>0){this.init(d[0],b,b?0:d[0].length);return true}else{if(f.length){d=f.first();this.init(d[0],b,b?0:d[0].length);return true}else{throw ("alignRangeWithNearestTextNode Failed to find a text node to align with.")}}}}return false},_getIERangeContainerHelper:function(c){var g=c?this._getIERangeStartOffsetHelper():this._getIERangeEndOffsetHelper();var a=this._range.parentElement();var e=0;var f=a.childNodes;if(f.length==0){return a}for(var d=0;d<f.length;d++){var h=f[d];var b=$j(h).text().length;if(b==0&&h.nodeName=="BR"){b=2}if(g<=e+b){return{container:h,offset:g-e}}else{e+=b}}return{container:h,offset:e};throw ("Error jive.selection._getIERangeContainerHelper could not find range container")},_getIERangeStartOffsetHelper:function(){var a=this._range.duplicate();a.moveToElementText(a.parentElement());a.setEndPoint("EndToStart",this._range);return a.text.length},_getIERangeEndOffsetHelper:function(){return this._range.text.length+this._getIERangeStartOffsetHelper()},_setRangeStartEndHelper:function(h,k,g){var n=h.nodeType==3;var l=n?h.parentNode:h;var i=this._range.duplicate();i.moveToElementText(l);k=k||0;var c=$j(h).parent().contents();var p=c.index(h);var a;if(n){a=c.slice(0,p).text().length+k}else{a=c.slice(0,p+k).text().length}i.moveStart("character",a);var f;var e;if(n){f=p+1;e=jive.Selection.replaceNbspWithWhitespace($j(h).text()).substring(k)}else{f=p+k+1;e=jive.Selection.replaceNbspWithWhitespace(c.slice(p+k))}var o=new RegExp("(.*)"+e);function j(){return new String(i.text).replace(new RegExp(c.slice(f).text()+"$"),"")}var b=j();var d=0;while(b!=e){b=j();var m=b.match(o);if(m!=null&&m.length==2){i.moveStart("character",m[1].length)}else{throw ("jive.Selection _setRangeStartEndHelper failed to setRange Start or End")}d++;if(d==10){throw ("jive.Selection _setRangeStartEndHelper failed to setRange Start or End")}}if(g){this._range.setEndPoint("EndToStart",i)}else{this._range.setEndPoint("StartToStart",i)}}});jive.Selection.getSelection=function(b,a){if(!b){b=window}if(!a){a=document}if(b.getSelection){return b.getSelection()}else{if(a.all){return a.selection}else{if(a.getSelection){return a.getSelection()}}}throw ("jive.Selection.getSelector Error: unable to obtain seleciton object")};jive.Selection.getRangeAt=function(b,a,c){if(!c){c=document}if(b.getRangeAt){return b.getRangeAt(a)}else{if(c.selection){return b.createRange()}}throw ("jive.Selection.getRangeAt Error: unable to obtain seleciton object")};jive.Selection.moveCursorAfter=function(b,c){if(!c){c=document}var d=c.createElement("span");d.setAttribute("data-jive-statusinputadd","true");d.innerHTML="&nbsp;";b.parentNode.insertBefore(d,b);b.parentNode.insertBefore(b,d);var a=new jive.Selection(d,true);b.parentNode.removeChild(d)};jive.Selection.createRangeAtNode=function(b,c){if(!c){c=document}if(c.createRange){var a=c.createRange();a.selectNodeContents(b);return a}else{if(b.createRange){return b.createRange()}}throw ("jive.Selection.createRange Error: unable to obtain range object")};jive.Selection.replaceNbspWithWhitespace=function(a){if(a==null){return a}else{return String(a).replace(/\xA0/g," ")}}};
;
var rangy=function(){function A(k,f){var e=typeof k[f];return e=="function"||!!(e=="object"&&k[f])||e=="unknown"}function b(f,e){return !!(typeof f[e]=="object"&&f[e])}function h(f,e){return typeof f[e]!="undefined"}function j(e){return function(k,f){for(var l=f.length;l--;){if(!e(k,f[l])){return false}}return true}}function c(e){window.alert("Rangy not supported in your browser. Reason: "+e);w.initialized=true;w.supported=false}function n(){if(!w.initialized){var l,f=false,e=false;if(A(document,"createRange")){l=document.createRange();if(d(l,C)&&r(l,a)){f=true}l.detach()}if((l=b(document,"body")?document.body:document.getElementsByTagName("body")[0])&&A(l,"createTextRange")){l=l.createTextRange();if(d(l,o)&&r(l,z)){e=true}}!f&&!e&&c("Neither Range nor TextRange are implemented");w.initialized=true;w.features={implementsDomRange:f,implementsTextRange:e};f=I.concat(J);e=0;for(l=f.length;e<l;++e){try{f[e](w)}catch(k){b(window,"console")&&A(window.console,"log")&&window.console.log("Init listener threw an exception. Continuing.",k)}}}}function g(e){this.name=e;this.supported=this.initialized=false}var a=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer","START_TO_START","START_TO_END","END_TO_START","END_TO_END"],C=["setStart","setStartBefore","setStartAfter","setEnd","setEndBefore","setEndAfter","collapse","selectNode","selectNodeContents","compareBoundaryPoints","deleteContents","extractContents","cloneContents","insertNode","surroundContents","cloneRange","toString","detach"],z=["boundingHeight","boundingLeft","boundingTop","boundingWidth","htmlText","text"],o=["collapse","compareEndPoints","duplicate","getBookmark","moveToBookmark","moveToElementText","parentElement","pasteHTML","select","setEndPoint"],d=j(A),v=j(b),r=j(h),w={initialized:false,supported:true,util:{isHostMethod:A,isHostObject:b,isHostProperty:h,areHostMethods:d,areHostObjects:v,areHostProperties:r},features:{},modules:{},config:{alertOnWarn:false}};w.fail=c;w.warn=function(e){e="Rangy warning: "+e;if(w.config.alertOnWarn){window.alert(e)}else{typeof window.console!="undefined"&&typeof window.console.log!="undefined"&&window.console.log(e)}};var J=[],I=[];w.init=n;w.addInitListener=function(e){w.initialized?e(w):J.push(e)};var D=[];w.addCreateMissingNativeApiListener=function(e){D.push(e)};w.createMissingNativeApi=function(k){k=k||window;n();for(var f=0,e=D.length;f<e;++f){D[f](k)}};g.prototype.fail=function(e){this.initialized=true;this.supported=false;throw Error("Module '"+this.name+"' failed to load: "+e)};g.prototype.warn=function(e){w.warn("Module "+this.name+": "+e)};g.prototype.createError=function(e){return Error("Error in Rangy "+this.name+" module: "+e)};w.createModule=function(k,f){var e=new g(k);w.modules[k]=e;I.push(function(l){f(l,e);e.initialized=true;e.supported=true})};w.requireModules=function(m){for(var k=0,e=m.length,l,f;k<e;++k){f=m[k];l=w.modules[f];if(!l||!(l instanceof g)){throw Error("Module '"+f+"' not found")}if(!l.supported){throw Error("Module '"+f+"' not supported")}}};var i=false;v=function(){if(!i){i=true;w.initialized||n()}};if(typeof window=="undefined"){c("No window found")}else{if(typeof document=="undefined"){c("No document found")}else{A(document,"addEventListener")&&document.addEventListener("DOMContentLoaded",v,false);if(A(window,"addEventListener")){window.addEventListener("load",v,false)}else{A(window,"attachEvent")?window.attachEvent("onload",v):c("Window does not have required addEventListener or attachEvent method")}return w}}}();rangy.createModule("DomUtil",function(d,g){function k(m){for(var l=0;m=m.previousSibling;){l++}return l}function o(q,p){var l=[],m;for(m=q;m;m=m.parentNode){l.push(m)}for(m=p;m;m=m.parentNode){if(a(l,m)){return m}}return null}function h(p,m,l){for(l=l?p:p.parentNode;l;){p=l.parentNode;if(p===m){return l}l=p}return null}function u(l){l=l.nodeType;return l==3||l==4||l==8}function j(q,p){var l=p.nextSibling,m=p.parentNode;l?m.insertBefore(q,l):m.appendChild(q);return q}function f(l){if(l.nodeType==9){return l}else{if(typeof l.ownerDocument!="undefined"){return l.ownerDocument}else{if(typeof l.document!="undefined"){return l.document}else{if(l.parentNode){return f(l.parentNode)}else{throw Error("getDocument: no document found for node")}}}}}function e(l){if(!l){return"[No node]"}return u(l)?'"'+l.data+'"':l.nodeType==1?"<"+l.nodeName+(l.id?' id="'+l.id+'"':"")+">["+l.childNodes.length+"]":l.nodeName}function c(l){this._next=this.root=l}function n(m,l){this.node=m;this.offset=l}function i(l){this.code=this[l];this.codeName=l;this.message="DOMException: "+this.codeName}var b=d.util;b.areHostMethods(document,["createDocumentFragment","createElement","createTextNode"])||g.fail("document missing a Node creation method");b.isHostMethod(document,"getElementsByTagName")||g.fail("document missing getElementsByTagName method");var r=document.createElement("div");b.areHostMethods(r,["insertBefore","appendChild","cloneNode"])||g.fail("Incomplete Element implementation");r=document.createTextNode("test");b.areHostMethods(r,["splitText","deleteData","insertData","appendData","cloneNode"])||g.fail("Incomplete Text Node implementation");var a=function(p,m){for(var l=p.length;l--;){if(p[l]===m){return true}}return false};c.prototype={_current:null,hasNext:function(){return !!this._next},next:function(){var m=this._current=this._next,l;if(this._current){if(l=m.firstChild){this._next=l}else{for(l=null;m!==this.root&&!(l=m.nextSibling);){m=m.parentNode}this._next=l}}return this._current},detach:function(){this._current=this._next=this.root=null}};n.prototype={equals:function(l){return this.node===l.node&this.offset==l.offset},inspect:function(){return"[DomPosition("+e(this.node)+":"+this.offset+")]"}};i.prototype={INDEX_SIZE_ERR:1,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INVALID_STATE_ERR:11};i.prototype.toString=function(){return this.message};d.dom={arrayContains:a,getNodeIndex:k,getCommonAncestor:o,isAncestorOf:function(p,m,l){for(m=l?m:m.parentNode;m;){if(m===p){return true}else{m=m.parentNode}}return false},getClosestAncestorIn:h,isCharacterDataNode:u,insertAfter:j,splitDataNode:function(p,m){var l;if(p.nodeType==3){l=p.splitText(m)}else{l=p.cloneNode();l.deleteData(0,m);p.deleteData(0,p.length-m);j(l,p)}return l},getDocument:f,getWindow:function(l){l=f(l);if(typeof l.defaultView!="undefined"){return l.defaultView}else{if(typeof l.parentWindow!="undefined"){return l.parentWindow}else{throw Error("Cannot get a window object for node")}}},getIframeWindow:function(l){if(typeof l.contentWindow!="undefined"){return l.contentWindow}else{if(typeof l.contentDocument!="undefined"){return l.contentDocument.defaultView}else{throw Error("getIframeWindow: No Window object found for iframe element")}}},getIframeDocument:function(l){if(typeof l.contentDocument!="undefined"){return l.contentDocument}else{if(typeof l.contentWindow!="undefined"){return l.contentWindow.document}else{throw Error("getIframeWindow: No Document object found for iframe element")}}},getBody:function(l){return b.isHostObject(l,"body")?l.body:l.getElementsByTagName("body")[0]},comparePoints:function(q,p,l,m){var s;if(q==l){return p===m?0:p<m?-1:1}else{if(s=h(l,q,true)){return p<=k(s)?-1:1}else{if(s=h(q,l,true)){return k(s)<m?-1:1}else{p=o(q,l);q=q===p?p:h(q,p,true);l=l===p?p:h(l,p,true);if(q===l){throw Error("comparePoints got to case 4 and childA and childB are the same!")}else{for(p=p.firstChild;p;){if(p===q){return -1}else{if(p===l){return 1}}p=p.nextSibling}throw Error("Should not be here!")}}}}},inspectNode:e,createIterator:function(l){return new c(l)},DomPosition:n};d.DOMException=i});rangy.createModule("DomRange",function(aG){function V(a,d){return a.nodeType!=3&&(aJ.isAncestorOf(a,d.startContainer,true)||aJ.isAncestorOf(a,d.endContainer,true))}function af(a){return aJ.getDocument(a.startContainer)}function ag(a,e,d){if(e=a._listeners[e]){for(var f=0,i=e.length;f<i;++f){e[f].call(a,{target:a,args:d})}}}function av(a){return new h(a.parentNode,aJ.getNodeIndex(a))}function ah(a){return new h(a.parentNode,aJ.getNodeIndex(a)+1)}function ae(a){return aJ.isCharacterDataNode(a)?a.length:a.childNodes?a.childNodes.length:0}function M(a,e,d){var f=a.nodeType==11?a.firstChild:a;if(aJ.isCharacterDataNode(e)){d==e.length?aJ.insertAfter(a,e):e.parentNode.insertBefore(a,d==0?e:aJ.splitDataNode(e,d))}else{d>=e.childNodes.length?e.appendChild(a):e.insertBefore(a,e.childNodes[d])}return f}function aH(a){for(var e,d,f=af(a.range).createDocumentFragment();d=a.next();){e=a.isPartiallySelectedSubtree();d=d.cloneNode(!e);if(e){e=a.getSubtreeIterator();d.appendChild(aH(e));e.detach(true)}if(d.nodeType==10){throw new L("HIERARCHY_REQUEST_ERR")}f.appendChild(d)}return f}function aE(a,e,d){var f,i;for(d=d||{stop:false};f=a.next();){if(a.isPartiallySelectedSubtree()){if(e(f)===false){d.stop=true;return}else{f=a.getSubtreeIterator();aE(f,e,d);f.detach(true);if(d.stop){return}}}else{for(f=aJ.createIterator(f);i=f.next();){if(e(i)===false){d.stop=true;return}}}}}function aA(a){for(var d;a.next();){if(a.isPartiallySelectedSubtree()){d=a.getSubtreeIterator();aA(d);d.detach(true)}else{a.remove()}}}function ax(a){for(var e,d=af(a.range).createDocumentFragment(),f;e=a.next();){if(a.isPartiallySelectedSubtree()){e=e.cloneNode(false);f=a.getSubtreeIterator();e.appendChild(ax(f));f.detach(true)}else{a.remove()}if(e.nodeType==10){throw new L("HIERARCHY_REQUEST_ERR")}d.appendChild(e)}return d}function ak(a,f,e){var i=!!(f&&f.length),k,d=!!e;if(i){k=RegExp("^("+f.join("|")+")$")}var j=[];aE(new aD(a,false),function(l){if((!i||k.test(l.nodeType))&&(!d||e(l))){j.push(l)}});return j}function aB(a){return"["+(typeof a.getName=="undefined"?"Range":a.getName())+"("+aJ.inspectNode(a.startContainer)+":"+a.startOffset+", "+aJ.inspectNode(a.endContainer)+":"+a.endOffset+")]"}function aD(a,e){this.range=a;this.clonePartiallySelectedTextNodes=e;if(!a.collapsed){this.sc=a.startContainer;this.so=a.startOffset;this.ec=a.endContainer;this.eo=a.endOffset;var d=a.commonAncestorContainer;if(this.sc===this.ec&&aJ.isCharacterDataNode(this.sc)){this.isSingleCharacterDataNode=true;this._first=this._last=this._next=this.sc}else{this._first=this._next=this.sc===d&&!aJ.isCharacterDataNode(this.sc)?this.sc.childNodes[this.so]:aJ.getClosestAncestorIn(this.sc,d,true);this._last=this.ec===d&&!aJ.isCharacterDataNode(this.ec)?this.ec.childNodes[this.eo-1]:aJ.getClosestAncestorIn(this.ec,d,true)}}}function aM(a){this.code=this[a];this.codeName=a;this.message="RangeException: "+this.codeName}function aL(a,e,d){this.nodes=ak(a,e,d);this._next=this.nodes[0];this._position=0}function aI(a){return function(e,d){for(var f,i=d?e:e.parentNode;i;){f=i.nodeType;if(aJ.arrayContains(a,f)){return i}i=i.parentNode}return null}}function az(a){for(var d;d=a.parentNode;){a=d}return a}function aF(a,d){if(aj(a,d)){throw new aM("INVALID_NODE_TYPE_ERR")}}function aC(a){if(!a.startContainer){throw new L("INVALID_STATE_ERR")}}function al(a,d){if(!aJ.arrayContains(d,a.nodeType)){throw new aM("INVALID_NODE_TYPE_ERR")}}function S(a,d){if(d<0||d>(aJ.isCharacterDataNode(a)?a.length:a.childNodes.length)){throw new L("INDEX_SIZE_ERR")}}function ad(a,d){if(aN(a,true)!==aN(d,true)){throw new L("WRONG_DOCUMENT_ERR")}}function z(a){if(aK(a,true)){throw new L("NO_MODIFICATION_ALLOWED_ERR")}}function c(a,d){if(!a){throw new L(d)}}function ac(a){if(!aN(a.startContainer,true)||!aN(a.endContainer,true)||!(a.startOffset<=(aJ.isCharacterDataNode(a.startContainer)?a.startContainer.length:a.startContainer.childNodes.length))||!(a.endOffset<=(aJ.isCharacterDataNode(a.endContainer)?a.endContainer.length:a.endContainer.childNodes.length))){throw Error("Range error: Range is no longer valid after DOM mutation ("+a.inspect()+")")}}function w(a){a.START_TO_START=R;a.START_TO_END=n;a.END_TO_END=g;a.END_TO_START=aw;a.NODE_BEFORE=aq;a.NODE_AFTER=v;a.NODE_BEFORE_AND_AFTER=ay;a.NODE_INSIDE=ap}function an(a){w(a);w(a.prototype)}function ao(a,i,f){function j(o,m){return function(p){aC(this);al(p,ar);al(az(p),au);p=(o?av:ah)(p);(m?l:e)(this,p.node,p.offset)}}function l(r,p,q){var o=r.endContainer,m=r.endOffset;if(p!==r.startContainer||q!==this.startOffset){if(az(p)!=az(o)||aJ.comparePoints(p,q,o,m)==1){o=p;m=q}i(r,p,q,o,m)}}function e(r,p,q){var o=r.startContainer,m=r.startOffset;if(p!==r.endContainer||q!==this.endOffset){if(az(p)!=az(o)||aJ.comparePoints(p,q,o,m)==-1){o=p;m=q}i(r,o,m,p,q)}}function k(p,m,o){if(m!==p.startContainer||o!==this.startOffset||m!==p.endContainer||o!==this.endOffset){i(p,m,o,m,o)}}function d(m){return function(){aC(this);ac(this);var q=this.startContainer,r=this.startOffset,p=this.commonAncestorContainer,o=new aD(this,true);if(q!==p){q=aJ.getClosestAncestorIn(q,p,true);r=ah(q);q=r.node;r=r.offset}aE(o,z);o.reset();p=m(o);o.detach();i(this,q,r,q,r);return p}}a.prototype={attachListener:function(o,m){this._listeners[o].push(m)},setStart:function(o,m){aC(this);aF(o,true);S(o,m);l(this,o,m)},setEnd:function(o,m){aC(this);aF(o,true);S(o,m);e(this,o,m)},setStartBefore:j(true,true),setStartAfter:j(false,true),setEndBefore:j(true,false),setEndAfter:j(false,false),collapse:function(m){aC(this);ac(this);m?i(this,this.startContainer,this.startOffset,this.startContainer,this.startOffset):i(this,this.endContainer,this.endOffset,this.endContainer,this.endOffset)},selectNodeContents:function(m){aC(this);aF(m,true);i(this,m,0,m,ae(m))},selectNode:function(o){aC(this);aF(o,false);al(o,ar);var m=av(o);o=ah(o);i(this,m.node,m.offset,o.node,o.offset)},compareBoundaryPoints:function(q,o){aC(this);ac(this);ad(this.startContainer,o.startContainer);var p=q==aw||q==R?"start":"end",m=q==n||q==R?"start":"end";return aJ.comparePoints(this[p+"Container"],this[p+"Offset"],o[m+"Container"],o[m+"Offset"])},insertNode:function(m){aC(this);ac(this);al(m,am);z(this.startContainer);if(aJ.isAncestorOf(m,this.startContainer,true)){throw new L("HIERARCHY_REQUEST_ERR")}this.setStartBefore(M(m,this.startContainer,this.startOffset))},cloneContents:function(){aC(this);ac(this);var o,m;if(this.collapsed){return af(this).createDocumentFragment()}else{if(this.startContainer===this.endContainer&&aJ.isCharacterDataNode(this.startContainer)){o=this.startContainer.cloneNode(true);o.data=o.data.slice(this.startOffset,this.endOffset);m=af(this).createDocumentFragment();m.appendChild(o);return m}else{m=new aD(this,true);o=aH(m);m.detach()}return o}},extractContents:d(ax),deleteContents:d(aA),canSurroundContents:function(){aC(this);ac(this);z(this.startContainer);z(this.endContainer);var o=new aD(this,true),m=o._first&&V(o._first,this)||o._last&&V(o._last,this);o.detach();return !m},surroundContents:function(o){al(o,aO);if(!this.canSurroundContents()){throw new aM("BAD_BOUNDARYPOINTS_ERR")}var m=this.extractContents();if(o.hasChildNodes()){for(;o.lastChild;){o.removeChild(o.lastChild)}}M(o,this.startContainer,this.startOffset);o.appendChild(m);this.selectNode(o)},cloneRange:function(){aC(this);ac(this);for(var p=new ab(af(this)),m=ai.length,o;m--;){o=ai[m];p[o]=this[o]}return p},detach:function(){f(this)},toString:function(){aC(this);ac(this);var o=this.startContainer;if(o===this.endContainer&&aJ.isCharacterDataNode(o)){return o.nodeType==3||o.nodeType==4?o.data.slice(this.startOffset,this.endOffset):""}else{var m=[];o=new aD(this,true);aE(o,function(p){if(p.nodeType==3||p.nodeType==4){m.push(p.data)}});o.detach();return m.join("")}},compareNode:function(p){aC(this);ac(this);var m=p.parentNode,o=aJ.getNodeIndex(p);if(!m){throw new L("NOT_FOUND_ERR")}p=this.comparePoint(m,o);m=this.comparePoint(m,o+1);return p<0?m>0?ay:aq:m>0?v:ap},comparePoint:function(o,m){aC(this);ac(this);c(o,"HIERARCHY_REQUEST_ERR");ad(o,this.startContainer);if(aJ.comparePoints(o,m,this.startContainer,this.startOffset)<0){return -1}else{if(aJ.comparePoints(o,m,this.endContainer,this.endOffset)>0){return 1}}return 0},createContextualFragment:function(p){aC(this);var m=af(this),o=m.createElement("div");o.innerHTML=p;for(p=m.createDocumentFragment();m=o.firstChild;){p.appendChild(m)}return p},intersectsNode:function(r,p){aC(this);ac(this);c(r,"NOT_FOUND_ERR");if(aJ.getDocument(r)!==af(this)){return false}var q=r.parentNode,o=aJ.getNodeIndex(r);c(q,"NOT_FOUND_ERR");var m=aJ.comparePoints(q,o,this.endContainer,this.endOffset);q=aJ.comparePoints(q,o+1,this.startContainer,this.startOffset);return p?m<=0&&q>=0:m<0&&q>0},isPointInRange:function(o,m){aC(this);ac(this);c(o,"HIERARCHY_REQUEST_ERR");ad(o,this.startContainer);return aJ.comparePoints(o,m,this.startContainer,this.startOffset)>=0&&aJ.comparePoints(o,m,this.endContainer,this.endOffset)<=0},intersectsRange:function(m){aC(this);ac(this);if(af(m)!=af(this)){throw new L("WRONG_DOCUMENT_ERR")}return aJ.comparePoints(this.startContainer,this.startOffset,m.endContainer,m.endOffset)<0&&aJ.comparePoints(this.endContainer,this.endOffset,m.startContainer,m.startOffset)>0},intersection:function(q){if(this.intersectsRange(q)){var o=aJ.comparePoints(this.startContainer,this.startOffset,q.startContainer,q.startOffset),p=aJ.comparePoints(this.endContainer,this.endOffset,q.endContainer,q.endOffset),m=this.cloneRange();o==-1&&m.setStart(q.startContainer,q.startOffset);p==1&&m.setEnd(q.endContainer,q.endOffset);return m}return null},containsNode:function(o,m){return m?this.intersectsNode(o,false):this.compareNode(o)==ap},containsNodeContents:function(m){return this.comparePoint(m,0)>=0&&this.comparePoint(m,ae(m))<=0},splitBoundaries:function(){ac(this);var r=this.startContainer,p=this.startOffset,q=this.endContainer,o=this.endOffset,m=r===q;aJ.isCharacterDataNode(q)&&o>0&&o<q.length&&aJ.splitDataNode(q,o);if(aJ.isCharacterDataNode(r)&&p>0&&p<r.length){r=aJ.splitDataNode(r,p);if(m){o-=p;q=r}else{q==r.parentNode&&o>=aJ.getNodeIndex(r)&&o++}p=0}i(this,r,p,q,o)},normalizeBoundaries:function(){ac(this);var t=this.startContainer,r=this.startOffset,s=this.endContainer,p=this.endOffset,o=function(u){var x=u.nextSibling;if(x&&x.nodeType==u.nodeType){s=u;p=u.length;u.appendData(x.data);x.parentNode.removeChild(x)}},q=function(u){var x=u.previousSibling;if(x&&x.nodeType==u.nodeType){t=u;var y=u.length;r=x.length;u.insertData(0,x.data);x.parentNode.removeChild(x);if(t==s){p+=r;s=t}else{if(s==u.parentNode){x=aJ.getNodeIndex(u);if(p==x){s=u;p=y}else{p>x&&p--}}}}},m=true;if(aJ.isCharacterDataNode(s)){s.length==p&&o(s)}else{if(p>0){(m=s.childNodes[p-1])&&aJ.isCharacterDataNode(m)&&o(m)}m=!this.collapsed}if(m){if(aJ.isCharacterDataNode(t)){r==0&&q(t)}else{if(r<t.childNodes.length){(o=t.childNodes[r])&&aJ.isCharacterDataNode(o)&&q(o)}}}else{t=s;r=p}i(this,t,r,s,p)},createNodeIterator:function(o,m){aC(this);ac(this);return new aL(this,o,m)},getNodes:function(o,m){aC(this);ac(this);return ak(this,o,m)},collapseToPoint:function(o,m){aC(this);ac(this);aF(o,true);S(o,m);k(this,o,m)},collapseBefore:function(m){aC(this);this.setEndBefore(m);this.collapse(false)},collapseAfter:function(m){aC(this);this.setStartAfter(m);this.collapse(true)},getName:function(){return"DomRange"},equals:function(m){return ab.rangesEqual(this,m)},inspect:function(){return aB(this)}};an(a)}function b(a){a.collapsed=a.startContainer===a.endContainer&&a.startOffset===a.endOffset;a.commonAncestorContainer=a.collapsed?a.startContainer:aJ.getCommonAncestor(a.startContainer,a.endContainer)}function at(a,f,e,i,k){var d=a.startContainer!==f||a.startOffset!==e,j=a.endContainer!==i||a.endOffset!==k;a.startContainer=f;a.startOffset=e;a.endContainer=i;a.endOffset=k;b(a);ag(a,"boundarychange",{startMoved:d,endMoved:j})}function ab(a){this.startContainer=a;this.startOffset=0;this.endContainer=a;this.endOffset=0;this._listeners={boundarychange:[],detach:[]};b(this)}aG.requireModules(["DomUtil"]);var aJ=aG.dom,h=aJ.DomPosition,L=aG.DOMException;aD.prototype={_current:null,_next:null,_first:null,_last:null,isSingleCharacterDataNode:false,reset:function(){this._current=null;this._next=this._first},hasNext:function(){return !!this._next},next:function(){var a=this._current=this._next;if(a){this._next=a!==this._last?a.nextSibling:null;if(aJ.isCharacterDataNode(a)&&this.clonePartiallySelectedTextNodes){if(a===this.ec){(a=a.cloneNode(true)).deleteData(this.eo,a.length-this.eo)}if(this._current===this.sc){(a=a.cloneNode(true)).deleteData(0,this.so)}}}return a},remove:function(){var a=this._current,e,d;if(aJ.isCharacterDataNode(a)&&(a===this.sc||a===this.ec)){e=a===this.sc?this.so:0;d=a===this.ec?this.eo:a.length;e!=d&&a.deleteData(e,d-e)}else{a.parentNode&&a.parentNode.removeChild(a)}},isPartiallySelectedSubtree:function(){return V(this._current,this.range)},getSubtreeIterator:function(){var a;if(this.isSingleCharacterDataNode){a=this.range.cloneRange();a.collapse()}else{a=new ab(af(this.range));var f=this._current,e=f,i=0,j=f,d=ae(f);if(aJ.isAncestorOf(f,this.sc,true)){e=this.sc;i=this.so}if(aJ.isAncestorOf(f,this.ec,true)){j=this.ec;d=this.eo}at(a,e,i,j,d)}return new aD(a,this.clonePartiallySelectedTextNodes)},detach:function(a){a&&this.range.detach();this.range=this._current=this._next=this._first=this._last=this.sc=this.so=this.ec=this.eo=null}};aM.prototype={BAD_BOUNDARYPOINTS_ERR:1,INVALID_NODE_TYPE_ERR:2};aM.prototype.toString=function(){return this.message};aL.prototype={_current:null,hasNext:function(){return !!this._next},next:function(){this._current=this._next;this._next=this.nodes[++this._position];return this._current},detach:function(){this._current=this._next=this.nodes=null}};var ar=[1,3,4,5,7,8,10],au=[2,9,11],am=[1,3,4,5,7,8,10,11],aO=[1,3,4,5,7,8],aN=aI([9,11]),aK=aI([5,6,10,12]),aj=aI([6,10,12]),ai=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer"],R=0,n=1,g=2,aw=3,aq=0,v=1,ay=2,ap=3;ao(ab,at,function(a){aC(a);a.startContainer=a.startOffset=a.endContainer=a.endOffset=null;a.collapsed=a.commonAncestorContainer=null;ag(a,"detach",null);a._listeners=null});ab.fromRange=function(a){var d=new ab(af(a));at(d,a.startContainer,a.startOffset,a.endContainer,a.endOffset);return d};ab.rangeProperties=ai;ab.RangeIterator=aD;ab.copyComparisonConstants=an;ab.createPrototypeRange=ao;ab.inspect=aB;ab.getRangeDocument=af;ab.rangesEqual=function(a,d){return a.startContainer===d.startContainer&&a.startOffset===d.startOffset&&a.endContainer===d.endContainer&&a.endOffset===d.endOffset};ab.getEndOffset=ae;aG.DomRange=ab;aG.RangeException=aM});rangy.createModule("WrappedRange",function(a){function g(j,r,k,i){var u=j.duplicate();u.collapse(k);var m=u.parentElement();h.isAncestorOf(r,m,true)||(m=r);if(!m.canHaveHTML){return new f(m.parentNode,h.getNodeIndex(m))}r=h.getDocument(m).createElement("span");var n,o=k?"StartToStart":"StartToEnd";do{m.insertBefore(r,r.previousSibling);u.moveToElementText(r)}while((n=u.compareEndPoints(o,j))>0&&r.previousSibling);o=r.nextSibling;if(n==-1&&o&&h.isCharacterDataNode(o)){u.setEndPoint(k?"EndToStart":"EndToEnd",j);if(/[\r\n]/.test(o.data)){m=u.duplicate();k=m.text.replace(/\r\n/g,"\r").length;for(k=m.moveStart("character",k);m.compareEndPoints("StartToEnd",m)==-1;){k++;m.moveStart("character",1)}}else{k=u.text.length}m=new f(o,k)}else{o=(i||!k)&&r.previousSibling;m=(k=(i||k)&&r.nextSibling)&&h.isCharacterDataNode(k)?new f(k,0):o&&h.isCharacterDataNode(o)?new f(o,o.length):new f(m,h.getNodeIndex(r))}r.parentNode.removeChild(r);return m}function c(j,r){var k,i,u=j.offset,m=h.getDocument(j.node),n=m.body.createTextRange(),o=h.isCharacterDataNode(j.node);if(o){k=j.node;i=k.parentNode}else{k=j.node.childNodes;k=u<k.length?k[u]:null;i=j.node}m=m.createElement("span");m.innerHTML="&#feff;";k?i.insertBefore(m,k):i.appendChild(m);n.moveToElementText(m);n.collapse(!r);i.removeChild(m);if(o){n[r?"moveStart":"moveEnd"]("character",u)}return n}a.requireModules(["DomUtil","DomRange"]);var e,h=a.dom,f=h.DomPosition,b=a.DomRange;if(a.features.implementsDomRange){(function(){function j(q){for(var l=k.length,p;l--;){p=k[l];q[p]=q.nativeRange[p]}}var r,k=b.rangeProperties,i,u;e=function(l){if(!l){throw Error("Range must be specified")}this.nativeRange=l;j(this)};b.createPrototypeRange(e,function(t,p,q,v,s){var l=t.endContainer!==v||t.endOffset!=s;if(t.startContainer!==p||t.startOffset!=q||l){t.setEnd(v,s);t.setStart(p,q)}},function(q){q.nativeRange.detach();q.detached=true;for(var l=k.length,p;l--;){p=k[l];q[p]=null}});r=e.prototype;r.selectNode=function(l){this.nativeRange.selectNode(l);j(this)};r.deleteContents=function(){this.nativeRange.deleteContents();j(this)};r.extractContents=function(){var l=this.nativeRange.extractContents();j(this);return l};r.cloneContents=function(){return this.nativeRange.cloneContents()};r.surroundContents=function(l){this.nativeRange.surroundContents(l);j(this)};r.collapse=function(l){this.nativeRange.collapse(l);j(this)};r.cloneRange=function(){return new e(this.nativeRange.cloneRange())};r.refresh=function(){j(this)};r.toString=function(){return this.nativeRange.toString()};var m=document.createTextNode("test");h.getBody(document).appendChild(m);var n=document.createRange();n.setStart(m,0);n.setEnd(m,0);try{n.setStart(m,1);i=true;r.setStart=function(p,l){this.nativeRange.setStart(p,l);j(this)};r.setEnd=function(p,l){this.nativeRange.setEnd(p,l);j(this)};u=function(l){return function(p){this.nativeRange[l](p);j(this)}}}catch(o){i=false;r.setStart=function(q,l){try{this.nativeRange.setStart(q,l)}catch(p){this.nativeRange.setEnd(q,l);this.nativeRange.setStart(q,l)}j(this)};r.setEnd=function(q,l){try{this.nativeRange.setEnd(q,l)}catch(p){this.nativeRange.setStart(q,l);this.nativeRange.setEnd(q,l)}j(this)};u=function(p,l){return function(q){try{this.nativeRange[p](q)}catch(s){this.nativeRange[l](q);this.nativeRange[p](q)}j(this)}}}r.setStartBefore=u("setStartBefore","setEndBefore");r.setStartAfter=u("setStartAfter","setEndAfter");r.setEndBefore=u("setEndBefore","setStartBefore");r.setEndAfter=u("setEndAfter","setStartAfter");n.selectNodeContents(m);r.selectNodeContents=n.startContainer==m&&n.endContainer==m&&n.startOffset==0&&n.endOffset==m.length?function(l){this.nativeRange.selectNodeContents(l);j(this)}:function(l){this.setStart(l,0);this.setEnd(l,b.getEndOffset(l))};n.selectNodeContents(m);n.setEnd(m,3);i=document.createRange();i.selectNodeContents(m);i.setEnd(m,4);i.setStart(m,2);r.compareBoundaryPoints=n.compareBoundaryPoints(n.START_TO_END,i)==-1&n.compareBoundaryPoints(n.END_TO_START,i)==1?function(p,l){l=l.nativeRange||l;if(p==l.START_TO_END){p=l.END_TO_START}else{if(p==l.END_TO_START){p=l.START_TO_END}}return this.nativeRange.compareBoundaryPoints(p,l)}:function(p,l){return this.nativeRange.compareBoundaryPoints(p,l.nativeRange||l)};h.getBody(document).removeChild(m);n.detach();i.detach()})()}else{if(a.features.implementsTextRange){e=function(i){this.textRange=i;this.refresh()};e.prototype=new b(document);e.prototype.refresh=function(){var j,m,k=this.textRange;j=k.parentElement();var i=k.duplicate();i.collapse(true);m=i.parentElement();i=k.duplicate();i.collapse(false);k=i.parentElement();m=m==k?m:h.getCommonAncestor(m,k);m=m==j?m:h.getCommonAncestor(j,m);if(this.textRange.compareEndPoints("StartToEnd",this.textRange)==0){m=j=g(this.textRange,m,true,true)}else{j=g(this.textRange,m,true,false);m=g(this.textRange,m,false,false)}this.setStart(j.node,j.offset);this.setEnd(m.node,m.offset)};e.rangeToTextRange=function(i){if(i.collapsed){return c(new f(i.startContainer,i.startOffset),true)}else{var k=c(new f(i.startContainer,i.startOffset),true),j=c(new f(i.endContainer,i.endOffset),false);i=h.getDocument(i.startContainer).body.createTextRange();i.setEndPoint("StartToStart",k);i.setEndPoint("EndToEnd",j);return i}};b.copyComparisonConstants(e);var d=function(){return this}();if(typeof d.Range=="undefined"){d.Range=e}}}e.prototype.getName=function(){return"WrappedRange"};a.WrappedRange=e;a.createNativeRange=function(i){i=i||document;if(a.features.implementsDomRange){return i.createRange()}else{if(a.features.implementsTextRange){return i.body.createTextRange()}}};a.createRange=function(i){i=i||document;return new e(a.createNativeRange(i))};a.createRangyRange=function(i){i=i||document;return new b(i)};a.createIframeRange=function(i){return a.createRange(h.getIframeDocument(i))};a.createIframeRangyRange=function(i){return a.createRangyRange(h.getIframeDocument(i))};a.addCreateMissingNativeApiListener(function(i){i=i.document;if(typeof i.createRange=="undefined"){i.createRange=function(){return a.createRange(this)}}i=i=null})});rangy.createModule("WrappedSelection",function(an,v){function L(e){return(e||window).getSelection()}function M(e){return(e||window).document.selection}function ae(e,k,f){var j=f?"end":"start";f=f?"start":"end";e.anchorNode=k[j+"Container"];e.anchorOffset=k[j+"Offset"];e.focusNode=k[f+"Container"];e.focusOffset=k[f+"Offset"]}function P(e){e.anchorNode=e.focusNode=null;e.anchorOffset=e.focusOffset=0;e.rangeCount=0;e.isCollapsed=true;e._ranges.length=0}function D(e){var f;if(e instanceof ap){f=e._selectionNativeRange;if(!f){f=an.createNativeRange(at.getDocument(e.startContainer));f.setEnd(e.endContainer,e.endOffset);f.setStart(e.startContainer,e.startOffset);e._selectionNativeRange=f;e.attachListener("detach",function(){this._selectionNativeRange=null})}}else{if(e instanceof ag){f=e.nativeRange}else{if(window.Range&&e instanceof Range){f=e}}}return f}function i(e){var k=e.getNodes(),f;e:if(!k.length||k[0].nodeType!=1){f=false}else{f=1;for(var j=k.length;f<j;++f){if(!at.isAncestorOf(k[0],k[f])){f=false;break e}}f=true}if(!f){throw Error("getSingleElementFromRange: range "+e.inspect()+" did not consist of a single element")}return k[0]}function ao(e,j){var f=new ag(j);e._ranges=[f];ae(e,f,false);e.rangeCount=1;e.isCollapsed=f.collapsed}function al(e){e._ranges.length=0;if(e.docSelection.type=="None"){P(e)}else{var l=e.docSelection.createRange();if(l&&typeof l.text!="undefined"){ao(e,l)}else{e.rangeCount=l.length;for(var f,k=at.getDocument(l.item(0)),j=0;j<e.rangeCount;++j){f=an.createRange(k);f.selectNode(l.item(j));e._ranges.push(f)}e.isCollapsed=e.rangeCount==1&&e._ranges[0].collapsed;ae(e,e._ranges[e.rangeCount-1],false)}}}function ah(e,o){var f=e.docSelection.createRange(),m=i(o),l=at.getDocument(f.item(0));l=at.getBody(l).createControlRange();for(var k=0,p=f.length;k<p;++k){l.add(f.item(k))}try{l.add(m)}catch(j){throw Error("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)")}l.select();al(e)}function af(e,j,f){this.nativeSelection=e;this.docSelection=j;this._ranges=[];this.win=f;this.refresh()}function R(e,m){var f=at.getDocument(m[0].startContainer);f=at.getBody(f).createControlRange();for(var l=0,k;l<rangeCount;++l){k=i(m[l]);try{f.add(k)}catch(j){throw Error("setRanges(): Element within the one of the specified Ranges could not be added to control selection (does it have layout?)")}}f.select();al(e)}function ai(e,f){if(e.anchorNode&&at.getDocument(e.anchorNode)!==at.getDocument(f)){throw new am("WRONG_DOCUMENT_ERR")}}function ak(e){var m=[],f=new aj(e.anchorNode,e.anchorOffset),l=new aj(e.focusNode,e.focusOffset),k=typeof e.getName=="function"?e.getName():"Selection";if(typeof e.rangeCount!="undefined"){for(var j=0,o=e.rangeCount;j<o;++j){m[j]=ap.inspect(e.getRangeAt(j))}}return"["+k+"(Ranges: "+m.join(", ")+")(anchor: "+f.inspect()+", focus: "+l.inspect()+"]"}an.requireModules(["DomUtil","DomRange","WrappedRange"]);an.config.checkSelectionRanges=true;var at=an.dom,ar=an.util,ap=an.DomRange,ag=an.WrappedRange,am=an.DOMException,aj=at.DomPosition,S,n,C=an.util.isHostMethod(window,"getSelection"),g=an.util.isHostObject(document,"selection");if(C){S=L;an.isSelectionValid=function(){return true}}else{if(g){S=M;an.isSelectionValid=function(e){e=(e||window).document;var f=e.selection;return f.type!="None"||at.getDocument(f.createRange().parentElement())==e}}else{v.fail("No means of obtaining a selection object")}}an.getNativeSelection=S;C=S();var b=an.createNativeRange(document),z=at.getBody(document),d=ar.areHostObjects(C,ar.areHostProperties(C,["anchorOffset","focusOffset"]));an.features.selectionHasAnchorAndFocus=d;var X=ar.isHostMethod(C,"extend");an.features.selectionHasExtend=X;var aa=typeof C.rangeCount=="number";an.features.selectionHasRangeCount=aa;var a=false,ac=true;ar.areHostMethods(C,["addRange","getRangeAt","removeAllRanges"])&&typeof C.rangeCount=="number"&&an.features.implementsDomRange&&function(){var e=document.createElement("iframe");z.appendChild(e);var l=at.getIframeDocument(e);l.open();l.write("<html><head></head><body>12</body></html>");l.close();var f=at.getIframeWindow(e).getSelection(),k=l.documentElement.lastChild.firstChild;l=l.createRange();l.setStart(k,1);l.collapse(true);f.addRange(l);ac=f.rangeCount==1;f.removeAllRanges();var j=l.cloneRange();l.setStart(k,0);j.setEnd(k,2);f.addRange(l);f.addRange(j);a=f.rangeCount==2;l.detach();j.detach();z.removeChild(e)}();an.features.selectionSupportsMultipleRanges=a;an.features.collapsedNonEditableSelectionsSupported=ac;var w=false,aq;if(z&&ar.isHostMethod(z,"createControlRange")){aq=z.createControlRange();if(ar.areHostProperties(aq,["item","add"])){w=true}}an.features.implementsControlRange=w;n=d?function(e){return e.anchorNode===e.focusNode&&e.anchorOffset===e.focusOffset}:function(e){return e.rangeCount?e.getRangeAt(e.rangeCount-1).collapsed:false};var c;if(ar.isHostMethod(C,"getRangeAt")){c=function(e,j){try{return e.getRangeAt(j)}catch(f){return null}}}else{if(d){c=function(e){var f=at.getDocument(e.anchorNode);f=an.createRange(f);f.setStart(e.anchorNode,e.anchorOffset);f.setEnd(e.focusNode,e.focusOffset);if(f.collapsed!==this.isCollapsed){f.setStart(e.focusNode,e.focusOffset);f.setEnd(e.anchorNode,e.anchorOffset)}return f}}}an.getSelection=function(e){e=e||window;var k=e._rangySelection,f=S(e),j=g?M(e):null;if(k){k.nativeSelection=f;k.docSelection=j;k.refresh(e)}else{k=new af(f,j,e);e._rangySelection=k}return k};an.getIframeSelection=function(e){return an.getSelection(at.getIframeWindow(e))};aq=af.prototype;if(d&&ar.areHostMethods(C,["removeAllRanges","addRange"])){aq.removeAllRanges=function(){this.nativeSelection.removeAllRanges();P(this)};var h=function(e,j){var f=ap.getRangeDocument(j);f=an.createRange(f);f.collapseToPoint(j.endContainer,j.endOffset);e.nativeSelection.addRange(D(f));e.nativeSelection.extend(j.startContainer,j.startOffset);e.refresh()};aq.addRange=aa?function(e,j){if(w&&g&&this.docSelection.type=="Control"){ah(this,e)}else{if(j&&X){h(this,e)}else{var f;if(a){f=this.rangeCount}else{this.removeAllRanges();f=0}this.nativeSelection.addRange(D(e));this.rangeCount=this.nativeSelection.rangeCount;if(this.rangeCount==f+1){if(an.config.checkSelectionRanges){if((f=c(this.nativeSelection,this.rangeCount-1))&&!ap.rangesEqual(f,e)){e=new ag(f)}}this._ranges[this.rangeCount-1]=e;ae(this,e,V(this.nativeSelection));this.isCollapsed=n(this)}else{this.refresh()}}}}:function(e,f){if(f&&X){h(this,e)}else{this.nativeSelection.addRange(D(e));this.refresh()}};aq.setRanges=function(e){if(w&&e.length>1){R(this,e)}else{this.removeAllRanges();for(var j=0,f=e.length;j<f;++j){this.addRange(e[j])}}}}else{if(ar.isHostMethod(C,"empty")&&ar.isHostMethod(b,"select")&&w&&g){aq.removeAllRanges=function(){try{this.docSelection.empty();if(this.docSelection.type!="None"){var e;if(this.anchorNode){e=at.getDocument(this.anchorNode)}else{if(this.docSelection.type=="Control"){var j=this.docSelection.createRange();if(j.length){e=at.getDocument(j.item(0)).body.createTextRange()}}}if(e){e.body.createTextRange().select();this.docSelection.empty()}}}catch(f){}P(this)};aq.addRange=function(e){if(this.docSelection.type=="Control"){ah(this,e)}else{ag.rangeToTextRange(e).select();this._ranges[0]=e;this.rangeCount=1;this.isCollapsed=this._ranges[0].collapsed;ae(this,e,false)}};aq.setRanges=function(e){this.removeAllRanges();var f=e.length;if(f>1){R(this,e)}else{f&&this.addRange(e[0])}}}else{v.fail("No means of selecting a Range or TextRange was found");return false}}aq.getRangeAt=function(e){if(e<0||e>=this.rangeCount){throw new am("INDEX_SIZE_ERR")}else{return this._ranges[e]}};var ab;if(ar.isHostMethod(C,"getRangeAt")&&typeof C.rangeCount=="number"){ab=function(e){if(w&&g&&e.docSelection.type=="Control"){al(e)}else{e._ranges.length=e.rangeCount=e.nativeSelection.rangeCount;if(e.rangeCount){for(var j=0,f=e.rangeCount;j<f;++j){e._ranges[j]=new an.WrappedRange(e.nativeSelection.getRangeAt(j))}ae(e,e._ranges[e.rangeCount-1],V(e.nativeSelection));e.isCollapsed=n(e)}else{P(e)}}}}else{if(d&&typeof C.isCollapsed=="boolean"&&typeof b.collapsed=="boolean"&&an.features.implementsDomRange){ab=function(e){var f;f=e.nativeSelection;if(f.anchorNode){f=c(f,0);e._ranges=[f];e.rangeCount=1;f=e.nativeSelection;e.anchorNode=f.anchorNode;e.anchorOffset=f.anchorOffset;e.focusNode=f.focusNode;e.focusOffset=f.focusOffset;e.isCollapsed=n(e)}else{P(e)}}}else{if(ar.isHostMethod(C,"createRange")&&g){ab=function(e){var f;if(an.isSelectionValid(e.win)){f=e.docSelection.createRange()}else{f=at.getBody(e.win.document).createTextRange();f.collapse(true)}if(e.docSelection.type=="Control"){al(e)}else{f&&typeof f.text!="undefined"?ao(e,f):P(e)}}}else{v.fail("No means of obtaining a Range or TextRange from the user's selection was found");return false}}}aq.refresh=function(e){var f=e?this._ranges.slice(0):null;ab(this);if(e){e=f.length;if(e!=this._ranges.length){return false}for(;e--;){if(!ap.rangesEqual(f[e],this._ranges[e])){return false}}return true}};var ad=function(e,m){var f=e.getAllRanges(),l=false;e.removeAllRanges();for(var k=0,j=f.length;k<j;++k){if(l||m!==f[k]){e.addRange(f[k])}else{l=true}}e.rangeCount||P(e)};aq.removeRange=w?function(e){if(this.docSelection.type=="Control"){var m=this.docSelection.createRange();e=i(e);var f=at.getDocument(m.item(0));f=at.getBody(f).createControlRange();for(var l,k=false,j=0,o=m.length;j<o;++j){l=m.item(j);if(l!==e||k){f.add(m.item(j))}else{k=true}}f.select();al(this)}else{ad(this,e)}}:function(e){ad(this,e)};var V;if(d&&an.features.implementsDomRange){V=function(e){var f=false;if(e.anchorNode){f=at.comparePoints(e.anchorNode,e.anchorOffset,e.focusNode,e.focusOffset)==1}return f};aq.isBackwards=function(){return V(this)}}else{V=aq.isBackwards=function(){return false}}aq.toString=function(){for(var e=[],j=0,f=this.rangeCount;j<f;++j){e[j]=""+this._ranges[j]}return e.join("")};aq.collapse=function(e,j){ai(this,e);var f=an.createRange(at.getDocument(e));f.collapseToPoint(e,j);this.removeAllRanges();this.addRange(f);this.isCollapsed=true};aq.collapseToStart=function(){if(this.rangeCount){var e=this._ranges[0];this.collapse(e.startContainer,e.startOffset)}else{throw new am("INVALID_STATE_ERR")}};aq.collapseToEnd=function(){if(this.rangeCount){var e=this._ranges[this.rangeCount-1];this.collapse(e.endContainer,e.endOffset)}else{throw new am("INVALID_STATE_ERR")}};aq.selectAllChildren=function(e){ai(this,e);var f=an.createRange(at.getDocument(e));f.selectNodeContents(e);this.removeAllRanges();this.addRange(f)};aq.deleteFromDocument=function(){if(w&&g&&this.docSelection.type=="Control"){for(var e=this.docSelection.createRange(),j;e.length;){j=e.item(0);e.remove(j);j.parentNode.removeChild(j)}this.refresh()}else{if(this.rangeCount){e=this.getAllRanges();this.removeAllRanges();j=0;for(var f=e.length;j<f;++j){e[j].deleteContents()}this.addRange(e[f-1])}}};aq.getAllRanges=function(){return this._ranges.slice(0)};aq.setSingleRange=function(e){this.setRanges([e])};aq.containsNode=function(e,k){for(var f=0,j=this._ranges.length;f<j;++f){if(this._ranges[f].containsNode(e,k)){return true}}return false};aq.getName=function(){return"WrappedSelection"};aq.inspect=function(){return ak(this)};aq.detach=function(){this.win=this.anchorNode=this.focusNode=this.win._rangySelection=null};af.inspect=ak;an.Selection=af;an.addCreateMissingNativeApiListener(function(e){if(typeof e.getSelection=="undefined"){e.getSelection=function(){return an.getSelection(this)}}e=null})});
;
jive.namespace("StatusInput");if(!jive.StatusInput.StatusInputs){jive.StatusInput.StatusInputs=$Class.extend({init:function(a,b){this._container=$j(a);this._i18n=b.i18n;this._statusInputIdPostfix=b.idPostfix;this.statusInputs={};var c=this;$j(document).asyncReady(function(){c._docReadyInit(b);c.emit("ready")})},getSubmitVals:function(a){return this.getStatusInput(a).getSubmitVals(true)},resetText:function(a){this.getStatusInput(a).resetText()},_docReadyInit:function(a){var b=this;this._container.find(".jive-js-statusinput").each(function(){var c=$j(this).attr("id");b.statusInputs[c]=new jive.StatusInput.StatusInput($j(this),a)})},getStatusInput:function(a){return this.statusInputs[a]}});jive.conc.observable(jive.StatusInput.StatusInputs.prototype);jive.conc.observable(jive.StatusInput.StatusInputs.prototype);jive.StatusInput.StatusInput=$Class.extend({init:function(a,b){b.mobileUI=b.mobileUI||jive.rte.mobileUI;this._container=$j(a);var c=this._container.get(0);c.insertBefore(document.createTextNode(""),c.firstChild);this.mobileUI=b.mobileUI;if(this.mobileUI){this._container=$j("<input type='text' class='rteReplacement'/>");$j(a).before(this._container);$j(a).remove()}this._mobileEditor=b.mobileUI;this._i18n=b.i18n;this._selection=null;this._replacedInitialText=false;this._statusInputIdPostfix=b.idPostfix;this._initTypeAhead();this._initDD(b);this._initDDHandlers();this._maxCharCount=b.maxCharCount;this._maxCharCountBeforeWarning=((this._maxCharCount)?(b.maxCharCountBeforeWarn||this._maxCharCount*0.8):0);this._previousMatchReqsSpaceAfter=null;this._previousPasteVal=null;this._previousSanitizedHTML=null;this._supportsDomRange=$j.isFunction(window.getSelection);this._id=this._container.attr("id");var d=this;define(["jive.conc.FreshActionQueue"],function(e){d._actionQueue=new e()});$j(document).bind("keyup mouseup",function(f){f.stopPropagation();switch(f.which){case 1:case 2:case 3:break;case 13:f.preventDefault();break;case 27:d._dd.hide();return;break;default:break}});this._container.bind("keypress",function(f){switch(f.which){case 13:f.preventDefault();if(this._mobileEditor){return false}break}});this.delay=(function(){var e=0;return function(g,f){clearTimeout(e);e=setTimeout(g,f)}})();this._container.bind("keydown",function(h){h.stopPropagation();switch(h.which){case 13:h.preventDefault();break;case 37:if(!$j.browser.msie){if(d._selection._selection.anchorNode&&d._selection._selection.anchorNode.parentNode==d._container[0].firstChild&&d._selection._selection.anchorOffset==0){$j(d._container[0]).html("&nbsp"+$j(d._container[0]).html());d._selection.moveToNodeAndCollapse(d._container[0].firstChild,true,0)}}else{var g=document.selection.createRange(),f=rangy.getSelection();if(g&&g.parentElement()==d._container[0].firstChild&&f.anchorOffset==0){$j(d._container[0]).html("&nbsp"+$j(d._container[0]).html());d._selection.moveToNodeAndCollapse(d._container[0].firstChild,true,0)}}return;break;case 38:case 40:if(d._dd.isVisible()){h.preventDefault()}break;case 32:d._processToken();break;case 9:d._processToken();return;default:break}d.delay(function(){d._selection=new jive.Selection();switch(h.which){case 13:if(this._mobileEditor){return false}if(d._dd.isVisible()){d._dd.hide();return false}if($j.browser.msie&&parseFloat($j.browser.version.charAt(0))<9){var i=document.selection.createRange();i.pasteHTML("<br data-jive-statusinputadd='true' />");i.select();break}var j=document.createElement("br");j.setAttribute("data-jive-statusinputadd","true");var k=document.createTextNode("");d._selection.insertNodeAtRange(j);d._selection.selectNode(j);d._selection.collapseRange(false);d._selection.insertNodeAtRange(k);d._selection.selectNodeContents(k);break;case 27:d._dd.hide();d.emit("escapeKeyPress");return;break;case 32:d._dd.hide();d._processCompleteToken();return;break;case 37:case 39:return;break;case 38:return;break;case 40:return;break;default:break}if((d._mobileEditor&&d._container.val().length==0)||(!d._mobileEditor&&d._container.text().length==0)){d._dd.hide();if(d._maxCharCount){d.emit("characterLenMsg","ok",{charCount:d.getCharCount()})}return}d.sanitizeHTML();if(!d._replacedInitialText){d._replacedInitialText=true}d._processToken();if(d._maxCharCount){var e=d.getCharCount();if(e>d._maxCharCountBeforeWarning){if(d.getCharCount()>d._maxCharCount){d.emit("characterLenMsg","error",{charCount:e,charOver:e-d._maxCharCount})}else{d.emit("characterLenMsg","warning",{charCount:e,charLeft:d._maxCharCount-e})}}else{d.emit("characterLenMsg","ok",{charCount:d.getCharCount()})}}},75)});this._container.bind("focus",function(f){d._onContainerFocus(f)});this._container.blur(function(f){d._processCompleteToken();d.emit("blur");d.sanitizeHTMLInterval=window.clearInterval(d.sanitizeHTMLInterval)});this._addInstanceToInstanceObj()},_onContainerFocus:function(a){this.sanitizeHTML();this.sanitizeHTMLInterval=window.setInterval($j.proxy(this.sanitizeHTML,this),500)},_triggerContainerFocus:function(){if(!this._container.is(":focus")){this._container.trigger("focus")}},_initTypeAhead:function(){var g=this;function c(){return g._checkTokens()}function l(m){return[27,38,40,9].indexOf(m.keyCode)>=0}function i(m){m.stopPropagation();m.preventDefault();return false}function f(o){var n;if(c()){var m=g._dd.isVisible();var p=new $j.Event(o.type,{keyCode:o.keyCode});if(o.keyCode==13||o.keyCode==32){if(m&&g.typeAheadProxy.data("typeAhead").getSelected().length>0){n=i(o)}}else{if(l(o)){if(m){i(o);n=false}else{if(o.keyCode==27){i(o)}}if(m&&o.type=="keydown"&&o.keyCode==9){if($j("a.jive-js-friends.j-active").length){$j("a.jive-js-history").click()}else{if($j("a.jive-js-history.j-active").length){$j("a.jive-js-friends").click()}}}}}g.typeAheadProxy.trigger(p)}else{g.typeAheadProxy.trigger("close")}return n}function h(){if(g._isMention()){var m=g._getMention();if(m&&m.length>=2){g._actionQueue.push(g._obtainSearchData(m)).then(function(n){g._dd.renderSearchData(n)})}else{g._showFriendsList()}}}this.typeAheadProxy=$j("<input type='text' />").typeAhead({hasFocus:function b(){var m=$j(document.activeElement);return m.get(0)===g._container.get(0)||m.closest(g._container).length>0},itemSelector:".j-autocomplete-results li",chooseOnSpace:true,ariaParent:this._container,focusTarget:this._container,keystrokeWait:400}).on("selectionChosen",function d(r,p,o,t){if(!g._dd.isVisible()){return}o=o.find("a");var s=o.attr("data-id");if(o.hasClass("jive-js-status-input-create")){var m={newtag:1};g._dd.emit("interactionFinished",{index:-1,value:'<span class="jive-icon-med jive-icon-tag"></span>'+s,href:_jive_base_url+"/tags#/?tags="+s,html:o.html()},null,m)}else{o.find(".j-508-label").remove();var q=o.html(),n=o.attr("href");if(!s&&o.attr("data-objectType")&&o.attr("__default_attr")){s=o.attr("data-objectType")+"-"+o.attr("__default_attr")}g._dd.emit("interactionFinished",{value:q,href:n,id:s})}}).on("keystroke",function(){h();g._processToken()}).on("focusWaitFinished",function(){if(!g._dd.isVisible()){g._selection=new jive.Selection();g._processToken()}}).on("close blurWaitFinished",function(){g._dd.hide()});var e=this._container.on("keydown keyup",function(m){g._selection=new jive.Selection();if(f(m)===false){m.stopImmediatePropagation()}}).attr("aria-autocomplete","list").attr("role","combobox").attr("tabindex","0");if(this._i18n&&this._i18n.ariaLabel){e.attr("aria-label",this._i18n.ariaLabel)}if(this._statusInputIdPostfix){var j="jive-508-label-";if(this._statusInputIdPostfix=="mbASHeader"&&this._container&&this._container.length>0){var k=this._container.attr("id");if(k){j=j+k}}else{j=j+"message-"+this._statusInputIdPostfix}var a=$j("#"+j);if(a&&a.length>0){e.attr("aria-labelledby",j)}}},_addInstanceToInstanceObj:function(){jive.StatusInput.StatusInput.instances[this._id]=this},_generateIconClass:function(c){var b={"jive-icon-blog":"jive-link-blog-small","jive-icon-doctype-compressed":"jive-icon-doctype-compressed-small","jive-icon-discussion":"jive-icon-discussion-small","jive-icon-discussion-bridged":"jive-icon-discussion-bridged-small","jive-icon-discussion-correct":"jive-icon-discussion-correct-small","jive-icon-discussion-question":"jive-icon-discussion-question-small","jive-icon-doctype-acrobat":"jive-icon-doctype-acrobat-small","jive-icon-doctype-document":"jive-icon-doctype-document-small","jive-icon-doctype-image":"jive-icon-doctype-image-small","jive-icon-doctype-presentation":"jive-icon-doctype-presentation-small","jive-icon-doctype-spreadsheet":"jive-icon-doctype-spreadsheet-small","jive-icon-document":"jive-link-wiki-small","jive-icon-external-site":"jive-link-url-small","jive-icon-group":"jive-link-socialgroup-small","jive-icon-poll":"jive-link-poll-small","jive-icon-profile":"jive-link-profile-small","jive-icon-project":"jive-link-project-small","jive-icon-tag":"jive-link-tag-small","jive-icon-space":"jive-link-community-small"},a=$j.map(c,function(d){return d in b?b[d]:null});return a.shift()||""},getContainer:function(){return this._container},getSubmitVals:function(a){if(a){this._truncateNodes()}var b;if(this._mobileEditor){b=jive.util.escapeHTML(this._container.val())}else{b=this._container.html()}b=b.replace(/<\/?br _[^>]*>/gi,"");b=b.replace(/(<\/?)(\w+)([^>]*>)/gi,function(f,e,d,c){return e+d.toLowerCase()+c.replace(/((data-jive-statusInputadd)|(data-jive-truncation-flag))=["']true["']/gi,"")});b=b.replace(/(<\/?[aA]\s+[^>]*href=")([^"]*)("[^>]*>)/gi,function(g,f,e,d){if(g.search(/<\w+[^>]*data-jive-statusinputinteral="true"[^>]*>/gi)!=-1){var c=e.replace(/https?\:\/\//,"").split("/").slice(1).join("/");return f+"/"+c+d}else{return g}});return b},_truncateNodes:function(){if(this.getCharCount()>this._maxCharCount){var g=this._container[0].childNodes;var f=0;var e=false;for(var c=0;c<g.length;c++){var b=g[c];if(e){this._container[0].removeChild(b)}else{var a=$j(b).text().length;if(f+a>this._maxCharCount){var d=this._maxCharCount-f;this._truncateNode(b,d);e=true}f+=a}}}},_truncateNode:function(c,a){if(c.nodeType==3){var d=c.nodeValue;if(d.length<a){return a-d.length}else{c.nodeValue=c.nodeValue.substr(0,a);return 0}}else{var e=c.childNodes;for(var b=0;b<e.length;b++){if(a==0){c.removeChild(e[b])}else{a=this._truncateNode(e[b],a)}}}},truncateAnchors:function(){$j(this._container).find("[data-jive-statusinputadd=true]:not([data-jive-truncation-flag=true],[data-jive-statusinputinteral=true])").each(function(){var a=$j(this);a.contents().filter(function(){return this.nodeType==3}).each(function(){var b=$j(this);b.replaceWith(document.createTextNode(jive.util.truncateStr(b.text())))});a.attr("data-jive-truncation-flag",true)})},sanitizeHTML:function(){var a=this._container.html();if(this._previousSanitizedHTML==a){return}var g=this._container[0];if(g.childNodes.length==0||(g.childNodes.length==1&&g.lastChild.nodeName.toLowerCase()=="br")){g.insertBefore(document.createTextNode(""),g.lastChild)}var c=g.lastChild;if(!$j.browser.msie&&(c==null||c.nodeType==3||c.nodeName&&c.nodeName.toLowerCase()!="br")){var d=document.createElement("br");d.setAttribute("_moz_dirty","");g.appendChild(d)}this.truncateAnchors();if(!$j.browser.msie){a=a.replace(/<\/?br[^>]*>$/mi,"")}var i=this;this._container.find("a[data-jive-statusinputadd=true]").filter(function(){return $j(this).text()==""}).each(function(){if(!i._selection){i._selection=new jive.Selection()}var k=i._selection.getRangeStartContainer();var n=$j(this);if($j(k).parents(n).length>0){var m=n.parent().contents(":not(br)");var p=m.index(n);var o;var l=0;if(p>0){o=m[p-1];l=$j(o).text().length}else{if(p<m.length-1){o=m[p+1]}}if(!o&&n.parent()[0]!==i._container[0]){o=n.parent()[0]}if(o){i._selection.moveToNodeAndCollapse(o,true,l)}}n.remove()});var e=this._container.children("[data-jive-statusInputadd!=true]");if(!$j.browser.msie){e=e.filter(":not(:last)")}e.filter("br").not("[_moz_dirty]").each(function(){$j(this).replaceWith("<br />")});e=e.not("br");if(e.length>0){var b,f=0,h=function(k){return/^style$/i.test(k.nodeName||"")},j=function(k){if(/^(p|div)$/i.test(k.tagName)){return f++>0}return false};e.each(function(){var k=$j(this);if(h(this)){k.remove()}else{if(j(this)){k.before('<br data-statusInputadd="true" />')}b=document.createTextNode(k.text());i._container[0].replaceChild(b,this)}});if(this._selection&&b){this._selection.moveToNodeAndCollapse(b,true,b.nodeValue.length)}}this._previousPasteVal=this._container.text();this._previousSanitizedHTML=this._container.html()},resetText:function(){this._setText("");this._replacedInitialText=false;this.emit("characterLenMsg","ok",{charCount:this.getCharCount()})},getCharCount:function(){if(this.mobileUI){return this._container.val().length}else{return this._container.text().length}},_setText:function(a){if(this._mobileEditor){this._container.val(jive.util.unescapeHTML(a))}else{this._container.html(a)}},_focus:function(a){this._container.focus()},_createNewSelectionUtil:function(){var a=false;if($j.browser.msie){if(this._container.contents().length==0){this._selection=null;return}}else{var b=this._container[0].lastChild;if(!b){this.sanitizeHTML();b=this._container[0].lastChild}a=b.nodeName.toLowerCase()=="br"}this._selection=new jive.Selection(this._container[0].lastChild,a)},_isMatch:function(b,a){return a.search(new RegExp(this._getPatterns()[b],"gi"))>-1},_matchUtil:function(b,a){return a.match(new RegExp(this._getPatterns()[b],"gi"))},_isMention:function(){var a=this._selection.getWordAtRange();return this._isMatch("mention",a)},_getMention:function(){var b=this._selection.getWordAtRange(),a=this._matchUtil("mention",b)[0];return a.substr(1,a.length)},_checkTokens:function checkTokens(){var c=this._selection.getWordAtRange();var b=this._getTokens();var a=false;$j.each(Object.keys(b),function(){var d=b[this];if(c.match(d.regExp)){a=true;return false}});return a},_processToken:function(){if(!this._mobileEditor){var a=this._selection.getWordAtRange();if(a===""){this._processCompleteToken()}else{this._processPartialToken(a,this._selection.getRangeStartContainer())}}},_processCompleteToken:function(){if(!this._dd.isVisible()){var a=this._tokenCallbacks||[];a.forEach(function(b){b()});if(a.length<1){this._dd.hide()}this._tokenCallbacks=[]}},_processPartialToken:function(f,d){var c=[],e=this._getTokens(),a=false,b=this;Object.keys(e).forEach(function(g){var h=e[g],i=f.match(h.regExp);if(i){a=true;i.push(d);if(h.complete){c.push(function(){h.complete.apply(b,i)})}if(h.keypress){h.keypress.apply(b,i)}}});if(!a){this._dd.hide()}this._tokenCallbacks=c},_obtainData:function(b){var a,c;if(!jive.StatusInput.StatusInput.dataCache.hasOwnProperty(b)){c=$j.getJSON(b);c.then(function(d){jive.StatusInput.StatusInput.dataCache[b]=d})}else{a=new $j.Deferred();a.resolve(jive.StatusInput.StatusInput.dataCache[b]);c=a.promise()}return c},_obtainSearchData:function(a){return this._obtainData(jive.rest.url("/emention/search/")+encodeURI(a)+"*")}});jive.StatusInput.StatusInput.dataCache={};jive.StatusInput.StatusInput.instances={};$j(document).asyncReady(function(){window.setInterval(function(){jive.StatusInput.StatusInput.dataCache={}},300000)});jive.StatusInput.StatusInput.sanitizeHTMLIntervalHandler=function(){for(var a in jive.StatusInput.StatusInput.instances){jive.StatusInput.StatusInput.instances[a].sanitizeHTML()}};jive.StatusInput.StatusInput.getRegExpsFromPatterns=function(a){var b={};Object.keys(a).forEach(function(c){var d=a[c],e;if($j.isArray(d)){e=d.map(function(f){return"("+f+")"}).join("|")}else{e=d}b[c]=new RegExp(e)});return b};jive.StatusInput.StatusInput.Patterns={mention:"@([^@ ]+)?"};jive.StatusInput.StatusInput.Tokens={mention:{regExp:new RegExp(jive.StatusInput.StatusInput.Patterns.mention,"i"),keypress:function(b,a){var c=this;if(a&&a.length>=2){this._actionQueue.push(this._obtainSearchData(a)).then(function(d){c._dd.renderSearchData(d)})}else{}}}};jive.conc.observable(jive.StatusInput.StatusInput.prototype);jive.StatusInput.renderAttachmentsWrapper=function(b,a,c){if(b.attachments){a.append(jive.statusinput.attachments.renderAttachments({entry:{meta:b.attachments},removable:c}))}else{a.append(jive.statusinput.attachments.renderAttachments($j.extend({},b,{removable:c})))}if(c){a.slideDown("fast",function(){$j(this).animate({opacity:1},500)})}else{a.css("opacity","1").show()}jive.StatusInput.bindAttachment(a.find("ul.j-attached-items"),c)};jive.StatusInput.renderAttachmentWrapper=function(b,a,c){a.append(jive.statusinput.attachments.renderAttachment($j.extend(b,{removable:c})))};jive.StatusInput.bindAttachment=function(b,d){var a=0,c;b.find("li:visible").each(function(){a+=$j(this).outerWidth()});b.css("width",a+"px").data("innerWidth",a);c=b.width()-b.closest(".j-attachment-container").width();if(c>0&&d){b.animate({left:(c*-1-40)},300)}b.find("li a.j-attach-anchor").unbind("hover").hover(function(){$j(this).find(".j-icon-play").stop().fadeTo("fast",0.6)},function(){$j(this).find(".j-icon-play").stop().fadeOut("fast")});b.parent().find(".j-attachment-arrow").unbind().mousedown(function(){try{var g;var i=$j(this).outerWidth()*2;c=b.width()-b.closest(".j-attachment-container").width();var f=parseInt(b.css("left"));if(isNaN(f)){f=0}if($j(this).hasClass("j-attachment-arrow-right")&&c>0){g=f+(c+i);b.stop().animate({left:(-c-i)},g*5,"linear")}else{if(c>0){g=f*-1;b.stop().animate({left:0},g*5,"linear")}}}catch(h){console.log(h)}}).mouseup(function(){b.stop();return false}).click(function(){return false});if(!d){jive.StatusInput.sizeContainer(b.parent().parent())}else{jive.StatusInput.showArrows()}};$j(window).resize((function(){var a;return function(){var b=$j(window).width();if(a&&b!==a){jive.StatusInput.sizeContainer()}a=b}})());jive.StatusInput.sizeContainer=function(b){var a;b=b||$j(document);b.find(".j-attachment-container:visible:has(.j-attached-items)").hide().each(function(){var c=$j(this),d=c.closest(".jive-table-cell-activity"),f=c.closest(".j-wall-repost-content"),g=c.parent(),e;if(d.length>0){e=d.width()}else{if(f.length>0){e=f.width()}else{if(c.closest(".j-wall-form").length>0){e=0}else{if($j.browser.msie){e=g.width()-12}else{e=g.width()}}}}a=c.find(".j-attached-items").data("innerWidth")||Number.POSITIVE_INFINITY;if(e>0){$j(this).width(Math.min(e,a)).show()}else{c.show()}});jive.StatusInput.showArrows(b)};jive.StatusInput.showArrows=function(a){a=a||$j(document);a.find(".j-attached-items:visible").each(function(){var c=$j(this),b=c.parent();if(b.innerWidth()<c.innerWidth()){b.find(".j-attachment-arrow").css("display","block");c.css("margin","0 20px")}else{b.find(".j-attachment-arrow").hide();c.css({margin:"0",left:0})}})}};
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.statusinput=="undefined"){jive.statusinput={}}if(typeof jive.statusinput.dropdown=="undefined"){jive.statusinput.dropdown={}}jive.statusinput.dropdown.ddLoading=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="j-autocomplete j-pop js-pop j-js-autocomplete"><span class="belowArrow pointer" style="left: 6px;"></span><div class="j-menu j-pop-main j-autocomplete-container j-rc5"><div class="loading"></div></div></div>');return C?"":B.toString()};jive.statusinput.dropdown.ddSearchContent=function(A,C){var B=C||new soy.StringBuilder();jive.statusinput.dropdown.ddOutputEntries(A,B);B.append('<p class="j-actions font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("wallentry.status_input.dd.search.hint"),["Hint: Use an underscore to search multiple words"])),"</p>");return C?"":B.toString()};jive.statusinput.dropdown.ddSearch=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="j-autocomplete j-pop js-pop j-js-autocomplete"><span class="belowArrow pointer" style="left: 6px;"></span><div class="j-menu j-pop-main j-autocomplete-container j-rc5">');jive.statusinput.dropdown.ddSearchContent(A,B);B.append("</div></div>");return C?"":B.toString()};jive.statusinput.dropdown.ddTagsContent=function(A,C){var B=C||new soy.StringBuilder();if(A.currentTagText){jive.statusinput.dropdown.ddOutputTags(soy.$$augmentData(A,{shouldCreateTag:soy.$$escapeHtml(A.shouldCreateTag),creationHTML:(A.allowTagCreation)?'<a class="jive-js-status-input-selectable jive-js-status-input-create" href="javascript:void(0)" data-id="'+soy.$$escapeHtml(A.currentTagText)+'">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("wallentry.status_input.dd.tags.create.title"),["create #"]))+soy.$$escapeHtml(A.currentTagText)+"</a>":""}),B)}else{B.append('<p class="font-color-meta j-autocomplete-tag-prompt">',(A.allowTagCreation)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("wallentry.status_input.dd.tags.title"),["Continue typing to search tags or create new tags"])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("wallentry.status_input.dd.tags.title_no_create"),["Continue typing to search tags"])),"</p>")}return C?"":B.toString()};jive.statusinput.dropdown.ddTags=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="j-autocomplete j-pop js-pop j-js-autocomplete"><span class="belowArrow pointer" style="left: 6px;"></span><div class="j-menu j-pop-main j-rc5">');jive.statusinput.dropdown.ddTagsContent(A,B);B.append("</div></div>");return C?"":B.toString()};jive.statusinput.dropdown.ddFriendsContent=function(A,C){var B=C||new soy.StringBuilder();B.append('<p class="j-actions font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("wallentry.status_input.dd.friends.title"),["Friends"])),'</p><div class="j-autocomplete-nav clearfix"><span><a class="jive-js-friends js-tab j-active" href="javascript:void(0);">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("wallentry.status_input.dd.people.link.text"),[])),'</a></span><span><a class="jive-js-history js-tab" href="javascript:void(0);">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("wallentry.status_input.dd.history.link.text"),["History"])),"</a></span></div>");jive.statusinput.dropdown.ddOutputEntries(soy.$$augmentData(A,{emptyEntriesStr:jive.i18n.i18nText(jive.i18n.getMsg("profile.friends.self.nopeople.label"),[])}),B);return C?"":B.toString()};jive.statusinput.dropdown.ddFriends=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="j-autocomplete j-pop js-pop j-js-autocomplete"><span class="belowArrow pointer" style="left: 6px;"></span><div class="j-pop-main j-menu">');jive.statusinput.dropdown.ddFriendsContent(A,B);B.append("</div></div>");return C?"":B.toString()};jive.statusinput.dropdown.ddHistoryContent=function(A,C){var B=C||new soy.StringBuilder();B.append('<p class="j-actions font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("wallentry.status_input.dd.history.title"),["History"])),'</p><div class="j-autocomplete-nav clearfix"><span><a class="jive-js-friends js-tab" href="javascript:void(0);">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("wallentry.status_input.dd.people.link.text"),[])),'</a></span><span><a class="jive-js-history js-tab j-active" href="javascript:void(0);"> ',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("wallentry.status_input.dd.history.link.text"),["History"])),"</a></span></div>");jive.statusinput.dropdown.ddOutputEntries(soy.$$augmentData(A,{emptyEntriesStr:jive.i18n.i18nText(jive.i18n.getMsg("userbar.no_history_to_view.text"),["No history"])}),B);return C?"":B.toString()};jive.statusinput.dropdown.ddHistory=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="j-autocomplete j-pop js-pop j-js-autocomplete"><span class="belowArrow pointer" style="left: 6px;"></span><div class="j-pop-main j-menu">');jive.statusinput.dropdown.ddHistoryContent(A,B);B.append("</div></div>");return C?"":B.toString()};jive.statusinput.dropdown.ddOutputEntries=function(A,G){var D=G||new soy.StringBuilder();D.append('<ul class="j-autocomplete-results" role="listbox">');var C=A.entries;var E=C.length;if(E>0){for(var F=0;F<E;F++){var B=C[F];D.append('<li role="option">',B.html,"</li>")}}else{D.append((A.emptyEntriesHTML)?"<li>"+A.emptyEntriesHTML+"</li>":'<li class="j-ac-empty">'+soy.$$escapeHtml(A.emptyEntriesStr)+"</li>")}D.append("</ul>");return G?"":D.toString()};jive.statusinput.dropdown.ddOutputTags=function(C,G){var F=G||new soy.StringBuilder();F.append('<ul class="j-autocomplete-results" role="listbox">',(C.shouldCreateTag=="true")?'<li role="option">'+C.creationHTML+"</li>":"");var B=C.entries;var D=B.length;for(var E=0;E<D;E++){var A=B[E];F.append('<li role="option">',A.html,"</li>")}F.append("</ul>");return G?"":F.toString()}
;
jive.namespace("MicroBlogging");if(!jive.MicroBlogging.StatusInputDropDown){jive.MicroBlogging.StatusInputDropDown=$Class.extend({init:function(c,b,a){this._$statusInputContainer=$j(c);this._typeAhead=b;this._i18n=a.i18n;this._dd=null;this._data={search:null,friends:null,history:null};this._allowTagCreation=a.allowTagCreation==undefined?true:a.allowTagCreation},renderFriendsData:function(b){var a=this;this._renderData(b,"friends",jive.statusinput.dropdown.ddFriends,{fnHandleRender:function(){a._renderFriendsDataHelper()},renderIfDataIsNull:true})},renderHistoryData:function(b){var a=this;this._renderData(b,"history",jive.statusinput.dropdown.ddHistory,{fnHandleRender:function(){a._renderHistoryDataHelper()},renderIfDataIsNull:true})},renderTagsData:function(b,c){var a=true;if(b){$j.each(b.tagSearchResult,function(e,d){if(d.name===c){a=false}})}if(this._allowTagCreation||c==null||b!=null&&b.tagSearchResult.length>0){this._renderData(this._normalizeTagsData(b),"tags",jive.statusinput.dropdown.ddTags,{renderIfDataIsNull:true,selectionPrefix:"#",extraTemplateData:{currentTagText:c,allowTagCreation:this._allowTagCreation,shouldCreateTag:a}})}else{this.hide()}},renderSearchData:function(a){this._renderData(a,"search",jive.statusinput.dropdown.ddSearch)},hide:function(){if(this._dd!=null){this._dd.hide()}},show:function(){if(this._dd!=null){this._dd.slideDown("fast")}},isVisible:function(){return this._dd&&this._dd.is(":visible")},selectItem:function(a){if(this._dd==null){return}this._typeAhead.setSelected(this._typeAhead.getSelectable().eq(a))},_renderFriendsDataHelper:function(){var a=this;this._dd.find(".jive-js-history").click(function(b){a.emit("historyLinkClicked");b.stopPropagation()})},_renderHistoryDataHelper:function(){var a=this;this._dd.find(".jive-js-friends").click(function(b){a.emit("friendsLinkClicked");b.stopPropagation()})},_normalizeTagsData:function(c){var d={mentionCollection:""};if(c!=null&&c.tagSearchResult){for(var b=0;b<c.tagSearchResult.length;b++){var a=c.tagSearchResult[b];if(a.found){if(d.mentionCollection==""){d.mentionCollection={};d.mentionCollection.entries=new Array()}d.mentionCollection.entries.push({html:'<a  class="jive-js-status-input-selectable" href="'+_jive_base_url+"/tags#/?tags="+encodeURIComponent(a.name)+'"><span class="jive-icon-med jive-icon-tag"></span>'+jive.util.escapeHTML(a.name)+"</a>",id:a.name})}}}return d},_getCollectionFromData:function(a){return a.mentionCollection},_getCollectionEntriesFromData:function(a){return a.mentionCollection.entries},_renderData:function(c,e,l,o){o=o||{};var h=o.fnHandleRender;var i=o.renderIfDataIsNull||false;var a=o.fnHandleRenderNoData;var k=o.selectionPrefix;var b=o.extraTemplateData||{};if(typeof this._getCollectionFromData(c)=="object"||i){var j=this._data[e]=c;var f=this._getCollectionEntriesFromData(j)||{};var g=this;var d=l.call(this,$j.extend({i18n:g._i18n,entries:f},b));var n=$j(".j-js-autocomplete");if(n.length>0){n.remove()}this._$statusInputContainer.after(d);this._dd=$j(".j-js-autocomplete");var m=this._$statusInputContainer.position();this._dd.css("top",(m.top+this._$statusInputContainer.parent().height())+"px");this._dd.css("left",m.left+"px");this._typeAhead.setSuggestElement(this._dd);if(h!=null){h()}this.show()}else{j=null;if(a!=null){a()}else{this.hide()}}}});jive.MicroBlogging.StatusInputDropDown.selectedItemClassName="jive-js-status-input-selected";jive.MicroBlogging.StatusInputDropDown.selectableItemClassName="jive-js-status-input-selectable";jive.conc.observable(jive.MicroBlogging.StatusInputDropDown.prototype);jive.MicroBlogging.StatusInputDropDown.delay=(function(){var a=0;return function(c,b){clearTimeout(a);a=setTimeout(c,b)}})()};
;
jive.namespace("MicroBlogging");if(!jive.MicroBlogging.StatusInputs){jive.MicroBlogging.StatusInputs=jive.StatusInput.StatusInputs.extend({_docReadyInit:function(a){this._container.find(".jive-js-statusinput").each(function(d,b){var f=$j(b).attr("id"),e=this.emit.bind(this,"characterLenMsg"),c=this.emit.bind(this,"atMentionFinished");this.statusInputs[f]=new jive.MicroBlogging.StatusInput(b,a).addListener("characterLenMsg",e).addListener("atMentionFinished",c)}.bind(this))}});jive.MicroBlogging.StatusInput=jive.StatusInput.StatusInput.extend({init:function(a,b){this._super(a,b);this._focusOnRdy=b.focusOnRdy;this._allowTagCreation=b.allowTagCreation==undefined?true:b.allowTagCreation;this._doNotAnimate=b.doNotAnimate==undefined?false:b.doNotAnimate;var c=this;if(b.defaultValue){c._container.prev(".jive-js-statusinput-default").hide()}else{this._origHeight=0}this._container.bind("click",function(d){c._triggerContainerFocus()});this._container.prev(".jive-js-statusinput-default").keydown(function(d){if(d.keyCode==13||d.keyCode==32){c._triggerContainerFocus()}});this._container.prev().click(function(){c._triggerContainerFocus()})},_setOriginalHeight:function(){if(this._origHeight==0){this._origHeight=$j(this._container).height()}},triggerOnFocusAnimation:function(){if(this._focusOnRdy){this._triggerContainerFocus()}},_onContainerFocus:function(a){this._super(a);this._container.prev(".jive-js-statusinput-default").hide();$j("#j-js-mb-success").hide();if(!this._doNotAnimate){this._setOriginalHeight();this._container.animate({minHeight:Math.max(this._origHeight*2.2,15)},150);this._container.addClass("j-mb-focused")}this._container.attr("contentEditable",true);this.emit("focus")},_initDD:function(a){this._dd=new jive.MicroBlogging.StatusInputDropDown(this._container,this.typeAheadProxy.data("typeAhead"),a)},_initDDHandlers:function(){var a=this;this._dd.addListener("interactionFinished",function(g,f,k){if(g!=null){var j=$j("<div />").html(g.value),i=jive.util.escapeHTML(j.text()),h=j.find("span"),c=$j.extend({"data-jive-statusInputadd":"true",href:g.href,"data-jive-statusInputInteral":"true"},k||{});if(g.id){c.jiveID=g.id}var d=(h.attr("class")||"").split(/\s+/);c["class"]=a._generateIconClass(d);var b=document.createTextNode(" ");var e=a._selection.replaceWordAtRange(i,f||"",{tag:"a",attrs:c});e.parentNode.insertBefore(b,e.nextSibling);a._selection.moveToNodeAndCollapse(b,false,b.nodeValue.length)}a._dd.hide();a._focus(true);a.emit("atMentionFinished",g.id,g.value)});this._dd.addListener("friendsLinkClicked",function(){a._showFriendsList(true)});this._dd.addListener("historyLinkClicked",function(){a._showHistoryList(true)})},_getTokens:function(){return jive.MicroBlogging.StatusInput.Tokens},_getPatterns:function(){return jive.MicroBlogging.StatusInput.Patterns},_showFriendsList:function(a){var b=this;this._actionQueue.push(this._obtainFriendsData(a)).then(function(c){b._dd.renderFriendsData(c);if(a){b._dd.selectItem(0)}})},_showHistoryList:function(a){var b=this;this._actionQueue.push(this._obtainHistoryData(a)).then(function(c){b._dd.renderHistoryData(c);if(a){b._dd.selectItem(0)}})},_showTagsList:function(b){var a=this;this._actionQueue.push(this._obtainTagsData(b)).then(function(c){a._dd.renderTagsData(c,b)})},_obtainFriendsData:function(a){return this._obtainData(jive.rest.url("/emention/friends"))},_obtainHistoryData:function(a){return this._obtainData(jive.rest.url("/emention/history"))},_obtainTagsData:function(a){return this._obtainData(jive.rest.url("/tags/search?query="+encodeURIComponent(a)+"*"))},handleAtMentionButtonClick:function(){this._replacedInitialText=true;var c=this._selection==null?null:this._selection.getRangeStartContainer();if(this._selection==null||$j(c).parents("#"+this._container.attr("id")).length==0||this._container.contents().length==0){this._createNewSelectionUtil()}else{this._selection.alignRangeWithNearestTextNode(c)}if(this._selection==null){this._container.append(document.createTextNode("@"));this._selection=new jive.Selection(this._container[0].lastChild,false,1)}else{var e=this._selection.getRangeStartContainer();var d=" @ ";var b=document.createTextNode(d);var a=Math.min(d.length,2);if(!$j.browser.msie&&e.tagName&&e.tagName.toLowerCase()=="br"){$j(b).insertBefore(e);this._selection.moveToNodeAndCollapse(b,true,a);this._container.focus()}else{this._container.focus();this._selection=new jive.Selection();this._selection.insertNodeAtRange(b,a)}}this._showFriendsList()},swapLinkFor:function(a,c){function b(g,e,f){if(g.nodeType==3){var d=null;var k=g.nodeValue;if(k.indexOf(e)<0){return}if(k.indexOf(e)==0){g.nodeValue=k.substring(e.length);g.parentNode.insertBefore($j(c)[0],g);d=g}else{if(k.indexOf(e)==(k.length-e.length)){g.nodeValue=k.substring(0,k.indexOf(e));g.parentNode.insertBefore($j(c)[0],g);g.parentNode.insertBefore(g,g.previousSibling);d=$j(c)[0]}else{var l=k.substring(0,k.indexOf(e));var m=k.substring(k.indexOf(e)+e.length);g.nodeValue=m;g.parentNode.insertBefore(document.createTextNode(l),g);g.parentNode.insertBefore($j(c)[0],g);d=g}}if(d.nodeType==3&&d.nodeValue.length>1){var j=document.createTextNode(d.nodeValue.substring(1));d.nodeValue=d.nodeValue.substring(0,1);g.parentNode.insertBefore(j,d);g.parentNode.insertBefore(d,j)}jive.Selection.moveCursorAfter(d)}if(g.nodeType==1){if(g.nodeName.toLowerCase()=="a"){return}else{for(var h=0;h<g.childNodes.length;h++){b(g.childNodes[h],e,f)}}}}b(this._container[0],a,c)}});(function(a){var b={mention:"^@([^@ ]+)?",tags:"^#([^# ]+)?",youtubeURL:"https?\\://(?:[\\w\\-]+\\.)?youtube\\.com/watch\\S*[&?]v=([^&\\s]+)\\S*",imageURL:"https?\\://\\S+(\\.png|\\.jpg|\\.gif|\\.jpeg)",linkURL:"https?\\://\\S+",httpNoSsl:"http\\://\\S+"};a.Patterns=b;a.Tokens={mention:{regExp:new RegExp(b.mention,"i"),keypress:function(d,c){}},tags:{regExp:new RegExp(b.tags,"i"),keypress:function(d,c){console.debug("# tag");if(c&&c.length>=2){this._showTagsList(c)}else{this._dd.renderTagsData()}}},youtubeURL:{regExp:new RegExp(b.youtubeURL,"i"),complete:function(c,e){console.debug("youtube URL");var d=new RegExp(b.httpNoSsl,"i");if(c.match(d)){c=c.replace("http","https")}this.emit("youtubeURLMatch",c);this.emit("linkURLMatch",c);this._dd.hide()}},imageURL:{regExp:new RegExp(b.imageURL,"i"),keypress:function(d,f,e){console.debug("image URL");if(!$j(e).parent().attr("data-jive-statusinputImageURL")){this.emit("imageURLMatch",d);var c={href:d};c["data-jive-statusinputadd"]=true;c["data-jive-statusinputImageURL"]=true;this._selection.replaceWordAtRange(d,null,{tag:"a",attrs:c});this._focus(true)}this._dd.hide()}},linkURL:{regExp:new RegExp(b.linkURL,"i"),complete:function(c,d){console.debug("link URL");if(!$j(d).parent().attr("data-jive-statusinputImageURL")){this.emit("linkURLMatch",c)}this._dd.hide()}}}})(jive.MicroBlogging.StatusInput)};
;
jive.namespace("MicroBlogging");jive.MicroBlogging.AttachmentView=jive.AbstractView.extend(function(a,b){this.init=function(c){b.init.call(this,c);this.$imageContainer=null;this.isCreateForm=c.isCreateForm||true;this.resizeHandlerRegistered=false};a.getSoyTemplate=function(c){return jive.statusinput.attachments.renderAttachment(c)};a.getSoyTemplateAttachments=function(c){return jive.statusinput.attachments.renderAttachments(c)};a.renderAttachments=function(d){var c=this.getContent();c.append(this.getSoyTemplateAttachments($j.extend({removable:this.isCreateForm},d)));if(this.isCreateForm){c.slideDown("fast",function(){$j(this).animate({opacity:1},500)})}else{c.css("opacity","1").show()}};a.renderAttachment=function(d){var c=this.getContent().find("li.j-attached-loading");c.before(this.getSoyTemplate($j.extend({removable:this.isCreateForm},d)))};a.registerResizeHandler=function(){if(!this.resizeHandlerRegistered){var c=this;$j(window).resize((function(){var d;return function(){var e=$j(window).width();if(d&&e!==d){c.resize()}d=e}})());this.resizeHandlerRegistered=true}};this.postRender=function(){b.postRender.call(this);var e=this.getContent();this.registerResizeHandler();var d=e.find("ul.j-attached-items"),c=this;e.find(".j-attachment-arrow").unbind();e.find(".j-attachment-arrow").mousedown(function(){try{c.scrollHandler($j(this),d)}catch(f){console.log(f)}}).mouseup(function(){d.stop();return false}).click(function(){return false});this.resize()};this.add=function(e,f){var c=this,g=f.meta,d=this.getContent(),i=d.find("ul.j-attached-items"),h=g[0];$j.extend(h,{originalURL:e});if(i.length>0){this.renderAttachment({attachment:h});c.postRender()}else{this.renderAttachments({attachments:g})}d.find("li:not(.j-attached-loading):last > .j-remove-attachment").click(function(){c.emitP("removeImage",h.id).addCallback(function(j){c.removeAttachment(h.id)}).addErrback(function(k,j){console.log("error removing attachment with id "+h.id)});return false});this.hideLoadingNotification();this.resize();this.scrollHandler(d.find(".j-attachment-arrow-right"),d.find("ul.j-attached-items"))};this.showLoadingNotification=function(){var c=this.getContent().find("li.j-attached-loading");if(c.length==0){this.renderAttachments({entry:{meta:[]}})}c.show()};this.hideLoadingNotification=function(){var c=this.getContent().find("li.j-attached-loading");c.hide();if(c.length&&c.siblings(":not(.j-attached-loading)").size()==0){this.reset()}};this.reset=function(){this.getContent().html("").hide().find(".j-attached-loading").hide();this.metaData=[]};this.removeAttachment=function(d){var c=$j("#"+d);if(c.size()>0&&c.siblings(":not(.j-attached-loading)").size()==0){this.reset()}c.remove();if(this.metaData){this.metaData=this.metaData.filter(function(e){return d!==e.id})}};this.removeAllAttachments=function(){var d=this;var c=this.getContent().find("ul.j-attached-items li:not(.j-attached-loading)").map(function(){return parseInt(this.id)});for(var f=0,e=c.length;f<e;f++){d.emitP("removeImage",c[f]).addCallback(function(g){d.removeAttachment(c[f])}).addErrback(function(h,g){console.log("error removing attachment with id "+c[f])})}};this.hide=function(){this.hideAllMenus();this.getContent().hide()};this.resize=function(){var d=0,c=this.getContent();c.find("li.j-attached-image, li.j-attached-video").each(function(){d+=$j(this).outerWidth()});var e=this.getAttachmentScrollDim();if(e.containerWidth<e.attachmentsWidth){this.showArrows()}else{this.hideArrows()}c.find("ul.j-attached-items").css("width",e.attachmentsWidth+"px")};this.scrollHandler=function(e,d){var f,i=e.outerWidth()*2,h=this.getAttachmentScrollDim(),g=h.attachmentsWidth-h.containerWidth,c=parseInt(d.css("left"));if(isNaN(c)){c=0}if(e.hasClass("j-attachment-arrow-right")&&g>0){f=c+(g+i);d.stop().animate({left:(-g-i)},f*5,"linear")}else{if(g>0){f=c*-1;d.stop().animate({left:0},f*5,"linear")}}};a.getAttachmentScrollDim=function(){var c=this.getContent(),d={containerWidth:c.context.width,attachmentsWidth:0};c.find("li.j-attached-image, li.j-attached-video").each(function(){d.attachmentsWidth+=$j(this).outerWidth()});return d};a.showArrows=function(){var c=this.getContent();c.find(".j-attachment-arrow").css("display","block");c.find("ul.j-attached-items").css("margin-left","20px")};a.hideArrows=function(){var c=this.getContent();c.find(".j-attachment-arrow").hide();c.find("li.j-attached-image, li.j-attached-video").first().css("margin-left","0px")}});jive.MicroBlogging.AttachmentView.views={};
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.shared=="undefined"){jive.shared={}}if(typeof jive.shared.formwaiting=="undefined"){jive.shared.formwaiting={}}jive.shared.formwaiting.formWaitingOverlay=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="jive-js-form-disable jive-form-waiting-disable"><div class="',soy.$$escapeHtml(A.bgCssClass),'"></div></div>');return C?"":B.toString()}
;
jive.namespace("shared");jive.shared.FormWaitingView=$Class.extend({init:function(a,b){this._$container=$j(a);b=b||{};if(b.containerPadding){this._containerPadding=b.containerPadding}else{this._containerPadding=this._$container.css("padding-left")==null?0:Number(this._$container.css("padding-left").replace("px",""))}this._buttonSelector=b.buttonSelector||"input[type=button], input[type=submit]";this._bgCssClass=b.bgCssClass||"jive-form-waiting-disable-bg"},disableForm:function(){var e=new jive.loader.LoaderView({size:"big"});if(this._$container.find(".jive-js-form-disable").length==0){var c={width:this._$container.innerWidth(),height:this._$container.innerHeight(),left:0,top:0};var d=$j(jive.shared.formwaiting.formWaitingOverlay({bgCssClass:this._bgCssClass}));for(var b in c){d.css(b,c[b]+"px")}d.prependTo(this._$container);var a=e.getContent();e.appendTo(d);a.css("left",(c.width/2-a.width()/2)+"px");a.css("top",(c.height/2-a.height()/2)+"px");this._$container.find(this._buttonSelector).prop("disabled",true)}},enableForm:function(){this._$container.find(".jive-js-form-disable").remove();this._$container.find(this._buttonSelector).prop("disabled",false)}});
;
jive.namespace("MicroBlogging");jive.MicroBlogging.CommonView=jive.AbstractView.extend(function(a,b){this.init=function(c){b.init.call(this,c);this.idPostfix=c.idPostfix;this.maxCharCount=c.maxCharCount;this.statusInput=null;this.attachmentsView=null;this.$waitingViewElem=null;this.$formElem=null;this.$imageFormElem=null;this.mobileUI=c.mobileUI||jive.rte.mobileUI;this.atMentionBtn=c.atMentionBtn;this.imagesEnabled=c.imagesEnabled||window._jive_images_enabled||false;this.imgAttachmentBtn=c.imgAttachmentBtn;this.submitBtn=c.submitBtn;this.cancelBtn=c.cancelBtn;if(c.supportAttachments==undefined){this.supportAttachments=true}else{this.supportAttachments=c.supportAttachments}this.doNotAnimate=!!c.doNotAnimate;this.allowTagCreation=c.allowTagCreation};this.postRender=function(){var c=this;if(this.mobileUI&&this.atMentionBtn.length){this.atMentionBtn.remove()}this.createFormElem();this.createWaitingViewElem();this.createWatingView();this.createActionContainer();this.statusInput=new jive.MicroBlogging.StatusInput(this.getContent().find(".jive-js-statusinput"),{maxCharCount:this.maxCharCount,idPostfix:this.idPostfix,focusOnRdy:true,doNotAnimate:this.doNotAnimate,allowTagCreation:this.allowTagCreation,i18n:{}});this.statusInput.addListener("characterLenMsg",c.handleCharacterLenMsg.bind(c)).addListener("atMentionFinished",c.handleAtMentionResult.bind(c));this.atMentionBtn.click(function(d){c.handleAtMentionClick(d,$j(this))});if(this.imgAttachmentBtn&&this.imagesEnabled){this.imgAttachmentBtn.jiveFileButton({name:"image",title:jive.i18n.getMsg("we.form.addimage"),id:"imageFile"}).bind("choose",function(f,g){var d=c._getMetaImageContainer().find("form");d.prepend(g);d.submit()});this.imgAttachmentBtn.keydown(function(d){if(d.keyCode==13){$j(this).find("input[name=image]").click()}})}this._getMetaImageContainer().find("form").submit(function(){var d=$j(this);if(d.find("input[type=file]").val()==""){return false}c.handleImageURLMatch(null);return false});this.submitBtn.click(function(d){c.handleSubmitClick(d)});if(this.cancelBtn){this.cancelBtn.click(function(d){c.attachmentsView.removeAllAttachments();c.attachmentsView.reset();c.resetStatusInput();c.emit("cancel")})}this.statusInput.addListener("linkURLMatch",function(d){c.handleLinkURLMatch(d)}).addListener("imageURLMatch",function(d){if(!c.supportAttachments){return}c.handleImageURLMatch(d)}).addListener("youtubeURLMatch",function(d){if(!c.supportAttachments){return}c.handleYoutubeURLMatch(d)}).addListener("focus",function(d){c.handleFocus(d)});this.attachmentsView=new jive.MicroBlogging.AttachmentView(this._getAttachmentsViewOptions());this.attachmentsView.addListener("removeImage",function(e,d){if(!c.supportAttachments){return}c.emitP("removeImage",e).addCallback(function(f){d.emitSuccess(f)}).addErrback(function(g,f){d.emitError(g,f)})})};this.getStatusInput=function(){return this.statusInput};this.focus=function(){this.statusInput._focus()};this.createWaitingViewElem=function(){throw"createWaitingViewElem method is abstract. Need to implmenet in subclass"};this.createWatingView=function(){this.waitingView=new jive.shared.FormWaitingView(this.$waitingViewElem)};this.enableForm=function(){this.waitingView.enableForm()};this.disableForm=function(){this.waitingView.disableForm()};this.createFormElem=function(){throw"createFormElem method is abstract. Need to implement in subclass"};this.createActionContainer=function(){this.$actionContainer=this.$formElem.find("[id^=status-input-actions-]")};this.handleAtMentionClick=function(d,c){this.statusInput.handleAtMentionButtonClick();this.emit("atMentionClick");d.stopPropagation()};this.handleAtMentionResult=function(){return null};this.handleCharacterLenMsg=function(d){var f=arguments[1]||{},c=this.$formElem.eq(0).find(".j-js-status-input-characters-remaining"),e=({ok:{msg:""},warning:{msg:jive.wall.charLenErrors({error:false,numChars:f.charLeft}),className:"warning"},error:{msg:jive.wall.charLenErrors({error:true,numChars:f.charOver}),className:"danger"}})[d];c.html(e.msg).removeClass("warning danger");if(d!=="ok"){c.addClass(e.className)}};this.handleLinkURLMatch=function(d){var c=this;this.emitP("linkURLMatch",d).addCallback(function(f,e){c.renderResolvedLink(e,f)}).addErrback(function(f,e){c.renderError(f,e)})};this.renderResolvedLink=function(d,c){this.statusInput.swapLinkFor(d,c)};a.getDraftData=function(){return null};this._getAttachmentsViewOptions=function(){return{selector:this.selector+" .jive-js-attachment-container"}};this._getMetaImageContainer=function(){return this.getContent().find("div.j-status-input-attach-action-container div.j-meta-image-container")};this.handleImageURLMatch=function(d){this.attachmentsView.showLoadingNotification();this.setDataForURLImage(d);var c=this;this.emitP("imageURLMatch",d,this.$imageFormElem,this.getDraftData()).addCallback(function(f,e){c.renderImageAttachment(e,f)}).addErrback(function(f,e){c.attachmentsView.hideLoadingNotification();c.renderError(f,e)})};this.handleYoutubeURLMatch=function(d){this.attachmentsView.showLoadingNotification();var c=this;this.emitP("youtubeURLMatch",d,this.getDraftData()).addCallback(function(f,e){c.renderVideoAttachment(e,f)}).addErrback(function(f,e){c.renderError(f,e)})};this.renderImageAttachment=function(c,d){this.attachmentsView.add(c,d)};this.renderVideoAttachment=function(c,d){this.attachmentsView.add(c,d)};a.setDataForURLImage=function(c){this.$imageFormElem.find("input[name=imageURL]").val(c)};this.handleFocus=function(d){var c=this;if(this.$actionContainer.is(":hidden")){this._initialStatusInputHeight=this.statusInput.getContainer().height();if(!this.imagesEnabled){this.imgAttachmentBtn.hide()}if(($j.browser.msie&&$j.browser.version<7)){this.$actionContainer.show();this.$actionContainer.addClass("j-act-comment-actions clearfix")}else{this.$actionContainer.addClass("j-act-comment-actions clearfix");this.$actionContainer.css({opacity:0,height:1}).show().animate({height:"24px",opacity:1},200,"linear",function(){$j(this).css("height","auto")})}this.$formElem.closest("article").find("div.j-act-reply-form").addClass("r-active");this.$formElem.closest("article").find("div.eae-reply-avatar").fadeIn("fast")}if(c.getContent().find("#j-js-mb-success").length){c.getContent().find("#j-js-mb-success").fadeOut("fast",function(){$j(this).remove();c.getContent().find(".j-mb-last-update").show()})}this.emit("focus")};this.handleSubmitClick=function(d){if(this.statusInput.getCharCount()!=0||this.attachmentsView.getContent().find("li:not(.j-attached-loading)").length){if(this.maxCharCount&&this.statusInput.getCharCount()>this.maxCharCount){this.renderError(jive.wall.submitErrors({key:"over"}));this.emit("submitError",jive.wall.submitErrors({key:"over"}))}else{$j(".jive-js-error-general",this.$formElem).hide();this.waitingView.disableForm();var c=this;this.emitP("submit",this.getDataFromDom()).addCallback(function(f,e){c.renderResponse(f)}).addErrback(function(f,e){c.renderError(f,e)})}}else{this.renderError(jive.wall.submitErrors({key:"none"}));this.emit("submitError",jive.wall.submitErrors({key:"none"}))}};this.getDataFromDom=function(){throw"getDataFromDom method is abstract. Need to implmenet in subclass"};this.normalizeData=function(){return this.statusInput.getSubmitVals()};this.renderError=function(d,c){this.waitingView.enableForm();var e=$j(".jive-js-error-general",this.$formElem);e.text(d);e.slideDown(100);e.attr("aria-invalid","true");setTimeout(function(){$j(".jive-js-error-general",this.$formElem).fadeOut("fast")},3500)};this.renderResponse=function(c){this.waitingView.enableForm();this.attachmentsView.reset()};this.renderResponseCommon=function(e){this.getContent().find("#j-js-mb-success").fadeOut("fast");var d=this.getContent().find(".j-mb-last-update");if(d.length){d.hide();if(e.wallentry.status!="AWAITING_MODERATION"){var f=$j(e.wallentry.message).text();f=$j("<div/>").text(f).html();d.html(jive.statusinput.containers.microbloggingStatusInputLastUpdate({latestStatusUpdate:{text:f,url:e.wallentry.URL,commentcount:0}}))}}var c=$j(jive.statusinput.containers.microbloggingStatusInputSuccess({entry:e.wallentry}));c.hide();c.find(".j-js-mb-success-dismiss").click(function(){c.fadeOut("fast",function(){$j(".j-mb-hint").show();d.show()})});this.getContent().append(c);c.animate({height:"toggle"},{duration:600},function(){if(e.wallentry.meta&&e.wallentry.meta.length>0){c.find(".jive-js-attachment-container").slideDown("fast",function(){$j(this).animate({opacity:1},500)})}});this.resetStatusInput()};this.resetStatusInput=function(){this.statusInput.resetText();this.$actionContainer.hide();this.$formElem.closest("article").find("div.eae-reply-avatar").hide();this.$formElem.closest("article").find("div.j-act-reply-form").removeClass("r-active");var c=this.statusInput.getContainer();c.css("minHeight","24px");c.prev(".jive-js-statusinput-default").show();c.removeClass("j-mb-focused");c.removeAttr("contenteditable")}});
;
jive.namespace("MicroBlogging");jive.MicroBlogging.MicroBloggingView=jive.MicroBlogging.CommonView.extend(function(a,b){this.init=function(c){this.options=c;b.init.call(this,c)};a.getSoyTemplate=function(c){return jive.statusinput.containers.microbloggingStatusInput(c)};this.createWaitingViewElem=function(){this.$waitingViewElem=this.getContent()};this.createFormElem=function(){var c=this.getContent();this.$formElem=c.find("form");this.$imageFormElem=c.find("div.j-meta-image-container form")};this.renderResponse=function(c){b.renderResponse.call(this,c);this.renderResponseCommon(c)};this.getDataFromDom=function(){return{wallentry:{message:this.normalizeData()}}};this.handleAtMentionResult=function(h,e){var f=this;if(h&&h.split("-").length==2){var d=h.split("-")[0],g=h.split("-")[1];if(d!=3){var c=new jive.rte.EntitlementService({objectID:0,objectType:0,entitlement:"VIEW"});if(c&&d){c.checkEntitlement(d,g).addCallback(function(i){if(!i){var j="";if(d==700){j=jive.statusinput.mention_warnings.jsI18nHelper({key:"tinymce.jivemention.secret_group"})}else{j=jive.statusinput.mention_warnings.jsI18nHelper({key:"tinymce.jivemention.restricted_content"})}$j("<p>"+e+" "+j+"</p>").message({style:"warn"})}})}}}}});
;
jive.namespace("MicroBlogging");jive.MicroBlogging.MBCreateModalController=jive.MicroBlogging.CommonController.extend(function(a,b){this.init=function(c){if(!c){c={}}c.trackingID="cmenu";this.options=c;b.init.call(this,c)};a.initMBView=function(){var c=$j("#j-js-mb-modal-editor");this.microbloggingView=new jive.MicroBlogging.MicroBloggingView({selector:"#j-js-mb-modal-editor",idPostfix:"mbASHeader",atMentionBtn:c.find("a.jive-js-mention-button"),imgAttachmentBtn:c.find("a.jive-js-imgattach-button"),submitBtn:c.find("a.j-status-input-submit"),maxCharCount:420})};a.submitSuccessCallback=function(c,d){b.submitSuccessCallback.call(this,c,d);$j("div.jive-modal-quickcreate").trigger("close");$j(jive.statusinput.containers.microbloggingStatusInputModalSuccess({wallentry:c.wallentry})).message({style:"success"})}});
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.soy=="undefined"){jive.soy={}}if(typeof jive.soy.direct_messaging=="undefined"){jive.soy.direct_messaging={}}jive.soy.direct_messaging.modal=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id="jive-modal-direct-messaging" class="jive-modal j-pop">');jive.shared.displayutil.a11yBoundary({type:"dialog"},B);B.append('<header class="j-modal-header"><h2>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.direct_messaging.sendADirectMessage"),[])),'</h2></header><label class="j-508-label" id="close-modal-508">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close.modal"),[])),'</label><a href="#" class="j-modal-close-top close" aria-labelledby="close-modal-508" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.close.modal"),[])),'">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close"),[])),'  <span class="j-close-icon j-ui-elem" role="img"></span></a><div class="jive-modal-content j-pop-main clearfix"><div id="share-error" class="jive-error-box" style="display:none" aria-live="polite" aria-atomic="true"></div><form class="j-form"><p class="ie-zindex-fix"><label for="recipients">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.direct_messaging.label.to"),[])),'</label><input type="text" name="share-users" id="recipients" class="j-user-autocomplete j-autocomplete-input jive-chooser-input jive-form-element-text j-ui-elem" autocomplete="off" role="combobox"/></p><p class="j-direct-message-label-area"><label for="jive-direct-message-body">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.direct_messaging.label.message"),[])),'</label></p><div id="statusInputs-direct-message-text" class="j-mb-entry"><span class="j-508-label" id="jive-508-label-message-direct-message-text">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.direct_messaging.input.aria.label"),[])),'</span><div class="j-rc4 jive-statusinput-default font-color-meta  jive-statusinput jive-form-element-text jive-js-statusinput-default"></div><div id="message-direct-message-text" class="j-rc4 jive-js-statusinput jive-statusinput jive-form-element-textarea" style="position:relative; min-height:120px;max-height:250px;overflow:auto"></div></div>');jive.statusinput.containers.renderAttachmentsContainer({removable:true},B);B.append('<div class="j-status-input-actions j-pop-row j-last j-act-comment-actions clearfix"><input class="js-direct-messaging-form-submitBtn j-btn-global j-btn-callout" type="submit" name="share-content-submit" value="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.send.button"),[])),'"/><button type="button" class="close j-btn-global">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.cancel"),[])),'</button><a href="javascript:void(0);" class="j-btn-global j-wall-meta-image jive-js-imgattach-button" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("we.form.addimage"),[])),'"><span class="jive-icon-med jive-icon-photo"></span></a><a href="javascript:void(0);" class="jive-js-mention-button j-wall-meta-reference j-btn-global" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("we.form.addlink"),[])),'"><label id="j-direct-messaging-mention-label" class="j-508-label">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("we.form.addlink"),[])),'</label><span class="jive-icon-med jive-icon-mention" aria-labelledby="j-direct-messaging-mention-label"></span></a></div></form>');jive.statusinput.containers.statusInputActionContainer({canCreateImage:true,canCreateVideo:false,isPrivateDM:true},B);B.append("</div>");jive.shared.displayutil.a11yBoundary({type:"dialog",isEnd:true},B);B.append("</div>");return C?"":B.toString()};jive.soy.direct_messaging.successMessage=function(A,C){var B=C||new soy.StringBuilder();B.append("<p>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.direct_messaging.sendSuccess"),[])),"</p>");return C?"":B.toString()};jive.soy.direct_messaging.notRelated=function(A,C){var B=C||new soy.StringBuilder();B.append('<p class="j-warn"><span class="jive-icon-sml jive-icon-redalert"></span>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.notrelated"),[])),"</p>");return C?"":B.toString()}
;
jive.namespace("DirectMessaging");jive.DirectMessaging.MicroBloggingController=jive.MicroBlogging.CommonController.extend(function(a){this.getMessageObject=function(){var b={message:this.microbloggingView.getMessage()};if(this.draftWallEntry&&this.draftWallEntry.wallentry){b=$j.extend(true,this.draftWallEntry.wallentry,b)}return b};a.initMBView=function(){var b=$j("#jive-modal-direct-messaging");this.microbloggingView=new jive.DirectMessaging.MicroBloggingView({selector:"#statusInputs-direct-message-text",idPostfix:"mbASHeader",atMentionBtn:b.find("a.jive-js-mention-button"),imgAttachmentBtn:b.find("a.jive-js-imgattach-button"),submitBtn:b.find("a.js-direct-messaging-form-submitBtn")})};a.createDraft=function(d,c){var b=this;this.microbloggingService.createDraft({objectType:14,objectID:1},{wallentry:{privateDM:true}}).addCallback(function(e){b.draftWallEntry=e;d()}).addErrback(function(f,e){c.emitError(f,e)})}});
;
jive.namespace("DirectMessaging");jive.DirectMessaging.create=function(c){var d=new jive.Browse.User.ItemSource(),b=new jive.DirectMessaging.MessageSource(d,c),a=new jive.DirectMessaging.CreateMessageView();return new jive.DirectMessaging.Main(b,a)};jive.DirectMessaging.sendMessageToUserIds=function(c){var b=new jive.conc.Promise(),a=jive.DirectMessaging.create();b.addCallback($j.proxy(a.showModal,a));a.addRecipientsById(c,b)};jive.DirectMessaging.isContentTypeEqualTo=function(a){return a+""==="109016030"};
;
jive.namespace("DirectMessaging");jive.DirectMessaging.MessageSource=jive.RestService.extend(function(a,b){jive.conc.observable(this);a.resourceType="wall";a.pluralizedResourceType=a.resourceType;this.init=function(d,c){this.urlParams="/14/1";if(c&&c.trackingID){this.urlParams+="?sr="+c.trackingID}this.userSource=d;b.init.call(this,c)};this.getUsersByIds=function(){var c=this,f=new jive.conc.Promise(),e=Array.prototype.slice.call(arguments),g=[];function d(){if(e.length>0){c.userSource.get(e.shift()).addCallback(function(h){g.push(h);d()})}else{f.emitSuccess(g)}}d();return f};this.sendMessage=function(d){var c=new jive.conc.Promise();$j.ajax({data:JSON.stringify({wallentry:$j.extend({},d,{privateDM:true})}),type:"POST",url:this.RESOURCE_ENDPOINT+this.urlParams,dataType:"json",contentType:"application/json; charset=utf-8",success:function(e,g,f){c.emitSuccess(e)},error:function(g,i,h){try{var f=$j.parseJSON(g.responseText);if(f&&f.error&&f.error.message){c.emitError(f.error.message,f.error.code)}}catch(e){c.emitError(null,g&&g.status)}}});return c}});
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.common=="undefined"){jive.eae.common={}}jive.eae.common.rteTextArea=function(A,C){var B=C||new soy.StringBuilder();B.append('<textarea id="',soy.$$escapeHtmlAttribute(jive.soy.func.randomString()),'" class=\'wysiwygtext\' name="body" rows="15" cols="30" ></textarea>');return C?"":B.toString()};jive.eae.common.rtePanel=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="j-panel-rte-wrap clearfix"><div class="j-panel-rte-loading j-act-reply" style="display:none"><div class="j-rte-placeholder"></div></div><div class="j-panel-rte j-act-reply" style="display:none"><div class="j-reply-to j-js-reply-to"></div><div class="j-act-reply-form">',(A.user.anonymous)?'<div class="jive-reply-post-anonymous j-form"><div><label for="replyGuestName-id">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.name"),[]))+'<span class="font-color-meta-light"> '+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("blogs.vwpst.required.label"),[]))+'</span><input class="replyGuestName" type="text" name="replyGuestName" id="replyGuestName-id"></label></div><div><label for="replyGuestName-id">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.email_address"),[]))+'<span class="font-color-meta-light"> '+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("blogs.vwpst.rqdNotPblshd.label"),[]))+'</span><input class="replyGuestEmail" type="text" name="replyGuestEmail" id="replyGuestEmail-id"></label></div>'+((!A.hideGuestURLField)?'<div><label for="replyGuestUrl-id">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("blogs.vwpst.wsite_address.label"),[]))+'<input class="replyGuestUrl" type="text" name="replyGuestUrl" id="replyGuestUrl-id"></label></div>':"")+"</div>":"",'<p class="jive-error-text jive-comment-error" style="display:none"></p><form method="post" action="javascript:void(0);" name="jive-comment-post-form" class="j-panel-rte-view sammy-app-1288289329294-553-">');jive.eae.common.rteTextArea(null,B);B.append((A.externallyVisible=="true")?'<div class="j-rte-message"><span class="jive-icon-med jive-icon-partner"></span><span class="font-color-meta-light j-browse-external-access"><em>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("partner.content.reply.warn.visible"),[]))+"</em></span></div>":"",'<div class="jive-form-buttons"><input type="submit" name="post" class="j-btn-global j-btn-callout" value="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("we.comment.singular"),[])),"\" /><a href='#' class='j-panel-hide-rte-link j-btn-global'>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.cancel"),[])),"</a></div></form></div></div></div>");return C?"":B.toString()};jive.eae.common.replyingToText=function(B,D){var C=D||new soy.StringBuilder();if(B.type=="user"){var A=new soy.StringBuilder();jive.shared.displayutil.userDisplayNameLink(B.object,A);jive.shared.soy.i18nHelper({i18nKey:soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("cmnt.reply_to.gtitle"),[])),arg0:A.toString(),noAutoEscape:true},C)}else{if(B.type=="content"){jive.shared.soy.i18nHelper({i18nKey:"eae.inbox.comment.on.originalX",arg0:(B.object.contentTypeName)?soy.$$escapeHtml(String(B.object.contentTypeName).toLowerCase()):"",noAutoEscape:true},C)}}C.append(' <img src="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/images/inline-reply-arrow.png"))),'"/>',(B.externallyVisible=="true")?"":"");return D?"":C.toString()};jive.eae.common.replyCountText=function(A,C){var B=C||new soy.StringBuilder();B.append('<strong class="j-act-replycount">',(A.activityContainer.jiveObject.typeThread||A.activityContainer.jiveObject.typeShare||A.activityContainer.jiveObject.typeDirectMessage)?'<a href="'+jive.soy.func.normalizeUrl(window._jive_base_url,A.activityContainer.jiveObject.jiveObjectURL)+'" class="font-color-meta-light">'+soy.$$escapeHtml(A.activityContainer.replyCount)+" "+((A.activityContainer.replyCount==1)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.reply.lc"),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.replies.lc"),[])))+"</a>":(A.activityContainer.activityList[0]&&A.activityContainer.activityList[0].content.commentContentResource&&A.activityContainer.activityList[0].content.commentContentResource.objectType==129)?'<a href="'+jive.soy.func.normalizeUrl(window._jive_base_url,A.activityContainer.jiveObject.jiveObjectURL)+'#comments" class="font-color-meta-light">'+soy.$$escapeHtml(A.activityContainer.replyCount)+" "+((A.activityContainer.replyCount==1)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.authorcomment.lc"),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.authorcomments.lc"),[])))+"</a>":'<a href="'+jive.soy.func.normalizeUrl(window._jive_base_url,A.activityContainer.jiveObject.jiveObjectURL)+'#comments" class="font-color-meta-light">'+soy.$$escapeHtml(A.activityContainer.replyCount)+" "+((A.activityContainer.replyCount==1)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.comment.lc"),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.comments.lc"),[])))+"</a>");if(A.showCurrentCount){jive.eae.common.currentCountText(A,B)}B.append("</strong>");return C?"":B.toString()};jive.eae.common.currentCountText=function(A,C){var B=C||new soy.StringBuilder();B.append((A.activityContainer.numCurrent)?'<span class="j-new-count font-color-new">'+((A.activityContainer.numCurrentSubActivities)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.new"),[A.activityContainer.numCurrentSubActivities])):(A.streamType!="communications")?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.new"),[])):"")+"</span>":(A.forceCount)?'<span class="j-new-count font-color-new">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.new"),[1]))+"</span>":"");return C?"":B.toString()};jive.eae.common.collapsedExcerptText=function(A,C){var B=C||new soy.StringBuilder();B.append((A.deletedType=="reply")?"<em>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("error.deleted.reply.description"),[]))+"</em>":(A.deletedType=="comment")?"<em>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("error.deleted.comment.description"),[]))+"</em>":(A.deletedType=="mention")?"<em>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("error.deleted.mention.description"),[]))+"</em>":(A.text)?((A.moderated)?'<div class="jive-warn-box" aria-live="polite" aria-atomic="true"><span class="jive-icon-med jive-icon-warn"></span>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("blogs.posts.waitingMod.text"),[]))+"</div>":"")+A.text+((A.hasMoreText)?"&hellip;":""):"");return C?"":B.toString()};jive.eae.common.subactivity=function(A,D){var B=D||new soy.StringBuilder();if(A.activityContainer.jiveObject.activityContentExcerptTemplate){jive.shared.soy.render({templateName:A.activityContainer.jiveObject.activityContentExcerptTemplate,data:(function(){var G={};var F=[["activityContainer",A.activityContainer],["activity",A.activity],["streamType",A.streamType],["user",A.user],["canCreateMbImage",A.canCreateMbImage],["canCreateMbVideo",A.canCreateMbVideo],["isHidden",A.isHidden],["addedInline",A.addedInline],["hideStub",A.hideStub],["forceCurrent",A.forceCurrent]];for(var E=0;E<F.length;E+=1){G[F[E][0]]=F[E][1]}return G})(),failGracefully:true},B)}else{B.append('<div id="node-collapsed-',soy.$$escapeHtmlAttribute(A.activity.content.domIDPostfix),'" class="j-act-node',(A.addedInline)?" j-js-addedInline":"",(A.activityContainer.canReply)?" j-act-rte-replyable":"",(A.streamType=="communications"&&(A.activity.current||A.forceCurrent))?" j-current":"",(A.streamType=="communications"&&(A.activity.content.typeMention||A.activity.containsMention))?" j-act-contains-mention":"",'" data-extVisible="',soy.$$escapeHtmlAttribute(A.activity.visibleToExtCollaborator),'" data-objectID="',(A.activity.content.typeMention)?soy.$$escapeHtmlAttribute(A.activity.content.context.id):soy.$$escapeHtmlAttribute(A.activity.targetObjectID),'" data-objectType="',(A.activity.content.typeMention)?soy.$$escapeHtmlAttribute(A.activity.content.context.objectType):soy.$$escapeHtmlAttribute(A.activity.targetObjectType),'" data-current="',(A.activity.current||A.forceCurrent)?"true":"",'" style="',(A.isHidden)?"display:none;":"",'"><div id="excerpt_',soy.$$escapeHtmlAttribute(A.activity.content.domIDPostfix),'" class="',(A.activity.content.deleted)?"j-mod font-color-meta-light":"reply j-act-comment",'">');if(A.activity.content.deleted){jive.eae.common.collapsedExcerptText({text:"",hasMoreText:false,deletedType:A.activity.content.deletedMention?"mention":"comment",moderated:false},B);B.append(" ",(A.activity.creationTime)?soy.$$escapeHtml(A.activity.creationTime):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.less_than_a_minute_ago"),[])))}else{B.append((A.streamType=="communications"&&(A.activity.content.typeMention||A.activity.containsMention))?'<div class="j-act-mentioned font-color-okay"><span class="jive-icon-med jive-icon-mention-label"></span>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.mention.you.were.incontext"),[]))+"</div>":"",'<div class="j-act-avatar">');jive.shared.displayutil.avatar(soy.$$augmentData(A.activity.activityUser,{size:32,currentUserPartner:A.user.partner}),B);B.append('</div><div class="j-excerpt',(!A.activity.content.summaryIsExcerpt)?" j-non-excerpt":"",' clearfix" ',(A.hideStub)?'style="display:none;"':"",">");if(!A.hideStub){var C=new soy.StringBuilder();jive.eae.common.activityContentText({activity:A.activity,noAutoescape:true},C);jive.eae.common.activityContentCommon({contentTxt:C.toString(),hasMoreText:A.activity.hasMoreText},B)}B.append('</div><div class="j-act-sub-preview" ',(!A.hideStub)?'style="display:none;"':"",">");if(A.activity.content.deleted){B.append('<div class="j-excerpt-full-html-content">');if(A.hideStub){jive.eae.common.activityContentText({activity:A.activity,noAutoescape:true},B)}B.append('</div><div class="j-author-act font-color-meta-light">',(A.activity.creationTime)?soy.$$escapeHtml(A.activity.creationTime):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.less_than_a_minute_ago"),[])),"</div>")}else{B.append('<div class="j-author-act font-color-meta-light">');jive.eae.common.activityAuthorNoVerb({activityUser:A.activity.activityUser,object:A.activity.content},B);B.append(" ",(A.activity.type=="mentioned"&&A.activity.content.context.jiveObjectURL)?'<a href="'+jive.soy.func.normalizeUrl(window._jive_base_url,A.activity.content.context.jiveObjectURL)+'" class="font-color-meta-light">':(A.activity.content.jiveObjectURL)?'<a href="'+jive.soy.func.normalizeUrl(window._jive_base_url,A.activity.content.jiveObjectURL)+'" class="font-color-meta-light">':"",(A.activity.creationTime)?soy.$$escapeHtml(A.activity.creationTime):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.less_than_a_minute_ago"),[])),(A.activity.type=="mentioned"&&A.activity.content.context.jiveObjectURL||A.activity.content.jiveObjectURL)?"</a>":"",'</div><div class="j-excerpt-full-html-content">');if(A.hideStub){jive.eae.common.activityContentText({activity:A.activity,noAutoescape:true},B)}B.append("</div>");jive.eae.common.renderStreamAttachments({idPrefix:"expanded",object:A.activity.content,domIDPostfix:A.activity.domIDPostfix},B);B.append('<div class="j-meta-actions font-color-meta">');jive.eae.common.activityNavActions({object:A.activity.parentActivity?A.activityContainer.jiveObject:A.activity.content,activityContainer:A.activityContainer,amAnAuthor:A.user.id==A.activity.activityUser.id,objectType:A.activity.content.typeMention?A.activity.content.context.objectType:A.activity.content.objectType,objectId:A.activity.content.typeMention?A.activity.content.context.id:A.activity.content.id,liked:A.activity.liked,likeCount:A.activity.likeCount,likable:A.activity.likable,user:A.user,location:"subActivity",streamType:A.streamType},B);B.append("</div>")}B.append("</div>")}B.append("</div></div>")}return D?"":B.toString()};jive.eae.common.activityAuthor=function(A,C){var B=C||new soy.StringBuilder();if(!A.activityUser.anonymous){if(A.displayAuthorLink){jive.shared.displayutil.userDisplayNameLink(soy.$$augmentData(A.activityUser,{renderInvisible:A.object.typeExternalActivity}),B)}else{if(A.deleted){}else{B.append(soy.$$escapeHtml(A.activityUser.displayName))}}}else{jive.shared.displayutil.renderGuestDisplayName({message:A.activityUser},B)}if(!A.object.typeShare){B.append(" ");jive.eae.activitystream.include.activityVerbPhrase(A,B)}else{B.append(" ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.type.shared"),[]))," ")}return C?"":B.toString()};jive.eae.common.activityAuthorNoVerb=function(A,C){var B=C||new soy.StringBuilder();if(!A.activityUser.anonymous){jive.shared.displayutil.userDisplayNameLink(A.activityUser,B)}else{jive.shared.displayutil.renderGuestDisplayName({message:A.activityUser},B)}B.append(" ");if(A.object.parentAuthor&&!A.object.typeWallEntryComment){jive.eae.common.displayParentAuthor({parentAuthor:A.object.parentAuthor},B)}else{if(A.object.context&&A.object.context.parentAuthor&&!A.object.context.typeWallEntryComment){jive.eae.common.displayParentAuthor({parentAuthor:A.object.context.parentAuthor},B)}}return C?"":B.toString()};jive.eae.common.displayParentAuthor=function(B,E){var C=E||new soy.StringBuilder();var A=new soy.StringBuilder();var D=new soy.StringBuilder();jive.shared.displayutil.userDisplayNameLink(B.parentAuthor,D);jive.shared.soy.escapeHelper({stringToEscape:D.toString()},A);jive.shared.soy.i18nHelper({i18nKey:"activity.type.toX",arg0:A.toString(),noAutoEscape:true},C);return E?"":C.toString()};jive.eae.common.activityNavActions=function(A,E){var B=E||new soy.StringBuilder();if(A.location!="subActivity"){if(A.activityContainer.container.type&&A.activityContainer.container.type!=-2){B.append(' <span class="j-bullet">&#8226;</span> ');if(A.activityContainer.container.type==2020){var D=new soy.StringBuilder();jive.shared.displayutil.userDisplayNameLink(A.activityContainer.originalAuthor,D);jive.shared.soy.i18nHelper({i18nKey:"main.in_user_container.label",arg0:D.toString(),arg1:String(A.activityContainer.jiveObject.contentTypeFeatureName).toLowerCase(),noAutoEscape:true},B)}else{var C=new soy.StringBuilder();jive.shared.displayutil.containerDisplayNameLink({container:A.activityContainer.container},C);jive.shared.soy.i18nHelper({i18nKey:"eae.container.in",arg0:C.toString(),noAutoEscape:true},B)}}}B.append((A.object.canRepost)?' <span class="j-bullet">&#8226;</span> <span class="j-repost-item" id="j-repost-item-'+soy.$$escapeHtmlAttribute(jive.soy.func.randomString())+"-"+soy.$$escapeHtmlAttribute(A.object.id)+'"><a href="#" class="j-repost" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.repost.link.title"),[]))+'">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.repost"),[]))+"</a></span>":"");if(A.user&&!A.user.anonymous&&A.activityContainer.sharable&&!A.object.typeExternalActivity&&(A.location=="Title"||A.location=="parentPreview")){B.append(' <span class="j-bullet">&#8226;</span> ');jive.soy.share.control({objectId:soy.$$escapeHtml(A.activityContainer.jiveObject.typeThread?A.activityContainer.jiveObject.threadID:A.objectId),objectType:soy.$$escapeHtml(A.activityContainer.jiveObject.typeThread?1:A.objectType),type:"text"},B)}if(A.user&&!A.user.anonymous&&A.object.typeExternalActivity&&A.activityContainer.sharable){B.append(' <span class="j-bullet">&#8226;</span> ');jive.soy.share.control({objectId:A.objectId,objectType:A.objectType,type:"text"},B)}B.append((A.activityContainer.canReply&&!A.object.deleted&&!A.activityContainer.jiveObject.typeWallEntry&&!A.activityContainer.jiveObject.typeDirectMessage&&!A.activityContainer.jiveObject.typeShare&&!A.object.bookmarkedContent)?' <span class="j-bullet">&#8226;</span> <a class="j-reply-rte" href="javascript:void(0);">'+((A.object.typeDocument&&!(A.activityContainer.activityList[0]&&A.activityContainer.activityList[0].content.commentContentResource&&A.activityContainer.activityList[0].content.commentContentResource.objectType==129)||A.object.typeBlogPost||A.object.typeExternalActivity||A.object.typeExternalURL||A.object.typePoll)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.comment"),[])):(A.object.typeDocument&&(A.activityContainer.activityList[0]&&A.activityContainer.activityList[0].content.commentContentResource&&A.activityContainer.activityList[0].content.commentContentResource.objectType==129))?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.addauthorcomment"),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.reply"),[])))+"</a>":"",(A.object.typeWallEntry&&A.activityContainer.canReply&&!A.object.deleted&&A.streamType!="communications"&&A.location=="parentPreview")?' <span class="j-bullet">&#8226;</span> <a id="showMicroRTE_'+soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.domIDPostfix)+'" class="j-reply-micro" href="#">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.comment"),[]))+"</a>":"");if(A.likable&&!A.object.deleted&&!A.activityContainer.jiveObject.typeDirectMessage){B.append(' <span class="j-bullet">&#8226;</span> <span class="j-js-liking-control">');jive.eae.acclaim.likeControl({canLike:A.user&&!A.user.anonymous&&(!A.object.typeWallEntry||A.object.canRate)&&!A.amAnAuthor,liked:A.liked,likeCount:A.likeCount,objectId:A.objectId,objectType:A.objectType,showIcon:false,type:"mini"},B);B.append("</span>")}B.append(((A.location=="Title"||A.location=="parentPreview")&&A.streamType!="all"&&A.streamType!="profile"&&A.streamType!="context"&&A.streamType!="communications"&&(!A.filterType||A.filterType.indexOf("all")!=-1))?' <span class="j-bullet">&#8226;</span> <a href="#" class="j-act-hidemenu" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.hide.link.title"),[]))+'">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.hide"),[]))+"</a>":"");return E?"":B.toString()};jive.eae.common.repostModal=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="jive-modal j-repost-modal" id="jive-js-repost-modal"><header><h2>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.mb.repost.default.text"),[])),'</h2></header><label class="j-508-label" id="close-modal-508">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close.modal"),[])),'</label><a href="#" class="j-modal-close-top close" aria-labelledby="close-modal-508" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.close.modal"),[])),'">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close"),[])),'<span class="j-close-icon j-ui-elem" role="img"></span></a><div class="j-act-mb"><div class="jive-modal-content clearfix">',(A.mbCreationModerated)?'<div class="jive-content-moderation-box"><span class="jive-icon-med jive-icon-warn"></span>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("mod.content.create"),[]))+"</div>":"");jive.eae.common.entryRepost(A,B);B.append("<h4>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("we.repost.comment"),[])),"</h4>");jive.statusinput.containers.repostStatusInput({statusID:"eae-editor-repost-"+A.object.domIDPostfix,jiveObject:A.object,canCreateMbImage:A.canCreateMbImage,canCreateMbVideo:A.canCreateMbVideo,canAtMention:A.canAtMention},B);B.append("</div></div></div>");return C?"":B.toString()};jive.eae.common.repostModalSuccess=function(A,C){var B=C||new soy.StringBuilder();B.append("<p>",(A.wallentry.status!="AWAITING_MODERATION")?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("we.repost.success"),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("we.form.posted.moderation"),[])),"</p>");return C?"":B.toString()};jive.eae.common.entryRepost=function(A,D){var C=D||new soy.StringBuilder();C.append('<div class="j-wall-repost-content"><div class="j-wall-repost-header">');var B=new soy.StringBuilder();if(!A.author.anonymous){jive.shared.displayutil.userDisplayNameLink(A.author,B)}else{jive.shared.displayutil.renderGuestDisplayName({message:A.object},B)}jive.shared.soy.i18nHelper({i18nKey:"eae.mb.repost.originally_posted_by",arg0:B.toString(),noAutoEscape:"true"},C);C.append("</div>",(A.object&&A.object.text)?A.object.text:"");jive.eae.common.renderStreamAttachments({idPrefix:"reposted-attachments",object:A.object,domIDPostfix:A.object.domIDPostfix},C);C.append("</div>");return D?"":C.toString()};jive.eae.common.parentPreviewLinks=function(A,C){var B=C||new soy.StringBuilder();B.append('<a href=\'#\' class="j-js-show-full-content j-act-preview" data-extVisible="',soy.$$escapeHtmlAttribute(A.activityContainer.visibleToExtCollaborator),'" data-objectID="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.id),'" data-objectType="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.objectType),'" ',(A.activityContainer.jiveObject.typePoll)?'data-containerID="'+soy.$$escapeHtmlAttribute(A.activityContainer.container.id)+'" data-containerType="'+soy.$$escapeHtmlAttribute(A.activityContainer.container.type)+'" ':"",' aria-hidden="false" ',(A.activityContainer.jiveObject.typeTask||A.activityContainer.jiveObject.typeExternalActivity)?'title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.show_details"),[]))+'">':'title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.show.full.link.title"),[]))+'">','<span class="font-color-meta-light paren">(</span><span class="lnk">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.show.full.more"),[])),'</span><span class="font-color-meta-light paren">)</span></a><a href=\'#\' class="j-js-hide-full-content j-act-preview" style="display:none;" aria-hidden="true" ',(A.activityContainer.jiveObject.typeTask||A.activityContainer.jiveObject.typeExternalActivity)?'title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.show_details"),[]))+'">':'title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.hide.full"),[]))+'">','<span class="font-color-meta-light paren">(</span><span class="lnk">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.show.full.less"),[])),'</span><span class="font-color-meta-light paren">)</span></a>');return C?"":B.toString()};jive.eae.common.microRTEContainer=function(A,C){var B=C||new soy.StringBuilder();if(A.activityContainer.jiveObject&&(A.activityContainer.canReply||A.activityContainer.jiveObject.typeWallEntry&&A.activityContainer.jiveObject.canComment&&A.activityContainer.jiveObject.id==A.object.id)){B.append('<div id="microRTEContainer_',soy.$$escapeHtmlAttribute(A.object.domIDPostfix),'" class="j-act-reply j-act-micro-rte" style="display:none;"><div class="r-active">');if(!A.activityContainer.jiveObject.typeDirectMessage&&!A.activityContainer.jiveObject.typeShare&&!A.activityContainer.jiveObject.typeWallEntry){B.append('<div class="j-act-replyinfo">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.collapsed.commenting_on"),[])),' <span class="jive-icon-sml ',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.jiveObjectCSS),'"></span><strong>');jive.eae.common.activityContainerJoSubject(A,B);B.append("</strong></div>")}B.append((A.user.anonymous)?'<div class="jive-reply-post-anonymous j-form"><div><label for="replyGuestName-id">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.name"),[]))+'<span class="font-color-meta-light"> '+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("blogs.vwpst.required.label"),[]))+'</span><input class="replyGuestName" type="text" name="replyGuestName" id="replyGuestName-id"></label></div><div><label for="replyGuestEmail-id">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.email_address"),[]))+'<span class="font-color-meta-light"> '+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("blogs.vwpst.rqdNotPblshd.label"),[]))+'</span><input class="replyGuestEmail" type="text" name="replyGuestEmail" id="replyGuestEmail-id"></label></div><div><label for="replyGuestUrl-id">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("blogs.vwpst.wsite_address.label"),[]))+'<input class="replyGuestUrl" type="text" name="replyGuestUrl" id="replyGuestUrl-id"></label></div></div>':"");if(A.activityContainer.jiveObject.typeWallEntry&&A.activityContainer.jiveObject.canComment||A.activityContainer.jiveObject.typeDirectMessage&&A.activityContainer.canReply||A.activityContainer.jiveObject.typeShare&&A.activityContainer.canReply){jive.statusinput.containers.microbloggingCommentStatusInput({isCollapsedActivity:true,user:A.user,statusID:"eae-mb-comment-editor-"+A.object.domIDPostfix,jiveObject:A.activityContainer.jiveObject,canAtMention:A.canAtMention,visibleToExtCollaborator:A.object.visibleToExtCollaborator},B)}B.append("</div></div>")}return C?"":B.toString()};jive.eae.common.repliedToIcon=function(A,C){var B=C||new soy.StringBuilder();B.append('<span class="jive-icon-sml jive-icon-arrow-top"></span>');return C?"":B.toString()};jive.eae.common.activityContentCommon=function(A,C){var B=C||new soy.StringBuilder();B.append((A.contentTxt!="")?"<p>"+A.contentTxt+((A.hasMoreText)?"&hellip;":"")+"</p>":"");return C?"":B.toString()};jive.eae.common.generateUserMetaData=function(A,C){var B=C||new soy.StringBuilder();B.append("{anonymous: ",soy.$$escapeHtml(A.user.anonymous),", avatarID: ",soy.$$escapeHtml(A.user.avatarID),", displayName: '",soy.$$escapeHtml(A.user.displayName),"', email: '",soy.$$escapeHtml(A.user.email),"', enabled: ",soy.$$escapeHtml(A.user.enabled),", entitled: ",soy.$$escapeHtml(A.user.entitled),", id: ",soy.$$escapeHtml(A.user.id),", objectType: ",soy.$$escapeHtml(A.user.objectType),", username: '",soy.$$escapeHtml(A.user.username),"'}");return C?"":B.toString()};jive.eae.common.renderStreamAttachments=function(A,C){var B=C||new soy.StringBuilder();if(A.object.meta&&A.object.meta.length>0){jive.statusinput.containers.renderAttachmentsContainer({id:(A.idPrefix)?soy.$$escapeHtml(A.idPrefix+"-attachmentContainer-"+A.domIDPostfix):soy.$$escapeHtml("attachmentContainer-"+A.domIDPostfix),entry:A.object,visible:true},B);jive.shared.soy.resourceInlineJs({code:"$j(function() {var id = '"+((A.idPrefix)?soy.$$escapeHtml(A.idPrefix+"-attachmentContainer-"+A.domIDPostfix):soy.$$escapeHtml("attachmentContainer-"+A.domIDPostfix))+"', attachmentView = new jive.MicroBlogging.AttachmentView({selector:'#' + id}); attachmentView.postRender(); jive.MicroBlogging.AttachmentView.views[id] = attachmentView;});"},B)}else{if(A.object.typeExternalActivity&&A.object.mediaLink){B.append('<div class="j-act-attachment"><a href="');jive.eae.common.formatMediaLinkUrl__C2bf6(A.object,B);B.append('" target="_blank" title="',soy.$$escapeHtmlAttribute(A.object.mediaLink.filename?A.object.mediaLink.filename:""),'">',(A.object.mediaLink.thumbnailUrl)?'<div class="j-media-attachment"><img src="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(A.object.mediaLink.thumbnailUrl))+'" title="'+soy.$$escapeHtmlAttribute(A.object.mediaLink.title)+'" alt="" width="'+soy.$$escapeHtmlAttribute(A.object.mediaLink.thumbnailWidth)+'" height="'+soy.$$escapeHtmlAttribute(A.object.mediaLink.thumbnailHeight)+'"/></div>':(A.object.mediaLink.iconClass)?'<span class="jive-icon-med '+soy.$$escapeHtmlAttribute(A.object.mediaLink.iconClass)+'"></span><span>'+soy.$$escapeHtml(A.object.mediaLink.title)+"</span>":"","</a></div>")}}return C?"":B.toString()};jive.eae.common.formatMediaLinkUrl=function(A,C){var B=C||new soy.StringBuilder();B.append((A.mediaLink.contentUrl)?(((A.mediaLink.contentUrl).match(new RegExp("/^https?:\\/\\//",""))||[]))?A.mediaLink.contentUrl:jive.soy.func.normalizeUrl(window._jive_base_url,A.mediaLink.contentUrl):(((A.mediaLink.imageUrl).match(new RegExp("/^https?:\\/\\//",""))||[]))?A.mediaLink.imageUrl:jive.soy.func.normalizeUrl(window._jive_base_url,A.mediaLink.imageUrl));return C?"":B.toString()};jive.eae.common.activityContainerJoSubject=function(A,C){var B=C||new soy.StringBuilder();B.append((A.activityContainer&&A.activityContainer.jiveObject&&A.activityContainer.jiveObject.subject)?A.activityContainer.jiveObject.subject:"");return C?"":B.toString()};jive.eae.common.activityContentText=function(A,C){var B=C||new soy.StringBuilder();B.append((A.activity&&A.activity.content)?(A.activity.content.deleted)?(A.activity.content.typeThread)?"<em>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("error.deleted.reply.description"),[]))+"</em>":"<em>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("error.deleted.reply.description"),[]))+"</em>":(A.activity.content.typeExternalActivity)?(A.activity.content.summary)?(A.noAutoescape)?A.activity.content.summary:soy.$$escapeHtml(A.activity.content.summary):"":((A.activity.moderated)?'<div class="jive-warn-box" aria-live="polite" aria-atomic="true"><span class="jive-icon-med jive-icon-warn"></span>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("blogs.posts.waitingMod.text"),[]))+"</div>":"")+((A.activity.content.html)?(A.noAutoescape)?A.activity.content.html:soy.$$escapeHtml(A.activity.content.html):(A.activity.content.text)?(A.noAutoescape)?A.activity.content.text:soy.$$escapeHtml(A.activity.content.text):""):"");return C?"":B.toString()};jive.eae.common.jsI18nHelper=function(A,C){var B=C||new soy.StringBuilder();B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.key),[])));return C?"":B.toString()};jive.eae.common.groupedUsers=function(G,F){var D=F||new soy.StringBuilder();var J=G.groupedUserList;var K=J.length;for(var I=0;I<K;I++){var H=J[I];if(H&&I<3){D.append((I==K-1&&G.groupedUserList.length>1)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.and"),[]))+" ":"");if(((H.username).match(new RegExp("^__invited__",""))||[]).length){D.append(soy.$$escapeHtml(H.email))}else{if(!H.anonymous){jive.shared.displayutil.userDisplayNameLink(soy.$$augmentData(H,{displayNameOverride:(G.user&&G.user.id==H.id)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.you"),[])):""}),D)}else{jive.shared.displayutil.renderGuestDisplayName({message:H},D)}}D.append((I!=2)?((G.groupedUserList.length>2)?",":"")+" ":"")}}if(G.groupedUserList.length>3){D.append(" ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.and"),[])),' <a href=\'#\' class="j-js-show-grouped-users" data-linkedID="grouped-user-set-',soy.$$escapeHtmlAttribute(G.othersListLinkID),'">',soy.$$escapeHtml(G.groupedUserList.length-3)," ",(G.groupedUserList.length>4)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.others"),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.other"),[])),'</a><div class="j-js-grouped-users js-grouped-users-popover" data-linkedID="grouped-user-set-',soy.$$escapeHtmlAttribute(G.othersListLinkID),'" style="display:none"><ul class="j-grouped-user-list j-simple-list">');var C=G.groupedUserList;var E=C.length;for(var B=0;B<E;B++){var A=C[B];if(A&&B>=3){if(((A.displayName).match(new RegExp("^__invited__",""))||[]).length){D.append(soy.$$escapeHtml(A.email))}else{if(!A.anonymous){D.append('<li class="j-grouped-user">');jive.shared.displayutil.userDisplayNameLink(soy.$$augmentData(A,{displayNameOverride:(G.user&&G.user.id==A.id)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.you"),[])):""}),D);D.append("</li>")}else{D.append('<li class="j-grouped-user">');jive.shared.displayutil.renderGuestDisplayName({message:A},D);D.append("</li>")}}}}D.append("</ul></div>")}return F?"":D.toString()};jive.eae.common.contentTypeClassName=function(A,C){var B=C||new soy.StringBuilder();B.append((A.activityContainer.jiveObject.typeExternalActivity)?"j-act-app":(A.activityContainer.jiveObject.typeDirectMessage)?"j-act-dm":(A.activityContainer.jiveObject.typeAnnouncement)?"j-act-announcement":(A.activityContainer.jiveObject.typeMention)?"j-act-mention":(A.activityContainer.jiveObject.typeShare)?"j-act-share":(A.activityContainer.jiveObject.typeExternalURL)?"j-act-bookmark":(A.activityContainer.jiveObject.typeThread)?"j-act-discussion j-thread-post":(A.activityContainer.jiveObject.typeDocument)?"j-act-document":(A.activityContainer.jiveObject.typeBlogPost)?"j-act-blog":(A.activityContainer.jiveObject.typePoll)?"j-act-poll":(A.activityContainer.jiveObject.typeTask)?"j-act-task":"j-act-generic");return C?"":B.toString()};jive.eae.common.contentTypeDisplayName=function(A,C){var B=C||new soy.StringBuilder();B.append((A.activityContainer.jiveObject.typeExternalActivity)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.app"),[])):(A.activityContainer.jiveObject.typeDirectMessage)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.direct_message"),[])):(A.activityContainer.jiveObject.typeAnnouncement)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.announcement"),[])):(A.activityContainer.jiveObject.typeMention)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.mention"),[])):(A.activityContainer.jiveObject.typeShare)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.share"),[])):(A.activityContainer.jiveObject.typeExternalURL)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.bookmark"),[])):(A.activityContainer.jiveObject.typeThread)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.discussion"),[])):(A.activityContainer.jiveObject.typeDocument)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.document"),[])):(A.activityContainer.jiveObject.typeBlogPost)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.blog"),[])):(A.activityContainer.jiveObject.typePoll)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.poll"),[])):(A.activityContainer.jiveObject.typeTask)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.task"),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.activity"),[])));return C?"":B.toString()};jive.eae.common.contentTypeParentPreviewStylingClassName=function(A,C){var B=C||new soy.StringBuilder();B.append((A.activityContainer.jiveObject.typeThread)?"j-thread-post":(A.activityContainer.jiveObject.typeDocument)?"j-doc jive-content":(A.activityContainer.jiveObject.typeBlogPost)?"jive-content":(A.activityContainer.jiveObject.typeTask)?"j-task":(A.activityContainer.activityList[0].content.typeExternalActivity&&A.activityContainer.activityList[0].content.verb=="uri:jiveName:app_install")?"jive-content j-appinstall  j-rc5":"jive-content j-rc5");return C?"":B.toString()};jive.eae.common.loadingSpinner=function(A,C){var B=C||new soy.StringBuilder();B.append('<span class="j-loading-spinner"></span>');return C?"":B.toString()};jive.eae.common.digestSubItem=function(A,C){var B=C||new soy.StringBuilder();if(A.activity.content.activityTemplate){if(A.user){jive.shared.soy.render({templateName:A.activity.content.activityTemplate,data:(function(){var F={};var E=[["activity",A.activity],["activityContainer",A.activityContainer],["user",A.user],["streamType",A.streamType],["fromTemplate",A.fromTemplate]];for(var D=0;D<E.length;D+=1){F[E[D][0]]=E[D][1]}return F})(),failGracefully:true},B)}else{jive.shared.soy.render({templateName:A.activity.content.activityTemplate,data:(function(){var F={};var E=[["activity",A.activity],["activityContainer",A.activityContainer],["streamType",A.streamType],["fromTemplate",A.fromTemplate]];for(var D=0;D<E.length;D+=1){F[E[D][0]]=E[D][1]}return F})(),failGracefully:true},B)}}else{B.append("<div>");jive.eae.common.subactivity({activity:A.activity,activityContainer:A.activityContainer,user:A.user,isHidden:false,streamType:A.streamType,canCreateMbImage:A.canCreateMbImage,canCreateMbVideo:A.canCreateMbVideo,addedInline:false,hideStub:false,forceCurrent:false},B);B.append("</div>")}return C?"":B.toString()};jive.eae.common.readingPaneBottomReplyLinkKey=function(A,C){var B=C||new soy.StringBuilder();B.append((A.activityContainer.jiveObject.typeDocument||A.activityContainer.jiveObject.typeBlogPost||A.activityContainer.jiveObject.typeExternalURL||A.activityContainer.jiveObject.typePoll)?"eae.inbox.comment.on.originalX":"eae.inbox.reply.to.originalX");return C?"":B.toString()};jive.eae.common.formatMediaLinkUrl__C2bf6=function(A,C){var B=C||new soy.StringBuilder();B.append((A.mediaLink.contentUrl)?(((A.mediaLink.contentUrl).match(new RegExp("/^https?:\\/\\//",""))||[]))?A.mediaLink.contentUrl:jive.soy.func.normalizeUrl(window._jive_base_url,A.mediaLink.contentUrl):(((A.mediaLink.imageUrl).match(new RegExp("/^https?:\\/\\//",""))||[]))?A.mediaLink.imageUrl:jive.soy.func.normalizeUrl(window._jive_base_url,A.mediaLink.imageUrl));return C?"":B.toString()}
;
jive.namespace("DirectMessaging");jive.DirectMessaging.CreateMessageView=function(){jive.conc.observable(this);var d={},b,a=[];function c(f){var e=f.find("input[name=share-users]").val().split(/\s*,\s*/);return $j.extend(microbloggingController.getMessageObject(),{userIDs:e})}this.notifyError=function(g,f){$j("<p />").html(g).message({style:"error"});if(f&&f===4001){var e=jive.eae.common.jsI18nHelper({key:"we.directMessaging.cannot_be_empty.text"});var h=jive.eae.common.jsI18nHelper({key:"we.directMessaging.notEnoughRecipients"});if(g==e){$j("#message-direct-message-text").attr("aria-invalid","true").attr("aria-describedby",g).focus()}else{if(g==h){$j("#recipients").attr("aria-invalid","true").attr("aria-describedby",g).focus()}}}};this.notifySuccess=function(){$j(jive.soy.direct_messaging.successMessage()).message({style:"success"})};this.setRecipients=function(e){a=e.concat([]);return this};this.hideModal=function(){b.trigger("close");return this};this.lockSubmit=function(){b.find("input.js-direct-messaging-form-submitBtn").prop("disabled",true)};this.unlockSubmit=function(){b.find("input.js-direct-messaging-form-submitBtn").prop("disabled",false)};this.openModal=function(){var e=this;b=$j(jive.soy.direct_messaging.modal());var f=b.find("input[type=text]").eq(0);b.lightbox_me({destroyOnClose:true,closeClick:false,closeEsc:false,additionalFocusSelectors:"div#message-direct-message-text"});jive.DirectMessaging.CreateMessageView.initializeUserPicker(f).setUsers(a);a=[];microbloggingController=jive.DirectMessaging.CreateMessageView.initializeMicroBloggingController();b.find("form.j-form").submit((function(h,g){e.lockSubmit();g.emit("form-submit",c($j(this)));h.preventDefault()}).partial(undefined,this))}};jive.DirectMessaging.CreateMessageView.initializeMicroBloggingController=function(){return new jive.DirectMessaging.MicroBloggingController()};jive.DirectMessaging.CreateMessageView.initializeUserPicker=function(a){return new jive.UserPicker.Main({multiple:true,listAllowed:true,emailAllowed:false,canInvitePartners:true,$input:a,relatedMessage:$j(jive.soy.direct_messaging.notRelated())})};
;
jive.namespace("DirectMessaging");jive.DirectMessaging.MicroBloggingView=jive.MicroBlogging.CommonView.extend(function(a,b){this.init=function(c){b.init.call(this,$j.extend({},c||{},{doNotAnimate:true}))};this.getMessage=function(){return this.statusInput.getSubmitVals(false)||""};this.createFormElem=function(){this.$formElem=this.getContent().closest("form:eq(0)");this.$imageFormElem=this._getMetaImageContainer().find("form")};this.createWaitingViewElem=function(){this.$waitingViewElem=this.getContent()};this._getAttachmentsViewOptions=function(){return{selector:"#jive-modal-direct-messaging .jive-js-attachment-container"}};this._getMetaImageContainer=function(){return this.getContent().closest("form").next().find("div.j-meta-image-container")};this.handleSubmitClick=function(c){};this.handleAtMentionResult=function(i,e){var g=this;if(i&&i.split("-").length==2){var d=i.split("-")[0],h=i.split("-")[1];var c=new jive.rte.EntitlementService({objectID:0,objectType:0,entitlement:"VIEW"});var f=$j("#jive-modal-direct-messaging div.j-result-list li").map(function(){return $j(this).data("user-id")+""}).get();if(c&&d){c.checkEntitlement(d,h,f).addCallback(function(j){if(!j){var k="";if(d==3){k=jive.statusinput.mention_warnings.jsI18nHelper({key:"tinymce.jivemention.no_notification"})}else{if(d==700){k=jive.statusinput.mention_warnings.jsI18nHelper({key:"tinymce.jivemention.secret_group"})}else{k=jive.statusinput.mention_warnings.jsI18nHelper({key:"tinymce.jivemention.restricted_content"})}}$j("<p>"+e+" "+k+"</p>").message({style:"warn"})}})}}}});
;
jive.namespace("DirectMessaging");jive.DirectMessaging.Main=function(c,a){function b(f,e){a.unlockSubmit();a.notifyError(f,e)}function d(){a.hideModal();a.notifySuccess()}this.onSubmit=function(e){c.sendMessage(e).addCallback(d).addErrback(b);return this};this.addRecipientsById=function(f,e){e=e||new jive.conc.Promise();c.getUsersByIds(f).addCallback(function(g){a.setRecipients(g);e.emitSuccess()})};this.showModal=function(){a.openModal();return this};this.hideModal=function(){a.hideModal();return this};a.addListener("form-submit",this.onSubmit.bind(this))};
;
jive.namespace("Navbar.Menu.Create");jive.Navbar.Menu.Create.Main=jive.Navbar.Menu.Main.extend(function(a,c){var b=jive.Navbar.Menu.Create;a.init=function(e,f){var d=this;c.init.call(this,e,f);this.suggestedContainers=new jive.Placepicker.SuggestedContainersSource({containerType:containerType,containerID:containerID});this.containers=new jive.Placepicker.SearchContainersSource();this.browseContainers=new jive.Placepicker.BrowseContainersSource();this.placePicker=new jive.Placepicker.PlacePickerSource("create",{containerType:containerType,containerID:containerID});this.quickCreateSource=new b.QuickCreateSource();this.userPrefSource=new jive.Browse.User.ItemSource();this.contentTypes={};this.currentContainerType=containerType;this.currentContainerID=containerID;this.listView.addListener("toggle",function(g){g.addCallback(function(h){d.initializeData(h)})});jive.localexchange.addListener("actions.create",function(g){d.selectedContentType=g.contentType;d.upload=g.upload;d.populate(new jive.conc.Promise()).addCallback(function(i){d.initializeData(i);var h=new jive.Placepicker.Main($j.extend({pickerContext:"create",followLinks:true,objectType:d.selectedContentType,upload:d.upload},d.contentTypes[d.selectedContentType]));h.showPicker();d.invalidate()})});jive.Accessibility.main.addHotkey("c",false,false,false,jive.Accessibility.clickAction($j(e)))};a.buildListView=function(g,h){var e=new b.TypeChooserView(),f=new b.ContainerChooserView(),i=new b.QuickCreateView(),d=this;d.flowController=new b.CreateFlowController(g,h,{contentType:f,toggleView:e},e);e.addListener("contentType",function(k,j){d.selectedContentType=k;d.upload=j}).addListener("toggleView",function(k,j){d.userPrefSource.setUserProperty({userID:"current",propName:"CreateMenuService.smallView",propValue:String(k)});d.initializeData(j)});f.addListener("render",function(j){d.suggestedContainers.get(d.selectedContentType).addCallback(function(k){j.emitSuccess(jQuery.extend({upload:d.upload,selectedContentType:d.contentTypes[d.selectedContentType]},k))})});f.addListener("search",function(j,k){d.containers.findAll({query:j,contentType:d.selectedContentType,maxReturned:10}).addCallback(function(l){k.emitSuccess(jQuery.extend({contentType:d.selectedContentType,containerType:containerType,containerID:containerID,upload:d.upload},l))})});f.addListener("browse",function(k){var j=new jive.Placepicker.Main($j.extend({pickerContext:"create",followLinks:true,objectType:d.selectedContentType,containerType:k.containerType,containerID:k.containerID,upload:d.upload},k.selectedContentType));j.showPicker()});e.addListener("quickCreate",function(k,j){d.selectedContentType=k;d.url=j;if(jive.DirectMessaging.isContentTypeEqualTo(k)){d.flowController.close();jive.DirectMessaging.create({trackingID:"cmenu"}).showModal()}else{i.render()}});i.addListener("fetch",function(j){d.flowController.close();d.quickCreateSource.fetch(d.url,j)});return d.flowController};a.buildItemSource=function(){return new jive.Navbar.Menu.CreateSource()};a.sourceParams=function(){return{containerType:containerType,containerID:containerID}};a.initializeData=function(e){var d=this;if(e){e.sections.reduce(function(f,g){return f.concat(g.items)},[]).filter(function(f){return f.urlParams&&f.urlParams.contentType}).forEach(function(f){if(f.id===null){delete f.id}if(d.currentContainerType&&typeof f.urlParams.containerType=="undefined"){f.urlParams.containerType=""+d.currentContainerType}if(d.currentContainerID&&typeof f.urlParams.containerID=="undefined"){f.urlParams.containerID=""+d.currentContainerID}d.contentTypes[f.urlParams.contentType]=jQuery.extend({id:f.urlParams.contentType,headingKey:f.headingKey,personalContainerTitleKey:f.personalContainerTitleKey,personalContainerCaptionKey:f.personalContainerCaptionKey,searchPlaceholderKey:f.searchPlaceholderKey},f)})}$j("a.js-container-context").each(function(){$j(this).querystring("containerType="+d.currentContainerType+"&containerID="+d.currentContainerID);$j(this).removeClass("js-container-context")})}});
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}if(typeof jive.eae.inbox.item=="undefined"){jive.eae.inbox.item={}}if(typeof jive.eae.inbox.item.list=="undefined"){jive.eae.inbox.item.list={}}jive.eae.inbox.item.list.mention=function(A,C){var B=C||new soy.StringBuilder();if(A.renderLocation=="inbox"){B.append('<div id="commList-item-',soy.$$escapeHtmlAttribute(A.activity.content.domIDPostfix),'" role="link"><div>');jive.shared.displayutil.avatar(soy.$$augmentData(A.activity.activityUser,{size:22,currentUserPartner:A.user.partner}),B);B.append('<span class="jive-icon-med jive-icon-mention-label" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.mention.label"),[])),'"></span>');jive.shared.displayutil.userDisplayName(A.activity.activityUser,B);B.append(" ");if(A.activity.content.mentionedObject.objectType==3){B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.mention.you.in"),[]))," ")}else{jive.shared.soy.i18nHelper({i18nKey:"eae.mention.item.in",arg0:soy.$$escapeHtml(A.activity.content.mentionedObject.name),noAutoEscape:true},B)}B.append(' <span class="title"><span title=\'',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.access.content.type."+A.activityContainer.jiveObject.objectType),[])),"' role='img' class=\"",soy.$$escapeHtmlAttribute(A.activity.content.context.jiveObjectCSS),'"></span>',A.activity.content.context.name," ");jive.shared.displayutil.renderAttachmentLink({object:A.activity.content.context},B);B.append('</span><span class="j-comm-time font-color-meta-light">',soy.$$escapeHtml(A.activity.creationTime),'</span></div></div><a href="#" class="j-link-read j-js-unread-trigger jive-icon-med jive-icon-read-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[])),'" role="button" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[])),'" aria-hidden="',soy.$$escapeHtmlAttribute(!A.activityContainer.read),'" tabindex="-1"></a><a href="#" class="j-link-unread j-js-read-trigger jive-icon-med jive-icon-unread-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.stream.mark.read"),[])),'" role="button" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.read"),[])),'" aria-hidden="',soy.$$escapeHtmlAttribute(A.activityContainer.read),'" tabindex="-1"></a>')}else{if(A.renderLocation=="globalNav"){jive.shared.displayutil.avatar(soy.$$augmentData(A.activity.activityUser,{size:32,hideLink:true,currentUserPartner:A.user.partner}),B);if(A.activity.content.mentionedObject.objectType==3){B.append('<div class="font-color-meta">');jive.shared.displayutil.userDisplayName(A.activity.activityUser,B);B.append(" ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.mention.you.in"),[])),"</div>")}else{B.append((A.activityContainer.jiveObject.typeDirectMessage)?'<span class="jive-icon-med jive-icon-direct-message-label" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.direct_message.label"),[]))+'"></span>':(A.activityContainer.jiveObject.typeShare)?'<span class="jive-icon-med jive-icon-share-label" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("share.label"),[]))+'"></span>':"",'<div class="font-color-meta">');jive.shared.displayutil.userDisplayName(A.activity.activityUser,B);B.append(" ");jive.shared.soy.i18nHelper({i18nKey:"eae.mention.item.in",arg0:soy.$$escapeHtml(A.activity.content.mentionedObject.name),noAutoEscape:true},B);B.append("</div>")}B.append('<div class="title font-color-link"><span title=\'',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.mention"),[])),"' role='img' class=\"",soy.$$escapeHtmlAttribute(A.activity.content.context.jiveObjectCSS),'"></span>',A.activity.content.context.name,"</div>")}}return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.activitystream=="undefined"){jive.eae.activitystream={}}if(typeof jive.eae.activitystream.include=="undefined"){jive.eae.activitystream.include={}}jive.eae.activitystream.include.activityVerbPhrase=function(I,G){var E=G||new soy.StringBuilder();if(I.object.deleted){E.append('<span class="font-color-meta j-act-deleted">',(I.object.deletedMention)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.user.deleted.mention"),[]))+" ":(I.type==2)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.user.deleted.reply"),[]))+" ":soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.user.deleted.comment"),[]))+" ","</span>")}else{if(I.object.typeThread){E.append((I.type=="created")?(I.object.hasQuestion)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.type.asked"),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.type.starteddiscussion"),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.type."+I.type),[])))}else{if(I.object.parentAuthor&&(!I.hideDetailedReplyTo||I.object.typeWallEntryComment)){if(I.object.typeWallEntryComment){var D=new soy.StringBuilder();var B=new soy.StringBuilder();if(I.displayAuthorLink){jive.shared.displayutil.userDisplayNameLink(I.object.parentAuthor,B)}else{B.append(soy.$$escapeHtml(I.object.parentAuthor.displayName))}jive.shared.soy.escapeHelper({stringToEscape:B.toString()},D);jive.shared.soy.i18nHelper({i18nKey:"activity.type.wallentrycomment",arg0:D.toString(),noAutoEscape:true},E)}else{if(!I.hideDetailedReplyTo){var H=new soy.StringBuilder();var F=new soy.StringBuilder();if(I.displayAuthorLink){jive.shared.displayutil.userDisplayNameLink(I.object.parentAuthor,F)}else{F.append(soy.$$escapeHtml(I.object.parentAuthor.displayName))}jive.shared.soy.escapeHelper({stringToEscape:F.toString()},H);jive.shared.soy.i18nHelper({i18nKey:(I.object.commentContentResource&&I.object.commentContentResource.objectType==129)?"activity.type.authorcommentedinresponseto":(I.object.typeMessage)?"activity.type.repliedinresponseto":"activity.type.commentedinresponseto",arg0:H.toString(),noAutoEscape:true},E);E.append((I.againstObject)?" "+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.on"),[]))+" ":"")}}}else{if(I.object.typeMessage||I.type=="share"||I.type=="correct_answer_set"){if(I.type=="correct_answer_set"){var J=new soy.StringBuilder();var L=new soy.StringBuilder();if(I.displayAuthorLink){jive.shared.displayutil.userDisplayNameLink(I.object.messageAuthor,L)}else{L.append(soy.$$escapeHtml(I.object.messageAuthor.displayName))}jive.shared.soy.escapeHelper({stringToEscape:L.toString()},J);jive.shared.soy.i18nHelper({i18nKey:"activity.type.replymarkedcorrect",arg0:J.toString(),noAutoEscape:true},E)}else{if(!I.againstObject){E.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.type.replied"),[]))," ")}else{E.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.type.replied.to"),[]))," ")}}}else{if(I.object.typeComment){E.append((I.object.commentContentResource&&I.object.commentContentResource.objectType==129)?(!I.againstObject)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.type.authorcomment"),[]))+" ":soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.type.authorcommentto"),[]))+" ":(!I.againstObject)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.type.commented"),[]))+" ":soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.type.commentedon"),[]))+" ")}else{if(I.object.typePoll&&I.type=="created"){E.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.type.startedpoll"),[])))}else{if((I.object.typeBlogPost||I.object.typeDocument)&&I.type=="created"){E.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.type.wrote"),[])))}else{if(I.object.typeUserStatus){E.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.type.status"),[])))}else{if(I.object.typeWallEntry){if(I.type=="liked"){E.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.type.liked"),[])))}else{if(I.type=="repost"){var M=new soy.StringBuilder();var K=new soy.StringBuilder();jive.shared.displayutil.userDisplayNameLink(I.object.repostedUser,K);jive.shared.soy.escapeHelper({stringToEscape:K.toString()},M);jive.shared.soy.i18nHelper({i18nKey:(I.object.repostedUser.id==I.user.id)?"activity.type.status.repost.your":"activity.type.status.repost",arg0:M.toString(),noAutoEscape:true},E)}else{if(I.object.wallCreationSrc!=""){jive.shared.soy.i18nHelper({i18nKey:"activity.type.status.with.source",arg0:I.object.wallCreationSrc,noAutoEscape:true},E)}else{E.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.type.status"),[])))}}}}else{if(I.object.typeProjectStatus){E.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.type.updatedStatus"),[])))}else{if(I.object.typeUserRelationship){var A=new soy.StringBuilder();var C=new soy.StringBuilder();jive.shared.displayutil.avatar(soy.$$augmentData(I.object.relatedUser,{size:32,currentUserPartner:I.user.partner}),C);jive.shared.displayutil.userDisplayNameLink(I.object.relatedUser,C);jive.shared.soy.escapeHelper({stringToEscape:C.toString()},A);jive.shared.soy.i18nHelper({i18nKey:"activity.type."+I.type,arg0:A.toString(),noAutoEscape:true},E)}else{if(I.object.typeExternalActivity){E.append(I.object.text," ")}else{if(I.object.typeDirectMessage){E.append((I.object.user.id==I.user.id)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.type.directmessage.you.sent"),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.type.directmessage"),[])))}else{E.append((I.type!="")?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.type."+I.type),[])):"")}}}}}}}}}}}}}return G?"":E.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}jive.eae.inbox.commStream=function(A,C){var B=C||new soy.StringBuilder();jive.shared.soy.resourceInlineJs({code:"$j(function() {require(['jive.ActivityStream.CommunicationStreamControllerMain'], function(InboxController) {var streamI18n = {likes: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("eae.stream.likes"),[]))+"', comments: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("eae.stream.comments"),[]))+"', tracked: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.tracked"),[]))+"', untracked: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.untracked"),[]))+"', lessthanaminago: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("global.less_than_a_minute_ago"),[]))+"', repost_success: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("we.repost.success"),[]))+"', empty_comment: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("cmnt.cannot_be_empty.text"),[]))+"', remove_filter: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("eae.stream.filter.remove.label"),[]))+"'}; if (jive.ActivityStream.GlobalCommunicationStreamController) {jive.ActivityStream.GlobalCommunicationStreamController.tearDown();}jive.ActivityStream.GlobalCommunicationStreamController = new InboxController({contextObjectType: "+soy.$$escapeHtml(A.viewingUser.objectType)+", contextObjectID: "+soy.$$escapeHtml(A.viewingUser.id)+", data:"+JSON.stringify(A.activityStream4JS).replace(/</g,"\\u003C").replace(/>/g,"\\u003E")+", filterType: "+JSON.stringify(A.filterType).replace(/</g,"\\u003C").replace(/>/g,"\\u003E")+", i18n:streamI18n, rteOptions: {preferredMode:'"+soy.$$escapeHtml(A.preferredMode)+"', startMode:'"+soy.$$escapeHtml(A.startMode)+"', mobileUI:"+soy.$$escapeHtml(A.mobileUI)+", communityName:'"+soy.$$escapeHtml(A.communityName)+"', hasImagePerms:"+soy.$$escapeHtml(A.hasImagePerms)+"}, lastViewedObjectType: '"+soy.$$escapeHtml(A.lastViewedObjectType)+"', lastViewedObjectID: '"+soy.$$escapeHtml(A.lastViewedObjectID)+"', streamID: "+soy.$$escapeHtml(A.streamID)+", savedRefreshTime: "+soy.$$escapeHtml(A.activityStream4JS.timepoints.last)+", dmEnabled: "+((A.dmEnabled)?"true":"false")+", viewType: '"+soy.$$escapeHtml(A.viewType)+"', listHeight: "+soy.$$escapeHtml(A.listHeight)+", fromHomeMenu: "+soy.$$escapeHtml(A.fromHomeMenu)+", newUserMode: '"+soy.$$escapeHtml(A.newUserMode)+'\'}); jive.switchboard.emit("activity.communication.controller.initialized");});});'},B);B.append('<div id="j-comm-activity-list" class="j-act-container"><div id="previewable-binary-viewer"></div><div id="j-filter-bar" class="j-act-filter-bar j-rc4 j-rc-none-bottom j-all-read clearfix" role="toolbar" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.toolbar"),[])),'"><div class="j-view-controls j-view-toggle"><a href="#" class="j-link-split-view j-pane-toggle j-js-inbox-pane-toggle j-rc4 ',(A.viewType=="split")?"j-active":"",'" data-type="split" id="js-split-pane-ctrl" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.split_pane"),[])),'" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.split_pane"),[])),'" role="button" aria-pressed="',(A.viewType=="split")?"true":"false",'"><span class="j-ui-elem"></span></a><a href="#" class="j-link-full-view j-pane-toggle j-js-inbox-pane-toggle j-rc4 ',(A.viewType=="full")?"j-active":"",'" data-type="full" id="js-full-pane-ctrl" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.full_view"),[])),'" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.full_view"),[])),'" role="button" aria-pressed="',(A.viewType=="full")?"true":"false",'"><span class="j-ui-elem"></span></a></div>',(A.dmEnabled)?'<div id="j-js-inbox-send-dm" class="j-inbox-send-dm j-social-button j-ui-elem"><span class="j-ui-elem"><a href="#" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.send_direct_message"),[]))+'"><span class="jive-icon-direct-message jive-icon-med"></span>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.send_direct_message"),[]))+"</a></span></div>":"",'<div class="j-comm-filter j-ibx-control"><label ',(A.filterType.indexOf("unread")!=-1)?'class="active"':"",'><input type="checkbox" ',(A.filterType.indexOf("unread")!=-1)?'checked="checked"':"",' data-filterName=\'unread\' id="unread-toggle" class="j-all-toggle"><label for="unread-toggle">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.filter.unread"),[])),'</label></label></div><div class="j-read-controls"><span class="j-not-all-read-controls"><a href="#" id="communications-mark-all-read" class="communications-mark-all-read">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.all.read"),[])),'</a></span></div><div><a href="#" id="communications-filter-trigger"  class="j-ibx-control j-filter-select" aria-haspopup="true" aria-owns="filtermenu"><span class="lnk">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.stream.filter"),[])),'</span><span class="jive-icon-med jive-icon-down j-filter-icon"></span></a></div><div><form id="j-inbox-user-filter-form" class="j-form"><label for="personFilter" class="j-508-label">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.person_filter"),[])),'</label><input type="text" id="personFilter" name="personFilter" placeholder="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.person_filter"),[])),'" class="j-user-autocomplete j-autocomplete-input j-ui-elem" role="combobox"/></form></div><div id="filters-applied" class="j-filters-applied j-rc6" style="display:none"><span class="j-act-filterview j-act-filter-display-name"></span><a href="#" class="js-remove-filter"><span class="jive-icon-sml jive-glyph-remove"></span></a></div></div>');jive.eae.inbox.commStreamList({activityStream:A.activityStream,filterType:A.filterType,mobileUI:A.mobileUI,viewType:A.viewType,listHeight:A.listHeight,newUserMode:A.newUserMode,instanceName:A.communityName},B);B.append('<div id="js-ibx-resize" class="j-ibx-resize" role="separator" tabindex="0" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.separator"),[])),'" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.separator"),[])),'"><span class="j-ibx-resize-ctrl j-ui-elem"></span></div></div>');return C?"":B.toString()};jive.eae.inbox.filtermenu=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id="filtermenu" class="j-act-filter-menu j-quick-menu j-menu" style="display:none;"><ul class="j-act-filter-options" role="listbox"><li role="option"><a data-filterName=\'mentions\' href="#"><span class="jive-icon-med jive-icon-mention-label"></span>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.filter.mentions"),[])),"</a></li>",(A.dmEnabled)?'<li role="option"><a data-filterName=\'directmessages\' href="#"><span class="jive-icon-med jive-icon-direct-message-label"></span>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.filter.directmessages"),[]))+"</a></li>":"",'<li role="option"><a data-filterName=\'shares\' href="#"><span class="jive-icon-med jive-icon-share-label"></span>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.filter.shares"),[])),'</a></li><li role="option"><a data-filterName=\'all\' href="#">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.filter.all"),[])),"</a></li></ul></div>");return C?"":B.toString()};jive.eae.inbox.commStreamList=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id=\'j-communications-list\' class="j-comm-stream" role="list" tabindex="-1" style="height:',(A.viewType=="full")?"100%":soy.$$filterCssValue(A.listHeight)+"px",';">');jive.eae.inbox.commStreamListItems({activityStream:A.activityStream,filterType:A.filterType,mobileUI:A.mobileUI,newUserMode:A.newUserMode,instanceName:A.instanceName,loadMoreLabelType:"spinner"},B);B.append("</div>");return C?"":B.toString()};jive.eae.inbox.commStreamListItems=function(A,G){var C=G||new soy.StringBuilder();if(A.activityStream.activityContainerList&&A.activityStream.activityContainerList.length){var F=A.activityStream.activityContainerList;var B=F.length;for(var E=0;E<B;E++){var D=F[E];if(D.activityList.length>0){jive.eae.inbox.groupedCommStreamItem({activityContainer:D,user:A.activityStream.viewingUser,filterType:A.filterType,streamType:"communications",canCreateMbImage:A.activityStream.canCreateMbImage,canCreateMbVideo:A.activityStream.canCreateMbVideo,mobileUI:A.mobileUI,renderLocation:"inbox",newUserMode:A.newUserMode,instanceName:A.instanceName},C)}}if(A.activityStream.hasMore){C.append("<a class='j-js-load-more j-act-append j-rc6' tabindex=\"-1\" href='#'>");jive.eae.inbox.inboxLoadMoreBtn({labelType:A.loadMoreLabelType},C);C.append("</a>")}}else{C.append('<div class="j-act-empty-list font-color-meta">',(A.filterType.indexOf("unread")!=-1)?(A.filterType.indexOf("mentions")!=-1)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.empty.list.unreadmentions"),[])):(A.filterType.indexOf("directmessages")!=-1)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.empty.list.unreaddirectmessages"),[])):(A.filterType.indexOf("shares")!=-1)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.empty.list.unreadshares"),[])):(A.filterType.indexOf("user")!=-1)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.empty.list.unreadbyparticipant"),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.empty.list.unread"),[])):(A.filterType.indexOf("mentions")!=-1)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.empty.list.mentions"),[])):(A.filterType.indexOf("directmessages")!=-1)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.empty.list.directmessages"),[])):(A.filterType.indexOf("shares")!=-1)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.empty.list.shares"),[])):(A.filterType.indexOf("user")!=-1)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.empty.list.byparticipant"),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.empty.list.all"),[])),"</div>")}return G?"":C.toString()};jive.eae.inbox.inboxLoadMoreBtn=function(A,C){var B=C||new soy.StringBuilder();B.append((A.labelType=="text")?'<span class="j-more-label">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.stream.load_more"),[]))+"</span>":(A.labelType=="spinner")?'<img class="j-ibx-load-more-spinner" src="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.resourceUrl(window._jive_base_url,"/6.0.2.0/","","/images/j-loader-large-wht.gif")))+'" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("customize.loading"),[]))+'" alt="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("customize.loading"),[]))+'" />':"");return C?"":B.toString()};jive.eae.inbox.groupedCommStreamItem=function(A,C){var B=C||new soy.StringBuilder();if(A.activityContainer.jiveObject.groupedCommActivityTemplate){jive.shared.soy.render({templateName:A.activityContainer.jiveObject.groupedCommActivityTemplate,data:(function(){var F={};var E=[["activityContainer",A.activityContainer],["user",A.user],["streamType",A.streamType],["filterType",A.filterType],["mobileUI",A.mobileUI],["renderLocation",A.renderLocation],["newUserMode",A.newUserMode],["instanceName",A.instanceName]];for(var D=0;D<E.length;D+=1){F[E[D][0]]=E[D][1]}return F})(),failGracefully:true},B)}else{if(A.renderLocation=="inbox"){B.append('<div id="communications_',A.activityContainer.jiveObject.objectType,"_",A.activityContainer.jiveObject.id,"_",soy.$$escapeHtmlAttribute(A.activityContainer.container.type),"_",soy.$$escapeHtmlAttribute(A.activityContainer.container.id),'" class="j-comm-entry j-js-ibx-item clearfix',(A.activityContainer.read)?" j-act-read":" j-act-unread",(A.activityContainer.preSelected)?" j-act-active":"",'" role="listitem" tabindex="-1" data-numUnread="',(A.activityContainer.numUnread>10)?"10":soy.$$escapeHtmlAttribute(A.activityContainer.numUnread),'" data-extVisible="',soy.$$escapeHtmlAttribute(A.activityContainer.visibleToExtCollaborator),'" data-objectID="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.id),'" data-objectType="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.objectType),'"><div class="j-js-act-content j-act-content"><div class="j-act-coll-view collapsed clearfix j-js-show-all">');jive.eae.inbox.commListItemView({activityContainer:A.activityContainer,user:A.user,activity:A.activityContainer.activityList[A.activityContainer.activityList.length-1],hidden:false,time:A.activityContainer.parentTime,renderLocation:A.renderLocation,newUserMode:A.newUserMode,instanceName:A.instanceName},B);B.append("</div></div></div>")}else{if(A.renderLocation=="globalNav"){B.append('<a href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/inbox?objectType="+A.activityContainer.jiveObject.objectType+"&objectID="+A.activityContainer.jiveObject.id))),'" id="homeNavCommItem_',A.activityContainer.jiveObject.objectType,"_",A.activityContainer.jiveObject.id,'" class="j-comm-entry j-js-ibx-item j-act-unread font-color-normal clearfix">');jive.eae.inbox.commListItemView({activityContainer:A.activityContainer,user:A.user,activity:A.activityContainer.activityList[A.activityContainer.activityList.length-1],hidden:false,time:A.activityContainer.parentTime,renderLocation:A.renderLocation,newUserMode:A.newUserMode,instanceName:A.instanceName},B);B.append("</a>")}}}return C?"":B.toString()};jive.eae.inbox.commListItemView=function(A,C){var B=C||new soy.StringBuilder();if(A.activityContainer.jiveObject.commListItemViewTemplate){jive.shared.soy.render({templateName:A.activityContainer.jiveObject.commListItemViewTemplate,data:(function(){var F={};var E=[["activityContainer",A.activityContainer],["activity",A.activity],["user",A.user],["hidden",A.hidden],["time",A.time],["renderLocation",A.renderLocation],["newUserMode",A.newUserMode],["instanceName",A.instanceName]];for(var D=0;D<E.length;D+=1){F[E[D][0]]=E[D][1]}return F})(),failGracefully:true},B)}else{if(A.activity.content.typeMention){jive.eae.inbox.item.list.mention(A,B)}else{if(A.renderLocation=="inbox"){B.append('<div id="commList-item-',soy.$$escapeHtmlAttribute(A.activity.content.domIDPostfix),'" data-extVisible="',soy.$$escapeHtmlAttribute(A.activity.visibleToExtCollaborator),'" data-objectID="',soy.$$escapeHtmlAttribute(A.activity.targetObjectID),'" data-objectType="',soy.$$escapeHtmlAttribute(A.activity.targetObjectType),'" data-current="',(A.activity.current)?soy.$$escapeHtmlAttribute(A.activity.current):"",'" style="',(A.hidden)?"display:none":"",'" role="link"><div id="commList-item-excerpt_',soy.$$escapeHtmlAttribute(A.activity.content.domIDPostfix),'" class="">');if(!A.activity.content.deleted){jive.shared.displayutil.avatar(soy.$$augmentData(A.activity.activityUser,{size:22,anonymous:A.activity.activityUser.anonymous}),B)}B.append((A.activityContainer.lastMentionTime!="0")?'<span class="jive-icon-med jive-icon-mention-label-inactive" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.mention.label"),[]))+'"></span>':"");jive.eae.common.activityAuthor({object:A.activity.content,type:A.activity.content.deleted?A.activityContainer.jiveObject.objectType:A.activity.type,activityUser:A.activity.activityUser,displayAuthorLink:false,streamType:"communications",hideDetailedReplyTo:true,user:A.user,againstObject:true,deleted:A.activity.content.deleted},B);B.append(' <span class="title">');if(A.activityContainer.jiveObject.activityIcon){jive.shared.displayutil.renderIconElement({icon:A.activityContainer.jiveObject.activityIcon},B)}else{B.append("<span title='",soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.access.content.type."+A.activityContainer.jiveObject.objectType),[])),"' role='img' class=\"",soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.jiveObjectCSS),'"></span>')}B.append((A.activityContainer.jiveObject.subjectIsHtml)?A.activityContainer.jiveObject.htmlSubject:A.activityContainer.jiveObject.subject,"</span>");jive.eae.inbox.commListItemNewCount({count:A.activityContainer.numCurrentSubActivities},B);B.append('<span class="j-comm-time font-color-meta-light">',soy.$$escapeHtml(A.time),'</span></div></div><a href="#" class="j-link-read j-js-unread-trigger jive-icon-med jive-icon-read-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[])),'" role="button" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[])),'" aria-hidden="',soy.$$escapeHtmlAttribute(!A.activityContainer.read),'" tabindex="-1"></a><a href="#" class="j-link-unread j-js-read-trigger jive-icon-med jive-icon-unread-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.stream.mark.read"),[])),'" role="button" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.read"),[])),'" aria-hidden="',soy.$$escapeHtmlAttribute(A.activityContainer.read),'" tabindex="-1"></a>')}else{if(A.renderLocation=="globalNav"){if(!A.activity.content.deleted){jive.shared.displayutil.avatar(soy.$$augmentData(A.activity.activityUser,{size:32,hideLink:true,anonymous:A.activity.activityUser.anonymous,currentUserPartner:A.user.partner}),B)}B.append('<div class="font-color-meta">');jive.eae.common.activityAuthor({object:A.activity.content,type:A.activity.content.deleted?A.activityContainer.jiveObject.objectType:A.activity.type,activityUser:A.activity.activityUser,displayAuthorLink:false,streamType:"communications",hideDetailedReplyTo:true,user:A.user,againstObject:true,deleted:A.activity.content.deleted},B);B.append(" ",soy.$$escapeHtml(A.time),'</div><div class="title font-color-link">');if(A.activityContainer.jiveObject.activityIcon){jive.shared.displayutil.renderIconElement({icon:A.activityContainer.jiveObject.activityIcon},B)}else{B.append('<span class="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.jiveObjectCSS),'"></span>')}B.append((A.activityContainer.jiveObject.subjectIsHtml)?A.activityContainer.jiveObject.htmlSubject:A.activityContainer.jiveObject.subject,"</div>")}}}}return C?"":B.toString()};jive.eae.inbox.commListItemNewCount=function(A,C){var B=C||new soy.StringBuilder();B.append((A.count>1)?'<span class="j-new-count font-color-new">'+soy.$$escapeHtml(A.count)+"</span>":"");return C?"":B.toString()};jive.eae.inbox.expandedCommItemView=function(G,E){var C=E||new soy.StringBuilder();if(G.activityContainer.jiveObject.expandedCommItemViewTemplate){jive.shared.soy.render({templateName:G.activityContainer.jiveObject.expandedCommItemViewTemplate,data:(function(){var M={};var L=[["activityContainer",G.activityContainer],["user",G.user],["streamType",G.streamType],["canCreateMbImage",G.canCreateMbImage],["canCreateMbVideo",G.canCreateMbVideo],["filterType",G.filterType],["mobileUI",G.mobileUI],["newUserMode",G.newUserMode],["instanceName",G.instanceName]];for(var K=0;K<L.length;K+=1){M[L[K][0]]=L[K][1]}return M})(),failGracefully:true},C)}else{C.append('<div class="j-act-exp-view expanded ',(G.activityContainer.read)?"j-act-read":"j-act-unread",'" data-linkedID="communications_',G.activityContainer.jiveObject.objectType,"_",G.activityContainer.jiveObject.id,"_",soy.$$escapeHtmlAttribute(G.activityContainer.container.type),"_",soy.$$escapeHtmlAttribute(G.activityContainer.container.id),'" style="display:none;"><div class="j-js-ibx-item');jive.eae.common.contentTypeClassName(G,C);C.append('"><div class="j-act-ibx-exp-list"><div class="j-act-tl-content-container"><div id="exp-header-',soy.$$escapeHtmlAttribute(G.activityContainer.jiveObject.domIDPostfix),'" class="j-init',(G.activityContainer.canReply)?" j-act-rte-replyable":"",(G.activityContainer.mentionInParent)?" j-tlo-mention":"",'" data-extVisible="',soy.$$escapeHtmlAttribute(G.activityContainer.visibleToExtCollaborator),'" data-objectID="',soy.$$escapeHtmlAttribute(G.activityContainer.jiveObject.id),'" data-objectType="',soy.$$escapeHtmlAttribute(G.activityContainer.jiveObject.objectType),'"><div class="j-act-title" role="heading"><span class="jive-icon-big  ',soy.$$escapeHtmlAttribute(G.activityContainer.jiveObject.jiveObjectCSS),'"></span><a href="',jive.soy.func.normalizeUrl(window._jive_base_url,G.activityContainer.jiveObject.jiveObjectURL),'">',G.activityContainer.jiveObject.subject,"</a> ");if(G.activityContainer.container.type&&G.activityContainer.container.type!=-2){C.append(' <span class="j-act-container font-color-meta">');if(G.activityContainer.container.type==2020){var D=new soy.StringBuilder();jive.shared.displayutil.userDisplayNameLink(G.activityContainer.originalAuthor,D);jive.shared.soy.i18nHelper({i18nKey:"main.in_user_container.label",arg0:D.toString(),arg1:String(G.activityContainer.jiveObject.contentTypeFeatureName).toLowerCase(),noAutoEscape:true},C)}else{var I=new soy.StringBuilder();jive.shared.displayutil.containerDisplayNameLink({container:G.activityContainer.container},I);jive.shared.soy.i18nHelper({i18nKey:"eae.container.in",arg0:I.toString(),noAutoEscape:true},C)}C.append("</span>")}C.append('</div><div class="j-act-header-slug j-excerpt">',(G.activityContainer.jiveObject.text)?G.activityContainer.jiveObject.text+((G.activityContainer.jiveObject.hasMoreText)?"&hellip;":""):"",'</div><div class="j-act-exp-full-content-view js-full-content-container j-rc5" style="display:none;"><div class="j-author-act font-color-meta">');if(!G.activityContainer.originalAuthor.anonymous){jive.shared.displayutil.userDisplayNameLink(G.activityContainer.originalAuthor,C)}else{jive.shared.displayutil.renderGuestDisplayName({message:G.activityContainer.jiveObject},C)}C.append(" ");jive.eae.activitystream.include.activityVerbPhrase({object:G.activityContainer.jiveObject,type:"created",displayAuthorLink:false,hideDetailedReplyTo:true,user:G.user,againstObject:false},C);C.append(' <span class="j-act-time">',soy.$$escapeHtml(G.activityContainer.creationTime),'</span></div><div class="j-act-exp-content-body-view js-full-content-body" style=""></div>');jive.eae.common.renderStreamAttachments({idPrefix:"collapsed",object:G.activityContainer.jiveObject,domIDPostfix:G.activityContainer.jiveObject.domIDPostfix},C);C.append('<div class="j-act-meta clearfix"><div id="exp-body-actions-',soy.$$escapeHtmlAttribute(G.activityContainer.jiveObject.domIDPostfix),'" class="j-act-actions j-act-actions-init ',(G.activityContainer.canReply)?"j-act-rte-replyable":"",' clearfix" data-extVisible="',soy.$$escapeHtmlAttribute(G.activityContainer.visibleToExtCollaborator),'" data-objectID="',soy.$$escapeHtmlAttribute(G.activityContainer.jiveObject.id),'" data-objectType="',soy.$$escapeHtmlAttribute(G.activityContainer.jiveObject.objectType),'"><ul>');jive.eae.common.activityNavActions({object:G.activityContainer.jiveObject,activityContainer:G.activityContainer,amAnAuthor:G.activityContainer.amAnAuthor,objectType:G.activityContainer.jiveObject.objectType,objectId:G.activityContainer.jiveObject.id,liked:G.activityContainer.liked,likeCount:G.activityContainer.likeCount,likable:G.activityContainer.likable,user:G.user,location:"parentPreview",streamType:"communications",filterType:G.filterType},C);C.append('</ul></div></div></div><div class="j-act-preview-controls"><a href=\'#\' class="j-js-show-full-content show" data-extVisible="',soy.$$escapeHtmlAttribute(G.activityContainer.visibleToExtCollaborator),'" data-objectID="',soy.$$escapeHtmlAttribute(G.activityContainer.jiveObject.id),'" data-objectType="',soy.$$escapeHtmlAttribute(G.activityContainer.jiveObject.objectType),'" aria-hidden="false"><span class="jive-icon-med jive-icon-down"></span>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.show.full.preview"),[])),'</a><a href=\'#\' class="j-js-hide-full-content hide" style="display:none;" aria-hidden="true"><span class="jive-icon-med jive-icon-down"></span>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.hide.full.preview"),[])),'</a></div><div class="j-track"><a href="#" class="j-link-read j-js-unread-trigger font-color-meta-light"><span class="jive-icon-med jive-icon-unread-marker-large"></span><span class="j-track-lnk">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[])),'</span></a><a href="#" class="j-link-unread j-js-read-trigger font-color-meta-light"><span class="jive-icon-med jive-icon-read-marker-large"></span><strong class="j-track-lnk">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.stream.mark.read"),[])),'</strong></a><a href="#" class="j-act-untrack font-color-meta-light" ',(G.activityContainer.untracked)?'style="display: none;"':"",'><span class="j-track-lnk">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.untrack"),[])),'</span></a><a href="#" class="j-act-track-comms font-color-meta-light" ',(!G.activityContainer.untracked)?'style="display: none;"':"",'><strong class="j-track-lnk">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.untracked"),[])),'</strong></a></div></div></div><div class="j-act-expand-bar j-rc4 j-rc-none-bottom clearfix">');jive.eae.common.replyCountText({activityContainer:G.activityContainer,streamType:G.streamType,showCurrentCount:true},C);C.append(' <a href="#" class="j-js-show-older j-show-older" style="display:none">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.show.earlier"),[])),'</a></div><div class="j-sub-activity-items">');var A=G.activityContainer.activityList;var B=A.length;for(var J=0;J<B;J++){var H=A[J];if(!H.parentActivity&&!(H.content.typeMention&&H.content.context.objectType==G.activityContainer.jiveObject.objectType)&&(H.current||J==B-1)){jive.eae.common.subactivity({activity:H,activityContainer:G.activityContainer,isHidden:false,user:G.user,streamType:"communications",canCreateMbImage:G.canCreateMbImage,canCreateMbVideo:G.canCreateMbVideo,hideStub:true,addedInline:false,forceCurrent:J==B-1},C)}}C.append("</div>");if(G.activityContainer.canReply){C.append('<div id="parent-reply-',soy.$$escapeHtmlAttribute(G.activityContainer.jiveObject.domIDPostfix),'" class="j-act-actions j-act-actions-init j-act-rte-replyable j-act-parent-reply-view clearfix" data-extVisible="',soy.$$escapeHtmlAttribute(G.activityContainer.visibleToExtCollaborator),'" data-objectID="',soy.$$escapeHtmlAttribute(G.activityContainer.jiveObject.id),'" data-objectType="',soy.$$escapeHtmlAttribute(G.activityContainer.jiveObject.objectType),'"><div class="j-act-add-comment"><div class="j-act-replyto j-act-original"><a class="j-reply-rte" href="javascript:void(0);">');var F=new soy.StringBuilder();jive.eae.common.readingPaneBottomReplyLinkKey(G,F);jive.shared.soy.i18nHelper({i18nKey:F.toString(),arg0:(G.activityContainer.jiveObject.contentTypeName)?soy.$$escapeHtml(String(G.activityContainer.jiveObject.contentTypeName).toLowerCase()):"",noAutoEscape:true},C);C.append("</a></div></div></div>")}C.append("</div></div></div>")}return E?"":C.toString()};jive.eae.inbox.showMoreEllipses=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="j-act-node js-ellipses"><div class="j-mod"><a href="#" class="j-js-show-older">&hellip;</a></div></div>');return C?"":B.toString()};jive.eae.inbox.collaboratorParticipantsModal=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="jive-modal j-modal" id="jive-modal-participants"><header><h2 class="jive-modal-title">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.direct_message.add_recipients"),[])),'</h2></header><label class="j-508-label" id="close-modal-508">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close.modal"),[])),'</label><a href="#" class="j-modal-close-top close" aria-labelledby="close-modal-508" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.close.modal"),[])),'">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close"),[])),' <span class="j-close-icon close j-ui-elem"></span></a><div class="jive-modal-content clearfix" id="jive-modal-content-container"><div id="jive-modal-scrollto-container"><div id="jive-modal-content-participants" class="clearfix"><p>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.direct_message.add_recipients.desc"),[])),'</p><form method="POST" action="#" id="jive-modal-content-participants-form" class="j-form"><div role="combobox"><label for="participants" class="j-508-label">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.direct_message.add_recipients.desc"),[])),'</label><input type="text" name="participants" id="participants" class="j-user-autocomplete j-autocomplete-input j-ui-elem" /></div><div class="jive-form-buttons clearfix"><input type="submit" class="j-btn-callout" name="Finished" value="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.finished"),[])),'" style="float: left; margin-left: 10px; margin-bottom: 15px;" /></div></form></div><div id="jive-modal-content-browse-participants" class="clearfix"></div></div></div></div>');return C?"":B.toString()};jive.eae.inbox.collaboratorParticipantsI18NHelper=function(A,G){var B=G||new soy.StringBuilder();if(A.activityContainer.jiveObject.typeDirectMessage){var C=new soy.StringBuilder();if(!A.activityContainer.originalAuthor.anonymous){jive.shared.displayutil.userDisplayNameLink(A.activityContainer.originalAuthor,C)}else{jive.shared.displayutil.renderGuestDisplayName({message:A.activityContainer.jiveObject},C)}var E=new soy.StringBuilder();if(A.activityContainer.participants.length){jive.eae.common.groupedUsers({groupedUserList:A.activityContainer.participants,user:A.user,othersListLinkID:soy.$$escapeHtml(jive.soy.func.randomString())},E)}else{E.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.yourself"),[])))}jive.shared.soy.i18nHelper({i18nKey:"activity.directmessage.XsentY",arg0:C.toString(),arg1:E.toString(),noAutoEscape:true},B)}else{var D=new soy.StringBuilder();if(!A.activityContainer.jiveObject.user.anonymous){jive.shared.displayutil.userDisplayNameLink(A.activityContainer.jiveObject.user,D)}else{jive.shared.displayutil.renderGuestDisplayName({message:A.activityContainer.jiveObject},D)}var F=new soy.StringBuilder();if(A.activityContainer.participants){jive.eae.common.groupedUsers({groupedUserList:A.activityContainer.participants,user:A.user,othersListLinkID:soy.$$escapeHtml(jive.soy.func.randomString())},F)}else{F.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.yourself"),[])))}jive.shared.soy.i18nHelper({i18nKey:"activity.type.XsharedaYwithZ",arg0:D.toString(),arg1:String(A.activityContainer.jiveObject.contentTypeName).toLowerCase(),arg2:F.toString(),noAutoEscape:true},B)}B.append(" ");return G?"":B.toString()};jive.eae.inbox.jsDraggableHelper=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id="js-ibx-resize-helper" class="j-ibx-resize-helper"></div>');return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}if(typeof jive.eae.inbox.item=="undefined"){jive.eae.inbox.item={}}if(typeof jive.eae.inbox.item.list=="undefined"){jive.eae.inbox.item.list={}}jive.eae.inbox.item.list.app=function(A,C){var B=C||new soy.StringBuilder();if(A.activity.content.typeMention){jive.eae.inbox.item.list.mention(A,B)}else{if(A.renderLocation=="inbox"){B.append('<div id="commList-item-',soy.$$escapeHtmlAttribute(A.activity.content.domIDPostfix),'" data-extVisible="',soy.$$escapeHtmlAttribute(A.activity.visibleToExtCollaborator),'" data-objectID="',soy.$$escapeHtmlAttribute(A.activity.targetObjectID),'" data-objectType="',soy.$$escapeHtmlAttribute(A.activity.targetObjectType),'" data-current="',(A.activity.current)?soy.$$escapeHtmlAttribute(A.activity.current):"",'" style="',(A.hidden)?"display:none":"",'" role="link"><div id="commList-item-excerpt_',soy.$$escapeHtmlAttribute(A.activity.content.domIDPostfix),'" class="">');if(!A.activity.content.deleted){jive.shared.displayutil.avatar(soy.$$augmentData(A.activity.activityUser,{size:22,anonymous:A.activity.activityUser.anonymous,currentUserPartner:A.user.partner}),B)}B.append((A.activityContainer.lastMentionTime!="0")?'<span class="jive-icon-med jive-icon-mention-label-inactive" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.mention.label"),[]))+'"></span>':"");if(A.activity.content&&(A.activity.content.typeComment||A.activity.content.deleted)){jive.eae.common.activityAuthor({object:A.activity.content,type:A.activity.content.deleted?A.activityContainer.jiveObject.objectType:A.activity.type,activityUser:A.activity.activityUser,displayAuthorLink:false,streamType:A.streamType,hideDetailedReplyTo:true,user:A.user,againstObject:true,deleted:A.activity.content.deleted},B)}else{B.append(soy.$$escapeHtml(A.activity.content.plainSubject))}if(A.activity.content&&A.activity.content.verb!="uri:jiveName:app_install"){B.append(' <span class="title">');if(A.activityContainer.jiveObject.activityIcon){jive.shared.displayutil.renderIconElement({icon:A.activityContainer.jiveObject.activityIcon},B)}else{B.append('<span class="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.jiveObjectCSS),'"></span>')}B.append((A.activityContainer.jiveObject.subjectIsHtml)?A.activityContainer.jiveObject.htmlSubject:A.activityContainer.jiveObject.subject,"</span>")}jive.eae.inbox.commListItemNewCount({count:A.activityContainer.numCurrentSubActivities},B);B.append('<span class="j-comm-time font-color-meta-light">',soy.$$escapeHtml(A.time),'</span></div></div><a href="#" class="j-link-read j-js-unread-trigger jive-icon-med jive-icon-read-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[])),'" role="button" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[])),'" aria-hidden="',soy.$$escapeHtmlAttribute(!A.activityContainer.read),'" tabindex="-1"></a><a href="#" class="j-link-unread j-js-read-trigger jive-icon-med jive-icon-unread-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.read"),[])),'" role="button" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.read"),[])),'" aria-hidden="',soy.$$escapeHtmlAttribute(A.activityContainer.read),'" tabindex="-1"></a>')}else{if(A.renderLocation=="globalNav"){if(!A.activity.content.deleted){jive.shared.displayutil.avatar(soy.$$augmentData(A.activity.activityUser,{size:32,hideLink:true,anonymous:A.activity.activityUser.anonymous,currentUserPartner:A.user.partner}),B)}if(A.activity.content&&A.activity.content.verb=="uri:jiveName:app_install"){B.append('<div class="font-color-meta">',soy.$$escapeHtml(A.activity.activityUser.displayName)," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.type.installed"),[]))," ",soy.$$escapeHtml(A.time),"</div>")}else{B.append('<div class="font-color-meta">');if(A.activity.content.verb=="post"){B.append(soy.$$escapeHtml(A.activity.content.plainSubjectSnippet)," ",soy.$$escapeHtml(A.time))}else{jive.eae.common.activityAuthor({object:A.activity.content,type:A.activity.content.deleted?A.activityContainer.jiveObject.objectType:A.activity.type,activityUser:A.activity.activityUser,displayAuthorLink:false,streamType:A.streamType,hideDetailedReplyTo:true,user:A.user,againstObject:true,deleted:A.activity.content.deleted},B);B.append(" ",soy.$$escapeHtml(A.time))}B.append("</div>")}B.append('<div class="title font-color-link">');if(A.activityContainer.jiveObject.activityIcon){jive.shared.displayutil.renderIconElement({icon:A.activityContainer.jiveObject.activityIcon},B)}else{B.append('<span class="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.jiveObjectCSS),'"></span>')}B.append((A.activityContainer.jiveObject.subjectIsHtml)?A.activityContainer.jiveObject.htmlSubject:A.activityContainer.jiveObject.subject,"</div>")}}}return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}if(typeof jive.eae.inbox.item=="undefined"){jive.eae.inbox.item={}}if(typeof jive.eae.inbox.item.grouped=="undefined"){jive.eae.inbox.item.grouped={}}jive.eae.inbox.item.grouped.appGrouped=function(A,C){var B=C||new soy.StringBuilder();if(A.renderLocation=="inbox"){B.append("<div ",(A.activityContainer.jiveObject.extraData&&A.activityContainer.jiveObject.extraData.appID)?'id="'+soy.$$escapeHtmlAttribute(A.streamType)+"_"+A.activityContainer.jiveObject.objectType+"_"+A.activityContainer.jiveObject.id+"_1400_"+soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.extraData.appID)+'"':'id="'+soy.$$escapeHtmlAttribute(A.streamType)+"_"+A.activityContainer.jiveObject.objectType+"_"+A.activityContainer.jiveObject.id+"_"+soy.$$escapeHtmlAttribute(A.activityContainer.container.type)+"_"+soy.$$escapeHtmlAttribute(A.activityContainer.container.id)+'"',' class="j-comm-entry j-js-ibx-item j-act-app clearfix',(A.activityContainer.read)?" j-act-read":" j-act-unread",(A.activityContainer.lastMentionTime!="0")?" j-mentioned":"",(A.activityContainer.preSelected)?" j-act-active":"",'" data-numUnread="',(A.activityContainer.numUnread>10)?"10":soy.$$escapeHtmlAttribute(A.activityContainer.numUnread),'" data-extVisible="',soy.$$escapeHtmlAttribute(A.activityContainer.visibleToExtCollaborator),'" data-objectID="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.id),'" data-objectType="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.objectType),'"><div class="j-js-act-content j-act-content"><div class="j-act-coll-view collapsed clearfix j-js-show-all">');jive.eae.inbox.item.list.app({activityContainer:A.activityContainer,activity:A.activityContainer.activityList[A.activityContainer.activityList.length-1],streamType:A.streamType,user:A.user,hidden:false,time:A.activityContainer.parentTime,renderLocation:A.renderLocation},B);B.append("</div></div></div>")}else{if(A.renderLocation=="globalNav"){B.append('<a href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/inbox?objectType="+A.activityContainer.jiveObject.objectType+"&objectID="+A.activityContainer.jiveObject.id))),'" ',(A.activityContainer.jiveObject.extraData&&A.activityContainer.jiveObject.extraData.appID)?'id="homeNavCommItem_'+A.activityContainer.jiveObject.objectType+"_"+A.activityContainer.jiveObject.id+"_1400_"+soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.extraData.appID)+'"':'id="homeNavCommItem_'+A.activityContainer.jiveObject.objectType+"_"+A.activityContainer.jiveObject.id+"_"+soy.$$escapeHtmlAttribute(A.activityContainer.container.type)+"_"+soy.$$escapeHtmlAttribute(A.activityContainer.container.id)+'"',' class="j-comm-entry j-js-ibx-item j-act-unread',(A.activityContainer.lastMentionTime!="0")?" j-mentioned":"",' font-color-normal clearfix">');jive.eae.inbox.item.list.app({activityContainer:A.activityContainer,activity:A.activityContainer.activityList[A.activityContainer.activityList.length-1],streamType:A.streamType,user:A.user,hidden:false,time:A.activityContainer.parentTime,renderLocation:A.renderLocation},B);B.append("</a>")}}return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}if(typeof jive.eae.inbox.item=="undefined"){jive.eae.inbox.item={}}if(typeof jive.eae.inbox.item.list=="undefined"){jive.eae.inbox.item.list={}}jive.eae.inbox.item.list.document=function(A,C){var B=C||new soy.StringBuilder();if(A.activity.content.typeMention){jive.eae.inbox.item.list.mention(A,B)}else{if(A.renderLocation=="inbox"){B.append('<div id="commList-item-',soy.$$escapeHtmlAttribute(A.activity.content.domIDPostfix),'" data-extVisible="',soy.$$escapeHtmlAttribute(A.activity.visibleToExtCollaborator),'" data-objectID="',soy.$$escapeHtmlAttribute(A.activity.targetObjectID),'" data-objectType="',soy.$$escapeHtmlAttribute(A.activity.targetObjectType),'" data-current="',(A.activity.current)?soy.$$escapeHtmlAttribute(A.activity.current):"",'" style="',(A.hidden)?"display:none":"",'" role="link"><div id="commList-item-excerpt_',soy.$$escapeHtmlAttribute(A.activity.content.domIDPostfix),'">');if(!A.activity.content.deleted){jive.shared.displayutil.avatar(soy.$$augmentData(A.activity.activityUser,{size:22,anonymous:A.activity.activityUser.anonymous,currentUserPartner:A.user.partner}),B)}B.append((A.activityContainer.lastMentionTime!="0")?'<span class="jive-icon-med jive-icon-mention-label-inactive" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.mention.label"),[]))+'"></span>':"");jive.eae.common.activityAuthor({object:A.activity.content,type:A.activity.content.deleted?A.activityContainer.jiveObject.objectType:A.activity.type,activityUser:A.activity.activityUser,displayAuthorLink:false,streamType:A.streamType,hideDetailedReplyTo:true,user:A.user,againstObject:true,deleted:A.activity.content.deleted},B);B.append(' <span class="title"><span title=\'',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.document"),[])),"' role='img' class=\"",soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.jiveObjectCSS),'"></span>',A.activityContainer.jiveObject.subject,"</span>");jive.eae.inbox.commListItemNewCount({count:A.activityContainer.numCurrentSubActivities},B);B.append('<span class="j-comm-time font-color-meta-light">',soy.$$escapeHtml(A.time),'</span></div></div><a href="#" class="j-link-read j-js-unread-trigger jive-icon-med jive-icon-read-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[])),'" role="button" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[])),'" aria-hidden="',soy.$$escapeHtmlAttribute(!A.activityContainer.read),'" tabindex="-1"></a><a href="#" class="j-link-unread j-js-read-trigger jive-icon-med jive-icon-unread-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.stream.mark.read"),[])),'" role="button" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.read"),[])),'" aria-hidden="',soy.$$escapeHtmlAttribute(A.activityContainer.read),'" tabindex="-1"></a>')}else{if(A.renderLocation=="globalNav"){if(!A.activity.content.deleted){jive.shared.displayutil.avatar(soy.$$augmentData(A.activity.activityUser,{size:32,hideLink:true,anonymous:A.activity.activityUser.anonymous,currentUserPartner:A.user.partner}),B)}B.append('<div class="font-color-meta">');jive.eae.common.activityAuthor({object:A.activity.content,type:A.activity.content.deleted?A.activityContainer.jiveObject.objectType:A.activity.type,activityUser:A.activity.activityUser,displayAuthorLink:false,streamType:A.streamType,hideDetailedReplyTo:true,user:A.user,againstObject:true,deleted:A.activity.content.deleted},B);B.append(" ",(!A.activity.type=="notification")?soy.$$escapeHtml(A.time):"",'</div><div class="title font-color-link"><span title=\'',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.document"),[])),"' role='img' class=\"",soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.jiveObjectCSS),'"></span>',A.activityContainer.jiveObject.subject,"</div>")}}}return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}if(typeof jive.eae.inbox.item=="undefined"){jive.eae.inbox.item={}}if(typeof jive.eae.inbox.item.grouped=="undefined"){jive.eae.inbox.item.grouped={}}jive.eae.inbox.item.grouped.document=function(A,C){var B=C||new soy.StringBuilder();if(A.renderLocation=="inbox"){B.append('<div id="communications_',(A.activityContainer.activityList[0]&&A.activityContainer.activityList[0].content.commentContentResource&&A.activityContainer.activityList[0].content.commentContentResource.objectType==129)?"129":A.activityContainer.jiveObject.objectType,"_",A.activityContainer.jiveObject.id,"_",soy.$$escapeHtmlAttribute(A.activityContainer.container.type),"_",soy.$$escapeHtmlAttribute(A.activityContainer.container.id),'" class="j-comm-entry j-js-ibx-item clearfix',(A.activityContainer.read)?" j-act-read":" j-act-unread",(A.activityContainer.preSelected)?" j-act-active":"",'" role="listitem" tabindex="-1" data-numUnread="',(A.activityContainer.numUnread>10)?"10":soy.$$escapeHtmlAttribute(A.activityContainer.numUnread),'" data-extVisible="',soy.$$escapeHtmlAttribute(A.activityContainer.visibleToExtCollaborator),'" data-objectID="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.id),'" data-objectType="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.objectType),'"><div class="j-js-act-content j-act-content"><div class="j-act-coll-view collapsed clearfix j-js-show-all">');jive.eae.inbox.item.list.document({activityContainer:A.activityContainer,streamType:A.streamType,user:A.user,activity:A.activityContainer.activityList[A.activityContainer.activityList.length-1],hidden:false,time:A.activityContainer.parentTime,renderLocation:A.renderLocation},B);B.append("</div></div></div>")}else{if(A.renderLocation=="globalNav"){B.append("<a ",(A.activityContainer.activityList[0]&&A.activityContainer.activityList[0].content.commentContentResource&&A.activityContainer.activityList[0].content.commentContentResource.objectType==129)?'href="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/inbox?objectType=129&objectID="+A.activityContainer.jiveObject.id)))+'" ':'href="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/inbox?objectType="+A.activityContainer.jiveObject.objectType+"&objectID="+A.activityContainer.jiveObject.id)))+'" ','id="homeNavCommItem_',(A.activityContainer.activityList[0]&&A.activityContainer.activityList[0].content.commentContentResource&&A.activityContainer.activityList[0].content.commentContentResource.objectType==129)?"129":A.activityContainer.jiveObject.objectType,"_",A.activityContainer.jiveObject.id,'" class="j-comm-entry j-js-ibx-item j-act-unread font-color-normal">');jive.eae.inbox.item.list.document({activityContainer:A.activityContainer,streamType:A.streamType,user:A.user,activity:A.activityContainer.activityList[A.activityContainer.activityList.length-1],hidden:false,time:A.activityContainer.parentTime,renderLocation:A.renderLocation},B);B.append("</a>")}}return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}if(typeof jive.eae.inbox.item=="undefined"){jive.eae.inbox.item={}}if(typeof jive.eae.inbox.item.list=="undefined"){jive.eae.inbox.item.list={}}jive.eae.inbox.item.list.event=function(A,C){var B=C||new soy.StringBuilder();if(A.activity.content.typeMention){jive.eae.inbox.item.list.mention(A,B)}else{if(A.renderLocation=="inbox"){B.append('<div id="commList-item-',soy.$$escapeHtmlAttribute(A.activity.content.domIDPostfix),'" data-extVisible="',soy.$$escapeHtmlAttribute(A.activity.visibleToExtCollaborator),'" data-objectID="',soy.$$escapeHtmlAttribute(A.activity.targetObjectID),'" data-objectType="',soy.$$escapeHtmlAttribute(A.activity.targetObjectType),'" data-current="',(A.activity.current)?soy.$$escapeHtmlAttribute(A.activity.current):"",'" style="',(A.hidden)?"display:none":"",'" role="link"><div id="commList-item-excerpt_',soy.$$escapeHtmlAttribute(A.activity.content.domIDPostfix),'">');if(!A.activity.content.deleted){jive.shared.displayutil.avatar(soy.$$augmentData(A.activity.activityUser,{size:22,anonymous:A.activity.activityUser.anonymous,currentUserPartner:A.user.partner}),B)}B.append((A.activityContainer.lastMentionTime!="0")?'<span class="jive-icon-med jive-icon-mention-label-inactive" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.mention.label"),[]))+'"></span>':"");jive.eae.common.activityAuthor({object:A.activity.content,type:A.activity.content.deleted?A.activityContainer.jiveObject.objectType:A.activity.type,activityUser:A.activity.activityUser,displayAuthorLink:false,streamType:A.streamType,hideDetailedReplyTo:true,user:A.user,againstObject:true,deleted:A.activity.content.deleted},B);B.append(' <span class="title"><span class="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.jiveObjectCSS),'"></span>',A.activityContainer.jiveObject.subject,"</span>");jive.eae.inbox.commListItemNewCount({count:A.activityContainer.numCurrentSubActivities},B);B.append('<span class="j-comm-time font-color-meta-light">',soy.$$escapeHtml(A.time),'</span></div></div><a href="#" class="j-link-read j-js-unread-trigger jive-icon-med jive-icon-read-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[])),'"></a><a href="#" class="j-link-unread j-js-read-trigger jive-icon-med jive-icon-unread-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.stream.mark.read"),[])),'"></a>')}else{if(A.renderLocation=="globalNav"){if(!A.activity.content.deleted){jive.shared.displayutil.avatar(soy.$$augmentData(A.activity.activityUser,{size:32,hideLink:true,anonymous:A.activity.activityUser.anonymous,currentUserPartner:A.user.partner}),B)}B.append('<div class="font-color-meta">');jive.eae.common.activityAuthor({object:A.activity.content,type:A.activity.content.deleted?A.activityContainer.jiveObject.objectType:A.activity.type,activityUser:A.activity.activityUser,displayAuthorLink:false,streamType:A.streamType,hideDetailedReplyTo:true,user:A.user,againstObject:true,deleted:A.activity.content.deleted},B);B.append(" ",(!A.activity.type=="notification")?soy.$$escapeHtml(A.time):"",'</div><div class="title font-color-link"><span class="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.jiveObjectCSS),'"></span>',A.activityContainer.jiveObject.subject,"</div>")}}}return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}if(typeof jive.eae.inbox.item=="undefined"){jive.eae.inbox.item={}}if(typeof jive.eae.inbox.item.list=="undefined"){jive.eae.inbox.item.list={}}jive.eae.inbox.item.list.directMessage=function(A,C){var B=C||new soy.StringBuilder();if(A.activity.content.typeMention){jive.eae.inbox.item.list.mention(A,B)}else{if(A.renderLocation=="inbox"){B.append('<div id="commList-item-',soy.$$escapeHtmlAttribute(A.activity.content.domIDPostfix),'" data-extVisible="',soy.$$escapeHtmlAttribute(A.activity.visibleToExtCollaborator),'" data-objectID="',soy.$$escapeHtmlAttribute(A.activity.targetObjectID),'" data-objectType="',soy.$$escapeHtmlAttribute(A.activity.targetObjectType),'" data-current="',(A.activity.current)?soy.$$escapeHtmlAttribute(A.activity.current):"",'" style="',(A.hidden)?"display:none":"",'" role="link"><div id="commList-item-excerpt_',soy.$$escapeHtmlAttribute(A.activity.content.domIDPostfix),'" class="">');if(!A.activity.content.deleted){jive.shared.displayutil.avatar(soy.$$augmentData(A.activity.activityUser,{size:22,anonymous:A.activity.activityUser.anonymous,currentUserPartner:A.user.partner}),B)}B.append((A.activityContainer.lastMentionTime!="0")?'<span class="jive-icon-med jive-icon-mention-label-inactive" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.mention.label"),[]))+'"></span>':"");jive.eae.common.activityAuthor({object:A.activity.content,type:A.activity.content.deleted?A.activityContainer.jiveObject.objectType:A.activity.type,activityUser:A.activity.activityUser,displayAuthorLink:false,streamType:A.streamType,hideDetailedReplyTo:true,user:A.user,againstObject:true,deleted:A.activity.content.deleted},B);B.append(': <span class="jive-icon-med jive-icon-direct-message-label" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.direct_message.label"),[])),'"></span><span class="title">',A.activityContainer.jiveObject.subject,"</span>");jive.eae.inbox.commListItemNewCount({count:A.activityContainer.numCurrentSubActivities},B);B.append('<span class="j-comm-time font-color-meta-light">',soy.$$escapeHtml(A.time),'</span></div></div><a href="#" class="j-link-read j-js-unread-trigger jive-icon-med jive-icon-read-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[])),'" role="button" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[])),'" aria-hidden="',soy.$$escapeHtmlAttribute(!A.activityContainer.read),'" tabindex="-1"></a><a href="#" class="j-link-unread j-js-read-trigger jive-icon-med jive-icon-unread-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.read"),[])),'" role="button" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.read"),[])),'" aria-hidden="',soy.$$escapeHtmlAttribute(A.activityContainer.read),'" tabindex="-1"></a>')}else{if(A.renderLocation=="globalNav"){if(!A.activity.content.deleted){jive.shared.displayutil.avatar(soy.$$augmentData(A.activity.activityUser,{size:32,hideLink:true,anonymous:A.activity.activityUser.anonymous,currentUserPartner:A.user.partner}),B)}B.append('<div class="font-color-meta">');jive.eae.common.activityAuthor({object:A.activity.content,type:A.activity.content.deleted?A.activityContainer.jiveObject.objectType:A.activity.type,activityUser:A.activity.activityUser,displayAuthorLink:false,streamType:A.streamType,hideDetailedReplyTo:true,user:A.user,againstObject:true,deleted:A.activity.content.deleted},B);B.append(" ",soy.$$escapeHtml(A.time),'</div><div class="title font-color-link"><span class="jive-icon-med jive-icon-direct-message-label" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.direct_message.label"),[])),'"></span>',(A.activityContainer.lastMentionTime!="0")?'<span class="jive-icon-med jive-icon-mention-label" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.mention.label"),[]))+'"></span>':"",A.activityContainer.jiveObject.subject,"</div>")}}}return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}if(typeof jive.eae.inbox.item=="undefined"){jive.eae.inbox.item={}}if(typeof jive.eae.inbox.item.list=="undefined"){jive.eae.inbox.item.list={}}jive.eae.inbox.item.list.discussion=function(A,C){var B=C||new soy.StringBuilder();if(A.activity.content.typeMention){jive.eae.inbox.item.list.mention(A,B)}else{if(A.renderLocation=="inbox"){B.append('<div id="commList-item-',soy.$$escapeHtmlAttribute(A.activity.content.domIDPostfix),'" data-objectID=',(A.activity.content.typeThread)?'"'+soy.$$escapeHtmlAttribute(A.activity.content.id)+'"':'"'+soy.$$escapeHtmlAttribute(A.activity.targetObjectID)+'"'," data-objectType=",(A.activity.content.typeThread)?'"'+soy.$$escapeHtmlAttribute(A.activity.content.objectType)+'"':'"'+soy.$$escapeHtmlAttribute(A.activity.targetObjectType)+'"',' data-current="',(A.activity.current)?soy.$$escapeHtmlAttribute(A.activity.current):"",'" style="',(A.hidden)?"display:none":"",'" role="link"><div id="commList-item-excerpt_',soy.$$escapeHtmlAttribute(A.activity.content.domIDPostfix),'">');if(!A.activity.content.deleted){jive.shared.displayutil.avatar(soy.$$augmentData(A.activity.activityUser,{size:22,anonymous:A.activity.activityUser.anonymous,currentUserPartner:A.user.partner}),B)}B.append((A.activityContainer.lastMentionTime!="0")?'<span class="jive-icon-med jive-icon-mention-label-inactive" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.mention.label"),[]))+'"></span>':"");jive.eae.common.activityAuthor({object:A.activity.content,type:A.activity.content.deleted?A.activityContainer.jiveObject.objectType:A.activity.type,activityUser:A.activity.activityUser,displayAuthorLink:false,streamType:A.streamType,hideDetailedReplyTo:true,user:A.user,againstObject:true,deleted:A.activity.content.deleted},B);B.append(' <span class="title"><span title=\'',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.discussion"),[])),"' role='img' class=\"",soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.jiveObjectCSS),'"></span>',A.activityContainer.jiveObject.subject,"</span>");jive.eae.inbox.commListItemNewCount({count:A.activityContainer.numCurrentSubActivities},B);B.append('<span class="j-comm-time font-color-meta-light">',soy.$$escapeHtml(A.time),'</span></div></div><a href="#" class="j-link-read j-js-unread-trigger jive-icon-med jive-icon-read-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[])),'" role="button" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[])),'" aria-hidden="',soy.$$escapeHtmlAttribute(!A.activityContainer.read),'" tabindex="-1"></a><a href="#" class="j-link-unread j-js-read-trigger jive-icon-med jive-icon-unread-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.read"),[])),'" role="button" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.read"),[])),'" aria-hidden="',soy.$$escapeHtmlAttribute(A.activityContainer.read),'" tabindex=="-1"></a>')}else{if(A.renderLocation=="globalNav"){if(!A.activity.content.deleted){jive.shared.displayutil.avatar(soy.$$augmentData(A.activity.activityUser,{size:32,hideLink:true,anonymous:A.activity.activityUser.anonymous,currentUserPartner:A.user.partner}),B)}B.append('<div class="font-color-meta">');jive.eae.common.activityAuthor({object:A.activity.content,type:A.activity.content.deleted?A.activityContainer.jiveObject.objectType:A.activity.type,activityUser:A.activity.activityUser,displayAuthorLink:false,streamType:A.streamType,hideDetailedReplyTo:true,user:A.user,againstObject:true,deleted:A.activity.content.deleted},B);B.append(" ",(!A.activity.type=="notification")?soy.$$escapeHtml(A.time):"",'</div><div class="title font-color-link"><span title=\'',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.discussion"),[])),"' role='img' class=\"",soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.jiveObjectCSS),'"></span>',A.activityContainer.jiveObject.subject,"</div>")}}}return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}if(typeof jive.eae.inbox.item=="undefined"){jive.eae.inbox.item={}}if(typeof jive.eae.inbox.item.list=="undefined"){jive.eae.inbox.item.list={}}jive.eae.inbox.item.list.statusUpdate=function(A,C){var B=C||new soy.StringBuilder();if(A.activity.content.typeMention){jive.eae.inbox.item.list.mention(A,B)}else{if(A.renderLocation=="inbox"){B.append('<div id="commList-item-',soy.$$escapeHtmlAttribute(A.activity.content.domIDPostfix),'" data-extVisible="',soy.$$escapeHtmlAttribute(A.activity.visibleToExtCollaborator),'" data-objectID="',soy.$$escapeHtmlAttribute(A.activity.targetObjectID),'" data-objectType="',soy.$$escapeHtmlAttribute(A.activity.targetObjectType),'" data-current="',(A.activity.current)?soy.$$escapeHtmlAttribute(A.activity.current):"",'" style="',(A.hidden)?"display:none":"",'" role="link"><div id="commList-item-excerpt_',soy.$$escapeHtmlAttribute(A.activity.content.domIDPostfix),'" class="">');if(!A.activity.content.deleted){jive.shared.displayutil.avatar(soy.$$augmentData(A.activity.activityUser,{size:22,anonymous:A.activity.activityUser.anonymous,currentUserPartner:A.user.partner}),B)}B.append((A.activityContainer.lastMentionTime!="0")?'<span class="jive-icon-med jive-icon-mention-label-inactive" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.mention.label"),[]))+'"></span>':"");jive.eae.common.activityAuthor({object:A.activity.content,type:A.activity.content.deleted?A.activityContainer.jiveObject.objectType:A.activity.type,activityUser:A.activity.activityUser,displayAuthorLink:false,streamType:"communications",hideDetailedReplyTo:true,user:A.user,againstObject:true,deleted:A.activity.content.deleted},B);B.append(' <span class="title">');if(A.activityContainer.jiveObject.activityIcon){jive.shared.displayutil.renderIconElement({icon:A.activityContainer.jiveObject.activityIcon},B)}else{B.append("<span title='",soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.status"),[])),"' role='img' class=\"",soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.jiveObjectCSS),'"></span>')}B.append((A.activityContainer.jiveObject.subjectIsHtml)?A.activityContainer.jiveObject.htmlSubject:A.activityContainer.jiveObject.subject," ");jive.shared.displayutil.renderAttachmentLink({object:A.activityContainer.jiveObject},B);B.append("</span>");jive.eae.inbox.commListItemNewCount({count:A.activityContainer.numCurrentSubActivities},B);B.append('<span class="j-comm-time font-color-meta-light">',soy.$$escapeHtml(A.time),'</span></div></div><a href="#" class="j-link-read j-js-unread-trigger jive-icon-med jive-icon-read-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[])),'" role="button" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[])),'" aria-hidden="',soy.$$escapeHtmlAttribute(!A.activityContainer.read),'" tabindex="-1"></a><a href="#" class="j-link-unread j-js-read-trigger jive-icon-med jive-icon-unread-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.stream.mark.read"),[])),'" role="button" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.read"),[])),'" aria-hidden="',soy.$$escapeHtmlAttribute(A.activityContainer.read),'" tabindex="-1"></a>')}else{if(A.renderLocation=="globalNav"){if(!A.activity.content.deleted){jive.shared.displayutil.avatar(soy.$$augmentData(A.activity.activityUser,{size:32,hideLink:true,anonymous:A.activity.activityUser.anonymous,currentUserPartner:A.user.partner}),B)}B.append('<div class="font-color-meta">');jive.eae.common.activityAuthor({object:A.activity.content,type:A.activity.content.deleted?A.activityContainer.jiveObject.objectType:A.activity.type,activityUser:A.activity.activityUser,displayAuthorLink:false,streamType:"communications",hideDetailedReplyTo:true,user:A.user,againstObject:true,deleted:A.activity.content.deleted},B);B.append(" ",soy.$$escapeHtml(A.time),'</div><div class="title font-color-link">');if(A.activityContainer.jiveObject.activityIcon){jive.shared.displayutil.renderIconElement({icon:A.activityContainer.jiveObject.activityIcon},B)}else{B.append("<span title='",soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.status"),[])),"' role='img' class=\"",soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.jiveObjectCSS),'"></span>')}B.append((A.activityContainer.jiveObject.subjectIsHtml)?A.activityContainer.jiveObject.htmlSubject:A.activityContainer.jiveObject.subject,"</div>")}}}return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}if(typeof jive.eae.inbox.item=="undefined"){jive.eae.inbox.item={}}if(typeof jive.eae.inbox.item.list=="undefined"){jive.eae.inbox.item.list={}}jive.eae.inbox.item.list.remotedocument=function(A,C){var B=C||new soy.StringBuilder();if(A.renderLocation=="inbox"){B.append('<style type="text/css">\n    .remote-title > .jive-rendered-content{\n        display:inline !important;\n    }\n       </style><div id="commList-item-',soy.$$escapeHtmlAttribute(A.activity.content.domIDPostfix),'" data-objectID="',soy.$$escapeHtmlAttribute(A.activity.targetObjectID),'" data-objectType="',soy.$$escapeHtmlAttribute(A.activity.targetObjectType),'" data-current="',(A.activity.current)?soy.$$escapeHtmlAttribute(A.activity.current):"",'" style="',(A.hidden)?"display:none":"",'"><div id="commList-item-excerpt_',soy.$$escapeHtmlAttribute(A.activity.content.domIDPostfix),'">');if(!A.activity.content.deleted){jive.shared.displayutil.avatar(soy.$$augmentData(A.activity.activityUser,{size:22,anonymous:A.activity.activityUser.anonymous}),B)}jive.eae.common.activityAuthor({object:A.activity.content,type:A.activity.content.deleted?A.activityContainer.jiveObject.objectType:A.activity.type,activityUser:A.activity.activityUser,displayAuthorLink:false,streamType:A.streamType,hideDetailedReplyTo:true,user:A.user,againstObject:true,deleted:A.activity.content.deleted},B);B.append(' <span class="title remote-title"><span class="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.jiveObjectCSS),'"></span>',A.activityContainer.jiveObject.subject,"</span>");jive.eae.inbox.commListItemNewCount({count:A.activityContainer.numCurrentSubActivities},B);B.append('<span class="j-comm-time font-color-meta-light">',soy.$$escapeHtml(A.time),'</span></div></div><a href="#" class="j-link-read j-js-unread-trigger jive-icon-med jive-icon-read-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[])),'"></a><a href="#" class="j-link-unread j-js-read-trigger jive-icon-med jive-icon-unread-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.stream.mark.read"),[])),'"></a>')}else{if(A.renderLocation=="globalNav"){if(!A.activity.content.deleted){jive.shared.displayutil.avatar(soy.$$augmentData(A.activity.activityUser,{size:32,hideLink:true,anonymous:A.activity.activityUser.anonymous}),B)}B.append('<div class="font-color-meta">');jive.eae.common.activityAuthor({object:A.activity.content,type:A.activity.content.deleted?A.activityContainer.jiveObject.objectType:A.activity.type,activityUser:A.activity.activityUser,displayAuthorLink:false,streamType:A.streamType,hideDetailedReplyTo:true,user:A.user,againstObject:true,deleted:A.activity.content.deleted},B);B.append(" ",soy.$$escapeHtml(A.time),'</div><div class="title font-color-link"><span class="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.jiveObjectCSS),'"></span>',A.activityContainer.jiveObject.subject,"</div>")}}return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}if(typeof jive.eae.inbox.item=="undefined"){jive.eae.inbox.item={}}if(typeof jive.eae.inbox.item.list=="undefined"){jive.eae.inbox.item.list={}}jive.eae.inbox.item.list.bookmark=function(A,C){var B=C||new soy.StringBuilder();if(A.activity.content.typeMention){jive.eae.inbox.item.list.mention(A,B)}else{if(A.renderLocation=="inbox"){B.append('<div id="commList-item-',soy.$$escapeHtmlAttribute(A.activity.content.domIDPostfix),'" data-objectID=',(A.activity.content.bookmarkedContent)?'"'+soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.id)+'"':'"'+soy.$$escapeHtmlAttribute(A.activity.targetObjectID)+'"'," data-objectType=",(A.activity.content.bookmarkedContent)?'"'+soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.objectType)+'"':'"'+soy.$$escapeHtmlAttribute(A.activity.targetObjectType)+'"',' data-current="',(A.activity.current)?soy.$$escapeHtmlAttribute(A.activity.current):"",'" style="',(A.hidden)?"display:none":"",'" role="link"><div id="commList-item-excerpt_',soy.$$escapeHtmlAttribute(A.activity.content.domIDPostfix),'">');if(!A.activity.content.deleted){jive.shared.displayutil.avatar(soy.$$augmentData(A.activity.activityUser,{size:22,anonymous:A.activity.activityUser.anonymous,currentUserPartner:A.user.partner}),B)}B.append((A.activityContainer.lastMentionTime!="0")?'<span class="jive-icon-med jive-icon-mention-label-inactive" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.mention.label"),[]))+'"></span>':"");jive.eae.common.activityAuthor({object:A.activity.content,type:A.activity.content.deleted?A.activityContainer.jiveObject.objectType:A.activity.type,activityUser:A.activity.activityUser,displayAuthorLink:false,streamType:A.streamType,hideDetailedReplyTo:true,user:A.user,againstObject:true,deleted:A.activity.content.deleted},B);B.append(' <span class="title"><span title=\'',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.bookmark"),[])),"' role='img' class=\"",soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.jiveObjectCSS),'"></span>',A.activityContainer.jiveObject.subject,"</span>");jive.eae.inbox.commListItemNewCount({count:A.activityContainer.numCurrentSubActivities},B);B.append('<span class="j-comm-time font-color-meta-light">',soy.$$escapeHtml(A.time),'</span></div></div><a href="#" class="j-link-read j-js-unread-trigger jive-icon-med jive-icon-read-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[])),'" role="button" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[])),'" aria-hidden="',soy.$$escapeHtmlAttribute(!A.activityContainer.read),'" tabindex="-1"></a><a href="#" class="j-link-unread j-js-read-trigger jive-icon-med jive-icon-unread-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.read"),[])),'" role="button" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.read"),[])),'" aria-hidden="',soy.$$escapeHtmlAttribute(A.activityContainer.read),'" tabindex="-1"></a>')}else{if(A.renderLocation=="globalNav"){if(!A.activity.content.deleted){jive.shared.displayutil.avatar(soy.$$augmentData(A.activity.activityUser,{size:32,hideLink:true,anonymous:A.activity.activityUser.anonymous,currentUserPartner:A.user.partner}),B)}B.append('<div class="font-color-meta">');jive.eae.common.activityAuthor({object:A.activity.content,type:A.activity.type,activityUser:A.activity.activityUser,displayAuthorLink:false,streamType:A.streamType,hideDetailedReplyTo:true,user:A.user,againstObject:true,deleted:A.activity.content.deleted},B);B.append(" ",soy.$$escapeHtml(A.time),'</div><div class="title font-color-link"><span title=\'',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.bookmark"),[])),"' role='img' class=\"",soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.jiveObjectCSS),'"></span>',A.activityContainer.jiveObject.subject,"</div>")}}}return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}if(typeof jive.eae.inbox.item=="undefined"){jive.eae.inbox.item={}}if(typeof jive.eae.inbox.item.list=="undefined"){jive.eae.inbox.item.list={}}jive.eae.inbox.item.list.welcome=function(A,C){var B=C||new soy.StringBuilder();B.append((A.renderLocation=="inbox")?'<div id="commList-item-'+soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.domIDPostfix)+'" data-extVisible="'+soy.$$escapeHtmlAttribute(A.activityContainer.visibleToExtCollaborator)+'" data-objectID="'+soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.id)+'" data-objectType="'+soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.objectType)+'" data-current="'+((A.activity.current)?soy.$$escapeHtmlAttribute(A.activity.current):"")+'" style="'+((A.hidden)?"display:none":"")+'" role="link"><div id="commList-item-excerpt_'+soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.domIDPostfix)+'" class="j-act-welcome"><span class="jive-icon-big jive-icon-welcome acticon"></span><span class="title">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("trial.inbox.message.welcome.label"),[]))+'</span><span class="j-comm-time font-color-meta-light">'+soy.$$escapeHtml(A.time)+'</span></div></div><a href="#" class="j-link-read j-js-unread-trigger jive-icon-med jive-icon-read-marker" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[]))+'" role="button" aria-label="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[]))+'" aria-hidden="'+soy.$$escapeHtmlAttribute(!A.activityContainer.read)+'" tabindex="-1"></a><a href="#" class="j-link-unread j-js-read-trigger jive-icon-med jive-icon-unread-marker" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.stream.mark.read"),[]))+'" role="button" aria-label="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.read"),[]))+'" aria-hidden="'+soy.$$escapeHtmlAttribute(A.activityContainer.read)+'" tabindex="-1"></a>':(A.renderLocation=="globalNav")?'<div class="j-badge-oneliner"><span  title=\''+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.access.welcome.indicator"),[]))+'\' role=\'img\' class="jive-icon-big jive-icon-welcome acticon"></span><span class="title">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("trial.inbox.message.welcome.label"),[]))+"</span></div>":"");return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}if(typeof jive.eae.inbox.item=="undefined"){jive.eae.inbox.item={}}if(typeof jive.eae.inbox.item.list=="undefined"){jive.eae.inbox.item.list={}}jive.eae.inbox.item.list.latestAcclaim=function(A,C){var B=C||new soy.StringBuilder();if(A.renderLocation=="inbox"){B.append('<div id="commList-item-',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.domIDPostfix),'" data-extVisible="',soy.$$escapeHtmlAttribute(A.activityContainer.visibleToExtCollaborator),'" data-objectID="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.id),'" data-objectType="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.objectType),'" data-current="',(A.activity.current)?soy.$$escapeHtmlAttribute(A.activity.current):"",'" style="',(A.hidden)?"display:none":"",'" role="link"><div id="commList-item-excerpt_',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.domIDPostfix),'" class="j-act-acclaim"><span  title=\'',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.acclaim"),[])),'\' role=\'img\' class="jive-icon-big jive-icon-acclaim acticon"></span><span class="title">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.acclaim.group.header"),[])),": </span>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.acclaim.group.subhead"),[])));jive.eae.inbox.commListItemNewCount({count:A.activityContainer.numCurrentSubActivities},B);B.append('<span class="j-comm-time font-color-meta-light">',soy.$$escapeHtml(A.time),'</span></div></div><a href="#" class="j-link-read j-js-unread-trigger jive-icon-med jive-icon-read-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[])),'" role="button" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[])),'" aria-hidden="',soy.$$escapeHtmlAttribute(!A.activityContainer.read),'" tabindex="-1"></a><a href="#" class="j-link-unread j-js-read-trigger jive-icon-med jive-icon-unread-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.stream.mark.read"),[])),'" role="button" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.read"),[])),'" aria-hidden="',soy.$$escapeHtmlAttribute(A.activityContainer.read),'" tabindex="-1"></a>')}else{if(A.renderLocation=="globalNav"){B.append('<div class="j-badge-oneliner font-color-link"><span title=\'',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.access.content.type."+A.activityContainer.jiveObject.objectType),[])),'\' role=\'img\' class="jive-icon-big jive-icon-acclaim acticon"></span><span class="title">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.acclaim.group.header"),[])),": </span>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.acclaim.group.subhead"),[])),"</div>")}}return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}if(typeof jive.eae.inbox.item=="undefined"){jive.eae.inbox.item={}}if(typeof jive.eae.inbox.item.list=="undefined"){jive.eae.inbox.item.list={}}jive.eae.inbox.item.list.announcement=function(A,C){var B=C||new soy.StringBuilder();B.append((A.renderLocation=="inbox")?'<div id="commList-item-'+soy.$$escapeHtmlAttribute(A.activity.content.domIDPostfix)+'" data-extVisible="'+soy.$$escapeHtmlAttribute(A.activity.visibleToExtCollaborator)+'" data-objectID="'+soy.$$escapeHtmlAttribute(A.activity.targetObjectID)+'" data-objectType="'+soy.$$escapeHtmlAttribute(A.activity.targetObjectType)+'" data-current="'+((A.activity.current)?soy.$$escapeHtmlAttribute(A.activity.current):"")+'" style="'+((A.hidden)?"display:none":"")+'" role="link"><div id="commList-item-excerpt_'+soy.$$escapeHtmlAttribute(A.activity.content.domIDPostfix)+'" class=""><span title=\''+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.announcement"),[]))+'\' role=\'img\' class="jive-icon-big jive-icon-announcement acticon"></span><span class="jive-alert-announcement-label">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("anncmt.announcement.gtitle"),[]))+':</span> <span class="title">'+A.activityContainer.jiveObject.subject+'</span><span class="j-comm-time font-color-meta-light">'+soy.$$escapeHtml(A.time)+'</span></div></div><a href="#" class="j-link-read j-js-unread-trigger jive-icon-med jive-icon-read-marker" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[]))+'" role="button" aria-label="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[]))+'" aria-hidden="'+soy.$$escapeHtmlAttribute(!A.activityContainer.read)+'" tabindex="-1"></a><a href="#" class="j-link-unread j-js-read-trigger jive-icon-med jive-icon-unread-marker" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.read"),[]))+'" role="button" aria-label="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.read"),[]))+'" aria-hidden="'+soy.$$escapeHtmlAttribute(A.activityContainer.read)+'" tabindex="-1"></a>':(A.renderLocation=="globalNav")?'<div class="j-badge-oneliner"><span title=\''+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.announcement"),[]))+'\' role=\'img\' class="jive-icon-big jive-icon-announcement acticon"></span><span class="jive-alert-announcement-label">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("anncmt.announcement.gtitle"),[]))+':</span> <span class="title">'+A.activityContainer.jiveObject.subject+"</span></div>":"");return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}if(typeof jive.eae.inbox.item=="undefined"){jive.eae.inbox.item={}}if(typeof jive.eae.inbox.item.list=="undefined"){jive.eae.inbox.item.list={}}jive.eae.inbox.item.list.share=function(A,C){var B=C||new soy.StringBuilder();if(A.activity.content.typeMention){jive.eae.inbox.item.list.mention(A,B)}else{if(A.renderLocation=="inbox"){B.append('<div id="commList-item-',soy.$$escapeHtmlAttribute(A.activity.content.domIDPostfix),'" data-extVisible="',soy.$$escapeHtmlAttribute(A.activity.visibleToExtCollaborator),'" data-objectID="',soy.$$escapeHtmlAttribute(A.activity.targetObjectID),'" data-objectType="',soy.$$escapeHtmlAttribute(A.activity.targetObjectType),'" data-current="',(A.activity.current)?soy.$$escapeHtmlAttribute(A.activity.current):"",'" style="',(A.hidden)?"display:none":"",'" role="link"><div id="commList-item-excerpt_',soy.$$escapeHtmlAttribute(A.activity.content.domIDPostfix),'" class="">');if(!A.activity.content.deleted){jive.shared.displayutil.avatar(soy.$$augmentData(A.activity.activityUser,{size:22,anonymous:A.activity.activityUser.anonymous,currentUserPartner:A.user.partner}),B)}B.append((A.activityContainer.lastMentionTime!="0")?'<span class="jive-icon-med jive-icon-mention-label-inactive" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.mention.label"),[]))+'"></span>':"");jive.eae.common.activityAuthor({object:A.activity.content,type:"share",activityUser:A.activity.activityUser,displayAuthorLink:false,streamType:A.streamType,hideDetailedReplyTo:true,user:A.user,againstObject:true,deleted:A.activity.content.deleted},B);B.append(' <span class="title"><span class="jive-icon-med jive-icon-share-label"></span>',A.activityContainer.jiveObject.subject," ");jive.shared.displayutil.renderAttachmentLink({object:A.activityContainer.jiveObject.sharedObject},B);B.append("</span>");jive.eae.inbox.commListItemNewCount({count:A.activityContainer.numCurrentSubActivities},B);B.append('<span class="j-comm-time font-color-meta-light">',soy.$$escapeHtml(A.time),'</span></div></div><a href="#" class="j-link-read j-js-unread-trigger jive-icon-med jive-icon-read-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[])),'" role="button" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[])),'" aria-hidden="',soy.$$escapeHtmlAttribute(!A.activityContainer.read),'" tabindex="-1"></a><a href="#" class="j-link-unread j-js-read-trigger jive-icon-med jive-icon-unread-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.stream.mark.read"),[])),'" role="button" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.read"),[])),'" aria-hidden="',soy.$$escapeHtmlAttribute(A.activityContainer.read),'" tabindex="-1"></a>')}else{if(A.renderLocation=="globalNav"){if(!A.activity.content.deleted){jive.shared.displayutil.avatar(soy.$$augmentData(A.activity.activityUser,{size:32,hideLink:true,anonymous:A.activity.activityUser.anonymous,currentUserPartner:A.user.partner}),B)}B.append('<div class="font-color-meta">');jive.eae.common.activityAuthor({object:A.activity.content,type:"share",activityUser:A.activity.activityUser,displayAuthorLink:false,streamType:A.streamType,hideDetailedReplyTo:true,user:A.user,againstObject:true,deleted:A.activity.content.deleted},B);B.append(" ",soy.$$escapeHtml(A.time),'</div><div class="title font-color-link"><span class="jive-icon-med jive-icon-share-label"></span>',A.activityContainer.jiveObject.subject,"</div>")}}}return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}if(typeof jive.eae.inbox.item=="undefined"){jive.eae.inbox.item={}}if(typeof jive.eae.inbox.item.grouped=="undefined"){jive.eae.inbox.item.grouped={}}jive.eae.inbox.item.grouped.remotedocument=function(A,C){var B=C||new soy.StringBuilder();if(A.renderLocation=="inbox"){B.append('<div id="communications_',(A.activityContainer.activityList[0]&&A.activityContainer.activityList[0].content.commentContentResource&&A.activityContainer.activityList[0].content.commentContentResource.objectType==129)?"129":A.activityContainer.jiveObject.objectType,"_",A.activityContainer.jiveObject.id,"_",soy.$$escapeHtmlAttribute(A.activityContainer.container.type),"_",soy.$$escapeHtmlAttribute(A.activityContainer.container.id),'" class="j-comm-entry j-js-ibx-item ',(A.activityContainer.read)?"j-act-read":"j-act-unread",' clearfix" data-numUnread="',(A.activityContainer.numUnread>10)?"10":soy.$$escapeHtmlAttribute(A.activityContainer.numUnread),'" data-objectID="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.id),'" data-objectType="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.objectType),'" data-commentHTMLLoaded="false"><div class="j-js-act-content j-act-content"><div class="j-act-coll-view collapsed clearfix j-js-show-all">');jive.eae.inbox.commListItemView({activityContainer:A.activityContainer,streamType:A.streamType,user:A.user,activity:A.activityContainer.activityList[A.activityContainer.activityList.length-1],hidden:false,time:A.activityContainer.parentTime,renderLocation:A.renderLocation},B);B.append("</div></div></div>")}return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}if(typeof jive.eae.inbox.item=="undefined"){jive.eae.inbox.item={}}if(typeof jive.eae.inbox.item.grouped=="undefined"){jive.eae.inbox.item.grouped={}}jive.eae.inbox.item.grouped.directMessage=function(A,C){var B=C||new soy.StringBuilder();if(A.renderLocation=="inbox"){B.append('<div id="communications_',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.objectType),"_",soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.id),"_",soy.$$escapeHtmlAttribute(A.activityContainer.container.type),"_",soy.$$escapeHtmlAttribute(A.activityContainer.container.id),'" class="j-comm-entry j-js-ibx-item j-act-exp-trigger j-act-dm clearfix',(A.activityContainer.read)?" j-act-read":" j-act-unread",(A.activityContainer.preSelected)?" j-act-active":"",'" role="listitem" tabindex="-1" data-extVisible="',soy.$$escapeHtmlAttribute(A.activityContainer.visibleToExtCollaborator),'" data-objectID="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.id),'" data-objectType="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.objectType),'"><div class="j-js-act-content j-act-content"><div class="j-act-coll-view collapsed j-js-show-all clearfix">');jive.eae.inbox.item.list.directMessage({activityContainer:A.activityContainer,streamType:A.streamType,user:A.user,activity:A.activityContainer.activityList[A.activityContainer.activityList.length-1],hidden:false,time:A.activityContainer.parentTime,renderLocation:A.renderLocation},B);B.append("</div></div></div>")}else{if(A.renderLocation=="globalNav"){B.append('<a href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/inbox?objectType="+A.activityContainer.jiveObject.objectType+"&objectID="+A.activityContainer.jiveObject.id))),'" id="homeNavCommItem_',A.activityContainer.jiveObject.objectType,"_",A.activityContainer.jiveObject.id,'" class="j-comm-entry j-js-ibx-item j-act-unread font-color-normal j-act-exp-trigger">');jive.eae.inbox.item.list.directMessage({activityContainer:A.activityContainer,streamType:A.streamType,user:A.user,activity:A.activityContainer.activityList[A.activityContainer.activityList.length-1],hidden:false,time:A.activityContainer.parentTime,renderLocation:A.renderLocation},B);B.append("</a>")}}return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}if(typeof jive.eae.inbox.item=="undefined"){jive.eae.inbox.item={}}if(typeof jive.eae.inbox.item.grouped=="undefined"){jive.eae.inbox.item.grouped={}}jive.eae.inbox.item.grouped.event=function(A,C){var B=C||new soy.StringBuilder();if(A.renderLocation=="inbox"){B.append('<div id="communications_',A.activityContainer.jiveObject.objectType,"_",A.activityContainer.jiveObject.id,"_",soy.$$escapeHtmlAttribute(A.activityContainer.container.type),"_",soy.$$escapeHtmlAttribute(A.activityContainer.container.id),'" class="j-comm-entry j-js-ibx-item clearfix',(A.activityContainer.read)?" j-act-read":" j-act-unread",(A.activityContainer.preSelected)?" j-act-active":"",'" data-numUnread="',(A.activityContainer.numUnread>10)?"10":soy.$$escapeHtmlAttribute(A.activityContainer.numUnread),'" data-extVisible="',soy.$$escapeHtmlAttribute(A.activityContainer.visibleToExtCollaborator),'" data-objectID="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.id),'" data-objectType="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.objectType),'" data-containerID="',soy.$$escapeHtmlAttribute(A.activityContainer.container.id),'" data-containerType="',soy.$$escapeHtmlAttribute(A.activityContainer.container.type),'"><div class="j-js-act-content j-act-content"><div class="j-act-coll-view collapsed clearfix j-js-show-all">');jive.eae.inbox.commListItemView({activityContainer:A.activityContainer,user:A.user,activity:A.activityContainer.activityList[A.activityContainer.activityList.length-1],hidden:false,time:A.activityContainer.parentTime,renderLocation:A.renderLocation},B);B.append("</div></div></div>")}else{if(A.renderLocation=="globalNav"){B.append('<a href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/inbox?objectType="+A.activityContainer.jiveObject.objectType+"&objectID="+A.activityContainer.jiveObject.id))),'" id="homeNavCommItem_',A.activityContainer.jiveObject.objectType,"_",A.activityContainer.jiveObject.id,'" class="j-comm-entry j-js-ibx-item j-act-unread font-color-normal">');jive.eae.inbox.commListItemView({activityContainer:A.activityContainer,user:A.user,activity:A.activityContainer.activityList[A.activityContainer.activityList.length-1],hidden:false,time:A.activityContainer.parentTime,renderLocation:A.renderLocation},B);B.append("</a>")}}return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}if(typeof jive.eae.inbox.item=="undefined"){jive.eae.inbox.item={}}if(typeof jive.eae.inbox.item.grouped=="undefined"){jive.eae.inbox.item.grouped={}}jive.eae.inbox.item.grouped.collaboratorNotification=function(A,C){var B=C||new soy.StringBuilder();if(A.renderLocation=="inbox"){B.append('<div id="',soy.$$escapeHtmlAttribute(A.streamType),"_",A.activityContainer.jiveObject.objectType,"_",A.activityContainer.jiveObject.id,"_",soy.$$escapeHtmlAttribute(A.activityContainer.container.type),"_",soy.$$escapeHtmlAttribute(A.activityContainer.container.id),'" class="j-comm-entry j-js-ibx-item j-act-collaborator clearfix',(A.activityContainer.read)?" j-act-read":" j-act-unread",(A.activityContainer.preSelected)?" j-act-active":"",'" role="listitem" tabindex="-1" data-extVisible="',soy.$$escapeHtmlAttribute(A.activityContainer.visibleToExtCollaborator),'" data-objectID="',A.activityContainer.activityList[0].content.templateData.objectID,'" data-objectType="',soy.$$escapeHtmlAttribute(A.activityContainer.activityList[0].content.templateData.objectType),'"><div class="j-js-act-content j-act-content"><div class="j-act-coll-view collapsed clearfix j-js-show-all"><div id="commList-item-',soy.$$escapeHtmlAttribute(A.activityContainer.activityList[0].content.domIDPostfix),'" data-current="',(A.activityContainer.activityList[0].current)?soy.$$escapeHtmlAttribute(A.activityContainer.activityList[0].current):"",'" role="link"><div id="excerpt_',soy.$$escapeHtmlAttribute(A.activityContainer.activityList[0].content.domIDPostfix),'">');jive.shared.displayutil.avatar(soy.$$augmentData(A.activityContainer.activityList[0].activityUser,{size:22}),B);B.append('<span class="jive-icon-med jive-icon-collaboration-label" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.collaboration.label"),[])),'"></span>');jive.shared.displayutil.userDisplayName(A.activityContainer.activityList[0].activityUser,B);B.append(" ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.type.collabAdded"),[])),' <span class="title"><span class="',soy.$$escapeHtmlAttribute(A.activityContainer.activityList[0].content.templateData.objData.iconCSS),'"></span>',soy.$$escapeHtml(A.activityContainer.activityList[0].content.templateData.objData.displayName),'</span><span class="j-comm-time font-color-meta-light">',soy.$$escapeHtml(A.activityContainer.activityList[0].creationTime),'</span></div></div><a href="#" class="j-link-read j-js-unread-trigger jive-icon-med jive-icon-read-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[])),'" role="button" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.unread"),[])),'" aria-hidden="',soy.$$escapeHtmlAttribute(!A.activityContainer.read),'" tabindex="-1"></a><a href="#" class="j-link-unread j-js-read-trigger jive-icon-med jive-icon-unread-marker" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.read"),[])),'" role="button" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.menu.mark.read"),[])),'" aria-hidden="',soy.$$escapeHtmlAttribute(A.activityContainer.read),'" tabindex="-1"></a></div></div></div>')}else{if(A.renderLocation=="globalNav"){B.append('<a href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/inbox?objectType="+A.activityContainer.jiveObject.objectType+"&objectID="+A.activityContainer.jiveObject.id))),'" id="homeNavCommItem_',A.activityContainer.jiveObject.objectType,"_",A.activityContainer.jiveObject.id,'" class="j-comm-entry j-js-ibx-item j-act-unread font-color-normal j-act-collaborator">');jive.shared.displayutil.avatar(soy.$$augmentData(A.activityContainer.activityList[0].activityUser,{size:32,hideLink:true,hideTooltip:true}),B);B.append('<div class="font-color-meta">');jive.shared.displayutil.userDisplayName(A.activityContainer.activityList[0].activityUser,B);B.append(" ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("activity.type.collabAdded"),[])),'</div><div class="title font-color-link"><span class="',soy.$$escapeHtmlAttribute(A.activityContainer.activityList[0].content.templateData.objData.iconCSS),'"></span>',soy.$$escapeHtml(A.activityContainer.activityList[0].content.templateData.objData.displayName),"</div></a>")}}return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}if(typeof jive.eae.inbox.item=="undefined"){jive.eae.inbox.item={}}if(typeof jive.eae.inbox.item.grouped=="undefined"){jive.eae.inbox.item.grouped={}}jive.eae.inbox.item.grouped.poll=function(A,C){var B=C||new soy.StringBuilder();if(A.renderLocation=="inbox"){B.append('<div id="communications_',A.activityContainer.jiveObject.objectType,"_",A.activityContainer.jiveObject.id,"_",soy.$$escapeHtmlAttribute(A.activityContainer.container.type),"_",soy.$$escapeHtmlAttribute(A.activityContainer.container.id),'" class="j-comm-entry j-js-ibx-item clearfix',(A.activityContainer.read)?" j-act-read":" j-act-unread",(A.activityContainer.preSelected)?" j-act-active":"",'" role="listitem" tabindex="-1" data-numUnread="',(A.activityContainer.numUnread>10)?"10":soy.$$escapeHtmlAttribute(A.activityContainer.numUnread),'" data-extVisible="',soy.$$escapeHtmlAttribute(A.activityContainer.visibleToExtCollaborator),'" data-objectID="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.id),'" data-objectType="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.objectType),'" data-containerID="',soy.$$escapeHtmlAttribute(A.activityContainer.container.id),'" data-containerType="',soy.$$escapeHtmlAttribute(A.activityContainer.container.type),'"><div class="j-js-act-content j-act-content"><div class="j-act-coll-view collapsed clearfix j-js-show-all">');jive.eae.inbox.commListItemView({activityContainer:A.activityContainer,user:A.user,activity:A.activityContainer.activityList[A.activityContainer.activityList.length-1],hidden:false,time:A.activityContainer.parentTime,renderLocation:A.renderLocation},B);B.append("</div></div></div>")}else{if(A.renderLocation=="globalNav"){B.append('<a href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/inbox?objectType="+A.activityContainer.jiveObject.objectType+"&objectID="+A.activityContainer.jiveObject.id))),'" id="homeNavCommItem_',A.activityContainer.jiveObject.objectType,"_",A.activityContainer.jiveObject.id,'" class="j-comm-entry j-js-ibx-item j-act-unread font-color-normal">');jive.eae.inbox.commListItemView({activityContainer:A.activityContainer,user:A.user,activity:A.activityContainer.activityList[A.activityContainer.activityList.length-1],hidden:false,time:A.activityContainer.parentTime,renderLocation:A.renderLocation},B);B.append("</a>")}}return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}if(typeof jive.eae.inbox.item=="undefined"){jive.eae.inbox.item={}}if(typeof jive.eae.inbox.item.grouped=="undefined"){jive.eae.inbox.item.grouped={}}jive.eae.inbox.item.grouped.share=function(A,C){var B=C||new soy.StringBuilder();if(A.renderLocation=="inbox"){B.append('<div id="communications_',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.objectType),"_",soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.id),"_",soy.$$escapeHtmlAttribute(A.activityContainer.container.type),"_",soy.$$escapeHtmlAttribute(A.activityContainer.container.id),'" class="j-comm-entry j-js-ibx-item j-act-exp-trigger clearfix j-act-share',(A.activityContainer.read)?" j-act-read":" j-act-unread",(A.activityContainer.preSelected)?" j-act-active":"",'" role="listitem" tabindex="-1" data-extVisible="',soy.$$escapeHtmlAttribute(A.activityContainer.visibleToExtCollaborator),'" data-objectID="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.id),'" data-objectType="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.objectType),'"><div class="j-js-act-content j-act-content"><div class="j-act-coll-view collapsed j-js-show-all clearfix">');jive.eae.inbox.item.list.share({activityContainer:A.activityContainer,streamType:A.streamType,user:A.user,activity:A.activityContainer.activityList[A.activityContainer.activityList.length-1],hidden:false,time:A.activityContainer.parentTime,renderLocation:A.renderLocation},B);B.append("</div></div></div>")}else{if(A.renderLocation=="globalNav"){B.append('<a href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/inbox?objectType="+A.activityContainer.jiveObject.objectType+"&objectID="+A.activityContainer.jiveObject.id))),'" id="homeNavCommItem_',A.activityContainer.jiveObject.objectType,"_",A.activityContainer.jiveObject.id,'" class="j-comm-entry j-js-ibx-item j-act-unread font-color-normal j-act-exp-trigger">');jive.eae.inbox.item.list.share({activityContainer:A.activityContainer,streamType:A.streamType,user:A.user,activity:A.activityContainer.activityList[A.activityContainer.activityList.length-1],hidden:false,time:A.activityContainer.parentTime,renderLocation:A.renderLocation},B);B.append("</a>")}}return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}if(typeof jive.eae.inbox.item=="undefined"){jive.eae.inbox.item={}}if(typeof jive.eae.inbox.item.grouped=="undefined"){jive.eae.inbox.item.grouped={}}jive.eae.inbox.item.grouped.announcement=function(A,C){var B=C||new soy.StringBuilder();if(A.renderLocation=="inbox"){B.append('<div id="',soy.$$escapeHtmlAttribute(A.streamType),"_",soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.objectType),"_",soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.id),"_",soy.$$escapeHtmlAttribute(A.activityContainer.container.type),"_",soy.$$escapeHtmlAttribute(A.activityContainer.container.id),'" class="j-comm-entry j-js-ibx-item j-act-announcement clearfix',(A.activityContainer.read)?" j-act-read":" j-act-unread",(A.activityContainer.lastMentionTime!="0")?" j-mentioned":"",(A.activityContainer.preSelected)?" j-act-active":"",'" role="listitem" tabindex="-1" data-numUnread="',(A.activityContainer.numUnread>10)?"10":soy.$$escapeHtmlAttribute(A.activityContainer.numUnread),'" data-extVisible="',soy.$$escapeHtmlAttribute(A.activityContainer.visibleToExtCollaborator),'" data-objectID="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.id),'" data-objectType="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.objectType),'"><div class="j-js-act-content j-act-content"><div class="j-act-coll-view collapsed j-js-show-all clearfix">');jive.eae.inbox.item.list.announcement({activityContainer:A.activityContainer,activity:A.activityContainer.activityList[A.activityContainer.activityList.length-1],hidden:false,time:A.activityContainer.parentTime,renderLocation:A.renderLocation},B);B.append("</div></div></div>")}else{if(A.renderLocation=="globalNav"){B.append('<a href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/inbox?objectType="+A.activityContainer.jiveObject.objectType+"&objectID="+A.activityContainer.jiveObject.id))),'" id="homeNavCommItem_',A.activityContainer.jiveObject.objectType,"_",A.activityContainer.jiveObject.id,'" class="j-comm-entry j-js-ibx-item j-act-unread',(A.activityContainer.lastMentionTime!="0")?" j-mentioned":"",' font-color-normal j-act-announcement">');jive.eae.inbox.item.list.announcement({activityContainer:A.activityContainer,activity:A.activityContainer.activityList[A.activityContainer.activityList.length-1],hidden:false,time:A.activityContainer.parentTime,renderLocation:A.renderLocation},B);B.append("</a>")}}return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}if(typeof jive.eae.inbox.item=="undefined"){jive.eae.inbox.item={}}if(typeof jive.eae.inbox.item.grouped=="undefined"){jive.eae.inbox.item.grouped={}}jive.eae.inbox.item.grouped.statusUpdate=function(A,C){var B=C||new soy.StringBuilder();if(A.renderLocation=="inbox"){B.append('<div id="communications_',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.objectType),"_",soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.id),"_",soy.$$escapeHtmlAttribute(A.activityContainer.container.type),"_",soy.$$escapeHtmlAttribute(A.activityContainer.container.id),'" class="j-comm-entry j-js-ibx-item clearfix',(A.activityContainer.activityList.length==1&&A.activityContainer.activityList[0].parentActivity)?" j-act-mb-new":"",(A.activityContainer.read)?" j-act-read":" j-act-unread",(A.activityContainer.preSelected)?" j-act-active":"",'" role="listitem" tabindex="-1" data-extVisible="',soy.$$escapeHtmlAttribute(A.activityContainer.visibleToExtCollaborator),'" data-objectID="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.id),'" data-objectType="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.objectType),'"><div class="j-js-act-content j-act-content"><div class="j-act-coll-view collapsed j-js-show-all clearfix">');jive.eae.inbox.item.list.statusUpdate({activityContainer:A.activityContainer,user:A.user,activity:A.activityContainer.activityList[A.activityContainer.activityList.length-1],hidden:false,time:A.activityContainer.parentTime,renderLocation:A.renderLocation},B);B.append("</div></div></div>")}else{if(A.renderLocation=="globalNav"){B.append('<a href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/inbox?objectType="+A.activityContainer.jiveObject.objectType+"&objectID="+A.activityContainer.jiveObject.id))),'" id="homeNavCommItem_',A.activityContainer.jiveObject.objectType,"_",A.activityContainer.jiveObject.id,'" class="j-comm-entry j-js-ibx-item j-act-unread font-color-normal',(A.activityContainer.activityList.length==1&&A.activityContainer.activityList[0].parentActivity)?" j-act-mb-new":"",'">');jive.eae.inbox.item.list.statusUpdate({activityContainer:A.activityContainer,user:A.user,activity:A.activityContainer.activityList[A.activityContainer.activityList.length-1],hidden:false,time:A.activityContainer.parentTime,renderLocation:A.renderLocation},B);B.append("</a>")}}return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}if(typeof jive.eae.inbox.item=="undefined"){jive.eae.inbox.item={}}if(typeof jive.eae.inbox.item.grouped=="undefined"){jive.eae.inbox.item.grouped={}}jive.eae.inbox.item.grouped.appUpdate=function(A,C){var B=C||new soy.StringBuilder();if(A.renderLocation=="inbox"){B.append("<div ",(A.activityContainer.jiveObject.extraData&&A.activityContainer.jiveObject.extraData.appID)?'id="communications_'+A.activityContainer.jiveObject.objectType+"_"+A.activityContainer.jiveObject.id+"_1400_"+soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.extraData.appID)+'"':'id="communications_'+A.activityContainer.jiveObject.objectType+"_"+A.activityContainer.jiveObject.id+"_"+soy.$$escapeHtmlAttribute(A.activityContainer.container.type)+"_"+soy.$$escapeHtmlAttribute(A.activityContainer.container.id)+'"',' class="j-comm-entry j-js-ibx-item j-act-app clearfix',(A.activityContainer.read)?" j-act-read":" j-act-unread",(A.activityContainer.lastMentionTime!="0")?" j-mentioned":"",(A.activityContainer.preSelected)?" j-act-active":"",'" data-numUnread="',(A.activityContainer.numUnread>10)?"10":soy.$$escapeHtmlAttribute(A.activityContainer.numUnread),'" data-extVisible="',soy.$$escapeHtmlAttribute(A.activityContainer.visibleToExtCollaborator),'" data-objectID="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.id),'" data-objectType="',soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.objectType),'"><div class="j-js-act-content j-act-content"><div class="j-act-coll-view collapsed clearfix j-js-show-all">');jive.eae.inbox.item.list.app({activityContainer:A.activityContainer,activity:A.activityContainer.activityList[A.activityContainer.activityList.length-1],streamType:A.streamType,user:A.user,hidden:false,time:A.activityContainer.parentTime,renderLocation:A.renderLocation},B);B.append("</div></div></div>")}else{if(A.renderLocation=="globalNav"){B.append('<a href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/inbox?objectType="+A.activityContainer.jiveObject.objectType+"&objectID="+A.activityContainer.jiveObject.id))),'" ',(A.activityContainer.jiveObject.extraData&&A.activityContainer.jiveObject.extraData.appID)?'id="homeNavCommItem_'+A.activityContainer.jiveObject.objectType+"_"+A.activityContainer.jiveObject.id+"_1400_"+soy.$$escapeHtmlAttribute(A.activityContainer.jiveObject.extraData.appID)+'"':'id="homeNavCommItem_'+A.activityContainer.jiveObject.objectType+"_"+A.activityContainer.jiveObject.id+"_"+soy.$$escapeHtmlAttribute(A.activityContainer.container.type)+"_"+soy.$$escapeHtmlAttribute(A.activityContainer.container.id)+'"',' class="j-comm-entry j-js-ibx-item j-act-unread font-color-normal">');jive.eae.inbox.item.list.app({activityContainer:A.activityContainer,activity:A.activityContainer.activityList[A.activityContainer.activityList.length-1],streamType:A.streamType,user:A.user,hidden:false,time:A.activityContainer.parentTime,renderLocation:A.renderLocation},B);B.append("</a>")}}return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.inbox=="undefined"){jive.eae.inbox={}}if(typeof jive.eae.inbox.item=="undefined"){jive.eae.inbox.item={}}if(typeof jive.eae.inbox.item.grouped=="undefined"){jive.eae.inbox.item.grouped={}}jive.eae.inbox.item.grouped.mention=function(A,C){var B=C||new soy.StringBuilder();if(A.renderLocation=="inbox"){B.append('<div id="communications_',A.activityContainer.jiveObject.objectType,"_",A.activityContainer.jiveObject.id,"_",soy.$$escapeHtmlAttribute(A.activityContainer.container.type),"_",soy.$$escapeHtmlAttribute(A.activityContainer.container.id),'" class="j-comm-entry j-js-ibx-item j-act-mentions clearfix',(A.activityContainer.read)?" j-act-read":" j-act-unread",(A.activityContainer.preSelected)?" j-act-active":"",'" role="listitem" tabindex="-1" data-extVisible="',soy.$$escapeHtmlAttribute(A.activityContainer.visibleToExtCollaborator),'" data-objectID="',soy.$$escapeHtmlAttribute(A.activityContainer.activityList[0].content.context.id),'" data-objectType="',soy.$$escapeHtmlAttribute(A.activityContainer.activityList[0].content.context.objectType),'"><div class="j-js-act-content j-act-content"><div class="j-act-coll-view collapsed clearfix j-js-show-all">');jive.eae.inbox.item.list.mention({activityContainer:A.activityContainer,streamType:A.streamType,user:A.user,activity:A.activityContainer.activityList[0],hidden:false,time:A.activityContainer.parentTime,renderLocation:A.renderLocation},B);B.append("</div></div></div>")}else{if(A.renderLocation=="globalNav"){B.append('<a href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/inbox?objectType="+A.activityContainer.jiveObject.objectType+"&objectID="+A.activityContainer.jiveObject.id))),'" id="homeNavCommItem_',A.activityContainer.jiveObject.objectType,"_",A.activityContainer.jiveObject.id,'" class="j-comm-entry j-js-ibx-item j-act-mentions j-act-unread">');jive.eae.inbox.item.list.mention({activityContainer:A.activityContainer,streamType:A.streamType,user:A.user,activity:A.activityContainer.activityList[0],hidden:false,time:A.activityContainer.parentTime,renderLocation:A.renderLocation},B);B.append("</a>")}}return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.actionqueue=="undefined"){jive.eae.actionqueue={}}jive.eae.actionqueue.actions=function(A,C){var B=C||new soy.StringBuilder();B.append("<head><title>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("nav.bar.actions.link"),[])),'</title><meta name="nav.active.link" content="jive-nav-link-home" /><meta name="description" content="',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actions.description"),[])),'" /></head><body class="j-body-home j-body-inbox j-body-inbox-actions"><div class="j-layout j-layout-sl clearfix j-contained j-rc5"><div class="j-column-wrap-s"><nav class="j-column j-column-s" role="navigation" aria-label="',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.stream.nav"),[])),'">');jive.welcome.homeSideNav({homeNavHelper:A.homeNavHelper,selectedLinkID:"jive-nav-link-actions"},B);B.append('</nav></div><!-- BEGIN large column --><div class="j-column-wrap-l"><div id="j-dynamic-pane" class="j-column j-column-l">');jive.eae.actionqueue.actionsDynamicPane(A,B);B.append("</div></div></div></body>");return C?"":B.toString()};jive.eae.actionqueue.actionsDynamicPane=function(A,C){var B=C||new soy.StringBuilder();jive.eae.actionqueue.actionsTabs(A,B);B.append('<!-- BEGIN main body --><div id="j-actions-page-content" class="j-stream" role="main" aria-label="',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.header.text.actions"),[])),'">');if(A.actionQueue.currentTab!="jive-tasks"){jive.eae.actionqueue.actionsContent(A,B)}B.append("</div>");jive.shared.soy.resourceInlineJs({code:"$j(function(){require(['jive.ActionQueue.Main'], function(AQMain) {if (jive.ActionQueue && jive.ActionQueue.Controller) {jive.ActionQueue.Controller.init({currentTab: '"+soy.$$escapeHtml(A.actionQueue.currentTab)+"'});}else {jive.ActionQueue.Controller = new AQMain({currentTab: '"+soy.$$escapeHtml(A.actionQueue.currentTab)+"'}); jive.ActionQueue.Controller.attachGlobalEventListeners();}});});"},B);return C?"":B.toString()};jive.eae.actionqueue.actionsTabs=function(A,C){var B=C||new soy.StringBuilder();B.append('<header id="j-actions-page-tabs" class="j-act-header clearfix"><h1 class="header">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.actions"),[])),'</h1><div id="j-aq-filters"><a id="jive-aq-pending" class="filter ',(!A.isArchived)?"j-sub-selected font-color-normal":"",'" data-type="awaiting_action" href="#"><span class="lnk">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("actions.show.pending"),[])),'</span> <span class="count">');jive.eae.actionqueue.aqTabCount({count:A.actionsCount},B);B.append('</span></a><a id="jive-aq-archived" class="filter ',(A.isArchived)?"j-sub-selected font-color-normal":"",'" href="',soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"/actions/archived")),'"><span class="lnk">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("actions.show.archived"),[])),'</span></a><span id="j-tasks-nav" class="j-aq-tasks"><a id="jive-tasks" href="#"><span class="lnk">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("actions.tasks.tab"),[])),'</span> <span class="count">');jive.eae.actionqueue.aqTabCount({count:A.tasksCount},B);B.append("</span></a></span></div></header>");return C?"":B.toString()};jive.eae.actionqueue.aqTabCount=function(A,C){var B=C||new soy.StringBuilder();B.append('<span data-count="',soy.$$escapeHtml(A.count),'" class="j-js-update-indicator" ',(A.count==0)?'style="display:none;"':"",">",(A.count>50)?"(50+)":"("+soy.$$escapeHtml(A.count)+")","</span>");return C?"":B.toString()};jive.eae.actionqueue.actionsContent=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id="j-action-queue" class="j-aq-stream">');jive.eae.actionqueue.actionQueue(A,B);B.append("</div>");return C?"":B.toString()};jive.eae.actionqueue.jsI18nHelper=function(A,C){var B=C||new soy.StringBuilder();B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.key),[])));return C?"":B.toString()};jive.eae.actionqueue.actionQueue=function(A,C){var B=C||new soy.StringBuilder();if(A.actionQueue.actionQueueList&&A.actionQueue.actionQueueList.length>0){jive.eae.actionqueue.actionQueueList(A,B)}else{jive.eae.actionqueue.noActionQueueResults(A,B)}return C?"":B.toString()};jive.eae.actionqueue.actionQueueList=function(A,G){var C=G||new soy.StringBuilder();if(A.actionQueue.actionQueueList){var E=A.actionQueue.actionQueueList;var D=E.length;for(var F=0;F<D;F++){var B=E[F];jive.eae.actionqueue.actionQueueItemView({actionQueueItem:B,renderLocation:"actions"},C)}}C.append((A.actionQueue.hasMore)?"<a class='j-js-load-more j-act-append j-rc6' href='#'><span class=\"j-rc6 j-more-label\">"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.stream.load_more"),[]))+"</span></a>":"");return G?"":C.toString()};jive.eae.actionqueue.noActionQueueResults=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="j-js-aq-noresults j-aq-noresults"><span class="j-empty font-color-meta">',soy.$$escapeHtml(A.archived?jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.no_archived_actions"),[]):jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.no_pending_actions"),[])),"</span></div>");return C?"":B.toString()};jive.eae.actionqueue.actionQueueItemView=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id="article_actionqueue_',soy.$$escapeHtml(A.actionQueueItem.entryID),'" data-creationdate="',soy.$$escapeHtml(A.actionQueueItem.creationDate),'" class="j-aq-entry clearfix">');if(A.actionQueueItem.template){jive.shared.soy.render({templateName:A.actionQueueItem.template,data:(function(){var F={};var E=[["data",A.actionQueueItem.templateData],["creationTime",A.actionQueueItem.creationTime],["renderLocation",A.renderLocation]];for(var D=0;D<E.length;D+=1){F[E[D][0]]=E[D][1]}return F})(),failGracefully:false},B)}B.append("</div>");return C?"":B.toString()};jive.eae.actionqueue.excerptActionQueueItemView=function(B,G){var D=G||new soy.StringBuilder();if(B.actionQueueItem.user){jive.shared.displayutil.avatar(soy.$$augmentData(B.actionQueueItem.user,{size:46}),D)}else{if(B.actionQueueItem.nonUserSource){jive.eae.actionqueue.nonUserSourceImage({source:B.actionQueueItem.nonUserSource,size:"46"},D)}}jive.eae.actionqueue.actionQueueItemInfo(B,D);D.append('<div class="j-aq-actions clearfix">');var A=B.actionQueueItem.actions;var C=A.length;for(var F=0;F<C;F++){var E=A[F];jive.eae.actionqueue.actionQueueItemAction({action:E},D)}D.append("</div>");return G?"":D.toString()};jive.eae.actionqueue.nonUserSourceImage=function(A,C){var B=C||new soy.StringBuilder();B.append('<img class="jive-avatar" src="',jive.soy.func.normalizeUrl(window._jive_base_url,A.source.imgurl),'" width="',soy.$$escapeHtml(A.size),'" alt="" height="',soy.$$escapeHtml(A.size),'"/>');return C?"":B.toString()};jive.eae.actionqueue.actionQueueItemInfo=function(A,C){var B=C||new soy.StringBuilder();if(A.actionQueueItem.user){if(!A.actionQueueItem.user.anonymous){jive.shared.displayutil.userDisplayNameLink(A.actionQueueItem.user,B)}else{jive.shared.displayutil.renderGuestDisplayName({message:""},B)}}B.append(" ",soy.$$escapeHtml(A.actionQueueItem.message),'<a href="',jive.soy.func.normalizeUrl(window._jive_base_url,A.actionQueueItem.jiveObject.jiveObjectURL),'" class="title"><span class="jive-icon-med  ',soy.$$escapeHtml(A.actionQueueItem.jiveObject.jiveObjectCSS),'"></span>',soy.$$escapeHtml(A.actionQueueItem.jiveObject.renderedSubject),"</a>",(A.actionQueueItem.details)?"<div class='j-action-details clearfix'><a href='#' class='j-js-view-action-details'>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.details.more"),[]))+"</a></div>":"");return C?"":B.toString()};jive.eae.actionqueue.actionQueueItemAction=function(A,C){var B=C||new soy.StringBuilder();B.append((A.action.href)?'<a href="'+soy.$$escapeHtml(A.action.href)+'" class="j-btn-global j-action-button">'+soy.$$escapeHtml(A.action.name)+"</a>":'<a href="#" name="'+soy.$$escapeHtml(A.action.code)+'" class="j-btn-global j-action-button">'+soy.$$escapeHtml(A.action.name)+"</a>");return C?"":B.toString()};jive.eae.actionqueue.actionQueueItemActionResult=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="j-action-result">');if(A.data.templateData.template){jive.shared.soy.render({templateName:A.data.templateData.template,data:(function(){var F={};var E=[["data",A.data.templateData]];for(var D=0;D<E.length;D+=1){F[E[D][0]]=E[D][1]}return F})(),failGracefully:false},B)}B.append("</div>");return C?"":B.toString()};jive.eae.actionqueue.actionError=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="j-action-result" style="">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.error_performing_action"),[])),"</div>");return C?"":B.toString()};jive.eae.actionqueue.actionQueueItemDetails=function(A,C){var B=C||new soy.StringBuilder();B.append(soy.$$escapeHtml(A.actionQueueItem.details));return C?"":B.toString()};jive.eae.actionqueue.guestActions=function(A,C){var B=C||new soy.StringBuilder();B.append('<body class="j-body-inbox j-body-inbox-guest"><header class="j-page-header"><h1>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.header.text.actions"),[])),'</h1></header><div class="j-login-prompt">');jive.guest.page.whyLoginOrRegister({accountCreationEnabled:A.accountCreationEnabled,validationEnabled:A.validationEnabled,reasons:'<div class="j-rc5"><h3>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.action.guest.action"),[]))+'</h3><img src="'+soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"/images/apps/app-actions.png"))+'" class="j-aq-screenshot"/><ul class="j-simple-list"><li>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.action.guest.tips.actions"),[]))+"</li><li>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.action.guest.tips.notifications"),[]))+"</li><li>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.action.guest.tips.tasks"),[]))+"</li><li>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.action.guest.tips.everything"),[]))+"</li></ul></div>"},B);B.append("</div></body>");return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.actionqueue=="undefined"){jive.eae.actionqueue={}}if(typeof jive.eae.actionqueue.item=="undefined"){jive.eae.actionqueue.item={}}jive.eae.actionqueue.item.socialGroupJoinRequest=function(A,G){var B=G||new soy.StringBuilder();B.append('<div class="j-aq-data j-aq-av clearfix">');if(A.data.user){jive.shared.displayutil.avatar(soy.$$augmentData(A.data.user,{size:A.renderLocation=="actions"?44:32,hideLink:A.renderLocation=="actions"?false:true,currentUserPartner:A.data.currentUserPartner}),B)}B.append('<h4 tabindex="-1" class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.request.label"),[])),"</h4><p>");jive.eae.actionqueue.item.actionQueueItemInfo(A,B);B.append('</p></div><div class="j-act-meta font-color-meta-light">',(A.creationTime)?"<strong>"+soy.$$escapeHtml(A.creationTime)+"</strong>":"","</div>");if(A.renderLocation=="actions"){B.append('<div class="j-aq-actions clearfix">');if(A.data.actionable){var D=A.data.actions;var E=D.length;for(var F=0;F<E;F++){var C=D[F];jive.eae.actionqueue.actionQueueItemAction({action:C},B)}}else{if(A.data.actionTakenKey){B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.actionTakenKey),[])))}}B.append("</div>")}return G?"":B.toString()};jive.eae.actionqueue.item.socialGroupJoinRequestResult=function(A,C){var B=C||new soy.StringBuilder();if(A.data.user){if(!A.data.user.anonymous){if(A.renderLocation=="actions"){jive.shared.displayutil.userDisplayNameLink(A.data.user,B)}else{jive.shared.displayutil.userDisplayName(A.data.user,B)}}else{jive.shared.displayutil.renderGuestDisplayName({message:""},B)}}B.append(" ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.messageKey),[])),' <strong><a href="',jive.soy.func.normalizeUrl(window._jive_base_url,A.data.objData.href),'" class="title">');if(A.data.objData.iconElement){jive.shared.displayutil.renderIconElement({icon:A.data.objData.iconElement},B)}else{B.append('<span class="',soy.$$escapeHtmlAttribute(A.data.objData.iconCSS),'"></span>')}B.append(soy.$$escapeHtml(A.data.objData.displayName),"</a></strong>");return C?"":B.toString()};jive.eae.actionqueue.item.invitationUserRelSuggestion=function(G,E){var C=E||new soy.StringBuilder();C.append('<div class="j-aq-data j-aq-av user-approved clearfix">');if(G.data.targetUser){jive.shared.displayutil.avatar(soy.$$augmentData(G.data.targetUser,{size:G.renderLocation=="actions"?44:32,hideLink:G.renderLocation=="actions"?false:true,currentUserPartner:G.data.currentUserPartner}),C)}C.append('<h4 tabindex="-1" class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.relationship.label"),[])),"</h4><p>");var F=new soy.StringBuilder();if(G.renderLocation=="actions"){jive.shared.displayutil.userDisplayNameLink(G.data.targetUser,F)}else{jive.shared.displayutil.userDisplayName(G.data.targetUser,F)}jive.shared.soy.i18nHelper({i18nKey:G.data.userIsInviter?"eae.inbox.invite.rel.inviter":"eae.inbox.invite.rel.invitee",arg0:F.toString(),noAutoEscape:true},C);C.append("</p>");jive.eae.actionqueue.item.notifiedUsers(G,C);C.append('</div><div class="j-act-meta font-color-meta-light">',(G.creationTime)?"<strong>"+soy.$$escapeHtml(G.creationTime)+"</strong>":"","</div>");if(G.renderLocation=="actions"){C.append('<div class="j-aq-actions clearfix">');if(G.data.actionable){var H=G.data.actions;var B=H.length;for(var D=0;D<B;D++){var I=H[D];jive.eae.actionqueue.actionQueueItemAction({action:I},C)}}else{if(G.data.actionTakenKey){C.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(G.data.actionTakenKey),[])))}}if(G.data.isFollowing&&G.data.actionable){C.append('<div class="js-follow-user-link j-action-following clearfix" data-userid="',soy.$$escapeHtmlAttribute(G.data.targetUser.id),'"  data-streamsassoc="',soy.$$escapeHtmlAttribute(G.data.streamsAssociatedCount),'" data-bidirectional="false" data-displayname="',soy.$$escapeHtmlAttribute(G.data.user.displayName),'" data-approvals-enabled="',soy.$$escapeHtmlAttribute(G.data.approvalsEnabled),'" style="float:left" aria-live="polite" aria-atomic="true"><a href="#" class="js-follow j-action-button j-btn-global" ',(G.data.isFollowing=="true"||G.data.isPendingApproval=="true")?'style="display:none"':"","><span>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("profile.friends.startfollowing.button"),[])),' </span><span class="jive-icon-med jive-icon-activity-pulse-active j-instreamicon"></span></a><span class="js-pending j-action-button j-btn-global j-disabled" ',(G.data.isPendingApproval=="false")?'style="display:none"':"","><span>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("profile.follow.pendingapproval.text"),[])),'</span></span><a href="#" class="j-following js-following j-action-button j-btn-global" ',(G.data.isFollowing=="false")?'style="display:none"':"","><span>");var A=new soy.StringBuilder();jive.people.profile.streamsAssociatedCount({count:G.data.streamsAssociatedCount,renderLocation:G.renderLocation},A);jive.shared.soy.i18nHelper({i18nKey:"profile.friends.following.link",arg0:A.toString(),noAutoEscape:true},C);C.append("</span></a></div>")}C.append("</div>")}return E?"":C.toString()};jive.eae.actionqueue.item.userRelApprovalRequest=function(G,D){var C=D||new soy.StringBuilder();C.append('<div class="j-aq-data j-aq-av user-approved clearfix">');if(G.data.user){jive.shared.displayutil.avatar(soy.$$augmentData(G.data.user,{size:G.renderLocation=="actions"?44:32,hideLink:G.renderLocation=="actions"?false:true,currentUserPartner:G.data.currentUserPartner}),C)}C.append('<h4 tabindex="-1" class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.relationship.label"),[])),"</h4><p>");var E=new soy.StringBuilder();if(G.data.isCurrentUser){E.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.rel.you"),[])))}else{if(!G.data.user.anonymous){if(G.renderLocation=="actions"){jive.shared.displayutil.userDisplayNameLink(G.data.user,E)}else{jive.shared.displayutil.userDisplayName(G.data.user,E)}}else{jive.shared.displayutil.renderGuestDisplayName({message:""},E)}}var I=new soy.StringBuilder();if(G.data.isRelatedUser){I.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.rel.apprv.you"),[])))}else{if(!G.data.relatedUser.anonymous){if(G.renderLocation=="actions"){jive.shared.displayutil.userDisplayNameLink(G.data.relatedUser,I)}else{jive.shared.displayutil.userDisplayName(G.data.relatedUser,I)}}else{jive.shared.displayutil.renderGuestDisplayName({message:""},I)}}jive.shared.soy.i18nHelper({i18nKey:"eae.inbox.rel.request_connection",arg0:E.toString(),arg1:I.toString(),arg2:soy.$$escapeHtml(G.data.label),noAutoEscape:true},C);C.append("</p>",(G.data.requestMessage)?'<p class="j-aq-text j-reg-request">&#147;'+soy.$$escapeHtml(G.data.requestMessage)+"&#148;</p>":"");jive.eae.actionqueue.item.notifiedUsers(G,C);C.append('</div><div class="j-act-meta font-color-meta-light">',(G.creationTime)?"<strong>"+soy.$$escapeHtml(G.creationTime)+"</strong>":"","</div>");if(G.renderLocation=="actions"){C.append('<div class="j-aq-actions clearfix">');if(G.data.actionable){var F=G.data.actions;var A=F.length;for(var B=0;B<A;B++){var H=F[B];jive.eae.actionqueue.actionQueueItemAction({action:H},C)}}else{if(G.data.actionTakenKey){C.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(G.data.actionTakenKey),[])))}}C.append("</div>")}return D?"":C.toString()};jive.eae.actionqueue.item.userRelApprovalRequestResult=function(A,F){var C=F||new soy.StringBuilder();var D=new soy.StringBuilder();if(A.data.isCurrentUser){D.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.rel.you"),[])))}else{if(!A.data.user.anonymous){if(A.renderLocation=="actions"){jive.shared.displayutil.userDisplayNameLink(A.data.user,D)}else{jive.shared.displayutil.userDisplayName(A.data.user,D)}}else{jive.shared.displayutil.renderGuestDisplayName({message:""},D)}}var E=new soy.StringBuilder();if(A.data.isRelatedUser){E.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.rel.apprv.your"),[])))}else{var B=new soy.StringBuilder();if(!A.data.relatedUser.anonymous){if(A.renderLocation=="actions"){jive.shared.displayutil.userDisplayNameLink(A.data.relatedUser,B)}else{jive.shared.displayutil.userDisplayName(A.data.relatedUser,B)}}else{jive.shared.displayutil.renderGuestDisplayName({message:""},B)}jive.shared.soy.i18nHelper({i18nKey:"eae.inbox.rel.user.plural",arg0:B.toString(),noAutoEscape:true},E)}jive.shared.soy.i18nHelper({i18nKey:soy.$$escapeHtml(A.data.messageKey),arg0:D.toString(),arg1:(A.data.isCurrentUser)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.rel.have"),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.rel.has"),[])),arg2:E.toString(),arg3:soy.$$escapeHtml(A.data.label),noAutoEscape:true},C);return F?"":C.toString()};jive.eae.actionqueue.item.userRelNotificationRequest=function(F,D){var A=D||new soy.StringBuilder();A.append('<div class="j-aq-data j-aq-av user-rel-request clearfix">');if(F.data.user){jive.shared.displayutil.avatar(soy.$$augmentData(F.data.user,{size:F.renderLocation=="actions"?44:32,hideLink:F.renderLocation=="actions"?false:true,currentUserPartner:F.data.currentUserPartner}),A)}A.append('<h4 tabindex="-1" class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.relationship.label"),[])),"</h4><p>");var J=new soy.StringBuilder();if(F.data.isCurrentUser){J.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.rel.you"),[])))}else{if(!F.data.user.anonymous){if(F.renderLocation=="actions"){jive.shared.displayutil.userDisplayNameLink(F.data.user,J)}else{jive.shared.displayutil.userDisplayName(F.data.user,J)}}else{jive.shared.displayutil.renderGuestDisplayName({message:""},J)}}var I=new soy.StringBuilder();if(F.data.isRelatedUser){I.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.rel.apprv.your"),[])))}else{var G=new soy.StringBuilder();if(!F.data.relatedUser.anonymous){jive.shared.displayutil.userDisplayNameLink(F.data.relatedUser,G)}else{jive.shared.displayutil.renderGuestDisplayName({message:""},G)}jive.shared.soy.i18nHelper({i18nKey:"eae.inbox.rel.user.plural",arg0:G.toString(),noAutoEscape:true},I)}jive.shared.soy.i18nHelper({i18nKey:soy.$$escapeHtml(F.data.messageKey),arg0:J.toString(),arg1:(F.data.isCurrentUser)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.rel.have"),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.rel.has"),[])),arg2:I.toString(),arg3:soy.$$escapeHtml(F.data.label),noAutoEscape:true},A);A.append("</p>");jive.eae.actionqueue.item.notifiedUsers(F,A);A.append('</div><div class="j-act-meta font-color-meta-light">',(F.creationTime)?"<strong>"+soy.$$escapeHtml(F.creationTime)+"</strong>":"","</div>");if(F.renderLocation=="actions"){A.append('<div class="j-aq-actions clearfix">');if(F.data.actionable){var H=F.data.actions;var C=H.length;for(var E=0;E<C;E++){var K=H[E];jive.eae.actionqueue.actionQueueItemAction({action:K},A)}}else{if(F.data.actionTakenKey){A.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(F.data.actionTakenKey),[])))}}if(F.data.isFollowing&&F.data.actionable){A.append('<div class="js-follow-user-link j-action-following clearfix" data-userid="',soy.$$escapeHtmlAttribute(F.data.user.id),'"  data-streamsassoc="',soy.$$escapeHtmlAttribute(F.data.streamsAssociatedCount),'" data-bidirectional="false" data-displayname="',soy.$$escapeHtmlAttribute(F.data.user.displayName),'" data-approvals-enabled="',soy.$$escapeHtmlAttribute(F.data.approvalsEnabled),'" style="float:left" aria-live="polite" aria-atomic="true"><a href="#" class="js-follow j-action-button j-btn-global" ',(F.data.isFollowing=="true"||F.data.isPendingApproval=="true")?'style="display:none"':"","><span>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("profile.friends.startfollowing.button"),[])),' </span><span class="jive-icon-med jive-icon-activity-pulse-active j-instreamicon"></span></a><span class="js-pending j-action-button j-btn-global j-disabled" ',(F.data.isPendingApproval=="false")?'style="display:none"':"","><span>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("profile.follow.pendingapproval.text"),[])),'</span></span><a href="#" class="j-following js-following j-action-button j-btn-global" ',(F.data.isFollowing=="false")?'style="display:none"':"","><span>");var B=new soy.StringBuilder();jive.people.profile.streamsAssociatedCount({count:F.data.streamsAssociatedCount,renderLocation:F.renderLocation},B);jive.shared.soy.i18nHelper({i18nKey:"profile.friends.following.link",arg0:B.toString(),noAutoEscape:true},A);A.append("</span></a></div>")}A.append("</div>")}return D?"":A.toString()};jive.eae.actionqueue.item.socialGroupJoinNotificationRequest=function(B,G){var C=G||new soy.StringBuilder();C.append('<div class="j-aq-data sg-join-reqest clearfix">',(B.renderLocation=="actions")?'<span class="jive-icon-huge jive-icon-gear"></span>':'<span class="jive-icon-big jive-icon-gear acticon"></span>','<h4 tabindex="-1" class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.system.label"),[])),"</h4><p>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(B.data.messageKey),[])),' <strong><a href="',jive.soy.func.normalizeUrl(window._jive_base_url,B.data.objData.href),'" class="title">');if(B.data.objData.iconElement){jive.shared.displayutil.renderIconElement({icon:B.data.objData.iconElement},C)}else{C.append('<span class="',soy.$$escapeHtmlAttribute(B.data.objData.iconCSS),'"></span>')}C.append(soy.$$escapeHtml(B.data.objData.displayName),'</a></strong></p></div><div class="j-act-meta font-color-meta-light">',(B.creationTime)?"<strong>"+soy.$$escapeHtml(B.creationTime)+"</strong>":"","</div>");if(B.renderLocation=="actions"){C.append('<div class="j-aq-actions clearfix">');if(B.data.actionable){var F=B.data.actions;var A=F.length;for(var E=0;E<A;E++){var D=F[E];jive.eae.actionqueue.actionQueueItemAction({action:D},C)}}else{if(B.data.actionTakenKey){C.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(B.data.actionTakenKey),[])))}}C.append("</div>")}return G?"":C.toString()};jive.eae.actionqueue.item.invitationNotificationRequest=function(B,G){var C=G||new soy.StringBuilder();C.append('<div class="j-aq-data j-aq-av invite-request clearfix">');if(B.data.inviter){jive.shared.displayutil.avatar(soy.$$augmentData(B.data.inviter,{size:B.renderLocation=="actions"||B.data.overrideFadeout?44:32,hideLink:B.renderLocation=="actions"||B.data.overrideFadeout?false:true,currentUserPartner:B.data.currentUserPartner}),C)}C.append('<h4 tabindex="-1" class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.invite.label"),[])),"</h4><p>");if(!B.data.inviter.anonymous){if(B.renderLocation=="actions"||B.data.overrideFadeout){jive.shared.displayutil.userDisplayNameLink(B.data.inviter,C)}else{jive.shared.displayutil.userDisplayName(B.data.inviter,C)}}else{jive.shared.displayutil.renderGuestDisplayName({message:""},C)}C.append(" ",soy.$$escapeHtml(B.data.inviteText),' <strong><a href="',jive.soy.func.normalizeUrl(window._jive_base_url,B.data.objData.href),'" class="title">');if(B.data.objData.iconElement){jive.shared.displayutil.renderIconElement({icon:B.data.objData.iconElement},C)}else{C.append('<span class="',soy.$$escapeHtmlAttribute(B.data.objData.iconCSS),'"></span>')}C.append(soy.$$escapeHtml(B.data.objData.displayName),'</a></strong></p></div><div class="j-act-meta font-color-meta-light">',(B.creationTime)?"<strong>"+soy.$$escapeHtml(B.creationTime)+"</strong>":(B.data.overrideFadeout)?"<strong>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.less_than_a_minute_ago"),[]))+"</strong>":"","</div>");if(B.renderLocation=="actions"||B.data.overrideFadeout){C.append('<div class="j-aq-actions clearfix">');if(B.data.actionable){var F=B.data.actions;var A=F.length;for(var E=0;E<A;E++){var D=F[E];jive.eae.actionqueue.actionQueueItemAction({action:D},C)}}else{if(B.data.actionTakenKey){C.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(B.data.actionTakenKey),[])))}}C.append("</div>")}return G?"":C.toString()};jive.eae.actionqueue.item.documentApprovalRequest=function(B,G){var D=G||new soy.StringBuilder();D.append('<div class="j-aq-data doc-approved clearfix">',(B.renderLocation=="actions")?'<span class="jive-icon-huge jive-icon-gear"></span>':'<span class="jive-icon-big jive-icon-gear acticon"></span>','<h4 tabindex="-1" class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.request.label"),[])),"</h4><p>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.doc.approval.request"),[])),' <strong><a href="',jive.soy.func.normalizeUrl(window._jive_base_url,B.data.objData.href),'" class="title">');if(B.data.objData.iconElement){jive.shared.displayutil.renderIconElement({icon:B.data.objData.iconElement},D)}else{D.append('<span class="',soy.$$escapeHtmlAttribute(B.data.objData.iconCSS),'"></span>')}D.append(soy.$$escapeHtml(B.data.objData.displayName),'</a></strong></p></div><div class="j-act-meta font-color-meta-light">',(B.creationTime)?"<strong>"+soy.$$escapeHtml(B.creationTime)+"</strong>":"","</div>");if(B.renderLocation=="actions"){D.append('<div class="j-aq-actions clearfix">');if(B.data.actionable){var A=B.data.actions;var C=A.length;for(var F=0;F<C;F++){var E=A[F];jive.eae.actionqueue.actionQueueItemAction({action:E},D)}}else{if(B.data.actionTakenKey){D.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(B.data.actionTakenKey),[])))}}D.append("</div>")}return G?"":D.toString()};jive.eae.actionqueue.item.documentApprovalNotificationRequest=function(A,H){var C=H||new soy.StringBuilder();C.append('<div class="j-aq-data doc-request-approval clearfix">',(A.renderLocation=="actions")?'<span class="jive-icon-huge jive-icon-gear"></span>':'<span class="jive-icon-big jive-icon-gear acticon"></span>','<h4 tabindex="-1" class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.system.label"),[])),"</h4><p>");if(A.data.approver){var E=new soy.StringBuilder();if(A.renderLocation=="actions"){jive.shared.displayutil.userDisplayNameLink(A.data.approver,E)}else{jive.shared.displayutil.userDisplayName(A.data.approver,E)}jive.shared.soy.i18nHelper({i18nKey:A.data.messageKey,arg0:E.toString(),noAutoEscape:true},C);C.append(":")}else{C.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.messageKey),[])),":")}C.append(' <a href="',jive.soy.func.normalizeUrl(window._jive_base_url,A.data.objData.href),'" class="title">');if(A.data.objData.iconElement){jive.shared.displayutil.renderIconElement({icon:A.data.objData.iconElement},C)}else{C.append('<span class="',soy.$$escapeHtmlAttribute(A.data.objData.iconCSS),'"></span>')}C.append(soy.$$escapeHtml(A.data.objData.displayName),"</a></p>",(A.data.rejectionNote)?'<p class="j-aq-text j-aq-message">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.reason"),[]))+": "+soy.$$escapeHtml(A.data.rejectionNote)+"</p>":"",(A.data.currentlyRejected)?"<p>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.currentlyRejected),[]))+"</p>":"",'</div><div class="j-act-meta font-color-meta-light">',(A.creationTime)?"<strong>"+soy.$$escapeHtml(A.creationTime)+"</strong>":"","</div>");if(A.renderLocation=="actions"){C.append('<div class="j-aq-actions clearfix">');if(A.data.actionable){var B=A.data.actions;var D=B.length;for(var G=0;G<D;G++){var F=B[G];jive.eae.actionqueue.actionQueueItemAction({action:F},C)}}else{if(A.data.actionTakenKey){C.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.actionTakenKey),[])))}}C.append("</div>")}return H?"":C.toString()};jive.eae.actionqueue.item.externalApprovalRequest=function(A,G){var C=G||new soy.StringBuilder();C.append('<div class="j-aq-data ext-request-approval clearfix">',(A.renderLocation=="actions")?'<span class="jive-icon-huge jive-icon-gear"></span>':'<span class="jive-icon-big jive-icon-gear acticon"></span>','<h4 tabindex="-1" class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.system.label"),[])),"</h4><p>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.doc.approval.request"),[])),' <strong><a href="',jive.soy.func.normalizeUrl(window._jive_base_url,A.data.objData.href),'" class="title">');if(A.data.objData.iconElement){jive.shared.displayutil.renderIconElement({icon:A.data.objData.iconElement},C)}else{C.append('<span class="',soy.$$escapeHtmlAttribute(A.data.objData.iconCSS),'"></span>')}C.append(soy.$$escapeHtml(A.data.objData.displayName),'</a></strong></p></div><div class="j-act-meta font-color-meta-light">',(A.creationTime)?"<strong>"+soy.$$escapeHtml(A.creationTime)+"</strong>":"","</div>");if(A.renderLocation=="actions"){C.append('<div class="j-aq-actions clearfix">');if(A.data.actionable){var B=A.data.actions;var D=B.length;for(var F=0;F<D;F++){var E=B[F];jive.eae.actionqueue.actionQueueItemAction({action:E},C)}}else{if(A.data.actionTakenKey){C.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.actionTakenKey),[])))}}C.append("</div>")}return G?"":C.toString()};jive.eae.actionqueue.item.externalNotificationRequest=function(A,G){var C=G||new soy.StringBuilder();C.append('<div class="j-aq-data ext-request clearfix">',(A.renderLocation=="actions")?'<span class="jive-icon-huge jive-icon-gear"></span>':'<span class="jive-icon-big jive-icon-gear acticon"></span>','<h4 tabindex="-1" class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.system.label"),[])),"</h4><p>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.messageKey),[])),': <strong><a href="',jive.soy.func.normalizeUrl(window._jive_base_url,A.data.objData.href),'" class="title">');if(A.data.objData.iconElement){jive.shared.displayutil.renderIconElement({icon:A.data.objData.iconElement},C)}else{C.append('<span class="',soy.$$escapeHtmlAttribute(A.data.objData.iconCSS),'"></span>')}C.append(soy.$$escapeHtml(A.data.objData.displayName),"</a></strong></p>",(A.data.rejectionNote)?'<p class="j-aq-text j-aq-message">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.reason"),[]))+": "+soy.$$escapeHtml(A.data.rejectionNote)+"</p>":"",'</div><div class="j-act-meta font-color-meta-light">',(A.creationTime)?"<strong>"+soy.$$escapeHtml(A.creationTime)+"</strong>":"","</div>");if(A.renderLocation=="actions"){C.append('<div class="j-aq-actions clearfix">');if(A.data.actionable){var F=A.data.actions;var B=F.length;for(var E=0;E<B;E++){var D=F[E];jive.eae.actionqueue.actionQueueItemAction({action:D},C)}}else{if(A.data.actionTakenKey){C.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.actionTakenKey),[])))}}C.append("</div>")}return G?"":C.toString()};jive.eae.actionqueue.item.moderatedContentNotificationRequest=function(A,H){var C=H||new soy.StringBuilder();C.append('<div class="j-aq-data mod-request clearfix">',(A.renderLocation=="actions")?'<span class="jive-icon-huge jive-icon-moderation"></span>':'<span class="jive-icon-big jive-icon-moderation acticon"></span>','<h4 tabindex="-1" class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.moderation.label"),[])),"</h4><p>");if(A.data.commentMessageKey){var B=new soy.StringBuilder('<strong><a href="',jive.soy.func.normalizeUrl(window._jive_base_url,A.data.objData.href),'" class="title">');if(A.data.objData.iconElement){jive.shared.displayutil.renderIconElement({icon:A.data.objData.iconElement},B)}else{B.append('<span class="',soy.$$escapeHtml(A.data.objData.iconCSS),'"></span>')}B.append(soy.$$escapeHtml(A.data.objData.displayName),"</a></strong>");jive.shared.soy.i18nHelper({i18nKey:soy.$$escapeHtml(A.data.commentMessageKey),arg0:B.toString(),noAutoEscape:true},C)}else{C.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.messageKey),[])),': <strong><a href="',jive.soy.func.normalizeUrl(window._jive_base_url,A.data.objData.href),'" class="title">');if(A.data.objData.iconElement){jive.shared.displayutil.renderIconElement({icon:A.data.objData.iconElement},C)}else{C.append('<span class="',soy.$$escapeHtmlAttribute(A.data.objData.iconCSS),'"></span>')}C.append(soy.$$escapeHtml(A.data.objData.displayName),"</a></strong>")}C.append("</p>",(A.data.responseMessage)?'<p class="j-aq-text j-aq-message">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.reason"),[]))+": "+soy.$$escapeHtml(A.data.responseMessage)+"</p>":"",'</div><div class="j-act-meta font-color-meta-light">',(A.creationTime)?"<strong>"+soy.$$escapeHtml(A.creationTime)+"</strong>":"","</div>");if(A.renderLocation=="actions"){C.append('<div class="j-aq-actions clearfix">');if(A.data.actionable){var D=A.data.actions;var E=D.length;for(var G=0;G<E;G++){var F=D[G];jive.eae.actionqueue.actionQueueItemAction({action:F},C)}}else{if(A.data.actionTakenKey){C.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.actionTakenKey),[])))}}C.append("</div>")}return H?"":C.toString()};jive.eae.actionqueue.item.collaboratorNotificationRequest=function(A,G){var D=G||new soy.StringBuilder();D.append('<div class="j-aq-data j-collab-request clearfix">',(A.renderLocation=="actions")?'<span class="jive-icon-huge jive-icon-gear"></span>':'<span class="jive-icon-big jive-icon-gear acticon"></span>','<h4 tabindex="-1" class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.system.label"),[])),"</h4><p>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.messageKey),[])),': <strong><a href="',jive.soy.func.normalizeUrl(window._jive_base_url,A.data.objData.href),'" class="title">');if(A.data.objData.iconElement){jive.shared.displayutil.renderIconElement({icon:A.data.objData.iconElement},D)}else{D.append('<span class="',soy.$$escapeHtmlAttribute(A.data.objData.iconCSS),'"></span>')}D.append(soy.$$escapeHtml(A.data.objData.displayName),'</a></strong></p></div><div class="j-act-meta font-color-meta-light">',(A.creationTime)?"<strong>"+soy.$$escapeHtml(A.creationTime)+"</strong>":"","</div>");if(A.renderLocation=="actions"){D.append('<div class="j-aq-actions clearfix">');if(A.data.actionable){var E=A.data.actions;var F=E.length;for(var C=0;C<F;C++){var B=E[C];jive.eae.actionqueue.actionQueueItemAction({action:B},D)}}else{if(A.data.actionTakenKey){D.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.actionTakenKey),[])))}}D.append("</div>")}return G?"":D.toString()};jive.eae.actionqueue.item.pendingTaskNotification=function(A,G){var B=G||new soy.StringBuilder();B.append('<div class="j-aq-data task-pending clearfix"><h4 tabindex="-1" class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.task.label"),[])),"</h4><p>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.messageKey),[])),': <strong><a href="',jive.soy.func.normalizeUrl(window._jive_base_url,A.data.objData.href),'" class="title">');if(A.data.objData.iconElement){jive.shared.displayutil.renderIconElement({icon:A.data.objData.iconElement},B)}else{B.append('<span class="',soy.$$escapeHtmlAttribute(A.data.objData.iconCSS),'"></span>')}B.append(soy.$$escapeHtml(A.data.objData.displayName),'</a></strong></p></div><div class="j-act-meta font-color-meta-light">',(A.creationTime)?"<strong>"+soy.$$escapeHtml(A.creationTime)+"</strong>":"","</div>");if(A.renderLocation=="actions"){B.append('<div class="j-aq-actions clearfix">');if(A.data.actionable){var C=A.data.actions;var D=C.length;for(var F=0;F<D;F++){var E=C[F];jive.eae.actionqueue.actionQueueItemAction({action:E},B)}}else{if(A.data.actionTakenKey){B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.actionTakenKey),[])))}}B.append("</div>")}return G?"":B.toString()};jive.eae.actionqueue.item.userRegistrationApproval=function(G,E){var B=E||new soy.StringBuilder();B.append('<div class="j-aq-data j-aq-av user-approved clearfix">');if(G.data.user){jive.shared.displayutil.avatar(soy.$$augmentData(G.data.user,{size:G.renderLocation=="actions"?44:32,hideLink:G.renderLocation=="actions"?false:true,currentUserPartner:G.data.currentUserPartner}),B)}B.append('<h4 tabindex="-1" class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.system.label"),[])),"</h4><p>");var F=new soy.StringBuilder();if(!G.data.user.anonymous){if(G.renderLocation=="actions"){jive.shared.displayutil.userDisplayNameLink(G.data.user,F)}else{jive.shared.displayutil.userDisplayName(G.data.user,F)}}else{jive.shared.displayutil.renderGuestDisplayName({message:""},F)}var A=new soy.StringBuilder();if(!G.data.user.anonymous){if(G.renderLocation=="actions"){jive.shared.displayutil.userDisplayNameLink(G.data.user,A)}else{jive.shared.displayutil.userDisplayName(G.data.user,A)}}else{jive.shared.displayutil.renderGuestDisplayName({message:""},A)}jive.shared.soy.i18nHelper({i18nKey:"eae.inbox.user.reg.approval_request",arg0:F.toString(),arg1:A.toString(),noAutoEscape:true},B);B.append("</p>",(G.data.requestMessage)?'<p class="j-aq-text j-aq-message">&#147;'+soy.$$escapeHtml(G.data.requestMessage)+"&#148;</p>":"");jive.eae.actionqueue.item.notifiedUsers(G,B);B.append('</div><div class="j-act-meta font-color-meta-light">',(G.creationTime)?"<strong>"+soy.$$escapeHtml(G.creationTime)+"</strong>":"","</div>");if(G.renderLocation=="actions"){B.append('<div class="j-aq-actions clearfix">');if(G.data.actionable){var H=G.data.actions;var C=H.length;for(var D=0;D<C;D++){var I=H[D];jive.eae.actionqueue.actionQueueItemAction({action:I},B)}}else{if(G.data.actionTakenKey){B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(G.data.actionTakenKey),[])))}}B.append("</div>")}return E?"":B.toString()};jive.eae.actionqueue.item.assignedTaskNotification=function(A,G){var B=G||new soy.StringBuilder();B.append('<div class="j-aq-data j-aq-av task-assigned clearfix">');if(A.data.assignor){jive.shared.displayutil.avatar(soy.$$augmentData(A.data.assignor,{size:A.renderLocation=="actions"?44:32,hideLink:A.renderLocation=="actions"?false:true,currentUserPartner:A.data.currentUserPartner}),B)}B.append('<h4 tabindex="-1" class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.task.label"),[])),"</h4><p>");if(!A.data.assignor.anonymous){if(A.renderLocation=="actions"){jive.shared.displayutil.userDisplayNameLink(A.data.assignor,B)}else{jive.shared.displayutil.userDisplayName(A.data.assignor,B)}}else{jive.shared.displayutil.renderGuestDisplayName({message:""},B)}B.append(" ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.messageKey),[])),': <strong><a href="',jive.soy.func.normalizeUrl(window._jive_base_url,A.data.objData.href),'" class="title">');if(A.data.objData.iconElement){jive.shared.displayutil.renderIconElement({icon:A.data.objData.iconElement},B)}else{B.append('<span class="',soy.$$escapeHtmlAttribute(A.data.objData.iconCSS),'"></span>')}B.append(soy.$$escapeHtml(A.data.objData.displayName),'</a></strong></p></div><div class="j-act-meta font-color-meta-light">',(A.creationTime)?"<strong>"+soy.$$escapeHtml(A.creationTime)+"</strong>":"","</div>");if(A.renderLocation=="actions"){B.append('<div class="j-aq-actions clearfix">');if(A.data.actionable){var C=A.data.actions;var D=C.length;for(var F=0;F<D;F++){var E=C[F];jive.eae.actionqueue.actionQueueItemAction({action:E},B)}}else{if(A.data.actionTakenKey){B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.actionTakenKey),[])))}}B.append("</div>")}return G?"":B.toString()};jive.eae.actionqueue.item.upgradeEmailPreferences=function(A,G){var B=G||new soy.StringBuilder();B.append('<div class="j-aq-data j-act-emailprefs clearfix">',(A.renderLocation=="actions")?'<span class="jive-icon-huge jive-icon-gear"></span>':'<span class="jive-icon-big jive-icon-gear acticon"></span>',"<h2>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("settings.email.pref.aq.title"),[])),"</h2><p>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("settings.email.pref.aq.desc"),[])),'</p><h4 tabindex="-1" class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("settings.email.pref.aq.new.title"),[])),soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.colon"),[])),"</h4><p>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("settings.email.pref.aq.new.desc"),[])),'</p><h4 tabindex="-1" class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("settings.email.pref.aq.old.title"),[])),soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.colon"),[])),"</h4><p>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("settings.email.pref.aq.old.desc"),[])),'</p><p class="j-aq-text"><strong><a href="',jive.soy.func.normalizeUrl(window._jive_base_url,"/user-preferences!input.jspa"),'" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("settings.email.pref.aq.edit.lnk"),[])),'">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("settings.email.pref.aq.edit.lnk"),[])),'</a></strong></p></div><div class="j-act-meta font-color-meta-light">',(A.creationTime)?"<strong>"+soy.$$escapeHtml(A.creationTime)+"</strong>":"","</div>");if(A.renderLocation=="actions"){B.append('<div class="j-aq-actions clearfix">');if(A.data.actionable){var F=A.data.actions;var E=F.length;for(var C=0;C<E;C++){var D=F[C];jive.eae.actionqueue.actionQueueItemAction({action:D},B)}}else{if(A.data.actionTakenKey){B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.actionTakenKey),[])))}}B.append("</div>")}return G?"":B.toString()};jive.eae.actionqueue.item.upgradeEmailPreferencesResult=function(A,C){var B=C||new soy.StringBuilder();jive.shared.soy.i18nHelper({i18nKey:A.data.messageKey,noAutoEscape:true,arg0:'<strong><a href="'+jive.soy.func.normalizeUrl(window._jive_base_url,"/user-preferences!input.jspa")+'">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("settings.email.pref.aq.customize"),[]))+"</a></strong>"},B);return C?"":B.toString()};jive.eae.actionqueue.item.actionQueueItemInfo=function(A,C){var B=C||new soy.StringBuilder();if(A.data.user){if(!A.data.user.anonymous){if(A.renderLocation=="actions"){jive.shared.displayutil.userDisplayNameLink(A.data.user,B)}else{jive.shared.displayutil.userDisplayName(A.data.user,B)}}else{jive.shared.displayutil.renderGuestDisplayName({message:""},B)}}B.append(" ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.sg.join.request"),[])),' <strong><a href="',jive.soy.func.normalizeUrl(window._jive_base_url,A.data.objData.href),'" class="j-jq-obj title">');if(A.data.objData.iconElement){jive.shared.displayutil.renderIconElement({icon:A.data.objData.iconElement},B)}else{B.append('<span class="',soy.$$escapeHtmlAttribute(A.data.objData.iconCSS),'"></span>')}B.append(soy.$$escapeHtml(A.data.objData.displayName),"</a></strong>");jive.eae.actionqueue.item.notifiedUsers(A,B);return C?"":B.toString()};jive.eae.actionqueue.item.notifiedUsers=function(A,G){var B=G||new soy.StringBuilder();if(A.data.notifiers.length>0){B.append('<p class="j-aq-text j-jq-users">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.also.seen.by"),[])),": ");var F=A.data.notifiers;var C=F.length;for(var E=0;E<C;E++){var D=F[E];if(A.renderLocation=="actions"){jive.shared.displayutil.userDisplayNameLink(D,B)}else{jive.shared.displayutil.userDisplayName(D,B)}B.append((!(E==C-1))?", ":"")}B.append("</p>")}return G?"":B.toString()};jive.eae.actionqueue.item.widgetsDeprecatedNotification=function(A,G){var B=G||new soy.StringBuilder();B.append('<div class="j-aq-data widgets-deprecated clearfix">',(A.renderLocation=="actions")?'<span class="jive-icon-huge jive-icon-gear"></span>':'<span class="jive-icon-big jive-icon-gear acticon"></span>','<h4 tabindex="-1" class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.system.label"),[])),"</h4><p>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("widget.deprecated.notification"),[])),'</p><p class="j-aq-text"><strong><a href="',jive.soy.func.normalizeUrl(window._jive_base_url,A.data.url),'">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("widget.gotoyourplaces.link"),[])),'</a></strong></p></div><div class="j-act-meta font-color-meta-light">',(A.creationTime)?"<strong>"+soy.$$escapeHtml(A.creationTime)+"</strong>":"","</div>");if(A.renderLocation=="actions"){B.append('<div class="j-aq-actions clearfix">');if(A.data.actionable){var F=A.data.actions;var E=F.length;for(var C=0;C<E;C++){var D=F[C];jive.eae.actionqueue.actionQueueItemAction({action:D},B)}}else{if(A.data.actionTakenKey){B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.actionTakenKey),[])))}}B.append("</div>")}return G?"":B.toString()};jive.eae.actionqueue.item.personalizedHomepage=function(A,G){var B=G||new soy.StringBuilder();B.append('<div class="j-aq-data personalized-homepage">',(A.renderLocation=="actions")?'<span class="jive-icon-huge jive-icon-gear"></span>':'<span class="jive-icon-big jive-icon-gear acticon"></span>','<h4 tabindex="-1" class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("upgrade.personalhome.notification.title"),[])),"</h4><p>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("upgrade.personalhome.notification.text"),[])),'</p><p class="j-aq-text"><strong><a href="',jive.soy.func.normalizeUrl(window._jive_base_url,"/index.jspa?showpersonalized=true"),'">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("upgrade.personalhome.notification.link"),[])),'</a></strong></p></div><div class="j-act-meta font-color-meta-light">',(A.creationTime)?"<strong>"+soy.$$escapeHtml(A.creationTime)+"</strong>":"","</div>");if(A.renderLocation=="actions"){B.append('<div class="j-aq-actions clearfix">');if(A.data.actionable){var F=A.data.actions;var E=F.length;for(var C=0;C<E;C++){var D=F[C];jive.eae.actionqueue.actionQueueItemAction({action:D},B)}}else{if(A.data.actionTakenKey){B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.actionTakenKey),[])))}}B.append("</div>")}return G?"":B.toString()};jive.eae.actionqueue.item.newUserProfile=function(A,G){var B=G||new soy.StringBuilder();B.append('<div class="j-aq-data j-aq-av user-approved clearfix">');jive.shared.displayutil.avatar(soy.$$augmentData(A.data.user,{size:A.renderLocation=="actions"?44:32,currentUserPartner:A.data.currentUserPartner}),B);B.append('<h4 tabindex="-1" class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.newuserprofile.label"),[])),"</h4><p>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.newuserprofile.body"),[])),'</p><p><a href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/edit-profile-avatar!input.jspa"))),"?targetUser=",soy.$$escapeUri(A.data.user.id),'">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("profile.change_photoavatar.link"),[])),'</a></p></div><div class="j-act-meta font-color-meta-light">',(A.creationTime)?"<strong>"+soy.$$escapeHtml(A.creationTime)+"</strong>":"","</div>");if(A.renderLocation=="actions"){B.append('<div class="j-aq-actions clearfix">');if(A.data.actionable){var F=A.data.actions;var E=F.length;for(var C=0;C<E;C++){var D=F[C];jive.eae.actionqueue.actionQueueItemAction({action:D},B)}}else{if(A.data.actionTakenKey){B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.actionTakenKey),[])))}}B.append("</div>")}return G?"":B.toString()};jive.eae.actionqueue.item.colleagueFollow=function(A,G){var C=G||new soy.StringBuilder();C.append('<div class="j-aq-data colleague-follows clearfix">',(A.renderLocation=="actions")?'<span class="jive-icon-huge jive-icon-gear"></span>':'<span class="jive-icon-big jive-icon-gear acticon"></span>','<h4 tabindex="-1" class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.system.label"),[])),"</h4><p>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("upgrade.colleague.follow.text"),[])),' <strong><a href="',jive.soy.func.normalizeUrl(window._jive_base_url,"/people?filterID=following"),'">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("upgrade.colleague.follow.following.link"),[])),'</a></strong></p></div><div class="j-act-meta font-color-meta-light">',(A.creationTime)?"<strong>"+soy.$$escapeHtml(A.creationTime)+"</strong>":"","</div>");if(A.renderLocation=="actions"){C.append('<div class="j-aq-actions clearfix">');if(A.data.actionable){var F=A.data.actions;var E=F.length;for(var B=0;B<E;B++){var D=F[B];jive.eae.actionqueue.actionQueueItemAction({action:D},C)}}else{if(A.data.actionTakenKey){C.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.actionTakenKey),[])))}}C.append("</div>")}return G?"":C.toString()};jive.eae.actionqueue.item.streamsV6=function(A,G){var C=G||new soy.StringBuilder();C.append('<div class="j-aq-data notify-streams-v6 clearfix">',(A.renderLocation=="actions")?'<span class="jive-icon-huge jive-icon-gear"></span>':'<span class="jive-icon-big jive-icon-gear acticon"></span>','<h4 tabindex="-1" class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.system.label"),[])),'</h4><p><strong class="font-color-notify">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("upgrade.streams.v6.text.watches.changed"),[])),"</strong></p><p>");jive.shared.soy.i18nHelper({i18nKey:"upgrade.streams.v6.text.watches",arg0:"<strong>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.streams.email_watches"),[]))+"</strong>",noAutoEscape:true},C);C.append('</p><p><img src="',jive.soy.func.normalizeUrl(window._jive_base_url,"/images/eae/emails-to-streams.png"),'" alt="" border="0"></p><p>');jive.shared.soy.i18nHelper({i18nKey:"upgrade.streams.v6.text.other.watches",arg0:((A.renderLocation=="actions")?'<a href="'+jive.soy.func.normalizeUrl(window._jive_base_url,"/user-preferences!input.jspa")+'">':"")+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("prefs.general.link"),[]))+((A.renderLocation=="actions")?"</a>":""),noAutoEscape:true},C);C.append('</p></div><div class="j-act-meta font-color-meta-light">',(A.creationTime)?"<strong>"+soy.$$escapeHtml(A.creationTime)+"</strong>":"","</div>");if(A.renderLocation=="actions"){C.append('<div class="j-aq-actions clearfix">');if(A.data.actionable){var F=A.data.actions;var E=F.length;for(var B=0;B<E;B++){var D=F[B];jive.eae.actionqueue.actionQueueItemAction({action:D},C)}}else{if(A.data.actionTakenKey){C.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.actionTakenKey),[])))}}C.append("</div>")}return G?"":C.toString()};jive.eae.actionqueue.item.historyBookmarksV6=function(A,G){var C=G||new soy.StringBuilder();C.append('<div class="j-aq-data j-act-hbupgrade clearfix">',(A.renderLocation=="actions")?'<span class="jive-icon-huge jive-icon-gear"></span>':'<span class="jive-icon-big jive-icon-gear acticon"></span>','<h4 tabindex="-1" class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("upgrade.new.feature.notification"),[])),'</h4><h5 class="font-face-deco">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("upgrade.historybookmarks.v6.title"),[])),"</h5><p>");jive.shared.soy.i18nHelper({i18nKey:"upgrade.historybookmarks.v6.desc",noAutoEscape:true,arg0:"<strong>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("upgrade.historybookmarks.v6.history"),[]))+"</strong>",arg1:"<strong>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("upgrade.historybookmarks.v6.bookmarks"),[]))+"</strong>",noAutoEscape:true},C);C.append('</p><img src="',jive.soy.func.normalizeUrl(window._jive_base_url,"/images/eae/notification-bookmarks-moved.png"),'" alt="" border="0"></div><div class="j-act-meta font-color-meta-light">',(A.creationTime)?"<strong>"+soy.$$escapeHtml(A.creationTime)+"</strong>":"","</div>");if(A.renderLocation=="actions"){C.append('<div class="j-aq-actions clearfix">');if(A.data.actionable){var F=A.data.actions;var E=F.length;for(var B=0;B<E;B++){var D=F[B];jive.eae.actionqueue.actionQueueItemAction({action:D},C)}}else{if(A.data.actionTakenKey){C.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.actionTakenKey),[])))}}C.append("</div>")}return G?"":C.toString()};jive.eae.actionqueue.item.licenseSubscriptionNotice=function(A,G){var C=G||new soy.StringBuilder();C.append('<div class="j-aq-data compliance-notice ',soy.$$escapeHtmlAttribute(A.data.smb.platformAlarmLevel=="normal"?A.data.smb.maxAlarmLevel:A.data.smb.maxAlarmLevel),' clearfix">',(A.renderLocation=="actions")?'<span class="jive-icon-huge jive-icon-gear"></span>':'<span class="jive-icon-big jive-icon-gear acticon"></span>','<h4 tabindex="-1" class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.system.label"),[])),"</h4>");jive.license.smbTitle({smb:A.data.smb,date:A.data.date},C);jive.license.smbBody({smb:A.data.smb},C);jive.license.smbFooter(null,C);C.append('</div><div class="j-act-meta font-color-meta-light">',(A.creationTime)?"<strong>"+soy.$$escapeHtml(A.creationTime)+"</strong>":"","</div>");if(A.renderLocation=="actions"){C.append('<div class="j-aq-actions clearfix">');if(A.data.actionable){var E=A.data.actions;var D=E.length;for(var F=0;F<D;F++){var B=E[F];jive.eae.actionqueue.actionQueueItemAction({action:B},C)}}else{if(A.data.actionTakenKey){C.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.actionTakenKey),[])))}}C.append("</div>")}return G?"":C.toString()};jive.eae.actionqueue.item.externalActivityEntry=function(E,D){var A=D||new soy.StringBuilder();A.append('<div class="j-aq-data ',(E.data.assignor)?"j-aq-av":"",' app-activity-temp clearfix">');if(E.renderLocation=="actions"){if(E.data.assignor){jive.shared.displayutil.avatar(soy.$$augmentData(E.data.assignor,{size:E.renderLocation=="actions"?44:32,hideLink:E.renderLocation=="actions"?false:true,currentUserPartner:E.data.currentUserPartner}),A);if(E.data.objData.icon){A.append('<div class="j-app-icon">');jive.shared.displayutil.renderIconElement({icon:E.data.objData.icon},A);A.append("</div>")}}A.append('<h4 tabindex="-1" class="j-aq-header font-color-meta">');if(!E.data.assignor){if(E.data.objData.icon){jive.shared.displayutil.renderIconElement({icon:E.data.objData.icon},A);A.append(" ")}}A.append(E.data.objData.body,'</h4><div class="j-aq-summary">',E.data.objData.title,(E.data.objData.summary)?' <a href="#" onclick="return false;" class="j-actionQ-detail-show">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.details.more"),[]))+'</a><a href="#" onclick="return false;" class="j-actionQ-detail-hide" style="display:none;">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.details.less"),[]))+"</a>":"","</div>");if(E.data.objData.summary){A.append('<div class="j-aq-detail clearfix" style="display:none;">');if(E.data.meta){jive.eae.common.renderStreamAttachments({object:E.data,domIDPostfix:E.data.objData.jiveID},A)}else{if(E.data.thumbnailImage){jive.shared.displayutil.renderIconElement({icon:E.data.thumbnailImage},A)}}A.append(E.data.objData.summary,(E.data.objData.mediaLink)?'<a href="'+jive.soy.func.normalizeUrl(window._jive_base_url,E.data.objData.mediaLink.contentUrl?E.data.objData.mediaLink.contentUrl:E.data.objData.mediaLink.imageUrl)+'" target="_blank" title="'+soy.$$escapeHtmlAttribute(E.data.objData.mediaLink.filename?E.data.objData.mediaLink.filename:"")+'"><div class="j-act-attachment">'+((E.data.objData.mediaLink.thumbnailUrl)?'<div class="j-media-attachment"><img src="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(E.data.objData.mediaLink.thumbnailUrl))+'" title="'+soy.$$escapeHtmlAttribute(E.data.objData.mediaLink.title)+'" alt="'+soy.$$escapeHtmlAttribute(E.data.objData.mediaLink.title)+'" width="'+soy.$$escapeHtmlAttribute(E.data.objData.mediaLink.thumbnailWidth)+'" height="'+soy.$$escapeHtmlAttribute(E.data.objData.mediaLink.thumbnailHeight)+'" border="0"/></div>':(E.data.objData.mediaLink.iconClass)?'<span class="jive-icon-big '+soy.$$escapeHtmlAttribute(E.data.objData.mediaLink.iconClass)+'"></span><span>'+soy.$$escapeHtml(E.data.objData.mediaLink.title)+"</span>":"")+"</div></a>":"","</div>")}}else{if(E.data.assignor){jive.shared.displayutil.avatar(soy.$$augmentData(E.data.assignor,{size:32,hideLink:true,currentUserPartner:E.data.currentUserPartner}),A)}else{A.append('<span class="acticon">');if(E.data.objData.icon){jive.shared.displayutil.renderIconElement({icon:E.data.objData.icon},A)}A.append("</span>")}A.append('<h4 tabindex="-1" class="j-aq-header font-color-meta">');var H=new soy.StringBuilder();jive.eae.actionqueue.item.externalActivityEntryGeneratorName(E.data.objData.generator,H);jive.shared.soy.i18nHelper({i18nKey:"eae.inbox.from.external.activity.generator.badge",noAutoEscape:true,arg0:H.toString()},A);A.append("</h4><p>",E.data.objData.body,"</p>")}A.append('<div class="j-act-meta font-color-meta-light">',(E.creationTime)?"<strong>"+soy.$$escapeHtml(E.creationTime)+"</strong>":"",'<div class="j-act-via">');var I=new soy.StringBuilder();jive.eae.actionqueue.item.externalActivityEntryGeneratorName(E.data.objData.generator,I);jive.shared.soy.i18nHelper({i18nKey:"eae.inbox.from.external.activity.generator",noAutoEscape:true,arg0:I.toString()},A);A.append("</div></div></div>");if(E.renderLocation=="actions"){A.append('<div class="j-aq-actions clearfix">');if(E.data.actionable){var C=E.data.actions;var F=C.length;for(var G=0;G<F;G++){var B=C[G];jive.eae.actionqueue.actionQueueItemAction({action:B},A)}}else{A.append((E.data.actionTakenName)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))+" "+soy.$$escapeHtml(E.data.actionTakenName):(E.data.actionTakenKey)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))+" "+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(E.data.actionTakenKey),[])):"")}A.append("</div>")}return D?"":A.toString()};jive.eae.actionqueue.item.externalActivityEntryGeneratorName=function(A,C){var B=C||new soy.StringBuilder();B.append((A!=null)?(A.name)?(A.url)?(((A.url).match(new RegExp("/^https?:\\/\\//",""))||[]))?'<a href="'+A.url+'" class="font-color-meta">'+soy.$$escapeHtml(A.name)+"</a>":'<a href="'+jive.soy.func.normalizeUrl(window._jive_base_url,A.url)+'">'+soy.$$escapeHtml(A.name)+"</a>":soy.$$escapeHtml(A.name):"":"");return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.actionqueue=="undefined"){jive.eae.actionqueue={}}if(typeof jive.eae.actionqueue.item=="undefined"){jive.eae.actionqueue.item={}}jive.eae.actionqueue.item.nonUniqueUsersNotification=function(D,C){var B=C||new soy.StringBuilder();B.append('<div class="j-aq-data clearfix">',(D.renderLocation=="actions")?'<span class="jive-icon-huge jive-icon-gear"></span>':'<span class="jive-icon-big jive-icon-gear acticon"></span>','<h4 tabindex="-1" class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.system.label"),[])),'</h4><p>The following user accounts have non-unique email addresses.  Please modify these accounts in the admin console to ensure that each account\'s email address is unique.</p><p><table class="j-browse-list j-browse-details j-table" style="padding-top:10px;"><thead><tr><th>User ID</th><th>Username</th><th>Email</th></tr></thead><tbody>');var F=D.data.nonUniqueUsers;var I=F.length;for(var K=0;K<I;K++){var E=F[K];B.append('<tr><td><a href="',soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"/admin/editUserProfile!input.jspa?userId="+E.id)),'">',soy.$$escapeHtml(E.id),'</a></td><td><a href="',soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"/admin/editUserProfile!input.jspa?userId="+E.id)),'">',soy.$$escapeHtml(E.username),'</a></td><td><a href="',soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"/admin/editUserProfile!input.jspa?userId="+E.id)),'">',soy.$$escapeHtml(E.email),"</a></td></tr>")}B.append('</tbody></table></p></div><div class="j-act-meta font-color-meta-light">',(D.creationTime)?"<strong>"+soy.$$escapeHtml(D.creationTime)+"</strong>":"","</div>");if(D.renderLocation=="actions"){B.append('<div class="j-aq-actions clearfix">');if(D.data.actionable){var J=D.data.actions;var A=J.length;for(var H=0;H<A;H++){var G=J[H];jive.eae.actionqueue.actionQueueItemAction({action:G},B)}}else{if(D.data.actionTakenKey){B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(D.data.actionTakenKey),[])))}}B.append("</div>")}return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.actionqueue=="undefined"){jive.eae.actionqueue={}}if(typeof jive.eae.actionqueue.item=="undefined"){jive.eae.actionqueue.item={}}jive.eae.actionqueue.item.eventInvitationActionRequest=function(A,G){var D=G||new soy.StringBuilder();D.append('<div class="j-aq-av clearfix"><div class="j-actionQ-item-data invite-request clearfix"><div class="j-av">');if(A.data.inviter){jive.shared.displayutil.avatar(soy.$$augmentData(A.data.inviter,{size:"32"}),D)}D.append('</div><h4 class="j-aq-header font-color-meta"><span class="jive-icon-med jive-icon-gear"></span>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.invite.label"),[])),"</h4><p>");if(!A.data.inviter.anonymous){jive.shared.displayutil.userDisplayNameLink(A.data.inviter,D)}else{jive.shared.displayutil.renderGuestDisplayName({message:""},D)}D.append(" ",soy.$$escapeHtml(A.data.inviteText),' <a href="',jive.soy.func.normalizeUrl(window._jive_base_url,A.data.objData.href),'" class="title">');if(A.data.objData.iconElement){jive.shared.displayutil.renderIconElement({icon:A.data.objData.iconElement},D)}else{D.append('<span class="',soy.$$escapeHtml(A.data.objData.iconCSS),'"></span>')}D.append(soy.$$escapeHtml(A.data.objData.displayName),'</a></p><div class="j-aq-actions clearfix">');var C=A.data.actions;var E=C.length;for(var F=0;F<E;F++){var B=C[F];jive.eae.actionqueue.actionQueueItemAction({action:B},D)}D.append("</div></div></div>");return G?"":D.toString()};jive.eae.actionqueue.item.eventInvitationReplyResult=function(A,C){var B=C||new soy.StringBuilder();jive.shared.soy.i18nHelper({i18nKey:soy.$$escapeHtml(A.data.messageKey),arg0:soy.$$escapeHtml(A.data.eventTitle)},B);return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.license=="undefined"){jive.license={}}jive.license.smbTitle=function(A,C){var B=C||new soy.StringBuilder();B.append("<!--       --><!-- Title --><!--       -->");jive.shared.soy.i18nHelper({i18nKey:"license.compliance.messaging.subscription.date",arg0:soy.$$escapeHtml(A.date),noAutoEscape:true},B);if(!A.smb.platformMoreAlarming){B.append("<p>");switch(A.smb.maxAlarmLevel){case"fail":B.append(" <h2>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("license.compliance.messaging.subscription.modules.failed"),[])),"</h2>");break;case"critical":B.append(" <h2>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("license.compliance.messaging.subscription.modules.critical"),[])),"</h2>");break;case"warning":B.append(" <h2>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("license.compliance.messaging.subscription.modules.warning"),[])),"</h2>");break;case"notice":B.append(" <h2>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("license.compliance.messaging.subscription.modules.notice"),[])),"</h2>");break}B.append("</p>")}return C?"":B.toString()};jive.license.smbFooter=function(A,C){var B=C||new soy.StringBuilder();B.append("<br><p>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("license.compliance.messaging.subscription.footer"),[])),"</p>");return C?"":B.toString()};jive.license.smbBody=function(P,Q){var M=Q||new soy.StringBuilder();M.append("<!-- platform message -->");if(P.smb.platformAlarmLevel!="normal"){M.append("<p>");switch(P.smb.platformAlarmLevel){case"fail":M.append("<h2>");jive.shared.soy.i18nHelper({i18nKey:"license.compliance.messaging.subscription.platform.failed",arg0:soy.$$escapeHtml(P.smb.platformInfo.expiration),arg1:soy.$$escapeHtml(P.smb.platformInfo.shutdown),noAutoEscape:true},M);M.append("</h2>");break;case"critical":M.append("<h2>");jive.shared.soy.i18nHelper({i18nKey:"license.compliance.messaging.subscription.platform.critical",arg0:soy.$$escapeHtml(P.smb.platformInfo.expiration),arg1:soy.$$escapeHtml(P.smb.platformInfo.shutdown),arg2:soy.$$escapeHtml(P.smb.platformInfo.daysToShutdown),noAutoEscape:true},M);M.append("</h2>");break;case"warning":M.append("<h2>");jive.shared.soy.i18nHelper({i18nKey:"license.compliance.messaging.subscription.platform.warning",arg0:soy.$$escapeHtml(P.smb.platformInfo.expiration),noAutoEscape:true},M);M.append("</h2>");break;case"notice":M.append("<h2>");jive.shared.soy.i18nHelper({i18nKey:"license.compliance.messaging.subscription.platform.notice",arg0:soy.$$escapeHtml(P.smb.platformInfo.daysToExpiration),arg1:soy.$$escapeHtml(P.smb.platformInfo.expiration),noAutoEscape:true},M);M.append("</h2>");break}M.append("</p>")}if(!P.smb.purePlatform){M.append("<!-- modules are in the mix -->");if(P.smb.hasExpiredGroups){M.append("<br>");if(P.smb.hasCritical){M.append("<p>");if(P.smb.hasFailedGroups){M.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("license.compliance.messaging.subscription.modules.failed.header"),[])))}else{jive.shared.soy.i18nHelper({i18nKey:"license.compliance.messaging.subscription.modules.expired.header",arg0:soy.$$escapeHtml(P.smb.graceDays)},M)}M.append("</p><p><ul>");var T=P.smb.expiredGroups;var S=T.length;for(var L=0;L<S;L++){var N=T[L];M.append("<li>");if(N.daysToShutdown>0){jive.shared.soy.i18nHelper({i18nKey:"license.compliance.messaging.subscription.modules.expired.critical",arg0:soy.$$escapeHtml(N.expiration),arg1:soy.$$escapeHtml(N.daysToShutdown),arg2:soy.$$escapeHtml(N.shutdown),noAutoEscape:true},M)}else{jive.shared.soy.i18nHelper({i18nKey:"license.compliance.messaging.subscription.modules.expired.failure",arg0:soy.$$escapeHtml(N.expiration),arg1:soy.$$escapeHtml(N.shutdown),noAutoEscape:true},M)}var B=N.modules;var F=B.length;for(var a=0;a<F;a++){var K=B[a];M.append((!(a==0))?",":""," <b>",soy.$$escapeHtml(K),"</b>")}M.append("</li>")}M.append("</ul></p>")}else{M.append("<p>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("license.compliance.messaging.subscription.modules.expired.warning.header"),[])),"</p><p><ul>");var C=P.smb.warnGroups;var D=C.length;for(var W=0;W<D;W++){var X=C[W];M.append("<li>");jive.shared.soy.i18nHelper({i18nKey:"license.compliance.messaging.subscription.modules.expired.warning",arg0:soy.$$escapeHtml(X.expiration),noAutoEscape:true},M);var I=X.modules;var J=I.length;for(var E=0;E<J;E++){var O=I[E];M.append((!(E==0))?",":""," <b>",soy.$$escapeHtml(O),"</b>")}M.append("</li>")}M.append("</ul></p>")}}if(P.smb.noticeGroups){M.append("<br>");jive.shared.soy.i18nHelper({i18nKey:"license.compliance.messaging.subscription.modules.expiring.header",arg0:soy.$$escapeHtml(P.smb.warningDays)},M);M.append("<br><p><ul>");var H=P.smb.noticeGroups;var G=H.length;for(var Y=0;Y<G;Y++){var Z=H[Y];M.append("<li>");jive.shared.soy.i18nHelper({i18nKey:"license.compliance.messaging.subscription.modules.expiring",arg0:soy.$$escapeHtml(Z.expiration),noAutoEscape:true},M);var U=Z.modules;var V=U.length;for(var R=0;R<V;R++){var A=U[R];M.append((!(R==0))?",":""," <b>",soy.$$escapeHtml(A),"</b>")}M.append("</li>")}M.append("</ul></p>")}}return Q?"":M.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.nav=="undefined"){jive.nav={}}if(typeof jive.nav.menu=="undefined"){jive.nav.menu={}}if(typeof jive.nav.menu.home=="undefined"){jive.nav.menu.home={}}jive.nav.menu.home.main=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id="j-home-global-nav-menu" class="j-quick-menu j-badge-menu j-act">');if(A.data){jive.nav.menu.home.content(A,B)}B.append("</div>");return C?"":B.toString()};jive.nav.menu.home.content=function(H,G){var D=G||new soy.StringBuilder();if(H.data.inboxItems.activityContainerList.length){D.append('<h4 class="j-badge-hd j-rc5 j-rc-none-bottom"><a href="',soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"/inbox")),'" title="',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.inbox"),[])),'"><span class="jive-icon-med jive-icon-communications"></span>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.inbox"),[])),"</a>");if(H.counts["inbox"]>0){D.append('<strong class="j-menu-count font-color-notify">');jive.shared.soy.i18nHelper({i18nKey:"nav.bar.home.menu.unread",arg0:(H.counts["inbox"]>50)?"50+":soy.$$escapeHtml(H.counts["inbox"]),noAutoEscape:true},D);D.append("</strong>")}D.append('</h4><ul id="j-home-nav-menu-inbox-list" class="j-badge-menu-list">');var K=H.data.inboxItems.activityContainerList;var F=K.length;for(var L=0;L<F;L++){var J=K[L];if(L<5){D.append("<li>");jive.eae.inbox.groupedCommStreamItem({activityContainer:J,user:H.data.inboxItems.viewingUser,streamType:"communications",filterType:["unread"],mobileUI:false,renderLocation:"globalNav"},D);D.append("</li>")}}D.append("</ul>")}if(H.data.actionItems.actionQueueList.length){D.append('<h4 class="j-badge-hd"><a href="',soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"/actions")),'" title="',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.inbox"),[])),'"><span class="jive-icon-med jive-icon-actions"></span>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.actions"),[])),'</a><strong class="j-menu-count font-color-notify">');jive.shared.soy.i18nHelper({i18nKey:"nav.bar.home.menu.new",arg0:(H.counts["actions"]>50)?"50+":soy.$$escapeHtml(H.counts["actions"]),noAutoEscape:true},D);D.append('</strong></h4><ul id="j-home-nav-menu-actions-list" class="j-badge-menu-list">');var N=H.data.actionItems.actionQueueList;var I=N.length;for(var E=0;E<I;E++){var M=N[E];if(E<5){D.append("<li>");jive.eae.actionqueue.actionQueueItemView({actionQueueItem:M,renderLocation:"globalNav"},D);D.append("</li>")}}D.append("</ul>")}if(H.data.taskItems.taskList.length){D.append('<h4 class="j-badge-hd"><a href="',soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"/actions/tasks")),'" title="',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("project.feeds.ovrdtasks.label"),[])),'"><span class="jive-icon-med jive-icon-actions"></span>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("project.feeds.ovrdtasks.label"),[])),'</a><strong class="j-menu-count font-color-notify">');jive.shared.soy.i18nHelper({i18nKey:"nav.bar.home.menu.overdue",arg0:(H.counts["tasks"]>50)?"50+":soy.$$escapeHtml(H.counts["tasks"]),noAutoEscape:true},D);D.append('</strong></h4><ul id="j-home-nav-menu-tasks-list" class="j-badge-menu-list">');var C=H.data.taskItems.taskList;var O=C.length;for(var B=0;B<O;B++){var A=C[B];if(B<5){D.append("<li>");jive.nav.menu.home.overdueTask({task:A},D);D.append("</li>")}}D.append("</ul>")}return G?"":D.toString()};jive.nav.menu.home.overdueTask=function(A,C){var B=C||new soy.StringBuilder();B.append('<a href="',soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"/actions/tasks")),'" class="j-aq-entry font-color-normal clearfix"><span class="jive-icon-big jive-icon-task acticon"></span><div class="title font-color-link">',soy.$$escapeHtml(A.task.subject),'</div><div class="j-task-duedate font-color-danger">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.task.dueDate.date"),[A.task.dueDate])),"</div></a>");return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.home=="undefined"){jive.home={}}jive.home.main=function(A,C){var B=C||new soy.StringBuilder();B.append("<head><title>",soy.$$escapeHtmlRcdata(A.streamDisplayName),'</title><meta name="nav.active.link" content="jive-nav-link-home" /><meta name="rte" value="true" /></head><body class="j-body-home"><!-- BEGIN layout --><div class="j-layout j-layout-sl clearfix j-contained j-rc5" id="j-streams-main"><div class="j-column-wrap-s"><nav class="j-column j-column-s" role="navigation" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.stream.nav"),[])),'">');jive.welcome.homeSideNav({homeNavHelper:A.homeNavHelper,selectedLinkID:(A.streamType=="all")?"jive-nav-link-activity":(A.streamType=="connections")?"jive-nav-link-connections":(A.streamType=="watches")?"jive-nav-link-watches":"jive-nav-link-custom-"+soy.$$escapeHtml(A.streamID)},B);B.append('</nav></div><!-- BEGIN large column --><div class="j-column-wrap-l"><div id="j-dynamic-pane" class="j-column j-column-l">');jive.home.dynamicPaneContents({activityStream:A.activityStream,activityStream4JS:A.activityStream4JS,streamDisplayName:A.streamDisplayName,streamType:A.streamType,streamID:A.streamID,recommenderEnabled:A.recommenderEnabled,pollingInterval:A.pollingInterval,invitationLink:A.invitationLink,connectionsInfoClosed:A.connectionsInfoClosed,infoType:A.infoType,infoUser:A.infoUser,latestStatusUpdate:A.latestStatusUpdate,dmEnabled:A.dmEnabled,canViewStatusUpdates:A.canViewStatusUpdates,statusUpdatesEnabled:A.statusUpdatesEnabled,preferredMode:A.preferredMode,startMode:A.startMode,mobileUI:A.mobileUI,communityName:A.communityName,numUpdatesSinceRefresh:A.numUpdatesSinceRefresh,invitationLink:A.homeNavHelper.invitationLink,communityFeedback:A.communityFeedback,quickTip:A.quickTip,hasImagePerms:A.hasImagePerms,isTrialActive:A.isTrialActive,focusStatusUpdate:A.focusStatusUpdate,createMenuData:A.createMenuData,hasInvitations:A.hasInvitations,hasPendingApprovals:A.hasPendingApprovals},B);B.append("</div></div></div></body>");return C?"":B.toString()};jive.home.dynamicPaneContents=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id="j-activity-page" class="j-stream">');jive.eae.recommendation.homeRecommendationSidebar({recommenderEnabled:A.recommenderEnabled,user:A.activityStream.viewingUser,pollingInterval:A.pollingInterval,communityFeedback:A.communityFeedback,quickTip:A.isTrialActive?A.quickTip:false},B);B.append('<div class="j-stream-container" role="main" aria-labeledby="js-activity-heading"><div class="j-create-container" role="group" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.create"),[])),'">');jive.home.activityStreamCreateMenu({createMenuData:A.createMenuData,canCreateStatusUpdates:A.activityStream.canCreateMbEntry},B);if(A.activityStream.canCreateMbEntry&&!A.activityStream.viewingUser.anonymous){B.append('<div class="j-main-mb-entry" role="application">');jive.shared.soy.resourceInlineJs({code:"$j(function() {jive.ActivityStream.MBController = new jive.MicroBlogging.MBController();"+((A.focusStatusUpdate)?"jive.ActivityStream.MBController.getMicrobloggingView().focus();":"")+"});"},B);jive.statusinput.containers.microbloggingStatusInput({statusID:"mb-header-editor",user:A.activityStream.viewingUser,latestStatusUpdate:A.latestStatusUpdate,canCreateMbImage:A.activityStream.canCreateMbImage,canCreateMbVideo:A.activityStream.canCreateMbVideo,canAtMention:!A.mobileUI,focusStatusUpdate:A.focusStatusUpdate},B);B.append("</div>")}B.append("</div>");jive.eae.activitystream.streamSpecificFilters({streamDisplayName:A.streamDisplayName,streamType:A.streamType,selectedFilter:["all"],recommenderEnabled:A.recommenderEnabled,canViewStatusUpdates:A.canViewStatusUpdates,numUpdatesSinceRefresh:A.numUpdatesSinceRefresh},B);jive.home.renderActivityStream(A,B);B.append("</div>");if(A.infoUser.partner){jive.home.partnerActivityWelcome(A,B)}B.append("</div>");return C?"":B.toString()};jive.home.renderActivityStream=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id="j-activity-streams-wrapper" class="j-stream"><div id="previewable-binary-viewer"></div><div id="j-stream" class="j-act j-stream-list j-main-stream j-act-stream ',(!A.mobileUI)?"j-not-mobile":"",'">');jive.eae.activitystream.activityStream({activityStream:A.activityStream,activityStream4JS:A.activityStream4JS,streamDisplayName:A.streamDisplayName,streamType:A.streamType,streamID:A.streamID,viewingUser:A.activityStream.viewingUser,dmEnabled:A.dmEnabled,recommenderEnabled:A.recommenderEnabled,canViewStatusUpdates:A.canViewStatusUpdates,statusUpdatesEnabled:A.statusUpdatesEnabled,preferredMode:A.preferredMode,startMode:A.startMode,mobileUI:A.mobileUI,communityName:A.communityName,connectionsInfoClosed:A.connectionsInfoClosed,infoType:A.infoType,infoUser:A.infoUser,invitationLink:A.invitationLink,hasImagePerms:A.hasImagePerms},B);B.append("</div></div>");return C?"":B.toString()};jive.home.activityStreamCreateMenu=function(E,D){var C=D||new soy.StringBuilder();if(E.createMenuData.visible){jive.shared.soy.resourceInlineJs({code:"$j(function() {jive.ActivityStream.GlobalCreateMenuView = new jive.ActivityStream.CreateMenuView({createMenuData: "+JSON.stringify(E.createMenuData).replace(/</g,"\\u003C").replace(/>/g,"\\u003E")+"}); jive.ActivityStream.GlobalCreateMenuView.postRender();});"},C);C.append('<div id="j-as-create-menu" aria-hidden="true"><a href="#" id="as-create-menu-more" class="j-as-create-menu-more" style="display:none;"><span class="lnk">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.more"),[])),'</span><span class="jive-icon-med jive-icon-down j-filter-icon"></span></a><div id="j-as-create-menu-items"><span class="j-as-create-item" role="heading"><span class="j-ui-elem j-create-icon"></span><span class="font-color-meta-light">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.create"),[])),":</span></span>",(E.canCreateStatusUpdates)?'<span class="j-as-create-status-update j-as-create-item" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("nav.bar.create.description.status"),[]))+'"><span class="jive-icon-status jive-icon-med"></span>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("nav.bar.create.status"),[]))+"</span>":"");var A=E.createMenuData.sections;var I=A.length;for(var F=0;F<I;F++){var K=A[F];if(K.name=="nav.bar.create.section.content"&&K.visible){var G=K.items;var B=G.length;for(var H=0;H<B;H++){var J=G[H];jive.home.activityStreamCreateMenuItem({item:J},C)}}}C.append("</div></div><div id=\"j-as-create-menu-pop\" class=\"j-pop-main j-quick-menu\" style=\"display:none;\"></div><script>(function() {var $upMenu = $j('#j-as-create-menu-items'), $menuItems = $upMenu.find('.j-as-create-item'), $moreBtn = $j('#as-create-menu-more'), upMenuWidth = $upMenu.outerWidth(true), createMenuItemsTotalWidth = 0; $menuItems.each(function() {createMenuItemsTotalWidth += $j(this).outerWidth(true);}); if (upMenuWidth >= createMenuItemsTotalWidth - 1) {$moreBtn.hide();}else {$moreBtn.show();}})();<\/script>")}return D?"":C.toString()};jive.home.activityStreamCreateMenuItem=function(A,C){var B=C||new soy.StringBuilder();if(A.item.nameKey!="nav.bar.create.status"&&A.item.visible){B.append('<a href="');jive.home.contentTypeHref__C2bf6(soy.$$augmentData(A.item,{legacy:((A.item.linkCss).match(new RegExp("js-legacy-create",""))||[]).length>0}),B);B.append('" class="',soy.$$escapeHtmlAttribute(A.item.linkCss),' j-as-create-item" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg(A.item.descriptionKey),[])),'"',(A.item.urlParams&&A.item.urlParams.contentType)?' data-content-type="'+soy.$$escapeHtmlAttribute(A.item.urlParams.contentType)+'"':"");if(((A.item.linkCss).match(new RegExp("quick",""))||[]).length>0){B.append(' data-quick-create-url="');jive.home.contentTypeHref__C2bf6(soy.$$augmentData(A.item,{legacy:true}),B);B.append('"')}B.append(' data-ident="',soy.$$escapeHtmlAttribute(A.item.nameKey),'"><span class="',soy.$$escapeHtmlAttribute(A.item.iconCss),' jive-icon-med"></span>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.item.nameKey),[])),"</a>")}return C?"":B.toString()};jive.home.activityStreamCreateMenuPopover=function(A,G){var B=G||new soy.StringBuilder();B.append('<ul class="j-icon-list">');var F=A.menuItems;var E=F.length;for(var D=0;D<E;D++){var C=F[D];B.append("<li>");jive.home.activityStreamCreateMenuItem({item:C},B);B.append("</li>")}B.append("</ul>");return G?"":B.toString()};jive.home.contentTypeHref=function(A,C){var B=C||new soy.StringBuilder();B.append((A.legacy)?(A.urlParams)?soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,A.url)+"?"+jive.soy.func.buildParameterString(jQuery.extend({},(function(){var F={};var E=[["sr","amenu"]];for(var D=0;D<E.length;D+=1){F[E[D][0]]=E[D][1]}return F})(),A.urlParams))):soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,A.url)+"?"+jive.soy.func.buildParameterString((function(){var F={};var E=[["sr","amenu"]];for(var D=0;D<E.length;D+=1){F[E[D][0]]=E[D][1]}return F})())):"javascript:void(0)");return C?"":B.toString()};jive.home.newCount=function(A,C){var B=C||new soy.StringBuilder();B.append((A.count>50)?"50+":soy.$$escapeHtml(A.count));return C?"":B.toString()};jive.home.updateBadge=function(A,C){var B=C||new soy.StringBuilder();B.append("<div />");return C?"":B.toString()};jive.home.countForTitle=function(A,C){var B=C||new soy.StringBuilder();B.append("(");jive.home.newCount(A,B);B.append(")");return C?"":B.toString()};jive.home.partnerActivityWelcome=function(A,C){var B=C||new soy.StringBuilder();B.append((A.hasInvitations)?(!A.hasPendingApprovals)?'<div class="j-partner-welcome clearfix j-rc3"><span class="j-arrow"></span><span role=\'img\' title=\''+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.group"),[]))+'\' class="jive-icon-huge jive-icon-group"></span><h1 class="font-face-deco">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("partner.activity.welcome.title"),[]))+"</h1><p>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("partner.activity.welcome.body"),[]))+"</p></div>":'<div class="j-partner-welcome j-act-empty clearfix font-color-normal"><h2>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("partner.activity.moderation.title"),[]))+"</h2><p>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("partner.activity.moderation.body"),[]))+'</p><img src="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.resourceUrl(window._jive_base_url,"/6.0.2.0/","","/images/stream-intro/sample.png")))+'" alt="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.activitystream.example.image"),[]))+'" /></div>':'<div class="j-partner-welcome j-act-empty clearfix font-color-normal"><h2>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("partner.activity.noinvitations.title"),[]))+"</h2><p>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("partner.activity.noinvitations.body"),[]))+'</p><img src="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.resourceUrl(window._jive_base_url,"/6.0.2.0/","","/images/stream-intro/sample.png")))+'" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.activitystream.example.image"),[]))+'" alt="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.activitystream.example.image"),[]))+'" /></div>',"<script>$j(function() {jive.partner.actionPage.init(); jive.partner.actionPage.loadGroups();});<\/script>");return C?"":B.toString()};jive.home.contentTypeHref__C2bf6=function(A,C){var B=C||new soy.StringBuilder();B.append((A.legacy)?(A.urlParams)?soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,A.url)+"?"+jive.soy.func.buildParameterString(jQuery.extend({},(function(){var F={};var E=[["sr","amenu"]];for(var D=0;D<E.length;D+=1){F[E[D][0]]=E[D][1]}return F})(),A.urlParams)))):soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,A.url)+"?"+jive.soy.func.buildParameterString((function(){var F={};var E=[["sr","amenu"]];for(var D=0;D<E.length;D+=1){F[E[D][0]]=E[D][1]}return F})()))):"javascript:void(0)");return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.welcome=="undefined"){jive.welcome={}}jive.welcome.main=function(A,C){var B=C||new soy.StringBuilder();B.append("<head><title>",soy.$$escapeHtmlRcdata(jive.i18n.i18nText(jive.i18n.getMsg("userbar.welcome.gtitle"),[])),'</title><meta name="nav.active.link" content="jive-nav-link-home" /><link rel="canonical" href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(A.jiveURL)),'"/><link rel="stylesheet" href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.resourceUrl(window._jive_base_url,"/6.0.2.0/","","/styles/jive-widgets.css"))),'" type="text/css" media="all" /></head><body class="j-body-welcome j-body-home"><div class="j-layout j-layout-sl clearfix j-contained j-rc5"><div class="j-column-wrap-s"><nav class="j-column j-column-s" role="navigation" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.stream.nav"),[])),'">');jive.welcome.homeSideNav({homeNavHelper:A.homeNavHelper,selectedLinkID:"jive-nav-link-dashboard"},B);B.append('</nav></div><!-- BEGIN large column --><div class="j-column-wrap-l"><div id="j-dynamic-pane" class="j-column j-column-l">');jive.welcome.welcomeDynamicPane(A,B);B.append("</div></div></div><!-- END main body --></body>");return C?"":B.toString()};jive.welcome.simplifiedMain=function(A,C){var B=C||new soy.StringBuilder();B.append("<head><title>",soy.$$escapeHtmlRcdata(jive.i18n.i18nText(jive.i18n.getMsg("userbar.welcome.gtitle"),[])),'</title><meta name="nav.active.link" content="jive-nav-link-home" /><link rel="canonical" href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(A.jiveURL)),'"/><link rel="stylesheet" href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.resourceUrl(window._jive_base_url,"/6.0.2.0/","","/styles/jive-widgets.css"))),'" type="text/css" media="all" /></head><body class="j-body-welcome j-body-home">');jive.welcome.welcomeDynamicPane(soy.$$augmentData(A,{selectedLinkID:"jive-nav-link-activity"}),B);B.append("<!-- END main body --></body>");return C?"":B.toString()};jive.welcome.welcomeDynamicPane=function(A,C){var B=C||new soy.StringBuilder();jive.shared.soy.resourceInlineJs({code:"if (!widgetContainer) {var widgetContainer = new jive.widgets.Container({'widgetType': '"+soy.$$escapeHtml(A.widgetTypeKey)+"', 'renderWidgetAction': '"+soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"/render-widget.jspa"))+"', 'containerID': '"+soy.$$escapeHtml(A.place.id)+"', 'containerType': '"+soy.$$escapeHtml(A.place.objectType)+"'}); define('widgetContainer',widgetContainer);}var manage = new jive.places.Manage.Main("+JSON.stringify(A.place).replace(/</g,"\\u003C").replace(/>/g,"\\u003E")+", {canManageAnnouncements: "+((A.canManageAnnouncements)?"true":"false")+", i18n: "+JSON.stringify((function(){var F={};var E=[["startFollowing",jive.i18n.i18nText(jive.i18n.getMsg(A.place.placeI18nKeyPrefix+".startFollow.desc"),[])],["stopFollowing",jive.i18n.i18nText(jive.i18n.getMsg(A.place.placeI18nKeyPrefix+".stopFollow.desc"),[])],["followError",jive.i18n.i18nText(jive.i18n.getMsg("global.follow.error"),[])]];for(var D=0;D<E.length;D+=1){F[E[D][0]]=E[D][1]}return F})()).replace(/</g,"\\u003C").replace(/>/g,"\\u003E")+'}); function toggleWidgetPanel() {var spinner = new jive.loader.LoaderView(); $j(document.body).addClass(\'jive-widget-progresscursor\').addClass(\'jive-body-widget-customizing\'); $j("#jive-widgets-panel-loading").show(); spinner.appendTo($j("#jive-widgets-panel-loading")); $j("#jive-widget-container").safelyLoad(\''+(jive.soy.func.normalizeUrl(window._jive_base_url,"customize-container.jspa")+"?"+encodeURIComponent("containerType")+"="+encodeURIComponent(A.place.objectType)+"&"+encodeURIComponent("containerID")+"="+encodeURIComponent(A.place.id))+'\', { cache: false }, function() {$j("#jive-widgets-panel-loading").hide(); spinner.destroy(); $j("#jive-widgets-panel").fadeIn(500); $j("#jive-widgets-warning").fadeIn(500); $j(document.body).removeClass(\'jive-widget-progresscursor\');'+((!A.customizeMessageSeen)?"$j('#customize-message').slideDown();":"")+"});}$j(document).ready(function() {widgetContainer.renderAll(); $j('#customize-message > #dismiss-link').click(dismissCustomizeMessage); $j('#js-layout-upgrade-link').click(function() { dismissLayoutUpgradeMessage(); return false; }); $j('#js-layout-upgrade-change-link').click(function() { dismissLayoutUpgradeMessage(); toggleWidgetPanel(); return false; }); $j('.widget-remove-link').live('click', function() { removeWidgetFrame(this); return false; }); $j('.widget-edit-link').live('click', function() { editWidgetFrame(this); return false; }); $j('.widget-dismiss-link').live('click', function() { dismissWidgetMessage(this); return false; }); var createQuick = new jive.Navbar.Menu.CreateQuick.Main('a.js-create-quick-link, a:has(.js-create-quick-link)');"+((A.customizeNow)?"toggleWidgetPanel();":"")+"}); function dismissCustomizeMessage() {$j('#customize-message').slideUp(); if ($j('#customize-message').find('#dont-display-message').prop('checked')) {var userSource = new jive.Browse.User.ItemSource(); userSource.setUserProperty({ userID: 'current', propName: 'jive.customizeWidgetMsg.closed', propValue: 'true' });}return false;}function dismissLayoutUpgradeMessage() {$j('#js-layout-upgrade').slideUp(); var containerSource = new jive.Browse.Container.ItemSource(); containerSource.removeContainerProperty({ containerType: "+soy.$$escapeHtml(A.place.objectType)+", containerID: "+soy.$$escapeHtml(A.place.id)+", propName: 'jive.upgrade.widgetLayoutInvalid'});}function dismissWidgetMessage(link) {$j(link).closest('.widget-message').slideUp(); var prop = $j(link).attr('data-property'); if (prop) {var userSource = new jive.Browse.User.ItemSource(); userSource.setUserProperty({ userID: 'current', propName: prop, propValue: 'true' });}}function removeWidgetFrame(button) {var frameID = widgets.getWidgetFrameID(button); if (frameID) {widgets.removeWidgetFrame(frameID);}}function editWidgetFrame(button) {var frameID = widgets.getWidgetFrameID(button); if (frameID) {widgets.editWidgetFrame(frameID);}}"},B);jive.announcements.list({announcements:A.announcements,showDismiss:false},B);if(A.canManageContainer){if(A.showLayoutUpgradeMessage){jive.welcome.layoutUpgradeMessage(null,B)}if(!A.customizeMessageSeen){jive.welcome.editPageMessage(null,B)}}B.append('<div id="jive-widgets-panel-loading" style="display: none"></div><div id="jive-widget-container" role="main" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.header.text.overview"),[])),'"><div id="jive-widget-content" class="clearfix">',A.widgetMarkup,"</div></div>",(A.canManageAnnouncements)?'<div class="jive-modal" id="jive-modal-announcements"><header><h2 class="jive-modal-title jive-modal-title-manage-announcements">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("announcement.manage.system.title"),[]))+'</h2><h2 class="jive-modal-title jive-modal-title-add-announcement" style="display: none">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("announcement.manage.add.title"),[]))+'</h2><h2 class="jive-modal-title jive-modal-title-edit-announcement" style="display: none">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("announcement.manage.edit.title"),[]))+'</h2></header><a href="#" class="j-modal-close-top close">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close"),[]))+'  <span class="j-close-icon j-ui-elem" role="img"></span></a><div id="announcements-modal"></div></div>':"","");return C?"":B.toString()};jive.welcome.layoutUpgradeMessage=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="customize-message jive-info-box clearfix" id="js-layout-upgrade" aria-live="polite" aria-atomic="true"><a href="#" id="js-layout-upgrade-link" style="float: right">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("welcome.dismiss.link"),[])),"</a><h5>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("welcome.layout.upgrade.header"),[])),'</h5><p class="welcome-message">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("welcome.layout.upgrade.text"),[])),'&nbsp;<a href="#" id="js-layout-upgrade-change-link">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("welcome.layout.upgrade.change.link"),[])),"</a></p></div>");return C?"":B.toString()};jive.welcome.editPageMessage=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="customize-message clearfix" id="customize-message" style="display: none"><a href="#" id="dismiss-link" style="float: right">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("welcome.dismiss.link"),[])),"</a><h5>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("welcome.editpagetitle"),[])),'</h5><p class="welcome-message">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("welcome.editinfo"),[])),'</p><div style="float:right"><input type="checkbox" id="dont-display-message"><label for="dont-display-message">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("welcome.dontshowmsg"),[])),"</label></div></div>");return C?"":B.toString()};jive.welcome.homeSideNav=function(G,F){var D=F||new soy.StringBuilder();D.append('<ul id="j-home-side-nav" class="j-homenav">');if(!G.homeNavHelper.partner){jive.welcome.homeSideNavLink(soy.$$augmentData(G.homeNavHelper.dashboardLink,{selected:(G.selectedLinkID==G.homeNavHelper.dashboardLink.id)?"true":"",canPin:G.homeNavHelper.canPin,pinned:G.homeNavHelper.canPin&&G.homeNavHelper.pinnedLinkID==G.homeNavHelper.dashboardLink.id,visible:G.homeNavHelper.dashboardLink.visible}),D)}jive.welcome.homeSideNavLink(soy.$$augmentData(G.homeNavHelper.activityStreamLink,{selected:(G.selectedLinkID==G.homeNavHelper.activityStreamLink.id)?"true":"",canPin:G.homeNavHelper.canPin,pinned:G.homeNavHelper.canPin&&G.homeNavHelper.pinnedLinkID==G.homeNavHelper.activityStreamLink.id}),D);if(!G.homeNavHelper.anonymous){D.append('<li id="j-as-nav-links" class="j-streamlinks"><ul class="j-custom-streams-nav" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("eae.stream.custom"),[])),'">');if(G.homeNavHelper.activityStreams){var C=G.homeNavHelper.activityStreams;var J=C.length;for(var B=0;B<J;B++){var A=C[B];jive.welcome.activityStreamNavItem(soy.$$augmentData(A,{id:A.id,name:A.name,selected:A.selected,pollingEnabled:G.homeNavHelper.pollingEnabled,pinnedLinkID:G.homeNavHelper.pinnedLinkID,selectedLinkID:G.selectedLinkID}),D)}}jive.welcome.newActivityStreamItem({disabled:G.homeNavHelper.activityStreams.length>=G.homeNavHelper.maxCustomStreams},D);D.append("</ul></li>");if(!G.homeNavHelper.anonymous){jive.welcome.homeSideNavLink(soy.$$augmentData(G.homeNavHelper.inboxLink,{selected:(G.selectedLinkID==G.homeNavHelper.inboxLink.id)?"true":"",pollingEnabled:G.homeNavHelper.pollingEnabled,canPin:G.homeNavHelper.canPin,pinned:G.homeNavHelper.canPin&&G.homeNavHelper.pinnedLinkID==G.homeNavHelper.inboxLink.id}),D)}jive.welcome.homeSideNavLink(soy.$$augmentData(G.homeNavHelper.actionsLink,{selected:(G.selectedLinkID==G.homeNavHelper.actionsLink.id)?"true":"",pollingEnabled:G.homeNavHelper.pollingEnabled,canPin:G.homeNavHelper.canPin,pinned:G.homeNavHelper.canPin&&G.homeNavHelper.pinnedLinkID==G.homeNavHelper.actionsLink.id}),D);jive.welcome.homeSideNavLink(soy.$$augmentData(G.homeNavHelper.moderationLink,{selected:(G.selectedLinkID==G.homeNavHelper.moderationLink.id)?"true":"",pollingEnabled:G.homeNavHelper.pollingEnabled,canPin:false,pinned:false}),D)}var I=G.homeNavHelper.customLinks;var H=I.length;for(var K=0;K<H;K++){var E=I[K];jive.welcome.homeSideNavLink(soy.$$augmentData(E,{selected:(G.selectedLinkID==E.id)?"true":"",pollingEnabled:G.homeNavHelper.pollingEnabled,canPin:false,pinned:false}),D)}jive.welcome.getStartedNavLink(soy.$$augmentData(G.homeNavHelper.onboardingLink,{selected:(G.selectedLinkID==G.homeNavHelper.onboardingLink.id)?"true":"",canPin:G.homeNavHelper.canPin,pinned:G.homeNavHelper.canPin&&G.homeNavHelper.pinnedLinkID==G.homeNavHelper.onboardingLink.id,visible:G.homeNavHelper.onboardingLink.visible}),D);D.append("</ul>");jive.shared.soy.resourceInlineJs({code:"$j(function() {require(['jive.HomeNav.Controller'], function(HomeNavController) {jive.HomeNav.GlobalController = new HomeNavController({selectedLinkID: '"+soy.$$escapeHtml(G.selectedLinkID)+"', pollingEnabled: "+soy.$$escapeHtml(G.homeNavHelper.pollingEnabled)+", canPin: "+soy.$$escapeHtml(G.homeNavHelper.canPin)+", maxCustomStreams: "+soy.$$escapeHtml(G.homeNavHelper.maxCustomStreams)+", showOnbIntroModal: "+soy.$$escapeHtml(G.homeNavHelper.showOnbIntroModal)+", sysDefaultHomeNavView: '"+soy.$$escapeHtml(G.homeNavHelper.systemDefaultHomeNavView)+"', onbIntroModalType: '"+soy.$$escapeHtml(G.homeNavHelper.onbIntroModalType)+"', instanceName: '"+soy.$$escapeHtml(G.homeNavHelper.instanceName)+"'});});});"},D);if(G.homeNavHelper.invitationLink&&G.homeNavHelper.invitationLink.visibleButNotToExternalContributors){jive.invitation.inviteLink(soy.$$augmentData(G.homeNavHelper.invitationLink,{containerId:G.homeNavHelper.invitationLink.communityId,containerType:G.homeNavHelper.invitationLink.communityObjectType,containerName:G.homeNavHelper.invitationLink.communityName,allowUsers:false,maxInvite:G.homeNavHelper.invitationLink.maxInvitationCount,invitePeriod:G.homeNavHelper.invitationLink.invitationPeriodInHours,trackingID:"sidebar"}),D)}else{if(G.homeNavHelper.tryJiveLink&&G.homeNavHelper.tryJiveLink.visible){jive.try_jive.tryJiveLink(G.homeNavHelper.tryJiveLink,D)}}D.append('<!-- Powered by JIVE - mandated element  --><div class="j-poweredby-activity" id="j-pbj-act" role=\'img\' title=\'',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.access.poweredby"),[])),"'></div>");return F?"":D.toString()};jive.welcome.streamNameEditForm=function(A,C){var B=C||new soy.StringBuilder();B.append('<form class="j-js-display-name-edit-controls j-edit-name j-form"><label for="',soy.$$escapeHtmlAttribute(A.streamName),'-input-id" class="j-508-label">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.stream.name"),[])),'</label><input type="text" maxlength="36" class="j-stream-name-input j-js-stream-name-input j-rc3" value="',soy.$$escapeHtmlAttribute(A.streamName),'" id="',soy.$$escapeHtmlAttribute(A.streamName),'-input-id"/></form>');return C?"":B.toString()};jive.welcome.homeSideNavLink=function(A,C){var B=C||new soy.StringBuilder();if(A.visible){B.append('<li id="',soy.$$escapeHtmlAttribute(A.id),'" class="j-js-side-nav-item j-homenav-item j-rc5 ',(A.selected)?"selected":""," ",(A.pinned)?"pinned":"",'" data-source="',soy.$$escapeHtmlAttribute(A.source),'"><span class="jive-icon-med ',soy.$$escapeHtmlAttribute(A.iconCss),' j-homenav-icon"></span><a href="',jive.soy.func.normalizeUrl(window._jive_base_url,A.url),'" ',(A.titleKey)?'title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg(A.titleKey),[]))+'"':"",' class="j-homenav-link j-js-side-nav-link ',soy.$$escapeHtmlAttribute(A.linkCss),'"><span class="nav-link lnk">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.nameKey),[])),"</span>",(A.canPin)?'<span class="j-js-pin-stream jive-icon-sml j-stream-pin jive-glyph-pin-dark" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("nav.bar.home.set.default"),[]))+'"></span>':"");if(A.countType&&A.pollingEnabled){jive.welcome.updateIndicator({type:A.countType,count:0,extraCssClasses:"j-sidenav-count"},B)}B.append("</a></li>")}return C?"":B.toString()};jive.welcome.getStartedNavLink=function(A,C){var B=C||new soy.StringBuilder();if(A.visible){B.append('<li id="',soy.$$escapeHtmlAttribute(A.id),'" class="j-js-side-nav-item j-homenav-item j-rc5 ',(A.selected)?"selected":""," ",(A.pinned)?"pinned":"",'" data-source="',soy.$$escapeHtmlAttribute(A.source),'"><span class="jive-icon-med ',soy.$$escapeHtmlAttribute(A.iconCss),' j-homenav-icon"></span><a href="',jive.soy.func.normalizeUrl(window._jive_base_url,A.url),'" ',(A.titleKey)?'title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg(A.titleKey),[]))+'"':"",' class="j-homenav-link j-js-side-nav-link ',soy.$$escapeHtmlAttribute(A.linkCss),'"><span class="nav-link lnk">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.nameKey),[])),"</span>");jive.welcome.onboardingNavProgress({percentComplete:A.viewData.percentComplete,questData:A.viewData.quests},B);B.append("</a></li>")}return C?"":B.toString()};jive.welcome.onboardingNavProgress=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id="j-onb-nav-progress" title="');jive.shared.soy.i18nHelper({i18nKey:"onboarding.nav.progress.bar.title",arg0:A.questData[0].stepsComplete,arg1:A.questData[0].steps.length,arg2:A.questData[1].stepsComplete,arg3:A.questData[1].steps.length,arg4:A.questData[2].stepsComplete,arg5:A.questData[2].steps.length},B);B.append('"><strong class="j-complete ',(A.percentComplete==0)?" font-color-j-highlight j-notstarted":"font-color-new j-started",'">',soy.$$escapeHtml(A.percentComplete),'%</strong><div class="j-onb-progress j-rc5" ',(A.percentComplete==0)?' style="display:none"':'style="display:block"','><div class="j-progress-bar"><span class="j-index-holder"><span style="width: ',soy.$$filterCssValue(A.percentComplete),'%;" class="j-index"> </span></span></div></div></div>');return C?"":B.toString()};jive.welcome.activityStreamNavItem=function(A,C){var B=C||new soy.StringBuilder();B.append('<li id="jive-nav-link-',soy.$$escapeHtmlAttribute(A.source),(A.source!="connections"&&A.source!="watches")?"-"+soy.$$escapeHtmlAttribute(A.id):"",'" data-streamid="',soy.$$escapeHtmlAttribute(A.id),'" data-source="',soy.$$escapeHtmlAttribute(A.source),'" class="j-js-side-nav-item j-js-as-nav-item j-homenav-item j-rc5 j-custom-stream-item ',(A.selectedLinkID&&(A.source=="connections"&&A.selectedLinkID=="jive-nav-link-connections"||A.source=="watches"&&A.selectedLinkID=="jive-nav-link-watches"||A.source=="custom"&&A.selectedLinkID=="jive-nav-link-custom-"+A.id))?"selected":""," ",(A.pinnedLinkID&&(A.source=="connections"&&A.pinnedLinkID=="jive-nav-link-connections"||A.source=="watches"&&A.pinnedLinkID=="jive-nav-link-watches"||A.source=="custom"&&A.pinnedLinkID=="jive-nav-link-custom-"+A.id))?"pinned":"",'" ><span class="jive-icon-med jive-icon-activity-pulse-active j-homenav-icon"></span><a href="',(A.source=="connections"||A.source=="watches")?jive.soy.func.normalizeUrl(window._jive_base_url,"/activity?streamSource="+A.source):jive.soy.func.normalizeUrl(window._jive_base_url,"/activity?streamSource="+A.source+"&streamID="+A.id),'" class="j-homenav-link j-custom-stream-link j-js-side-nav-link j-js-as-nav-link j-stream-link"><span class="nav-link lnk j-js-nav-stream-name">',soy.$$escapeHtml(A.name),"</span></a>",(A.source=="connections")?'<span class="j-homenav-link j-custom-stream-link js-conns-display-name j-stream-link" style="display:none;"><span class="nav-link lnk j-js-nav-stream-name">'+soy.$$escapeHtml(A.name)+"</span></span>":"",'<a href="#" class="j-done-building j-js-done-building">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.activitystream.builder.done"),[])),'</a><a href="#" class="j-js-stream-options j-homenav-options jive-icon-med jive-icon-gear" title="Stream options"></a>');if(A.pollingEnabled){jive.welcome.updateIndicator({type:"gauge",count:0},B)}B.append("</li>");return C?"":B.toString()};jive.welcome.navConfigMenuPopover=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="j-homenav-options-menu j-nav-menu j-menu j-pop-main"><ul><li><a href=\'#\' class="j-js-edit-stream"><span class="jive-icon-sml jive-glyph-edit"></span>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("home.nav.config.menu.edit"),[])),"</a></li>",(A.canPin)?'<li><a href=\'#\' class="j-js-pin-stream"><span class="jive-icon-sml jive-glyph-pin"></span>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("home.nav.config.menu.pin"),[]))+"</a></li>":"",(A.canDelete)?'<li><a href=\'#\' class="j-js-delete-stream"><span class="jive-icon-sml jive-glyph-delete"></span>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("home.nav.config.menu.delete"),[]))+"</a></li>":"","</ul></div>");return C?"":B.toString()};jive.welcome.newActivityStreamItem=function(A,C){var B=C||new soy.StringBuilder();B.append('<li id="jive-nav-link-new" data-streamid="new" class="j-js-side-nav-item j-js-as-nav-item j-homenav-item j-custom-stream-item',(A.disabled)?" j-max-streams-reached font-color-meta-light":"",'"><span class="j-enabled"><span class="jive-icon-sml jive-glyph-plus j-newstream-icon"></span><a href="#" class="j-homenav-link j-custom-stream-link j-js-edit-stream j-new-stream"><span class="nav-link lnk j-js-nav-stream-name font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.streams.new_stream"),[])),'</span></a></span><span class="j-disabled">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.streams.max_reached"),[])),"</span></li>");return C?"":B.toString()};jive.welcome.pinnedMessage=function(A,C){var B=C||new soy.StringBuilder();B.append("<div>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("nav.bar.home.pinned.message"),[A.streamName])),"</div>");return C?"":B.toString()};jive.welcome.updateIndicator=function(A,C){var B=C||new soy.StringBuilder();B.append((A.type=="count")?' <span data-count="'+soy.$$escapeHtmlAttribute(A.count)+'" class="j-js-update-indicator j-update-count '+((A.count>50)?"fiftyplus":"")+" "+((A.extraCssClasses)?soy.$$escapeHtmlAttribute(A.extraCssClasses):"")+'" '+((A.count==0)?'style="display:none;"':"")+">"+((A.count>50)?"50+":soy.$$escapeHtml(A.count))+"</span>":(A.type=="gauge")?'<span role="img" data-count="'+soy.$$escapeHtmlAttribute(A.count)+'" class="j-js-update-indicator j-update-gauge jive-icon-med '+((A.count<10)?"jive-icon-activity-gauge-low":(A.count<40)?"jive-icon-activity-gauge-med":"jive-icon-activity-gauge-high")+'" '+((A.count==0)?'style="display:none;"':"")+' title="'+((A.count<10)?soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("nav.bar.gauge.lessthanten"),[])):(A.count<40)?soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("nav.bar.gauge.tenplus"),[])):soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("nav.bar.gauge.fiftyplus"),[])))+'" aria-label="'+((A.count<10)?soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("nav.bar.gauge.lessthanten"),[])):(A.count<40)?soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("nav.bar.gauge.tenplus"),[])):soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("nav.bar.gauge.fiftyplus"),[])))+'" ></span>':"");return C?"":B.toString()}
;
jive.namespace("ActivityStream");jive.ActivityStream.activityNotifier=(function(a){var b=true,d=0;function c(){if(b&&d!=1){a.emit.apply(a,arguments)}d++}a.enable=function(){b=true};a.disable=function(){b=false};a.getPollCount=function(){return d};if(!window._jive_current_user.anonymous){jive.switchboard.addListener("activityStream.poll",c.curry("activityStream.poll"))}return a})(jive.conc.observable({}));
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.latestAcclaim=="undefined"){jive.eae.latestAcclaim={}}jive.eae.latestAcclaim.extraContent=function(H,G){var C=G||new soy.StringBuilder();if(!H.currentUserPartner){C.append('<div class="j-acclaim-status j-browse-details"><div class="j-act-title clearfix" role="heading">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.acclaim.latest.level.update"),[])),'<a href="#" class="j-status-legend-link js-status-legend-link">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.acclaim.how.to.level"),[])),'</a></div><table class="j-browse-list" cellspacing="0" cellpadding="0"><thead class="j-rc4"><tr><th colspan="2"><strong class="font-color-meta-light">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("browse.heading.person"),[])),'</strong></th><th><strong class="font-color-meta-light">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.status_level"),[])),"</strong></th>",(H.data.showDateJoined)?'<th><strong class="font-color-meta-light">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.user.sort.date"),[]))+"</strong></th>":"",'</tr></thead><tbody class="j-browse-details-tbody">');var F=H.data.leaderboard;var E=F.length;for(var B=0;B<E;B++){var D=F[B];C.append('<tr class="j-people-row  ',(D.user.id==H.currentUserID)?"j-current-user":"j-challengers",'"><td class="j-td-avatar">');jive.shared.displayutil.avatar(soy.$$augmentData(D.user,{size:D.user.id==H.currentUserID?32:32,currentUserPartner:H.currentUserPartner}),C);C.append('</td><td class="j-td-user-info">');jive.shared.displayutil.userDisplayNameLink(D.user,C);C.append('</td><td class="j-td-statuslevel ',(D.user.id==H.currentUserID)?"font-color-new":"font-color-meta",'"><span class="j-level"><img src="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,D.userStatusLevel.imagePath))),'" />',soy.$$escapeHtml(D.userStatusLevel.statusLevelName)," (",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("stslvl.points"),[D.userStatusLevel.userPointTotal])),")</span>",(D.user.id==H.currentUserID)?'<div class="j-next-level">'+((H.data.pointsToNextLevel>1)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.acclaim.Xpointstonext"),[H.data.pointsToNextLevel])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.acclaim.onepointtonext"),[])))+"</div>":"","</td>",(H.data.showDateJoined)?'<td class="j-td-date '+((D.user.id==H.currentUserID)?"font-color-new":"font-color-meta")+'">'+soy.$$escapeHtml((D.user.creationDate?dateFormat(parseFloat(D.user.creationDate),"mmmm d, yyyy"):""))+"</td>":"","</tr>")}C.append('</tbody></table></div><div class="j-acclaim-legend js-acclaim-legend" style="display:none"><div class="j-legend j-rc4"><h4>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.acclaim.how.to.level"),[])),'</h4><ul class="j-simple-list">');var K=H.data.statusLevelScenarios;var A=K.length;for(var J=0;J<A;J++){var I=K[J];C.append((I.points>0&&I.enabled)?'<li class="j-point-count">'+((I.i18nKey=="stslvl.scen.eventAttended.text")?"Attend an Event":(I.i18nKey=="stslvl.scen.eventCommented.text")?"Comment on an Event":soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(I.i18nKey),[])))+'<strong class="j-points">'+soy.$$escapeHtml(I.points)+"</strong></li>":"")}C.append("</ul></div></div>")}return G?"":C.toString()}
;
jive.namespace("ActivityStream");jive.ActivityStream.FillInTheGapRequest=$Class.extend({init:function(a){this.originalIDs=a.originalIDs;this.timestamp=a.timestamp;this.fullContent=a.fullContent;this.pageSize=a.pageSize}});
;
jive.namespace("ActivityStream");jive.ActivityStream.FullRepliesRequest=$Class.extend({init:function(a){this.originalIDs=a.originalIDs}});
;
jive.namespace("ActivityStream");jive.ActivityStream.StreamSource=jive.RestService.extend(function(a){a.resourceType="activity-stream";a.pluralizedResourceType=a.resourceType;jive.conc.observable(this);this.initializeView=function(c,e,f){var b=this.RESOURCE_ENDPOINT+"/initializeView",d={objectType:3,objectID:window._jive_current_user.ID,streamSource:c,streamID:e||0,filterType:["all"],timestamp:0};a.displayGenericErrorMessages=false;if(!f){f=new jive.conc.Promise()}return this.commonAjaxRequest(f,"POST",{url:b,data:JSON.stringify(d)}).addErrback(function(h,g){if(g==401||g==403||g==4026||g===0){location.reload()}}).always(function(){a.displayGenericErrorMessages=true})};this.list=function(c,d){var b=this.RESOURCE_ENDPOINT+"/list";a.displayGenericErrorMessages=false;if(!d){d=new jive.conc.Promise()}return this.commonAjaxRequest(d,"POST",{url:b,data:JSON.stringify(c)}).addErrback(function(f,e){if(e==401||e==403||e==4026||e===0){location.reload()}}).always(function(){a.displayGenericErrorMessages=true})};this.getMore=function(c){var b=this.RESOURCE_ENDPOINT+"/list/before";return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:b,data:JSON.stringify(c)})};this.exclude=function(c,d){var b=this.RESOURCE_ENDPOINT+"/exclusions/object/set";if(c!="item"){b=this.RESOURCE_ENDPOINT+"/exclusions/context/set"}return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:b,data:JSON.stringify(d)},d)};this.saveActiveStreamTab=function(c){var b=this.RESOURCE_ENDPOINT+"/activetab/save";return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:b,data:c})};this.saveActiveStreamFilter=function(c,d){var b=this.RESOURCE_ENDPOINT+"/activefilter/save/"+c;return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:b,data:d})};this.saveActiveCommunicationsItem=function(b,d){var c=this.RESOURCE_ENDPOINT+"/activeitem/save/"+b+"/"+d;return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:c})};this.saveRefreshTime=function(b){var c=this.RESOURCE_ENDPOINT+"/refreshtime/save";return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:c,data:b})};this.exclusionRules=function(c){var b=this.RESOURCE_ENDPOINT+"/exclusions/list";return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:b,data:JSON.stringify(c)},c)};this.removeExclusions=function(c){var b=this.RESOURCE_ENDPOINT+"/exclusions/remove";return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:b,data:JSON.stringify(c)},c)};this.newCount=function(){var b=this.RESOURCE_ENDPOINT+"/new/count";return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:b})};this.getFullContent=function(b,e){var d=new jive.conc.Promise(),c="";if(b==1150305777){c=this.RESOURCE_ENDPOINT+"/acclaim";this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:c}).addCallback(function(g){var f=jive.eae.latestAcclaim.extraContent({data:g,currentUserID:window._jive_current_user.ID,currentUserPartner:window._jive_current_user.partner});d.emitSuccess({html:f,extraData:{}})});return d}else{c=this.RESOURCE_ENDPOINT+"/fullcontent/"+b+"/"+e;return this.commonAjaxRequest(d,"GET",{url:c})}};this.getFullReplies=function(b,e,d){var c=this.RESOURCE_ENDPOINT+"/fullreplies/"+b+"/"+e;return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:c,data:JSON.stringify(d)},d)};this.fillInTheGaps=function(b,e,d){var c=this.RESOURCE_ENDPOINT+"/fillinthegaps/"+b+"/"+e;return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:c,data:JSON.stringify(d)},d)};this.fillActivity=function(b,f,d,e){var c=this.RESOURCE_ENDPOINT+"/fillactivity/"+b+"/"+f;return this.commonAjaxRequest(e,"POST",{url:c,data:JSON.stringify(d)})};this.getHiddenRules=function(c){var b=this.RESOURCE_ENDPOINT+"/exclusions/list";return this.commonAjaxRequest(c,"GET",{url:b})};this.saveInboxViewType=function(b){var c=this.RESOURCE_ENDPOINT+"/inbox/viewtype/save";return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:c,data:b})};this.saveInboxListHeight=function(b){var c=this.RESOURCE_ENDPOINT+"/inbox/listheight/save";return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:c,data:JSON.stringify(b)})};this.getGlobalNavMenu=function(){var b=this.RESOURCE_ENDPOINT+"/global/nav/menu";return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:b})}});
;
jive.namespace("Navbar.Menu.Home");jive.Navbar.Menu.Home.Main=jive.oo.Class.extend(function(a){this.init=function(c){var b=this;b.$button=$j(c);b.menuSource=new jive.ActivityStream.StreamSource();b.counts={inbox:0,actions:0,tasks:0};b.pendingActionsCount=0;$j(c).delegate(".j-js-update-indicator","click",function(h){var d=$j(this),f=$j("#j-home-global-nav-menu");if(!f.length){var g=$j(this);b.$menu=$j(jive.nav.menu.home.main({data:"",counts:""}));b.spinner=new jive.loader.LoaderView();b.$menu.html(b.spinner.getContent());b.$menu.delegate("div.j-aq-entry","click",function(e){if(!$j(h.target).is("a")){window.location=jive.app.url({path:"/actions"});e.preventDefault()}});b.$menu.popover({context:g,darkPopover:false,destroyOnClose:true,putBack:false,onLoad:function(){b.menuSource.getGlobalNavMenu().addCallback(function(i){if(i.inboxItems.activityContainerList.length||i.actionItems.actionQueueList.length||i.taskItems.taskList.length){var e=$j(jive.nav.menu.home.content({data:i,counts:b.counts}));b.$menu.trigger("popover.html",[e]);b.spinner.destroy()}else{b.spinner.destroy();b.$menu.trigger("close");d.hide();d.data("count",0);d.html("0");$j("#jive-nav-link-communications .j-js-update-indicator").hide().data("count",0).html("0");$j("#jive-nav-link-actions .j-js-update-indicator").hide().data("count",0).html("0")}})}})}else{f.trigger("close")}h.preventDefault()});jive.ActivityStream.activityNotifier.addListener("activityStream.poll",function(d){b.updateCount(d)});jive.switchboard.addListener("inbox.read",function(){b.decrementNewCount("inbox",1)}).addListener("inbox.unread",function(){b.decrementNewCount("inbox",-1)}).addListener("inbox.markAllRead",function(){b.decrementNewCount("inbox",10000)}).addListener("actions.actionTaken",function(){b.decrementNewCount("actions",1)}).addListener("tasks.taskComplete",function(){b.decrementNewCount("tasks",1)}).addListener("tasks.taskIncomplete",function(){b.decrementNewCount("tasks",-1)})};this.updateCount=function(c){var b=this;b.counts.inbox=c.fullCounts.communications.unreadCount;b.counts.actions=c.fullCounts.actions;b.counts.tasks=c.fullCounts.overdueTasks;b.counts.moderations=c.fullCounts.moderations;b.renderCounts()};this.decrementNewCount=function(c,d){var b=this;if(b.counts[c]<=50||d>1000){b.counts[c]=b.counts[c]-d;if(b.counts[c]<0){b.counts[c]=0}b.renderCounts()}};this.renderCounts=function(){var b=this,e=b.counts.inbox+b.counts.actions+b.counts.tasks+b.counts.moderations,d=$j(jive.welcome.updateIndicator({type:"count",count:e,extraCssClasses:"j-navbadge-count j-ui-elem"}));var c=b.$button.find(".j-js-update-indicator");if(c.length){c.replaceWith(d)}else{b.$button.append(d)}if(b.$button.hasClass("active")){b.updateTitleCount(e)}};this.updateTitleCount=function(c){var e=document.title,d=e.indexOf(")");if(d!=-1){e=e.substring(e.indexOf(")")+2)}var b="";if(c>0){b=jive.home.countForTitle({count:c})}document.title=b+" "+e}});
;
jive.namespace('nitro.admin');

/**
 * @depends path=/resources/scripts/jive/json-security.js
 */

jive.nitro.admin.NitroAdminSource = jive.RestService.extend(function(protect, _super) {
	protect.init = function(options) {
		this.options = options;
	};

	this.loadNitroAdminConfig = function() {
		var promise = new jive.conc.Promise();
		var error = this.errorFinding;
		var url = jive.rest.url("/nitro/admin/config");

		$j.ajax({
			url: url,
			type: "GET",
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success: function(data) {
				promise.emitSuccess(data);
			},
			error: this.errorCallback(promise, error)
		});

		return promise;
	};
});

;
jive.namespace('nitro.admin');

jive.nitro.admin.NitroAdminView = jive.oo.Class.extend(function(protect, _super) {
	jive.conc.observable(this);

	this.init = function(options) {
		var view = this;
		this.options = options;

		$j(document).ready(function() {
			view.attachLinkHandler();
		});
	};

	protect.attachLinkHandler = function() {
		var view = this;

		$j('#jive-nav-link-nitro-admin').live('click' , function(e) {
			view.emitP('nitroAdminLinkClicked').addCallback(function(config) {
				$j('#j-satNav-menu').trigger('close');
				view.openModal(config);
				e.preventDefault();
			}).addErrback(function() {
				console.log('promise got an errback');
			});
		});
	};

	protect.openModal = function(config) {
		var view = this;

		if (!$j('#jive-nitro-admin-modal').is(':visible')) {
			var modal = $j(jive.nitro.admin.nitroAdminModal(config));
			$j('body').append(modal);

			view.populateModal(modal.filter(':first'), function() {
				// on close callback
			});
		}
	};

	protect.populateModal = function(modal, callback) {
		modal.lightbox_me({
			onClose: function() {
				callback();
				modal.remove();
			},
			scrollWithPage: false,
			centered: true,
			destroyOnClose: true,
			closeClick: false
		});
	};
});

;
/**
 * @depends path=/plugins/gamification/resources/script/apps/admin/models/admin_source.js plugin=gamification
 * @depends path=/plugins/gamification/resources/script/apps/admin/views/admin_view.js plugin=gamification
 */
jive.namespace('nitro.admin');

jive.nitro.admin.Main = jive.oo.Class.extend(function(protect, _super) {

	this.init = function(options) {
		var main = this;
		this.options = options;

		this.nitroAdminSource = new jive.nitro.admin.NitroAdminSource(options);
		this.nitroAdminView = new jive.nitro.admin.NitroAdminView(options);

		this.nitroAdminView.addListener('nitroAdminLinkClicked', function(promise) {
			main.nitroAdminSource.loadNitroAdminConfig().addCallback(function (config) {
				promise.emitSuccess(config);
			}).addErrback(function (error, status) {
				console.log('got an error in main.js');
				promise.emitError(error, status);
			});
		});
	};
});

;
/**
 * @depends path=/plugins/gamification/resources/script/apps/admin/main.js plugin=gamification
 */

$j(document).ready(function() {
	new jive.nitro.admin.Main({});
});

;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.nitro=="undefined"){jive.nitro={}}if(typeof jive.nitro.admin=="undefined"){jive.nitro.admin={}}jive.nitro.admin.nitroAdminModal=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="jive-modal" id="jive-nitro-admin-modal"><header><h2 class="jive-modal-title">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("nitro.admin.title"),[])),'</h2></header><a class="j-modal-close-top jive-close close" href="#">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close"),[])),' <span class="j-close-icon j-ui-elem"></span></a><section class="jive-modal-content clearfix"><iframe src="',soy.$$escapeHtml(A.baseUrl),"/?userName=",soy.$$escapeHtml(A.username),"&password=",soy.$$escapeHtml(A.password),'&autoLogin=true&mode=jive">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("nitro.admin.title"),[])),"</iframe></section></div>");return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.event=="undefined"){jive.event={}}if(typeof jive.event.attendance=="undefined"){jive.event.attendance={}}jive.event.attendance.display=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id="event-rsvp">');jive.event.attendance.rsvpButton(A.event.attendance,B);jive.event.attendance.attendees(soy.$$augmentData(A.event.attendance,{maxAttendees:A.event.maxAttendees,currentUserID:A.currentUserID}),B);B.append("</div>");return C?"":B.toString()};jive.event.attendance.displaySmall=function(A,C){var B=C||new soy.StringBuilder();jive.event.attendance.rsvpButton(A.event.attendance,B);jive.event.attendance.attendeesSmall(soy.$$augmentData(A.event.attendance,{maxAttendees:A.event.maxAttendees}),B);return C?"":B.toString()};jive.event.attendance.rsvpButton=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="jive-event-rsvp j-btn-global',(!A.canAttend||A.ended)?" j-btn-global-disabled":"",'">',((A.canAttend||A.response==A.yesStatus)&&!A.ended)?(A.response==0)?'<a id="event-rsvp-link" href="#">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.invite.response.text"),[]))+"</a>":'<span class="jive-event-rsvp-status">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.invite.response."+A.response+".text"),[]))+'</span><p><a id="event-rsvp-link" class="event-rsvp-change-link" href="#">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.invite.change.link"),[]))+"</a></p>":'<div id="jive-event-norsvp" '+((A.rsvpRejected)?'class="jive-event-rsvp-error"':"")+">"+((A.anonymous)?'<p><a href="login.jspa">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.attendance.logged_out.text"),[]))+"</a></p>":(A.containerAllowsAttendance==false)?(A.canJoinGroupToContribute)?'<p><a class="jive-link-joinSocialGroup" href="#">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.attendance.join.text"),[]))+"</a></p>":"<p>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.attendance.readonly.text"),[]))+"</p>":"<p>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.cannotAttendReason),[]))+'</p><p id="jive-event-norsvp-reason">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.attendance.cannotattend.text"),[]))+"</p>")+"</div>",'</div><div class="jive-event-rsvp-choices" id="event-rsvp-choices" style="display:none"><ul><li class="jive-event-rsvp',(A.response==A.yesStatus)?"-selected":"",'">',(A.response==A.yesStatus)?'<span class="jive-icon-med jive-icon-check"></span>':"",' <a id="event-rsvp-yes" class="jive-event-rsvp-choice" href="#">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.attendee.status.yes.label"),[])),'</a></li><li class="jive-event-rsvp',(A.response==A.noStatus)?"-selected":"",'">',(A.response==A.noStatus)?'<span class="jive-icon-med jive-icon-check"></span>':"",' <a id="event-rsvp-no" class="jive-event-rsvp-choice" href="#">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.attendee.status.no.label"),[])),'</a></li><li class="jive-event-rsvp',(A.response==A.maybeStatus)?"-selected":"",'">',(A.response==A.maybeStatus)?'<span class="jive-icon-med jive-icon-check"></span>':"",' <a id="event-rsvp-maybe" class="jive-event-rsvp-choice" href="#">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.attendee.status.maybe.label"),[])),"</a></li></ul></div>");return C?"":B.toString()};jive.event.attendance.attendeesSmall=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="jive-event-attendees-summary"><ul class="jive-event-values"><li><h4>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.attendees.attending.title"),[])),soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.colon"),[])),"</h4><span>",soy.$$escapeHtml(A.yesAttendees.count),(A.capped)?" "+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.of"),[]))+" "+soy.$$escapeHtml(A.maxAttendees):"","</span></li></ul></div>");return C?"":B.toString()};jive.event.attendance.attendees=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id="jive-event-attendees-container" class="jive-event-attendees">');jive.event.attendance.attendeesList(soy.$$augmentData(A.yesAttendees,{type:"attending",currentUserID:A.currentUserID,displayCap:A.capped,maxAttendees:A.maxAttendees,status:A.yesStatus}),B);jive.event.attendance.attendeesList(soy.$$augmentData(A.noAttendees,{type:"notattending",currentUserID:A.currentUserID,displayCap:false,status:A.noStatus}),B);jive.event.attendance.attendeesList(soy.$$augmentData(A.maybeAttendees,{type:"tentative",currentUserID:A.currentUserID,displayCap:false,status:A.maybeStatus}),B);if(A.canAttend){jive.event.attendance.attendeesList(soy.$$augmentData(A.unansweredInvitees,{type:"awaiting",currentUserID:A.currentUserID,displayCap:false,status:0}),B)}B.append("</div>");return C?"":B.toString()};jive.event.attendance.attendeesList=function(A,G){var C=G||new soy.StringBuilder();C.append('<div class="jive-event-attendee-list-container" id="event-attendees-',soy.$$escapeHtml(A.type),'"><h2>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.attendees."+A.type+".title"),[]))," ",(A.displayCap)?"("+soy.$$escapeHtml(A.count)+" "+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.of"),[]))+" "+soy.$$escapeHtml(A.maxAttendees)+")":(A.count>0)?"("+soy.$$escapeHtml(A.count)+")":""," ",(A.moreAvailable)?'<a class="see-all-'+soy.$$escapeHtml(A.type)+'-attendees-link" data_type="'+soy.$$escapeHtml(A.type)+'" data_status="'+soy.$$escapeHtml(A.status)+'" href="#">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.attendees.see_all.link"),[]))+"</a>":"",'</h2><ul class="jive-event-attendee-list',(A.count==0)?"-empty":"",' j-rc4 clearfix">');if(A.count>0){var E=A.users;var D=E.length;for(var F=0;F<D;F++){var B=E[F];jive.event.attendance.attendee({user:B,currentUserID:A.currentUserID},C)}}else{C.append('<li class="jive-event-attendee-none">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.attendees."+A.type+".none.text"),[])),"</li>")}C.append("</ul></div>");return G?"":C.toString()};jive.event.attendance.attendee=function(A,C){var B=C||new soy.StringBuilder();B.append('<li class="jive-event-attendee clearfix"><div>');jive.event.attendance.avatar(soy.$$augmentData(A.user,{size:27}),B);jive.event.attendance.userLink(A,B);B.append("</div></li>");return C?"":B.toString()};jive.event.attendance.allAttendees=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="jive-modal" id="jive-event-attendees-modal" data-you-id="',soy.$$escapeHtml(A.youID),'"><header><h2 class="jive-modal-title">',soy.$$escapeHtml(A.attendees.totalResults)," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.attendees."+A.status+".title"),[])),'</h2></header><a class="j-modal-close-top jive-close close" href="#">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close"),[])),' <span class="j-close-icon j-ui-elem"></span></a><section id="modal-attendees-container" class="jive-modal-content clearfix">');jive.event.attendance.renderUserTable(soy.$$augmentData(A,{currentUserID:A.youID,users:A.attendees}),B);B.append("</section></div>");return C?"":B.toString()};jive.event.attendance.renderUserTable=function(A,C){var B=C||new soy.StringBuilder();B.append('<table id="modal-attendees" class="attendees-list"><tbody>');jive.event.attendance.renderUserRows(A,B);B.append("</tbody></table>");return C?"":B.toString()};jive.event.attendance.renderUserRows=function(B,G){var C=G||new soy.StringBuilder();var E=B.users.list;var D=E.length;for(var F=0;F<D;F++){var A=E[F];jive.event.attendance.displayUserRow({user:A,currentUserID:B.currentUserID},C)}return G?"":C.toString()};jive.event.attendance.displayUserRow=function(A,C){var B=C||new soy.StringBuilder();B.append('<tr><td class="j-td-avatar">');jive.event.attendance.avatar(soy.$$augmentData(A.user,{size:35}),B);B.append('</td><td class="j-td-name">');jive.event.attendance.userLink(A,B);B.append("</td></tr>");return C?"":B.toString()};jive.event.attendance.avatar=function(A,C){var B=C||new soy.StringBuilder();B.append((!A.jive.enabled)?'<img class="jive-avatar" src="'+jive.soy.func.normalizeUrl(window._jive_base_url,"/images/jive-avatar-disabled.png")+'" width="'+soy.$$escapeHtml(A.size)+'" height="'+soy.$$escapeHtml(A.size)+'"/>':'<img class="jive-avatar" '+((A.jive.username)?'src="'+soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"/people/"+encodeURIComponent(A.jive.username)+"/avatar/"+A.size+".png"))+'" data-username="'+soy.$$escapeHtml(encodeURIComponent(A.jive.username))+'" ':'src="'+jive.soy.func.normalizeUrl(window._jive_base_url,"/images/jive-avatar-default.png")+'" ')+'height="'+soy.$$escapeHtml(A.size)+'" data-height="'+soy.$$escapeHtml(A.size)+'" width="'+soy.$$escapeHtml(A.size)+'" data-random="'+soy.$$escapeHtml(jive.soy.func.randomString())+'" alt="'+soy.$$escapeHtml(A.displayName)+'" title="'+soy.$$escapeHtml(A.displayName)+'"/>');return C?"":B.toString()};jive.event.attendance.userLink=function(A,C){var B=C||new soy.StringBuilder();if(A.currentUserID==A.user.id){B.append('<a class="jive-username-link" href="',soy.$$escapeHtml(A.user.resources.html.ref),'">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.you"),[])),"</a>")}else{jive.shared.displayutil.userDisplayNameLink(soy.$$augmentData(A.user,{visible:true,username:A.user.jive.username}),B)}return C?"":B.toString()};jive.event.attendance.displayMessageKey=function(A,C){var B=C||new soy.StringBuilder();B.append("\t",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.messageKey),[])));return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.shared=="undefined"){jive.shared={}}if(typeof jive.shared.soy=="undefined"){jive.shared.soy={}}jive.shared.soy.actionLink=function(A,C){var B=C||new soy.StringBuilder();B.append("<a ",(A.id)?'id="'+soy.$$escapeHtml(A.id)+'"':"",' href="',soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,A.url)+"?"+jive.soy.func.buildParameterString(A.urlParams)),'" class="',(A.linkCss)?soy.$$escapeHtml(A.linkCss):"",(A.activeTab)?" j-ui-elem":"",'"',(A.urlParams&&A.urlParams.contentType)?'data-content-type="'+soy.$$escapeHtml(A.urlParams.contentType)+'"':"",(A.urlParams&&A.urlParams.containerType)?'data-container-type="'+soy.$$escapeHtml(A.urlParams.containerType)+'"':"",">",(!A.hideIcon)?'<span class="'+((A.iconCss)?soy.$$escapeHtml(A.iconCss):"")+" jive-icon-"+((A.iconSize)?soy.$$escapeHtml(A.iconSize):"med")+'"></span>':"",(A.subject)?soy.$$escapeHtml(A.subject):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.nameKey),[])),(A.includeCounter)?' <span class="j-js-newCount j-rc5" style="display:none">'+((A.count)?soy.$$escapeHtml(A.count):"0")+"</span>":"","</a>");return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.announcements=="undefined"){jive.announcements={}}jive.announcements.list=function(A,G){var B=G||new soy.StringBuilder();if(A.announcements.length>0){B.append('<div id="jive-alert" role="marquee" class="clearfix">');jive.shared.soy.resourceInlineJs({code:"$j(document).ready( function() {var jiveAnnouncementsAction = new jive.AnnouncementsAction.Main();});"},B);var F=A.announcements;var C=F.length;for(var D=0;D<C;D++){var E=F[D];B.append('<span id="j-announcement-',soy.$$escapeHtmlAttribute(D+1),'" class="j-508-label">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("anncmt.announcement.gtitle"),[]))," ",soy.$$escapeHtml(D+1)," ",E.subject,'</span><div class="jive-alert-type jive-alert-announcement" id="jive-alert-',soy.$$escapeHtmlAttribute(D+1),'" aria-labelledby="j-announcement-',soy.$$escapeHtmlAttribute(D+1),'" tabindex="0"',(!(D==0))?'style="display: none;"':"",'><div class="jive-alert-header"><h5 class="jive-alert-title"><span class="jive-alert-label jive-alert-announcement-label"><span class="jive-icon-med jive-icon-announcement"></span>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("anncmt.announcement.gtitle"),[])),soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.colon"),[])),"</span>",(E.subjectURI)?'<a href="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(E.subjectURI))+'">':"",E.subject,(E.subjectURI)?"</a>":"",'</h5><ul><li class="jive-alert-details-show" id="jive-alert-details-show-',soy.$$escapeHtmlAttribute(D+1),'"><a href="#" onclick="showAlertContent(); return false;">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.show_details"),[])),'</a></li><li class="jive-alert-details-hide" id="jive-alert-details-hide-',soy.$$escapeHtmlAttribute(D+1),'" style="display: none;"><a href="#" onclick="hideAlertContent(); return false;">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.hide_details"),[])),'</a></li></ul></div><div class="jive-alert-content" id="jive-alert-content-',soy.$$escapeHtmlAttribute(D+1),'" style="display: none;"><div id="jive-announcements-links-',soy.$$escapeHtmlAttribute(E.id),'" class="jive-alert-details font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("jivemacro.by.label"),[]))," ",soy.$$escapeHtml(E.user.displayName)," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.left_paren"),[])),soy.$$escapeHtml((E.publishDate?dateFormat(parseFloat(E.publishDate),"mmmm d, yyyy"):"")),soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.right_paren"),[])),"<span>");if(E.canEdit){jive.announcements.buildEditLinkByIds(soy.$$augmentData(A,{announcementId:E.id,announcementSubject:E.subject}),B);B.append((!E.expired)?'<a href="#" onclick="$j(\'#jive-body-announcements-expire-'+soy.$$escapeJsString(E.id)+"').show(); $j('#jive-body-announcements-delete-"+soy.$$escapeJsString(E.id)+"').hide(); $j('#jive-body-announcements-dismiss-"+soy.$$escapeJsString(E.id)+"').hide(); return false;\">"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.expire"),[]))+"</a>":"",'<a href="#" onclick="$j(\'#jive-body-announcements-delete-',soy.$$escapeJsString(E.id),"').show(); $j('#jive-body-announcements-expire-",soy.$$escapeJsString(E.id),"').hide(); $j('#jive-body-announcements-dismiss-",soy.$$escapeJsString(E.id),"').hide(); return false;\">",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.delete"),[])),"</a>")}B.append("</span></div>",(E.image)?'<img src="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(E.image))+'" class="j-announcement-overview-image" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("anncmt.overview.image.text"),[]))+'" alt="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("anncmt.overview.image.text"),[]))+'" />':"",E.body,'<div class="jive-body-announcements-confirm" id="jive-body-announcements-expire-',soy.$$escapeHtmlAttribute(E.id),'" style="display: none;"><p>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("announcement.confirm.expiration.text"),[])),'</p><form><input type="button" name="delete" value="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("anncmt.expire_announcemt.button"),[])),'" class="announcement-expire" data-object-id="',soy.$$escapeHtmlAttribute(E.id),'"/><input type="button" name="cancel" value="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.cancel"),[])),'" onclick="$j(\'#jive-body-announcements-expire-',soy.$$escapeJsString(E.id),'\').hide();return false;"/></form></div><div class="jive-body-announcements-confirm" id="jive-body-announcements-delete-',soy.$$escapeHtmlAttribute(E.id),'" style="display: none;"><p>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("jivemacro.confirmDelAncmnt.text"),[])),'</p><form><input type="button" name="delete" value="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("anncmt.del_announcement.button"),[])),'" class="announcement-remove" data-object-id="',soy.$$escapeHtmlAttribute(E.id),'"/><input type="button" name="cancel" value="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.cancel"),[])),'" onclick="$j(\'#jive-body-announcements-delete-',soy.$$escapeJsString(E.id),"').hide();return false;\"/></form></div>",(A.showDismiss)?'<div class="jive-alert-userRemove clearfix"><div class="jive-alert-userRemove-message"><a href="#" class="announcement-dismiss" data-object-id="'+soy.$$escapeHtmlAttribute(E.id)+'">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("anncmt.dismiss_announcemt.button"),[]))+'</a><span class="font-color-meta">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.left_paren"),[]))+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("anncmt.dismiss_announcemt.text"),[]))+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.right_paren"),[]))+'</span></div><div class="jive-body-announcements-confirm" id="jive-body-announcements-dismiss-'+soy.$$escapeHtmlAttribute(E.id)+'" style="display: none;"><p>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("jivemacro.confirmDismissAncmnt.msg"),[]))+"</p></div></div>":"","</div></div>")}if(A.announcements.length>1){B.append('<span id="jive-alert-counter"><span id="j-anncmt-previous-label" class="j-508-label" aria-hidden="true">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("anncmt.previous.text"),[])),'</span><a href="#" id="j-anncmt-previous" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("anncmt.previous.text"),[])),'" aria-labelledby="j-anncmt-previous-label"><span class="jive-icon-med jive-icon-arrow-left"></span></a><span class="j-508-label">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("anncmt.count.text"),[])),'</span><span id="jive-alert-counter-display"></span><span id="j-anncmt-next-label" class="j-508-label" aria-hidden="true">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("anncmt.next.text"),[])),'</span><a href="#" id="j-anncmt-next" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("anncmt.next.text"),[])),'" aria-labelledby="j-anncmt-next-label"><span class="jive-icon-med jive-icon-arrow-right"></span></a></span>');jive.shared.soy.resourceInlineJs({code:"var alertCycle = window.setInterval(cycleAlerts, 15000); var pauseCycle = false; var currentAlert = 1; var alertCount = "+soy.$$escapeHtml(A.announcements.length)+"; function shiftAlert(increment) {var newIndex = currentAlert+increment; if (newIndex>alertCount) {newIndex = 1;}else if (newIndex<1) {newIndex = alertCount;}showAlert(newIndex); $j('#jive-alert-' + newIndex).focus();}function cycleAlerts() {if (!pauseCycle) {currentAlert++; if (currentAlert > alertCount) {currentAlert = 1;}showAlert(currentAlert);}}function showAlert(index) {$j('.jive-alert-type').hide(); $j('#jive-alert-' + index).show(); $j('.jive-alert-count').removeClass('jive-alert-count-active'); $j('#jive-alert-count-' + index).addClass('jive-alert-count-active'); currentAlert = index; $j(\"#jive-alert-counter-display\").text(currentAlert+\"/\"+alertCount);}function chooseAlert(index) {clearInterval(alertCycle); showAlert(index);}function showAlertContent() {clearInterval(alertCycle); $j('.jive-alert-details-show').hide(); $j('.jive-alert-details-hide').show(); $j('.jive-alert-details-hide a').focus(); $j('.jive-alert-content').show();}function hideAlertContent() {clearInterval(alertCycle); $j('.jive-alert-details-hide').hide(); $j('.jive-alert-details-show').show(); $j('.jive-alert-details-show a').focus(); $j('.jive-alert-content').hide();}$j(function() {$j('#jive-alert').mouseover(function(e) { pauseCycle = true; }); $j('#jive-alert').mouseout(function(e) { pauseCycle = false; }); $j('#j-anncmt-previous').click(function(e) { shiftAlert(-1); } ); $j('#j-anncmt-previous').keyup(function(e) { if (e.keyCode == 13) shiftAlert(-1); } ); $j('#j-anncmt-next').click(function(e) { shiftAlert(1); } ); $j('#j-anncmt-next').keyup(function(e) { if (e.keyCode == 13) shiftAlert(1); } ); showAlert(1);});"},B)}else{jive.shared.soy.resourceInlineJs({code:"function showAlertContent() {$j('#jive-alert-details-show-1').hide(); $j('#jive-alert-details-hide-1').show(); $j('#jive-alert-details-hide-1 a').focus(); $j('#jive-alert-content-1').show();}function hideAlertContent() {$j('#jive-alert-details-hide-1').hide(); $j('#jive-alert-details-show-1').show(); $j('#jive-alert-details-show-1 a').focus(); $j('#jive-alert-content-1').hide();}"},B)}B.append("</div>")}return G?"":B.toString()};jive.announcements.manageRow=function(A,C){var B=C||new soy.StringBuilder();B.append('<tr class="',soy.$$escapeHtmlAttribute(A.statkey),'" data-object-id="',soy.$$escapeHtmlAttribute(A.id),'" data-object-status="',soy.$$escapeHtmlAttribute(A.statkey),'"><td class="name subject"><div>',soy.$$escapeHtml(A.subject),'</div></td><td class="author">',soy.$$escapeHtml(A.user),'</td><td class="date"><strong class="',(A.statkey=="active")?"font-color-normal":(A.statkey=="upcoming")?"'font-color-new'":(A.statkey=="expired")?"'font-color-meta'":"",'">',soy.$$escapeHtml(A.status),"</strong> - ",soy.$$escapeHtml(A.days),'</td><td class="actions">',(A.statkey=="expired")?'<a href="#" class="updateViewLink">('+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.edit"),[]))+'</a> | <a href="#" class="expireRemoveLink">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.delete"),[]))+")</a>":'<a href="#" class="updateViewLink">('+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.edit"),[]))+'</a> | <a href="#" class="expireRemoveLink">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.expire"),[]))+")</a>","</td></tr>");return C?"":B.toString()};jive.announcements.noResults=function(A,C){var B=C||new soy.StringBuilder();B.append("<tr><td>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("announcement.manage.no-announcements.text"),[])),"</td></tr>");return C?"":B.toString()};jive.announcements.confirmDelete=function(A,C){var B=C||new soy.StringBuilder();B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("jivemacro.confirmDelAncmnt.text"),[])));return C?"":B.toString()};jive.announcements.confirmExpire=function(A,C){var B=C||new soy.StringBuilder();B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("announcement.confirm.expiration.text"),[])));return C?"":B.toString()};jive.announcements.announcementCard=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="j-announcement j-rc5 js-announcement" ',(A.announcement.resources)?'data-ref="'+soy.$$escapeHtmlAttribute(A.announcement.resources.self.ref)+'"':"","><div class='j-announcement-header'><div class=\"js-announcement-header-content\">");if(A.announcement.subjectURITargetType){jive.announcements.buildIconByType(A,B)}else{if(A.announcement.subjectURI){B.append("<span role='img' title='",soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.externalUrl"),[])),'\' class="jive-icon-med jive-icon-external-site"></span>')}else{B.append("<span role='img' title='",soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.announcement"),[])),'\' class="jive-icon-med jive-icon-announcement"></span>')}}B.append((A.announcement.subjectURI)?'<a href="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(A.announcement.subjectURI))+'" class="js-announcement-subjectURI">':"",'<span class="j-508-label">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.announcement"),[])),"</span>",A.announcement.subject,(A.announcement.subjectURI)?"</a>":"",'</div></div><div class="j-announcement-body ',soy.$$escapeHtmlAttribute($j(A.announcement.content.text).text().length<1?"j-announce-image-only":"j-announce-text"),' clearfix">',(A.announcement.image&&$j(A.announcement.content.text).text().length<1)?'<div class="j-announcement-image-wrapper"><img src="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(A.announcement.image))+'" alt="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.access.announcement.image"),[]))+'" /></div>':((A.announcement.image)?'<img src="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(A.announcement.image))+'" alt="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.access.announcement.image"),[]))+'" />':"")+A.announcement.content.text,'</div><div class="j-announcement-more" style="display:none;"><a href=\'#\'>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.more"),[])),'</a></div><div class="j-author font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("announcement.manage.createdOn.text"),[((A.announcement.publishDate?jive.model.DateUtil.parseISODateTime(A.announcement.publishDate):"")?dateFormat(parseFloat((A.announcement.publishDate?jive.model.DateUtil.parseISODateTime(A.announcement.publishDate):"")),"mmmm d, yyyy"):"")])),"<br/>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("announcement.manage.createdBy.text"),[A.announcement.author.displayName?A.announcement.author.displayName:jive.i18n.i18nText(jive.i18n.getMsg("global.you"),[])])),"</div></div>");return C?"":B.toString()};jive.announcements.buildIconByType=function(A,C){var B=C||new soy.StringBuilder();B.append((A.announcement.subjectURI&&A.announcement.subjectURITargetType)?(A.announcement.subjectURITargetType=="message"||A.announcement.subjectURITargetType=="discussion")?"<span title='"+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.discussion"),[]))+"' role='img' class=\"jive-icon-discussion jive-icon-med\"></span>":(A.announcement.subjectURITargetType=="document"||A.announcement.subjectURITargetType=="file")?"<span title='"+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.document"),[]))+"' role='img' class=\"jive-icon-document jive-icon-med\"></span>":(A.announcement.subjectURITargetType=="post"||A.announcement.subjectURITargetType=="blog")?"<span title='"+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.blogPost"),[]))+"' role='img' class=\"jive-icon-blog jive-icon-med\"></span>":(A.announcement.subjectURITargetType=="update")?"<span title='"+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.announcement"),[]))+"' role='img' class=\"jive-icon-status jive-icon-med\"></span>":(A.announcement.subjectURITargetType=="favorite")?"<span title='"+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.announcement"),[]))+"' role='img' class=\"jive-icon-med jive-icon-external-site\"></span>":(A.announcement.subjectURITargetType=="poll")?"<span title='"+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.poll"),[]))+"' role='img' class=\"jive-icon-poll jive-icon-med\"></span>":(A.announcement.subjectURITargetType=="task")?"<span title='"+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.task"),[]))+"' role='img' class=\"jive-icon-med jive-icon-task\"></span>":(A.announcement.subjectURITargetType=="space"||A.announcement.subjectURITargetType=="project"||A.announcement.subjectURITargetType=="group")?"<span title='"+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.announcement"),[]))+"' role='img' class=\"jive-icon-"+soy.$$escapeHtmlAttribute(A.announcement.subjectURITargetType)+' jive-icon-med"></span>':(A.announcement.subjectURI)?"<span title='"+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.announcement"),[]))+"' role='img' class=\"jive-icon-med jive-icon-external-site\"></span>":"<span title='"+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.announcement"),[]))+"' role='img' class=\"jive-icon-med jive-icon-announcement\"></span>":"<span title='"+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.announcement"),[]))+"' role='img' class=\"jive-icon-med jive-icon-announcement\"></span>");return C?"":B.toString()};jive.announcements.buildEditLinkByIds=function(A,C){var B=C||new soy.StringBuilder();B.append('<a href="',(A.containerType&&A.containerId)?soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/edit-announcements.jspa?announcementId="+A.announcementId+"&containerType="+A.containerType+"&containerID="+A.containerId))):soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/edit-announcements.jspa?announcementId="+A.announcementId))),'" class="js-editLink">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("announcement.manage.edit.title"),[])),'<span class="j-508-label">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.announcement"),[]))," ",A.announcementSubject,"</span></a>");return C?"":B.toString()}
;
jive.namespace("AnnouncementsAction");jive.AnnouncementsAction.ActionView=jive.AbstractView.extend(function(a){var b=jQuery;this.init=function(d){var c=this;$j(".announcement-expire").bind("click",function(f){var g=$j(this).attr("data-object-id");c.emitP("expire",g).addCallback(function(e){window.location.reload()})});$j(".announcement-remove").bind("click",function(f){var g=$j(this).attr("data-object-id");c.emitP("remove",g).addCallback(function(e){window.location.reload()})});$j(".announcement-dismiss").bind("click",function(f){var g=$j(this).attr("data-object-id");$j("#jive-body-announcements-dismiss-"+g).fadeIn(3000,function(){c.emitP("dismiss",g).addCallback(function(e){window.location.reload()})});$j(".jive-alert-userRemove-message").hide();$j("#jive-body-announcements-expire-"+g).hide();$j("#jive-body-announcements-delete-"+g).hide()})}});
;
jive.namespace("Announcements");jive.Announcements.Source=jive.RestService.extend(function(a,b){a.resourceType="announcement";this.init=function(c){b.init.call(this);this.suppressGenericErrorMessages()};this.expire=function(c){return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:this.RESOURCE_ENDPOINT+"/expire/"+c})};this.dismiss=function(c){return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:this.RESOURCE_ENDPOINT+"/dismiss/"+c})};this.showGenericSaveError=function(){this.displayError(this.errorSaving())};this.findAll=function(c){return b.findAll.call(this,jQuery.extend({nonce:(new Date()).getTime()},c))}});
;
jive.namespace("AnnouncementsAction");jive.AnnouncementsAction.Main=jive.oo.Class.extend(function(a){this.init=function(c){var b=this;b.view=new jive.AnnouncementsAction.ActionView(c);b.source=new jive.Announcements.Source();b.view.addListener("expire",function(e,d){b.source.expire(e).addCallback(function(){d.emitSuccess()})});b.view.addListener("remove",function(e,d){b.source.destroy(e).addCallback(function(){d.emitSuccess()})});b.view.addListener("dismiss",function(e,d){b.source.dismiss(e).addCallback(function(){d.emitSuccess()})})}});
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.soy=="undefined"){jive.soy={}}if(typeof jive.soy.email_notification=="undefined"){jive.soy.email_notification={}}jive.soy.email_notification.start=function(A,C){var B=C||new soy.StringBuilder();switch(A.type){case"common":jive.soy.email_notification.common({message:soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("thread.start_watch.link"),[]))},B);break;case"socialButton":jive.soy.email_notification.commonInSocialButton({message:soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("thread.start_watch.link"),[]))},B);break}return C?"":B.toString()};jive.soy.email_notification.stop=function(A,C){var B=C||new soy.StringBuilder();switch(A.type){case"common":jive.soy.email_notification.common({message:soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("thread.stop_watch.link"),[]))},B);break;case"socialButton":jive.soy.email_notification.commonInSocialButton({message:soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("thread.stop_watch.link"),[]))},B);break}return C?"":B.toString()};jive.soy.email_notification.message=function(A,C){var B=C||new soy.StringBuilder();switch(A.type){case"watch":B.append((A.isUser)?"<p>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.watchuser.start"),[]))+"</p>":"<p>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.watch.start"),[]))+"</p>");break;case"unwatch":B.append((A.isUser)?"<p>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.watchuser.stop"),[]))+"</p>":"<p>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.watch.stop"),[]))+"</p>");break}return C?"":B.toString()};jive.soy.email_notification.common=function(A,C){var B=C||new soy.StringBuilder();B.append('<a href="#" rel="nofollow"><span class="jive-icon-med jive-icon-message-open"></span>',soy.$$escapeHtml(A.message),"</a>");return C?"":B.toString()};jive.soy.email_notification.commonInSocialButton=function(A,C){var B=C||new soy.StringBuilder();B.append('<a href="#" class="j-social-button j-rc5 j-button-toggle-email-notifications j-ui-elem"><span class="j-ui-elem"><span class="jive-icon-med jive-icon-message-open"></span>',soy.$$escapeHtml(A.message),"</span></a>");return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.movecontent=="undefined"){jive.movecontent={}}jive.movecontent.imports=function(A,C){var B=C||new soy.StringBuilder();return C?"":B.toString()};jive.movecontent.successMessage=function(A,E){var C=E||new soy.StringBuilder();C.append('<div class="jive-success-box" aria-live="polite" aria-atomic="true"><div><span class="jive-icon-med jive-icon-check"></span>');var B=new soy.StringBuilder();jive.shared.displayutil.containerDisplayNameLink({container:A.prevContainer},B);var D=new soy.StringBuilder();jive.shared.displayutil.containerDisplayNameLink(A,D);jive.shared.soy.i18nHelper({i18nKey:"content.mv.success",arg0:soy.$$escapeHtml(A.contentTypeName),arg1:B.toString(),arg2:D.toString(),noAutoEscape:"true"},C);C.append("</div></div>");return E?"":C.toString()};jive.movecontent.confirm=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="js-move-confirm-section"><header><h2>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("content.mv.confirm.title"),[])),'</h2></header><a class="j-modal-close-top close" href="#">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close"),[])),' <span class="j-close-icon j-ui-elem" role="img"></span></a><section class="jive-modal-content jive-modal-content-move clearfix"><h6>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("content.mv.really_move_it.text"),[A.content.objectTypeName])),'</h6><p><img src="',soy.$$escapeHtml(jive.soy.func.resourceUrl(window._jive_base_url,"/6.0.2.0/","","/images/transparent.png")),'" alt="" class="',soy.$$escapeHtml(A.content.iconCss),' jive-icon-med" /> ',A.content.subject,"</p><h6>");if(A.targetPersonalContainer){jive.shared.soy.i18nHelper({i18nKey:"content.mv.into_ctr.text",arg0:'<img src="'+soy.$$escapeHtml(jive.soy.func.resourceUrl(window._jive_base_url,"/6.0.2.0/","","/images/transparent.png"))+'" alt="" class="'+soy.$$escapeHtml(A.content.iconCss)+' jive-icon-med" /> '+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.personalContainerKey),[])),noAutoEscape:"true"},B)}else{B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("content.mv.into_this_ctr.text"),[A.targetContainer.objectTypeName])))}B.append("</h6>",(!A.targetPersonalContainer)?'<p><img src="'+soy.$$escapeHtml(jive.soy.func.resourceUrl(window._jive_base_url,"/6.0.2.0/","","/images/transparent.png"))+'" alt="" class="'+soy.$$escapeHtml(A.targetContainer.iconCss)+' jive-icon-med" /> '+A.targetContainer.subject+"</p>":"",(A.docWithCollaborators)?'<p class="jive-warning"><span><span class="jive-icon-sml jive-icon-warn"></span>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("content.mv.remove_collab.text"),[]))+"</span></p>":"",(A.restrictedSocialGroup)?'<p class="jive-warning"><span><span class="jive-icon-sml jive-icon-warn"></span>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("content.mv.restricted_group.text"),[]))+"</span></p>":"",'<div class="j-form-row"><button class="js-move-confirm j-btn-callout">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("content.mv.confirm.button"),[])),'</button><button class="js-move-confirm-cancel">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.cancel"),[])),"</button></div></section></div>");return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.shared=="undefined"){jive.shared={}}if(typeof jive.shared.breadcrumb=="undefined"){jive.shared.breadcrumb={}}jive.shared.breadcrumb.contextMenu=function(A,C){var B=C||new soy.StringBuilder();if(A.place){B.append('<a href="#" id="j-place-parents-link" class="j-context-more j-ui-elem" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("browse.breadcrumb.button.label"),[])),'">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("browse.breadcrumb.button.label"),[])),"</a>");jive.shared.breadcrumb.contextPopover(A,B)}return C?"":B.toString()};jive.shared.breadcrumb.contextPopover=function(G,F){var B=F||new soy.StringBuilder();B.append('<div id="j-place-parents-container" class="j-menu j-breadcrumb-popover" style="display: none"><ul><li><a href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/places"))),'">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("browse.breadcrumb.place.link"),[])),"</a>");if(G.parents.length>0){var E=G.parents;var K=E.length;for(var I=0;I<K;I++){var C=E[I];B.append("<ul><li>",(C.viewableByUser)?'<a href="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,C.objectURL)))+'"><span class="jive-icon-med '+soy.$$escapeHtmlAttribute(C.iconCssClass)+'"></span> '+soy.$$escapeHtml(C.name)+"</a>":'<span><span class="jive-icon-med '+soy.$$escapeHtmlAttribute(C.iconCssClass)+'"></span> '+soy.$$escapeHtml(C.name)+"</span>",'<span class="jive-icon-sml jive-icon-arrow-breadcrumb"></span>')}}B.append('<ul><li><a href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,G.place.objectURL))),'" class="last-child"><span class="jive-icon-med ',soy.$$escapeHtmlAttribute(G.place.iconCssClass),'"></span> ',soy.$$escapeHtml(G.place.name),"</a></li></ul>");if(G.parents.length>0){var D=G.parents;var J=D.length;for(var H=0;H<J;H++){var A=D[H];B.append("</li></ul>")}}B.append("</li></ul></div>");return F?"":B.toString()};jive.shared.breadcrumb.legacyBreadcrumbs=function(A,G){var B=G||new soy.StringBuilder();if(A.place){B.append((A.showHomeURL)?(A.fullHomeURL)?'<a href="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(A.homeURL))+'">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.home"),[]))+"</a>":'<a href="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/")))+soy.$$escapeHtmlAttribute(A.homeURL)+'">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.home"),[]))+"</a>":"",(!A.userContainer)?'<a href="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/places")))+'">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("browse.breadcrumb.place.link"),[]))+"</a>":'<a href="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/people")))+'">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("browse.breadcrumb.people.link"),[]))+"</a>");if(A.parents.length>0){var F=A.parents;var D=F.length;for(var C=0;C<D;C++){var E=F[C];B.append((E.viewableByUser)?'<a href="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,E.objectURL)))+'">'+soy.$$escapeHtml(E.name)+"</a>":"<span class='jive-breadcrumb-unauthorized' title='"+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("community.list.spaces.unauthorized.tooltip"),[]))+"'>"+soy.$$escapeHtml(E.name)+"</span>")}}B.append('<a href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,A.place.objectURL))),'">',soy.$$escapeHtml(A.place.name),"</a>")}return G?"":B.toString()}
;
$j(document).ready(function(){$j("#j-place-parents-link").click(function(a){$j("#j-place-parents-container").popover({context:$j("#j-place-parents-link"),darkPopover:true,destroyOnClose:false});a.preventDefault()})});
;
jive.namespace("ShareApp");jive.ShareApp.ShareSource=jive.RestService.extend(function(a){this.init=function(){this.suppressGenericErrorMessages()};this.save=function(b,f,d){var e=new jive.conc.Promise(),c=this;$j.ajax({type:"POST",url:jive.rest.url("/objects/")+b+"/"+f+"/shares",dataType:"json",data:JSON.stringify(d),contentType:"application/json; charset=utf-8",success:function(g,i,h){if(g){c.merge(d,g)}e.emitSuccess(d)},error:c.errorCallback(e),timeout:30000});return e};this.get=function(b,e){var d=new jive.conc.Promise(),c=this;$j.ajax({type:"GET",url:jive.rest.url("/objects/")+b+"/"+e+"/sharetemplate",dataType:"json",data:{},contentType:"application/json; charset=utf-8",success:function(f,h,g){d.emitSuccess(f)},error:c.errorCallback(d),timeout:30000});return d}});
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.soy=="undefined"){jive.soy={}}if(typeof jive.soy.share=="undefined"){jive.soy.share={}}jive.soy.share.control=function(A,C){var B=C||new soy.StringBuilder();B.append('<a href="#" class="',(A.type=="text")?"share-link j-meta-control ":(A.type=="largeButton")?"j-social-action ":"",(A.classes)?soy.$$escapeHtmlAttribute(A.classes):"",'" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("share.link.title"),[])),'" data-command="share" data-object-type="',soy.$$escapeHtmlAttribute(A.objectType),'" data-object-id="',soy.$$escapeHtmlAttribute(A.objectId),'">',(A.icon)?"<span"+((A.type=="smallButton")?' class="j-ui-elem"':"")+'><span class="jive-icon-med jive-icon-share"></span>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.link"),[]))+"</span>":soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.link"),[])),"</a>");return C?"":B.toString()};jive.soy.share.share=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="jive-modal j-modal" id="jive-modal-share"><header><h2>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.title"),[A.objectNameLower])),'</h2></header><label class="j-508-label" id="close-modal-508">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close.modal"),[])),'</label><a href="#" class="j-modal-close-top close" aria-labelledby="close-modal-508" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.close.modal"),[])),'">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close"),[])),'  <span class="j-close-icon j-ui-elem" role="img"></span></a><section class="jive-modal-content j-invite-modal clearfix"><div id="share-error" class="jive-error-box" style="display:none" aria-live="polite" aria-atomic="true" ></div><form class="j-form">',(A["private"])?'<p class="j-info"><span class="j-info-icon j-ui-elem"></span>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.private.access"),[A.objectNameLower]))+"</p>":"",'<label for="share-users">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.people.label"),[]))," (",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("send.invite.nonusers.noimport.label"),[])),')</label><div class="ie-zindex-fix j-form-exp font-color-meta-light"><strong>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("tips.onboarding.tip5.body3"),[]))," </strong>");jive.UserPicker.soy.inputPlaceholder({userAllowed:true,emailAllowed:A.externallyShareable,multiple:true},B);B.append('</div><div class="j-user-input-typeahead"><input type="text" name="share-users" id="share-users" class="j-autocomplete-input j-user-autocomplete j-autocomplete-jive-chooser-input jive-form-element-text j-ui-elem" autocomplete="on" role="combobox"/></div><div class="ie-zindex-fix j-form-exp j-noimport">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("send.invite.nonusers.noimport.explanation"),[])),'</div><p><label for="jive-send-content-not-message">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.message.label"),[])),'</label><textarea name="message" class="jive-form-element-textarea font-color-normal" id="jive-send-content-not-message">',A.message,'</textarea></p><p><button type="submit" id="share-content-submit" name="share-content-submit" class="j-btn-callout">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.submit.button"),[])),'</button><button type="button" class="close">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.cancel"),[])),"</button></p></form></section></div>");return C?"":B.toString()};jive.soy.share.shareConfirmation=function(A,C){var B=C||new soy.StringBuilder();B.append("<p>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.confirm"),[])),"</p>");return C?"":B.toString()};jive.soy.share.secretGroupMessage=function(A,C){var B=C||new soy.StringBuilder();B.append("<p>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.secretgroup"),[])),"</p>");return C?"":B.toString()};jive.soy.share.send_private_msg=function(A,C){var B=C||new soy.StringBuilder();B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("send.private.autoaccess"),[A.objectName])));return C?"":B.toString()};jive.soy.share.userWithoutPermission=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="js-share-msg j-tips">');if(A.user.anonymous||A.user.external){if(!A.invitationsEnabled){B.append((A.attachmentAvailable)?'<p class="j-warn">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.guest.nopermission.attachment"),[]))+"<p>":'<p class="j-warn">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.guest.nopermission.noattachment"),[]))+"<p>")}else{if(A["private"]&&A.editor){B.append('<p class="j-warn">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.guest.nopermission.invite.private"),[])),"<p>");jive.soy.share.attachmentLinks(A.user,B)}else{if(A.attachmentAvailable){B.append('<p class="j-warn">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.guest.nopermission.invite.attachment"),[])),"<p>");jive.soy.share.attachmentLinks(A.user,B)}else{B.append('<p class="j-warn">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.guest.nopermission.invite.noattachment"),[])),"<p>");jive.soy.share.emailLinks(A.user,B)}}}}else{B.append((A["private"]&&A.editor)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.user.nopermission.private"),[])):(A.attachmentAvailable)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.user.nopermission.attachment"),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.user.nopermission.noattachment"),[])))}B.append("</div>");return C?"":B.toString()};jive.soy.share.attachmentLinks=function(A,C){var B=C||new soy.StringBuilder();B.append('<p><a href="#" class="js-notify-user" data-user-identifier="',soy.$$escapeHtmlAttribute(A.email),'" ',(A.notified)?'style="display:none"':""," >",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.attachment.send.link"),[])),'</a><a href="#" class="js-unnotify-user" data-user-identifier="',soy.$$escapeHtmlAttribute(A.email),'" ',(!A.notified)?'style="display:none"':""," >",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.attachment.remove.link"),[])),"</a><p>");return C?"":B.toString()};jive.soy.share.emailLinks=function(A,C){var B=C||new soy.StringBuilder();B.append('<p><a href="#" class="js-notify-user" data-user-identifier="',soy.$$escapeHtmlAttribute(A.email),'" ',(A.notified)?'style="display:none"':"",">",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.email.send.link"),[])),'</a><a href="#" class="js-unnotify-user" data-user-identifier="',soy.$$escapeHtmlAttribute(A.email),'" ',(!A.notified)?'style="display:none"':"",">",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.email.remove.link"),[])),"</a><p>");return C?"":B.toString()};jive.soy.share.listWithoutPermission=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="js-share-msg j-tips">',(A["private"]&&A.editor)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.list.nopermission.private"),[])):(A.attachmentAvailable)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.list.nopermission.attachment"),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.list.nopermission.noattachment"),[])),"</div>");return C?"":B.toString()};jive.soy.share.usersNotRelated=function(A,C){var B=C||new soy.StringBuilder();B.append('<p class="j-warn"><span class="jive-icon-sml jive-icon-redalert"></span>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("share.notrelated"),[])),"</p>");return C?"":B.toString()}
;
jive.namespace("ShareApp");jive.ShareApp.ShareView=jive.oo.Class.extend(function(a){jive.conc.observable(this);this.init=function(){this.recipients=[];this.options={}};a.submitShare=function(g,c,e,f){var b=this;var d={message:$j("#jive-send-content-not-message").val(),recipients:b.buildRecipientArray(),subject:$j("#jive-send-content-not-subject").val()};d.message=d.message.replace(/</g,"&lt;").replace(/>/g,"&gt;");b.emitP("share",c,g,d).addCallback(function(){$j(jive.soy.share.shareConfirmation({objectName:f})).message({style:"success"});e.trigger("close");if(b.recipients.some(function(h){return h.id!==window._jive_current_user.ID})){jive.dispatcher.dispatch("trial.share.created");jive.dispatcher.dispatch("trial.updatePercentComplete")}b.recipients=[]}).addErrback(function(i){var h=i?$j("<p>"+i+"</p>"):$j(jive.error.rest.soy.errorUpdating({href:window.location}));h.message({showClose:true,style:"error"});e.find("input, button").prop("disabled",false)})};a.buildRecipientArray=function(){var b=this;var c=[];this.checkExternalUsers(this.userPicker.getSelectedUsersAndLists(true));return this.recipients.map(function(d){return{identifier:d.id!=-1?d.id:d.email,notified:d.notified}})};a.checkExternalUsers=function(d){var b=this;$j("#jive-include-attach-div").hide();d.users.forEach(function(e){if(e.id==-1||!e.entitled){$j("#jive-include-attach-div").show()}});this.recipients=this.recipients.filter(function(e){return d.users.some(function(f){return f.email===e.email})});var c=this.addedRecipients(d.users);this.recipients=this.recipients.concat(c)};a.addedRecipients=function(c){var b=this;return c.filter(function(d){return !b.recipients.some(function(e){return d.email===e.email})}).map(function(d){return $j.extend({},d,{notified:false})})};a.recipient=function(b){return this.recipients.filter(function(c){return c.email===b})};a.notifyUser=function(b,c){this.recipient(b).forEach(function(d){d.notified=c});$j(".js-notify-user").toggle();$j(".js-unnotify-user").toggle()};this.openShareModal=function(d,c){var b=this;b.emitP("prepareShare",c,d).addCallback(function(h){if(!b.open){b.open=true;if(h.invitationsEnabled){b.options.invitationsEnabled=true}b.recipients=[];if(h.secretGroup){$j(jive.soy.share.secretGroupMessage()).message({showClose:true,style:"error"})}else{var f=$j(jive.soy.share.share(h));f.lightbox_me({destroyOnClose:true,centered:true,closeClick:false,closeEsc:false,closeFocusSelector:jive.Accessibility.hasStackedFocus()?jive.Accessibility.popFocus():'a.[data-command="share"][data-object-id="'+d+'"][data-object-type="'+c+'"]',onLoad:function(){jive.dispatcher.dispatch("trial.share.modal.loaded")},onClose:function(){b.cleanupModal()}});f.find("form").submit(function(){$j(this).find("input,button").prop("disabled",true);b.submitShare(d,c,f,h.objectNameCapital);return false});var e=new jive.UserPicker.Main({multiple:true,listAllowed:true,emailAllowed:h.externallyShareable,message:"",object:{objectID:d,objectType:c},entitlement:"VIEW",$input:$j("#share-users"),canInvitePartners:h.attachmentAvailable,canInviteJustPartners:false,canInvitePreprovisioned:true,relatedMessage:$j(jive.soy.share.usersNotRelated()),userMessages:[b.getUserPermissionsMessage(h)],listMessages:[b.getListPermissionsMessage(h)],placeholder:" "});e.addListener("selectedUsersChanged",function(i){b.checkExternalUsers(i)});b.userPicker=e;var g=$j("body");g.delegate(".js-notify-user","click",function(i){b.notifyUser($j(this).data("user-identifier"),true);i.preventDefault()});g.delegate(".js-unnotify-user","click",function(i){b.notifyUser($j(this).data("user-identifier"),false);i.preventDefault()})}}}).addErrback(function(f){var e=f?$j("<p>"+f+"</p>"):$j(jive.error.rest.soy.errorFinding({href:window.location}));e.message({showClose:true,style:"error"})})};a.cleanupModal=function(){var b=this;$j(".js-userpicker-user-msg").trigger("close");var c=$j("body");c.undelegate(".js-notify-user","click");c.undelegate(".js-unnotify-user","click");b.open=false};a.getUserPermissionsMessage=function(c){var b=this;return{type:"warn",render:function(d){d.notified=b.recipient(d.email).some(function(f){return f.notified});var e=$j.extend({user:d},c);return jive.soy.share.userWithoutPermission(e)}}};a.getListPermissionsMessage=function(c){var b=this;return{type:"warn",render:function(){return jive.soy.share.listWithoutPermission(c)}}}});
;
jive.namespace("ShareApp");jive.ShareApp.Main=jive.oo.Class.extend(function(){this.init=function(c){var b=c||{};var a=b.source||new jive.ShareApp.ShareSource();this.view=new jive.ShareApp.ShareView();this.view.addListener("prepareShare",function(d,f,e){a.get(d,f).addCallback(e.emitSuccess.bind(e)).addErrback(e.emitError.bind(e))});this.view.addListener("share",function(d,g,e,f){a.save(d,g,e).addCallback(f.emitSuccess.bind(f).aritize(0)).addErrback(f.emitError.bind(f))})};this.showModal=function(b,a){this.view.openShareModal(b,a)}});
;
if(!jive.share){jive.share=(function(a){jive.dispatcher.listen("share",function(b){a=a||new jive.ShareApp.Main();a.showModal(b.objectId,b.objectType)});return{}})(undefined)};
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.place=="undefined"){jive.place={}}jive.place.head=function(A,C){var B=C||new soy.StringBuilder();B.append("<title>",soy.$$escapeHtmlRcdata(A.place.placeTypeName),": ",soy.$$escapeHtmlRcdata(A.place.name),'</title><meta name="nav.active.link" content="jive-nav-link-place" /><meta name="description" content="',soy.$$escapeHtmlAttribute(A.place.description),'" />');jive.shared.soy.resourceInlineJs({code:"(function() {var manage = new jive.places.Manage.Main("+JSON.stringify(A.place).replace(/</g,"\\u003C").replace(/>/g,"\\u003E")+", {canManageAnnouncements: "+((A.canManageAnnouncements)?"true":"false")+", canCreateByEmail: "+((A.canCreateByEmail)?"true":"false")+", canManageCategories: "+((A.canManageCategories)?"true":"false")+", canMoveContainer: "+((A.canMoveContainer)?"true":"false")+", canManageContainer: "+((A.canManageContainer)?"true":"false")+", i18n: "+JSON.stringify((function(){var F={};var E=[["startFollowing",jive.i18n.i18nText(jive.i18n.getMsg(A.place.placeI18nKeyPrefix+".startFollow.desc"),[])],["stopFollowing",jive.i18n.i18nText(jive.i18n.getMsg(A.place.placeI18nKeyPrefix+".stopFollow.desc"),[])],["followError",jive.i18n.i18nText(jive.i18n.getMsg("global.follow.error"),[])]];for(var D=0;D<E.length;D+=1){F[E[D][0]]=E[D][1]}return F})()).replace(/</g,"\\u003C").replace(/>/g,"\\u003E")+"});})();"},B);if(A.legacyBreadcrumb){B.append('<content tag="breadcrumb">');jive.shared.breadcrumb.legacyBreadcrumbs(A.breadcrumbBean,B);B.append("</content>")}return C?"":B.toString()};jive.place.header=function(H,G){var E=G||new soy.StringBuilder();E.append('<header class="j-page-header clearfix"><h1><span title=\'',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.access.content.type."+H.place.type.jiveObjectTypeID),[])),"' role='img' class=\"jive-icon-big ",soy.$$escapeHtmlAttribute(H.place.iconCssClass),'"></span><a href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,H.place.objectURL))),'" class="font-color-normal">',soy.$$escapeHtml(H.place.name),"</a>");if(!H.legacyBreadcrumb){E.append((H.place.displayParent)?'<span class="j-page-header-parent font-color-meta"> '+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.in"),[]))+' <a href="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,H.place.parentUrl)))+'">'+soy.$$escapeHtml(H.place.parentName)+"</a></span>":"");jive.shared.breadcrumb.contextMenu(H.breadcrumbBean,E)}E.append((H.place.archived)?'<span class="font-color-meta-light">['+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.archived"),[]))+"]</span>":"",(!H.place.partner&&H.place.visibleToPartner)?'<span class="font-color-meta-light j-browse-external-access"> <em>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("partner.browse.ext_access.header"),[]))+"</em></span>":"",'</h1><div id="j-place-header-actions">');if(!H.place.guest){if(H.sharingEnabled){jive.soy.share.control({objectId:H.place.id,objectType:H.place.objectType,type:"smallButton",icon:true,classes:"j-social-button j-rc5 j-button-share notlast j-ui-elem"},E)}E.append('<div class="j-js-follow-controls" data-location="content-page" data-streamsassoc="',soy.$$escapeHtmlAttribute(H.place.streamsAssociatedCount),'" aria-live="polite" aria-atomic="true"><a href="#" class="j-social-button j-rc5 j-button-follow notlast j-ui-elem" id="jive-link-',soy.$$escapeHtmlAttribute(H.place.placeI18nKeyPrefix),'-startFollowing" ',(H.place.followed)?'style="display: none;"':"",'><span class="j-ui-elem">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(H.place.placeI18nKeyPrefix+".startFollow.link"),[])),' <span class="jive-icon-med jive-icon-activity-pulse-active j-instreamicon"></span></span></a><a href="#" class="j-social-button j-rc5 j-button-following notlast j-ui-elem" id="jive-link-',soy.$$escapeHtmlAttribute(H.place.placeI18nKeyPrefix),'-following" ',(!H.place.followed)?'style="display: none;"':"",'><span class="j-ui-elem">');var J=new soy.StringBuilder();jive.people.profile.streamsAssociatedCount({count:H.place.streamsAssociatedCount,renderLocation:"content-page"},J);jive.shared.soy.i18nHelper({i18nKey:"profile.friends.following.link",arg0:J.toString(),noAutoEscape:true},E);E.append("</span></a></div>",(H.place.membershipSupported)?'<a href="#" class="j-social-button j-rc5 j-button-join j-ui-elem" id="jive-link-joinSocialGroup" '+((!H.place.canJoinPlace)?'style="display: none;"':"")+'><span class="j-ui-elem">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.join.link"),[]))+'</span></a><a href="#" class="j-social-button j-rc5 j-button-leave j-ui-elem" id="jive-link-leaveSocialGroup" '+((!H.place.canLeavePlace)?'style="display: none;"':"")+'><span class="j-ui-elem">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.leave.link"),[]))+"</span></a>":"");if(H.suppressTabs){jive.place.manageLink({isButton:true,placeManageLink:H.placeManageLink},E)}}E.append("</div>");jive.announcements.list({announcements:H.announcements,showDismiss:false},E);E.append("</header>");if(H.moveData){jive.movecontent.successMessage(H.moveData,E)}E.append("<!-- Display guest tip if unauthenticated -->");if(H.place.guest){E.append('<div class="j-guest-tip jive-info-box j-rc5">');if(H.accountCreationEnabled){jive.shared.soy.i18nHelper({i18nKey:"browse.guesttip.place",arg0:'<a id="jive-guest-link-auth" href="'+soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"/login.jspa"))+'">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("browse.guesttip.login"),[]))+"</a>",arg1:soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(H.place.placeI18nKeyPrefix),[])),noAutoEscape:"true"},E);E.append("&nbsp;");if(H.validationEnabled){jive.shared.soy.i18nHelper({i18nKey:"browse.guesttip.joinnow",arg0:'<a href="'+soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"/login.jspa?registerOnly=true"))+'">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("browse.guesttip.join"),[]))+"</a>",noAutoEscape:"true"},E)}else{jive.shared.soy.i18nHelper({i18nKey:"browse.guesttip.joinnow",arg0:'<a id="jive-guest-link-reg" href="'+soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"/create-account.jspa"))+'">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("browse.guesttip.join"),[]))+"</a>",noAutoEscape:"true"},E)}}else{jive.shared.soy.i18nHelper({i18nKey:"browse.guesttip.place",arg0:'<a id="jive-guest-link-auth" href="'+soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"/login.jspa"))+'">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("browse.guesttip.login"),[]))+"</a>",arg1:soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(H.place.placeI18nKeyPrefix),[])),noAutoEscape:"true"},E)}E.append("</div>")}E.append("<!-- BEGIN browse place tabs -->");if(!H.suppressTabs){E.append('<nav class="j-bigtab-nav j-rc5 j-rc-none-bottom" role="navigation" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("place.subnav.label"),[])),'"><ul class="j-tabbar j-rc5 j-rc-none-bottom">');var I=H.placeTabLinks;var C=I.length;for(var K=0;K<C;K++){var L=I[K];if(L.visible){E.append('<li id="',soy.$$escapeHtmlAttribute(L.id),'-tab" ',(L.id==H.place.tab)?'class="j-tab-selected active j-ui-elem"':"",">");jive.shared.soy.actionLink(soy.$$augmentData(L,{hideIcon:true,activeTab:L.id==H.place.tab}),E);E.append("</li>")}}if(!H.suppressTabs){jive.place.manageLink({isButton:false,placeManageLink:H.placeManageLink},E)}E.append("</ul></nav>")}E.append('<!-- END browse place tabs --><div id="j-place-manage-container" class="j-menu" style="display: none"><ul class="j-place-manage-links">');var A=H.placeManageLinks;var F=A.length;for(var B=0;B<F;B++){var D=A[B];if(D.visible){E.append("<li>");jive.shared.soy.actionLink(soy.$$augmentData(D,{hideIcon:true}),E);E.append("</li>")}}E.append("</ul></div>",(H.place.canCreateByEmail)?'<div class="jive-modal jive-modal-medium jive-author-by-email-modal" id="jive-author-by-email-modal"><header><h2>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("author.by.email.modal.title"),[]))+'</h2></header><a href="#" class="j-modal-close-top close">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("author.by.email.modal.close"),[]))+' <span class="j-close-icon j-ui-elem" role="img"></span></a><div class="jive-modal-content" id="vcard-modal"></div></div>':"",(H.canManageAnnouncements)?'<div class="jive-modal" id="jive-modal-announcements"><header><h2 class="jive-modal-title jive-modal-title-manage-announcements">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("announcement.manage.title"),[]))+'</h2><h2 class="jive-modal-title jive-modal-title-add-announcement" style="display: none">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("announcement.manage.add.title"),[]))+'</h2><h2 class="jive-modal-title jive-modal-title-edit-announcement" style="display: none">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("announcement.manage.edit.title"),[]))+'</h2></header><a href="#" class="j-modal-close-top close">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close"),[]))+'  <span class="j-close-icon j-ui-elem" role="img"></span></a><div id="announcements-modal"></div></div>':"",(H.canManageCategories)?'<div class="jive-modal" id="jive-modal-categories"><header><h2 class="jive-modal-title jive-modal-title-manage-categories">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("category.manage.title"),[]))+'</h2><h2 class="jive-modal-title jive-modal-title-add-category" style="display: none">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("category.manage.add.title"),[]))+'</h2><h2 class="jive-modal-title jive-modal-title-edit-category" style="display: none">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("category.manage.edit.title"),[]))+'</h2></header><a href="#" class="j-modal-close-top close">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close"),[]))+'  <span class="j-close-icon j-ui-elem" role="img"></span></a><div id="categories-modal"></div></div>':"",(H.place.canArchive)?'<!-- BEGIN archive panel --><div class="jive-modal" id="jive-modal-archive-project"><header><h2 class="jive-modal-title jive-modal-title-unarchive-project">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("project.unarchive.title"),[]))+'</h2><h2 class="jive-modal-title jive-modal-title-archive-project">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("project.archive.title"),[]))+'</h2></header><section id="archive-modal" class="jive-modal-content jive-modal-archive-project clearfix"></section></div><!-- END archive panel -->':"");return G?"":E.toString()};jive.place.manageLink=function(A,C){var B=C||new soy.StringBuilder();B.append((A.placeManageLink&&A.placeManageLink.visible)?(A.isButton)?'<div id="'+soy.$$escapeHtmlAttribute(A.placeManageLink.id)+'-tab"><a '+((A.placeManageLink.id)?'id="'+soy.$$escapeHtmlAttribute(A.placeManageLink.id)+'"':"")+' href="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,A.placeManageLink.url)+"?"+jive.soy.func.buildParameterString(A.placeManageLink.urlParams)))+'" class="j-social-button j-rc5 j-button-join j-ui-elem"><span class="j-ui-elem"><span class="jive-icon-med jive-icon-admin-actions"></span>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.placeManageLink.nameKey),[]))+'<span class="jive-icon-sml jive-glyph-admin-down"></span></span></a></div>':'<li id="'+soy.$$escapeHtmlAttribute(A.placeManageLink.id)+'-tab"><a '+((A.placeManageLink.id)?'id="'+soy.$$escapeHtmlAttribute(A.placeManageLink.id)+'"':"")+' href="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,A.placeManageLink.url)+"?"+jive.soy.func.buildParameterString(A.placeManageLink.urlParams)))+'"><span class="jive-icon-med jive-icon-admin-actions"></span>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.placeManageLink.nameKey),[]))+'<span class="jive-icon-sml jive-glyph-admin-down"></span></a></li>':"");return C?"":B.toString()};jive.place.overview=function(A,C){var B=C||new soy.StringBuilder();B.append("<head>");jive.place.head(A,B);B.append('<link rel="stylesheet" href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.resourceUrl(window._jive_base_url,"/6.0.2.0/","","/styles/jive-widgets.css"))),'" type="text/css" media="all" />',(A.place.objectType==700)?'<link rel="stylesheet" href="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.resourceUrl(window._jive_base_url,"/6.0.2.0/","","/styles/jive-socialgroup.css")))+'" type="text/css" media="all" />':"",(A.place.objectType==600)?'<link rel="stylesheet" href="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.resourceUrl(window._jive_base_url,"/6.0.2.0/","","/styles/jive-project.css")))+'" type="text/css" media="all" />':"");jive.shared.soy.resourceInlineJs({code:"var widgetContainer = new jive.widgets.Container({'widgetType': '"+soy.$$escapeHtml(A.widgetTypeKey)+"', 'renderWidgetAction': '"+soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"/render-widget.jspa"))+"', 'containerID': '"+soy.$$escapeHtml(A.place.id)+"', 'containerType': '"+soy.$$escapeHtml(A.place.objectType)+"'}); define('widgetContainer', widgetContainer); function toggleWidgetPanel() {$j(document.body).addClass('jive-widget-progresscursor').addClass('jive-body-widget-customizing'); $j(\"#j-place-manage-container\").trigger(\"close\"); $j('.j-page-header').hide(); $j('.j-tab-nav').hide(); $j('.j-page-customizable-message').hide(); $j(\"#jive-widgets-panel-loading\").show(); $j(\"#jive-widget-container\").safelyLoad('"+(jive.soy.func.normalizeUrl(window._jive_base_url,"customize-container.jspa")+"?"+encodeURIComponent("containerType")+"="+encodeURIComponent(A.place.objectType)+"&"+encodeURIComponent("containerID")+"="+encodeURIComponent(A.place.id))+'\', { cache: false }, function() {$j("#jive-widgets-panel-loading").hide(); $j("#jive-widgets-panel").fadeIn(500); $j("#jive-widgets-warning").fadeIn(500); $j(document.body).removeClass(\'jive-widget-progresscursor\');'+((!A.customizeMessageSeen)?"$j('#customize-message').slideDown();":"")+'});}var bridgeIDs = new Array(); var widgetBridges = new WidgetBridges({bridgeAction : "'+soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"bridge-widgets.jspa"))+'", bridgeLoginAction : "'+soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"bridge-widgets!login.jspa"))+'", bridgeLogoutAction : "'+soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"bridge-widgets!logout.jspa"))+"\", bridgeIDs: bridgeIDs}); function dismissCustomizeMessage() {$j('#customize-message').slideUp(); if ($j('#customize-message').find('#dont-display-message').prop('checked')) {var userSource = new jive.Browse.User.ItemSource(); userSource.setUserProperty({ userID: 'current', propName: 'jive.customizeWidgetMsg.closed', propValue: 'true' });}return false;}function dismissPlaceOverviewMessage() {$j('a.j-box-dismiss').closest('div.j-page-customizable-message').slideUp(); var userSource = new jive.Browse.User.ItemSource(); var placeOverviewProp =  'jive.placeOverviewMsg.closed.' + "+soy.$$escapeHtml(A.place.objectType)+" + '.' + "+soy.$$escapeHtml(A.place.id)+"; userSource.setUserProperty({ userID: 'current', propName: placeOverviewProp, propValue: 'true' }); return false;}function removeWidgetFrame(button) {var frameID = widgets.getWidgetFrameID(button); if (frameID) {widgets.removeWidgetFrame(frameID);}}function editWidgetFrame(button) {var frameID = widgets.getWidgetFrameID(button); if (frameID) {widgets.editWidgetFrame(frameID);}}function dismissWidgetMessage(e) {$j(this).closest('.widget-message').slideUp(); var prop = $j(link).attr('data-property'); if (prop) {var userSource = new jive.Browse.User.ItemSource(); userSource.setUserProperty({ userID: 'current', propName: prop, propValue: 'true' });}e.preventDefault();}function dismissWidgetMessage(link) {$j(link).closest('.widget-message').slideUp();}$j(document).ready(function() {widgetContainer.renderAll(); $j('#customize-message > #dismiss-link').click(dismissCustomizeMessage); $j('.widget-remove-link').live('click', function(e) { removeWidgetFrame(this); e.preventDefault(); }); $j('.widget-edit-link').live('click', function(e) { editWidgetFrame(this); e.preventDefault(); }); $j('.widget-dismiss-link').live('click', function(e) { dismissWidgetMessage(this); e.preventDefault(); }); $j('#jive-place-link-manage-overview').click(function(e) {toggleWidgetPanel(); e.preventDefault();}); $j('a.j-box-dismiss').click(dismissPlaceOverviewMessage);"+((A.customizeNow)?"toggleWidgetPanel();":"")+"});"},B);B.append('</head><body class="j-body-place">');jive.place.header(A,B);B.append('<div class="j-layout j-contained j-contained-tabs j-rc4 ',(!A.suppressTabs)?"j-rc-none-top":"",' clearfix">');if(A.canManageContainer){B.append((!A.placeOverviewMessageSeen)?'<div class="j-box jive-widget j-page-customizable-message j-rc5"><header><h3>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("place.customize.heading"),[]))+'</h3><nav><a href="#" class="j-box-dismiss"><span class="jive-icon-sml jive-icon-follow-stop"></span>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("place.dismiss.link"),[]))+'</a></nav></header><div class="j-box-body"><p>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("place.customize.instructions"),[]))+'</p><a href="#" onclick="toggleWidgetPanel(); return false;" class="j-button">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.tab.customize"),[]))+"</a></div></div>":"");if(!A.customizeMessageSeen){jive.place.editPageMessage(null,B)}}B.append('<div id="jive-widgets-panel-loading" style="display: none"><p class="font-color-meta-light"><img src="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/images/jive-image-loading.gif"))),'" alt="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("customize.loading"),[])),'"/>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("customize.loading"),[])),'</p></div><div id="jive-widget-container"><div id="jive-widget-content" class="clearfix">',A.widgetMarkup,"</div></div></div></body>");return C?"":B.toString()};jive.place.tasks=function(A,C){var B=C||new soy.StringBuilder();B.append("<head>");jive.place.head(A,B);jive.shared.soy.resourceInlineJs({code:'var editTaskCompleteAction = "'+soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"edit-task!complete.jspa"))+'"; var editTaskIncompleteAction = "'+soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"edit-task!incomplete.jspa"))+'"; var editTaskTakeAction = "'+soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"edit-task!take.jspa"))+'"; var editTaskDeleteAction = "'+soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"edit-task!delete.jspa"))+'"; var viewTaskListAction = "'+(jive.soy.func.normalizeUrl(window._jive_base_url,"view-task-list.jspa")+"?"+encodeURIComponent("project")+"="+encodeURIComponent(A.place.id))+'"; var taskDeleteConfirmation = "'+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("task.delete.confirm.msg"),[]))+'"; var taskListUnauthorizedMessage = "'+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("task.list.unauth"),[]))+'"; var taskListErrorMessage = "'+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("task.list.error"),[]))+'"; var taskListFilter = "'+soy.$$escapeJsString(A.taskFilter)+"\"; $j(document).ready(function() {window.jivetasklist = new JiveTaskList(\"jive-task-list-container\", editTaskCompleteAction, editTaskIncompleteAction, editTaskTakeAction, editTaskDeleteAction, viewTaskListAction, taskDeleteConfirmation, taskListUnauthorizedMessage, taskListErrorMessage); window.jivetasklist.setFilter(taskListFilter); $j('#jive-task-list-container').load('"+soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"view-task-list.jspa"))+"',{'project': "+soy.$$escapeHtml(A.place.id)+((A.taskID>0)?", 'task': "+soy.$$escapeHtml(A.taskID):"")+((A.taskFilter!="")?", 'filter': '"+soy.$$escapeJsString(A.taskFilter)+"'":"")+"});});"},B);B.append('</head><body class="j-body-place">');jive.place.header(A,B);B.append('<div class="j-layout j-layout-l j-contained j-contained-tabs j-contained-tabs-place j-rc4 clearfix"><div class="j-colum-wrap-l"><div class="j-column j-column-l"><div id="jive-task-list-container"><p class="font-color-meta-light"><img src="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/images/jive-image-loading.gif"))),'" alt="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("customize.loading"),[])),'"/>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("customize.loading"),[])),"</p></div></div></div></div></body>");return C?"":B.toString()};jive.place.content=function(D,B){var A=B||new soy.StringBuilder();A.append("<head>");jive.place.head(D,A);A.append('<link class="js-content-feed-link" href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(D.feedUrl)),'" rel="alternate" type="application/atom+xml"  />');jive.shared.soy.resourceInlineJs({code:"$j(document).ready( function() {var contentSource = new jive.Browse.Content.ItemSource(); var filterApp = new jive.Filters.Main({itemSource: contentSource, userPrefSource: new jive.Browse.User.ItemSource(), extraParams: {containerType: containerType, containerID: containerID}, guest: "+soy.$$escapeHtml(D.guest)+", targetUserID: '"+soy.$$escapeHtml(D.targetUserID)+"', browseViewID: '"+soy.$$escapeJsString(D.browseViewID)+"', archetypeID: '"+soy.$$escapeJsString(D.archetypeID)+"', filterGroup: "+JSON.stringify(D.filterGroup).replace(/</g,"\\u003C").replace(/>/g,"\\u003E")+", itemViewID: '"+soy.$$escapeJsString(D.itemsView.itemViewID)+"', pageSize: "+soy.$$escapeJsString(D.itemsView.pageSize)+", token: '"+soy.$$escapeHtml(D.itemsView.token)+"', noResultTemplateConfig: {templateName: 'jive.place.noContent', data: {i18nKeyPrefix: '"+soy.$$escapeJsString(D.place.placeI18nKeyPrefix)+"'}}}); var jiveFollow = new jive.FollowApp.Main({i18n:null}); var bookmarkApp = new jive.BookmarkApp.Main({createModalAction: '"+soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"create-favorite-popup!input.jspa"))+"'});});"},A);A.append('</head><body class="j-body-place">');jive.place.header(D,A);A.append('<!-- BEGIN layout --><div class="j-layout j-layout-sl j-contained j-contained-tabs ',(D.layoutClass)?soy.$$escapeHtmlAttribute(D.layoutClass):"",' j-rc4 j-rc-none-top clearfix"><!-- BEGIN large column --><div class="j-column-wrap-l"><div class="j-column j-column-l"><!-- BEGIN browse & filter block -->');jive.browse.filter.filters(soy.$$augmentData(D.filterGroup,{itemsView:D.itemsView,urlParams:D.urlParams,urlPath:D.urlPath}),A);A.append('<div id="j-browse-item-grid" class="j-box-body" role="main" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("browse.filter.grid"),[])),'">');jive.browse.grid.itemGrid(soy.$$augmentData(D.itemsView,{browseViewID:D.browseViewID,archetypeID:D.archetypeID,noResultTemplateConfig:{"templateName":"jive.place.noContent","data":{"i18nKeyPrefix":D.place.placeI18nKeyPrefix,"unfiltered":true}}}),A);A.append("</div>");jive.browse.grid.moreSearchResultsAvailableHolder(D.itemsView,A);A.append('<div class="j-browse-filter-row j-bottom-row j-rc4">');jive.shared.soy.paginationLinks({current:D.itemsView.pageNumber,max:D.itemsView.pageNumber+(D.itemsView.hasNext?1:0),pageSize:D.itemsView.pageSize,urlParams:D.urlParams,urlPath:D.urlPath},A);A.append("</div><!-- END browse & filter block --><!-- BEGIN RSS Feed Link -->",(D.feedsEnabled)?'<div id="j-friend-feed-link" class="j-friend-feed-link"><span class="jive-icon-med jive-icon-rss"></span><a class="js-content-feed-link" href="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(D.feedUrl))+'" data-base-url="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"view-browse-feed.jspa")+"?"+encodeURIComponent("browseSite")+"="+encodeURIComponent("place-content")+"&"+encodeURIComponent("browseViewID")+"="+encodeURIComponent(D.browseViewID)))+'">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("browse.rss.feed"),[]))+"</a></div>":"",'<!-- END RSS Feed Link --></div></div><!-- END large column --><!-- BEGIN small column --><div class="j-column-wrap-s j-sidebar-left"><div class="j-column j-column-s j-column-s-nav">');if(D.filterGroup.filters){var G=D.filterGroup.filters;var H=G.length;for(var K=0;K<H;K++){var I=G[K];if(I.parentOfNested){A.append('<nav class="j-second-nav j-second-nav-categories"><header><h4>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.categories"),[])));jive.place.clearCategoriesLink(soy.$$augmentData(I,{appliedFilterIDs:D.filterGroup.appliedFilterIDs,urlParams:D.urlParams,urlPath:D.urlPath}),A);A.append("</h4></header><ul>");var C=I.children;var J=C.length;for(var E=0;E<J;E++){var F=C[E];if(F.nested){jive.browse.filter.filterGroupItem(soy.$$augmentData(F,{descriptionIsKey:false,iconClass:"jive-icon-med jive-icon-folder",selected:D.filterGroup.appliedFilterIDs.indexOf(F.id)>-1,urlPath:D.urlPath}),A)}}A.append("</ul></nav>")}}}jive.browse.actionlink.actionLinkGroup(D,A);A.append("<!-- BEGIN blog link (if there is a blog in this place) -->",(D.place.blogName&&D.place.blogUrl)?'<div class="j-box j-box-placeblog"><header><h4>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("place.viewblog.link"),[]))+'</h4></header><div class="j-box-body"><p><a href="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,D.place.blogUrl)))+'">'+soy.$$escapeHtml(D.place.blogName)+"</a></p></div></div>":"","<!-- END blog link --></div></div><!-- END small column --></div><!-- END layout --></body>");return B?"":A.toString()};jive.place.noContent=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="j-browse-info j-browse-empty j-empty font-color-meta">',(A.unfiltered)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("place.content.none."+A.i18nKeyPrefix),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("place.content.filtered.none."+A.i18nKeyPrefix),[])),"</div>");return C?"":B.toString()};jive.place.people=function(B,G){var C=G||new soy.StringBuilder();C.append("<head>");jive.place.head(B,C);jive.shared.soy.resourceInlineJs({code:"$j(document).ready( function() {var accessCheckI18n = {hasAccess : '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("place.visibility.user.access"),[]))+"', noAccess : '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("place.visibility.user.noaccess"),[]))+"', noUser : '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("place.visibility.user.none"),[]))+"', warning : '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("place.visibility.user.warning"),[]))+"', loading : '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("customize.loading"),[]))+"', error : '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("error.general"),[]))+"'}; var jiveAccessCheck = new jive.AccessCheckApp.Main({objectType: containerType, objectID:containerID, i18n:accessCheckI18n}); var userSource = new jive.Browse.User.ItemSource(); var options = {itemSource: userSource, userPrefSource: new jive.Browse.User.ItemSource(), browseViewID: '"+soy.$$escapeJsString(B.browseViewID)+"', archetypeID: '"+soy.$$escapeJsString(B.archetypeID)+"', guest: "+soy.$$escapeHtml(B.guest)+", targetUserID: '"+soy.$$escapeHtml(B.targetUserID)+"', filterGroup: "+JSON.stringify(B.filterGroup).replace(/</g,"\\u003C").replace(/>/g,"\\u003E")+", extraParams: {containerType: containerType, containerID: containerID}, itemViewID: '"+soy.$$escapeJsString(B.itemsView.itemViewID)+"', pageSize: "+soy.$$escapeJsString(B.itemsView.pageSize)+", token: '"+soy.$$escapeHtml(B.itemsView.token)+"', bidirectionalConnections: "+soy.$$escapeHtml(B.bidirectionalConnections)+", recommenderType: 'people', i18n: {errMsg: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("browse.people.conx.label.err.noname"),[]))+"', delMsg: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("browse.people.conx.label.delete"),[]))+"'}, noResultTemplateConfig: {templateName: 'jive.place.noPeople', data: {i18nKeyPrefix: '"+soy.$$escapeJsString(B.place.placeI18nKeyPrefix)+"'}}}; var filterApp = new jive.Filters.Main(options); $j('#j-browse-item-grid').delegate('a.js-create-direct-message', 'click', function(e) {e.preventDefault(); var userID = $j(this).closest('[data-object-id]').attr('data-object-id'); jive.DirectMessaging.sendMessageToUserIds([userID]);});});"},C);C.append('</head><body class="j-body-place">');jive.place.header(B,C);C.append('<div class="j-layout j-layout-sl j-contained j-contained-tabs  ',(B.layoutClass)?soy.$$escapeHtmlAttribute(B.layoutClass):"",' j-rc4 j-rc-none-top clearfix"><div class="j-colum-wrap-s"><div class="j-column j-column-s">');if(!B.hideFilterGroup){jive.browse.filter.filterGroup(soy.$$augmentData(B.filterGroup,{urlPath:B.urlPath}),C)}if(B.owners&&B.owners.length>0){C.append('<div class="j-box j-box-owners"><header><h4>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(B.place.placeI18nKeyPrefix+".overview.owner"),[])),'</h4></header><div class="j-box-body"><ul class="j-people-list">');var D=B.owners;var A=D.length;for(var F=0;F<A;F++){var E=D[F];C.append("<li>");jive.shared.displayutil.avatar(soy.$$augmentData(E,{size:24}),C);C.append("<span>");jive.shared.displayutil.userDisplayNameLink(E,C);C.append("</span></li>")}C.append("</ul></div></div>")}C.append('<div class="j-box j-box-visibility"><header><h4>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("place.visibility.header"),[])),'</h4></header><div class="j-box-body"><span>',soy.$$escapeHtml(B.visibilityMessage),"</span>",(B.visibilityCheckEnabled)?'<div class="j-box-visibility-check"><label for="jive-access-autocomplete" class="j-508-label">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("place.visibility.header"),[]))+'</label><input id="jive-access-autocomplete" type="text" role="combobox" /><div id="jive-access-results" class="clearfix"></div></div>':"","</div></div>");jive.browse.actionlink.actionLinkGroup(B,C);C.append('</div><div class="j-colum-wrap-l"><div class="j-column j-column-l"><!-- BEGIN browse & filter block -->');jive.browse.filter.filters(soy.$$augmentData(B.filterGroup,{itemsView:B.itemsView,urlParams:B.urlParams,urlPath:B.urlPath}),C);C.append('<div id="j-browse-item-grid" class="j-box-body" role="main" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("browse.filter.grid"),[])),'">');if(B.itemsView.template){jive.shared.soy.render({templateName:B.itemsView.template,data:B.itemsView,failGracefully:false},C)}else{jive.browse.grid.itemGrid(soy.$$augmentData(B.itemsView,{browseViewID:B.browseViewID,archetypeID:B.archetypeID,headerTemplate:"jive.browse.user.detailUserHeader",noResultTemplateConfig:{"templateName":"jive.place.noPeople","data":{"i18nKeyPrefix":B.place.placeI18nKeyPrefix,"unfiltered":true}}}),C)}C.append("</div>");jive.browse.grid.moreSearchResultsAvailableHolder(B.itemsView,C);C.append('<div class="j-browse-filter-row j-bottom-row j-rc4">');jive.shared.soy.paginationLinks({current:B.itemsView.pageNumber,max:B.itemsView.pageNumber+(B.itemsView.hasNext?1:0),pageSize:B.itemsView.pageSize,urlParams:B.urlParams,urlPath:B.urlPath},C);C.append("</div><!-- END browse & filter block --></div></div></div></body>");return G?"":C.toString()};jive.place.noPeople=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="j-browse-info j-browse-empty j-empty font-color-meta">',(A.unfiltered)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("place.people.none."+A.i18nKeyPrefix),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("place.people.filtered.none."+A.i18nKeyPrefix),[])),"</div>");return C?"":B.toString()};jive.place.privatePlace=function(F,E){var C=E||new soy.StringBuilder();C.append("<head><title>",soy.$$escapeHtmlRcdata(F.place.placeTypeName),": ",soy.$$escapeHtmlRcdata(F.place.name),'</title><meta name="nav.active.link" content="jive-nav-link-place" /><meta name="description" content="',soy.$$escapeHtmlAttribute(F.place.description),'" />');jive.shared.soy.resourceInlineJs({code:"var containerID = "+soy.$$escapeHtml(F.place.id)+";"+((F.place.membershipSupported)?"var jiveMembership = new jive.MembershipApp.Main({objectID:containerID});":"")},C);C.append('</head><body class="j-body-place"><header class="j-page-header clearfix"><h1><span class="jive-icon-big ',soy.$$escapeHtmlAttribute(F.place.iconCssClass),'"></span><a href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,F.place.objectURL))),'" class="font-color-normal">',soy.$$escapeHtml(F.place.name),"</a>",(F.place.archived)?'<span class="font-color-meta-light">['+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.archived"),[]))+"]</span>":"",'</h1></header><div class="j-box j-enhanced"><div class="j-box-body j-box-body-padding clearfix"><div class="jive-sgroup-image">',(F.imageAvailable)?'<img src="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/groups/image/"+F.place.id+"/2.png?a="+F.imageID)))+'" title="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("place.image"),[]))+'" alt="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("place.image"),[]))+'" border="0"/>':'<img src="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/images/jive-sgroup-default-portrait-large.png")))+'" alt="'+soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.noImageSelected.text"),[]))+'" border="0"/>','</div><div class="j-join-group-message">',(F.place.membershipSupported)?(F.invitationOnly&&F.requireApprovalToJoin)?(F.inviteFromOwner||F.systemAdmin)?"<h5>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.admin"+F.type+".msg.head"),[]))+"</h5><p>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.admin"+F.type+".msg"),[]))+'</p><div id="join.socialgroup.status" class="jive-sgroup-joinstatus"><a id="jive-link-joinSocialGroup" href="#" class=\'j-social-button j-rc5 j-button-join j-ui-elem\'><span class="j-ui-elem">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.join"),[]))+"</span></a></div>":(F.memberExists&&F.pendingApproval)?"<p>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.pending"),[]))+'</p><div id="join.socialgroup.status" class="jive-sgroup-joinstatus"><a id="jive-link-leaveSocialGroup" href="#" class=\'j-social-button j-rc5 j-button-join j-ui-elem\'><span class="j-ui-elem">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.join.cancel"),[]))+"</span></a></div>":"<h5>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup."+F.type+".msg.head"),[]))+"</h5><p>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup."+F.type+".msg"),[]))+'</p><div id="join.socialgroup.status" class="jive-sgroup-joinstatus"><a id="jive-link-joinSocialGroup" href="#" class=\'j-social-button j-rc5 j-button-join j-ui-elem\'><span class="j-ui-elem">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.askjoin"),[]))+"</span></a></div>":(F.inviteFromOwner||F.systemAdmin)?"<h5>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.admin"+F.type+".msg.head"),[]))+"</h5><p>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.admin"+F.type+".msg"),[]))+'</p><div id="join.socialgroup.status" class="jive-sgroup-joinstatus"><a id="jive-link-joinSocialGroup" href="#" class=\'j-social-button j-rc5 j-button-join j-ui-elem j-join\'><span class="j-ui-elem">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.join"),[]))+"</span></a></div>":(F.memberExists&&F.pendingApproval)?"<p>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup."+F.type+".msg"),[]))+"</p><p>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.pending"),[]))+'</p><div id="join.socialgroup.status" class="jive-sgroup-joinstatus"><a id="jive-link-leaveSocialGroup" href="#" class=\'j-social-button j-rc5 j-button-join j-ui-elem\'><span class="j-ui-elem">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.join.cancel"),[]))+"</span></a></div>":"<h5>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup."+F.type+".msg.head"),[]))+"</h5><p>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup."+F.type+".msg"),[]))+"</p>"+((!F.anonymous)?'<div id="join.socialgroup.status" class="jive-sgroup-joinstatus"><a id="jive-link-joinSocialGroup" href="#" class=\'j-social-button j-rc5 j-button-join j-ui-elem j-ask-join\'><span class="j-ui-elem">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.askjoin"),[]))+"</span></a></div>":""):"",'<div class="jive-sgroup-desc"><h5>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.overview"),[])),'</h5><p class="jive-sgroup-description-short">',soy.$$escapeHtml(F.place.description),'</p><table class="jive-sgroup-quickstats"><tbody><tr><td><strong>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.overview.owner"),[])),"</strong></td><td>");var K=F.owners;var G=K.length;for(var I=0;I<G;I++){var J=K[I];C.append("<span>");jive.shared.displayutil.userDisplayNameLink(J,C);C.append("</span>",(!(I==G-1))?", ":"")}C.append("</td></tr><tr><td><strong>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.overview.tags"),[])),"</strong></td><td>");var D=F.tags;var H=D.length;for(var A=0;A<H;A++){var B=D[A];C.append('<a href="',jive.soy.func.normalizeUrl(window._jive_base_url,"/tags#/?tags="+B+"&taggableTypes="+F.place.type),'">',soy.$$escapeHtml(B),"</a>",(!(A==H-1))?", ":"")}C.append("</td></tr><tr><td><strong>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.overview.createdate"),[])),"</strong></td><td>",soy.$$escapeHtml((F.creationDateString?dateFormat(parseFloat(F.creationDateString),"mmmm d, yyyy h:MM TT"):"")),"</td></tr><tr><td><strong>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.overview.grouptype"),[])),"</strong></td><td><span>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.form.type."+F.type+".label"),[])),' <img class="jive-icon-med jive-icon-help" id="tags-tooltip" title="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.form.type."+F.type+".text"),[])),'" alt="" src="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,"/images/transparent.png"))),'"/></span></td></tr></tbody></table></div></div></div></div></body>');return E?"":C.toString()};jive.place.places=function(A,D){var B=D||new soy.StringBuilder();B.append("<head>");jive.place.head(A,B);jive.shared.soy.resourceInlineJs({code:"$j(document).ready( function() {var contentSource = new jive.Browse.Container.ItemSource(); var filterApp = new (jive.oo.compose( jive.Filters.Main, jive.Filters.HierarchicalContent ))({itemSource: contentSource, userPrefSource: new jive.Browse.User.ItemSource(), guest: "+soy.$$escapeHtml(A.guest)+", targetUserID: '"+soy.$$escapeHtml(A.targetUserID)+"', extraParams: {containerType: containerType, containerID: containerID}, browseViewID: '"+soy.$$escapeJsString(A.browseViewID)+"', archetypeID: '"+soy.$$escapeJsString(A.archetypeID)+"', filterGroup: "+JSON.stringify(A.filterGroup).replace(/</g,"\\u003C").replace(/>/g,"\\u003E")+", itemViewID: '"+soy.$$escapeJsString(A.itemsView.itemViewID)+"', pageSize: "+soy.$$escapeJsString(A.itemsView.pageSize)+", token: '"+soy.$$escapeHtml(A.itemsView.token)+"', noResults: function() {return jive.place.noPlaces({ i18nKeyPrefix: '"+soy.$$escapeJsString(A.place.placeI18nKeyPrefix)+"' });}});}); var jiveFollow = new jive.FollowApp.Main({i18n:null}); var jiveMembership = new jive.MembershipApp.Main({});"},B);B.append('</head><body class="j-body-place">');jive.place.header(A,B);B.append('<!-- BEGIN layout --><div class="j-layout j-layout-l j-contained j-contained-tabs  ',(A.layoutClass)?soy.$$escapeHtmlAttribute(A.layoutClass):"",' j-rc4 j-rc-none-top clearfix"><!-- BEGIN large column --><div class="j-column-wrap-l"><div class="j-column j-column-l"><!-- BEGIN browse & filter block -->');jive.browse.filter.filters(soy.$$augmentData(A.filterGroup,{itemsView:A.itemsView,urlParams:A.urlParams,urlPath:A.urlPath}),B);B.append('<div id="parent-space-message" class="j-browse-places-parentmessage clearfix j-rc4" ',(A.parentID==0||A.itemsView.itemViewID=="hierarchy")?'style="display: none;"':"",">");jive.places.parentChain(soy.$$augmentData(A.itemsView,{startID:A.place.id,startType:A.place.type}),B);B.append('</div><div id="j-browse-item-grid" class="j-box-body" role="main" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("browse.filter.grid"),[])),'">');var C=new soy.StringBuilder();jive.place.noPlaces({i18nKeyPrefix:A.place.placeI18nKeyPrefix,unfiltered:true},C);jive.browse.grid.itemGrid(soy.$$augmentData(A.itemsView,{browseViewID:A.browseViewID,archetypeID:A.archetypeID,noResults:C.toString()}),B);B.append("</div>");jive.browse.grid.moreSearchResultsAvailableHolder(A.itemsView,B);B.append('<div class="j-browse-filter-row j-bottom-row j-rc4">');jive.shared.soy.paginationLinks({current:A.itemsView.pageNumber,max:A.itemsView.pageNumber+(A.itemsView.hasNext?1:0),pageSize:A.itemsView.pageSize,urlParams:A.urlParams,urlPath:A.urlPath},B);B.append("</div><!-- END browse & filter block --></div></div><!-- END large column --></div><!-- END layout --></body>");return D?"":B.toString()};jive.place.noPlaces=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="j-browse-info j-browse-empty j-empty font-color-meta">',(A.unfiltered)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("place.place.none."+A.i18nKeyPrefix),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("place.place.filtered.none."+A.i18nKeyPrefix),[])),"</div>");return C?"":B.toString()};jive.place.editPageMessage=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="customize-message clearfix" id="customize-message" style="display: none"><a href="#" id="dismiss-link" style="float: right">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("place.dismiss.link"),[])),"</a><h1>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("place.editpage"),[])),'</h1><p class="welcome-message">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("place.editinfo"),[])),'</p><div style="float:right"><input type="checkbox" id="dont-display-message"><label for="dont-display-message">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("place.dontshowmsg"),[])),"</label></div></div>");return C?"":B.toString()};jive.place.clearCategoriesLink=function(A,C){var B=C||new soy.StringBuilder();if(typeof (A.childIndex)!="number"){jive.place.clearCategoriesLink(soy.$$augmentData(A,{childIndex:0}),B)}else{if(A.childIndex<A.children.length){if(A.children[A.childIndex].nested&&A.appliedFilterIDs.indexOf(A.children[A.childIndex].id)>-1){jive.place.clearCategoriesLinkHtml(A,B)}else{jive.place.clearCategoriesLink(soy.$$augmentData(A,{childIndex:A.childIndex+1}),B)}}else{jive.place.clearCategoriesLinkHtml(soy.$$augmentData(A,{hidden:true}),B)}}return C?"":B.toString()};jive.place.clearCategoriesLinkHtml=function(A,C){var B=C||new soy.StringBuilder();B.append('<span class="js-clear-nav j-second-nav-clear font-color-meta"',(A.hidden)?' style="display:none"':"",'> - <a class="js-clear-filters" href="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,A.urlPath))),'">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("browse.filter.clear_selected"),[])),"</a></span>");return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.socialgroups=="undefined"){jive.socialgroups={}}if(typeof jive.socialgroups.soy=="undefined"){jive.socialgroups.soy={}}jive.socialgroups.soy.leaveGroup=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="jive-modal jive-modal-medium" id="jive-modal-leave-group"><header>',(A.pendingApproval)?'<h2 class="jive-modal-title jive-modal-title-leave-group">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.join.cancel"),[]))+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.colon"),[]))+" "+soy.$$escapeHtml(A.groupName)+"</h2>":'<h2 class="jive-modal-title jive-modal-title-leave-group">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.leave.title"),[]))+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.colon"),[]))+" "+soy.$$escapeHtml(A.groupName)+"</h2>",'</header><label class="j-508-label" id="close-modal-508">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close.modal"),[])),'</label><a href="#" class="j-modal-close-top close" aria-labelledby="close-modal-508" title="',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close.modal"),[])),'">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close"),[])),'  <span class="j-close-icon  j-ui-elem"></span></a><!-- Manage categories listing --><section class="jive-modal-content j-modal-content-text jive-modal-leave-group clearfix">',(A.canLeaveSocialGroup)?((A.pendingApproval)?"<h3>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.leave.canceljoin"),[A.groupName]))+"</h3>"+((A.requiresApproval)?"<p>"+soy.$$escapeHtml(A.leaveI18n)+"</p>":""):"<h3>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.leave.confirm"),[A.groupName]))+"</h3>"+((A.requiresApproval)?"<p>"+soy.$$escapeHtml(A.leaveI18n)+"</p>":"")+"<p>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.leave.follow.remove"),[]))+"</p>")+'<div class="jive-form-buttons"><button type="button" class="j-btn-callout" id="group-leave-submit">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.leave.accept"),[]))+'</button><button type="button" class="jive-modal-close close">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.cancel"),[]))+"</button></div>":(A.onlyOneOwner)?"<p>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.leave.onlyowner"),[]))+"</p><p>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.leave.onlyowner.info"),[]))+'</p><div class="jive-form-buttons"><button type="button" class="jive-modal-close close">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.cancel"),[]))+"</button></div>":soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.leave.already.gone"),[])),"</section></div>");return C?"":B.toString()};jive.socialgroups.soy.joinConfirmation=function(A,C){var B=C||new soy.StringBuilder();B.append((A.pendingApproval)?"<div>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.join.apprvl.info"),[]))+"</div>":(A.banned)?"<div>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.banned_member.msg"),[]))+"</div>":"<div>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.join.confirm"),[]))+"</div>");return C?"":B.toString()};jive.socialgroups.soy.leaveConfirmation=function(A,C){var B=C||new soy.StringBuilder();B.append((A.pendingApproval)?"<div>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.cancel.message"),[]))+"</div>":"<div>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.leave.message"),[]))+"</div>");return C?"":B.toString()};jive.socialgroups.soy.renderError=function(A,C){var B=C||new soy.StringBuilder();switch(A.code){case 4026:B.append("<p>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.join.notallowed"),[])),"</p>");break;case 4008:B.append("<p>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("sgroup.not.found"),[])),"</p>");break;default:if(A.message){B.append("<p>",soy.$$escapeHtml(A.message),"</p>")}else{jive.error.rest.soy.errorFinding(A,B)}}return C?"":B.toString()}
;

// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (ManageTagSet == null) var ManageTagSet = {};
ManageTagSet._path = '/dwr';
ManageTagSet.add = function(p0, callback) {
  dwr.engine._execute(ManageTagSet._path, 'ManageTagSet', 'add', p0, callback);
}
ManageTagSet.remove = function(p0, callback) {
  dwr.engine._execute(ManageTagSet._path, 'ManageTagSet', 'remove', p0, callback);
}
ManageTagSet.list = function(p0, callback) {
  dwr.engine._execute(ManageTagSet._path, 'ManageTagSet', 'list', p0, callback);
}
ManageTagSet.tagSet = function(p0, callback) {
  dwr.engine._execute(ManageTagSet._path, 'ManageTagSet', 'tagSet', p0, callback);
}
ManageTagSet.edit = function(p0, callback) {
  dwr.engine._execute(ManageTagSet._path, 'ManageTagSet', 'edit', p0, callback);
}
ManageTagSet.suggestedTags = function(p0, callback) {
  dwr.engine._execute(ManageTagSet._path, 'ManageTagSet', 'suggestedTags', p0, callback);
}
ManageTagSet.popularTags = function(p0, callback) {
  dwr.engine._execute(ManageTagSet._path, 'ManageTagSet', 'popularTags', p0, callback);
}

;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.tags=="undefined"){jive.tags={}}if(typeof jive.tags.soy=="undefined"){jive.tags.soy={}}jive.tags.soy.renderCategory=function(A,C){var B=C||new soy.StringBuilder();B.append('<tr><td class="name">',soy.$$escapeHtml(A.category.name),'</td><td class="items">',soy.$$escapeHtml(A.category.count)," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.items"),[])),'</td><td class="date">',soy.$$escapeHtml(A.category.date),'</td><td class="actions">(<a href="#" data-event="editTagSetById" data-id="',soy.$$escapeHtml(A.category.ID),'">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.edit"),[])),'</a> | <a href="#" data-event="removeCategoryById" data-id="',soy.$$escapeHtml(A.category.ID),'">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.remove"),[])),"</a>) </td></tr>");return C?"":B.toString()};jive.tags.soy.buildCategoryDisplay=function(A,G){var C=G||new soy.StringBuilder();C.append("<table><tbody>");var F=A.categories;var E=F.length;if(E>0){for(var B=0;B<E;B++){var D=F[B];jive.tags.soy.renderCategory({category:D},C)}}else{C.append('<tr><td colspan="4">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("category.manage.no-categories.text"),[])),"</td><tr>")}C.append("</tbody></table>");return G?"":C.toString()};jive.tags.soy.renderPopulateTagsetListItem=function(A,C){var B=C||new soy.StringBuilder();B.append('<li><a class="jive-tagname-',soy.$$escapeHtml(A.name),' jive-tag-unselected" href="#" onclick="swapTag(this);return false;">',soy.$$escapeHtml(A.text),"</a></li>");return C?"":B.toString()};jive.tags.soy.introTextAdd=function(A,C){var B=C||new soy.StringBuilder();B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("category.manage.add.intro.text"),[])));return C?"":B.toString()};jive.tags.soy.introTextEdit=function(A,C){var B=C||new soy.StringBuilder();B.append("<span>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("category.manage.edit.intro.text"),[A.count])),"</span>");return C?"":B.toString()};jive.tags.soy.globalErrorMessage=function(A,C){var B=C||new soy.StringBuilder();B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.error"),[])),soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.colon"),[]))," ",soy.$$escapeHtml(A.message));return C?"":B.toString()};jive.tags.soy.remainingMessage=function(A,C){var B=C||new soy.StringBuilder();B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("category.manage.remaining.label"),[A.count])));return C?"":B.toString()};jive.tags.soy.confirmDeletion=function(A,C){var B=C||new soy.StringBuilder();B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("category.manage.confirm.deletion"),[])));return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.tags=="undefined"){jive.tags={}}if(typeof jive.tags.soy=="undefined"){jive.tags.soy={}}jive.tags.soy.displayDocModeration=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id="jive-wiki-state-message"><h3>',soy.$$escapeHtml(A.i18n.docViewerNeedsApproval),"</h3></div>");return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.places=="undefined"){jive.places={}}if(typeof jive.places.modal=="undefined"){jive.places.modal={}}jive.places.modal.modalLoading=function(A,C){var B=C||new soy.StringBuilder();B.append('<p class="font-color-meta-light"><img src="',soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"/images/jive-image-loading.gif")),'" alt="',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("customize.loading"),[])),'" />',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("customize.loading"),[])),"</p>");return C?"":B.toString()}
;
jive.namespace("places.Manage");jive.places.Manage.AbstractControls=jive.AbstractView.extend(function(a){var b=jQuery;a.modalContent=jive.oo._abstract;a.modal=jive.oo._abstract;a.activationLink=jive.oo._abstract;a.reloadOnClose=true;a.init=function(){var c=this;b(document).ready(function(){var d=b(c.modalContent),e=b(c.modal);b(c.activationLink).click(function(f){var g=b(this).data("object-id");c.activate(g,this,f);f.preventDefault()})})};a.activate=function(i,g,h){var c=this,d=b(c.modalContent),f=b(c.modal);this.onActivate(h,b(g));this.showSpinner();this.emitP("load",i,null).addCallback(function(l){var k=c.separateScripts(l),j=k[0],e=k[1];d.html(c.shiv(j));f.trigger("resize");e();c.hideSpinner();c.emit("load.after",{$modal:f})});f.lightbox_me({onClose:function(){if(c.reloadOnClose){window.location.reload()}return false}});b("#j-place-manage-container").trigger("close")};a.onActivate=function(d,c){};a.createSpinner=function(){b(this.modalContent).html(jive.places.modal.modalLoading())};a.destroySpinner=function(){}});
;
jive.namespace("places.Manage");jive.places.Manage.CategoryControls=jive.places.Manage.AbstractControls.extend(function(a,b){a.modalContent="#categories-modal";a.modal="#jive-modal-categories";a.activationLink="#jive-link-manageCategories";a.init=function(){var d=this,i=["cancelTagSet","editTagSet","editTagSetById","removeCategoryById"],f,g=[],e;var c=function(){return{ID:f.containerId,objectType:f.containerType}},h=function(k){$j("#category-message").html(k||"")};function j(k){alert(jive.tags.soy.globalErrorMessage({message:k||""}))}b.init.call(this);this.addListener("load.after",function(k){e=k.$modal;f=jive.util.extractDataAttributes(e.find(".jive-modal-content-categories")[0]);d.attachEvents();d.cancelTagSet();d.loadTagSets();d.loadPopularTags()});this.attachEvents=function(){e.delegate("[data-event]","click",function(l){l.preventDefault();var k=jive.util.extractDataAttributes(this);i.indexOf(k.event)>-1&&d[k.event].call(d,k)});$j("#jive-category-form").unbind("submit").submit(function(k){k.preventDefault();d.saveTagSet($j("#jive-modal-categories"))})};this.cancelTagSet=function(){e.find(".jive-modal-title-add-category, .jive-modal-add-category, .jive-modal-title-edit-category, .jive-modal-edit-category").hide();e.find(".jive-modal-title-manage-categories, .jive-modal-categories-listing").show()};this.loadPopularTags=function(){ManageTagSet.popularTags(c(),{errorHandler:j,timeout:5000,callback:function(l){var k=$j("<div />"),m=jive.namespace.call(window,"Community.feed");g=l.map(function(n,o){m[o]=1;return{name:k.text(n).html(),text:n}})}})};this.loadTagSets=function(){ManageTagSet.list(c(),{errorHandler:j,timeout:5000,callback:d.populateTagSets})};this.populateTagSet=function(k){h(k.usageMessage);$j("#categoryID").val(k.ID);$j("#categoryName").val(k.name);$j("#jive-tags").val(k.tags.join(" "));var l=$j("<ul />");$j.each(g,function(){l.append(jive.tags.soy.renderPopulateTagsetListItem(this))});$j("#jive-category-recommendedtags-container ul").replaceWith(l)};this.populateTagSets=function(m){var k=f.maxTagSetCount,l=m.length;e.find(".jive-modal-category-list").html(jive.tags.soy.buildCategoryDisplay({categories:m})).end().find(".add").toggle(l<k).end().find(".overflow").toggle(!(l<k));if(l<k){$j(".jive-category-remaining").text(jive.tags.soy.remainingMessage({count:l}))}else{$j(".jive-category-overflow").text(l-k);$j(".jive-category-max").text(k)}};this.removeCategoryById=function(l){var k={ID:l.id,containerID:c().ID,containerType:c().objectType};confirm(jive.tags.soy.confirmDeletion())&&ManageTagSet.remove(k,{errorHandler:j,timeout:5000,callback:d.populateTagSets})};this.saveTagSet=function(l){var k={ID:$j("#categoryID").val(),name:$j("#categoryName").val(),tags:($j("#jive-tags").val()||"").split(/[\s,]+/).filter(function(m){return m!==""}),autoCategorize:!!$j("#autoCategorize").prop("checked"),containerID:c().ID,containerType:c().objectType};ManageTagSet.add(k,{errorHandler:j,timeout:5000,callback:d.populateTagSets});l=l.length?l:e;l.find(".jive-modal-title-add-category, .jive-modal-add-category, .jive-modal-title-edit-category, .jive-modal-edit-category").hide();l.find(".jive-modal-title-manage-categories, .jive-modal-categories-listing").show()};this.editTagSet=function(k){e.find(".jive-modal-title-manage-categories, .jive-modal-categories-listing").hide();$j("#autoCategorize-container, .jive-modal-add-category, .jive-modal-title-add-category").show();h(jive.tags.soy.introTextAdd());this.populateTagSet({ID:"-1",name:"",tags:[],autoCategorize:$j("#autoCategorize").prop("checked"),containerID:k.id,containerType:k.objectType})};this.editTagSetById=function(k){ManageTagSet.tagSet(k.id,{errorHandler:j,timeout:5000,callback:function(l){d.populateTagSet(l);h(jive.tags.soy.introTextEdit({count:l.count}))}});$j("#autoCategorize-container, .jive-modal-title-manage-categories, .jive-modal-categories-listing").hide();$j(".jive-modal-title-edit-category, .jive-modal-add-category").show()}}});
;
jive.namespace("places.Manage");jive.places.Manage.ArchiveControls=jive.places.Manage.AbstractControls.extend(function(a){var b=jQuery;a.modalContent="#archive-modal";a.modal="#jive-modal-archive-project";a.activationLink="#jive-link-unarchiveProject, #jive-link-archiveProject";a.reloadOnClose=false;a.onActivate=function(d,c){b(".jive-modal-title-archive-project").toggle(c.is("#jive-link-archiveProject"));b(".jive-modal-title-unarchive-project").toggle(c.is("#jive-link-unarchiveProject"))}});
;
jive.namespace("places.Manage");jive.places.Manage.AuthorByEmailControls=jive.places.Manage.AbstractControls.extend(function(a,b){var c=jQuery;a.modalContent="#vcard-modal";a.modal="#jive-author-by-email-modal";a.activationLink="#jive-link-author-by-email a";a.reloadOnClose=false;a.init=function(){var d=this;b.init.apply(this,arguments);c(document).ready(function(){c(d.modalContent).delegate(":checkbox[name=vCardObjectTypes]","click",function(){toggleVCardActionButtons()});d.activate()})}});
;
jive.namespace("places.Manage");jive.places.Manage.CustomControls=jive.places.Manage.AbstractControls.extend(function(a){var b=jQuery;a.modalContent="";a.modal="";a.activationLink=".jive-link-manage-custom";a.reloadOnClose=false;a.init=function(){var c=this;b(document).ready(function(){b(c.activationLink).click(function(f){var g=null;var d=b(this).attr("href");if(d!=null&&d.indexOf("http")!=0&&d.indexOf("/")!=0){d="/"+d}c.onActivate(f,b(this));c.showSpinner();c.emitP("load",g,d).addCallback(function(k){var i=c.separateScripts(k),h=i[0],e=i[1],l=(h.match(/data-title\s*=\s*['"]([^'"]+)['"]/)||[])[1]||"";var j=jive.nav.menu.create.quick({title:l,body:h});b(j).lightbox_me({destroyOnClose:true,onClose:function(){if(c.reloadOnClose){window.location.reload()}return false}});e();c.hideSpinner()});b("#j-place-manage-container").trigger("close");f.preventDefault()})})}});
;
jive.MenuView=jive.AbstractView.extend(function(a){var b=jQuery;a.init=function(e,f,d){var c=this;this.template=typeof e=="function"?e:function(){return e};this.$control=b(f);this.$control.click(function(i){var h,g=b(this);if(g.data("menu")){g.data("menu").trigger("close")}else{h=c.template();h.popover(b.extend({context:g,onClose:function(){g.removeData("menu");c.emit("close")}},d||{}));g.data("menu",h);c.emit("open")}i.preventDefault()})};this.close=function(){this.$control.each(function(){var c=b(this);if(c.data("menu")){c.data("menu").trigger("close")}})}});
;
jive.namespace("MembershipApp");jive.MembershipApp.MembershipView=jive.oo.Class.extend(function(a){var b="browse",d="landing";jive.conc.observable(this);this.init=function(g,i,f){var e=this;this.joinContainer=g;this.leaveContainer=i;this.options=f||{};var h="objectID" in f?d:b;this.isPage=function(j){return h===j};$j(document).ready(function(){if(e.isPage(d)){$j(document).delegate(e.joinContainer,"click",function(j){e.joinGroup($j(this));j.preventDefault()});$j(document).delegate(e.leaveContainer,"click",function(j){e.displayLeaveGroupModal($j(this));j.preventDefault()})}else{$j("body").on("click",".sgroup-join, .sgroup-leave",function(k){k.preventDefault();var j=$j(this);if(j.is(".sgroup-join")){e.joinGroup(j)}else{e.displayLeaveGroupModal(j)}})}})};this.joinGroup=function(f){var e=this;var g=e.determineObjectID(f);e.emitP("join",g).addCallback(function(h){var i=$j.noop;if(e.isPage(d)){if(!h.banned){$j(e.leaveContainer).show();$j(e.joinContainer).hide()}i=function(){if(h.memberToContribute){window.location=c(1)}}}else{$j(f).closest(".j-thumb-back, .j-td-follow-action").find("a.sgroup-leave").show();$j(f).hide()}e.displayMessage(jive.socialgroups.soy.joinConfirmation(h),i);$j("#jive-link-socialgroup-startFollowing").hide();$j("#jive-link-socialgroup-following").show()}).addErrback(function(i,h){console.log("got error message: "+i+" code: "+h);e.displayError(i,h)})};this.displayLeaveGroupModal=function(f){var e=this;var g=e.determineObjectID(f);e.emitP("prepareLeave",g).addCallback(function(j){var h=$j(jive.socialgroups.soy.leaveGroup(j));$j("body").append(h);var i=$j("body").find("#jive-modal-leave-group");i.lightbox_me({closeSelector:".jive-modal-close, .close",destroyOnClose:true});i.find("#group-leave-submit").click(function(){e.leaveGroup(f,j);i.trigger("close")})}).addErrback(function(i,h){e.displayError(i,h)})};this.leaveGroup=function(f,g){var e=this;var h=e.determineObjectID(f);e.emitP("leave",h).addCallback(function(){var i=$j.noop;if(e.isPage(d)){$j(e.joinContainer).show();$j(e.leaveContainer).hide();$j("#jive-link-socialgroup-following").hide();$j("#jive-link-socialgroup-startFollowing").show();i=function(){if(!g.visibleAfterLeaving){window.location=jive.app.url({path:"/groups"})}else{if(g.memberToContribute){window.location=c(-1)}}}}else{$j(f).closest(".j-thumb-back, .j-td-follow-action").find("a.sgroup-join").show();$j(f).hide()}e.displayMessage(jive.socialgroups.soy.leaveConfirmation(g),i)}).addErrback(function(j,i){e.displayError(j,i)})};this.displayMessage=function(e,f){$j("<p />").html(e).message({style:"success",dismissCallback:f||$j.noop})};this.displayError=function(g,f){var e=jive.socialgroups.soy.renderError({message:g,code:f,href:window.location.href});$j(e).message({style:"error",showClose:true})};this.determineObjectID=function(e){var f=this.options.objectID||e.attr("data-objectid")||0;return parseInt(f,10)};function c(e){return window.location.href.replace(/\?(.*&)?qstep=(\d+)/,function(h,f,i){var g=parseInt(i)+e;return"?"+f+"qstep="+g})}this.tearDown=function(){var e=this;if(e.isPage(d)){$j(e.joinContainer).off("click");$j(e.leaveContainer).off("click")}else{$j(".sgroup-join").off("click");$j(".sgroup-leave").off("click")}}});
;
jive.namespace("MembershipApp");jive.MembershipApp.MembershipSource=jive.RestService.extend(function(a){a.resourceType="socialgroup";this.save=function(d){var e=new jive.conc.Promise(),c=this;var b=$j.deparam.querystring().fromQ;$j.ajax({type:"POST",url:this.RESOURCE_ENDPOINT+"/"+d.objectID+"/members",dataType:"json",data:b,contentType:"application/json; charset=utf-8",success:function(f,h,g){e.emitSuccess(f)},error:function(h,j,i){try{var g=$j.parseJSON(h.responseText);if(g&&g.error&&g.error.message){e.emitError(g.error.message,g.error.code)}}catch(f){e.emitError(null,h&&h.status)}}});return e};this.get=function(d){var e=new jive.conc.Promise(),c=this;var b={};b[this.resourceType]=d;$j.ajax({type:"GET",url:this.RESOURCE_ENDPOINT+"/"+d.objectID+"/memberInfo",dataType:"json",data:JSON.stringify(b),contentType:"application/json; charset=utf-8",success:function(f,h,g){e.emitSuccess(f)},error:function(h,j,i){try{var g=$j.parseJSON(h.responseText);if(g&&g.error&&g.error.message){e.emitError(g.error.message,g.error.code)}}catch(f){e.emitError(null,h&&h.status)}}});return e};this.destroy=function(b){var c=new jive.conc.Promise();$j.ajax({type:"DELETE",url:this.RESOURCE_ENDPOINT+"/"+b.objectID+"/members",success:function(){c.emitSuccess()},error:function(d){c.emitError(null,d.status)}});return c}});
;
jive.namespace("MembershipApp");jive.MembershipApp.Main=jive.oo.Class.extend(function(a){this.init=function(c){var b=this;this.membershipSource=new jive.MembershipApp.MembershipSource(c);this.membershipView=new jive.MembershipApp.MembershipView("#jive-link-joinSocialGroup,.jive-link-joinSocialGroup","#jive-link-leaveSocialGroup,.jive-link-leaveSocialGroup",c);this.membershipView.addListener("join",function(e,d){b.membershipSource.save({objectID:e}).addCallback(function(f){d.emitSuccess(f);jive.switchboard.emit("sgroup.member.join",f)}).addErrback(function(g,f){console.log("got a err in main.js");d.emitError(g,f)})}).addListener("leave",function(e,d){b.membershipSource.destroy({objectID:e}).addCallback(function(){jive.switchboard.emit("sgroup.member.leave",e);d.emitSuccess()}).addErrback(function(g,f){console.log("got a err in main.js");d.emitError(g,f)})}).addListener("prepareLeave",function(e,d){b.membershipSource.get({objectID:e}).addCallback(function(f){d.emitSuccess(f)}).addErrback(function(g,f){console.log("got a err in main.js");d.emitError(g,f)})})};this.tearDown=function(){this.membershipView.removeListener("join").removeListener("leave").removeListener("prepareLeave").tearDown()}});define("jive.membershipApp.Main",function(){return jive.MembershipApp.Main});
;
function toggleVCardActionButtons(){var a=$j(":checkbox[name ='vCardObjectTypes'][checked]");if(a.length>0){$j("#vcard-download-button").prop("disabled",false);$j("#vcard-email-button").prop("disabled",false)}else{$j("#vcard-download-button").prop("disabled",true);$j("#vcard-email-button").prop("disabled",true)}}function downloadVCard(b){var a=constructVCardURL(b);if(a&&a.length>0){document.location.href=a}else{alert("You must select at least one content type.");return false}return false}function emailSingleVCard(a,b){$j(":checkbox[name ='vCardObjectTypes'][checked]").prop("checked",false);a.prop("checked",true);emailVCard(b);return false}function emailVCard(c){var a=constructVCardURL(c);if(a&&a.length>0){try{$j("#vcard-modal-results").load(a,null,function(){$j("#vcard-modal-prompt").hide();$j("#vcard-modal-results").show()})}catch(b){$j("#vcard-modal-prompt").hide();$j("#vcard-modal-results").html("There was an unexpected error.<br><br>"+b);$j("#vcard-modal-results").show()}}else{alert("You must select at least one content type.")}return false}function constructVCardURL(b){var d=$j(":checkbox[name ='vCardObjectTypes'][checked]");if(d.length>0){var a=b;for(var c=0;c<d.length;c++){a=a+((a.indexOf("?")>-1)?"&":"?")+"objectTypes="+d[c].value}return a}else{return""}};
;
jive.model.ProjectController=function(c,a){var b=this;this.projectObjectType=a;this.archiveURL=jive.rest.url("/project/archive");this.unarchiveURL=jive.rest.url("/project/unarchive");this.locatorURL=jive.rest.url("/objectType/url/findURL");this.statusURL=jive.rest.url("/project/status");this.doArchive=function(d,e){$j.post(this.archiveURL+"/"+d,e)};this.doUnarchive=function(d,e){$j.post(this.unarchiveURL+"/"+d,e)};this.doStatus=function(f,e,d,g){$j.post(this.statusURL+"/"+d+"/"+e,{text:f},g)};this.doLocate=function(d,e){$j.getJSON(this.locatorURL+"/"+a+"/"+d,e)}};
;
jive.NestedRestService=jive.RestService.extend(function(a,b){a.init=function(c){b.init.call(this,c);this.parentType=c.parentType;this.parentID=c.parentID;this.POST_RESOURCE_ENDPOINT=[this.RESOURCE_ENDPOINT,this.parentType,this.parentID].join("/")}});
;
jive.namespace("Browse.Content");jive.Browse.Content.ItemSource=jive.RestService.extend(function(a){a.resourceType="content";a.pluralizedResourceType=a.resourceType;a.putOnUpdate=true});
;
jive.namespace("Browse.Container");jive.Browse.Container.ItemSource=jive.RestService.extend(function(a){a.resourceType="container";this.getContainerProperty=function(c){var b=this.RESOURCE_ENDPOINT+"/"+c.containerType+"/"+c.containerID+"/prop/"+c.propName;return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:b,data:{}})};this.setContainerProperty=function(c){var b=this.RESOURCE_ENDPOINT+"/"+c.containerType+"/"+c.containerID+"/prop/"+c.propName;return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:b,data:c.propValue})};this.removeContainerProperty=function(c){var b=this.RESOURCE_ENDPOINT+"/"+c.containerType+"/"+c.containerID+"/prop/"+c.propName;return this.commonAjaxRequest(new jive.conc.Promise(),"DELETE",{url:b})};this.getSpaceChildren=function(c){var b=this.RESOURCE_ENDPOINT+"/"+c.containerID+"/children";return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:b,data:c})};this.getBreadcrumbBean=function(c){var b=this.RESOURCE_ENDPOINT+"/"+c.containerType+"/"+c.containerID+"/breadcrumbs";return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:b,data:{}})}});
;
jive.namespace("Move.Content");jive.Move.Content.MoveView=jive.AbstractView.extend(function(a){var c=jQuery,b=jive.Move.Content;a.init=function(){var d=this;c(document).ready(function(){c("#jive-link-move a, a#jive-link-move").click(function(e){d.emit("browse");e.preventDefault()})})};this.confirm=function(f){var d=this;var e=c(".jive-modal");var g=jive.movecontent.confirm(f);d.prevContent=e.children();d.visibleContent=d.prevContent.filter(":visible");d.visibleContent.hide();e.append(g).removeClass("j-container-browse").trigger("resize");e.find(".js-move-confirm").click(function(h){d.emit("moveConfirmed",{targetContainerType:f.targetContainer.type,targetContainerID:f.targetContainer.id});h.preventDefault()});e.find(".js-move-confirm-cancel").click(function(h){e.find(".js-move-confirm-section").remove();d.visibleContent.show();e.addClass("j-container-browse").trigger("resize");h.preventDefault()});e.find(".close").click(function(h){e.find(".js-move-confirm-section").remove();h.preventDefault()});c("body").find(".js_lb_overlay").click(function(h){e.find(".js-move-confirm-section").remove();h.preventDefault()})}});
;
jive.namespace("Move.Content");jive.Move.Content.CapabilitiesSource=jive.NestedRestService.extend(function(a,b){a.resourceType="capability";a.init=function(c){b.init.call(this,c);this.pluralizedResourceType="capabilities";this.RESOURCE_ENDPOINT=jive.rest.url("/"+["content",this.parentType,this.parentID,this.pluralizedResourceType].join("/"));this.POST_RESOURCE_ENDPOINT=this.RESOURCE_ENDPOINT}});
;
jive.namespace("Move.Container");jive.Move.Container.CapabilitiesSource=jive.NestedRestService.extend(function(a,b){a.resourceType="capability";a.init=function(c){b.init.call(this,c);this.pluralizedResourceType="capabilities";this.RESOURCE_ENDPOINT=jive.rest.url("/"+["containers",this.parentType,this.parentID,this.pluralizedResourceType].join("/"));this.POST_RESOURCE_ENDPOINT=this.RESOURCE_ENDPOINT}});
;
jive.namespace("Move.Content");jive.Move.Content.Main=jive.oo.Class.extend(function(a){a.init=function(c){var b=this;this.objectType=c.objectType;this.objectID=c.objectID;this.containerType=c.containerType;this.containerID=c.containerID;this.isContainer=c.isContainer||false;this.contentCapabilitiesSource=new jive.Move.Content.CapabilitiesSource({parentID:this.objectID,parentType:this.objectType});this.containerCapabilitiesSource=new jive.Move.Container.CapabilitiesSource({parentID:this.objectID,parentType:this.objectType});this.contentSource=new jive.Browse.Content.ItemSource();this.containerSource=new jive.Browse.Container.ItemSource();this.moveView=new jive.Move.Content.MoveView();this.placePicker=new jive.Placepicker.Main($j.extend({pickerContext:"move"},c));this.moveView.addListener("browse",function(d){b.placePicker.showPicker()});this.moveView.addListener("moveConfirmed",function(d){if(b.isContainer){b.handleConfirmation(b.containerSource,d)}else{b.handleConfirmation(b.contentSource,d)}});this.placePicker.addListener("container",function(d,e){if(b.isContainer){b.handleContainerSelected(b.containerCapabilitiesSource,d)}else{b.handleContainerSelected(b.contentCapabilitiesSource,d)}})};a.handleConfirmation=function(d,c){var b=this;d.save({id:b.objectType+"/"+b.objectID,objectType:c.targetContainerType,objectID:c.targetContainerID}).addCallback(function(e){window.location=jive.app.url({path:e.link+"?prevContainerType="+b.containerType+"&prevContainerID="+b.containerID})})};a.handleContainerSelected=function(d,c){var b=this;d.findAll({containerType:c.targetContainerType,containerID:c.targetContainerID}).addCallback(function(e){b.moveView.confirm(e)})}});
;
jive.namespace("EmailNotification");jive.EmailNotification.Source=jive.RestService.extend(function(a){a.resourceType="emailwatches";a.pluralizedResourceType=a.resourceType;a.resourceType="emailwatches";this.watch=function(d,b){var c=this.RESOURCE_ENDPOINT+"/watch/"+b+"/"+d;return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:c})};this.unwatch=function(d,b){var c=this.RESOURCE_ENDPOINT+"/unwatch/"+b+"/"+d;return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:c})}});
;
jive.namespace("EmailNotification");jive.EmailNotification.Main=function(e,d,b){var a=new jive.EmailNotification.Source(),c={watch:{newId:"jive-link-thread-unwatch",save:a.watch.bind(a),view:jive.soy.email_notification.stop},unwatch:{newId:"jive-link-thread-watch",save:a.unwatch.bind(a),view:jive.soy.email_notification.start}};$j("#jive-link-thread-watch, #jive-link-thread-unwatch").delegate("a","click",function(g){g.preventDefault();var h=$j(this).closest("#jive-link-thread-watch, #jive-link-thread-unwatch"),f=h.attr("id").split("-").pop();c[f].save(e,d).addCallback(function(){h.attr("id",c[f].newId).html(c[f].view({type:h.attr("data-type")||"common"}));$j(jive.soy.email_notification.message({type:f,isUser:!!b})).message({style:"success"})})})};
;
jive.namespace("Modalizer");jive.Modalizer.ModalView=jive.AbstractView.extend(function(a){var c=jQuery,b=jive.Modalizer;a.init=function(h){var e=this,f,g={};if(h.width&&h.width.match(/^(narrow|medium|wide)$/i)){f="jive-modal-"+h.width}else{if(h.width){g.width=h.width}else{f="jive-modal-medium"}}var d=function(j){var i=c(this).attr("href")||c(this).find("a:first").attr("href");if(i){e.emitP("launch",i).addCallback(function(p){var o=c("<div/>",{"class":"jive-modal j-modal"+(f?" "+f:""),id:"js-modalized"}).css(g);var n=e.separateScripts(p);var m=e.shiv(n[0]);var k=n[1];var l=!c.browser.msie||parseInt(c.browser.version,10)>8;l&&o.html(m);o.lightbox_me({destroyOnClose:true,closeFocusSelector:h.triggers?h.triggers.join(", "):h.liveTriggers.join(", "),onClose:h.onClose,onLoad:function(){if(!l){o.html(m);k()}}});if(l){k()}})}else{alert("No valid URL found to modalize")}j.preventDefault()};c(document).ready(function(){if(h.triggers){c.each(h.triggers,function(){c(""+this).click(d)})}if(h.liveTriggers){c.each(h.liveTriggers,function(){c(""+this).live("click",d)})}})}});
;
jive.namespace("Modalizer");jive.Modalizer.ModalSource=jive.oo.Class.extend(function(a){this.getConfirmation=function(b,c){$j.ajax({url:b,type:"GET",dataType:"html",success:function(d){c(d)},error:function(){alert("failed..")}})}});
;
jive.namespace("Modalizer");jive.Modalizer.Main=jive.oo.Class.extend(function(a){a.init=function(c){var b=this;this.modalView=new jive.Modalizer.ModalView(c);this.modalSource=jive.Modalizer.ModalSource();this.modalView.addListener("launch",function(d,e){b.modalSource.getConfirmation(d,function(f){e.emitSuccess(f)})})}});
;
jive.namespace("places.Manage");jive.places.Manage.Main=jive.oo.Class.extend(function(a){var c=jQuery,b=jive.places.Manage;a.init=function(e,f){var d=this;this.objectType=e.objectType;this.objectID=e.id;this.membershipSupported=e.membershipSupported;this.canArchive=e.canArchive;this.placeI18nKeyPrefix=e.placeI18nKeyPrefix;this.objectURL=e.objectURL;this.parentID=e.parentID;this.parentType=e.parentType;this.canCreateByEmail=e.canCreateByEmail;this.canManageAnnouncements=f.canManageAnnouncements;this.canManageCategories=f.canManageCategories;this.canMoveContainer=f.canMoveContainer;this.canManageContainer=f.canManageContainer;this.i18n=f.i18n;if(this.canCreateByEmail){var g=this;window.launchAuthorByEmailModal=function(){var h=new b.AuthorByEmailControls();h.addListener("load",d.modalLoader("/author-by-email.jspa",{view:"place",containerType:g.objectType,container:g.objectID}))}}if(this.canManageCategories){this.categoryControls=new b.CategoryControls();this.categoryControls.addListener("load",this.modalLoader("/manage-category.jspa"))}if(this.canArchive){this.archiveControls=new b.ArchiveControls();this.archiveControls.addListener("load",this.modalLoader("/archive-project.jspa"))}if(this.canMoveContainer){this.jiveMoveContent=new jive.Move.Content.Main({objectType:this.objectType,objectID:this.objectID,objectUrl:this.objectURL,isContainer:true,containerID:this.parentID,containerType:this.parentType,searchPlaceholderKey:"place.picker.move.search.project"})}if(this.canManageContainer){this.deleteControls=new jive.Modalizer.Main({liveTriggers:["#jive-place-link-manage-delete"],width:"narrow"})}this.jiveFollow=new jive.FollowApp.Main({objectType:containerType,objectID:containerID,featureName:e.placeI18nKeyPrefix,i18n:this.i18n});if(this.membershipSupported){this.jiveMembership=new jive.MembershipApp.Main({objectID:containerID})}this.customControls=new b.CustomControls();this.customControls.addListener("load",this.modalLoader(""));c(document).ready(function(){d.menuView=new jive.MenuView(function(){return c("#j-place-manage-container")},"#jive-place-link-manage",{darkPopover:true,destroyOnClose:false});c("#j-place-manage-container").click(function(h){d.menuView.close()});new jive.EmailNotification.Main(e.id,e.objectType)})};a.modalLoader=function(e,f){var d=this;return function(j,g,i){var h=c.extend({containerType:d.objectType,container:d.objectID},f);if(typeof i=="undefined"){i=j;j=null}if(j){h.editID=j}if(!e&&g){e=g}c.get(jive.app.url({path:e}),h,function(k){i.emitSuccess(k)})}}});
;
jive.namespace('EventCalendarApp');

jive.EventCalendarApp.CalendarSource = jive.RestService.extend(function(protect) {
    
    
    this.save = function(eventID, data) {
        var promise = new jive.conc.Promise(),
            source = this;
        
        $j.ajax({
            url: jive.rest.url('/calendar/' + eventID),
            type: 'PUT',
            dataType: 'json',
            data: data,
            success: function() {
                promise.emitSuccess();
            },
            error: source.errorCallback(promise),
            timeout: 30000
        });
        
        return promise;
    };
});
;
/**
 * @preserve
 * FullCalendar v1.5.4
 * http://arshaw.com/fullcalendar/
 *
 * Use fullcalendar.css for basic styling.
 * For event drag & drop, requires jQuery UI draggable.
 * For event resizing, requires jQuery UI resizable.
 *
 * Copyright (c) 2011 Adam Shaw
 * Dual licensed under the MIT and GPL licenses, located in
 * MIT-LICENSE.txt and GPL-LICENSE.txt respectively.
 *
 * Date: Tue Sep 4 23:38:33 2012 -0700
 *
 */
 
(function($, undefined) {


var defaults = {

	// display
	defaultView: 'month',
	aspectRatio: 1.35,
	header: {
		left: 'title',
		center: '',
		right: 'today prev,next'
	},
	weekends: true,
	
	// editing
	//editable: false,
	//disableDragging: false,
	//disableResizing: false,
	
	allDayDefault: true,
	ignoreTimezone: true,
	
	// event ajax
	lazyFetching: true,
	startParam: 'start',
	endParam: 'end',
	
	// time formats
	titleFormat: {
		month: 'MMMM yyyy',
		week: "MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",
		day: 'dddd, MMM d, yyyy'
	},
	columnFormat: {
		month: 'ddd',
		week: 'ddd M/d',
		day: 'dddd M/d'
	},
	timeFormat: { // for event elements
		'': 'h(:mm)tt' // default
	},
	
	// locale
	isRTL: false,
	firstDay: 0,
	monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
	dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
	dayNamesShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
	buttonText: {
		prev: '&nbsp;&#9668;&nbsp;',
		next: '&nbsp;&#9658;&nbsp;',
		prevYear: '&nbsp;&lt;&lt;&nbsp;',
		nextYear: '&nbsp;&gt;&gt;&nbsp;',
		today: 'today',
		month: 'month',
		week: 'week',
		day: 'day'
	},
	
	// jquery-ui theming
	theme: false,
	buttonIcons: {
		prev: 'circle-triangle-w',
		next: 'circle-triangle-e'
	},
	
	//selectable: false,
	unselectAuto: true,
	
	dropAccept: '*'
	
};

// right-to-left defaults
var rtlDefaults = {
	header: {
		left: 'next,prev today',
		center: '',
		right: 'title'
	},
	buttonText: {
		prev: '&nbsp;&#9658;&nbsp;',
		next: '&nbsp;&#9668;&nbsp;',
		prevYear: '&nbsp;&gt;&gt;&nbsp;',
		nextYear: '&nbsp;&lt;&lt;&nbsp;'
	},
	buttonIcons: {
		prev: 'circle-triangle-e',
		next: 'circle-triangle-w'
	}
};



var fc = $.fullCalendar = { version: "1.5.4" };
var fcViews = fc.views = {};


$.fn.fullCalendar = function(options) {


	// method calling
	if (typeof options == 'string') {
		var args = Array.prototype.slice.call(arguments, 1);
		var res;
		this.each(function() {
			var calendar = $.data(this, 'fullCalendar');
			if (calendar && $.isFunction(calendar[options])) {
				var r = calendar[options].apply(calendar, args);
				if (res === undefined) {
					res = r;
				}
				if (options == 'destroy') {
					$.removeData(this, 'fullCalendar');
				}
			}
		});
		if (res !== undefined) {
			return res;
		}
		return this;
	}
	
	
	// would like to have this logic in EventManager, but needs to happen before options are recursively extended
	var eventSources = options.eventSources || [];
	delete options.eventSources;
	if (options.events) {
		eventSources.push(options.events);
		delete options.events;
	}
	

	options = $.extend(true, {},
		defaults,
		(options.isRTL || options.isRTL===undefined && defaults.isRTL) ? rtlDefaults : {},
		options
	);
	
	
	this.each(function(i, _element) {
		var element = $(_element);
		var calendar = new Calendar(element, options, eventSources);
		element.data('fullCalendar', calendar); // TODO: look into memory leak implications
		calendar.render();
	});
	
	
	return this;
	
};


// function for adding/overriding defaults
function setDefaults(d) {
	$.extend(true, defaults, d);
}



 
function Calendar(element, options, eventSources) {
	var t = this;
	
	
	// exports
	t.options = options;
	t.render = render;
	t.destroy = destroy;
	t.refetchEvents = refetchEvents;
	t.reportEvents = reportEvents;
	t.reportEventChange = reportEventChange;
	t.rerenderEvents = rerenderEvents;
	t.changeView = changeView;
	t.select = select;
	t.unselect = unselect;
	t.prev = prev;
	t.next = next;
	t.prevYear = prevYear;
	t.nextYear = nextYear;
	t.today = today;
	t.gotoDate = gotoDate;
	t.incrementDate = incrementDate;
	t.formatDate = function(format, date) { return formatDate(format, date, options) };
	t.formatDates = function(format, date1, date2) { return formatDates(format, date1, date2, options) };
	t.getDate = getDate;
	t.getView = getView;
	t.option = option;
	t.trigger = trigger;
	
	
	// imports
	EventManager.call(t, options, eventSources);
	var isFetchNeeded = t.isFetchNeeded;
	var fetchEvents = t.fetchEvents;
	
	
	// locals
	var _element = element[0];
	var header;
	var headerElement;
	var content;
	var tm; // for making theme classes
	var currentView;
	var viewInstances = {};
	var elementOuterWidth;
	var suggestedViewHeight;
	var absoluteViewElement;
	var resizeUID = 0;
	var ignoreWindowResize = 0;
	var date = new Date();
	var events = [];
	var _dragElement;
	
	
	
	/* Main Rendering
	-----------------------------------------------------------------------------*/
	
	
	setYMD(date, options.year, options.month, options.date);
	
	
	function render(inc) {
		if (!content) {
			initialRender();
		}else{
			calcSize();
			markSizesDirty();
			markEventsDirty();
			renderView(inc);
		}
	}
	
	
	function initialRender() {
		tm = options.theme ? 'ui' : 'fc';
		element.addClass('fc');
		if (options.isRTL) {
			element.addClass('fc-rtl');
		}
		if (options.theme) {
			element.addClass('ui-widget');
		}
		content = $("<div class='fc-content' style='position:relative'/>")
			.prependTo(element);
		header = new Header(t, options);
		headerElement = header.render();
		if (headerElement) {
			element.prepend(headerElement);
		}
		changeView(options.defaultView);
		$(window).resize(windowResize);
		// needed for IE in a 0x0 iframe, b/c when it is resized, never triggers a windowResize
		if (!bodyVisible()) {
			lateRender();
		}
	}
	
	
	// called when we know the calendar couldn't be rendered when it was initialized,
	// but we think it's ready now
	function lateRender() {
		setTimeout(function() { // IE7 needs this so dimensions are calculated correctly
			if (!currentView.start && bodyVisible()) { // !currentView.start makes sure this never happens more than once
				renderView();
			}
		},0);
	}
	
	
	function destroy() {
		$(window).unbind('resize', windowResize);
		header.destroy();
		content.remove();
		element.removeClass('fc fc-rtl ui-widget');
	}
	
	
	
	function elementVisible() {
		return _element.offsetWidth !== 0;
	}
	
	
	function bodyVisible() {
		return $('body')[0].offsetWidth !== 0;
	}
	
	
	
	/* View Rendering
	-----------------------------------------------------------------------------*/
	
	// TODO: improve view switching (still weird transition in IE, and FF has whiteout problem)
	
	function changeView(newViewName) {
		if (!currentView || newViewName != currentView.name) {
			ignoreWindowResize++; // because setMinHeight might change the height before render (and subsequently setSize) is reached

			unselect();
			
			var oldView = currentView;
			var newViewElement;
				
			if (oldView) {
				(oldView.beforeHide || noop)(); // called before changing min-height. if called after, scroll state is reset (in Opera)
				setMinHeight(content, content.height());
				oldView.element.hide();
			}else{
				setMinHeight(content, 1); // needs to be 1 (not 0) for IE7, or else view dimensions miscalculated
			}
			content.css('overflow', 'hidden');
			
			currentView = viewInstances[newViewName];
			if (currentView) {
				currentView.element.show();
			}else{
				currentView = viewInstances[newViewName] = new fcViews[newViewName](
					newViewElement = absoluteViewElement =
						$("<div class='fc-view fc-view-" + newViewName + "' style='position:absolute'/>")
							.appendTo(content),
					t // the calendar object
				);
			}
			
			if (oldView) {
				header.deactivateButton(oldView.name);
			}
			header.activateButton(newViewName);
			
			renderView(); // after height has been set, will make absoluteViewElement's position=relative, then set to null
			
			content.css('overflow', '');
			if (oldView) {
				setMinHeight(content, 1);
			}
			
			if (!newViewElement) {
				(currentView.afterShow || noop)(); // called after setting min-height/overflow, so in final scroll state (for Opera)
			}
			
			ignoreWindowResize--;
		}
	}
	
	
	
	function renderView(inc) {
		if (elementVisible()) {
			ignoreWindowResize++; // because renderEvents might temporarily change the height before setSize is reached

			unselect();
			
			if (suggestedViewHeight === undefined) {
				calcSize();
			}
			
			var forceEventRender = false;
			if (!currentView.start || inc || date < currentView.start || date >= currentView.end) {
				// view must render an entire new date range (and refetch/render events)
				currentView.render(date, inc || 0); // responsible for clearing events
				setSize(true);
				forceEventRender = true;
			}
			else if (currentView.sizeDirty) {
				// view must resize (and rerender events)
				currentView.clearEvents();
				setSize();
				forceEventRender = true;
			}
			else if (currentView.eventsDirty) {
				currentView.clearEvents();
				forceEventRender = true;
			}
			currentView.sizeDirty = false;
			currentView.eventsDirty = false;
			updateEvents(forceEventRender);
			
			elementOuterWidth = element.outerWidth();
			
			header.updateTitle(currentView.title);
			var today = new Date();
			if (today >= currentView.start && today < currentView.end) {
				header.disableButton('today');
			}else{
				header.enableButton('today');
			}
			
			ignoreWindowResize--;
			currentView.trigger('viewDisplay', _element);
		}
	}
	
	
	
	/* Resizing
	-----------------------------------------------------------------------------*/
	
	
	function updateSize() {
		markSizesDirty();
		if (elementVisible()) {
			calcSize();
			setSize();
			unselect();
			currentView.clearEvents();
			currentView.renderEvents(events);
			currentView.sizeDirty = false;
		}
	}
	
	
	function markSizesDirty() {
		$.each(viewInstances, function(i, inst) {
			inst.sizeDirty = true;
		});
	}
	
	
	function calcSize() {
		if (options.contentHeight) {
			suggestedViewHeight = options.contentHeight;
		}
		else if (options.height) {
			suggestedViewHeight = options.height - (headerElement ? headerElement.height() : 0) - vsides(content);
		}
		else {
			suggestedViewHeight = Math.round(content.width() / Math.max(options.aspectRatio, .5));
		}
	}
	
	
	function setSize(dateChanged) { // todo: dateChanged?
		ignoreWindowResize++;
		currentView.setHeight(suggestedViewHeight, dateChanged);
		if (absoluteViewElement) {
			absoluteViewElement.css('position', 'relative');
			absoluteViewElement = null;
		}
		currentView.setWidth(content.width(), dateChanged);
		ignoreWindowResize--;
	}
	
	
	function windowResize() {
		if (!ignoreWindowResize) {
			if (currentView.start) { // view has already been rendered
				var uid = ++resizeUID;
				setTimeout(function() { // add a delay
					if (uid == resizeUID && !ignoreWindowResize && elementVisible()) {
						if (elementOuterWidth != (elementOuterWidth = element.outerWidth())) {
							ignoreWindowResize++; // in case the windowResize callback changes the height
							updateSize();
							currentView.trigger('windowResize', _element);
							ignoreWindowResize--;
						}
					}
				}, 200);
			}else{
				// calendar must have been initialized in a 0x0 iframe that has just been resized
				lateRender();
			}
		}
	}
	
	
	
	/* Event Fetching/Rendering
	-----------------------------------------------------------------------------*/
	
	
	// fetches events if necessary, rerenders events if necessary (or if forced)
	function updateEvents(forceRender) {
		if (!options.lazyFetching || isFetchNeeded(currentView.visStart, currentView.visEnd)) {
			refetchEvents();
		}
		else if (forceRender) {
			rerenderEvents();
		}
	}
	
	
	function refetchEvents() {
		fetchEvents(currentView.visStart, currentView.visEnd); // will call reportEvents
	}
	
	
	// called when event data arrives
	function reportEvents(_events) {
		events = _events;
		rerenderEvents();
	}
	
	
	// called when a single event's data has been changed
	function reportEventChange(eventID) {
		rerenderEvents(eventID);
	}
	
	
	// attempts to rerenderEvents
	function rerenderEvents(modifiedEventID) {
		markEventsDirty();
		if (elementVisible()) {
			currentView.clearEvents();
			currentView.renderEvents(events, modifiedEventID);
			currentView.eventsDirty = false;
		}
	}
	
	
	function markEventsDirty() {
		$.each(viewInstances, function(i, inst) {
			inst.eventsDirty = true;
		});
	}
	


	/* Selection
	-----------------------------------------------------------------------------*/
	

	function select(start, end, allDay) {
		currentView.select(start, end, allDay===undefined ? true : allDay);
	}
	

	function unselect() { // safe to be called before renderView
		if (currentView) {
			currentView.unselect();
		}
	}
	
	
	
	/* Date
	-----------------------------------------------------------------------------*/
	
	
	function prev() {
		renderView(-1);
	}
	
	
	function next() {
		renderView(1);
	}
	
	
	function prevYear() {
		addYears(date, -1);
		renderView();
	}
	
	
	function nextYear() {
		addYears(date, 1);
		renderView();
	}
	
	
	function today() {
		date = new Date();
		renderView();
	}
	
	
	function gotoDate(year, month, dateOfMonth) {
		if (year instanceof Date) {
			date = cloneDate(year); // provided 1 argument, a Date
		}else{
			setYMD(date, year, month, dateOfMonth);
		}
		renderView();
	}
	
	
	function incrementDate(years, months, days) {
		if (years !== undefined) {
			addYears(date, years);
		}
		if (months !== undefined) {
			addMonths(date, months);
		}
		if (days !== undefined) {
			addDays(date, days);
		}
		renderView();
	}
	
	
	function getDate() {
		return cloneDate(date);
	}
	
	
	
	/* Misc
	-----------------------------------------------------------------------------*/
	
	
	function getView() {
		return currentView;
	}
	
	
	function option(name, value) {
		if (value === undefined) {
			return options[name];
		}
		if (name == 'height' || name == 'contentHeight' || name == 'aspectRatio') {
			options[name] = value;
			updateSize();
		}
	}
	
	
	function trigger(name, thisObj) {
		if (options[name]) {
			return options[name].apply(
				thisObj || _element,
				Array.prototype.slice.call(arguments, 2)
			);
		}
	}
	
	
	
	/* External Dragging
	------------------------------------------------------------------------*/
	
	if (options.droppable) {
		$(document)
			.bind('dragstart', function(ev, ui) {
				var _e = ev.target;
				var e = $(_e);
				if (!e.parents('.fc').length) { // not already inside a calendar
					var accept = options.dropAccept;
					if ($.isFunction(accept) ? accept.call(_e, e) : e.is(accept)) {
						_dragElement = _e;
						currentView.dragStart(_dragElement, ev, ui);
					}
				}
			})
			.bind('dragstop', function(ev, ui) {
				if (_dragElement) {
					currentView.dragStop(_dragElement, ev, ui);
					_dragElement = null;
				}
			});
	}
	

}

function Header(calendar, options) {
	var t = this;
	
	
	// exports
	t.render = render;
	t.destroy = destroy;
	t.updateTitle = updateTitle;
	t.activateButton = activateButton;
	t.deactivateButton = deactivateButton;
	t.disableButton = disableButton;
	t.enableButton = enableButton;
	
	
	// locals
	var element = $([]);
	var tm;
	


	function render() {
		tm = options.theme ? 'ui' : 'fc';
		var sections = options.header;
		if (sections) {
			element = $("<table class='fc-header' style='width:100%'/>")
				.append(
					$("<tr/>")
						.append(renderSection('left'))
						.append(renderSection('center'))
						.append(renderSection('right'))
				);
			return element;
		}
	}
	
	
	function destroy() {
		element.remove();
	}
	
	
	function renderSection(position) {
		var e = $("<td class='fc-header-" + position + "'/>");
		var buttonStr = options.header[position];
		if (buttonStr) {
			$.each(buttonStr.split(' '), function(i) {
				if (i > 0) {
					e.append("<span class='fc-header-space'/>");
				}
				var prevButton;
				$.each(this.split(','), function(j, buttonName) {
					if (buttonName == 'title') {
						e.append("<span class='fc-header-title'><h2>&nbsp;</h2></span>");
						if (prevButton) {
							prevButton.addClass(tm + '-corner-right');
						}
						prevButton = null;
					}else{
						var buttonClick;
						if (calendar[buttonName]) {
							buttonClick = calendar[buttonName]; // calendar method
						}
						else if (fcViews[buttonName]) {
							buttonClick = function() {
								button.removeClass(tm + '-state-hover'); // forget why
								calendar.changeView(buttonName);
							};
						}
						if (buttonClick) {
							var icon = options.theme ? smartProperty(options.buttonIcons, buttonName) : null; // why are we using smartProperty here?
							var text = smartProperty(options.buttonText, buttonName); // why are we using smartProperty here?
							var button = $(
								"<span class='fc-button fc-button-" + buttonName + " " + tm + "-state-default'>" +
									"<span class='fc-button-inner'>" +
										"<span class='fc-button-content'>" +
											(icon ?
												"<span class='fc-icon-wrap'>" +
													"<span class='ui-icon ui-icon-" + icon + "'/>" +
												"</span>" :
												text
												) +
										"</span>" +
										"<span class='fc-button-effect'><span></span></span>" +
									"</span>" +
								"</span>"
							);
							if (button) {
								button
									.click(function() {
										if (!button.hasClass(tm + '-state-disabled')) {
											buttonClick();
										}
									})
									.mousedown(function() {
										button
											.not('.' + tm + '-state-active')
											.not('.' + tm + '-state-disabled')
											.addClass(tm + '-state-down');
									})
									.mouseup(function() {
										button.removeClass(tm + '-state-down');
									})
									.hover(
										function() {
											button
												.not('.' + tm + '-state-active')
												.not('.' + tm + '-state-disabled')
												.addClass(tm + '-state-hover');
										},
										function() {
											button
												.removeClass(tm + '-state-hover')
												.removeClass(tm + '-state-down');
										}
									)
									.appendTo(e);
								if (!prevButton) {
									button.addClass(tm + '-corner-left');
								}
								prevButton = button;
							}
						}
					}
				});
				if (prevButton) {
					prevButton.addClass(tm + '-corner-right');
				}
			});
		}
		return e;
	}
	
	
	function updateTitle(html) {
		element.find('h2')
			.html(html);
	}
	
	
	function activateButton(buttonName) {
		element.find('span.fc-button-' + buttonName)
			.addClass(tm + '-state-active');
	}
	
	
	function deactivateButton(buttonName) {
		element.find('span.fc-button-' + buttonName)
			.removeClass(tm + '-state-active');
	}
	
	
	function disableButton(buttonName) {
		element.find('span.fc-button-' + buttonName)
			.addClass(tm + '-state-disabled');
	}
	
	
	function enableButton(buttonName) {
		element.find('span.fc-button-' + buttonName)
			.removeClass(tm + '-state-disabled');
	}


}

fc.sourceNormalizers = [];
fc.sourceFetchers = [];

var ajaxDefaults = {
	dataType: 'json',
	cache: false
};

var eventGUID = 1;


function EventManager(options, _sources) {
	var t = this;
	
	
	// exports
	t.isFetchNeeded = isFetchNeeded;
	t.fetchEvents = fetchEvents;
	t.addEventSource = addEventSource;
	t.removeEventSource = removeEventSource;
	t.updateEvent = updateEvent;
	t.renderEvent = renderEvent;
	t.removeEvents = removeEvents;
	t.clientEvents = clientEvents;
	t.normalizeEvent = normalizeEvent;
	
	
	// imports
	var trigger = t.trigger;
	var getView = t.getView;
	var reportEvents = t.reportEvents;
	
	
	// locals
	var stickySource = { events: [] };
	var sources = [ stickySource ];
	var rangeStart, rangeEnd;
	var currentFetchID = 0;
	var pendingSourceCnt = 0;
	var loadingLevel = 0;
	var cache = [];
	
	
	for (var i=0; i<_sources.length; i++) {
		_addEventSource(_sources[i]);
	}
	
	
	
	/* Fetching
	-----------------------------------------------------------------------------*/
	
	
	function isFetchNeeded(start, end) {
		return !rangeStart || start < rangeStart || end > rangeEnd;
	}
	
	
	function fetchEvents(start, end) {
		rangeStart = start;
		rangeEnd = end;
		cache = [];
		var fetchID = ++currentFetchID;
		var len = sources.length;
		pendingSourceCnt = len;
		for (var i=0; i<len; i++) {
			fetchEventSource(sources[i], fetchID);
		}
	}
	
	
	function fetchEventSource(source, fetchID) {
		_fetchEventSource(source, function(events) {
			if (fetchID == currentFetchID) {
				if (events) {
					for (var i=0; i<events.length; i++) {
						events[i].source = source;
						normalizeEvent(events[i]);
					}
					cache = cache.concat(events);
				}
				pendingSourceCnt--;
				if (!pendingSourceCnt) {
					reportEvents(cache);
				}
			}
		});
	}
	
	
	function _fetchEventSource(source, callback) {
		var i;
		var fetchers = fc.sourceFetchers;
		var res;
		for (i=0; i<fetchers.length; i++) {
			res = fetchers[i](source, rangeStart, rangeEnd, callback);
			if (res === true) {
				// the fetcher is in charge. made its own async request
				return;
			}
			else if (typeof res == 'object') {
				// the fetcher returned a new source. process it
				_fetchEventSource(res, callback);
				return;
			}
		}
		var events = source.events;
		if (events) {
			if ($.isFunction(events)) {
				pushLoading();
				events(cloneDate(rangeStart), cloneDate(rangeEnd), function(events) {
					callback(events);
					popLoading();
				});
			}
			else if ($.isArray(events)) {
				callback(events);
			}
			else {
				callback();
			}
		}else{
			var url = source.url;
			if (url) {
				var success = source.success;
				var error = source.error;
				var complete = source.complete;
				var data = $.extend({}, source.data || {});
				var startParam = firstDefined(source.startParam, options.startParam);
				var endParam = firstDefined(source.endParam, options.endParam);
				if (startParam) {
					data[startParam] = Math.round(+rangeStart / 1000);
				}
				if (endParam) {
					data[endParam] = Math.round(+rangeEnd / 1000);
				}
				pushLoading();
				$.ajax($.extend({}, ajaxDefaults, source, {
					data: data,
					success: function(events) {
						events = events || [];
						var res = applyAll(success, this, arguments);
						if ($.isArray(res)) {
							events = res;
						}
						callback(events);
					},
					error: function() {
						applyAll(error, this, arguments);
						callback();
					},
					complete: function() {
						applyAll(complete, this, arguments);
						popLoading();
					}
				}));
			}else{
				callback();
			}
		}
	}
	
	
	
	/* Sources
	-----------------------------------------------------------------------------*/
	

	function addEventSource(source) {
		source = _addEventSource(source);
		if (source) {
			pendingSourceCnt++;
			fetchEventSource(source, currentFetchID); // will eventually call reportEvents
		}
	}
	
	
	function _addEventSource(source) {
		if ($.isFunction(source) || $.isArray(source)) {
			source = { events: source };
		}
		else if (typeof source == 'string') {
			source = { url: source };
		}
		if (typeof source == 'object') {
			normalizeSource(source);
			sources.push(source);
			return source;
		}
	}
	

	function removeEventSource(source) {
		sources = $.grep(sources, function(src) {
			return !isSourcesEqual(src, source);
		});
		// remove all client events from that source
		cache = $.grep(cache, function(e) {
			return !isSourcesEqual(e.source, source);
		});
		reportEvents(cache);
	}
	
	
	
	/* Manipulation
	-----------------------------------------------------------------------------*/
	
	
	function updateEvent(event) { // update an existing event
		var i, len = cache.length, e,
			defaultEventEnd = getView().defaultEventEnd, // getView???
			startDelta = event.start - event._start,
			endDelta = event.end ?
				(event.end - (event._end || defaultEventEnd(event))) // event._end would be null if event.end
				: 0;                                                      // was null and event was just resized
		for (i=0; i<len; i++) {
			e = cache[i];
			if (e._id == event._id && e != event) {
				e.start = new Date(+e.start + startDelta);
				if (event.end) {
					if (e.end) {
						e.end = new Date(+e.end + endDelta);
					}else{
						e.end = new Date(+defaultEventEnd(e) + endDelta);
					}
				}else{
					e.end = null;
				}
				e.title = event.title;
				e.url = event.url;
				e.allDay = event.allDay;
				e.className = event.className;
				e.editable = event.editable;
				e.color = event.color;
				e.backgroudColor = event.backgroudColor;
				e.borderColor = event.borderColor;
				e.textColor = event.textColor;
				normalizeEvent(e);
			}
		}
		normalizeEvent(event);
		reportEvents(cache);
	}
	
	
	function renderEvent(event, stick) {
		normalizeEvent(event);
		if (!event.source) {
			if (stick) {
				stickySource.events.push(event);
				event.source = stickySource;
			}
			cache.push(event);
		}
		reportEvents(cache);
	}
	
	
	function removeEvents(filter) {
		if (!filter) { // remove all
			cache = [];
			// clear all array sources
			for (var i=0; i<sources.length; i++) {
				if ($.isArray(sources[i].events)) {
					sources[i].events = [];
				}
			}
		}else{
			if (!$.isFunction(filter)) { // an event ID
				var id = filter + '';
				filter = function(e) {
					return e._id == id;
				};
			}
			cache = $.grep(cache, filter, true);
			// remove events from array sources
			for (var i=0; i<sources.length; i++) {
				if ($.isArray(sources[i].events)) {
					sources[i].events = $.grep(sources[i].events, filter, true);
				}
			}
		}
		reportEvents(cache);
	}
	
	
	function clientEvents(filter) {
		if ($.isFunction(filter)) {
			return $.grep(cache, filter);
		}
		else if (filter) { // an event ID
			filter += '';
			return $.grep(cache, function(e) {
				return e._id == filter;
			});
		}
		return cache; // else, return all
	}
	
	
	
	/* Loading State
	-----------------------------------------------------------------------------*/
	
	
	function pushLoading() {
		if (!loadingLevel++) {
			trigger('loading', null, true);
		}
	}
	
	
	function popLoading() {
		if (!--loadingLevel) {
			trigger('loading', null, false);
		}
	}
	
	
	
	/* Event Normalization
	-----------------------------------------------------------------------------*/
	
	
	function normalizeEvent(event) {
		var source = event.source || {};
		var ignoreTimezone = firstDefined(source.ignoreTimezone, options.ignoreTimezone);
		event._id = event._id || (event.id === undefined ? '_fc' + eventGUID++ : event.id + '');
		if (event.date) {
			if (!event.start) {
				event.start = event.date;
			}
			delete event.date;
		}
		event._start = cloneDate(event.start = parseDate(event.start, ignoreTimezone));
		event.end = parseDate(event.end, ignoreTimezone);
		if (event.end && event.end <= event.start) {
			event.end = null;
		}
		event._end = event.end ? cloneDate(event.end) : null;
		if (event.allDay === undefined) {
			event.allDay = firstDefined(source.allDayDefault, options.allDayDefault);
		}
		if (event.className) {
			if (typeof event.className == 'string') {
				event.className = event.className.split(/\s+/);
			}
		}else{
			event.className = [];
		}
		// TODO: if there is no start date, return false to indicate an invalid event
	}
	
	
	
	/* Utils
	------------------------------------------------------------------------------*/
	
	
	function normalizeSource(source) {
		if (source.className) {
			// TODO: repeat code, same code for event classNames
			if (typeof source.className == 'string') {
				source.className = source.className.split(/\s+/);
			}
		}else{
			source.className = [];
		}
		var normalizers = fc.sourceNormalizers;
		for (var i=0; i<normalizers.length; i++) {
			normalizers[i](source);
		}
	}
	
	
	function isSourcesEqual(source1, source2) {
		return source1 && source2 && getSourcePrimitive(source1) == getSourcePrimitive(source2);
	}
	
	
	function getSourcePrimitive(source) {
		return ((typeof source == 'object') ? (source.events || source.url) : '') || source;
	}


}


fc.addDays = addDays;
fc.cloneDate = cloneDate;
fc.parseDate = parseDate;
fc.parseISO8601 = parseISO8601;
fc.parseTime = parseTime;
fc.formatDate = formatDate;
fc.formatDates = formatDates;



/* Date Math
-----------------------------------------------------------------------------*/

var dayIDs = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
	DAY_MS = 86400000,
	HOUR_MS = 3600000,
	MINUTE_MS = 60000;
	

function addYears(d, n, keepTime) {
	d.setFullYear(d.getFullYear() + n);
	if (!keepTime) {
		clearTime(d);
	}
	return d;
}


function addMonths(d, n, keepTime) { // prevents day overflow/underflow
	if (+d) { // prevent infinite looping on invalid dates
		var m = d.getMonth() + n,
			check = cloneDate(d);
		check.setDate(1);
		check.setMonth(m);
		d.setMonth(m);
		if (!keepTime) {
			clearTime(d);
		}
		while (d.getMonth() != check.getMonth()) {
			d.setDate(d.getDate() + (d < check ? 1 : -1));
		}
	}
	return d;
}


function addDays(d, n, keepTime) { // deals with daylight savings
	if (+d) {
		var dd = d.getDate() + n,
			check = cloneDate(d);
		check.setHours(9); // set to middle of day
		check.setDate(dd);
		d.setDate(dd);
		if (!keepTime) {
			clearTime(d);
		}
		fixDate(d, check);
	}
	return d;
}


function fixDate(d, check) { // force d to be on check's YMD, for daylight savings purposes
	if (+d) { // prevent infinite looping on invalid dates
		while (d.getDate() != check.getDate()) {
			d.setTime(+d + (d < check ? 1 : -1) * HOUR_MS);
		}
	}
}


function addMinutes(d, n) {
	d.setMinutes(d.getMinutes() + n);
	return d;
}


function clearTime(d) {
	d.setHours(0);
	d.setMinutes(0);
	d.setSeconds(0); 
	d.setMilliseconds(0);
	return d;
}


function cloneDate(d, dontKeepTime) {
	if (dontKeepTime) {
		return clearTime(new Date(+d));
	}
	return new Date(+d);
}


function zeroDate() { // returns a Date with time 00:00:00 and dateOfMonth=1
	var i=0, d;
	do {
		d = new Date(1970, i++, 1);
	} while (d.getHours()); // != 0
	return d;
}


function skipWeekend(date, inc, excl) {
	inc = inc || 1;
	while (!date.getDay() || (excl && date.getDay()==1 || !excl && date.getDay()==6)) {
		addDays(date, inc);
	}
	return date;
}


function dayDiff(d1, d2) { // d1 - d2
	return Math.round((cloneDate(d1, true) - cloneDate(d2, true)) / DAY_MS);
}


function setYMD(date, y, m, d) {
	if (y !== undefined && y != date.getFullYear()) {
		date.setDate(1);
		date.setMonth(0);
		date.setFullYear(y);
	}
	if (m !== undefined && m != date.getMonth()) {
		date.setDate(1);
		date.setMonth(m);
	}
	if (d !== undefined) {
		date.setDate(d);
	}
}



/* Date Parsing
-----------------------------------------------------------------------------*/


function parseDate(s, ignoreTimezone) { // ignoreTimezone defaults to true
	if (typeof s == 'object') { // already a Date object
		return s;
	}
	if (typeof s == 'number') { // a UNIX timestamp
		return new Date(s * 1000);
	}
	if (typeof s == 'string') {
		if (s.match(/^\d+(\.\d+)?$/)) { // a UNIX timestamp
			return new Date(parseFloat(s) * 1000);
		}
		if (ignoreTimezone === undefined) {
			ignoreTimezone = true;
		}
		return parseISO8601(s, ignoreTimezone) || (s ? new Date(s) : null);
	}
	// TODO: never return invalid dates (like from new Date(<string>)), return null instead
	return null;
}


function parseISO8601(s, ignoreTimezone) { // ignoreTimezone defaults to false
	// derived from http://delete.me.uk/2005/03/iso8601.html
	// TODO: for a know glitch/feature, read tests/issue_206_parseDate_dst.html
	var m = s.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);
	if (!m) {
		return null;
	}
	var date = new Date(m[1], 0, 1);
	if (ignoreTimezone || !m[13]) {
		var check = new Date(m[1], 0, 1, 9, 0);
		if (m[3]) {
			date.setMonth(m[3] - 1);
			check.setMonth(m[3] - 1);
		}
		if (m[5]) {
			date.setDate(m[5]);
			check.setDate(m[5]);
		}
		fixDate(date, check);
		if (m[7]) {
			date.setHours(m[7]);
		}
		if (m[8]) {
			date.setMinutes(m[8]);
		}
		if (m[10]) {
			date.setSeconds(m[10]);
		}
		if (m[12]) {
			date.setMilliseconds(Number("0." + m[12]) * 1000);
		}
		fixDate(date, check);
	}else{
		date.setUTCFullYear(
			m[1],
			m[3] ? m[3] - 1 : 0,
			m[5] || 1
		);
		date.setUTCHours(
			m[7] || 0,
			m[8] || 0,
			m[10] || 0,
			m[12] ? Number("0." + m[12]) * 1000 : 0
		);
		if (m[14]) {
			var offset = Number(m[16]) * 60 + (m[18] ? Number(m[18]) : 0);
			offset *= m[15] == '-' ? 1 : -1;
			date = new Date(+date + (offset * 60 * 1000));
		}
	}
	return date;
}


function parseTime(s) { // returns minutes since start of day
	if (typeof s == 'number') { // an hour
		return s * 60;
	}
	if (typeof s == 'object') { // a Date object
		return s.getHours() * 60 + s.getMinutes();
	}
	var m = s.match(/(\d+)(?::(\d+))?\s*(\w+)?/);
	if (m) {
		var h = parseInt(m[1], 10);
		if (m[3]) {
			h %= 12;
			if (m[3].toLowerCase().charAt(0) == 'p') {
				h += 12;
			}
		}
		return h * 60 + (m[2] ? parseInt(m[2], 10) : 0);
	}
}



/* Date Formatting
-----------------------------------------------------------------------------*/
// TODO: use same function formatDate(date, [date2], format, [options])


function formatDate(date, format, options) {
	return formatDates(date, null, format, options);
}


function formatDates(date1, date2, format, options) {
	options = options || defaults;
	var date = date1,
		otherDate = date2,
		i, len = format.length, c,
		i2, formatter,
		res = '';
	for (i=0; i<len; i++) {
		c = format.charAt(i);
		if (c == "'") {
			for (i2=i+1; i2<len; i2++) {
				if (format.charAt(i2) == "'") {
					if (date) {
						if (i2 == i+1) {
							res += "'";
						}else{
							res += format.substring(i+1, i2);
						}
						i = i2;
					}
					break;
				}
			}
		}
		else if (c == '(') {
			for (i2=i+1; i2<len; i2++) {
				if (format.charAt(i2) == ')') {
					var subres = formatDate(date, format.substring(i+1, i2), options);
					if (parseInt(subres.replace(/\D/, ''), 10)) {
						res += subres;
					}
					i = i2;
					break;
				}
			}
		}
		else if (c == '[') {
			for (i2=i+1; i2<len; i2++) {
				if (format.charAt(i2) == ']') {
					var subformat = format.substring(i+1, i2);
					var subres = formatDate(date, subformat, options);
					if (subres != formatDate(otherDate, subformat, options)) {
						res += subres;
					}
					i = i2;
					break;
				}
			}
		}
		else if (c == '{') {
			date = date2;
			otherDate = date1;
		}
		else if (c == '}') {
			date = date1;
			otherDate = date2;
		}
		else {
			for (i2=len; i2>i; i2--) {
				if (formatter = dateFormatters[format.substring(i, i2)]) {
					if (date) {
						res += formatter(date, options);
					}
					i = i2 - 1;
					break;
				}
			}
			if (i2 == i) {
				if (date) {
					res += c;
				}
			}
		}
	}
	return res;
};


var dateFormatters = {
	s	: function(d)	{ return d.getSeconds() },
	ss	: function(d)	{ return zeroPad(d.getSeconds()) },
	m	: function(d)	{ return d.getMinutes() },
	mm	: function(d)	{ return zeroPad(d.getMinutes()) },
	h	: function(d)	{ return d.getHours() % 12 || 12 },
	hh	: function(d)	{ return zeroPad(d.getHours() % 12 || 12) },
	H	: function(d)	{ return d.getHours() },
	HH	: function(d)	{ return zeroPad(d.getHours()) },
	d	: function(d)	{ return d.getDate() },
	dd	: function(d)	{ return zeroPad(d.getDate()) },
	ddd	: function(d,o)	{ return o.dayNamesShort[d.getDay()] },
	dddd: function(d,o)	{ return o.dayNames[d.getDay()] },
	M	: function(d)	{ return d.getMonth() + 1 },
	MM	: function(d)	{ return zeroPad(d.getMonth() + 1) },
	MMM	: function(d,o)	{ return o.monthNamesShort[d.getMonth()] },
	MMMM: function(d,o)	{ return o.monthNames[d.getMonth()] },
	yy	: function(d)	{ return (d.getFullYear()+'').substring(2) },
	yyyy: function(d)	{ return d.getFullYear() },
	t	: function(d)	{ return d.getHours() < 12 ? 'a' : 'p' },
	tt	: function(d)	{ return d.getHours() < 12 ? 'am' : 'pm' },
	T	: function(d)	{ return d.getHours() < 12 ? 'A' : 'P' },
	TT	: function(d)	{ return d.getHours() < 12 ? 'AM' : 'PM' },
	u	: function(d)	{ return formatDate(d, "yyyy-MM-dd'T'HH:mm:ss'Z'") },
	S	: function(d)	{
		var date = d.getDate();
		if (date > 10 && date < 20) {
			return 'th';
		}
		return ['st', 'nd', 'rd'][date%10-1] || 'th';
	}
};



fc.applyAll = applyAll;


/* Event Date Math
-----------------------------------------------------------------------------*/


function exclEndDay(event) {
	if (event.end) {
		return _exclEndDay(event.end, event.allDay);
	}else{
		return addDays(cloneDate(event.start), 1);
	}
}


function _exclEndDay(end, allDay) {
	end = cloneDate(end);
	return allDay || end.getHours() || end.getMinutes() ? addDays(end, 1) : clearTime(end);
}


function segCmp(a, b) {
	return (b.msLength - a.msLength) * 100 + (a.event.start - b.event.start);
}


function segsCollide(seg1, seg2) {
	return seg1.end > seg2.start && seg1.start < seg2.end;
}



/* Event Sorting
-----------------------------------------------------------------------------*/


// event rendering utilities
function sliceSegs(events, visEventEnds, start, end) {
	var segs = [],
		i, len=events.length, event,
		eventStart, eventEnd,
		segStart, segEnd,
		isStart, isEnd;
	for (i=0; i<len; i++) {
		event = events[i];
		eventStart = event.start;
		eventEnd = visEventEnds[i];
		if (eventEnd > start && eventStart < end) {
			if (eventStart < start) {
				segStart = cloneDate(start);
				isStart = false;
			}else{
				segStart = eventStart;
				isStart = true;
			}
			if (eventEnd > end) {
				segEnd = cloneDate(end);
				isEnd = false;
			}else{
				segEnd = eventEnd;
				isEnd = true;
			}
			segs.push({
				event: event,
				start: segStart,
				end: segEnd,
				isStart: isStart,
				isEnd: isEnd,
				msLength: segEnd - segStart
			});
		}
	}
	return segs.sort(segCmp);
}


// event rendering calculation utilities
function stackSegs(segs) {
	var levels = [],
		i, len = segs.length, seg,
		j, collide, k;
	for (i=0; i<len; i++) {
		seg = segs[i];
		j = 0; // the level index where seg should belong
		while (true) {
			collide = false;
			if (levels[j]) {
				for (k=0; k<levels[j].length; k++) {
					if (segsCollide(levels[j][k], seg)) {
						collide = true;
						break;
					}
				}
			}
			if (collide) {
				j++;
			}else{
				break;
			}
		}
		if (levels[j]) {
			levels[j].push(seg);
		}else{
			levels[j] = [seg];
		}
	}
	return levels;
}



/* Event Element Binding
-----------------------------------------------------------------------------*/


function lazySegBind(container, segs, bindHandlers) {
	container.unbind('mouseover').mouseover(function(ev) {
		var parent=ev.target, e,
			i, seg;
		while (parent != this) {
			e = parent;
			parent = parent.parentNode;
		}
		if ((i = e._fci) !== undefined) {
			e._fci = undefined;
			seg = segs[i];
			bindHandlers(seg.event, seg.element, seg);
			$(ev.target).trigger(ev);
		}
		ev.stopPropagation();
	});
}



/* Element Dimensions
-----------------------------------------------------------------------------*/


function setOuterWidth(element, width, includeMargins) {
	for (var i=0, e; i<element.length; i++) {
		e = $(element[i]);
		e.width(Math.max(0, width - hsides(e, includeMargins)));
	}
}


function setOuterHeight(element, height, includeMargins) {
	for (var i=0, e; i<element.length; i++) {
		e = $(element[i]);
		e.height(Math.max(0, height - vsides(e, includeMargins)));
	}
}


function hsides(element, includeMargins) {
	return hpadding(element) + hborders(element) + (includeMargins ? hmargins(element) : 0);
}


function hpadding(element) {
	return (parseFloat($.css(element[0], 'paddingLeft', true)) || 0) +
	       (parseFloat($.css(element[0], 'paddingRight', true)) || 0);
}


function hmargins(element) {
	return (parseFloat($.css(element[0], 'marginLeft', true)) || 0) +
	       (parseFloat($.css(element[0], 'marginRight', true)) || 0);
}


function hborders(element) {
	return (parseFloat($.css(element[0], 'borderLeftWidth', true)) || 0) +
	       (parseFloat($.css(element[0], 'borderRightWidth', true)) || 0);
}


function vsides(element, includeMargins) {
	return vpadding(element) +  vborders(element) + (includeMargins ? vmargins(element) : 0);
}


function vpadding(element) {
	return (parseFloat($.css(element[0], 'paddingTop', true)) || 0) +
	       (parseFloat($.css(element[0], 'paddingBottom', true)) || 0);
}


function vmargins(element) {
	return (parseFloat($.css(element[0], 'marginTop', true)) || 0) +
	       (parseFloat($.css(element[0], 'marginBottom', true)) || 0);
}


function vborders(element) {
	return (parseFloat($.css(element[0], 'borderTopWidth', true)) || 0) +
	       (parseFloat($.css(element[0], 'borderBottomWidth', true)) || 0);
}


function setMinHeight(element, height) {
	height = (typeof height == 'number' ? height + 'px' : height);
	element.each(function(i, _element) {
		_element.style.cssText += ';min-height:' + height + ';_height:' + height;
		// why can't we just use .css() ? i forget
	});
}



/* Misc Utils
-----------------------------------------------------------------------------*/


//TODO: arraySlice
//TODO: isFunction, grep ?


function noop() { }


function cmp(a, b) {
	return a - b;
}


function arrayMax(a) {
	return Math.max.apply(Math, a);
}


function zeroPad(n) {
	return (n < 10 ? '0' : '') + n;
}


function smartProperty(obj, name) { // get a camel-cased/namespaced property of an object
	if (obj[name] !== undefined) {
		return obj[name];
	}
	var parts = name.split(/(?=[A-Z])/),
		i=parts.length-1, res;
	for (; i>=0; i--) {
		res = obj[parts[i].toLowerCase()];
		if (res !== undefined) {
			return res;
		}
	}
	return obj[''];
}


function htmlEscape(s) {
	return s.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/'/g, '&#039;')
		.replace(/"/g, '&quot;')
		.replace(/\n/g, '<br />');
}


function cssKey(_element) {
	return _element.id + '/' + _element.className + '/' + _element.style.cssText.replace(/(^|;)\s*(top|left|width|height)\s*:[^;]*/ig, '');
}


function disableTextSelection(element) {
	element
		.attr('unselectable', 'on')
		.css('MozUserSelect', 'none')
		.bind('selectstart.ui', function() { return false; });
}


/*
function enableTextSelection(element) {
	element
		.attr('unselectable', 'off')
		.css('MozUserSelect', '')
		.unbind('selectstart.ui');
}
*/


function markFirstLast(e) {
	e.children()
		.removeClass('fc-first fc-last')
		.filter(':first-child')
			.addClass('fc-first')
		.end()
		.filter(':last-child')
			.addClass('fc-last');
}


function setDayID(cell, date) {
	cell.each(function(i, _cell) {
		_cell.className = _cell.className.replace(/^fc-\w*/, 'fc-' + dayIDs[date.getDay()]);
		// TODO: make a way that doesn't rely on order of classes
	});
}


function getSkinCss(event, opt) {
	var source = event.source || {};
	var eventColor = event.color;
	var sourceColor = source.color;
	var optionColor = opt('eventColor');
	var backgroundColor =
		event.backgroundColor ||
		eventColor ||
		source.backgroundColor ||
		sourceColor ||
		opt('eventBackgroundColor') ||
		optionColor;
	var borderColor =
		event.borderColor ||
		eventColor ||
		source.borderColor ||
		sourceColor ||
		opt('eventBorderColor') ||
		optionColor;
	var textColor =
		event.textColor ||
		source.textColor ||
		opt('eventTextColor');
	var statements = [];
	if (backgroundColor) {
		statements.push('background-color:' + backgroundColor);
	}
	if (borderColor) {
		statements.push('border-color:' + borderColor);
	}
	if (textColor) {
		statements.push('color:' + textColor);
	}
	return statements.join(';');
}


function applyAll(functions, thisObj, args) {
	if ($.isFunction(functions)) {
		functions = [ functions ];
	}
	if (functions) {
		var i;
		var ret;
		for (i=0; i<functions.length; i++) {
			ret = functions[i].apply(thisObj, args) || ret;
		}
		return ret;
	}
}


function firstDefined() {
	for (var i=0; i<arguments.length; i++) {
		if (arguments[i] !== undefined) {
			return arguments[i];
		}
	}
}


fcViews.month = MonthView;

function MonthView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	
	// imports
	BasicView.call(t, element, calendar, 'month');
	var opt = t.opt;
	var renderBasic = t.renderBasic;
	var formatDate = calendar.formatDate;
	
	
	
	function render(date, delta) {
		if (delta) {
			addMonths(date, delta);
			date.setDate(1);
		}
		var start = cloneDate(date, true);
		start.setDate(1);
		var end = addMonths(cloneDate(start), 1);
		var visStart = cloneDate(start);
		var visEnd = cloneDate(end);
		var firstDay = opt('firstDay');
		var nwe = opt('weekends') ? 0 : 1;
		if (nwe) {
			skipWeekend(visStart);
			skipWeekend(visEnd, -1, true);
		}
		addDays(visStart, -((visStart.getDay() - Math.max(firstDay, nwe) + 7) % 7));
		addDays(visEnd, (7 - visEnd.getDay() + Math.max(firstDay, nwe)) % 7);
		var rowCnt = Math.round((visEnd - visStart) / (DAY_MS * 7));
		if (opt('weekMode') == 'fixed') {
			addDays(visEnd, (6 - rowCnt) * 7);
			rowCnt = 6;
		}
		t.title = formatDate(start, opt('titleFormat'));
		t.start = start;
		t.end = end;
		t.visStart = visStart;
		t.visEnd = visEnd;
		renderBasic(6, rowCnt, nwe ? 5 : 7, true);
	}
	
	
}

fcViews.basicWeek = BasicWeekView;

function BasicWeekView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	
	// imports
	BasicView.call(t, element, calendar, 'basicWeek');
	var opt = t.opt;
	var renderBasic = t.renderBasic;
	var formatDates = calendar.formatDates;
	
	
	
	function render(date, delta) {
		if (delta) {
			addDays(date, delta * 7);
		}
		var start = addDays(cloneDate(date), -((date.getDay() - opt('firstDay') + 7) % 7));
		var end = addDays(cloneDate(start), 7);
		var visStart = cloneDate(start);
		var visEnd = cloneDate(end);
		var weekends = opt('weekends');
		if (!weekends) {
			skipWeekend(visStart);
			skipWeekend(visEnd, -1, true);
		}
		t.title = formatDates(
			visStart,
			addDays(cloneDate(visEnd), -1),
			opt('titleFormat')
		);
		t.start = start;
		t.end = end;
		t.visStart = visStart;
		t.visEnd = visEnd;
		renderBasic(1, 1, weekends ? 7 : 5, false);
	}
	
	
}

fcViews.basicDay = BasicDayView;

//TODO: when calendar's date starts out on a weekend, shouldn't happen


function BasicDayView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	
	// imports
	BasicView.call(t, element, calendar, 'basicDay');
	var opt = t.opt;
	var renderBasic = t.renderBasic;
	var formatDate = calendar.formatDate;
	
	
	
	function render(date, delta) {
		if (delta) {
			addDays(date, delta);
			if (!opt('weekends')) {
				skipWeekend(date, delta < 0 ? -1 : 1);
			}
		}
		t.title = formatDate(date, opt('titleFormat'));
		t.start = t.visStart = cloneDate(date, true);
		t.end = t.visEnd = addDays(cloneDate(t.start), 1);
		renderBasic(1, 1, 1, false);
	}
	
	
}

setDefaults({
	weekMode: 'fixed'
});


function BasicView(element, calendar, viewName) {
	var t = this;
	
	
	// exports
	t.renderBasic = renderBasic;
	t.setHeight = setHeight;
	t.setWidth = setWidth;
	t.renderDayOverlay = renderDayOverlay;
	t.defaultSelectionEnd = defaultSelectionEnd;
	t.renderSelection = renderSelection;
	t.clearSelection = clearSelection;
	t.reportDayClick = reportDayClick; // for selection (kinda hacky)
	t.dragStart = dragStart;
	t.dragStop = dragStop;
	t.defaultEventEnd = defaultEventEnd;
	t.getHoverListener = function() { return hoverListener };
	t.colContentLeft = colContentLeft;
	t.colContentRight = colContentRight;
	t.dayOfWeekCol = dayOfWeekCol;
	t.dateCell = dateCell;
	t.cellDate = cellDate;
	t.cellIsAllDay = function() { return true };
	t.allDayRow = allDayRow;
	t.allDayBounds = allDayBounds;
	t.getRowCnt = function() { return rowCnt };
	t.getColCnt = function() { return colCnt };
	t.getColWidth = function() { return colWidth };
	t.getDaySegmentContainer = function() { return daySegmentContainer };
	
	
	// imports
	View.call(t, element, calendar, viewName);
	OverlayManager.call(t);
	SelectionManager.call(t);
	BasicEventRenderer.call(t);
	var opt = t.opt;
	var trigger = t.trigger;
	var clearEvents = t.clearEvents;
	var renderOverlay = t.renderOverlay;
	var clearOverlays = t.clearOverlays;
	var daySelectionMousedown = t.daySelectionMousedown;
	var formatDate = calendar.formatDate;
	
	
	// locals
	
	var head;
	var headCells;
	var body;
	var bodyRows;
	var bodyCells;
	var bodyFirstCells;
	var bodyCellTopInners;
	var daySegmentContainer;
	
	var viewWidth;
	var viewHeight;
	var colWidth;
	
	var rowCnt, colCnt;
	var coordinateGrid;
	var hoverListener;
	var colContentPositions;
	
	var rtl, dis, dit;
	var firstDay;
	var nwe;
	var tm;
	var colFormat;
	
	
	
	/* Rendering
	------------------------------------------------------------*/
	
	
	disableTextSelection(element.addClass('fc-grid'));
	
	
	function renderBasic(maxr, r, c, showNumbers) {
		rowCnt = r;
		colCnt = c;
		updateOptions();
		var firstTime = !body;
		if (firstTime) {
			buildSkeleton(maxr, showNumbers);
		}else{
			clearEvents();
		}
		updateCells(firstTime);
	}
	
	
	
	function updateOptions() {
		rtl = opt('isRTL');
		if (rtl) {
			dis = -1;
			dit = colCnt - 1;
		}else{
			dis = 1;
			dit = 0;
		}
		firstDay = opt('firstDay');
		nwe = opt('weekends') ? 0 : 1;
		tm = opt('theme') ? 'ui' : 'fc';
		colFormat = opt('columnFormat');
	}
	
	
	
	function buildSkeleton(maxRowCnt, showNumbers) {
		var s;
		var headerClass = tm + "-widget-header";
		var contentClass = tm + "-widget-content";
		var i, j;
		var table;
		
		s =
			"<table class='fc-border-separate' style='width:100%' cellspacing='0'>" +
			"<thead>" +
			"<tr>";
		for (i=0; i<colCnt; i++) {
			s +=
				"<th class='fc- " + headerClass + "'/>"; // need fc- for setDayID
		}
		s +=
			"</tr>" +
			"</thead>" +
			"<tbody>";
		for (i=0; i<maxRowCnt; i++) {
			s +=
				"<tr class='fc-week" + i + "'>";
			for (j=0; j<colCnt; j++) {
				s +=
					"<td class='fc- " + contentClass + " fc-day" + (i*colCnt+j) + "'>" + // need fc- for setDayID
					"<div>" +
					(showNumbers ?
						"<div class='fc-day-number'/>" :
						''
						) +
					"<div class='fc-day-content'>" +
					"<div style='position:relative'>&nbsp;</div>" +
					"</div>" +
					"</div>" +
					"</td>";
			}
			s +=
				"</tr>";
		}
		s +=
			"</tbody>" +
			"</table>";
		table = $(s).appendTo(element);
		
		head = table.find('thead');
		headCells = head.find('th');
		body = table.find('tbody');
		bodyRows = body.find('tr');
		bodyCells = body.find('td');
		bodyFirstCells = bodyCells.filter(':first-child');
		bodyCellTopInners = bodyRows.eq(0).find('div.fc-day-content div');
		
		markFirstLast(head.add(head.find('tr'))); // marks first+last tr/th's
		markFirstLast(bodyRows); // marks first+last td's
		bodyRows.eq(0).addClass('fc-first'); // fc-last is done in updateCells
		
		dayBind(bodyCells);
		
		daySegmentContainer =
			$("<div style='position:absolute;z-index:8;top:0;left:0'/>")
				.appendTo(element);
	}
	
	
	
	function updateCells(firstTime) {
		var dowDirty = firstTime || rowCnt == 1; // could the cells' day-of-weeks need updating?
		var month = t.start.getMonth();
		var today = clearTime(new Date());
		var cell;
		var date;
		var row;
	
		if (dowDirty) {
			headCells.each(function(i, _cell) {
				cell = $(_cell);
				date = indexDate(i);
				cell.html(formatDate(date, colFormat));
				setDayID(cell, date);
			});
		}
		
		bodyCells.each(function(i, _cell) {
			cell = $(_cell);
			date = indexDate(i);
			if (date.getMonth() == month) {
				cell.removeClass('fc-other-month');
			}else{
				cell.addClass('fc-other-month');
			}
			if (+date == +today) {
				cell.addClass(tm + '-state-highlight fc-today');
			}else{
				cell.removeClass(tm + '-state-highlight fc-today');
			}
			cell.find('div.fc-day-number').text(date.getDate());
			if (dowDirty) {
				setDayID(cell, date);
			}
		});
		
		bodyRows.each(function(i, _row) {
			row = $(_row);
			if (i < rowCnt) {
				row.show();
				if (i == rowCnt-1) {
					row.addClass('fc-last');
				}else{
					row.removeClass('fc-last');
				}
			}else{
				row.hide();
			}
		});
	}
	
	
	
	function setHeight(height) {
		viewHeight = height;
		
		var bodyHeight = viewHeight - head.height();
		var rowHeight;
		var rowHeightLast;
		var cell;
			
		if (opt('weekMode') == 'variable') {
			rowHeight = rowHeightLast = Math.floor(bodyHeight / (rowCnt==1 ? 2 : 6));
		}else{
			rowHeight = Math.floor(bodyHeight / rowCnt);
			rowHeightLast = bodyHeight - rowHeight * (rowCnt-1);
		}
		
		bodyFirstCells.each(function(i, _cell) {
			if (i < rowCnt) {
				cell = $(_cell);
				setMinHeight(
					cell.find('> div'),
					(i==rowCnt-1 ? rowHeightLast : rowHeight) - vsides(cell)
				);
			}
		});
		
	}
	
	
	function setWidth(width) {
		viewWidth = width;
		colContentPositions.clear();
		colWidth = Math.floor(viewWidth / colCnt);
		setOuterWidth(headCells.slice(0, -1), colWidth);
	}
	
	
	
	/* Day clicking and binding
	-----------------------------------------------------------*/
	
	
	function dayBind(days) {
		days.click(dayClick)
			.mousedown(daySelectionMousedown);
	}
	
	
	function dayClick(ev) {
		if (!opt('selectable')) { // if selectable, SelectionManager will worry about dayClick
			var index = parseInt(this.className.match(/fc\-day(\d+)/)[1]); // TODO: maybe use .data
			var date = indexDate(index);
			trigger('dayClick', this, date, true, ev);
		}
	}
	
	
	
	/* Semi-transparent Overlay Helpers
	------------------------------------------------------*/
	
	
	function renderDayOverlay(overlayStart, overlayEnd, refreshCoordinateGrid) { // overlayEnd is exclusive
		if (refreshCoordinateGrid) {
			coordinateGrid.build();
		}
		var rowStart = cloneDate(t.visStart);
		var rowEnd = addDays(cloneDate(rowStart), colCnt);
		for (var i=0; i<rowCnt; i++) {
			var stretchStart = new Date(Math.max(rowStart, overlayStart));
			var stretchEnd = new Date(Math.min(rowEnd, overlayEnd));
			if (stretchStart < stretchEnd) {
				var colStart, colEnd;
				if (rtl) {
					colStart = dayDiff(stretchEnd, rowStart)*dis+dit+1;
					colEnd = dayDiff(stretchStart, rowStart)*dis+dit+1;
				}else{
					colStart = dayDiff(stretchStart, rowStart);
					colEnd = dayDiff(stretchEnd, rowStart);
				}
				dayBind(
					renderCellOverlay(i, colStart, i, colEnd-1)
				);
			}
			addDays(rowStart, 7);
			addDays(rowEnd, 7);
		}
	}
	
	
	function renderCellOverlay(row0, col0, row1, col1) { // row1,col1 is inclusive
		var rect = coordinateGrid.rect(row0, col0, row1, col1, element);
		return renderOverlay(rect, element);
	}
	
	
	
	/* Selection
	-----------------------------------------------------------------------*/
	
	
	function defaultSelectionEnd(startDate, allDay) {
		return cloneDate(startDate);
	}
	
	
	function renderSelection(startDate, endDate, allDay) {
		renderDayOverlay(startDate, addDays(cloneDate(endDate), 1), true); // rebuild every time???
	}
	
	
	function clearSelection() {
		clearOverlays();
	}
	
	
	function reportDayClick(date, allDay, ev) {
		var cell = dateCell(date);
		var _element = bodyCells[cell.row*colCnt + cell.col];
		trigger('dayClick', _element, date, allDay, ev);
	}
	
	
	
	/* External Dragging
	-----------------------------------------------------------------------*/
	
	
	function dragStart(_dragElement, ev, ui) {
		hoverListener.start(function(cell) {
			clearOverlays();
			if (cell) {
				renderCellOverlay(cell.row, cell.col, cell.row, cell.col);
			}
		}, ev);
	}
	
	
	function dragStop(_dragElement, ev, ui) {
		var cell = hoverListener.stop();
		clearOverlays();
		if (cell) {
			var d = cellDate(cell);
			trigger('drop', _dragElement, d, true, ev, ui);
		}
	}
	
	
	
	/* Utilities
	--------------------------------------------------------*/
	
	
	function defaultEventEnd(event) {
		return cloneDate(event.start);
	}
	
	
	coordinateGrid = new CoordinateGrid(function(rows, cols) {
		var e, n, p;
		headCells.each(function(i, _e) {
			e = $(_e);
			n = e.offset().left;
			if (i) {
				p[1] = n;
			}
			p = [n];
			cols[i] = p;
		});
		p[1] = n + e.outerWidth();
		bodyRows.each(function(i, _e) {
			if (i < rowCnt) {
				e = $(_e);
				n = e.offset().top;
				if (i) {
					p[1] = n;
				}
				p = [n];
				rows[i] = p;
			}
		});
		p[1] = n + e.outerHeight();
	});
	
	
	hoverListener = new HoverListener(coordinateGrid);
	
	
	colContentPositions = new HorizontalPositionCache(function(col) {
		return bodyCellTopInners.eq(col);
	});
	
	
	function colContentLeft(col) {
		return colContentPositions.left(col);
	}
	
	
	function colContentRight(col) {
		return colContentPositions.right(col);
	}
	
	
	
	
	function dateCell(date) {
		return {
			row: Math.floor(dayDiff(date, t.visStart) / 7),
			col: dayOfWeekCol(date.getDay())
		};
	}
	
	
	function cellDate(cell) {
		return _cellDate(cell.row, cell.col);
	}
	
	
	function _cellDate(row, col) {
		return addDays(cloneDate(t.visStart), row*7 + col*dis+dit);
		// what about weekends in middle of week?
	}
	
	
	function indexDate(index) {
		return _cellDate(Math.floor(index/colCnt), index%colCnt);
	}
	
	
	function dayOfWeekCol(dayOfWeek) {
		return ((dayOfWeek - Math.max(firstDay, nwe) + colCnt) % colCnt) * dis + dit;
	}
	
	
	
	
	function allDayRow(i) {
		return bodyRows.eq(i);
	}
	
	
	function allDayBounds(i) {
		return {
			left: 0,
			right: viewWidth
		};
	}
	
	
}

function BasicEventRenderer() {
	var t = this;
	
	
	// exports
	t.renderEvents = renderEvents;
	t.compileDaySegs = compileSegs; // for DayEventRenderer
	t.clearEvents = clearEvents;
	t.bindDaySeg = bindDaySeg;
	
	
	// imports
	DayEventRenderer.call(t);
	var opt = t.opt;
	var trigger = t.trigger;
	//var setOverflowHidden = t.setOverflowHidden;
	var isEventDraggable = t.isEventDraggable;
	var isEventResizable = t.isEventResizable;
	var reportEvents = t.reportEvents;
	var reportEventClear = t.reportEventClear;
	var eventElementHandlers = t.eventElementHandlers;
	var showEvents = t.showEvents;
	var hideEvents = t.hideEvents;
	var eventDrop = t.eventDrop;
	var getDaySegmentContainer = t.getDaySegmentContainer;
	var getHoverListener = t.getHoverListener;
	var renderDayOverlay = t.renderDayOverlay;
	var clearOverlays = t.clearOverlays;
	var getRowCnt = t.getRowCnt;
	var getColCnt = t.getColCnt;
	var renderDaySegs = t.renderDaySegs;
	var resizableDayEvent = t.resizableDayEvent;
	
	
	
	/* Rendering
	--------------------------------------------------------------------*/
	
	
	function renderEvents(events, modifiedEventId) {
		reportEvents(events);
		renderDaySegs(compileSegs(events), modifiedEventId);
	}
	
	
	function clearEvents() {
		reportEventClear();
		getDaySegmentContainer().empty();
	}
	
	
	function compileSegs(events) {
		var rowCnt = getRowCnt(),
			colCnt = getColCnt(),
			d1 = cloneDate(t.visStart),
			d2 = addDays(cloneDate(d1), colCnt),
			visEventsEnds = $.map(events, exclEndDay),
			i, row,
			j, level,
			k, seg,
			segs=[];
		for (i=0; i<rowCnt; i++) {
			row = stackSegs(sliceSegs(events, visEventsEnds, d1, d2));
			for (j=0; j<row.length; j++) {
				level = row[j];
				for (k=0; k<level.length; k++) {
					seg = level[k];
					seg.row = i;
					seg.level = j; // not needed anymore
					segs.push(seg);
				}
			}
			addDays(d1, 7);
			addDays(d2, 7);
		}
		return segs;
	}
	
	
	function bindDaySeg(event, eventElement, seg) {
		if (isEventDraggable(event)) {
			draggableDayEvent(event, eventElement);
		}
		if (seg.isEnd && isEventResizable(event)) {
			resizableDayEvent(event, eventElement, seg);
		}
		eventElementHandlers(event, eventElement);
			// needs to be after, because resizableDayEvent might stopImmediatePropagation on click
	}
	
	
	
	/* Dragging
	----------------------------------------------------------------------------*/
	
	
	function draggableDayEvent(event, eventElement) {
		var hoverListener = getHoverListener();
		var dayDelta;
		eventElement.draggable({
			zIndex: 9,
			delay: 50,
			opacity: opt('dragOpacity'),
			revertDuration: opt('dragRevertDuration'),
			start: function(ev, ui) {
				trigger('eventDragStart', eventElement, event, ev, ui);
				hideEvents(event, eventElement);
				hoverListener.start(function(cell, origCell, rowDelta, colDelta) {
					eventElement.draggable('option', 'revert', !cell || !rowDelta && !colDelta);
					clearOverlays();
					if (cell) {
						//setOverflowHidden(true);
						dayDelta = rowDelta*7 + colDelta * (opt('isRTL') ? -1 : 1);
						renderDayOverlay(
							addDays(cloneDate(event.start), dayDelta),
							addDays(exclEndDay(event), dayDelta)
						);
					}else{
						//setOverflowHidden(false);
						dayDelta = 0;
					}
				}, ev, 'drag');
			},
			stop: function(ev, ui) {
				hoverListener.stop();
				clearOverlays();
				trigger('eventDragStop', eventElement, event, ev, ui);
				if (dayDelta) {
					eventDrop(this, event, dayDelta, 0, event.allDay, ev, ui);
				}else{
					eventElement.css('filter', ''); // clear IE opacity side-effects
					showEvents(event, eventElement);
				}
				//setOverflowHidden(false);
			}
		});
	}


}

fcViews.agendaWeek = AgendaWeekView;

function AgendaWeekView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	
	// imports
	AgendaView.call(t, element, calendar, 'agendaWeek');
	var opt = t.opt;
	var renderAgenda = t.renderAgenda;
	var formatDates = calendar.formatDates;
	
	
	
	function render(date, delta) {
		if (delta) {
			addDays(date, delta * 7);
		}
		var start = addDays(cloneDate(date), -((date.getDay() - opt('firstDay') + 7) % 7));
		var end = addDays(cloneDate(start), 7);
		var visStart = cloneDate(start);
		var visEnd = cloneDate(end);
		var weekends = opt('weekends');
		if (!weekends) {
			skipWeekend(visStart);
			skipWeekend(visEnd, -1, true);
		}
		t.title = formatDates(
			visStart,
			addDays(cloneDate(visEnd), -1),
			opt('titleFormat')
		);
		t.start = start;
		t.end = end;
		t.visStart = visStart;
		t.visEnd = visEnd;
		renderAgenda(weekends ? 7 : 5);
	}
	

}

fcViews.agendaDay = AgendaDayView;

function AgendaDayView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	
	// imports
	AgendaView.call(t, element, calendar, 'agendaDay');
	var opt = t.opt;
	var renderAgenda = t.renderAgenda;
	var formatDate = calendar.formatDate;
	
	
	
	function render(date, delta) {
		if (delta) {
			addDays(date, delta);
			if (!opt('weekends')) {
				skipWeekend(date, delta < 0 ? -1 : 1);
			}
		}
		var start = cloneDate(date, true);
		var end = addDays(cloneDate(start), 1);
		t.title = formatDate(date, opt('titleFormat'));
		t.start = t.visStart = start;
		t.end = t.visEnd = end;
		renderAgenda(1);
	}
	

}

setDefaults({
	allDaySlot: true,
	allDayText: 'all-day',
	firstHour: 6,
	slotMinutes: 30,
	defaultEventMinutes: 120,
	axisFormat: 'h(:mm)tt',
	timeFormat: {
		agenda: 'h:mm{ - h:mm}'
	},
	dragOpacity: {
		agenda: .5
	},
	minTime: 0,
	maxTime: 24
});


// TODO: make it work in quirks mode (event corners, all-day height)
// TODO: test liquid width, especially in IE6


function AgendaView(element, calendar, viewName) {
	var t = this;
	
	
	// exports
	t.renderAgenda = renderAgenda;
	t.setWidth = setWidth;
	t.setHeight = setHeight;
	t.beforeHide = beforeHide;
	t.afterShow = afterShow;
	t.defaultEventEnd = defaultEventEnd;
	t.timePosition = timePosition;
	t.dayOfWeekCol = dayOfWeekCol;
	t.dateCell = dateCell;
	t.cellDate = cellDate;
	t.cellIsAllDay = cellIsAllDay;
	t.allDayRow = getAllDayRow;
	t.allDayBounds = allDayBounds;
	t.getHoverListener = function() { return hoverListener };
	t.colContentLeft = colContentLeft;
	t.colContentRight = colContentRight;
	t.getDaySegmentContainer = function() { return daySegmentContainer };
	t.getSlotSegmentContainer = function() { return slotSegmentContainer };
	t.getMinMinute = function() { return minMinute };
	t.getMaxMinute = function() { return maxMinute };
	t.getBodyContent = function() { return slotContent }; // !!??
	t.getRowCnt = function() { return 1 };
	t.getColCnt = function() { return colCnt };
	t.getColWidth = function() { return colWidth };
	t.getSlotHeight = function() { return slotHeight };
	t.defaultSelectionEnd = defaultSelectionEnd;
	t.renderDayOverlay = renderDayOverlay;
	t.renderSelection = renderSelection;
	t.clearSelection = clearSelection;
	t.reportDayClick = reportDayClick; // selection mousedown hack
	t.dragStart = dragStart;
	t.dragStop = dragStop;
	
	
	// imports
	View.call(t, element, calendar, viewName);
	OverlayManager.call(t);
	SelectionManager.call(t);
	AgendaEventRenderer.call(t);
	var opt = t.opt;
	var trigger = t.trigger;
	var clearEvents = t.clearEvents;
	var renderOverlay = t.renderOverlay;
	var clearOverlays = t.clearOverlays;
	var reportSelection = t.reportSelection;
	var unselect = t.unselect;
	var daySelectionMousedown = t.daySelectionMousedown;
	var slotSegHtml = t.slotSegHtml;
	var formatDate = calendar.formatDate;
	
	
	// locals
	
	var dayTable;
	var dayHead;
	var dayHeadCells;
	var dayBody;
	var dayBodyCells;
	var dayBodyCellInners;
	var dayBodyFirstCell;
	var dayBodyFirstCellStretcher;
	var slotLayer;
	var daySegmentContainer;
	var allDayTable;
	var allDayRow;
	var slotScroller;
	var slotContent;
	var slotSegmentContainer;
	var slotTable;
	var slotTableFirstInner;
	var axisFirstCells;
	var gutterCells;
	var selectionHelper;
	
	var viewWidth;
	var viewHeight;
	var axisWidth;
	var colWidth;
	var gutterWidth;
	var slotHeight; // TODO: what if slotHeight changes? (see issue 650)
	var savedScrollTop;
	
	var colCnt;
	var slotCnt;
	var coordinateGrid;
	var hoverListener;
	var colContentPositions;
	var slotTopCache = {};
	
	var tm;
	var firstDay;
	var nwe;            // no weekends (int)
	var rtl, dis, dit;  // day index sign / translate
	var minMinute, maxMinute;
	var colFormat;
	

	
	/* Rendering
	-----------------------------------------------------------------------------*/
	
	
	disableTextSelection(element.addClass('fc-agenda'));
	
	
	function renderAgenda(c) {
		colCnt = c;
		updateOptions();
		if (!dayTable) {
			buildSkeleton();
		}else{
			clearEvents();
		}
		updateCells();
	}
	
	
	
	function updateOptions() {
		tm = opt('theme') ? 'ui' : 'fc';
		nwe = opt('weekends') ? 0 : 1;
		firstDay = opt('firstDay');
		if (rtl = opt('isRTL')) {
			dis = -1;
			dit = colCnt - 1;
		}else{
			dis = 1;
			dit = 0;
		}
		minMinute = parseTime(opt('minTime'));
		maxMinute = parseTime(opt('maxTime'));
		colFormat = opt('columnFormat');
	}
	
	
	
	function buildSkeleton() {
		var headerClass = tm + "-widget-header";
		var contentClass = tm + "-widget-content";
		var s;
		var i;
		var d;
		var maxd;
		var minutes;
		var slotNormal = opt('slotMinutes') % 15 == 0;
		
		s =
			"<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'>" +
			"<thead>" +
			"<tr>" +
			"<th class='fc-agenda-axis " + headerClass + "'>&nbsp;</th>";
		for (i=0; i<colCnt; i++) {
			s +=
				"<th class='fc- fc-col" + i + ' ' + headerClass + "'/>"; // fc- needed for setDayID
		}
		s +=
			"<th class='fc-agenda-gutter " + headerClass + "'>&nbsp;</th>" +
			"</tr>" +
			"</thead>" +
			"<tbody>" +
			"<tr>" +
			"<th class='fc-agenda-axis " + headerClass + "'>&nbsp;</th>";
		for (i=0; i<colCnt; i++) {
			s +=
				"<td class='fc- fc-col" + i + ' ' + contentClass + "'>" + // fc- needed for setDayID
				"<div>" +
				"<div class='fc-day-content'>" +
				"<div style='position:relative'>&nbsp;</div>" +
				"</div>" +
				"</div>" +
				"</td>";
		}
		s +=
			"<td class='fc-agenda-gutter " + contentClass + "'>&nbsp;</td>" +
			"</tr>" +
			"</tbody>" +
			"</table>";
		dayTable = $(s).appendTo(element);
		dayHead = dayTable.find('thead');
		dayHeadCells = dayHead.find('th').slice(1, -1);
		dayBody = dayTable.find('tbody');
		dayBodyCells = dayBody.find('td').slice(0, -1);
		dayBodyCellInners = dayBodyCells.find('div.fc-day-content div');
		dayBodyFirstCell = dayBodyCells.eq(0);
		dayBodyFirstCellStretcher = dayBodyFirstCell.find('> div');
		
		markFirstLast(dayHead.add(dayHead.find('tr')));
		markFirstLast(dayBody.add(dayBody.find('tr')));
		
		axisFirstCells = dayHead.find('th:first');
		gutterCells = dayTable.find('.fc-agenda-gutter');
		
		slotLayer =
			$("<div style='position:absolute;z-index:2;left:0;width:100%'/>")
				.appendTo(element);
				
		if (opt('allDaySlot')) {
		
			daySegmentContainer =
				$("<div style='position:absolute;z-index:8;top:0;left:0'/>")
					.appendTo(slotLayer);
		
			s =
				"<table style='width:100%' class='fc-agenda-allday' cellspacing='0'>" +
				"<tr>" +
				"<th class='" + headerClass + " fc-agenda-axis'>" + opt('allDayText') + "</th>" +
				"<td>" +
				"<div class='fc-day-content'><div style='position:relative'/></div>" +
				"</td>" +
				"<th class='" + headerClass + " fc-agenda-gutter'>&nbsp;</th>" +
				"</tr>" +
				"</table>";
			allDayTable = $(s).appendTo(slotLayer);
			allDayRow = allDayTable.find('tr');
			
			dayBind(allDayRow.find('td'));
			
			axisFirstCells = axisFirstCells.add(allDayTable.find('th:first'));
			gutterCells = gutterCells.add(allDayTable.find('th.fc-agenda-gutter'));
			
			slotLayer.append(
				"<div class='fc-agenda-divider " + headerClass + "'>" +
				"<div class='fc-agenda-divider-inner'/>" +
				"</div>"
			);
			
		}else{
		
			daySegmentContainer = $([]); // in jQuery 1.4, we can just do $()
		
		}
		
		slotScroller =
			$("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>")
				.appendTo(slotLayer);
				
		slotContent =
			$("<div style='position:relative;width:100%;overflow:hidden'/>")
				.appendTo(slotScroller);
				
		slotSegmentContainer =
			$("<div style='position:absolute;z-index:8;top:0;left:0'/>")
				.appendTo(slotContent);
		
		s =
			"<table class='fc-agenda-slots' style='width:100%' cellspacing='0'>" +
			"<tbody>";
		d = zeroDate();
		maxd = addMinutes(cloneDate(d), maxMinute);
		addMinutes(d, minMinute);
		slotCnt = 0;
		for (i=0; d < maxd; i++) {
			minutes = d.getMinutes();
			s +=
				"<tr class='fc-slot" + i + ' ' + (!minutes ? '' : 'fc-minor') + "'>" +
				"<th class='fc-agenda-axis " + headerClass + "'>" +
				((!slotNormal || !minutes) ? formatDate(d, opt('axisFormat')) : '&nbsp;') +
				"</th>" +
				"<td class='" + contentClass + "'>" +
				"<div style='position:relative'>&nbsp;</div>" +
				"</td>" +
				"</tr>";
			addMinutes(d, opt('slotMinutes'));
			slotCnt++;
		}
		s +=
			"</tbody>" +
			"</table>";
		slotTable = $(s).appendTo(slotContent);
		slotTableFirstInner = slotTable.find('div:first');
		
		slotBind(slotTable.find('td'));
		
		axisFirstCells = axisFirstCells.add(slotTable.find('th:first'));
	}
	
	
	
	function updateCells() {
		var i;
		var headCell;
		var bodyCell;
		var date;
		var today = clearTime(new Date());
		for (i=0; i<colCnt; i++) {
			date = colDate(i);
			headCell = dayHeadCells.eq(i);
			headCell.html(formatDate(date, colFormat));
			bodyCell = dayBodyCells.eq(i);
			if (+date == +today) {
				bodyCell.addClass(tm + '-state-highlight fc-today');
			}else{
				bodyCell.removeClass(tm + '-state-highlight fc-today');
			}
			setDayID(headCell.add(bodyCell), date);
		}
	}
	
	
	
	function setHeight(height, dateChanged) {
		if (height === undefined) {
			height = viewHeight;
		}
		viewHeight = height;
		slotTopCache = {};
	
		var headHeight = dayBody.position().top;
		var allDayHeight = slotScroller.position().top; // including divider
		var bodyHeight = Math.min( // total body height, including borders
			height - headHeight,   // when scrollbars
			slotTable.height() + allDayHeight + 1 // when no scrollbars. +1 for bottom border
		);
		
		dayBodyFirstCellStretcher
			.height(bodyHeight - vsides(dayBodyFirstCell));
		
		slotLayer.css('top', headHeight);
		
		slotScroller.height(bodyHeight - allDayHeight - 1);
		
		slotHeight = slotTableFirstInner.height() + 1; // +1 for border
		
		if (dateChanged) {
			resetScroll();
		}
	}
	
	
	
	function setWidth(width) {
		viewWidth = width;
		colContentPositions.clear();
		
		axisWidth = 0;
		setOuterWidth(
			axisFirstCells
				.width('')
				.each(function(i, _cell) {
					axisWidth = Math.max(axisWidth, $(_cell).outerWidth());
				}),
			axisWidth
		);
		
		var slotTableWidth = slotScroller[0].clientWidth; // needs to be done after axisWidth (for IE7)
		//slotTable.width(slotTableWidth);
		
		gutterWidth = slotScroller.width() - slotTableWidth;
		if (gutterWidth) {
			setOuterWidth(gutterCells, gutterWidth);
			gutterCells
				.show()
				.prev()
				.removeClass('fc-last');
		}else{
			gutterCells
				.hide()
				.prev()
				.addClass('fc-last');
		}
		
		colWidth = Math.floor((slotTableWidth - axisWidth) / colCnt);
		setOuterWidth(dayHeadCells.slice(0, -1), colWidth);
	}
	


	function resetScroll() {
		var d0 = zeroDate();
		var scrollDate = cloneDate(d0);
		scrollDate.setHours(opt('firstHour'));
		var top = timePosition(d0, scrollDate) + 1; // +1 for the border
		function scroll() {
			slotScroller.scrollTop(top);
		}
		scroll();
		setTimeout(scroll, 0); // overrides any previous scroll state made by the browser
	}
	
	
	function beforeHide() {
		savedScrollTop = slotScroller.scrollTop();
	}
	
	
	function afterShow() {
		slotScroller.scrollTop(savedScrollTop);
	}
	
	
	
	/* Slot/Day clicking and binding
	-----------------------------------------------------------------------*/
	

	function dayBind(cells) {
		cells.click(slotClick)
			.mousedown(daySelectionMousedown);
	}


	function slotBind(cells) {
		cells.click(slotClick)
			.mousedown(slotSelectionMousedown);
	}
	
	
	function slotClick(ev) {
		if (!opt('selectable')) { // if selectable, SelectionManager will worry about dayClick
			var col = Math.min(colCnt-1, Math.floor((ev.pageX - dayTable.offset().left - axisWidth) / colWidth));
			var date = colDate(col);
			var rowMatch = this.parentNode.className.match(/fc-slot(\d+)/); // TODO: maybe use data
			if (rowMatch) {
				var mins = parseInt(rowMatch[1]) * opt('slotMinutes');
				var hours = Math.floor(mins/60);
				date.setHours(hours);
				date.setMinutes(mins%60 + minMinute);
				trigger('dayClick', dayBodyCells[col], date, false, ev);
			}else{
				trigger('dayClick', dayBodyCells[col], date, true, ev);
			}
		}
	}
	
	
	
	/* Semi-transparent Overlay Helpers
	-----------------------------------------------------*/
	

	function renderDayOverlay(startDate, endDate, refreshCoordinateGrid) { // endDate is exclusive
		if (refreshCoordinateGrid) {
			coordinateGrid.build();
		}
		var visStart = cloneDate(t.visStart);
		var startCol, endCol;
		if (rtl) {
			startCol = dayDiff(endDate, visStart)*dis+dit+1;
			endCol = dayDiff(startDate, visStart)*dis+dit+1;
		}else{
			startCol = dayDiff(startDate, visStart);
			endCol = dayDiff(endDate, visStart);
		}
		startCol = Math.max(0, startCol);
		endCol = Math.min(colCnt, endCol);
		if (startCol < endCol) {
			dayBind(
				renderCellOverlay(0, startCol, 0, endCol-1)
			);
		}
	}
	
	
	function renderCellOverlay(row0, col0, row1, col1) { // only for all-day?
		var rect = coordinateGrid.rect(row0, col0, row1, col1, slotLayer);
		return renderOverlay(rect, slotLayer);
	}
	

	function renderSlotOverlay(overlayStart, overlayEnd) {
		var dayStart = cloneDate(t.visStart);
		var dayEnd = addDays(cloneDate(dayStart), 1);
		for (var i=0; i<colCnt; i++) {
			var stretchStart = new Date(Math.max(dayStart, overlayStart));
			var stretchEnd = new Date(Math.min(dayEnd, overlayEnd));
			if (stretchStart < stretchEnd) {
				var col = i*dis+dit;
				var rect = coordinateGrid.rect(0, col, 0, col, slotContent); // only use it for horizontal coords
				var top = timePosition(dayStart, stretchStart);
				var bottom = timePosition(dayStart, stretchEnd);
				rect.top = top;
				rect.height = bottom - top;
				slotBind(
					renderOverlay(rect, slotContent)
				);
			}
			addDays(dayStart, 1);
			addDays(dayEnd, 1);
		}
	}
	
	
	
	/* Coordinate Utilities
	-----------------------------------------------------------------------------*/
	
	
	coordinateGrid = new CoordinateGrid(function(rows, cols) {
		var e, n, p;
		dayHeadCells.each(function(i, _e) {
			e = $(_e);
			n = e.offset().left;
			if (i) {
				p[1] = n;
			}
			p = [n];
			cols[i] = p;
		});
		p[1] = n + e.outerWidth();
		if (opt('allDaySlot')) {
			e = allDayRow;
			n = e.offset().top;
			rows[0] = [n, n+e.outerHeight()];
		}
		var slotTableTop = slotContent.offset().top;
		var slotScrollerTop = slotScroller.offset().top;
		var slotScrollerBottom = slotScrollerTop + slotScroller.outerHeight();
		function constrain(n) {
			return Math.max(slotScrollerTop, Math.min(slotScrollerBottom, n));
		}
		for (var i=0; i<slotCnt; i++) {
			rows.push([
				constrain(slotTableTop + slotHeight*i),
				constrain(slotTableTop + slotHeight*(i+1))
			]);
		}
	});
	
	
	hoverListener = new HoverListener(coordinateGrid);
	
	
	colContentPositions = new HorizontalPositionCache(function(col) {
		return dayBodyCellInners.eq(col);
	});
	
	
	function colContentLeft(col) {
		return colContentPositions.left(col);
	}
	
	
	function colContentRight(col) {
		return colContentPositions.right(col);
	}
	
	
	
	
	function dateCell(date) { // "cell" terminology is now confusing
		return {
			row: Math.floor(dayDiff(date, t.visStart) / 7),
			col: dayOfWeekCol(date.getDay())
		};
	}
	
	
	function cellDate(cell) {
		var d = colDate(cell.col);
		var slotIndex = cell.row;
		if (opt('allDaySlot')) {
			slotIndex--;
		}
		if (slotIndex >= 0) {
			addMinutes(d, minMinute + slotIndex * opt('slotMinutes'));
		}
		return d;
	}
	
	
	function colDate(col) { // returns dates with 00:00:00
		return addDays(cloneDate(t.visStart), col*dis+dit);
	}
	
	
	function cellIsAllDay(cell) {
		return opt('allDaySlot') && !cell.row;
	}
	
	
	function dayOfWeekCol(dayOfWeek) {
		return ((dayOfWeek - Math.max(firstDay, nwe) + colCnt) % colCnt)*dis+dit;
	}
	
	
	
	
	// get the Y coordinate of the given time on the given day (both Date objects)
	function timePosition(day, time) { // both date objects. day holds 00:00 of current day
		day = cloneDate(day, true);
		if (time < addMinutes(cloneDate(day), minMinute)) {
			return 0;
		}
		if (time >= addMinutes(cloneDate(day), maxMinute)) {
			return slotTable.height();
		}
		var slotMinutes = opt('slotMinutes'),
			minutes = time.getHours()*60 + time.getMinutes() - minMinute,
			slotI = Math.floor(minutes / slotMinutes),
			slotTop = slotTopCache[slotI];
		if (slotTop === undefined) {
			slotTop = slotTopCache[slotI] = slotTable.find('tr:eq(' + slotI + ') td div')[0].offsetTop; //.position().top; // need this optimization???
		}
		return Math.max(0, Math.round(
			slotTop - 1 + slotHeight * ((minutes % slotMinutes) / slotMinutes)
		));
	}
	
	
	function allDayBounds() {
		return {
			left: axisWidth,
			right: viewWidth - gutterWidth
		}
	}
	
	
	function getAllDayRow(index) {
		return allDayRow;
	}
	
	
	function defaultEventEnd(event) {
		var start = cloneDate(event.start);
		if (event.allDay) {
			return start;
		}
		return addMinutes(start, opt('defaultEventMinutes'));
	}
	
	
	
	/* Selection
	---------------------------------------------------------------------------------*/
	
	
	function defaultSelectionEnd(startDate, allDay) {
		if (allDay) {
			return cloneDate(startDate);
		}
		return addMinutes(cloneDate(startDate), opt('slotMinutes'));
	}
	
	
	function renderSelection(startDate, endDate, allDay) { // only for all-day
		if (allDay) {
			if (opt('allDaySlot')) {
				renderDayOverlay(startDate, addDays(cloneDate(endDate), 1), true);
			}
		}else{
			renderSlotSelection(startDate, endDate);
		}
	}
	
	
	function renderSlotSelection(startDate, endDate) {
		var helperOption = opt('selectHelper');
		coordinateGrid.build();
		if (helperOption) {
			var col = dayDiff(startDate, t.visStart) * dis + dit;
			if (col >= 0 && col < colCnt) { // only works when times are on same day
				var rect = coordinateGrid.rect(0, col, 0, col, slotContent); // only for horizontal coords
				var top = timePosition(startDate, startDate);
				var bottom = timePosition(startDate, endDate);
				if (bottom > top) { // protect against selections that are entirely before or after visible range
					rect.top = top;
					rect.height = bottom - top;
					rect.left += 2;
					rect.width -= 5;
					if ($.isFunction(helperOption)) {
						var helperRes = helperOption(startDate, endDate);
						if (helperRes) {
							rect.position = 'absolute';
							rect.zIndex = 8;
							selectionHelper = $(helperRes)
								.css(rect)
								.appendTo(slotContent);
						}
					}else{
						rect.isStart = true; // conside rect a "seg" now
						rect.isEnd = true;   //
						selectionHelper = $(slotSegHtml(
							{
								title: '',
								start: startDate,
								end: endDate,
								className: ['fc-select-helper'],
								editable: false
							},
							rect
						));
						selectionHelper.css('opacity', opt('dragOpacity'));
					}
					if (selectionHelper) {
						slotBind(selectionHelper);
						slotContent.append(selectionHelper);
						setOuterWidth(selectionHelper, rect.width, true); // needs to be after appended
						setOuterHeight(selectionHelper, rect.height, true);
					}
				}
			}
		}else{
			renderSlotOverlay(startDate, endDate);
		}
	}
	
	
	function clearSelection() {
		clearOverlays();
		if (selectionHelper) {
			selectionHelper.remove();
			selectionHelper = null;
		}
	}
	
	
	function slotSelectionMousedown(ev) {
		if (ev.which == 1 && opt('selectable')) { // ev.which==1 means left mouse button
			unselect(ev);
			var dates;
			hoverListener.start(function(cell, origCell) {
				clearSelection();
				if (cell && cell.col == origCell.col && !cellIsAllDay(cell)) {
					var d1 = cellDate(origCell);
					var d2 = cellDate(cell);
					dates = [
						d1,
						addMinutes(cloneDate(d1), opt('slotMinutes')),
						d2,
						addMinutes(cloneDate(d2), opt('slotMinutes'))
					].sort(cmp);
					renderSlotSelection(dates[0], dates[3]);
				}else{
					dates = null;
				}
			}, ev);
			$(document).one('mouseup', function(ev) {
				hoverListener.stop();
				if (dates) {
					if (+dates[0] == +dates[1]) {
						reportDayClick(dates[0], false, ev);
					}
					reportSelection(dates[0], dates[3], false, ev);
				}
			});
		}
	}
	
	
	function reportDayClick(date, allDay, ev) {
		trigger('dayClick', dayBodyCells[dayOfWeekCol(date.getDay())], date, allDay, ev);
	}
	
	
	
	/* External Dragging
	--------------------------------------------------------------------------------*/
	
	
	function dragStart(_dragElement, ev, ui) {
		hoverListener.start(function(cell) {
			clearOverlays();
			if (cell) {
				if (cellIsAllDay(cell)) {
					renderCellOverlay(cell.row, cell.col, cell.row, cell.col);
				}else{
					var d1 = cellDate(cell);
					var d2 = addMinutes(cloneDate(d1), opt('defaultEventMinutes'));
					renderSlotOverlay(d1, d2);
				}
			}
		}, ev);
	}
	
	
	function dragStop(_dragElement, ev, ui) {
		var cell = hoverListener.stop();
		clearOverlays();
		if (cell) {
			trigger('drop', _dragElement, cellDate(cell), cellIsAllDay(cell), ev, ui);
		}
	}


}

function AgendaEventRenderer() {
	var t = this;
	
	
	// exports
	t.renderEvents = renderEvents;
	t.compileDaySegs = compileDaySegs; // for DayEventRenderer
	t.clearEvents = clearEvents;
	t.slotSegHtml = slotSegHtml;
	t.bindDaySeg = bindDaySeg;
	
	
	// imports
	DayEventRenderer.call(t);
	var opt = t.opt;
	var trigger = t.trigger;
	//var setOverflowHidden = t.setOverflowHidden;
	var isEventDraggable = t.isEventDraggable;
	var isEventResizable = t.isEventResizable;
	var eventEnd = t.eventEnd;
	var reportEvents = t.reportEvents;
	var reportEventClear = t.reportEventClear;
	var eventElementHandlers = t.eventElementHandlers;
	var setHeight = t.setHeight;
	var getDaySegmentContainer = t.getDaySegmentContainer;
	var getSlotSegmentContainer = t.getSlotSegmentContainer;
	var getHoverListener = t.getHoverListener;
	var getMaxMinute = t.getMaxMinute;
	var getMinMinute = t.getMinMinute;
	var timePosition = t.timePosition;
	var colContentLeft = t.colContentLeft;
	var colContentRight = t.colContentRight;
	var renderDaySegs = t.renderDaySegs;
	var resizableDayEvent = t.resizableDayEvent; // TODO: streamline binding architecture
	var getColCnt = t.getColCnt;
	var getColWidth = t.getColWidth;
	var getSlotHeight = t.getSlotHeight;
	var getBodyContent = t.getBodyContent;
	var reportEventElement = t.reportEventElement;
	var showEvents = t.showEvents;
	var hideEvents = t.hideEvents;
	var eventDrop = t.eventDrop;
	var eventResize = t.eventResize;
	var renderDayOverlay = t.renderDayOverlay;
	var clearOverlays = t.clearOverlays;
	var calendar = t.calendar;
	var formatDate = calendar.formatDate;
	var formatDates = calendar.formatDates;
	
	
	
	/* Rendering
	----------------------------------------------------------------------------*/
	

	function renderEvents(events, modifiedEventId) {
		reportEvents(events);
		var i, len=events.length,
			dayEvents=[],
			slotEvents=[];
		for (i=0; i<len; i++) {
			if (events[i].allDay) {
				dayEvents.push(events[i]);
			}else{
				slotEvents.push(events[i]);
			}
		}
		if (opt('allDaySlot')) {
			renderDaySegs(compileDaySegs(dayEvents), modifiedEventId);
			setHeight(); // no params means set to viewHeight
		}
		renderSlotSegs(compileSlotSegs(slotEvents), modifiedEventId);
	}
	
	
	function clearEvents() {
		reportEventClear();
		getDaySegmentContainer().empty();
		getSlotSegmentContainer().empty();
	}
	
	
	function compileDaySegs(events) {
		var levels = stackSegs(sliceSegs(events, $.map(events, exclEndDay), t.visStart, t.visEnd)),
			i, levelCnt=levels.length, level,
			j, seg,
			segs=[];
		for (i=0; i<levelCnt; i++) {
			level = levels[i];
			for (j=0; j<level.length; j++) {
				seg = level[j];
				seg.row = 0;
				seg.level = i; // not needed anymore
				segs.push(seg);
			}
		}
		return segs;
	}
	
	
	function compileSlotSegs(events) {
		var colCnt = getColCnt(),
			minMinute = getMinMinute(),
			maxMinute = getMaxMinute(),
			d = addMinutes(cloneDate(t.visStart), minMinute),
			visEventEnds = $.map(events, slotEventEnd),
			i, col,
			j, level,
			k, seg,
			segs=[];
		for (i=0; i<colCnt; i++) {
			col = stackSegs(sliceSegs(events, visEventEnds, d, addMinutes(cloneDate(d), maxMinute-minMinute)));
			countForwardSegs(col);
			for (j=0; j<col.length; j++) {
				level = col[j];
				for (k=0; k<level.length; k++) {
					seg = level[k];
					seg.col = i;
					seg.level = j;
					segs.push(seg);
				}
			}
			addDays(d, 1, true);
		}
		return segs;
	}
	
	
	function slotEventEnd(event) {
		if (event.end) {
			return cloneDate(event.end);
		}else{
			return addMinutes(cloneDate(event.start), opt('defaultEventMinutes'));
		}
	}
	
	
	// renders events in the 'time slots' at the bottom
	
	function renderSlotSegs(segs, modifiedEventId) {
	
		var i, segCnt=segs.length, seg,
			event,
			classes,
			top, bottom,
			colI, levelI, forward,
			leftmost,
			availWidth,
			outerWidth,
			left,
			html='',
			eventElements,
			eventElement,
			triggerRes,
			vsideCache={},
			hsideCache={},
			key, val,
			contentElement,
			height,
			slotSegmentContainer = getSlotSegmentContainer(),
			rtl, dis, dit,
			colCnt = getColCnt();
			
		if (rtl = opt('isRTL')) {
			dis = -1;
			dit = colCnt - 1;
		}else{
			dis = 1;
			dit = 0;
		}
			
		// calculate position/dimensions, create html
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			event = seg.event;
			top = timePosition(seg.start, seg.start);
			bottom = timePosition(seg.start, seg.end);
			colI = seg.col;
			levelI = seg.level;
			forward = seg.forward || 0;
			leftmost = colContentLeft(colI*dis + dit);
			availWidth = colContentRight(colI*dis + dit) - leftmost;
			availWidth = Math.min(availWidth-6, availWidth*.95); // TODO: move this to CSS
			if (levelI) {
				// indented and thin
				outerWidth = availWidth / (levelI + forward + 1);
			}else{
				if (forward) {
					// moderately wide, aligned left still
					outerWidth = ((availWidth / (forward + 1)) - (12/2)) * 2; // 12 is the predicted width of resizer =
				}else{
					// can be entire width, aligned left
					outerWidth = availWidth;
				}
			}
			left = leftmost +                                  // leftmost possible
				(availWidth / (levelI + forward + 1) * levelI) // indentation
				* dis + (rtl ? availWidth - outerWidth : 0);   // rtl
			seg.top = top;
			seg.left = left;
			seg.outerWidth = outerWidth;
			seg.outerHeight = bottom - top;
			html += slotSegHtml(event, seg);
		}
		slotSegmentContainer[0].innerHTML = html; // faster than html()
		eventElements = slotSegmentContainer.children();
		
		// retrieve elements, run through eventRender callback, bind event handlers
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			event = seg.event;
			eventElement = $(eventElements[i]); // faster than eq()
			triggerRes = trigger('eventRender', event, event, eventElement);
			if (triggerRes === false) {
				eventElement.remove();
			}else{
				if (triggerRes && triggerRes !== true) {
					eventElement.remove();
					eventElement = $(triggerRes)
						.css({
							position: 'absolute',
							top: seg.top,
							left: seg.left
						})
						.appendTo(slotSegmentContainer);
				}
				seg.element = eventElement;
				if (event._id === modifiedEventId) {
					bindSlotSeg(event, eventElement, seg);
				}else{
					eventElement[0]._fci = i; // for lazySegBind
				}
				reportEventElement(event, eventElement);
			}
		}
		
		lazySegBind(slotSegmentContainer, segs, bindSlotSeg);
		
		// record event sides and title positions
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			if (eventElement = seg.element) {
				val = vsideCache[key = seg.key = cssKey(eventElement[0])];
				seg.vsides = val === undefined ? (vsideCache[key] = vsides(eventElement, true)) : val;
				val = hsideCache[key];
				seg.hsides = val === undefined ? (hsideCache[key] = hsides(eventElement, true)) : val;
				contentElement = eventElement.find('div.fc-event-content');
				if (contentElement.length) {
					seg.contentTop = contentElement[0].offsetTop;
				}
			}
		}
		
		// set all positions/dimensions at once
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			if (eventElement = seg.element) {
				eventElement[0].style.width = Math.max(0, seg.outerWidth - seg.hsides) + 'px';
				height = Math.max(0, seg.outerHeight - seg.vsides);
				eventElement[0].style.height = height + 'px';
				event = seg.event;
				if (seg.contentTop !== undefined && height - seg.contentTop < 10) {
					// not enough room for title, put it in the time header
					eventElement.find('div.fc-event-time')
						.text(formatDate(event.start, opt('timeFormat')) + ' - ' + event.title);
					eventElement.find('div.fc-event-title')
						.remove();
				}
				trigger('eventAfterRender', event, event, eventElement);
			}
		}
					
	}
	
	
	function slotSegHtml(event, seg) {
		var html = "<";
		var url = event.url;
		var skinCss = getSkinCss(event, opt);
		var skinCssAttr = (skinCss ? " style='" + skinCss + "'" : '');
		var classes = ['fc-event', 'fc-event-skin', 'fc-event-vert'];
		if (isEventDraggable(event)) {
			classes.push('fc-event-draggable');
		}
		if (seg.isStart) {
			classes.push('fc-corner-top');
		}
		if (seg.isEnd) {
			classes.push('fc-corner-bottom');
		}
		classes = classes.concat(event.className);
		if (event.source) {
			classes = classes.concat(event.source.className || []);
		}
		if (url) {
			html += "a href='" + htmlEscape(event.url) + "'";
		}else{
			html += "div";
		}
		html +=
			" class='" + classes.join(' ') + "'" +
			" style='position:absolute;z-index:8;top:" + seg.top + "px;left:" + seg.left + "px;" + skinCss + "'" +
			">" +
			"<div class='fc-event-inner fc-event-skin'" + skinCssAttr + ">" +
			"<div class='fc-event-head fc-event-skin'" + skinCssAttr + ">" +
			"<div class='fc-event-time'>" +
			htmlEscape(formatDates(event.start, event.end, opt('timeFormat'))) +
			"</div>" +
			"</div>" +
			"<div class='fc-event-content'>" +
			"<div class='fc-event-title'>" +
			htmlEscape(event.title) +
			"</div>" +
			"</div>" +
			"<div class='fc-event-bg'></div>" +
			"</div>"; // close inner
		if (seg.isEnd && isEventResizable(event)) {
			html +=
				"<div class='ui-resizable-handle ui-resizable-s'>=</div>";
		}
		html +=
			"</" + (url ? "a" : "div") + ">";
		return html;
	}
	
	
	function bindDaySeg(event, eventElement, seg) {
		if (isEventDraggable(event)) {
			draggableDayEvent(event, eventElement, seg.isStart);
		}
		if (seg.isEnd && isEventResizable(event)) {
			resizableDayEvent(event, eventElement, seg);
		}
		eventElementHandlers(event, eventElement);
			// needs to be after, because resizableDayEvent might stopImmediatePropagation on click
	}
	
	
	function bindSlotSeg(event, eventElement, seg) {
		var timeElement = eventElement.find('div.fc-event-time');
		if (isEventDraggable(event)) {
			draggableSlotEvent(event, eventElement, timeElement);
		}
		if (seg.isEnd && isEventResizable(event)) {
			resizableSlotEvent(event, eventElement, timeElement);
		}
		eventElementHandlers(event, eventElement);
	}
	
	
	
	/* Dragging
	-----------------------------------------------------------------------------------*/
	
	
	// when event starts out FULL-DAY
	
	function draggableDayEvent(event, eventElement, isStart) {
		var origWidth;
		var revert;
		var allDay=true;
		var dayDelta;
		var dis = opt('isRTL') ? -1 : 1;
		var hoverListener = getHoverListener();
		var colWidth = getColWidth();
		var slotHeight = getSlotHeight();
		var minMinute = getMinMinute();
		eventElement.draggable({
			zIndex: 9,
			opacity: opt('dragOpacity', 'month'), // use whatever the month view was using
			revertDuration: opt('dragRevertDuration'),
			start: function(ev, ui) {
				trigger('eventDragStart', eventElement, event, ev, ui);
				hideEvents(event, eventElement);
				origWidth = eventElement.width();
				hoverListener.start(function(cell, origCell, rowDelta, colDelta) {
					clearOverlays();
					if (cell) {
						//setOverflowHidden(true);
						revert = false;
						dayDelta = colDelta * dis;
						if (!cell.row) {
							// on full-days
							renderDayOverlay(
								addDays(cloneDate(event.start), dayDelta),
								addDays(exclEndDay(event), dayDelta)
							);
							resetElement();
						}else{
							// mouse is over bottom slots
							if (isStart) {
								if (allDay) {
									// convert event to temporary slot-event
									eventElement.width(colWidth - 10); // don't use entire width
									setOuterHeight(
										eventElement,
										slotHeight * Math.round(
											(event.end ? ((event.end - event.start) / MINUTE_MS) : opt('defaultEventMinutes'))
											/ opt('slotMinutes')
										)
									);
									eventElement.draggable('option', 'grid', [colWidth, 1]);
									allDay = false;
								}
							}else{
								revert = true;
							}
						}
						revert = revert || (allDay && !dayDelta);
					}else{
						resetElement();
						//setOverflowHidden(false);
						revert = true;
					}
					eventElement.draggable('option', 'revert', revert);
				}, ev, 'drag');
			},
			stop: function(ev, ui) {
				hoverListener.stop();
				clearOverlays();
				trigger('eventDragStop', eventElement, event, ev, ui);
				if (revert) {
					// hasn't moved or is out of bounds (draggable has already reverted)
					resetElement();
					eventElement.css('filter', ''); // clear IE opacity side-effects
					showEvents(event, eventElement);
				}else{
					// changed!
					var minuteDelta = 0;
					if (!allDay) {
						minuteDelta = Math.round((eventElement.offset().top - getBodyContent().offset().top) / slotHeight)
							* opt('slotMinutes')
							+ minMinute
							- (event.start.getHours() * 60 + event.start.getMinutes());
					}
					eventDrop(this, event, dayDelta, minuteDelta, allDay, ev, ui);
				}
				//setOverflowHidden(false);
			}
		});
		function resetElement() {
			if (!allDay) {
				eventElement
					.width(origWidth)
					.height('')
					.draggable('option', 'grid', null);
				allDay = true;
			}
		}
	}
	
	
	// when event starts out IN TIMESLOTS
	
	function draggableSlotEvent(event, eventElement, timeElement) {
		var origPosition;
		var allDay=false;
		var dayDelta;
		var minuteDelta;
		var prevMinuteDelta;
		var dis = opt('isRTL') ? -1 : 1;
		var hoverListener = getHoverListener();
		var colCnt = getColCnt();
		var colWidth = getColWidth();
		var slotHeight = getSlotHeight();
		eventElement.draggable({
			zIndex: 9,
			scroll: false,
			grid: [colWidth, slotHeight],
			axis: colCnt==1 ? 'y' : false,
			opacity: opt('dragOpacity'),
			revertDuration: opt('dragRevertDuration'),
			start: function(ev, ui) {
				trigger('eventDragStart', eventElement, event, ev, ui);
				hideEvents(event, eventElement);
				origPosition = eventElement.position();
				minuteDelta = prevMinuteDelta = 0;
				hoverListener.start(function(cell, origCell, rowDelta, colDelta) {
					eventElement.draggable('option', 'revert', !cell);
					clearOverlays();
					if (cell) {
						dayDelta = colDelta * dis;
						if (opt('allDaySlot') && !cell.row) {
							// over full days
							if (!allDay) {
								// convert to temporary all-day event
								allDay = true;
								timeElement.hide();
								eventElement.draggable('option', 'grid', null);
							}
							renderDayOverlay(
								addDays(cloneDate(event.start), dayDelta),
								addDays(exclEndDay(event), dayDelta)
							);
						}else{
							// on slots
							resetElement();
						}
					}
				}, ev, 'drag');
			},
			drag: function(ev, ui) {
				minuteDelta = Math.round((ui.position.top - origPosition.top) / slotHeight) * opt('slotMinutes');
				if (minuteDelta != prevMinuteDelta) {
					if (!allDay) {
						updateTimeText(minuteDelta);
					}
					prevMinuteDelta = minuteDelta;
				}
			},
			stop: function(ev, ui) {
				var cell = hoverListener.stop();
				clearOverlays();
				trigger('eventDragStop', eventElement, event, ev, ui);
				if (cell && (dayDelta || minuteDelta || allDay)) {
					// changed!
					eventDrop(this, event, dayDelta, allDay ? 0 : minuteDelta, allDay, ev, ui);
				}else{
					// either no change or out-of-bounds (draggable has already reverted)
					resetElement();
					eventElement.css('filter', ''); // clear IE opacity side-effects
					eventElement.css(origPosition); // sometimes fast drags make event revert to wrong position
					updateTimeText(0);
					showEvents(event, eventElement);
				}
			}
		});
		function updateTimeText(minuteDelta) {
			var newStart = addMinutes(cloneDate(event.start), minuteDelta);
			var newEnd;
			if (event.end) {
				newEnd = addMinutes(cloneDate(event.end), minuteDelta);
			}
			timeElement.text(formatDates(newStart, newEnd, opt('timeFormat')));
		}
		function resetElement() {
			// convert back to original slot-event
			if (allDay) {
				timeElement.css('display', ''); // show() was causing display=inline
				eventElement.draggable('option', 'grid', [colWidth, slotHeight]);
				allDay = false;
			}
		}
	}
	
	
	
	/* Resizing
	--------------------------------------------------------------------------------------*/
	
	
	function resizableSlotEvent(event, eventElement, timeElement) {
		var slotDelta, prevSlotDelta;
		var slotHeight = getSlotHeight();
		eventElement.resizable({
			handles: {
				s: 'div.ui-resizable-s'
			},
			grid: slotHeight,
			start: function(ev, ui) {
				slotDelta = prevSlotDelta = 0;
				hideEvents(event, eventElement);
				eventElement.css('z-index', 9);
				trigger('eventResizeStart', this, event, ev, ui);
			},
			resize: function(ev, ui) {
				// don't rely on ui.size.height, doesn't take grid into account
				slotDelta = Math.round((Math.max(slotHeight, eventElement.height()) - ui.originalSize.height) / slotHeight);
				if (slotDelta != prevSlotDelta) {
					timeElement.text(
						formatDates(
							event.start,
							(!slotDelta && !event.end) ? null : // no change, so don't display time range
								addMinutes(eventEnd(event), opt('slotMinutes')*slotDelta),
							opt('timeFormat')
						)
					);
					prevSlotDelta = slotDelta;
				}
			},
			stop: function(ev, ui) {
				trigger('eventResizeStop', this, event, ev, ui);
				if (slotDelta) {
					eventResize(this, event, 0, opt('slotMinutes')*slotDelta, ev, ui);
				}else{
					eventElement.css('z-index', 8);
					showEvents(event, eventElement);
					// BUG: if event was really short, need to put title back in span
				}
			}
		});
	}
	

}


function countForwardSegs(levels) {
	var i, j, k, level, segForward, segBack;
	for (i=levels.length-1; i>0; i--) {
		level = levels[i];
		for (j=0; j<level.length; j++) {
			segForward = level[j];
			for (k=0; k<levels[i-1].length; k++) {
				segBack = levels[i-1][k];
				if (segsCollide(segForward, segBack)) {
					segBack.forward = Math.max(segBack.forward||0, (segForward.forward||0)+1);
				}
			}
		}
	}
}




function View(element, calendar, viewName) {
	var t = this;
	
	
	// exports
	t.element = element;
	t.calendar = calendar;
	t.name = viewName;
	t.opt = opt;
	t.trigger = trigger;
	//t.setOverflowHidden = setOverflowHidden;
	t.isEventDraggable = isEventDraggable;
	t.isEventResizable = isEventResizable;
	t.reportEvents = reportEvents;
	t.eventEnd = eventEnd;
	t.reportEventElement = reportEventElement;
	t.reportEventClear = reportEventClear;
	t.eventElementHandlers = eventElementHandlers;
	t.showEvents = showEvents;
	t.hideEvents = hideEvents;
	t.eventDrop = eventDrop;
	t.eventResize = eventResize;
	// t.title
	// t.start, t.end
	// t.visStart, t.visEnd
	
	
	// imports
	var defaultEventEnd = t.defaultEventEnd;
	var normalizeEvent = calendar.normalizeEvent; // in EventManager
	var reportEventChange = calendar.reportEventChange;
	
	
	// locals
	var eventsByID = {};
	var eventElements = [];
	var eventElementsByID = {};
	var options = calendar.options;
	
	
	
	function opt(name, viewNameOverride) {
		var v = options[name];
		if (typeof v == 'object') {
			return smartProperty(v, viewNameOverride || viewName);
		}
		return v;
	}

	
	function trigger(name, thisObj) {
		return calendar.trigger.apply(
			calendar,
			[name, thisObj || t].concat(Array.prototype.slice.call(arguments, 2), [t])
		);
	}
	
	
	/*
	function setOverflowHidden(bool) {
		element.css('overflow', bool ? 'hidden' : '');
	}
	*/
	
	
	function isEventDraggable(event) {
		return isEventEditable(event) && !opt('disableDragging');
	}
	
	
	function isEventResizable(event) { // but also need to make sure the seg.isEnd == true
		return isEventEditable(event) && !opt('disableResizing');
	}
	
	
	function isEventEditable(event) {
		return firstDefined(event.editable, (event.source || {}).editable, opt('editable'));
	}
	
	
	
	/* Event Data
	------------------------------------------------------------------------------*/
	
	
	// report when view receives new events
	function reportEvents(events) { // events are already normalized at this point
		eventsByID = {};
		var i, len=events.length, event;
		for (i=0; i<len; i++) {
			event = events[i];
			if (eventsByID[event._id]) {
				eventsByID[event._id].push(event);
			}else{
				eventsByID[event._id] = [event];
			}
		}
	}
	
	
	// returns a Date object for an event's end
	function eventEnd(event) {
		return event.end ? cloneDate(event.end) : defaultEventEnd(event);
	}
	
	
	
	/* Event Elements
	------------------------------------------------------------------------------*/
	
	
	// report when view creates an element for an event
	function reportEventElement(event, element) {
		eventElements.push(element);
		if (eventElementsByID[event._id]) {
			eventElementsByID[event._id].push(element);
		}else{
			eventElementsByID[event._id] = [element];
		}
	}
	
	
	function reportEventClear() {
		eventElements = [];
		eventElementsByID = {};
	}
	
	
	// attaches eventClick, eventMouseover, eventMouseout
	function eventElementHandlers(event, eventElement) {
		eventElement
			.click(function(ev) {
				if (!eventElement.hasClass('ui-draggable-dragging') &&
					!eventElement.hasClass('ui-resizable-resizing')) {
						return trigger('eventClick', this, event, ev);
					}
			})
			.hover(
				function(ev) {
					trigger('eventMouseover', this, event, ev);
				},
				function(ev) {
					trigger('eventMouseout', this, event, ev);
				}
			);
		// TODO: don't fire eventMouseover/eventMouseout *while* dragging is occuring (on subject element)
		// TODO: same for resizing
	}
	
	
	function showEvents(event, exceptElement) {
		eachEventElement(event, exceptElement, 'show');
	}
	
	
	function hideEvents(event, exceptElement) {
		eachEventElement(event, exceptElement, 'hide');
	}
	
	
	function eachEventElement(event, exceptElement, funcName) {
		var elements = eventElementsByID[event._id],
			i, len = elements.length;
		for (i=0; i<len; i++) {
			if (!exceptElement || elements[i][0] != exceptElement[0]) {
				elements[i][funcName]();
			}
		}
	}
	
	
	
	/* Event Modification Reporting
	---------------------------------------------------------------------------------*/
	
	
	function eventDrop(e, event, dayDelta, minuteDelta, allDay, ev, ui) {
		var oldAllDay = event.allDay;
		var eventId = event._id;
		moveEvents(eventsByID[eventId], dayDelta, minuteDelta, allDay);
		trigger(
			'eventDrop',
			e,
			event,
			dayDelta,
			minuteDelta,
			allDay,
			function() {
				// TODO: investigate cases where this inverse technique might not work
				moveEvents(eventsByID[eventId], -dayDelta, -minuteDelta, oldAllDay);
				reportEventChange(eventId);
			},
			ev,
			ui
		);
		reportEventChange(eventId);
	}
	
	
	function eventResize(e, event, dayDelta, minuteDelta, ev, ui) {
		var eventId = event._id;
		elongateEvents(eventsByID[eventId], dayDelta, minuteDelta);
		trigger(
			'eventResize',
			e,
			event,
			dayDelta,
			minuteDelta,
			function() {
				// TODO: investigate cases where this inverse technique might not work
				elongateEvents(eventsByID[eventId], -dayDelta, -minuteDelta);
				reportEventChange(eventId);
			},
			ev,
			ui
		);
		reportEventChange(eventId);
	}
	
	
	
	/* Event Modification Math
	---------------------------------------------------------------------------------*/
	
	
	function moveEvents(events, dayDelta, minuteDelta, allDay) {
		minuteDelta = minuteDelta || 0;
		for (var e, len=events.length, i=0; i<len; i++) {
			e = events[i];
			if (allDay !== undefined) {
				e.allDay = allDay;
			}
			addMinutes(addDays(e.start, dayDelta, true), minuteDelta);
			if (e.end) {
				e.end = addMinutes(addDays(e.end, dayDelta, true), minuteDelta);
			}
			normalizeEvent(e, options);
		}
	}
	
	
	function elongateEvents(events, dayDelta, minuteDelta) {
		minuteDelta = minuteDelta || 0;
		for (var e, len=events.length, i=0; i<len; i++) {
			e = events[i];
			e.end = addMinutes(addDays(eventEnd(e), dayDelta, true), minuteDelta);
			normalizeEvent(e, options);
		}
	}
	

}

function DayEventRenderer() {
	var t = this;

	
	// exports
	t.renderDaySegs = renderDaySegs;
	t.resizableDayEvent = resizableDayEvent;
	
	
	// imports
	var opt = t.opt;
	var trigger = t.trigger;
	var isEventDraggable = t.isEventDraggable;
	var isEventResizable = t.isEventResizable;
	var eventEnd = t.eventEnd;
	var reportEventElement = t.reportEventElement;
	var showEvents = t.showEvents;
	var hideEvents = t.hideEvents;
	var eventResize = t.eventResize;
	var getRowCnt = t.getRowCnt;
	var getColCnt = t.getColCnt;
	var getColWidth = t.getColWidth;
	var allDayRow = t.allDayRow;
	var allDayBounds = t.allDayBounds;
	var colContentLeft = t.colContentLeft;
	var colContentRight = t.colContentRight;
	var dayOfWeekCol = t.dayOfWeekCol;
	var dateCell = t.dateCell;
	var compileDaySegs = t.compileDaySegs;
	var getDaySegmentContainer = t.getDaySegmentContainer;
	var bindDaySeg = t.bindDaySeg; //TODO: streamline this
	var formatDates = t.calendar.formatDates;
	var renderDayOverlay = t.renderDayOverlay;
	var clearOverlays = t.clearOverlays;
	var clearSelection = t.clearSelection;
	
	
	
	/* Rendering
	-----------------------------------------------------------------------------*/
	
	
	function renderDaySegs(segs, modifiedEventId) {
		var segmentContainer = getDaySegmentContainer();
		var rowDivs;
		var rowCnt = getRowCnt();
		var colCnt = getColCnt();
		var i = 0;
		var rowI;
		var levelI;
		var colHeights;
		var j;
		var segCnt = segs.length;
		var seg;
		var top;
		var k;
		segmentContainer[0].innerHTML = daySegHTML(segs); // faster than .html()
		daySegElementResolve(segs, segmentContainer.children());
		daySegElementReport(segs);
		daySegHandlers(segs, segmentContainer, modifiedEventId);
		daySegCalcHSides(segs);
		daySegSetWidths(segs);
		daySegCalcHeights(segs);
		rowDivs = getRowDivs();
		// set row heights, calculate event tops (in relation to row top)
		for (rowI=0; rowI<rowCnt; rowI++) {
			levelI = 0;
			colHeights = [];
			for (j=0; j<colCnt; j++) {
				colHeights[j] = 0;
			}
			while (i<segCnt && (seg = segs[i]).row == rowI) {
				// loop through segs in a row
				top = arrayMax(colHeights.slice(seg.startCol, seg.endCol));
				seg.top = top;
				top += seg.outerHeight;
				for (k=seg.startCol; k<seg.endCol; k++) {
					colHeights[k] = top;
				}
				i++;
			}
			rowDivs[rowI].height(arrayMax(colHeights));
		}
		daySegSetTops(segs, getRowTops(rowDivs));
	}
	
	
	function renderTempDaySegs(segs, adjustRow, adjustTop) {
		var tempContainer = $("<div/>");
		var elements;
		var segmentContainer = getDaySegmentContainer();
		var i;
		var segCnt = segs.length;
		var element;
		tempContainer[0].innerHTML = daySegHTML(segs); // faster than .html()
		elements = tempContainer.children();
		segmentContainer.append(elements);
		daySegElementResolve(segs, elements);
		daySegCalcHSides(segs);
		daySegSetWidths(segs);
		daySegCalcHeights(segs);
		daySegSetTops(segs, getRowTops(getRowDivs()));
		elements = [];
		for (i=0; i<segCnt; i++) {
			element = segs[i].element;
			if (element) {
				if (segs[i].row === adjustRow) {
					element.css('top', adjustTop);
				}
				elements.push(element[0]);
			}
		}
		return $(elements);
	}
	
	
	function daySegHTML(segs) { // also sets seg.left and seg.outerWidth
		var rtl = opt('isRTL');
		var i;
		var segCnt=segs.length;
		var seg;
		var event;
		var url;
		var classes;
		var bounds = allDayBounds();
		var minLeft = bounds.left;
		var maxLeft = bounds.right;
		var leftCol;
		var rightCol;
		var left;
		var right;
		var skinCss;
		var html = '';
		// calculate desired position/dimensions, create html
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			event = seg.event;
			classes = ['fc-event', 'fc-event-skin', 'fc-event-hori'];
			if (isEventDraggable(event)) {
				classes.push('fc-event-draggable');
			}
			if (rtl) {
				if (seg.isStart) {
					classes.push('fc-corner-right');
				}
				if (seg.isEnd) {
					classes.push('fc-corner-left');
				}
				leftCol = dayOfWeekCol(seg.end.getDay()-1);
				rightCol = dayOfWeekCol(seg.start.getDay());
				left = seg.isEnd ? colContentLeft(leftCol) : minLeft;
				right = seg.isStart ? colContentRight(rightCol) : maxLeft;
			}else{
				if (seg.isStart) {
					classes.push('fc-corner-left');
				}
				if (seg.isEnd) {
					classes.push('fc-corner-right');
				}
				leftCol = dayOfWeekCol(seg.start.getDay());
				rightCol = dayOfWeekCol(seg.end.getDay()-1);
				left = seg.isStart ? colContentLeft(leftCol) : minLeft;
				right = seg.isEnd ? colContentRight(rightCol) : maxLeft;
			}
			classes = classes.concat(event.className);
			if (event.source) {
				classes = classes.concat(event.source.className || []);
			}
			url = event.url;
			skinCss = getSkinCss(event, opt);
			if (url) {
				html += "<a href='" + htmlEscape(url) + "'";
			}else{
				html += "<div";
			}
			html +=
				" class='" + classes.join(' ') + "'" +
				" style='position:absolute;z-index:8;left:"+left+"px;" + skinCss + "'" +
				">" +
				"<div" +
				" class='fc-event-inner fc-event-skin'" +
				(skinCss ? " style='" + skinCss + "'" : '') +
				">";
			if (!event.allDay && seg.isStart) {
				html +=
					"<span class='fc-event-time'>" +
					htmlEscape(formatDates(event.start, event.end, opt('timeFormat'))) +
					"</span>";
			}
			html +=
				"<span class='fc-event-title'>" + htmlEscape(event.title) + "</span>" +
				"</div>";
			if (seg.isEnd && isEventResizable(event)) {
				html +=
					"<div class='ui-resizable-handle ui-resizable-" + (rtl ? 'w' : 'e') + "'>" +
					"&nbsp;&nbsp;&nbsp;" + // makes hit area a lot better for IE6/7
					"</div>";
			}
			html +=
				"</" + (url ? "a" : "div" ) + ">";
			seg.left = left;
			seg.outerWidth = right - left;
			seg.startCol = leftCol;
			seg.endCol = rightCol + 1; // needs to be exclusive
		}
		return html;
	}
	
	
	function daySegElementResolve(segs, elements) { // sets seg.element
		var i;
		var segCnt = segs.length;
		var seg;
		var event;
		var element;
		var triggerRes;
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			event = seg.event;
			element = $(elements[i]); // faster than .eq()
			triggerRes = trigger('eventRender', event, event, element);
			if (triggerRes === false) {
				element.remove();
			}else{
				if (triggerRes && triggerRes !== true) {
					triggerRes = $(triggerRes)
						.css({
							position: 'absolute',
							left: seg.left
						});
					element.replaceWith(triggerRes);
					element = triggerRes;
				}
				seg.element = element;
			}
		}
	}
	
	
	function daySegElementReport(segs) {
		var i;
		var segCnt = segs.length;
		var seg;
		var element;
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			element = seg.element;
			if (element) {
				reportEventElement(seg.event, element);
			}
		}
	}
	
	
	function daySegHandlers(segs, segmentContainer, modifiedEventId) {
		var i;
		var segCnt = segs.length;
		var seg;
		var element;
		var event;
		// retrieve elements, run through eventRender callback, bind handlers
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			element = seg.element;
			if (element) {
				event = seg.event;
				if (event._id === modifiedEventId) {
					bindDaySeg(event, element, seg);
				}else{
					element[0]._fci = i; // for lazySegBind
				}
			}
		}
		lazySegBind(segmentContainer, segs, bindDaySeg);
	}
	
	
	function daySegCalcHSides(segs) { // also sets seg.key
		var i;
		var segCnt = segs.length;
		var seg;
		var element;
		var key, val;
		var hsideCache = {};
		// record event horizontal sides
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			element = seg.element;
			if (element) {
				key = seg.key = cssKey(element[0]);
				val = hsideCache[key];
				if (val === undefined) {
					val = hsideCache[key] = hsides(element, true);
				}
				seg.hsides = val;
			}
		}
	}
	
	
	function daySegSetWidths(segs) {
		var i;
		var segCnt = segs.length;
		var seg;
		var element;
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			element = seg.element;
			if (element) {
				element[0].style.width = Math.max(0, seg.outerWidth - seg.hsides) + 'px';
			}
		}
	}
	
	
	function daySegCalcHeights(segs) {
		var i;
		var segCnt = segs.length;
		var seg;
		var element;
		var key, val;
		var vmarginCache = {};
		// record event heights
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			element = seg.element;
			if (element) {
				key = seg.key; // created in daySegCalcHSides
				val = vmarginCache[key];
				if (val === undefined) {
					val = vmarginCache[key] = vmargins(element);
				}
				seg.outerHeight = element[0].offsetHeight + val;
			}
		}
	}
	
	
	function getRowDivs() {
		var i;
		var rowCnt = getRowCnt();
		var rowDivs = [];
		for (i=0; i<rowCnt; i++) {
			rowDivs[i] = allDayRow(i)
				.find('td:first div.fc-day-content > div'); // optimal selector?
		}
		return rowDivs;
	}
	
	
	function getRowTops(rowDivs) {
		var i;
		var rowCnt = rowDivs.length;
		var tops = [];
		for (i=0; i<rowCnt; i++) {
			tops[i] = rowDivs[i][0].offsetTop; // !!?? but this means the element needs position:relative if in a table cell!!!!
		}
		return tops;
	}
	
	
	function daySegSetTops(segs, rowTops) { // also triggers eventAfterRender
		var i;
		var segCnt = segs.length;
		var seg;
		var element;
		var event;
		for (i=0; i<segCnt; i++) {
			seg = segs[i];
			element = seg.element;
			if (element) {
				element[0].style.top = rowTops[seg.row] + (seg.top||0) + 'px';
				event = seg.event;
				trigger('eventAfterRender', event, event, element);
			}
		}
	}
	
	
	
	/* Resizing
	-----------------------------------------------------------------------------------*/
	
	
	function resizableDayEvent(event, element, seg) {
		var rtl = opt('isRTL');
		var direction = rtl ? 'w' : 'e';
		var handle = element.find('div.ui-resizable-' + direction);
		var isResizing = false;
		
		// TODO: look into using jquery-ui mouse widget for this stuff
		disableTextSelection(element); // prevent native <a> selection for IE
		element
			.mousedown(function(ev) { // prevent native <a> selection for others
				ev.preventDefault();
			})
			.click(function(ev) {
				if (isResizing) {
					ev.preventDefault(); // prevent link from being visited (only method that worked in IE6)
					ev.stopImmediatePropagation(); // prevent fullcalendar eventClick handler from being called
					                               // (eventElementHandlers needs to be bound after resizableDayEvent)
				}
			});
		
		handle.mousedown(function(ev) {
			if (ev.which != 1) {
				return; // needs to be left mouse button
			}
			isResizing = true;
			var hoverListener = t.getHoverListener();
			var rowCnt = getRowCnt();
			var colCnt = getColCnt();
			var dis = rtl ? -1 : 1;
			var dit = rtl ? colCnt-1 : 0;
			var elementTop = element.css('top');
			var dayDelta;
			var helpers;
			var eventCopy = $.extend({}, event);
			var minCell = dateCell(event.start);
			clearSelection();
			$('body')
				.css('cursor', direction + '-resize')
				.one('mouseup', mouseup);
			trigger('eventResizeStart', this, event, ev);
			hoverListener.start(function(cell, origCell) {
				if (cell) {
					var r = Math.max(minCell.row, cell.row);
					var c = cell.col;
					if (rowCnt == 1) {
						r = 0; // hack for all-day area in agenda views
					}
					if (r == minCell.row) {
						if (rtl) {
							c = Math.min(minCell.col, c);
						}else{
							c = Math.max(minCell.col, c);
						}
					}
					dayDelta = (r*7 + c*dis+dit) - (origCell.row*7 + origCell.col*dis+dit);
					var newEnd = addDays(eventEnd(event), dayDelta, true);
					if (dayDelta) {
						eventCopy.end = newEnd;
						var oldHelpers = helpers;
						helpers = renderTempDaySegs(compileDaySegs([eventCopy]), seg.row, elementTop);
						helpers.find('*').css('cursor', direction + '-resize');
						if (oldHelpers) {
							oldHelpers.remove();
						}
						hideEvents(event);
					}else{
						if (helpers) {
							showEvents(event);
							helpers.remove();
							helpers = null;
						}
					}
					clearOverlays();
					renderDayOverlay(event.start, addDays(cloneDate(newEnd), 1)); // coordinate grid already rebuild at hoverListener.start
				}
			}, ev);
			
			function mouseup(ev) {
				trigger('eventResizeStop', this, event, ev);
				$('body').css('cursor', '');
				hoverListener.stop();
				clearOverlays();
				if (dayDelta) {
					eventResize(this, event, dayDelta, 0, ev);
					// event redraw will clear helpers
				}
				// otherwise, the drag handler already restored the old events
				
				setTimeout(function() { // make this happen after the element's click event
					isResizing = false;
				},0);
			}
			
		});
	}
	

}

//BUG: unselect needs to be triggered when events are dragged+dropped

function SelectionManager() {
	var t = this;
	
	
	// exports
	t.select = select;
	t.unselect = unselect;
	t.reportSelection = reportSelection;
	t.daySelectionMousedown = daySelectionMousedown;
	
	
	// imports
	var opt = t.opt;
	var trigger = t.trigger;
	var defaultSelectionEnd = t.defaultSelectionEnd;
	var renderSelection = t.renderSelection;
	var clearSelection = t.clearSelection;
	
	
	// locals
	var selected = false;



	// unselectAuto
	if (opt('selectable') && opt('unselectAuto')) {
		$(document).mousedown(function(ev) {
			var ignore = opt('unselectCancel');
			if (ignore) {
				if ($(ev.target).parents(ignore).length) { // could be optimized to stop after first match
					return;
				}
			}
			unselect(ev);
		});
	}
	

	function select(startDate, endDate, allDay) {
		unselect();
		if (!endDate) {
			endDate = defaultSelectionEnd(startDate, allDay);
		}
		renderSelection(startDate, endDate, allDay);
		reportSelection(startDate, endDate, allDay);
	}
	
	
	function unselect(ev) {
		if (selected) {
			selected = false;
			clearSelection();
			trigger('unselect', null, ev);
		}
	}
	
	
	function reportSelection(startDate, endDate, allDay, ev) {
		selected = true;
		trigger('select', null, startDate, endDate, allDay, ev);
	}
	
	
	function daySelectionMousedown(ev) { // not really a generic manager method, oh well
		var cellDate = t.cellDate;
		var cellIsAllDay = t.cellIsAllDay;
		var hoverListener = t.getHoverListener();
		var reportDayClick = t.reportDayClick; // this is hacky and sort of weird
		if (ev.which == 1 && opt('selectable')) { // which==1 means left mouse button
			unselect(ev);
			var _mousedownElement = this;
			var dates;
			hoverListener.start(function(cell, origCell) { // TODO: maybe put cellDate/cellIsAllDay info in cell
				clearSelection();
				if (cell && cellIsAllDay(cell)) {
					dates = [ cellDate(origCell), cellDate(cell) ].sort(cmp);
					renderSelection(dates[0], dates[1], true);
				}else{
					dates = null;
				}
			}, ev);
			$(document).one('mouseup', function(ev) {
				hoverListener.stop();
				if (dates) {
					if (+dates[0] == +dates[1]) {
						reportDayClick(dates[0], true, ev);
					}
					reportSelection(dates[0], dates[1], true, ev);
				}
			});
		}
	}


}
 
function OverlayManager() {
	var t = this;
	
	
	// exports
	t.renderOverlay = renderOverlay;
	t.clearOverlays = clearOverlays;
	
	
	// locals
	var usedOverlays = [];
	var unusedOverlays = [];
	
	
	function renderOverlay(rect, parent) {
		var e = unusedOverlays.shift();
		if (!e) {
			e = $("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>");
		}
		if (e[0].parentNode != parent[0]) {
			e.appendTo(parent);
		}
		usedOverlays.push(e.css(rect).show());
		return e;
	}
	

	function clearOverlays() {
		var e;
		while (e = usedOverlays.shift()) {
			unusedOverlays.push(e.hide().unbind());
		}
	}


}

function CoordinateGrid(buildFunc) {

	var t = this;
	var rows;
	var cols;
	
	
	t.build = function() {
		rows = [];
		cols = [];
		buildFunc(rows, cols);
	};
	
	
	t.cell = function(x, y) {
		var rowCnt = rows.length;
		var colCnt = cols.length;
		var i, r=-1, c=-1;
		for (i=0; i<rowCnt; i++) {
			if (y >= rows[i][0] && y < rows[i][1]) {
				r = i;
				break;
			}
		}
		for (i=0; i<colCnt; i++) {
			if (x >= cols[i][0] && x < cols[i][1]) {
				c = i;
				break;
			}
		}
		return (r>=0 && c>=0) ? { row:r, col:c } : null;
	};
	
	
	t.rect = function(row0, col0, row1, col1, originElement) { // row1,col1 is inclusive
		var origin = originElement.offset();
		return {
			top: rows[row0][0] - origin.top,
			left: cols[col0][0] - origin.left,
			width: cols[col1][1] - cols[col0][0],
			height: rows[row1][1] - rows[row0][0]
		};
	};

}

function HoverListener(coordinateGrid) {


	var t = this;
	var bindType;
	var change;
	var firstCell;
	var cell;
	
	
	t.start = function(_change, ev, _bindType) {
		change = _change;
		firstCell = cell = null;
		coordinateGrid.build();
		mouse(ev);
		bindType = _bindType || 'mousemove';
		$(document).bind(bindType, mouse);
	};
	
	
	function mouse(ev) {
		_fixUIEvent(ev); // see below
		var newCell = coordinateGrid.cell(ev.pageX, ev.pageY);
		if (!newCell != !cell || newCell && (newCell.row != cell.row || newCell.col != cell.col)) {
			if (newCell) {
				if (!firstCell) {
					firstCell = newCell;
				}
				change(newCell, firstCell, newCell.row-firstCell.row, newCell.col-firstCell.col);
			}else{
				change(newCell, firstCell);
			}
			cell = newCell;
		}
	}
	
	
	t.stop = function() {
		$(document).unbind(bindType, mouse);
		return cell;
	};
	
	
}



// this fix was only necessary for jQuery UI 1.8.16 (and jQuery 1.7 or 1.7.1)
// upgrading to jQuery UI 1.8.17 (and using either jQuery 1.7 or 1.7.1) fixed the problem
// but keep this in here for 1.8.16 users
// and maybe remove it down the line

function _fixUIEvent(event) { // for issue 1168
	if (event.pageX === undefined) {
		event.pageX = event.originalEvent.pageX;
		event.pageY = event.originalEvent.pageY;
	}
}
function HorizontalPositionCache(getElement) {

	var t = this,
		elements = {},
		lefts = {},
		rights = {};
		
	function e(i) {
		return elements[i] = elements[i] || getElement(i);
	}
	
	t.left = function(i) {
		return lefts[i] = lefts[i] === undefined ? e(i).position().left : lefts[i];
	};
	
	t.right = function(i) {
		return rights[i] = rights[i] === undefined ? t.left(i) + e(i).width() : rights[i];
	};
	
	t.clear = function() {
		elements = {};
		lefts = {};
		rights = {};
	};
	
}

})(jQuery);

;
/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;return!b.href||!g||f.nodeName.toLowerCase()!=="map"?!1:(h=a("img[usemap=#"+g+"]")[0],!!h&&d(h))}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.ui=a.ui||{};if(a.ui.version)return;a.extend(a.ui,{version:"1.8.23",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;return a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(c,d){function h(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)}),c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){return c===b?g["inner"+d].call(this):this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){return typeof b!="number"?g["outer"+d].call(this,b):this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));c.offsetHeight,a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.curCSS||(a.curCSS=a.css),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!d||!a.element[0].parentNode)return;for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;return b[d]>0?!0:(b[d]=1,e=b[d]>0,b[d]=0,e)},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}})})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.widget.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){return c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}}),d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;return e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e,f&&e.charAt(0)==="_"?h:(f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b)return h=f,!1}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))}),h)}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}return this._setOptions(e),this},_setOptions:function(b){var c=this;return a.each(b,function(a,b){c._setOption(a,b)}),this},_setOption:function(a,b){return this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.mouse.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=!1;a(document).mouseup(function(a){c=!1}),a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(b){if(c)return;this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which==1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted)return b.preventDefault(),!0}return!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0,!0},_mouseMove:function(b){return!a.browser.msie||document.documentMode>=9||!!b.button?this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted):this._mouseUp(b)},_mouseUp:function(b){return a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b)),!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.draggable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},destroy:function(){if(!this.element.data("draggable"))return;return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy(),this},_mouseCapture:function(b){var c=this.options;return this.helper||c.disabled||a(b.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(b),this.handle?(c.iframeFix&&a(c.iframeFix===!0?"iframe":c.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(a(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),c.containment&&this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_mouseDrag:function(b,c){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute");if(!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp({}),!1;this.position=d.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";return a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=!1;a.ui.ddmanager&&!this.options.dropBehaviour&&(c=a.ui.ddmanager.drop(this,b)),this.dropped&&(c=this.dropped,this.dropped=!1);var d=this.element[0],e=!1;while(d&&(d=d.parentNode))d==document&&(e=!0);if(!e&&this.options.helper==="original")return!1;if(this.options.revert=="invalid"&&!c||this.options.revert=="valid"&&c||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)){var f=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){f._trigger("stop",b)!==!1&&f._clear()})}else this._trigger("stop",b)!==!1&&this._clear();return!1},_mouseUp:function(b){return this.options.iframeFix===!0&&a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?!0:!1;return a(this.options.handle,this.element).find("*").andSelf().each(function(){this==b.target&&(c=!0)}),c},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b])):c.helper=="clone"?this.element.clone().removeAttr("id"):this.element;return d.parents("body").length||d.appendTo(c.appendTo=="parent"?this.element[0].parentNode:c.appendTo),d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute"),d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[b.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,b.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(b.containment=="document"?0:a(window).scrollLeft())+a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b.containment=="document"?0:a(window).scrollTop())+(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)&&b.containment.constructor!=Array){var c=a(b.containment),d=c[0];if(!d)return;var e=c.offset(),f=a(d).css("overflow")!="hidden";this.containment=[(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0),(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0),(f?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=c}else b.containment.constructor==Array&&(this.containment=b.containment)},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName),f=b.pageX,g=b.pageY;if(this.originalPosition){var h;if(this.containment){if(this.relative_container){var i=this.relative_container.offset();h=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]}else h=this.containment;b.pageX-this.offset.click.left<h[0]&&(f=h[0]+this.offset.click.left),b.pageY-this.offset.click.top<h[1]&&(g=h[1]+this.offset.click.top),b.pageX-this.offset.click.left>h[2]&&(f=h[2]+this.offset.click.left),b.pageY-this.offset.click.top>h[3]&&(g=h[3]+this.offset.click.top)}if(c.grid){var j=c.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1]:this.originalPageY;g=h?j-this.offset.click.top<h[1]||j-this.offset.click.top>h[3]?j-this.offset.click.top<h[1]?j+c.grid[1]:j-c.grid[1]:j:j;var k=c.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0]:this.originalPageX;f=h?k-this.offset.click.left<h[0]||k-this.offset.click.left>h[2]?k-this.offset.click.left<h[0]?k+c.grid[0]:k-c.grid[0]:k:k}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d]),b=="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(a){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.extend(a.ui.draggable,{version:"1.8.23"}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c){var d=a(this).data("draggable"),e=d.options,f=a.extend({},c,{item:d.element});d.sortables=[],a(e.connectToSortable).each(function(){var c=a.data(this,"sortable");c&&!c.options.disabled&&(d.sortables.push({instance:c,shouldRevert:c.options.revert}),c.refreshPositions(),c._trigger("activate",b,f))})},stop:function(b,c){var d=a(this).data("draggable"),e=a.extend({},c,{item:d.element});a.each(d.sortables,function(){this.instance.isOver?(this.instance.isOver=0,d.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(b),this.instance.options.helper=this.instance.options._helper,d.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",b,e))})},drag:function(b,c){var d=a(this).data("draggable"),e=this,f=function(b){var c=this.offset.click.top,d=this.offset.click.left,e=this.positionAbs.top,f=this.positionAbs.left,g=b.height,h=b.width,i=b.top,j=b.left;return a.ui.isOver(e+c,f+d,i,j,g,h)};a.each(d.sortables,function(f){this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this.instance._intersectsWith(this.instance.containerCache)?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return c.helper[0]},b.target=this.instance.currentItem[0],this.instance._mouseCapture(b,!0),this.instance._mouseStart(b,!0,!0),this.instance.offset.click.top=d.offset.click.top,this.instance.offset.click.left=d.offset.click.left,this.instance.offset.parent.left-=d.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=d.offset.parent.top-this.instance.offset.parent.top,d._trigger("toSortable",b),d.dropped=this.instance.element,d.currentItem=d.element,this.instance.fromOutside=d),this.instance.currentItem&&this.instance._mouseDrag(b)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",b,this.instance._uiHash(this.instance)),this.instance._mouseStop(b,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),d._trigger("fromSortable",b),d.dropped=!1)})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c){var d=a("body"),e=a(this).data("draggable").options;d.css("cursor")&&(e._cursor=d.css("cursor")),d.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;d._cursor&&a("body").css("cursor",d._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(b,c){var d=a(this).data("draggable");d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"&&(d.overflowOffset=d.scrollParent.offset())},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=!1;if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!e.axis||e.axis!="x")d.overflowOffset.top+d.scrollParent[0].offsetHeight-b.pageY<e.scrollSensitivity?d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop-e.scrollSpeed);if(!e.axis||e.axis!="y")d.overflowOffset.left+d.scrollParent[0].offsetWidth-b.pageX<e.scrollSensitivity?d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft-e.scrollSpeed)}else{if(!e.axis||e.axis!="x")b.pageY-a(document).scrollTop()<e.scrollSensitivity?f=a(document).scrollTop(a(document).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<e.scrollSensitivity&&(f=a(document).scrollTop(a(document).scrollTop()+e.scrollSpeed));if(!e.axis||e.axis!="y")b.pageX-a(document).scrollLeft()<e.scrollSensitivity?f=a(document).scrollLeft(a(document).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<e.scrollSensitivity&&(f=a(document).scrollLeft(a(document).scrollLeft()+e.scrollSpeed))}f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c){var d=a(this).data("draggable"),e=d.options;d.snapElements=[],a(e.snap.constructor!=String?e.snap.items||":data(draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!=d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=e.snapTolerance,g=c.offset.left,h=g+d.helperProportions.width,i=c.offset.top,j=i+d.helperProportions.height;for(var k=d.snapElements.length-1;k>=0;k--){var l=d.snapElements[k].left,m=l+d.snapElements[k].width,n=d.snapElements[k].top,o=n+d.snapElements[k].height;if(!(l-f<g&&g<m+f&&n-f<i&&i<o+f||l-f<g&&g<m+f&&n-f<j&&j<o+f||l-f<h&&h<m+f&&n-f<i&&i<o+f||l-f<h&&h<m+f&&n-f<j&&j<o+f)){d.snapElements[k].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=!1;continue}if(e.snapMode!="inner"){var p=Math.abs(n-j)<=f,q=Math.abs(o-i)<=f,r=Math.abs(l-h)<=f,s=Math.abs(m-g)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n-d.helperProportions.height,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l-d.helperProportions.width}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m}).left-d.margins.left)}var t=p||q||r||s;if(e.snapMode!="outer"){var p=Math.abs(n-i)<=f,q=Math.abs(o-j)<=f,r=Math.abs(l-g)<=f,s=Math.abs(m-h)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o-d.helperProportions.height,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m-d.helperProportions.width}).left-d.margins.left)}!d.snapElements[k].snapping&&(p||q||r||s||t)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=p||q||r||s||t}}}),a.ui.plugin.add("draggable","stack",{start:function(b,c){var d=a(this).data("draggable").options,e=a.makeArray(a(d.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});if(!e.length)return;var f=parseInt(e[0].style.zIndex)||0;a(e).each(function(a){this.style.zIndex=f+a}),this[0].style.zIndex=f+e.length}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("zIndex")&&(e._zIndex=d.css("zIndex")),d.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})})(jQuery);;/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.resizable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.resizable",a.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1e3},_create:function(){var b=this,c=this.options;this.element.addClass("ui-resizable"),a.extend(this,{_aspectRatio:!!c.aspectRatio,aspectRatio:c.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:c.helper||c.ghost||c.animate?c.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(a('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("resizable",this.element.data("resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=c.handles||(a(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se");if(this.handles.constructor==String){this.handles=="all"&&(this.handles="n,e,s,w,se,sw,ne,nw");var d=this.handles.split(",");this.handles={};for(var e=0;e<d.length;e++){var f=a.trim(d[e]),g="ui-resizable-"+f,h=a('<div class="ui-resizable-handle '+g+'"></div>');h.css({zIndex:c.zIndex}),"se"==f&&h.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[f]=".ui-resizable-"+f,this.element.append(h)}}this._renderAxis=function(b){b=b||this.element;for(var c in this.handles){this.handles[c].constructor==String&&(this.handles[c]=a(this.handles[c],this.element).show());if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var d=a(this.handles[c],this.element),e=0;e=/sw|ne|nw|se|n|s/.test(c)?d.outerHeight():d.outerWidth();var f=["padding",/ne|nw|n/.test(c)?"Top":/se|sw|s/.test(c)?"Bottom":/^e$/.test(c)?"Right":"Left"].join("");b.css(f,e),this._proportionallyResize()}if(!a(this.handles[c]).length)continue}},this._renderAxis(this.element),this._handles=a(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){if(!b.resizing){if(this.className)var a=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);b.axis=a&&a[1]?a[1]:"se"}}),c.autoHide&&(this._handles.hide(),a(this.element).addClass("ui-resizable-autohide").hover(function(){if(c.disabled)return;a(this).removeClass("ui-resizable-autohide"),b._handles.show()},function(){if(c.disabled)return;b.resizing||(a(this).addClass("ui-resizable-autohide"),b._handles.hide())})),this._mouseInit()},destroy:function(){this._mouseDestroy();var b=function(b){a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){b(this.element);var c=this.element;c.after(this.originalElement.css({position:c.css("position"),width:c.outerWidth(),height:c.outerHeight(),top:c.css("top"),left:c.css("left")})).remove()}return this.originalElement.css("resize",this.originalResizeStyle),b(this.originalElement),this},_mouseCapture:function(b){var c=!1;for(var d in this.handles)a(this.handles[d])[0]==b.target&&(c=!0);return!this.options.disabled&&c},_mouseStart:function(b){var d=this.options,e=this.element.position(),f=this.element;this.resizing=!0,this.documentScroll={top:a(document).scrollTop(),left:a(document).scrollLeft()},(f.is(".ui-draggable")||/absolute/.test(f.css("position")))&&f.css({position:"absolute",top:e.top,left:e.left}),this._renderProxy();var g=c(this.helper.css("left")),h=c(this.helper.css("top"));d.containment&&(g+=a(d.containment).scrollLeft()||0,h+=a(d.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:g,top:h},this.size=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()},this.originalSize=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()},this.originalPosition={left:g,top:h},this.sizeDiff={width:f.outerWidth()-f.width(),height:f.outerHeight()-f.height()},this.originalMousePosition={left:b.pageX,top:b.pageY},this.aspectRatio=typeof d.aspectRatio=="number"?d.aspectRatio:this.originalSize.width/this.originalSize.height||1;var i=a(".ui-resizable-"+this.axis).css("cursor");return a("body").css("cursor",i=="auto"?this.axis+"-resize":i),f.addClass("ui-resizable-resizing"),this._propagate("start",b),!0},_mouseDrag:function(b){var c=this.helper,d=this.options,e={},f=this,g=this.originalMousePosition,h=this.axis,i=b.pageX-g.left||0,j=b.pageY-g.top||0,k=this._change[h];if(!k)return!1;var l=k.apply(this,[b,i,j]),m=a.browser.msie&&a.browser.version<7,n=this.sizeDiff;this._updateVirtualBoundaries(b.shiftKey);if(this._aspectRatio||b.shiftKey)l=this._updateRatio(l,b);return l=this._respectSize(l,b),this._propagate("resize",b),c.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"}),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),this._updateCache(l),this._trigger("resize",b,this.ui()),!1},_mouseStop:function(b){this.resizing=!1;var c=this.options,d=this;if(this._helper){var e=this._proportionallyResizeElements,f=e.length&&/textarea/i.test(e[0].nodeName),g=f&&a.ui.hasScroll(e[0],"left")?0:d.sizeDiff.height,h=f?0:d.sizeDiff.width,i={width:d.helper.width()-h,height:d.helper.height()-g},j=parseInt(d.element.css("left"),10)+(d.position.left-d.originalPosition.left)||null,k=parseInt(d.element.css("top"),10)+(d.position.top-d.originalPosition.top)||null;c.animate||this.element.css(a.extend(i,{top:k,left:j})),d.helper.height(d.size.height),d.helper.width(d.size.width),this._helper&&!c.animate&&this._proportionallyResize()}return a("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",b),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(a){var b=this.options,c,e,f,g,h;h={minWidth:d(b.minWidth)?b.minWidth:0,maxWidth:d(b.maxWidth)?b.maxWidth:Infinity,minHeight:d(b.minHeight)?b.minHeight:0,maxHeight:d(b.maxHeight)?b.maxHeight:Infinity};if(this._aspectRatio||a)c=h.minHeight*this.aspectRatio,f=h.minWidth/this.aspectRatio,e=h.maxHeight*this.aspectRatio,g=h.maxWidth/this.aspectRatio,c>h.minWidth&&(h.minWidth=c),f>h.minHeight&&(h.minHeight=f),e<h.maxWidth&&(h.maxWidth=e),g<h.maxHeight&&(h.maxHeight=g);this._vBoundaries=h},_updateCache:function(a){var b=this.options;this.offset=this.helper.offset(),d(a.left)&&(this.position.left=a.left),d(a.top)&&(this.position.top=a.top),d(a.height)&&(this.size.height=a.height),d(a.width)&&(this.size.width=a.width)},_updateRatio:function(a,b){var c=this.options,e=this.position,f=this.size,g=this.axis;return d(a.height)?a.width=a.height*this.aspectRatio:d(a.width)&&(a.height=a.width/this.aspectRatio),g=="sw"&&(a.left=e.left+(f.width-a.width),a.top=null),g=="nw"&&(a.top=e.top+(f.height-a.height),a.left=e.left+(f.width-a.width)),a},_respectSize:function(a,b){var c=this.helper,e=this._vBoundaries,f=this._aspectRatio||b.shiftKey,g=this.axis,h=d(a.width)&&e.maxWidth&&e.maxWidth<a.width,i=d(a.height)&&e.maxHeight&&e.maxHeight<a.height,j=d(a.width)&&e.minWidth&&e.minWidth>a.width,k=d(a.height)&&e.minHeight&&e.minHeight>a.height;j&&(a.width=e.minWidth),k&&(a.height=e.minHeight),h&&(a.width=e.maxWidth),i&&(a.height=e.maxHeight);var l=this.originalPosition.left+this.originalSize.width,m=this.position.top+this.size.height,n=/sw|nw|w/.test(g),o=/nw|ne|n/.test(g);j&&n&&(a.left=l-e.minWidth),h&&n&&(a.left=l-e.maxWidth),k&&o&&(a.top=m-e.minHeight),i&&o&&(a.top=m-e.maxHeight);var p=!a.width&&!a.height;return p&&!a.left&&a.top?a.top=null:p&&!a.top&&a.left&&(a.left=null),a},_proportionallyResize:function(){var b=this.options;if(!this._proportionallyResizeElements.length)return;var c=this.helper||this.element;for(var d=0;d<this._proportionallyResizeElements.length;d++){var e=this._proportionallyResizeElements[d];if(!this.borderDif){var f=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],g=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];this.borderDif=a.map(f,function(a,b){var c=parseInt(a,10)||0,d=parseInt(g[b],10)||0;return c+d})}if(!a.browser.msie||!a(c).is(":hidden")&&!a(c).parents(":hidden").length)e.css({height:c.height()-this.borderDif[0]-this.borderDif[2]||0,width:c.width()-this.borderDif[1]-this.borderDif[3]||0});else continue}},_renderProxy:function(){var b=this.element,c=this.options;this.elementOffset=b.offset();if(this._helper){this.helper=this.helper||a('<div style="overflow:hidden;"></div>');var d=a.browser.msie&&a.browser.version<7,e=d?1:0,f=d?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+f,height:this.element.outerHeight()+f,position:"absolute",left:this.elementOffset.left-e+"px",top:this.elementOffset.top-e+"px",zIndex:++c.zIndex}),this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(a,b,c){return{width:this.originalSize.width+b}},w:function(a,b,c){var d=this.options,e=this.originalSize,f=this.originalPosition;return{left:f.left+b,width:e.width-b}},n:function(a,b,c){var d=this.options,e=this.originalSize,f=this.originalPosition;return{top:f.top+c,height:e.height-c}},s:function(a,b,c){return{height:this.originalSize.height+c}},se:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},sw:function(b,c,d){return a.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,c,d]))},ne:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,c,d]))},nw:function(b,c,d){return a.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,c,d]))}},_propagate:function(b,c){a.ui.plugin.call(this,b,[c,this.ui()]),b!="resize"&&this._trigger(b,c,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),a.extend(a.ui.resizable,{version:"1.8.23"}),a.ui.plugin.add("resizable","alsoResize",{start:function(b,c){var d=a(this).data("resizable"),e=d.options,f=function(b){a(b).each(function(){var b=a(this);b.data("resizable-alsoresize",{width:parseInt(b.width(),10),height:parseInt(b.height(),10),left:parseInt(b.css("left"),10),top:parseInt(b.css("top"),10)})})};typeof e.alsoResize=="object"&&!e.alsoResize.parentNode?e.alsoResize.length?(e.alsoResize=e.alsoResize[0],f(e.alsoResize)):a.each(e.alsoResize,function(a){f(a)}):f(e.alsoResize)},resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.originalSize,g=d.originalPosition,h={height:d.size.height-f.height||0,width:d.size.width-f.width||0,top:d.position.top-g.top||0,left:d.position.left-g.left||0},i=function(b,d){a(b).each(function(){var b=a(this),e=a(this).data("resizable-alsoresize"),f={},g=d&&d.length?d:b.parents(c.originalElement[0]).length?["width","height"]:["width","height","top","left"];a.each(g,function(a,b){var c=(e[b]||0)+(h[b]||0);c&&c>=0&&(f[b]=c||null)}),b.css(f)})};typeof e.alsoResize=="object"&&!e.alsoResize.nodeType?a.each(e.alsoResize,function(a,b){i(a,b)}):i(e.alsoResize)},stop:function(b,c){a(this).removeData("resizable-alsoresize")}}),a.ui.plugin.add("resizable","animate",{stop:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d._proportionallyResizeElements,g=f.length&&/textarea/i.test(f[0].nodeName),h=g&&a.ui.hasScroll(f[0],"left")?0:d.sizeDiff.height,i=g?0:d.sizeDiff.width,j={width:d.size.width-i,height:d.size.height-h},k=parseInt(d.element.css("left"),10)+(d.position.left-d.originalPosition.left)||null,l=parseInt(d.element.css("top"),10)+(d.position.top-d.originalPosition.top)||null;d.element.animate(a.extend(j,l&&k?{top:l,left:k}:{}),{duration:e.animateDuration,easing:e.animateEasing,step:function(){var c={width:parseInt(d.element.css("width"),10),height:parseInt(d.element.css("height"),10),top:parseInt(d.element.css("top"),10),left:parseInt(d.element.css("left"),10)};f&&f.length&&a(f[0]).css({width:c.width,height:c.height}),d._updateCache(c),d._propagate("resize",b)}})}}),a.ui.plugin.add("resizable","containment",{start:function(b,d){var e=a(this).data("resizable"),f=e.options,g=e.element,h=f.containment,i=h instanceof a?h.get(0):/parent/.test(h)?g.parent().get(0):h;if(!i)return;e.containerElement=a(i);if(/document/.test(h)||h==document)e.containerOffset={left:0,top:0},e.containerPosition={left:0,top:0},e.parentData={element:a(document),left:0,top:0,width:a(document).width(),height:a(document).height()||document.body.parentNode.scrollHeight};else{var j=a(i),k=[];a(["Top","Right","Left","Bottom"]).each(function(a,b){k[a]=c(j.css("padding"+b))}),e.containerOffset=j.offset(),e.containerPosition=j.position(),e.containerSize={height:j.innerHeight()-k[3],width:j.innerWidth()-k[1]};var l=e.containerOffset,m=e.containerSize.height,n=e.containerSize.width,o=a.ui.hasScroll(i,"left")?i.scrollWidth:n,p=a.ui.hasScroll(i)?i.scrollHeight:m;e.parentData={element:i,left:l.left,top:l.top,width:o,height:p}}},resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.containerSize,g=d.containerOffset,h=d.size,i=d.position,j=d._aspectRatio||b.shiftKey,k={top:0,left:0},l=d.containerElement;l[0]!=document&&/static/.test(l.css("position"))&&(k=g),i.left<(d._helper?g.left:0)&&(d.size.width=d.size.width+(d._helper?d.position.left-g.left:d.position.left-k.left),j&&(d.size.height=d.size.width/d.aspectRatio),d.position.left=e.helper?g.left:0),i.top<(d._helper?g.top:0)&&(d.size.height=d.size.height+(d._helper?d.position.top-g.top:d.position.top),j&&(d.size.width=d.size.height*d.aspectRatio),d.position.top=d._helper?g.top:0),d.offset.left=d.parentData.left+d.position.left,d.offset.top=d.parentData.top+d.position.top;var m=Math.abs((d._helper?d.offset.left-k.left:d.offset.left-k.left)+d.sizeDiff.width),n=Math.abs((d._helper?d.offset.top-k.top:d.offset.top-g.top)+d.sizeDiff.height),o=d.containerElement.get(0)==d.element.parent().get(0),p=/relative|absolute/.test(d.containerElement.css("position"));o&&p&&(m-=d.parentData.left),m+d.size.width>=d.parentData.width&&(d.size.width=d.parentData.width-m,j&&(d.size.height=d.size.width/d.aspectRatio)),n+d.size.height>=d.parentData.height&&(d.size.height=d.parentData.height-n,j&&(d.size.width=d.size.height*d.aspectRatio))},stop:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.position,g=d.containerOffset,h=d.containerPosition,i=d.containerElement,j=a(d.helper),k=j.offset(),l=j.outerWidth()-d.sizeDiff.width,m=j.outerHeight()-d.sizeDiff.height;d._helper&&!e.animate&&/relative/.test(i.css("position"))&&a(this).css({left:k.left-h.left-g.left,width:l,height:m}),d._helper&&!e.animate&&/static/.test(i.css("position"))&&a(this).css({left:k.left-h.left-g.left,width:l,height:m})}}),a.ui.plugin.add("resizable","ghost",{start:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.size;d.ghost=d.originalElement.clone(),d.ghost.css({opacity:.25,display:"block",position:"relative",height:f.height,width:f.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof e.ghost=="string"?e.ghost:""),d.ghost.appendTo(d.helper)},resize:function(b,c){var d=a(this).data("resizable"),e=d.options;d.ghost&&d.ghost.css({position:"relative",height:d.size.height,width:d.size.width})},stop:function(b,c){var d=a(this).data("resizable"),e=d.options;d.ghost&&d.helper&&d.helper.get(0).removeChild(d.ghost.get(0))}}),a.ui.plugin.add("resizable","grid",{resize:function(b,c){var d=a(this).data("resizable"),e=d.options,f=d.size,g=d.originalSize,h=d.originalPosition,i=d.axis,j=e._aspectRatio||b.shiftKey;e.grid=typeof e.grid=="number"?[e.grid,e.grid]:e.grid;var k=Math.round((f.width-g.width)/(e.grid[0]||1))*(e.grid[0]||1),l=Math.round((f.height-g.height)/(e.grid[1]||1))*(e.grid[1]||1);/^(se|s|e)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l):/^(ne)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l,d.position.top=h.top-l):/^(sw)$/.test(i)?(d.size.width=g.width+k,d.size.height=g.height+l,d.position.left=h.left-k):(d.size.width=g.width+k,d.size.height=g.height+l,d.position.top=h.top-l,d.position.left=h.left-k)}});var c=function(a){return parseInt(a,10)||0},d=function(a){return!isNaN(parseInt(a,10))}})(jQuery);;
;
/**
 * @depends path=/plugins/msoe-event-type-plugin/resources/script/fullcalendar.js
 * @depends path=/plugins/msoe-event-type-plugin/resources/script/jquery-ui-1.8.23.custom.min.js
 */
jive.namespace('EventCalendarApp');

jive.EventCalendarApp.CalendarView = jive.oo.Class.extend(function(protect) {
    jive.conc.observable(this);
    
    this.init = function(options) {
        var view = this;
        this.userID = options.userID;
        this.containerID = options.containerID;
        this.containerType = options.containerType;
        this.recursive = options.recursive;
        this.monthDayFormat = options.monthDayFormat;
        this.canCreateEvents = options.canCreateEvents;
        this.i18n = options.i18n;
        
        if(this.userID) {
            this.url = jive.rest.url('/calendar/user/' + view.userID);
        } else {
            this.url = jive.rest.url('/calendar/' + view.containerType + '/' + view.containerID);
        } 
        
        this.showCalendar();
    }
    
    this.showCalendar = function() {
        var view = this;
        
        $j(document).ready(function(){
            $j('#event-calendar').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                weekMode: 'liquid',
                editable: view.canCreateEvents,
                eventDrop: view.eventDropped.bind(view),
                eventResize: view.eventResized.bind(view),
                events: {
                    url: view.url,
                    type: 'GET',
                    data: {
                        recursive: view.recursive
                    },
                    error: function () {
                        alert('Something bad happened.');
                    }
                },
                
                columnFormat: {
                    week: 'ddd' + view.monthDayFormat,
                    day: 'dddd' + view.monthDayFormat
                },
                buttonText: {
                    today: view.i18n.buttons.today,
                    month: view.i18n.buttons.month,
                    week: view.i18n.buttons.week,
                    day: view.i18n.buttons.day
                },
                monthNames: [view.i18n.months.january,
                             view.i18n.months.feburary,
                             view.i18n.months.march,
                             view.i18n.months.april,
                             view.i18n.months.may,
                             view.i18n.months.june,
                             view.i18n.months.july,
                             view.i18n.months.august,
                             view.i18n.months.september,
                             view.i18n.months.october,
                             view.i18n.months.november,
                             view.i18n.months.december],
                monthNamesShort: [view.i18n.monthsShort.january,
                                  view.i18n.monthsShort.february,
                                  view.i18n.monthsShort.march,
                                  view.i18n.monthsShort.april,
                                  view.i18n.monthsShort.may,
                                  view.i18n.monthsShort.june,
                                  view.i18n.monthsShort.july,
                                  view.i18n.monthsShort.august,
                                  view.i18n.monthsShort.september,
                                  view.i18n.monthsShort.october,
                                  view.i18n.monthsShort.november,
                                  view.i18n.monthsShort.december],
                dayNames: [view.i18n.days.sunday,
                           view.i18n.days.monday,
                           view.i18n.days.tuesday,
                           view.i18n.days.wednesday,
                           view.i18n.days.thursday,
                           view.i18n.days.friday,
                           view.i18n.days.saturday],
                dayNamesShort: [view.i18n.daysShort.sunday,
                                view.i18n.daysShort.monday,
                                view.i18n.daysShort.tuesday,
                                view.i18n.daysShort.wednesday,
                                view.i18n.daysShort.thursday,
                                view.i18n.daysShort.friday,
                                view.i18n.daysShort.saturday]
                             
            });
        });
    };
    
    this.eventDropped = function( event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, calendar_view ) {
        if(!event.allDay && calendar_view.name == 'month') {
            this.showMoveConfirmation(event, dayDelta, minuteDelta, revertFunc);
        } else {
            this.reschedule(event, dayDelta, minuteDelta, allDay, revertFunc);
        }
    };
    
    this.showMoveConfirmation = function(event, dayDelta, minuteDelta, revertFunc) {
        var view = this;
        $j(jive.event.calendar.moveConfirmation()).lightbox_me({
            destroyOnClose: true,
            closeClick: false,
            closeEsc: false,
            onLoad: function() {
                $j('#event-calendar-confirm-fullday').click( function() {
                    view.rescheduleAsAllDay(event, dayDelta, minuteDelta, revertFunc);
                });
                
                $j('#event-calendar-confirm-asis').click(function () {
                    view.rescheduleAsIs(event, dayDelta, minuteDelta, revertFunc);
                });
                
                $j('#event-calendar-confirm-cancel').click(function () {
                    revertFunc();
                });
            }
        });
    };

    this.eventResized = function( event, dayDelta, minuteDelta, revertFunc, jsEvent, ui, calendar_view ) {
        if(!event.allDay && calendar_view.name == 'month') {
            this.showResizeConfirmation(event, dayDelta, minuteDelta, revertFunc);
        } else {
            this.resize(event, dayDelta, minuteDelta, event.allDay, revertFunc);
        }
    };
    
    this.showResizeConfirmation = function(event, dayDelta, minuteDelta, revertFunc) {
        var view = this;
        $j(jive.event.calendar.resizeConfirmation()).lightbox_me({
            destroyOnClose: true,
            closeClick: false,
            closeEsc: false,
            onLoad: function() {
                $j('#event-calendar-confirm-continue').click(function() {
                    view.resize(event, dayDelta, minuteDelta, true, revertFunc);
                });
                
                $j('#event-calendar-confirm-cancel').click(function() {
                    revertFunc();
                });
            }
        });
    };
    
    this.rescheduleAsAllDay = function(event, dayDelta, minuteDelta, revertFunc) {
        this.reschedule(event, dayDelta, minuteDelta, true, revertFunc);
    };
    
    this.rescheduleAsIs = function(event, dayDelta, minuteDelta, revertFunc) {
        this.reschedule(event, dayDelta, minuteDelta, false, revertFunc);
    }
            
    this.reschedule = function(event, dayDelta, minuteDelta, allDay, revertFunc) {
        this.saveEvent(event, dayDelta, minuteDelta, allDay, 'drop', revertFunc);
    }

    this.resize = function(event, dayDelta, minuteDelta, allDay, revertFunc) {
        this.saveEvent(event, dayDelta, minuteDelta, allDay, 'resize', revertFunc);
    }
    
    this.saveEvent = function saveEvent(event, dayDelta, minuteDelta, allDay, action, revertFunc) {
        var view = this;
        var data = new Object();
        data.dayDelta = dayDelta;
        data.minuteDelta = minuteDelta;
        data.allDay = allDay;
        data.action = action;
        
        view.emitP('saveEvent', event.id, data) 
        .addCallback(function() {
            event.allDay = allDay;
            $j('#event-calendar').fullCalendar('render');
        })
        .addErrback(function(message, code) {
            revertFunc();
        });
    };
});

;
/**
 * @depends path=/plugins/msoe-event-type-plugin/resources/script/apps/eventCalendar/models/calendar_source.js
 * @depends path=/plugins/msoe-event-type-plugin/resources/script/apps/eventCalendar/views/calendar_view.js
 */
jive.namespace('EventCalendarApp');

jive.EventCalendarApp.Main = jive.oo.Class.extend(function(protect) {
    this.init = function(options) {
        var main = this;
        
        this.calendarSource = new jive.EventCalendarApp.CalendarSource(options);
        this.calendarView = new jive.EventCalendarApp.CalendarView(options);
        this.options = options;
        
        this.calendarView.addListener('saveEvent', function(eventID, data, promise) {
            main.calendarSource.save(eventID, data)
            .addCallback(function(data) {
                promise.emitSuccess(data);
            })
            .addErrback(function(error, status) {
                promise.emitError(error, status);
            });
        });
    };
}); 

;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.event=="undefined"){jive.event={}}if(typeof jive.event.calendar=="undefined"){jive.event.calendar={}}jive.event.calendar.display=function(A,C){var B=C||new soy.StringBuilder();if(A.size=="LARGE"){jive.event.calendar.large(A,B)}else{jive.event.calendar.small(A,B)}return C?"":B.toString()};jive.event.calendar.profile=function(A,C){var B=C||new soy.StringBuilder();jive.event.calendar.large({userID:A.userID,recursive:false,monthDayFormat:A.monthDayFormat,canCreateEvents:A.canCreateEvents},B);return C?"":B.toString()};jive.event.calendar.small=function(A,C){var B=C||new soy.StringBuilder();jive.shared.soy.resourceInlineJs({code:"$j(document).ready(function() {$j.ajax({url: 'get-monthly-events-list.jspa', data: {container: '"+soy.$$escapeHtml(A.containerID)+"', containerType: '"+soy.$$escapeHtml(A.containerType)+"', recursive: '"+soy.$$escapeHtml(A.recursive)+"'}, success: function(data) {$j('#event-list-"+soy.$$escapeHtml(A.widgetID)+"').html(data);}});});"},B);B.append('<div id="event-list-',soy.$$escapeHtml(A.widgetID),'"></div>');return C?"":B.toString()};jive.event.calendar.large=function(A,C){var B=C||new soy.StringBuilder();B.append('<link rel="stylesheet" type="text/css" href="',soy.$$escapeHtml(jive.soy.func.resourceUrl(window._jive_base_url,"/6.0.2.0/","","plugins/msoe-event-type-plugin/resources/styles/fullcalendar.css")),'" />');jive.shared.soy.resourceInlineJs({code:"$j(document).ready(function() {var calendar = new jive.EventCalendarApp.Main({"+((A.userID)?"userID: "+soy.$$escapeHtml(A.userID)+",":"containerID: "+soy.$$escapeHtml(A.containerID)+", containerType: "+soy.$$escapeHtml(A.containerType)+",")+"recursive: "+soy.$$escapeHtml(A.recursive)+", monthDayFormat: '"+soy.$$escapeHtml(A.monthDayFormat)+"', canCreateEvents: "+soy.$$escapeHtml(A.canCreateEvents)+", i18n: {buttons: {today: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.buttons.today.text"),[]))+"', month: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.buttons.month.text"),[]))+"', week: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.buttons.week.text"),[]))+"', day: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.buttons.day.text"),[]))+"'}, months: {january: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.months.january.text"),[]))+"', february: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.months.february.text"),[]))+"', march: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.months.march.text"),[]))+"', april: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.months.april.text"),[]))+"', may: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.months.may.text"),[]))+"', june: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.months.june.text"),[]))+"', july: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.months.july.text"),[]))+"', august: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.months.august.text"),[]))+"', september: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.months.september.text"),[]))+"', october: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.months.october.text"),[]))+"', november: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.months.november.text"),[]))+"', december: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.months.december.text"),[]))+"'}, monthsShort: {january: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.months.short.january.text"),[]))+"', february: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.months.short.february.text"),[]))+"', march: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.months.short.march.text"),[]))+"', april: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.months.short.april.text"),[]))+"', may: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.months.short.may.text"),[]))+"', june: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.months.short.june.text"),[]))+"', july: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.months.short.july.text"),[]))+"', august: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.months.short.august.text"),[]))+"', september: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.months.short.september.text"),[]))+"', october: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.months.short.october.text"),[]))+"', november: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.months.short.november.text"),[]))+"', december: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.months.short.december.text"),[]))+"'}, days: {sunday: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.days.sunday.text"),[]))+"', monday: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.days.monday.text"),[]))+"', tuesday: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.days.tuesday.text"),[]))+"', wednesday: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.days.wednesday.text"),[]))+"', thursday: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.days.thursday.text"),[]))+"', friday: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.days.friday.text"),[]))+"', saturday: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.days.saturday.text"),[]))+"'}, daysShort: {sunday: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.days.short.sunday.text"),[]))+"', monday: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.days.short.monday.text"),[]))+"', tuesday: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.days.short.tuesday.text"),[]))+"', wednesday: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.days.short.wednesday.text"),[]))+"', thursday: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.days.short.thursday.text"),[]))+"', friday: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.days.short.friday.text"),[]))+"', saturday: '"+soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.days.short.saturday.text"),[]))+"'}}});});"},B);B.append('<div id="event-calendar"></div>');return C?"":B.toString()};jive.event.calendar.moveConfirmation=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="jive-modal j-modal" id="event-calendar-confirm"><header><h2>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.confirm_reschedule.title"),[])),'</h2></header><section class="jive-modal-content clearfix"><p>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.confirm_reschedule.text"),[])),'<p><ul><li><a id="event-calendar-confirm-fullday" class="close" href="#">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.confirm_reschedule.fullday.link"),[])),'</a></li><li><a id="event-calendar-confirm-asis" class="close" href="#">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.confirm_reschedule.asis.link"),[])),'</a></li><li><a id="event-calendar-confirm-cancel" class="close" href="#">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.cancel"),[])),"</a></li></ul></section></div>");return C?"":B.toString()};jive.event.calendar.resizeConfirmation=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="jive-modal j-modal" id="event-calendar-confirm"><header><h2>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.confirm_resize.title"),[])),'</h2></header><section class="jive-modal-content clearfix"><p>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.calendar.confirm_resize.text"),[])),'<p><ul><li><a id="event-calendar-confirm-continue" class="close" href="#">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.yes"),[])),'</a></li><li><a id="event-calendar-confirm-cancel" class="close" href="#">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.no"),[])),"</a></li></ul></section></div>");return C?"":B.toString()};jive.event.calendar.place=function(A,C){var B=C||new soy.StringBuilder();B.append("<head>");jive.place.head(A,B);B.append('</head><body class="j-body-place">');jive.place.header(A,B);B.append('<div class="j-layout j-layout-l j-contained j-contained-tabs j-contained-tabs-place j-rc4 clearfix"><div class="j-column-wrap-l"><div class="j-column j-column-l">');jive.event.calendar.large(A,B);B.append("</div></div></div></body>");return C?"":B.toString()};jive.event.calendar.profileCalendarLink=function(A,C){var B=C||new soy.StringBuilder();B.append('<a href="',soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"/profile-calendar.jspa")),"?userID=",soy.$$escapeHtml(A.userID),'" id="navCalendar" class="j-refind-btn" title="',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("profile.tab.calendar"),[])),'">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("profile.tab.calendar"),[])),"</a>");return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.event=="undefined"){jive.event={}}if(typeof jive.event.invite=="undefined"){jive.event.invite={}}jive.event.invite.inviteUsers=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="jive-modal j-modal" id="jive-modal-invite"><header><h2>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.invite.title"),[])),'</h2></header><a href="#" class="j-modal-close-top close">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close"),[])),' <span class="j-close-icon j-ui-elem"></span></a><section class="jive-modal-content clearfix"><div id="invite-error" class="jive-error-box" style="display:none" ></div><form class="j-form">',(A["private"])?'<p class="j-info"><span class="j-info-icon j-ui-elem"></span>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("invite.private.access"),[]))+"</p>":"",'<p class="ie-zindex-fix"><label for="invite-users">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.invite.people.label"),[])),'<strong class="required"> ',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.required.parens"),[])),'</strong></label><input type="text" name="invite-users" id="invite-users" class="j-user-autocomplete j-autocomplete-input jive-chooser-input jive-form-element-text j-ui-elem" autocomplete="on"/></p><p><label for="jive-invite-not-message">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.invite.message.label"),[])),'<strong class="required"> ',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.required.parens"),[])),'</strong></label><textarea name="message" class="jive-form-element-textarea" id="jive-invite-not-message">',soy.$$escapeHtml(A.message),'</textarea></p><p><input type="submit" name="invite-submit" class="j-btn-callout" value="',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.invite.submit.button"),[])),'" /><button type="button" class="close">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.cancel"),[])),"</button></p></form></section></div>");return C?"":B.toString()};jive.event.invite.inviteConfirmation=function(A,C){var B=C||new soy.StringBuilder();B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.invite.confirm"),[])));return C?"":B.toString()};jive.event.invite.usersWithoutPermission=function(A,C){var B=C||new soy.StringBuilder();B.append('<p class="j-warn"><span class="jive-icon-sml jive-icon-warn"></span>',(A["private"])?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.invite.nopermission.private"),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("event.invite.nopermission.noattachment"),[])),"</p>");return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.notificationqueue=="undefined"){jive.eae.notificationqueue={}}if(typeof jive.eae.notificationqueue.item=="undefined"){jive.eae.notificationqueue.item={}}jive.eae.notificationqueue.item.eventUpdateNotification=function(A,G){var B=G||new soy.StringBuilder();B.append('<div class="j-aq-av clearfix"><div class="j-actionQ-item-data event-update clearfix"><h4 class="j-aq-header font-color-meta"><span class="jive-icon-med jive-icon-gear"></span>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.notification.event_update.label"),[])),'</h4><p><a href="',jive.soy.func.normalizeUrl(window._jive_base_url,A.data.objData.href),'" class="title">');if(A.data.objData.iconElement){jive.shared.displayutil.renderIconElement({icon:A.data.objData.iconElement},B)}else{B.append('<span class="',soy.$$escapeHtml(A.data.objData.iconCSS),'"></span>')}B.append(soy.$$escapeHtml(A.data.objData.displayName),"</a> ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.notification.event_update.text"),[])),'</p><div class="j-aq-actions clearfix">');var D=A.data.actions;var E=D.length;for(var F=0;F<E;F++){var C=D[F];jive.eae.actionqueue.actionQueueItemAction({action:C},B)}B.append("</div></div></div>");return G?"":B.toString()};jive.eae.notificationqueue.item.eventDeleteNotification=function(A,G){var B=G||new soy.StringBuilder();B.append('<div class="j-aq-av clearfix"><h4 class="j-aq-header font-color-meta"><span class="jive-icon-med jive-icon-gear"></span>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.notification.event_delete.label"),[])),"</h4><p>");if(A.data.objData.iconElement){jive.shared.displayutil.renderIconElement({icon:A.data.objData.iconElement},B)}else{B.append('<span class="',soy.$$escapeHtml(A.data.objData.iconCSS),'"></span>')}B.append(soy.$$escapeHtml(A.data.objData.displayName)," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.notification.event_delete.text"),[])),'</p><div class="j-aq-actions clearfix">');var D=A.data.actions;var E=D.length;for(var F=0;F<E;F++){var C=D[F];jive.eae.actionqueue.actionQueueItemAction({action:C},B)}B.append("</div></div>");return G?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.socialnews=="undefined"){jive.eae.socialnews={}}if(typeof jive.eae.socialnews.item=="undefined"){jive.eae.socialnews.item={}}jive.eae.socialnews.item.event=function(A,C){var B=C||new soy.StringBuilder();if(A.fromTemplate=="grouped_social_news"){jive.shared.displayutil.userDisplayNameLink(A.activity.activityUser,B);B.append(' is attending <a href="',jive.soy.func.normalizeUrl(window._jive_base_url,A.activity.content.jiveObjectURL),'"><span class="jive-icon med ',soy.$$escapeHtml(A.activity.content.jiveObjectCSS),'"></span><span class="j-item">',A.activity.content.subject,"</span></a>")}return C?"":B.toString()}
;
(function($) {

	$.summitsCustomTags = function(element, options) {
		
		var defaults = {
			activeClass: 'is-active',
			caseSensitive: false,
			container: $('#summits-custom-tags'),
			tagInput: '#js-publishbar-tag-input'
		};

		var plugin = this;
		plugin.settings = {};

		plugin.init = function() {
			
			plugin.settings = $.extend({}, defaults, options);
			checkTags();

			var tagInput = $(plugin.settings.tagInput);
			tagInput.keyup(checkTags);
			$('a', plugin.settings.container).click(function(e){
				clickedTag($(this).data('status'));
				e.preventDefault();
			});
		};

		var checkTags = function() {
			var tagInput = $(plugin.settings.tagInput);
			var statusList = $('a', plugin.settings.container);
			$('a.' + plugin.settings.activeClass, plugin.settings.container).removeClass(plugin.settings.activeClass);

			statusList.each(function(){
				var tag = $(this).data('status');
				var values = tagInput.val();

				var compareValues = values;
				var compareTag = tag;

				if(!plugin.settings.caseSensitive){
					compareValues = compareValues.toLowerCase();
					compareTag = compareTag.toLowerCase();
				}

				if(compareValues.indexOf(compareTag) > -1){
					$(this).addClass(plugin.settings.activeClass);
				}

			});
		};

		var clickedTag = function(tag){
			var tagInput = $(plugin.settings.tagInput);
			var newValue = '';
			var inputValue = tagInput.val();
			if(inputValue.indexOf(tag) > -1){
				newValue = inputValue.replace(tag, '');
			} else {
				newValue = inputValue + ' ' + tag;
			}
			newValue = newValue.replace('  ', ' ');
			tagInput.val(newValue);
			checkTags();
		};

		plugin.init();

	};

	$.fn.summitsCustomTags = function(options) {

		return this.each(function() {
			if (undefined === $(this).data('summitsCustomTags')) {
				var plugin = new $.summitsCustomTags(this, options);
				$(this).data('summitsCustomTags', plugin);
			}
		});

	};

})(jQuery);
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.events=="undefined"){jive.events={}}if(typeof jive.events.msoe=="undefined"){jive.events.msoe={}}jive.events.msoe.availableEventCategories=function(A,G){var D=G||new soy.StringBuilder();D.append('<div class="jive-msoe-event-categories"><div id="summits-custom-tags">');var C=A.eventCategories;var F=C.length;for(var E=0;E<F;E++){var B=C[E];D.append('<a data-status="',soy.$$escapeHtml(B.contentTag),'" href="#" class="msoe-event-category ',(B.selected==true)?"is-active":"",'">',soy.$$escapeHtml(B.description),"</a>")}D.append("</div>");jive.shared.soy.resourceInlineJs({code:"$j(document).ready(function() {$j('#js-publishbar-tag-input').summitsCustomTags({activeClass: 'is-active', caseSensitive: false, container: $j('#summits-custom-tags'), tagInput: '#js-publishbar-tag-input'});});"},D);D.append("</div>");return G?"":D.toString()}
;
//-------------------------------------------------------------------------------------
// Calendar functions for generating the month calendar on demand
//-------------------------------------------------------------------------------------

// these are labels for the days of the week
cal_days_labels = ['Su', 'M', 'T', 'W', 'Th', 'F', 'Sa'];

// these are human-readable month name labels, in order
cal_months_labels = ['January', 'February', 'March', 'April',
					 'May', 'June', 'July', 'August', 'September',
					 'October', 'November', 'December'];

// these are the days of the week for each month, in order
cal_days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// this is the current date
cal_current_date = new Date(); 

function Calendar(month, year) {
	this.month = (isNaN(month) || month == null) ? cal_current_date.getMonth() : month;
	this.year  = (isNaN(year) || year == null) ? cal_current_date.getFullYear() : year;
	this.html = '';
}

Calendar.prototype.generateHTML = function(){

	// get first day of month
	var firstDay = new Date(this.year, this.month, 1);
	var startingDay = firstDay.getDay();

	// find number of days in month
	var monthLength = cal_days_in_month[this.month];

	// compensate for leap year
	if (this.month == 1) { // February only!
		if((this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0){
			monthLength = 29;
		}
	}

	// do the header
	var monthName = cal_months_labels[this.month];
	var html = '<table class="calendar-table">';
		// html += '<tr><th colspan="7">';
		// html +=  monthName + "&nbsp;" + this.year;
		// html += '</th></tr>';
		html += '<tr class="calendar-header">';
		for(var i = 0; i <= 6; i++ ){
			html += '<td class="calendar-header-day">';
			html += cal_days_labels[i];
			html += '</td>';
		}
		html += '</tr><tr>';

	// figure out month number
	var monthNum = this.month + 1;

	// fill in the days
	var day = 1;
	// this loop is for is weeks (rows)
	for (var i = 0; i < 9; i++) {
		// this loop is for weekdays (cells)
		for (var j = 0; j <= 6; j++) { 
			html += '<td class="calendar-day">';
			if (day <= monthLength && (i > 0 || j >= startingDay)) {
				if ( day < 10 ) { dayNum = '0' + day; } else { dayNum = day; }
				html += '<a href="#' + this.year + '-' + monthNum + '-' + dayNum + '" class="day' + dayNum + '" data-day="' + dayNum + '">';
				html += day;
				day++;
				html += '<span class="dot"></span></a>';
			}
			html += '</td>';
		}
		// stop making rows if we've run out of days
		if (day > monthLength) {
			break;
		} else {
			html += '</tr><tr>';
		}
	}
	html += '</tr></table>';

	this.html = html;
}

Calendar.prototype.getHTML = function() {
	return this.html;
}


//-------------------------------------------------------------------------------------
// Cookie functions used for recalling and setting active categories
//-------------------------------------------------------------------------------------

function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = escape(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return unescape(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}


//-------------------------------------------------------------------------------------
// General Events plugin for laying out the event calendar
//-------------------------------------------------------------------------------------

var Events = function () {
	var _public = {};

	var eventsSetup = function () {
		var settings = {
			eventLoadMonth	: $j(".event_load_month"),
			eventList		: $j("#event_list_container"),
			eventListLoading: $j("#event_list_loading"),
			eventDetail		: $j("#event_holder"),
			noEventText     : $j("#event_holder").html(),
			eventLoading	: $j("#event_loading"),
			categoryLinks	: $j("#event_categories a"),
			monthHeader		: $j("#current_month h3"),
			eventShowMonth  : $j("#event_show_month"),
			eventShowList   : $j("#event_show_list"),
			eventListNext   : $j("#prev_page"),
			eventListPrev   : $j("#next_page"),
			activeClasses   : []// which classes/categories of events are active,
		};

		var noEventsFound=function (){
			// Ooops, no events are showing
			if ( $j(".event.visible").length < 1){
				$j("#no_events_found").fadeIn(0);
			} else {
				$j("#no_events_found").fadeOut(0);
			}	
		};

		$j("#event_pager").show();
		$j("#event_list_pager").hide();
		$j("#events_load_next").show();

		if ($j("#all-day").attr('checked')) {	
			$j(".jive-time-picker input").attr("readonly",true);
			$j(".jive-time-picker").css("opacity",.25);		
		}

		if (! $j("#recurring-event").attr('checked')) {	
			$j("#jive-event-recurrence").hide();
		} else {
			$j("#jive-end-date").hide();
		}
		
		val = $j("#jive-event-repeats option:selected").val();
		if (val != 4) {
			$j("#jive-event-repeat-on").hide();
		}
		
		if (val != 5) {
			$j("#jive-event-repeat-by").hide();
		}
		
		if (val == 1 || val == 2 || val == 3) {
			$j("#jive-event-repeat-every-group").hide();
		} else {
			updateRepeatLabel();
		}
		
		val = $j("#jive-event-repeat-string").val();
		if (val != null && val.indexOf('N') >= 0) {
			$j("#repeat-sunday").attr('checked', true);
		}
		if (val != null && val.indexOf('M') >= 0) {
			$j("#repeat-monday").attr('checked', true);
		}
		if (val != null && val.indexOf('T') >= 0) {
			$j("#repeat-tuesday").attr('checked', true);
		}
		if (val != null && val.indexOf('W') >= 0) {
			$j("#repeat-wednesday").attr('checked', true);
		}
		if (val != null && val.indexOf('R') >= 0) {
			$j("#repeat-thursday").attr('checked', true);
		}
		if (val != null && val.indexOf('F') >= 0) {
			$j("#repeat-friday").attr('checked', true);
		}
		if (val != null && val.indexOf('S') >= 0) {
			$j("#repeat-saturday").attr('checked', true);
		}
		
		$j("#all-day").live('click', function() {
			if ($j(".jive-time-picker").css("opacity") == 1){
				$j(".jive-time-picker input").attr("readonly",true);
				$j(".jive-time-picker").css("opacity",.25);
			} else {
				$j(".jive-time-picker input").attr("readonly",false);
				$j(".jive-time-picker").css("opacity",1);
			}	
		});
		
		$j("#recurring-event").live('click', function() {
			$j("#jive-event-recurrence").toggle();
			$j("#jive-end-date").toggle();
		});
		
		$j("#jive-event-repeats").change(function() {
			val = $j("#jive-event-repeats option:selected").val();
			if (val == 4) {
				$j("#jive-event-repeat-on").show();
			} else {
				$j("#jive-event-repeat-on").hide();
			}
			
			if (val == 5) {
				$j("#jive-event-repeat-by").show();
			} else {
				$j("#jive-event-repeat-by").hide();
			}
			
			if (val == 1 || val == 2 || val == 3) {
				$j("#jive-event-repeat-every-group").hide();
			} else {
				$j("#jive-event-repeat-every-group").show();
			}
		});

		// Get the current month
		var month       = new Date().getMonth() + 1;
		var year        = new Date().getFullYear();
		var day         = new Date().getDate();
		var activeEvent = '';
		if ( day < 10 ) { day = '0' + day; } else { day = day; }

		// Override month/year if there's already a different one in the URL
		if (window.location.hash && window.location.hash != '') {
			var dateHash   = window.location.hash.split(/[-,\/#]+/)
			year        = dateHash[1];
			month       = dateHash[2];
			day         = dateHash[3];
			activeEvent = dateHash[4];
		}

		// Override active categories if there is a cookie storing previous categories
		var categoryCookie = readCookie('msoe_active_event_categories');
		if (categoryCookie && categoryCookie != '') {
			settings.activeClasses = categoryCookie.split(',');

			$j("#all_categories").parent().removeClass("current-menu-item").find('input[type="checkbox"]').removeAttr('checked');

			// loop through all events found and set active classes
			settings.activeClasses.forEach(function(className){
				$j('#event_categories a[data-class="'+className+'"]').parent().addClass("current-menu-item").find('input[type="checkbox"]').attr('checked', 'checked');
			});	

		}

		var prefix = "";
		if ($j("body").hasClass('my-calendar')) {
			prefix = "user/";
		}

		// Fetch and parse results
		$j.ajax("/api/msoe/rest/calendar/events/"+prefix + year + "/" + month + "/", {
			type: "GET",
			dataType: "json",
			success: function(data) {
				var oldDay = day;
				renderCalendarMonth(data, year, month, day);

				if(activeEvent && activeEvent != '') {
					$j('.event[data-urlhash="' + year + '-' + month + '-' + oldDay + '/' + activeEvent + '"]').delay(100).click();
				}
			}
		});

		$j("#jive-event-repeats,#jive-event-repeat-every").live('change', function() {
			updateRepeatLabel();
		});

		function removeActiveEvent() {
			settings.eventDetail.html(settings.noEventText);
			$j("#events_list .event").removeClass("active");
		}

		function updateRepeatLabel(){
			switch ($j("#jive-event-repeats").val())
			{
				case "0":
					repeatValue = "day(s)";
					break;
				case "4":
					repeatValue = "week(s)";
					break;
				case "5":
					repeatValue = "month(s)";
					break;
				case "6":
					repeatValue = "year(s)";
					break;
				default:
					repeatValue = "";
			}
			$j("#jive-event-repeat-every-label").text("Every " + $j("#jive-event-repeat-every").val() + " " + repeatValue );
		};

		// Spectrum RSVP
		$j("#spectrum-rsvp").live('click',function(){
			spectrumRSVPUpdates();
		});

		function spectrumRSVPUpdates(){
			if ($j("#spectrum-rsvp").prop('checked') ){
				$j("#cart_rsvp_container").css("opacity",.25);
				$j("#event-cart-rsvp").val("").attr("readonly",true);
				$j("#achieve-rsvp-check").css("opacity",.25);
				$j("#achieve-rsvp").attr("disabled",true);
			} else {
				$j("#cart_rsvp_container").css("opacity",1);
				$j("#event-cart-rsvp").val("").attr("readonly",false);
				$j("#achieve-rsvp-check").css("opacity",1);
				$j("#achieve-rsvp").attr("disabled",false);
			}
		};
				
		// Achieve RSVP
		$j("#achieve-rsvp").live('click',function(){
			achieveRSVPUpdates();
		});
		
		function achieveRSVPUpdates(){
			if ($j("#achieve-rsvp").prop('checked') ){
				$j("#cart_rsvp_container").css("opacity",.25);
				$j("#event-cart-rsvp").val("").attr("readonly",true);
				$j("#spectrum-rsvp-check").css("opacity",.25);
				$j("#spectrum-rsvp").attr("disabled",true);
			} else {
				$j("#cart_rsvp_container").css("opacity",1);
				$j("#event-cart-rsvp").val("").attr("readonly",false);
				$j("#spectrum-rsvp-check").css("opacity",1);
				$j("#spectrum-rsvp").attr("disabled",false);
			}
		};

		// Cart RSVP
		$j("#event-cart-rsvp").live('keyup',function(){
			cartRSVPUpdates();
		});	

		function cartRSVPUpdates(){
			if ($j("#event-cart-rsvp").val() == "" ){
				$j("#spectrum-rsvp-check").css("opacity",1);
				$j("#spectrum-rsvp").attr("disabled",false);	
				$j("#achieve-rsvp-check").css("opacity",1);
				$j("#achieve-rsvp").attr("disabled",false);
			} else {
				$j("#spectrum-rsvp-check").css("opacity",.25);
				$j("#spectrum-rsvp").attr("disabled",true);
				$j("#achieve-rsvp-check").css("opacity",.25);
				$j("#achieve-rsvp").attr("disabled",true);
			}
		}	

		// On load, do cart and spectrum checks
		if ($j("#event-cart-rsvp").val() != "" ){
			cartRSVPUpdates();
		} else if ($j("#spectrum-rsvp").prop('checked')){
			spectrumRSVPUpdates();
		} else if ($j("#achieve-rsvp").prop('checked')){
			achieveRSVPUpdates();
		}
		
		Zapatec.Calendar.bootstrap({
			inputField: 'rsvpBy',
			button: 'rsvpBy_button',
			//date: new Date(date.timestamp),
			ifFormat: '%m/%d/%Y',
			daFormat: '%m/%d/%Y',
			showsTime: false,
			step: 1
		});
	
		/*
		 * Switch to month view
		 */		
		settings.eventShowMonth.live('click', function (){

			month = new Date().getMonth() + 1;
			year = new Date().getFullYear();
			
			eventListHTML = "";
			
			// Scroll to top
			$j("body, html").animate({
				scrollTop: $j("#event_header").offset().top
			});	

			settings.eventShowList.removeClass("active");
			settings.eventShowMonth.addClass("active");
			
			// Show loading icon
			settings.eventListLoading.fadeIn(0);
			
			// Restore blank event message and change month header
			removeActiveEvent();

			var prefix = "";
			if ($j("body").hasClass('my-calendar')) {
				prefix = "user/";
			}
			
			// Fetch and parse results
			$j.ajax("/api/msoe/rest/calendar/events/"+prefix + year + "/" + month + "/", {
				type: "GET",
				dataType: "json",
				success: function(data) {
					renderCalendarMonth(data, year, month);
				}
			});

			

			return false;
		});
		/*
		 * Show events for a specific day
		 */		
		$j("#event_calendar a").live('click', function (){
			window.location.hash = $j(this).attr('href');

			var dateHash   = window.location.hash.split(/[-,#]+/)
			var clickedDay = dateHash[3];

			// Scroll to top
			$j("body, html").animate({
				scrollTop: $j("#event_header").offset().top
			});	

			var prefix = "";
			if ($j("body").hasClass('my-calendar')) {
				prefix = "user/";
			}

			removeActiveEvent();
			listDaysEvents(clickedDay);

			return false;
		});

		function renderCalendarMonth(data, year, month, day) {
			// data cannot be passed directly, generated javascript expects it to accessed as a member on the passed object
			var obj = {};
			obj['bean'] = data;
			soy.renderElement(document.getElementById('msoe-event-list-container'), jive.events.msoe.eventCalendarList, obj);

			// figure out month number
			var monthNum = month + 1;

			// Figure out the date to display, and add appropriate class. Add today's date as a class "today"
			thisMonth = new Date().getMonth() + 1;
			thisYear = new Date().getFullYear();

			if (thisMonth == month && thisYear == year) {
				today = new Date().getDate();
			} else {
				today = 1;
			}
			if ( today < 10 ) { todayNum = '0' + today; } else { todayNum = today; }

			var cal = new Calendar(month - 1, year);
			cal.generateHTML();
			$j("#event_calendar").html(cal.getHTML());

			if (thisMonth == month && thisYear == year) {
				$j("#event_calendar a").filter('.day' + todayNum).addClass('today');
			}

			renderCalendarDots();

			if ( !( $j("body").hasClass('my-calendar') ) ) {
				if (day) {
					window.location.hash = year + "-" + month + "-" + day;
					listDaysEvents(day);
				} else {
					window.location.hash = year + "-" + month + "-" + todayNum;
					listDaysEvents(todayNum);	
				}
			}

			$j("#event_list_loading").fadeOut(50);
		}

		
		var listFunction=function (){
			
			eventListHTML = "";
			
			var offset = $j(this).data("offset");
			if(typeof offset == 'undefined') {
				offset = 0;
			}

			settings.eventShowList.addClass("active");
			settings.eventShowMonth.removeClass("active");
			
			// Scroll to top
			$j("body, html").animate({
				scrollTop: $j("#event_header").offset().top
			});	
			
			// Show loading icon
			settings.eventListLoading.fadeIn(0);
			
			// Restore blank event message and change month header
			settings.eventDetail.html(settings.noEventText);
			settings.monthHeader.html('change this');

			var prefix = "";
			if ($j("body").hasClass('my-calendar')) {
				prefix = "user/";
			}
			
			// Fetch and parse results
			$j.ajax("/api/msoe/rest/calendar/events/"+prefix+"list?offset="+offset, {
				type: "GET",
				dataType: "json",
				success: function(data) {
					// data cannot be passed directly, generated javascript expects it to accessed as a member on the passed object
					var obj = {};
					obj['bean'] = data;
					soy.renderElement(document.getElementById('msoe-event-list-container'), jive.events.msoe.eventCalendarList, obj);
					$j("#event_pager").hide();
					$j("#event_list_pager").show();
					$j("#events_load_next").hide();

					// Show/hide events by category if not on my calendar and if we're not viewing all categories
					if (!($j("body").hasClass('my-calendar')) && !($j("#all_categories").parent().hasClass("current-menu-item"))){
						$j("#events_list .event").removeClass("visible");

						// loop through all events found and see if they match previous category settings
						settings.activeClasses.forEach(function(className){
							$j("#events_list .event."+className).addClass("visible");
						});	
					}

					noEventsFound();
					$j("#event_list_loading").fadeOut(50);	
				}
			});

			return false;
		};
		
		/*
		 * Switch to list view
		 */		
		settings.eventShowList.live('click', listFunction);
		settings.eventListNext.live('click', listFunction);
		settings.eventListPrev.live('click', listFunction);
		
		/*
		 * Load events list filtering - filter by day or month, also load next/prev month
		 */		
		settings.eventLoadMonth.live('click', function (){

			month = $j(this).data("month");
			year = $j(this).data("year");
			
			eventListHTML = "";
			
			// Scroll to top
			$j("body, html").animate({
				scrollTop: $j("#event_header").offset().top
			});	
			
			// Show loading icon
			settings.eventListLoading.fadeIn(0);
			
			// Restore blank event message and change month header
			settings.eventDetail.html(settings.noEventText);

			var prefix = "";
			if ($j("body").hasClass('my-calendar')) {
				prefix = "user/";
			}
			
			// Fetch and parse results
			$j.ajax("/api/msoe/rest/calendar/events/"+prefix + year + "/" + month + "/", {
				type: "GET",
				dataType: "json",
				success: function(data) {
					renderCalendarMonth(data, year, month);
				}
			});
	
			return false;
		});
		
		
		/*
		 * Event list click, use the data-href of the div to load the event's permalink and populate the eventDetail div
		 */
		$j("#events_list .event").live('click', function (){
			
			// Only do things if you did NOT click on the already shown event
			if (!($j(this).hasClass("active"))){
				href = $j(this).data("href");
				detailHref = $j(this).data("detailhref");
				urlhash    = $j(this).data("urlhash");

				window.location.hash = urlhash;

				$j("#events_list .event").removeClass("active");
				$j(this).addClass("active");
				
				eventHTML = "";
				
				// Fade out current event detail and scroll window to top, then fade in loading gif
				settings.eventDetail.fadeOut(0,function(){
					$j("body, html").animate({
						scrollTop: $j("#event_header").offset().top
					});	
				});
				settings.eventLoading.fadeIn(0);
				
				// Get the event's permalink, then sniff the HTML for the div of actual details and populate event listing div with that HTML
				$j.ajax({
					url: detailHref,
					success: function(data) {
						eventHTML = data;
						settings.eventDetail.html(eventHTML);
						settings.eventLoading.fadeOut(0,function(){
							settings.eventDetail.fadeIn(250);
							// stLight.options({
							// 	publisher: "bdb3d27b-4ba2-4829-952f-af7c2de8a610", 
							// 	doNotHash: false, 
							// 	doNotCopy: false, 
							// 	hashAddressBar: false
							// });
							stButtons.locateElements();
						});
					 }
				});
			}

		}); // events click
		
		/*
		 * Category filtering click, look for the category's data class and hide/show event divs with that class
		 */
		settings.categoryLinks.live('click', function (){	
			classToToggle = $j(this).data("class");

			// Show loading icon and lock height
			$j("#event_list_loading").fadeIn(0);
			lockHeight($j("#event_list_container"));
			
			// if clicking the All Categories btn
			if (classToToggle == "all"){ 
				
				// if this btn is not already selected
				if (!($j(this).parent().hasClass("current-menu-item"))){ 
					// empty the array of active categories which is only used when filtering cat by cat
					settings.activeClasses = [];

					// Since you're removing all active classes, remove the cookie
					eraseCookie('msoe_active_event_categories');

					settings.categoryLinks.each(function(){
						$j(this).find('input[type="checkbox"]').removeAttr('checked');
						// remove active class from all category links
						$j(this).parent().removeClass("current-menu-item"); 
					});
					
					// add active class back to the all btn and show all events
					$j(this).parent().addClass("current-menu-item"); 
					$j(this).find('input[type="checkbox"]').attr('checked', 'checked');
				}
			} else {
				$j(this).parent().toggleClass("current-menu-item");

				// are we hiding or showing this category?
				hiding = true; 
				
				// add class to active categories array if showing it, otherwise remove from array
				if($j(this).parent().hasClass("current-menu-item")){
					settings.activeClasses.push(classToToggle);
					hiding = false;
				} else {
					index = settings.activeClasses.indexOf(classToToggle);
					settings.activeClasses.splice(index, 1);
				}
				
				// Set a cookie remembering all the active categories for the next 365 days
				createCookie('msoe_active_event_categories', settings.activeClasses, 365);
				
				// if the all btn is selected, we must clear it, then hide all categories except the one chosen
				if ($j("#all_categories").parent().hasClass("current-menu-item")) {
					$j("#all_categories").parent().removeClass("current-menu-item");
					$j("#all_categories").find('input[type="checkbox"]').removeAttr('checked');
					$j("#events_list .event").removeClass("visible");
				} else {
					// If we filter by some cats, then remove all, fade all_cat back in
					if (settings.activeClasses.length == 0){
						$j("#all_categories").click().parent().addClass("current-menu-item");
						$j("#all_categories").find('input[type="checkbox"]').attr('checked','checked');
					}
				}
			}

			// List the days events out filtered by the selected categories
			var day = $j("#event_calendar a.active").data('day');
			if ( day < 10 ) { dayNum = '0' + day; } else { dayNum = day; }
			listDaysEvents( dayNum );
			renderCalendarDots();
			setTimeout(function(){
				setCategoryCheckboxes();
			},25);

			// Release height and remove loading 
			releaseHeight($j("#event_list_container"));
			$j("#event_list_loading").fadeOut(50);

			return false;
		});

		var lockHeight = function (container){
			initHeight = container.height();
			//container.css({"height":initHeight,"overflow":"hidden"});
			container.css({"height":initHeight});
		};

		var releaseHeight = function(container){
			container.css({"height":"auto"});
			//container.css({"height":"auto","overflow":"auto"});
		};

		function setCategoryCheckboxes() {
			settings.categoryLinks.delay(25).each(function() {
				if($j(this).parent().hasClass("current-menu-item")){
					$j(this).find('input[type="checkbox"]').attr('checked', 'checked');
				} else {
					$j(this).find('input[type="checkbox"]').removeAttr('checked');
				}
			});
		}

		function renderCalendarDots() {
			$calendar = $j("#event_calendar");

			$calendar.find("a").removeClass('hasEvents');
			$j("#events_list .event").each(function() {
				day = $j(this).data('day');
				if ( day < 10 ) { dayNum = '0' + day; } else { dayNum = day; }
				if (settings.activeClasses.length > 0) {
					settings.activeClasses.forEach(function(className){
						if ( $j("#events_list .event."+className+".day"+dayNum).length > 0 ) {
							$calendar.find("a.day"+dayNum).addClass('hasEvents');
						}
					});	
				} else {
					$calendar.find("a.day"+dayNum).addClass('hasEvents');
				}

			})
		}

		function listDaysEvents(dayNum) {

			$j("#events_list .event").removeClass("visible");

			$j("#event_calendar").find("a").removeClass("active");
			$j("#event_calendar").find("a.day"+dayNum).addClass("active");
			
			// loop through all events found and see if they match the day and category settings
			if (settings.activeClasses.length > 0) {
				settings.activeClasses.forEach(function(className){
					$j("#events_list .event."+className+".day"+dayNum).addClass("visible");
				});	
			} else {
				$j("#events_list .event.day"+dayNum).addClass("visible");
			}

			noEventsFound();
		}

	};

	_public.init = function (options) {
		_public.options = $j.extend({
			
		}, options);

		eventsSetup();
	};

	return _public;
} ();

$j(function ($j) {
	if ($j(".event-calendar").length > 0 || $j(".jive-body-formpage-event").length > 0){
		Events.init();
	}
});

;
define('jive.Events.InviteEvent.InviteView', [
       'jive.AbstractView'
], function(AbstractView) {
	return AbstractView.extend(function(protect, _super) {
		protect.init = function(options) {
			var view = this;
			this.containerID = options.containerID;
			this.containerType = options.containerType;
			this.defaultInviteMessage = options.defaultInviteMessage;
			
			$j(document).ready(function() {
				$j('#jive-event-invite').click(function() {
					view.openInviteModal();
					return false;
				});
				
				if(options.inviteUsers) {
					$j('#jive-event-invite').click();
				}
			});

		};
		
		this.openInviteModal = function() {
			var view = this;
			
			var $modal = $j(jive.event.invite.inviteUsers({message : view.defaultInviteMessage}));
			$modal.lightbox_me({destroyOnClose: true, centered: true, onLoad: function() { $modal.find('input:visible:first').focus(); }});
			
			$modal.find('form').submit(function() {
				$j(this).find('input,button').attr('disabled', 'disabled');
				view.submitInvite($modal);
				return false;
			});
			
			var msg = "";
			var picker = new jive.UserPicker.Main({
				multiple: true,
				listAllowed: true,
				emailAllowed: false,
				valueIsUsername: true,
				message: msg,
				object: {objectID : view.containerID, objectType: view.containerType},
				entitlement: "VIEW",
				$input : $j("#invite-users")
			});
		};

		this.submitInvite = function($modalDiv) {
			var view = this;
			var data = new Object();
			var recipients = $j('input:hidden[name=invite-users]').val();
			var subject = $j('#jive-invite-not-subject').val();
			var message = $j('#jive-invite-not-message').val();
			
			view.emitP('invite', recipients, message)
			.addCallback(function() {
				$j('<p>' + jive.event.invite.inviteConfirmation() + '</p>').message({style: 'success'});
				$modalDiv.trigger('close');
			})
			.addErrback(function(message, code) {
				var content = message ? $j('<p>' + message + '</p>') : $j(jive.error.rest.soy.errorUpdating({ href: window.location }));
				content.message({ showClose: true, style: 'error' });
				$modalDiv.find('input, button').removeAttr('disabled');
			});
		};
		
	});
});
;
/**
 * @depends path=/resources/scripts/apps/share/models/core_deferred.js lazy=true
 * @depends path=/plugins/msoe-event-type-plugin/resources/script/apps/content/events/invite/views/invite_view.js
 */

define('jive.Events.InviteEvent.Main', [
    'jive.CoreV3.Deferred',
    'jive.Events.InviteEvent.InviteView'
], function(Deferred, InviteView) {
	return function(options) {
		var core = new Deferred();
		var view = new InviteView(options);

		view.addListener('invite', function(invitees, message, promise) {
			var data = new Object();
			data.invitees = invitees.split(',');
			data.body = message;
			osapi.jive.corev3.events.get({uri: '/contents/' + options.browseID}).execute(function(event) {
				event.inviteUsers(data).execute(function(response) {
					if(response.error) {
						promise.emitError(response.error.message, response.status);
					} else {
						promise.emitSuccess(response.content);
					}
				});
			});
		});
	};
});
;
window.google = window.google || {};
google.maps = google.maps || {};
(function() {
  
  function getScript(src) {
    document.write('<' + 'script src="' + src + '"' +
                   ' type="text/javascript"><' + '/script>');
  }
  
  var modules = google.maps.modules = {};
  google.maps.__gjsload__ = function(name, text) {
    modules[name] = text;
  };
  
  google.maps.Load = function(apiLoad) {
    delete google.maps.Load;
    apiLoad([0.009999999776482582,[[["https://mts0.googleapis.com/vt?lyrs=m@216000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.googleapis.com/vt?lyrs=m@216000000\u0026src=api\u0026hl=en-US\u0026"],null,null,null,null,"m@216000000"],[["https://khms0.googleapis.com/kh?v=128\u0026hl=en-US\u0026","https://khms1.googleapis.com/kh?v=128\u0026hl=en-US\u0026"],null,null,null,1,"128"],[["https://mts0.googleapis.com/vt?lyrs=h@216000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.googleapis.com/vt?lyrs=h@216000000\u0026src=api\u0026hl=en-US\u0026"],null,null,"imgtp=png32\u0026",null,"h@216000000"],[["https://mts0.googleapis.com/vt?lyrs=t@131,r@216000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.googleapis.com/vt?lyrs=t@131,r@216000000\u0026src=api\u0026hl=en-US\u0026"],null,null,null,null,"t@131,r@216000000"],null,null,[["https://cbks0.googleapis.com/cbk?","https://cbks1.googleapis.com/cbk?"]],[["https://khms0.googleapis.com/kh?v=75\u0026hl=en-US\u0026","https://khms1.googleapis.com/kh?v=75\u0026hl=en-US\u0026"],null,null,null,null,"75"],[["https://mts0.googleapis.com/mapslt?hl=en-US\u0026","https://mts1.googleapis.com/mapslt?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/ft?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/ft?hl=en-US\u0026"]],[["https://mts0.googleapis.com/vt?hl=en-US\u0026","https://mts1.googleapis.com/vt?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/loom?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/loom?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt?hl=en-US\u0026","https://mts1.googleapis.com/mapslt?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/ft?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/ft?hl=en-US\u0026"]]],["en-US","US",null,0,null,null,"https://maps.gstatic.com/mapfiles/","https://csi.gstatic.com","https://maps.googleapis.com","https://maps.googleapis.com"],["https://maps.gstatic.com/intl/en_us/mapfiles/api-3/12/11","3.12.11"],[3579695786],1.0,null,null,null,null,0,"",null,null,1,"https://khms.googleapis.com/mz?v=128\u0026",null,"https://earthbuilder.googleapis.com","https://earthbuilder.googleapis.com",null,"https://mts.googleapis.com/vt/icon"], loadScriptTime);
  };

  var loadScriptTime = (new Date).getTime();

  if (typeof googleMapsAPILoaded == 'undefined'){
    getScript("https://maps.gstatic.com/intl/en_us/mapfiles/api-3/12/11/main.js");
  }
  googleMapsAPILoaded = true;
})();
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.events=="undefined"){jive.events={}}if(typeof jive.events.msoe=="undefined"){jive.events.msoe={}}jive.events.msoe.eventCalendar=function(A,C){var B=C||new soy.StringBuilder();B.append('<body class="',soy.$$escapeHtml(A.bodyClass),'"><div class="container"><div id="event_header" class="row event-calendar-header"><div class="span8"><h1>',(A.bodyClass=="my-calendar")?"My ":"",'Events</h1></div><!--<div class="span4" id="events_view_by"><h2><a href="#" id="event_show_month" class="active">Month</a></h2><h2><a href="#" id="event_show_list">List</a></h2></div>--></div><div class="row"><div class="event-calendar-body"><!-- Categories -->');if(A.bodyClass!="my-calendar"){jive.events.msoe.eventCalendarCategories(A,B)}B.append('<!-- Event List --><div id="msoe-event-list-container">');jive.events.msoe.eventCalendarList(A,B);B.append('</div><!-- Event Detail --><div class="span6" id="event_detail"><div id="event_loading"><img src="/images/j-loader-large-wht.gif"></div><div id="event_holder"><h1>No event selected.</h1><p>Please select an event from the list on the left to see the details.</p></div></div></div></div></div></body>');return C?"":B.toString()};jive.events.msoe.eventCalendarCategories=function(A,G){var B=G||new soy.StringBuilder();B.append('\t<div class="span2" id="event_categories"><div class="category-header"><h3>Categories</h3><p>Select categories of events to display.</p></div><ul class="block_links_list"><li class="current-menu-item"><a href="#" data-class="all" id="all_categories"><input type="checkbox" name="all" checked="checked" /> All Categories</a></li>');var E=A.bean.availableEventCategories;var C=E.length;for(var F=0;F<C;F++){var D=E[F];B.append('<li><a href="#" data-class="',soy.$$escapeHtml(D.contentTag),'"><input type="checkbox" name="',soy.$$escapeHtml(D.contentTag),'" /> ',soy.$$escapeHtml(D.description),"</a></li>")}B.append("</ul></div>");return G?"":B.toString()};jive.events.msoe.eventCalendarList=function(F,D){var B=D||new soy.StringBuilder();B.append('\t<!-- Event List --><div class="span4" id="events_list_pager"><div id="event_pager"><div id="prev_month" class="event_load_month" data-month="',soy.$$escapeHtml(F.bean.prevMonth),'" data-year="',soy.$$escapeHtml(F.bean.prevYear),'">Previous</div><div id="current_month" data-month="',soy.$$escapeHtml(F.bean.month),'" data-year="',soy.$$escapeHtml(F.bean.year),'"><h2>',soy.$$escapeHtml(F.bean.monthName),'</h2></div><div id="next_month" class="event_load_month" data-month="',soy.$$escapeHtml(F.bean.nextMonth),'" data-year="',soy.$$escapeHtml(F.bean.nextYear),'">Next</div><div id="event_calendar"></div></div><div id="events_list"><div id="event_list_container"><div id="events_list_min_height"><div id="event_list_loading"><img src="/images/j-loader-large-wht.gif"></div><style>#no_events_found{display: none;}</style><div id="no_events_found"><div class="event_container" ><h4>No Events Found</h4><p>Try searching different categories or different dates.</p></div></div>');var H=F.bean.events;var I=H.length;if(I>0){for(var J=0;J<I;J++){var G=H[J];B.append('<div class="event visible ');if(G.tags){var E=G.tags;var K=E.length;for(var A=0;A<K;A++){var C=E[A];B.append(soy.$$escapeHtml(C)," ")}}B.append(" day",soy.$$escapeHtml(G.startDayNumber),'" data-day="',soy.$$escapeHtml(G.startDayNumber),'" data-urlhash="',soy.$$escapeHtml(F.bean.year),"-",soy.$$escapeHtml(F.bean.month),"-",soy.$$escapeHtml(G.startDayNumber),"/event",soy.$$escapeHtml(G.id),'" data-href="',soy.$$escapeHtml(G.url),'" data-detailhref="',soy.$$escapeHtml(G.detailUrl),'"><div class="event_container"><div class="details"><h4>',soy.$$escapeHtml(G.title),'</h4><p class="timestamp">',(G.allDay)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("msoe.event.allDay.label"),[])):soy.$$escapeHtml(G.startTime)+"-"+soy.$$escapeHtml(G.endTime),(G.recurring)?" - "+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("msoe.event.recurring.label"),[])):"","</p>",(G.location!=null)?'<p class="location">'+soy.$$escapeHtml(G.location)+"</p>":"","</div></div></div>")}}else{B.append("<style>#no_events_found{display: block;}</style>")}B.append('<script>$j("#event_list_loading").fadeOut(50);<\/script></div><div id="event_list_pagination">',(F.bean.offset>=25)?'<h3><a href="#" id="prev_page" data-offset="'+soy.$$escapeHtml(F.bean.offset-25)+'">Previous</a></h3>':"",(F.bean.hasNext)?'<h3><a href="#" id="next_page" data-offset="'+soy.$$escapeHtml(F.bean.offset+25)+'">Next</a></h3>':"","</div></div><!-- event list container --></div><!-- event list --></div>");return D?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.events=="undefined"){jive.events={}}if(typeof jive.events.msoe=="undefined"){jive.events.msoe={}}if(typeof jive.events.msoe.widget=="undefined"){jive.events.msoe.widget={}}jive.events.msoe.widget.eventsListWidget=function(A,G){var B=G||new soy.StringBuilder();B.append("\t");if(A.bean.events){var F=A.bean.events;var D=F.length;if(D>0){for(var C=0;C<D;C++){var E=F[C];B.append('<div class="event"><div class="event_container"><div class="date_box"><span class="day">',soy.$$escapeHtml(E.startDayOfWeek),'</span><span class="month">',soy.$$escapeHtml(E.startMonthName),'</span><span class="date">',soy.$$escapeHtml(E.startDayNumber),'</span></div><div class="details"><h4><a href="',soy.$$escapeHtml(E.url),'">',soy.$$escapeHtml(E.title),"</a></h4>",(E.eventProperties&&E.eventProperties.allDay)?'<p class="timestamp">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("msoe.event.allDay.label"),[]))+"</p>":'<p class="timestamp">'+soy.$$escapeHtml(E.startTime)+"-"+soy.$$escapeHtml(E.endTime)+"</p>",(E.eventProperties&&E.eventProperties.recurring)?'<p class="timestamp">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("msoe.event.recurring.label"),[]))+"</p>":"",'<p class="location">',(E.location==null)?"None":soy.$$escapeHtml(E.location),"</p></div></div></div>")}}else{B.append(" No Events.")}}else{B.append("No events.")}return G?"":B.toString()}
;
if(typeof facebook=="undefined"){var facebook={}}facebook.display=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id="fb-jive"><div id="fb-actions" class="fb-actions clearfix"><h4>',soy.$$escapeHtml(A.i18n.actions),'</h4><ul class="clearfix"><li id="fb-jive-tab-search" class="active"><a href="#search"><span class="jive-icon-med jive-icon-search"></span>',soy.$$escapeHtml(A.i18n.searchTab),'</a><span class="fb-nub"></span></li>',(!A.readOnly)?'<li id="fb-jive-tab-post"><a href="#post"><span class="jive-icon-med jive-icon-discussion-question"></span>'+soy.$$escapeHtml(A.i18n.questionTab)+'</a><span class="fb-nub"></span></li>':"","</ul>");facebook.search(A,B);if(!A.readOnly){facebook.question(A,B)}B.append('</div><div id="fb-jive-tabs" class="clearfix"><ul class="toggle-tabs"><li class="first"><a href="#recent" id="fb-jive-tab-recent">',soy.$$escapeHtml(A.i18n.activityTab),'</a></li><li class="search disabled"><a href="#" id="fb-searchtab-results">',soy.$$escapeHtml(A.i18n.resultsTab),'</a></li><li class="last"><span class="fb-loading" style="display:none"></span></li></ul></div><div id="fb-jive-content">');facebook.activity(A,B);facebook.searchResults(A,B);B.append("</div></div>");return C?"":B.toString()};facebook.search=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id="fb-jive-search" class="fb-input clearfix"><input id="fb-jive-search-term" type="text" class="placeholder" placeholder="',soy.$$escapeHtml(A.i18n.searchPlaceholder),'" value="',soy.$$escapeHtml(A.i18n.searchPlaceholder),'"/><button type="button" id="fb-jive-search-submit" class="fb-button" name="search">',soy.$$escapeHtml(A.i18n.searchButton),"</button></div>");return C?"":B.toString()};facebook.question=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id="fb-jive-question" class="fb-input clearfix" style="display: none;"><textarea id="fb-jive-question-text" class="placeholder fb-jive-input-text" placeholder="',soy.$$escapeHtml(A.i18n.questionPlaceholder),'">',soy.$$escapeHtml(A.i18n.questionPlaceholder),'</textarea><div id="fb-jive-question-controls" class="fb-jive-input-controls" style="display: none;"><button type="button" id="fb-jive-question-button" class="fb-button" name="search"><span class="fb-icon fb-icon-plus"></span>',soy.$$escapeHtml(A.i18n.questionButton),"</button></div></div>");return C?"":B.toString()};facebook.searchResults=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id="fb-jive-search-container"><div id="fb-jive-search-results" class="fb-jive-results"></div><div id="fb-jive-search-more" class="fb-more-results clearfix" style="display: none;"><a href="#" id="fb-jive-search-more-submit" class="fb-loadmore clearfix"><span class="fb-moretext">',soy.$$escapeHtml(A.i18n.resultsMore),'</span><span class="fb-loading" style="display:none"></span></a></div></div>');return C?"":B.toString()};facebook.activity=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id="fb-jive-activity-container"><div id="fb-jive-recent-activity" class="fb-jive-results"></div><div id="fb-jive-activity-more" class="fb-more-results clearfix" style="display: none;"><a href="#" id="fb-jive-activity-more-submit" class="fb-loadmore clearfix"><span class="fb-moretext">',soy.$$escapeHtml(A.i18n.activityMore),'</span><span class="fb-loading" style="display:none"></span></a></div></div>');return C?"":B.toString()};facebook.results=function(A,G){var B=G||new soy.StringBuilder();B.append("<ul>");var D=A.data;var E=D.length;if(E>0){for(var F=0;F<E;F++){var C=D[F];facebook.result(soy.$$augmentData(C,{i18n:A.i18n}),B)}}else{B.append((A.displayNotFound)?"<li class='fb-jive-result-empty'>"+soy.$$escapeHtml(A.i18n.resultsNone)+"</li>":"")}B.append("</ul>");return G?"":B.toString()};facebook.result=function(A,C){var B=C||new soy.StringBuilder();B.append("<li class='fb-jive-result clearfix'><div class='fb-jive-icons'>",(A.user.profileURL)?'<a href="'+soy.$$escapeHtml(A.user.profileURL)+"\"><img class='fb-jive-avatar' src='"+soy.$$escapeHtml(A.user.avatarURL)+"' /></a>":"<img class='fb-jive-avatar' src='"+soy.$$escapeHtml(A.user.avatarURL)+"' />","<span class='jive-icon-med ",soy.$$escapeHtml(A.content.contentStyle),'\'></span></div><form action="javascript:" onsubmit="return false;"><input type="hidden" name="self" value="',soy.$$escapeHtml(A.content.contentSelf),'" /><input type="hidden" name="subject" value="',soy.$$escapeHtml(A.content.subject),'" /><input type="hidden" name="type" value="',soy.$$escapeHtml(A.content.contentType),"\" /><div class='fb-jive-content'><h4 class=\"fb-jive-subject\"><a href='",soy.$$escapeHtml(A.content.contentURL),"'>",soy.$$escapeHtml(A.content.subject),"</a></h4>",(A.content.contentSummary)?"<div class='fb-jive-summary'>"+soy.$$escapeHtml(A.content.contentSummary)+"</div>":"","<div class='fb-jive-authored'>",(A.user.profileURL)?"<span class='fb-jive-who'>"+soy.$$escapeHtml(A.i18n.postedBy)+' <a href="'+soy.$$escapeHtml(A.user.profileURL)+'">'+soy.$$escapeHtml(A.user.name)+"</a></span>":"<span class='fb-jive-who'>"+soy.$$escapeHtml(A.i18n.postedBy)+" "+soy.$$escapeHtml(A.user.name)+"</span>",(A.content.modified)?"<span class='fb-jive-when'> "+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.content.modified.key),[A.content.modified.value]))+"</span>":"",(A.container)?"<span class='fb-jive-where'> "+soy.$$escapeHtml(A.i18n.postedIn)+" <span class='jive-icon-sml "+soy.$$escapeHtml(A.container.containerStyle)+"'></span><a href='"+soy.$$escapeHtml(A.container.containerURL)+"'>"+soy.$$escapeHtml(A.container.name)+"</a></span>":"","&nbsp;&middot;&nbsp;");facebook.likeLink(A,B);B.append("&nbsp;&middot;&nbsp;<a href='#' class='fb-jive-replies-show'>",soy.$$escapeHtml(A.i18n.comment),"</a>&nbsp;&middot;&nbsp;<a href='#' class='fb-jive-share-show'>",soy.$$escapeHtml(A.i18n.share),"<span class='fb-jive-expander fb-collapse'></span></a><div class='fb-jive-share-container' style='display:none;'><div class=\"fb-like\" data-href=\"",soy.$$escapeHtml(A.content.contentURL),'" data-send="true" data-layout="button_count" data-width="" data-show-faces="false" data-action="recommend"></div></div></div><span class=\'fb-jive-like-label\'>');facebook.blockLikes({likeCount:A.content.likeCount},B);B.append("</span><div class='fb-jive-likes-container'></div><span class='fb-jive-reply-label'>");facebook.blockReplies({likeCount:A.content.likeCount,replyCount:A.content.replyCount},B);B.append("</span><div class='fb-jive-replies-container'></div></div></form></li>");return C?"":B.toString()};facebook.likeLink=function(A,C){var B=C||new soy.StringBuilder();B.append((A.like.liked)?"<a href='#' class='fb-jive-likes-delete' "+((A.ref)?"selfRef='"+soy.$$escapeHtml(A.ref)+"'":"")+" "+((A.type)?"selfType='"+soy.$$escapeHtml(A.type)+"'":"")+">"+soy.$$escapeHtml(A.i18n.liked)+"</a>":(A.like.likeAllowed)?"<a href='#' class='fb-jive-likes-create' "+((A.ref)?"selfRef='"+soy.$$escapeHtml(A.ref)+"'":"")+" "+((A.type)?"selfType='"+soy.$$escapeHtml(A.type)+"'":"")+">"+soy.$$escapeHtml(A.i18n.like)+"</a>":soy.$$escapeHtml(A.i18n.like));return C?"":B.toString()};facebook.blockLikes=function(A,C){var B=C||new soy.StringBuilder();B.append((A.likeCount>0)?"<span class='fb-jive-qstem'></span><div class='fb-jive-likes'><span class='fb-jive-icon'></span><a href='#' class='fb-jive-likes-show'>"+((A.likeCount==1)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("facebook.canvas.likeSingular"),[A.likeCount])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("facebook.canvas.likePlural"),[A.likeCount])))+"</div>":"");return C?"":B.toString()};facebook.blockReplies=function(A,C){var B=C||new soy.StringBuilder();B.append((A.replyCount>0)?((A.likeCount<=0)?"<span class='fb-jive-qstem'></span>":"")+"<div class='fb-jive-replies'><span class='fb-jive-icon'></span><a href='#' class='fb-jive-replies-show'>"+((A.replyCount==1)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("facebook.canvas.replySingular"),[A.replyCount])):(A.replyCount>1)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("facebook.canvas.replyPlural"),[A.replyCount])):"")+"</a></div>":"");return C?"":B.toString()};facebook.likes=function(A,G){var C=G||new soy.StringBuilder();var B=A.data;var E=B.length;for(var F=0;F<E;F++){var D=B[F];C.append('<div class="fb-jive-like"><a href="/people/',soy.$$escapeHtml(D.username),"\"><img src='",soy.$$escapeHtml(D.resources.avatar.ref),"' /></a><span class='fb-jive-name'><a href=\"/people/",soy.$$escapeHtml(D.username),'">',(D.name)?soy.$$escapeHtml(D.name):soy.$$escapeHtml(D.username),"</a></span></div>")}return G?"":C.toString()};facebook.replies=function(A,G){var B=G||new soy.StringBuilder();var F=A.data;var D=F.length;for(var E=0;E<D;E++){var C=F[E];B.append('<div class="fb-jive-reply"><a href="/people/',soy.$$escapeHtml(C.author.username),"\"><img src='",soy.$$escapeHtml(C.author.resources.avatar.ref),'\' /></a><div class="fb-jive-reply-content">',(C.answer)?"<div class='fb-jive-flagged-reply fb-jive-correct'><span class=\"jive-icon-med jive-icon-discussion-correct\"></span>"+soy.$$escapeHtml(A.i18n.correct)+"</div>":"",(C.helpful)?"<div class='fb-jive-flagged-reply fb-jive-helpful'><span class=\"jive-icon-med jive-icon-discussion-helpful\"></span>"+soy.$$escapeHtml(A.i18n.helpful)+"</div>":"","<span class='fb-jive-name'><a href=\"/people/",soy.$$escapeHtml(C.author.username),'">',(C.author.name)?soy.$$escapeHtml(C.author.name):soy.$$escapeHtml(C.author.username),"</a></span><span class='fb-jive-text'>",soy.$$escapeHtml(C.content.text),"</span><div class='fb-jive-authored'>",(C.creationDate)?'<a href="'+soy.$$escapeHtml(C.resources.html.ref)+"\"><span class='fb-jive-when'> "+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(C.creationDate.key),[C.creationDate.value]))+"</span></a>":"","&nbsp;&middot;&nbsp;");facebook.likeLink({like:C.likeSummary,ref:C.resources.self.ref,type:"inline",i18n:A.i18n},B);B.append("<span class='fb-jive-like-label'>");facebook.inlineLikes({likeCount:C.likeCount},B);B.append("</span></div></div></div>")}B.append('<div class="fb-jive-reply-form"><div class="fb-input"><input type="text" maxlength="255" class="fb-jive-reply-input placeholder" placeholder="',soy.$$escapeHtml(A.i18n.commentPlaceholder),'" value="',soy.$$escapeHtml(A.i18n.commentPlaceholder),"\" parentRef='",soy.$$escapeHtml(A.params.parentRef),"' parentType='",soy.$$escapeHtml(A.params.parentType),"' parentSubject='",soy.$$escapeHtml(A.params.parentSubject),"' /></div></div>");return G?"":B.toString()};facebook.inlineLikes=function(A,C){var B=C||new soy.StringBuilder();B.append((A.likeCount>0)?"&nbsp;&middot;&nbsp;<span class='fb-jive-reply-likes'><span class='fb-jive-icon'></span>"+((A.likeCount==1)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("facebook.canvas.personSingular"),[A.likeCount])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("facebook.canvas.personPlural"),[A.likeCount])))+"</span>":"");return C?"":B.toString()};facebook.authModal=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="fb-jive-modal-body"><h2>',soy.$$escapeHtml(A.data.title),"</h2><p>",A.data.descriptionHtml,"</p>",(A.data.linkUrl)?'<p id="fb-jive-auth-controls"><a href="'+soy.$$escapeHtml(A.data.linkUrl)+'" target="_new">'+soy.$$escapeHtml(A.data.linkLabel)+"</a></p>":"","</div>");return C?"":B.toString()};facebook.privacyModal=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="fb-jive-modal-body"><h2>',soy.$$escapeHtml(A.data.title),"</h2><p>",A.data.descriptionHtml,"</p>",(A.data.linkUrl)?'<p><a href="'+soy.$$escapeHtml(A.data.linkUrl)+'" target="_new">'+soy.$$escapeHtml(A.data.linkLabel)+"</a></p>":"","<h4>",soy.$$escapeHtml(A.data.permission),'</h4><div id="fb-jive-privacy-controls"><a id="fb-jive-privacy-allow" class="fb-button highlight" href="#allow"><span>',soy.$$escapeHtml(A.data.allow),'</span></a><a id="fb-jive-privacy-cancel" class="fb-button" href="#cancel"><span>',soy.$$escapeHtml(A.data.cancel),"</span></a></div></div>");return C?"":B.toString()}
;
jive.namespace('antivirus.configuration');

jive.antivirus.configuration.AntivirusConfigurationSource = jive.RestService.extend(function(protect) {
	protect.resourceType = "antivirusConfiguration";
    protect.pluralizedResourceType = protect.resourceType;
    
    var serviceUrl = _jive_base_url + "/api/core/ext/antivirus/v3/admin/antivirus/configuration/";
	
	this.getConfiguration = function(fields, promise) {
	    if (!promise) {
            promise = new jive.conc.Promise();
        }
        
        return this.commonAjaxRequest(promise, 'GET', {url:serviceUrl, data:{fields:fields} || {}});
    };
    
    this.updateConfiguration = function(antivirusConfiguration, fields, promise) {
	    if (!promise) {
            promise = new jive.conc.Promise();
        }
        
        protect.displayGenericErrorMessages = false;
		
        return this.commonAjaxRequest(promise, 'PUT', {url:serviceUrl, data:JSON.stringify(antivirusConfiguration)})
        	.always(function() {
	            protect.displayGenericErrorMessages = true;
	        });
    };
});
;
jive.namespace('antivirus.configuration');

/**
 * Antivirus Configuration
 *
 * @class
 *
 * @depends path=/resources/scripts/jquery/jquery.message.js
 * @depends template=jive.error.rest.soy.*
 */
jive.antivirus.configuration.AntivirusConfigurationView = jive.AbstractView.extend(function(protect) {
    
    jive.conc.observable(this);
    
    this.init = function(options) {
        this.options = options;
        
        var self = this;
        
    	$j("input.jive-form-button-cancel").live('click', function(clickEvent) {
			window.location = this.form.action;
    		
	        clickEvent.preventDefault();
			return false;
    	});
    	
    	$j("input.jive-form-button-submit").live('click', function(clickEvent) {
			self.configuration.uri = $j('#uri').val();
			self.configuration.scanTimeout = $j('#scanTimeout').val();
			self.configuration.enabled = self.getValue($j('input[name="enabled"]:checked'));
			self.configuration.notifyAuthor = self.getValue($j('input[name="notifyAuthor"]:checked'));
			
			self.emitP('updateConfiguration', self.configuration, "enabled,uri,notifyAuthor,scanTimeout")
				.addCallback(function(configuration) {
					self.displayConfiguration(configuration);
			      	
			      	var message = $j('span.antivirus-success-message').clone().appendTo('#j-dynamic-pane');
			      	$j(message).show();
			      	$j(message).message({
			            style: 'success'
			        });
	            }).addErrback(function(message, code) {
    				console.log(message);
    				
			      	var message = $j('span.antivirus-error-message').clone().appendTo('#j-dynamic-pane');
			      	$j(message).show();
			      	$j(message).message({
			            style: 'error'
			        });
	            });
			
    		
	        clickEvent.preventDefault();
			return false;
    	});
    	
		this.emitP('getConfiguration', "enabled,uri,notifyAuthor,scanTimeout")
			.addCallback(function(configuration) {
				self.displayConfiguration(configuration);
            }).addErrback(function(message, code) {
				console.log(message);
    				
		      	var message = $j('span.antivirus-error-message').clone().appendTo('#j-dynamic-pane');
		      	$j(message).show();
		      	$j(message).message({
		            style: 'error'
		        });
            });
    }
    
    this.displayConfiguration = function(configuration) {
		this.configuration = configuration;
		
		$j('#uri').val(configuration.uri);
		$j('#scanTimeout').val(configuration.scanTimeout);
		$j('#enabled-' + configuration.enabled).attr('checked', 'checked');
		$j('#notifyAuthor-' + configuration.notifyAuthor).attr('checked', 'checked');
    };
    
    this.getValue = function(checkedRadioElement) {
    	var idValue = checkedRadioElement.attr('id');
    	
    	return "true" == idValue.split("-")[1];
    };
});
;
jive.namespace('antivirus.configuration');

/**
 * @depends path=/plugins/antivirus/resources/script/apps/antivirusConfiguration/models/antivirusConfiguration_source.js
 * @depends path=/plugins/antivirus/resources/script/apps/antivirusConfiguration/views/antivirusConfiguration_view.js
 */
jive.antivirus.configuration.Main = jive.oo.Class.extend(function(protect) {

    this.init = function(options) {
    	this.options = options;
    	var main = this;
    	
    	main.model = new jive.antivirus.configuration.AntivirusConfigurationSource(options);
        main.view = new jive.antivirus.configuration.AntivirusConfigurationView(options);
        
		main.view.addListener('getConfiguration', function(fields, promise) {
			main.model.getConfiguration(fields, promise)
                .addCallback(promise.emitSuccess.bind(promise))
			    .addErrback(promise.emitError.bind(promise));
		});
		
		main.view.addListener('updateConfiguration', function(antivirusConfiguration, fields, promise) {
			main.model.updateConfiguration(antivirusConfiguration, fields, promise)
                .addCallback(promise.emitSuccess.bind(promise))
			    .addErrback(promise.emitError.bind(promise));
		});
    };
});
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.antivirus=="undefined"){jive.antivirus={}}jive.antivirus.configuration=function(A,C){var B=C||new soy.StringBuilder();B.append("<head><title>",soy.$$escapeHtmlRcdata(jive.i18n.i18nText(jive.i18n.getMsg("antivirus.configuration.title"),[])),'</title><meta name="description" content="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("antivirus.configuration.description"),[])),'" />');jive.shared.soy.resourceInlineJs({code:"var avConfiguration = new jive.antivirus.configuration.Main();"},B);B.append('</head><body class="j-body-home j-body-antivirus"><div class="j-layout j-layout-sl clearfix j-contained" id="j-antivirus-main"><div class="j-column-wrap-s"><nav class="j-column j-column-s" role="navigation" aria-label="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("antivirus.manage.title"),[])),'"><ul id="j-home-side-nav" class="j-homenav"><li id="jive-nav-link-configuration" class="j-js-side-nav-item j-homenav-item selected" data-source="all"><span class="jive-icon-med jive-icon-moderate j-homenav-icon"></span><a href="/antivirus-configuration.jspa" class="j-homenav-link j-js-side-nav-link j-ui-elem"><span class="nav-link lnk">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("antivirus.configuration.label"),[])),'</span></a></li></ul></nav></div><!-- BEGIN large column --><div class="j-column-wrap-l"><div id="j-dynamic-pane" class="j-column j-column-l"><span class="antivirus-success-message">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("antivirus.configuration.successful.message"),[])),'</span><span class="antivirus-error-message">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("antivirus.configuration.error.message"),[])),'</span><form action="',jive.soy.func.normalizeUrl(window._jive_base_url,"/"),'" method="post" id="antivirus-edit-form" name="settingsform" enctype="multipart/form-data" autocomplete="off"><div class="jive-table"><table cellpadding="3" cellspacing="2" class="jive-edit-antivirus"><tbody><tr><td class="jive-antivirus-label jive-label-required"><label for="enabled">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("antivirus.enabled.label"),[])),' <span class="required">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.required.parens"),[])),"</span>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.colon"),[])),'</label></td><td class="jive-antivirus-edit-field"><input type="radio" name="enabled" id="enabled-true" value="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.yes"),[])),'"><label for="enabled-true">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.yes"),[])),'</label><br/><input type="radio" name="enabled" id="enabled-false" value="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.no"),[])),'"><label for="enabled-false">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.no"),[])),'</label></td><td class="jive-antivirus-edit-desc"><span class="jive-form-instructions font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("antivirus.enabled.description"),[])),'</span></td></tr><tr><td class="jive-antivirus-label jive-label-required"><label for="uri">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("antivirus.uri.label"),[])),' <span class="required">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.required.parens"),[])),"</span>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.colon"),[])),'</label></td><td class="jive-antivirus-edit-field"><input type="text" name="uri" size="40" id="uri"></td><td class="jive-antivirus-edit-desc"><span class="jive-form-instructions font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("antivirus.uri.description"),[])),'</span></td></tr><tr><td class="jive-antivirus-label jive-label-required"><label for="notifyAuthor">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("antivirus.notifyAuthor.label"),[])),' <span class="required">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.required.parens"),[])),"</span>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.colon"),[])),'</label></td><td class="jive-antivirus-edit-field"><input type="radio" name="notifyAuthor" id="notifyAuthor-true" value="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.yes"),[])),'"><label for="notifyAuthor-true">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.yes"),[])),'</label><br/><input type="radio" name="notifyAuthor" id="notifyAuthor-false" value="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.no"),[])),'"><label for="notifyAuthor-false">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.no"),[])),'</label></td><td class="jive-antivirus-edit-desc"><span class="jive-form-instructions font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("antivirus.notifyAuthor.description"),[])),'</span></td></tr><tr><td class="jive-antivirus-label jive-label-required"><label for="scanTimeout">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("antivirus.scanTimeout.label"),[])),' <span class="required">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.required.parens"),[])),"</span>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.colon"),[])),'</label></td><td class="jive-antivirus-edit-field"><input type="text" name="scanTimeout" size="40" id="scanTimeout"></td><td class="jive-antivirus-edit-desc"><span class="jive-form-instructions font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("antivirus.scanTimeout.description"),[])),'</span></td></tr><tr><td>&nbsp;</td><td class="jive-edit-antivirus-submit" colspan="2"><input type="submit" name="save" class="jive-form-button-submit j-btn-callout" value="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.save"),[])),'"><input type="submit" name="cancel" class="jive-form-button-cancel" value="',soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg("global.cancel"),[])),'"></td></tr></tbody></table></div></form></div></div></div></body>');return C?"":B.toString()}
;
jive.namespace('antivirus');

jive.antivirus.AntivirusSource = jive.RestService.extend(function(protect) {
	protect.resourceType = "scanRecord";
    protect.pluralizedResourceType = protect.resourceType;
    
    var serviceUrl = _jive_base_url + "/api/core/ext/antivirus/v3/antivirus/";
	
	this.getScanRecord = function(scannedObjectType, scannedObjectID, fields, promise) {
	    if (!promise) {
            promise = new jive.conc.Promise();
        }
        
		var url = serviceUrl + scannedObjectType + "/" + scannedObjectID;
        
        return this.commonAjaxRequest(promise, 'GET', {url:url, data:{fields:fields} || {}});
    };
    
    this.scan = function(scannedObjectType, scannedObjectID, fields, promise) {
	    if (!promise) {
            promise = new jive.conc.Promise();
        }
    
		var url = serviceUrl + scannedObjectType + "/" + scannedObjectID;

		protect.displayGenericErrorMessages = false;
		
        return this.commonAjaxRequest(promise, 'PUT', {url:url, data:{fields:fields} || {}})
					.always(function() {
			            protect.displayGenericErrorMessages = true;
			        });
    };
});
;
jive.namespace('antivirus');

jive.antivirus.AntivirusView = jive.AbstractView.extend(function(protect) {
    
    jive.conc.observable(this);
    
    this.init = function(options) {
        this.options = options;
        
        this.interceptAttachmentLinks();
		this.interceptDocumentBodyLinks();
    }
    
    this.interceptAttachmentLinks = function() {
    	var view = this;
    	
    	$j("div.jive-attachments li").each(function(index) {
	    	var $container = $j(this);
	    	var scannedObjectType = 13;
	    	var scannedObjectID = $container.attr("data-attachmentid");
    	
    		view.interceptScannedObjectLink($container, scannedObjectType, scannedObjectID, "div.j-attachment-info span.j-attach-meta");
    	});
	};
	
    this.interceptDocumentBodyLinks = function() {
    	var view = this;
    	
    	$j("div.jive-wiki-body-download").each(function(index) {
	    	var $container = $j(this);
	    	var scannedObjectType = 110;
	    	var scannedObjectID = view.getBodyId($container);
    	
    		view.interceptScannedObjectLink($container, scannedObjectType, scannedObjectID, "span.jive-wiki-body-file span.jive-wiki-body-file-actions");
    	});
	};
    
    this.interceptScannedObjectLink = function($container, scannedObjectType, scannedObjectID, scanStatusTextInputSelector, scanOnDownloadHandler, startDownlaod) {
    	var view = this;
    	
    	if (!scanOnDownloadHandler) {
    		scanOnDownloadHandler = this.getScanOnDownloadHandler($container, scanStatusTextInputSelector, scannedObjectType, scannedObjectID);
    		
	    	$container.find("a").each(function() {
				var $scanObjectLink = $j(this);
	
				$scanObjectLink.click(scanOnDownloadHandler);
			});
    	}

		view.emitP('getScanRecord', scannedObjectType, scannedObjectID, "status,enabled,preventDownload,rescannable,labelKey,descriptionKey,lastScanDate")
			.addCallback(function(scanRecord) {
				var $scanObjectLink;
				
    			$container.find("a").each(function() {
    				$scanObjectLink = $j(this);
			
    				if (scanRecord.preventDownload) {
	    				if (!scanRecord.rescannable) {
	    					var $linkClass = $scanObjectLink.attr("class");
						    $scanObjectLink.after('<span class="' + $linkClass + '">' + $scanObjectLink.html() + '</span>');
						    $scanObjectLink.remove();
					    }
					} else {
						$scanObjectLink.unbind('click', scanOnDownloadHandler);
					}
				});

				if (scanRecord.enabled || (scanRecord.preventDownload && !scanRecord.rescannable)) {
					$container.find(scanStatusTextInputSelector).after('<span class="j-antivirus j-antivirus-' + scanRecord.status + '"><strong>' + jive.i18n.getMsg(scanRecord.labelKey) + '</strong> ' + jive.i18n.i18nText(jive.i18n.getMsg(scanRecord.descriptionKey), [scanRecord.lastScanDate]) + '</span>');
				}
				
				if (scannedObjectType == 110 && (scanRecord.preventDownload && !scanRecord.rescannable)) {
					$container.find(scanStatusTextInputSelector).remove();
				}
				
				if ($scanObjectLink && startDownlaod) {
					window.location = $scanObjectLink.attr("href");
				}
            }).addErrback(function(message, code) {
    			$container.find("a").each(function() {
    				$scanObjectLink = $j(this);
    				
					var $linkClass = $scanObjectLink.attr("class");
				    $scanObjectLink.after('<span class="' + $linkClass + '">' + $scanObjectLink.html() + '</span>');
				    $scanObjectLink.remove();
				});
            });
	};
	
	this.getScanOnDownloadHandler = function($container, scanStatusTextInputSelector, scannedObjectType, scannedObjectID) {
		var view = this;
		var scanning = false;
		
	    var scanOnDownloadHandler = function(clickEvent) {
	        if (!scanning) {
	        	scanning = view.scanStarting($container);
	        	
		        var $linkClicked = $j(clickEvent.currentTarget);
		    		    	
				view.emitP('scan', scannedObjectType, scannedObjectID, "status,preventDownload")
					.addCallback(function(scanRecord) {
						scanning = view.scanComplete($container);
			    		view.interceptScannedObjectLink($container, scannedObjectType, scannedObjectID, scanStatusTextInputSelector, scanOnDownloadHandler, !scanRecord.preventDownload);
		            }).addErrback(function(message, code) {
		            	if (code == 501) {
		            		// Antivirus Extension is disabled.  Continue with download. VIRUS-161
							var $scanObjectLink;
							
			    			$container.find("a").each(function() {
			    				$scanObjectLink = $j(this);
		
								$scanObjectLink.unbind('click', scanOnDownloadHandler);
							});
							
							$container.find("div.j-antivirus-scanning").remove();
							
							if ($scanObjectLink) {
								window.location = $scanObjectLink.attr("href");
							}
		            	} else {
		            		scanning = view.scanComplete($container);
		                	view.interceptScannedObjectLink($container, scannedObjectType, scannedObjectID, scanStatusTextInputSelector, scanOnDownloadHandler);
		            	}
		            });
            }
	            
	        clickEvent.preventDefault();
			return false;
		};
		
		return scanOnDownloadHandler;
	};
	
	this.scanStarting = function($container) {
		$container.find(".j-antivirus").each(function() {
			var $scanStatusText = $j(this);
			$scanStatusText.after('<div class="j-antivirus-scanning"><div><strong>' + jive.i18n.getMsg('antivirus.scanning.text') + '</strong></div></div>');
			$scanStatusText.remove();
		});
		
		return true;
	};
	
	this.scanComplete = function($container) {
		$container.find(".j-antivirus-scanning").each(function() {
			var $scanStatusText = $j(this);
			$scanStatusText.remove();
		});
		
		return false;
	};
	
	this.getBodyId = function(bodyContainer) {
		var $bodyContainer = $j(bodyContainer);
	
		var bodyHref = $bodyContainer.find("a").first().attr("href");
		
		var path = bodyHref.split("/");
		
		if (path.length > 2) {
			var docId = path[path.length - 2];
			var docIds = docId.split("-");
			
			if (docIds.length > 1) {
				var bodyId = docIds[docIds.length - 1];
				return bodyId;
			}
		}
		
		return;	
	};
});
;
jive.namespace('antivirus');

/**
 * @depends path=/plugins/antivirus/resources/script/apps/antivirus/models/antivirus_source.js
 * @depends path=/plugins/antivirus/resources/script/apps/antivirus/views/antivirus_view.js
 */
jive.antivirus.Main = jive.oo.Class.extend(function(protect) {

    this.init = function(options) {
    	this.options = options;
    	var main = this;
    	
    	main.model = new jive.antivirus.AntivirusSource(options);
        main.view = new jive.antivirus.AntivirusView(options);
        
		main.view.addListener('getScanRecord', function(scannedObjectType, scannedObjectID, fields, promise) {
			main.model.getScanRecord(scannedObjectType, scannedObjectID, fields, promise)
                .addCallback(promise.emitSuccess.bind(promise))
			    .addErrback(promise.emitError.bind(promise));
		});
		
		main.view.addListener('scan', function(scannedObjectType, scannedObjectID, fields, promise) {
			main.model.scan(scannedObjectType, scannedObjectID, fields, promise)
                .addCallback(promise.emitSuccess.bind(promise))
			    .addErrback(promise.emitError.bind(promise));
		});
    };
});
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.antivirus=="undefined"){jive.antivirus={}}if(typeof jive.antivirus.eae=="undefined"){jive.antivirus.eae={}}if(typeof jive.antivirus.eae.actionqueue=="undefined"){jive.antivirus.eae.actionqueue={}}if(typeof jive.antivirus.eae.actionqueue.item=="undefined"){jive.antivirus.eae.actionqueue.item={}}jive.antivirus.eae.actionqueue.item.violationFoundNotification=function(A,G){var B=G||new soy.StringBuilder();B.append('\t<div class="j-aq-data j-aq-av antivirus-violation-found clearfix"><span class="jive-icon-big jive-icon-warn"></span><h4 class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("antivirus.eae.actionqueue.violation.label"),[])),"</h4><p> ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("antivirus.eae.actionqueue.violation.message"),[A.data.fileName,A.data.violations,new soydata.SanitizedHtml('<strong><a href="'+A.data.scannedObjectData.href+'" class="title"><span class="'+A.data.scannedObjectData.iconCSS+'"></span>'+A.data.scannedObjectData.displayName+"</a></strong>"),new soydata.SanitizedHtml('<a href="'+jive.soy.func.normalizeUrl(window._jive_base_url,"/people/"+encodeURIComponent(A.data.contentAuthor.username))+'" data-username="'+A.data.contentAuthor.username+'" data-avatarId="'+A.data.contentAuthor.avatarID+'" data-userId="'+A.data.contentAuthor.id+'" class="jive-username-link jiveTT-hover-user">'+A.data.contentAuthor.displayName+"</a>")])),' </p></div><div class="j-act-meta font-color-meta-light">',(A.creationTime)?"<strong>"+soy.$$escapeHtml(A.creationTime)+"</strong>":"","</div>");if(A.renderLocation=="actions"){B.append('<div class="j-aq-actions clearfix">');if(A.data.actionable){var D=A.data.actions;var E=D.length;for(var F=0;F<E;F++){var C=D[F];B.append((C.href)?'<a href="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(C.href))+'" class="j-btn-global j-action-button">'+soy.$$escapeHtml(C.name)+"</a>":'<a href="#" name="'+soy.$$escapeHtmlAttribute(C.code)+'" class="j-btn-global j-action-button">'+soy.$$escapeHtml(C.name)+"</a>")}}else{if(A.data.actionTakenKey){B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.actionTakenKey),[])))}}B.append("</div>")}return G?"":B.toString()}
;
/**
 * jQuery Scrolling Parallax v0.1
 * http://jonraasch.com/blog/scrolling-parallax-jquery-plugin
 *
 * Copyright (c) 2009 Jon Raasch (http://jonraasch.com/)
 * Licensed under the FreeBSD License (See terms below)
 *
 * @author Jon Raasch
 *
 * @projectDescription    jQuery plugin to create a parallax effect when the page is scrolled.
 * 
 * @version 0.1.0
 * 
 * @requires jquery.js (v 1.3.2 minimum)
 *
 *
 * TERMS OF USE - jQuery Scrolling Parallax
 * Open source under the FreeBSD License.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 *
 *    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 *    2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY JON RAASCH ``AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JON RAASCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * The views and conclusions contained in the software and documentation are those of the authors and should not be interpreted as representing official policies, either expressed or implied, of Jon Raasch, who is the man.
 * 
 *
 * FOR USAGE INSTRUCTIONS SEE THE DOCUMENATION AT: http://dev.jonraasch.com/scrolling-parallax/documentation
 * 
 *
 */


( function( $j ) {
    
    $j.scrollingParallax = function ( box, options )
    {
        var options = options || {};
        
        // vertical options
        
        options.enableVertical = typeof( options.enableVertical ) != 'undefined' ? options.enableVertical : true;
        
        if ( options.enableVertical ) {
            options.staticSpeed = options.staticSpeed || false;
            options.staticScrollLimit = typeof(options.staticScrollLimit) != 'undefined' ? options.staticScrollLimit : true;
            
            options.loopIt = options.loopIt || false;
            
            options.reverseDirection = options.reverseDirection || false;
        }
        
        // horizontal options
        
        options.enableHorizontal = options.enableHorizontal || false;
        
        if ( options.enableHorizontal ) {
            options.staticSpeedX = options.staticSpeedX || false;
            options.staticScrollLimitX = typeof(options.staticScrollLimitX) != 'undefined' ? options.staticScrollLimitX : true;
            
            options.loopItX = options.loopItX || false;
            
            options.reverseDirectionX = options.reverseDirectionX || false;
        }
        
        // IE6 options
        
        options.disableIE6 = options.disableIE6 || false; // disables in IE6 altogether
        options.disableIE6Anim = typeof(options.disableIE6Anim) != 'undefined' ? options.disableIE6Anim : true; // disables IE6 animation, however background will still append
        
        // layout options
        
        options.bgWidth = options.bgWidth || (options.enableHorizontal ? '150%' : '100%' );
        options.bgHeight = options.bgHeight || '150%';
        
        options.bgRepeat = options.bgRepeat || false;
        
        options.appendInFront = options.appendInFront || false;
        
        options.parallaxHeight = options.parallaxHeight || false;
        options.parallaxWidth = options.parallaxWidth || false;
        
                
        var isIE6 = $j.browser.msie && $j.browser.version < 7 ? true : false;
        
        if ( options.disableIE6 && isIE6 ) return false;
        
        var $jdocument = $j(document);
        var $jwindow   = $j(window);
        var $jbox;

        var backgroundMode = false;

        if ( options.enableVertical ) {
            var boxHeight;
            var windowHeight;
            var docHeight;
            var parallaxRoom;
            var maxIE6Move = 0;
            var loopCount = 0;
            var startingPos = 0;
            var tooSmallMode = false;
            var oldMoveIt = null;
        }
        
        if ( options.enableHorizontal ) {
            var boxWidth;
            var windowWidth;
            var docWidth;
            var parallaxRoomX;
            var maxIE6MoveX = 0;
            var loopCountX = 0;
            var startingPosX = 0;
            var tooSmallModeX = false;
            var oldMoveItX = null;
        }
        
        init( box );
        
        
        
        // init( obj/string box )   :  sets up the parallax and associated events
        
        function init( box ) {
            // if string append image as background, otherwise define as jQuery object
            if ( typeof( box ) == 'string' ) $jbox = appendBackground( box );
            else {
                $jbox = $j( box );
                
                $jbox.css('position', isIE6 ? 'absolute' : 'fixed');
                
                if ( options.enableVertical ) startingPos = parseInt( $jbox.css('top') );
                
                if ( options.enableHorizontal ) startingPosX = parseInt( $jbox.css('left') );
            }
            
            if ( options.disableIE6Anim && isIE6 ) return false;
            
            defineSizes();
            
            // if in background mode, and reverseDirection, then attch the background to the opposite end to maximize scrolling room
            if ( backgroundMode ) {
                if ( options.reverseDirection && options.enableVertical ) {
                    startingPos += -1 * parallaxRoom;
                    $jbox.css('top', startingPos);
                }
                
                if ( options.reverseDirectionX && options.enableHorizontal ) {
                    startingPosX += -1 * parallaxRoomX;
                    $jbox.css('left', startingPosX);
                }
            }
            
            // attach scroll and resize events
            
            $jwindow.scroll( function() {
                ani();
            });
            
            $jwindow.resize( function() {
                defineSizes();
            });
        }
        
        
        
        
        // appendBackground( string theSrc )  :   appends an image to the page as a stretched background
        
        function appendBackground( theSrc ) {
            var bgCss = {
                display:   'block',
                top:       0,
                left:      0,
                width:     options.bgWidth,
                height:    options.bgHeight,
                zIndex:    0
            };
            
            bgCss.position = isIE6 ? 'absolute' : 'fixed';
            
            if ( options.bgRepeat ) {
                var $jobj = options.appendInFront ? $j('<div></div>').appendTo( $j('body') ) : $j('<div></div>').prependTo( $j('body') );
                bgCss.backgroundRepeat = 'repeat';
                bgCss.backgroundImage  = 'url("' + theSrc + '")';
            }
            else {
                var $jobj = options.appendInFront ? $j('<img />').appendTo( $j('body') ) : $j('<img />').prependTo( $j('body') );
                $jobj.attr('src', theSrc);
            }
            
            
            $jobj.css( bgCss );
            
            backgroundMode = true;
            
            return $jobj;
        }
        
        
        
        
        // defineSizes()  :  sets up various constants used by the app - must be set on page load and on screen resize
        
        function defineSizes() {
        
            // define vertical vars
            
            if ( options.enableVertical ) {
                boxHeight = $jbox.height();
                windowHeight = $jwindow.height();
                docHeight = $jdocument.height();
                
                parallaxRoom = ( options.parallaxHeight || boxHeight ) - windowHeight;
                
                // if parallax object is smaller than window size
                if ( parallaxRoom < 0 ) {
                    if ( options.staticSpeed ) parallaxRoom = windowHeight -  boxHeight;
                    else parallaxRoom = options.reverseDirection ? windowHeight - startingPos - boxHeight : startingPos;
                    
                    tooSmallMode = true;
                }
                
                if ( isIE6 && !maxIE6Move ) maxIE6Move =  -1 * ( docHeight - boxHeight );
                
                if ( options.loopIt ) loopCount = parseInt( $jdocument.scrollTop() / ( tooSmallMode ? windowHeight : boxHeight ) );
            }
            
            // define horizontal vars

            if ( options.enableHorizontal ) {
                boxWidth = $jbox.width();
                windowWidth = $jwindow.width();
                docWidth = $jdocument.width();
                
                parallaxRoomX = ( options.parallaxWidth || boxWidth ) - windowWidth;
            
                // if parallax object is smaller than window size
                if ( parallaxRoomX < 0 ) {
                    parallaxRoomX = options.staticSpeedX ? windowWidth - boxWidth : options.reverseDirectionX ? windowWidth - startingPosX - boxWidth : startingPosX;
                    
                    tooSmallModeX = true;
                }
                
                if ( isIE6 && !maxIE6MoveX ) maxIE6MoveX =  -1 * ( docWidth - boxWidth );
                
                if ( options.loopItX ) loopCountX = parseInt( $jdocument.scrollLeft() / ( tooSmallModeX ? windowWidth : boxWidth ) );
            }
            
            // make any changes
            ani();
        }
        
        
        
        // ani()  :  performs the animation of the object
        
        function ani() {
            
            // dont let multiple animations queue up
            $jbox.queue( [ ] );
            
            var theCss = {};
            
            
            // vertical
            if ( options.enableVertical ) {
            
                var moveIt = calculateMove(true);
                
                theCss.top = moveIt;
            }

            
            // horizontal
            if ( options.enableHorizontal ) {
                
                var moveItX = calculateMove(false);
                
                theCss.left = moveItX;
            }
            
            // if large move animate in FF, safari and opera for smoother transition
            if ( !$j.browser.msie && ( Math.abs( oldMoveIt - moveIt ) > 100 || Math.abs( oldMoveItX - moveItX ) > 100 ) ) $jbox.animate(theCss, 30);
            else $jbox.css(theCss);
            
            oldMoveIt = moveIt;
            oldMoveItX = moveItX;

        }
        
        
        
        // calculateMove( boolean vertical ) : determines amount to move whether vertically or horizontally
        
        function calculateMove( vertical ) {
            // establish variables, this is basically a switch between vertical and horizontal modes
            if ( vertical ) {
                var offset =  $jdocument.scrollTop();
                var docSize = docHeight;
                var windowSize = windowHeight;
                var boxSize = boxHeight;
                
                var parallaxRoom2 = parallaxRoom;
                
                var loopCount2 = loopCount;
                var startingPos2 = startingPos;
                var parallaxRoom2 = parallaxRoom;
                var tooSmallMode2 = tooSmallMode;
                var maxIE6Move2 = maxIE6Move;
                
                var opts = {
                    reverseDirection : options.reverseDirection,
                    staticSpeed : options.staticSpeed,
                    loopIt : options.loopIt,
                    staticScrollLimit : options.staticScrollLimit
                }
            }
            else {
                var offset = $jdocument.scrollLeft();
                var docSize = docWidth;
                var windowSize = windowWidth;
                var boxSize = boxWidth;
                
                var loopCount2 = loopCountX;
                var startingPos2 = startingPosX;
                var parallaxRoom2 = parallaxRoomX;
                var tooSmallMode2 = tooSmallModeX;
                var maxIE6Move2 = maxIE6MoveX;
                
                var opts = {
                    reverseDirection : options.reverseDirectionX,
                    staticSpeed : options.staticSpeedX,
                    loopIt : options.loopItX,
                    staticScrollLimit : options.staticScrollLimitX
                }
            }
            
            /*** get move amount - static speed ***/
            
            if ( opts.staticSpeed ) {
                var move = offset * opts.staticSpeed;

                // account for number of loops
                move -= parallaxRoom2 * ( loopCount2 );
            }
            
            /*** get move amount - auto speed ***/
            
            else {
                // determine percentage of page that has been scrolled down
                var offsetPercent = offset / ( docSize - windowSize );
                
                /*
                var moveIt = ( $j.browser.msie && $j.browser.version < 7 ) 
                    ? -1 * ( offsetParent * parallaxRoom + offsetTop )
                    : -1 * offsetPercent * parallaxRoom;
                */
                
                var move = offsetPercent * parallaxRoom2;
            }
            
            // reverse direction
            if ( !opts.reverseDirection ) move *= -1;
            
            // incorporate starting position
            move += startingPos2;
            
            // if static speed set, make sure move is within bounds
            if ( opts.staticSpeed ) move = checkMove( move, vertical, opts, parallaxRoom2, tooSmallMode2 );
            
            
            // if in tooSmallMode and looping, add difference of window height and box height, since the box needs to be conceptualized as that much taller ( otherwise it would loop in place rather than over the screen )
            if ( tooSmallMode2 && opts.staticSpeed && opts.loopIt ) move += windowSize - boxSize;
            
            if ( isIE6 ) {
                // IE6 fix for fixed positioning
                move += offset;
                move = Math.max( parseInt(move), parseInt(maxIE6Move2) );
            }
            
            return move;
        }
        
        
        
        // checkMove( int moveIt )  :  checks to ensure that move amount does not exceed established bounds
        
        function checkMove( move, vertical, opts, parallaxRoom, tooSmallMode ) {

            // if overflow limited
            if ( !opts.loopIt ) {
                if ( opts.staticScrollLimit ){
                    if ( tooSmallMode ) {
                        if ( move < 0 ) move = 0;
                        if ( move > parallaxRoom ) move = parallaxRoom;
                    }
                    else {
                        if ( move > 0 ) move = 0;
                        if ( -1 * move > parallaxRoom ) move = -1 * parallaxRoom;
                    }
                }
            }
            
            // if overflow loops
            else {
                while ( move < parallaxRoom ) {
                    move += parallaxRoom;
                    
                    var loopCountChange = opts.reverseDirection ? -1 : 1;
                    
                    if ( vertical ) loopCount += loopCountChange;
                    else loopCountX += loopCountChange;
                }
                
                while ( move > ( opts.reverseDirection ? -1 : 0 ) ) {
                    move -= parallaxRoom;
                    
                    var loopCountChange = opts.reverseDirection ? -1 : 1;
                    
                    if ( vertical ) loopCount -= loopCountChange;
                    else loopCountX -= loopCountChange;
                }
            }
            
            return move;
        }
    };
    
    $j.fn.scrollingParallax = function ( options )
    {
        
        this.each( function() 
            {
                new $j.scrollingParallax( this, options );
            }
        );
        
        return this;
    };
})( jQuery );
;
var Parallax = function () {
	var _public = {};

	var parallaxSetup = function () {
		var settings = {
			staticSpeed : _public.options.staticSpeed,
	        staticScrollLimit : _public.options.staticScrollLimit
		};
		
		var settings2 = {
				staticSpeed : 1.9,
		        staticScrollLimit : _public.options.staticScrollLimit
			};		
		
	
		// http://jonraasch.com/blog/scrolling-parallax-jquery-plugin
		// Placing img on page and calling this way because calling like so $j.scrollingParallax('img/background-parallax.jpg'); doesn't center/stretch well
		$j('#shapes_right').scrollingParallax(settings);

		$j('#shapes_left').scrollingParallax(settings2);
	};

	_public.init = function (options) {
		_public.options = $j.extend({
			staticSpeed : 1.6,
	        staticScrollLimit : false,
	        loopIt : true 
		}, options);

		parallaxSetup();
	};

	return _public;
} ();

$j(function ($j) {
	Parallax.init();
});
;
