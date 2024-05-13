// -----------------------------------------------------------------------
// SPDX-FileCopyrightText: 2024 Siemens AG
//
// SPDX-License-Identifier: MIT
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.
//  -----------------------------------------------------------------------
"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[6155],{2976:(e,t,a)=>{a.d(t,{a:()=>r,b:()=>i,g:()=>o});const r=e=>e?"true":"false",o=e=>{if(!e)return"Unknown";if((e=>{if(!e)return!1;let t;try{t=new URL(e)}catch(e){return!1}return"http:"===t.protocol||"https:"===t.protocol})(e))return"Unknown";if((t=e)&&"string"==typeof t&&t.startsWith("data:image/svg+xml"))return"Unknown";var t;const a=e.replace("-filled","").split("-").map((e=>{const t=e.trim(),a=t.replace(/\d+/g,"");return 0===a.length?t:a})).map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ");return 0===a.length?"Unknown":a},i=(e,t=[])=>{const a={};return n.forEach((r=>{e.hasAttribute(r)&&(null===e.getAttribute(r)||t.includes(r)||(a[r]=e.getAttribute(r),e.removeAttribute(r)))})),a},n=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"]},6155:(e,t,a)=>{a.r(t),a.d(t,{ix_slider:()=>s});var r=a(6969),o=a(2976),i=a(1828);function n(e,t,a){return t<e?e:t>a?a:t}const s=class{constructor(e){(0,r.r)(this,e),this.valueChange=(0,r.c)(this,"valueChange",7),this.step=void 0,this.min=0,this.max=100,this.value=0,this.marker=void 0,this.trace=!1,this.traceReference=0,this.disabled=!1,this.error=void 0,this.rangeInput=0,this.rangeMin=0,this.rangeMax=100,this.rangeTraceReference=0,this.showTooltip=!1}get tooltip(){return this.hostElement.shadowRoot.querySelector("ix-tooltip")}get pseudoThumb(){return this.hostElement.shadowRoot.querySelector(".thumb")}get slider(){return this.hostElement.shadowRoot.getElementById("slider")}onShowTooltipChange(){this.showTooltip?this.tooltip.showTooltip(this.pseudoThumb):this.tooltip.hideTooltip()}componentWillLoad(){this.a11yAttributes=(0,o.b)(this.hostElement,["role","aria-valuemin","aria-valuemax","aria-valuenow"]),this.updateRangeVariables()}updateRangeVariables(){this.rangeInput=n(this.min,this.value,this.max),this.rangeTraceReference=n(this.min,this.traceReference,this.max),this.rangeMin=Math.min(this.min,this.max),this.rangeMax=Math.max(this.min,this.max)}onInput(e){e.stopPropagation();const t=parseInt(this.slider.value);isNaN(t)||(this.rangeInput=t,this.emitInputEvent())}emitInputEvent(){this.valueChange.emit(this.rangeInput)}isMarkerActive(e){const t=Math.min(this.traceReference,this.rangeInput),a=Math.max(this.traceReference,this.rangeInput);return e>=t&&e<=a}onPointerUp(){this.showTooltip=!1}render(){const e=this.rangeMax-this.rangeMin;let t=(this.rangeTraceReference-this.rangeMin)/e,a=(this.rangeInput-this.rangeMin)/e,o=t,i=a;return a-t<=0&&(o=a,i=t),(0,r.h)(r.H,{key:"fc1ccd48aeefe6a53f7299db447b5c5e6fb6b13d",class:{disabled:this.disabled,error:!!this.error},onPointerDown:()=>setTimeout((()=>this.showTooltip=!0))},(0,r.h)("div",{key:"4e3d3b0d5e1b2a2882ce0073336e4cd13ac1a4b8",class:"slider"},(0,r.h)("div",{key:"f8457c6d8efad8d172abe49f9037cb71f9ba226f",class:"track"},(0,r.h)("div",{key:"cf141d91936a74657f8788f5f7c688e37ebf7a16",class:"thumb",style:{left:`calc(${a} * 100% - 8px)`}}),(0,r.h)("div",{key:"b54ae34bda82b7f0277ae361c5139845830dc85d",class:"ticks"},this.marker?this.marker.map((t=>{if(t>this.max||t<this.min)return;let a=(t-this.rangeMin)/e;return(0,r.h)("div",{class:{tick:!0,"tick-active":this.isMarkerActive(t)&&this.trace},style:{"--tick-value":`${a}`}})})):null)),(0,r.h)("input",Object.assign({key:"219884ecfc35a76f0722782af2607c64b19a57aa",id:"slider",type:"range",list:this.marker?"markers":void 0,step:this.step,min:this.min,max:this.max,value:this.rangeInput,tabindex:this.disabled?-1:0,onInput:e=>this.onInput(e),style:{"--value":`${a}`,"--trace-reference":`${t}`,"--trace-start":`${o}`,"--trace-end":`${i}`},class:{trace:this.trace&&t!==a},onFocus:()=>{this.showTooltip=!0},onBlur:()=>{this.showTooltip=!1},role:"slider","aria-valuenow":this.rangeInput,"aria-valuemin":this.min,"aria-valuemax":this.max},this.a11yAttributes)),(0,r.h)("ix-tooltip",{key:"387dc09d28b3c45f08470ba651c659e8c528a44d",class:{"hide-tooltip":!this.showTooltip},animationFrame:!0},this.rangeInput)),(0,r.h)("div",{key:"f8fdb048411a622870b4b0698c7124f7e175dedf",class:"label"},(0,r.h)("div",{key:"2bbb6c7418953b907b1ef604a8d775c1e69d6626",class:"label-start"},(0,r.h)("slot",{key:"ce4a5aedbfafe7b5b71d47421bae0ab385548920",name:"label-start"})),(0,r.h)("div",{key:"98b40f2b68164592307f7f9817c913dffcb08139",class:"label-end"},(0,r.h)("slot",{key:"bcd3497745bf949da88cd373ecf8cd3f74488ffe",name:"label-end"}))),this.error?(0,r.h)("ix-typography",{class:"label-error",color:"alarm"},this.error):null)}get hostElement(){return(0,r.g)(this)}static get watchers(){return{showTooltip:["onShowTooltipChange"],value:["updateRangeVariables"],max:["updateRangeVariables"],min:["updateRangeVariables"],traceReference:["updateRangeVariables"]}}};(function(e,t,a,r){var o,i=arguments.length,n=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,a,n):o(t,a))||n);i>3&&n&&Object.defineProperty(t,a,n)})([(0,i.O)("pointerup",(e=>e.showTooltip))],s.prototype,"onPointerUp",null),s.style=':host{display:flex;flex-direction:column;min-height:2rem;--thumb-size:1rem;--value:0;--trace-start:0;--trace-end:0;--trace-reference:0;--trace-reference-color:var(--theme-color-8);--trace-color:var(--theme-color-dynamic);--tick-color:var(--theme-color-7);--tick-color--active:var(--theme-color-dynamic);--track-color:var(--theme-color-component-4);}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host input[type=range]{position:absolute;top:50%;transform:translateY(-50%);left:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;cursor:pointer;width:100%;height:1rem;margin:0}:host input[type=range].trace::before{content:"";position:absolute;display:block;z-index:-1;width:calc(7px + 100% * var(--trace-end) - 16px * var(--trace-end) - (7px + 100% * var(--trace-start) - 16px * var(--trace-start)));left:calc(7px + 100% * var(--trace-start) - 16px * var(--trace-start));height:4px;background-color:var(--trace-color);top:50%;transform:translateY(-50%)}:host input[type=range].trace::after{content:"";position:absolute;display:block;width:2px;height:16px;background-color:var(--trace-reference-color);top:50%;transform:translateY(-50%);left:calc(7px + 100% * var(--trace-reference) - 16px * var(--trace-reference))}:host input[type=range]::-webkit-slider-runnable-track{background:transparent;height:0.25rem}:host input[type=range]::-moz-range-track{background:transparent;height:0.25rem}:host input[type=range i]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;margin-top:-6px}:host input[type=range i]::-moz-range-thumb{border:none;border-radius:0}:host input[type=range]::-webkit-slider-thumb{border-radius:100px;background-color:var(--theme-color-dynamic);height:var(--thumb-size);width:var(--thumb-size);-webkit-transition:all var(--theme-default-time) ease-in-out;transition:all var(--theme-default-time) ease-in-out;z-index:10}:host input[type=range]::-moz-range-thumb{border-radius:100px;background-color:var(--theme-color-dynamic);height:var(--thumb-size);width:var(--thumb-size);-moz-transition:all var(--theme-default-time) ease-in-out;transition:all var(--theme-default-time) ease-in-out;z-index:10}:host input[type=range]:hover::-webkit-slider-thumb{transform:scale(1.2);background-color:var(--theme-color-dynamic)}:host input[type=range]:hover::-moz-range-thumb{transform:scale(1.2);background-color:var(--theme-color-dynamic)}:host input[type=range]:active::-webkit-slider-thumb{transform:scale(1.2);background-color:var(--theme-color-dynamic)}:host input[type=range]:active::-moz-range-thumb{transform:scale(1.2);background-color:var(--theme-color-dynamic)}:host input[type=range]:focus{outline:none}:host input[type=range]:focus-visible::-webkit-slider-thumb{outline:1px solid var(--theme-color-focus-bdr);outline-offset:0.125rem}:host input[type=range]:focus-visible::-moz-range-thumb{outline:1px solid var(--theme-color-focus-bdr);outline-offset:0.125rem}:host .ticks{display:flex;position:relative;top:50%;transform:translateY(-50%)}:host .ticks .tick{display:block;position:absolute;width:8px;height:8px;background-color:var(--tick-color);border-radius:100px;top:50%;transform:translateY(-50%);left:calc(var(--tick-value) * 100% - 4px)}:host .ticks .tick.tick-active{background-color:var(--tick-color--active)}:host .slider{position:relative;display:block;width:100%;height:1.5rem}:host .track{position:absolute;background-color:var(--track-color);height:4px;width:calc(100% - 1rem);margin-left:0.5rem;top:50%;transform:translateY(-50%);left:0px}:host .thumb{display:block;position:absolute;background-color:transparent;height:1rem;width:1rem;border-radius:100px;left:0px;top:50%;transform:translateY(-50%)}:host .hide-tooltip{display:none}:host .label{display:flex;position:relative;align-items:center;justify-content:space-between;width:100%;margin-top:0.5rem;min-height:0px}:host .label-start{margin-left:0.5rem}:host .label-end{margin-right:0.5rem}:host .label-error{margin-left:0.5rem}:host(.error){--trace-color:var(--theme-color-alarm-40);--tick-color--active:var(--theme-color-alarm)}:host(.error) input[type=range]::-webkit-slider-thumb{background-color:var(--theme-color-alarm)}:host(.error) input[type=range]::-moz-range-thumb{background-color:var(--theme-color-alarm)}:host(.disabled){pointer-events:none;--track-color:var(--theme-color-component-3);--trace-color:var(--theme-color-3);--tick-color:var(--theme-color-7);--tick-color--active:var(--theme-color-7)}:host(.disabled) input[type=range]::-webkit-slider-thumb{background-color:var(--theme-color-7)}:host(.disabled) input[type=range]::-moz-range-thumb{background-color:var(--theme-color-7)}'},1828:(e,t,a)=>{a.d(t,{O:()=>i});var r=a(6969);const o={target:"window",defaultEnabled:!0};function i(e,t){return(a,i)=>{const{componentWillLoad:n,componentWillRender:s,disconnectedCallback:l}=a;t&&(a.componentWillRender=function(){var e;return null===(e=(0,r.g)(this)[`__ix__${i}`])||void 0===e||e.enable(t(this)),s&&s.call(this)}),a.componentWillLoad=function(){const t=function(e,t={}){const a=Object.assign(Object.assign({},o),t);let r;const i=e=>{r(e)},n={on:e=>{r=e},isEnabled:a.defaultEnabled,enable:t=>{n.isEnabled=t,t?addEventListener(e,i):removeEventListener(e,i)},destroy:()=>{n.enable(!1)}};return n.enable(a.defaultEnabled),n}(e),a=(0,r.g)(this),s=this[i];return a[`__ix__${i}`]=t,t.on(s.bind(this)),n&&n.call(this)},a.disconnectedCallback=function(){var e;const t=(0,r.g)(this);return t&&t[`__ix__${i}`]&&(null===(e=t[`__ix__${i}`])||void 0===e||e.destroy(),t[`__ix__${i}`]=null),l&&l.call(this)}}}}}]);