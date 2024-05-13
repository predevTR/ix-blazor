// -----------------------------------------------------------------------
// SPDX-FileCopyrightText: 2024 Siemens AG
//
// SPDX-License-Identifier: MIT
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.
//  -----------------------------------------------------------------------
"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[1952],{3879:(e,t,s)=>{s.d(t,{A:()=>h,a:()=>a,c:()=>r,u:()=>n});var o=s(2483);class i extends Event{constructor(e,t,s){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=s}}function a(e,t,s,o){let a;return e.dispatchEvent(new i(t,((e,t)=>{s(e,t),a=t}),o)),{unsubscribe:()=>{a()}}}function n(e,t,s){const i=new o.T,a=new o.T,n=new Set;return e.addEventListener("context-request",(e=>{(null==e?void 0:e.context.name)===t.name&&(e.stopPropagation(),e.subscribe&&n.add(e),i.emit(e),s&&e.callback(s,(()=>{n.delete(e)})))})),a.on((e=>{n.forEach((t=>t.callback(e,(()=>{n.delete(t)}))))})),{emit:e=>{a.emit(e)}}}const r=e=>e.closest("ix-menu"),h={name:"application-layout-context",initialValue:{hideHeader:!1,host:null,sidebar:!1}}},7027:(e,t,s)=>{s.r(t),s.d(t,{ix_menu_category:()=>r});var o=s(6969),i=s(8137),a=s(3879),n=s(8396);const r=class{constructor(e){(0,o.r)(this,e),this.label=void 0,this.icon=void 0,this.notifications=void 0,this.menuExpand=!1,this.showItems=!1,this.showDropdown=!1,this.nestedItems=[]}isNestedItemActive(){return this.getNestedItems().some((e=>e.active))}getNestedItems(){return Array.from(this.hostElement.querySelectorAll(":scope ix-menu-item"))}getNestedItemsHeight(){return 40*this.getNestedItems().length}onExpandCategory(e){e?this.animateFadeIn():this.animateFadeOut()}animateFadeOut(){(0,i.a)({targets:this.menuItemsContainer,duration:150,easing:"easeInSine",opacity:[1,0],maxHeight:[this.getNestedItemsHeight()+40,0],complete:()=>{setTimeout((()=>{this.showItems=!1,this.showDropdown=!1}),175)}})}animateFadeIn(){(0,i.a)({targets:this.menuItemsContainer,duration:150,easing:"easeInSine",opacity:[0,1],maxHeight:[0,this.getNestedItemsHeight()+40],begin:()=>{this.showItems=!0,this.showDropdown=!1}})}onCategoryClicked(e){if(this.ixMenu.expand)return null==e||e.stopPropagation(),void this.onExpandCategory(!this.showItems);this.showDropdown=!this.showDropdown}onNestedItemsChanged(){this.nestedItems=this.getNestedItems()}isCategoryItemListVisible(){return this.menuExpand&&(this.showItems||this.isNestedItemActive())}componentWillLoad(){const e=(0,a.c)(this.hostElement);if(!e)throw Error("ix-menu-category can only be used as a child of ix-menu");this.ixMenu=e,this.menuExpand=this.ixMenu.expand,this.showItems=this.isCategoryItemListVisible()}componentDidLoad(){this.observer=(0,n.c)((()=>this.onNestedItemsChanged())),this.observer.observe(this.hostElement,{attributes:!0,childList:!0,subtree:!0}),requestAnimationFrame((()=>{this.onNestedItemsChanged()})),this.ixMenu.addEventListener("expandChange",(({detail:e})=>{this.menuExpand=e,e||this.clearMenuItemStyles(),this.showItems=this.isCategoryItemListVisible()}))}clearMenuItemStyles(){this.menuItemsContainer.style.removeProperty("max-height"),this.menuItemsContainer.style.removeProperty("opacity")}disconnectedCallback(){this.observer&&this.observer.disconnect()}render(){return(0,o.h)(o.H,{key:"7dcf0a3ab61e12650f3236d2d01905088dd46476",class:{expanded:this.showItems}},(0,o.h)("ix-menu-item",{key:"d7525b4d1577beddef2a9bc46102c5c27056f7a8",class:"category-parent",active:this.isNestedItemActive(),notifications:this.notifications,icon:this.icon,onClick:e=>this.onCategoryClicked(e)},(0,o.h)("div",{key:"45f42d78aea804389d18b71aa497d595d0d28d2f",class:"category"},(0,o.h)("div",{key:"328e734eff35051e741d5f300cef62d89b2d8357",class:"category-text"},this.label),(0,o.h)("ix-icon",{key:"a020ca032255c4e0cab6eaf21a999f778d44f89e",name:"chevron-down-small",class:{"category-chevron":!0,"category-chevron--open":this.showItems}}))),(0,o.h)("div",{key:"cb9f873594624636c51f5cdb88117c8609ca0660",ref:e=>this.menuItemsContainer=e,class:{"menu-items":!0,"menu-items--expanded":this.showItems,"menu-items--collapsed":!this.showItems}},this.showItems?(0,o.h)("slot",null):null),(0,o.h)("ix-dropdown",{key:"44e23c289ee58d8e6a64c4eae043b5d21e7acccf",closeBehavior:"both",show:this.showDropdown,onShowChanged:({detail:e})=>{this.showDropdown=e},class:"category-dropdown",anchor:this.hostElement,placement:"right-start",offset:{mainAxis:3},onClick:e=>{e.target instanceof HTMLElement&&"IX-MENU-ITEM"===e.target.tagName&&(this.showDropdown=!1)}},(0,o.h)("ix-dropdown-item",{key:"a991462ed69a30c6c9d8535d88a0642203663c9a",class:"category-dropdown-header"},(0,o.h)("ix-typography",{key:"a9947afa5cfb6c9415a3eae5c0daf762fd91843a",variant:"default-title-single",color:"std"},this.label)),(0,o.h)("ix-divider",{key:"2ff0ae7813b7ff6a32e0b6aae13b2bb3dca95d77"}),(0,o.h)("slot",{key:"4c9f7e1cac69cbd8e0c305eb9f60ea9a64e69b0d"})))}get hostElement(){return(0,o.g)(this)}};r.style=":host{display:flex;flex-direction:column;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .category{display:flex;position:relative;align-items:center;width:100%;height:100%}:host .category-text{width:100%;padding-right:0.25rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .category-chevron{margin-left:auto;margin-right:0;transition:var(--theme-default-time) transform ease-in-out}:host .category-chevron--open{transform:rotate(-180deg)}:host .menu-items{overflow:hidden;max-height:0;transition:var(--theme-default-time) max-height ease-in-out}:host .menu-items--expanded{max-height:999999999px;padding:0.25rem 0 0.25rem 1.625rem}:host .menu-items--collapsed{display:none}:host .category-dropdown ::slotted(ix-menu-item){--ix-menu-item-height:2.5rem}:host .category-dropdown-header{pointer-events:none;padding-left:0.125rem;min-width:256px}:host ::slotted(ix-menu-item){--ix-menu-item-height:2.5rem}:host(.expanded){background-color:var(--theme-color-ghost--active)}:host ::slotted(a[href]){text-decoration:none !important}"},8396:(e,t,s)=>{s.d(t,{c:()=>o});const o=e=>new MutationObserver(e)}}]);