Alpine.data("whatWereDoingParent",(function(){return{showing:0,init:function(){var t=this;window.addEventListener("hashchange",(function(){t.setInitialState()}),!1),setTimeout((function(){t.setInitialState()}),100)},setInitialState:function(){var t=window.location.hash;if(t){var i="".concat(t,"-trigger"),n=this.$root.querySelector(i);if(n){var e=parseInt(n.getAttribute("data-index"),10);"number"==typeof e&&!isNaN(e)&&this.setShowing(e)}this.$nextTick((function(){window.scrollTo(0,0)}))}},setShowing:function(t){this.showing=t},isShowing:function(t){return t===this.showing}}}));