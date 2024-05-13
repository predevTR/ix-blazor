// -----------------------------------------------------------------------
// SPDX-FileCopyrightText: 2024 Siemens AG
//
// SPDX-License-Identifier: MIT
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.
//  -----------------------------------------------------------------------
"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[6112],{9798:(e,t,i)=>{i.d(t,{m:()=>s});const o={sm:"(max-width: 48em)",md:"(min-width: 48.0625em) and (max-width: 80em)",lg:"(min-width: 80.0625em)"},s=e=>{if("undefined"!=typeof window&&window.matchMedia){const t=o[e];return window.matchMedia(t).matches}return!1}},6112:(e,t,i)=>{i.r(t),i.d(t,{ix_pane:()=>r});var o=i(6969),s=i(8137),n=i(5272),a=i(7767),h=i(9798);const r=class{constructor(e){(0,o.r)(this,e),this.expandedChanged=(0,o.c)(this,"expandedChanged",7),this.variantChanged=(0,o.c)(this,"variantChanged",7),this.borderlessChanged=(0,o.c)(this,"borderlessChanged",7),this.hideOnCollapseChanged=(0,o.c)(this,"hideOnCollapseChanged",7),this.slotChanged=(0,o.c)(this,"slotChanged",7),this.validPositions=["top","left","bottom","right"],this.collapsedPane="40px",this.collapsedPaneMobile="48px",this.animations=new Map,this.animationCounter=0,this.heading=void 0,this.variant="inline",this.hideOnCollapse=!1,this.size="240px",this.borderless=!1,this.expanded=!1,this.composition="top",this.icon=void 0,this.ignoreLayoutSettings=!1,this.isMobile=!1,this.expandIcon="",this.showContent=!1,this.minimizeIcon="",this.floating=!1,this.parentWidthPx=0,this.parentHeightPx=0}get currentSlot(){return this.hostElement.getAttribute("slot")}get isBottomTopPane(){return"bottom"===this.composition||"top"===this.composition}get isLeftRightPane(){return"left"===this.composition||"right"===this.composition}get isMobileTop(){return"top"===this.composition||"left"===this.composition}componentWillLoad(){this.setIcons(),this.floating="floating"===this.variant,this.expanded&&this.onParentSizeChange(),this.isMobile=(0,h.m)("sm"),a.a.onChange.on((()=>{this.isMobile=(0,h.m)("sm")})),this.setPosition(this.currentSlot),this.mutationObserver=new MutationObserver((e=>{e.forEach((e=>{if("attributes"===e.type&&"slot"===e.attributeName){const t=this.currentSlot,i=e.oldValue;t!==i&&(this.slotChanged.emit({slot:i,newSlot:t}),this.setPosition(t))}}))})),this.mutationObserver.observe(this.hostElement,{attributes:!0,attributeOldValue:!0});const e=this.hostElement.parentElement;this.resizeObserver=new ResizeObserver((e=>{this.parentWidthPx=e[0].borderBoxSize[0].inlineSize,this.parentHeightPx=e[0].borderBoxSize[0].blockSize})),e&&this.resizeObserver.observe(e)}disconnectedCallback(){var e,t;null===(e=this.mutationObserver)||void 0===e||e.disconnect(),null===(t=this.resizeObserver)||void 0===t||t.disconnect()}setPosition(e){this.validPositions.includes(e)&&(this.composition=e)}getExpandPaneSize(){let e;if(this.isBottomTopPane)if(this.size.includes("px")){const t=Math.round(this.parentHeightPx/2),i=Number(this.size.replace("px",""));e=t&&t<i?`${t}px`:`${i}px`}else e="50%"===this.size?`${Math.round(this.parentHeightPx/2)}px`:`${Math.round(this.parentHeightPx/3)}px`;else if(this.size.includes("px")){const t=Math.round(this.parentWidthPx/2),i=Number(this.size.replace("px",""));e=t&&t<i?`${t}px`:`${i}px`}else e="50%"===this.size?`${Math.round(this.parentWidthPx/2)}px`:`${Math.round(this.parentWidthPx/3)}px`;return e}setIcons(){const{expandIcon:e,minimizeIcon:t}=this.getIconNames();this.expandIcon=e,this.minimizeIcon=t}getIconNames(){let e="",t="";switch(this.composition){case"left":e=this.isMobile?"double-chevron-up":"double-chevron-left",t=this.isMobile?"double-chevron-down":"double-chevron-right";break;case"right":e=this.isMobile?"double-chevron-down":"double-chevron-right",t=this.isMobile?"double-chevron-up":"double-chevron-left";break;case"bottom":e="double-chevron-down",t="double-chevron-up";break;case"top":e="double-chevron-up",t="double-chevron-down"}return{expandIcon:e,minimizeIcon:t}}getKey(){return(this.animationCounter++).toString()}animateVerticalFadeIn(e){let t=this.getKey(),i=(0,s.a)({targets:this.hostElement,duration:n.A.mediumTime,width:e,easing:"easeInOutSine",delay:0,begin:()=>{this.expanded?this.animateVerticalPadding("8px"):(this.showContent=!1,this.animateVerticalPadding("0px"))},complete:()=>{this.expanded&&(this.showContent=!0),this.animations.delete(t)}});this.animations.set(t,i)}animateHorizontalFadeIn(e){let t=this.getKey(),i=(0,s.a)({targets:this.hostElement,duration:n.A.mediumTime,height:e,easing:"easeInOutSine",delay:0,begin:()=>{this.expanded?this.isMobile||this.animateHorizontalPadding("8px"):(this.showContent=!1,this.isMobile||this.animateHorizontalPadding("0px"))},complete:()=>{this.expanded&&(this.showContent=!0),this.animations.delete(t)}});this.animations.set(t,i)}removePadding(){(0,s.a)({targets:this.hostElement.shadowRoot.querySelector("#title-div"),duration:0,paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0,delay:0})}animateHorizontalPadding(e,t=n.A.mediumTime){let i=this.getKey(),o=(0,s.a)({targets:this.hostElement.shadowRoot.querySelector("#title-div"),duration:t,paddingTop:e,paddingBottom:e,easing:"easeInOutSine",delay:0,complete:()=>{this.animations.delete(i)}});this.animations.set(i,o)}animateVerticalPadding(e,t=n.A.mediumTime){let i=this.getKey(),o=(0,s.a)({targets:this.hostElement.shadowRoot.querySelector("#title-div"),duration:t,paddingLeft:e,paddingRight:e,easing:"easeInOutSine",delay:0,complete:()=>{this.animations.delete(i)}});this.animations.set(i,o)}clearAnimations(){this.animations.forEach((e=>e.pause())),this.animations.clear(),this.animationCounter=0}onMobileChange(){this.setIcons(),this.hostElement.style.removeProperty("width"),this.hostElement.style.removeProperty("height"),this.hostElement.style.removeProperty("min-height"),this.onParentSizeChange()}onPositionChange(){this.setIcons(),this.hostElement.style.removeProperty("width"),this.hostElement.style.removeProperty("height"),this.onParentSizeChange()}onHideOnCollapseChange(e){this.onParentSizeChange(),this.hideOnCollapseChanged.emit({slot:this.currentSlot,hideOnCollapse:e})}onVariantChange(e){this.floating="floating"===e,this.variantChanged.emit({slot:this.currentSlot,variant:e})}onBorderlessChange(e){this.borderlessChanged.emit({slot:this.currentSlot,borderless:e})}onExpandedChange(){this.onSizeChange(),this.expandedChanged.emit({slot:this.currentSlot,expanded:this.expanded})}onParentSizeChange(){if(this.clearAnimations(),this.removePadding(),this.expanded){if(this.isMobile)this.hostElement.style.height="100%";else{const e=this.getExpandPaneSize();this.isBottomTopPane?(this.hostElement.style.height=e,this.animateHorizontalPadding("8px",0)):(this.hostElement.style.width=e,this.animateVerticalPadding("8px",0))}this.showContent=!0}else this.showContent=!1,this.isMobile?this.hostElement.style.height=this.hideOnCollapse?"0":this.collapsedPaneMobile:this.isBottomTopPane?this.hostElement.style.height=this.hideOnCollapse?"0":this.collapsedPane:this.hostElement.style.width=this.hideOnCollapse?"0":this.collapsedPane}onSizeChange(){if(this.expanded)if(this.isMobile)this.hostElement.style.minHeight=this.hideOnCollapse?"0":this.collapsedPaneMobile,this.animateHorizontalFadeIn("100%");else{const e=this.getExpandPaneSize();this.isBottomTopPane?(this.hostElement.style.height=this.hideOnCollapse?"0":this.collapsedPane,this.animateHorizontalFadeIn(e)):(this.hostElement.style.width=this.hideOnCollapse?"0":this.collapsedPane,this.animateVerticalFadeIn(e))}else this.showContent=!1,this.isMobile?this.hostElement.style.height=this.collapsedPaneMobile:this.isBottomTopPane?this.animateHorizontalFadeIn(this.collapsedPane):this.animateVerticalFadeIn(this.collapsedPane)}render(){return(0,o.h)(o.H,{key:"1704a13dbb106afcd4f84ce82b9511bf3ef3de20",class:{"inline-color":!this.floating,"mobile-overlay":this.expanded&&this.isMobile,"top-expanded":this.expanded&&this.isMobileTop&&this.isMobile,"bottom-expanded":this.expanded&&!this.isMobileTop&&this.isMobile,"top-bottom-pane":this.isBottomTopPane&&!this.isMobile,"left-right-pane":this.isLeftRightPane&&!this.isMobile,[`${this.composition}-pane-border`]:!this.borderless&&!this.isMobile&&!this.floating,"nav-left-border":!this.borderless&&!this.isMobile&&"right"!==this.composition&&this.floating,"mobile-border-top":!this.borderless&&this.isMobileTop&&this.isMobile&&!this.expanded&&!this.floating,"mobile-border-bottom":!this.borderless&&!this.isMobileTop&&this.isMobile&&!this.expanded&&!this.floating,"box-shadow":this.floating,"aria-expanded":this.expanded,"not-visible":this.hideOnCollapse&&!this.expanded}},(0,o.h)("aside",{key:"936922a6c519bf2fbf7f5584fbb01e50c82c9422",class:{"top-bottom-pane":this.isBottomTopPane&&!this.isMobile,"left-right-pane":this.isLeftRightPane&&!this.isMobile,"mobile-pane":this.isMobile,expanded:this.expanded}},(0,o.h)("div",{key:"5064e26b9c5b3770c6c5e4d37c9fc7cc0e166821",id:"title-div",class:{title:!this.isMobile&&!this.hideOnCollapse&&!this.showContent,"title-finished":!this.isMobile&&!this.hideOnCollapse&&this.showContent,"title-expanded":!this.isMobile&&!this.hideOnCollapse&&this.expanded,"title-hide-on-collapse":!this.isMobile&&this.hideOnCollapse,"title-mobile":this.isMobile,"header-gap":!this.isMobile&&!this.hideOnCollapse}},(0,o.h)("ix-icon-button",{key:"7ccba907c951d00bada385fc264d251e1adb402b",class:"title-icon",size:"24",icon:this.expanded?this.isMobile||this.hideOnCollapse?"close":this.expandIcon:this.minimizeIcon,ghost:!0,onClick:()=>{this.expanded=!this.expanded},"aria-controls":this.composition+"ToggleButton"}),(0,o.h)("span",{key:"5b4406bf16ddd92d8888d49c4a18b1d857ea8f61",class:{"title-text":!0,rotate:!this.expanded&&!this.isMobile&&this.isLeftRightPane}},this.icon?(0,o.h)("ix-icon",{size:"24",name:this.icon}):null,(0,o.h)("div",{key:"daefc0b1860d28ce81e52eeb884eec679416a54f",class:"title-text-overflow"},(0,o.h)("ix-typography",{key:"8a4deef3b02fbef4b918f98dd8d12fac4f29ee29",format:"h4"},this.heading)))),(0,o.h)("div",{key:"7188486819256d46e21b298f898661e91fce44de",class:"side-pane-content",hidden:!this.showContent},(0,o.h)("slot",{key:"45eb450896e2b6ec2833913a52094cc4cd3a1a41"}))))}get hostElement(){return(0,o.g)(this)}static get watchers(){return{isMobile:["onMobileChange"],composition:["onPositionChange"],hideOnCollapse:["onHideOnCollapseChange"],variant:["onVariantChange"],borderless:["onBorderlessChange"],expanded:["onExpandedChange"],parentHeightPx:["onParentSizeChange"],parentWidthPx:["onParentSizeChange"],size:["onSizeChange"]}}};r.style=":host{background-color:var(--theme-color-2);display:flex;position:relative;overflow:hidden;box-sizing:border-box}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host aside{width:100%;height:100%}:host .title-text{display:flex;align-items:center;gap:var(--theme-space-1);overflow:hidden}:host .title-text .title-text-overflow{width:100%;height:100%;display:contents}:host .title-text .title-text-overflow *{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .header-gap{gap:var(--theme-space-1)}:host .top-bottom-pane{display:flex;flex-direction:column;flex-grow:1}:host .top-bottom-pane .title{display:flex;flex-direction:row;align-items:center;margin:var(--theme-space--1) var(--theme-space-2) var(--theme-space--1) var(--theme-space-2)}:host .top-bottom-pane .title-finished{padding:0 !important;margin:var(--theme-space-2) var(--theme-space-2) var(--theme-space-2) var(--theme-space-2)}:host .top-bottom-pane .title-expanded{display:flex;flex-direction:row}:host .top-bottom-pane .title-hide-on-collapse{display:flex;flex-direction:row-reverse;justify-content:space-between;padding:0 !important;margin:var(--theme-space-2) var(--theme-space-2) var(--theme-space-2) var(--theme-space-2)}:host .left-right-pane{display:flex;flex-grow:1}:host .left-right-pane .title{display:flex;flex-direction:column;align-items:center;margin:var(--theme-space-2) var(--theme-space--1) var(--theme-space-2) var(--theme-space--1)}:host .left-right-pane .title .title-text{flex-direction:row-reverse;justify-content:start;flex-direction:row}:host .left-right-pane .title .rotate{writing-mode:vertical-lr;text-orientation:mixed;transform:rotate(180deg);flex-direction:row-reverse}:host .left-right-pane .title-finished{padding:0 !important;margin:var(--theme-space-2) var(--theme-space-2) var(--theme-space-2) var(--theme-space-2)}:host .left-right-pane .title-expanded{display:flex;flex-direction:row}:host .left-right-pane .title-hide-on-collapse{display:flex;flex-direction:row-reverse;justify-content:space-between;padding:0 !important;margin:var(--theme-space-2) var(--theme-space-2) var(--theme-space-2) var(--theme-space-2)}:host .left-right-pane.expanded{flex-direction:column}:host .mobile-pane{display:flex;flex-direction:column;flex-grow:1}:host .mobile-pane .title-mobile{display:flex;flex-direction:row-reverse;justify-content:space-between;margin:var(--theme-space-1) var(--theme-space-2)}:host .side-pane-content{padding:var(--theme-space-1) var(--theme-space-2);overflow:auto;height:100%;width:100%}:host(.not-visible){display:none}:host(.inline-color){background-color:var(--theme-color-1)}:host(.box-shadow){box-shadow:0 0 1rem black}:host(.nav-left-border){border-left:var(--theme-app-header--border-width) solid var(--theme-color-weak-bdr)}:host(.left-pane-border){border-right:var(--theme-app-header--border-width) solid var(--theme-color-soft-bdr)}:host(.right-pane-border){border-left:var(--theme-app-header--border-width) solid var(--theme-color-soft-bdr)}:host(.top-pane-border){border-bottom:var(--theme-app-header--border-width) solid var(--theme-color-soft-bdr)}:host(.bottom-pane-border){border-top:var(--theme-app-header--border-width) solid var(--theme-color-soft-bdr)}:host(.mobile-overlay){width:100%;position:absolute;z-index:100 !important}:host(.mobile-overlay) .side-pane-content{height:calc(100% - 2.5rem)}:host(.mobile-border-top){border-bottom:var(--theme-app-header--border-width) solid var(--theme-color-soft-bdr)}:host(.mobile-border-bottom){border-top:var(--theme-app-header--border-width) solid var(--theme-color-soft-bdr)}:host(.top-expanded){top:0}:host(.bottom-expanded){bottom:0}:host(.left-right-pane){height:100%}:host(.top-bottom-pane){width:100%}"},7767:(e,t,i)=>{i.d(t,{a:()=>p});var o,s,n,a,h=i(9798),r=i(2483),l=function(e,t,i,o){if("a"===i&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?o:"a"===i?o.call(e):o?o.value:t.get(e)},d=function(e,t,i,o,s){if("m"===o)throw new TypeError("Private method is not writable");if("a"===o&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===o?s.call(e,i):s?s.value=i:t.set(e,i),i};o=new WeakMap,s=new WeakMap,n=new WeakMap,a=new WeakMap;const p=new class{constructor(){o.set(this,["sm","md","lg"]),s.set(this,new r.T),n.set(this,"lg"),a.set(this,!0),this.debouncedOnResize=function(e,t){let i;return function(...t){clearTimeout(i),i=setTimeout((()=>{e(...t)}),50)}}(this.onResize.bind(this)),"undefined"!=typeof window&&(window.addEventListener("resize",this.debouncedOnResize.bind(this)),this.debouncedOnResize())}get breakpoint(){return l(this,n,"f")}get onChange(){return l(this,s,"f")}get isDetectionEnabled(){return l(this,a,"f")}onResize(){if(!l(this,a,"f"))return;if(!l(this,o,"f"))return;const e=[];if(l(this,o,"f").forEach((t=>{const i=(0,h.m)(t);e.push([t,i])})),e.every((([e,t])=>!1===t))){let t=0;l(this,o,"f").includes("lg")||(t=e.length-1);const[i,a]=e[t];return l(this,s,"f").emit(i),void d(this,n,i,"f")}for(const[t,i]of e.reverse())if(i){l(this,s,"f").emit(t),d(this,n,t,"f");break}}disableBreakpointDetection(){d(this,a,!1,"f")}enableBreakpointDetection(){d(this,a,!0,"f")}setBreakpoint(e){d(this,n,e,"f"),l(this,s,"f").emit(e)}setBreakpoints(e){d(this,o,e,"f"),this.onResize()}}}}]);