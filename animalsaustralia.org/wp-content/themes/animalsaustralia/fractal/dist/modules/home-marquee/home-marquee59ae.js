(()=>{var i=function(){function i(i){var t=i.getBoundingClientRect();return t.right-t.left}function t(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,e=t.children&&t.children[0]||null;if(!e)throw"No child node found";e.style.position="relative",this.position=0,this.speed=n,this.box_width=i(t),this.inner_element_width=i(e),this.box=t,this.inner_element=e.cloneNode(!0),h.call(this)}function n(){this.box_width=i(this.box),this.inner_element_width=i(this.box.children[0])}function e(){return Math.ceil(this.box_width/this.inner_element_width)+1}function h(){var i,t=e.call(this);if(t>this.box.children.length)for(i=this.box.children.length;i<t;i++)this.box.appendChild(this.inner_element.cloneNode(!0));else if(t<this.box.children.length)for(i=t;i<this.box.children.length;i++)this.box.removeChild(this.box.lastChild)}function o(i){var t=this;n.call(this),h.call(this),Array.prototype.forEach.call(this.box.children,(function(i){i.style.left=-t.position+"px"})),this.position+=this.speed*i/1e3,this.position>=this.inner_element_width&&(this.position=this.position%this.inner_element_width)}return t.prototype={start:function(){this._running=!0;var i=this,t=null;window.requestAnimationFrame((function n(){if(i._running){var e=Date.now(),h=null===t?0:e-t;o.call(i,h),t=e,window.requestAnimationFrame(n)}}))},stop:function(){this._running=!1}},t}();Alpine.data("homeMarquee",(function(){return{init:function(){this.initMarquee(),this.initEnterView()},inView:function(i){var t=i.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)},initEnterView:function(){var i=this,t=this.$refs.message.querySelectorAll(".highlight");t.length&&setInterval((function(){t.forEach((function(t){t.classList.toggle("highlight--active",i.inView(t))}))}),1500)},initMarquee:function(){new i(this.$refs.message,100).start()}}}))})();