"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("classnames"),n=require("akar-icons");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=o(e),r=o(t);function a(e){var t=e.onChange,o=e.onClick;function r(e){return function(){return t(e)}}return i.default.createElement("div",{className:"osg-input-spinner",onClick:o,"aria-hidden":!0},i.default.createElement("div",{role:"button",className:"osg-input-spinner-button",tabIndex:-1,onClick:r(1)},i.default.createElement("div",{className:"osg-input-spinner-icon"},i.default.createElement(n.TriangleUp,null))),i.default.createElement("div",{role:"button",className:"osg-input-spinner-button",tabIndex:-1,onClick:r(-1)},i.default.createElement("div",{className:"osg-input-spinner-icon"},i.default.createElement(n.TriangleDown,null))))}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".osg-input-label-box{margin-bottom:.25rem}.osg-input-label-box.osg-input-label-box--hidden{position:absolute!important;top:0;clip:rect(1px,1px,1px,1px)!important;overflow:hidden!important;height:1px!important;width:1px!important;padding:0!important;border:0!important}.osg-input-label-box .osg-input-label{font-size:.875rem}.osg-input-box{position:relative;box-sizing:border-box;display:flex;line-height:24px;letter-spacing:normal}.osg-input-box .osg-input{position:relative;font-size:1rem;z-index:20;border-radius:4px;outline:none;caret-color:#202223;color:#202223;padding:.3125rem .75rem;text-transform:none;letter-spacing:normal;display:block;flex:1 1;width:100%;min-width:0;min-height:2.25rem;line-height:1.5rem;margin:0;background:none;border:.0625rem solid transparent;border-image:initial}.osg-input-box .osg-input::-webkit-input-placeholder{color:#9c9798}.osg-input-box .osg-input::placeholder{color:#9c9798}.osg-input-box .osg-input.osg-input--multiline{overflow:auto;padding-left:.75rem;padding-right:.75rem;resize:none}.osg-input-box .osg-input.osg-input--disabled,.osg-input-box .osg-input:disabled{background:none;color:#8c9196;opacity:1}.osg-input-box .osg-input.osg-input--disabled+.osg-input-backdrop,.osg-input-box .osg-input:disabled+.osg-input-backdrop{background-color:#fafbfb;border-color:#d2d5d8}.osg-input-box .osg-input[type=number]{-webkit-appearance:textfield;appearance:textfield}.osg-input-box .osg-input[type=number]::-webkit-inner-spin-button,.osg-input-box .osg-input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}.osg-input-box .osg-input:-webkit-autofill{border-radius:4px}.osg-input-box .osg-input-backdrop{position:relative;position:absolute;z-index:10;top:0;right:0;bottom:0;left:0;background-color:#fff;border:.0625rem solid #c9cccf;border-top-color:#aeb4b9;border-radius:4px;pointer-events:none}.osg-input-spinner{z-index:20;margin:3px;color:#202223;display:flex;align-self:stretch;flex-direction:column;width:1.375rem;cursor:pointer}.osg-input-spinner .osg-input-spinner-button{background:#e4e5e7;border-radius:2px;display:flex;flex:1 1 0%;justify-content:center;align-items:center;-webkit-appearance:none;appearance:none;border:none}.osg-input-spinner .osg-input-spinner-button:focus{outline:none}.osg-input-spinner .osg-input-spinner-button:active{background:#c9ccd0}.osg-input-spinner .osg-input-spinner-button:first-child{border-top-right-radius:2px;margin-bottom:.15625rem}.osg-input-spinner .osg-input-spinner-button:last-child{border-bottom-right-radius:.15625rem}.osg-input-spinner .osg-input-spinner-button:not(:first-child){margin-top:0}.osg-input-spinner .osg-input-spinner-button .osg-input-spinner-icon{width:.5rem;height:.5rem}.osg-input-spinner .osg-input-spinner-button .osg-input-spinner-icon svg{position:relative;display:block;width:100%;max-width:100%;max-height:100%;fill:#5c5f62;stroke:#5c5f62}"),exports.Input=function(t){var n,o,s=t.autoComplete,p=t.doesAutoFocus,l=t.id,u=t.inputMode,d=t.isDisabled,c=t.label,g=t.hasHiddenLabel,b=t.max,m=t.maxLength,f=t.min,x=t.minLength,h=t.multiline,v=t.name,y=t.onChange,k=t.pattern,w=t.placeholder,C=t.isReadOnly,E=t.role,N=t.hasSpellCheck,z=t.step,S=t.type,L=t.value,T=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,i,r=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(o=r.next()).done;)a.push(o.value)}catch(e){i={error:e}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(i)throw i.error}}return a}(e.useState("number"==typeof h?h:1),2),M=T[0],j=T[1],q=e.useRef(null),D="string"==typeof L?L:"",F=r.default("osg-input",((n={})["osg-input--multiline"]=h,n["osg-input--disabled"]=d,n)),I=r.default("osg-input-label-box",((o={})["osg-input-label-box--hidden"]=g,o)),O={autoComplete:s,autoFocus:p,className:F,disabled:d,id:l,inputMode:u,max:b,maxLength:m,min:f,minLength:x,name:v,onChange:function(e){if(y&&y(e),h){var t=e.target.rows;e.target.rows="number"==typeof h?h:1;var n=Math.floor(e.target.scrollHeight/24);n===t&&(e.target.rows=n),j(n)}},pattern:k,placeholder:w,ref:q,role:E,rows:h&&M,readOnly:C,spellCheck:N,step:z,type:S,value:D},A=e.createElement(h?"textarea":"input",O),B="number"!==S||0===z||d||C?null:i.default.createElement(a,{onChange:function(e){return function(e){q.current&&(1===e?q.current.stepUp():q.current.stepDown())}(e)}});return i.default.createElement("div",null,i.default.createElement("div",{className:I},i.default.createElement("label",{className:"osg-input-label",htmlFor:l},c)),i.default.createElement("div",{className:"osg-input-box"},A,B,i.default.createElement("div",{className:"osg-input-backdrop"})))};