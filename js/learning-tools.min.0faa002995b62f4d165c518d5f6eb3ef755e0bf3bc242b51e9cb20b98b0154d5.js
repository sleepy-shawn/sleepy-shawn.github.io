(()=>{const t=document.querySelector("#reading-text");if(t){t.addEventListener("input",()=>{const e=(t.value.match(/\p{Script=Han}/gu)||[]).length,n=(t.value.replace(/\p{Script=Han}/gu," ").match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu)||[]).length;document.querySelector("#char-count").textContent=e,document.querySelector("#word-count").textContent=n,document.querySelector("#reading-time").textContent=Math.ceil(e/300+n/200)});const e=()=>{const e=document.querySelector("#note-title").value.trim()||"新的学习笔记",t=(new Date).toLocaleDateString("sv-SE");return`---
title: ${JSON.stringify(e)}
date: ${t}
draft: true
tags: [Learning]
summary: ""
math: false
---

## 问题

我想回答什么问题？

## 理解

核心概念、推导与自己的解释。

## 验证

实验设置、结果，以及结论的限制。

## 下一步

- 仍未解决的问题
- 下一次最小的行动

## 参考

- 
`};document.querySelector("#download-note").addEventListener("click",()=>{const n=URL.createObjectURL(new Blob([e()],{type:"text/markdown;charset=utf-8"})),t=document.createElement("a");t.href=n,t.download="learning-note.md",t.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3),document.querySelector("#template-status").textContent="已生成 learning-note.md。完成笔记后将 draft 改为 false 即可发布。"}),document.querySelector("#copy-note").addEventListener("click",async()=>{const t=document.querySelector("#template-status");try{await navigator.clipboard.writeText(e()),t.textContent="模板已复制。"}catch{t.textContent="浏览器暂未允许复制，请使用下载按钮。"}})}const e=document.querySelector("#photo-dialog");e&&(document.querySelectorAll(".gallery-open").forEach(t=>{t.addEventListener("click",n=>{if(n.metaKey||n.ctrlKey||n.shiftKey||n.altKey)return;n.preventDefault();const s=t.querySelector("img").alt,o=document.querySelector("#full-photo");o.src=t.href,o.alt=s,document.querySelector("#photo-caption").textContent=s,e.showModal()})}),document.querySelector("#close-photo").addEventListener("click",()=>e.close()),e.addEventListener("click",t=>{if(t.target===e){const n=e.getBoundingClientRect();(t.clientX<n.left||t.clientX>n.right||t.clientY<n.top||t.clientY>n.bottom)&&e.close()}}))})()