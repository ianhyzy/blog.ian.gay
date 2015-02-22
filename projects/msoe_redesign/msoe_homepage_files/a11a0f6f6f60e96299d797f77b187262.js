var nitroProtocol = "http";
if( document.location.toString().indexOf( 'https://' ) != -1 ) {
	nitroProtocol = "https";
}
if (typeof nitroLibsVersion == "undefined") {
	nitroLibsVersion = "current";	
}	


if (typeof Nitro=="undefined") {
	
	function Nitro(connectionParams) {

		if (typeof Nitro.counter == "undefined") {
			Nitro.counter = 0;			
		}
		if (typeof Nitro.instances == "undefined") {
			Nitro.instances = new Array();			
		}
		if (typeof Nitro.divCounter == "undefined") {
			Nitro.divCounter = 0;	
		}
		
		this.counterId = Nitro.counter ++;
		var twitterEnabled = null;	
		var twitterLoginUrl = null;
		var facebookEnabled = null;
		var facebookLoginUrl = null;
		var paymentOptions = null;
		var paymentMethods = null;
		
		Nitro.instances.push(this);
		
		this.connectionParams = connectionParams;
		if (typeof this.connectionParams.debug == "undefined") {
			this.connectionParams.debug = false;
		}
		Nitro.debug = this.connectionParams.debug;
		this.jsConnector = new NitroJSConnector(connectionParams);
		
		//asynchronous since this object doesn't exist until the closing bracket
		var thisObj = this;
		setTimeout(function() {thisObj.handleRedirects();}, 250);
		
		this.getUserId = function (callback) {
			return NitroCookies.getUserId(this.connectionParams.apiKey, callback);
		}
		
		Nitro.getUserId = function (apiKey, callback) {
			return NitroCookies.getUserId(apiKey, callback);	
		}
		
		this.setUserId = function (value) {
			NitroCookies.setUserId(this.connectionParams.apiKey, value, true, false);
		}
		
		this.showPendingNotifications = function(callback, asyncToken, returnCount) {
			NitroNotifier.jsConnector = this.jsConnector;
			return NitroNotifier.showPendingNotifications(this.connectionParams, callback, asyncToken, returnCount);
		}
		Nitro.showPendingNotificationsNoCallback = function(callback, asyncToken) {
			var instance = Nitro.getInstanceForCounter(asyncToken);			
			return instance.showPendingNotifications();
		}		
		this.showNotificationsByName = function(notificationNames, callback, asyncToken, previewMode) {
			NitroNotifier.jsConnector = this.jsConnector;
			return NitroNotifier.showNotificationsByName(this.connectionParams, notificationNames, callback, asyncToken, previewMode);
		}
		this.getNotificationsFeed = function(callback, asyncToken, userIds, returnCount) {
			NitroNotifier.jsConnector = this.jsConnector;
			return NitroNotifier.getNotificationsFeed(this.connectionParams, callback, asyncToken, userIds, returnCount);
		}
		this.callAPI = function (params, callback, asyncToken, addUserId, noSessionKey) {
			return this.jsConnector.callAPI(params, callback, asyncToken, addUserId, noSessionKey);
		}	
		Nitro.callAPI = function (params, callback, asyncToken, addUserId, noSessionKey) {
			var instance = Nitro.getInstanceForCounter(asyncToken);			
			return instance.callAPI(params, callback, asyncToken, addUserId, noSessionKey);
		}
		this.logAction = function (tags, value) {
		  	this.jsConnector.callAPI("method=user.logAction&tags="+tags+(value ? '&value='+value : ''), "Nitro.processLogAction", this.counterId, true);
		}
		Nitro.logAction = function (tags, value, target, asyncToken) {
			var instance = Nitro.getInstanceForCounter(asyncToken);			
		  	instance.jsConnector.callAPI("method=user.logAction&tags="+tags+(value ? '&value='+value : '')+(target ? '&target='+target : ''), "Nitro.processLogAction", this.counterId, true);
		}
		
		Nitro.getInstanceForResponse = function(data, counterId) {
			if (data == null) {
				if (Nitro.debug) {
					alert ('Error');
				}
				return;
			}
			if (data.Nitro.res == "err") {
				if (Nitro.debug) {
					alert (data.Nitro.Error.Message);
				}
				return;
			}
			
			return Nitro.getInstanceForCounter(counterId);
		}
		
		Nitro.getInstanceForCounter = function(counterId) {
			for (var i = 0; i < Nitro.instances.length; i++) {
				if (Nitro.instances[i].counterId == counterId) {
					return Nitro.instances[i];
				}
			}
			return null;
		}		
		
		Nitro.processLogAction = function(data, token) {
			var instance = Nitro.getInstanceForResponse(data,token);
			// copy over session key to avoid extra login
			instance.connectionParams.sessionKey = instance.jsConnector.connectionParams.sessionKey;	
			NitroNotifier.jsConnector = this.jsConnector;
			NitroNotifier.showPendingNotifications(instance.connectionParams);
		}
		
		this.embedWidget = function(embedNames,divId,owner) {
			if (owner == null) {
				owner = "";	
			}
			if (this.jsConnector.connectionParams.userId == null) {
				var _self = this;
				setTimeout(function(){
					_self.embedWidget(embedNames,owner);
				}, this.retryEmbedInterval);
				return;			 
			}

			this.callAPI("method=user.getWidgetEmbeds&embedNames=" + embedNames, "Nitro.processGetWidgetEmbeds", this.counterId + "|" + divId + "|" + owner);
		}
		
		Nitro.processGetWidgetEmbeds = function(data, token) {
			var cId = token.split("|")[0];
			var instance = Nitro.getInstanceForResponse(data,cId);			
			instance.embedWidgetWithParams(data, token.split("|")[1], token.split("|")[2]);
		}
		
		this.embedWidgetWithParams = function(data, divId, owner) {
			var viewerId = this.jsConnector.connectionParams.userId;
			var ownerId = this.jsConnector.connectionParams.userId;		
			if (owner != null && owner != "") {
				ownerId = owner;	
			}
			var server = this.connectionParams.server.replace("/json", "/xml");
			
			var embedsArray = this.makeArray(data.Nitro.widgetEmbeds.WidgetEmbed);
			if (typeof embedsArray == "undefined") {
				return;	
			}
			
			for (var i=0; i < embedsArray.length; i++) {
				var embed = embedsArray[i];
				var type = embed.type;
				
				if(this.args && this.args[divId]) {
					var args = this.args[divId];
				}else  {
					var args = {};
				}
				args.apiKey=this.connectionParams.apiKey;
				args.server=server;
				args.ownerId=ownerId;
				args.viewerId=viewerId;
				args.divId=divId;
				args.nitroInstanceId=this.counterId;
					
				if (typeof this.connectionParams.timeStamp != "undefined") {
					args.timeStamp = this.connectionParams.timeStamp;
					args.signature = this.connectionParams.signature;
				}
				if (typeof this.connectionParams.sessionKey != "undefined") {
					args.sessionKey = this.connectionParams.sessionKey;				
				}

				var div = document.getElementById(divId);
				var attrs = div.attributes;

				/* precedence of params is
					1) Specified already in the args param
					2) Specified in the element tag via NML
					3) Specified in Nitro via the AdminUI
				*/
				var paramsArray = this.makeArray(embed.embedParams.WidgetEmbedParam);
				if (typeof paramsArray != "undefined") {
					for (var j=0; j < paramsArray.length; j++) {
						var param = paramsArray[j];
						//if the flashVar is not already set
						if(typeof args[param.name] == 'undefined') {
							//sets flashVars that came down from Nitro 
							if (param.value != null && param.value != "") {
								args[param.name] = param.value;
							}
							//overwrites those flashVars if they are specified via NML
							for(var k=attrs.length-1; k>=0; k--) {
								if (attrs[k].value == null || attrs[k].value == "null") {
									continue;
								}
								if (attrs[k].name.toLowerCase() == param.name.toLowerCase()) {
									args[param.name] = attrs[k].value;	
								}
							}
						}
					}
				}
				
				nitroWidget.embed(type, args);
			}
		}
		this.makeArray = function(obj) {
			if (typeof obj != "undefined" && typeof obj.length == "undefined") {
				return [obj];
			}
			return obj;
		}
		Nitro.isString = function() {
			if (typeof arguments[0] == 'string') 
				return true;
			if (typeof arguments[0] == 'object') {  
				var criterion = arguments[0].constructor.toString().match(/string/i); 
				return (criterion != null);  
			}
			return false;
		}		
		this.getElementForClass = function(className) {
			var all = document.all ? document.all :
			document.getElementsByTagName('*');
			var elements = new Array();
			for (var e = 0; e < all.length; e++)
				if (all[e].className.indexOf(className) != -1)
					elements[elements.length] = all[e];
			return elements;
		}
						
		this.addClass = function(elem, clazz) {
			if(!elem.className)
				elem.className = "";
			if(elem.className.indexOf(clazz) == -1) {
				elem.className+= " " + clazz;
			}
		}	
						
		this.removeClass = function(elem, clazz) {
			elem.className = elem.className ? elem.className.replace(clazz,'') : '';
		}		

		this.retryEmbedInterval = 10;
		
		this.refreshNML = function(primaryNMLThread) {
			if (this.jsConnector.connectionParams.sessionKey == null) {
				var _self = this;
				setTimeout(function(){
					_self.refreshNML();
				}, this.retryEmbedInterval);
				return;			 
			}
			
     		var items = document.getElementsByTagName("*");
		    var i=items.length;
			var elem;
			
			// look for tests first
			var testsToReplace = new Array();
			var testGroup = this.jsConnector.connectionParams.abTestGroup;
			if (typeof testGroup == "undefined" || testGroup == null || testGroup == "") {
				testGroup = "content";	
			}
			while (i > 0) {
				i--;
				elem = items[i];
				if (this.isNitroNode(elem, "block")) {
					var children = elem.getElementsByTagName("*");
					var childToUse = null;
					for (var j = 0; j < children.length; j++) {  
						var child = children[j];
						if (this.isNitroNode(child, testGroup)) {
							childToUse = child;
							break;
						}
					}					
					if (childToUse != null) {
						testsToReplace.push({child : child, elem : elem});						
					}					
				}
			}
			
			for (i = 0; i < testsToReplace.length; i++) {
				var testNode = testsToReplace[i].elem;
				var groupNode = testsToReplace[i].child;
				while (groupNode.firstChild) {
					testNode.parentNode.insertBefore(groupNode.firstChild, testNode);
				}
				testNode.parentNode.removeChild(testNode);
			}
			
			var nodeWasUpdated = false;
			items = document.getElementsByTagName("*");
		    i=items.length;
			while (i > 0) {
				i--;
				elem = items[i];
				if(elem && elem.id && elem.id.indexOf('nitro_elem_') == 0)	{
					//replacement in progress
					continue;
				}
				var params = "";
				var addUserId = false;
				var newElem = null;
				if (this.isNitroNode(elem, "request")) {
					var attrs = elem.attributes;
					for(var j=attrs.length-1; j>=0; j--) {
						if (attrs[j].name.toLowerCase() == "adduserid") {
							addUserId = true;
						}
						else if (this.isNitroParameter(attrs[j])) {
							var val = attrs[j].value;
							if(val.indexOf('eval(') != -1) {
								val = val.substring(6);
								val = val.substring(0,val.length-2);
								val = eval(val);
							}
							params += "&" + attrs[j].name + "=" + val;
						}
					}
					elem.id = "nitro_elem_" + Nitro.divCounter;
					this.callAPI(params, "Nitro.processNMLCall", this.counterId + "|" + elem.id, addUserId);	
					Nitro.divCounter++;
					nodeWasUpdated = true;
				}
				else if (this.isNitroNode(elem, "widget")) {
					var ownerId = this.getElemAttribute(elem,"ownerId");
					var name = elem.getAttribute("name");
					if (name == null || name == "") {
	  					continue;
					}
					if (ownerId == "") {
						ownerId = null;
					}
					elem.id = "nitro_elem_" + Nitro.divCounter;
					Nitro.divCounter++;

					if(!this.args)
						this.args = [];
					this.args[elem.id] = {};
					
					for(var i = 0; i < elem.attributes.length; i++) {
						var a = elem.attributes.item(i);
						if(a.name)
							eval("this.args[elem.id]['"+a.name+"']='"+a.value+"'");
					}					

					if(!this.args[elem.id].userId) 
						this.args[elem.id].userId = this.args[elem.id].userid ? this.args[elem.id].userid : this.jsConnector.connectionParams.userId;
						
					this.embedWidget(name, elem.id, ownerId);
					nodeWasUpdated = true;
				}
				else if (this.isNitroNode(elem, "avatar-full") || this.isNitroNode(elem, "avatar-thumb")) {
					var userId = this.jsConnector.connectionParams.userId;
					var ownerId = this.getElemAttribute(elem,"ownerId");
					if (ownerId != "" && ownerId != null) {
						userId = ownerId;
					}					
					var size = elem.getAttribute("size");
					var catalog = elem.getAttribute("catalog");
					var src = nitroProtocol + "://dynamic.bunchball.net/assets/avatar/" + this.connectionParams.apiKey + "/" + userId + "/";
					if (this.isNitroNode(elem, "avatar-full")) {
						src = src + "full.png";
					}
					else {
						src = src + "thumb.png";	
					}
					src = src + "?ts=" + (new Date()).getTime();
					if (size != null) {
						src = src + "&size=" + size;	
					}
					if (catalog != null) {
						src = src + "&catalog=" + catalog;	
					}
					this.replaceWithImage(src, elem);
					nodeWasUpdated = true;
				}	
				else if (this.isNitroNode(elem, "canvas-flat")) {
					var userId = this.jsConnector.connectionParams.userId;
					var ownerId = this.getElemAttribute(elem,"ownerId");
					if (ownerId != "" && ownerId != null) {
						userId = ownerId;
					}										
					var size = elem.getAttribute("size");
					var catalog = elem.getAttribute("catalog");
					var src = nitroProtocol + "://dynamic.bunchball.net/assets/canvas/" + this.connectionParams.apiKey + "/" + userId + ".jpg";
					src = src + "?ts=" + (new Date()).getTime();
					if (size != null) {
						src = src + "&size=" + size;	
					}
					if (catalog != null) {
						src = src + "&catalog=" + catalog;	
					}
					this.replaceWithImage(src, elem);
					nodeWasUpdated = true;
				}	
				else if (this.isNitroNode(elem, "notifications-feed")) {
					var returnCount = this.getElemAttribute(elem, "returnCount");
					var userIds = this.getElemAttribute(elem, "userIds");
					elem.id = "nitro_elem_" + Nitro.divCounter;
					Nitro.divCounter++;			
					NitroNotifier.jsConnector = this.jsConnector;
					NitroNotifier.getNotificationsFeed(connectionParams, "Nitro.processNotificationsFeedNMLCall", this.counterId + "|" + elem.id, userIds, returnCount);
					nodeWasUpdated = true;
				}
			}
			if(primaryNMLThread || !this.primaryNMLThreadStarted) {
				this.primaryNMLThreadStarted = true;
				var _self = this;
				if(!this.nmlRefreshTimeout)
					this.nmlRefreshTimeout = 500;			
				if(nodeWasUpdated)
					this.nmlRefreshTimeout = 500;
				else
					this.nmlRefreshTimeout*= 3;
				if(this.nmlRefreshTimeout > 120000)
					this.nmlRefreshTimeout = 120000;				

				setTimeout(function(){
					_self.refreshNML(true);
				}, this.nmlRefreshTimeout);
			}
		}

		Nitro.updateTwitterSettingsAndHideNotification = function(data, token) {
			var instance = Nitro.getInstanceForResponse(data,token);					
			instance.twitterEnabled = null;
			Nitro.updateTwitterSettings(data, token);
		}

		Nitro.updateTwitterSettings = function(data, token) {
			var instance = Nitro.getInstanceForResponse(data,token);					
			
			//first timers
			if(data.Nitro.Twitter.requiresLogin) {
				twitterLoginUrl = data.Nitro.Twitter.requiresLogin				
			}
					
			var twitterSlider = document.getElementById('nitro_statusUpdater_twitter');
					
			if(data.Nitro.Twitter.enabled == "false") {
				twitterSlider.style.backgroundPosition = "-40px 0px";
				CurrentTwitterNitroInstanceId = instance.counterId;
				instance.twitterEnabled = false;
				if(twitterLoginUrl != null)
					twitterSlider.onclick = function(){window.open(twitterLoginUrl);CurrentTwitterStatusRefreshCounter = 0;Nitro.checkTwitterStatus();};
				else
					twitterSlider.onclick = function(){Nitro.callAPI('method=user.twitter.enable','Nitro.updateTwitterSettings',instance.counterId)};
			}else {
				twitterSlider.style.backgroundPosition = "0px 0px";					
				twitterSlider.onclick = function(){Nitro.callAPI('method=user.twitter.disable','Nitro.updateTwitterSettings',instance.counterId)};
				instance.twitterEnabled = true;
				CurrentTwitterNitroInstanceId = null;
				twitterLoginUrl = null;
			}
		}	

		Nitro.updateFacebookSettings = function(data, token) {
			var instance = Nitro.getInstanceForResponse(data,token);
			
			//first timers
			if(data.Nitro.Facebook.requiresLogin) {
				facebookLoginUrl = data.Nitro.Facebook.requiresLogin
			}
					
			var facebookSlider = document.getElementById('nitro_statusUpdater_facebook');
					
			if(data.Nitro.Facebook.enabled == "false") {
				facebookSlider.style.backgroundPosition = "-40px 0px";
				CurrentFacebookNitroInstanceId = instance.counterId;
				instance.facebookEnabled = false;
				if(facebookLoginUrl != null)
					facebookSlider.onclick = function(){window.open(facebookLoginUrl);CurrentFacebookStatusRefreshCounter = 0;Nitro.checkFacebookStatus();};
				else
					Nitro.callAPI('method=user.facebook.status','Nitro.updateFacebookSettings',instance.counterId);				
			}else {
				facebookSlider.style.backgroundPosition = "0px 0px";					
				facebookSlider.onclick = function(){Nitro.callAPI('method=user.facebook.disable','Nitro.updateFacebookSettings',instance.counterId)};
				instance.facebookEnabled = true;
				CurrentFacebookNitroInstanceId = null;
			}
		}

		var CurrentFacebookNitroInstanceId = null;
		var CurrentFacebookStatusRefreshCounter = 0;
		Nitro.checkFacebookStatus = function() {
			if(CurrentFacebookNitroInstanceId != null && CurrentFacebookStatusRefreshCounter < 50) {
				Nitro.callAPI('method=user.facebook.status','Nitro.updateFacebookSettings',CurrentFacebookNitroInstanceId);
				setTimeout("Nitro.checkFacebookStatus()", 2500);
				CurrentFacebookStatusRefreshCounter++;
			}
		}
		var CurrentTwitterNitroInstanceId = null;
		var CurrentTwitterStatusRefreshCounter = 0;
		Nitro.checkTwitterStatus = function() {
			if(CurrentTwitterNitroInstanceId != null && CurrentTwitterStatusRefreshCounter < 50) {
				Nitro.callAPI('method=user.twitter.status','Nitro.updateTwitterSettings',CurrentTwitterNitroInstanceId);
				setTimeout("Nitro.checkTwitterStatus()", 2500);
				CurrentTwitterStatusRefreshCounter++;
			}
		}		
		
		Nitro.processNotificationsFeedNMLCall = function(notifications, token) {
			var cId = token.split("|")[0];
			var instance = null;
			for (var i = 0; i < Nitro.instances.length; i++) {
				if (Nitro.instances[i].counterId == cId) {
					instance = Nitro.instances[i];
				}
			}
			instance.replaceNML(null, token.split("|")[1], notifications);
		}

		Nitro.processNMLCall = function(data, token) {
			var cId = token.split("|")[0];
			var instance = Nitro.getInstanceForResponse(data,cId);			
			instance.replaceNML(data, token.split("|")[1]);
		}
				
		this.replaceNML = function(data, divId, notifications) {
			var elem = document.getElementById(divId);
			var textReplacements = new Array();
			var imgReplacements = new Array();
			var htmlDivReplacements = new Array();
			var htmlSpanReplacements = new Array();			
			
			var children = elem.getElementsByTagName("*");
			var childToRepeat = null;
			for (var i = 0; i < children.length; i++) {  
				var child = children[i];
				if (child.getAttribute("nitro_repeat") != null) {
					childToRepeat = child;
					break;
				}
			}
			
			if (childToRepeat != null) {
				var numRows = this.getElemAttribute(elem, "returnCount");
				if (numRows == null) {
					numRows = 10;
				}
				for (var r=0; r < numRows;r++) {
					var clone = childToRepeat.cloneNode(true);									
					var cloneChildren = clone.getElementsByTagName("*");
					for (var c=0; c < cloneChildren.length; c++) {
						var setRank = false;
						if (this.isNitroNode(cloneChildren[c], "response") || this.isNitroNode(cloneChildren[c], "notification")) {
							cloneChildren[c].setAttribute("rank", r);
						}
					}
					childToRepeat.parentNode.insertBefore(clone, childToRepeat);
				}
				childToRepeat.parentNode.removeChild(childToRepeat);
			}
			
			for (var i = 0; i < children.length; i++) {  
				var child = children[i];
				if (this.isNitroNode(child, "notification")) {			
					var rank = child.getAttribute("rank");  
					if (rank == null) { 
						rank = 0; 
					}
					if (typeof (notifications[rank]) == "undefined") {
						continue;
					}
					this.addNodeReplacement(htmlDivReplacements, child, notifications[rank].html);
				}				
				else if (this.isNitroNode(child, "response")) {
					var accessor = child.getAttribute("data");
					if (accessor == "rank") {
						var rank = child.getAttribute("rank");  
						if (rank == null) { 
							rank = 0; 
						}
						this.addNodeReplacement(textReplacements, child, parseInt(rank) + 1);
						continue;
					}
					accessor = accessor.split(".");
					var value = data.Nitro;
					for (var a = 0; a < accessor.length; a++) {
						var curr = accessor[a];
						var arrI = curr.indexOf("[%]");
						if (arrI > -1) {
							var rank = child.getAttribute("rank");  
							if (rank == null) { 
								rank = 0; 
							}
							value = value[curr.substring(0, arrI)];
							if (typeof value == "undefined") {break;}
							value = this.makeArray(value);
							value = value[rank];
						}
						else {
							value = value[curr];
						}
						if (typeof value == "undefined") {break;}
					}
					if (typeof value == "undefined") {continue;}
					
					var postProcess = this.getElemAttribute(child, "postProcess");
					if (postProcess != null) {
						value = eval( postProcess + "(value)" );
					}
					
					if (child.getAttribute("type") != null && child.getAttribute("type") == "date") {
						var date = new Date(parseInt(value) * 1000);
						this.addNodeReplacement(textReplacements, child, date.toLocaleString());	
					}
					else if (child.getAttribute("type") != null && child.getAttribute("type") == "img") {
						this.addNodeReplacement(imgReplacements, child, value);
					}
					else if (child.getAttribute("type") != null && (child.getAttribute("type") == "avatar-full" || child.getAttribute("type") == "avatar-thumb")) {
					    var src = nitroProtocol + "://dynamic.bunchball.net/assets/avatar/" + this.connectionParams.apiKey + "/" + value + "/";
						if (child.getAttribute("type") == "avatar-full") {
							src = src + "full.png";
						}
						else {
							src = src + "thumb.png";	
						}	
						this.addNodeReplacement(imgReplacements, child, src);
					}
					else if (child.getAttribute("type") != null && child.getAttribute("type") == "canvas-flat") {
					    var src = nitroProtocol + "://dynamic.bunchball.net/assets/canvas/" + this.connectionParams.apiKey + "/" + value + ".jpg";
						this.addNodeReplacement(imgReplacements, child, src);
					}
					else if (child.getAttribute("type") != null && child.getAttribute("type") == "html") {
						this.addNodeReplacement(htmlSpanReplacements, child, value);
					}
					else {
						this.addNodeReplacement(textReplacements, child, value);								
					}
				}
			}		
			
			for (var i = 0; i < textReplacements.length; i++) {
				this.replaceWithText(textReplacements[i].value, textReplacements[i].elem);
			}
			for (var i = 0; i < htmlDivReplacements.length; i++) {
				this.replaceWithHtml(htmlDivReplacements[i].value, htmlDivReplacements[i].elem, "div");
			}
			for (var i = 0; i < htmlSpanReplacements.length; i++) {
				this.replaceWithHtml(htmlSpanReplacements[i].value, htmlSpanReplacements[i].elem, "span");
			}
			for (var i = 0; i < imgReplacements.length; i++) {
				this.replaceWithImage(imgReplacements[i].value, imgReplacements[i].elem);
			}
			
			while (elem.firstChild)
			{
				elem.parentNode.insertBefore(elem.firstChild, elem);
			}	
			elem.parentNode.removeChild(elem);				
		}
		
		this.isNitroNode = function(elem, type){
			if (!elem || !elem.nodeName) {
				return false;	
			}
			return (elem.nodeName.toUpperCase() == "NITRO:" + type.toUpperCase() || elem.nodeName.toUpperCase() == type.toUpperCase());
		}
		this.isNitroParameter = function(attr) {
			if (attr.value != null && attr.value != "null" && attr.value != "") {
				if (attr.name in {'id':'', 'tabIndex':'','disabled':'', 'contentEditable':'', 'hideFocus':''}) {
					return false;
				}
				if (attr.name.indexOf("nml_") == 0) {
					return false;
				}
				return true;
			}	
		}
		this.getElemAttribute = function(elem, attr) {
			if (elem.getAttribute(attr) != null) {
				return elem.getAttribute(attr);					
			}
			if (elem.getAttribute(attr.toLowerCase()) != null) {
				return elem.getAttribute(attr.toLowerCase());					
			}			
			return null;
		}
		this.addNodeReplacement = function(replacementsArr, elem, value) {
			if (typeof value == "undefined") {
				value = "";
			}
			replacementsArr.push({value : value, elem : elem});
		}
		this.replaceWithText = function(text, elem) {
			if (text != null && typeof text != "undefined") {
				var newNode = document.createTextNode(text);
				elem.parentNode.replaceChild(newNode, elem);
			}
		}
		this.replaceWithImage = function(url, elem) {
			if (url != null && typeof url != "undefined") {
				var newNode = document.createElement('img');
				newNode.setAttribute("src", url);
				
				var attrs = elem.attributes;
				for(var j=attrs.length-1; j>=0; j--) {
					newNode.setAttribute(attrs[j].name, attrs[j].value);
				}
				elem.parentNode.replaceChild(newNode, elem);
			}
		}
		this.replaceWithHtml = function(html, elem, divOrSpan) {
			if (html != null && typeof html != "undefined") {
				var newNode = document.createElement(divOrSpan);
				newNode.innerHTML = html;
				elem.parentNode.replaceChild(newNode, elem);
			}
		}
		Nitro.onBuyPointsClick = function(pointCategory) {
		
			if (typeof Nitro_Overlay != "undefined") {
				nitroOverlay.reset();
			}
		
			var nitro = Nitro.getInstanceForCounter(0);
			if(nitro != null) {
				var params = new Object();
				params.pointCategory = pointCategory;
				nitro.showPaymentDialog(params);
			}
		}
		this.showPaymentDialog = function(params) {
			if (params.pointCategory == null) {
				return;	
			}
			if (params.useDefaultStyle == null) {
				params.useDefaultStyle = true;
			}
			if (params.paymentWindowTarget == null) {
				params.paymentWindowTarget = "_blank";
			}
			if(typeof nitroToolbar != "undefined")
				nitroToolbar.reset();
			this.paymentDialogParams = params;
			this.jsConnector.callAPI("method=site.getPaymentOptions&verifyPointCategory=true&pointCategory=" + this.paymentDialogParams.pointCategory, "Nitro.processPaymentOptions", this.counterId, true);
		}
		
		Nitro.processPointsBalance = function(data, token) {
			var instance = Nitro.getInstanceForResponse(data, token);		
			instance.updatePaymentDialogPointsBalance(data);
		}
		Nitro.processPaymentOptions = function(data, token) {
			var instance = Nitro.getInstanceForResponse(data, token);			
			instance.showPaymentDialogWithOptions(data);
		}
		Nitro.reloadWidgets = function() {
			var isIE = navigator.appName.indexOf("Microsoft") != -1;
			for(var i in nitroWidget.embedNames) {
				var flashName = nitroWidget.embedNames[i];
				if(Nitro.isString(flashName) && flashName.toLowerCase().indexOf('cookie') >= 0)
					continue;
				if(Nitro.isString(flashName) && flashName.toLowerCase().indexOf('poker') >= 0)
					continue;					
				var flashObject = swfobject.getObjectById(flashName);
				if(flashObject) {
					var prevNode = flashObject.prevSibling;
					var parentNode = flashObject.parentNode;
					parentNode.removeChild(flashObject);
					if(prevNode == null) {
						parentNode.appendChild(flashObject);
					}else {
						parentNode.insertBefore(flashObject,prevNode.nextSibling);
					}
					if(isIE && document.getElementById('nitroAvatar')) {
						setTimeout("document.getElementById('nitroAvatar').focus()",2500);					
					}else {
						//document.getElementById(flashName).focus();
					}
				}
			}
		}
		this.updatePaymentDialogPointsBalance = function(data) {
			var balance = data.Nitro.Balance.pointCategories.PointCategory.points;
			var iconUrl = data.Nitro.Balance.pointCategories.PointCategory.iconUrl;
			var balanceDiv = document.getElementById('nitro_payment_dialog_points_balance');
			var iconImg = document.getElementById('nitro_payment_dialog_points_balance_pc');//!!! nitro_payment_dialog_points_icon
			balanceDiv.innerHTML = this.addCommas(balance);
			if (iconUrl && iconUrl.length > 0) {
				if(iconUrl.indexOf("swf") != -1) {
	
					var params = {
						base:				iconUrl.substr(0,iconUrl.lastIndexOf('/')),
						wmode:				"transparent",
						allowscriptaccess:	"always",
						allownetworking:	"all"	
					};
					
					var attributes = {
						id:					"nitro_payment_dialog_points_icon_swf",
						name:				"nitro_payment_dialog_points_icon_swf",
						style:				"background:#F0F0F0"
					};
					iconImg.innerHTML = "";
					nitroWidget.embedSWF(iconUrl, "nitro_payment_dialog_points_balance_pc", 20, 20, {}, params, attributes);
				}else {
					iconImg.innerHTML = "<img src='" + iconUrl + "' width='20' height='20' vertical-align='bottom'>";
				}
			}
		}
		this.showConfirmPaymentFrame = function() {
			var backgroundFrame = document.getElementById('nitro_payment_dialog_background_frame');
			this.addClass(backgroundFrame,'nitro_payment_dialog_container_small');			
			backgroundFrame.innerHTML = "<div style='margin-top:50px;width:100%;text-align:center'>Welcome back! Click \"Continue\" once you've finished.</div>";
			backgroundFrame.innerHTML+= '<a class="nitro_payment_dialog_cancel_button" href="#" onclick="nitro.closePaymentDialog();" onmouseout="nitro.removeClass(this,\'nitro_payment_dialog_cancel_button_hover\')" onmouseover="nitro.addClass(this,\'nitro_payment_dialog_cancel_button_hover\')" ></a>';			
			backgroundFrame.innerHTML+= '<a class="nitro_payment_dialog_continue_button" href="#" onclick="Nitro.reloadWidgets();nitro.closePaymentDialog();" onmouseout="nitro.removeClass(this,\'nitro_payment_dialog_continue_button_hover\')" onmouseover="nitro.addClass(this,\'nitro_payment_dialog_continue_button_hover\')" ></a>';
			this.toggleBackgroundFrame(true);
			if(!backgroundFrame.innerHTML) {
				//fix for chrome
				setTimeout("nitro.showConfirmPaymentFrame()",500);
				return;
			}			
		}		
		this.closePaymentDialog = function() {
			if(this.checkPaymentsDialogStatusTimer != null) {	
				clearTimeout(this.checkPaymentsDialogStatusTimer);
				this.checkPaymentsDialogStatusTimer = null;
			}
			if(document.getElementById("nitro_payment_dialog_container")) {
				document.body.removeChild(document.getElementById("nitro_payment_dialog_container"));
				document.body.removeChild(document.getElementById("nitro_payment_dialog_background_frame"));
				var mask = document.getElementById("nitro_payment_dialog_mask");
				if (mask != null) {
					document.body.removeChild(mask);
				}
				if(typeof nitroToolbar != "undefined") {
					nitroToolbar.reset();
					nitroToolbar.drawerOpen['nitroToolbar_drawer_payments'] = false;				
				}
			}	
		}
		this.onPaymentClicked = function() {
			for (var i = 0; i < document.nitroPaymentOptions.po.length; i ++) {
				this.removeClass(document.getElementById('nitro_tr_po_'+i),'nitro_payment_dialog_selected_field');
				if (document.nitroPaymentOptions.po[i].checked) {
					// paypal/credit card
					if(document.nitroPaypalForm) {
						document.nitroPaypalForm.amount.value = document.nitroPaymentOptions.po[i].value.split("|")[1];	
						document.nitroPaypalForm.item_name.value = document.nitroPaymentOptions.po[i].value.split("|")[0] + ' ' + this.paymentDialogParams.pointCategory;
					}					
					this.addClass(document.getElementById('nitro_tr_po_'+i),'nitro_payment_dialog_selected_field');
				}
			}
			this.removeClass(document.getElementById('nitroPaymentOptions'),'nitro_payment_dialog_obscured');				
			this.removeClass(document.getElementById('nitro_payments_dialog_method_content'),'nitro_payment_dialog_obscured');
		}
		this.resetPaymentOptions = function() {
			for (var i = 0; i < document.nitroPaymentOptions.po.length; i ++) {
				document.nitroPaymentOptions.po[i].checked = false;
				this.removeClass(document.getElementById('nitro_tr_po_'+i),'nitro_payment_dialog_selected_field');
				document.getElementById('nitro_tr_po_'+i).style.visibility = 'visible';
				if(this.hidablePaymentOptions['nitro_tr_po_'+i] && this.selectedPaymentMethod=='boku') {
					document.getElementById('nitro_tr_po_'+i).style.visibility = 'hidden';
				}
			}
		}
		this.getBokuFrame = function(img, price, desc) {
			var backgroundFrame = document.getElementById('nitro_payment_dialog_background_frame');
			backgroundFrame.innerHTML = "<br><br><br><center><h3>Loading...</h3></center>";

			params = "method=user.payments.status&image=" + escape(img) + "&description=" + escape(desc) + "&price=" + price + "&forceNewBuyButton=true" + (typeof nitroToolbar != "undefined" && nitroToolbar.args.siteId ? '&toolbarSiteId='+nitroToolbar.args.siteId+'&affl='+nitroToolbar.args.siteId : '');
			this.callAPI(params,'nitro.setBokuFrame');
		}
		this.setBokuFrame = function(data, token) {
			var backgroundFrame = document.getElementById('nitro_payment_dialog_background_frame');
			backgroundFrame.innerHTML = "<iframe id='nitro_payment_dialog_background_iframe' src='" + data.Nitro.paymentMethods.Boku.buyButton + "'></iframe>";
			backgroundFrame.innerHTML+= '<a class="nitro_payment_dialog_back_button" href="#" onclick="nitro.toggleBackgroundFrame()" onmouseout="nitro.removeClass(this,\'nitro_payment_dialog_back_button_hover\')" onmouseover="nitro.addClass(this,\'nitro_payment_dialog_back_button_hover\')" ></a>';
			backgroundFrame.innerHTML+= '<p class="nitro_payment_dialog_terms_message">By clicking "Purchase" you agree to the <a href="'+nitroProtocol+'://www.bunchball.com/about/vgtos.shtml" target="_blank">Bunchball Virtual Goods Terms of Service</a></p> \
										<div onclick="window.open(\''+nitroProtocol+'://www.bunchball.com/about/vgtos.shtml\')" class="nitro_payment_dialog_poweredby">&nbsp;</div>';
		}
		Nitro.closeNotification = function(elem) {
			if(elem == null) return;
			if(elem.parentNode.className == 'nitro_notices')
				elem.parentNode.removeChild(elem);
			else
				Nitro.closeNotification(elem.parentNode);
		}
		
		var checkPaymentsDialogStatusTimer = null;
		Nitro.checkPaymentsDialogStatus = function(data, token) {

			var instance = Nitro.getInstanceForCounter(0);			
			if(data == null) {
				if(instance.checkPaymentsDialogStatusTimer == null) 
					instance.checkPaymentsDialogStatusTimer = setTimeout("Nitro.callAPI('method=user.payments.status','Nitro.checkPaymentsDialogStatus',0)",2500);
				return;
			}

			if(data.Nitro.paymentMethods.Boku.status == 'success') {
				instance.showConfirmPaymentFrame();
			}else if(data.Nitro.paymentMethods.Boku.status == 'failure') {
				instance.showConfirmPaymentFrame();
			}else {
				instance.checkPaymentsDialogStatusTimer = setTimeout("Nitro.callAPI('method=user.payments.status','Nitro.checkPaymentsDialogStatus',0)",2000);
			}
		}
		
		this.injectPaymentsDialogContent = function(button,content) {
			if(button != null) {
				var elems = this.getElementForClass('nitro_payment_dialog_method');
				for(var i = 0; i < elems.length; i++) {
					this.removeClass(elems[i],'nitro_payment_dialog_method_active');
				}
				this.addClass(button,'nitro_payment_dialog_method_active');

				var div = document.getElementById('nitro_payments_dialog_method_content');
				div.innerHTML = content;
				if(button.id == "nitro_surveyMethodButton") {
					this.removeClass(document.getElementById('nitro_payments_dialog_method_content'),'nitro_payment_dialog_obscured');				
					this.addClass(document.getElementById('nitroPaymentOptions'),'nitro_payment_dialog_obscured');
				}else {
					this.removeClass(document.getElementById('nitroPaymentOptions'),'nitro_payment_dialog_obscured');
					this.addClass(document.getElementById('nitro_payments_dialog_method_content'),'nitro_payment_dialog_obscured');				
				}					
			}
			this.resetPaymentOptions();
			
		}
		
		this.showBokuFrame = function() {
			for (var i = 0; i < document.nitroPaymentOptions.po.length; i ++) {
				if (document.nitroPaymentOptions.po[i].checked) {
					var img = this.paymentOptions.paymentProductUrl;
					var price = document.nitroPaymentOptions.po[i].value.split("|")[1];
					var desc = document.nitroPaymentOptions.po[i].value.split("|")[0] + ' ' + this.paymentDialogParams.pointCategory;
					this.getBokuFrame(img, price, desc);
					break;
				}
			}
			this.toggleBackgroundFrame(true);
		}
		this.showOfferpalFrame = function() {			
			var backgroundFrame = document.getElementById('nitro_payment_dialog_background_frame');
			backgroundFrame.innerHTML = "<iframe id='nitro_payment_dialog_background_iframe_wide' src='" + this.paymentMethods.Offerpal.buyButton + (typeof nitroToolbar != "undefined" && nitroToolbar.args.siteId ? '&affl='+nitroToolbar.args.siteId : '') + "'></iframe>";
			backgroundFrame.innerHTML+= '<p class="nitro_payment_dialog_background_frame_title">Complete Surveys to Earn ' + this.paymentDialogParams.pointCategory + '</p>';
			backgroundFrame.innerHTML+= '<a class="nitro_payment_dialog_back_button" style="right:35px" href="#" onclick="nitro.toggleBackgroundFrame()" onmouseout="nitro.removeClass(this,\'nitro_payment_dialog_back_button_hover\')" onmouseover="nitro.addClass(this,\'nitro_payment_dialog_back_button_hover\')" ></a>';
			backgroundFrame.innerHTML+= '<a class="nitro_payment_dialog_cancel_button" href="#" onclick="Nitro.reloadWidgets();nitro.closePaymentDialog();" onmouseout="nitro.removeClass(this,\'nitro_payment_dialog_cancel_button_hover\')" onmouseover="nitro.addClass(this,\'nitro_payment_dialog_cancel_button_hover\')" ></a>';
			backgroundFrame.innerHTML+= '<p class="nitro_payment_dialog_terms_message">By clicking "Purchase" you agree to the <a href="'+nitroProtocol+'://www.bunchball.com/about/vgtos.shtml" target="_blank">Bunchball Virtual Goods Terms of Service</a></p> \
										<div onclick="window.open(\''+nitroProtocol+'://www.bunchball.com/about/vgtos.shtml\')" class="nitro_payment_dialog_poweredby">&nbsp;</div>';

			this.toggleBackgroundFrame(true);
		}
		
		this.toggleBackgroundFrame = function(show) {
			var backgroundFrame = document.getElementById('nitro_payment_dialog_background_frame');
			var light = document.getElementById('nitro_payment_dialog_container');
			if(show) {
				backgroundFrame.style.display = "block";
				light.style.display = "none";
			}else {
				backgroundFrame.style.display = "none";
				light.style.display = "block";
			}
		}
		
		this.addCommas = function(nStr) {
			nStr += '';
			x = nStr.split('.');
			x1 = x[0];
			x2 = x.length > 1 ? '.' + x[1] : '';
			var rgx = /(\d+)(\d{3})/;
			while (rgx.test(x1)) {
				x1 = x1.replace(rgx, '$1' + ',' + '$2');
			}
			return x1 + x2;
		}
		
		this.showPaymentDialogWithOptions = function(data) {
			
			var optionsHTML = "";
			var amountHTML = "";
			var methodsHTML = "";
			var itemHTML = "";
			this.paymentOptions = data.Nitro.paymentOptions;
			this.paymentMethods = data.Nitro.paymentMethods;
			var optionsArray = this.makeArray(data.Nitro.paymentOptions.PaymentOption);
			var numOptions = 0;
			var numMethods = 0;
			if (optionsArray != null) {
				numOptions = optionsArray.length;
				optionsHTML = "<table class='nitro_payment_dialog_options_table' cellspacing=0 cellpadding=0><tr><th style='width:30px'>&nbsp;</th><th style='width:90px'>Price</th><th>Package</th></tr>\n";
				for (var i = 0; i < optionsArray.length; i++) {
					var cost = parseFloat(optionsArray[i].cost).toFixed(2);
					if(cost > 29.99) {
						if(!this.hidablePaymentOptions)
							this.hidablePaymentOptions = [];
						this.hidablePaymentOptions["nitro_tr_po_"+i] = true;
					}
					optionsHTML+= '<tr id="nitro_tr_po_'+i+'" onclick="this.childNodes[0].childNodes[0].checked=true;nitro.onPaymentClicked()" onmouseout="nitro.removeClass(this,\'nitro_payment_dialog_selected_field_hover\')" onmouseover="if(!this.childNodes[0].childNodes[0].checked) nitro.addClass(this,\'nitro_payment_dialog_selected_field_hover\')" >' +
									'<td style="border:0px"><input class="nitro_payment_dialog_choice" type="radio" name="po" id="nitro_po_'+i+'" value="' + optionsArray[i].quantity + '|' + cost + '" onClick="nitro.onPaymentClicked()" ' + '></td>' + 
									'<td>$' + cost + '</td>' +
									'<td>' + nitro.addCommas(optionsArray[i].quantity) + ' ' + this.paymentDialogParams.pointCategory + '</td>' +
								  '</tr>\n';
				}
				optionsHTML+= "</table>\n";
				if (optionsArray.length > 0) {
					var cost = parseFloat(optionsArray[0].cost).toFixed(2);					
					amountHTML = '<input type="hidden" name="amount" value="' + cost  + '">';
					itemHTML = '<input type="hidden" name="item_name" value="' + optionsArray[0].quantity + ' ' + this.paymentDialogParams.pointCategory + '">';	
				}
			}
	
			var error = false;
			if (optionsHTML == "") {
				optionsHTML = "No payment options configured in the Admin UI or invalid pointCategory.";
				error = true;
			}
			var paymentMessage = "Buy points";
			if (typeof data.Nitro.paymentOptions.paymentMessage != "undefined" && data.Nitro.paymentOptions.paymentMessage != "") {
				paymentMessage = data.Nitro.paymentOptions.paymentMessage;	
			}		
			var imageUrl = "";
			if (typeof data.Nitro.paymentOptions.paymentLogoUrl != "undefined" && data.Nitro.paymentOptions.paymentLogoUrl != "") {
				imageUrl = '<input type="hidden" name="image_url" value="' + data.Nitro.paymentOptions.paymentLogoUrl + '">';
			}
			if (this.paymentDialogParams.logoUrl != null && this.paymentDialogParams.logoUrl != "") {
				imageUrl = '<input type="hidden" name="image_url" value="' + this.paymentDialogParams.logoUrl + '">';	
			}
			var returnUrl = "";
			if (this.paymentDialogParams.returnUrl != null && this.paymentDialogParams.returnUrl != "") {
				returnUrl = '<input type="hidden" name="return" value="' + this.paymentDialogParams.returnUrl + '">';	
			}
			var cancelReturnUrl = "";
			if (this.paymentDialogParams.cancelReturnUrl != null && this.paymentDialogParams.cancelReturnUrl != "") {
				cancelReturnUrl = '<input type="hidden" name="cancel_return" value="' + this.paymentDialogParams.cancelReturnUrl + '">';	
			}
			var returnButtonText = "";
			if (this.paymentDialogParams.returnButtonText != null && this.paymentDialogParams.returnButtonText != "") {
				returnButtonText = '<input type="hidden" name="cbt" value="' + this.paymentDialogParams.returnButtonText + '">';	
			}
			
			var onPaypalClick = "nitroPaypalForm.submit();nitro.showConfirmPaymentFrame()";
			if (this.paymentDialogParams.paymentWindowTarget == "_self" || this.paymentDialogParams.paymentWindowTarget == "_top") {
				onPaypalClick = "nitroPaypalForm.submit();";	
			}						
									
			var ipn_url = this.connectionParams.server;
			ipn_url = ipn_url.substring(0, ipn_url.indexOf('/json')) + '/premiumCreditProcessor';
			var paypalServer = "https://www.paypal.com/cgi-bin/webscr";
			var pixelUrl = "https://www.paypal.com/en_US/i/scr/pixel.gif";
			var businessId = "S5GDMZW4PTLPQ";
			
			var testing = 0;
			if (testing) {
				paypalServer = "https://www.sandbox.paypal.com/cgi-bin/webscr";
				pixelUrl = "https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif";
				businessId = "UWWDCGQCS7CE8";
			}
			
			var paypal_content = "<div style=\\\'margin:0px 5px 5px 10px\\\'>" + 
									"<img style=\\\'margin-right:5px\\\' src=\\\'"+nitroProtocol+"://assets.bunchball.net/widgets/payments/" + nitroLibsVersion + "/Padlock.png\\\'>" +
									"<span>Step 3: Checkout with PayPal</span>" +
								"</div>" +
				'<form name="nitroPaypalForm" action="' + paypalServer + '" method="post" target="' + this.paymentDialogParams.paymentWindowTarget + '"> \
				<input type="hidden" name="cmd" value="_xclick"> \
				<input type="hidden" name="business" value="' + businessId + '"> \
				<input type="hidden" name="lc" value="US"> \
				<input type="hidden" name="button_subtype" value="products"> \
				<input type="hidden" name="no_note" value="1"> \
				<input type="hidden" name="no_shipping" value="1"> \
				<input type="hidden" name="currency_code" value="USD">' + 
				imageUrl + returnUrl + cancelReturnUrl + returnButtonText +
				'<input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHosted"> \
				<input type="hidden" name="notify_url" value="' + ipn_url + '"> \
				<input type="hidden" name="quantity" value="1">' +
				amountHTML + itemHTML + 
				'<input type="hidden" name="custom" value="'+(typeof nitroToolbar != "undefined" && nitroToolbar.args.siteId ? 'toolbarSiteId='+nitroToolbar.args.siteId+'&affl='+nitroToolbar.args.siteId+'&' : '')+'apiKey=' + this.connectionParams.apiKey + '&userId=' + this.jsConnector.connectionParams.userId + '&pointCategory=' + this.paymentDialogParams.pointCategory + '">' +
				'<div style="font-weight:normal;padding:10px;">' +
					'<h4>Use your Paypal account to buy ' + this.paymentDialogParams.pointCategory + '!</h4>' +
					'When you click &quot;Next&quot; below, a new window will open to complete your order securely through PayPal.<br><br>' +
				'</div> ' +
				'<input type="button" class="nitro_payment_dialog_next_button" onclick="' + onPaypalClick + '" > \
				</form>';
			paypal_content = paypal_content.replace(/\"/g,"\\\'");
			
			var boku_content = "<div style=\\\'margin:0px 5px 5px 10px\\\'>" + 
									"<img style=\\\'margin-right:5px\\\' src=\\\'"+nitroProtocol+"://assets.bunchball.net/widgets/payments/" + nitroLibsVersion + "/Padlock.png\\\'>" +
									"<span>Step 3: Pay with Your Mobile Phone</span>" +
								"</div>" +
								'<div style=\\\'font-weight:normal;padding:10px;\\\'>' +
									'<h4>Use your Mobile Phone to buy ' + this.paymentDialogParams.pointCategory + '!</h4>' +
									'When you click &quot;Next&quot; below, a window will open to assist you with your secure order through Paymo.<br><br>' +
								'</div> ' +
								"<input type=\\\'button\\\' class=\\\'nitro_payment_dialog_next_button\\\' onclick=\\\'nitro.showBokuFrame()\\\' >";
			var cc_content = paypal_content;
			
			var offerpal_content = "<div style=\\\'margin:0px 5px 5px 10px\\\'>" + 
									"<span>Step 2: Earn "+this.paymentDialogParams.pointCategory+"</span>" +
								"</div>" +
								'<div style=\\\'font-weight:normal;padding:10px;\\\'>' +
									'<h4>Complete surveys and offers to earn ' + this.paymentDialogParams.pointCategory + '!</h4>' +
									'<span>When you click &quot;Next&quot; below, a window will open with surveys and offers you can complete.</span><br><br>' +
								'</div> ' +
								'<input type=\\\'button\\\' class=\\\'nitro_payment_dialog_next_button\\\' onclick=\\\'nitro.showOfferpalFrame()\\\' >';
											
			methodsHTML+= '<a class="nitro_payment_dialog_method" onmouseout="nitro.removeClass(this,\'nitro_payment_dialog_method_hover\')" onmouseover="nitro.addClass(this,\'nitro_payment_dialog_method_hover\')" id="nitro_paypalMethodButton" onclick="nitro.selectedPaymentMethod=\'cc\';nitro.injectPaymentsDialogContent(this,\'' + cc_content + '\')"><div>Credit Card / Paypal</div><img style="margin-top:5px" src="'+nitroProtocol+'://assets.bunchball.net/widgets/payments/' + nitroLibsVersion + '/CreditCards.png"><img src="'+nitroProtocol+'://assets.bunchball.net/widgets/payments/' + nitroLibsVersion + '/PayPalLogo.png"></a>\n';
			methodsHTML+= '<a class="nitro_payment_dialog_method" onmouseout="nitro.removeClass(this,\'nitro_payment_dialog_method_hover\')" onmouseover="nitro.addClass(this,\'nitro_payment_dialog_method_hover\')" id="nitro_bokuMethodButton" onclick="nitro.selectedPaymentMethod=\'boku\';nitro.injectPaymentsDialogContent(this,\'' + boku_content + '\');Nitro.checkPaymentsDialogStatus(null,null);"><div>Mobile Phone</div><img src="'+nitroProtocol+'://assets.bunchball.net/widgets/payments/' + nitroLibsVersion + '/BokuLogo.png"></a>\n';
			if(data.Nitro.paymentMethods.Offerpal) methodsHTML+= '<a class="nitro_payment_dialog_method" onmouseout="nitro.removeClass(this,\'nitro_payment_dialog_method_hover\')" onmouseover="nitro.addClass(this,\'nitro_payment_dialog_method_hover\')" id="nitro_surveyMethodButton" onclick="nitro.selectedPaymentMethod=\'offerpal\';nitro.injectPaymentsDialogContent(this,\'' + offerpal_content + '\')"><div>Earn '+this.paymentDialogParams.pointCategory+'</div><img src="'+nitroProtocol+'://assets.bunchball.net/widgets/payments/' + nitroLibsVersion + '/SurveyIcon.png"></a>\n';
			methodsHTML+= '<br style="clear:both">';
			
			var paymentDialogHTML = '<p class="nitro_payment_dialog_message">' + paymentMessage + '</p> \
									<div class="nitro_payment_dialog_account_balance"> \
										<span>Account Balance: </span> \
										<span id="nitro_payment_dialog_points_balance"></span> \
										<span id="nitro_payment_dialog_points_balance_pc">' + this.paymentDialogParams.pointCategory + '</span> \
									</div> \
									<div class="nitro_payment_dialog_step_full">' +
										'<div style="margin:5px 5px 5px 10px">' + 
											'<img style="margin-right:5px" src="'+nitroProtocol+'://assets.bunchball.net/widgets/payments/' + nitroLibsVersion + '/Padlock.png">' +
											'<span>Step 1: Select A Secure Payment Option...</span>' +
										'</div>\n' +
										methodsHTML + 			
									'</div>\n' + 
									'<br style="clear:both"/>' +
									'<form id="nitroPaymentOptions" name="nitroPaymentOptions" class="nitro_payment_dialog_form nitro_payment_dialog_step_half nitro_payment_dialog_obscured">' + 
										'<div style="margin:5px 5px 5px 27px">' + 
											'<span>Step 2: Choose a Package</span>' + 
										'</div>' + 
										optionsHTML +
									'</form> \
									<div class="nitro_payment_dialog_step_half nitro_payment_dialog_obscured" id="nitro_payments_dialog_method_content" style="float:left">' + 
									'</div>' +
									'<a class="nitro_payment_dialog_cancel_button" href="#" onclick="nitro.closePaymentDialog();" onmouseout="nitro.removeClass(this,\'nitro_payment_dialog_cancel_button_hover\')" onmouseover="nitro.addClass(this,\'nitro_payment_dialog_cancel_button_hover\')" ></a> \
									<p class="nitro_payment_dialog_terms_message">By clicking "Purchase" you agree to the <a href="'+nitroProtocol+'://www.bunchball.com/about/vgtos.shtml" target="_blank">Bunchball Virtual Goods Terms of Service</a></p> \
									<div onclick="window.open(\''+nitroProtocol+'://www.bunchball.com/about/vgtos.shtml\')" class="nitro_payment_dialog_poweredby">&nbsp;</div>\
									<img alt="" border="0" src="' + pixelUrl + '" width="1" height="1"> \
								';
			if (error) {
					paymentDialogHTML = optionsHTML + '<button type="button" onclick="nitro.closePaymentDialog();">Cancel</button>';
			}
			var positioning = "fixed";
			var doMask = true;
			if (!window.XMLHttpRequest || document.compatMode == "BackCompat") {			
				// IE6 or quirks mode
				positioning = "absolute";
			}
			if (!window.XMLHttpRequest) {
				doMask = false;	
			}
			
			if (typeof this.paymentStylesWritten == "undefined" && this.paymentDialogParams.useDefaultStyle) {
				var width = 685;
				var height = 600;
				var bokuFrameWidth = 550;
				var bokuFrameHeight = 490;
				var offerpalFrameWidth = 640;
				var offerpalFrameHeight = 490;
				var width_small = 480;
				var height_small = 200;
				var browser=navigator.appName;

				this.paymentDialogStyles = ".nitro_payment_dialog_container * { \
											  margin: 0; padding: 0; font-family:Helvetica,Verdana; \
											} \
											.nitro_payment_dialog_container { \
											  top:350px; left:50%; margin-top: -" + (height / 2) + "px; height:" + height +"px; \
											  padding-top: 10px; padding-bottom: 10px; position: " + positioning + "; z-index: 1002; overflow: hidden; \
											  background: #dcd8d7 url("+nitroProtocol+"://assets.bunchball.net/widgets/payments/"+nitroLibsVersion+"/MainWindow.png) no-repeat 0 0; \
											  border: 2px solid #9ea3a9; border-radius: 8px; -moz-border-radius: 8px; -webkit-border-radius: 8px; \
											  border-color: #FFF #9ea3a9 #9ea3a9 #FFF; \
											"+(!window.XMLHttpRequest || document.compatMode == "BackCompat" ? "padding-right: 0px; padding-left: 0px; width: " + (width) + "px;margin-left: -" + ((width) / 2) + "px;"  : "padding-right: 0px; padding-left: 20px; width: " + (width-20) + "px; margin-left: -" + ((width-20) / 2) + "px;" )+"\
											} \
											html>body .nitro_payment_dialog_container { \
											  width: " + (width-25) + "px; margin-left: -" + ((width-25) / 2) + "px; margin-top: -" + ((height-30) / 2) + "px; height:" + (height-30) +"px; \
											} \
											.nitro_payment_dialog_container_small * { \
											  margin: 0; padding: 0; font-family:Helvetica,Verdana; \
											} \
											.nitro_payment_dialog_container_small { \
											  top:30px; left:50%; width: " + width_small + "px; margin-left: -" + (width_small / 2) + "px; margin-top: -" + (height_small / 2) + "px; height:" + height_small +"px; \
											  padding-top: 10px; padding-right: 0px; padding-bottom: 10px; padding-left: 20px; position: " + positioning + "; z-index: 1002; overflow: auto; \
											  background: #dcd8d7 url("+nitroProtocol+"://assets.bunchball.net/widgets/payments/"+nitroLibsVersion+"/MiniMessage_Window.png) no-repeat 0 0; \
											  border: 2px solid #9ea3a9; border-radius: 8px; -moz-border-radius: 8px; -webkit-border-radius: 8px; \
											  border-color: #FFF #9ea3a9 #9ea3a9 #FFF; \
											} \
											html>body .nitro_payment_dialog_container_small { \
											  width: " + (width_small-25) + "px; margin-left: -" + ((width_small-25) / 2) + "px; margin-top: -" + ((height_small-30) / 2) + "px; height:" + (height_small-30) +"px; \
											  padding-top: 10px; padding-right: 0px; padding-bottom: 10px; padding-left: 20px; \
											} \
											.nitro_payment_dialog_container label { \
											  cursor: pointer; \
											} \
											.nitro_payment_dialog_next_button { \
											  width: 85px; height: 50px; border:0px; float:right; margin-right:15px; cursor:pointer; \
											  background: url("+nitroProtocol+"://assets.bunchball.net/widgets/payments/"+nitroLibsVersion+"/NextButton_Up.png) no-repeat 0 0; \
											} \
											.nitro_payment_dialog_next_button_hover { \
											  background: url("+nitroProtocol+"://assets.bunchball.net/widgets/payments/"+nitroLibsVersion+"/NextButton_Over.png) no-repeat 0 0; \
											} \
											.nitro_payment_dialog_cancel_button { \
											  width:26px; height:30px; position:absolute; top:0px; right:0px; \
											  background: url("+nitroProtocol+"://assets.bunchball.net/widgets/payments/"+nitroLibsVersion+"/XButton_Up.png) no-repeat 0 0; \
											} \
											.nitro_payment_dialog_cancel_button_hover { \
											  background: url("+nitroProtocol+"://assets.bunchball.net/widgets/payments/"+nitroLibsVersion+"/XButton_Over.png) no-repeat 0 0; \
											} \
											.nitro_payment_dialog_back_button { \
											  width:53px; height:27px; position:absolute; top:10px; right:10px; cursor:pointer; \
											  background: url("+nitroProtocol+"://assets.bunchball.net/widgets/payments/"+nitroLibsVersion+"/BackButton_Up.png) no-repeat 0 0; \
											} \
											.nitro_payment_dialog_back_button_hover { \
											  background: url("+nitroProtocol+"://assets.bunchball.net/widgets/payments/"+nitroLibsVersion+"/BackButton_Over.png) no-repeat 0 0; \
											} \
											.nitro_payment_dialog_continue_button { \
											  width:121px; height:38px; position:absolute; bottom:50px; left:180px; cursor:pointer; \
											  background: url("+nitroProtocol+"://assets.bunchball.net/widgets/payments/"+nitroLibsVersion+"/ContinueButton_Up.png) no-repeat 0 0; \
											} \
											.nitro_payment_dialog_continue_button_hover { \
											  background: url("+nitroProtocol+"://assets.bunchball.net/widgets/payments/"+nitroLibsVersion+"/ContinueButton_Over.png) no-repeat 0 0; \
											} \
											.nitro_payment_dialog_message { \
											  font-size: 20px; margin-top:3px; margin-bottom: 10px; font-weight: bold; width:100%; text-align: left; color: white; \
											"+(!window.XMLHttpRequest || document.compatMode == "BackCompat" ? "margin-left:15px;" : "")+"\
											} \
											.nitro_payment_dialog_account_balance { \
											  position:relative; font-size: 16px; font-weight: bold; text-align:right; padding-right:16px; margin-top:0px; margin-bottom:10px; vertical-align:bottom;  \
											} \
											#nitro_payment_dialog_points_icon { \
											  position:relative; top:3px; height: 20px; width:20px; border:0px; float:left; \
											} \
											#nitro_payment_dialog_points_balance { \
											  font-size:14px; \
											} \
											#nitro_payment_dialog_points_balance_pc { \
											  font-size:14px; font-weight: normal; margin-left:5px; \
											} \
											#nitro_payment_dialog_background_frame { \
											} \
											.nitro_payment_dialog_background_frame_title { \
											  color: white; font-weight:bold; font-size:16px; position:absolute; top:15px; left:15px; \
											} \
											#nitro_payment_dialog_background_iframe { \
											  border: 0px; margin:35px 0px 0px 45px; \
											  height: " + bokuFrameHeight + "px; width: " + bokuFrameWidth + "px; \
											} \
											#nitro_payment_dialog_background_iframe_wide { \
											  border: 0px; overflow-x: hidden; overflow-y: auto; \
											  height: " + offerpalFrameHeight + "px; width: " + offerpalFrameWidth + "px; \
											"+(!window.XMLHttpRequest || document.compatMode == "BackCompat" ? "margin:35px 0px 0px 20px; " : "margin:35px 0px 0px 0px; ")+"\
											} \
											.nitro_payment_dialog_form { \
											  padding-bottom: 20px; float:left; \
											} \
											.nitro_payment_dialog_options_table { \
											  width: 315px; border:0px; \
											} \
											.nitro_payment_dialog_options_table th, .nitro_payment_dialog_options_table td{ \
											  padding-top:5px; font-weight:bold; \
											} \
											html>body .nitro_payment_dialog_options_table td{ \
											  padding-bottom: 5px; \
											} \
											.nitro_payment_dialog_options_table td{ \
											  border-left:0px solid #CCCCCC; text-align:center; cursor:pointer; \
											} \
											#nitro_payments_dialog_method_content { \
											  padding:5px; \
											} \
											.nitro_payment_dialog_selected_field { \
											  background: url("+nitroProtocol+"://assets.bunchball.net/widgets/payments/"+nitroLibsVersion+"/SelectedField_Active.png) no-repeat 0 0; \
											} \
											.nitro_payment_dialog_selected_field td{ \
											  border: 0px; \
											} \
											.nitro_payment_dialog_selected_field_hover { \
											  background:  url("+nitroProtocol+"://assets.bunchball.net/widgets/payments/"+nitroLibsVersion+"/SelectedField_Over.png) no-repeat 0 0; \
											} \
											.nitro_payment_dialog_selected_field_hover td{ \
											  border: 0px; \
											} \
											.nitro_payment_dialog_step_full { \
											  display:block; padding: 0px; height:119px; float:left; font-weight:bold; margin-bottom:20px; \
											  background: url("+nitroProtocol+"://assets.bunchball.net/widgets/payments/"+nitroLibsVersion+"/StepBox_Long.png) no-repeat 0 0; \
											"+(!window.XMLHttpRequest || document.compatMode == "BackCompat" ? 'margin-left:8px; width: 645px; ' : 'margin-left:-5px; width: 651px; ')+"\
											} \
											.nitro_payment_dialog_step_half { \
											  display:block; padding: 0px; height:244px; float:left; font-weight:bold; margin-right:5px; \
											  background: url("+nitroProtocol+"://assets.bunchball.net/widgets/payments/"+nitroLibsVersion+"/StepBox_Standard2.png) no-repeat 0 0; \
											"+(!window.XMLHttpRequest || document.compatMode == "BackCompat" ? 'margin-left:10px; width: 310px;' : 'margin-left:5px; width: 317px;')+"\
											} \
											html>body .nitro_payment_dialog_step_half { \
												width: 310px;\
											}\
											.nitro_payment_dialog_method { \
											  display:block; padding: 0px; width: 130px; height:85px; text-align: center; float:left; cursor:pointer; \
											  background: url("+nitroProtocol+"://assets.bunchball.net/widgets/payments/"+nitroLibsVersion+"/PaymentTypeBox_Up.png) no-repeat 0 0; \
											"+(!window.XMLHttpRequest || document.compatMode == "BackCompat" ? 'margin-left: 7%;' : 'margin-left: 10%;')+"\
											} \
											.nitro_payment_dialog_method_hover { \
											  background: url("+nitroProtocol+"://assets.bunchball.net/widgets/payments/"+nitroLibsVersion+"/PaymentTypeBox_Over.png) no-repeat 0 0; \
											} \
											.nitro_payment_dialog_method_active { \
											  background: url("+nitroProtocol+"://assets.bunchball.net/widgets/payments/"+nitroLibsVersion+"/PaymentTypeBox_Active.png) no-repeat 0 0; \
											} \
											.nitro_payment_dialog_method div { \
											  font-size:12px; font-weight:bold; margin-bottom: 5px; margin-top:5px; \
											} \
											.nitro_payment_dialog_method img { \
											  \
											} \
											.nitro_payment_dialog_choice { \
											  padding-bottom: 5px; padding-top: 5px; margin-left: 20px; color: red; \
											} \
											.nitro_payment_dialog_terms_message { \
											  position:absolute; bottom:5px; left:15px; cursor:pointer; font-size: 10px; \
											} \
											.nitro_payment_dialog_poweredby { \
											  height:24px; width:176px; position:absolute; bottom:0px; right:10px; cursor:pointer; \
											  background: url("+nitroProtocol+"://assets.bunchball.net/widgets/payments/"+nitroLibsVersion+"/BunchballLogo_Up.png) no-repeat 0 0; \
											} \
											.nitro_payment_dialog_obscured { \
											  filter: alpha(opacity='10'); opacity:.1; \
											} \
											html>body .nitro_payment_dialog_obscured { \
											} \
											.nitro_payment_dialog_obscured * { \
											  filter: alpha(opacity='10'); opacity:.1; \
											} \
				";

				var styleElement = document.createElement("div");
				styleElement.innerHTML = "<br><style>"+this.paymentDialogStyles+"</style>";				
				document.getElementsByTagName('head')[0].appendChild(styleElement);
				this.paymentStylesWritten = true;
			}								

			if (doMask) {
				var fade = document.createElement("div");
				fade.id = "nitro_payment_dialog_mask";
				fade.setAttribute("class", "nitro_payment_dialog_mask");
				fade.setAttribute("className", "nitro_payment_dialog_mask");
				if (this.paymentDialogParams.useDefaultStyle) {
					fade.style.position = positioning;
					fade.style.top = "0%";
					fade.style.left = "0%";
					fade.style.width = "100%";
					fade.style.height = "100%";	
					fade.style.backgroundColor = "black";	
					fade.style.zIndex = 1001;	
					fade.style.filter = 'alpha(opacity='+80+')';			
					fade.style.opacity = .8;	
				}
				document.body.appendChild(fade);
			}
			
			
			var backgroundFrame = document.createElement('div');
			backgroundFrame.id = "nitro_payment_dialog_background_frame";
			backgroundFrame.style.display = "none";
			backgroundFrame.setAttribute("class", "nitro_payment_dialog_container");
			backgroundFrame.setAttribute("className", "nitro_payment_dialog_container");	
			document.body.appendChild(backgroundFrame);
			
			var light = document.createElement("div");
			light.id = "nitro_payment_dialog_container";
			light.setAttribute("class", "nitro_payment_dialog_container");
			light.setAttribute("className", "nitro_payment_dialog_container");	
			light.innerHTML = paymentDialogHTML;
			document.body.appendChild(light);
			this.jsConnector.callAPI("method=user.getPointsBalance&pointCategory=" + this.paymentDialogParams.pointCategory, "Nitro.processPointsBalance", this.counterId, true);
		}
		
	
		this.showToolbar = function(plugins, args) {
			if(!args)
				var args = {};
		
			if(this.args) {
				for(var i in this.args) {
					if(!args[i])
						args[i] = this.args[i];
				}
			}
			args.plugins = [];
			for(var i in plugins) {
				if(!plugins[i].name)
					plugins[i].name = (plugins[i].type + (plugins[i].type == 'custom' ? i : ''));
				args.plugins[plugins[i].name.replace(/ /g,'_')] = plugins[i];
			}
			
			args.apiKey = this.connectionParams.apiKey;
			args.server = this.connectionParams.server.replace("/json", "/xml");
			args.ownerId = this.jsConnector.connectionParams.userId;
			args.userId = args.ownerId;
			args.viewerId = args.ownerId;
			args.nitroInstanceId=this.counterId;
			
			if (typeof this.connectionParams.timeStamp != "undefined") {
				args.timeStamp = this.connectionParams.timeStamp;
				args.signature = this.connectionParams.signature;
				args.sessionKey = this.connectionParams.sessionKey;
			}
			
			if (this.connectionParams.sessionKey == null && !this.connectionParams.noLogin) NitroJSConnector.toolbarArgs = args;
			else nitroToolbar.show(args);
		}
		
		Nitro.redirectTo = null;
		Nitro.redirectToAction = null;
		Nitro.redirectToUserId = null;
		this.handleRedirects = function() {
			var action = this.getUrlParameter('nitroAction');
			var userId = this.getUrlParameter('nitroUserId');
			Nitro.redirectTo = this.getUrlParameter('nitroRedirectTo');
			Nitro.redirectToAction = action;
			Nitro.redirectToUserId = userId;
			
			if(action) {
				if(!userId) {
					userId = this.connectionParams.userId;
				}
				
				//check if this redirect has happened before
				var actionAlreadyLogged = NitroCookies.readJSCookie('NITRO_ACTION-'+Nitro.redirectToAction+"|"+Nitro.redirectToUserId)
				
				if(actionAlreadyLogged) {
					Nitro.handleClientLogAction();
				}else {
					this.jsConnector.callAPI("method=user.clientLogAction&userId=" + userId + "&tags=" + action, "Nitro.handleClientLogAction", this.counterId, true);
				}
			}
		}
		Nitro.handleClientLogAction = function() {		
		
			//save the cookie that we have logged the action
			NitroCookies.createJSCookie('NITRO_ACTION-'+Nitro.redirectToAction+"|"+Nitro.redirectToUserId, true, 365);
		
			if(Nitro.redirectTo) {
				window.location = unescape(Nitro.redirectTo);
			}
		}
		
		this.getUrlParameter = function(name) {
		  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
		  var regexS = "[\\?&]"+name+"=([^&#]*)";
		  var regex = new RegExp( regexS );
		  var results = regex.exec(window.location.href);
		  if(results == null)
			return null;
		  else
			return results[1];
		}
	}
	
	/**** Localization *****
	* This variable will be populated after Login takes place and a locale is requested
	*/
	Nitro.Localization = null;
	
	Nitro.getLocale = function() {
		if ( navigator ) {
			if ( navigator.language ) {
				return navigator.language;
			} else if ( navigator.browserLanguage ) {
				return navigator.browserLanguage;
			} else if ( navigator.systemLanguage ) {
				return navigator.systemLanguage;
			} else if ( navigator.userLanguage ) {
				return navigator.userLanguage;
			}
		}
	}

	Nitro.getLocalizationFile = function(locale) {
		if(typeof JSONscriptRequest == "undefined") {
			eval('setTimeout("Nitro.getLocalizationFile(\''+locale+'\')",50)');
			return;
		}
		var fullUrl = nitroProtocol+"://assets.bunchball.net/scripts/locale/"+nitroLibsVersion+"/"+locale+".properties";
		var obj=new JSONscriptRequest(fullUrl,true);     
		obj.buildScriptTag(); // Build the script tag     
		obj.addScriptTag(); // Execute (add) the script tag
	}
	
	Nitro.processLocalizationFile = function(data) {
		
		if(!Nitro.Localization)
			Nitro.Localization = [];
		
		var localeMap = eval(data);
		for (var name in localeMap) {
			var value = localeMap[name];
			Nitro.Localization[name] = value;
		}
	}	
	
	//for flash ease of use
	Nitro.getLocalizedString = function(name,prefix) {
		return name.nitroLocalize(prefix);
	}
	
	String.prototype.nitroLocalize = function(prefix){
		if(!prefix)
			var prefix = 'javascript';
			
		var s = Nitro.Localization[prefix+"."+this];
		if( !s ) return( "���" + this + "���" );
		for (var i = 1; i < arguments.length; i++) {
			s = s.replace("{" + i + "}", arguments[i]);
		}  
		return s;
	};
	
	if(typeof nitroLocale != "undefined")
		Nitro.getLocalizationFile(nitroLocale);
}
;
var nitroProtocol = "http";
if( document.location.toString().indexOf( 'https://' ) != -1 ) {
	nitroProtocol = "https";
}
if (typeof nitroLibsVersion == "undefined") {
	nitroLibsVersion = "current";	
}		

if (typeof NitroCookies=="undefined") {
	NitroCookies = {};
	NitroCookies.swfLoaded = false;
	NitroCookies.callbacks = [];
	NitroCookies.setIds = [];	
	
	NitroCookies.getUserId = function (apiKey, callback) {
		var key = "NITRO_USERID_" + apiKey;
		
		var value = "alpha";
	
		
		if (typeof callback != "undefined" && callback != null) {
			// we got it from the browser or from the SWF, call callback and return. 
			callback(value);		
			return value;
		}
		
		// Return with no value. 
		return;
	}
	
	// unused arguments are to maintain backward compatibility for now. 
	// change in nitro.js to remove. 
	NitroCookies.setUserId = function(apiKey, value, unused1, unused2) {
		var key = "NITRO_USERID_" + apiKey;		

		return;
}
	
	
	NitroCookies.isSetup = false;
	NitroCookies.setup = function() {
		if(NitroCookies.isSetup) {
			return;
		}
		NitroCookies.isSetup = true;
		
	}	


	NitroCookies.getSWFUserId = function(key) {		
		return "alpha";
	}
	
	NitroCookies.setSWFUserId = function(key, value) {
		return;
	}	
	
	
	NitroCookies.createJSCookie = function(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}

	NitroCookies.readJSCookie = function(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	
	NitroCookies.setup();		
}
;
var nitroProtocol = "http";
if( document.location.toString().indexOf( 'https://' ) != -1 ) {
	nitroProtocol = "https";
}
if (typeof nitroLibsVersion == "undefined") {
	nitroLibsVersion = "current";	
}	

if (typeof NitroJSConnector=="undefined") {
	
	function NitroJSConnector(connectionParams) {
		this.connectionParams = connectionParams;
		if (typeof NitroJSConnector.counter == "undefined") {
			NitroJSConnector.counter = 0;
		}
		this.counterId = NitroJSConnector.counter ++;
		if(typeof this.connectionParams.autoLogin == "undefined") {
			this.connectionParams.autoLogin = true;
		}
		
		this.tryLogin = function() {
			if (this.connectionParams.userId == null) {
				if (typeof NitroCookies != "undefined") {
					// wait for callback before proceeding. 
					NitroCookies.getUserId(this.connectionParams.apiKey, NitroJSConnector.gotUserId);
					return;
				}
			}
			
			if(!this.connectionParams.autoLogin && this.connectionParams.userId.indexOf('NITRO_USER_') == 0) {
				NitroCookies.createJSCookie("anonymous",true,365);
				this.connectionParams.userId = null;
			}
			
			// If we have the session key stored in a cookie, use it.  Otherwise, we need to login.
			if (NitroCookies.readJSCookie("NITRO_SESSION_" + this.connectionParams.apiKey + "_" + this.connectionParams.userId)) {
				this.connectionParams.sessionKey = NitroCookies.readJSCookie("NITRO_SESSION_" + this.connectionParams.apiKey + "_" + this.connectionParams.userId);
				this.connectionParams.abTestGroup = NitroCookies.readJSCookie("NITRO_AB_" + this.connectionParams.apiKey + "_" + this.connectionParams.userId);
			}
			else if (this.connectionParams.autoLogin && this.connectionParams.anonymous) {	//creates a new random user
				NitroCookies.createJSCookie("anonymous",true,365);//explicit anonymous call
				this.callAPI("method=user.anonymousLogin&apiKey=" + this.connectionParams.apiKey, "NitroJSConnector.processLogin", this.counterId, false, true);
			} else if (this.connectionParams.autoLogin && typeof this.connectionParams.timeStamp == "undefined") {	//low security
				this.callAPI("method=user.login&apiKey=" + this.connectionParams.apiKey, "NitroJSConnector.processLogin", this.counterId, true, true);
			} else if(this.connectionParams.userId) {	//medium+ security
				//we were given a userId
				NitroCookies.createJSCookie("anonymous",false,365);
				this.callAPI("method=user.login&apiKey=" + this.connectionParams.apiKey +  
							 "&ts=" + this.connectionParams.timeStamp + "&sig=" + this.connectionParams.signature, 
							 "NitroJSConnector.processLogin", this.counterId, true, true);
			}
			else {
				this.connectionParams.noLogin = true;
				
				if (NitroJSConnector.toolbarArgs) {
					nitroToolbar.show(NitroJSConnector.toolbarArgs);
					NitroJSConnector.toolbarArgs = null;
				}
			}
		}
		
		NitroJSConnector.gotUserId = function(userId) {
			NitroJSConnector.userId = userId;
			for (var i = 0; i < NitroJSConnector.instances.length; i++) {
				NitroJSConnector.instances[i].connectionParams.userId = userId;
				if(userId.indexOf('NITRO_USER_') == 0) {
					//we were not given a user id and we created one ourselves
					NitroCookies.createJSCookie("anonymous",true,365);
				}
				NitroJSConnector.instances[i].tryLogin();
			}
						
		}
		
		this.callAPI = function (params, callback, asyncToken, addUserId, noSessionKey) {
		  var fullUrl = this.connectionParams.server + "?" + params;
		  if (callback != null) {
			fullUrl = fullUrl + "&jsCallback=" + callback;  
		  }
		  if (asyncToken != null) {
			fullUrl = fullUrl + "&jsAsyncToken=" + asyncToken;  
		  }
		  if (this.connectionParams.userId && addUserId != null && addUserId == true) {
			fullUrl = fullUrl + "&userId=" + this.connectionParams.userId;  
		  }
		  
		  if (noSessionKey == null || noSessionKey == false) {
			  if (this.connectionParams.sessionKey == null) {
				 if (this.retryTries > 0) {
					 this.retryTries--;
					 var _self = this;
					 setTimeout(function(){
						 _self.callAPI(params, callback, asyncToken, addUserId, noSessionKey);
					 }, this.retryCallInterval);
				 }
				 return;  
			  }
			  
			  fullUrl = fullUrl + "&sessionKey=" + this.connectionParams.sessionKey;
		  }else {
			  fullUrl = fullUrl + "&apiKey=" + this.connectionParams.apiKey;		  
		  }
		  
		  if (this.connectionParams.abTestGroup == "no") {
			  // don't make any nitro calls for the "no" group
			  return;
		  }		  
		  var obj=new JSONscriptRequest(fullUrl);     
		  obj.buildScriptTag(); // Build the script tag     
		  obj.addScriptTag(); // Execute (add) the script tag
		}
		
		NitroJSConnector.processLogin = function(data,token) {
			if (data == null) {
				if (NitroJSConnector.debug) {
					alert ('Error');
				}
				return;
			}
			if (data.Nitro.res == "err") {
				if (NitroJSConnector.debug) {
					alert (data.Nitro.Error.Message);
				}
				return;
			}
			
			for (var i = 0; i < NitroJSConnector.instances.length; i++) {
				if (NitroJSConnector.instances[i].counterId == token) {
					var cp = NitroJSConnector.instances[i].connectionParams;
					
					if(data.Nitro.Login.userId)
						cp.userId = data.Nitro.Login.userId;
					
					cp.sessionKey = data.Nitro.Login.sessionKey;
					NitroCookies.createJSCookie("NITRO_SESSION_" + cp.apiKey + "_" + cp.userId, data.Nitro.Login.sessionKey, 1/72);
					
					if (typeof data.Nitro.Login.TestGroup != "undefined") {
						cp.abTestGroup = data.Nitro.Login.TestGroup.abTestGroup;
						NitroCookies.createJSCookie("NITRO_AB_" + cp.apiKey + "_" + cp.userId, data.Nitro.Login.TestGroup.abTestGroup, 1/72);
					}
					else {
						cp.abTestGroup = null;
					}
					
					break;
				}
			}
			
			if (NitroJSConnector.toolbarArgs) {
				nitroToolbar.show(NitroJSConnector.toolbarArgs);
				NitroJSConnector.toolbarArgs = null;
			}
		}
		
		if (typeof NitroJSConnector.instances == "undefined") {
			NitroJSConnector.instances = new Array();
		}
		NitroJSConnector.instances.push(this);
		if (typeof this.connectionParams.debug == "undefined") {
			this.connectionParams.debug = false;
		}
		if (typeof this.connectionParams.userId == "undefined" || this.connectionParams.userId == null || this.connectionParams.userId == "") {
			this.connectionParams.userId = null;
		}		
		if (typeof this.connectionParams.sessionKey == "undefined" || this.connectionParams.sessionKey == null || this.connectionParams.sessionKey == "") {
			this.connectionParams.sessionKey = null;
		}		
		NitroJSConnector.debug = this.connectionParams.debug;
		this.retryLoginInterval = 10;
		this.retryCallInterval = 10;
		this.retryTries = 50000;
		if (this.connectionParams.sessionKey == null) {
			this.tryLogin();
		}
	}
	
	function JSONscriptRequest(fullUrl,dontAddNoCacheParam) {
		// REST request path
		this.fullUrl = fullUrl; 
		// Keep IE from caching requests
		this.noCacheIE = '&noCacheIE=' + (new Date()).getTime();
		// Get the DOM location to put the script tag
		this.headLoc = document.getElementsByTagName("head").item(0);
		// Generate a unique script tag id
		this.scriptId = 'YJscriptId' + JSONscriptRequest.scriptCounter++;
		
		// buildScriptTag method
		//
		this.buildScriptTag = function () {
			if (typeof JSONscriptRequest.scriptCounter == "undefined") {
				JSONscriptRequest.scriptCounter = 1;
			}
			// Create the script tag
			this.scriptObj = document.createElement("script");
			
			// Add script object attributes
			this.scriptObj.setAttribute("type", "text/javascript");
			this.scriptObj.setAttribute("src", this.fullUrl + (dontAddNoCacheParam ? '' : this.noCacheIE));
			this.scriptObj.setAttribute("id", this.scriptId);
		}
		 
		// removeScriptTag method
		// 
		this.removeScriptTag = function () {
			// Destroy the script tag
			this.headLoc.removeChild(this.scriptObj);  
		}
		
		// addScriptTag method
		//
		this.addScriptTag = function () {
			// Create the script tag
			this.headLoc.appendChild(this.scriptObj);
		}
	
	}
	
	
}


;
/*
* qTip2 - Pretty powerful tooltips
* http://craigsworks.com/projects/qtip2/
*
* Version: nightly
* Copyright 2009-2010 Craig Michael Thompson - http://craigsworks.com
*
* Dual licensed under MIT or GPLv2 licenses
*   http://en.wikipedia.org/wiki/MIT_License
*   http://en.wikipedia.org/wiki/GNU_General_Public_License
*
* Date: Tue Jan 31 10:16:34.0000000000 2012
*//*jslint browser: true, onevar: true, undef: true, nomen: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: true *//*global window: false, jQuery: false, console: false */
(function(a,b,c){function A(b){var c=this,d=b.elements,e=d.tooltip,f=".bgiframe-"+b.id;a.extend(c,{init:function(){d.bgiframe=a('<iframe class="ui-tooltip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>'),d.bgiframe.appendTo(e),e.bind("tooltipmove"+f,c.adjust)},adjust:function(){var a=b.get("dimensions"),c=b.plugins.tip,f=d.tip,g,h;h=parseInt(e.css("border-left-width"),10)||0,h={left:-h,top:-h},c&&f&&(g=c.corner.precedance==="x"?["width","left"]:["height","top"],h[g[1]]-=f[g[0]]()),d.bgiframe.css(h).css(a)},destroy:function(){d.bgiframe.remove(),e.unbind(f)}}),c.init()}function z(b,c){var i,j,k,l,m,n=a(this),o=a(document.body),p=this===document?o:n,q=n.metadata?n.metadata(c.metadata):f,r=c.metadata.type==="html5"&&q?q[c.metadata.name]:f,s=n.data(c.metadata.name||"qtipopts");try{s=typeof s==="string"?(new Function("return "+s))():s}catch(t){w("Unable to parse HTML5 attribute data: "+s)}l=a.extend(d,{},g.defaults,c,typeof s==="object"?x(s):f,x(r||q)),j=l.position,l.id=b;if("boolean"===typeof l.content.text){k=n.attr(l.content.attr);if(l.content.attr!==e&&k)l.content.text=k;else{w("Unable to locate content for tooltip! Aborting render of tooltip on element: ",n);return e}}j.container.length||(j.container=o),j.target===e&&(j.target=p),l.show.target===e&&(l.show.target=p),l.show.solo===d&&(l.show.solo=o),l.hide.target===e&&(l.hide.target=p),l.position.viewport===d&&(l.position.viewport=j.container),j.at=new h.Corner(j.at),j.my=new h.Corner(j.my);if(a.data(this,"qtip"))if(l.overwrite)n.qtip("destroy");else if(l.overwrite===e)return e;l.suppress&&(m=a.attr(this,"title"))&&a(this).removeAttr("title").attr(u,m),i=new y(n,l,b,!!k),a.data(this,"qtip",i),n.bind("remove.qtip-"+b,function(){i.destroy()});return i}function y(s,t,w,y){function R(){var c=[t.show.target[0],t.hide.target[0],z.rendered&&G.tooltip[0],t.position.container[0],t.position.viewport[0],b,document];z.rendered?a([]).pushStack(a.grep(c,function(a){return typeof a==="object"})).unbind(F):t.show.target.unbind(F+"-create")}function Q(){function p(a){E.is(":visible")&&z.reposition(a)}function o(a){if(E.hasClass(m))return e;clearTimeout(z.timers.inactive),z.timers.inactive=setTimeout(function(){z.hide(a)},t.hide.inactive)}function l(b){if(E.hasClass(m)||C||D)return e;var d=a(b.relatedTarget||b.target),g=d.closest(n)[0]===E[0],h=d[0]===f.show[0];clearTimeout(z.timers.show),clearTimeout(z.timers.hide);if(c.target==="mouse"&&g||t.hide.fixed&&(/mouse(out|leave|move)/.test(b.type)&&(g||h)))try{b.preventDefault(),b.stopImmediatePropagation()}catch(i){}else t.hide.delay>0?z.timers.hide=setTimeout(function(){z.hide(b)},t.hide.delay):z.hide(b)}function k(a){if(E.hasClass(m))return e;clearTimeout(z.timers.show),clearTimeout(z.timers.hide);var b=function(){z.toggle(d,a)};t.show.delay>0?z.timers.show=setTimeout(b,t.show.delay):b()}var c=t.position,f={show:t.show.target,hide:t.hide.target,viewport:a(c.viewport),document:a(document),body:a(document.body),window:a(b)},h={show:a.trim(""+t.show.event).split(" "),hide:a.trim(""+t.hide.event).split(" ")},j=a.browser.msie&&parseInt(a.browser.version,10)===6;E.bind("mouseenter"+F+" mouseleave"+F,function(a){var b=a.type==="mouseenter";b&&z.focus(a),E.toggleClass(q,b)}),t.hide.fixed&&(f.hide=f.hide.add(E),E.bind("mouseover"+F,function(){E.hasClass(m)||clearTimeout(z.timers.hide)})),/mouse(out|leave)/i.test(t.hide.event)?t.hide.leave==="window"&&f.window.bind("mouseout"+F+" blur"+F,function(a){/select|option/.test(a.target)&&!a.relatedTarget&&z.hide(a)}):/mouse(over|enter)/i.test(t.show.event)&&f.hide.bind("mouseleave"+F,function(a){clearTimeout(z.timers.show)}),(""+t.hide.event).indexOf("unfocus")>-1&&f.body.bind("mousedown"+F,function(b){var c=a(b.target),d=!E.hasClass(m)&&E.is(":visible");c[0]!==E[0]&&c.parents(n).length===0&&c.add(s).length>1&&!c.attr("disabled")&&z.hide(b)}),"number"===typeof t.hide.inactive&&(f.show.bind("qtip-"+w+"-inactive",o),a.each(g.inactiveEvents,function(a,b){f.hide.add(G.tooltip).bind(b+F+"-inactive",o)})),a.each(h.hide,function(b,c){var d=a.inArray(c,h.show),e=a(f.hide);d>-1&&e.add(f.show).length===e.length||c==="unfocus"?(f.show.bind(c+F,function(a){E.is(":visible")?l(a):k(a)}),delete h.show[d]):f.hide.bind(c+F,l)}),a.each(h.show,function(a,b){f.show.bind(b+F,k)}),"number"===typeof t.hide.distance&&f.show.add(E).bind("mousemove"+F,function(a){var b=H.origin||{},c=t.hide.distance,d=Math.abs;(d(a.pageX-b.pageX)>=c||d(a.pageY-b.pageY)>=c)&&z.hide(a)}),c.target==="mouse"&&(f.show.bind("mousemove"+F,function(a){i={pageX:a.pageX,pageY:a.pageY,type:"mousemove"}}),c.adjust.mouse&&(t.hide.event&&(E.bind("mouseleave"+F,function(a){(a.relatedTarget||a.target)!==f.show[0]&&z.hide(a)}),G.target.bind("mouseenter"+F+" mouseleave"+F,function(a){H.onTarget=a.type==="mouseenter"})),f.document.bind("mousemove"+F,function(a){H.onTarget&&!E.hasClass(m)&&E.is(":visible")&&z.reposition(a||i)}))),(c.adjust.resize||f.viewport.length)&&(a.event.special.resize?f.viewport:f.window).bind("resize"+F,p),(f.viewport.length||j&&E.css("position")==="fixed")&&f.viewport.bind("scroll"+F,p)}function P(b,d){function g(b){function i(c){c&&(delete h[c.src],clearTimeout(z.timers.img[c.src]),a(c).unbind(F)),a.isEmptyObject(h)&&(z.redraw(),d!==e&&z.reposition(H.event),b())}var g,h={};if((g=f.find("img:not([height]):not([width])")).length===0)return i();g.each(function(b,d){if(h[d.src]===c){var e=0,f=3;(function g(){if(d.height||d.width||e>f)return i(d);e+=1,z.timers.img[d.src]=setTimeout(g,700)})(),a(d).bind("error"+F+" load"+F,function(){i(this)}),h[d.src]=d}})}var f=G.content;if(!z.rendered||!b)return e;a.isFunction(b)&&(b=b.call(s,H.event,z)||""),b.jquery&&b.length>0?f.empty().append(b.css({display:"block"})):f.html(b),z.rendered<0?E.queue("fx",g):(D=0,g(a.noop));return z}function O(b,c){var d=G.title;if(!z.rendered||!b)return e;a.isFunction(b)&&(b=b.call(s,H.event,z));if(b===e)return K(e);b.jquery&&b.length>0?d.empty().append(b.css({display:"block"})):d.html(b),z.redraw(),c!==e&&z.rendered&&E.is(":visible")&&z.reposition(H.event)}function N(a){var b=G.button,c=G.title;if(!z.rendered)return e;a?(c||M(),L()):b.remove()}function M(){var b=B+"-title";G.titlebar&&K(),G.titlebar=a("<div />",{"class":k+"-titlebar "+(t.style.widget?"ui-widget-header":"")}).append(G.title=a("<div />",{id:b,"class":k+"-title","aria-atomic":d})).insertBefore(G.content).delegate(".ui-tooltip-close","mousedown keydown mouseup keyup mouseout",function(b){a(this).toggleClass("ui-state-active ui-state-focus",b.type.substr(-4)==="down")}).delegate(".ui-tooltip-close","mouseover mouseout",function(b){a(this).toggleClass("ui-state-hover",b.type==="mouseover")}),t.content.title.button?L():z.rendered&&z.redraw()}function L(){var b=t.content.title.button,c=typeof b==="string",d=c?b:"Close tooltip";G.button&&G.button.remove(),b.jquery?G.button=b:G.button=a("<a />",{"class":"ui-state-default ui-tooltip-close "+(t.style.widget?"":k+"-icon"),title:d,"aria-label":d}).prepend(a("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"})),G.button.appendTo(G.titlebar).attr("role","button").click(function(a){E.hasClass(m)||z.hide(a);return e}),z.redraw()}function K(a){G.title&&(G.titlebar.remove(),G.titlebar=G.title=G.button=f,a!==e&&z.reposition())}function J(){var a=t.style.widget;E.toggleClass(l,a).toggleClass(o,t.style["default"]&&!a),G.content.toggleClass(l+"-content",a),G.titlebar&&G.titlebar.toggleClass(l+"-header",a),G.button&&G.button.toggleClass(k+"-icon",!a)}function I(a){var b=0,c,d=t,e=a.split(".");while(d=d[e[b++]])b<e.length&&(c=d);return[c||t,e.pop()]}var z=this,A=document.body,B=k+"-"+w,C=0,D=0,E=a(),F=".qtip-"+w,G,H;z.id=w,z.rendered=e,z.elements=G={target:s},z.timers={img:{}},z.options=t,z.checks={},z.plugins={},z.cache=H={event:{},target:a(),disabled:e,attr:y,onTarget:e},z.checks.builtin={"^id$":function(b,c,f){var h=f===d?g.nextid:f,i=k+"-"+h;h!==e&&h.length>0&&!a("#"+i).length&&(E[0].id=i,G.content[0].id=i+"-content",G.title[0].id=i+"-title")},"^content.text$":function(a,b,c){P(c)},"^content.title.text$":function(a,b,c){if(!c)return K();!G.title&&c&&M(),O(c)},"^content.title.button$":function(a,b,c){N(c)},"^position.(my|at)$":function(a,b,c){"string"===typeof c&&(a[b]=new h.Corner(c))},"^position.container$":function(a,b,c){z.rendered&&E.appendTo(c)},"^show.ready$":function(){z.rendered?z.toggle(d):z.render(1)},"^style.classes$":function(a,b,c){E.attr("class",k+" qtip ui-helper-reset "+c)},"^style.widget|content.title":J,"^events.(render|show|move|hide|focus|blur)$":function(b,c,d){E[(a.isFunction(d)?"":"un")+"bind"]("tooltip"+c,d)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){var a=t.position;E.attr("tracking",a.target==="mouse"&&a.adjust.mouse),R(),Q()}},a.extend(z,{render:function(b){if(z.rendered)return z;var c=t.content.text,f=t.content.title.text,g=t.position,i=a.Event("tooltiprender");a.attr(s[0],"aria-describedby",B),E=G.tooltip=a("<div/>",{id:B,"class":k+" qtip ui-helper-reset "+o+" "+t.style.classes+" "+k+"-pos-"+t.position.my.abbrev(),width:t.style.width||"",height:t.style.height||"",tracking:g.target==="mouse"&&g.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":e,"aria-describedby":B+"-content","aria-hidden":d}).toggleClass(m,H.disabled).data("qtip",z).appendTo(t.position.container).append(G.content=a("<div />",{"class":k+"-content",id:B+"-content","aria-atomic":d})),z.rendered=-1,C=D=1,f&&(M(),a.isFunction(f)||O(f,e)),a.isFunction(c)||P(c,e),z.rendered=d,J(),a.each(t.events,function(b,c){a.isFunction(c)&&E.bind(b==="toggle"?"tooltipshow tooltiphide":"tooltip"+b,c)}),a.each(h,function(){this.initialize==="render"&&this(z)}),Q(),E.queue("fx",function(a){i.originalEvent=H.event,E.trigger(i,[z]),C=D=0,z.redraw(),(t.show.ready||b)&&z.toggle(d,H.event,e),a()});return z},get:function(a){var b,c;switch(a.toLowerCase()){case"dimensions":b={height:E.outerHeight(),width:E.outerWidth()};break;case"offset":b=h.offset(E,t.position.container);break;default:c=I(a.toLowerCase()),b=c[0][c[1]],b=b.precedance?b.string():b}return b},set:function(b,c){function m(a,b){var c,d,e;for(c in k)for(d in k[c])if(e=(new RegExp(d,"i")).exec(a))b.push(e),k[c][d].apply(z,b)}var g=/^position\.(my|at|adjust|target|container)|style|content|show\.ready/i,h=/^content\.(title|attr)|style/i,i=e,j=e,k=z.checks,l;"string"===typeof b?(l=b,b={},b[l]=c):b=a.extend(d,{},b),a.each(b,function(c,d){var e=I(c.toLowerCase()),f;f=e[0][e[1]],e[0][e[1]]="object"===typeof d&&d.nodeType?a(d):d,b[c]=[e[0],e[1],d,f],i=g.test(c)||i,j=h.test(c)||j}),x(t),C=D=1,a.each(b,m),C=D=0,E.is(":visible")&&z.rendered&&(i&&z.reposition(t.position.target==="mouse"?f:H.event),j&&z.redraw());return z},toggle:function(b,c){function q(){b?(a.browser.msie&&E[0].style.removeAttribute("filter"),E.css("overflow",""),"string"===typeof h.autofocus&&a(h.autofocus,E).focus(),p=a.Event("tooltipvisible"),p.originalEvent=c?H.event:f,E.trigger(p,[z]),h.target.trigger("qtip-"+w+"-inactive")):E.css({display:"",visibility:"",opacity:"",left:"",top:""})}if(!z.rendered)return b?z.render(1):z;var g=b?"show":"hide",h=t[g],j=E.is(":visible"),k=!c||t[g].target.length<2||H.target[0]===c.target,l=t.position,m=t.content,o,p;(typeof b).search("boolean|number")&&(b=!j);if(!E.is(":animated")&&j===b&&k)return z;if(c){if(/over|enter/.test(c.type)&&/out|leave/.test(H.event.type)&&c.target===t.show.target[0]&&E.has(c.relatedTarget).length)return z;H.event=a.extend({},c)}p=a.Event("tooltip"+g),p.originalEvent=c?H.event:f,E.trigger(p,[z,90]);if(p.isDefaultPrevented())return z;a.attr(E[0],"aria-hidden",!b),b?(H.origin=a.extend({},i),z.focus(c),a.isFunction(m.text)&&P(m.text,e),a.isFunction(m.title.text)&&O(m.title.text,e),!v&&l.target==="mouse"&&l.adjust.mouse&&(a(document).bind("mousemove.qtip",function(a){i={pageX:a.pageX,pageY:a.pageY,type:"mousemove"}}),v=d),z.reposition(c,arguments[2]),(p.solo=!!h.solo)&&a(n,h.solo).not(E).qtip("hide",p)):(clearTimeout(z.timers.show),delete H.origin,v&&!a(n+'[tracking="true"]:visible',h.solo).not(E).length&&(a(document).unbind("mousemove.qtip"),v=e),z.blur(c)),k&&E.stop(0,1),h.effect===e?(E[g](),q.call(E)):a.isFunction(h.effect)?(h.effect.call(E,z),E.queue("fx",function(a){q(),a()})):E.fadeTo(90,b?1:0,q),b&&h.target.trigger("qtip-"+w+"-inactive");return z},show:function(a){return z.toggle(d,a)},hide:function(a){return z.toggle(e,a)},focus:function(b){if(!z.rendered)return z;var c=a(n),d=parseInt(E[0].style.zIndex,10),e=g.zindex+c.length,f=a.extend({},b),h,i;E.hasClass(p)||(i=a.Event("tooltipfocus"),i.originalEvent=f,E.trigger(i,[z,e]),i.isDefaultPrevented()||(d!==e&&(c.each(function(){this.style.zIndex>d&&(this.style.zIndex=this.style.zIndex-1)}),c.filter("."+p).qtip("blur",f)),E.addClass(p)[0].style.zIndex=e));return z},blur:function(b){var c=a.extend({},b),d;E.removeClass(p),d=a.Event("tooltipblur"),d.originalEvent=c,E.trigger(d,[z]);return z},reposition:function(c,d){if(!z.rendered||C)return z;C=1;var f=t.position.target,g=t.position,j=g.my,l=g.at,m=g.adjust,n=m.method.split(" "),o=E.outerWidth(),p=E.outerHeight(),q=0,r=0,s=a.Event("tooltipmove"),u=E.css("position")==="fixed",v=g.viewport,w={left:0,top:0},x=g.container,y=e,B=z.plugins.tip,D={horizontal:n[0],vertical:n[1]=n[1]||n[0],enabled:v.jquery&&f[0]!==b&&f[0]!==A&&m.method!=="none",left:function(a){var b=D.horizontal==="shift",c=-x.offset.left+v.offset.left+v.scrollLeft,d=j.x==="left"?o:j.x==="right"?-o:-o/2,e=l.x==="left"?q:l.x==="right"?-q:-q/2,f=B&&B.size?B.size.width||0:0,g=B&&B.corner&&B.corner.precedance==="x"&&!b?f:0,h=c-a+g,i=a+o-v.width-c+g,k=d-(j.precedance==="x"||j.x===j.y?e:0)-(l.x==="center"?q/2:0),n=j.x==="center";b?(g=B&&B.corner&&B.corner.precedance==="y"?f:0,k=(j.x==="left"?1:-1)*d-g,w.left+=h>0?h:i>0?-i:0,w.left=Math.max(-x.offset.left+v.offset.left+(g&&B.corner.x==="center"?B.offset:0),a-k,Math.min(Math.max(-x.offset.left+v.offset.left+v.width,a+k),w.left))):(h>0&&(j.x!=="left"||i>0)?w.left-=k:i>0&&(j.x!=="right"||h>0)&&(w.left-=n?-k:k),w.left!==a&&n&&(w.left-=m.x),w.left<c&&-w.left>i&&(w.left=a));return w.left-a},top:function(a){var b=D.vertical==="shift",c=-x.offset.top+v.offset.top+v.scrollTop,d=j.y==="top"?p:j.y==="bottom"?-p:-p/2,e=l.y==="top"?r:l.y==="bottom"?-r:-r/2,f=B&&B.size?B.size.height||0:0,g=B&&B.corner&&B.corner.precedance==="y"&&!b?f:0,h=c-a+g,i=a+p-v.height-c+g,k=d-(j.precedance==="y"||j.x===j.y?e:0)-(l.y==="center"?r/2:0),n=j.y==="center";b?(g=B&&B.corner&&B.corner.precedance==="x"?f:0,k=(j.y==="top"?1:-1)*d-g,w.top+=h>0?h:i>0?-i:0,w.top=Math.max(-x.offset.top+v.offset.top+(g&&B.corner.x==="center"?B.offset:0),a-k,Math.min(Math.max(-x.offset.top+v.offset.top+v.height,a+k),w.top))):(h>0&&(j.y!=="top"||i>0)?w.top-=k:i>0&&(j.y!=="bottom"||h>0)&&(console.log("test"),w.top-=n?-k:k),w.top!==a&&n&&(w.top-=m.y),w.top<0&&-w.top>i&&(w.top=a));return w.top-a}},F;if(a.isArray(f)&&f.length===2)l={x:"left",y:"top"},w={left:f[0],top:f[1]};else if(f==="mouse"&&(c&&c.pageX||H.event.pageX))l={x:"left",y:"top"},c=(c&&(c.type==="resize"||c.type==="scroll")?H.event:c&&c.pageX&&c.type==="mousemove"?c:i&&i.pageX&&(m.mouse||!c||!c.pageX)?{pageX:i.pageX,pageY:i.pageY}:!m.mouse&&H.origin&&H.origin.pageX&&t.show.distance?H.origin:c)||c||H.event||i||{},w={top:c.pageY,left:c.pageX};else{f==="event"?c&&c.target&&c.type!=="scroll"&&c.type!=="resize"?f=H.target=a(c.target):f=H.target:f=H.target=a(f.jquery?f:G.target),f=a(f).eq(0);if(f.length===0)return z;f[0]===document||f[0]===b?(q=h.iOS?b.innerWidth:f.width(),r=h.iOS?b.innerHeight:f.height(),f[0]===b&&(w={top:(v||f).scrollTop(),left:(v||f).scrollLeft()})):f.is("area")&&h.imagemap?w=h.imagemap(f,l,D.enabled?n:e):f[0].namespaceURI==="http://www.w3.org/2000/svg"&&h.svg?w=h.svg(f,l):(q=f.outerWidth(),r=f.outerHeight(),w=h.offset(f,x)),w.offset&&(q=w.width,r=w.height,y=w.flipoffset,w=w.offset);if(h.iOS<4.1&&h.iOS>3.1||h.iOS==4.3||!h.iOS&&u)F=a(b),w.left-=F.scrollLeft(),w.top-=F.scrollTop();w.left+=l.x==="right"?q:l.x==="center"?q/2:0,w.top+=l.y==="bottom"?r:l.y==="center"?r/2:0}w.left+=m.x+(j.x==="right"?-o:j.x==="center"?-o/2:0),w.top+=m.y+(j.y==="bottom"?-p:j.y==="center"?-p/2:0),D.enabled?(v={elem:v,height:v[(v[0]===b?"h":"outerH")+"eight"](),width:v[(v[0]===b?"w":"outerW")+"idth"](),scrollLeft:u?0:v.scrollLeft(),scrollTop:u?0:v.scrollTop(),offset:v.offset()||{left:0,top:0}},x={elem:x,scrollLeft:x.scrollLeft(),scrollTop:x.scrollTop(),offset:x.offset()||{left:0,top:0}},w.adjusted={left:D.horizontal!=="none"?D.left(w.left):0,top:D.vertical!=="none"?D.top(w.top):0},w.adjusted.left+w.adjusted.top&&E.attr("class",E[0].className.replace(/ui-tooltip-pos-\w+/i,k+"-pos-"+j.abbrev())),y&&w.adjusted.left&&(w.left+=y.left),y&&w.adjusted.top&&(w.top+=y.top)):w.adjusted={left:0,top:0},s.originalEvent=a.extend({},c),E.trigger(s,[z,w,v.elem||v]);if(s.isDefaultPrevented())return z;delete w.adjusted,d===e||isNaN(w.left)||isNaN(w.top)||f==="mouse"||!a.isFunction(g.effect)?E.css(w):a.isFunction(g.effect)&&(g.effect.call(E,z,a.extend({},w)),E.queue(function(b){a(this).css({opacity:"",height:""}),a.browser.msie&&this.style.removeAttribute("filter"),b()})),C=0;return z},redraw:function(){if(z.rendered<1||D)return z;var a=t.position.container,b,c,d,e;D=1,t.style.height&&E.css("height",t.style.height),t.style.width?E.css("width",t.style.width):(E.css("width","").addClass(r),c=E.width()+1,d=E.css("max-width")||"",e=E.css("min-width")||"",b=(d+e).indexOf("%")>-1?a.width()/100:0,d=(d.indexOf("%")>-1?b:1)*parseInt(d,10)||c,e=(e.indexOf("%")>-1?b:1)*parseInt(e,10)||0,c=d+e?Math.min(Math.max(c,e),d):c,E.css("width",Math.round(c)).removeClass(r)),D=0;return z},disable:function(b){"boolean"!==typeof b&&(b=!E.hasClass(m)&&!H.disabled),z.rendered?(E.toggleClass(m,b),a.attr(E[0],"aria-disabled",b)):H.disabled=!!b;return z},enable:function(){return z.disable(e)},destroy:function(){var b=s[0],c=a.attr(b,u),d=s.data("qtip");z.rendered&&(E.remove(),a.each(z.plugins,function(){this.destroy&&this.destroy()})),clearTimeout(z.timers.show),clearTimeout(z.timers.hide),R();if(!d||z===d)a.removeData(b,"qtip"),t.suppress&&c&&(a.attr(b,"title",c),s.removeAttr(u)),s.removeAttr("aria-describedby");s.unbind(".qtip-"+w),delete j[z.id];return s}})}function x(b){var c;if(!b||"object"!==typeof b)return e;if(b.metadata===f||"object"!==typeof b.metadata)b.metadata={type:b.metadata};if("content"in b){if(b.content===f||"object"!==typeof b.content||b.content.jquery)b.content={text:b.content};c=b.content.text||e,!a.isFunction(c)&&(!c&&!c.attr||c.length<1||"object"===typeof c&&!c.jquery)&&(b.content.text=e);if("title"in b.content){if(b.content.title===f||"object"!==typeof b.content.title)b.content.title={text:b.content.title};c=b.content.title.text||e,!a.isFunction(c)&&(!c&&!c.attr||c.length<1||"object"===typeof c&&!c.jquery)&&(b.content.title.text=e)}}if("position"in b)if(b.position===f||"object"!==typeof b.position)b.position={my:b.position,at:b.position};if("show"in b)if(b.show===f||"object"!==typeof b.show)b.show.jquery?b.show={target:b.show}:b.show={event:b.show};if("hide"in b)if(b.hide===f||"object"!==typeof b.hide)b.hide.jquery?b.hide={target:b.hide}:b.hide={event:b.hide};if("style"in b)if(b.style===f||"object"!==typeof b.style)b.style={classes:b.style};a.each(h,function(){this.sanitize&&this.sanitize(b)});return b}function w(){w.history=w.history||[],w.history.push(arguments);if("object"===typeof console){var a=console[console.warn?"warn":"log"],b=Array.prototype.slice.call(arguments),c;typeof arguments[0]==="string"&&(b[0]="qTip2: "+b[0]),c=a.apply?a.apply(console,b):a(b)}}"use strict";var d=!0,e=!1,f=null,g,h,i,j={},k="ui-tooltip",l="ui-widget",m="ui-state-disabled",n="div.qtip."+k,o=k+"-default",p=k+"-focus",q=k+"-hover",r=k+"-fluid",s="-31000px",t="_replacedByqTip",u="oldtitle",v;g=a.fn.qtip=function(b,h,i){var j=(""+b).toLowerCase(),k=f,l=a.makeArray(arguments).slice(1),m=l[l.length-1],n=this[0]?a.data(this[0],"qtip"):f;if(!arguments.length&&n||j==="api")return n;if("string"===typeof b){this.each(function(){var b=a.data(this,"qtip");if(!b)return d;m&&m.timeStamp&&(b.cache.event=m);if(j!=="option"&&j!=="options"||!h)b[j]&&b[j].apply(b[j],l);else if(a.isPlainObject(h)||i!==c)b.set(h,i);else{k=b.get(h);return e}});return k!==f?k:this}if("object"===typeof b||!arguments.length){n=x(a.extend(d,{},b));return g.bind.call(this,n,m)}},g.bind=function(b,f){return this.each(function(k){function r(b){function d(){p.render(typeof b==="object"||l.show.ready),m.show.add(m.hide).unbind(o)}if(p.cache.disabled)return e;p.cache.event=a.extend({},b),p.cache.target=b?a(b.target):[c],l.show.delay>0?(clearTimeout(p.timers.show),p.timers.show=setTimeout(d,l.show.delay),n.show!==n.hide&&m.hide.bind(n.hide,function(){clearTimeout(p.timers.show)})):d()}var l,m,n,o,p,q;q=a.isArray(b.id)?b.id[k]:b.id,q=!q||q===e||q.length<1||j[q]?g.nextid++:j[q]=q,o=".qtip-"+q+"-create",p=z.call(this,q,b);if(p===e)return d;l=p.options,a.each(h,function(){this.initialize==="initialize"&&this(p)}),m={show:l.show.target,hide:l.hide.target},n={show:a.trim(""+l.show.event).replace(/ /g,o+" ")+o,hide:a.trim(""+l.hide.event).replace(/ /g,o+" ")+o},/mouse(over|enter)/i.test(n.show)&&!/mouse(out|leave)/i.test(n.hide)&&(n.hide+=" mouseleave"+o),m.show.bind("mousemove"+o,function(a){i={pageX:a.pageX,pageY:a.pageY,type:"mousemove"},p.cache.onTarget=d}),m.show.bind(n.show,r),(l.show.ready||l.prerender)&&r(f)})},h=g.plugins={Corner:function(a){a=(""+a).replace(/([A-Z])/," $1").replace(/middle/gi,"center").toLowerCase(),this.x=(a.match(/left|right/i)||a.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(a.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase();var b=a.charAt(0);this.precedance=b==="t"||b==="b"?"y":"x",this.string=function(){return this.precedance==="y"?this.y+this.x:this.x+this.y},this.abbrev=function(){var a=this.x.substr(0,1),b=this.y.substr(0,1);return a===b?a:a==="c"||a!=="c"&&b!=="c"?b+a:a+b},this.clone=function(){return{x:this.x,y:this.y,precedance:this.precedance,string:this.string,abbrev:this.abbrev,clone:this.clone}}},offset:function(a,b){function i(a,b){c.left+=b*a.scrollLeft(),c.top+=b*a.scrollTop()}var c=a.offset(),d=b,e=0,f=document.body,g,h;if(d){do{d.css("position")!=="static"&&(g=d[0]===f?{left:parseInt(d.css("left"),10)||0,top:parseInt(d.css("top"),10)||0}:d.position(),c.left-=g.left+(parseInt(d.css("borderLeftWidth"),10)||0)+(parseInt(d.css("marginLeft"),10)||0),c.top-=g.top+(parseInt(d.css("borderTopWidth"),10)||0),h=d.css("overflow"),(h==="scroll"||h==="auto")&&++e);if(d[0]===f)break}while(d=d.offsetParent());b[0]!==f&&e&&i(b,1)}return c},iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,3})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_","."))||e,fn:{attr:function(b,c){if(this.length){var d=this[0],e="title",f=a.data(d,"qtip");if(b===e&&f&&"object"===typeof f&&f.options.suppress){if(arguments.length<2)return a.attr(d,u);f&&f.options.content.attr===e&&f.cache.attr&&f.set("content.text",c);return this.attr(u,c)}}return a.fn["attr"+t].apply(this,arguments)},clone:function(b){var c=a([]),d="title",e=a.fn["clone"+t].apply(this,arguments);b||e.filter("["+u+"]").attr("title",function(){return a.attr(this,u)}).removeAttr(u);return e},remove:a.ui?f:function(b,c){a.ui||a(this).each(function(){c||(!b||a.filter(b,[this]).length)&&a("*",this).add(this).each(function(){a(this).triggerHandler("remove")})})}}},a.each(h.fn,function(b,c){if(!c||a.fn[b+t])return d;var e=a.fn[b+t]=a.fn[b];a.fn[b]=function(){return c.apply(this,arguments)||e.apply(this,arguments)}}),g.version="nightly",g.nextid=0,g.inactiveEvents="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),g.zindex=15e3,g.defaults={prerender:e,id:e,overwrite:d,suppress:d,content:{text:d,attr:"title",title:{text:e,button:e}},position:{my:"top left",at:"bottom right",target:e,container:e,viewport:e,adjust:{x:0,y:0,mouse:d,resize:d,method:"flip flip"},effect:function(b,c,d){a(this).animate(c,{duration:200,queue:e})}},show:{target:e,event:"mouseenter",effect:d,delay:90,solo:e,ready:e,autofocus:e},hide:{target:e,event:"mouseleave",effect:d,delay:0,fixed:e,inactive:e,leave:"window",distance:e},style:{classes:"",widget:e,width:e,height:e,"default":d},events:{render:f,move:f,show:f,hide:f,toggle:f,visible:f,focus:f,blur:f}},h.bgiframe=function(b){var c=a.browser,d=b.plugins.bgiframe;if(a("select, object").length<1||(!c.msie||(""+c.version).charAt(0)!=="6"))return e;return"object"===typeof d?d:b.plugins.bgiframe=new A(b)},h.bgiframe.initialize="render"})(jQuery,window)

;
/**
 * This is the n4jive object declaration. holds the global defaults for things. 
 * only one of these per page will be instantiated.
 */

/**
 * @depends path=/plugins/gamification/resources/script/lib/n4jive/n4jive.libs.js
 * @depends path=/resources/scripts/apps/shared/views/loader_view.js
 */
if (typeof(n4jive) == "undefined") {
    n4jive = {};
}


(function($){
    $j.extend(n4jive, {
        data: {},  //just a place to handily dump stuff to.
        self: this,
        settings: {}
    });

	n4jive.old = {};
	
	n4jive.workingFactory = function(pTarget) {
	    var spinner = new jive.loader.LoaderView({size: 'small', showLabel: false});
        spinner.appendTo(pTarget);

        return function(){
            if (spinner) {
                spinner.hide().destroy();
                spinner = null;
            }
        };
    }
    
	n4jive.addCommas = function(nStr){
		nStr += '';
		x = nStr.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		return x1 + x2;				
	}	
	
	n4jive.getIntPercentage = function(num1, num2){
		return  Math.round((num1/num2) * 100);
	}

	n4jive.showLoadingSpinners = function(){
		for(i in arguments){
			var el = arguments[i];
			el.prepend("<img src='https://assets.bunchball.net/widgets/jive/test/images/ajaxload.gif' style='width:auto' class='n4jive_loading_spinner' />");
		}
	}

	n4jive.destroyLoadingSpinners = function(){
		$(".n4jive_loading_spinner").remove();
	}
	
	n4jive.getSanitizeChallengesResponse = function(responseObj){
		var challenges = new Array();
		//check for no one first...
		
		if(responseObj.res != "ok" || responseObj.challenges == true){
			//hide the 'recent challenges' header
			$("#n4jive_hover_recent_challenges").hide();
			
			//BAIL!				
			return []; 
		}
		
		//organize challenges...
		//single challenge
		if(typeof responseObj.challenges.Challenge.length == "undefined"){
			challenges.push(responseObj.challenges.Challenge);			
		}
		//multiple challenges
		else{
			for(i=0;i<responseObj.challenges.Challenge.length;i++){
				challenges.push(responseObj.challenges.Challenge[i]);
			}
		}
		
		return challenges;
	}
	
	n4jive.getJiveHoverTipHTML = function(content, showLoader){
		var h = '<div class="jive-tooltip2 notedefault snp-mouseoffset" id="n4jive_hover_tip" style="visibility: visible">'+
					'<div class="jive-tooltip2-mid j-mini-modal j-mini-modal-user">' +
						'<div id="jive-note-user-body" class="n4jive_hover_tip_body jive-tooltip2-mid-padding j-modal-content clearfix">';
						if(typeof showLoader != 'undefined' && showLoader){
							h += '<p>Loading...</p>';
						}
						h += content;
					h += '</div>' +
					'</div>' +
				'</div>'
		return h;
	}
	
	n4jive.md5 = function(C){var D;var w=function(b,a){return(b<<a)|(b>>>(32-a))};var H=function(k,b){var V,a,d,x,c;d=(k&2147483648);x=(b&2147483648);V=(k&1073741824);a=(b&1073741824);c=(k&1073741823)+(b&1073741823);if(V&a){return(c^2147483648^d^x)}if(V|a){if(c&1073741824){return(c^3221225472^d^x)}else{return(c^1073741824^d^x)}}else{return(c^d^x)}};var r=function(a,c,b){return(a&c)|((~a)&b)};var q=function(a,c,b){return(a&b)|(c&(~b))};var p=function(a,c,b){return(a^c^b)};var n=function(a,c,b){return(c^(a|(~b)))};var u=function(W,V,aa,Z,k,X,Y){W=H(W,H(H(r(V,aa,Z),k),Y));return H(w(W,X),V)};var f=function(W,V,aa,Z,k,X,Y){W=H(W,H(H(q(V,aa,Z),k),Y));return H(w(W,X),V)};var F=function(W,V,aa,Z,k,X,Y){W=H(W,H(H(p(V,aa,Z),k),Y));return H(w(W,X),V)};var t=function(W,V,aa,Z,k,X,Y){W=H(W,H(H(n(V,aa,Z),k),Y));return H(w(W,X),V)};var e=function(V){var W;var d=V.length;var c=d+8;var b=(c-(c%64))/64;var x=(b+1)*16;var X=new Array(x-1);var a=0;var k=0;while(k<d){W=(k-(k%4))/4;a=(k%4)*8;X[W]=(X[W]|(V.charCodeAt(k)<<a));k++}W=(k-(k%4))/4;a=(k%4)*8;X[W]=X[W]|(128<<a);X[x-2]=d<<3;X[x-1]=d>>>29;return X};var s=function(d){var a="",b="",k,c;for(c=0;c<=3;c++){k=(d>>>(c*8))&255;b="0"+k.toString(16);a=a+b.substr(b.length-2,2)}return a};var E=[],L,h,G,v,g,U,T,S,R,O=7,M=12,J=17,I=22,B=5,A=9,z=14,y=20,o=4,m=11,l=16,j=23,Q=6,P=10,N=15,K=21;C=this.utf8_encode(C);E=e(C);U=1732584193;T=4023233417;S=2562383102;R=271733878;D=E.length;for(L=0;L<D;L+=16){h=U;G=T;v=S;g=R;U=u(U,T,S,R,E[L+0],O,3614090360);R=u(R,U,T,S,E[L+1],M,3905402710);S=u(S,R,U,T,E[L+2],J,606105819);T=u(T,S,R,U,E[L+3],I,3250441966);U=u(U,T,S,R,E[L+4],O,4118548399);R=u(R,U,T,S,E[L+5],M,1200080426);S=u(S,R,U,T,E[L+6],J,2821735955);T=u(T,S,R,U,E[L+7],I,4249261313);U=u(U,T,S,R,E[L+8],O,1770035416);R=u(R,U,T,S,E[L+9],M,2336552879);S=u(S,R,U,T,E[L+10],J,4294925233);T=u(T,S,R,U,E[L+11],I,2304563134);U=u(U,T,S,R,E[L+12],O,1804603682);R=u(R,U,T,S,E[L+13],M,4254626195);S=u(S,R,U,T,E[L+14],J,2792965006);T=u(T,S,R,U,E[L+15],I,1236535329);U=f(U,T,S,R,E[L+1],B,4129170786);R=f(R,U,T,S,E[L+6],A,3225465664);S=f(S,R,U,T,E[L+11],z,643717713);T=f(T,S,R,U,E[L+0],y,3921069994);U=f(U,T,S,R,E[L+5],B,3593408605);R=f(R,U,T,S,E[L+10],A,38016083);S=f(S,R,U,T,E[L+15],z,3634488961);T=f(T,S,R,U,E[L+4],y,3889429448);U=f(U,T,S,R,E[L+9],B,568446438);R=f(R,U,T,S,E[L+14],A,3275163606);S=f(S,R,U,T,E[L+3],z,4107603335);T=f(T,S,R,U,E[L+8],y,1163531501);U=f(U,T,S,R,E[L+13],B,2850285829);R=f(R,U,T,S,E[L+2],A,4243563512);S=f(S,R,U,T,E[L+7],z,1735328473);T=f(T,S,R,U,E[L+12],y,2368359562);U=F(U,T,S,R,E[L+5],o,4294588738);R=F(R,U,T,S,E[L+8],m,2272392833);S=F(S,R,U,T,E[L+11],l,1839030562);T=F(T,S,R,U,E[L+14],j,4259657740);U=F(U,T,S,R,E[L+1],o,2763975236);R=F(R,U,T,S,E[L+4],m,1272893353);S=F(S,R,U,T,E[L+7],l,4139469664);T=F(T,S,R,U,E[L+10],j,3200236656);U=F(U,T,S,R,E[L+13],o,681279174);R=F(R,U,T,S,E[L+0],m,3936430074);S=F(S,R,U,T,E[L+3],l,3572445317);T=F(T,S,R,U,E[L+6],j,76029189);U=F(U,T,S,R,E[L+9],o,3654602809);R=F(R,U,T,S,E[L+12],m,3873151461);S=F(S,R,U,T,E[L+15],l,530742520);T=F(T,S,R,U,E[L+2],j,3299628645);U=t(U,T,S,R,E[L+0],Q,4096336452);R=t(R,U,T,S,E[L+7],P,1126891415);S=t(S,R,U,T,E[L+14],N,2878612391);T=t(T,S,R,U,E[L+5],K,4237533241);U=t(U,T,S,R,E[L+12],Q,1700485571);R=t(R,U,T,S,E[L+3],P,2399980690);S=t(S,R,U,T,E[L+10],N,4293915773);T=t(T,S,R,U,E[L+1],K,2240044497);U=t(U,T,S,R,E[L+8],Q,1873313359);R=t(R,U,T,S,E[L+15],P,4264355552);S=t(S,R,U,T,E[L+6],N,2734768916);T=t(T,S,R,U,E[L+13],K,1309151649);U=t(U,T,S,R,E[L+4],Q,4149444226);R=t(R,U,T,S,E[L+11],P,3174756917);S=t(S,R,U,T,E[L+2],N,718787259);T=t(T,S,R,U,E[L+9],K,3951481745);U=H(U,h);T=H(T,G);S=H(S,v);R=H(R,g)}var i=s(U)+s(T)+s(S)+s(R);return i.toLowerCase()};
	
	
    /**
     *  This method allows the script to check the compatibility of CSS3 styles that may or may not be mainstream.
     *  It simply selects the name of the style, then checks vendor prefixes automatically.
     *
     *  @param      {string} The style to check for support
     *  @returns    {boolean} Is the style supported?
     */
    n4jive.cssCompatibilityChecker = function(pStyle) {
        if ( this.css3Enabled ) { return true; }
        var
            CSSprefix = "Webkit,Moz,O,ms,Khtml".split(","),
            d = document.createElement("detect"),
            test = [],
            p, pty;

        // test prefixed codes
        function TestPrefixes(property) {
            var
                Uprop = property.charAt(0).toUpperCase() + property.substr(1),
                All = (property + ' ' + CSSprefix.join(Uprop + ' ') + Uprop).split(' ');
            for (var n = 0, np = All.length; n < np; n++) {
                if (d.style[All[n]] === "") return true;
            }
            return false;
        }

        return TestPrefixes(pStyle);
    },

	n4jive.opacitySupported = function(){
		var el = document.createElement("div");
		if(typeof el.style.opacity == "string"){
			return true;
		}else{ 
			return false;
		}
	},
	
    /////*****/////*****/////*****/////*****
    /////*****  UPDATE SERVICE
    /////*****/////*****/////*****/////*****
    n4jive.callbacks = [], // array containing the callback information for any widget slaved to update.

    /**
     *  Durring the init phase of the widget, in addition to creating help and loading blocks, a function may be
     *  supplied to it's parent (here) that can be looked up when other widgets have signnaled that they have made
     *  a change.
     */
    n4jive.registerUpdate = function(pCallback) {
        if(typeof(pCallback) == 'function') {
            this.callbacks.push(pCallback);
        }
    },

    /**
     *  Simply itterates through the array of callbacks we have and calls each and every one.
     */
    n4jive.runUpdates = function() {
        if(this.callbacks.length > 0) {
            for (var item in this.callbacks) {
                this.callbacks[item]();
            }
        }
    },
	
    /**
     *  Encodes an ISO-8859-1 string to UTF-8
     *
     *  This is a modified method from the the php.js project which implemented the original.
     *      Project Site: hhttp://phpjs.org
     *      original by: Webtoolkit.info (http://www.webtoolkit.info/)
     *      php.js is copyright 2011 Kevin van Zonneveld.
     *      Version: 3.26
     *      Dual licensed under the MIT and GPL licenses.
     *      http://phpjs.org/pages/license
     *
     *  @param      {string} Data to encode
     *  @returns    {string} Encoded String
     */
    n4jive.utf8_encode = function(argString) {
        if (argString === null || typeof argString === "undefined") {
            return "";
        }
        var string = (argString + ''); // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");
        var utftext = "",
            start, end, stringl = 0;

        start = end = 0;    stringl = string.length;
        for (var n = 0; n < stringl; n++) {
            var c1 = string.charCodeAt(n);
            var enc = null;
             if (c1 < 128) {
                end++;
            } else if (c1 > 127 && c1 < 2048) {
                enc = String.fromCharCode((c1 >> 6) | 192) + String.fromCharCode((c1 & 63) | 128);
            } else {
                enc = String.fromCharCode((c1 >> 12) | 224) + String.fromCharCode(((c1 >> 6) & 63) | 128) + String.fromCharCode((c1 & 63) | 128);
            }
            if (enc !== null) {
                if (end > start) {
                    utftext += string.slice(start, end);
                }
                utftext += enc;
                start = end = n + 1;
            }
        }
        if (end > start) {
            utftext += string.slice(start, stringl);
        }
        return utftext;
    }

    /**
     *  @param      {string} Data to encode
     *  @returns    {string} Encoded String
     */
    n4jive.encode64 = function(pInput) {
        var input = escape(pInput);
        var output = '';
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4 = "";
        var i = 0;
        do {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output +
            this.keyString.charAt(enc1) +
            this.keyString.charAt(enc2) +
            this.keyString.charAt(enc3) +
            this.keyString.charAt(enc4);
            chr1 = chr2 = chr3 = "";
            enc1 = enc2 = enc3 = enc4 = "";
        } while (i < input.length);
        return output;
    }

	n4jive.getOrdinal = function(n){
	   var s=["th","st","nd","rd"],
	       v=n%100;
	   return n+(s[(v-20)%10]||s[v]||s[0]);
	}
	
	n4jive.log = function(m){
		console.log(m)
	}
	
	n4jive.getUserId = function(context){
		return context.nitro.connectionParams.userId;
	}
	
	n4jive.getOption = function(opt, context){
		if(context.options[opt]){
			return context.options[opt];
		}else{
			return false;
		}
	}
	
	/**
	 * n4jive.sidebarTeamLeaders.getSessionKey()
	 * convenience function to return our sessionKey
	 * @return - a nitro session key for the passed-in nitro object
	 */	
	n4jive.getSessionKey = function(context){
		return context.nitro.connectionParams.sessionKey;			
	}
	
	/**
	 * n4jive.sidebarTeamLeaders.getPointCategory()
	 * convenience function to return the passed in point Category
	 * @return - the provided point category || "Points"
	 */	
	n4jive.getPointCategory = function(){
		if(typeof options.pointCategory != 'undefined'){
			return options.pointCategory;
		}
		return "Points"
	}
	

})(jQuery);

if (typeof n4jive.workingFactory == 'undefined'){
	n4jive.workingFactory = function(pTarget) {
        var working = $('<div/>', { "class" : "nitro-widget-loading" });

        var topOffset = (pTarget.height() / 2) - 70;

        working.append(
            $('<div/>', { "class" : "loading-icon" }).css('top', (topOffset < 0 ? 0 : topOffset)).css('margin-left', (pTarget.width() - 50) / 2).append(
                $('<img/>', { "src" : "https://assets.bunchball.net/widgets/jiveTest/images/ajax-loader.gif", "width" : "50", "height" : "50" })
            )
        )

        pTarget.prepend(working);

        return function(){
            working.detach();
        };
    }
}
;
$j(document).ready(function() {
        
    var initAccountLinkBlock = function() {
    
        var existingLinkBlock = $j('#jive-facebook-link').first();
        
        if (existingLinkBlock.length > 0) { return; }

        var profileSidebar =
        	$j('body.j-view-profile-self')
                .find('#jive-profile-photos-block').find('div.j-box-actions').first();
        	
        if (profileSidebar.length == 0) { return; }

        var facebookHtml = function(response) {
            var extUser = (response.extUser == 'true');
            var hasLink = (response.hasLink == 'true');
            var html = "";
            
            html += '<div id="jive-facebook-link" class="j-box jive-widget jive-widget-facebook">';
            html += '<div class="j-box-body jive-widget-body">'
            html += '    <div class="jive-widget-body-empty">';
            html += '        <span class="jive-icon-med jive-icon-facebook"></span>';
            html += '        <span id="fb-account-label">' + response.labelText + '</span>';
            
            if (!extUser) {
                html += '        <p><a id="fb-account-link" href="#' + (hasLink ? 'unlink' : 'link') + '">' + response.urlText + '</a></p>';
            }
            else {
                html += '        <p>&nbsp;</p>';
            }
            
            html += '    </div>';
            html += '</div>';
            html += '</div>';
            html += '<div id="jive-facebook-scripts" style="display:none;"></div>';
            
            return html;
        }
        
        var facebookScripts = function(options) {
            $j('#jive-facebook-scripts').load('/facebook-scripts.jspa', function() {
                // console.log('Facebook scripts loaded');
            });
        }
        
        var facebookScroll = function() {
            if (window.location.hash == "#link") {
                var offset = $j("#jive-facebook-link").offset().top - 10;
                
                $j("html,body").animate({
                    "scrollTop": offset
                });
            }
        }
        
        $j.ajax({
            url: '/__services/v2/rest/facebook/account/hasLink',
            success: function(response) {
                if (response.disabled == 'true') {
                    return;
                } 
                var html = facebookHtml(response);
                $j(profileSidebar).prepend(html);
                facebookScripts(response);
                facebookScroll();
            }
        });
    };
    
    if (window.location.href.indexOf('user-wizard') < 0) {
        initAccountLinkBlock();
    }
    
});

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
jive.namespace('antivirus');

/**
 * @depends path=/plugins/antivirus/resources/script/apps/antivirus/main.js
 */
$j(document).ready(function() {    	
	var antivirus = new jive.antivirus.Main({});
});
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
if(typeof jive=="undefined"){var jive={}}if(typeof jive.nav=="undefined"){jive.nav={}}if(typeof jive.nav.menu=="undefined"){jive.nav.menu={}}if(typeof jive.nav.menu.create=="undefined"){jive.nav.menu.create={}}jive.nav.menu.create.contentTypes=function(G,E){var C=E||new soy.StringBuilder();C.append('<div class="j-pop-desc">',(G.smallView)?'<a href="#" class="toggle j-menu-quick-toplink js-use-large-menu font-color-meta" role="presentation">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("nav.bar.create.use_large_link"),[]))+"</a>":'<a href="#" class="toggle j-menu-quick-toplink js-use-small-menu font-color-meta" role="presentation">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("nav.bar.create.use_small_link"),[]))+"</a>","<h2>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("nav.bar.create.link"),[])),"</h2></div>");var D=G.sections;var F=D.length;for(var B=0;B<F;B++){var A=D[B];if(A.visible){C.append('<strong class="j-menu-quick-sectionlabel font-color-meta-light">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.name),[])),'</strong><ul id="create-list-',soy.$$escapeHtml(B),'" class="j-icon-list js-create-list">');var J=A.items;var I=J.length;for(var K=0;K<I;K++){var H=J[K];if(H.visible){jive.nav.menu.create.contentTypeLinkItem(soy.$$augmentData(H,{smallView:G.smallView}),C)}}C.append("</ul>")}}return E?"":C.toString()};jive.nav.menu.create.contentTypeLinkItem=function(A,C){var B=C||new soy.StringBuilder();if(A.uploadable){B.append("<li>");jive.nav.menu.create.contentTypeLink(soy.$$augmentData(A.uploadLink,{upload:true,smallView:A.smallView}),B);B.append("</li>")}B.append("<li>");jive.nav.menu.create.contentTypeLink(A,B);B.append("</li>");return C?"":B.toString()};jive.nav.menu.create.contentTypeLink=function(A,C){var B=C||new soy.StringBuilder();if(A.iconCss){B.append('<a href="');jive.nav.menu.create.contentTypeHref(soy.$$augmentData(A,{legacy:((A.linkCss).match(new RegExp("js-legacy-create",""))||[]).length>0}),B);B.append('" class="',soy.$$escapeHtml(A.linkCss),'"',(A.urlParams&&A.urlParams.contentType)?' data-content-type="'+soy.$$escapeHtml(A.urlParams.contentType)+'"':"",(A.upload)?' data-upload="true"':"");if(((A.linkCss).match(new RegExp("quick",""))||[]).length>0){B.append(' data-quick-create-url="');jive.nav.menu.create.contentTypeHref(soy.$$augmentData(A,{legacy:true}),B);B.append('"')}B.append('><span class="',soy.$$escapeHtml(A.iconCss)," jive-icon-",(A.iconSize)?soy.$$escapeHtml(A.iconSize):(A.smallView)?"med":"big",'"></span>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.smallView&&A.smallNameKey?A.smallNameKey:A.nameKey),[])),"</a>")}B.append((!A.smallView&&A.descriptionKey)?"<p>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.descriptionKey),[]))+"</p>":"");return C?"":B.toString()};jive.nav.menu.create.contentTypeHref=function(A,C){var B=C||new soy.StringBuilder();B.append((A.legacy)?(A.urlParams)?soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,A.url)+"?"+jive.soy.func.buildParameterString(jQuery.extend({},(function(){var F={};var E=[["sr","cmenu"]];for(var D=0;D<E.length;D+=1){F[E[D][0]]=E[D][1]}return F})(),A.urlParams))):soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,A.url)+"?"+jive.soy.func.buildParameterString((function(){var F={};var E=[["sr","cmenu"]];for(var D=0;D<E.length;D+=1){F[E[D][0]]=E[D][1]}return F})())):"javascript:void(0)");return C?"":B.toString()};jive.nav.menu.create.quick=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="jive-modal jive-modal-quickcreate">');jive.shared.displayutil.a11yBoundary({type:"dialog"},B);B.append('<header class="j-modal-header"><h2 class="js-title">',soy.$$escapeHtml(A.title),'</h2></header><label class="j-508-label" id="close-modal-508">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close.modal"),[])),'</label><a href="#" class="j-modal-close-top close" aria-labelledby="close-modal-508" title="',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close.modal"),[])),'">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close"),[])),'  <span class="j-close-icon j-ui-elem" role="img"></span></a><section class="jive-modal-content">',A.body,"</section>");jive.shared.displayutil.a11yBoundary({type:"dialog",isEnd:true},B);B.append("</div>");return C?"":B.toString()}
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
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.actionqueue=="undefined"){jive.eae.actionqueue={}}jive.eae.actionqueue.actions=function(A,C){var B=C||new soy.StringBuilder();B.append("<head><title>",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("nav.bar.actions.link"),[])),'</title><meta name="nav.active.link" content="jive-nav-link-home" /><meta name="description" content="',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actions.description"),[])),'" /></head><body class="j-body-home j-body-inbox j-body-inbox-actions"><div class="j-layout j-layout-sl clearfix j-contained j-rc5"><div class="j-column-wrap-s"><nav class="j-column j-column-s" role="navigation" aria-label="',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.stream.nav"),[])),'">');jive.welcome.homeSideNav({homeNavHelper:A.homeNavHelper,selectedLinkID:"jive-nav-link-actions"},B);B.append('</nav></div><!-- BEGIN large column --><div class="j-column-wrap-l"><div id="j-dynamic-pane" class="j-column j-column-l">');jive.eae.actionqueue.actionsDynamicPane(A,B);B.append("</div></div></div></body>");return C?"":B.toString()};jive.eae.actionqueue.actionsDynamicPane=function(A,C){var B=C||new soy.StringBuilder();jive.eae.actionqueue.actionsTabs(A,B);B.append('<!-- BEGIN main body --><div id="j-actions-page-content" class="j-stream" role="main" aria-label="',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.header.text.actions"),[])),'">');if(A.actionQueue.currentTab!="jive-tasks"){jive.eae.actionqueue.actionsContent(A,B)}B.append("</div>");jive.shared.soy.resourceInlineJs({code:"$j(function(){require(['jive.ActionQueue.Main'], function(AQMain) {if (jive.ActionQueue && jive.ActionQueue.Controller) {jive.ActionQueue.Controller.init({currentTab: '"+soy.$$escapeHtml(A.actionQueue.currentTab)+"'});}else {jive.ActionQueue.Controller = new AQMain({currentTab: '"+soy.$$escapeHtml(A.actionQueue.currentTab)+"'}); jive.ActionQueue.Controller.attachGlobalEventListeners();}});});"},B);return C?"":B.toString()};jive.eae.actionqueue.actionsTabs=function(A,C){var B=C||new soy.StringBuilder();B.append('<header id="j-actions-page-tabs" class="j-act-header clearfix"><h1 class="header">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.actions"),[])),'</h1><div id="j-aq-filters"><a id="jive-aq-pending" class="filter ',(!A.isArchived)?"j-sub-selected font-color-normal":"",'" data-type="awaiting_action" href="#"><span class="lnk">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("actions.show.pending"),[])),'</span> <span class="count">');jive.eae.actionqueue.aqTabCount({count:A.actionsCount},B);B.append('</span></a><a id="jive-aq-archived" class="filter ',(A.isArchived)?"j-sub-selected font-color-normal":"",'" href="',soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"/actions/archived")),'"><span class="lnk">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("actions.show.archived"),[])),'</span></a><span id="j-tasks-nav" class="j-aq-tasks"><a id="jive-tasks" href="#"><span class="lnk">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("actions.tasks.tab"),[])),'</span> <span class="count">');jive.eae.actionqueue.aqTabCount({count:A.tasksCount},B);B.append("</span></a></span></div></header>");return C?"":B.toString()};jive.eae.actionqueue.aqTabCount=function(A,C){var B=C||new soy.StringBuilder();B.append('<span data-count="',soy.$$escapeHtml(A.count),'" class="j-js-update-indicator" ',(A.count==0)?'style="display:none;"':"",">",(A.count>50)?"(50+)":"("+soy.$$escapeHtml(A.count)+")","</span>");return C?"":B.toString()};jive.eae.actionqueue.actionsContent=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id="j-action-queue" class="j-aq-stream">');jive.eae.actionqueue.actionQueue(A,B);B.append("</div>");return C?"":B.toString()};jive.eae.actionqueue.jsI18nHelper=function(A,C){var B=C||new soy.StringBuilder();B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.key),[])));return C?"":B.toString()};jive.eae.actionqueue.actionQueue=function(A,C){var B=C||new soy.StringBuilder();if(A.actionQueue.actionQueueList&&A.actionQueue.actionQueueList.length>0){jive.eae.actionqueue.actionQueueList(A,B)}else{jive.eae.actionqueue.noActionQueueResults(A,B)}return C?"":B.toString()};jive.eae.actionqueue.actionQueueList=function(A,G){var C=G||new soy.StringBuilder();if(A.actionQueue.actionQueueList){var E=A.actionQueue.actionQueueList;var D=E.length;for(var F=0;F<D;F++){var B=E[F];jive.eae.actionqueue.actionQueueItemView({actionQueueItem:B,renderLocation:"actions"},C)}}C.append((A.actionQueue.hasMore)?"<a class='j-js-load-more j-act-append j-rc6' href='#'><span class=\"j-rc6 j-more-label\">"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.stream.load_more"),[]))+"</span></a>":"");return G?"":C.toString()};jive.eae.actionqueue.noActionQueueResults=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="j-js-aq-noresults j-aq-noresults"><span class="j-empty font-color-meta">',soy.$$escapeHtml(A.archived?jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.no_archived_actions"),[]):jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.no_pending_actions"),[])),"</span></div>");return C?"":B.toString()};jive.eae.actionqueue.actionQueueItemView=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id="article_actionqueue_',soy.$$escapeHtml(A.actionQueueItem.entryID),'" data-creationdate="',soy.$$escapeHtml(A.actionQueueItem.creationDate),'" class="j-aq-entry clearfix">');if(A.actionQueueItem.template){jive.shared.soy.render({templateName:A.actionQueueItem.template,data:(function(){var F={};var E=[["data",A.actionQueueItem.templateData],["creationTime",A.actionQueueItem.creationTime],["renderLocation",A.renderLocation]];for(var D=0;D<E.length;D+=1){F[E[D][0]]=E[D][1]}return F})(),failGracefully:false},B)}B.append("</div>");return C?"":B.toString()};jive.eae.actionqueue.excerptActionQueueItemView=function(B,G){var D=G||new soy.StringBuilder();if(B.actionQueueItem.user){jive.shared.displayutil.avatar(soy.$$augmentData(B.actionQueueItem.user,{size:46}),D)}else{if(B.actionQueueItem.nonUserSource){jive.eae.actionqueue.nonUserSourceImage({source:B.actionQueueItem.nonUserSource,size:"46"},D)}}jive.eae.actionqueue.actionQueueItemInfo(B,D);D.append('<div class="j-aq-actions clearfix">');var A=B.actionQueueItem.actions;var C=A.length;for(var F=0;F<C;F++){var E=A[F];jive.eae.actionqueue.actionQueueItemAction({action:E},D)}D.append("</div>");return G?"":D.toString()};jive.eae.actionqueue.nonUserSourceImage=function(A,C){var B=C||new soy.StringBuilder();B.append('<img class="jive-avatar" src="',jive.soy.func.normalizeUrl(window._jive_base_url,A.source.imgurl),'" width="',soy.$$escapeHtml(A.size),'" alt="" height="',soy.$$escapeHtml(A.size),'"/>');return C?"":B.toString()};jive.eae.actionqueue.actionQueueItemInfo=function(A,C){var B=C||new soy.StringBuilder();if(A.actionQueueItem.user){if(!A.actionQueueItem.user.anonymous){jive.shared.displayutil.userDisplayNameLink(A.actionQueueItem.user,B)}else{jive.shared.displayutil.renderGuestDisplayName({message:""},B)}}B.append(" ",soy.$$escapeHtml(A.actionQueueItem.message),'<a href="',jive.soy.func.normalizeUrl(window._jive_base_url,A.actionQueueItem.jiveObject.jiveObjectURL),'" class="title"><span class="jive-icon-med  ',soy.$$escapeHtml(A.actionQueueItem.jiveObject.jiveObjectCSS),'"></span>',soy.$$escapeHtml(A.actionQueueItem.jiveObject.renderedSubject),"</a>",(A.actionQueueItem.details)?"<div class='j-action-details clearfix'><a href='#' class='j-js-view-action-details'>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.details.more"),[]))+"</a></div>":"");return C?"":B.toString()};jive.eae.actionqueue.actionQueueItemAction=function(A,C){var B=C||new soy.StringBuilder();B.append((A.action.href)?'<a href="'+soy.$$escapeHtml(A.action.href)+'" class="j-btn-global j-action-button">'+soy.$$escapeHtml(A.action.name)+"</a>":'<a href="#" name="'+soy.$$escapeHtml(A.action.code)+'" class="j-btn-global j-action-button">'+soy.$$escapeHtml(A.action.name)+"</a>");return C?"":B.toString()};jive.eae.actionqueue.actionQueueItemActionResult=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="j-action-result">');if(A.data.templateData.template){jive.shared.soy.render({templateName:A.data.templateData.template,data:(function(){var F={};var E=[["data",A.data.templateData]];for(var D=0;D<E.length;D+=1){F[E[D][0]]=E[D][1]}return F})(),failGracefully:false},B)}B.append("</div>");return C?"":B.toString()};jive.eae.actionqueue.actionError=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="j-action-result" style="">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.inbox.error_performing_action"),[])),"</div>");return C?"":B.toString()};jive.eae.actionqueue.actionQueueItemDetails=function(A,C){var B=C||new soy.StringBuilder();B.append(soy.$$escapeHtml(A.actionQueueItem.details));return C?"":B.toString()};jive.eae.actionqueue.guestActions=function(A,C){var B=C||new soy.StringBuilder();B.append('<body class="j-body-inbox j-body-inbox-guest"><header class="j-page-header"><h1>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.header.text.actions"),[])),'</h1></header><div class="j-login-prompt">');jive.guest.page.whyLoginOrRegister({accountCreationEnabled:A.accountCreationEnabled,validationEnabled:A.validationEnabled,reasons:'<div class="j-rc5"><h3>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.action.guest.action"),[]))+'</h3><img src="'+soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"/images/apps/app-actions.png"))+'" class="j-aq-screenshot"/><ul class="j-simple-list"><li>'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.action.guest.tips.actions"),[]))+"</li><li>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.action.guest.tips.notifications"),[]))+"</li><li>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.action.guest.tips.tasks"),[]))+"</li><li>"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.action.guest.tips.everything"),[]))+"</li></ul></div>"},B);B.append("</div></body>");return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.actionqueue=="undefined"){jive.eae.actionqueue={}}if(typeof jive.eae.actionqueue.item=="undefined"){jive.eae.actionqueue.item={}}jive.eae.actionqueue.item.eventInvitationActionRequest=function(A,G){var D=G||new soy.StringBuilder();D.append('<div class="j-aq-av clearfix"><div class="j-actionQ-item-data invite-request clearfix"><div class="j-av">');if(A.data.inviter){jive.shared.displayutil.avatar(soy.$$augmentData(A.data.inviter,{size:"32"}),D)}D.append('</div><h4 class="j-aq-header font-color-meta"><span class="jive-icon-med jive-icon-gear"></span>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.invite.label"),[])),"</h4><p>");if(!A.data.inviter.anonymous){jive.shared.displayutil.userDisplayNameLink(A.data.inviter,D)}else{jive.shared.displayutil.renderGuestDisplayName({message:""},D)}D.append(" ",soy.$$escapeHtml(A.data.inviteText),' <a href="',jive.soy.func.normalizeUrl(window._jive_base_url,A.data.objData.href),'" class="title">');if(A.data.objData.iconElement){jive.shared.displayutil.renderIconElement({icon:A.data.objData.iconElement},D)}else{D.append('<span class="',soy.$$escapeHtml(A.data.objData.iconCSS),'"></span>')}D.append(soy.$$escapeHtml(A.data.objData.displayName),'</a></p><div class="j-aq-actions clearfix">');var C=A.data.actions;var E=C.length;for(var F=0;F<E;F++){var B=C[F];jive.eae.actionqueue.actionQueueItemAction({action:B},D)}D.append("</div></div></div>");return G?"":D.toString()};jive.eae.actionqueue.item.eventInvitationReplyResult=function(A,C){var B=C||new soy.StringBuilder();jive.shared.soy.i18nHelper({i18nKey:soy.$$escapeHtml(A.data.messageKey),arg0:soy.$$escapeHtml(A.data.eventTitle)},B);return C?"":B.toString()}
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
if(typeof jive=="undefined"){var jive={}}if(typeof jive.antivirus=="undefined"){jive.antivirus={}}if(typeof jive.antivirus.eae=="undefined"){jive.antivirus.eae={}}if(typeof jive.antivirus.eae.actionqueue=="undefined"){jive.antivirus.eae.actionqueue={}}if(typeof jive.antivirus.eae.actionqueue.item=="undefined"){jive.antivirus.eae.actionqueue.item={}}jive.antivirus.eae.actionqueue.item.violationFoundNotification=function(A,G){var B=G||new soy.StringBuilder();B.append('\t<div class="j-aq-data j-aq-av antivirus-violation-found clearfix"><span class="jive-icon-big jive-icon-warn"></span><h4 class="j-aq-header font-color-meta">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("antivirus.eae.actionqueue.violation.label"),[])),"</h4><p> ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("antivirus.eae.actionqueue.violation.message"),[A.data.fileName,A.data.violations,new soydata.SanitizedHtml('<strong><a href="'+A.data.scannedObjectData.href+'" class="title"><span class="'+A.data.scannedObjectData.iconCSS+'"></span>'+A.data.scannedObjectData.displayName+"</a></strong>"),new soydata.SanitizedHtml('<a href="'+jive.soy.func.normalizeUrl(window._jive_base_url,"/people/"+encodeURIComponent(A.data.contentAuthor.username))+'" data-username="'+A.data.contentAuthor.username+'" data-avatarId="'+A.data.contentAuthor.avatarID+'" data-userId="'+A.data.contentAuthor.id+'" class="jive-username-link jiveTT-hover-user">'+A.data.contentAuthor.displayName+"</a>")])),' </p></div><div class="j-act-meta font-color-meta-light">',(A.creationTime)?"<strong>"+soy.$$escapeHtml(A.creationTime)+"</strong>":"","</div>");if(A.renderLocation=="actions"){B.append('<div class="j-aq-actions clearfix">');if(A.data.actionable){var D=A.data.actions;var E=D.length;for(var F=0;F<E;F++){var C=D[F];B.append((C.href)?'<a href="'+soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(C.href))+'" class="j-btn-global j-action-button">'+soy.$$escapeHtml(C.name)+"</a>":'<a href="#" name="'+soy.$$escapeHtmlAttribute(C.code)+'" class="j-btn-global j-action-button">'+soy.$$escapeHtml(C.name)+"</a>")}}else{if(A.data.actionTakenKey){B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.actionqueue.action.taken"),[]))," ",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(A.data.actionTakenKey),[])))}}B.append("</div>")}return G?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.nitro=="undefined"){jive.nitro={}}if(typeof jive.nitro.reputationMenu=="undefined"){jive.nitro.reputationMenu={}}jive.nitro.reputationMenu.head=function(A,C){var B=C||new soy.StringBuilder();jive.shared.soy.resourceInlineJs({code:"$j(function(){require(['jive.nitro.reputationMenu.Main'], function(Main) {new Main({reputationCenterUrl: '"+soy.$$escapeHtml(jive.soy.func.normalizeUrl(window._jive_base_url,"/reputation-center"))+"', apiKey: \""+soy.$$escapeHtml(A.apiKey)+'", timeStamp: "'+soy.$$escapeHtml(A.signatureTimestamp)+'", signature: "'+soy.$$escapeHtml(A.signatureValue)+'", server: "'+soy.$$escapeHtml(A.baseUrl)+'", userID: "'+soy.$$escapeHtml(A.userID)+"\", i18n: {pointsText: '"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("nitro.points"),[]))+"', yourStatusText: '"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("nitro.reputation.menu.yourStatusText"),[]))+"', emptyNextLevelText: '"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("nitro.reputation.menu.emptyNextLevelText"),[]))+"', emptyNextMissionText: '"+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("nitro.reputation.menu.emptyNextMissionText"),[]))+"'}});});});"},B);return C?"":B.toString()};jive.nitro.reputationMenu.menuLink=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id="reputation-spacer" style="display: none;"></div><div id="reputation-menu-link" style="display: none;"><a href="#" class="j-globalNavLink reputation-points-loading" id="navReputationCenter" title="',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("nitro.reputation.menu.loading"),[])),'">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("nitro.reputation.menu.loading"),[])),'</a></div><div id="menuReputationCenter" class="j-quick-menu" style="display: none"></div>');return C?"":B.toString()};jive.nitro.reputationMenu.menuContent=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="nitro4x_user_widget clearfix"></div>');return C?"":B.toString()}
;
/**
 * @depends template=jive.nitro.reputationMenu.menuLink
 */
define('jive.nitro.reputationMenu.MenuView', [], function() {
    return jive.AbstractView.extend(function(protect, _super) {
        
        jive.conc.observable(this);
        
        this.init = function(options) {
            this.options = options;
            
            $j('#j-satNav-wrap > li:first').append(jive.nitro.reputationMenu.menuLink());
            
            this.emit('viewReady');
            
        };
        

    });
});

;

/**
 * @depends path=/plugins/gamification/resources/script/apps/reputationMenu/menu.js lazy=true
 * @depends path=/plugins/gamification/resources/script/apps/reputationMenu/views/menu_view.js
 */
define('jive.nitro.reputationMenu.Main', ['jive.nitro.reputationMenu.MenuView'], function(View) {
    return jive.oo.Class.extend(function(protect, _super) {

        this.init = function(options) {
            this.view = new View(options);
            
            this.view.addListener('viewReady', function() {
                require(['jive.nitro.reputationMenu.MenuMain'], function(MenuMain) {
                    new MenuMain($j.extend({}, options, {
                        buttonSelector: '#navReputationCenter', 
                        menuSelector: '#menuReputationCenter'
                    }));
                });
            });
        };


    });
});

;
jive.namespace('nitro');

jive.nitro.Nitro = jive.oo.Class.extend(function(protect, _super) {

    this.init = function(options) {
        this.options = options || {};
        this.methods = [];
        this.dfd = new $j.Deferred();
        
        this.dfd.done(this.setSession);
        
        if (this.options.hasOwnProperty('server')) {
            this.dfd.resolveWith(this, [this.options]);
        } else {
            this.loadSession();
        }
    };
    
    this.execute = function(callback) {
        var promise = new jive.conc.Promise();
        var self = this;
        
        this.dfd.done(function() {
            var methodString = this.generateAllMethodsString();
            
            $j.getJSON(self.serverUrl + escape(methodString), function(res) {
                $j.extend(res, {
                    eachMethod: function(methodName, callback) {
                        self.eachMethod(res, methodName, callback);
                    }
                });
                self.handleNitroResponse(res, promise, callback);
            });
        });
        
        return promise;
    };
    
    this.addMethod = function(name, params) {
        this.methods.push(this.createMethodString(name, params));
        
        return this;
    };
    
    protect.eachMethod = function(res, methodName, callback) {
        $j.each(res.Nitro.Nitro, function(i, method) {
            if (method.method === methodName) {
                callback.call(this, method);
            }
        });
    };
    
    protect.generateAllMethodsString = function() {
        this.methods.unshift(this.createMethodString('user.login', this.loginParameters));
        
        var methodString = '[' + this.methods.join(',') + ']';
        
        this.methods = [];
        
        return methodString;
    };
    
    protect.setSession = function(data) {
        this.serverUrl = (data.server || data.baseUrl) + '?jsCallback=?&method=batch.run&methodFeed=';
        
        this.loginParameters = {
            userId: data.userID,
            apiKey:  data.apiKey,
            ts: data.timeStamp,
            sig: data.signature
        };
    };
    
    protect.loadSession = function() {
        var self = this;
        
        $j.ajax({
            url: jive.rest.url("/nitro/admin/session"),
            success: function(response) {
                self.dfd.resolveWith(self, [response]);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('Error getting session: '+textStatus+'/'+errorThrown);
                self.dfd.rejectWith(self, [textStatus, errorThrown]);
            }
        });
    };
    
    protect.handleNitroResponse = function(res, promise, callback) {
        var nitro = res.Nitro;
        if (typeof nitro.Error != "undefined") {
            promise.emitError(nitro.Error.Code, nitro.Error.Message);
        } else {
            var noErrors = true;
            $j.each(nitro.Nitro, function(i, method) {
                if (typeof method.Error != "undefined") {
                    promise.emitError(method.Error.Code, method.Error.Message);
                    noErrors = false;
                }
            });
            
            if (noErrors) {
                callback.call(this, res, promise);
            }
        }
    };
    
    protect.createMethodString = function(name, params) {
        var result = '"method='+name;
        
        $j.each(params, function(key, value) {
            result += '&'+key+'='+value;
        });
        
        result += '"';
        
        return result;
    };

});

;
jive.namespace('nitro.shared');

jive.nitro.shared.UserService = jive.RestService.extend(function(protect, _super) {
    
    this.init = function(options) {
        _super.init.call(this, options);
        this.options = options;
    };
    
    this.getProfileInfo = function(options) {
        var success = options.success;
        var error = options.error;
        
        delete options.success;
        delete options.error;
        
        $j.ajax({
            url: jive.rest.url("/nitro/users/data"),
            data: options,
            success: success,
            error: error
        });
    };
    
    this.getUserIDs = function(jiveUserIDs) {
        var dfd = new $j.Deferred();
        var self = this;
        
        $j.ajax({
            url: jive.rest.url("/nitro/users/ids"),
            data: {
                userId: jiveUserIDs
            },
            success: function(response) {
                dfd.resolveWith(self, [response]);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('Error getting userIds: '+textStatus+'/'+errorThrown);
                dfd.rejectWith(self, [textStatus, errorThrown]);
            }
        });
        
        return dfd;
    };
    
});

;
/**
 * @depends path=/plugins/gamification/resources/script/jive-nitro.js
 * @depends path=/plugins/gamification/resources/script/apps/shared/models/userService.js
 */
jive.namespace('nitro.acclaim');

jive.nitro.acclaim.AcclaimSource = jive.RestService.extend(function(protect, _super) {
    
    this.init = function(options) {
        _super.init.call(this, options);
        
        this.options = options;
        this.nitro = new jive.nitro.Nitro();
    };
    
    this.getLeaderboard = function() {
        var self = this;
        var result = new jive.conc.Promise();
        
        this.nitro.addMethod("site.getPointsLeaders", {
            pointCategory: 'Points',
            withRank: true,
            withSurroundingUsers: true,
            duration: 'ALLTIME',
            userIds: this.options.currentUserID,
            criteria: 'CREDITS'
        });
        
        this.nitro.execute(function(res, promise) {
            self.handleLeadersResponse(res, promise);
        }).addCallback(function(data) {
            result.emitSuccess(data);
        }).addErrback(function(err, message) {
            result.emitError(err, message);
        });
        
        return result;
    };
    
    protect.handleLeadersResponse = function(res, promise) {
        var self = this;
        var data = {
            users: this.getUsersFrom(res)
        };
        
        $j.each(data.users, function(userId, user) {
            if (userId == self.options.currentUserID) {
                data.currentUser = user;
            }
        });
        
        $j.when(this.addUserDetails(data), this.addUserStatusLevels(data)).done(function() {
            promise.emitSuccess({
                nextLevel: data.nextLevel,
                currentUser: data.currentUser,
                users: Object.values(data.users)
            });
        });
    };
    
    protect.addUserStatusLevels = function(data) {
        var dfd = new $j.Deferred();
        
        this.nitro.addMethod("user.getLevel", {
            userIds: Object.keys(data.users).join(',')
        }).addMethod("user.getNextLevel", {
            userId: this.options.currentUserID
        });
        
        this.nitro.execute(function(res, promise) {
            res.eachMethod("user.getLevel", function(method) {
                $j.each($j.makeArray(method.users.User), function(i, user) {
                    $j.extend(data.users[user.userId], {
                        description: user.SiteLevel.description,
                        iconUrl: user.SiteLevel.iconUrl,
                        levelName: user.SiteLevel.name
                    });
                });
            });
            
            res.eachMethod("user.getNextLevel", function(method) {
                data.nextLevel = method.users.User.SiteLevel;
            });
            
            dfd.resolveWith(this);
        });
        
        return dfd;
    };
    
    protect.addUserDetails = function(data) {
        var userService = new jive.nitro.shared.UserService({});
        var dfd = new $j.Deferred();
        
        userService.getProfileInfo({
            userId: Object.keys(data.users),
            success: function(jiveUsers) {
                $j.each(jiveUsers.Users, function(i, user) {
                    $j.extend(data.users[user.userId], user);
                });
                dfd.resolveWith(this);
            },
            error: function(xhr, status, error) {
                console.log('Error getting user details: '+status+'/'+error);
            }
        });
        
        return dfd;
    };
    
    protect.getUsersFrom = function(res) {
        var users = {};
        
        $j.each(res.Nitro.Nitro, function(i, method) {
            if (method.method === "site.getPointsLeaders") {
                $j.each($j.makeArray(method.leaders.Leader), function(j, obj) {
                    users[obj.userId] = {
                        points: obj.points,
                        rank: obj.rank
                    };
                });
            }
        });
        
        return users;
    };
    
});

;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.eae=="undefined"){jive.eae={}}if(typeof jive.eae.latestAcclaim=="undefined"){jive.eae.latestAcclaim={}}jive.eae.latestAcclaim.extraContent=function(H,G){var C=G||new soy.StringBuilder();if(!H.currentUserPartner){C.append('<div class="j-acclaim-status j-browse-details"><div class="j-act-title clearfix" role="heading">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.acclaim.latest.level.update"),[])),'<a href="#" class="j-status-legend-link js-status-legend-link">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.acclaim.how.to.level"),[])),'</a></div><table class="j-browse-list" cellspacing="0" cellpadding="0"><thead class="j-rc4"><tr><th colspan="2"><strong class="font-color-meta-light">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("browse.heading.person"),[])),'</strong></th><th><strong class="font-color-meta-light">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.status_level"),[])),"</strong></th>",(H.data.showDateJoined)?'<th><strong class="font-color-meta-light">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("search.user.sort.date"),[]))+"</strong></th>":"",'</tr></thead><tbody class="j-browse-details-tbody">');var F=H.data.leaderboard;var E=F.length;for(var B=0;B<E;B++){var D=F[B];C.append('<tr class="j-people-row  ',(D.user.id==H.currentUserID)?"j-current-user":"j-challengers",'"><td class="j-td-avatar">');jive.shared.displayutil.avatar(soy.$$augmentData(D.user,{size:D.user.id==H.currentUserID?32:32,currentUserPartner:H.currentUserPartner}),C);C.append('</td><td class="j-td-user-info">');jive.shared.displayutil.userDisplayNameLink(D.user,C);C.append('</td><td class="j-td-statuslevel ',(D.user.id==H.currentUserID)?"font-color-new":"font-color-meta",'"><span class="j-level"><img src="',soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.normalizeUrl(window._jive_base_url,D.userStatusLevel.imagePath))),'" />',soy.$$escapeHtml(D.userStatusLevel.statusLevelName)," (",soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("stslvl.points"),[D.userStatusLevel.userPointTotal])),")</span>",(D.user.id==H.currentUserID)?'<div class="j-next-level">'+((H.data.pointsToNextLevel>1)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.acclaim.Xpointstonext"),[H.data.pointsToNextLevel])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.acclaim.onepointtonext"),[])))+"</div>":"","</td>",(H.data.showDateJoined)?'<td class="j-td-date '+((D.user.id==H.currentUserID)?"font-color-new":"font-color-meta")+'">'+soy.$$escapeHtml((D.user.creationDate?dateFormat(parseFloat(D.user.creationDate),"mmmm d, yyyy"):""))+"</td>":"","</tr>")}C.append('</tbody></table></div><div class="j-acclaim-legend js-acclaim-legend" style="display:none"><div class="j-legend j-rc4"><h4>',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("eae.acclaim.how.to.level"),[])),'</h4><ul class="j-simple-list">');var K=H.data.statusLevelScenarios;var A=K.length;for(var J=0;J<A;J++){var I=K[J];C.append((I.points>0&&I.enabled)?'<li class="j-point-count">'+((I.i18nKey=="stslvl.scen.eventAttended.text")?"Attend an Event":(I.i18nKey=="stslvl.scen.eventCommented.text")?"Comment on an Event":soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(I.i18nKey),[])))+'<strong class="j-points">'+soy.$$escapeHtml(I.points)+"</strong></li>":"")}C.append("</ul></div></div>")}return G?"":C.toString()}
;
jive.namespace('nitro.acclaim');

/**
 * @depends template=jive.eae.latestAcclaim.extraContent
 */
jive.nitro.acclaim.AcclaimView = jive.AbstractView.extend(function(protect, _super) {
    
    jive.conc.observable(this);
    
    this.init = function(options) {
        this.options = options;
    };
    
    this.generateLeaderboard = function(data) {
        var html = $j(jive.eae.latestAcclaim.extraContent({
            data: this.getTemplateData(data),
            currentUserID: this.options.currentUserID,
            currentUserPartner: this.options.currentUserPartner
        }));
        
        html.find('a.j-status-legend-link').attr('href', jive.app.url({path:'/reputation-center?viewID=missions'})).removeClass('js-status-legend-link');
        
        return html;
    };
    
    protect.getTemplateData = function(data) {
        var leaderboard = [];
        
        data.users.sort(function(a, b) {
            if (a.rank && b.rank) {
                return parseInt(a.rank, 10) - parseInt(b.rank, 10);
            }
            return 0;
        });
        
        $j.each(data.users, function(i, leader) {
            var obj = {
                user: leader,
                userStatusLevel: {
                    statusLevelName: leader.levelName,
                    imagePath: leader.iconUrl,
                    userPointTotal: leader.points
                }
            };
            
            obj.user.id = leader.userId;
            
            leaderboard.push(obj);
        });
        
        var currentPoints = parseInt(data.currentUser.points, 10);
        var nextLevelPoints = parseInt(data.nextLevel.points, 10);
        
        return {
            leaderboard: leaderboard,
            showDateJoined: this.options.showDateJoined,
            pointsToNextLevel: (nextLevelPoints - currentPoints),
            statusLevelScenarios: []
        };
    };
    
});

;
jive.namespace('nitro.acclaim');

/**
 * @depends path=/plugins/gamification/resources/script/apps/acclaim/models/acclaim_source.js
 * @depends path=/plugins/gamification/resources/script/apps/acclaim/views/acclaim_view.js
 */
jive.nitro.acclaim.Main = jive.oo.Class.extend(function(protect, _super) {
    
    this.init = function(options) {
        this.source = new jive.nitro.acclaim.AcclaimSource({
            currentUserID: window._jive_current_user.ID
        });
        this.view = new jive.nitro.acclaim.AcclaimView({
            currentUserID: window._jive_current_user.ID,
            currentUserPartner: window._jive_current_user.partner,
            showDateJoined: true
        });
    };
    
    this.getLeaderboard = function() {
        var promise = new jive.conc.Promise();
        var self = this;
        
        this.source.getLeaderboard().addCallback(function(data) {
            promise.emitSuccess({
                html: self.view.generateLeaderboard(data),
                extraData: {}
            });
        });
        
        return promise;
    };
    
    
});

;
/**
 * @depends path=/plugins/gamification/resources/script/apps/acclaim/main.js
 */
require(['tAMD/hooks'], function(hooks) {
    hooks.on('publish', 'jive.ActivityStream.CommunicationStreamControllerMain', function(id, Module) {
        var extension = Module.extend(function(protect, _super) {
            
            this.init = function(options) {
                _super.init.call(this, options);
                var original = this.listService.getFullContent;
                var main = this;
                
                this.listService.getFullContent = function(objectType, objectID) {
                    if (objectType == 1150305777) {
                        var acclaim = jive.nitro.acclaim.Main();
                        return acclaim.getLeaderboard();
                    }
                    
                    return original.call(main.listService, objectType, objectID);
                };
            };
            
        });
        
        return [id, extension];
    });
});

;
jive.namespace('nitro.challenges');

/**
 * @depends path=/resources/scripts/apps/shared/models/rest_service.js
 * @depends path=/plugins/gamification/resources/script/jive-nitro.js
 * @depends path=/plugins/gamification/resources/script/apps/shared/models/userService.js
 */
jive.nitro.challenges.ChallengesSource = jive.RestService.extend(function(protect, _super) {
    
    jive.conc.observable(this);
    
    this.init = function(options) {
        _super.init.call(this, options);
        this.options = options;
    };
    
    this.loadChallenge = function(challengeName) {
        var self = this;
        var nitro = new jive.nitro.Nitro(this.options);
        
        nitro.addMethod('user.getChallengeProgress', {
            userId: this.options.userID,
            challengeName: challengeName
        });
        
        nitro.addMethod('site.getRecentChallenges', {
            userId: this.options.userID,
            challengeName: challengeName,
            trophiesOnly: true,
            returnCount: 6
        });
        
        return nitro.execute(function(res, promise) {
            self.handleResponse(res, promise);
        });
    };
    
    protect.handleResponse = function(res, promise) {
        var challenge = null;
        var userIDs = [];
        var userService = new jive.nitro.shared.UserService({});
        
        res.eachMethod('user.getChallengeProgress', function(method) {
            if (method.challenges !== true) {
                challenge = method.challenges.Challenge;
            }
        });
        
        res.eachMethod('site.getRecentChallenges', function(method) {
            if (method.challenges !== true) {
                $j.each($j.makeArray(method.challenges.Challenge), function(_, data) {
                    if ($j.inArray(data.userId, userIDs) === -1) {
                        userIDs.push(data.userId);
                    }
                });
            }
        });
        
        if (userIDs.length > 0) {
            userService.getProfileInfo({
                userId: userIDs,
                success: function(data) {
                    promise.emitSuccess({
                        recentCompleters: data.Users,
                        challenge: challenge
                    });
                },
                error: function(error, message) {
                    promise.emitError(error, message);
                }
            });
        } else {
            promise.emitSuccess({
                recentCompleters: [],
                challenge: challenge
            });
        }
        
    };
    
});

;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.soy=="undefined"){jive.soy={}}if(typeof jive.soy.acclaim=="undefined"){jive.soy.acclaim={}}jive.soy.acclaim.renderAcclaimModal=function(A,C){var B=C||new soy.StringBuilder();B.append('<div class="jive-modal j-modal j-acclaim-mini-modal j-people-list-modal" data-you-id="',soy.$$escapeHtml(A.youID),'" role="dialog" tabindex="-1" aria-labelledby="acclaim-header"><header role="header" id="acclaim-header"><h2 ',(A.activityType=="bookmark")?'class="j-modal-bookmark-header"':"",">",(A.activityType=="like")?'<span class="jive-icon-med jive-icon-like"></span>':"",(A.activityType=="bookmark")?'<div class="jive-bookmark-ribbon j-ui-elem"></div>':"");jive.shared.soy.getCountTextByType({count:A.totalCount,type:A.activityType,bidirectionalGraph:A.bidirectionalGraph},B);B.append('</h2></header><label class="j-508-label" id="close-modal-508">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close.modal"),[])),'</label><a href="#" class="j-modal-close-top close" aria-labelledby="close-modal-508" title="',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close.modal"),[])),'">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close"),[])),' <span class="j-close-icon j-ui-elem" role="img"></span></a><section  class="jive-modal-content clearfix">',(!A.guest)?'<nav id="jive-view-picker" class="j-modal-filter"><input type="checkbox" value="1" id="js-friends" name="user-filter"/><label for="js-friends">'+((A.bidirectionalGraph)?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("profile.friends.filter.label"),[])):soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("profile.connections.filter.label"),[])))+"</label>"+((A.activityType=="bookmark")?'<br/><input type="checkbox" value="2" id="js-only-notes" name="user-filter"/><label for="js-only-notes">'+soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("bookmarks.sidebar.filter.notes"),[]))+"</label>":"")+"</nav>":"");jive.soy.acclaim.renderUserList({activityType:A.activityType,users:A.users,currentUserID:A.youID,currentUserPartner:A.youPartner,onlyFriends:false,id:"modal-liked-everyone",classNames:"liked-everyone-list js-everyone-list",show:true},B);jive.soy.acclaim.renderUserList({activityType:A.activityType,users:A.users,currentUserID:A.youID,currentUserPartner:A.youPartner,onlyFriends:true,id:"modal-liked-friends",classNames:"liked-friends-list js-friends-list",show:false},B);if(A.activityType=="bookmark"){jive.soy.acclaim.renderUserNotesList({activityType:A.activityType,users:A.users,currentUserID:A.youID,currentUserPartner:A.youPartner,onlyFriends:false,onlyNotes:true,id:"modal-bookmark-notes",classNames:"j-user-bookmark-notes-list j-js-user-bookmark-notes-list",show:false},B);jive.soy.acclaim.renderUserNotesList({activityType:A.activityType,users:A.users,currentUserID:A.youID,currentUserPartner:A.youPartner,onlyFriends:true,onlyNotes:true,id:"modal-bookmark-friends-notes",classNames:"j-user-bookmark-notes-list j-js-user-bookmark-friends-notes-list",show:false},B)}B.append("</section></div>");return C?"":B.toString()};jive.soy.acclaim.renderUserList=function(A,G){var C=G||new soy.StringBuilder();C.append('<table id="',soy.$$escapeHtml(A.id),'" class="',soy.$$escapeHtml(A.classNames),'"',(!A.show)?' style="display: none;"':"","><tbody>");var F=A.users;var B=F.length;if(B>0){for(var D=0;D<B;D++){var E=F[D];jive.soy.acclaim.displayUserRow({activityType:A.activityType,user:E,currentUserID:A.currentUserID,currentUserPartner:A.currentUserPartner,onlyFriends:A.onlyFriends,onlyNotes:A.onlyNotes},C)}}else{C.append('<tr><td><p class="j-empty font-color-meta-light">',(A.activityType=="bookmark")?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("acclaim.modal.empty.msg.bookmarks"),[])):(A.activityType=="like")?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("acclaim.modal.empty.msg.likes"),[])):(A.activityType=="follow")?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("acclaim.modal.empty.msg.follow"),[])):(A.activityType=="connections")?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("acclaim.modal.empty.msg.connections"),[])):(A.activityType=="membership")?soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("acclaim.modal.empty.msg.membership"),[])):"","</p></td></tr>")}C.append("</tbody></table>");return G?"":C.toString()};jive.soy.acclaim.renderUserNotesList=function(A,G){var D=G||new soy.StringBuilder();D.append('<table id="',soy.$$escapeHtml(A.id),'" class="',soy.$$escapeHtml(A.classNames),'"',(!A.show)?' style="display: none;"':"","><tbody>");var C=A.users;var B=C.length;if(B>0){for(var E=0;E<B;E++){var F=C[E];if(F.prop.bookmarknotes){jive.soy.acclaim.displayUserRow({activityType:A.activityType,user:F,currentUserID:A.currentUserID,currentUserPartner:A.currentUserPartner,onlyFriends:A.onlyFriends,onlyNotes:A.onlyNotes},D)}}}else{D.append('<tr><td><p class="j-empty font-color-meta-light">There are no bookmark notes on this item</p></td></tr>')}D.append("</tbody></table>");return G?"":D.toString()};jive.soy.acclaim.displayYou=function(A,C){var B=C||new soy.StringBuilder();B.append('<a href="');jive.app.url({path:"/people/"+soy.$$escapeHtml(A.username)},B);B.append('" data-userid="',soy.$$escapeHtml(A.ID),'" class="jiveTT-hover-user">',soy.$$escapeHtml(A.i18n.acclaimLikedYou),"</a>");return C?"":B.toString()};jive.soy.acclaim.displayUserRow=function(A,C){var B=C||new soy.StringBuilder();if(!A.onlyFriends||A.onlyFriends&&A.currentUserID!=A.user.id&&A.user.prop.connections.targetUserACurrentFriend){if(A.onlyNotes&&A.user.prop.hasBookmarknotes||!A.onlyNotes){B.append('<tr data-user-id="',soy.$$escapeHtml(A.user.id),'">');if(!A.onlyNotes){B.append('<td class="j-td-avatar ',(A.user.prop.hasBookmarknotes)?"j-td-topalign":"",'">');jive.shared.displayutil.avatar(soy.$$augmentData(A.user,{size:35,currentUserPartner:A.currentUserPartner}),B);B.append("</td>")}B.append('<td class="j-td-name">');if(A.currentUserID==A.user.id){jive.shared.displayutil.userDisplayNameLink(soy.$$augmentData(A.user,{displayNameOverride:jive.i18n.i18nText(jive.i18n.getMsg("global.you"),[])}),B)}else{jive.shared.displayutil.userDisplayNameLink(A.user,B)}B.append((!A.onlyNotes)?"<!-- TODO: show truncated version of the notes -->"+((A.activityType=="bookmark"&&A.user.prop.hasBookmarknotes&&A.user.prop.bookmarknotes)?'<p class="j-user-bookmark-notes">'+A.user.prop.bookmarknotes+"</p>":""):"<!-- TODO: show full, non-plain text / non-escaped version of the full notes -->"+((A.activityType=="bookmark"&&A.user.prop.hasBookmarknotes&&A.user.prop.bookmarknotes)?'<p class="j-user-bookmark-notes">'+A.user.prop.bookmarknotes+"</p>":""),"</td>");if(A.activityType!="bookmark"){if(!A.onlyNotes){B.append('<td class="j-td-follow">');if(A.user.prop.connections&&A.user.prop.connections.followLinkShown){if(A.user.id!=A.currentUserID&&A.user.visible){jive.people.profile.followLink(soy.$$augmentData(A.user.prop.connections,{targetUserID:A.user.id,targetUserDisplayName:A.user.displayName,hideFollowingCount:true,renderLocation:"bookmarked-user-list",streamsAssociatedCount:A.user.prop.connections.streamsAssociatedBean?A.user.prop.connections.streamsAssociatedBean.streamIDs.length:0}),B)}}B.append("</td>")}}B.append("</tr>")}}return C?"":B.toString()};jive.soy.acclaim.privateBookmarkNotification=function(A,C){var B=C||new soy.StringBuilder();B.append('<tr class="j-private-bookmark-notification j-js-private-bookmark-notification"><td colspan="3">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("acclaim.modal.privateBookmarks"),[])),"</td></tr>");return C?"":B.toString()}
;
if(typeof jive=="undefined"){var jive={}}if(typeof jive.nitro=="undefined"){jive.nitro={}}if(typeof jive.nitro.challenges=="undefined"){jive.nitro.challenges={}}jive.nitro.challenges.head=function(A,C){var B=C||new soy.StringBuilder();jive.shared.soy.resourceInlineJs({code:'$j(document).ready(function() {new jive.nitro.challenges.Main({apiKey: "'+soy.$$escapeHtml(A.apiKey)+'", timeStamp: "'+soy.$$escapeHtml(A.signatureTimestamp)+'", signature: "'+soy.$$escapeHtml(A.signatureValue)+'", server: "'+soy.$$escapeHtml(A.baseUrl)+'", userID: "'+soy.$$escapeHtml(A.userID)+'", currentJiveUserID: "'+soy.$$escapeHtml(A.currentJiveUserID)+'"});});'},B);return C?"":B.toString()};jive.nitro.challenges.emptyRecentCompleters=function(A,C){var B=C||new soy.StringBuilder();B.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("nitro.challenge.recentlyCompletedBy.empty"),[])));return C?"":B.toString()};jive.nitro.challenges.challengeIcon=function(A,C){var B=C||new soy.StringBuilder();B.append('<a href="#" class="nitro-challenge-link" data-challenge-name="',soy.$$escapeUri(A.name),'"><img src="',soy.$$escapeHtml(A.fullUrl),'" alt="',soy.$$escapeHtml(A.name),'" title="',soy.$$escapeHtml(A.name),'" /></a>');return C?"":B.toString()};jive.nitro.challenges.challengeModal=function(A,C){var B=C||new soy.StringBuilder();B.append('<div id="g-challenge-mini-modal" class="jive-modal j-modal j-people-list-modal"><header><h2>',soy.$$escapeHtml(A.challenge.name),'</h2></header><a href="#" class="j-modal-close-top close">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.close"),[])),'  <span class="j-close-icon j-ui-elem"></span></a><section  class="jive-modal-content clearfix"><div class="g-challenge-wrapper">',(A.challenge.fullUrl)?'<img class="g-challenge-image" src="'+soy.$$escapeHtml(A.challenge.fullUrl)+'"/>':'<img class="g-challenge-image" src="'+soy.$$escapeHtml(jive.soy.func.resourceUrl(window._jive_base_url,"/6.0.2.0/","","/plugins/gamification/resources/images/missing_trophy.png"))+'"/>',(A.challenge.description)?'<span class="g-challenge-description font-color-meta-light">'+A.challenge.description+"</span>":"",'</div><div class="g-recently-completed">',soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("nitro.challenge.recentlyCompletedBy"),[])),soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg("global.colon"),[])),"</div>");jive.soy.acclaim.renderUserList({activityType:"challenges",users:A.recentCompleters,currentUserID:A.currentUserID,onlyFriends:false,id:"modal-challenges-everyone",classNames:"challenges-everyone-list js-everyone-list",show:true},B);B.append("</section></div>");return C?"":B.toString()}
;
jive.namespace('nitro.challenges');

/**
 * @depends template=jive.nitro.challenges.challengeModal
 * @depends template=jive.nitro.challenges.emptyRecentCompleters
 */
jive.nitro.challenges.ChallengesView = jive.AbstractView.extend(function(protect, _super) {
    
    jive.conc.observable(this);
    
    this.init = function(options) {
        this.options = options;
        
        var self = this;
        
        $j("a.nitro-challenge-link").live('click', function(e) {
            e.preventDefault();
            
            var challengeName = $j(this).data('challenge-name');
            self.showChallenge(challengeName);
        });
    };
    
    protect.showChallenge = function(challengeName) {
        var self = this;
        
        this.emitP('showChallenge', challengeName).addCallback(function(data) {
            $j.each(data.recentCompleters, function(_, user) {
                $j.extend(user, {
                    id: user.jiveUserID,
                    prop: {
                        connections: {}
                    },
                    hideTooltip: true
                });
            });
            
            data.recentCompleters = $j.grep(data.recentCompleters, function(user) {
                return user.enabled;
            });
            
            data.currentUserID = self.options.currentJiveUserID;
            
            var content = $j(jive.nitro.challenges.challengeModal(data));
            
            var empty = content.find("#modal-challenges-everyone p.j-empty");
            if (empty.length > 0) {
                empty.append(jive.nitro.challenges.emptyRecentCompleters());
                
                content.find(".g-recently-completed").remove();
            }
            
            content.lightbox_me({
                destroyOnClose: true,
                centered: true
            });
        });
    };
    
});

;
jive.namespace('nitro.challenges');

/**
 * @depends path=/plugins/gamification/resources/script/apps/challenges/models/challenges_source.js
 * @depends path=/plugins/gamification/resources/script/apps/challenges/views/challenges_view.js
 */
jive.nitro.challenges.Main = jive.oo.Class.extend(function(protect, _super) {

    this.init = function(options) {
        this.options = options;
        
        this.view = new jive.nitro.challenges.ChallengesView(options);
        this.source = new jive.nitro.challenges.ChallengesSource(options);
        
        var main = this;
        
        this.view.addListener('showChallenge', function(challengeName, promise) {
            main.source.loadChallenge(challengeName).addCallback(function(data) {
                promise.emitSuccess(data);
            }).addErrback(function(error, status) {
                promise.emitError(error, status);
            });
        });
    };
    
});

;
