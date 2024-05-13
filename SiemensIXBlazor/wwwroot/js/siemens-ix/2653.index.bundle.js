// -----------------------------------------------------------------------
// SPDX-FileCopyrightText: 2024 Siemens AG
//
// SPDX-License-Identifier: MIT
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.
//  -----------------------------------------------------------------------
"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[2653],{2653:(t,e,o)=>{o.r(e),o.d(e,{ix_menu_item:()=>a});var i=o(6969),s=o(8396);const a=class{constructor(t){(0,i.r)(this,t),this.isHostedInsideCategory=!1,this.home=!1,this.bottom=!1,this.tabIcon=void 0,this.icon=void 0,this.notifications=void 0,this.active=void 0,this.disabled=void 0,this.title=void 0}componentWillLoad(){this.isHostedInsideCategory=!!this.hostElement.closest("ix-menu-category"),this.onIconChange(),this.onTabIconChange()}componentWillRender(){this.title=this.hostElement.innerText}connectedCallback(){this.observer=(0,s.c)((()=>{this.title=this.hostElement.innerText})),this.observer.observe(this.hostElement,{subtree:!0,childList:!0,characterData:!0})}disconnectedCallback(){this.observer&&this.observer.disconnect()}onIconChange(){this.isHostedInsideCategory||this.hostElement.icon||this.hostElement.tabIcon||(this.icon="document")}onTabIconChange(){this.isHostedInsideCategory||this.hostElement.icon||this.hostElement.tabIcon||(this.tabIcon="document")}render(){var t;let e={};return this.home&&(e={slot:"home"}),this.bottom&&(e={slot:"bottom"}),(0,i.h)(i.H,Object.assign({key:"da2c5ba8459f0a0473c249eb37303a49d980c5ef",class:{disabled:this.disabled,"home-tab":this.home,"bottom-tab":this.bottom,active:this.active,"tab-nested":this.isHostedInsideCategory}},e),(0,i.h)("button",{key:"3a0650544cbd13512438699730ff9dfc13978cc3",class:"tab",title:this.title,tabIndex:this.disabled?-1:0,role:"listitem"},(this.icon||this.tabIcon)&&(0,i.h)("ix-icon",{class:"tab-icon",name:null!==(t=this.icon)&&void 0!==t?t:this.tabIcon}),this.notifications?(0,i.h)("div",{class:"notification"},(0,i.h)("div",{class:"pill"},this.notifications)):null,(0,i.h)("span",{key:"e66eb57545254f24212e3bb99e0efedb49ede1c4",class:"tab-text text-default"},(0,i.h)("slot",{key:"80127ff0f7fb6ffe2a3318e4ced668c4646262c1"}))))}get hostElement(){return(0,i.g)(this)}static get watchers(){return{icon:["onIconChange"],tabIcon:["onTabIconChange"]}}};a.style=':host{position:relative;display:block;cursor:pointer;height:var(--ix-menu-item-height, 3rem);min-height:var(--ix-menu-item-height, 3rem);max-height:var(--ix-menu-item-height, 3rem)}:host .tab{all:unset;box-sizing:border-box;display:flex;position:relative;align-items:center;height:var(--ix-menu-item-height, 3rem);width:100%;z-index:500;padding-left:0.875rem}:host .tab:not(.disabled):not(:disabled).hover,:host .tab:not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}:host .tab:not(.disabled):not(:disabled).active,:host .tab:not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}:host .tab-icon{color:var(--theme-nav-item-primary-icon--color);position:relative;pointer-events:none}:host .tab:focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:-1px}:host .tab:not(:last-child){margin-bottom:0.5rem}:host .notification{display:inline-flex;position:absolute;top:0.25rem;left:1.5rem}:host .notification .pill{display:inline-flex;justify-content:center;align-items:center;height:0.5rem;min-width:1rem;position:relative;border-radius:6.25rem;background-color:var(--theme-color-primary);font-size:0.75rem;font-weight:bold;line-height:1;font-family:Siemens Sans, Arial, sans-serif;color:var(--theme-color-primary--contrast);padding:0.25rem}:host .tab-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--theme-nav-item-primary--color);margin:0 1rem 0 1.25rem;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}:host(.active) .tab,:host(.selected) .tab{background-color:var(--theme-nav-item-primary--background--selected)}:host(.active) .tab::before,:host(.selected) .tab::before{content:"";background-color:var(--theme-nav-item-primary--border-color--selected);height:var(--ix-menu-item-height, 3rem);width:0.25rem;left:0;position:absolute}:host(.active) .tab>.glyph,:host(.selected) .tab>.glyph{color:var(--theme-nav-item-primary-icon--color--selected)}:host(.disabled){color:var(--theme-color-weak-text);pointer-events:none;cursor:default}:host(.disabled) .tab>.tab-icon{color:var(--theme-color-weak-text)}:host(.disabled) .tab-text{color:var(--theme-color-weak-text)}:host(.bottom-tab),:host([slot=bottom]){min-height:2.25rem;height:2.25rem;max-height:2.25rem}:host(.bottom-tab) .tab,:host([slot=bottom]) .tab{height:2.25rem}:host(.bottom-tab) .tab::before,:host([slot=bottom]) .tab::before{height:2.25rem;background-color:transparent}:host(.bottom-tab).active:hover,:host(.bottom-tab).selected:hover,:host([slot=bottom]).active:hover,:host([slot=bottom]).selected:hover{background-color:var(--theme-nav-item-secondary--background--selected)}:host(.bottom-tab).active:active,:host(.bottom-tab).selected:active,:host([slot=bottom]).active:active,:host([slot=bottom]).selected:active{background-color:var(--theme-nav-item-secondary--background--selected)}:host(.bottom-tab.active) .tab,:host(.bottom-tab.selected) .tab,:host(.active[slot=bottom]) .tab,:host(.selected[slot=bottom]) .tab{background-color:var(--theme-nav-item-secondary--background--selected)}:host(.tab-nested) .tab{flex-direction:row;padding-left:1.375rem}:host(.tab-nested) .tab .notification{position:relative;top:0;left:0;padding-left:0.5rem}:host(.tab-nested) .tab .tab-icon{padding-left:0.5rem;padding-right:0.5rem}:host(.tab-nested) .tab .tab-text{margin-left:0.5rem}:host(.tab-nested) .tab::before{display:none}'},8396:(t,e,o)=>{o.d(e,{c:()=>i});const i=t=>new MutationObserver(t)}}]);