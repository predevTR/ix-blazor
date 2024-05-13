// -----------------------------------------------------------------------
// SPDX-FileCopyrightText: 2024 Siemens AG
//
// SPDX-License-Identifier: MIT
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.
//  -----------------------------------------------------------------------
"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[7292],{7292:(t,o,e)=>{e.r(o),e.d(o,{ix_toast:()=>a});var s=e(6969);const a=class{constructor(t){(0,s.r)(this,t),this.closeToast=(0,s.c)(this,"closeToast",7),this.type="info",this.toastTitle=void 0,this.autoCloseDelay=5e3,this.autoClose=!0,this.icon=void 0,this.iconColor=void 0,this.progress=0,this.touched=!1}getIcon(){if(this.icon)return(0,s.h)("ix-icon",{name:this.icon,color:this.iconColor,size:"24"});switch(this.type){case"info":return(0,s.h)("ix-icon",{name:"info",size:"24",color:"color-std-text"});case"error":return(0,s.h)("ix-icon",{name:"error",size:"24",color:"color-alarm"});case"success":return(0,s.h)("ix-icon",{name:"success",size:"24",color:"color-success"});case"warning":return(0,s.h)("ix-icon",{name:"warning",size:"24",color:"color-warning"});default:return""}}close(){this.hostElement&&this.hostElement.classList.add("animate__fadeOut"),setTimeout((()=>{this.closeToast.emit()}),250)}render(){let t={};const o=["toast-progress-bar"];return t={animationDuration:`${this.autoCloseDelay}ms`,animationPlayState:this.touched?"paused":"running"},o.push("toast-progress-bar--animated"),(0,s.h)(s.H,{key:"064ab233924479a92456900e282fe87e98ff2074",class:"animate__animated animate__fadeIn"},(0,s.h)("div",{key:"e66b0034a2d43eb475d79127eda95d7af81dc77c",class:"toast-body",onPointerLeave:()=>{this.touched=!1},onPointerEnter:()=>{this.touched=!0}},this.type||this.icon?(0,s.h)("div",{class:"toast-icon"},this.getIcon()):null,(0,s.h)("div",{key:"122302506aff7076b6e5d6df66e4409ca86fde31",class:"toast-content"},this.toastTitle?(0,s.h)("div",{class:"toast-title"},this.toastTitle):null,(0,s.h)("div",{key:"22f349d326b604cd7c5734ebd09280a1263423e4",class:"toast-message"},(0,s.h)("slot",{key:"78e822dd9ac08ab00b2b789dd95a7fd9ef0ddf70"}))),(0,s.h)("div",{key:"f67bf3768af2d77c5619cced98976d9f92a57a68",class:"toast-close"},(0,s.h)("ix-icon-button",{key:"81fceaa64577ab118ff9c59efc3098bec235a7b3",icon:"close",size:"24",ghost:!0,onClick:()=>this.closeToast.emit()}))),this.autoClose?(0,s.h)("div",{class:o.join(" "),style:t,onAnimationEnd:()=>{this.close()},onTransitionEnd:()=>{0===this.progress&&this.close()}}):null)}get hostElement(){return(0,s.g)(this)}};a.style=":host{display:flex;flex-direction:column;position:relative;min-width:17.5rem;max-width:17.5rem;min-height:3.5rem;pointer-events:all;background-color:var(--theme-toast--background);border:var(--theme-toast--border-thickness) solid var(--theme-toast--border-color);border-radius:var(--theme-toast--border-radius);box-shadow:var(--theme-toast--box-shadow);--animate-duration:300ms}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .toast-body{display:flex;position:relative;min-height:3.5rem;width:100%;flex-grow:1;padding:0.75rem}:host .toast-body .toast-icon{display:flex;align-items:flex-start;margin-right:1rem}:host .toast-body .toast-content{overflow:hidden;text-overflow:ellipsis;min-width:0;width:100%}:host .toast-body .toast-content .toast-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text);margin:0.25rem 0px}:host .toast-body .toast-content .toast-message{min-width:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}:host .toast-body .toast-icon+.toast-content{max-width:10.25rem}:host .toast-close{display:flex;position:relative;pointer-events:all;margin-left:auto;margin-right:0px}:host .toast-progress-bar{position:absolute;bottom:0;height:0.25rem;width:100%;background-color:var(--theme-toast-timer-value--background);transform-origin:left}:host .toast-progress-bar--animated{animation:trackProgress linear 1 forwards}@keyframes trackProgress{0%{transform:scaleX(1)}100%{transform:scaleX(0)}}"}}]);