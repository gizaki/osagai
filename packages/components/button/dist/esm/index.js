import o from"react";import t from"classnames";function n(n){var e,r=n.children,i=n.icon,s=n.iconPlacement,d=void 0===s?"left":s,a=n.isDisabled,b=n.isFullWidth,u=n.onClick,c=n.type,g=void 0===c?"button":c,l=n.variant,m=void 0===l?"outlined":l,f=t("osg-button",((e={})["osg-button--"+m]=m,e["osg-button--full-width"]=b,e["osg-button--"+m+"--disabled"]=a,e["osg-button--icon-placement--"+d]=i&&d,e));return o.createElement("button",{type:g,className:f,disabled:a,onClick:u},i&&i,r)}!function(o,t){void 0===t&&(t={});var n=t.insertAt;if(o&&"undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&e.firstChild?e.insertBefore(r,e.firstChild):e.appendChild(r),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(document.createTextNode(o))}}(".osg-button{position:relative;font-family:inherit;padding:0 1rem;font-size:1rem;letter-spacing:.05rem;height:2.25rem;cursor:pointer;border-radius:4px;outline:none;word-break:break-word;white-space:nowrap;display:inline-flex;align-items:center;justify-content:center;min-height:2.25rem;min-width:2.25rem;border:none;text-decoration:none}.osg-button.osg-button--outlined{background-color:transparent;border:.0625rem solid #babfc3;color:#202223}.osg-button.osg-button--outlined:active{background-color:#f1f2f3;box-shadow:0 1px 0 rgba(0,0,0,.05)}.osg-button.osg-button--outlined.osg-button--outlined--disabled,.osg-button.osg-button--outlined:disabled{cursor:default;pointer-events:none;transition:none;box-shadow:none;border-color:#d2d5d8;background-color:#fafbfb;color:#8c9196}.osg-button.osg-button--contained{background-color:#b28662;color:#fff}.osg-button.osg-button--contained:hover{background-color:#966c4a}.osg-button.osg-button--contained:active{background-color:#745439;box-shadow:0 1px 0 rgba(0,0,0,.05),inset 0 -1px 0 rgba(0,0,0,.2)}.osg-button.osg-button--contained.osg-button--contained--disabled,.osg-button.osg-button--contained:disabled{cursor:default;pointer-events:none;transition:none;box-shadow:none;background-color:#f1f1f1;color:#8c9196}.osg-button.osg-button--text{background-color:transparent;padding:0 .5rem;color:#202223}.osg-button.osg-button--text:hover{background-color:#f6f6f7}.osg-button.osg-button--text:active{background-color:#d9d9dd;box-shadow:0 1px 0 rgba(0,0,0,.05)}.osg-button.osg-button--text.osg-button--text--disabled,.osg-button.osg-button--text:disabled{cursor:default;pointer-events:none;transition:none;box-shadow:none;color:#8c9196}.osg-button.osg-button--text.osg-button--has-icon{padding:0 .5rem}.osg-button.osg-button--icon-placement--left{padding:0 1rem 0 .75rem;flex-direction:row}.osg-button.osg-button--icon-placement--left svg{width:1rem;height:1rem;margin-right:.5rem}.osg-button.osg-button--icon-placement--right{padding:0 .75rem 0 1rem;flex-direction:row-reverse}.osg-button.osg-button--icon-placement--right svg{width:1rem;height:1rem;margin-left:.5rem}.osg-button.osg-button--full-width{width:100%}");export{n as Button};
