Alpine.data("accordion",(function(n,c,o){return{expandedAccordions:[],id:function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"accordion-".concat(c,"-").concat(n).concat(o)},toggle:function(n){this.expanded(n)?this.expandedAccordions=this.expandedAccordions.filter((function(c){return c!==n})):this.expandedAccordions.push(n)},expanded:function(n){return this.expandedAccordions.includes(n)},isHover:function(c,o){n.querySelector("#"+c).classList.toggle("accordion__item--hover-within",o)}}}));