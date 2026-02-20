import{a as c,S as d,i as a}from"./assets/vendor--6n4cVRZ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();c.defaults.baseURL="https://pixabay.com/api/";const m="54694633-cd733223458a0ec40216cbff4";function g(n){return c.get("",{params:{key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const u=document.querySelector(".gallery"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250}),f=document.querySelector(".loader");function y(n){u.innerHTML=n.map(({webformatURL:r,largeImageURL:o,tags:s,likes:e,views:t,comments:i,downloads:p})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${o}">
      <img class="gallery-image" src="${r}" alt="${s}" />
    </a>
    <div class="info">
      <p class ="info-item"><span>Likes:</span> ${e}</p>
      <p class ="info-item"><span>Views:</span> ${t}</p>
      <p class ="info-item"><span>Comments:</span> ${i}</p>
      <p class ="info-item"><span>Downloads:</span> ${p}</p>
    </div>
  </li>
`).join(""),h.refresh()}function L(){u.innerHTML=""}function b(){f.classList.remove("hidden")}function S(){f.classList.add("hidden")}const v=document.querySelector(".form"),l=document.querySelector(".form-input");v.addEventListener("submit",q);function q(n){n.preventDefault();const r=l.value.trim();if(r===""){a.error({message:"Please enter a search term",backgroundColor:"#ef4040",position:"topRight"});return}L(),b(),g(r).then(o=>{o.hits.length===0&&a.error({message:"❌ Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",position:"topRight"}),y(o.hits)}).catch(o=>{a.error({message:"Something went wrong. Please try again!",backgroundColor:"#ef4040",position:"topRight",icon:null})}).finally(()=>{S(),l.value=""})}
//# sourceMappingURL=index.js.map
