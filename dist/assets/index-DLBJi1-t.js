(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const Xe="stellar_civil_";function ae(e,a){try{const t=`${Xe}inputs_${e}`;localStorage.setItem(t,JSON.stringify(a))}catch(t){console.warn("Failed to save inputs:",t)}}function le(e){try{const a=`${Xe}inputs_${e}`,t=localStorage.getItem(a);return t?JSON.parse(t):null}catch(a){return console.warn("Failed to load inputs:",a),null}}function ya(){return localStorage.getItem(`${Xe}disclaimer_ack`)==="true"}function xa(){localStorage.setItem(`${Xe}disclaimer_ack`,"true")}function _a(){return localStorage.getItem(`${Xe}theme`)||"light"}function Sa(e){localStorage.setItem(`${Xe}theme`,e)}const y={chevron:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>',moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>',sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',calculator:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="18"></line><line x1="8" y1="10" x2="8" y2="10.01"></line><line x1="12" y1="10" x2="12" y2="10.01"></line><line x1="16" y1="10" x2="16" y2="10.01"></line><line x1="8" y1="14" x2="8" y2="14.01"></line><line x1="12" y1="14" x2="12" y2="14.01"></line><line x1="8" y1="18" x2="8" y2="18.01"></line><line x1="12" y1="18" x2="12" y2="18.01"></line></svg>',download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',info:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',play:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>',refresh:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>',check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',warning:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',building:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>'};function $a(e){const a=!!e.unit,t=e.tooltip?`
    <span class="tooltip-trigger">
      <span class="tooltip-icon">?</span>
      <span class="tooltip-content">${e.tooltip}</span>
    </span>`:"";if(e.type==="select"){const i=e.options.map(s=>{const o=typeof s=="object"?s.value:s,l=typeof s=="object"?s.label:s,n=o==e.default?"selected":"";return`<option value="${o}" ${n}>${l}</option>`}).join("");return`
      <div class="form-group">
        <label class="form-group__label" for="${e.id}">
          ${e.label} ${t}
        </label>
        <select class="form-select" id="${e.id}" name="${e.id}"
          ${e.validate?`data-validate data-name="${e.label}"`:""}>
          ${i}
        </select>
        <span class="form-group__error"></span>
      </div>`}return`
    <div class="form-group">
      <label class="form-group__label" for="${e.id}">
        ${e.label}
        ${a?`<span class="unit">(${e.unit})</span>`:""}
        ${t}
      </label>
      <div class="form-input-wrapper ${a?"has-unit":""}">
        <input type="number" class="form-input ${a?"form-input--with-unit":""}"
          id="${e.id}" name="${e.id}"
          value="${e.default??""}"
          step="${e.step||"any"}"
          ${e.min!==void 0?`min="${e.min}"`:""}
          ${e.max!==void 0?`max="${e.max}"`:""}
          ${e.validate!==!1?`data-validate data-min="${e.min}" data-max="${e.max}" data-name="${e.label}"`:""}
          placeholder="${e.placeholder||""}"
        />
        ${a?`<span class="form-input__unit">${e.unit}</span>`:""}
        <svg class="validation-icon icon-valid" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <svg class="validation-icon icon-invalid" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
      </div>
      <span class="form-group__error"></span>
    </div>`}const de=zt;function w(e,a,t=""){const i=a.map(s=>$a(s)).join("");return`
    <div class="input-panel">
      <h3 class="input-panel__title">${t} ${e}</h3>
      <div class="input-grid">
        ${i}
      </div>
    </div>`}function zt(e){return`<div class="summary-cards">${e.map(t=>`
    <div class="summary-card summary-card--${t.status||"info"}">
      <div class="summary-card__label">${t.label}</div>
      <div class="summary-card__value">${t.value}</div>
      ${t.sub?`<div class="summary-card__sub">${t.sub}</div>`:""}
    </div>
  `).join("")}</div>`}function ue(e,a){const t=a.map(i=>`
    <tr>
      <td class="step-num">${i.step}</td>
      <td>${i.description||i.title||""}</td>
      <td>${i.formula?`<span class="formula">${i.formula}</span>`:"—"}</td>
      <td class="value">${i.value||i.result||""}</td>
      <td class="unit">${i.unit||""}</td>
    </tr>
  `).join("");return`
    <div class="step-table-container">
      <div class="step-table-container__header">
        <h4>${e}</h4>
      </div>
      <div class="step-table-wrapper">
        <table class="step-table">
          <thead>
            <tr>
              <th>Step</th>
              <th>Description</th>
              <th>Formula / IS Clause</th>
              <th>Calculated Value</th>
              <th>Unit</th>
            </tr>
          </thead>
          <tbody>${t}</tbody>
        </table>
      </div>
    </div>`}function Fa(e,a,t){const i=a.map(o=>`<th>${o}</th>`).join(""),s=t.map(o=>`<tr>${o.map(n=>typeof n=="object"&&n.status?`<td class="status-${n.status}">${n.text}</td>`:`<td>${n}</td>`).join("")}</tr>`).join("");return`
    <div class="design-table-container">
      <div class="design-table-container__header">
        <h4>${e}</h4>
      </div>
      <table class="design-table">
        <thead><tr>${i}</tr></thead>
        <tbody>${s}</tbody>
      </table>
    </div>`}function ve(e){const a={pass:"✅",fail:"❌",warn:"⚠️"};return`
    <div class="compliance-section">
      <h4>IS Code Compliance Checks</h4>
      ${e.map(i=>{let s="";if(i.text&&!i.label)s=i.text;else if(i.label&&i.text)s=`<strong>${i.label}:</strong> ${i.text}`;else if(i.label&&i.value!==void 0&&i.limit!==void 0){const l=i.unit?` ${i.unit}`:"";s=`<strong>${i.label}:</strong> ${i.value}${l} (Limit: ${i.limit}${l})`}else i.label?s=`<strong>${i.label}</strong>`:s=i.text||"Check Item";const o=i.clause||i.ref||"";return`
    <div class="compliance-item compliance-item--${i.status}">
      <span class="compliance-item__icon">${a[i.status]}</span>
      <div>
        <span class="compliance-item__text">${s}</span>
        ${o?`<br><span class="compliance-item__clause">${o}</span>`:""}
      </div>
    </div>
    `}).join("")}
    </div>`}function te(e){return`
    <div class="assumptions-box">
      <div class="assumptions-box__header" onclick="this.parentElement.classList.toggle('collapsed')">
        <span class="assumptions-box__title">⚠ Assumptions & Limitations</span>
        <svg class="assumptions-box__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </div>
      <div class="assumptions-box__content">
        <ul>${e.map(t=>`<li>${t}</li>`).join("")}</ul>
      </div>
    </div>`}function oe(e="btn-calculate",a="btn-clear"){return`
    <div class="action-bar">
      <div class="btn-group">
        <button class="btn btn-primary btn-lg" id="${e}">
          ${y.play} Calculate
        </button>
        <button class="btn btn-secondary" id="${a}">
          ${y.refresh} Clear All
        </button>
      </div>
      <div class="btn-group">
        <button class="btn btn-secondary btn-sm" id="btn-export-pdf" disabled>
          ${y.download} Export PDF
        </button>
        <button class="btn btn-secondary btn-sm" id="btn-export-csv" disabled>
          ${y.download} Export CSV
        </button>
      </div>
    </div>`}function X(e,a=3e3){let t=document.querySelector(".toast-container");t||(t=document.createElement("div"),t.className="toast-container",document.body.appendChild(t));const i=document.createElement("div");i.className="toast",i.innerHTML=`${y.info} <span>${e}</span>`,t.appendChild(i),setTimeout(()=>{i.classList.add("leaving"),setTimeout(()=>i.remove(),300)},a)}function q(e){let a=document.querySelector(".sticky-bar");if(a||(a=document.createElement("div"),a.className="sticky-bar",document.body.appendChild(a)),!e||e.length===0){a.classList.remove("visible");return}a.innerHTML=e.map(t=>`
    <div class="sticky-bar__item">
      <span class="sticky-bar__label">${t.label}:</span>
      <span class="sticky-bar__value">${t.value}</span>
    </div>
  `).join(""),a.classList.add("visible")}function me(e){const a={};return e.querySelectorAll(".form-input, .form-select, .calc-input").forEach(t=>{const i=t.value;t.type==="number"||!isNaN(i)&&i!==""?a[t.id]=parseFloat(i):a[t.id]=i}),a}function ce(e,a){a&&Object.entries(a).forEach(([t,i])=>{const s=e.querySelector(`#${t}`);s&&(s.value=i)})}const Ma=[{dia:6,area:28.27,weight:.222,perimeter:18.85},{dia:8,area:50.27,weight:.395,perimeter:25.13},{dia:10,area:78.54,weight:.617,perimeter:31.42},{dia:12,area:113.1,weight:.888,perimeter:37.7},{dia:16,area:201.06,weight:1.578,perimeter:50.27},{dia:20,area:314.16,weight:2.466,perimeter:62.83},{dia:25,area:490.87,weight:3.854,perimeter:78.54},{dia:32,area:804.25,weight:6.313,perimeter:100.53},{dia:40,area:1256.64,weight:9.865,perimeter:125.66}];function Ie(e){return Ma.find(a=>a.dia===e)}function ka(e,a=1){const t=Ie(e);return t?t.area*a:0}const wt=ka,He=[.15,.25,.5,.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3],At={15:[.28,.36,.48,.56,.62,.67,.72,.75,.79,.81,.82,.82,.82],20:[.28,.36,.48,.56,.62,.67,.72,.75,.79,.81,.82,.82,.82],25:[.29,.36,.49,.57,.64,.7,.74,.78,.82,.85,.88,.9,.92],30:[.29,.37,.5,.59,.66,.71,.76,.8,.84,.88,.91,.94,.96],35:[.29,.37,.5,.59,.67,.73,.78,.82,.86,.9,.93,.96,.99],40:[.3,.38,.51,.6,.68,.74,.79,.84,.88,.92,.95,.98,1.01]};function It(e,a){const t=Math.max(.15,Math.min(e,3)),i=[15,20,25,30,35,40],s=Math.max(15,Math.min(a,40));function o(f){const u=At[f];if(!u)return 0;let g=0;for(g=0;g<He.length-1&&!(t<=He[g+1]);g++);if(t<=He[0])return u[0];if(t>=He[He.length-1])return u[u.length-1];const c=He[g],v=He[g+1],$=u[g],_=u[g+1];return $+(t-c)*(_-$)/(v-c)}if(At[s])return o(s);let l=0;for(l=0;l<i.length-1&&!(s<=i[l+1]);l++);const n=i[l],r=i[l+1],d=o(n),m=o(r);return d+(s-n)*(m-d)/(r-n)}const je={15:2.5,20:2.8,25:3.1,30:3.5,35:3.7,40:4};function La(e){if(je[e])return je[e];const a=Object.keys(je).map(Number).sort((i,s)=>i-s),t=Math.max(15,Math.min(e,40));for(let i=0;i<a.length-1;i++)if(t<=a[i+1]){const s=a[i],o=a[i+1];return je[s]+(t-s)*(je[o]-je[s])/(o-s)}return je[40]}const Ze={15:1,20:1.2,25:1.4,30:1.5,35:1.7,40:1.9};function Ut(e,a=!0){let t=Ze[e];if(!t){const i=Object.keys(Ze).map(Number).sort((o,l)=>o-l),s=Math.max(15,Math.min(e,40));for(let o=0;o<i.length-1;o++)if(s<=i[o+1]){const l=i[o],n=i[o+1];t=Ze[l]+(s-l)*(Ze[n]-Ze[l])/(n-l);break}t||(t=Ze[40])}return a?t*1.6:t}const Qe=[1,1.1,1.2,1.3,1.4,1.5,1.75,2],Ca=[{id:1,desc:"Interior panel (all edges continuous)"},{id:2,desc:"One short edge discontinuous"},{id:3,desc:"One long edge discontinuous"},{id:4,desc:"Two adjacent edges discontinuous"},{id:5,desc:"Two short edges discontinuous"},{id:6,desc:"Two long edges discontinuous"},{id:7,desc:"Three edges discontinuous (one long edge continuous)"},{id:8,desc:"Three edges discontinuous (one short edge continuous)"},{id:9,desc:"All four edges discontinuous"}],wa={1:{ax_neg:[.032,.037,.042,.046,.05,.053,.06,.065],ax_pos:[.024,.028,.032,.035,.037,.04,.044,.048],ay_neg:[.024,.028,.032,.036,.039,.041,.045,.049],ay_pos:[.024,.028,.032,.036,.039,.041,.045,.049]},2:{ax_neg:[.037,.043,.048,.051,.055,.057,.064,.068],ax_pos:[.028,.032,.036,.039,.041,.044,.048,.052],ay_neg:[.028,.032,.036,.04,.043,.045,.049,.052],ay_pos:[.028,.032,.036,.04,.043,.045,.049,.052]},3:{ax_neg:[.037,.044,.052,.057,.063,.067,.077,.085],ax_pos:[.028,.033,.039,.044,.047,.051,.059,.065],ay_neg:[.037,.044,.052,.057,.063,.067,.077,.085],ay_pos:[.028,.033,.039,.044,.047,.051,.059,.065]},4:{ax_neg:[.047,.053,.06,.065,.071,.075,.084,.091],ax_pos:[.035,.04,.045,.049,.053,.056,.063,.069],ay_neg:[.035,.04,.045,.049,.053,.056,.063,.069],ay_pos:[.035,.04,.045,.049,.053,.056,.063,.069]},5:{ax_neg:[.045,.049,.052,.056,.059,.06,.065,.069],ax_pos:[.035,.037,.04,.043,.044,.045,.049,.052],ay_neg:[.035,.037,.04,.043,.044,.045,.049,.052],ay_pos:[.035,.037,.04,.043,.044,.045,.049,.052]},6:{ax_neg:[.045,.049,.052,.056,.059,.06,.065,.069],ax_pos:[.035,.037,.04,.043,.044,.045,.049,.052],ay_neg:[.035,.037,.04,.043,.044,.045,.049,.052],ay_pos:[.035,.037,.04,.043,.044,.045,.049,.052]},7:{ax_neg:[.057,.064,.071,.076,.08,.084,.091,.097],ax_pos:[.043,.048,.053,.057,.06,.064,.069,.073],ay_neg:[.043,.048,.053,.057,.06,.064,.069,.073],ay_pos:[.043,.048,.053,.057,.06,.064,.069,.073]},8:{ax_neg:[.057,.064,.071,.076,.08,.084,.091,.097],ax_pos:[.043,.048,.053,.057,.06,.064,.069,.073],ay_neg:[.043,.048,.053,.057,.06,.064,.069,.073],ay_pos:[.043,.048,.053,.057,.06,.064,.069,.073]},9:{ax_neg:[0,0,0,0,0,0,0,0],ax_pos:[.056,.064,.072,.079,.085,.089,.1,.107],ay_neg:[0,0,0,0,0,0,0,0],ay_pos:[.056,.064,.072,.079,.085,.089,.1,.107]}};function Je(e,a,t){const i=wa[e];if(!i||!i[t])return 0;const s=i[t],o=Math.max(1,Math.min(a,2));for(let l=0;l<Qe.length-1;l++)if(o<=Qe[l+1]){const n=Qe[l],r=Qe[l+1],d=s[l],m=s[l+1];return d+(o-n)*(m-d)/(r-n)}return s[s.length-1]}const Ia={Mild:{slab:20,beam:20,column:40},Moderate:{slab:30,beam:30,column:40},Severe:{slab:45,beam:45,column:45},"Very Severe":{slab:50,beam:50,column:50},Extreme:{slab:75,beam:75,column:75}},Ea={250:{xu_d:.5313,Q:.149},415:{xu_d:.4791,Q:.138},500:{xu_d:.456,Q:.133},550:{xu_d:.444,Q:.129},600:{xu_d:.43,Q:.126}};function Da(e){var a;return((a=Ea[e])==null?void 0:a.Q)||.138}function Gt(e,a){if(a<=0)return 2;const t=1/(.225+.003225*e-.625*Math.log10(a));return Math.max(1,Math.min(t,2))}const Tt={slab:{415:.12,500:.12,550:.12,600:.12,250:.15}},Aa=[15,20,25,30,35,40,45,50,55,60,65,70,75,80],Et=[8,10,12,16,20,25,28,32,36,40];function Wt(e){return Math.PI*e*e/4}function Vt(e){return e*e/162.28}const Ta=[{grade:"M15",fck:15},{grade:"M20",fck:20},{grade:"M25",fck:25},{grade:"M30",fck:30},{grade:"M35",fck:35},{grade:"M40",fck:40},{grade:"M45",fck:45},{grade:"M50",fck:50}],Ba=[{grade:"Fe250",fy:250},{grade:"Fe415",fy:415},{grade:"Fe500",fy:500},{grade:"Fe550",fy:550},{grade:"Fe600",fy:600}],Na=["Mild","Moderate","Severe","Very Severe","Extreme"],Ra={unitWeight:25},Ae=[15,20,25,30,35,40,45,50],Te=[250,415,500,550,600],Dt={250:.531,415:.479,500:.456,550:.444,600:.43};function L(e,a,t,i){if(e===""||e===null||e===void 0)return{valid:!1,message:`${i} is required`};const s=parseFloat(e);return isNaN(s)?{valid:!1,message:`${i} must be a valid number`}:s<a?{valid:!1,message:`${i} must be ≥ ${a}`}:s>t?{valid:!1,message:`${i} must be ≤ ${t}`}:{valid:!0,message:""}}function Pa(e,a){return!e||e===""?{valid:!1,message:`Please select ${a}`}:{valid:!0,message:""}}function Ht(e,a){const t=e.closest(".form-group"),i=t==null?void 0:t.querySelector(".form-group__error");if(e.classList.remove("is-valid","is-invalid"),e.value===""){i&&(i.textContent="");return}a.valid?(e.classList.add("is-valid"),i&&(i.textContent="")):(e.classList.add("is-invalid"),i&&(i.textContent=a.message))}function jt(e){const a=e.querySelectorAll(".form-input[data-validate]");let t=0;return a.forEach(s=>{const o=parseFloat(s.dataset.min),l=parseFloat(s.dataset.max),n=s.dataset.name||s.name,r=L(s.value,o,l,n);Ht(s,r),r.valid||t++}),e.querySelectorAll(".form-select[data-validate]").forEach(s=>{const o=s.dataset.name||s.name;Pa(s.value,o).valid||t++}),t}function qa(e,a){e.querySelectorAll(".form-input[data-validate]").forEach(i=>{const s=()=>{const o=parseFloat(i.dataset.min),l=parseFloat(i.dataset.max),n=i.dataset.name||i.name,r=L(i.value,o,l,n);if(Ht(i,r),a){const d=jt(e);a(d)}};i.addEventListener("input",s),i.addEventListener("blur",s)})}function Oa(){const e=document.querySelector(".print-header");if(document.querySelector(".print-footer"),e){const a=new Date,t=a.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}),i=a.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"}),s=e.querySelector(".print-header__info");s&&(s.innerHTML=`Date: ${t}<br>Time: ${i}`)}window.print()}function za(e,a){if(!e||e.length===0)return;const t=e.map(r=>r.map(d=>{let m=String(d??"");return(m.includes(",")||m.includes('"')||m.includes(`
`))&&(m='"'+m.replace(/"/g,'""')+'"'),m}).join(",")).join(`
`),i=new Blob([t],{type:"text/csv;charset=utf-8;"}),s=URL.createObjectURL(i),o=document.createElement("a"),n=new Date().toISOString().slice(0,10);o.href=s,o.download=`StellarCivil_${a}_${n}.csv`,o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(s)}const Bt="slab-design",Nt=[{id:"slab-lx",label:"Shorter Span (Lx)",unit:"m",default:4,min:1,max:15,step:.1,tooltip:"Clear shorter span of the slab panel in meters. Must be ≥ 1m."},{id:"slab-ly",label:"Longer Span (Ly)",unit:"m",default:5,min:1,max:20,step:.1,tooltip:"Clear longer span of the slab panel in meters. Ly ≥ Lx always."},{id:"slab-fck",label:"Concrete Grade (fck)",type:"select",default:25,options:Ta.map(e=>({value:e.fck,label:e.grade})),tooltip:"Characteristic compressive strength of concrete at 28 days (IS 456 Cl. 6.2)"},{id:"slab-fy",label:"Steel Grade (fy)",type:"select",default:415,options:Ba.filter(e=>[415,500,550].includes(e.fy)).map(e=>({value:e.fy,label:e.grade})),tooltip:"Yield strength of reinforcement steel (IS 1786)"},{id:"slab-exposure",label:"Exposure Condition",type:"select",default:"Mild",options:Na,tooltip:"Exposure condition per IS 456 Table 3. Determines minimum cover."},{id:"slab-panel-type",label:"Panel Type (IS 456 Table 26)",type:"select",default:1,options:Ca.map(e=>({value:e.id,label:`Type ${e.id}: ${e.desc}`})),tooltip:"9 panel types based on edge support conditions per IS 456 Annex D, Table 26."}],Rt=[{id:"slab-ll",label:"Live Load",unit:"kN/m²",default:3,min:0,max:50,step:.5,tooltip:"Imposed (live) load on the slab per IS 875 Part 2. Typical: 2.0 residential, 3.0 office, 5.0 store."},{id:"slab-ff",label:"Floor Finish Load",unit:"kN/m²",default:1,min:0,max:5,step:.25,tooltip:"Floor finish load (tiles, screed, etc.). Typically 1.0–1.5 kN/m²."},{id:"slab-partition",label:"Partition Load",unit:"kN/m²",default:1,min:0,max:5,step:.25,tooltip:"Equivalent partition wall load. As per IS 875 Part 2, typically 1.0 kN/m² for movable partitions."},{id:"slab-bar-dia",label:"Main Bar Diameter",unit:"mm",type:"select",default:10,options:[8,10,12,16].map(e=>{var a;return{value:e,label:`${e} mm (Ast = ${(a=Ie(e))==null?void 0:a.area.toFixed(1)} mm²)`}}),tooltip:"Preferred diameter of main reinforcement bars."}];function Ua(e){var t,i,s,o;const a=le(Bt);e.innerHTML=`
    <div class="calculator-page" id="slab-calc">
      <!-- Print header (hidden normally) -->
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Rectangular Slab Design</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>1.1 — Rectangular Slab Design</h2>
        <p>Two-way and one-way slab design as per IS 456:2000, Annex D</p>
        <span class="calculator-page__code-ref">
          ${y.info} IS 456:2000 — Cl. 24, Annex D, Table 26
        </span>
      </div>

      ${te(["Simply supported or continuous slab — as per selected panel type","Rectangular slab with uniform loading","Self-weight calculated automatically based on assumed overall depth D","Clear cover determined from exposure condition per IS 456 Table 16","Minimum reinforcement = 0.12% of bD for HYSD bars (Cl. 26.5.2.1)","Maximum spacing ≤ 3d or 300mm (Cl. 26.3.3)","Corner reinforcement not designed — to be provided at discontinuous edges per Cl. D-1.8","Shear is typically not critical for slabs; simplified check included"])}

      ${w("Geometry & Material",Nt,y.building)}
      ${w("Loads & Reinforcement",Rt,y.calculator)}

      ${oe()}

      <div id="slab-results"></div>

      <!-- Print footer (hidden normally) -->
      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,a&&(ce(e,a),X("Restored last session inputs")),qa(e,l=>{const n=document.getElementById("btn-calculate");n&&(l>0?(n.disabled=!0,n.innerHTML=`Fix ${l} error${l>1?"s":""}`):(n.disabled=!1,n.innerHTML=`${y.play} Calculate`))}),(t=document.getElementById("btn-calculate"))==null||t.addEventListener("click",()=>{const l=jt(e);if(l>0){X(`Please fix ${l} input error(s)`,3e3);return}const n=document.getElementById("btn-calculate");n.innerHTML='<span class="spinner"></span> Calculating...',n.disabled=!0;const r=me(e);ae(Bt,r),setTimeout(()=>{var d;try{const m=Ga(r);Wa(m),n.innerHTML=`${y.refresh} Recalculate`,n.disabled=!1,document.getElementById("btn-export-pdf").disabled=!1,document.getElementById("btn-export-csv").disabled=!1,(d=document.getElementById("slab-results"))==null||d.scrollIntoView({behavior:"smooth",block:"start"})}catch(m){console.error("Calculation error:",m),document.getElementById("slab-results").innerHTML=`
          <div class="summary-cards">
            <div class="summary-card summary-card--fail">
              <div class="summary-card__label">Calculation Error</div>
              <div class="summary-card__value" style="font-size:var(--text-md)">Check inputs</div>
              <div class="summary-card__sub">${m.message}</div>
            </div>
          </div>`,n.innerHTML=`${y.play} Calculate`,n.disabled=!1}},300)}),(i=document.getElementById("btn-clear"))==null||i.addEventListener("click",()=>{var r,d;const l=document.getElementById("btn-clear"),n=l.innerHTML;l.innerHTML=`<span class="confirm-inline"><span class="confirm-inline__text">Clear all inputs?</span>
      <button class="btn btn-sm btn-accent" id="confirm-clear-yes">Yes</button>
      <button class="btn btn-sm btn-ghost" id="confirm-clear-no">No</button>
    </span>`,(r=document.getElementById("confirm-clear-yes"))==null||r.addEventListener("click",()=>{Nt.concat(Rt).forEach(f=>{const u=document.getElementById(f.id);u&&(u.value=f.default)}),document.getElementById("slab-results").innerHTML="",document.getElementById("btn-export-pdf").disabled=!0,document.getElementById("btn-export-csv").disabled=!0,q(null),l.innerHTML=n,X("Inputs cleared to defaults");const m=document.getElementById("btn-calculate");m.innerHTML=`${y.play} Calculate`,m.disabled=!1,e.querySelectorAll(".form-input").forEach(f=>{f.classList.remove("is-valid","is-invalid")}),e.querySelectorAll(".form-group__error").forEach(f=>{f.textContent=""})}),(d=document.getElementById("confirm-clear-no"))==null||d.addEventListener("click",()=>{l.innerHTML=n})}),(s=document.getElementById("btn-export-pdf"))==null||s.addEventListener("click",Oa),(o=document.getElementById("btn-export-csv"))==null||o.addEventListener("click",()=>{const l=document.getElementById("slab-results");if(!l)return;const n=[["Step","Description","Formula / IS Clause","Calculated Value","Unit"]];l.querySelectorAll(".step-table tbody tr").forEach(r=>{const d=Array.from(r.cells).map(m=>m.textContent.trim());n.push(d)}),za(n,"SlabDesign")})}function Ga(e){var Re;const a=e["slab-lx"],t=e["slab-ly"],i=e["slab-fck"],s=e["slab-fy"],o=e["slab-exposure"],l=e["slab-panel-type"],n=e["slab-ll"],r=e["slab-ff"],d=e["slab-partition"],m=e["slab-bar-dia"],f=[],u=[];let g=1;const c=t/a,v=c>2,$=v?"One-Way":"Two-Way";f.push({step:g++,description:`Determine slab type: Ly/Lx = ${t}/${a}`,formula:"Ly/Lx > 2 → One-way",value:`${c.toFixed(2)} → ${$} Slab`,unit:""});const _=l==9?28:32;let h=Math.ceil(a*1e3/_/5)*5;h=Math.max(h,100);const p=((Re=Ia[o])==null?void 0:Re.slab)||20,b=h-p-m/2;f.push({step:g++,description:"Assume overall depth D, compute effective depth d",formula:`D ≈ Lx×1000/${_}, d = D − cover − φ/2`,value:`D = ${h} mm, cover = ${p} mm, d = ${b.toFixed(1)} mm`,unit:"mm"});const x=Ra.unitWeight*(h/1e3);f.push({step:g++,description:"Self-weight of slab",formula:"w_sw = 25 × D/1000",value:x.toFixed(2),unit:"kN/m²"});const S=x+r+d,F=1.5*(S+n);f.push({step:g++,description:"Total factored load",formula:`wu = 1.5 × (DL + LL) = 1.5 × (${S.toFixed(2)} + ${n.toFixed(2)})`,value:F.toFixed(2),unit:"kN/m²"});let B,C,D,A,I,k;if(v){const re=l==9?8:10;I=F*a*a/re,k=0,f.push({step:g++,description:"Bending moment (One-way slab)",formula:`Mx = wu × Lx² / ${re}`,value:I.toFixed(2),unit:"kN·m/m"})}else{const re=Je(l,c,"ax_neg"),ge=Je(l,c,"ax_pos"),pe=Je(l,c,"ay_neg"),fe=Je(l,c,"ay_pos");B=re*F*a*a,C=ge*F*a*a,D=pe*F*a*a,A=fe*F*a*a,I=Math.max(B,C),k=Math.max(D,A),f.push({step:g++,description:"Moment coefficients from IS 456 Table 26",formula:`Panel Type ${l}, Ly/Lx = ${c.toFixed(2)}`,value:`αx⁻=${re.toFixed(4)}, αx⁺=${ge.toFixed(4)}, αy⁻=${pe.toFixed(4)}, αy⁺=${fe.toFixed(4)}`,unit:""}),f.push({step:g++,description:"Bending moments (Two-way slab)",formula:"M = α × wu × Lx²",value:`Mx⁻=${B.toFixed(2)}, Mx⁺=${C.toFixed(2)}, My⁻=${D.toFixed(2)}, My⁺=${A.toFixed(2)}`,unit:"kN·m/m"})}const E=Da(s),T=Math.sqrt(I*1e6/(E*i*1e3));f.push({step:g++,description:"Check depth: required d for bending",formula:`d_req = √(Mu / (${E} × fck × b))`,value:`d_req = ${T.toFixed(1)} mm ${b>=T?"≤":">"} d_prov = ${b.toFixed(1)} mm → ${b>=T?"OK":"REVISE"}`,unit:"mm"});const U=b>=T;u.push({status:U?"pass":"fail",text:`Depth check — d_provided (${b.toFixed(1)} mm) ${U?"≥":"<"} d_required (${T.toFixed(1)} mm)`,clause:"IS 456 Cl. 24.1"});function R(re,ge,pe,fe,we){const Ve=re*1e6,Pe=.87*we*we/(ge*pe*fe),qe=.87*we*pe,Le=qe*qe-4*Pe*Ve;return Le<0?NaN:(qe-Math.sqrt(Le))/(2*Pe)}const N=R(I,1e3,b,i,s);f.push({step:g++,description:"Required Ast in X-direction (shorter span)",formula:"Quadratic: 0.87×fy×Ast×d×[1 − Ast×fy/(b×d×fck)] = Mu",value:N.toFixed(1),unit:"mm²/m"});const W=Ie(m);let P=Math.floor(W.area*1e3/N/25)*25;const G=Math.min(Math.floor(3*b),300);P=Math.min(P,G);const z=W.area*1e3/P;f.push({step:g++,description:`Provide ${m}φ bars at spacing`,formula:`s = (Abar × 1000) / Ast = (${W.area.toFixed(1)} × 1000) / ${N.toFixed(1)}`,value:`${m}φ @ ${P} mm c/c (Ast_prov = ${z.toFixed(1)} mm²/m)`,unit:""});let j,O,V;const ie=b-m;if(v||k<=0){const re=Tt.slab[s]||.12;j=re/100*1e3*h,O=Math.floor(W.area*1e3/j/25)*25,O=Math.min(O,5*b,450,G),V=W.area*1e3/O,f.push({step:g++,description:"Distribution steel (Y-direction)",formula:`Ast_dist = ${re}% × b × D`,value:`${m}φ @ ${O} mm c/c (Ast = ${V.toFixed(1)} mm²/m)`,unit:""})}else j=R(k,1e3,ie,i,s),O=Math.floor(W.area*1e3/j/25)*25,O=Math.min(O,G),V=W.area*1e3/O,f.push({step:g++,description:"Required Ast in Y-direction (longer span)",formula:`Quadratic for My = ${k.toFixed(2)} kN·m/m, d' = ${ie.toFixed(1)} mm`,value:`${m}φ @ ${O} mm c/c (Ast = ${V.toFixed(1)} mm²/m)`,unit:""});const se=Tt.slab[s]||.12,H=se/100*1e3*h,K=z>=H,Q=V>=H;f.push({step:g++,description:"Minimum steel check",formula:`Ast_min = ${se}% × b × D = ${se}% × 1000 × ${h}`,value:`${H.toFixed(1)} mm²/m — X: ${K?"OK":"FAIL"}, Y: ${Q?"OK":"FAIL"}`,unit:""}),u.push({status:K&&Q?"pass":"fail",text:`Minimum steel check — Ast_min = ${H.toFixed(0)} mm²/m`,clause:"IS 456 Cl. 26.5.2.1"});const Y=P<=G,ne=O<=G;f.push({step:g++,description:"Maximum spacing check",formula:`s_max ≤ min(3d, 300) = min(${(3*b).toFixed(0)}, 300)`,value:`${G} mm — X: ${P} mm ${Y?"✓":"✗"}, Y: ${O} mm ${ne?"✓":"✗"}`,unit:""}),u.push({status:Y&&ne?"pass":"fail",text:`Maximum spacing — s_max = ${G} mm`,clause:"IS 456 Cl. 26.3.3"});const Z=l==9?20:26,xe=.58*s*(N/z),ee=z*100/(1e3*b),_e=Gt(xe,ee),Se=Z*_e,$e=a*1e3/b,Fe=$e<=Se;f.push({step:g++,description:"Deflection check (L/d ratio)",formula:`Allowable L/d = ${Z} × kt = ${Z} × ${_e.toFixed(2)}`,value:`Actual L/d = ${$e.toFixed(1)}, Allowable = ${Se.toFixed(1)} → ${Fe?"OK":"FAIL"}`,unit:""}),u.push({status:Fe?"pass":$e<=Se*1.05?"warn":"fail",text:`Deflection check — L/d = ${$e.toFixed(1)}, limit = ${Se.toFixed(1)}`,clause:"IS 456 Cl. 23.2.1"});const be=(F*a/2-F*b/1e3)*1e3/(1e3*b),Ke=z*100/(1e3*b),De=It(Ke,i),Be=be<=De;f.push({step:g++,description:"Shear check at d from support",formula:"τv = Vu/(b×d), τc from IS 456 Table 19",value:`τv = ${be.toFixed(3)} N/mm², τc = ${De.toFixed(3)} N/mm² → ${Be?"OK":"FAIL"}`,unit:""}),u.push({status:Be?"pass":"fail",text:`Shear check — τv (${be.toFixed(3)}) ${Be?"≤":">"} τc (${De.toFixed(3)}) N/mm²`,clause:"IS 456 Cl. 40.1, Table 19"});const Ye=Ut(i,!0),Oe=.87*s,Ne=m*Oe/(4*Ye),We=a*1e3/2,ze=Ne<=We;f.push({step:g++,description:"Development length check",formula:`Ld = φ × σs / (4 × τbd) = ${m} × ${Oe.toFixed(0)} / (4 × ${Ye.toFixed(2)})`,value:`Ld = ${Ne.toFixed(0)} mm → ${ze?"OK":"Increase anchorage"}`,unit:"mm"}),u.push({status:ze?"pass":"warn",text:`Development length — Ld = ${Ne.toFixed(0)} mm`,clause:"IS 456 Cl. 26.2.1"});const he=u.every(re=>re.status==="pass"),Me=u.some(re=>re.status==="fail");return{slabType:$,D_assumed:h,d:b,cover:p,wu:F,Mx_design:I,My_design:k,Ast_x:N,Ast_x_provided:z,spacing_x:P,Ast_y:j||H,Ast_y_provided:V,spacing_y:O,barDia:m,Ast_min:H,Ld:Ne,steps:f,compliance:u,overallStatus:Me?"fail":he?"pass":"warn",lyLxRatio:c,fck:i,fy:s}}function Wa(e){const a=document.getElementById("slab-results"),t=zt([{label:"Slab Type",value:e.slabType,sub:`Ly/Lx = ${e.lyLxRatio.toFixed(2)}`,status:"info"},{label:"Overall Depth",value:`${e.D_assumed} mm`,sub:`d_eff = ${e.d.toFixed(1)} mm`,status:e.overallStatus==="fail"?"fail":"pass"},{label:"Ast (X-dir)",value:`${e.Ast_x_provided.toFixed(0)} mm²/m`,sub:`${e.barDia}φ @ ${e.spacing_x} mm c/c`,status:e.Ast_x_provided>=e.Ast_min?"pass":"fail"},{label:"Ast (Y-dir)",value:`${e.Ast_y_provided.toFixed(0)} mm²/m`,sub:`${e.barDia}φ @ ${e.spacing_y} mm c/c`,status:e.Ast_y_provided>=e.Ast_min?"pass":"fail"},{label:"Status",value:e.overallStatus==="pass"?"✅ All OK":e.overallStatus==="warn"?"⚠️ Review":"❌ Revise",sub:`fck=${e.fck} N/mm², fy=${e.fy} N/mm²`,status:e.overallStatus}]),i=ue("Step-by-Step Calculation",e.steps),s=Fa("Design Summary — Reinforcement Details",["Direction","Ast Required (mm²/m)","Ast Provided (mm²/m)","Bar Dia","Spacing (mm)","Check"],[["X (shorter span)",e.Ast_x.toFixed(1),e.Ast_x_provided.toFixed(1),`${e.barDia} mm`,`${e.spacing_x} mm c/c`,e.Ast_x_provided>=e.Ast_x?{text:"✅ OK",status:"pass"}:{text:"❌ FAIL",status:"fail"}],["Y (longer span / dist.)",e.Ast_y.toFixed(1),e.Ast_y_provided.toFixed(1),`${e.barDia} mm`,`${e.spacing_y} mm c/c`,e.Ast_y_provided>=e.Ast_y?{text:"✅ OK",status:"pass"}:{text:"❌ FAIL",status:"fail"}]]),o=ve(e.compliance);a.innerHTML=`
    <div class="results-panel">
      <div class="results-panel__header">
        <h3>Design Results</h3>
      </div>
      ${t}
      ${i}
      ${s}
      ${o}
    </div>
  `,q([{label:"D",value:`${e.D_assumed} mm`},{label:"Ast_x",value:`${e.Ast_x_provided.toFixed(0)} mm²/m`},{label:"Spacing",value:`${e.barDia}φ@${e.spacing_x}`},{label:"Status",value:e.overallStatus==="pass"?"✅ OK":e.overallStatus==="warn"?"⚠️ Review":"❌ Revise"}])}const ct="singly-beam";function Va(e,a,t,i,s){const o=.87*s*t,l=s/(a*t*i),n=o*l,r=o,d=e*1e6,m=Math.pow(r,2)-4*n*d;return m<0?NaN:(r-Math.sqrt(m))/(2*n)}const Ha=[{id:"fck",label:"Concrete Grade (fck)",type:"select",default:25,options:Ae.map(e=>({value:e,label:`M${e}`})),tooltip:"Characteristic compressive strength of concrete at 28 days (IS 456 Cl. 6.2)"},{id:"fy",label:"Steel Grade (fy)",type:"select",default:415,options:Te.map(e=>({value:e,label:`Fe${e}`})),tooltip:"Yield strength of main reinforcement steel (IS 1786)"}],ja=[{id:"b",label:"Beam Width (b)",unit:"mm",default:230,min:150,max:1e3,step:10,tooltip:"Width of the rectangular beam cross-section"},{id:"overall_d",label:"Overall Depth (D)",unit:"mm",default:450,min:200,max:2e3,step:10,tooltip:"Total overall depth of the beam section"},{id:"cover",label:"Effective Cover (d')",unit:"mm",default:40,min:20,max:100,step:5,tooltip:"Distance from extreme tension fiber to centroid of tension reinforcement"}],Ka=[{id:"mu",label:"Factored Moment (Mu)",unit:"kN·m",default:75,min:1,max:5e3,step:1,tooltip:"Ultimate design bending moment acting on the section"},{id:"vu",label:"Factored Shear (Vu) (Optional)",unit:"kN",default:"",min:0,max:2e3,step:1,tooltip:"Leave blank if shear design is not required"},{id:"bar_dia",label:"Main Bar Diameter",unit:"mm",type:"select",default:16,options:[12,16,20,25,32].map(e=>{var a;return{value:e,label:`${e} mm (Ast = ${(a=Ie(e))==null?void 0:a.area.toFixed(1)} mm²)`}}),tooltip:"Preferred diameter of main tension reinforcement bars"}];function Ya(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#singly-beam-results");a||(a=document.createElement("div"),a.id="singly-beam-results",e.appendChild(a));const t=me(e),i=L(t.b,150,1e3,"Beam Width"),s=L(t.overall_d,200,2e3,"Overall Depth"),o=L(t.cover,20,100,"Effective Cover"),l=L(t.mu,1,5e3,"Factored Moment");if(!i.valid||!s.valid||!o.valid||!l.valid){X("Please correct invalid fields before calculating.","error");return}ae(ct,t);const n=parseFloat(t.b),r=parseFloat(t.overall_d),d=parseFloat(t.cover),m=parseFloat(t.mu),f=parseFloat(t.fck),u=parseFloat(t.fy),g=parseFloat(t.bar_dia),c=r-d;let v=[];v.push({step:1,title:"Effective Depth",formula:"d = D - d'",result:"d = "+r+" - "+d+" = "+c.toFixed(1)+' <span class="unit">mm</span>'});const $=Dt[u]||.479,_=$*c;v.push({step:2,title:"Limiting Neutral Axis",formula:"xu,max = "+$+" × d (for Fe"+u+")",result:"xu,max = "+_.toFixed(1)+' <span class="unit">mm</span>'});const h=.36*$*(1-.416*$)*f*n*c*c/1e6;v.push({step:3,title:"Limiting Moment Capacity",formula:"Mu,lim = 0.36×(xu,max/d)×(1 - 0.416×(xu,max/d))×fck×b×d²",result:"Mu,lim = "+h.toFixed(2)+' <span class="unit">kN·m</span>'});let p=!0,b=0;if(v.push({step:4,title:"Section Check",formula:"Compare Mu with Mu,lim",result:"Mu ("+m+" kN·m) "+(m>h?">":"≤")+" Mu,lim ("+h.toFixed(2)+" kN·m) "+(m>h?"→ <b>Requires Doubly Reinforced</b>":"→ <b>Singly Reinforced OK</b>")}),m>h)p=!1;else{b=Va(m,n,c,f,u),v.push({step:5,title:"Required Area of Tension Steel",formula:"Quadratic: 0.87×fy×Ast×d×[1 - Ast×fy/(b×d×fck)] = Mu",result:"Ast,req = "+b.toFixed(1)+' <span class="unit">mm²</span>'});const k=.85/u*100,E=.85*n*c/u;v.push({step:6,title:"Minimum Tension Steel",formula:"Ast,min = 0.85×b×d/fy",result:"Ast,min = "+E.toFixed(1)+' <span class="unit">mm²</span> ('+k.toFixed(2)+"%)"}),b<E&&(b=E,v.push({step:7,title:"Governing Required Ast",formula:"Ast = max(Ast, Ast_min)",result:"Ast = "+b.toFixed(1)+' <span class="unit">mm²</span>'}))}let x=0,S=0;const M=Ie(g);let F="pass",B="Design OK";if(p){x=Math.ceil(b/M.area),S=x*M.area,v.push({step:8,title:"Provide Reinforcement",formula:"N = ceil(Ast / Area_bar)",result:"Provide "+x+" - "+g+"φ ("+S.toFixed(1)+" mm² > "+b.toFixed(1)+" mm²)"});const k=.04*n*r;v.push({step:9,title:"Maximum Steel Check",formula:"Ast,max = 0.04×b×D",result:"Ast,prov ("+S.toFixed(1)+") "+(S<=k?"≤":">")+" Ast,max ("+k.toFixed(1)+")"}),S>k&&(F="fail",B="Max Steel Exceeded",p=!1)}else F="fail",B="Doubly Reinforced Required";const C=[{label:"Singly Reinforced Capacity",status:m<=h?"pass":"fail",text:"Mu ("+m.toFixed(1)+") ≤ Mu,lim ("+h.toFixed(1)+")",ref:"Annex G 1.1"}];p&&C.push({label:"Minimum Tension Steel",status:S>=.85*n*c/u?"pass":"fail",text:"Ast ("+S.toFixed(1)+") ≥ Ast,min ("+(.85*n*c/u).toFixed(1)+")",ref:"Cl. 26.5.1.1(a)"},{label:"Maximum Tension Steel",status:S<=.04*n*r?"pass":"fail",text:"Ast ("+S.toFixed(1)+") ≤ 0.04bD ("+(.04*n*r).toFixed(1)+")",ref:"Cl. 26.5.1.1(b)"});const D=[];p?D.push({label:"Effective Depth (d)",value:c.toFixed(1),unit:"mm"},{label:"Ast Required",value:b.toFixed(1),unit:"mm²"},{label:"Tension Bars",value:x+" - "+g+"φ",highlight:!0,status:"pass"},{label:"Ast Provided",value:S.toFixed(1),unit:"mm²"}):D.push({label:"Section Capacity",value:"Exceeded",status:"fail",highlight:!0},{label:"Mu,lim",value:h.toFixed(1),unit:"kN·m"},{label:"Resolution",value:"Use Doubly Reinforced",highlight:!0});const A=`
    <div class="calculator-layout">
      <div class="results-main">
        ${de(D)}
        
        ${p?`
        <div class="graphics-box" style="margin-bottom: var(--spacing-lg); padding: var(--spacing-lg); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border); text-align: center;">
          <h3 style="margin-bottom: var(--spacing-md); color: var(--text-muted); font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em;">Beam Cross-Section</h3>
          <div style="display: inline-block; position: relative; border: 3px solid var(--text-primary); width: 140px; height: ${Math.max(140,Math.min(250,r/n*140))}px; border-radius: 4px; background: rgba(255,255,255,0.05);">
            <!-- Dimensions -->
            <div style="position: absolute; top: -25px; left: 0; width: 100%; text-align: center; color: var(--text-muted); font-size: 0.875rem;">${n} mm</div>
            <div style="position: absolute; right: -50px; top: 0; height: 100%; display: flex; align-items: center; color: var(--text-muted); font-size: 0.875rem;">${r}<br>mm</div>
            
            <!-- Bars -->
            <div style="position: absolute; bottom: ${Math.max(10,d/r*100)}%; left: 10%; width: 80%; display: flex; justify-content: space-around;">
              ${Array(x).fill(0).map(()=>'<div style="width: 14px; height: 14px; border-radius: 50%; background: var(--color-accent);"></div>').join("")}
            </div>
          </div>
          <div style="margin-top: var(--spacing-md); color: var(--color-accent); font-weight: 500;">
            Provide ${x} - ${g}φ at bottom
          </div>
        </div>
        `:""}
        
        ${ue("Calculation Steps",v)}
      </div>
      <div class="results-sidebar">
        ${ve(C)}
      </div>
    </div>
  `;a.innerHTML=A;const I=`
    <div class="sticky-item"><span>Section:</span> <strong>${n} × ${r}</strong> mm</div>
    ${p?`
      <div class="sticky-item"><span>Bars:</span> <strong>${x} - ${g}φ</strong></div>
      <div class="sticky-item"><span>Ast Provided:</span> <strong>${S.toFixed(1)}</strong> mm²</div>
    `:'<div class="sticky-item"><span>Status:</span> <strong style="color: var(--color-error)">Requires Doubly Reinforced</strong></div>'}
    <div class="sticky-status ${F}">
      <span>Status:</span>
      <strong>${F==="pass"?"✅ OK":"❌ "+B}</strong>
    </div>
  `;document.getElementById("sticky-results-content").innerHTML=I,document.getElementById("sticky-bar").classList.add("visible"),a.scrollIntoView({behavior:"smooth",block:"start"})}function Kt(e){e.innerHTML=`
    <div class="calculator-page" id="singly-beam-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Singly Reinforced Beam</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Singly Reinforced Beam Design</h2>
        <p>Design a rectangular beam cross-section with tension reinforcement only, following IS 456:2000 Annex G limitations.</p>
        <span class="calculator-page__code-ref">
          ${y.info} IS 456:2000 — Annex G, Cl. 38.1
        </span>
      </div>

      ${te(["Section is subjected to uniaxial bending only","Tension reinforcement only (No compression steel designed)","Concrete stress block is parabolic-rectangular per IS 456 Cl. 38.1(c)","Maximum strain in concrete at outermost compression fiber is 0.0035","Tensile strength of concrete is entirely ignored"])}

      ${w("Material Properties",Ha,y.info)}
      ${w("Section Geometry",ja,y.building)}
      ${w("Design Limit States",Ka,y.calculator)}

      ${oe()}

      <div id="singly-beam-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,e.querySelector("#btn-calculate").addEventListener("click",Ya),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+ct),Kt(e),document.getElementById("sticky-bar").classList.remove("visible")});const a=le(ct);a&&ce(e,a)}const dt="doubly-beam";function Za(e,a){return e===415?a<=.05?355:a<=.1?353*(1-(a-.05)/.05)+342*((a-.05)/.05):a<=.15?342*(1-(a-.1)/.05)+329*((a-.1)/.05):a<=.2?329*(1-(a-.15)/.05)+314*((a-.15)/.05):314:e===500?a<=.05?424:a<=.1?412*(1-(a-.05)/.05)+395*((a-.05)/.05):a<=.15?395*(1-(a-.1)/.05)+370*((a-.1)/.05):a<=.2?370*(1-(a-.15)/.05)+342*((a-.15)/.05):342:.87*e}const Xa=[{id:"fck",label:"Concrete Grade (fck)",type:"select",default:25,options:Ae.map(e=>({value:e,label:`M${e}`})),tooltip:"Characteristic compressive strength of concrete at 28 days"},{id:"fy",label:"Steel Grade (fy)",type:"select",default:415,options:Te.map(e=>({value:e,label:`Fe${e}`})),tooltip:"Yield strength of reinforcement steel"}],Qa=[{id:"b",label:"Beam Width (b)",unit:"mm",default:230,min:150,max:1e3,step:10,tooltip:"Width of the rectangular beam cross-section"},{id:"overall_d",label:"Overall Depth (D)",unit:"mm",default:450,min:200,max:2e3,step:10,tooltip:"Total overall depth of the beam section"},{id:"cover_t",label:"Tension Cover (d')",unit:"mm",default:50,min:20,max:100,step:5,tooltip:"Effective cover to center of tension reinforcement"},{id:"cover_c",label:"Compression Cover (d')",unit:"mm",default:40,min:20,max:100,step:5,tooltip:"Effective cover to center of compression reinforcement"}],Ja=[{id:"mu",label:"Factored Moment (Mu)",unit:"kN·m",default:250,min:1,max:5e3,step:1,tooltip:"Ultimate design bending moment acting on the section"},{id:"bar_dia_t",label:"Tension Bar Dia",unit:"mm",type:"select",default:20,options:[16,20,25,32].map(e=>({value:e,label:`${e} mm`})),tooltip:"Preferred diameter of tension reinforcement bars"},{id:"bar_dia_c",label:"Compression Bar Dia",unit:"mm",type:"select",default:16,options:[12,16,20,25].map(e=>({value:e,label:`${e} mm`})),tooltip:"Preferred diameter of compression reinforcement bars"}];function ei(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#doubly-beam-results");a||(a=document.createElement("div"),a.id="doubly-beam-results",e.appendChild(a));const t=me(e),i=L(t.b,150,1e3,"Beam Width"),s=L(t.overall_d,200,2e3,"Overall Depth"),o=L(t.cover_t,20,100,"Tension Cover"),l=L(t.cover_c,20,100,"Compression Cover"),n=L(t.mu,1,5e3,"Factored Moment");if(!i.valid||!s.valid||!o.valid||!l.valid||!n.valid){X("Please correct invalid fields before calculating.","error");return}ae(dt,t);const r=parseFloat(t.b),d=parseFloat(t.overall_d),m=parseFloat(t.cover_t),f=parseFloat(t.cover_c),u=parseFloat(t.mu),g=parseFloat(t.fck),c=parseFloat(t.fy),v=parseFloat(t.bar_dia_t),$=parseFloat(t.bar_dia_c),_=d-m;let h=[];h.push({step:1,title:"Effective Depth",formula:"d = D - d_t",result:"d = "+d+" - "+m+" = "+_.toFixed(1)+' <span class="unit">mm</span>'});const p=Dt[c]||.479,b=p*_,x=.36*p*(1-.416*p)*g*r*_*_/1e6;h.push({step:2,title:"Limiting Capacity (Singly)",formula:"Mu,lim = 0.36×(xu,max/d)×(1 - 0.416×(xu,max/d))×fck×b×d²",result:"Mu,lim = "+x.toFixed(2)+' <span class="unit">kN·m</span>'});let S=0,M=0,F=0;if(u<=x){h.push({step:3,title:"Section Type Check",formula:"Mu vs Mu,lim",result:"Mu ("+u+") ≤ Mu,lim ("+x.toFixed(2)+") → <b>Design as Singly Reinforced</b>. Proceeding with Ast1."});const P=.87*c*_,G=c/(r*_*g),z=P*G,j=P,O=u*1e6,V=Math.pow(j,2)-4*z*O;S=(j-Math.sqrt(V))/(2*z),h.push({step:4,title:"Required Tension Steel",formula:"0.87×fy×Ast×d×[1 - Ast×fy/(b×d×fck)] = Mu",result:"Ast = "+S.toFixed(1)+' <span class="unit">mm²</span>'})}else{h.push({step:3,title:"Section Type Check",formula:"Mu vs Mu,lim",result:"Mu ("+u+") > Mu,lim ("+x.toFixed(2)+") → <b>Design as Doubly Reinforced</b>"});const P=Math.max(0,u-x);h.push({step:4,title:"Excess Moment (Mu2)",formula:"Mu2 = Mu - Mu,lim",result:"Mu2 = "+u+" - "+x.toFixed(2)+" = "+P.toFixed(2)+' <span class="unit">kN·m</span>'}),S=x*1e6/(.87*c*(_-.416*b)),h.push({step:5,title:"Tension Steel for Mu,lim (Ast1)",formula:"Ast1 = Mu,lim / [0.87×fy×(d - 0.416×xu,max)]",result:"Ast1 = "+S.toFixed(1)+' <span class="unit">mm²</span>'});const G=f/_,z=Za(c,G),j=.446*g;h.push({step:6,title:"Stress in Comp. Steel (fsc)",formula:"Interpolated from SP 16 Table F (using d'/d = "+G.toFixed(3)+")",result:"fsc = "+z.toFixed(1)+' <span class="unit">N/mm²</span>'}),F=P*1e6/((z-j)*(_-f)),h.push({step:7,title:"Compression Steel Area (Asc)",formula:"Asc = Mu2 / [(fsc - fcc)×(d - d')]",result:"Asc = "+F.toFixed(1)+' <span class="unit">mm²</span>'}),M=F*(z-j)/(.87*c),h.push({step:8,title:"Additional Tension Steel (Ast2)",formula:"Ast2 = Asc×(fsc - fcc) / (0.87×fy)",result:"Ast2 = "+M.toFixed(1)+' <span class="unit">mm²</span>'})}const B=S+M;u>x&&h.push({step:9,title:"Total Tension Steel (Ast)",formula:"Ast = Ast1 + Ast2",result:"Ast = "+S.toFixed(1)+" + "+M.toFixed(1)+" = "+B.toFixed(1)+' <span class="unit">mm²</span>'});const C=Ie(v),D=Ie($),A=Math.ceil(B/C.area),I=Math.max(.85*r*_/c,A*C.area);let k=0,E=0;F>0&&(k=Math.max(2,Math.ceil(F/D.area)),E=k*D.area),h.push({step:u>x?10:5,title:"Provide Reinforcement",formula:"N = ceil(Area / Area_bar)",result:"Tension: Provide "+A+" - "+v+"φ ("+I.toFixed(1)+" mm²)<br>"+(F>0?"Compression: Provide "+k+" - "+$+"φ ("+E.toFixed(1)+" mm²)":"")});const T=.04*r*d;let U="pass";(I>T||E>T)&&(U="fail");const R=[{label:"Minimum Tension Steel",status:I>=.85*r*_/c?"pass":"fail",text:"Ast ("+I.toFixed(1)+") ≥ "+(.85*r*_/c).toFixed(1),ref:"Cl. 26.5.1.1(a)"},{label:"Maximum Tension Steel",status:I<=T?"pass":"fail",text:"Ast ("+I.toFixed(1)+") ≤ "+T.toFixed(1),ref:"Cl. 26.5.1.1(b)"}];F>0&&R.push({label:"Maximum Compression Steel",status:E<=T?"pass":"fail",text:"Asc ("+E.toFixed(1)+") ≤ "+T.toFixed(1),ref:"Cl. 26.5.1.2"});const N=[{label:"Ast Required",value:B.toFixed(1),unit:"mm²"},{label:"Tension Bars",value:A+" - "+v+"φ",highlight:!0,status:I<=T?"pass":"fail"}];F>0?N.push({label:"Asc Required",value:F.toFixed(1),unit:"mm²"},{label:"Compression Bars",value:k+" - "+$+"φ",highlight:!0,status:E<=T?"pass":"fail"}):N.push({label:"Asc Required",value:"0.0",unit:"mm²"},{label:"Compression Bars",value:"Nominal"});const W=`
    <div class="calculator-layout">
      <div class="results-main">
        ${de(N)}
        
        <div class="graphics-box" style="margin-bottom: var(--spacing-lg); padding: var(--spacing-lg); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border); text-align: center;">
          <h3 style="margin-bottom: var(--spacing-md); color: var(--text-muted); font-size: 0.875rem; text-transform: uppercase;">Beam Cross-Section</h3>
          <div style="display: inline-block; position: relative; border: 3px solid var(--text-primary); width: 140px; height: ${Math.max(140,Math.min(250,d/r*140))}px; border-radius: 4px; background: rgba(255,255,255,0.05);">
            <!-- Dimensions -->
            <div style="position: absolute; top: -25px; left: 0; width: 100%; text-align: center; color: var(--text-muted); font-size: 0.875rem;">${r} mm</div>
            <div style="position: absolute; right: -50px; top: 0; height: 100%; display: flex; align-items: center; color: var(--text-muted); font-size: 0.875rem;">${d}<br>mm</div>
            
            <!-- Comp Bars -->
            ${F>0?`
            <div style="position: absolute; top: ${Math.max(10,f/d*100)}%; left: 10%; width: 80%; display: flex; justify-content: space-around;">
              ${Array(k).fill(0).map(()=>'<div style="width: 12px; height: 12px; border-radius: 50%; background: var(--text-secondary);"></div>').join("")}
            </div>`:""}
            
            <!-- Tension Bars -->
            <div style="position: absolute; bottom: ${Math.max(10,m/d*100)}%; left: 10%; width: 80%; display: flex; justify-content: space-around;">
              ${Array(A).fill(0).map(()=>'<div style="width: 14px; height: 14px; border-radius: 50%; background: var(--color-accent);"></div>').join("")}
            </div>
          </div>
          
          <div style="margin-top: var(--spacing-md); display: flex; justify-content: space-around; font-weight: 500;">
            ${F>0?`<div style="color: var(--text-secondary);">Top: ${k} - ${$}φ</div>`:""}
            <div style="color: var(--color-accent);">Bottom: ${A} - ${v}φ</div>
          </div>
        </div>
        
        ${ue("Calculation Steps",h)}
      </div>
      <div class="results-sidebar">
        ${ve(R)}
      </div>
    </div>
  `;a.innerHTML=W,q([{label:"Section",value:`${r} × ${d}`},{label:"Bottom",value:`${A} - ${v}φ`},F>0?{label:"Top",value:`${k} - ${$}φ`}:null,{label:"Status",value:U==="pass"?"OK":"FAIL",status:U}].filter(Boolean)),a.scrollIntoView({behavior:"smooth",block:"start"})}function Yt(e){e.innerHTML=`
    <div class="calculator-page" id="doubly-beam-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Doubly Reinforced Beam</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Doubly Reinforced Beam Design</h2>
        <p>Design a rectangular beam cross-section with both compression and tension reinforcement, required when the factored moment exceeds the limiting moment capacity of the section.</p>
        <span class="calculator-page__code-ref">
          ${y.info} IS 456:2000 — Annex G, Cl. 1.2
        </span>
      </div>

      ${te(["Section is subjected to uniaxial bending only","Used when section dimensions are restricted and Mu > Mu,lim","Concrete stress block is parabolic-rectangular per IS 456 Cl. 38.1","Stress in compression steel (fsc) is interpolated from SP-16 Table F","Contribution of concrete displaced by compression steel is accounted for"])}

      ${w("Material Properties",Xa,y.info)}
      ${w("Section Geometry",Qa,y.building)}
      ${w("Design Limit States",Ja,y.calculator)}

      ${oe()}

      <div id="doubly-beam-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,e.querySelector("#btn-calculate").addEventListener("click",ei),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+dt),Yt(e),q([])});const a=le(dt);a&&ce(e,a)}const ut="t-beam";function Pt(e,a,t){const i=Math.pow(a,2)-4*e*t;return i<0?NaN:(a-Math.sqrt(i))/(2*e)}const ti=[{id:"fck",label:"Concrete Grade (fck)",type:"select",default:25,options:Ae.map(e=>({value:e,label:`M${e}`})),tooltip:"Characteristic compressive strength"},{id:"fy",label:"Steel Grade (fy)",type:"select",default:415,options:Te.map(e=>({value:e,label:`Fe${e}`})),tooltip:"Yield strength of reinforcement"}],ai=[{id:"bf",label:"Effective Flange (bf)",unit:"mm",default:1200,min:200,max:5e3,step:10,tooltip:"Calculated effective width of the flange"},{id:"df",label:"Flange Thickness (Df)",unit:"mm",default:120,min:50,max:500,step:5,tooltip:"Thickness of the slab/flange portion"},{id:"bw",label:"Web Width (bw)",unit:"mm",default:230,min:150,max:1e3,step:10,tooltip:"Width of the beam rib/web"},{id:"overall_d",label:"Overall Depth (D)",unit:"mm",default:450,min:200,max:2e3,step:10,tooltip:"Total overall depth of the beam section"},{id:"cover",label:"Effective Cover (d')",unit:"mm",default:50,min:20,max:100,step:5,tooltip:"Effective cover to center of reinforcement"}],ii=[{id:"mu",label:"Factored Moment (Mu)",unit:"kN·m",default:300,min:1,max:1e4,step:1,tooltip:"Ultimate design bending moment acting on the section"},{id:"bar_dia",label:"Tension Bar Dia",unit:"mm",type:"select",default:20,options:[16,20,25,32].map(e=>({value:e,label:`${e} mm`})),tooltip:"Preferred diameter of tension bars"}];function si(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#t-beam-results");a||(a=document.createElement("div"),a.id="t-beam-results",e.appendChild(a));const t=me(e),i=L(t.bf,200,5e3,"Flange Width"),s=L(t.df,50,500,"Flange Thickness"),o=L(t.bw,150,2e3,"Web Width"),l=L(t.overall_d,200,2e3,"Overall Depth"),n=L(t.cover,20,100,"Effective Cover"),r=L(t.mu,1,1e4,"Factored Moment");if(!i.valid||!s.valid||!o.valid||!l.valid||!n.valid||!r.valid){X("Please correct invalid fields before calculating.","error");return}ae(ut,t);const d=parseFloat(t.bf),m=parseFloat(t.df),f=parseFloat(t.bw),u=parseFloat(t.overall_d),g=parseFloat(t.cover),c=parseFloat(t.mu),v=parseFloat(t.fck),$=parseFloat(t.fy),_=parseFloat(t.bar_dia),h=u-g;if(d<=f){X("Flange width (bf) must be greater than web width (bw).","error");return}if(m>=h){X("Flange thickness (Df) must be less than effective depth (d).","error");return}let p=[];p.push({step:1,title:"Effective Depth",formula:"d = D - d'",result:"d = "+u+" - "+g+" = "+h.toFixed(1)+' <span class="unit">mm</span>'});const b=Dt[$]||.479,x=b*h;p.push({step:2,title:"Limiting Neutral Axis",formula:"xu,max = "+b+" × d",result:"xu,max = "+x.toFixed(1)+' <span class="unit">mm</span>'});const S=.36*v*d*m*(h-.42*m)/1e6;p.push({step:3,title:"Moment Capacity if NA is at Flange Bottom",formula:"Mu,f = 0.36×fck×bf×Df×(d - 0.42×Df)",result:"Mu,Df = "+S.toFixed(2)+' <span class="unit">kN·m</span>'});let M=0,F="",B=!0,C=0,D="pass";if(c<=S){F="Case 1: NA in Flange",p.push({step:4,title:"Determine Section Behavior",formula:"Mu vs Mu,Df",result:"Mu ("+c+") ≤ Mu,Df ("+S.toFixed(2)+") → Neutral Axis in Flange. Design as rectangular beam of width bf."});const R=.87*$*h,N=$/(d*h*v),W=R*N,P=R,G=c*1e6;M=Pt(W,P,G),C=.87*$*M/(.36*v*d),p.push({step:5,title:"Required Area of Tension Steel",formula:"Quadratic: 0.87×fy×Ast×d×[1 - Ast×fy/(bf×d×fck)] = Mu",result:"Ast = "+M.toFixed(1)+' <span class="unit">mm²</span> (xu = '+C.toFixed(1)+" mm)"})}else{F="Case 2: NA in Web",p.push({step:4,title:"Determine Section Behavior",formula:"Mu vs Mu,Df",result:"Mu ("+c+") > Mu,Df ("+S.toFixed(2)+") → Neutral Axis in Web. Flanged beam analysis required."});const R=m/h;R<=.2?p.push({step:5,title:"Check Flange Thickness Ratio",formula:"Df / d",result:"Df/d = "+R.toFixed(3)+" ≤ 0.2 → Uniform compressive stress in flange (yf = Df = "+m+" mm)"}):p.push({step:5,title:"Check Flange Thickness Ratio",formula:"Df / d",result:"Df/d = "+R.toFixed(3)+" > 0.2 → Non-uniform stress. Using equivalent flange thickness yf."});const N=.36*b*(1-.416*b)*v*f*h*h,W=R<=.2?m:.15*x+.65*m,P=.446*v*(d-f)*W*(h-W/2),G=(N+P)/1e6;if(p.push({step:6,title:"Limiting Moment Capacity",formula:"Mu,lim = Mu,lim,web + 0.45×fck×(bf-bw)×yf×(d - yf/2)",result:"Mu,lim = "+G.toFixed(2)+' <span class="unit">kN·m</span>'}),c>G)B=!1,D="fail",p.push({step:7,title:"Section Check",formula:"Mu vs Mu,lim",result:"Mu ("+c+") > Mu,lim ("+G.toFixed(2)+") → <b>Doubly Reinforced T-Beam Required</b> (Beyond scope of simple calculator)."});else{let z=m;for(let ie=0;ie<20;ie++){let se=m;R>.2&&m/z>.43&&(se=.15*z+.65*m),se=Math.min(se,m);const H=.446*v*(d-f)*se*(h-se/2),K=c*1e6-H,Q=.36*v*f*.42,Y=.36*v*f*h;let Z=Pt(Q,Y,K);if(Math.abs(Z-z)<.1){z=Z;break}z=Z}C=z;const j=R<=.2||m/C<=.43?m:.15*C+.65*m,O=.36*v*f*C,V=.446*v*(d-f)*j;M=(O+V)/(.87*$),p.push({step:7,title:"Calculate Neutral Axis & Ast",formula:"C = T → C_web + C_flange = 0.87×fy×Ast",result:"xu = "+C.toFixed(1)+" mm <br>Ast = "+M.toFixed(1)+' <span class="unit">mm²</span>'})}}let A=0,I=0;const k=Ie(_);if(B){const R=.85*f*h/$;M=Math.max(M,R),A=Math.ceil(M/k.area),I=A*k.area,p.push({step:8,title:"Provide Reinforcement",formula:"N = ceil(Ast / Area_bar)",result:"Provide "+A+" - "+_+"φ ("+I.toFixed(1)+" mm²)"});const N=.04*f*u;I>N&&(D="fail")}const E=[];B&&E.push({label:"Minimum Tension Steel (Web)",status:I>=.85*f*h/$?"pass":"fail",text:"Ast ("+I.toFixed(1)+") ≥ "+(.85*f*h/$).toFixed(1),ref:"Cl. 26.5.1.1(a)"},{label:"Neutral Axis Limit",status:C<=x?"pass":"fail",text:"xu ("+C.toFixed(1)+") ≤ xu,max ("+x.toFixed(1)+")",ref:"Annex G 1.1"});const T=[];B?T.push({label:"Analysis Case",value:F,highlight:!0},{label:"Neutral Axis (xu)",value:C.toFixed(1),unit:"mm"},{label:"Ast Required",value:M.toFixed(1),unit:"mm²"},{label:"Tension Bars",value:A+" - "+_+"φ",highlight:!0,status:"pass"}):T.push({label:"Section Capacity",value:"Exceeded",status:"fail",highlight:!0},{label:"Resolution",value:"Increase D or b, or redesign",highlight:!0});const U=`
    <div class="calculator-layout">
      <div class="results-main">
        ${de(T)}
        
        ${B?`
        <div class="graphics-box" style="margin-bottom: var(--spacing-lg); padding: var(--spacing-lg); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border); text-align: center;">
          <h3 style="margin-bottom: var(--spacing-md); color: var(--text-muted); font-size: 0.875rem; text-transform: uppercase;">T-Beam Cross-Section</h3>
          <!-- T-Beam SVG -->
          <svg width="200" height="200" viewBox="0 0 200 200" style="margin: 0 auto; display: block;">
            <!-- Define Flange relative width: let's cap it visually -->
            <!-- We will use a fixed visual scale for aesthetics -->
            <path d="M 10,20 L 190,20 L 190,60 L 130,60 L 130,180 L 70,180 L 70,60 L 10,60 Z" fill="rgba(255,255,255,0.05)" stroke="var(--text-primary)" stroke-width="3"/>
            
            <!-- Dimensions -->
            <text x="100" y="12" fill="var(--text-muted)" font-size="10" text-anchor="middle">${d} mm</text>
            <text x="195" y="45" fill="var(--text-muted)" font-size="10" text-anchor="start">Df = ${m}</text>
            <text x="100" y="195" fill="var(--text-muted)" font-size="10" text-anchor="middle">bw = ${f}</text>
            <text x="25" y="120" fill="var(--text-muted)" font-size="10" text-anchor="middle">D = ${u}</text>
            
            <!-- Bars -->
            ${Array(A).fill(0).map((R,N)=>`<circle cx="${80+N*40/Math.max(1,A-1)}" cy="165" r="4" fill="var(--color-accent)"/>`).join("")}
          </svg>
          <div style="margin-top: var(--spacing-md); color: var(--color-accent); font-weight: 500;">
            Provide ${A} - ${_}φ at bottom
          </div>
        </div>
        `:""}
        
        ${ue("Calculation Steps",p)}
      </div>
      <div class="results-sidebar">
        ${ve(E)}
      </div>
    </div>
  `;a.innerHTML=U,q([{label:"Flange",value:`${d} × ${m} mm`},{label:"Web",value:`${f} × ${u} mm`},B?{label:"Bars",value:`${A} - ${_}φ`}:null,{label:"Status",value:D==="pass"?"OK":"FAIL",status:D}].filter(Boolean)),a.scrollIntoView({behavior:"smooth",block:"start"})}function Zt(e){e.innerHTML=`
    <div class="calculator-page" id="t-beam-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — T-Beam Design</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>T-Beam / L-Beam Design</h2>
        <p>Design a flanged beam comparing the position of the neutral axis with the flange thickness.</p>
        <span class="calculator-page__code-ref">
          ${y.info} IS 456:2000 — Annex G 2.2
        </span>
      </div>

      ${te(["T-Beam section with uniform flange thickness Df","Effective flange width (bf) calculated externally per Cl 23.1.2","Section designed as singly reinforced (Doubly reinforced flanged beams require manual derivation)","Concrete stress block properties identical to rectangular section analysis","Equivalent flange thickness (yf) used when NA falls in web and Df/d > 0.2"])}

      ${w("Material Properties",ti,y.info)}
      ${w("Geometry & Flange",ai,y.building)}
      ${w("Design Limit States",ii,y.calculator)}

      ${oe()}

      <div id="t-beam-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,e.querySelector("#btn-calculate").addEventListener("click",si),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+ut),Zt(e),q([])});const a=le(ut);a&&ce(e,a)}const mt="short-column",li=[{id:"fck",label:"Concrete Grade (fck)",type:"select",default:25,options:Ae.map(e=>({value:e,label:`M${e}`})),tooltip:"Characteristic compressive strength"},{id:"fy",label:"Steel Grade (fy)",type:"select",default:500,options:Te.map(e=>({value:e,label:`Fe${e}`})),tooltip:"Yield strength of reinforcement"}],oi=[{id:"b",label:"Width (b)",unit:"mm",default:300,min:200,max:2e3,step:10,tooltip:"Width of the column cross-section"},{id:"d",label:"Depth (D)",unit:"mm",default:450,min:200,max:2e3,step:10,tooltip:"Depth of the column cross-section"},{id:"lx",label:"Unsupported Length (x)",unit:"m",default:3,min:.5,max:10,step:.1,tooltip:"Unbraced length about major axis"},{id:"ly",label:"Unsupported Length (y)",unit:"m",default:3,min:.5,max:10,step:.1,tooltip:"Unbraced length about minor axis"},{id:"cover",label:"Clear Cover",unit:"mm",default:40,min:20,max:100,step:5,tooltip:"Clear cover to reinforcement ties"}],ni=[{id:"pu",label:"Factored Axial Load (Pu)",unit:"kN",default:1500,min:10,max:2e4,step:10,tooltip:"Factored compressive design load"},{id:"bar_dia",label:"Longitudinal Bar Dia",unit:"mm",type:"select",default:16,options:[12,16,20,25,32].map(e=>({value:e,label:`${e} mm`})),tooltip:"Preferred diameter for main bars"},{id:"tie_dia",label:"Lateral Tie Dia",unit:"mm",type:"select",default:8,options:[8,10,12].map(e=>({value:e,label:`${e} mm`})),tooltip:"Transverse reinforcement diameter"}];function ri(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#short-column-results");a||(a=document.createElement("div"),a.id="short-column-results",e.appendChild(a));const t=me(e),i=L(t.b,200,2e3,"Width"),s=L(t.d,200,2e3,"Depth"),o=L(t.lx,.5,10,"Length X"),l=L(t.ly,.5,10,"Length Y"),n=L(t.pu,10,2e4,"Axial Load");if(!i.valid||!s.valid||!o.valid||!l.valid||!n.valid){X("Please correct invalid fields before calculating.","error");return}ae(mt,t);const r=parseFloat(t.b),d=parseFloat(t.d),m=parseFloat(t.lx)*1e3,f=parseFloat(t.ly)*1e3,u=parseFloat(t.pu)*1e3,g=parseFloat(t.cover),c=parseFloat(t.fck),v=parseFloat(t.fy),$=parseFloat(t.bar_dia),_=parseFloat(t.tie_dia),h=r*d;let p=[];const b=m/d,x=f/r;p.push({step:1,title:"Slenderness Check",formula:"Ratio = L / b or D",result:"λx = "+m+" / "+d+" = "+b.toFixed(2)+"<br>λy = "+f+" / "+r+" = "+x.toFixed(2)});let S=!0;(b>12||x>12)&&(S=!1),p.push({step:2,title:"Column Type",formula:"λ ≤ 12 for Short Column",result:S?"Both λx, λy ≤ 12 → <b>Short Column</b>":"Slenderness > 12 → <b>Long Column</b> (Design logic proceeds as Short for approximation, but moments should be amplified)"});const M=Math.max(m/500+d/30,20),F=Math.max(f/500+r/30,20);p.push({step:3,title:"Minimum Eccentricity",formula:"emin = max(L/500 + D/30, 20)",result:"ex,min = "+M.toFixed(1)+" mm (Allowed: "+(.05*d).toFixed(1)+" mm)<br>ey,min = "+F.toFixed(1)+" mm (Allowed: "+(.05*r).toFixed(1)+" mm)"});const B=M<=.05*d&&F<=.05*r;p.push({step:4,title:"Eccentricity Condition Check",formula:"emin ≤ 0.05 D",result:B?"Condition met. We can use simplified axial load formula.":"Condition NOT met. Requires rigorous analysis with bending moments. Using basic formula as approximation."});let C=(u-.4*c*h)/(.67*v-.4*c);const D=.008*h;C<D?(p.push({step:5,title:"Required Steel Area",formula:"Pu = 0.4 fck Ac + 0.67 fy Asc",result:"Calculated Asc < 0.8% limiting value. Provide min steel."}),C=D):p.push({step:5,title:"Required Steel Area",formula:"Asc = (Pu - 0.4 fck Ag) / (0.67 fy - 0.4 fck)",result:"Asc,req = "+C.toFixed(1)+' <span class="unit">mm²</span>'}),C=Math.max(C,D),p.push({step:6,title:"Minimum Steel (0.8%)",formula:"Asc,min = 0.008 × Ag",result:"Asc,min = "+D.toFixed(1)+' <span class="unit">mm²</span>'});const A=Ie($);let I=4,k=Math.ceil(C/A.area);k%2!==0&&(k+=1),k=Math.max(k,I);const E=k*A.area,T=E/h*100;p.push({step:7,title:"Provide Longitudinal Reinforcement",formula:"N = ceil(Asc / Area_bar)",result:"Provide "+k+" - "+$+"φ ("+E.toFixed(1)+" mm² = "+T.toFixed(2)+"%)"});const U=.06*h,R=.04*h;let N="pass";E>U?N="fail":E>R&&(N="warning");const W=Math.max($/4,6),P=_>=W?_:Math.ceil(W),G=r,z=16*$,O=Math.floor(Math.min(G,z,300)/10)*10;p.push({step:8,title:"Lateral Ties Diameter",formula:"dia ≥ max(φ_main / 4, 6mm)",result:"Required ≥ "+W.toFixed(1)+" mm. Adopt "+P+"φ"}),p.push({step:9,title:"Tie Spacing (Pitch)",formula:"min(b, 16×φ_main, 300)",result:"s = min("+r+", "+16*$+", 300) = "+O+" mm"});const V=(.4*c*(h-E)+.67*v*E)/1e3;p.push({step:10,title:"Actual Load Capacity",formula:"Pu,cap = 0.4 fck (Ag - Asc,prov) + 0.67 fy Asc,prov",result:"Pu,cap = "+V.toFixed(1)+" kN ("+(V>=t.pu?"Safe":"Unsafe")+")"});const ie=[{label:"Slenderness X",status:b<=12?"pass":"warning",text:"λx = "+b.toFixed(1)+" (≤ 12 for short)",ref:"Cl. 25.1.2"},{label:"Slenderness Y",status:x<=12?"pass":"warning",text:"λy = "+x.toFixed(1)+" (≤ 12 for short)",ref:"Cl. 25.1.2"},{label:"Min Eccentricity X",status:M<=.05*d?"pass":"warning",text:"ex = "+M.toFixed(1)+" (≤ "+(.05*d).toFixed(1)+")",ref:"Cl. 39.3"},{label:"Min Eccentricity Y",status:F<=.05*r?"pass":"warning",text:"ey = "+F.toFixed(1)+" (≤ "+(.05*r).toFixed(1)+")",ref:"Cl. 39.3"},{label:"Longitudinal Steel limit",status:T>=.8&&T<=6?"pass":"fail",text:T.toFixed(2)+"% (limit: 0.8% - 6.0%)",ref:"Cl. 26.5.3.1"}],se=[{label:"Calculated Capacity",value:V.toFixed(1),unit:"kN"},{label:"Longitudinal Bars",value:k+" - "+$+"φ",highlight:!0,status:N},{label:"Ast Percentage",value:T.toFixed(2),unit:"%"},{label:"Lateral Ties",value:P+"φ @ "+O+"c/c",highlight:!0,status:"pass"}],H=[],K=10+g/r*80,Q=90-g/r*80,Y=10+g/d*80,ne=90-g/d*80;H.push({x:K,y:Y}),H.push({x:Q,y:Y}),H.push({x:Q,y:ne}),H.push({x:K,y:ne});const Z=k-4;if(Z>0){const ee=Math.floor(Z/2)+Z%2,_e=Z-ee,Se=Math.floor(ee/2);for(let Fe=1;Fe<=Se;Fe++){const Ce=Fe/(Se+1),be=Y+Ce*(ne-Y);H.push({x:K,y:be}),H.push({x:Q,y:be})}ee%2!==0&&H.push({x:K,y:Y+.5*(ne-Y)});const $e=Math.floor(_e/2);for(let Fe=1;Fe<=$e;Fe++){const Ce=Fe/($e+1),be=K+Ce*(Q-K);H.push({x:be,y:Y}),H.push({x:be,y:ne})}_e%2!==0&&H.push({x:K+.5*(Q-K),y:Y})}const xe=`
    <div class="calculator-layout">
      <div class="results-main">
        ${de(se)}
        
        <div class="graphics-box" style="margin-bottom: var(--spacing-lg); padding: var(--spacing-lg); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border); text-align: center;">
          <h3 style="margin-bottom: var(--spacing-md); color: var(--text-muted); font-size: 0.875rem; text-transform: uppercase;">Column Cross-Section</h3>
          
          <svg width="200" height="200" viewBox="0 0 100 100" style="margin: 0 auto; display: block; overflow: visible;">
            <!-- Concrete Outline -->
            <rect x="10" y="10" width="80" height="80" fill="rgba(255,255,255,0.05)" stroke="var(--text-primary)" stroke-width="1.5" />
            
            <!-- Ties Outline -->
            <rect x="${K-2}" y="${Y-2}" width="${Q-K+4}" height="${ne-Y+4}" fill="none" stroke="var(--text-secondary)" stroke-width="1" rx="2" />
            
            <!-- Dimensions -->
            <text x="50" y="5" fill="var(--text-muted)" font-size="5" text-anchor="middle">${r} mm</text>
            <text x="95" y="50" fill="var(--text-muted)" font-size="5" text-anchor="start" transform="rotate(90 95,50)">${d} mm</text>
            
            <!-- Bars -->
            ${H.slice(0,k).map(ee=>`<circle cx="${ee.x}" cy="${ee.y}" r="2" fill="var(--color-accent)"/>`).join("")}
          </svg>
          
          <div style="margin-top: var(--spacing-md); font-weight: 500;">
            <div style="color: var(--color-accent);">Main: ${k} - ${$}φ</div>
            <div style="color: var(--text-secondary); margin-top: 4px;">Ties: ${P}φ @ ${O} mm c/c</div>
          </div>
        </div>
        
        ${ue("Calculation Steps",p)}
      </div>
      <div class="results-sidebar">
        ${ve(ie)}
      </div>
    </div>
  `;a.innerHTML=xe,q([{label:"Section",value:`${r} × ${d} mm`},{label:"Main",value:`${k} - ${$}φ`},{label:"Ties",value:`${P}φ @ ${O}c/c`},{label:"Status",value:N==="pass"?"OK":"FAIL",status:N}].filter(Boolean)),a.scrollIntoView({behavior:"smooth",block:"start"})}function Xt(e){e.innerHTML=`
    <div class="calculator-page" id="short-column-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Short Column Design</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Short Column Design</h2>
        <p>Design of axially loaded short rectangular columns calculating both longitudinal reinforcement and lateral ties.</p>
        <span class="calculator-page__code-ref">
          ${y.info} IS 456:2000 — Cl. 39.3
        </span>
      </div>

      ${te(["Axially loaded rectangular column (Minimum eccentricity ex ≤ 0.05D, ey ≤ 0.05b)","Short column assumption verified (λx ≤ 12, λy ≤ 12)","Load capacity equation Pu = 0.4*fck*Ac + 0.67*fy*Asc used per Cl. 39.3","Longitudinal steel area limited between 0.8% and limits (4% max practical)"])}

      ${w("Material Properties",li,y.info)}
      ${w("Column Geometry & Lengths",oi,y.building)}
      ${w("Design Limit States",ni,y.calculator)}

      ${oe()}

      <div id="short-column-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,e.querySelector("#btn-calculate").addEventListener("click",ri),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+mt),Xt(e),q([])});const a=le(mt);a&&ce(e,a)}const pt="footing",ci=[{id:"fck",label:"Concrete Grade (fck)",type:"select",default:25,options:Ae.map(e=>({value:e,label:`M${e}`})),tooltip:"Characteristic compressive strength"},{id:"fy",label:"Steel Grade (fy)",type:"select",default:500,options:Te.map(e=>({value:e,label:`Fe${e}`})),tooltip:"Yield strength of reinforcement"}],di=[{id:"cx",label:"Column Size X (cx)",unit:"mm",default:300,min:200,max:2e3,step:10,tooltip:"Column dimension parallel to X-axis"},{id:"cy",label:"Column Size Y (cy)",unit:"mm",default:450,min:200,max:2e3,step:10,tooltip:"Column dimension parallel to Y-axis"}],ui=[{id:"p",label:"Working Axial Load (P)",unit:"kN",default:1e3,min:10,max:2e4,step:10,tooltip:"Unfactored service load from column"},{id:"sbc",label:"Safe Bearing Capacity",unit:"kN/m²",default:200,min:50,max:1e3,step:10,tooltip:"Allowable soil bearing capacity"}],mi=[{id:"cover",label:"Clear Cover",unit:"mm",default:50,min:40,max:100,step:5,tooltip:"Minimum 50mm recommended for footing"},{id:"bar_dia",label:"Main Bar Dia (φ)",unit:"mm",type:"select",default:12,options:[10,12,16,20].map(e=>({value:e,label:`${e} mm`})),tooltip:"Preferred diameter for bottom reinforcement"}];function pi(){const e=document.getElementById("calculator-container");let a=e.querySelector("#footing-results");a||(a=document.createElement("div"),a.id="footing-results",e.appendChild(a));const t=me(e),i=L(t.cx,200,2e3,"Column X"),s=L(t.cy,200,2e3,"Column Y"),o=L(t.p,10,2e4,"Working Load"),l=L(t.sbc,50,1e3,"SBC");if(!i.valid||!s.valid||!o.valid||!l.valid){X("Please correct invalid fields before calculating.","error");return}ae(pt,t);const n=parseFloat(t.cx),r=parseFloat(t.cy),d=parseFloat(t.p),m=parseFloat(t.sbc),f=parseFloat(t.cover),u=parseFloat(t.fck),g=parseFloat(t.fy),c=parseFloat(t.bar_dia);let v=[];const $=d*1.1,_=$/m;v.push({step:1,title:"Required Footing Area",formula:"A = (P + 10% P) / SBC",result:"A,req = "+$.toFixed(0)+" / "+m+" = "+_.toFixed(2)+' <span class="unit">m²</span>'});const h=(r-n)/1e3,p=(-h+Math.sqrt(Math.pow(h,2)+4*_))/2,b=p+h;let x=Math.ceil(p*10)/10*1e3,S=Math.ceil(b*10)/10*1e3;const M=S/1e3*(x/1e3);v.push({step:2,title:"Footing Dimensions",formula:"L × B = A (Equal Overhang)",result:"Provide L = "+S+" mm, B = "+x+" mm.<br>A,prov = "+M.toFixed(2)+' <span class="unit">m²</span>'});const B=d*1.5/M;v.push({step:3,title:"Net Upward Factored Pressure",formula:"pu = 1.5 P / A,prov",result:"pu = "+B.toFixed(1)+' <span class="unit">kN/m²</span>'});const C=(S-r)/2/1e3,D=(x-n)/2/1e3,A=B*(x/1e3)*Math.pow(C,2)/2,I=B*(S/1e3)*Math.pow(D,2)/2,k=Math.max(A,I);v.push({step:4,title:"Maximum Bending Moment",formula:"Mu = pu × Width × (overhang)² / 2",result:"Mux = "+A.toFixed(1)+" kN·m (Along L)<br>Muy = "+I.toFixed(1)+" kN·m (Along B)<br>Max Mu = "+k.toFixed(1)+' <span class="unit">kN·m</span>'});let E=0;g===415?E=.138*u:g===500?E=.133*u:E=.149*u;const T=A>I?x:S,U=Math.sqrt(k*1e6/(E*T));v.push({step:5,title:"Depth Required from BM",formula:"d = √(Mu / (R,lim × b))",result:"d,req = "+U.toFixed(1)+' <span class="unit">mm</span>'});let R=Math.ceil(Math.max(U*1.8,150)/10)*10,N=R,W="pass",P=0,G=0,z=0,j=0,O=0,V=0,ie=0;(()=>{for(let he=0;he<20;he++){const Me=.87*g*R,Re=g/(x*R*u),re=Me*Re,ge=(Me-Math.sqrt(Math.pow(Me,2)-4*re*(A*1e6)))/(2*re),pe=.0012*x*(R+f+c);V=Math.max(ge,pe);const fe=V/(x*R)*100,we=C-R/1e3;if(we>0){if(z=B*(x/1e3)*we*1e3/(x*R),G=It(fe,u),z>G){R+=10;continue}}else z=0,G=1;const Ve=n+R,Pe=r+R,qe=2*(Ve+Pe),Le=Ve/1e3*(Pe/1e3);j=B*(M-Le)*1e3/(qe*R);const ha=Math.min(n/r,r/n);if(O=Math.min(.5+ha,1)*.25*Math.sqrt(u),j>O){R+=10;continue}return N=R,P=N+f+c,!0}return!1})()||(W="fail"),v.push({step:6,title:"One-Way Shear Check",formula:"τv = Vu / (B×d) ≤ τc",result:"τv = "+z.toFixed(3)+" MPa <br>τc = "+G.toFixed(3)+" MPa<br><b>"+(z<=G?"Safe":"Unsafe")+"</b>"}),v.push({step:7,title:"Two-Way (Punching) Shear Check",formula:"τv2 = Vu2 / (Perimeter×d) ≤ ks×0.25√fck",result:"τv2 = "+j.toFixed(3)+" MPa <br>τc2 = "+O.toFixed(3)+" MPa<br><b>"+(j<=O?"Safe":"Unsafe")+"</b>"}),v.push({step:8,title:"Effective Depth & Overall Depth",formula:"D = d + cover + d_bar",result:"d = "+N+" mm<br>D = "+P+' <span class="unit">mm</span>'});const K=.87*g*N,Q=g/(x*N*u),Y=K*Q;let ne=(K-Math.sqrt(Math.pow(K,2)-4*Y*(A*1e6)))/(2*Y);isNaN(ne)&&(ne=0);const Z=.87*g*N,xe=g/(S*N*u),ee=Z*xe;let _e=(Z-Math.sqrt(Math.pow(Z,2)-4*ee*(I*1e6)))/(2*ee);isNaN(_e)&&(_e=0);const Se=g>=415?.0012:.0015,$e=Se*x*P,Fe=Se*S*P;V=Math.max(ne,$e),ie=Math.max(_e,Fe),v.push({step:9,title:"Reinforcement Area",formula:"Ast = max(Ast,req, 0.12% b D)",result:"Along L: Ast = "+V.toFixed(1)+" mm²<br>Along B: Ast = "+ie.toFixed(1)+" mm²"});const Ce=wt(c);let be=Math.ceil(V/Ce),Ke=Math.ceil(ie/Ce);const De=Math.floor((x-2*f-c)/(be-1)),Be=Math.floor((S-2*f-c)/(Ke-1));v.push({step:10,title:"Provide Reinforcement",formula:"N = ceil(Ast / Area_bar)",result:"Along L (parallel to Length): "+be+" - "+c+"φ @ "+De+" c/c<br>Along B (parallel to Width): "+Ke+" - "+c+"φ @ "+Be+" c/c"});const Ye=S/x,Oe=2/(Ye+1);let Ne="";if(Ye>1){const he=ie*Oe;Ne=`<div class="info-alert" style="margin-top: 8px; font-size: 0.85em; padding: 6px; background: rgba(var(--primary-rgb), 0.1); border-left: 2px solid var(--color-accent);">
        <b>Note:</b> For rectangular footing, distribute ${Math.ceil(he/Ce)} bars (${(Oe*100).toFixed(0)}%) uniformly in the central band of width B = ${x}mm.
     </div>`}const We=[{label:"Minimum Depth at edge",status:P>=150?"pass":"fail",text:"D = "+P+" mm (≥ 150)",ref:"Cl. 34.1.2"},{label:"One Way Shear",status:z<=G?"pass":"fail",text:"τv ≤ τc",ref:"Cl. 34.2.4.1"},{label:"Two Way Shear",status:j<=O?"pass":"fail",text:"τv2 ≤ τc2",ref:"Cl. 34.2.4.1"}],ze=[{label:"Footing Size",value:(S/1e3).toFixed(1)+" × "+(x/1e3).toFixed(1),unit:"m",highlight:!0},{label:"Thickness (D)",value:P,unit:"mm",highlight:!0},{label:"Bottom Bars (Length Dir)",value:c+"φ @ "+De,unit:"c/c",status:"pass"},{label:"Bottom Bars (Width Dir)",value:c+"φ @ "+Be,unit:"c/c",status:"pass"}];`${de(ze)}${Ne}${(()=>{const he=Math.max(S,x),Me=S/he*150,Re=x/he*150,re=n/he*150,ge=r/he*150,pe=(240-Me)/2,fe=(240-Re)/2;return`
                <rect x="${pe}" y="${fe}" width="${Me}" height="${Re}" fill="rgba(255,255,255,0.02)" stroke="var(--text-primary)" stroke-width="2" />
                <rect x="${120-re/2}" y="${120-ge/2}" width="${re}" height="${ge}" fill="var(--bg-layer)" stroke="var(--color-accent)" stroke-width="2" />
                
                <!-- Dimensions -->
                <text x="120" y="${fe-8}" fill="var(--text-muted)" font-size="10" text-anchor="middle">L = ${S} mm</text>
                <text x="${pe+Me+8}" y="125" fill="var(--text-muted)" font-size="10" text-anchor="start" transform="rotate(90 ${pe+Me+8},125)">B = ${x} mm</text>
              `})()}${ue("Calculation Steps",v)}${ve(We)}`,q([{label:"Size",value:`${S/1e3}×${x/1e3}×${P/1e3} m`},{label:"Rebar",value:`${c}φ @ ${Math.min(De,Be)}c/c`},{label:"Status",value:W==="pass"?"✅ OK":"❌ Failed"}]),a.scrollIntoView({behavior:"smooth",block:"start"})}function Qt(e){e.innerHTML=`
    <div class="calculator-page" id="footing-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Isolated Footing</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Isolated Footing Design</h2>
        <p>Design of reinforced concrete pad footings for single columns subjected to axial load.</p>
        <span class="calculator-page__code-ref">
          ${y.info} IS 456:2000 — Section 5
        </span>
      </div>

      ${te(["Axial load only (bending moments from column ignored in this version)","Equal overhang footing proportions used by default","Area of footing includes 10% assumption for self-weight","Depth optimized to safely resist both one-way and two-way (punching) shear"])}

      ${w("Material Grades",ci,y.info)}
      ${w("Column Geometry",di,y.building)}
      ${w("Loads & Soil Data",ui,y.calculator)}
      ${w("Design Constraints",mi,y.shield)}

      ${oe()}

      <div id="footing-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,e.querySelector("#btn-calculate").addEventListener("click",pi),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+pt),Qt(e),q([])});const a=le(pt);a&&ce(e,a)}const ft="staircase",fi=[{id:"fck",label:"Concrete Grade (fck)",type:"select",default:25,options:Ae.map(e=>({value:e,label:`M${e}`}))},{id:"fy",label:"Steel Grade (fy)",type:"select",default:500,options:Te.map(e=>({value:e,label:`Fe${e}`}))}],vi=[{id:"rise",label:"Rise (R)",unit:"mm",default:150,min:100,max:250,step:5},{id:"tread",label:"Tread (T)",unit:"mm",default:300,min:200,max:400,step:10},{id:"steps",label:"Number of Steps",default:10,min:3,max:25,step:1},{id:"width",label:"Width of Stair (W)",unit:"mm",default:1200,min:800,max:3e3,step:10},{id:"land1",label:"Bottom Landing",unit:"mm",default:1200,min:0,max:3e3,step:10},{id:"land2",label:"Top Landing",unit:"mm",default:1200,min:0,max:3e3,step:10}],bi=[{id:"ll",label:"Live Load",unit:"kN/m²",default:3,min:1.5,max:10,step:.5},{id:"ff",label:"Floor Finish",unit:"kN/m²",default:1,min:0,max:3,step:.1}],gi=[{id:"cover",label:"Clear Cover",unit:"mm",default:20,min:15,max:50,step:5},{id:"bar_dia",label:"Main Bar Dia (φ)",unit:"mm",type:"select",default:12,options:[10,12,16].map(e=>({value:e,label:`${e} mm`}))},{id:"dist_dia",label:"Dist Bar Dia (φ)",unit:"mm",type:"select",default:8,options:[8,10,12].map(e=>({value:e,label:`${e} mm`}))}];function hi(){const e=document.getElementById("calculator-container");let a=e.querySelector("#staircase-results");a||(a=document.createElement("div"),a.id="staircase-results",e.appendChild(a)),ae(ft,rawInputs);const t=parseFloat(rawInputs.rise),i=parseFloat(rawInputs.tread),s=parseInt(rawInputs.steps);parseFloat(rawInputs.width);const o=parseFloat(rawInputs.land1),l=parseFloat(rawInputs.land2),n=parseFloat(rawInputs.ll),r=parseFloat(rawInputs.ff),d=parseFloat(rawInputs.cover),m=parseFloat(rawInputs.fck),f=parseFloat(rawInputs.fy),u=parseFloat(rawInputs.bar_dia),g=parseFloat(rawInputs.dist_dia);let c=[];const $=(s-1)*i,_=($+o+l)/1e3;c.push({step:1,title:"Effective Span",formula:"L = Going + Landings = "+$+" + "+o+" + "+l,result:"L = "+_.toFixed(2)+' <span class="unit">m</span>'});const h=_*1e3/20;let p=Math.ceil(Math.max(h,150)/10)*10,b=p-d-u/2;c.push({step:2,title:"Assume Thickness of Waist Slab",formula:"D ≈ Span / 20",result:"D = "+p+" mm <br>d = "+b+' <span class="unit">mm</span>'});const x=Math.sqrt(Math.pow(t,2)+Math.pow(i,2)),S=25*(p/1e3)*(x/i),M=25*(.5*t/1e3),B=(S+M+r+n)*1.5,A=(25*(p/1e3)+r+n)*1.5,I=Math.max(B,A);c.push({step:3,title:"Factored Load Calculation",formula:"wu = 1.5 × (DL + LL)",result:"waist slab w = "+B.toFixed(1)+" kN/m²<br>landing w = "+A.toFixed(1)+" kN/m²<br>Using w_u = "+I.toFixed(1)+' <span class="unit">kN/m</span> (per m width)'});const k=I*Math.pow(_,2)/8;c.push({step:4,title:"Design Bending Moment",formula:"Mu = wu × L² / 8",result:"Mu = "+k.toFixed(1)+' <span class="unit">kN·m/m</span>'});let E=0;f===415?E=.138*m:f===500?E=.133*m:E=.149*m;const T=Math.sqrt(k*1e6/(E*1e3));let U=!0;T>b?(U=!1,p=Math.ceil((T+d+u/2)/10)*10,b=p-d-u/2,c.push({step:5,title:"Check Effective Depth",formula:"d,req = √(Mu / (R,lim × 1000))",result:"Revised D to "+p+" mm because d,req ("+T.toFixed(1)+") > d ("+(p-d-u/2)+")"})):c.push({step:5,title:"Check Effective Depth",formula:"d,prov ≥ d,req",result:"d_req = "+T.toFixed(1)+" mm ≤ d_prov ("+b+" mm) <br><b>Safe</b>"});const R=.87*f*b,N=f/(1e3*b*m),W=R*N,P=(R-Math.sqrt(Math.pow(R,2)-4*W*(k*1e6)))/(2*W),z=(f>=415?.0012:.0015)*1e3*p,j=Math.max(P,z);c.push({step:6,title:"Main Reinforcement Required",formula:"Quadratic equation or Min limits",result:"Ast_calc = "+P.toFixed(1)+" mm²/m <br>Ast_min = "+z.toFixed(1)+" mm²/m<br>Ast = "+j.toFixed(1)+' <span class="unit">mm²/m</span>'});const O=z;c.push({step:7,title:"Distribution Steel",formula:"0.12% or 0.15% of gross area",result:"Ast,dist = "+O.toFixed(1)+' <span class="unit">mm²/m</span>'});const V=Ie(u),ie=Ie(g),se=1e3*V.area/j,H=Math.min(Math.floor(se/10)*10,3*b,300),K=1e3*ie.area/O,Q=Math.min(Math.floor(K/10)*10,5*b,450);c.push({step:8,title:"Provide Spacing",formula:"s = 1000 × (Area_bar) / Ast",result:"Main: "+u+"φ @ "+H+" c/c <br>Dist: "+g+"φ @ "+Q+" c/c"});const Y=1e3*V.area/H/(1e3*b)*100,ne=.58*f*(j/(1e3*V.area/H)),xe=20*Math.min(2,1/(.225+.0032*ne+.625*Y)),ee=_*1e3/b;let _e=ee<=xe?"pass":"fail";U||(_e="warning");const Se=[{label:"Minimum Thickness",status:p>=150?"pass":"fail",text:"waist slab thickness ≥ 150mm",ref:"Customary"},{label:"Deflection Control",status:ee<=xe?"pass":"fail",text:"L/d ("+ee.toFixed(1)+") ≤ Limit ("+xe.toFixed(1)+")",ref:"Cl. 23.2.1"}],$e=[{label:"Waist Slab (D)",value:p,unit:"mm",highlight:!0},{label:"Effective Span",value:_.toFixed(2),unit:"m"},{label:"Main Reinforcement",value:u+"φ @ "+H,unit:"c/c",highlight:!0,status:"pass"},{label:"Dist. Reinforcement",value:g+"φ @ "+Q,unit:"c/c",status:"pass"}];`${de($e)}${p}${ue("Calculation Steps",c)}${ve(Se)}`,q([{label:"Waist",value:`${p} mm`},{label:"Main",value:`${u}φ @ ${H}c/c`},{label:"Dist",value:`${g}φ @ ${Q}c/c`},{label:"Status",value:_e==="pass"?"✅ OK":"❌ Issue"}]),a.scrollIntoView({behavior:"smooth",block:"start"})}function Jt(e){e.innerHTML=`
    <div class="calculator-page" id="staircase-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Staircase Design</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Dog-legged Staircase Design</h2>
        <p>Design of dog-legged staircases spanning longitudinally. Calculates waist slab thickness and main/distribution reinforcement.</p>
        <span class="calculator-page__code-ref">
          ${y.info} IS 456:2000 — Section 33.1
        </span>
      </div>

      ${te(["Staircase spans longitudinally between landings supported at outer edges","Effective span = Going + Landing 1 + Landing 2","Load on waist slab and landing slab is treated as uniform UDL based on the maximum of both segments","Deflection control is based on basic span/effective depth ratios (modification factor approx applied)"])}

      ${w("Material Grades",fi,y.info)}
      ${w("Flight Geometry",vi,y.building)}
      ${w("Loading Profiles",bi,y.calculator)}
      ${w("Reinforcement Layout",gi,y.shield)}

      ${oe()}

      <div id="staircase-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,e.querySelector("#btn-calculate").addEventListener("click",hi),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+ft),Jt(e),q([])});const a=le(ft);a&&ce(e,a)}const vt="retaining-wall",yi=[{id:"fck",label:"Concrete Grade (fck)",type:"select",default:25,options:Ae.map(e=>({value:e,label:`M${e}`})),tooltip:"Characteristic compressive strength"},{id:"fy",label:"Steel Grade (fy)",type:"select",default:500,options:Te.map(e=>({value:e,label:`Fe${e}`})),tooltip:"Yield strength of reinforcement"}],xi=[{id:"hw",label:"Height above Ground (H)",unit:"m",default:4,min:1,max:10,step:.1},{id:"sbc",label:"Safe Bearing Capacity",unit:"kN/m²",default:150,min:50,max:1e3,step:10},{id:"mu",label:"Friction Coefficient (μ)",default:.5,min:.3,max:.8,step:.05},{id:"phi",label:"Angle of Repose (φ)",unit:"°",default:30,min:15,max:45,step:1},{id:"gamma_s",label:"Soil Density (γ)",unit:"kN/m³",default:18,min:14,max:22,step:.5},{id:"q",label:"Surcharge Load",unit:"kN/m²",default:10,min:0,max:50,step:1}],_i=[{id:"bar_stem",label:"Stem Bar Dia (φ)",unit:"mm",type:"select",default:16,options:[12,16,20,25].map(e=>({value:e,label:`${e} mm`}))},{id:"bar_base",label:"Base Bar Dia (φ)",unit:"mm",type:"select",default:16,options:[12,16,20].map(e=>({value:e,label:`${e} mm`}))}];function Si(){const e=document.getElementById("calculator-container");let a=e.querySelector("#retaining-wall-results");a||(a=document.createElement("div"),a.id="retaining-wall-results",e.appendChild(a));const t=me(e),i=L(t.hw,1,10,"Height"),s=L(t.sbc,50,1e3,"SBC");if(!i.valid||!s.valid){X("Please correct invalid fields before calculating.","error");return}ae(vt,t);const o=parseFloat(t.hw),l=parseFloat(t.sbc),n=parseFloat(t.mu),r=parseFloat(t.phi),d=parseFloat(t.gamma_s),m=parseFloat(t.q),f=parseFloat(t.fck),u=parseFloat(t.fy),g=parseFloat(t.bar_stem);parseFloat(t.bar_base);const c=25;let v=[];const $=r*Math.PI/180,_=(1-Math.sin($))/(1+Math.sin($));v.push({step:1,title:"Earth Pressure Coefficient",formula:"Ka = (1 - sinφ) / (1 + sinφ)",result:"Ka = "+_.toFixed(3)});let h=l/d*Math.pow(_,2);h=Math.max(h,1);const p=o+h;let b=Math.ceil(.6*p*10)/10,x=Math.max(Math.ceil(p/10*10)/10,.3),S=.2,M=Math.max(Math.ceil(p/10*10)/10,.3),F=Math.ceil(b/3*10)/10;v.push({step:2,title:"Preliminary Proportions",formula:"Total H, Base Width B, Thickness",result:"H = "+p.toFixed(2)+" m <br>B = "+b.toFixed(2)+" m <br>Base Df = "+x.toFixed(2)+" m <br>Stem Base = "+M.toFixed(2)+" m <br>Toe = "+F.toFixed(2)+" m"});const B=b-F-M,C=S*(p-x)*c,D=.5*(M-S)*(p-x)*c,A=F+(M-S)+S/2,I=F+2/3*(M-S),k=b*x*c,E=b/2,T=B*(p-x)*d,U=F+M+B/2,R=B*m,N=U,W=C+D+k+T+R,P=C*A+D*I+k*E+T*U+R*N,G=.5*_*d*Math.pow(p,2),z=p/3,j=G*z,O=_*m*p,V=p/2,ie=O*V,se=j+ie,H=P,K=.9*H/se;v.push({step:3,title:"Check Against Overturning",formula:"FOS = 0.9 × Mr / Mo ≥ 1.4",result:"Mr = "+H.toFixed(1)+" kN·m <br>Mo = "+se.toFixed(1)+" kN·m <br>FOS = "+K.toFixed(2)+(K>=1.4?" <b>(Safe)</b>":" <b>(Unsafe)</b>")});const Q=.9*n*W/(G+O);v.push({step:4,title:"Check Against Sliding",formula:"FOS = 0.9 × μ × ΣW / ΣPa ≥ 1.4",result:"FOS = "+Q.toFixed(2)+(Q>=1.4?" <b>(Safe)</b>":" <b>(Needs Shear Key)</b>")});const Y=(H-se)/W,ne=b/2-Y,Z=W/b*(1+6*Math.abs(ne)/b),xe=W/b*(1-6*Math.abs(ne)/b);v.push({step:5,title:"Base Pressure",formula:"p = (ΣW / B) × (1 ± 6e/B)",result:"e = "+ne.toFixed(3)+" m < B/6 ("+(b/6).toFixed(3)+")<br>p,max = "+Z.toFixed(1)+" kN/m² ≤ SBC ("+l+")<br>p,min = "+xe.toFixed(1)+" kN/m² ≥ 0"});const ee=p-x,_e=.5*_*d*Math.pow(ee,2)*(ee/3),Se=_*m*ee*(ee/2),$e=1.5*(_e+Se),Ce=M*1e3-50-g/2,be=.87*u*Ce,Ke=u/(1e3*Ce*f),De=be*Ke,Be=(be-Math.sqrt(Math.pow(be,2)-4*De*($e*1e6)))/(2*De),Oe=Math.max(Be,.0012*1e3*(M*1e3)),Ne=wt(g),We=Math.min(Math.floor(1e3*Ne/Oe/10)*10,300);v.push({step:6,title:"Reinforcement for Stem",formula:"Mu = 1.5 × M,stem, base",result:"Mu = "+$e.toFixed(1)+" kN·m<br>Ast = "+Oe.toFixed(1)+" mm²/m<br>Provide "+g+"φ @ "+We+" c/c"});let ze="pass",he="Design OK";K<1.4||Z>l||xe<0?(ze="fail",he="Revise Proportions"):Q<1.4&&(ze="warning",he="Add Shear Key");const Me=[{label:"Overturning FOS",status:K>=1.4?"pass":"fail",text:K.toFixed(2)+" (≥ 1.4)",ref:"Cl. 20.1"},{label:"Sliding FOS",status:Q>=1.4?"pass":"fail",text:Q.toFixed(2)+" (≥ 1.4)",ref:"Cl. 20.2"},{label:"Base Pressure",status:Z<=l&&xe>=0?"pass":"fail",text:Z.toFixed(1)+" ≤ "+l,ref:"Bearing safe"}],Re=[{label:"Total Height (H)",value:p.toFixed(2),unit:"m",highlight:!0},{label:"Base Object (B)",value:b.toFixed(2),unit:"m",highlight:!0},{label:"Max Pressure",value:Z.toFixed(1),unit:"kPa"},{label:"Stem Bars",value:g+"φ @ "+We,unit:"c/c",status:"pass"}];`${de(Re)}${(()=>{const ge=200/Math.max(p,b),pe=p*ge,fe=b*ge,we=x*ge,Ve=S*ge,Pe=M*ge,qe=F*ge,Le=220,Ue=20;return`
                <path d="
                  M ${Ue}, ${Le}
                  l ${fe}, 0
                  l 0, -${we}
                  l -${fe-qe-Pe}, 0
                  l 0, -${pe-we}
                  l -${Ve}, 0
                  l -${Pe-Ve}, ${pe-we}
                  l -${qe}, 0
                  Z
                " fill="var(--bg-layer)" stroke="var(--color-accent)" stroke-width="2" />
                
                <text x="${Ue+fe/2}" y="${Le+15}" fill="var(--text-muted)" font-size="10" text-anchor="middle">B = ${b}m</text>
                <text x="${Ue+fe+10}" y="${Le-pe/2}" fill="var(--text-muted)" font-size="10" text-anchor="start">H = ${p}m</text>
                
                <!-- Soil representation -->
                <path d="M ${Ue+qe+Pe}, ${Le-pe+10} L ${Ue+fe}, ${Le-pe+10}" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="4" />
                <path d="M ${Ue+fe}, ${Le-we} L ${Ue+fe}, ${Le-pe+10}" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="4" />
              `})()}${ue("Calculation Steps",v)}${ve(Me)}`,q([{label:"Section",value:`${p.toFixed(2)}H × ${b.toFixed(2)}B m`},{label:"Stem Rebar",value:`${g}φ @ ${We}c/c`},{label:"Status",value:ze==="pass"?"✅ OK":"❌ "+he}]),a.scrollIntoView({behavior:"smooth",block:"start"})}function ea(e){e.innerHTML=`
    <div class="calculator-page" id="retaining-wall-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Retaining Wall</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Cantilever Retaining Wall Design</h2>
        <p>Design of reinforced concrete cantilever retaining walls including stability analysis and flexural reinforcement proportions.</p>
        <span class="calculator-page__code-ref">
          ${y.info} IS 456:2000
        </span>
      </div>

      ${te(["Rankine Active Earth Pressure Theory is used (Ka = (1-sinφ)/(1+sinφ))","Base width B is assumed as 0.5 to 0.6 H for preliminary proportions","Toe projection is assumed as approx 1/3 of Base width","Surcharge load is converted to equivalent soil height for active pressure computation","Water table is assumed to be below the base of the foundation"])}

      ${w("Material Grades",yi,y.info)}
      ${w("Soil & Geometry Data",xi,y.building)}
      ${w("Reinforcement Layout",_i,y.calculator)}

      ${oe()}

      <div id="retaining-wall-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,e.querySelector("#btn-calculate").addEventListener("click",Si),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+vt),ea(e),q([])});const a=le(vt);a&&ce(e,a)}const bt="shear-design",$i=[{id:"fck",label:"Concrete Grade (fck)",type:"select",default:25,options:Ae.map(e=>({value:e,label:`M${e}`})),tooltip:"Characteristic compressive strength"},{id:"fy",label:"Stirrup Grade (fy)",type:"select",default:415,options:Te.map(e=>({value:e,label:`Fe${e}`})),tooltip:"Yield strength of transverse shear reinforcement"}],Fi=[{id:"b",label:"Beam Width (b)",unit:"mm",default:230,min:150,max:1e3,step:10,tooltip:"Width of the beam section"},{id:"d",label:"Effective Depth (d)",unit:"mm",default:410,min:150,max:2e3,step:10,tooltip:"Effective depth to tension steel centroid"}],Mi=[{id:"vu",label:"Factored Shear Force (Vu)",unit:"kN",default:120,min:1,max:5e3,step:1,tooltip:"Ultimate design shear force at the section"},{id:"ast",label:"Provided Tension Steel (Ast)",unit:"mm²",default:603,min:50,max:1e4,step:1,tooltip:"Actual area of main tension reinforcement provided at the section"},{id:"stirrup_dia",label:"Stirrup Bar Dia",unit:"mm",type:"select",default:8,options:[8,10,12,16].map(e=>({value:e,label:`${e} mm`})),tooltip:"Preferred diameter for shear links"},{id:"stirrup_legs",label:"Stirrup Legs",type:"select",default:2,options:[2,4,6].map(e=>({value:e,label:`${e} Legged`})),tooltip:"Number of vertical legs in the stirrup configuration"}];function ki(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#shear-design-results");a||(a=document.createElement("div"),a.id="shear-design-results",e.appendChild(a));const t=me(e),i=L(t.b,150,1e3,"Beam Width"),s=L(t.d,150,2e3,"Effective Depth"),o=L(t.vu,1,5e3,"Factored Shear Force"),l=L(t.ast,50,1e4,"Provided Tension Steel");if(!i.valid||!s.valid||!o.valid||!l.valid){X("Please correct invalid fields before calculating.","error");return}ae(bt,t);const n=parseFloat(t.b),r=parseFloat(t.d),d=parseFloat(t.vu),m=parseFloat(t.ast),f=parseFloat(t.fck),u=parseFloat(t.fy),g=parseInt(t.stirrup_dia),c=parseInt(t.stirrup_legs);let v=[];const $=d*1e3/(n*r);v.push({step:1,title:"Nominal Shear Stress (τv)",formula:"τv = Vu / (b × d)",result:"τv = "+$.toFixed(2)+' <span class="unit">N/mm²</span>'});const _=La(f);v.push({step:2,title:"Maximum Shear Stress (τc,max)",formula:"IS 456 Table 20 for M"+f,result:"τc,max = "+_.toFixed(2)+' <span class="unit">N/mm²</span>'}),$>_&&X("Section is unsafe in shear (τv > τc,max). Redesign section.","error");const h=100*m/(n*r),p=It(h,f);v.push({step:3,title:"Design Shear Strength (τc)",formula:"pt = "+h.toFixed(2)+"%, IS 456 Table 19",result:"τc = "+p.toFixed(2)+' <span class="unit">N/mm²</span>'});const b=c*wt(g);v.push({step:4,title:"Area of Stirrup Legs (Asv)",formula:c+" × (π/4) × "+g+"²",result:"Asv = "+b.toFixed(1)+' <span class="unit">mm²</span>'});let x=0,S="",M=0;$<=.5*p?(S="No Shear Reinforcement Required theoretically. Provide nominal.",x=.87*u*b/(.4*n),v.push({step:5,title:"Nominal Shear Reinforcement",formula:"Sv = (0.87 × fy × Asv) / (0.4 × b)",result:"Sv,req = "+x.toFixed(1)+' <span class="unit">mm</span>'})):$<=p?(S="Nominal Shear Reinforcement Required.",x=.87*u*b/(.4*n),v.push({step:5,title:"Nominal Shear Reinforcement",formula:"Sv = (0.87 × fy × Asv) / (0.4 × b)",result:"Sv,req = "+x.toFixed(1)+' <span class="unit">mm</span>'})):(S="Design Shear Reinforcement Required.",M=d-p*n*r/1e3,x=.87*u*b*r/(M*1e3),v.push({step:5,title:"Shear Resisted by Stirrups (Vus)",formula:"Vus = Vu - (τc × b × d)",result:"Vus = "+M.toFixed(2)+' <span class="unit">kN</span>'}),v.push({step:6,title:"Required Stirrup Spacing",formula:"Sv = (0.87 × fy × Asv × d) / Vus",result:"Sv,req = "+x.toFixed(1)+' <span class="unit">mm</span>'}));const F=.75*r,C=Math.min(F,300);v.push({step:7,title:"Maximum Spacing (IS 456 Cl. 26.5.1.5)",formula:"min(0.75d, 300 mm)",result:"Sv,max = "+C.toFixed(1)+' <span class="unit">mm</span>'});let D=Math.floor(Math.min(x,C)/5)*5;D<50&&(D=50);const A=$<=_,I=A?"pass":"fail",k=[{label:"Maximum Shear Stress Check",status:A?"pass":"fail",text:`τv (${$.toFixed(2)}) ≤ τc,max (${_.toFixed(2)})`,ref:"Cl. 40.2.3"},{label:"Maximum Spacing",status:D<=C?"pass":"warning",text:`Sv (${D}) ≤ Sv,max (${C.toFixed(0)})`,ref:"Cl. 26.5.1.5"}],E=[{label:"Nominal Stress (τv)",value:$.toFixed(2),unit:"N/mm²",status:$<=_?"pass":"fail"},{label:"Concrete Capacity (τc)",value:p.toFixed(2),unit:"N/mm²",status:"info"},{label:"Required Spacing",value:x.toFixed(0),unit:"mm"},{label:"Provided Stirrups",value:`${c}L - ${g}φ @ ${D} c/c`,highlight:!0,status:I}],T=`
    <div class="calculator-layout">
      <div class="results-main">
        ${de(E)}
        
        <div style="margin: 1.5rem 0; padding: 1.25rem; background: var(--bg-surface); border: 1px solid var(--border); border-left: 4px solid var(--color-primary); border-radius: var(--radius-md);">
          <strong style="display:block; margin-bottom: 0.5rem; color: var(--text-primary);">Design Verdict:</strong>
          <span style="color: var(--text-secondary);">
            ${A?`Provide <strong>${c} Legged ${g}φ</strong> stirrups @ <strong>${D} mm c/c</strong>. (${S})`:'<span style="color: var(--color-error);">Section Unsafe (τv > τc,max). Please increase the section dimensions.</span>'}
          </span>
        </div>
        
        ${ue("Calculation Steps",v)}
      </div>
      <div class="results-sidebar">
        ${ve(k)}
      </div>
    </div>
  `;a.innerHTML=T,q([{label:"τv",value:`${$.toFixed(2)} N/mm²`},{label:"Stirrups",value:`${c}L-${g}φ @ ${D}c/c`},{label:"Status",value:I==="pass"?"OK":"FAIL",status:I}].filter(Boolean)),a.scrollIntoView({behavior:"smooth",block:"start"})}function ta(e){e.innerHTML=`
    <div class="calculator-page" id="shear-design-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Shear Design</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Shear & Stirrup Design</h2>
        <p>Design transverse reinforcement for beams subjected to high shear forces using the limit state method.</p>
        <span class="calculator-page__code-ref">
          ${y.info} IS 456:2000 — Cl. 40
        </span>
      </div>

      ${te(["Concrete shear capacity (τc) is calculated using IS 456:2000 Table 19","Maximum shear stress (τc,max) is checked against Table 20","Stirrup contribution is based on vertical legs only (no bent-up bars assumed)","Spacing is restricted to the minimum required by calculation and Cl 26.5.1.5"])}

      ${w("Material Properties",$i,y.info)}
      ${w("Beam Geometry",Fi,y.building)}
      ${w("Design Limit States",Mi,y.calculator)}

      ${oe()}

      <div id="shear-design-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,e.querySelector("#btn-calculate").addEventListener("click",ki),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+bt),ta(e),q([])});const a=le(bt);a&&ce(e,a)}const gt="dev-length",Li=[{id:"fck",label:"Concrete Grade (fck)",type:"select",default:25,options:Ae.map(e=>({value:e,label:`M${e}`})),tooltip:"Characteristic compressive strength"},{id:"fy",label:"Steel Grade (fy)",type:"select",default:415,options:Te.map(e=>({value:e,label:`Fe${e}`})),tooltip:"Yield strength of reinforcement"}],Ci=[{id:"bar_dia",label:"Bar Diameter (φ)",unit:"mm",type:"select",default:12,options:[8,10,12,16,20,25,32].map(e=>({value:e,label:`${e} mm`})),tooltip:"Nominal diameter of the bar to be anchored"},{id:"profile",label:"Bar Profile",type:"select",default:"deformed",options:[{value:"deformed",label:"Deformed / HYSD"},{value:"plain",label:"Plain / Mild Steel"}],tooltip:"Surface characteristics of the reinforcement"}],wi=[{id:"loading",label:"Loading Condition",type:"select",default:"tension",options:[{value:"tension",label:"Tension"},{value:"compression",label:"Compression"}],tooltip:"Stress state in the bar at the start of anchorage"}];function Ii(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#dev-length-results");a||(a=document.createElement("div"),a.id="dev-length-results",e.appendChild(a));const t=me(e);ae(gt,t);const i=parseFloat(t.fck),s=parseFloat(t.fy),o=parseFloat(t.bar_dia),l=t.profile,n=t.loading;let r=[],d=Ut(i,l==="deformed");r.push({step:1,title:"Base Design Bond Stress (τbd)",formula:"IS 456 Table 5"+(l==="deformed"?" × 1.6 (Deformed bar)":""),result:"τbd = "+d.toFixed(2)+' <span class="unit">N/mm²</span>'}),n==="compression"&&(d*=1.25,r.push({step:2,title:"Compression Modifier",formula:"τbd × 1.25 (IS 456 Cl 26.2.1.1)",result:"τbd,mod = "+d.toFixed(2)+' <span class="unit">N/mm²</span>'}));const m=.87*s;r.push({step:n==="compression"?3:2,title:"Design Stress in Steel (σs)",formula:"σs = 0.87 × fy",result:"σs = "+m.toFixed(2)+' <span class="unit">N/mm²</span>'});const f=o*m/(4*d),u=Math.ceil(f/o);r.push({step:n==="compression"?4:3,title:"Development Length (Ld)",formula:"Ld = (φ × σs) / (4 × τbd)",result:"Ld = "+f.toFixed(1)+' <span class="unit">mm</span>'});const g=[{label:"Development Length",value:Math.ceil(f),unit:"mm",sub:`Approx ${u}φ`,status:"pass",highlight:!0},{label:"Design Stress (σs)",value:m.toFixed(2),unit:"MPa",status:"info"},{label:"Design Bond (τbd)",value:d.toFixed(2),unit:"MPa",status:"info"}],c=[{label:"Calculated Anchorage (Ld)",status:"pass",text:`${u}φ`,ref:"Cl. 26.2.1"}],v=`
    <div class="calculator-layout">
      <div class="results-main">
        ${de(g)}
        
        <div style="margin: 1.5rem 0; padding: 1.25rem; background: var(--bg-surface); border: 1px solid var(--border); border-left: 4px solid var(--color-primary); border-radius: var(--radius-md);">
          <strong style="display:block; margin-bottom: 0.5rem; color: var(--text-primary);">Anchorage Requirement:</strong>
          <span style="color: var(--text-secondary);">
            Provide a minimum straight anchorage length of <strong>${Math.ceil(f)} mm</strong> (${u}φ) past the section where full stress is developed.
          </span>
        </div>
        
        ${ue("Calculation Steps",r)}
      </div>
      <div class="results-sidebar">
        ${ve(c)}
      </div>
    </div>
  `;a.innerHTML=v,q([{label:"Rebar",value:o+"φ "+s},{label:"Loading",value:n.charAt(0).toUpperCase()+n.slice(1)},{label:"Ld Required",value:Math.ceil(f)+" mm ("+u+"φ)"}]),a.scrollIntoView({behavior:"smooth",block:"start"})}function aa(e){e.innerHTML=`
    <div class="calculator-page" id="dev-length-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Development Length</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Development Length Calculator</h2>
        <p>Calculate the anchorage length required to develop the full design strength of reinforcement bars.</p>
        <span class="calculator-page__code-ref">
          ${y.info} IS 456:2000 — Cl. 26.2.1
        </span>
      </div>

      ${te(["Bond stress τbd is based on IS 456:2000 limit state design","Bars in compression geometry receive 25% bond stress enhancement","Deformed/HYSD bars receive 60% bond stress enhancement","Development length Ld = (φ × σs)/(4 × τbd)"])}

      ${w("Material Grades",Li,y.info)}
      ${w("Rebar Properties",Ci,y.building)}
      ${w("Anchorage Conditions",wi,y.calculator)}

      ${oe()}

      <div id="dev-length-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,e.querySelector("#btn-calculate").addEventListener("click",Ii),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+gt),aa(e),q([])});const a=le(gt);a&&ce(e,a)}const ht="deflection",Ei=[{id:"span_type",label:"Support Condition",type:"select",default:20,options:[{value:7,label:"Cantilever (L/d = 7)"},{value:20,label:"Simply Supported (L/d = 20)"},{value:26,label:"Continuous (L/d = 26)"}],tooltip:"Basic span to effective depth ratio per IS 456 Cl. 23.2.1"},{id:"span",label:"Effective Span (L)",unit:"m",default:6,min:.5,max:30,step:.1,tooltip:"Effective span of the member"},{id:"d",label:"Effective Depth (d)",unit:"mm",default:450,min:50,max:2e3,step:10,tooltip:"Effective depth to tension steel centroid"},{id:"bw",label:"Web Width (bw)",unit:"mm",default:230,min:50,max:2e3,step:10,tooltip:"Use b for rectangular beams"},{id:"bf",label:"Flange Width (bf)",unit:"mm",default:230,min:50,max:5e3,step:10,tooltip:"Same as bw if rectangular section"}],Di=[{id:"fy",label:"Steel Grade (fy)",type:"select",default:415,options:Te.map(e=>({value:e,label:`Fe${e}`})),tooltip:"Yield strength of main tension steel"},{id:"ast_req",label:"Ast Required",unit:"mm²",default:600,min:10,max:1e4,step:1,tooltip:"Area of tension reinforcement required by calculation"},{id:"ast_prov",label:"Ast Provided",unit:"mm²",default:628,min:10,max:1e4,step:1,tooltip:"Area of tension reinforcement actually provided"},{id:"asc_prov",label:"Asc Provided (Compression)",unit:"mm²",default:0,min:0,max:1e4,step:1,tooltip:"Area of compression reinforcement (Leave 0 if singly reinforced)"}];function Ai(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#deflection-results");a||(a=document.createElement("div"),a.id="deflection-results",e.appendChild(a));const t=me(e),i=L(t.span,.5,30,"Effective Span"),s=L(t.d,50,2e3,"Effective Depth"),o=L(t.bw,50,2e3,"Web Width"),l=L(t.bf,50,5e3,"Flange Width"),n=L(t.ast_req,10,1e4,"Ast Required"),r=L(t.ast_prov,10,1e4,"Ast Provided");if(!i.valid||!s.valid||!o.valid||!l.valid||!n.valid||!r.valid){X("Please correct invalid fields before calculating.","error");return}ae(ht,t);const d=parseFloat(t.span),m=parseFloat(t.d),f=parseFloat(t.bw),u=parseFloat(t.bf),g=parseFloat(t.ast_req),c=parseFloat(t.ast_prov),v=parseFloat(t.asc_prov)||0,$=parseFloat(t.fy),_=parseFloat(t.span_type);let h=[],p=_,b="IS 456 Cl. 23.2.1(a)";d>10&&_!==7&&(p=_*(10/d),b=`Base ${_} × (10 / ${d.toFixed(1)}m)`),h.push({step:1,title:"Basic Span to Depth Ratio",formula:b,result:"(L/d)basic = "+p.toFixed(2)});const x=.58*$*(g/c),S=100*c/(f*m),M=Gt(x,S);h.push({step:2,title:"Tension Modifier (kt)",formula:`pt = ${S.toFixed(2)}%, fs = ${x.toFixed(1)} MPa (IS 456 Fig. 4)`,result:"kt = "+M.toFixed(2)});let F=1;const B=100*v/(f*m);v>0&&(F=1.15*(1+.1*B),F>1.5&&(F=1.5)),h.push({step:3,title:"Compression Modifier (kc)",formula:`pc = ${B.toFixed(2)}% (IS 456 Fig. 5)`,result:"kc = "+F.toFixed(2)});let C=1;if(u>f){const E=f/u;C=.8+.2*Math.min(1,Math.max(.3,E))}h.push({step:4,title:"Flanged Section Modifier (kf)",formula:`bw/bf = ${(f/u).toFixed(2)} (IS 456 Fig. 6)`,result:"kf = "+C.toFixed(2)});const D=p*M*F*C;h.push({step:5,title:"Allowable L/d Ratio",formula:`${p.toFixed(2)} × ${M.toFixed(2)} × ${F.toFixed(2)} × ${C.toFixed(2)}`,result:"(L/d)allowable = "+D.toFixed(2)});const A=d*1e3/m;h.push({step:6,title:"Actual L/d Ratio",formula:`Actual span / d = ${(d*1e3).toFixed(0)} / ${m.toFixed(0)}`,result:"(L/d)actual = "+A.toFixed(2)});const I=A<=D,k=`
    <div class="calculator-layout">
      <div class="results-main">
        ${de(summaryCards)}
        
        <div style="margin: 1.5rem 0; padding: 1.25rem; background: var(--bg-surface); border: 1px solid var(--border); border-left: 4px solid var(--color-primary); border-radius: var(--radius-md);">
          <strong style="display:block; margin-bottom: 0.5rem; color: var(--text-primary);">Deflection Verdict:</strong>
          <span style="color: var(--text-secondary);">
            ${I?'The section is <strong style="color: var(--color-accent);">SAFE</strong> against excessive deflection.':'<span style="color: var(--color-error);"><strong>UNSAFE!</strong> The section is likely to suffer excessive deflection. Increase section depth or provide more compression steel.</span>'}
          </span>
        </div>
        
        ${ue("Calculation Steps",h)}
      </div>
      <div class="results-sidebar">
        ${ve(complianceChecks)}
      </div>
    </div>
  `;a.innerHTML=k,q([{label:"Actual L/d",value:A.toFixed(2)},{label:"Allowable L/d",value:D.toFixed(2)},{label:"Status",value:I?"✅ SAFE":"❌ UNSAFE"}])}function ia(e){e.innerHTML=`
    <div class="calculator-page" id="deflection-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Deflection Check</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Deflection Limit Check</h2>
        <p>Empirical method for controlling deflection in beams and slabs based on span-to-depth ratios.</p>
        <span class="calculator-page__code-ref">
          ${y.info} IS 456:2000 — Cl. 23.2.1
        </span>
      </div>

      ${te(["Span to effective depth approach verifies deflection indirectly","Basic L/d limit is modified based on tension steel area and stress (kt)","Compression steel increases allowable L/d through modifier kc","Flanged sections reduce allowable L/d through modifier kf","Spans greater than 10m are penalized proportionally (except cantilevers)"])}

      ${w("Member Geometry",Ei,y.building)}
      ${w("Reinforcement Status",Di,y.calculator)}

      ${oe()}

      <div id="deflection-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,e.querySelector("#btn-calculate").addEventListener("click",Ai),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+ht),ia(e),q([])});const a=le(ht);a&&ce(e,a)}const yt="crack-width",Ti=[{id:"fck",label:"Concrete Grade (fck)",type:"select",default:25,options:Ae.map(e=>({value:e,label:`M${e}`})),tooltip:"Characteristic compressive strength"}],Bi=[{id:"b",label:"Beam Width (b)",unit:"mm",default:300,min:150,max:2e3,step:10,tooltip:"Width of the beam section"},{id:"d_overall",label:"Overall Depth (D)",unit:"mm",default:600,min:200,max:3e3,step:10,tooltip:"Total overall depth of the section"},{id:"cover",label:"Clear Cover",unit:"mm",default:40,min:20,max:100,step:5,tooltip:"Clear cover to main tension reinforcement"}],Ni=[{id:"ast",label:"Tension Steel (Ast)",unit:"mm²",default:1256,min:50,max:15e3,step:1,tooltip:"Area of main tension reinforcement provided"},{id:"bar_dia",label:"Main Bar Dia (φ)",unit:"mm",type:"select",default:20,options:[12,16,20,25,32].map(e=>({value:e,label:`${e} mm`})),tooltip:"Representative diameter of main bars at the tension face"},{id:"spacing",label:"Bar Spacing c/c",unit:"mm",default:150,min:50,max:300,step:5,tooltip:"Average center-to-center spacing of main tension bars"}],Ri=[{id:"m_service",label:"Service Bending Moment",unit:"kN·m",default:150,min:1,max:5e3,step:1,tooltip:"Unfactored quasi-permanent service load moment"},{id:"limit",label:"Crack Width Limit",type:"select",default:.3,options:[{value:.3,label:"0.3 mm (Normal)"},{value:.2,label:"0.2 mm (Severe Exposure)"},{value:.1,label:"0.1 mm (Extreme Exposure)"}],tooltip:"Maximum permissible crack width per IS 456 Cl. 35.3.2"}];function Pi(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#crack-width-results");a||(a=document.createElement("div"),a.id="crack-width-results",e.appendChild(a));const t=me(e),i=L(t.b,150,2e3,"Beam Width"),s=L(t.d_overall,200,3e3,"Overall Depth"),o=L(t.ast,50,15e3,"Tension Steel"),l=L(t.m_service,1,5e3,"Service Moment");if(!i.valid||!s.valid||!o.valid||!l.valid){X("Please correct invalid fields before calculating.","error");return}ae(yt,t);const n=parseFloat(t.b),r=parseFloat(t.d_overall),d=parseFloat(t.cover),m=parseFloat(t.ast),f=parseFloat(t.bar_dia),u=parseFloat(t.spacing),g=parseFloat(t.m_service)*1e6,c=parseFloat(t.limit),v=parseFloat(t.fck),$=r-d-f/2;let _=[];const h=2e5,p=5e3*Math.sqrt(v),b=h/p;_.push({step:1,title:"Elastic Moduli & Modular Ratio",formula:`Ec = 5000√fck = ${p.toFixed(0)}, m = Es/Ec`,result:"m = "+b.toFixed(2)});const x=.5*n,S=b*m,M=-b*m*$,F=(-S+Math.sqrt(S*S-4*x*M))/(2*x);_.push({step:2,title:"Neutral Axis Depth (Cracked Elastic)",formula:"bx²/2 = m×Ast(d - x)",result:"x = "+F.toFixed(1)+"  mm"});const B=n*Math.pow(F,3)/3+b*m*Math.pow($-F,2);_.push({step:3,title:"Moment of Inertia (Icr)",formula:"Icr = bx³/3 + m×Ast(d - x)²",result:"Icr = "+(B/1e6).toFixed(2)+" × 10⁶ mm⁴"});const C=g*(r-F)/(p*B);_.push({step:4,title:"Apparent Strain at Tension Face (ε1)",formula:"ε1 = (M(D-x)) / (Ec×Icr)",result:"ε1 = "+(C*1e6).toFixed(0)+" × 10⁻⁶"});const D=n*Math.pow(r-F,2)/(3*h*m*($-F));let A=C-D;A<0&&(A=0),_.push({step:5,title:"Average Strain (εm)",formula:"εm = ε1 - [b(D-x)²] / [3×Es×Ast(d-x)]",result:"εm = "+(A*1e6).toFixed(0)+" × 10⁻⁶"});const I=u/2,k=d+f/2,E=Math.sqrt(I*I+k*k)-f/2;_.push({step:6,title:"Distance to Nearest Bar Surface (am)",formula:"am = √((s/2)² + (c+φ/2)²) - φ/2",result:"am = "+E.toFixed(1)+" mm"});const T=3*E*A/(1+2*(E-d)/(r-F));_.push({step:7,title:"Design Surface Crack Width (Wcr)",formula:"Wcr = (3×am×εm) / (1 + 2(am-Cmin)/(D-x))",result:"Wcr = "+T.toFixed(3)+" mm"});const U=T<=c,N=[{id:"crk_width",label:"Crack Width Check (Wcr ≤ Limit)",status:U?"pass":"fail",value:T.toFixed(3),limit:c.toFixed(3),unit:"mm"}],W=[{label:"Design Crack Width",value:T.toFixed(3),unit:"mm",status:T<=c?"pass":"fail",highlight:!0},{label:"Strain (εm)",value:(A*1e6).toFixed(0),unit:"µε",sub:A===0?"Uncracked Section":"At tension soffit",status:"info"},{label:"Limit",value:c.toFixed(2),unit:"mm",sub:t.limit=="0.3"?"Normal Exposure":"Severe Exposure",status:"info"}],P=`
    <div class="calculator-layout">
      <div class="results-main">
        ${de(W)}
        
        <div style="margin: 1.5rem 0; padding: 1.25rem; background: var(--bg-surface); border: 1px solid var(--border); border-left: 4px solid var(--color-primary); border-radius: var(--radius-md);">
          <strong style="display:block; margin-bottom: 0.5rem; color: var(--text-primary);">Crack Width Verdict:</strong>
          <span style="color: var(--text-secondary);">
            ${U?`The calculated crack width of <strong>${T.toFixed(3)} mm</strong> is <strong style="color: var(--color-accent);">SAFE</strong> against the allowable limit of ${c.toFixed(2)} mm.`:`<span style="color: var(--color-error);"><strong>UNSAFE!</strong> The calculated crack width of <strong>${T.toFixed(3)} mm</strong> exceeds the allowable limit of ${c.toFixed(2)} mm.</span>`}
          </span>
        </div>
        
        ${ue("Calculation Steps",_)}
      </div>
      <div class="results-sidebar">
        ${ve(N)}
      </div>
    </div>
  `;a.innerHTML=P,q([{label:"Wcr",value:T.toFixed(3)+" mm"},{label:"Limit",value:c.toFixed(2)+" mm"},{label:"Status",value:U?"✅ SAFE":"❌ UNSAFE"}]),a.scrollIntoView({behavior:"smooth",block:"start"})}function sa(e){e.innerHTML=`
    <div class="calculator-page" id="crack-width-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Crack Width Check</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Crack Width Check</h2>
        <p>Estimate the design surface crack width of a reinforced concrete section under service loads.</p>
        <span class="calculator-page__code-ref">
          ${y.info} IS 456:2000 — Annex F
        </span>
      </div>

      ${te(["Crack width is computed at the soffit of the beam directly below tension bars","Section is assumed to be fully cracked for properties calculation (tension sustained by steel only)","Creep effects are ignored or assumed implicitly factored in the quasi-permanent load","Calculations use elastic cracked section analysis (Modular ratio m = Es/Ec)"])}

      ${w("Material Properties",Ti,y.info)}
      ${w("Beam Geometry",Bi,y.building)}
      ${w("Reinforcement Layout",Ni,y.calculator)}
      ${w("Design Limit States",Ri,y.calculator)}

      ${oe()}

      <div id="crack-width-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,e.querySelector("#btn-calculate").addEventListener("click",Pi),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+yt),sa(e),q([])});const a=le(yt);a&&ce(e,a)}const Ge={gamma_m0:1.1,gamma_m1:1.25,gamma_mb:1.25,gamma_mw:1.25,gamma_mw_field:1.5,E:2e5,v:.3},Ee=[{grade:"E250 (Fe410W)A",fy:250,fu:410},{grade:"E275 (Fe430)A",fy:275,fu:430},{grade:"E300 (Fe440)A",fy:300,fu:440},{grade:"E350 (Fe490)A",fy:350,fu:490},{grade:"E410 (Fe540)A",fy:410,fu:540}],lt=[{designation:"ISMB 100",mass:11.5,A:1460,h:100,bf:75,tw:4,tf:7.2,R1:9,Izz:257.5,Iyy:40.8,Zez:51.5,Zpz:59.4,rz:42,ry:16.7},{designation:"ISMB 150",mass:14.9,A:1900,h:150,bf:80,tw:4.8,tf:7.6,R1:9,Izz:726.4,Iyy:52.6,Zez:96.9,Zpz:110.8,rz:61.8,ry:16.6},{designation:"ISMB 200",mass:25.4,A:3233,h:200,bf:100,tw:5.7,tf:10.8,R1:11,Izz:2235.4,Iyy:150,Zez:223.5,Zpz:255.4,rz:83.2,ry:21.5},{designation:"ISMB 250",mass:37.3,A:4755,h:250,bf:125,tw:6.9,tf:12.5,R1:13,Izz:5131.6,Iyy:334.5,Zez:410.5,Zpz:465.7,rz:103.8,ry:26.5},{designation:"ISMB 300",mass:44.2,A:5626,h:300,bf:140,tw:7.5,tf:12.4,R1:14,Izz:8603.6,Iyy:453.9,Zez:573.6,Zpz:651.7,rz:123.7,ry:28.4},{designation:"ISMB 350",mass:52.4,A:6671,h:350,bf:140,tw:8.1,tf:14.2,R1:14,Izz:13630,Iyy:537.7,Zez:778.9,Zpz:889.6,rz:142.9,ry:28.4},{designation:"ISMB 400",mass:61.6,A:7846,h:400,bf:140,tw:8.9,tf:16,R1:14,Izz:20458,Iyy:622.1,Zez:1022.9,Zpz:1176.2,rz:161.5,ry:28.2},{designation:"ISMB 450",mass:72.4,A:9227,h:450,bf:150,tw:9.4,tf:17.4,R1:15,Izz:30390,Iyy:834,Zez:1350.7,Zpz:1555.2,rz:181.5,ry:30.1},{designation:"ISMB 500",mass:86.9,A:11074,h:500,bf:160,tw:10.2,tf:17.2,R1:16,Izz:45218,Iyy:1369.8,Zez:1808.7,Zpz:2085.1,rz:202.1,ry:35.2},{designation:"ISMB 600",mass:122.6,A:15621,h:600,bf:210,tw:12,tf:20.8,R1:16,Izz:91813,Iyy:2651,Zez:3060.4,Zpz:3510.6,rz:242.4,ry:41.2}],la=[{designation:"ISA 50x50x6",mass:4.5,A:568,b:50,t:6,cx:14.5,cy:14.5,Ixx:11,rxx:15.2,ru:19.3,rv:9.6},{designation:"ISA 65x65x6",mass:5.8,A:744,b:65,t:6,cx:18.1,cy:18.1,Ixx:28.3,rxx:19.5,ru:25.1,rv:12.6},{designation:"ISA 75x75x8",mass:8.9,A:1138,b:75,t:8,cx:21.4,cy:21.4,Ixx:59,rxx:22.8,ru:28.9,rv:14.6},{designation:"ISA 90x90x8",mass:10.8,A:1379,b:90,t:8,cx:25.1,cy:25.1,Ixx:104.2,rxx:27.5,ru:34.9,rv:17.5},{designation:"ISA 100x100x10",mass:14.9,A:1903,b:100,t:10,cx:28.4,cy:28.4,Ixx:177,rxx:30.5,ru:38.6,rv:19.4},{designation:"ISA 110x110x10",mass:16.5,A:2106,b:110,t:10,cx:30.8,cy:30.8,Ixx:238.4,rxx:33.6,ru:42.6,rv:21.3},{designation:"ISA 130x130x12",mass:23.4,A:2982,b:130,t:12,cx:36.3,cy:36.3,Ixx:472.6,rxx:39.8,ru:50.4,rv:25.3},{designation:"ISA 150x150x15",mass:33.8,A:4300,b:150,t:15,cx:42.4,cy:42.4,Ixx:896.7,rxx:45.7,ru:57.7,rv:29.2},{designation:"ISA 200x200x25",mass:73.9,A:9410,b:200,t:25,cx:58.7,cy:58.7,Ixx:3350,rxx:59.7,ru:75.3,rv:38.7}],xt="tension-member",qi=[{id:"section",label:"ISA Section",type:"select",default:"ISA 50x50x6",options:la.map(e=>({value:e.designation,label:e.designation}))},{id:"grade",label:"Steel Grade",type:"select",default:"E250",options:Ee.map(e=>({value:e.grade,label:e.grade}))}],Oi=[{id:"conn_type",label:"Connection Type",type:"select",default:"bolted",options:[{value:"bolted",label:"Bolted Connection"},{value:"welded",label:"Welded Connection"}]},{id:"bolt_dia",label:"Bolt Hole Dia (do)",unit:"mm",default:18,min:10,max:40,step:2},{id:"lc",label:"Length of Connection (Lc)",unit:"mm",default:150,min:20,max:2e3,step:10,tooltip:"Distance between outer bolts or length of weld"}];function zi(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#tension-member-results");a||(a=document.createElement("div"),a.id="tension-member-results",e.appendChild(a));const t=me(e),i=L(t.lc,20,2e3,"Length of Connection");let s={valid:!0};if(t.conn_type==="bolted"&&(s=L(t.bolt_dia,10,40,"Bolt Hole Dia")),!i.valid||!s.valid){X("Please correct invalid fields before calculating.","error");return}ae(xt,t);const o=t.section,l=t.grade,n=t.conn_type==="bolted",r=parseFloat(t.lc),d=n?parseFloat(t.bolt_dia):0,m=la.find(T=>T.designation===o),f=Ee.find(T=>T.grade===l),{fy:u,fu:g}=f,{gamma_m0:c,gamma_m1:v}=Ge;let $=[];const _=m.A*u/c;$.push({step:1,title:"Yielding of Gross Section (Tdg)",formula:"Tdg = (Ag × fy) / γm0",result:"Tdg = "+(_/1e3).toFixed(2)+' <span class="unit">kN</span>'});const h=m.b,p=m.b,b=m.t;let x,S;n?(x=(h-d-b/2)*b,S=h+p-b):(x=(h-b/2)*b,S=h);const M=(p-b/2)*b;$.push({step:2,title:"Net Areas (Anc, Ago)",formula:"Anc (connected), Ago (outstanding)",result:`Anc=${x.toFixed(1)}, Ago=${M.toFixed(1)} <span class="unit">mm²</span>`});let F=1.4-.076*(p/b)*(u/g)*(S/r);const B=.7,C=g*c/(u*v);F<B&&(F=B),F>C&&(F=C),$.push({step:3,title:"Shear Lag Factor (β)",formula:"β = 1.4 - 0.076(w/t)(fy/fu)(bs/Lc)",result:"β = "+F.toFixed(3)});const D=.9*x*g/v+F*M*u/c;$.push({step:4,title:"Rupture of Critical Section (Tdn)",formula:"Tdn = (0.9×Anc×fu)/γm1 + (β×Ago×fy)/γm0",result:"Tdn = "+(D/1e3).toFixed(2)+' <span class="unit">kN</span>'});const A=Math.min(_,D)/1e3,I=[{id:"beta_limit",label:"Shear Lag Factor Limit (0.7 ≤ β ≤ βmax)",status:"pass",value:F.toFixed(3),limit:`[0.7, ${C.toFixed(3)}]`,unit:""}],k=[{label:"Design Tension Capacity",value:A.toFixed(2)+" kN",sub:_<D?"Governed by Yielding":"Governed by Rupture",status:"pass"},{label:"Yielding Strength (Tdg)",value:(_/1e3).toFixed(2)+" kN",status:"info"},{label:"Rupture Strength (Tdn)",value:(D/1e3).toFixed(2)+" kN",status:"info"}],E=`
    <div class="calculator-layout">
      <div class="results-main">
        ${de(k)}
        <div style="margin: 1.5rem 0; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <strong>Note:</strong> Calculated for a single angle connected by one leg. Block shear failure (Tdb) should also be checked depending on connection end details.
        </div>
        ${ue("Calculation Steps",$)}
      </div>
      <div class="results-sidebar">
        ${ve(I)}
      </div>
    </div>
  `;a.innerHTML=E,q([{label:"Section",value:o},{label:"Grade",value:u+" MPa"},{label:"Capacity (Td)",value:A.toFixed(2)+" kN"}])}function oa(e){e.innerHTML=`
    <div class="calculator-page" id="tension-member-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Tension Member</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Tension Member Capacity</h2>
        <p>Calculate the design tension capacity of single equal-angle members connected by one leg.</p>
        <span class="calculator-page__code-ref">
          ${y.info} IS 800:2007 — Section 6
        </span>
      </div>

      ${te(["Calculated for a single angle connected by one leg","Block shear failure (Tdb) is excluded in this module (depends on exact connection end details)","Gauge distance is assumed approximately as 0.6 × width for rupture computations"])}

      ${w("Material Grades",qi,y.info)}
      ${w("Connection Details",Oi,y.shield)}

      ${oe()}

      <div id="tension-member-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;const a=le(xt);a&&ce(e,a);const t=e.querySelector("#conn_type"),i=e.querySelector("#bolt_dia"),s=i?i.closest(".input-group"):null;t&&s&&(t.addEventListener("change",o=>{o.target.value==="welded"?s.style.display="none":s.style.display="block"}),(a&&a.conn_type==="welded"||t.value==="welded")&&(s.style.display="none")),e.querySelector("#btn-calculate").addEventListener("click",zi),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+xt),oa(e),q([])})}const _t="compression-member",Ui=[{id:"section",label:"ISMB Section",type:"select",default:"ISMB 300",options:lt.map(e=>({value:e.designation,label:e.designation}))},{id:"grade",label:"Steel Grade",type:"select",default:"E250",options:Ee.map(e=>({value:e.grade,label:e.grade}))}],Gi=[{id:"klz",label:"Effective Length (Z-Z)",unit:"mm",default:3e3,min:100,max:2e4,step:100,tooltip:"Effective length for buckling about major axis"},{id:"kly",label:"Effective Length (Y-Y)",unit:"mm",default:3e3,min:100,max:2e4,step:100,tooltip:"Effective length for buckling about minor axis"}],Wi={a:.21,b:.34,c:.49,d:.76};function Vi(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#compression-member-results");a||(a=document.createElement("div"),a.id="compression-member-results",e.appendChild(a));const t=me(e),i=L(t.klz,100,2e4,"Effective Length Z-Z"),s=L(t.kly,100,2e4,"Effective Length Y-Y");if(!i.valid||!s.valid){X("Please correct invalid fields before calculating.","error");return}ae(_t,t);const o=t.section,l=t.grade,n=parseFloat(t.klz),r=parseFloat(t.kly),d=lt.find(I=>I.designation===o),f=Ee.find(I=>I.grade===l).fy,{gamma_m0:u,E:g}=Ge;let c=[];const v=d.h/d.bf;let $="b",_="c";v>1.2?d.tf<=40?($="a",_="b"):($="b",_="c"):d.tf<=100?($="b",_="c"):($="d",_="d"),c.push({step:1,title:"Buckling Class (Table 10)",formula:`h/bf = ${v.toFixed(2)}, tf = ${d.tf} mm`,result:`Z-Z: Class ${$}, Y-Y: Class ${_}`});function h(I,k,E,T){const U=I/k,R=Math.PI*Math.PI*g/(U*U),N=Math.sqrt(f/R),W=Wi[E],P=.5*(1+W*(N-.2)+N*N);let G=f/(u*(P+Math.sqrt(P*P-N*N)));const z=f/u;return G>z&&(G=z),{lambda:U,fcc:R,lam_nd:N,alpha:W,phi:P,fcd:G}}const p=h(n,d.rz,$),b=h(r,d.ry,_);c.push({step:2,title:"Slenderness Ratio (λ)",formula:"λ = KL / r",result:`λz = ${p.lambda.toFixed(2)}, λy = ${b.lambda.toFixed(2)}`}),c.push({step:3,title:"Euler Buckling Stress (fcc)",formula:"fcc = π²E / λ²",result:`fcc,y = ${b.fcc.toFixed(1)} N/mm²`}),c.push({step:4,title:"Design Compressive Stress (fcd)",formula:"IS 800 Cl 7.1.2.1 Perry-Robertson formula",result:`fcd,z = ${p.fcd.toFixed(2)}, fcd,y = ${b.fcd.toFixed(2)} <span class="unit">MPa</span>`});const x=Math.min(p.fcd,b.fcd),S=d.A*x/1e3;c.push({step:5,title:"Design Compressive Strength (Pd)",formula:"Pd = Ae × fcd,min",result:"Pd = "+S.toFixed(2)+' <span class="unit">kN</span>'});const M=Math.max(p.lambda,b.lambda),B=M<=180?"pass":"fail",C=[{id:"slenderness",label:"Maximum Slenderness Ratio (λ ≤ 180 for dead/live load)",status:B,value:M.toFixed(2),limit:"180.00",unit:""}],D=[{label:"Column Capacity (Pd)",value:S.toFixed(2)+" kN",sub:"Governing Axis: "+(p.fcd<b.fcd?"Z-Z":"Y-Y"),status:B},{label:"Stress Factor (fcd)",value:x.toFixed(2)+" MPa",status:"info"},{label:"Max Slenderness",value:M.toFixed(2),status:B}],A=`
    <div class="calculator-layout">
      <div class="results-main">
        ${de(D)}
        <div style="margin: 1.5rem 0; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <strong>Conclusion:</strong> Allowable compressive load is <strong>${S.toFixed(2)} kN</strong>.
        </div>
        ${ue("Calculation Steps",c)}
      </div>
      <div class="results-sidebar">
        ${ve(C)}
      </div>
    </div>
  `;a.innerHTML=A,q([{label:"Section",value:o},{label:"Max λ",value:M.toFixed(2)},{label:"Capacity (Pd)",value:S.toFixed(2)+" kN"}])}function na(e){e.innerHTML=`
    <div class="calculator-page" id="compression-member-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Compression Member</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Compression Member Capacity</h2>
        <p>Calculate buckling resistance of ISMB sections subjected to axial compression.</p>
        <span class="calculator-page__code-ref">
          ${y.info} IS 800:2007 — Section 7
        </span>
      </div>

      ${te(["Calculated for doubly symmetric rolled I-sections (ISMB)","Buckling class is directly extracted from IS 800 Table 10 based on h/bf and tf thresholds","Effective lengths for major and minor axes are explicitly supplied"])}

      ${w("Section & Grade",Ui,y.info)}
      ${w("Effective Lengths",Gi,y.building)}

      ${oe()}

      <div id="compression-member-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;const a=le(_t);a&&ce(e,a),e.querySelector("#btn-calculate").addEventListener("click",Vi),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+_t),na(e),q([])})}const St="steel-beam",Hi=[{id:"section",label:"ISMB Section",type:"select",default:"ISMB 300",options:lt.map(e=>({value:e.designation,label:e.designation}))},{id:"grade",label:"Steel Grade",type:"select",default:"E250",options:Ee.map(e=>({value:e.grade,label:e.grade}))}],ji=[{id:"span",label:"Unbraced Length (L)",unit:"m",default:4,min:.5,max:30,step:.5},{id:"support",label:"Lateral Support",type:"select",default:"supported",options:[{value:"supported",label:"Laterally Supported"},{value:"unsupported",label:"Laterally Unsupported"}]}],Ki=[{id:"mz",label:"Applied Moment (Mz)",unit:"kN·m",default:100,min:0,max:5e3,step:1,tooltip:"Factored Design Bending Moment"},{id:"vz",label:"Applied Shear (Vz)",unit:"kN",default:50,min:0,max:2e3,step:1,tooltip:"Factored Design Shear Force"}];function Yi(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#steel-beam-results");a||(a=document.createElement("div"),a.id="steel-beam-results",e.appendChild(a));const t=me(e),i=L(t.span,.5,30,"Unbraced Length"),s=L(t.mz,0,5e3,"Applied Moment"),o=L(t.vz,0,2e3,"Applied Shear");if(!i.valid||!s.valid||!o.valid){X("Please correct invalid fields before calculating.","error");return}ae(St,t);const l=t.section,n=t.grade,r=parseFloat(t.span)*1e3,d=t.support==="supported",m=parseFloat(t.mz),f=parseFloat(t.vz),u=lt.find(O=>O.designation===l),c=Ee.find(O=>O.grade===n).fy,{gamma_m0:v,E:$,v:_}=Ge,h=$/(2*(1+_));let p=[];const b=Math.sqrt(250/c),S=u.bf/2/u.tf,F=(u.h-2*(u.tf+u.R1))/u.tw;let B=3,C=3;S<=9.4*b?B=1:S<=10.5*b&&(B=2),F<=84*b?C=1:F<=105*b&&(C=2);const D=Math.max(B,C),I={1:"Plastic (Class 1)",2:"Compact (Class 2)",3:"Semi-Compact (Class 3)"}[D];if(p.push({step:1,title:"Section Classification (IS 800 Table 2)",formula:`ε = ${b.toFixed(2)}, b/tf = ${S.toFixed(1)}, d/tw = ${F.toFixed(1)}`,result:`Overall Class: ${I}`}),D>3){X("Slender sections not supported currently.","error");return}const k=D<=2?1:u.Zez/u.Zpz,E=u.h*u.tw*c/(Math.sqrt(3)*v*1e3);p.push({step:2,title:"Design Shear Strength (Vd)",formula:"Vd = (h × tw × fyw) / (√3 × γm0)",result:`Vd = ${E.toFixed(2)} kN`});const T=f>.6*E;p.push({step:3,title:"Shear Check",formula:`Vz = ${f} kN, 0.6Vd = ${(.6*E).toFixed(2)} kN`,result:T?"High Shear Case":"Low Shear Case"});let U=0,R="";if(d){const O=D<=2?u.Zpz:u.Zez;U=k*(O*1e3)*c/(v*1e6);const V=1.2*(u.Zez*1e3)*c/(v*1e6);if(U>V&&D<=2&&(U=V,R=" (Governed by 1.2Ze limit)"),T&&D<=2){const ie=Math.pow(2*f/E-1,2),se=(u.Zpz*1e3-u.tw*u.h*u.h/4)*c/(v*1e6);U=U-ie*(U-se),R=" (Reduced for High Shear)"}p.push({step:4,title:"Design Bending Strength (Md)",formula:`Laterally Supported, βb = ${k.toFixed(2)}`,result:`Md = ${U.toFixed(2)} kN·m`+R})}else{const O=(2*u.bf*Math.pow(u.tf,3)+(u.h-2*u.tf)*Math.pow(u.tw,3))/3,V=u.h-u.tf,ie=u.Iyy*1e4,se=.25*ie*V*V;p.push({step:4,title:"Torsional Constants (It, Iw)",formula:"Calculation of St. Venant & Warping constants",result:`It = ${(O/1e4).toFixed(2)} cm⁴, Iw = ${(se/1e10).toFixed(2)} cm⁶`});const H=Math.PI*Math.PI*$*ie/(r*r),K=h*O+Math.PI*Math.PI*$*se/(r*r),Q=Math.sqrt(H*K)/1e6;p.push({step:5,title:"Elastic Lateral Buckling Moment (Mcr)",formula:"Mcr = √( (π²EIy/L²) × (GIt + π²EIw/L²) )",result:`Mcr = ${Q.toFixed(2)} kN·m`});const Y=Math.sqrt(k*(u.Zpz*1e3)*c/1e6/Q),Z=.5*(1+.21*(Y-.2)+Y*Y);let ee=1/(Z+Math.sqrt(Z*Z-Y*Y))*c/v;ee>c/v&&(ee=c/v),p.push({step:6,title:"Design Bending Stress (fbd)",formula:`λLT = ${Y.toFixed(3)}, ΦLT = ${Z.toFixed(3)}`,result:`fbd = ${ee.toFixed(2)} MPa`}),U=k*(u.Zpz*1e3)*ee/1e6,p.push({step:7,title:"Design Bending Strength (Md)",formula:"Md = βb × Zp × fbd",result:`Md = ${U.toFixed(2)} kN·m`})}const N=m<=U,W=f<=E,P=N&&W?"pass":"fail",G=[{id:"moment",label:"Bending Capacity (Mz ≤ Md)",status:N?"pass":"fail",value:m.toFixed(1),limit:U.toFixed(1),unit:"kN·m"},{id:"shear",label:"Shear Capacity (Vz ≤ Vd)",status:W?"pass":"fail",value:f.toFixed(1),limit:E.toFixed(1),unit:"kN"}],z=[{label:"Moment Capacity (Md)",value:U.toFixed(2)+" kN·m",sub:d?"Laterally Supported":"Buckling Controls",status:N?"pass":"fail"},{label:"Shear Capacity (Vd)",value:E.toFixed(2)+" kN",sub:T?"High Shear Condition":"Low Shear Check",status:W?"pass":"fail"},{label:"Section Class",value:`Class ${D}`,status:"info"}],j=`
    <div class="calculator-layout">
      <div class="results-main">
        ${de(z)}
        <div style="margin: 1.5rem 0; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <strong>Conclusion:</strong> Section <strong>${l}</strong> is <strong>${P==="pass"?"SAFE":"UNSAFE"}</strong> for the applied forces.
        </div>
        ${ue("Calculation Steps",p)}
      </div>
      <div class="results-sidebar">
        ${ve(G)}
      </div>
    </div>
  `;a.innerHTML=j,q([{label:"Section",value:l},{label:"Md",value:U.toFixed(2)+" kN·m"},{label:"Vd",value:E.toFixed(2)+" kN"},{label:"Status",value:P==="pass"?"✅ SAFE":"❌ UNSAFE"}])}function ra(e){e.innerHTML=`
    <div class="calculator-page" id="steel-beam-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Steel Beam Design</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Steel Beam Design</h2>
        <p>Calculate bending and shear capacity of ISMB sections including lateral torsional buckling.</p>
        <span class="calculator-page__code-ref">
          ${y.info} IS 800:2007 — Section 8
        </span>
      </div>

      ${te(["Section classification determines plastic vs elastic section modulus usage","Laterally unsupported case considers Elastic Lateral Buckling Moment (Mcr)","Check for high shear condition incorporates moment capacity reduction if Vz > 0.6*Vd"])}

      ${w("Section & Grade",Hi,y.info)}
      ${w("Span & Support Conditions",ji,y.building)}
      ${w("Design Loads",Ki,y.calculator)}

      ${oe()}

      <div id="steel-beam-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;const a=le(St);a&&ce(e,a),e.querySelector("#btn-calculate").addEventListener("click",Yi),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+St),ra(e),q([])})}const $t="fillet-weld",Zi=[{id:"grade",label:"Steel Grade",type:"select",default:"E250",options:Ee.map(e=>({value:e.grade,label:e.grade}))}],Xi=[{id:"site",label:"Welding Location",type:"select",default:"shop",options:[{value:"shop",label:"Shop Welding (γmw = 1.25)"},{value:"field",label:"Field Welding (γmw = 1.50)"}]},{id:"weld_size",label:"Weld Size (s)",type:"select",default:"6",options:[3,4,5,6,8,10,12].map(e=>({value:e.toString(),label:`${e} mm`}))},{id:"t_max",label:"Thickness of Thicker Part",unit:"mm",default:12,min:1,max:100,step:1,tooltip:"To check minimum weld size"}],Qi=[{id:"pu",label:"Applied Load (Pu)",unit:"kN",default:150,min:1,max:5e3,step:1}];function Ji(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#fillet-weld-results");a||(a=document.createElement("div"),a.id="fillet-weld-results",e.appendChild(a));const t=me(e),i=L(t.pu,1,5e3,"Applied Load"),s=L(t.t_max,1,100,"Thickness of Thicker Part");if(!i.valid||!s.valid){X("Please correct invalid fields before calculating.","error");return}ae($t,t);const o=t.grade,l=t.site==="shop",n=parseFloat(t.pu),r=parseFloat(t.weld_size),d=parseFloat(t.t_max),f=Ee.find(F=>F.grade===o).fu,u=l?Ge.gamma_mw:Ge.gamma_mw_field;let g=[],c=3;d<=10?c=3:d<=20?c=5:d<=32?c=6:d<=50?c=8:c=10,g.push({step:1,title:"Minimum Weld Size (IS 800 Table 21)",formula:`For thicker part = ${d} mm`,result:`s,min = ${c} mm`}),r<c&&X(`Weld size (${r} mm) is less than minimum required (${c} mm).`,"error");const v=.7*r;g.push({step:2,title:"Effective Throat Thickness (t)",formula:"t = 0.7 × s (assumed 90° fusion faces)",result:`t = ${v.toFixed(1)} mm`});const $=f/(Math.sqrt(3)*u);g.push({step:3,title:"Design Stress of Weld (fwd)",formula:`fwd = fu / (√3 × γmw) = ${f} / (√3 × ${u})`,result:`fwd = ${$.toFixed(2)} MPa`});const _=v*$/1e3;g.push({step:4,title:"Weld Capacity per mm",formula:"pdw = t × fwd",result:`pdw = ${_.toFixed(3)} kN/mm`});const h=n/_,p=h+2*r;g.push({step:5,title:"Required Effective Length (Lw)",formula:"Lw = Pu / pdw",result:`Lw = ${h.toFixed(1)} mm`}),g.push({step:6,title:"Actual Length to Provide (Lw,actual)",formula:"Lw,act = Lw + 2s (End Returns)",result:`Lw,act = ${p.toFixed(1)} mm`});const x=[{id:"weld_size_min",label:"Minimum Weld Size (s ≥ s,min)",status:r>=c?"pass":"fail",value:r.toString(),limit:c.toString(),unit:"mm"}],S=[{label:"Total Length to Provide",value:Math.ceil(p)+" mm",sub:`For ${r}mm Fillet Weld`,status:"pass"},{label:"Capacity per mm",value:_.toFixed(2)+" kN",status:"info"},{label:"Throat Thickness",value:v.toFixed(1)+" mm",status:"info"}],M=`
    <div class="calculator-layout">
      <div class="results-main">
        ${de(S)}
        <div style="margin: 1.5rem 0; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <strong>Action:</strong> Provide a <strong>${r} mm</strong> fillet weld for a total continuous length of <strong>${Math.ceil(p)} mm</strong>.
        </div>
        ${ue("Calculation Steps",g)}
      </div>
      <div class="results-sidebar">
        ${ve(x)}
      </div>
    </div>
  `;a.innerHTML=M,q([{label:"Weld Size",value:r+" mm"},{label:"Capacity/mm",value:_.toFixed(2)+" kN/mm"},{label:"Length to Provide",value:Math.ceil(p)+" mm"}])}function ca(e){e.innerHTML=`
    <div class="calculator-page" id="fillet-weld-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Fillet Weld Design</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Fillet Weld Design</h2>
        <p>Calculate required fillet weld length for a given design load.</p>
        <span class="calculator-page__code-ref">
          ${y.info} IS 800:2007 — Section 10.5
        </span>
      </div>

      ${te(["Calculated assuming a fusion face angle of 90° (effective throat t = 0.7 × s)","Automatically adds 2s to the effective length to account for weld end returns","Load is assumed uniformly distributed along the entire length"])}

      ${w("Material Grades",Zi,y.info)}
      ${w("Weld Details",Xi,y.building)}
      ${w("Design Loads",Qi,y.calculator)}

      ${oe()}

      <div id="fillet-weld-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;const a=le($t);a&&ce(e,a),e.querySelector("#btn-calculate").addEventListener("click",Ji),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+$t),ca(e),q([])})}const Ft="bolted-connection",es=[{id:"grade",label:"Plate Steel Grade",type:"select",default:"E250",options:Ee.map(e=>({value:e.grade,label:e.grade}))}],ts=[{id:"bolt_grade",label:"Bolt Grade (Property Class)",type:"select",default:"4.6",options:[{value:"4.6",label:"Grade 4.6 (fub = 400 MPa)"},{value:"8.8",label:"Grade 8.8 (fub = 800 MPa)"}]},{id:"bolt_dia",label:"Bolt Diameter (d)",type:"select",default:"20",options:[12,16,20,24,30].map(e=>({value:e.toString(),label:`M${e}`}))}],as=[{id:"joint_type",label:"Joint Type",type:"select",default:"lap",options:[{value:"lap",label:"Lap Joint (Single Shear)"},{value:"single_butt",label:"Single Cover Butt (Single Shear)"},{value:"double_butt",label:"Double Cover Butt (Double Shear)"}]},{id:"t_main",label:"Main Plate Thickness",unit:"mm",default:12,min:1,max:100,step:1},{id:"t_cover",label:"Cover Plates Thickness",unit:"mm",default:16,min:1,max:100,step:1,tooltip:"Required for Butt Joints"},{id:"pitch",label:"Pitch/Gauge (p)",unit:"mm",default:50,min:20,max:200,step:5},{id:"end_dist",label:"End/Edge (e)",unit:"mm",default:40,min:20,max:100,step:5}],is=[{id:"pu",label:"Applied Load (Pu)",unit:"kN",default:300,min:1,max:5e3,step:1}];function ss(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#bolt-results");a||(a=document.createElement("div"),a.id="bolt-results",e.appendChild(a));const t=me(e),i=L(t.pu,1,5e3,"Applied Load"),s=L(t.t_main,1,100,"Main Plate"),o=L(t.pitch,20,200,"Pitch"),l=L(t.end_dist,20,100,"End Distance");if(!i.valid||!s.valid||!o.valid||!l.valid){X("Please correct invalid fields before calculating.","error");return}ae(Ft,t);const n=t.grade,r=t.joint_type,d=parseFloat(t.pu),m=parseInt(t.bolt_dia),f=parseFloat(t.bolt_grade),u=parseFloat(t.t_main),g=parseFloat(t.t_cover)||0,c=parseFloat(t.pitch),v=parseFloat(t.end_dist),_=Ee.find(ie=>ie.grade===n).fu,h=f===4.6?400:800,p=Ge.gamma_mb;let b=[],x=m+2;m<=14?x=m+1:m>=24&&(x=m+3),b.push({step:1,title:"Hole Clearance",formula:"d0 = d + clearance",result:`d0 = ${x} mm`});const S=2.5*m,M=1.5*x;b.push({step:2,title:"Pitch & End Distance Check",formula:`p_min = ${S} mm, e_min = ${M} mm`,result:c>=S&&v>=M?"OK":"FAIL (Spacing too small)"});let F=1,B=0;r==="double_butt"&&(F=1,B=1);const C=Math.PI*m*m/4,D=.78*C,I=h/Math.sqrt(3)*(F*D+B*C)/(p*1e3);b.push({step:3,title:"Shear Capacity (Vdsb)",formula:"Vdsb = (fub/√3)(nn×Anb + ns×Asb)/γmb",result:`Vdsb = ${I.toFixed(2)} kN`});const k=v/(3*x),E=c/(3*x)-.25,T=h/_,R=Math.min(k,E,T,1);b.push({step:4,title:"Bearing Coefficient (kb)",formula:"kb = min(e/3d0, p/3d0 - 0.25, fub/fu, 1.0)",result:`kb = ${R.toFixed(3)}`});let N=u;r==="lap"?N=u:(r==="double_butt"||r==="single_butt")&&(N=Math.min(u,g));const P=2.5*R*m*N*_/(p*1e3);b.push({step:5,title:"Bearing Capacity (Vdpb)",formula:"Vdpb = (2.5×kb×d×t×fu) / γmb",result:`Vdpb = ${P.toFixed(2)} kN`});const G=Math.min(I,P);b.push({step:6,title:"Bolt Value (Vd)",formula:"Vd = min(Vdsb, Vdpb)",result:`Vd = ${G.toFixed(2)} kN`});const z=Math.ceil(d/G),j=[{id:"min_pitch",label:"Minimum Pitch Check (p ≥ 2.5d)",status:c>=S?"pass":"fail",value:c.toFixed(0),limit:S.toFixed(0),unit:"mm"},{id:"min_edge",label:"Minimum End Distance Check (e ≥ 1.5d0)",status:v>=M?"pass":"fail",value:v.toFixed(0),limit:M.toFixed(0),unit:"mm"}],O=[{label:"Bolt Value",value:G.toFixed(2)+" kN",sub:I<P?"Governed by Shear":"Governed by Bearing",status:"pass"},{label:"Bolts Required",value:z.toString(),sub:`For load of ${d} kN`,status:"pass"},{label:"Joint Shear Planes",value:(B+F).toString(),status:"info"}],V=`
    <div class="calculator-layout">
      <div class="results-main">
        ${de(O)}
        <div style="margin: 1.5rem 0; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <strong>Action:</strong> Provide <strong>${z}</strong> numbers of M${m} Grade ${f} bolts.
        </div>
        ${ue("Calculation Steps",b)}
      </div>
      <div class="results-sidebar">
        ${ve(j)}
      </div>
    </div>
  `;a.innerHTML=V,q([{label:"Bolt Value",value:G.toFixed(2)+" kN"},{label:"Bolts Req",value:z.toString()},{label:"Governing",value:I<P?"Shear":"Bearing"}])}function da(e){e.innerHTML=`
    <div class="calculator-page" id="bolt-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Bolted Connection Design</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Bolted Connection Design</h2>
        <p>Calculate capacity of bearing-type bolts in shear and bearing.</p>
        <span class="calculator-page__code-ref">
          ${y.info} IS 800:2007 — Section 10.3
        </span>
      </div>

      ${te(["Calculated for ordinary bearing-type bolts (not HSFG)","Net tensile area of bolt is taken as 0.78 × Gross area","Threads are conservatively assumed to intercept the shear plane in lap and single butt joints","Failure by tearing of plates (block shear) is not checked automatically"])}

      ${w("Material Details",es,y.info)}
      ${w("Bolt Specifications",ts,y.shield)}
      ${w("Joint Configuration",as,y.building)}
      ${w("Design Load",is,y.calculator)}

      ${oe()}

      <div id="bolt-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;const a=le(Ft);a&&ce(e,a);const t=e.querySelector("#joint_type"),i=e.querySelector("#t_cover"),s=i?i.closest(".input-group"):null;t&&s&&(t.addEventListener("change",o=>{o.target.value==="lap"?s.style.display="none":s.style.display="block"}),a&&a.joint_type==="lap"||t.value==="lap"?s.style.display="none":s.style.display="block"),e.querySelector("#btn-calculate").addEventListener("click",ss),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+Ft),da(e),q([])})}const ua=[{id:"rcc",name:"Reinforced Cement Concrete (RCC)",weight:25,type:"Concrete"},{id:"pcc",name:"Plain Cement Concrete (PCC)",weight:24,type:"Concrete"},{id:"brick_solid",name:"Common Burnt Clay Bricks",weight:19.2,type:"Masonry"},{id:"brick_flyash",name:"Fly Ash Bricks",weight:16,type:"Masonry"},{id:"block_aac",name:"AAC Blocks",weight:6.5,type:"Masonry"},{id:"block_solid",name:"Solid Concrete Blocks",weight:21,type:"Masonry"},{id:"steel",name:"Structural Steel",weight:78.5,type:"Metals"},{id:"plaster_cm",name:"Cement Mortar Plaster",weight:20.4,type:"Finishes"},{id:"screed",name:"Cement Concrete Screed",weight:24,type:"Finishes"},{id:"marble",name:"Marble Stone",weight:26.5,type:"Finishes"},{id:"granite",name:"Granite Stone",weight:26.5,type:"Finishes"},{id:"tiles_ceramic",name:"Ceramic Tiles",weight:20,type:"Finishes"},{id:"timber",name:"Timber (Hardwood)",weight:8.5,type:"Wood"},{id:"soil_dry",name:"Dry Soil",weight:16,type:"Earth & Water"},{id:"soil_sat",name:"Saturated Soil",weight:20,type:"Earth & Water"},{id:"water",name:"Water",weight:9.81,type:"Earth & Water"},{id:"glass",name:"Glass",weight:25,type:"Miscellaneous"},{id:"gypsum",name:"Gypsum Board / False Ceiling",weight:8,type:"Miscellaneous"}],tt=[{group:"Residential Buildings",usage:"Living rooms, Bed rooms",udl:2,point:1.8},{group:"Residential Buildings",usage:"Kitchens",udl:2,point:1.8},{group:"Residential Buildings",usage:"Corridors, Passages, Staircases",udl:3,point:4.5},{group:"Residential Buildings",usage:"Balconies",udl:3,point:1.5},{group:"Educational Buildings",usage:"Classrooms, Lecture rooms",udl:3,point:2.7},{group:"Educational Buildings",usage:"Corridors, Passages, Stairs",udl:4,point:4.5},{group:"Educational Buildings",usage:"Reading rooms (Libraries)",udl:3,point:4.5},{group:"Educational Buildings",usage:"Stack rooms (Libraries)",udl:6,point:4.5},{group:"Office Buildings",usage:"Rooms for general use",udl:2.5,point:2.7},{group:"Office Buildings",usage:"Rooms with computing/filing",udl:3,point:2.7},{group:"Office Buildings",usage:"Corridors, Stairs, Balconies",udl:4,point:4.5},{group:"Commercial / Retail",usage:"Shop floors",udl:4,point:3.6},{group:"Commercial / Retail",usage:"Corridors and Stairs",udl:4,point:4.5},{group:"Assembly Buildings",usage:"Fixed seating (Theatres)",udl:4,point:0},{group:"Assembly Buildings",usage:"No seating (Dance halls, Gyms)",udl:5,point:3.6},{group:"Roofs",usage:"Flat/Pitched covered (Access provided)",udl:1.5,point:1.8},{group:"Roofs",usage:"Flat/Pitched covered (No access)",udl:.75,point:.9}],ls=[{city:"Agra",vb:47},{city:"Ahmedabad",vb:39},{city:"Bengaluru",vb:33},{city:"Bhopal",vb:39},{city:"Bhubaneswar",vb:50},{city:"Chandigarh",vb:47},{city:"Chennai",vb:50},{city:"Delhi",vb:47},{city:"Guwahati",vb:50},{city:"Hyderabad",vb:44},{city:"Jaipur",vb:47},{city:"Kochi",vb:39},{city:"Kolkata",vb:50},{city:"Lucknow",vb:47},{city:"Mumbai",vb:44},{city:"Patna",vb:47},{city:"Pune",vb:39},{city:"Srinagar",vb:39},{city:"Trivandrum",vb:39},{city:"Visakhapatnam",vb:50}],ye=[[10,1.05,1,.91,.8],[15,1.09,1.05,.97,.8],[20,1.12,1.07,1.01,.8],[30,1.15,1.12,1.06,.97],[50,1.2,1.17,1.12,1.1],[100,1.26,1.24,1.2,1.2],[150,1.3,1.28,1.24,1.24],[200,1.32,1.3,1.27,1.27],[250,1.34,1.32,1.29,1.28],[300,1.35,1.34,1.31,1.3],[400,1.37,1.36,1.34,1.32],[500,1.39,1.38,1.36,1.34]];function os(e,a){const t=a;if(e<=ye[0][0])return ye[0][t];if(e>=ye[ye.length-1][0])return ye[ye.length-1][t];for(let i=0;i<ye.length-1;i++){if(e===ye[i][0])return ye[i][t];if(e>ye[i][0]&&e<ye[i+1][0]){const s=ye[i][0],o=ye[i+1][0],l=ye[i][t],n=ye[i+1][t];return l+(e-s)*(n-l)/(o-s)}}return 1}const ns=[{zone:"II",Z:.1,factor:.1},{zone:"III",Z:.16,factor:.16},{zone:"IV",Z:.24,factor:.24},{zone:"V",Z:.36,factor:.36}],rs=[{id:"I_1.5",name:"Important Service/Community Buildings (Hospitals, Schools)",I:1.5},{id:"I_1.2",name:"Residential/Commercial with >200 occupancy",I:1.2},{id:"I_1.0",name:"All other buildings",I:1}],cs=[{id:"OMRF",name:"Ordinary RC Moment-Resisting Frame (OMRF)",R:3},{id:"SMRF",name:"Special RC Moment-Resisting Frame (SMRF)",R:5},{id:"STEEL_OMRF",name:"Steel OMRF",R:4},{id:"STEEL_SMRF",name:"Steel SMRF",R:5},{id:"STEEL_EBF",name:"Steel Eccentrically Braced Frame",R:5},{id:"MASONRY_URM",name:"Unreinforced Masonry",R:1.5},{id:"MASONRY_RM",name:"Reinforced Masonry",R:3}];function ds(e,a){if(e===0)return 1;if(a===1){if(e<.1)return 1+15*e;if(e>=.1&&e<=.4)return 2.5;if(e>.4&&e<=4)return 1/e}else if(a===2){if(e<.1)return 1+15*e;if(e>=.1&&e<=.55)return 2.5;if(e>.55&&e<=4)return 1.36/e}else if(a===3){if(e<.1)return 1+15*e;if(e>=.1&&e<=.67)return 2.5;if(e>.67&&e<=4)return 1.67/e}return a===1?1/4:a===2?1.36/4:a===3?1.67/4:1}const Mt="dead-load",ma=[],us=[{value:"",label:"-- Select Material --"},...ua.map(e=>({value:e.id,label:`${e.name} (${e.weight} kN/m³)`}))];for(let e=1;e<=5;e++)ma.push({id:`mat_${e}`,label:`Layer ${e} Material`,type:"select",options:us},{id:`thk_${e}`,label:`Layer ${e} Thickness`,unit:"mm",type:"number",min:0,max:2e3,step:5,placeholder:"e.g. 150"});function ms(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#dead-load-results");a||(a=document.createElement("div"),a.id="dead-load-results",e.appendChild(a));const t=me(e);ae(Mt,t);let i=0,s=[],o=0;for(let d=1;d<=5;d++){const m=t[`mat_${d}`],f=t[`thk_${d}`];if(m&&f){const u=parseFloat(f);if(u>0){const g=ua.find(c=>c.id===m);if(g){const c=g.weight*(u/1e3);i+=c,o++,s.push({step:o,title:`Layer ${d}: ${g.name}`,formula:`γ × t = ${g.weight.toFixed(1)} kN/m³ × ${(u/1e3).toFixed(3)} m`,result:`q = ${c.toFixed(2)} kN/m²`})}}}}if(o===0){X("Please select at least one material and provide its thickness.","error");return}s.push({step:"Σ",title:"Total Surface Dead Load",formula:"Sum of all layer loads",result:`w,DL = ${i.toFixed(2)} kN/m²`});const l=i*1.5,n=[{label:"Total Dead Load (Unfactored)",value:i.toFixed(2)+" kN/m²",sub:`From ${o} layers`,status:"pass"},{label:"Factored Dead Load (1.5)",value:l.toFixed(2)+" kN/m²",status:"info"}],r=`
    <div class="calculator-layout">
      <div class="results-main">
        ${de(n)}
        ${ue("Calculation Steps",s)}
      </div>
      <div class="results-sidebar">
        <!-- Optional extra info/checks area -->
        <div style="padding: 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <h4 style="margin-top: 0; color: var(--text-color); font-size: 0.95rem; display: flex; align-items: center; gap: 0.5rem;">
            ${y.info} Note
          </h4>
          <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">
            Dead load factors depend on load combinations. Typically, γf = 1.5 under DL+LL combinations per IS 456 Table 18. Adjust as required for seismic/wind combinations.
          </p>
        </div>
      </div>
    </div>
  `;a.innerHTML=r,q([{label:"Unfactored DL",value:i.toFixed(2)+" kN/m²"},{label:"Factored DL",value:l.toFixed(2)+" kN/m²"}])}function pa(e){e.innerHTML=`
    <div class="calculator-page" id="dead-load-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Dead Load Estimator</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Surface Dead Load</h2>
        <p>Calculate the self-weight of composite floor/roof assemblies.</p>
        <span class="calculator-page__code-ref">
          ${y.info} IS 875 (Part 1): 1987
        </span>
      </div>

      ${te(["Calculates total surface load by multiplying material unit weights with specified layer thickness","Factored load assumes a generic load factor of 1.5. Consult IS 456 Table 18 for specific combinations"])}

      <div style="margin-bottom: 2rem;">
        <p style="margin-bottom: 1rem; color: var(--text-muted); font-size: 0.9rem;">
          Select materials and input their thicknesses to calculate the total surface dead load (kN/m²). Leave unused layers blank.
        </p>
        ${w("Assembly Layers",ma,y.building)}
      </div>

      ${oe()}

      <div id="dead-load-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;const a=le(Mt);a&&ce(e,a),e.querySelector("#btn-calculate").addEventListener("click",ms),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+Mt),pa(e),q([])})}const ot="live-load",ps=[...new Set(tt.map(e=>e.group))],fs=[{id:"group",label:"Building Occupancy Type",type:"select",options:[{value:"",label:"-- Select Occupancy --"},...ps.map(e=>({value:e,label:e}))]},{id:"usage",label:"Specific Room / Area Usage",type:"select",options:[{value:"",label:"-- Select Usage --"}]}];function et(e){const a=document.getElementById("live-load-result-box");if(!e){a.innerHTML="",q([]);return}const t=e.udl*1.5,i=[{label:"UDL (Uniformly Distributed)",value:e.udl.toFixed(2)+" kN/m²",sub:"Factored: "+t.toFixed(2),status:"pass"},{label:"Concentrated Point Load",value:e.point.toFixed(2)+" kN",status:"info"}];a.innerHTML=`
    <div class="calculator-layout" style="margin-top: 2rem;">
      <div class="results-main">
        <div class="results-panel" style="margin-top: 0;">
          <div class="results-panel__header">
            <h3>Live Load Limits (IS 875 Part 2)</h3>
          </div>
          ${de(i)}
        </div>
      </div>
    </div>
  `,q([{label:"Occupancy",value:e.group},{label:"Usage",value:e.usage.split(",")[0]},{label:"UDL",value:e.udl.toFixed(2)+" kN/m²"}])}function vs(e){e.innerHTML=`
    <div class="calculator-page" id="live-load-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Live Load Reference</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Live Load Reference</h2>
        <p>Quickly lookup imposed loads for various building occupancies.</p>
        <span class="calculator-page__code-ref">
          ${y.info} IS 875 (Part 2): 1987
        </span>
      </div>

      ${te(["Values represent basic characteristic imposed loads without area reductions","For design, these characteristic loads should be multiplied by appropriate partial safety factors (γf)"])}

      ${w("Occupancy Category",fs,y.building)}

      <div id="live-load-result-box"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;const a=e.querySelector("#group"),t=e.querySelector("#usage");t&&!t.options.length>1&&(t.disabled=!0);function i(o,l=""){const n=tt.filter(r=>r.group===o);t.innerHTML='<option value="">-- Select Usage --</option>'+n.map(r=>`<option value="${r.usage}">${r.usage}</option>`).join(""),t.disabled=n.length===0,l&&(t.value=l)}a.addEventListener("change",o=>{i(o.target.value),et(null),ae(ot,{group:o.target.value,usage:""})}),t.addEventListener("change",o=>{const l=a.value,n=o.target.value;if(ae(ot,{group:l,usage:n}),l&&n){const r=tt.find(d=>d.group===l&&d.usage===n);et(r)}else et(null)});const s=le(ot);if(s&&s.group&&(a.value=s.group,i(s.group,s.usage),s.usage)){const o=tt.find(l=>l.group===s.group&&l.usage===s.usage);o&&et(o)}}const kt="wind-load",bs=[{id:"city",label:"Reference City",type:"select",default:"47",options:ls.map(e=>({value:e.vb.toString(),label:`${e.city} (${e.vb} m/s)`}))},{id:"category",label:"Terrain Category",type:"select",default:"3",options:[{value:"1",label:"Category 1 (Exposed sea coasts, flat plains)"},{value:"2",label:"Category 2 (Open terrain, few obstacles)"},{value:"3",label:"Category 3 (Suburbs, small towns)"},{value:"4",label:"Category 4 (Large city centers)"}]}],gs=[{id:"height",label:"Height above ground (z)",unit:"m",default:15,min:5,max:500,step:1},{id:"k1",label:"Risk Coefficient (k1)",default:1,min:.5,max:1.5,step:.01,tooltip:"Typically 1.0 for 50-year design life"},{id:"k3",label:"Topography Factor (k3)",default:1,min:1,max:1.36,step:.01,tooltip:"1.0 if upwind slope < 3°"},{id:"k4",label:"Importance Factor (k4)",default:1,min:1,max:1.3,step:.15,tooltip:"1.3 for post-cyclone structures, 1.0 otherwise"}];function hs(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#wind-load-results");a||(a=document.createElement("div"),a.id="wind-load-results",e.appendChild(a));const t=me(e),i=L(t.height,5,500,"Height (z)"),s=L(t.k1,.5,1.5,"Risk Coefficient (k1)"),o=L(t.k3,1,1.36,"Topography Factor (k3)"),l=L(t.k4,1,1.3,"Importance Factor (k4)");if(!i.valid||!s.valid||!o.valid||!l.valid){X("Please correct invalid fields before calculating.","error");return}ae(kt,t);const n=parseFloat(t.city),r=parseInt(t.category),d=parseFloat(t.height),m=parseFloat(t.k1),f=parseFloat(t.k3),u=parseFloat(t.k4);let g=[];g.push({step:1,title:"Basic Wind Speed (Vb)",formula:"IS 875 Part 3 Appendix A",result:`Vb = ${n.toFixed(1)} m/s`});const c=os(d,r);g.push({step:2,title:"Terrain & Height Factor (k2)",formula:`Category ${r}, z = ${d}m (Table 2)`,result:`k2 = ${c.toFixed(3)}`});const v=n*m*c*f*u;g.push({step:3,title:"Design Wind Speed (Vz)",formula:"Vz = Vb × k1 × k2 × k3 × k4",result:`Vz = ${v.toFixed(2)} m/s`});const _=.6*v*v/1e3;g.push({step:4,title:"Design Wind Pressure (pz)",formula:"pz = 0.6 × Vz² (in N/m²)",result:`pz = ${_.toFixed(3)} kN/m²`});const h=[{label:"Design Wind Pressure (pz)",value:_.toFixed(3)+" kN/m²",sub:`At height ${d}m`,status:"pass"},{label:"Design Wind Speed (Vz)",value:v.toFixed(1)+" m/s",status:"info"},{label:"Factors",value:`k1=${m}, k2=${c.toFixed(2)}`,status:"info"}],p=`
    <div class="calculator-layout">
      <div class="results-main">
        ${de(h)}
        <div style="margin: 1.5rem 0; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <strong>Note:</strong> Total design wind load on the building = <strong>pz × Ae × Cf</strong> (where Ae is effective frontal area, and Cf is the force coefficient).
        </div>
        ${ue("Calculation Steps",g)}
      </div>
      <div class="results-sidebar">
        <div style="padding: 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <h4 style="margin-top: 0; color: var(--text-color); font-size: 0.95rem; display: flex; align-items: center; gap: 0.5rem;">
            ${y.info} Factors Applied
          </h4>
          <ul class="clean-list" style="margin-top: 0.75rem;">
            <li><strong style="color: var(--text-color)">k1:</strong> ${m.toFixed(2)}</li>
            <li><strong style="color: var(--text-color)">k2:</strong> ${c.toFixed(3)}</li>
            <li><strong style="color: var(--text-color)">k3:</strong> ${f.toFixed(2)}</li>
            <li><strong style="color: var(--text-color)">k4:</strong> ${u.toFixed(2)}</li>
          </ul>
        </div>
      </div>
    </div>
  `;a.innerHTML=p,q([{label:"Height (z)",value:d+" m"},{label:"Vz",value:v.toFixed(1)+" m/s"},{label:"pz",value:_.toFixed(3)+" kN/m²"}])}function fa(e){e.innerHTML=`
    <div class="calculator-page" id="wind-load-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Wind Load Calculator</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Wind Load Calculator</h2>
        <p>Calculate the design wind speed and wind pressure at a specified height based on terrain category.</p>
        <span class="calculator-page__code-ref">
          ${y.info} IS 875 (Part 3): 2015
        </span>
      </div>

      ${te(["Calculates the absolute design wind pressure pz factoring terrain/topography","Topography Factor (k3) assumes a default value of 1.0 (gradient < 3°)","Uses empirical equations to continuously compute k2 factor for absolute height z"])}

      ${w("Geography & Terrain",bs,y.building)}
      ${w("Modifiers & Height",gs,y.calculator)}

      ${oe()}

      <div id="wind-load-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;const a=le(kt);a&&ce(e,a),e.querySelector("#btn-calculate").addEventListener("click",hs),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+kt),fa(e),q([])})}const Lt="seismic-load",ys=[{id:"zone",label:"Seismic Zone (Z)",type:"select",default:"0.24",options:ns.map(e=>({value:e.Z.toString(),label:`Zone ${e.zone} (Z = ${e.Z.toFixed(2)})`}))},{id:"soil",label:"Soil Type",type:"select",default:"2",options:[{value:"1",label:"Type I (Rock / Hard Soil)"},{value:"2",label:"Type II (Medium Soil)"},{value:"3",label:"Type III (Soft Soil)"}]}],xs=[{id:"importance",label:"Importance Factor (I)",type:"select",default:"1",options:rs.map(e=>({value:e.I.toString(),label:`${e.name} (I = ${e.I})`}))},{id:"response",label:"Response Reduction (R)",type:"select",default:"5",options:cs.map(e=>({value:e.R.toString(),label:`${e.name} (R = ${e.R})`}))},{id:"frame_type",label:"Structural System",type:"select",default:"rc_bare",options:[{value:"rc_bare",label:"RC Bare Moment Resisting Frame"},{value:"steel_bare",label:"Steel Bare Moment Resisting Frame"},{value:"infilled",label:"All buildings with masonry infills"}]},{id:"h",label:"Building Height (h)",unit:"m",default:15,min:3,max:250,step:1},{id:"d",label:"Base Dimension (d)",unit:"m",default:20,min:5,max:250,step:1,tooltip:"Dimension in Earthquake direction"},{id:"w",label:"Total Seismic Weight (W)",unit:"kN",default:1e4,min:100,max:1e5,step:100}];function _s(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#seismic-load-results");a||(a=document.createElement("div"),a.id="seismic-load-results",e.appendChild(a));const t=me(e),i=L(t.h,3,250,"Building Height"),s=L(t.w,100,1e5,"Seismic Weight");let o=i.valid&&s.valid;if(t.frame_type==="infilled"&&(L(t.d,5,250,"Base Dimension").valid||(o=!1)),!o){X("Please correct invalid fields before calculating.","error");return}ae(Lt,t);const l=parseFloat(t.zone),n=parseFloat(t.importance),r=parseFloat(t.response),d=parseInt(t.soil),m=t.frame_type,f=parseFloat(t.h),u=parseFloat(t.d),g=parseFloat(t.w);let c=[],v=0,$="";m==="rc_bare"?(v=.075*Math.pow(f,.75),$="Ta = 0.075 × h^0.75 (RC Moment Resisting Frame)"):m==="steel_bare"?(v=.085*Math.pow(f,.75),$="Ta = 0.085 × h^0.75 (Steel MRF)"):(v=.09*f/Math.sqrt(u),$="Ta = 0.09h / √d (All buildings with masonry infill panels)"),c.push({step:1,title:"Approximate Natural Period (Ta)",formula:$,result:`Ta = ${v.toFixed(3)} sec`});const _=ds(v,d);c.push({step:2,title:"Design Acceleration Spectrum (Sa/g)",formula:`IS 1893 Fig 2 for Soil Type ${d} at Ta=${v.toFixed(3)}s`,result:`Sa/g = ${_.toFixed(3)}`});let h=l/2*(n/r)*_;const p=l/2;let b="";h<p&&(h=p,b=` (Governed by Min Ah = Z/2 = ${p.toFixed(3)})`),c.push({step:3,title:"Horizontal Seismic Coefficient (Ah)",formula:"Ah = (Z/2) × (I/R) × (Sa/g)",result:`Ah = ${h.toFixed(4)}${b}`});const x=h*g;c.push({step:4,title:"Design Seismic Base Shear (VB)",formula:`VB = Ah × W = ${h.toFixed(4)} × ${g}`,result:`VB = ${x.toFixed(2)} kN`});const S=[{label:"Base Shear (VB)",value:x.toFixed(2)+" kN",sub:`Ah = ${h.toFixed(4)}`,status:"pass"},{label:"Natural Period (Ta)",value:v.toFixed(3)+" s",status:"info"},{label:"Spectrum (Sa/g)",value:_.toFixed(3),sub:`Soil Type ${d}`,status:"info"}],M=`
    <div class="calculator-layout">
      <div class="results-main">
        ${de(S)}
        <div style="margin: 1.5rem 0; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <strong>Note:</strong> Ah = ${h.toFixed(4)}. Base shear VB acts at the base of the building and must be distributed along the height of the building per Clause 7.6.3.
        </div>
        ${ue("Calculation Steps",c)}
      </div>
      <div class="results-sidebar">
        <div style="padding: 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <h4 style="margin-top: 0; color: var(--text-color); font-size: 0.95rem; display: flex; align-items: center; gap: 0.5rem;">
            ${y.info} Equivalent Static Method
          </h4>
          <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">
            The static method is restricted to regular buildings of limited height (≤ 15m in seismic zones IV & V). For taller or irregular buildings, dynamic analysis is mandatory.
          </p>
        </div>
      </div>
    </div>
  `;a.innerHTML=M,q([{label:"Time Period",value:v.toFixed(2)+" s"},{label:"VB",value:x.toFixed(1)+" kN"},{label:"Ah",value:h.toFixed(4)}])}function va(e){e.innerHTML=`
    <div class="calculator-page" id="seismic-load-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Seismic Base Shear</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Seismic Base Shear</h2>
        <p>Determine the total design lateral force (base shear) along the principal direction of the building.</p>
        <span class="calculator-page__code-ref">
          ${y.info} IS 1893 (Part 1): 2016
        </span>
      </div>

      ${te(["Applies the Equivalent Static Method for computing Design Horizontal Seismic Coefficient (Ah)","Approximates natural period (Ta) based on assumed fundamental modes for various structure types","Extracts precise Sa/g boundaries directly from the IS 1893 Fig 2 response spectrum"])}

      ${w("Site Conditions",ys,y.info)}
      ${w("Structural Parameters",xs,y.building)}

      ${oe()}

      <div id="seismic-load-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;const a=le(Lt);a&&ce(e,a);const t=e.querySelector("#frame_type"),i=e.querySelector("#d"),s=i?i.closest(".input-group"):null;t&&s&&(t.addEventListener("change",o=>{o.target.value==="infilled"?s.style.display="block":s.style.display="none"}),a&&a.frame_type!=="infilled"||t.value!=="infilled"?s.style.display="none":s.style.display="block"),e.querySelector("#btn-calculate").addEventListener("click",_s),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+Lt),va(e),q([])})}const qt="unit-converter",ba={length:{baseUnit:"m",units:{m:1,cm:.01,mm:.001,km:1e3,in:.0254,ft:.3048,yd:.9144,mile:1609.34}},force:{baseUnit:"kN",units:{kN:1,N:.001,kgf:.00980665,tf:9.80665,lbf:.00444822,kips:4.44822}},pressure:{baseUnit:"MPa",units:{MPa:1,"N/mm2":1,"N/m2":1e-6,kPa:.001,"kgf/cm2":.0980665,psi:.00689476,ksi:6.89476}},moment:{baseUnit:"kNm",units:{kNm:1,Nmm:1e-6,Nm:.001,kgfm:.00980665,"lbf-ft":.001355818,"kip-in":.1129848}}},Ss=[{id:"category",label:"Conversion Category",type:"select",default:"length",options:[{value:"length",label:"Length / Distance"},{value:"force",label:"Force / Loads"},{value:"pressure",label:"Stress / Pressure"},{value:"moment",label:"Bending Moment"}]}],$s=`
  <div class="input-panel">
    <div class="panel-header" style="margin-bottom: 1.5rem;">
      <h3><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="panel-icon"><path d="m9 18 6-6-6-6"/></svg> Value Converter</h3>
    </div>
    
    <div style="display: flex; gap: 1rem; align-items: center; justify-content: space-between; flex-wrap: wrap;">
      <!-- From -->
      <div style="flex: 1; min-width: 200px;">
        <div class="input-group">
          <label for="val_from">From Value</label>
          <input type="number" id="val_from" class="calc-input" value="1" step="any">
        </div>
        <div class="input-group">
          <label for="unit_from">From Unit</label>
          <select id="unit_from" class="calc-input"></select>
        </div>
      </div>

      <!-- Arrow -->
      <div style="display: flex; align-items: center; justify-content: center; padding: 1rem;">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
      </div>

      <!-- To -->
      <div style="flex: 1; min-width: 200px;">
        <div class="input-group">
          <label for="val_to">To Value</label>
          <input type="number" id="val_to" class="calc-input" value="" readonly style="background: var(--bg-hover); font-weight: 600;">
        </div>
        <div class="input-group">
          <label for="unit_to">To Unit</label>
          <select id="unit_to" class="calc-input"></select>
        </div>
      </div>
    </div>
  </div>
`;function nt(e,a,t){const i=ba[e];if(!i)return;const o=Object.keys(i.units).map(l=>{let n=l;return l==="N/mm2"&&(n="N/mm²"),l==="N/m2"&&(n="N/m²"),l==="kgf/cm2"&&(n="kgf/cm²"),l==="kNm"&&(n="kN·m"),l==="Nmm"&&(n="N·mm"),l==="Nm"&&(n="N·m"),'<option value="'+l+'">'+n+"</option>"}).join("");a.innerHTML=o,t.innerHTML=o,e==="length"?(a.value="m",t.value="ft"):e==="force"?(a.value="kN",t.value="kgf"):e==="pressure"?(a.value="MPa",t.value="N/mm2"):e==="moment"&&(a.value="kNm",t.value="kip-in")}function Fs(e){e.innerHTML=`
    <div class="calculator-page" id="unit-converter-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Unit Converter</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Engineering Unit Converter</h2>
        <p>Instantly convert between common SI, Metric, and Imperial units used in structural engineering.</p>
        <span class="calculator-page__code-ref">
          ${y.reference} Universal Utility
        </span>
      </div>

      ${te(["Transforms structural scalars seamlessly with IEEE-754 precision floating point calculations","Avoids trailing decimal expansions automatically out to maximum six relevant decimal precision figures"])}

      ${w("Domain Selection",Ss,y.database)}

      ${$s}

      <div class="print-footer">
        Generated by Stellar Civil | Internal Utility.
      </div>
    </div>
  `;const a=e.querySelector("#category"),t=e.querySelector("#unit_from"),i=e.querySelector("#unit_to"),s=e.querySelector("#val_from"),o=e.querySelector("#val_to");function l(){const r=a.value;if(!r)return;const d=ba[r],m=d.units[t.value],f=d.units[i.value],u=parseFloat(s.value);if(isNaN(u)||!m||!f){o.value="",q([]);return}const c=u*m/f;let v;c===0?v="0":c<1e-4||c>1e6?v=c.toExponential(4):v=parseFloat(c.toFixed(6)).toString(),o.value=v,q([{label:"From",value:s.value+" "+t.options[t.selectedIndex].text},{label:"Converted",value:v+" "+i.options[i.selectedIndex].text}]),ae(qt,{category:r,unit_from:t.value,unit_to:i.value,val_from:s.value})}const n=le(qt);n&&n.category?(a.value=n.category,nt(n.category,t,i),n.unit_from&&(t.value=n.unit_from),n.unit_to&&(i.value=n.unit_to),n.val_from!==void 0&&(s.value=n.val_from)):nt(a.value,t,i),a.addEventListener("change",()=>{nt(a.value,t,i),l()}),t.addEventListener("change",l),i.addEventListener("change",l),s.addEventListener("input",l),l()}const Ms=[{id:"mat_type",label:"Material Type",type:"select",default:"concrete",options:[{value:"concrete",label:"Concrete (IS 456)"},{value:"steel",label:"Structural Steel (IS 2062)"}]}];function ks(e){let a=`
    <div class="results-panel">
      <div class="results-panel__header">
        <h3>Standard Concrete Grades (IS 456 Table 2)</h3>
      </div>
      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; text-align: left;">
          <thead>
            <tr style="background: var(--bg-hover); border-bottom: 2px solid var(--border-color);">
              <th style="padding: 0.75rem;">Group</th>
              <th style="padding: 0.75rem;">Grade Designation</th>
              <th style="padding: 0.75rem;">fck (N/mm²)</th>
              <th style="padding: 0.75rem;">Elastic Modulus, Ec (MPa)</th>
              <th style="padding: 0.75rem;">Tensile Strength, fcr (MPa)</th>
            </tr>
          </thead>
          <tbody>
  `;Aa.forEach(t=>{let i="Ordinary";t>=25&&t<=60?i="Standard":t>60&&(i="High Strength");const s=5e3*Math.sqrt(t),o=.7*Math.sqrt(t);a+=`
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.75rem;">${i}</td>
        <td style="padding: 0.75rem; font-weight: bold;">M${t}</td>
        <td style="padding: 0.75rem;">${t}</td>
        <td style="padding: 0.75rem;">${s.toFixed(0)}</td>
        <td style="padding: 0.75rem;">${o.toFixed(2)}</td>
      </tr>
    `}),a+=`
          </tbody>
        </table>
      </div>
    </div>
  `,e.innerHTML=`<div class="calculator-layout" style="margin-top: 2rem;"><div class="results-main">${a}</div></div>`,q([{label:"Viewing",value:"Concrete Properties (IS 456)"}])}function Ls(e){let a=`
    <div class="results-panel">
      <div class="results-panel__header">
        <h3>Structural Steel Grades (IS 2062)</h3>
      </div>
      <div style="margin: 1rem 0; padding: 1rem; background: var(--bg-card); border-radius: var(--radius-sm);">
        <p><strong>Universal Properties (IS 800 Cl 2.2.4):</strong></p>
        <ul style="margin-top: 0.5rem; padding-left: 1.5rem; color: var(--text-muted);">
          <li>Modulus of Elasticity, E = ${Ge.E} N/mm²</li>
          <li>Poisson's Ratio, v = ${Ge.v}</li>
          <li>Unit Mass, ρ = 7850 kg/m³</li>
        </ul>
      </div>
      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; text-align: left;">
          <thead>
            <tr style="background: var(--bg-hover); border-bottom: 2px solid var(--border-color);">
              <th style="padding: 0.75rem;">Grade Designation</th>
              <th style="padding: 0.75rem;">Yield Stress, fy (MPa)<br><small>for t ≤ 20mm</small></th>
              <th style="padding: 0.75rem;">Ultimate Tensile, fu (MPa)</th>
            </tr>
          </thead>
          <tbody>
  `;Ee.forEach(t=>{a+=`
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.75rem; font-weight: bold;">${t.grade}</td>
        <td style="padding: 0.75rem;">${t.fy}</td>
        <td style="padding: 0.75rem;">${t.fu}</td>
      </tr>
    `}),a+=`
          </tbody>
        </table>
      </div>
    </div>
  `,e.innerHTML=`<div class="calculator-layout" style="margin-top: 2rem;"><div class="results-main">${a}</div></div>`,q([{label:"Viewing",value:"Structural Steel (IS 2062)"}])}function Cs(e){e.innerHTML=`
    <div class="calculator-page" id="material-properties-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Material Guide</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Material Properties Guide</h2>
        <p>Quick reference for standard IS 456 Concrete and IS 2062 Steel grades.</p>
        <span class="calculator-page__code-ref">
          ${y.reference} Reference Tables
        </span>
      </div>

      ${te(["Concrete Elastic Modulus (Ec) approximated as 5000√fck (IS 456:2000)","Steel values extracted from IS 2062 specifications for thickness ≤ 20mm"])}

      ${w("Material Database",Ms,y.database)}

      <div id="results-container"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;const a=e.querySelector("#mat_type"),t=e.querySelector("#results-container");function i(){a.value==="concrete"?ks(t):Ls(t)}a.addEventListener("change",i),i()}const ws="rebar-reference",Is=[{id:"ast_req",label:"Required Area (Ast,req)",unit:"mm²",default:1e3,min:10,max:5e4,step:10},{id:"dia_try",label:"Try Bar Diameter (Φ)",unit:"mm",type:"select",default:"16",options:Et.map(e=>({value:e.toString(),label:`${e} mm`}))},{id:"calc_type",label:"Calculation Mode",type:"select",default:"spacing",options:[{value:"spacing",label:"Slabs / Walls (Find Spacing per meter width)"},{value:"count",label:"Beams / Columns (Find Number of Bars)"}]},{id:"width",label:"Section Width (b)",unit:"mm",default:300,min:50,max:5e3,step:50,tooltip:"Required to check fit for beams"}],Es=`
  <div class="results-panel" style="margin-bottom: 2rem;">
    <div class="results-panel__header">
      <h3>Standard Rebar Properties (IS 1786)</h3>
    </div>
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; text-align: left;">
        <thead>
          <tr style="background: var(--bg-hover); border-bottom: 2px solid var(--border-color);">
            <th style="padding: 0.75rem;">Diameter (Φ)</th>
            <th style="padding: 0.75rem;">Area (mm²)</th>
            <th style="padding: 0.75rem;">Weight (kg/m)</th>
            <th style="padding: 0.75rem;">Perimeter (mm)</th>
          </tr>
        </thead>
        <tbody id="rebar-table-body">
          <!-- Populated by JS -->
        </tbody>
      </table>
    </div>
  </div>
`;function Ds(e){const a=e.querySelector("#rebar-table-body");let t="";Et.forEach(i=>{const s=Wt(i),o=Vt(i),l=Math.PI*i;t+=`
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.75rem; font-weight: bold;">${i} mm</td>
        <td style="padding: 0.75rem;">${s.toFixed(1)}</td>
        <td style="padding: 0.75rem;">${o.toFixed(3)}</td>
        <td style="padding: 0.75rem;">${l.toFixed(1)}</td>
      </tr>
    `}),a.innerHTML=t}function As(){const e=document.querySelector(".calculator-page"),a=e.querySelector("#sizing-results-container"),t=me(e);if(!L(t.ast_req,10,5e4,"Required Area").valid){X("Please correct invalid fields before calculating.","error");return}const s=parseFloat(t.ast_req),o=parseInt(t.dia_try),l=t.calc_type,n=Wt(o);if(l==="spacing"){let r=1e3*n/s;r=Math.floor(r/10)*10,r>300&&(r=300);const d=1e3*n/r;a.innerHTML=`
      <div style="padding: 1.5rem; background: var(--bg-hover); border: 2px solid var(--primary-color); border-radius: var(--radius-md); text-align: center;">
        <h4 style="margin-bottom: 0.5rem; color: var(--text-color);">Provide</h4>
        <div style="font-size: 2rem; font-weight: bold; color: var(--primary-color); margin-bottom: 0.5rem;">
          Φ${o} @ ${r} mm c/c
        </div>
        <p style="color: var(--text-muted); font-size: 0.9rem;">
          Ast provided = ${d.toFixed(1)} mm² / m width<br>
          (Required = ${s} mm²)
        </p>
      </div>
    `,q([{label:"Try Bar",value:`Φ${o}`},{label:"Spacing",value:`${r} mm c/c`}])}else{const r=Math.ceil(s/n),d=r*n;let m="";if(t.width){const f=parseFloat(t.width),u=Math.max(o,20),g=96+r*o+(r-1)*u;g>f?m=`<div class="badge badge--fail" style="margin-top: 1rem; display: inline-block;">Warning: Bars may not fit in single layer (Req Width ${g}mm > ${f}mm)</div>`:m='<div class="badge badge--pass" style="margin-top: 1rem; display: inline-block;">Fits in single layer (Width OK)</div>'}a.innerHTML=`
      <div style="padding: 1.5rem; background: var(--bg-hover); border: 2px solid var(--primary-color); border-radius: var(--radius-md); text-align: center;">
        <h4 style="margin-bottom: 0.5rem; color: var(--text-color);">Provide</h4>
        <div style="font-size: 2rem; font-weight: bold; color: var(--primary-color); margin-bottom: 0.5rem;">
          ${r} - Φ${o}
        </div>
        <p style="color: var(--text-muted); font-size: 0.9rem;">
          Ast provided = ${d.toFixed(1)} mm²<br>
          (Required = ${s} mm²)
        </p>
        ${m}
      </div>
    `,q([{label:"Try Bar",value:`Φ${o}`},{label:"Number",value:`${r} bars`}])}}function Ts(e){e.innerHTML=`
    <div class="calculator-page" id="rebar-reference-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Rebar Reference</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Rebar Reference & Sizer</h2>
        <p>Standard reinforcement bar properties and an area-to-spacing calculator.</p>
        <span class="calculator-page__code-ref">
          ${y.reference} IS 1786
        </span>
      </div>

      ${te(["Rebar area based on nominal diameter (π × d²/4)","Spacing is rounded down to the nearest 10mm for practicality, capped at 300mm max constraint"])}

      ${Es}

      ${w("Bar Sizer / Spacing Calculator",Is,y.calculator)}

      ${oe({includeClearBox:!1})}

      <div id="sizing-results-container" style="margin-top: 1.5rem;"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,Ds(e);const a=loadInputs(ws);a&&ce(e,a);const t=e.querySelector("#calc_type"),i=e.querySelector("#width"),s=i?i.closest(".input-group"):null;t&&s&&(t.addEventListener("change",l=>{l.target.value==="count"?s.style.display="block":(s.style.display="none",i.value="")}),t.value==="count"?s.style.display="block":s.style.display="none");const o=e.querySelector("#btn-calculate");o&&o.addEventListener("click",As)}const Bs=[{code:"IS 456",year:"2000",title:"Plain and Reinforced Concrete - Code of Practice",desc:"The master code for all RCC design and construction in India. Covers limit state design for bending, shear, torsion, and serviceability.",tags:["Concrete","Design","RCC"],file:"/Code Books/is.456.2000.pdf"},{code:"IS 800",year:"2007",title:"General Construction in Steel - Code of Practice",desc:"The primary code for structural steel design using the Limit State Method. Covers tension, compression, bending, and connections.",tags:["Steel","Design"],file:"/Code Books/is.800.2007.pdf"},{code:"IS 875 (Part 1)",year:"1987",title:"Design Loads (Other than Earthquake) - Dead Loads",desc:"Provides unit weights of building materials and stored materials for calculating permanent dead loads.",tags:["Loads","Dead Load"],file:"/Code Books/is.875.1.1987.pdf"},{code:"IS 875 (Part 2)",year:"1987",title:"Design Loads (Other than Earthquake) - Imposed Loads",desc:"Stipulates minimum live loads (UDL and Point Loads) to be assumed for different building occupancies.",tags:["Loads","Live Load"],file:"/Code Books/IS-875---2.pdf"},{code:"IS 875 (Part 3)",year:"2015",title:"Design Loads (Other than Earthquake) - Wind Loads",desc:"Guidelines for determining wind speeds, pressures, and forces on buildings based on terrain, height, and topography.",tags:["Loads","Wind"],file:"/Code Books/is.875.3.2015.pdf"},{code:"IS 1893 (Part 1)",year:"2016",title:"Criteria for Earthquake Resistant Design of Structures",desc:"General provisions and buildings. Covers calculation of design seismic base shear, response spectra, and zone mapping.",tags:["Seismic","Earthquake"],file:"/Code Books/IS-1893---part-1.pdf"},{code:"IS 13920",year:"2016",title:"Ductile Design and Detailing of RC Structures",desc:"Specific provisions for detailing concrete structures subjected to seismic forces to ensure required ductility.",tags:["Detailing","Seismic"],file:"/Code Books/IS-13920.pdf"},{code:"IS 1786",year:"2008",title:"High Strength Deformed Steel Bars and Wires",desc:"Specifications for reinforcing bars (TMT bars) used in concrete, outlining mechanical and chemical properties.",tags:["Material","Rebar"],file:"/Code Books/is.1786.2008.pdf"},{code:"IS 2062",year:"2011",title:"Hot Rolled Medium and High Tensile Structural Steel",desc:"Specifications for structural steel grades (e.g., E250, E350) used in steel structures.",tags:["Material","Steel"],file:"/Code Books/is.2062.2011.pdf"},{code:"IS 2911 (Parts 1-4)",year:"2010",title:"Design and Construction of Pile Foundations",desc:"Comprehensive code for diverse pile foundations including driven cast in-situ, bored cast in-situ, and timber piles.",tags:["Geotech","Piles"],file:"/Code Books/is.2911.1.4.2010.pdf"},{code:"SP 16",year:"1980",title:"Design Aids for Reinforced Concrete to IS 456",desc:"The essential handbook providing charts and tables for rapid design of beams, slabs, columns, and footings.",tags:["Handbook","RCC"],file:"/Code Books/is.sp.16.1980.pdf"},{code:"SP 34",year:"1987",title:"Handbook on Concrete Reinforcement and Detailing",desc:"Provides standard practices for detailing reinforcement in various structural elements like beams, columns, and walls.",tags:["Handbook","Detailing"],file:"/Code Books/is.sp.34.1987.pdf"}];function Ns(e){let a="";Bs.forEach(t=>{const i=t.tags.map(o=>`<span class="badge" style="background: var(--bg-hover); color: var(--text-color); margin-right: 0.5rem;">${o}</span>`).join(""),s=t.file?`
      <a href="${t.file}" target="_blank" download title="Download PDF" style="display: flex; align-items: center; justify-content: center; padding: 0.6rem; background: rgba(59, 130, 246, 0.1); color: var(--primary-color); border-radius: 50%; text-decoration: none; border: 1px solid rgba(59, 130, 246, 0.2); transition: background 0.2s;">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
      </a>`:"";a+=`
      <div class="card" style="padding: 1.5rem; display: flex; flex-direction: column; height: 100%; border: 1px solid var(--border-color); border-top: 4px solid var(--primary-color);">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
          <div>
            <h3 style="margin: 0; color: var(--text-color); font-size: 1.25rem;">${t.code}</h3>
            <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: bold;">[ ${t.year} ]</span>
          </div>
          ${s}
        </div>
        <h4 style="margin: 0 0 1rem 0; font-size: 1.05rem; line-height: 1.3;">${t.title}</h4>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem; flex-grow: 1;">${t.desc}</p>
        <div>${i}</div>
      </div>
    `}),e.innerHTML=`
    <div class="calculator-page" id="is-codes-reference">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — IS Codes Reference</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Indian Standards (IS) Cheatsheet</h2>
        <p>A quick reference directory for essential Indian civil and structural engineering codes.</p>
        <span class="calculator-page__code-ref">
          ${y.reference} BIS Registry
        </span>
      </div>
      
      <div class="input-panel" style="background: transparent; border: none; padding: 0;">
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem;">
          ${a}
        </div>
      </div>
      
      <div class="print-footer">
        Generated by Stellar Civil | Internal Utility.
      </div>
    </div>
  `}const Ct="bbs-generator";let ke=[],rt=1;const Rs=`
  <div class="calculator-page" id="bbs-generator-calc">
    <div class="print-header">
      <div class="print-header__brand">Stellar Civil — Bar Bending Schedule</div>
      <div class="print-header__info"></div>
    </div>

    <div class="calculator-page__header">
      <h2>Bar Bending Schedule (BBS) Generator</h2>
      <p>Estimate cutting lengths and total reinforcement weight per diameter.</p>
      <span class="calculator-page__code-ref">
        ${y.calculator} Detailing Utility
      </span>
    </div>

    ${te(["Cutting length formulas dynamically apply standard bend deductions (e.g. 2d for 90° bends)","Total weight estimations assume density of steel as 7850 kg/m³ per IS codes"])}
    
    <div class="input-panel" style="max-width: 100%;">
      <div style="overflow-x: auto; margin-bottom: 1.5rem;">
        <table style="width: 100%; border-collapse: collapse; text-align: left; min-width: 800px;">
          <thead>
            <tr style="background: var(--bg-hover); border-bottom: 2px solid var(--border-color);">
              <th style="padding: 0.75rem;">Shape</th>
              <th style="padding: 0.75rem; width: 100px;">Φ (mm)</th>
              <th style="padding: 0.75rem; width: 100px;">Members</th>
              <th style="padding: 0.75rem; width: 100px;">Bars/Mem</th>
              <th style="padding: 0.75rem; width: 120px;">A (mm)</th>
              <th style="padding: 0.75rem; width: 120px;">B (mm)</th>
              <th style="padding: 0.75rem; width: 120px;">C (mm)</th>
              <th style="padding: 0.75rem; width: 60px;"></th>
            </tr>
          </thead>
          <tbody id="bbs-tbody">
            <!-- Rows injected here -->
          </tbody>
        </table>
      </div>
      
      <div id="action-bar-container" style="margin-top: 1.5rem;"></div>
    </div>
    <div id="results-container"></div>
    
    <div class="print-footer">
      Generated by Stellar Civil | For reference only. Verify with qualified engineer.
    </div>
  </div>
`;function Ps(e){const a=e.shape==="straight",t=e.shape==="l_shape";return`
    <tr data-id="${e.id}" style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 0.5rem;">
        <select class="calc-input row-input-shape" style="width: 100%; margin: 0; padding: 0.5rem;">
          <option value="straight" ${e.shape==="straight"?"selected":""}>Straight (A)</option>
          <option value="l_shape" ${e.shape==="l_shape"?"selected":""}>L-Shape (A,B)</option>
          <option value="u_shape" ${e.shape==="u_shape"?"selected":""}>U-Shape (A,B,C)</option>
        </select>
      </td>
      <td style="padding: 0.5rem;">
        <select class="calc-input row-input-dia" style="width: 100%; margin: 0; padding: 0.5rem;">
          ${Et.map(i=>`<option value="${i}" ${i===e.dia?"selected":""}>${i}</option>`).join("")}
        </select>
      </td>
      <td style="padding: 0.5rem;">
        <input type="number" class="calc-input row-input-mem" value="${e.mem}" min="1" step="1" style="width: 100%; margin: 0; padding: 0.5rem;">
      </td>
      <td style="padding: 0.5rem;">
        <input type="number" class="calc-input row-input-bars" value="${e.bars}" min="1" step="1" style="width: 100%; margin: 0; padding: 0.5rem;">
      </td>
      <td style="padding: 0.5rem;">
        <input type="number" class="calc-input row-input-a" value="${e.a}" min="0" step="10" placeholder="A" style="width: 100%; margin: 0; padding: 0.5rem;">
      </td>
      <td style="padding: 0.5rem;">
        <input type="number" class="calc-input row-input-b" value="${e.b}" min="0" step="10" placeholder="B" style="width: 100%; margin: 0; padding: 0.5rem;" ${a?"disabled":""}>
      </td>
      <td style="padding: 0.5rem;">
        <input type="number" class="calc-input row-input-c" value="${e.c}" min="0" step="10" placeholder="C" style="width: 100%; margin: 0; padding: 0.5rem;" ${a||t?"disabled":""}>
      </td>
      <td style="padding: 0.5rem; text-align: center;">
        <button class="btn btn-secondary btn-del-row" style="padding: 0.5rem; color: #ef4444;" title="Delete Row">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </td>
    </tr>
  `}function at(e){const a=e.querySelector("#bbs-tbody");a.innerHTML=ke.map(Ps).join(""),a.querySelectorAll(".row-input-shape").forEach(t=>{t.addEventListener("change",i=>{const s=i.target.closest("tr"),o=i.target.value,l=s.querySelector(".row-input-b"),n=s.querySelector(".row-input-c");o==="straight"?(l.disabled=!0,n.disabled=!0):o==="l_shape"?(l.disabled=!1,n.disabled=!0):(l.disabled=!1,n.disabled=!1)})}),a.querySelectorAll(".btn-del-row").forEach(t=>{t.addEventListener("click",i=>{const s=i.target.closest("tr"),o=parseInt(s.getAttribute("data-id"));ke=ke.filter(l=>l.id!==o),at(e)})})}function ga(e){const a=e.querySelectorAll("#bbs-tbody tr"),t=[];a.forEach(i=>{t.push({id:parseInt(i.getAttribute("data-id")),shape:i.querySelector(".row-input-shape").value,dia:parseInt(i.querySelector(".row-input-dia").value)||12,mem:parseInt(i.querySelector(".row-input-mem").value)||1,bars:parseInt(i.querySelector(".row-input-bars").value)||1,a:parseFloat(i.querySelector(".row-input-a").value)||0,b:parseFloat(i.querySelector(".row-input-b").value)||0,c:parseFloat(i.querySelector(".row-input-c").value)||0})}),ke=t}function qs(e){if(ga(e),ae(Ct,{rows:ke}),ke.length===0){X("Add at least one row to calculate.","error");return}let a=0;const t={};let i=`
    <div style="overflow-x: auto; margin-top: 1.5rem;">
      <table style="width: 100%; border-collapse: collapse; text-align: left;">
        <thead>
          <tr style="background: var(--bg-hover); border-bottom: 2px solid var(--border-color);">
            <th style="padding: 0.75rem;">Item</th>
            <th style="padding: 0.75rem;">Shape</th>
            <th style="padding: 0.75rem;">Cut Length (mm)</th>
            <th style="padding: 0.75rem;">Total Length (m)</th>
            <th style="padding: 0.75rem;">Weight (kg)</th>
          </tr>
        </thead>
        <tbody>
  `;ke.forEach((l,n)=>{let r=0;l.shape==="straight"?r=l.a:l.shape==="l_shape"?r=l.a+l.b-2*l.dia:l.shape==="u_shape"&&(r=l.a+l.b+l.c-2*(2*l.dia)),r<0&&(r=0);const d=r*l.mem*l.bars/1e3,m=Vt(l.dia),f=d*m;a+=f,t[l.dia]||(t[l.dia]=0),t[l.dia]+=f,i+=`
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.75rem;">Row ${n+1}</td>
        <td style="padding: 0.75rem; text-transform: capitalize;">${l.shape.replace("_"," ")} (Φ${l.dia})</td>
        <td style="padding: 0.75rem;">${r.toFixed(0)}</td>
        <td style="padding: 0.75rem;">${d.toFixed(2)}</td>
        <td style="padding: 0.75rem; font-weight: bold;">${f.toFixed(2)}</td>
      </tr>
    `}),i+="</tbody></table></div>";let s=`
    <h4 style="margin: 1.5rem 0 1rem;">Summary by Diameter</h4>
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
  `;Object.keys(t).sort((l,n)=>l-n).forEach(l=>{s+=`
      <div style="padding: 1rem; background: var(--bg-hover); border: 1px solid var(--border-color); border-radius: var(--radius-sm); min-width: 150px;">
        <div style="font-size: 0.9rem; color: var(--text-muted);">Φ${l} mm</div>
        <div style="font-size: 1.25rem; font-weight: bold; color: var(--color-primary);">${t[l].toFixed(2)} kg</div>
      </div>
    `}),s+="</div>";const o=e.querySelector("#results-container");o.innerHTML=`
    <div class="results-panel">
      <div class="results-panel__header">
        <h3>Schedule Output</h3>
      </div>
      
      <div style="padding: 1.5rem; background: var(--primary-color); color: white; border-radius: var(--radius-md); text-align: center; margin-bottom: 1.5rem;">
        <h4 style="margin-bottom: 0.5rem; font-weight: normal; opacity: 0.9;">Total Reinforcement Weight</h4>
        <div style="font-size: 2.5rem; font-weight: bold;">
          ${a.toFixed(2)} kg
        </div>
      </div>
      
      ${s}
      ${i}
    </div>
  `,q([{label:"Total Weight",value:a.toFixed(2)+" kg"},{label:"Items",value:ke.length.toString()}])}function Os(e){e.innerHTML=Rs;const a=`
    <div style="display: flex; gap: 1rem; width: 100%;">
      <button id="add-btn" class="btn btn-secondary">
        ${y.plus} Add Row
      </button>
      ${oe({includeClearBox:!0})}
    </div>
  `;e.querySelector("#action-bar-container").innerHTML=a;const t=le(Ct);t&&t.rows&&Array.isArray(t.rows)&&t.rows.length>0?(ke=t.rows,rt=Math.max(...ke.map(i=>i.id))+1):(ke=[{id:1,shape:"straight",dia:12,mem:1,bars:4,a:3e3,b:0,c:0},{id:2,shape:"l_shape",dia:12,mem:1,bars:4,a:3e3,b:200,c:0}],rt=3),at(e),e.querySelector("#add-btn").addEventListener("click",()=>{ga(e),ke.push({id:rt++,shape:"straight",dia:12,mem:1,bars:1,a:1e3,b:0,c:0}),at(e)}),e.querySelector("#btn-calculate").addEventListener("click",()=>{qs(e)}),e.querySelector("#btn-clear").addEventListener("click",()=>{ke=[],at(e),e.querySelector("#results-container").innerHTML="",q([]),localStorage.removeItem("stellar_civil_inputs_"+Ct)})}const it=[{id:"rcc",label:"RCC Design (IS 456)",items:[{id:"slab-design",num:"1.1",title:"Rectangular Slab Design"},{id:"beam-singly",num:"1.2",title:"Singly Reinforced Beam"},{id:"beam-doubly",num:"1.3",title:"Doubly Reinforced Beam"},{id:"beam-t",num:"1.4",title:"T-Beam / L-Beam Design"},{id:"column-short",num:"1.5",title:"Short Column Design"},{id:"footing",num:"1.6",title:"Isolated Footing Design"},{id:"staircase",num:"1.7",title:"Staircase Design"},{id:"retaining-wall",num:"1.8",title:"Cantilever Retaining Wall"}]},{id:"limit-state",label:"Limit State Checks",items:[{id:"shear-design",num:"2.1",title:"Shear & Stirrup Design"},{id:"dev-length",num:"2.2",title:"Development Length"},{id:"deflection",num:"2.3",title:"Deflection Check"},{id:"crack-width",num:"2.4",title:"Crack Width Check"}]},{id:"steel",label:"Steel Design (IS 800)",items:[{id:"tension-member",num:"3.1",title:"Tension Member"},{id:"compression-member",num:"3.2",title:"Compression Member"},{id:"steel-beam",num:"3.3",title:"Beam Design"},{id:"fillet-weld",num:"3.4",title:"Fillet Weld Design"},{id:"bolt-design",num:"3.5",title:"Bolted Connection"}]},{id:"loads",label:"Load Calculations",items:[{id:"dead-load",num:"4.1",title:"Dead Load Calculator"},{id:"live-load",num:"4.2",title:"Live Load Reference"},{id:"wind-load",num:"4.3",title:"Wind Load Calculator"},{id:"seismic-load",num:"4.4",title:"Seismic Load Calculator"}]},{id:"utilities",label:"Utilities & Reference",items:[{id:"unit-converter",num:"6.1",title:"Unit Converter"},{id:"material-props",num:"6.2",title:"Material Properties"},{id:"rebar-reference",num:"6.3",title:"Rebar Reference"},{id:"is-cheatsheet",num:"6.4",title:"IS Code Cheatsheet"},{id:"bbs-generator",num:"6.5",title:"Bar Bending Schedule"}]}],st={};function J(e,a){st[e]=a}J("slab-design",{render:Ua});J("beam-singly",{render:Kt});J("beam-doubly",{render:Yt});J("beam-t",{render:Zt});J("column-short",{render:Xt});J("footing",{render:Qt});J("staircase",{render:Jt});J("retaining-wall",{render:ea});J("shear-design",{render:ta});J("dev-length",{render:aa});J("deflection",{render:ia});J("crack-width",{render:sa});J("tension-member",{render:oa});J("compression-member",{render:na});J("steel-beam",{render:ra});J("fillet-weld",{render:ca});J("bolt-design",{render:da});J("dead-load",{render:pa});J("live-load",{render:vs});J("wind-load",{render:fa});J("seismic-load",{render:va});J("unit-converter",{render:Fs});J("material-props",{render:Cs});J("rebar-reference",{render:Ts});J("is-cheatsheet",{render:Ns});J("bbs-generator",{render:Os});document.addEventListener("DOMContentLoaded",()=>{zs(),Us(),Hs(),Ws(),js(),Gs()});function zs(){const e=_a();document.documentElement.setAttribute("data-theme",e);const a=document.getElementById("theme-toggle");a&&a.addEventListener("click",()=>{const i=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",i),Sa(i)})}function Us(){const e=document.getElementById("sidebar-nav");e&&(e.innerHTML=it.map(a=>`
    <div class="nav-group" data-group="${a.id}">
      <div class="nav-group__header" data-group-toggle="${a.id}">
        <span class="nav-group__label">${a.label}</span>
        <svg class="nav-group__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <div class="nav-group__items">
        ${a.items.map(t=>`
          <a class="nav-item" href="#/${t.id}" data-module="${t.id}">
            <span class="nav-item__number">${t.num}</span>
            ${t.title}
          </a>
        `).join("")}
      </div>
    </div>
  `).join(""),e.querySelectorAll("[data-group-toggle]").forEach(a=>{a.addEventListener("click",()=>{a.parentElement.classList.toggle("collapsed")})}))}function Gs(){const e=document.getElementById("hamburger-btn"),a=document.querySelector(".sidebar"),t=document.querySelector(".sidebar-overlay"),i=document.querySelector(".sidebar__close");function s(){a==null||a.classList.add("open"),t==null||t.classList.add("visible")}function o(){a==null||a.classList.remove("open"),t==null||t.classList.remove("visible")}e==null||e.addEventListener("click",s),t==null||t.addEventListener("click",o),i==null||i.addEventListener("click",o),document.querySelectorAll(".nav-item").forEach(l=>{l.addEventListener("click",()=>{window.innerWidth<=1200&&o()})})}function Ws(){window.addEventListener("hashchange",Ot),Ot()}async function Ot(){const e=window.location.hash.replace("#/","").replace("#",""),a=document.getElementById("main-content"),t=document.getElementById("breadcrumb");if(document.querySelectorAll(".nav-item").forEach(o=>{o.classList.toggle("active",o.dataset.module===e)}),!e||e===""){Vs(a),t&&(t.innerHTML="<strong>Home</strong>");return}let i=null,s=null;for(const o of it){const l=o.items.find(n=>n.id===e);if(l){i=l,s=o;break}}if(!i){a.innerHTML=`
      <div class="main-content__inner">
        <div class="welcome-page">
          <h1>Module Not Found</h1>
          <p>The requested calculator module was not found.</p>
        </div>
      </div>`;return}if(t&&(t.innerHTML=`${s.label} <span>›</span> <strong>${i.title}</strong>`),st[e]){a.innerHTML='<div class="main-content__inner" id="calculator-container"></div>';const o=document.getElementById("calculator-container");try{await st[e].render(o)}catch(l){console.error(`Error rendering module ${e}:`,l),o.innerHTML=`
        <div class="calculator-page">
          <div class="summary-card summary-card--fail" style="max-width:500px;">
            <div class="summary-card__label">Error</div>
            <div class="summary-card__value" style="font-size:var(--text-md)">Failed to load module</div>
            <div class="summary-card__sub">${l.message}</div>
          </div>
        </div>`}}else a.innerHTML=`
      <div class="main-content__inner">
        <div class="calculator-page">
          <div class="calculator-page__header">
            <h2>${i.num} — ${i.title}</h2>
            <p>This calculator module will be available in an upcoming update.</p>
            <span class="calculator-page__code-ref">
              ${y.info} Coming Soon
            </span>
          </div>
          <div class="welcome-page" style="min-height:40vh;">
            <div class="welcome-page__icon">${y.calculator}</div>
            <h1>Under Development</h1>
            <p>This module is part of the Stellar Civil calculator suite and will be implemented in a future phase. Please check back soon.</p>
          </div>
        </div>
      </div>`;a.scrollTop=0}function Vs(e){it.reduce((a,t)=>a+t.items.length,0),Object.keys(st).length,e.innerHTML=`
    <div class="main-content__inner">
      <div class="welcome-page">
        <div class="welcome-page__icon">${y.building}</div>
        <h1>Welcome to Stellar Civil</h1>
        <p>IS Code Design Calculators for Structural Engineers. Select a calculator from the sidebar to get started.</p>

        <div class="welcome-page__grid">
          ${it.map(a=>`
            <div class="welcome-card" onclick="location.hash='#/${a.items[0].id}'">
              <div class="welcome-card__count">${a.items.length}</div>
              <h3>${a.label}</h3>
              <p>${a.items.map(t=>t.title).slice(0,3).join(", ")}${a.items.length>3?"...":""}</p>
            </div>
          `).join("")}
        </div>
      </div>

      <footer class="app-footer">
        <p>Stellar Civil India | Based on IS 456:2000, IS 800:2007, IS 875:2015, IS 1893:2016 | For educational and reference use only</p>
      </footer>
    </div>`}function Hs(){if(ya()){const a=document.getElementById("disclaimer-modal");a&&a.remove();return}const e=document.getElementById("disclaimer-modal");if(e){e.classList.add("visible");const a=document.getElementById("disclaimer-accept");a==null||a.addEventListener("click",()=>{xa(),e.classList.remove("visible"),setTimeout(()=>e.remove(),300)})}}function js(){document.addEventListener("keydown",e=>{var a;if(e.key==="Enter"&&!e.ctrlKey&&!e.metaKey){const t=document.getElementById("btn-calculate");t&&!t.disabled&&((a=document.activeElement)!=null&&a.classList.contains("form-input"))&&(e.preventDefault(),t.click())}if((e.ctrlKey||e.metaKey)&&e.key==="p"){const t=document.getElementById("btn-export-pdf");t&&!t.disabled&&(e.preventDefault(),t.click())}if(e.key==="Escape"){const t=document.querySelector(".results-panel");t&&(t.style.display=t.style.display==="none"?"":"none")}if((e.ctrlKey||e.metaKey)&&e.key==="r"){const t=document.getElementById("btn-clear");t&&(e.preventDefault(),t.click())}})}
