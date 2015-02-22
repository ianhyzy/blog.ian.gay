if(typeof sevenSummits == "undefined" || !sevenSummits){
  sevenSummits = {};
}

sevenSummits.rotator = (function(){   
  
  /**
   * @class NavItem
   * @description contains navigation element
   **/
  function NavItem(item, id){
    this.item = item || null;
    this.id = id || "-1";
  } // end NavItem class
  
  /**
   * @class Nav
   * @description contains a set of NavItems
   **/
  function Nav(navItems){
    this.navItems = navItems || new Array();  
  } // end Nav class
  
  /**
   * @class RotateItem
   * @description contains an item to be rotated
   */
  function RotateItem(item, id, direction, rotateSlides){
    this.item = item || null;
    this.id = id || "-1";
    this.direction = direction || "left"; 
    this.rotateSlides = rotateSlides || new Array();
  } // end RotateItem class
  
  /**
   * @class RotateSlide
   * @description contains a slide to be slide in inside the
   * RotateItem 
   */
  function RotateSlide(slide, id, width, start, end, altOffset, speed, delay, ease){
    this.slide = slide || null;
    this.id = id || "-1";
    this.width = width || "100px";    
    this.start = start || "left";
    this.end = end || "0px";
    this.altOffset = altOffset || "0px";    
    this.speed = speed || "1000";
    this.delay = delay || "0";
    this.ease = ease || "";
  } // end RotateSlide class
  
  /**
   * @class Rotator
   * @description contains a set of RotateItems as well
   * as the config object for the rotator.
   */
  function Rotator(rotateItems, config){
    this.rotateItems = rotateItems || new Array();
    this.rotateItemsLength = rotateItems.length;
    this.config = config || {};
    this.nextPos = (rotateItems.length - 1);
    this.prevPos = (rotateItems.length - 2);    
    this.timer;     
    this.nav = new Nav(new Array());
    this.slidingOutEl = null;
    this.slidingInEl = null;
  } // end Rotate class  
  
  /**
   * @function Rotator.init
   */
  Rotator.prototype.init = function(){        
    this.setPause();
    this.initNav();
    this.doRotate();
  } // end Rotator.init  
  
  /**
   * @function Rotator.doRotate
   * @description rotate the rotator
   */
  Rotator.prototype.doRotate = function(nextPos){    
    // stop the interval
    this.pause();
    
    // stop any current rotation 
    //this.clearCurrentState(); 
               
	// increment the counter, if there 
    // is a value in nextPos use that if
    // not just increment the nextPos variable
    if(nextPos != undefined) { 
		if (nextPos == "prev" ) {
			this.setPositions(this.prevPos);
		}
		else if(nextPos == "next"){
			this.setPositions(this.nextPos + 1);
		}
		else{
      		this.setPositions(nextPos); 
		}
	}
    else {   
      this.setPositions(this.nextPos + 1);   
	}  
    
    // get the new items to rotate 
    var prevItemToHide = this.rotateItems[this.prevPos];
    var nextItemToRotate = this.rotateItems[this.nextPos]; 
    
    // stop any current rotation 
    this.clearCurrentState(nextItemToRotate.direction);            
    
    // do the rotate       
    this.slideOut(prevItemToHide, nextItemToRotate.direction);
    this.slideIn(nextItemToRotate, nextItemToRotate.direction);       
    
    // reset the interval 
    this.play();      
  } // end Rotator.doRotate
  
  /**
   * @function Rotator.slideOut
   * @description slide rotate item out
   */
  Rotator.prototype.slideOut = function(el, direction){  
    var self = this;
    this.slidingOutEl = el; // set the slideout element      
    
    if(direction == "left" || direction == "right"){
      // animate the rotateItem
      jQuery(el.item).stop(true, false).animate({
        left:  (direction == "left") ? this.config.rotator.containerWidth :("-" + this.config.rotator.containerWidth)
      }, this.config.rotator.animateOutSpeed, this.config.rotator.rotatorEase, function(){
        jQuery(el.item).hide(); // hide once its completed      
      });      
    } else if(direction == "top" || direction == "bottom"){      
      // animate the rotateItem
      jQuery(el.item).animate({
        top:  (direction == "top") ? this.config.rotator.containerHeight : ("-" + this.config.rotator.containerHeight)
      }, this.config.rotator.animateOutSpeed, this.config.rotator.rotatorEase, function(){
        jQuery(el.item).hide(); // hide once its completed 
	  });
      }else if(direction == "fade"){   
		   jQuery(el.item).fadeOut(this.config.rotator.animateOutSpeed, this.config.rotator.rotatorEase); // hide once its completed     
	}
         
  } // end Rotator.slideout
  
  /**
   * @function Rotator.slideIn
   * @description slide rotate item in
   */
  Rotator.prototype.slideIn = function(el, direction){ 
    var self = this;
    this.slidingInEl = el; // set the slidein element
    this.prepareSlides(el);    
    
    // add active class to element and nav
    jQuery(el.item).addClass(this.config.rotator.slideActiveClass + " " + (this.config.rotator.slideActiveClass + "-" + jQuery(el.item).data("item")));   
    this.addNavClass(el);    
    
    if(direction == "left" || direction == "right"){      
     // set the rotate item to the left of the frame and display it
      jQuery(el.item).css("left", (direction == "left") ? ("-" + this.config.rotator.containerWidth) : this.config.rotator.containerWidth);
      jQuery(el.item).css("top", "0px");

      jQuery(el.item).show();       
      // animate in the rotateItem
      jQuery(el.item).animate({
        left: "0px"
      }, this.config.rotator.animateOutSpeed, this.config.rotator.rotatorEase, function(){
        self.attachNavClick();      
      });           
    } else if(direction == "top" || direction == "bottom"){          
      // set the rotate item to the left of the frame and display it
      jQuery(el.item).css("left", "0px");
      jQuery(el.item).css("top", (direction == "top") ? ("-" + this.config.rotator.containerHeight) : this.config.rotator.containerHeight);
      jQuery(el.item).show();       
      // animate in the rotateItem
      jQuery(el.item).animate({
        top: "0px"
      }, this.config.rotator.animateOutSpeed, this.config.rotator.rotatorEase, function(){
        self.attachNavClick();      
      });      
    } else if(direction == "fade"){   
		   jQuery(el.item).fadeIn(this.config.rotator.animateOutSpeed, this.config.rotator.rotatorEase, function(){
		   		self.attachNavClick(); 
		   }); // hide once its completed     	       
	}
    
    // slide in the rotateSlides
    this.slideInSlides(el);    
  } // end Rotator.slideIn
  
  /**
   * @function Rotator.prepareSlides
   * @description get the rotateSlides positions to start
   */
  Rotator.prototype.prepareSlides = function(el){ 
    var self = this;
    jQuery(el.rotateSlides).each(function(){
      jQuery(this.slide).stop(true, true);
      jQuery(this.slide).css("opacity", 0);  
      if(this.start == "left"){
        jQuery(this.slide).css("left", ("-" + this.width)).css("top", this.altOffset);  
      } else if(this.start == "right"){
        jQuery(this.slide).css("left", self.config.rotator.containerWidth).css("top", this.altOffset); 
      }           
    });       
  } // end prepareSlides
  
  /**
   * @function slideInSlides
   * @description animate in the rotateSlide items
   */
  Rotator.prototype.slideInSlides = function(el){ 
    jQuery(el.rotateSlides).each(function(){
      var self = this;
      setTimeout(function(){

        if(self.start == "left"){
          jQuery(self.slide).animate({
            left: self.end,
            opacity: 1
          }, self.speed, self.ease);
        } else if(self.start == "right"){
          jQuery(self.slide).animate({
            left: self.end,
            opacity: 1
          }, self.speed, self.ease)          
        }        
      }, this.delay);         
    });        
  } // end Rotator.slideInSlides   
  
  /**
   * @function Rotator.clearCurrentState
   * @description reset the active items of the rotator
   */
  Rotator.prototype.clearCurrentState = function(direction){
    var self = this;
    
    // determine if the rotator is active
    if(this.slidingInEl && this.slidingOutEl){
      
      // stop the animate and remove the rotator classes
      jQuery(this.slidingInEl.item).stop(true, true).removeClass(this.config.rotator.slideActiveClass + " " + (this.config.rotator.slideActiveClass + "-" + jQuery(this.slidingInEl.item).data("item")));      
      jQuery(this.slidingOutEl.item).stop(true, true).removeClass(this.config.rotator.slideActiveClass + " " + (this.config.rotator.slideActiveClass + "-" + jQuery(this.slidingOutEl.item).data("item")));   
      this.slideOut(this.slidingInEl, direction);
      
      // remove the nav classes
      jQuery(this.nav.navItems).each(function(){
        jQuery(this.item).removeClass(self.config.nav.navActiveClass + " " + self.config.nav.navActiveClass + "-" + jQuery(this.item).data("item"));
      });    
    
    } // end if
  } // end Rotator.clearCurrentState  
  
  /**
   * @function Rotator.play
   * @description start the rotator interval 
   */
  Rotator.prototype.play = function(){ 
    var self = this;    
    this.timer = setInterval(function(){self.doRotate();}, this.config.rotator.rotateSpeed);  
  } // end Rotator.play
  
  /**
   * @function Rotator.setPause
   * @description mouse enter/leave rotator events
   */
  Rotator.prototype.setPause = function(){     
    var self = this;
    jQuery(this.rotateItems).each(function(){      
      jQuery(this.item).mouseenter(function(){self.pause()}); 
      jQuery(this.item).mouseleave(function(){self.play()});
    });    
  } // end Rotator.setPause  
  
  /**
   * @function Rotator.pause
   * @description pause the rotator interval 
   */
  Rotator.prototype.pause = function(){
    clearInterval(this.timer);    
  } // end Rotator.pause  
  
  /**
   * @function Rotator.setPositions
   * @description set the next and previous positions of the rotator
   */
  Rotator.prototype.setPositions = function(pos){
    if(!isNaN(pos) && pos >= 0 && pos <= (this.rotateItemsLength)){
      (pos == this.rotateItemsLength) ? this.nextPos = 0 : this.nextPos = pos;    
      (this.nextPos == 0) ? this.prevPos = (this.rotateItemsLength - 1) : this.prevPos = (this.nextPos - 1); 
    }         
  } // end Rotator.setPositions
  
  /**
   * @function Rotator.initNav
   * @description create and write to the page the navigation
   */
  Rotator.prototype.initNav = function(){   
    var self = this;
    
    // get the rotateItem and create the navigation based on that
    var outputNav = "";    
    jQuery(this.rotateItems).each(function(){
      var navTitle = jQuery(this.item).data("title");    
      outputNav += "<a class=\"navItem-" + this.id + "\" href=\"javascript:void(0)\" data-item=\"" + this.id + "\">" + navTitle + "</a>";
    });      
    
    // write the nav to the page and set the click events
    jQuery(this.config.nav.navContainerHandle).html(outputNav);     
    this.attachNavClick();
    
    // create NavItem objects based off the nav 
    var navItems = new Array();   
    jQuery(this.config.nav.navContainerHandle + " a").each(function(){
      var itemId = jQuery(this).data("item");
      var navItem = new NavItem(this, itemId);
      navItems.push(navItem);
    });
    
    // create a Nav object and store to the Rotator object
    var nav = new Nav(navItems);
    this.nav = nav;  
	
	// create Prev and Next buttons
	var navPrev = '<div id="slide_prev" data-item="prev"></div>';
	var navNext = '<div id="slide_next" data-item="+1"></div>';
	jQuery(navNext+navPrev).insertAfter(this.config.nav.navContainerHandle);
	jQuery("#slide_prev").unbind("click").click(function(){
      self.doRotate("prev");          
    });
	jQuery("#slide_next").unbind("click").click(function(){
      self.doRotate("next");          
    });	 
  } // end Rotator.initNav

  /**
   * @function Rotator.attachNavClick
   * @description attach click events to the navigation
   */
  Rotator.prototype.attachNavClick = function(){
    var self = this;
    jQuery(this.config.nav.navContainerHandle + " a").unbind("click").click(function(){
      self.navClicked(this);           
    });
  } // end Rotator.attachNavClick
  
  /**
   * @function Rotator.addNavClass
   * @description add active class to the active navigation item
   */
  Rotator.prototype.addNavClass = function(rotatorItem) {
    var self = this;
    var itemId = rotatorItem.id;
    // add the nav classes
    jQuery(this.nav.navItems).each(function(){
      if(this.id == itemId)
        jQuery(this.item).addClass(self.config.nav.navActiveClass + " " + self.config.nav.navActiveClass + "-" + jQuery(this.item).data("item"));
    });    
  } // end Rotator.addNavClass
  
  /**
   * @function Rotator.navClicked
   * @description navigation clicked event
   */
  Rotator.prototype.navClicked = function(navElClicked){      
    if(!jQuery(navElClicked).hasClass(this.config.nav.navActiveClass)){
      var self = this;
      this.pause(); // pause the rotator interval
      
      // get the item attribute of the navigation item clicked
      // iterate through the navItem object to determine which was clicked
      // and doRotate on that item      
      var itemClickedId = jQuery(navElClicked).data("item");    
      jQuery(this.nav.navItems).each(function(index){
        jQuery(this.item).unbind("click");
        if(this.id == itemClickedId){           
          self.doRotate(itemClickedId - 1);
        }      
      });      
    }    
  } // end Rotator.navClicked     
    
  return {       
    
    init : function(config){         
      // get all the rotator items
      var rotateItems = new Array();
      jQuery(config.rotator.containerHandle + " " + config.rotator.rotateItemHandle).each(function(){
        var itemId = jQuery(this).data("item").id;
        var itemDirection = jQuery(this).data("item").direction;
        var slides = new Array();
        jQuery(this).children(config.rotator.rotateSlideItemHandle).each(function(){        
          var id = jQuery(this).data("slide").id;          
          var width = jQuery(this).data("slide").width;          
          var start = jQuery(this).data("slide").direction.start;
          var end = jQuery(this).data("slide").direction.end;
          var altOffset = jQuery(this).data("slide").direction.altOffset;          
          var speed = jQuery(this).data("slide").speed;         
          var delay = jQuery(this).data("slide").delay; 
          var ease = jQuery(this).data("slide").ease; 
          slide = new RotateSlide(this, id,width,start,end,altOffset,speed,delay,ease);
          slides.push(slide);         
        });        
        rotateItem = new RotateItem(this, itemId, itemDirection, slides);
        rotateItems.push(rotateItem);
      });      
   
      rotator = new Rotator(rotateItems, config);
      rotator.init();      
    }   
    
  }; // end return
  
})(); // end sevenSummits.hideShowWidget