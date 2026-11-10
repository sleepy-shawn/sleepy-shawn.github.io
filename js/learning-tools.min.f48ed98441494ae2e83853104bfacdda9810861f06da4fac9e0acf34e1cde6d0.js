(()=>{const t=document.querySelector("#reading-text");if(t){t.addEventListener("input",()=>{const e=(t.value.match(/\p{Script=Han}/gu)||[]).length,n=(t.value.replace(/\p{Script=Han}/gu," ").match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu)||[]).length;document.querySelector("#char-count").textContent=e,document.querySelector("#word-count").textContent=n,document.querySelector("#reading-time").textContent=Math.ceil(e/300+n/200)});const e=()=>{const e=document.querySelector("#note-title").value.trim()||"New Learning Note",t=(new Date).toLocaleDateString("sv-SE");return`---
title: ${JSON.stringify(e)}
date: ${t}
draft: true
tags: [Learning]
summary: ""
math: false
---

## Question

What question am I trying to answer?

## Understanding

Key concepts, derivations, and my own explanation.

## Validation

Experimental setup, results, and limitations.

## Next Steps

- Open questions
- The next small action

## References

- 
`};document.querySelector("#download-note").addEventListener("click",()=>{const n=URL.createObjectURL(new Blob([e()],{type:"text/markdown;charset=utf-8"})),t=document.createElement("a");t.href=n,t.download="learning-note.md",t.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3),document.querySelector("#template-status").textContent="Created learning-note.md. When your note is ready, set draft to false to publish."}),document.querySelector("#copy-note").addEventListener("click",async()=>{const t=document.querySelector("#template-status");try{await navigator.clipboard.writeText(e()),t.textContent="Template copied."}catch{t.textContent="Clipboard access is unavailable. Please use the download button."}})}const e=document.querySelector("#photo-dialog");e&&(document.querySelectorAll(".gallery-open").forEach(t=>{t.addEventListener("click",n=>{if(n.metaKey||n.ctrlKey||n.shiftKey||n.altKey)return;n.preventDefault();const s=t.dataset.caption||t.querySelector("img").alt,o=document.querySelector("#full-photo");o.src=t.href,o.alt=s,document.querySelector("#photo-caption").textContent=s,e.showModal()})}),document.querySelector("#close-photo").addEventListener("click",()=>e.close()),e.addEventListener("click",t=>{if(t.target===e){const n=e.getBoundingClientRect();(t.clientX<n.left||t.clientX>n.right||t.clientY<n.top||t.clientY>n.bottom)&&e.close()}}))})()