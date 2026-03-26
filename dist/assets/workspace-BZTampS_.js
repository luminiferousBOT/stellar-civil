/* empty css                  */(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const Qe="stellar_civil_";function ae(e,a){try{const t=`${Qe}inputs_${e}`;localStorage.setItem(t,JSON.stringify(a))}catch(t){console.warn("Failed to save inputs:",t)}}function ie(e){try{const a=`${Qe}inputs_${e}`,t=localStorage.getItem(a);return t?JSON.parse(t):null}catch(a){return console.warn("Failed to load inputs:",a),null}}function Sa(){return localStorage.getItem(`${Qe}disclaimer_ack`)==="true"}function $a(){localStorage.setItem(`${Qe}disclaimer_ack`,"true")}function Fa(){return localStorage.getItem(`${Qe}theme`)||"light"}function Ma(e){localStorage.setItem(`${Qe}theme`,e)}const x={chevron:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>',moon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>',sun:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',menu:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',close:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',calculator:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="18"></line><line x1="8" y1="10" x2="8" y2="10.01"></line><line x1="12" y1="10" x2="12" y2="10.01"></line><line x1="16" y1="10" x2="16" y2="10.01"></line><line x1="8" y1="14" x2="8" y2="14.01"></line><line x1="12" y1="14" x2="12" y2="14.01"></line><line x1="8" y1="18" x2="8" y2="18.01"></line><line x1="12" y1="18" x2="12" y2="18.01"></line></svg>',download:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>',info:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',shield:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',play:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>',refresh:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>',check:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',warning:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',x:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',building:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>'};function ka(e){const a=!!e.unit,t=e.tooltip?`
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
    </div>`}const ue=Gt;function I(e,a,t=""){const i=a.map(s=>ka(s)).join("");return`
    <div class="input-panel">
      <h3 class="input-panel__title">${t} ${e}</h3>
      <div class="input-grid">
        ${i}
      </div>
    </div>`}function Gt(e){return`<div class="summary-cards">${e.map(t=>`
    <div class="summary-card summary-card--${t.status||"info"}">
      <div class="summary-card__label">${t.label}</div>
      <div class="summary-card__value">${t.value}</div>
      ${t.sub?`<div class="summary-card__sub">${t.sub}</div>`:""}
    </div>
  `).join("")}</div>`}function me(e,a){const t=a.map(i=>`
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
    </div>`}function La(e,a,t){const i=a.map(o=>`<th>${o}</th>`).join(""),s=t.map(o=>`<tr>${o.map(n=>typeof n=="object"&&n.status?`<td class="status-${n.status}">${n.text}</td>`:`<td>${n}</td>`).join("")}</tr>`).join("");return`
    <div class="design-table-container">
      <div class="design-table-container__header">
        <h4>${e}</h4>
      </div>
      <table class="design-table">
        <thead><tr>${i}</tr></thead>
        <tbody>${s}</tbody>
      </table>
    </div>`}function he(e){const a={pass:"✅",fail:"❌",warn:"⚠️"};return`
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
          ${x.play} Calculate
        </button>
        <button class="btn btn-secondary" id="${a}">
          ${x.refresh} Clear All
        </button>
      </div>
      <div class="btn-group">
        <button class="btn btn-secondary btn-sm" id="btn-export-pdf" disabled>
          ${x.download} Export PDF
        </button>
        <button class="btn btn-secondary btn-sm" id="btn-export-csv" disabled>
          ${x.download} Export CSV
        </button>
      </div>
    </div>`}function ee(e,a=3e3){let t=document.querySelector(".toast-container");t||(t=document.createElement("div"),t.className="toast-container",document.body.appendChild(t));const i=document.createElement("div");i.className="toast",i.innerHTML=`${x.info} <span>${e}</span>`,t.appendChild(i),setTimeout(()=>{i.classList.add("leaving"),setTimeout(()=>i.remove(),300)},a)}function q(e){let a=document.querySelector(".sticky-bar");if(a||(a=document.createElement("div"),a.className="sticky-bar",document.body.appendChild(a)),!e||e.length===0){a.classList.remove("visible");return}a.innerHTML=e.map(t=>`
    <div class="sticky-bar__item">
      <span class="sticky-bar__label">${t.label}:</span>
      <span class="sticky-bar__value">${t.value}</span>
    </div>
  `).join(""),a.classList.add("visible")}function re(e){const a={};return e.querySelectorAll(".form-input, .form-select, .calc-input").forEach(t=>{const i=t.value;t.type==="number"||!isNaN(i)&&i!==""?a[t.id]=parseFloat(i):a[t.id]=i}),a}function ce(e,a){a&&Object.entries(a).forEach(([t,i])=>{const s=e.querySelector(`#${t}`);s&&(s.value=i)})}const Ca=[{dia:6,area:28.27,weight:.222,perimeter:18.85},{dia:8,area:50.27,weight:.395,perimeter:25.13},{dia:10,area:78.54,weight:.617,perimeter:31.42},{dia:12,area:113.1,weight:.888,perimeter:37.7},{dia:16,area:201.06,weight:1.578,perimeter:50.27},{dia:20,area:314.16,weight:2.466,perimeter:62.83},{dia:25,area:490.87,weight:3.854,perimeter:78.54},{dia:32,area:804.25,weight:6.313,perimeter:100.53},{dia:40,area:1256.64,weight:9.865,perimeter:125.66}];function Ce(e){return Ca.find(a=>a.dia===e)}function wa(e,a=1){const t=Ce(e);return t?t.area*a:0}const It=wa,je=[.15,.25,.5,.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3],Tt={15:[.28,.36,.48,.56,.62,.67,.72,.75,.79,.81,.82,.82,.82],20:[.28,.36,.48,.56,.62,.67,.72,.75,.79,.81,.82,.82,.82],25:[.29,.36,.49,.57,.64,.7,.74,.78,.82,.85,.88,.9,.92],30:[.29,.37,.5,.59,.66,.71,.76,.8,.84,.88,.91,.94,.96],35:[.29,.37,.5,.59,.67,.73,.78,.82,.86,.9,.93,.96,.99],40:[.3,.38,.51,.6,.68,.74,.79,.84,.88,.92,.95,.98,1.01]};function Et(e,a){const t=Math.max(.15,Math.min(e,3)),i=[15,20,25,30,35,40],s=Math.max(15,Math.min(a,40));function o(b){const u=Tt[b];if(!u)return 0;let v=0;for(v=0;v<je.length-1&&!(t<=je[v+1]);v++);if(t<=je[0])return u[0];if(t>=je[je.length-1])return u[u.length-1];const c=je[v],p=je[v+1],$=u[v],_=u[v+1];return $+(t-c)*(_-$)/(p-c)}if(Tt[s])return o(s);let l=0;for(l=0;l<i.length-1&&!(s<=i[l+1]);l++);const n=i[l],r=i[l+1],d=o(n),m=o(r);return d+(s-n)*(m-d)/(r-n)}const Ke={15:2.5,20:2.8,25:3.1,30:3.5,35:3.7,40:4};function Ia(e){if(Ke[e])return Ke[e];const a=Object.keys(Ke).map(Number).sort((i,s)=>i-s),t=Math.max(15,Math.min(e,40));for(let i=0;i<a.length-1;i++)if(t<=a[i+1]){const s=a[i],o=a[i+1];return Ke[s]+(t-s)*(Ke[o]-Ke[s])/(o-s)}return Ke[40]}const Xe={15:1,20:1.2,25:1.4,30:1.5,35:1.7,40:1.9};function Wt(e,a=!0){let t=Xe[e];if(!t){const i=Object.keys(Xe).map(Number).sort((o,l)=>o-l),s=Math.max(15,Math.min(e,40));for(let o=0;o<i.length-1;o++)if(s<=i[o+1]){const l=i[o],n=i[o+1];t=Xe[l]+(s-l)*(Xe[n]-Xe[l])/(n-l);break}t||(t=Xe[40])}return a?t*1.6:t}const Je=[1,1.1,1.2,1.3,1.4,1.5,1.75,2],Ea=[{id:1,desc:"Interior panel (all edges continuous)"},{id:2,desc:"One short edge discontinuous"},{id:3,desc:"One long edge discontinuous"},{id:4,desc:"Two adjacent edges discontinuous"},{id:5,desc:"Two short edges discontinuous"},{id:6,desc:"Two long edges discontinuous"},{id:7,desc:"Three edges discontinuous (one long edge continuous)"},{id:8,desc:"Three edges discontinuous (one short edge continuous)"},{id:9,desc:"All four edges discontinuous"}],Da={1:{ax_neg:[.032,.037,.042,.046,.05,.053,.06,.065],ax_pos:[.024,.028,.032,.035,.037,.04,.044,.048],ay_neg:[.024,.028,.032,.036,.039,.041,.045,.049],ay_pos:[.024,.028,.032,.036,.039,.041,.045,.049]},2:{ax_neg:[.037,.043,.048,.051,.055,.057,.064,.068],ax_pos:[.028,.032,.036,.039,.041,.044,.048,.052],ay_neg:[.028,.032,.036,.04,.043,.045,.049,.052],ay_pos:[.028,.032,.036,.04,.043,.045,.049,.052]},3:{ax_neg:[.037,.044,.052,.057,.063,.067,.077,.085],ax_pos:[.028,.033,.039,.044,.047,.051,.059,.065],ay_neg:[.037,.044,.052,.057,.063,.067,.077,.085],ay_pos:[.028,.033,.039,.044,.047,.051,.059,.065]},4:{ax_neg:[.047,.053,.06,.065,.071,.075,.084,.091],ax_pos:[.035,.04,.045,.049,.053,.056,.063,.069],ay_neg:[.035,.04,.045,.049,.053,.056,.063,.069],ay_pos:[.035,.04,.045,.049,.053,.056,.063,.069]},5:{ax_neg:[.045,.049,.052,.056,.059,.06,.065,.069],ax_pos:[.035,.037,.04,.043,.044,.045,.049,.052],ay_neg:[.035,.037,.04,.043,.044,.045,.049,.052],ay_pos:[.035,.037,.04,.043,.044,.045,.049,.052]},6:{ax_neg:[.045,.049,.052,.056,.059,.06,.065,.069],ax_pos:[.035,.037,.04,.043,.044,.045,.049,.052],ay_neg:[.035,.037,.04,.043,.044,.045,.049,.052],ay_pos:[.035,.037,.04,.043,.044,.045,.049,.052]},7:{ax_neg:[.057,.064,.071,.076,.08,.084,.091,.097],ax_pos:[.043,.048,.053,.057,.06,.064,.069,.073],ay_neg:[.043,.048,.053,.057,.06,.064,.069,.073],ay_pos:[.043,.048,.053,.057,.06,.064,.069,.073]},8:{ax_neg:[.057,.064,.071,.076,.08,.084,.091,.097],ax_pos:[.043,.048,.053,.057,.06,.064,.069,.073],ay_neg:[.043,.048,.053,.057,.06,.064,.069,.073],ay_pos:[.043,.048,.053,.057,.06,.064,.069,.073]},9:{ax_neg:[0,0,0,0,0,0,0,0],ax_pos:[.056,.064,.072,.079,.085,.089,.1,.107],ay_neg:[0,0,0,0,0,0,0,0],ay_pos:[.056,.064,.072,.079,.085,.089,.1,.107]}};function et(e,a,t){const i=Da[e];if(!i||!i[t])return 0;const s=i[t],o=Math.max(1,Math.min(a,2));for(let l=0;l<Je.length-1;l++)if(o<=Je[l+1]){const n=Je[l],r=Je[l+1],d=s[l],m=s[l+1];return d+(o-n)*(m-d)/(r-n)}return s[s.length-1]}const Aa={Mild:{slab:20,beam:20,column:40},Moderate:{slab:30,beam:30,column:40},Severe:{slab:45,beam:45,column:45},"Very Severe":{slab:50,beam:50,column:50},Extreme:{slab:75,beam:75,column:75}},Ta={250:{xu_d:.5313,Q:.149},415:{xu_d:.4791,Q:.138},500:{xu_d:.456,Q:.133},550:{xu_d:.444,Q:.129},600:{xu_d:.43,Q:.126}};function Ba(e){var a;return((a=Ta[e])==null?void 0:a.Q)||.138}function Vt(e,a){if(a<=0)return 2;const t=1/(.225+.003225*e-.625*Math.log10(a));return Math.max(1,Math.min(t,2))}const Bt={slab:{415:.12,500:.12,550:.12,600:.12,250:.15}},Na=[15,20,25,30,35,40,45,50,55,60,65,70,75,80],Dt=[8,10,12,16,20,25,28,32,36,40];function Ht(e){return Math.PI*e*e/4}function jt(e){return e*e/162.28}const Ra=[{grade:"M15",fck:15},{grade:"M20",fck:20},{grade:"M25",fck:25},{grade:"M30",fck:30},{grade:"M35",fck:35},{grade:"M40",fck:40},{grade:"M45",fck:45},{grade:"M50",fck:50}],Pa=[{grade:"Fe250",fy:250},{grade:"Fe415",fy:415},{grade:"Fe500",fy:500},{grade:"Fe550",fy:550},{grade:"Fe600",fy:600}],qa=["Mild","Moderate","Severe","Very Severe","Extreme"],Oa={unitWeight:25},Ae=[15,20,25,30,35,40,45,50],Te=[250,415,500,550,600],At={250:.531,415:.479,500:.456,550:.444,600:.43};function L(e,a,t,i){if(e===""||e===null||e===void 0)return{valid:!1,message:`${i} is required`};const s=parseFloat(e);return isNaN(s)?{valid:!1,message:`${i} must be a valid number`}:s<a?{valid:!1,message:`${i} must be ≥ ${a}`}:s>t?{valid:!1,message:`${i} must be ≤ ${t}`}:{valid:!0,message:""}}function za(e,a){return!e||e===""?{valid:!1,message:`Please select ${a}`}:{valid:!0,message:""}}function Kt(e,a){const t=e.closest(".form-group"),i=t==null?void 0:t.querySelector(".form-group__error");if(e.classList.remove("is-valid","is-invalid"),e.value===""){i&&(i.textContent="");return}a.valid?(e.classList.add("is-valid"),i&&(i.textContent="")):(e.classList.add("is-invalid"),i&&(i.textContent=a.message))}function Yt(e){const a=e.querySelectorAll(".form-input[data-validate]");let t=0;return a.forEach(s=>{const o=parseFloat(s.dataset.min),l=parseFloat(s.dataset.max),n=s.dataset.name||s.name,r=L(s.value,o,l,n);Kt(s,r),r.valid||t++}),e.querySelectorAll(".form-select[data-validate]").forEach(s=>{const o=s.dataset.name||s.name;za(s.value,o).valid||t++}),t}function Ua(e,a){e.querySelectorAll(".form-input[data-validate]").forEach(i=>{const s=()=>{const o=parseFloat(i.dataset.min),l=parseFloat(i.dataset.max),n=i.dataset.name||i.name,r=L(i.value,o,l,n);if(Kt(i,r),a){const d=Yt(e);a(d)}};i.addEventListener("input",s),i.addEventListener("blur",s)})}function Ga(){const e=document.querySelector(".print-header");if(document.querySelector(".print-footer"),e){const a=new Date,t=a.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}),i=a.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"}),s=e.querySelector(".print-header__info");s&&(s.innerHTML=`Date: ${t}<br>Time: ${i}`)}window.print()}function Wa(e,a){if(!e||e.length===0)return;const t=e.map(r=>r.map(d=>{let m=String(d??"");return(m.includes(",")||m.includes('"')||m.includes(`
`))&&(m='"'+m.replace(/"/g,'""')+'"'),m}).join(",")).join(`
`),i=new Blob([t],{type:"text/csv;charset=utf-8;"}),s=URL.createObjectURL(i),o=document.createElement("a"),n=new Date().toISOString().slice(0,10);o.href=s,o.download=`StellarCivil_${a}_${n}.csv`,o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(s)}const Nt="slab-design",Rt=[{id:"slab-lx",label:"Shorter Span (Lx)",unit:"m",default:4,min:1,max:15,step:.1,tooltip:"Clear shorter span of the slab panel in meters. Must be ≥ 1m."},{id:"slab-ly",label:"Longer Span (Ly)",unit:"m",default:5,min:1,max:20,step:.1,tooltip:"Clear longer span of the slab panel in meters. Ly ≥ Lx always."},{id:"slab-fck",label:"Concrete Grade (fck)",type:"select",default:25,options:Ra.map(e=>({value:e.fck,label:e.grade})),tooltip:"Characteristic compressive strength of concrete at 28 days (IS 456 Cl. 6.2)"},{id:"slab-fy",label:"Steel Grade (fy)",type:"select",default:415,options:Pa.filter(e=>[415,500,550].includes(e.fy)).map(e=>({value:e.fy,label:e.grade})),tooltip:"Yield strength of reinforcement steel (IS 1786)"},{id:"slab-exposure",label:"Exposure Condition",type:"select",default:"Mild",options:qa,tooltip:"Exposure condition per IS 456 Table 3. Determines minimum cover."},{id:"slab-panel-type",label:"Panel Type (IS 456 Table 26)",type:"select",default:1,options:Ea.map(e=>({value:e.id,label:`Type ${e.id}: ${e.desc}`})),tooltip:"9 panel types based on edge support conditions per IS 456 Annex D, Table 26."}],Pt=[{id:"slab-ll",label:"Live Load",unit:"kN/m²",default:3,min:0,max:50,step:.5,tooltip:"Imposed (live) load on the slab per IS 875 Part 2. Typical: 2.0 residential, 3.0 office, 5.0 store."},{id:"slab-ff",label:"Floor Finish Load",unit:"kN/m²",default:1,min:0,max:5,step:.25,tooltip:"Floor finish load (tiles, screed, etc.). Typically 1.0–1.5 kN/m²."},{id:"slab-partition",label:"Partition Load",unit:"kN/m²",default:1,min:0,max:5,step:.25,tooltip:"Equivalent partition wall load. As per IS 875 Part 2, typically 1.0 kN/m² for movable partitions."},{id:"slab-bar-dia",label:"Main Bar Diameter",unit:"mm",type:"select",default:10,options:[8,10,12,16].map(e=>{var a;return{value:e,label:`${e} mm (Ast = ${(a=Ce(e))==null?void 0:a.area.toFixed(1)} mm²)`}}),tooltip:"Preferred diameter of main reinforcement bars."}];function Va(e){var t,i,s,o;const a=ie(Nt);e.innerHTML=`
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
          ${x.info} IS 456:2000 — Cl. 24, Annex D, Table 26
        </span>
      </div>

      ${te(["Simply supported or continuous slab — as per selected panel type","Rectangular slab with uniform loading","Self-weight calculated automatically based on assumed overall depth D","Clear cover determined from exposure condition per IS 456 Table 16","Minimum reinforcement = 0.12% of bD for HYSD bars (Cl. 26.5.2.1)","Maximum spacing ≤ 3d or 300mm (Cl. 26.3.3)","Corner reinforcement not designed — to be provided at discontinuous edges per Cl. D-1.8","Shear is typically not critical for slabs; simplified check included"])}

      ${I("Geometry & Material",Rt,x.building)}
      ${I("Loads & Reinforcement",Pt,x.calculator)}

      ${oe()}

      <div id="slab-results"></div>

      <!-- Print footer (hidden normally) -->
      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,a&&ce(e,a),Ua(e,l=>{const n=document.getElementById("btn-calculate");n&&(l>0?(n.disabled=!0,n.innerHTML=`Fix ${l} error${l>1?"s":""}`):(n.disabled=!1,n.innerHTML=`${x.play} Calculate`))}),(t=document.getElementById("btn-calculate"))==null||t.addEventListener("click",()=>{const l=Yt(e);if(l>0){ee(`Please fix ${l} input error(s)`,3e3);return}const n=document.getElementById("btn-calculate");n.innerHTML='<span class="spinner"></span> Calculating...',n.disabled=!0;const r=re(e);ae(Nt,r),setTimeout(()=>{var d;try{const m=Ha(r);ja(m),n.innerHTML=`${x.refresh} Recalculate`,n.disabled=!1,document.getElementById("btn-export-pdf").disabled=!1,document.getElementById("btn-export-csv").disabled=!1,(d=document.getElementById("slab-results"))==null||d.scrollIntoView({behavior:"smooth",block:"start"})}catch(m){console.error("Calculation error:",m),document.getElementById("slab-results").innerHTML=`
          <div class="summary-cards">
            <div class="summary-card summary-card--fail">
              <div class="summary-card__label">Calculation Error</div>
              <div class="summary-card__value" style="font-size:var(--text-md)">Check inputs</div>
              <div class="summary-card__sub">${m.message}</div>
            </div>
          </div>`,n.innerHTML=`${x.play} Calculate`,n.disabled=!1}},300)}),(i=document.getElementById("btn-clear"))==null||i.addEventListener("click",()=>{Rt.concat(Pt).forEach(n=>{const r=document.getElementById(n.id);r&&(r.value=n.default)}),document.getElementById("slab-results").innerHTML="",document.getElementById("btn-export-pdf").disabled=!0,document.getElementById("btn-export-csv").disabled=!0,q(null);const l=document.getElementById("btn-calculate");l.innerHTML=`${x.play} Calculate`,l.disabled=!1,e.querySelectorAll(".form-input").forEach(n=>{n.classList.remove("is-valid","is-invalid")}),e.querySelectorAll(".form-group__error").forEach(n=>{n.textContent=""})}),(s=document.getElementById("btn-export-pdf"))==null||s.addEventListener("click",Ga),(o=document.getElementById("btn-export-csv"))==null||o.addEventListener("click",()=>{const l=document.getElementById("slab-results");if(!l)return;const n=[["Step","Description","Formula / IS Clause","Calculated Value","Unit"]];l.querySelectorAll(".step-table tbody tr").forEach(r=>{const d=Array.from(r.cells).map(m=>m.textContent.trim());n.push(d)}),Wa(n,"SlabDesign")})}function Ha(e){var Se;const a=e["slab-lx"],t=e["slab-ly"],i=e["slab-fck"],s=e["slab-fy"],o=e["slab-exposure"],l=e["slab-panel-type"],n=e["slab-ll"],r=e["slab-ff"],d=e["slab-partition"],m=e["slab-bar-dia"],b=[],u=[];let v=1;const c=t/a,p=c>2,$=p?"One-Way":"Two-Way";b.push({step:v++,description:`Determine slab type: Ly/Lx = ${t}/${a}`,formula:"Ly/Lx > 2 → One-way",value:`${c.toFixed(2)} → ${$} Slab`,unit:""});const _=l==9?28:32;let h=Math.ceil(a*1e3/_/5)*5;h=Math.max(h,100);const g=((Se=Aa[o])==null?void 0:Se.slab)||20,f=h-g-m/2;b.push({step:v++,description:"Assume overall depth D, compute effective depth d",formula:`D ≈ Lx×1000/${_}, d = D − cover − φ/2`,value:`D = ${h} mm, cover = ${g} mm, d = ${f.toFixed(1)} mm`,unit:"mm"});const y=Oa.unitWeight*(h/1e3);b.push({step:v++,description:"Self-weight of slab",formula:"w_sw = 25 × D/1000",value:y.toFixed(2),unit:"kN/m²"});const S=y+r+d,F=1.5*(S+n);b.push({step:v++,description:"Total factored load",formula:`wu = 1.5 × (DL + LL) = 1.5 × (${S.toFixed(2)} + ${n.toFixed(2)})`,value:F.toFixed(2),unit:"kN/m²"});let N,k,E,T,w,C;if(p){const ne=l==9?8:10;w=F*a*a/ne,C=0,b.push({step:v++,description:"Bending moment (One-way slab)",formula:`Mx = wu × Lx² / ${ne}`,value:w.toFixed(2),unit:"kN·m/m"})}else{const ne=et(l,c,"ax_neg"),Le=et(l,c,"ax_pos"),be=et(l,c,"ay_neg"),ge=et(l,c,"ay_pos");N=ne*F*a*a,k=Le*F*a*a,E=be*F*a*a,T=ge*F*a*a,w=Math.max(N,k),C=Math.max(E,T),b.push({step:v++,description:"Moment coefficients from IS 456 Table 26",formula:`Panel Type ${l}, Ly/Lx = ${c.toFixed(2)}`,value:`αx⁻=${ne.toFixed(4)}, αx⁺=${Le.toFixed(4)}, αy⁻=${be.toFixed(4)}, αy⁺=${ge.toFixed(4)}`,unit:""}),b.push({step:v++,description:"Bending moments (Two-way slab)",formula:"M = α × wu × Lx²",value:`Mx⁻=${N.toFixed(2)}, Mx⁺=${k.toFixed(2)}, My⁻=${E.toFixed(2)}, My⁺=${T.toFixed(2)}`,unit:"kN·m/m"})}const A=Ba(s),D=Math.sqrt(w*1e6/(A*i*1e3));b.push({step:v++,description:"Check depth: required d for bending",formula:`d_req = √(Mu / (${A} × fck × b))`,value:`d_req = ${D.toFixed(1)} mm ${f>=D?"≤":">"} d_prov = ${f.toFixed(1)} mm → ${f>=D?"OK":"REVISE"}`,unit:"mm"});const O=f>=D;u.push({status:O?"pass":"fail",text:`Depth check — d_provided (${f.toFixed(1)} mm) ${O?"≥":"<"} d_required (${D.toFixed(1)} mm)`,clause:"IS 456 Cl. 24.1"});function R(ne,Le,be,ge,ye){const Re=ne*1e6,ze=.87*ye*ye/(Le*be*ge),De=.87*ye*be,Ue=De*De-4*ze*Re;return Ue<0?NaN:(De-Math.sqrt(Ue))/(2*ze)}const B=R(w,1e3,f,i,s);b.push({step:v++,description:"Required Ast in X-direction (shorter span)",formula:"Quadratic: 0.87×fy×Ast×d×[1 − Ast×fy/(b×d×fck)] = Mu",value:B.toFixed(1),unit:"mm²/m"});const W=Ce(m);let P=Math.floor(W.area*1e3/B/25)*25;const U=Math.min(Math.floor(3*f),300);P=Math.min(P,U);const G=W.area*1e3/P;b.push({step:v++,description:`Provide ${m}φ bars at spacing`,formula:`s = (Abar × 1000) / Ast = (${W.area.toFixed(1)} × 1000) / ${B.toFixed(1)}`,value:`${m}φ @ ${P} mm c/c (Ast_prov = ${G.toFixed(1)} mm²/m)`,unit:""});let H,z,V;const J=f-m;if(p||C<=0){const ne=Bt.slab[s]||.12;H=ne/100*1e3*h,z=Math.floor(W.area*1e3/H/25)*25,z=Math.min(z,5*f,450,U),V=W.area*1e3/z,b.push({step:v++,description:"Distribution steel (Y-direction)",formula:`Ast_dist = ${ne}% × b × D`,value:`${m}φ @ ${z} mm c/c (Ast = ${V.toFixed(1)} mm²/m)`,unit:""})}else H=R(C,1e3,J,i,s),z=Math.floor(W.area*1e3/H/25)*25,z=Math.min(z,U),V=W.area*1e3/z,b.push({step:v++,description:"Required Ast in Y-direction (longer span)",formula:`Quadratic for My = ${C.toFixed(2)} kN·m/m, d' = ${J.toFixed(1)} mm`,value:`${m}φ @ ${z} mm c/c (Ast = ${V.toFixed(1)} mm²/m)`,unit:""});const se=Bt.slab[s]||.12,Y=se/100*1e3*h,j=G>=Y,le=V>=Y;b.push({step:v++,description:"Minimum steel check",formula:`Ast_min = ${se}% × b × D = ${se}% × 1000 × ${h}`,value:`${Y.toFixed(1)} mm²/m — X: ${j?"OK":"FAIL"}, Y: ${le?"OK":"FAIL"}`,unit:""}),u.push({status:j&&le?"pass":"fail",text:`Minimum steel check — Ast_min = ${Y.toFixed(0)} mm²/m`,clause:"IS 456 Cl. 26.5.2.1"});const K=P<=U,de=z<=U;b.push({step:v++,description:"Maximum spacing check",formula:`s_max ≤ min(3d, 300) = min(${(3*f).toFixed(0)}, 300)`,value:`${U} mm — X: ${P} mm ${K?"✓":"✗"}, Y: ${z} mm ${de?"✓":"✗"}`,unit:""}),u.push({status:K&&de?"pass":"fail",text:`Maximum spacing — s_max = ${U} mm`,clause:"IS 456 Cl. 26.3.3"});const Z=l==9?20:26,Me=.58*s*(B/G),X=G*100/(1e3*f),ve=Vt(Me,X),fe=Z*ve,pe=a*1e3/f,ke=pe<=fe;b.push({step:v++,description:"Deflection check (L/d ratio)",formula:`Allowable L/d = ${Z} × kt = ${Z} × ${ve.toFixed(2)}`,value:`Actual L/d = ${pe.toFixed(1)}, Allowable = ${fe.toFixed(1)} → ${ke?"OK":"FAIL"}`,unit:""}),u.push({status:ke?"pass":pe<=fe*1.05?"warn":"fail",text:`Deflection check — L/d = ${pe.toFixed(1)}, limit = ${fe.toFixed(1)}`,clause:"IS 456 Cl. 23.2.1"});const Ie=(F*a/2-F*f/1e3)*1e3/(1e3*f),Ye=G*100/(1e3*f),Ee=Et(Ye,i),Be=Ie<=Ee;b.push({step:v++,description:"Shear check at d from support",formula:"τv = Vu/(b×d), τc from IS 456 Table 19",value:`τv = ${Ie.toFixed(3)} N/mm², τc = ${Ee.toFixed(3)} N/mm² → ${Be?"OK":"FAIL"}`,unit:""}),u.push({status:Be?"pass":"fail",text:`Shear check — τv (${Ie.toFixed(3)}) ${Be?"≤":">"} τc (${Ee.toFixed(3)}) N/mm²`,clause:"IS 456 Cl. 40.1, Table 19"});const Ze=Wt(i,!0),qe=.87*s,Ne=m*qe/(4*Ze),Ve=a*1e3/2,Oe=Ne<=Ve;b.push({step:v++,description:"Development length check",formula:`Ld = φ × σs / (4 × τbd) = ${m} × ${qe.toFixed(0)} / (4 × ${Ze.toFixed(2)})`,value:`Ld = ${Ne.toFixed(0)} mm → ${Oe?"OK":"Increase anchorage"}`,unit:"mm"}),u.push({status:Oe?"pass":"warn",text:`Development length — Ld = ${Ne.toFixed(0)} mm`,clause:"IS 456 Cl. 26.2.1"});const He=u.every(ne=>ne.status==="pass"),$e=u.some(ne=>ne.status==="fail");return{slabType:$,D_assumed:h,d:f,cover:g,wu:F,Mx_design:w,My_design:C,Ast_x:B,Ast_x_provided:G,spacing_x:P,Ast_y:H||Y,Ast_y_provided:V,spacing_y:z,barDia:m,Ast_min:Y,Ld:Ne,steps:b,compliance:u,overallStatus:$e?"fail":He?"pass":"warn",lyLxRatio:c,fck:i,fy:s}}function ja(e){const a=document.getElementById("slab-results"),t=Gt([{label:"Slab Type",value:e.slabType,sub:`Ly/Lx = ${e.lyLxRatio.toFixed(2)}`,status:"info"},{label:"Overall Depth",value:`${e.D_assumed} mm`,sub:`d_eff = ${e.d.toFixed(1)} mm`,status:e.overallStatus==="fail"?"fail":"pass"},{label:"Ast (X-dir)",value:`${e.Ast_x_provided.toFixed(0)} mm²/m`,sub:`${e.barDia}φ @ ${e.spacing_x} mm c/c`,status:e.Ast_x_provided>=e.Ast_min?"pass":"fail"},{label:"Ast (Y-dir)",value:`${e.Ast_y_provided.toFixed(0)} mm²/m`,sub:`${e.barDia}φ @ ${e.spacing_y} mm c/c`,status:e.Ast_y_provided>=e.Ast_min?"pass":"fail"},{label:"Status",value:e.overallStatus==="pass"?"✅ All OK":e.overallStatus==="warn"?"⚠️ Review":"❌ Revise",sub:`fck=${e.fck} N/mm², fy=${e.fy} N/mm²`,status:e.overallStatus}]),i=me("Step-by-Step Calculation",e.steps),s=La("Design Summary — Reinforcement Details",["Direction","Ast Required (mm²/m)","Ast Provided (mm²/m)","Bar Dia","Spacing (mm)","Check"],[["X (shorter span)",e.Ast_x.toFixed(1),e.Ast_x_provided.toFixed(1),`${e.barDia} mm`,`${e.spacing_x} mm c/c`,e.Ast_x_provided>=e.Ast_x?{text:"✅ OK",status:"pass"}:{text:"❌ FAIL",status:"fail"}],["Y (longer span / dist.)",e.Ast_y.toFixed(1),e.Ast_y_provided.toFixed(1),`${e.barDia} mm`,`${e.spacing_y} mm c/c`,e.Ast_y_provided>=e.Ast_y?{text:"✅ OK",status:"pass"}:{text:"❌ FAIL",status:"fail"}]]),o=he(e.compliance);a.innerHTML=`
    <div class="results-panel">
      <div class="results-panel__header">
        <h3>Design Results</h3>
      </div>
      ${t}
      ${i}
      ${s}
      ${o}
    </div>
  `,q([{label:"D",value:`${e.D_assumed} mm`},{label:"Ast_x",value:`${e.Ast_x_provided.toFixed(0)} mm²/m`},{label:"Spacing",value:`${e.barDia}φ@${e.spacing_x}`},{label:"Status",value:e.overallStatus==="pass"?"✅ OK":e.overallStatus==="warn"?"⚠️ Review":"❌ Revise"}])}const dt="singly-beam";function Ka(e,a,t,i,s){const o=.87*s*t,l=s/(a*t*i),n=o*l,r=o,d=e*1e6,m=Math.pow(r,2)-4*n*d;return m<0?NaN:(r-Math.sqrt(m))/(2*n)}const Ya=[{id:"fck",label:"Concrete Grade (fck)",type:"select",default:25,options:Ae.map(e=>({value:e,label:`M${e}`})),tooltip:"Characteristic compressive strength of concrete at 28 days (IS 456 Cl. 6.2)"},{id:"fy",label:"Steel Grade (fy)",type:"select",default:415,options:Te.map(e=>({value:e,label:`Fe${e}`})),tooltip:"Yield strength of main reinforcement steel (IS 1786)"}],Za=[{id:"b",label:"Beam Width (b)",unit:"mm",default:230,min:150,max:1e3,step:10,tooltip:"Width of the rectangular beam cross-section"},{id:"overall_d",label:"Overall Depth (D)",unit:"mm",default:450,min:200,max:2e3,step:10,tooltip:"Total overall depth of the beam section"},{id:"cover",label:"Effective Cover (d')",unit:"mm",default:40,min:20,max:100,step:5,tooltip:"Distance from extreme tension fiber to centroid of tension reinforcement"}],Xa=[{id:"mu",label:"Factored Moment (Mu)",unit:"kN·m",default:75,min:1,max:5e3,step:1,tooltip:"Ultimate design bending moment acting on the section"},{id:"vu",label:"Factored Shear (Vu) (Optional)",unit:"kN",default:"",min:0,max:2e3,step:1,tooltip:"Leave blank if shear design is not required"},{id:"bar_dia",label:"Main Bar Diameter",unit:"mm",type:"select",default:16,options:[12,16,20,25,32].map(e=>{var a;return{value:e,label:`${e} mm (Ast = ${(a=Ce(e))==null?void 0:a.area.toFixed(1)} mm²)`}}),tooltip:"Preferred diameter of main tension reinforcement bars"}];function Qa(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#singly-beam-results");a||(a=document.createElement("div"),a.id="singly-beam-results",e.appendChild(a));const t=re(e),i=L(t.b,150,1e3,"Beam Width"),s=L(t.overall_d,200,2e3,"Overall Depth"),o=L(t.cover,20,100,"Effective Cover"),l=L(t.mu,1,5e3,"Factored Moment");if(!i.valid||!s.valid||!o.valid||!l.valid){ee("Please correct invalid fields before calculating.","error");return}ae(dt,t);const n=parseFloat(t.b),r=parseFloat(t.overall_d),d=parseFloat(t.cover),m=parseFloat(t.mu),b=parseFloat(t.fck),u=parseFloat(t.fy),v=parseFloat(t.bar_dia),c=r-d;let p=[];p.push({step:1,title:"Effective Depth",formula:"d = D - d'",result:"d = "+r+" - "+d+" = "+c.toFixed(1)+' <span class="unit">mm</span>'});const $=At[u]||.479,_=$*c;p.push({step:2,title:"Limiting Neutral Axis",formula:"xu,max = "+$+" × d (for Fe"+u+")",result:"xu,max = "+_.toFixed(1)+' <span class="unit">mm</span>'});const h=.36*$*(1-.416*$)*b*n*c*c/1e6;p.push({step:3,title:"Limiting Moment Capacity",formula:"Mu,lim = 0.36×(xu,max/d)×(1 - 0.416×(xu,max/d))×fck×b×d²",result:"Mu,lim = "+h.toFixed(2)+' <span class="unit">kN·m</span>'});let g=!0,f=0;if(p.push({step:4,title:"Section Check",formula:"Compare Mu with Mu,lim",result:"Mu ("+m+" kN·m) "+(m>h?">":"≤")+" Mu,lim ("+h.toFixed(2)+" kN·m) "+(m>h?"→ <b>Requires Doubly Reinforced</b>":"→ <b>Singly Reinforced OK</b>")}),m>h)g=!1;else{f=Ka(m,n,c,b,u),p.push({step:5,title:"Required Area of Tension Steel",formula:"Quadratic: 0.87×fy×Ast×d×[1 - Ast×fy/(b×d×fck)] = Mu",result:"Ast,req = "+f.toFixed(1)+' <span class="unit">mm²</span>'});const C=.85/u*100,A=.85*n*c/u;p.push({step:6,title:"Minimum Tension Steel",formula:"Ast,min = 0.85×b×d/fy",result:"Ast,min = "+A.toFixed(1)+' <span class="unit">mm²</span> ('+C.toFixed(2)+"%)"}),f<A&&(f=A,p.push({step:7,title:"Governing Required Ast",formula:"Ast = max(Ast, Ast_min)",result:"Ast = "+f.toFixed(1)+' <span class="unit">mm²</span>'}))}let y=0,S=0;const M=Ce(v);let F="pass",N="Design OK";if(g){y=Math.ceil(f/M.area),S=y*M.area,p.push({step:8,title:"Provide Reinforcement",formula:"N = ceil(Ast / Area_bar)",result:"Provide "+y+" - "+v+"φ ("+S.toFixed(1)+" mm² > "+f.toFixed(1)+" mm²)"});const C=.04*n*r;p.push({step:9,title:"Maximum Steel Check",formula:"Ast,max = 0.04×b×D",result:"Ast,prov ("+S.toFixed(1)+") "+(S<=C?"≤":">")+" Ast,max ("+C.toFixed(1)+")"}),S>C&&(F="fail",N="Max Steel Exceeded",g=!1)}else F="fail",N="Doubly Reinforced Required";const k=[{label:"Singly Reinforced Capacity",status:m<=h?"pass":"fail",text:"Mu ("+m.toFixed(1)+") ≤ Mu,lim ("+h.toFixed(1)+")",ref:"Annex G 1.1"}];g&&k.push({label:"Minimum Tension Steel",status:S>=.85*n*c/u?"pass":"fail",text:"Ast ("+S.toFixed(1)+") ≥ Ast,min ("+(.85*n*c/u).toFixed(1)+")",ref:"Cl. 26.5.1.1(a)"},{label:"Maximum Tension Steel",status:S<=.04*n*r?"pass":"fail",text:"Ast ("+S.toFixed(1)+") ≤ 0.04bD ("+(.04*n*r).toFixed(1)+")",ref:"Cl. 26.5.1.1(b)"});const E=[];g?E.push({label:"Effective Depth (d)",value:c.toFixed(1),unit:"mm"},{label:"Ast Required",value:f.toFixed(1),unit:"mm²"},{label:"Tension Bars",value:y+" - "+v+"φ",highlight:!0,status:"pass"},{label:"Ast Provided",value:S.toFixed(1),unit:"mm²"}):E.push({label:"Section Capacity",value:"Exceeded",status:"fail",highlight:!0},{label:"Mu,lim",value:h.toFixed(1),unit:"kN·m"},{label:"Resolution",value:"Use Doubly Reinforced",highlight:!0});const T=`
    <div class="calculator-layout">
      <div class="results-main">
        ${ue(E)}
        
        ${g?`
        <div class="graphics-box" style="margin-bottom: var(--spacing-lg); padding: var(--spacing-lg); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border); text-align: center;">
          <h3 style="margin-bottom: var(--spacing-md); color: var(--text-muted); font-size: 0.875rem; text-transform: uppercase;">Beam Cross-Section</h3>
          <div style="display: inline-block; position: relative; border: 3px solid var(--text-primary); width: 140px; height: ${Math.max(140,Math.min(250,r/n*140))}px; border-radius: 4px; background: rgba(255,255,255,0.05); margin-top: 1.5rem; margin-right: 2.5rem;">
            <!-- Dimensions -->
            <div style="position: absolute; top: -25px; left: 0; width: 100%; text-align: center; color: var(--text-muted); font-size: 0.875rem;">${n} mm</div>
            <div style="position: absolute; right: -50px; top: 0; height: 100%; display: flex; align-items: center; color: var(--text-muted); font-size: 0.875rem;">${r}<br>mm</div>
            
            <!-- Bars -->
            <div style="position: absolute; bottom: ${Math.max(10,d/r*100)}%; left: 10%; width: 80%; display: flex; justify-content: space-around;">
              ${Array(y).fill(0).map(()=>'<div style="width: 14px; height: 14px; border-radius: 50%; background: var(--color-accent);"></div>').join("")}
            </div>
          </div>
          <div style="margin-top: var(--spacing-md); color: var(--color-accent); font-weight: 500;">
            Provide ${y} - ${v}φ at bottom
          </div>
        </div>
        `:""}
        
        ${me("Calculation Steps",p)}
      </div>
      <div class="results-sidebar">
        ${he(k)}
      </div>
    </div>
  `;a.innerHTML=T;const w=`
    <div class="sticky-item"><span>Section:</span> <strong>${n} × ${r}</strong> mm</div>
    ${g?`
      <div class="sticky-item"><span>Bars:</span> <strong>${y} - ${v}φ</strong></div>
      <div class="sticky-item"><span>Ast Provided:</span> <strong>${S.toFixed(1)}</strong> mm²</div>
    `:'<div class="sticky-item"><span>Status:</span> <strong style="color: var(--color-error)">Requires Doubly Reinforced</strong></div>'}
    <div class="sticky-status ${F}">
      <span>Status:</span>
      <strong>${F==="pass"?"✅ OK":"❌ "+N}</strong>
    </div>
  `;document.getElementById("sticky-results-content").innerHTML=w,document.getElementById("sticky-bar").classList.add("visible"),a.scrollIntoView({behavior:"smooth",block:"start"})}function Zt(e){e.innerHTML=`
    <div class="calculator-page" id="singly-beam-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Singly Reinforced Beam</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Singly Reinforced Beam Design</h2>
        <p>Design a rectangular beam cross-section with tension reinforcement only, following IS 456:2000 Annex G limitations.</p>
        <span class="calculator-page__code-ref">
          ${x.info} IS 456:2000 — Annex G, Cl. 38.1
        </span>
      </div>

      ${te(["Section is subjected to uniaxial bending only","Tension reinforcement only (No compression steel designed)","Concrete stress block is parabolic-rectangular per IS 456 Cl. 38.1(c)","Maximum strain in concrete at outermost compression fiber is 0.0035","Tensile strength of concrete is entirely ignored"])}

      ${I("Material Properties",Ya,x.info)}
      ${I("Section Geometry",Za,x.building)}
      ${I("Design Limit States",Xa,x.calculator)}

      ${oe()}

      <div id="singly-beam-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,e.querySelector("#btn-calculate").addEventListener("click",Qa),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+dt),Zt(e),document.getElementById("sticky-bar").classList.remove("visible")});const a=ie(dt);a&&ce(e,a)}const ut="doubly-beam";function Ja(e,a){return e===415?a<=.05?355:a<=.1?353*(1-(a-.05)/.05)+342*((a-.05)/.05):a<=.15?342*(1-(a-.1)/.05)+329*((a-.1)/.05):a<=.2?329*(1-(a-.15)/.05)+314*((a-.15)/.05):314:e===500?a<=.05?424:a<=.1?412*(1-(a-.05)/.05)+395*((a-.05)/.05):a<=.15?395*(1-(a-.1)/.05)+370*((a-.1)/.05):a<=.2?370*(1-(a-.15)/.05)+342*((a-.15)/.05):342:.87*e}const ei=[{id:"fck",label:"Concrete Grade (fck)",type:"select",default:25,options:Ae.map(e=>({value:e,label:`M${e}`})),tooltip:"Characteristic compressive strength of concrete at 28 days"},{id:"fy",label:"Steel Grade (fy)",type:"select",default:415,options:Te.map(e=>({value:e,label:`Fe${e}`})),tooltip:"Yield strength of reinforcement steel"}],ti=[{id:"b",label:"Beam Width (b)",unit:"mm",default:230,min:150,max:1e3,step:10,tooltip:"Width of the rectangular beam cross-section"},{id:"overall_d",label:"Overall Depth (D)",unit:"mm",default:450,min:200,max:2e3,step:10,tooltip:"Total overall depth of the beam section"},{id:"cover_t",label:"Tension Cover (d')",unit:"mm",default:50,min:20,max:100,step:5,tooltip:"Effective cover to center of tension reinforcement"},{id:"cover_c",label:"Compression Cover (d')",unit:"mm",default:40,min:20,max:100,step:5,tooltip:"Effective cover to center of compression reinforcement"}],ai=[{id:"mu",label:"Factored Moment (Mu)",unit:"kN·m",default:250,min:1,max:5e3,step:1,tooltip:"Ultimate design bending moment acting on the section"},{id:"bar_dia_t",label:"Tension Bar Dia",unit:"mm",type:"select",default:20,options:[16,20,25,32].map(e=>({value:e,label:`${e} mm`})),tooltip:"Preferred diameter of tension reinforcement bars"},{id:"bar_dia_c",label:"Compression Bar Dia",unit:"mm",type:"select",default:16,options:[12,16,20,25].map(e=>({value:e,label:`${e} mm`})),tooltip:"Preferred diameter of compression reinforcement bars"}];function ii(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#doubly-beam-results");a||(a=document.createElement("div"),a.id="doubly-beam-results",e.appendChild(a));const t=re(e),i=L(t.b,150,1e3,"Beam Width"),s=L(t.overall_d,200,2e3,"Overall Depth"),o=L(t.cover_t,20,100,"Tension Cover"),l=L(t.cover_c,20,100,"Compression Cover"),n=L(t.mu,1,5e3,"Factored Moment");if(!i.valid||!s.valid||!o.valid||!l.valid||!n.valid){ee("Please correct invalid fields before calculating.","error");return}ae(ut,t);const r=parseFloat(t.b),d=parseFloat(t.overall_d),m=parseFloat(t.cover_t),b=parseFloat(t.cover_c),u=parseFloat(t.mu),v=parseFloat(t.fck),c=parseFloat(t.fy),p=parseFloat(t.bar_dia_t),$=parseFloat(t.bar_dia_c),_=d-m;let h=[];h.push({step:1,title:"Effective Depth",formula:"d = D - d_t",result:"d = "+d+" - "+m+" = "+_.toFixed(1)+' <span class="unit">mm</span>'});const g=At[c]||.479,f=g*_,y=.36*g*(1-.416*g)*v*r*_*_/1e6;h.push({step:2,title:"Limiting Capacity (Singly)",formula:"Mu,lim = 0.36×(xu,max/d)×(1 - 0.416×(xu,max/d))×fck×b×d²",result:"Mu,lim = "+y.toFixed(2)+' <span class="unit">kN·m</span>'});let S=0,M=0,F=0;if(u<=y){h.push({step:3,title:"Section Type Check",formula:"Mu vs Mu,lim",result:"Mu ("+u+") ≤ Mu,lim ("+y.toFixed(2)+") → <b>Design as Singly Reinforced</b>. Proceeding with Ast1."});const P=.87*c*_,U=c/(r*_*v),G=P*U,H=P,z=u*1e6,V=Math.pow(H,2)-4*G*z;S=(H-Math.sqrt(V))/(2*G),h.push({step:4,title:"Required Tension Steel",formula:"0.87×fy×Ast×d×[1 - Ast×fy/(b×d×fck)] = Mu",result:"Ast = "+S.toFixed(1)+' <span class="unit">mm²</span>'})}else{h.push({step:3,title:"Section Type Check",formula:"Mu vs Mu,lim",result:"Mu ("+u+") > Mu,lim ("+y.toFixed(2)+") → <b>Design as Doubly Reinforced</b>"});const P=Math.max(0,u-y);h.push({step:4,title:"Excess Moment (Mu2)",formula:"Mu2 = Mu - Mu,lim",result:"Mu2 = "+u+" - "+y.toFixed(2)+" = "+P.toFixed(2)+' <span class="unit">kN·m</span>'}),S=y*1e6/(.87*c*(_-.416*f)),h.push({step:5,title:"Tension Steel for Mu,lim (Ast1)",formula:"Ast1 = Mu,lim / [0.87×fy×(d - 0.416×xu,max)]",result:"Ast1 = "+S.toFixed(1)+' <span class="unit">mm²</span>'});const U=b/_,G=Ja(c,U),H=.446*v;h.push({step:6,title:"Stress in Comp. Steel (fsc)",formula:"Interpolated from SP 16 Table F (using d'/d = "+U.toFixed(3)+")",result:"fsc = "+G.toFixed(1)+' <span class="unit">N/mm²</span>'}),F=P*1e6/((G-H)*(_-b)),h.push({step:7,title:"Compression Steel Area (Asc)",formula:"Asc = Mu2 / [(fsc - fcc)×(d - d')]",result:"Asc = "+F.toFixed(1)+' <span class="unit">mm²</span>'}),M=F*(G-H)/(.87*c),h.push({step:8,title:"Additional Tension Steel (Ast2)",formula:"Ast2 = Asc×(fsc - fcc) / (0.87×fy)",result:"Ast2 = "+M.toFixed(1)+' <span class="unit">mm²</span>'})}const N=S+M;u>y&&h.push({step:9,title:"Total Tension Steel (Ast)",formula:"Ast = Ast1 + Ast2",result:"Ast = "+S.toFixed(1)+" + "+M.toFixed(1)+" = "+N.toFixed(1)+' <span class="unit">mm²</span>'});const k=Ce(p),E=Ce($),T=Math.ceil(N/k.area),w=Math.max(.85*r*_/c,T*k.area);let C=0,A=0;F>0&&(C=Math.max(2,Math.ceil(F/E.area)),A=C*E.area),h.push({step:u>y?10:5,title:"Provide Reinforcement",formula:"N = ceil(Area / Area_bar)",result:"Tension: Provide "+T+" - "+p+"φ ("+w.toFixed(1)+" mm²)<br>"+(F>0?"Compression: Provide "+C+" - "+$+"φ ("+A.toFixed(1)+" mm²)":"")});const D=.04*r*d;let O="pass";(w>D||A>D)&&(O="fail");const R=[{label:"Minimum Tension Steel",status:w>=.85*r*_/c?"pass":"fail",text:"Ast ("+w.toFixed(1)+") ≥ "+(.85*r*_/c).toFixed(1),ref:"Cl. 26.5.1.1(a)"},{label:"Maximum Tension Steel",status:w<=D?"pass":"fail",text:"Ast ("+w.toFixed(1)+") ≤ "+D.toFixed(1),ref:"Cl. 26.5.1.1(b)"}];F>0&&R.push({label:"Maximum Compression Steel",status:A<=D?"pass":"fail",text:"Asc ("+A.toFixed(1)+") ≤ "+D.toFixed(1),ref:"Cl. 26.5.1.2"});const B=[{label:"Ast Required",value:N.toFixed(1),unit:"mm²"},{label:"Tension Bars",value:T+" - "+p+"φ",highlight:!0,status:w<=D?"pass":"fail"}];F>0?B.push({label:"Asc Required",value:F.toFixed(1),unit:"mm²"},{label:"Compression Bars",value:C+" - "+$+"φ",highlight:!0,status:A<=D?"pass":"fail"}):B.push({label:"Asc Required",value:"0.0",unit:"mm²"},{label:"Compression Bars",value:"Nominal"});const W=`
    <div class="calculator-layout">
      <div class="results-main">
        ${ue(B)}
        
        <div class="graphics-box" style="margin-bottom: var(--spacing-lg); padding: var(--spacing-lg); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border); text-align: center;">
          <h3 style="margin-bottom: var(--spacing-md); color: var(--text-muted); font-size: 0.875rem; text-transform: uppercase;">Beam Cross-Section</h3>
          <div style="display: inline-block; position: relative; border: 3px solid var(--text-primary); width: 140px; height: ${Math.max(140,Math.min(250,d/r*140))}px; border-radius: 4px; background: rgba(255,255,255,0.05); margin-top: 1.5rem; margin-right: 2.5rem;">
            <!-- Dimensions -->
            <div style="position: absolute; top: -25px; left: 0; width: 100%; text-align: center; color: var(--text-muted); font-size: 0.875rem;">${r} mm</div>
            <div style="position: absolute; right: -50px; top: 0; height: 100%; display: flex; align-items: center; color: var(--text-muted); font-size: 0.875rem;">${d}<br>mm</div>
            
            <!-- Comp Bars -->
            ${F>0?`
            <div style="position: absolute; top: ${Math.max(10,b/d*100)}%; left: 10%; width: 80%; display: flex; justify-content: space-around;">
              ${Array(C).fill(0).map(()=>'<div style="width: 12px; height: 12px; border-radius: 50%; background: var(--text-secondary);"></div>').join("")}
            </div>`:""}
            
            <!-- Tension Bars -->
            <div style="position: absolute; bottom: ${Math.max(10,m/d*100)}%; left: 10%; width: 80%; display: flex; justify-content: space-around;">
              ${Array(T).fill(0).map(()=>'<div style="width: 14px; height: 14px; border-radius: 50%; background: var(--color-accent);"></div>').join("")}
            </div>
          </div>
          
          <div style="margin-top: var(--spacing-md); display: flex; justify-content: space-around; font-weight: 500;">
            ${F>0?`<div style="color: var(--text-secondary);">Top: ${C} - ${$}φ</div>`:""}
            <div style="color: var(--color-accent);">Bottom: ${T} - ${p}φ</div>
          </div>
        </div>
        
        ${me("Calculation Steps",h)}
      </div>
      <div class="results-sidebar">
        ${he(R)}
      </div>
    </div>
  `;a.innerHTML=W,q([{label:"Section",value:`${r} × ${d}`},{label:"Bottom",value:`${T} - ${p}φ`},F>0?{label:"Top",value:`${C} - ${$}φ`}:null,{label:"Status",value:O==="pass"?"OK":"FAIL",status:O}].filter(Boolean)),a.scrollIntoView({behavior:"smooth",block:"start"})}function Xt(e){e.innerHTML=`
    <div class="calculator-page" id="doubly-beam-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Doubly Reinforced Beam</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Doubly Reinforced Beam Design</h2>
        <p>Design a rectangular beam cross-section with both compression and tension reinforcement, required when the factored moment exceeds the limiting moment capacity of the section.</p>
        <span class="calculator-page__code-ref">
          ${x.info} IS 456:2000 — Annex G, Cl. 1.2
        </span>
      </div>

      ${te(["Section is subjected to uniaxial bending only","Used when section dimensions are restricted and Mu > Mu,lim","Concrete stress block is parabolic-rectangular per IS 456 Cl. 38.1","Stress in compression steel (fsc) is interpolated from SP-16 Table F","Contribution of concrete displaced by compression steel is accounted for"])}

      ${I("Material Properties",ei,x.info)}
      ${I("Section Geometry",ti,x.building)}
      ${I("Design Limit States",ai,x.calculator)}

      ${oe()}

      <div id="doubly-beam-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,e.querySelector("#btn-calculate").addEventListener("click",ii),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+ut),Xt(e),q([])});const a=ie(ut);a&&ce(e,a)}const mt="t-beam";function qt(e,a,t){const i=Math.pow(a,2)-4*e*t;return i<0?NaN:(a-Math.sqrt(i))/(2*e)}const si=[{id:"fck",label:"Concrete Grade (fck)",type:"select",default:25,options:Ae.map(e=>({value:e,label:`M${e}`})),tooltip:"Characteristic compressive strength"},{id:"fy",label:"Steel Grade (fy)",type:"select",default:415,options:Te.map(e=>({value:e,label:`Fe${e}`})),tooltip:"Yield strength of reinforcement"}],li=[{id:"bf",label:"Effective Flange (bf)",unit:"mm",default:1200,min:200,max:5e3,step:10,tooltip:"Calculated effective width of the flange"},{id:"df",label:"Flange Thickness (Df)",unit:"mm",default:120,min:50,max:500,step:5,tooltip:"Thickness of the slab/flange portion"},{id:"bw",label:"Web Width (bw)",unit:"mm",default:230,min:150,max:1e3,step:10,tooltip:"Width of the beam rib/web"},{id:"overall_d",label:"Overall Depth (D)",unit:"mm",default:450,min:200,max:2e3,step:10,tooltip:"Total overall depth of the beam section"},{id:"cover",label:"Effective Cover (d')",unit:"mm",default:50,min:20,max:100,step:5,tooltip:"Effective cover to center of reinforcement"}],oi=[{id:"mu",label:"Factored Moment (Mu)",unit:"kN·m",default:300,min:1,max:1e4,step:1,tooltip:"Ultimate design bending moment acting on the section"},{id:"bar_dia",label:"Tension Bar Dia",unit:"mm",type:"select",default:20,options:[16,20,25,32].map(e=>({value:e,label:`${e} mm`})),tooltip:"Preferred diameter of tension bars"}];function ni(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#t-beam-results");a||(a=document.createElement("div"),a.id="t-beam-results",e.appendChild(a));const t=re(e),i=L(t.bf,200,5e3,"Flange Width"),s=L(t.df,50,500,"Flange Thickness"),o=L(t.bw,150,2e3,"Web Width"),l=L(t.overall_d,200,2e3,"Overall Depth"),n=L(t.cover,20,100,"Effective Cover"),r=L(t.mu,1,1e4,"Factored Moment");if(!i.valid||!s.valid||!o.valid||!l.valid||!n.valid||!r.valid){ee("Please correct invalid fields before calculating.","error");return}ae(mt,t);const d=parseFloat(t.bf),m=parseFloat(t.df),b=parseFloat(t.bw),u=parseFloat(t.overall_d),v=parseFloat(t.cover),c=parseFloat(t.mu),p=parseFloat(t.fck),$=parseFloat(t.fy),_=parseFloat(t.bar_dia),h=u-v;if(d<=b){ee("Flange width (bf) must be greater than web width (bw).","error");return}if(m>=h){ee("Flange thickness (Df) must be less than effective depth (d).","error");return}let g=[];g.push({step:1,title:"Effective Depth",formula:"d = D - d'",result:"d = "+u+" - "+v+" = "+h.toFixed(1)+' <span class="unit">mm</span>'});const f=At[$]||.479,y=f*h;g.push({step:2,title:"Limiting Neutral Axis",formula:"xu,max = "+f+" × d",result:"xu,max = "+y.toFixed(1)+' <span class="unit">mm</span>'});const S=.36*p*d*m*(h-.42*m)/1e6;g.push({step:3,title:"Moment Capacity if NA is at Flange Bottom",formula:"Mu,f = 0.36×fck×bf×Df×(d - 0.42×Df)",result:"Mu,Df = "+S.toFixed(2)+' <span class="unit">kN·m</span>'});let M=0,F="",N=!0,k=0,E="pass";if(c<=S){F="Case 1: NA in Flange",g.push({step:4,title:"Determine Section Behavior",formula:"Mu vs Mu,Df",result:"Mu ("+c+") ≤ Mu,Df ("+S.toFixed(2)+") → Neutral Axis in Flange. Design as rectangular beam of width bf."});const R=.87*$*h,B=$/(d*h*p),W=R*B,P=R,U=c*1e6;M=qt(W,P,U),k=.87*$*M/(.36*p*d),g.push({step:5,title:"Required Area of Tension Steel",formula:"Quadratic: 0.87×fy×Ast×d×[1 - Ast×fy/(bf×d×fck)] = Mu",result:"Ast = "+M.toFixed(1)+' <span class="unit">mm²</span> (xu = '+k.toFixed(1)+" mm)"})}else{F="Case 2: NA in Web",g.push({step:4,title:"Determine Section Behavior",formula:"Mu vs Mu,Df",result:"Mu ("+c+") > Mu,Df ("+S.toFixed(2)+") → Neutral Axis in Web. Flanged beam analysis required."});const R=m/h;R<=.2?g.push({step:5,title:"Check Flange Thickness Ratio",formula:"Df / d",result:"Df/d = "+R.toFixed(3)+" ≤ 0.2 → Uniform compressive stress in flange (yf = Df = "+m+" mm)"}):g.push({step:5,title:"Check Flange Thickness Ratio",formula:"Df / d",result:"Df/d = "+R.toFixed(3)+" > 0.2 → Non-uniform stress. Using equivalent flange thickness yf."});const B=.36*f*(1-.416*f)*p*b*h*h,W=R<=.2?m:.15*y+.65*m,P=.446*p*(d-b)*W*(h-W/2),U=(B+P)/1e6;if(g.push({step:6,title:"Limiting Moment Capacity",formula:"Mu,lim = Mu,lim,web + 0.45×fck×(bf-bw)×yf×(d - yf/2)",result:"Mu,lim = "+U.toFixed(2)+' <span class="unit">kN·m</span>'}),c>U)N=!1,E="fail",g.push({step:7,title:"Section Check",formula:"Mu vs Mu,lim",result:"Mu ("+c+") > Mu,lim ("+U.toFixed(2)+") → <b>Doubly Reinforced T-Beam Required</b> (Beyond scope of simple calculator)."});else{let G=m;for(let J=0;J<20;J++){let se=m;R>.2&&m/G>.43&&(se=.15*G+.65*m),se=Math.min(se,m);const Y=.446*p*(d-b)*se*(h-se/2),j=c*1e6-Y,le=.36*p*b*.42,K=.36*p*b*h;let Z=qt(le,K,j);if(Math.abs(Z-G)<.1){G=Z;break}G=Z}k=G;const H=R<=.2||m/k<=.43?m:.15*k+.65*m,z=.36*p*b*k,V=.446*p*(d-b)*H;M=(z+V)/(.87*$),g.push({step:7,title:"Calculate Neutral Axis & Ast",formula:"C = T → C_web + C_flange = 0.87×fy×Ast",result:"xu = "+k.toFixed(1)+" mm <br>Ast = "+M.toFixed(1)+' <span class="unit">mm²</span>'})}}let T=0,w=0;const C=Ce(_);if(N){const R=.85*b*h/$;M=Math.max(M,R),T=Math.ceil(M/C.area),w=T*C.area,g.push({step:8,title:"Provide Reinforcement",formula:"N = ceil(Ast / Area_bar)",result:"Provide "+T+" - "+_+"φ ("+w.toFixed(1)+" mm²)"});const B=.04*b*u;w>B&&(E="fail")}const A=[];N&&A.push({label:"Minimum Tension Steel (Web)",status:w>=.85*b*h/$?"pass":"fail",text:"Ast ("+w.toFixed(1)+") ≥ "+(.85*b*h/$).toFixed(1),ref:"Cl. 26.5.1.1(a)"},{label:"Neutral Axis Limit",status:k<=y?"pass":"fail",text:"xu ("+k.toFixed(1)+") ≤ xu,max ("+y.toFixed(1)+")",ref:"Annex G 1.1"});const D=[];N?D.push({label:"Analysis Case",value:F,highlight:!0},{label:"Neutral Axis (xu)",value:k.toFixed(1),unit:"mm"},{label:"Ast Required",value:M.toFixed(1),unit:"mm²"},{label:"Tension Bars",value:T+" - "+_+"φ",highlight:!0,status:"pass"}):D.push({label:"Section Capacity",value:"Exceeded",status:"fail",highlight:!0},{label:"Resolution",value:"Increase D or b, or redesign",highlight:!0});const O=`
    <div class="calculator-layout">
      <div class="results-main">
        ${ue(D)}
        
        ${N?`
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
            <text x="100" y="195" fill="var(--text-muted)" font-size="10" text-anchor="middle">bw = ${b}</text>
            <text x="25" y="120" fill="var(--text-muted)" font-size="10" text-anchor="middle">D = ${u}</text>
            
            <!-- Bars -->
            ${Array(T).fill(0).map((R,B)=>`<circle cx="${80+B*40/Math.max(1,T-1)}" cy="165" r="4" fill="var(--color-accent)"/>`).join("")}
          </svg>
          <div style="margin-top: var(--spacing-md); color: var(--color-accent); font-weight: 500;">
            Provide ${T} - ${_}φ at bottom
          </div>
        </div>
        `:""}
        
        ${me("Calculation Steps",g)}
      </div>
      <div class="results-sidebar">
        ${he(A)}
      </div>
    </div>
  `;a.innerHTML=O,q([{label:"Flange",value:`${d} × ${m} mm`},{label:"Web",value:`${b} × ${u} mm`},N?{label:"Bars",value:`${T} - ${_}φ`}:null,{label:"Status",value:E==="pass"?"OK":"FAIL",status:E}].filter(Boolean)),a.scrollIntoView({behavior:"smooth",block:"start"})}function Qt(e){e.innerHTML=`
    <div class="calculator-page" id="t-beam-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — T-Beam Design</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>T-Beam / L-Beam Design</h2>
        <p>Design a flanged beam comparing the position of the neutral axis with the flange thickness.</p>
        <span class="calculator-page__code-ref">
          ${x.info} IS 456:2000 — Annex G 2.2
        </span>
      </div>

      ${te(["T-Beam section with uniform flange thickness Df","Effective flange width (bf) calculated externally per Cl 23.1.2","Section designed as singly reinforced (Doubly reinforced flanged beams require manual derivation)","Concrete stress block properties identical to rectangular section analysis","Equivalent flange thickness (yf) used when NA falls in web and Df/d > 0.2"])}

      ${I("Material Properties",si,x.info)}
      ${I("Geometry & Flange",li,x.building)}
      ${I("Design Limit States",oi,x.calculator)}

      ${oe()}

      <div id="t-beam-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,e.querySelector("#btn-calculate").addEventListener("click",ni),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+mt),Qt(e),q([])});const a=ie(mt);a&&ce(e,a)}const pt="short-column",ri=[{id:"fck",label:"Concrete Grade (fck)",type:"select",default:25,options:Ae.map(e=>({value:e,label:`M${e}`})),tooltip:"Characteristic compressive strength"},{id:"fy",label:"Steel Grade (fy)",type:"select",default:500,options:Te.map(e=>({value:e,label:`Fe${e}`})),tooltip:"Yield strength of reinforcement"}],ci=[{id:"b",label:"Width (b)",unit:"mm",default:300,min:200,max:2e3,step:10,tooltip:"Width of the column cross-section"},{id:"d",label:"Depth (D)",unit:"mm",default:450,min:200,max:2e3,step:10,tooltip:"Depth of the column cross-section"},{id:"lx",label:"Unsupported Length (x)",unit:"m",default:3,min:.5,max:10,step:.1,tooltip:"Unbraced length about major axis"},{id:"ly",label:"Unsupported Length (y)",unit:"m",default:3,min:.5,max:10,step:.1,tooltip:"Unbraced length about minor axis"},{id:"cover",label:"Clear Cover",unit:"mm",default:40,min:20,max:100,step:5,tooltip:"Clear cover to reinforcement ties"}],di=[{id:"pu",label:"Factored Axial Load (Pu)",unit:"kN",default:1500,min:10,max:2e4,step:10,tooltip:"Factored compressive design load"},{id:"bar_dia",label:"Longitudinal Bar Dia",unit:"mm",type:"select",default:16,options:[12,16,20,25,32].map(e=>({value:e,label:`${e} mm`})),tooltip:"Preferred diameter for main bars"},{id:"tie_dia",label:"Lateral Tie Dia",unit:"mm",type:"select",default:8,options:[8,10,12].map(e=>({value:e,label:`${e} mm`})),tooltip:"Transverse reinforcement diameter"}];function ui(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#short-column-results");a||(a=document.createElement("div"),a.id="short-column-results",e.appendChild(a));const t=re(e),i=L(t.b,200,2e3,"Width"),s=L(t.d,200,2e3,"Depth"),o=L(t.lx,.5,10,"Length X"),l=L(t.ly,.5,10,"Length Y"),n=L(t.pu,10,2e4,"Axial Load");if(!i.valid||!s.valid||!o.valid||!l.valid||!n.valid){ee("Please correct invalid fields before calculating.","error");return}ae(pt,t);const r=parseFloat(t.b),d=parseFloat(t.d),m=parseFloat(t.lx)*1e3,b=parseFloat(t.ly)*1e3,u=parseFloat(t.pu)*1e3,v=parseFloat(t.cover),c=parseFloat(t.fck),p=parseFloat(t.fy),$=parseFloat(t.bar_dia),_=parseFloat(t.tie_dia),h=r*d;let g=[];const f=m/d,y=b/r;g.push({step:1,title:"Slenderness Check",formula:"Ratio = L / b or D",result:"λx = "+m+" / "+d+" = "+f.toFixed(2)+"<br>λy = "+b+" / "+r+" = "+y.toFixed(2)});let S=!0;(f>12||y>12)&&(S=!1),g.push({step:2,title:"Column Type",formula:"λ ≤ 12 for Short Column",result:S?"Both λx, λy ≤ 12 → <b>Short Column</b>":"Slenderness > 12 → <b>Long Column</b> (Design logic proceeds as Short for approximation, but moments should be amplified)"});const M=Math.max(m/500+d/30,20),F=Math.max(b/500+r/30,20);g.push({step:3,title:"Minimum Eccentricity",formula:"emin = max(L/500 + D/30, 20)",result:"ex,min = "+M.toFixed(1)+" mm (Allowed: "+(.05*d).toFixed(1)+" mm)<br>ey,min = "+F.toFixed(1)+" mm (Allowed: "+(.05*r).toFixed(1)+" mm)"});const N=M<=.05*d&&F<=.05*r;g.push({step:4,title:"Eccentricity Condition Check",formula:"emin ≤ 0.05 D",result:N?"Condition met. We can use simplified axial load formula.":"Condition NOT met. Requires rigorous analysis with bending moments. Using basic formula as approximation."});let k=(u-.4*c*h)/(.67*p-.4*c);const E=.008*h;k<E?(g.push({step:5,title:"Required Steel Area",formula:"Pu = 0.4 fck Ac + 0.67 fy Asc",result:"Calculated Asc < 0.8% limiting value. Provide min steel."}),k=E):g.push({step:5,title:"Required Steel Area",formula:"Asc = (Pu - 0.4 fck Ag) / (0.67 fy - 0.4 fck)",result:"Asc,req = "+k.toFixed(1)+' <span class="unit">mm²</span>'}),k=Math.max(k,E),g.push({step:6,title:"Minimum Steel (0.8%)",formula:"Asc,min = 0.008 × Ag",result:"Asc,min = "+E.toFixed(1)+' <span class="unit">mm²</span>'});const T=Ce($);let w=4,C=Math.ceil(k/T.area);C%2!==0&&(C+=1),C=Math.max(C,w);const A=C*T.area,D=A/h*100;g.push({step:7,title:"Provide Longitudinal Reinforcement",formula:"N = ceil(Asc / Area_bar)",result:"Provide "+C+" - "+$+"φ ("+A.toFixed(1)+" mm² = "+D.toFixed(2)+"%)"});const O=.06*h,R=.04*h;let B="pass";A>O?B="fail":A>R&&(B="warning");const W=Math.max($/4,6),P=_>=W?_:Math.ceil(W),U=r,G=16*$,z=Math.floor(Math.min(U,G,300)/10)*10;g.push({step:8,title:"Lateral Ties Diameter",formula:"dia ≥ max(φ_main / 4, 6mm)",result:"Required ≥ "+W.toFixed(1)+" mm. Adopt "+P+"φ"}),g.push({step:9,title:"Tie Spacing (Pitch)",formula:"min(b, 16×φ_main, 300)",result:"s = min("+r+", "+16*$+", 300) = "+z+" mm"});const V=(.4*c*(h-A)+.67*p*A)/1e3;g.push({step:10,title:"Actual Load Capacity",formula:"Pu,cap = 0.4 fck (Ag - Asc,prov) + 0.67 fy Asc,prov",result:"Pu,cap = "+V.toFixed(1)+" kN ("+(V>=t.pu?"Safe":"Unsafe")+")"});const J=[{label:"Slenderness X",status:f<=12?"pass":"warn",text:"λx = "+f.toFixed(1)+" (≤ 12 for short)",ref:"Cl. 25.1.2"},{label:"Slenderness Y",status:y<=12?"pass":"warn",text:"λy = "+y.toFixed(1)+" (≤ 12 for short)",ref:"Cl. 25.1.2"},{label:"Min Eccentricity X",status:M<=.05*d?"pass":"warn",text:"ex = "+M.toFixed(1)+" (≤ "+(.05*d).toFixed(1)+")",ref:"Cl. 39.3"},{label:"Min Eccentricity Y",status:F<=.05*r?"pass":"warn",text:"ey = "+F.toFixed(1)+" (≤ "+(.05*r).toFixed(1)+")",ref:"Cl. 39.3"},{label:"Longitudinal Steel limit",status:D>=.8&&D<=6?"pass":"fail",text:D.toFixed(2)+"% (limit: 0.8% - 6.0%)",ref:"Cl. 26.5.3.1"}],se=[{label:"Calculated Capacity",value:V.toFixed(1),unit:"kN"},{label:"Longitudinal Bars",value:C+" - "+$+"φ",highlight:!0,status:B},{label:"Ast Percentage",value:D.toFixed(2),unit:"%"},{label:"Lateral Ties",value:P+"φ @ "+z+"c/c",highlight:!0,status:"pass"}],Y=[],j=10+v/r*80,le=90-v/r*80,K=10+v/d*80,de=90-v/d*80;Y.push({x:j,y:K}),Y.push({x:le,y:K}),Y.push({x:le,y:de}),Y.push({x:j,y:de});const Z=C-4;if(Z>0){let X=Z,ve=0,fe=0;for(;X>=4;)ve+=1,fe+=1,X-=4;X>=2&&(d>r?ve+=1:fe+=1,X-=2),X===1&&(fe+=1);for(let pe=1;pe<=fe;pe++){const ke=pe/(fe+1),xe=j+ke*(le-j);Y.push({x:xe,y:K}),Y.push({x:xe,y:de})}for(let pe=1;pe<=ve;pe++){const ke=pe/(ve+1),xe=K+ke*(de-K);Y.push({x:j,y:xe}),Y.push({x:le,y:xe})}}const Me=`
    <div class="calculator-layout">
      <div class="results-main">
        ${ue(se)}
        
        <div class="graphics-box" style="margin-bottom: var(--spacing-lg); padding: var(--spacing-lg); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border); text-align: center;">
          <h3 style="margin-bottom: var(--spacing-md); color: var(--text-muted); font-size: 0.875rem; text-transform: uppercase;">Column Cross-Section</h3>
          
          <svg width="200" height="200" viewBox="0 0 100 100" style="margin: 0 auto; display: block; overflow: visible;">
            <!-- Concrete Outline -->
            <rect x="10" y="10" width="80" height="80" fill="rgba(255,255,255,0.05)" stroke="var(--text-primary)" stroke-width="1.5" />
            
            <!-- Ties Outline -->
            <rect x="${j-2}" y="${K-2}" width="${le-j+4}" height="${de-K+4}" fill="none" stroke="var(--text-secondary)" stroke-width="1" rx="2" />
            
            <!-- Dimensions -->
            <text x="50" y="5" fill="var(--text-muted)" font-size="5" text-anchor="middle">${r} mm</text>
            <text x="95" y="50" fill="var(--text-muted)" font-size="5" text-anchor="start" transform="rotate(90 95,50)">${d} mm</text>
            
            <!-- Bars -->
            ${Y.slice(0,C).map(X=>`<circle cx="${X.x}" cy="${X.y}" r="2" fill="var(--color-accent)"/>`).join("")}
          </svg>
          
          <div style="margin-top: var(--spacing-md); font-weight: 500;">
            <div style="color: var(--color-accent);">Main: ${C} - ${$}φ</div>
            <div style="color: var(--text-secondary); margin-top: 4px;">Ties: ${P}φ @ ${z} mm c/c</div>
          </div>
        </div>
        
        ${me("Calculation Steps",g)}
      </div>
      <div class="results-sidebar">
        ${he(J)}
      </div>
    </div>
  `;a.innerHTML=Me,q([{label:"Section",value:`${r} × ${d} mm`},{label:"Main",value:`${C} - ${$}φ`},{label:"Ties",value:`${P}φ @ ${z}c/c`},{label:"Status",value:B==="pass"?"OK":"FAIL",status:B}].filter(Boolean)),a.scrollIntoView({behavior:"smooth",block:"start"})}function Jt(e){e.innerHTML=`
    <div class="calculator-page" id="short-column-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Short Column Design</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Short Column Design</h2>
        <p>Design of axially loaded short rectangular columns calculating both longitudinal reinforcement and lateral ties.</p>
        <span class="calculator-page__code-ref">
          ${x.info} IS 456:2000 — Cl. 39.3
        </span>
      </div>

      ${te(["Axially loaded rectangular column (Minimum eccentricity ex ≤ 0.05D, ey ≤ 0.05b)","Short column assumption verified (λx ≤ 12, λy ≤ 12)","Load capacity equation Pu = 0.4*fck*Ac + 0.67*fy*Asc used per Cl. 39.3","Longitudinal steel area limited between 0.8% and limits (4% max practical)"])}

      ${I("Material Properties",ri,x.info)}
      ${I("Column Geometry & Lengths",ci,x.building)}
      ${I("Design Limit States",di,x.calculator)}

      ${oe()}

      <div id="short-column-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,e.querySelector("#btn-calculate").addEventListener("click",ui),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+pt),Jt(e),q([])});const a=ie(pt);a&&ce(e,a)}const ft="footing",mi=[{id:"fck",label:"Concrete Grade (fck)",type:"select",default:25,options:Ae.map(e=>({value:e,label:`M${e}`})),tooltip:"Characteristic compressive strength"},{id:"fy",label:"Steel Grade (fy)",type:"select",default:500,options:Te.map(e=>({value:e,label:`Fe${e}`})),tooltip:"Yield strength of reinforcement"}],pi=[{id:"cx",label:"Column Size X (cx)",unit:"mm",default:300,min:200,max:2e3,step:10,tooltip:"Column dimension parallel to X-axis"},{id:"cy",label:"Column Size Y (cy)",unit:"mm",default:450,min:200,max:2e3,step:10,tooltip:"Column dimension parallel to Y-axis"}],fi=[{id:"p",label:"Working Axial Load (P)",unit:"kN",default:1e3,min:10,max:2e4,step:10,tooltip:"Unfactored service load from column"},{id:"sbc",label:"Safe Bearing Capacity",unit:"kN/m²",default:200,min:50,max:1e3,step:10,tooltip:"Allowable soil bearing capacity"}],vi=[{id:"cover",label:"Clear Cover",unit:"mm",default:50,min:40,max:100,step:5,tooltip:"Minimum 50mm recommended for footing"},{id:"bar_dia",label:"Main Bar Dia (φ)",unit:"mm",type:"select",default:12,options:[10,12,16,20].map(e=>({value:e,label:`${e} mm`})),tooltip:"Preferred diameter for bottom reinforcement"}];function bi(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#footing-results");a||(a=document.createElement("div"),a.id="footing-results",e.appendChild(a));const t=re(e),i=L(t.cx,200,2e3,"Column X"),s=L(t.cy,200,2e3,"Column Y"),o=L(t.p,10,2e4,"Working Load"),l=L(t.sbc,50,1e3,"SBC");if(!i.valid||!s.valid||!o.valid||!l.valid){ee("Please correct invalid fields before calculating.","error");return}ae(ft,t);const n=parseFloat(t.cx),r=parseFloat(t.cy),d=parseFloat(t.p),m=parseFloat(t.sbc),b=parseFloat(t.cover),u=parseFloat(t.fck),v=parseFloat(t.fy),c=parseFloat(t.bar_dia);let p=[];const $=d*1.1,_=$/m;p.push({step:1,title:"Required Footing Area",formula:"A = (P + 10% P) / SBC",result:"A,req = "+$.toFixed(0)+" / "+m+" = "+_.toFixed(2)+' <span class="unit">m²</span>'});const h=(r-n)/1e3,g=(-h+Math.sqrt(Math.pow(h,2)+4*_))/2,f=g+h;let y=Math.ceil(g*10)/10*1e3,S=Math.ceil(f*10)/10*1e3;const M=S/1e3*(y/1e3);p.push({step:2,title:"Footing Dimensions",formula:"L × B = A (Equal Overhang)",result:"Provide L = "+S+" mm, B = "+y+" mm.<br>A,prov = "+M.toFixed(2)+' <span class="unit">m²</span>'});const N=d*1.5/M;p.push({step:3,title:"Net Upward Factored Pressure",formula:"pu = 1.5 P / A,prov",result:"pu = "+N.toFixed(1)+' <span class="unit">kN/m²</span>'});const k=(S-r)/2/1e3,E=(y-n)/2/1e3,T=N*(y/1e3)*Math.pow(k,2)/2,w=N*(S/1e3)*Math.pow(E,2)/2,C=Math.max(T,w);p.push({step:4,title:"Maximum Bending Moment",formula:"Mu = pu × Width × (overhang)² / 2",result:"Mux = "+T.toFixed(1)+" kN·m (Along L)<br>Muy = "+w.toFixed(1)+" kN·m (Along B)<br>Max Mu = "+C.toFixed(1)+' <span class="unit">kN·m</span>'});let A=0;v===415?A=.138*u:v===500?A=.133*u:A=.149*u;const D=T>w?y:S,O=Math.sqrt(C*1e6/(A*D));p.push({step:5,title:"Depth Required from BM",formula:"d = √(Mu / (R,lim × b))",result:"d,req = "+O.toFixed(1)+' <span class="unit">mm</span>'});let R=Math.ceil(Math.max(O*1.8,150)/10)*10,B=R,W="pass",P=0,U=0,G=0,H=0,z=0,V=0,J=0;(()=>{for(let $e=0;$e<20;$e++){const Se=.87*v*R,ne=v/(y*R*u),Le=Se*ne,be=(Se-Math.sqrt(Math.pow(Se,2)-4*Le*(T*1e6)))/(2*Le),ge=.0012*y*(R+b+c);V=Math.max(be,ge);const ye=V/(y*R)*100,Re=k-R/1e3;if(Re>0){if(G=N*(y/1e3)*Re*1e3/(y*R),U=Et(ye,u),G>U){R+=10;continue}}else G=0,U=1;const ze=n+R,De=r+R,Ue=2*(ze+De),Pe=ze/1e3*(De/1e3);H=N*(M-Pe)*1e3/(Ue*R);const _a=Math.min(n/r,r/n);if(z=Math.min(.5+_a,1)*.25*Math.sqrt(u),H>z){R+=10;continue}return B=R,P=B+b+c,!0}return!1})()||(W="fail"),p.push({step:6,title:"One-Way Shear Check",formula:"τv = Vu / (B×d) ≤ τc",result:"τv = "+G.toFixed(3)+" MPa <br>τc = "+U.toFixed(3)+" MPa<br><b>"+(G<=U?"Safe":"Unsafe")+"</b>"}),p.push({step:7,title:"Two-Way (Punching) Shear Check",formula:"τv2 = Vu2 / (Perimeter×d) ≤ ks×0.25√fck",result:"τv2 = "+H.toFixed(3)+" MPa <br>τc2 = "+z.toFixed(3)+" MPa<br><b>"+(H<=z?"Safe":"Unsafe")+"</b>"}),p.push({step:8,title:"Effective Depth & Overall Depth",formula:"D = d + cover + d_bar",result:"d = "+B+" mm<br>D = "+P+' <span class="unit">mm</span>'});const j=.87*v*B,le=v/(y*B*u),K=j*le;let de=(j-Math.sqrt(Math.pow(j,2)-4*K*(T*1e6)))/(2*K);isNaN(de)&&(de=0);const Z=.87*v*B,Me=v/(S*B*u),X=Z*Me;let ve=(Z-Math.sqrt(Math.pow(Z,2)-4*X*(w*1e6)))/(2*X);isNaN(ve)&&(ve=0);const fe=v>=415?.0012:.0015,pe=fe*y*P,ke=fe*S*P;V=Math.max(de,pe),J=Math.max(ve,ke),p.push({step:9,title:"Reinforcement Area",formula:"Ast = max(Ast,req, 0.12% b D)",result:"Along L: Ast = "+V.toFixed(1)+" mm²<br>Along B: Ast = "+J.toFixed(1)+" mm²"});const xe=It(c);let Ie=Math.ceil(V/xe),Ye=Math.ceil(J/xe);const Ee=Math.floor((y-2*b-c)/(Ie-1)),Be=Math.floor((S-2*b-c)/(Ye-1));p.push({step:10,title:"Provide Reinforcement",formula:"N = ceil(Ast / Area_bar)",result:"Along L (parallel to Length): "+Ie+" - "+c+"φ @ "+Ee+" c/c<br>Along B (parallel to Width): "+Ye+" - "+c+"φ @ "+Be+" c/c"});const Ze=S/y,qe=2/(Ze+1);let Ne="";if(Ze>1){const $e=J*qe;Ne=`<div class="info-alert" style="margin-top: 8px; font-size: 0.85em; padding: 6px; background: rgba(var(--primary-rgb), 0.1); border-left: 2px solid var(--color-accent);">
        <b>Note:</b> For rectangular footing, distribute ${Math.ceil($e/xe)} bars (${(qe*100).toFixed(0)}%) uniformly in the central band of width B = ${y}mm.
     </div>`}const Ve=[{label:"Minimum Depth at edge",status:P>=150?"pass":"fail",text:"D = "+P+" mm (≥ 150)",ref:"Cl. 34.1.2"},{label:"One Way Shear",status:G<=U?"pass":"fail",text:"τv ≤ τc",ref:"Cl. 34.2.4.1"},{label:"Two Way Shear",status:H<=z?"pass":"fail",text:"τv2 ≤ τc2",ref:"Cl. 34.2.4.1"}],Oe=[{label:"Footing Size",value:(S/1e3).toFixed(1)+" × "+(y/1e3).toFixed(1),unit:"m",highlight:!0},{label:"Thickness (D)",value:P,unit:"mm",highlight:!0},{label:"Bottom Bars (Length Dir)",value:c+"φ @ "+Ee,unit:"c/c",status:"pass"},{label:"Bottom Bars (Width Dir)",value:c+"φ @ "+Be,unit:"c/c",status:"pass"}],He=`
    <div class="calculator-layout">
      <div class="results-main">
        ${ue(Oe)}
        ${Ne}
        
        <div class="graphics-box" style="margin-top: var(--spacing-lg); margin-bottom: var(--spacing-lg); padding: var(--spacing-lg); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border); text-align: center;">
          <h3 style="margin-bottom: var(--spacing-md); color: var(--text-muted); font-size: 0.875rem; text-transform: uppercase;">Footing Plan</h3>
          
          <svg width="240" height="240" viewBox="0 0 240 240" style="margin: 0 auto; display: block; overflow: visible;">
            <!-- Render footprint proportionate to L/B -->
            <!-- Assume longest side is 150px -->
            <!-- L >= B -->
            ${(()=>{const $e=Math.max(S,y),Se=S/$e*150,ne=y/$e*150,Le=n/$e*150,be=r/$e*150,ge=(240-Se)/2,ye=(240-ne)/2;return`
                <rect x="${ge}" y="${ye}" width="${Se}" height="${ne}" fill="rgba(255,255,255,0.02)" stroke="var(--text-primary)" stroke-width="2" />
                <rect x="${120-Le/2}" y="${120-be/2}" width="${Le}" height="${be}" fill="var(--bg-layer)" stroke="var(--color-accent)" stroke-width="2" />
                
                <!-- Dimensions -->
                <text x="120" y="${ye-8}" fill="var(--text-muted)" font-size="10" text-anchor="middle">L = ${S} mm</text>
                <text x="${ge+Se+8}" y="125" fill="var(--text-muted)" font-size="10" text-anchor="start" transform="rotate(90 ${ge+Se+8},125)">B = ${y} mm</text>
              `})()}
          </svg>
        </div>
        
        ${me("Calculation Steps",p)}
      </div>
      <div class="results-sidebar">
        ${he(Ve)}
      </div>
    </div>
  `;a.innerHTML=He,q([{label:"Size",value:`${S/1e3}×${y/1e3}×${P/1e3} m`},{label:"Rebar",value:`${c}φ @ ${Math.min(Ee,Be)}c/c`},{label:"Status",value:W==="pass"?"✅ OK":"❌ Failed"}]),a.scrollIntoView({behavior:"smooth",block:"start"})}function ea(e){e.innerHTML=`
    <div class="calculator-page" id="footing-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Isolated Footing</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Isolated Footing Design</h2>
        <p>Design of reinforced concrete pad footings for single columns subjected to axial load.</p>
        <span class="calculator-page__code-ref">
          ${x.info} IS 456:2000 — Section 5
        </span>
      </div>

      ${te(["Axial load only (bending moments from column ignored in this version)","Equal overhang footing proportions used by default","Area of footing includes 10% assumption for self-weight","Depth optimized to safely resist both one-way and two-way (punching) shear"])}

      ${I("Material Grades",mi,x.info)}
      ${I("Column Geometry",pi,x.building)}
      ${I("Loads & Soil Data",fi,x.calculator)}
      ${I("Design Constraints",vi,x.shield)}

      ${oe()}

      <div id="footing-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,e.querySelector("#btn-calculate").addEventListener("click",bi),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+ft),ea(e),q([])});const a=ie(ft);a&&ce(e,a)}const vt="staircase",gi=[{id:"fck",label:"Concrete Grade (fck)",type:"select",default:25,options:Ae.map(e=>({value:e,label:`M${e}`}))},{id:"fy",label:"Steel Grade (fy)",type:"select",default:500,options:Te.map(e=>({value:e,label:`Fe${e}`}))}],hi=[{id:"rise",label:"Rise (R)",unit:"mm",default:150,min:100,max:250,step:5},{id:"tread",label:"Tread (T)",unit:"mm",default:300,min:200,max:400,step:10},{id:"steps",label:"Number of Steps",default:10,min:3,max:25,step:1},{id:"width",label:"Width of Stair (W)",unit:"mm",default:1200,min:800,max:3e3,step:10},{id:"land1",label:"Bottom Landing",unit:"mm",default:1200,min:0,max:3e3,step:10},{id:"land2",label:"Top Landing",unit:"mm",default:1200,min:0,max:3e3,step:10}],yi=[{id:"ll",label:"Live Load",unit:"kN/m²",default:3,min:1.5,max:10,step:.5},{id:"ff",label:"Floor Finish",unit:"kN/m²",default:1,min:0,max:3,step:.1}],xi=[{id:"cover",label:"Clear Cover",unit:"mm",default:20,min:15,max:50,step:5},{id:"bar_dia",label:"Main Bar Dia (φ)",unit:"mm",type:"select",default:12,options:[10,12,16].map(e=>({value:e,label:`${e} mm`}))},{id:"dist_dia",label:"Dist Bar Dia (φ)",unit:"mm",type:"select",default:8,options:[8,10,12].map(e=>({value:e,label:`${e} mm`}))}];function _i(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#staircase-results");a||(a=document.createElement("div"),a.id="staircase-results",e.appendChild(a));const t=re(e);ae(vt,t);const i=parseFloat(t.rise),s=parseFloat(t.tread),o=parseInt(t.steps);parseFloat(t.width);const l=parseFloat(t.land1),n=parseFloat(t.land2),r=parseFloat(t.ll),d=parseFloat(t.ff),m=parseFloat(t.cover),b=parseFloat(t.fck),u=parseFloat(t.fy),v=parseFloat(t.bar_dia),c=parseFloat(t.dist_dia);let p=[];const _=(o-1)*s,h=(_+l+n)/1e3;p.push({step:1,title:"Effective Span",formula:"L = Going + Landings = "+_+" + "+l+" + "+n,result:"L = "+h.toFixed(2)+' <span class="unit">m</span>'});const g=h*1e3/20;let f=Math.ceil(Math.max(g,150)/10)*10,y=f-m-v/2;p.push({step:2,title:"Assume Thickness of Waist Slab",formula:"D ≈ Span / 20",result:"D = "+f+" mm <br>d = "+y+' <span class="unit">mm</span>'});const S=Math.sqrt(Math.pow(i,2)+Math.pow(s,2)),M=25*(f/1e3)*(S/s),F=25*(.5*i/1e3),k=(M+F+d+r)*1.5,w=(25*(f/1e3)+d+r)*1.5,C=Math.max(k,w);p.push({step:3,title:"Factored Load Calculation",formula:"wu = 1.5 × (DL + LL)",result:"waist slab w = "+k.toFixed(1)+" kN/m²<br>landing w = "+w.toFixed(1)+" kN/m²<br>Using w_u = "+C.toFixed(1)+' <span class="unit">kN/m</span> (per m width)'});const A=C*Math.pow(h,2)/8;p.push({step:4,title:"Design Bending Moment",formula:"Mu = wu × L² / 8",result:"Mu = "+A.toFixed(1)+' <span class="unit">kN·m/m</span>'});let D=0;u===415?D=.138*b:u===500?D=.133*b:D=.149*b;const O=Math.sqrt(A*1e6/(D*1e3));let R=!0;O>y?(R=!1,f=Math.ceil((O+m+v/2)/10)*10,y=f-m-v/2,p.push({step:5,title:"Check Effective Depth",formula:"d,req = √(Mu / (R,lim × 1000))",result:"Revised D to "+f+" mm because d,req ("+O.toFixed(1)+") > d ("+(f-m-v/2)+")"})):p.push({step:5,title:"Check Effective Depth",formula:"d,prov ≥ d,req",result:"d_req = "+O.toFixed(1)+" mm ≤ d_prov ("+y+" mm) <br><b>Safe</b>"});const B=.87*u*y,W=u/(1e3*y*b),P=B*W,U=(B-Math.sqrt(Math.pow(B,2)-4*P*(A*1e6)))/(2*P),H=(u>=415?.0012:.0015)*1e3*f,z=Math.max(U,H);p.push({step:6,title:"Main Reinforcement Required",formula:"Quadratic equation or Min limits",result:"Ast_calc = "+U.toFixed(1)+" mm²/m <br>Ast_min = "+H.toFixed(1)+" mm²/m<br>Ast = "+z.toFixed(1)+' <span class="unit">mm²/m</span>'});const V=H;p.push({step:7,title:"Distribution Steel",formula:"0.12% or 0.15% of gross area",result:"Ast,dist = "+V.toFixed(1)+' <span class="unit">mm²/m</span>'});const J=Ce(v),se=Ce(c),Y=1e3*J.area/z,j=Math.min(Math.floor(Y/10)*10,3*y,300),le=1e3*se.area/V,K=Math.min(Math.floor(le/10)*10,5*y,450);p.push({step:8,title:"Provide Spacing",formula:"s = 1000 × (Area_bar) / Ast",result:"Main: "+v+"φ @ "+j+" c/c <br>Dist: "+c+"φ @ "+K+" c/c"});const de=1e3*J.area/j/(1e3*y)*100,Z=.58*u*(z/(1e3*J.area/j)),X=20*Math.min(2,1/(.225+.0032*Z+.625*de)),ve=h*1e3/y;let fe=ve<=X?"pass":"fail";R||(fe="warning");const pe=[{label:"Minimum Thickness",status:f>=150?"pass":"fail",text:"waist slab thickness ≥ 150mm",ref:"Customary"},{label:"Deflection Control",status:ve<=X?"pass":"fail",text:"L/d ("+ve.toFixed(1)+") ≤ Limit ("+X.toFixed(1)+")",ref:"Cl. 23.2.1"}],ke=[{label:"Waist Slab (D)",value:f,unit:"mm",highlight:!0},{label:"Effective Span",value:h.toFixed(2),unit:"m"},{label:"Main Reinforcement",value:v+"φ @ "+j,unit:"c/c",highlight:!0,status:"pass"},{label:"Dist. Reinforcement",value:c+"φ @ "+K,unit:"c/c",status:"pass"}],xe=`
    <div class="calculator-layout">
      <div class="results-main">
        ${ue(ke)}
        
        <div class="graphics-box" style="margin-bottom: var(--spacing-lg); padding: var(--spacing-lg); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border); text-align: center;">
          <h3 style="margin-bottom: var(--spacing-md); color: var(--text-muted); font-size: 0.875rem; text-transform: uppercase;">Staircase Profile</h3>
          
          <svg width="300" height="150" viewBox="0 0 300 150" style="margin: 0 auto; display: block; overflow: visible;">
            <!-- Simple stair profile -->
            <path d="M 20,90 L 60,90 L 60,70 L 100,70 L 100,50 L 140,50 L 140,30 L 180,30 L 180,10 L 260,10 L 260,20 L 195,20 L 195,20 L 70,100 L 20,100 Z" fill="rgba(255,255,255,0.05)" stroke="var(--text-primary)" stroke-width="2" stroke-linejoin="round"/>
            
            <circle cx="80" cy="88" r="3" fill="var(--color-accent)" />
            <circle cx="120" cy="68" r="3" fill="var(--color-accent)" />
            <circle cx="160" cy="48" r="3" fill="var(--color-accent)" />
            <circle cx="220" cy="28" r="3" fill="var(--color-accent)" />
            
            <text x="40" y="80" fill="var(--text-muted)" font-size="8">Land</text>
            <text x="220" y="8" fill="var(--text-muted)" font-size="8">Land</text>
            <text x="120" y="45" fill="var(--text-secondary)" font-size="10" font-weight="bold">Waist D = ${f}</text>
          </svg>
        </div>
        
        ${me("Calculation Steps",p)}
      </div>
      <div class="results-sidebar">
        ${he(pe)}
      </div>
    </div>
  `;a.innerHTML=xe,q([{label:"Waist",value:`${f} mm`},{label:"Main",value:`${v}φ @ ${j}c/c`},{label:"Dist",value:`${c}φ @ ${K}c/c`},{label:"Status",value:fe==="pass"?"✅ OK":"❌ Issue"}]),a.scrollIntoView({behavior:"smooth",block:"start"})}function ta(e){e.innerHTML=`
    <div class="calculator-page" id="staircase-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Staircase Design</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Dog-legged Staircase Design</h2>
        <p>Design of dog-legged staircases spanning longitudinally. Calculates waist slab thickness and main/distribution reinforcement.</p>
        <span class="calculator-page__code-ref">
          ${x.info} IS 456:2000 — Section 33.1
        </span>
      </div>

      ${te(["Staircase spans longitudinally between landings supported at outer edges","Effective span = Going + Landing 1 + Landing 2","Load on waist slab and landing slab is treated as uniform UDL based on the maximum of both segments","Deflection control is based on basic span/effective depth ratios (modification factor approx applied)"])}

      ${I("Material Grades",gi,x.info)}
      ${I("Flight Geometry",hi,x.building)}
      ${I("Loading Profiles",yi,x.calculator)}
      ${I("Reinforcement Layout",xi,x.shield)}

      ${oe()}

      <div id="staircase-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,e.querySelector("#btn-calculate").addEventListener("click",_i),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+vt),ta(e),q([])});const a=ie(vt);a&&ce(e,a)}const bt="retaining-wall",Si=[{id:"fck",label:"Concrete Grade (fck)",type:"select",default:25,options:Ae.map(e=>({value:e,label:`M${e}`})),tooltip:"Characteristic compressive strength"},{id:"fy",label:"Steel Grade (fy)",type:"select",default:500,options:Te.map(e=>({value:e,label:`Fe${e}`})),tooltip:"Yield strength of reinforcement"}],$i=[{id:"hw",label:"Height above Ground (H)",unit:"m",default:4,min:1,max:10,step:.1},{id:"sbc",label:"Safe Bearing Capacity",unit:"kN/m²",default:150,min:50,max:1e3,step:10},{id:"mu",label:"Friction Coefficient (μ)",default:.5,min:.3,max:.8,step:.05},{id:"phi",label:"Angle of Repose (φ)",unit:"°",default:30,min:15,max:45,step:1},{id:"gamma_s",label:"Soil Density (γ)",unit:"kN/m³",default:18,min:14,max:22,step:.5},{id:"q",label:"Surcharge Load",unit:"kN/m²",default:10,min:0,max:50,step:1}],Fi=[{id:"bar_stem",label:"Stem Bar Dia (φ)",unit:"mm",type:"select",default:16,options:[12,16,20,25].map(e=>({value:e,label:`${e} mm`}))},{id:"bar_base",label:"Base Bar Dia (φ)",unit:"mm",type:"select",default:16,options:[12,16,20].map(e=>({value:e,label:`${e} mm`}))}];function Mi(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#retaining-wall-results");a||(a=document.createElement("div"),a.id="retaining-wall-results",e.appendChild(a));const t=re(e),i=L(t.hw,1,10,"Height"),s=L(t.sbc,50,1e3,"SBC");if(!i.valid||!s.valid){ee("Please correct invalid fields before calculating.","error");return}ae(bt,t);const o=parseFloat(t.hw),l=parseFloat(t.sbc),n=parseFloat(t.mu),r=parseFloat(t.phi),d=parseFloat(t.gamma_s),m=parseFloat(t.q),b=parseFloat(t.fck),u=parseFloat(t.fy),v=parseFloat(t.bar_stem);parseFloat(t.bar_base);const c=25;let p=[];const $=r*Math.PI/180,_=(1-Math.sin($))/(1+Math.sin($));p.push({step:1,title:"Earth Pressure Coefficient",formula:"Ka = (1 - sinφ) / (1 + sinφ)",result:"Ka = "+_.toFixed(3)});let h=l/d*Math.pow(_,2);h=Math.max(h,1);const g=o+h;let f=Math.ceil(.6*g*10)/10,y=Math.max(Math.ceil(g/10*10)/10,.3),S=.2,M=Math.max(Math.ceil(g/10*10)/10,.3),F=Math.ceil(f/3*10)/10;p.push({step:2,title:"Preliminary Proportions",formula:"Total H, Base Width B, Thickness",result:"H = "+g.toFixed(2)+" m <br>B = "+f.toFixed(2)+" m <br>Base Df = "+y.toFixed(2)+" m <br>Stem Base = "+M.toFixed(2)+" m <br>Toe = "+F.toFixed(2)+" m"});const N=f-F-M,k=S*(g-y)*c,E=.5*(M-S)*(g-y)*c,T=F+(M-S)+S/2,w=F+2/3*(M-S),C=f*y*c,A=f/2,D=N*(g-y)*d,O=F+M+N/2,R=N*m,B=O,W=k+E+C+D+R,P=k*T+E*w+C*A+D*O+R*B,U=.5*_*d*Math.pow(g,2),G=g/3,H=U*G,z=_*m*g,V=g/2,J=z*V,se=H+J,Y=P,j=.9*Y/se;p.push({step:3,title:"Check Against Overturning",formula:"FOS = 0.9 × Mr / Mo ≥ 1.4",result:"Mr = "+Y.toFixed(1)+" kN·m <br>Mo = "+se.toFixed(1)+" kN·m <br>FOS = "+j.toFixed(2)+(j>=1.4?" <b>(Safe)</b>":" <b>(Unsafe)</b>")});const le=.9*n*W/(U+z);p.push({step:4,title:"Check Against Sliding",formula:"FOS = 0.9 × μ × ΣW / ΣPa ≥ 1.4",result:"FOS = "+le.toFixed(2)+(le>=1.4?" <b>(Safe)</b>":" <b>(Needs Shear Key)</b>")});const K=(Y-se)/W,de=f/2-K,Z=W/f*(1+6*Math.abs(de)/f),Me=W/f*(1-6*Math.abs(de)/f);p.push({step:5,title:"Base Pressure",formula:"p = (ΣW / B) × (1 ± 6e/B)",result:"e = "+de.toFixed(3)+" m < B/6 ("+(f/6).toFixed(3)+")<br>p,max = "+Z.toFixed(1)+" kN/m² ≤ SBC ("+l+")<br>p,min = "+Me.toFixed(1)+" kN/m² ≥ 0"});const X=g-y,ve=.5*_*d*Math.pow(X,2)*(X/3),fe=_*m*X*(X/2),pe=1.5*(ve+fe),xe=M*1e3-50-v/2,Ie=.87*u*xe,Ye=u/(1e3*xe*b),Ee=Ie*Ye,Be=(Ie-Math.sqrt(Math.pow(Ie,2)-4*Ee*(pe*1e6)))/(2*Ee),qe=Math.max(Be,.0012*1e3*(M*1e3)),Ne=It(v),Ve=Math.min(Math.floor(1e3*Ne/qe/10)*10,300);p.push({step:6,title:"Reinforcement for Stem",formula:"Mu = 1.5 × M,stem, base",result:"Mu = "+pe.toFixed(1)+" kN·m<br>Ast = "+qe.toFixed(1)+" mm²/m<br>Provide "+v+"φ @ "+Ve+" c/c"});let Oe="pass",He="Design OK";j<1.4||Z>l||Me<0?(Oe="fail",He="Revise Proportions"):le<1.4&&(Oe="warning",He="Add Shear Key");const $e=[{label:"Overturning FOS",status:j>=1.4?"pass":"fail",text:j.toFixed(2)+" (≥ 1.4)",ref:"Cl. 20.1"},{label:"Sliding FOS",status:le>=1.4?"pass":"fail",text:le.toFixed(2)+" (≥ 1.4)",ref:"Cl. 20.2"},{label:"Base Pressure",status:Z<=l&&Me>=0?"pass":"fail",text:Z.toFixed(1)+" ≤ "+l,ref:"Bearing safe"}],Se=[{label:"Total Height (H)",value:g.toFixed(2),unit:"m",highlight:!0},{label:"Base Object (B)",value:f.toFixed(2),unit:"m",highlight:!0},{label:"Max Pressure",value:Z.toFixed(1),unit:"kPa"},{label:"Stem Bars",value:v+"φ @ "+Ve,unit:"c/c",status:"pass"}],ne=`
    <div class="calculator-layout">
      <div class="results-main">
        ${ue(Se)}
        
        <div class="graphics-box" style="margin-bottom: var(--spacing-lg); padding: var(--spacing-lg); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border); text-align: center;">
          <h3 style="margin-bottom: var(--spacing-md); color: var(--text-muted); font-size: 0.875rem; text-transform: uppercase;">Retaining Wall Section</h3>
          
          <svg width="240" height="240" viewBox="0 0 240 240" style="margin: 0 auto; display: block; overflow: visible;">
            <!-- Proportionate scaling approx -->
            ${(()=>{const be=200/Math.max(g,f),ge=g*be,ye=f*be,Re=y*be,ze=S*be,De=M*be,Ue=F*be,Pe=220,Ge=20;return`
                <path d="
                  M ${Ge}, ${Pe}
                  l ${ye}, 0
                  l 0, -${Re}
                  l -${ye-Ue-De}, 0
                  l 0, -${ge-Re}
                  l -${ze}, 0
                  l -${De-ze}, ${ge-Re}
                  l -${Ue}, 0
                  Z
                " fill="var(--bg-layer)" stroke="var(--color-accent)" stroke-width="2" />
                
                <text x="${Ge+ye/2}" y="${Pe+15}" fill="var(--text-muted)" font-size="10" text-anchor="middle">B = ${f}m</text>
                <text x="${Ge+ye+10}" y="${Pe-ge/2}" fill="var(--text-muted)" font-size="10" text-anchor="start">H = ${g}m</text>
                
                <!-- Soil representation -->
                <path d="M ${Ge+Ue+De}, ${Pe-ge+10} L ${Ge+ye}, ${Pe-ge+10}" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="4" />
                <path d="M ${Ge+ye}, ${Pe-Re} L ${Ge+ye}, ${Pe-ge+10}" stroke="var(--text-secondary)" stroke-width="1" stroke-dasharray="4" />
              `})()}
          </svg>
        </div>
        
        ${me("Calculation Steps",p)}
      </div>
      <div class="results-sidebar">
        ${he($e)}
      </div>
    </div>
  `;a.innerHTML=ne,q([{label:"Section",value:`${g.toFixed(2)}H × ${f.toFixed(2)}B m`},{label:"Stem Rebar",value:`${v}φ @ ${Ve}c/c`},{label:"Status",value:Oe==="pass"?"✅ OK":"❌ "+He}]),a.scrollIntoView({behavior:"smooth",block:"start"})}function aa(e){e.innerHTML=`
    <div class="calculator-page" id="retaining-wall-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Retaining Wall</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Cantilever Retaining Wall Design</h2>
        <p>Design of reinforced concrete cantilever retaining walls including stability analysis and flexural reinforcement proportions.</p>
        <span class="calculator-page__code-ref">
          ${x.info} IS 456:2000
        </span>
      </div>

      ${te(["Rankine Active Earth Pressure Theory is used (Ka = (1-sinφ)/(1+sinφ))","Base width B is assumed as 0.5 to 0.6 H for preliminary proportions","Toe projection is assumed as approx 1/3 of Base width","Surcharge load is converted to equivalent soil height for active pressure computation","Water table is assumed to be below the base of the foundation"])}

      ${I("Material Grades",Si,x.info)}
      ${I("Soil & Geometry Data",$i,x.building)}
      ${I("Reinforcement Layout",Fi,x.calculator)}

      ${oe()}

      <div id="retaining-wall-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,e.querySelector("#btn-calculate").addEventListener("click",Mi),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+bt),aa(e),q([])});const a=ie(bt);a&&ce(e,a)}const gt="shear-design",ki=[{id:"fck",label:"Concrete Grade (fck)",type:"select",default:25,options:Ae.map(e=>({value:e,label:`M${e}`})),tooltip:"Characteristic compressive strength"},{id:"fy",label:"Stirrup Grade (fy)",type:"select",default:415,options:Te.map(e=>({value:e,label:`Fe${e}`})),tooltip:"Yield strength of transverse shear reinforcement"}],Li=[{id:"b",label:"Beam Width (b)",unit:"mm",default:230,min:150,max:1e3,step:10,tooltip:"Width of the beam section"},{id:"d",label:"Effective Depth (d)",unit:"mm",default:410,min:150,max:2e3,step:10,tooltip:"Effective depth to tension steel centroid"}],Ci=[{id:"vu",label:"Factored Shear Force (Vu)",unit:"kN",default:120,min:1,max:5e3,step:1,tooltip:"Ultimate design shear force at the section"},{id:"ast",label:"Provided Tension Steel (Ast)",unit:"mm²",default:603,min:50,max:1e4,step:1,tooltip:"Actual area of main tension reinforcement provided at the section"},{id:"stirrup_dia",label:"Stirrup Bar Dia",unit:"mm",type:"select",default:8,options:[8,10,12,16].map(e=>({value:e,label:`${e} mm`})),tooltip:"Preferred diameter for shear links"},{id:"stirrup_legs",label:"Stirrup Legs",type:"select",default:2,options:[2,4,6].map(e=>({value:e,label:`${e} Legged`})),tooltip:"Number of vertical legs in the stirrup configuration"}];function wi(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#shear-design-results");a||(a=document.createElement("div"),a.id="shear-design-results",e.appendChild(a));const t=re(e),i=L(t.b,150,1e3,"Beam Width"),s=L(t.d,150,2e3,"Effective Depth"),o=L(t.vu,1,5e3,"Factored Shear Force"),l=L(t.ast,50,1e4,"Provided Tension Steel");if(!i.valid||!s.valid||!o.valid||!l.valid){ee("Please correct invalid fields before calculating.","error");return}ae(gt,t);const n=parseFloat(t.b),r=parseFloat(t.d),d=parseFloat(t.vu),m=parseFloat(t.ast),b=parseFloat(t.fck),u=parseFloat(t.fy),v=parseInt(t.stirrup_dia),c=parseInt(t.stirrup_legs);let p=[];const $=d*1e3/(n*r);p.push({step:1,title:"Nominal Shear Stress (τv)",formula:"τv = Vu / (b × d)",result:"τv = "+$.toFixed(2)+' <span class="unit">N/mm²</span>'});const _=Ia(b);p.push({step:2,title:"Maximum Shear Stress (τc,max)",formula:"IS 456 Table 20 for M"+b,result:"τc,max = "+_.toFixed(2)+' <span class="unit">N/mm²</span>'}),$>_&&ee("Section is unsafe in shear (τv > τc,max). Redesign section.","error");const h=100*m/(n*r),g=Et(h,b);p.push({step:3,title:"Design Shear Strength (τc)",formula:"pt = "+h.toFixed(2)+"%, IS 456 Table 19",result:"τc = "+g.toFixed(2)+' <span class="unit">N/mm²</span>'});const f=c*It(v);p.push({step:4,title:"Area of Stirrup Legs (Asv)",formula:c+" × (π/4) × "+v+"²",result:"Asv = "+f.toFixed(1)+' <span class="unit">mm²</span>'});let y=0,S="",M=0;$<=.5*g?(S="No Shear Reinforcement Required theoretically. Provide nominal.",y=.87*u*f/(.4*n),p.push({step:5,title:"Nominal Shear Reinforcement",formula:"Sv = (0.87 × fy × Asv) / (0.4 × b)",result:"Sv,req = "+y.toFixed(1)+' <span class="unit">mm</span>'})):$<=g?(S="Nominal Shear Reinforcement Required.",y=.87*u*f/(.4*n),p.push({step:5,title:"Nominal Shear Reinforcement",formula:"Sv = (0.87 × fy × Asv) / (0.4 × b)",result:"Sv,req = "+y.toFixed(1)+' <span class="unit">mm</span>'})):(S="Design Shear Reinforcement Required.",M=d-g*n*r/1e3,y=.87*u*f*r/(M*1e3),p.push({step:5,title:"Shear Resisted by Stirrups (Vus)",formula:"Vus = Vu - (τc × b × d)",result:"Vus = "+M.toFixed(2)+' <span class="unit">kN</span>'}),p.push({step:6,title:"Required Stirrup Spacing",formula:"Sv = (0.87 × fy × Asv × d) / Vus",result:"Sv,req = "+y.toFixed(1)+' <span class="unit">mm</span>'}));const F=.75*r,k=Math.min(F,300);p.push({step:7,title:"Maximum Spacing (IS 456 Cl. 26.5.1.5)",formula:"min(0.75d, 300 mm)",result:"Sv,max = "+k.toFixed(1)+' <span class="unit">mm</span>'});let E=Math.floor(Math.min(y,k)/5)*5;E<50&&(E=50);const T=$<=_,w=T?"pass":"fail",C=[{label:"Maximum Shear Stress Check",status:T?"pass":"fail",text:`τv (${$.toFixed(2)}) ≤ τc,max (${_.toFixed(2)})`,ref:"Cl. 40.2.3"},{label:"Maximum Spacing",status:E<=k?"pass":"warning",text:`Sv (${E}) ≤ Sv,max (${k.toFixed(0)})`,ref:"Cl. 26.5.1.5"}],A=[{label:"Nominal Stress (τv)",value:$.toFixed(2),unit:"N/mm²",status:$<=_?"pass":"fail"},{label:"Concrete Capacity (τc)",value:g.toFixed(2),unit:"N/mm²",status:"info"},{label:"Required Spacing",value:y.toFixed(0),unit:"mm"},{label:"Provided Stirrups",value:`${c}L - ${v}φ @ ${E} c/c`,highlight:!0,status:w}],D=`
    <div class="calculator-layout">
      <div class="results-main">
        ${ue(A)}
        
        <div style="margin: 1.5rem 0; padding: 1.25rem; background: var(--bg-surface); border: 1px solid var(--border); border-left: 4px solid var(--color-primary); border-radius: var(--radius-md);">
          <strong style="display:block; margin-bottom: 0.5rem; color: var(--text-primary);">Design Verdict:</strong>
          <span style="color: var(--text-secondary);">
            ${T?`Provide <strong>${c} Legged ${v}φ</strong> stirrups @ <strong>${E} mm c/c</strong>. (${S})`:'<span style="color: var(--color-error);">Section Unsafe (τv > τc,max). Please increase the section dimensions.</span>'}
          </span>
        </div>
        
        ${me("Calculation Steps",p)}
      </div>
      <div class="results-sidebar">
        ${he(C)}
      </div>
    </div>
  `;a.innerHTML=D,q([{label:"τv",value:`${$.toFixed(2)} N/mm²`},{label:"Stirrups",value:`${c}L-${v}φ @ ${E}c/c`},{label:"Status",value:w==="pass"?"OK":"FAIL",status:w}].filter(Boolean)),a.scrollIntoView({behavior:"smooth",block:"start"})}function ia(e){e.innerHTML=`
    <div class="calculator-page" id="shear-design-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Shear Design</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Shear & Stirrup Design</h2>
        <p>Design transverse reinforcement for beams subjected to high shear forces using the limit state method.</p>
        <span class="calculator-page__code-ref">
          ${x.info} IS 456:2000 — Cl. 40
        </span>
      </div>

      ${te(["Concrete shear capacity (τc) is calculated using IS 456:2000 Table 19","Maximum shear stress (τc,max) is checked against Table 20","Stirrup contribution is based on vertical legs only (no bent-up bars assumed)","Spacing is restricted to the minimum required by calculation and Cl 26.5.1.5"])}

      ${I("Material Properties",ki,x.info)}
      ${I("Beam Geometry",Li,x.building)}
      ${I("Design Limit States",Ci,x.calculator)}

      ${oe()}

      <div id="shear-design-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,e.querySelector("#btn-calculate").addEventListener("click",wi),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+gt),ia(e),q([])});const a=ie(gt);a&&ce(e,a)}const ht="dev-length",Ii=[{id:"fck",label:"Concrete Grade (fck)",type:"select",default:25,options:Ae.map(e=>({value:e,label:`M${e}`})),tooltip:"Characteristic compressive strength"},{id:"fy",label:"Steel Grade (fy)",type:"select",default:415,options:Te.map(e=>({value:e,label:`Fe${e}`})),tooltip:"Yield strength of reinforcement"}],Ei=[{id:"bar_dia",label:"Bar Diameter (φ)",unit:"mm",type:"select",default:12,options:[8,10,12,16,20,25,32].map(e=>({value:e,label:`${e} mm`})),tooltip:"Nominal diameter of the bar to be anchored"},{id:"profile",label:"Bar Profile",type:"select",default:"deformed",options:[{value:"deformed",label:"Deformed / HYSD"},{value:"plain",label:"Plain / Mild Steel"}],tooltip:"Surface characteristics of the reinforcement"}],Di=[{id:"loading",label:"Loading Condition",type:"select",default:"tension",options:[{value:"tension",label:"Tension"},{value:"compression",label:"Compression"}],tooltip:"Stress state in the bar at the start of anchorage"}];function Ai(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#dev-length-results");a||(a=document.createElement("div"),a.id="dev-length-results",e.appendChild(a));const t=re(e);ae(ht,t);const i=parseFloat(t.fck),s=parseFloat(t.fy),o=parseFloat(t.bar_dia),l=t.profile,n=t.loading;let r=[],d=Wt(i,l==="deformed");r.push({step:1,title:"Base Design Bond Stress (τbd)",formula:"IS 456 Table 5"+(l==="deformed"?" × 1.6 (Deformed bar)":""),result:"τbd = "+d.toFixed(2)+' <span class="unit">N/mm²</span>'}),n==="compression"&&(d*=1.25,r.push({step:2,title:"Compression Modifier",formula:"τbd × 1.25 (IS 456 Cl 26.2.1.1)",result:"τbd,mod = "+d.toFixed(2)+' <span class="unit">N/mm²</span>'}));const m=.87*s;r.push({step:n==="compression"?3:2,title:"Design Stress in Steel (σs)",formula:"σs = 0.87 × fy",result:"σs = "+m.toFixed(2)+' <span class="unit">N/mm²</span>'});const b=o*m/(4*d),u=Math.ceil(b/o);r.push({step:n==="compression"?4:3,title:"Development Length (Ld)",formula:"Ld = (φ × σs) / (4 × τbd)",result:"Ld = "+b.toFixed(1)+' <span class="unit">mm</span>'});const v=[{label:"Development Length",value:Math.ceil(b),unit:"mm",sub:`Approx ${u}φ`,status:"pass",highlight:!0},{label:"Design Stress (σs)",value:m.toFixed(2),unit:"MPa",status:"info"},{label:"Design Bond (τbd)",value:d.toFixed(2),unit:"MPa",status:"info"}],c=[{label:"Calculated Anchorage (Ld)",status:"pass",text:`${u}φ`,ref:"Cl. 26.2.1"}],p=`
    <div class="calculator-layout">
      <div class="results-main">
        ${ue(v)}
        
        <div style="margin: 1.5rem 0; padding: 1.25rem; background: var(--bg-surface); border: 1px solid var(--border); border-left: 4px solid var(--color-primary); border-radius: var(--radius-md);">
          <strong style="display:block; margin-bottom: 0.5rem; color: var(--text-primary);">Anchorage Requirement:</strong>
          <span style="color: var(--text-secondary);">
            Provide a minimum straight anchorage length of <strong>${Math.ceil(b)} mm</strong> (${u}φ) past the section where full stress is developed.
          </span>
        </div>
        
        ${me("Calculation Steps",r)}
      </div>
      <div class="results-sidebar">
        ${he(c)}
      </div>
    </div>
  `;a.innerHTML=p,q([{label:"Rebar",value:o+"φ "+s},{label:"Loading",value:n.charAt(0).toUpperCase()+n.slice(1)},{label:"Ld Required",value:Math.ceil(b)+" mm ("+u+"φ)"}]),a.scrollIntoView({behavior:"smooth",block:"start"})}function sa(e){e.innerHTML=`
    <div class="calculator-page" id="dev-length-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Development Length</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Development Length Calculator</h2>
        <p>Calculate the anchorage length required to develop the full design strength of reinforcement bars.</p>
        <span class="calculator-page__code-ref">
          ${x.info} IS 456:2000 — Cl. 26.2.1
        </span>
      </div>

      ${te(["Bond stress τbd is based on IS 456:2000 limit state design","Bars in compression geometry receive 25% bond stress enhancement","Deformed/HYSD bars receive 60% bond stress enhancement","Development length Ld = (φ × σs)/(4 × τbd)"])}

      ${I("Material Grades",Ii,x.info)}
      ${I("Rebar Properties",Ei,x.building)}
      ${I("Anchorage Conditions",Di,x.calculator)}

      ${oe()}

      <div id="dev-length-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,e.querySelector("#btn-calculate").addEventListener("click",Ai),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+ht),sa(e),q([])});const a=ie(ht);a&&ce(e,a)}const yt="deflection",Ti=[{id:"span_type",label:"Support Condition",type:"select",default:20,options:[{value:7,label:"Cantilever (L/d = 7)"},{value:20,label:"Simply Supported (L/d = 20)"},{value:26,label:"Continuous (L/d = 26)"}],tooltip:"Basic span to effective depth ratio per IS 456 Cl. 23.2.1"},{id:"span",label:"Effective Span (L)",unit:"m",default:6,min:.5,max:30,step:.1,tooltip:"Effective span of the member"},{id:"d",label:"Effective Depth (d)",unit:"mm",default:450,min:50,max:2e3,step:10,tooltip:"Effective depth to tension steel centroid"},{id:"bw",label:"Web Width (bw)",unit:"mm",default:230,min:50,max:2e3,step:10,tooltip:"Use b for rectangular beams"},{id:"bf",label:"Flange Width (bf)",unit:"mm",default:230,min:50,max:5e3,step:10,tooltip:"Same as bw if rectangular section"}],Bi=[{id:"fy",label:"Steel Grade (fy)",type:"select",default:415,options:Te.map(e=>({value:e,label:`Fe${e}`})),tooltip:"Yield strength of main tension steel"},{id:"ast_req",label:"Ast Required",unit:"mm²",default:600,min:10,max:1e4,step:1,tooltip:"Area of tension reinforcement required by calculation"},{id:"ast_prov",label:"Ast Provided",unit:"mm²",default:628,min:10,max:1e4,step:1,tooltip:"Area of tension reinforcement actually provided"},{id:"asc_prov",label:"Asc Provided (Compression)",unit:"mm²",default:0,min:0,max:1e4,step:1,tooltip:"Area of compression reinforcement (Leave 0 if singly reinforced)"}];function Ni(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#deflection-results");a||(a=document.createElement("div"),a.id="deflection-results",e.appendChild(a));const t=re(e),i=L(t.span,.5,30,"Effective Span"),s=L(t.d,50,2e3,"Effective Depth"),o=L(t.bw,50,2e3,"Web Width"),l=L(t.bf,50,5e3,"Flange Width"),n=L(t.ast_req,10,1e4,"Ast Required"),r=L(t.ast_prov,10,1e4,"Ast Provided");if(!i.valid||!s.valid||!o.valid||!l.valid||!n.valid||!r.valid){ee("Please correct invalid fields before calculating.","error");return}ae(yt,t);const d=parseFloat(t.span),m=parseFloat(t.d),b=parseFloat(t.bw),u=parseFloat(t.bf),v=parseFloat(t.ast_req),c=parseFloat(t.ast_prov),p=parseFloat(t.asc_prov)||0,$=parseFloat(t.fy),_=parseFloat(t.span_type);let h=[],g=_,f="IS 456 Cl. 23.2.1(a)";d>10&&_!==7&&(g=_*(10/d),f=`Base ${_} × (10 / ${d.toFixed(1)}m)`),h.push({step:1,title:"Basic Span to Depth Ratio",formula:f,result:"(L/d)basic = "+g.toFixed(2)});const y=.58*$*(v/c),S=100*c/(b*m),M=Vt(y,S);h.push({step:2,title:"Tension Modifier (kt)",formula:`pt = ${S.toFixed(2)}%, fs = ${y.toFixed(1)} MPa (IS 456 Fig. 4)`,result:"kt = "+M.toFixed(2)});let F=1;const N=100*p/(b*m);p>0&&(F=1.15*(1+.1*N),F>1.5&&(F=1.5)),h.push({step:3,title:"Compression Modifier (kc)",formula:`pc = ${N.toFixed(2)}% (IS 456 Fig. 5)`,result:"kc = "+F.toFixed(2)});let k=1;if(u>b){const O=b/u;k=.8+.2*Math.min(1,Math.max(.3,O))}h.push({step:4,title:"Flanged Section Modifier (kf)",formula:`bw/bf = ${(b/u).toFixed(2)} (IS 456 Fig. 6)`,result:"kf = "+k.toFixed(2)});const E=g*M*F*k;h.push({step:5,title:"Allowable L/d Ratio",formula:`${g.toFixed(2)} × ${M.toFixed(2)} × ${F.toFixed(2)} × ${k.toFixed(2)}`,result:"(L/d)allowable = "+E.toFixed(2)});const T=d*1e3/m;h.push({step:6,title:"Actual L/d Ratio",formula:`Actual span / d = ${(d*1e3).toFixed(0)} / ${m.toFixed(0)}`,result:"(L/d)actual = "+T.toFixed(2)});const w=T<=E,C=[{label:"Deflection Limit",status:w?"pass":"fail",text:`L/d = ${T.toFixed(2)} (≤ ${E.toFixed(2)})`,ref:"Cl. 23.2.1"}],A=[{label:"Basic L/d",value:g.toFixed(1)},{label:"Tension Mod (kt)",value:M.toFixed(2)},{label:"Compression Mod (kc)",value:F.toFixed(2)},{label:"Flange Mod (kf)",value:k.toFixed(2)}],D=`
    <div class="calculator-layout">
      <div class="results-main">
        ${ue(A)}
        
        <div style="margin: 1.5rem 0; padding: 1.25rem; background: var(--bg-surface); border: 1px solid var(--border); border-left: 4px solid var(--color-primary); border-radius: var(--radius-md);">
          <strong style="display:block; margin-bottom: 0.5rem; color: var(--text-primary);">Deflection Verdict:</strong>
          <span style="color: var(--text-secondary);">
            ${w?'The section is <strong style="color: var(--color-accent);">SAFE</strong> against excessive deflection.':'<span style="color: var(--color-error);"><strong>UNSAFE!</strong> The section is likely to suffer excessive deflection. Increase section depth or provide more compression steel.</span>'}
          </span>
        </div>
        
        ${me("Calculation Steps",h)}
      </div>
      <div class="results-sidebar">
        ${he(C)}
      </div>
    </div>
  `;a.innerHTML=D,q([{label:"Actual L/d",value:T.toFixed(2)},{label:"Allowable L/d",value:E.toFixed(2)},{label:"Status",value:w?"✅ SAFE":"❌ UNSAFE"}])}function la(e){e.innerHTML=`
    <div class="calculator-page" id="deflection-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Deflection Check</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Deflection Limit Check</h2>
        <p>Empirical method for controlling deflection in beams and slabs based on span-to-depth ratios.</p>
        <span class="calculator-page__code-ref">
          ${x.info} IS 456:2000 — Cl. 23.2.1
        </span>
      </div>

      ${te(["Span to effective depth approach verifies deflection indirectly","Basic L/d limit is modified based on tension steel area and stress (kt)","Compression steel increases allowable L/d through modifier kc","Flanged sections reduce allowable L/d through modifier kf","Spans greater than 10m are penalized proportionally (except cantilevers)"])}

      ${I("Member Geometry",Ti,x.building)}
      ${I("Reinforcement Status",Bi,x.calculator)}

      ${oe()}

      <div id="deflection-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,e.querySelector("#btn-calculate").addEventListener("click",Ni),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+yt),la(e),q([])});const a=ie(yt);a&&ce(e,a)}const xt="crack-width",Ri=[{id:"fck",label:"Concrete Grade (fck)",type:"select",default:25,options:Ae.map(e=>({value:e,label:`M${e}`})),tooltip:"Characteristic compressive strength"}],Pi=[{id:"b",label:"Beam Width (b)",unit:"mm",default:300,min:150,max:2e3,step:10,tooltip:"Width of the beam section"},{id:"d_overall",label:"Overall Depth (D)",unit:"mm",default:600,min:200,max:3e3,step:10,tooltip:"Total overall depth of the section"},{id:"cover",label:"Clear Cover",unit:"mm",default:40,min:20,max:100,step:5,tooltip:"Clear cover to main tension reinforcement"}],qi=[{id:"ast",label:"Tension Steel (Ast)",unit:"mm²",default:1256,min:50,max:15e3,step:1,tooltip:"Area of main tension reinforcement provided"},{id:"bar_dia",label:"Main Bar Dia (φ)",unit:"mm",type:"select",default:20,options:[12,16,20,25,32].map(e=>({value:e,label:`${e} mm`})),tooltip:"Representative diameter of main bars at the tension face"},{id:"spacing",label:"Bar Spacing c/c",unit:"mm",default:150,min:50,max:300,step:5,tooltip:"Average center-to-center spacing of main tension bars"}],Oi=[{id:"m_service",label:"Service Bending Moment",unit:"kN·m",default:150,min:1,max:5e3,step:1,tooltip:"Unfactored quasi-permanent service load moment"},{id:"limit",label:"Crack Width Limit",type:"select",default:.3,options:[{value:.3,label:"0.3 mm (Normal)"},{value:.2,label:"0.2 mm (Severe Exposure)"},{value:.1,label:"0.1 mm (Extreme Exposure)"}],tooltip:"Maximum permissible crack width per IS 456 Cl. 35.3.2"}];function zi(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#crack-width-results");a||(a=document.createElement("div"),a.id="crack-width-results",e.appendChild(a));const t=re(e),i=L(t.b,150,2e3,"Beam Width"),s=L(t.d_overall,200,3e3,"Overall Depth"),o=L(t.ast,50,15e3,"Tension Steel"),l=L(t.m_service,1,5e3,"Service Moment");if(!i.valid||!s.valid||!o.valid||!l.valid){ee("Please correct invalid fields before calculating.","error");return}ae(xt,t);const n=parseFloat(t.b),r=parseFloat(t.d_overall),d=parseFloat(t.cover),m=parseFloat(t.ast),b=parseFloat(t.bar_dia),u=parseFloat(t.spacing),v=parseFloat(t.m_service)*1e6,c=parseFloat(t.limit),p=parseFloat(t.fck),$=r-d-b/2;let _=[];const h=2e5,g=5e3*Math.sqrt(p),f=h/g;_.push({step:1,title:"Elastic Moduli & Modular Ratio",formula:`Ec = 5000√fck = ${g.toFixed(0)}, m = Es/Ec`,result:"m = "+f.toFixed(2)});const y=.5*n,S=f*m,M=-f*m*$,F=(-S+Math.sqrt(S*S-4*y*M))/(2*y);_.push({step:2,title:"Neutral Axis Depth (Cracked Elastic)",formula:"bx²/2 = m×Ast(d - x)",result:"x = "+F.toFixed(1)+"  mm"});const N=n*Math.pow(F,3)/3+f*m*Math.pow($-F,2);_.push({step:3,title:"Moment of Inertia (Icr)",formula:"Icr = bx³/3 + m×Ast(d - x)²",result:"Icr = "+(N/1e6).toFixed(2)+" × 10⁶ mm⁴"});const k=v*(r-F)/(g*N);_.push({step:4,title:"Apparent Strain at Tension Face (ε1)",formula:"ε1 = (M(D-x)) / (Ec×Icr)",result:"ε1 = "+(k*1e6).toFixed(0)+" × 10⁻⁶"});const E=n*Math.pow(r-F,2)/(3*h*m*($-F));let T=k-E;T<0&&(T=0),_.push({step:5,title:"Average Strain (εm)",formula:"εm = ε1 - [b(D-x)²] / [3×Es×Ast(d-x)]",result:"εm = "+(T*1e6).toFixed(0)+" × 10⁻⁶"});const w=u/2,C=d+b/2,A=Math.sqrt(w*w+C*C)-b/2;_.push({step:6,title:"Distance to Nearest Bar Surface (am)",formula:"am = √((s/2)² + (c+φ/2)²) - φ/2",result:"am = "+A.toFixed(1)+" mm"});const D=3*A*T/(1+2*(A-d)/(r-F));_.push({step:7,title:"Design Surface Crack Width (Wcr)",formula:"Wcr = (3×am×εm) / (1 + 2(am-Cmin)/(D-x))",result:"Wcr = "+D.toFixed(3)+" mm"});const O=D<=c,B=[{id:"crk_width",label:"Crack Width Check (Wcr ≤ Limit)",status:O?"pass":"fail",value:D.toFixed(3),limit:c.toFixed(3),unit:"mm"}],W=[{label:"Design Crack Width",value:D.toFixed(3),unit:"mm",status:D<=c?"pass":"fail",highlight:!0},{label:"Strain (εm)",value:(T*1e6).toFixed(0),unit:"µε",sub:T===0?"Uncracked Section":"At tension soffit",status:"info"},{label:"Limit",value:c.toFixed(2),unit:"mm",sub:t.limit=="0.3"?"Normal Exposure":"Severe Exposure",status:"info"}],P=`
    <div class="calculator-layout">
      <div class="results-main">
        ${ue(W)}
        
        <div style="margin: 1.5rem 0; padding: 1.25rem; background: var(--bg-surface); border: 1px solid var(--border); border-left: 4px solid var(--color-primary); border-radius: var(--radius-md);">
          <strong style="display:block; margin-bottom: 0.5rem; color: var(--text-primary);">Crack Width Verdict:</strong>
          <span style="color: var(--text-secondary);">
            ${O?`The calculated crack width of <strong>${D.toFixed(3)} mm</strong> is <strong style="color: var(--color-accent);">SAFE</strong> against the allowable limit of ${c.toFixed(2)} mm.`:`<span style="color: var(--color-error);"><strong>UNSAFE!</strong> The calculated crack width of <strong>${D.toFixed(3)} mm</strong> exceeds the allowable limit of ${c.toFixed(2)} mm.</span>`}
          </span>
        </div>
        
        ${me("Calculation Steps",_)}
      </div>
      <div class="results-sidebar">
        ${he(B)}
      </div>
    </div>
  `;a.innerHTML=P,q([{label:"Wcr",value:D.toFixed(3)+" mm"},{label:"Limit",value:c.toFixed(2)+" mm"},{label:"Status",value:O?"✅ SAFE":"❌ UNSAFE"}]),a.scrollIntoView({behavior:"smooth",block:"start"})}function oa(e){e.innerHTML=`
    <div class="calculator-page" id="crack-width-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Crack Width Check</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Crack Width Check</h2>
        <p>Estimate the design surface crack width of a reinforced concrete section under service loads.</p>
        <span class="calculator-page__code-ref">
          ${x.info} IS 456:2000 — Annex F
        </span>
      </div>

      ${te(["Crack width is computed at the soffit of the beam directly below tension bars","Section is assumed to be fully cracked for properties calculation (tension sustained by steel only)","Creep effects are ignored or assumed implicitly factored in the quasi-permanent load","Calculations use elastic cracked section analysis (Modular ratio m = Es/Ec)"])}

      ${I("Material Properties",Ri,x.info)}
      ${I("Beam Geometry",Pi,x.building)}
      ${I("Reinforcement Layout",qi,x.calculator)}
      ${I("Design Limit States",Oi,x.calculator)}

      ${oe()}

      <div id="crack-width-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,e.querySelector("#btn-calculate").addEventListener("click",zi),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+xt),oa(e),q([])});const a=ie(xt);a&&ce(e,a)}const We={gamma_m0:1.1,gamma_m1:1.25,gamma_mb:1.25,gamma_mw:1.25,gamma_mw_field:1.5,E:2e5,v:.3},we=[{grade:"E250 (Fe410W)A",fy:250,fu:410},{grade:"E275 (Fe430)A",fy:275,fu:430},{grade:"E300 (Fe440)A",fy:300,fu:440},{grade:"E350 (Fe490)A",fy:350,fu:490},{grade:"E410 (Fe540)A",fy:410,fu:540}],ot=[{designation:"ISMB 100",mass:11.5,A:1460,h:100,bf:75,tw:4,tf:7.2,R1:9,Izz:257.5,Iyy:40.8,Zez:51.5,Zpz:59.4,rz:42,ry:16.7},{designation:"ISMB 150",mass:14.9,A:1900,h:150,bf:80,tw:4.8,tf:7.6,R1:9,Izz:726.4,Iyy:52.6,Zez:96.9,Zpz:110.8,rz:61.8,ry:16.6},{designation:"ISMB 200",mass:25.4,A:3233,h:200,bf:100,tw:5.7,tf:10.8,R1:11,Izz:2235.4,Iyy:150,Zez:223.5,Zpz:255.4,rz:83.2,ry:21.5},{designation:"ISMB 250",mass:37.3,A:4755,h:250,bf:125,tw:6.9,tf:12.5,R1:13,Izz:5131.6,Iyy:334.5,Zez:410.5,Zpz:465.7,rz:103.8,ry:26.5},{designation:"ISMB 300",mass:44.2,A:5626,h:300,bf:140,tw:7.5,tf:12.4,R1:14,Izz:8603.6,Iyy:453.9,Zez:573.6,Zpz:651.7,rz:123.7,ry:28.4},{designation:"ISMB 350",mass:52.4,A:6671,h:350,bf:140,tw:8.1,tf:14.2,R1:14,Izz:13630,Iyy:537.7,Zez:778.9,Zpz:889.6,rz:142.9,ry:28.4},{designation:"ISMB 400",mass:61.6,A:7846,h:400,bf:140,tw:8.9,tf:16,R1:14,Izz:20458,Iyy:622.1,Zez:1022.9,Zpz:1176.2,rz:161.5,ry:28.2},{designation:"ISMB 450",mass:72.4,A:9227,h:450,bf:150,tw:9.4,tf:17.4,R1:15,Izz:30390,Iyy:834,Zez:1350.7,Zpz:1555.2,rz:181.5,ry:30.1},{designation:"ISMB 500",mass:86.9,A:11074,h:500,bf:160,tw:10.2,tf:17.2,R1:16,Izz:45218,Iyy:1369.8,Zez:1808.7,Zpz:2085.1,rz:202.1,ry:35.2},{designation:"ISMB 600",mass:122.6,A:15621,h:600,bf:210,tw:12,tf:20.8,R1:16,Izz:91813,Iyy:2651,Zez:3060.4,Zpz:3510.6,rz:242.4,ry:41.2}],na=[{designation:"ISA 50x50x6",mass:4.5,A:568,b:50,t:6,cx:14.5,cy:14.5,Ixx:11,rxx:15.2,ru:19.3,rv:9.6},{designation:"ISA 65x65x6",mass:5.8,A:744,b:65,t:6,cx:18.1,cy:18.1,Ixx:28.3,rxx:19.5,ru:25.1,rv:12.6},{designation:"ISA 75x75x8",mass:8.9,A:1138,b:75,t:8,cx:21.4,cy:21.4,Ixx:59,rxx:22.8,ru:28.9,rv:14.6},{designation:"ISA 90x90x8",mass:10.8,A:1379,b:90,t:8,cx:25.1,cy:25.1,Ixx:104.2,rxx:27.5,ru:34.9,rv:17.5},{designation:"ISA 100x100x10",mass:14.9,A:1903,b:100,t:10,cx:28.4,cy:28.4,Ixx:177,rxx:30.5,ru:38.6,rv:19.4},{designation:"ISA 110x110x10",mass:16.5,A:2106,b:110,t:10,cx:30.8,cy:30.8,Ixx:238.4,rxx:33.6,ru:42.6,rv:21.3},{designation:"ISA 130x130x12",mass:23.4,A:2982,b:130,t:12,cx:36.3,cy:36.3,Ixx:472.6,rxx:39.8,ru:50.4,rv:25.3},{designation:"ISA 150x150x15",mass:33.8,A:4300,b:150,t:15,cx:42.4,cy:42.4,Ixx:896.7,rxx:45.7,ru:57.7,rv:29.2},{designation:"ISA 200x200x25",mass:73.9,A:9410,b:200,t:25,cx:58.7,cy:58.7,Ixx:3350,rxx:59.7,ru:75.3,rv:38.7}],_t="tension-member",Ui=[{id:"section",label:"ISA Section",type:"select",default:"ISA 50x50x6",options:na.map(e=>({value:e.designation,label:e.designation}))},{id:"grade",label:"Steel Grade",type:"select",default:"E250",options:we.map(e=>({value:e.grade,label:e.grade}))}],Gi=[{id:"conn_type",label:"Connection Type",type:"select",default:"bolted",options:[{value:"bolted",label:"Bolted Connection"},{value:"welded",label:"Welded Connection"}]},{id:"bolt_dia",label:"Bolt Hole Dia (do)",unit:"mm",default:18,min:10,max:40,step:2},{id:"lc",label:"Length of Connection (Lc)",unit:"mm",default:150,min:20,max:2e3,step:10,tooltip:"Distance between outer bolts or length of weld"}];function Wi(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#tension-member-results");a||(a=document.createElement("div"),a.id="tension-member-results",e.appendChild(a));const t=re(e),i=L(t.lc,20,2e3,"Length of Connection");let s={valid:!0};if(t.conn_type==="bolted"&&(s=L(t.bolt_dia,10,40,"Bolt Hole Dia")),!i.valid||!s.valid){ee("Please correct invalid fields before calculating.","error");return}ae(_t,t);const o=t.section,l=t.grade,n=t.conn_type==="bolted",r=parseFloat(t.lc),d=n?parseFloat(t.bolt_dia):0,m=na.find(D=>D.designation===o),b=we.find(D=>D.grade===l),{fy:u,fu:v}=b,{gamma_m0:c,gamma_m1:p}=We;let $=[];const _=m.A*u/c;$.push({step:1,title:"Yielding of Gross Section (Tdg)",formula:"Tdg = (Ag × fy) / γm0",result:"Tdg = "+(_/1e3).toFixed(2)+' <span class="unit">kN</span>'});const h=m.b,g=m.b,f=m.t;let y,S;n?(y=(h-d-f/2)*f,S=h+g-f):(y=(h-f/2)*f,S=h);const M=(g-f/2)*f;$.push({step:2,title:"Net Areas (Anc, Ago)",formula:"Anc (connected), Ago (outstanding)",result:`Anc=${y.toFixed(1)}, Ago=${M.toFixed(1)} <span class="unit">mm²</span>`});let F=1.4-.076*(g/f)*(u/v)*(S/r);const N=.7,k=v*c/(u*p);F<N&&(F=N),F>k&&(F=k),$.push({step:3,title:"Shear Lag Factor (β)",formula:"β = 1.4 - 0.076(w/t)(fy/fu)(bs/Lc)",result:"β = "+F.toFixed(3)});const E=.9*y*v/p+F*M*u/c;$.push({step:4,title:"Rupture of Critical Section (Tdn)",formula:"Tdn = (0.9×Anc×fu)/γm1 + (β×Ago×fy)/γm0",result:"Tdn = "+(E/1e3).toFixed(2)+' <span class="unit">kN</span>'});const T=Math.min(_,E)/1e3,w=[{id:"beta_limit",label:"Shear Lag Factor Limit (0.7 ≤ β ≤ βmax)",status:"pass",value:F.toFixed(3),limit:`[0.7, ${k.toFixed(3)}]`,unit:""}],C=[{label:"Design Tension Capacity",value:T.toFixed(2)+" kN",sub:_<E?"Governed by Yielding":"Governed by Rupture",status:"pass"},{label:"Yielding Strength (Tdg)",value:(_/1e3).toFixed(2)+" kN",status:"info"},{label:"Rupture Strength (Tdn)",value:(E/1e3).toFixed(2)+" kN",status:"info"}],A=`
    <div class="calculator-layout">
      <div class="results-main">
        ${ue(C)}
        <div style="margin: 1.5rem 0; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <strong>Note:</strong> Calculated for a single angle connected by one leg. Block shear failure (Tdb) should also be checked depending on connection end details.
        </div>
        ${me("Calculation Steps",$)}
      </div>
      <div class="results-sidebar">
        ${he(w)}
      </div>
    </div>
  `;a.innerHTML=A,q([{label:"Section",value:o},{label:"Grade",value:u+" MPa"},{label:"Capacity (Td)",value:T.toFixed(2)+" kN"}])}function ra(e){e.innerHTML=`
    <div class="calculator-page" id="tension-member-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Tension Member</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Tension Member Capacity</h2>
        <p>Calculate the design tension capacity of single equal-angle members connected by one leg.</p>
        <span class="calculator-page__code-ref">
          ${x.info} IS 800:2007 — Section 6
        </span>
      </div>

      ${te(["Calculated for a single angle connected by one leg","Block shear failure (Tdb) is excluded in this module (depends on exact connection end details)","Gauge distance is assumed approximately as 0.6 × width for rupture computations"])}

      ${I("Material Grades",Ui,x.info)}
      ${I("Connection Details",Gi,x.shield)}

      ${oe()}

      <div id="tension-member-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;const a=ie(_t);a&&ce(e,a);const t=e.querySelector("#conn_type"),i=e.querySelector("#bolt_dia"),s=i?i.closest(".input-group"):null;t&&s&&(t.addEventListener("change",o=>{o.target.value==="welded"?s.style.display="none":s.style.display="block"}),(a&&a.conn_type==="welded"||t.value==="welded")&&(s.style.display="none")),e.querySelector("#btn-calculate").addEventListener("click",Wi),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+_t),ra(e),q([])})}const St="compression-member",Vi=[{id:"section",label:"ISMB Section",type:"select",default:"ISMB 300",options:ot.map(e=>({value:e.designation,label:e.designation}))},{id:"grade",label:"Steel Grade",type:"select",default:"E250",options:we.map(e=>({value:e.grade,label:e.grade}))}],Hi=[{id:"klz",label:"Effective Length (Z-Z)",unit:"mm",default:3e3,min:100,max:2e4,step:100,tooltip:"Effective length for buckling about major axis"},{id:"kly",label:"Effective Length (Y-Y)",unit:"mm",default:3e3,min:100,max:2e4,step:100,tooltip:"Effective length for buckling about minor axis"}],ji={a:.21,b:.34,c:.49,d:.76};function Ki(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#compression-member-results");a||(a=document.createElement("div"),a.id="compression-member-results",e.appendChild(a));const t=re(e),i=L(t.klz,100,2e4,"Effective Length Z-Z"),s=L(t.kly,100,2e4,"Effective Length Y-Y");if(!i.valid||!s.valid){ee("Please correct invalid fields before calculating.","error");return}ae(St,t);const o=t.section,l=t.grade,n=parseFloat(t.klz),r=parseFloat(t.kly),d=ot.find(w=>w.designation===o),b=we.find(w=>w.grade===l).fy,{gamma_m0:u,E:v}=We;let c=[];const p=d.h/d.bf;let $="b",_="c";p>1.2?d.tf<=40?($="a",_="b"):($="b",_="c"):d.tf<=100?($="b",_="c"):($="d",_="d"),c.push({step:1,title:"Buckling Class (Table 10)",formula:`h/bf = ${p.toFixed(2)}, tf = ${d.tf} mm`,result:`Z-Z: Class ${$}, Y-Y: Class ${_}`});function h(w,C,A,D){const O=w/C,R=Math.PI*Math.PI*v/(O*O),B=Math.sqrt(b/R),W=ji[A],P=.5*(1+W*(B-.2)+B*B);let U=b/(u*(P+Math.sqrt(P*P-B*B)));const G=b/u;return U>G&&(U=G),{lambda:O,fcc:R,lam_nd:B,alpha:W,phi:P,fcd:U}}const g=h(n,d.rz,$),f=h(r,d.ry,_);c.push({step:2,title:"Slenderness Ratio (λ)",formula:"λ = KL / r",result:`λz = ${g.lambda.toFixed(2)}, λy = ${f.lambda.toFixed(2)}`}),c.push({step:3,title:"Euler Buckling Stress (fcc)",formula:"fcc = π²E / λ²",result:`fcc,y = ${f.fcc.toFixed(1)} N/mm²`}),c.push({step:4,title:"Design Compressive Stress (fcd)",formula:"IS 800 Cl 7.1.2.1 Perry-Robertson formula",result:`fcd,z = ${g.fcd.toFixed(2)}, fcd,y = ${f.fcd.toFixed(2)} <span class="unit">MPa</span>`});const y=Math.min(g.fcd,f.fcd),S=d.A*y/1e3;c.push({step:5,title:"Design Compressive Strength (Pd)",formula:"Pd = Ae × fcd,min",result:"Pd = "+S.toFixed(2)+' <span class="unit">kN</span>'});const M=Math.max(g.lambda,f.lambda),N=M<=180?"pass":"fail",k=[{id:"slenderness",label:"Maximum Slenderness Ratio (λ ≤ 180 for dead/live load)",status:N,value:M.toFixed(2),limit:"180.00",unit:""}],E=[{label:"Column Capacity (Pd)",value:S.toFixed(2)+" kN",sub:"Governing Axis: "+(g.fcd<f.fcd?"Z-Z":"Y-Y"),status:N},{label:"Stress Factor (fcd)",value:y.toFixed(2)+" MPa",status:"info"},{label:"Max Slenderness",value:M.toFixed(2),status:N}],T=`
    <div class="calculator-layout">
      <div class="results-main">
        ${ue(E)}
        <div style="margin: 1.5rem 0; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <strong>Conclusion:</strong> Allowable compressive load is <strong>${S.toFixed(2)} kN</strong>.
        </div>
        ${me("Calculation Steps",c)}
      </div>
      <div class="results-sidebar">
        ${he(k)}
      </div>
    </div>
  `;a.innerHTML=T,q([{label:"Section",value:o},{label:"Max λ",value:M.toFixed(2)},{label:"Capacity (Pd)",value:S.toFixed(2)+" kN"}])}function ca(e){e.innerHTML=`
    <div class="calculator-page" id="compression-member-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Compression Member</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Compression Member Capacity</h2>
        <p>Calculate buckling resistance of ISMB sections subjected to axial compression.</p>
        <span class="calculator-page__code-ref">
          ${x.info} IS 800:2007 — Section 7
        </span>
      </div>

      ${te(["Calculated for doubly symmetric rolled I-sections (ISMB)","Buckling class is directly extracted from IS 800 Table 10 based on h/bf and tf thresholds","Effective lengths for major and minor axes are explicitly supplied"])}

      ${I("Section & Grade",Vi,x.info)}
      ${I("Effective Lengths",Hi,x.building)}

      ${oe()}

      <div id="compression-member-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;const a=ie(St);a&&ce(e,a),e.querySelector("#btn-calculate").addEventListener("click",Ki),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+St),ca(e),q([])})}const $t="steel-beam",Yi=[{id:"section",label:"ISMB Section",type:"select",default:"ISMB 300",options:ot.map(e=>({value:e.designation,label:e.designation}))},{id:"grade",label:"Steel Grade",type:"select",default:"E250",options:we.map(e=>({value:e.grade,label:e.grade}))}],Zi=[{id:"span",label:"Unbraced Length (L)",unit:"m",default:4,min:.5,max:30,step:.5},{id:"support",label:"Lateral Support",type:"select",default:"supported",options:[{value:"supported",label:"Laterally Supported"},{value:"unsupported",label:"Laterally Unsupported"}]}],Xi=[{id:"mz",label:"Applied Moment (Mz)",unit:"kN·m",default:100,min:0,max:5e3,step:1,tooltip:"Factored Design Bending Moment"},{id:"vz",label:"Applied Shear (Vz)",unit:"kN",default:50,min:0,max:2e3,step:1,tooltip:"Factored Design Shear Force"}];function Qi(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#steel-beam-results");a||(a=document.createElement("div"),a.id="steel-beam-results",e.appendChild(a));const t=re(e),i=L(t.span,.5,30,"Unbraced Length"),s=L(t.mz,0,5e3,"Applied Moment"),o=L(t.vz,0,2e3,"Applied Shear");if(!i.valid||!s.valid||!o.valid){ee("Please correct invalid fields before calculating.","error");return}ae($t,t);const l=t.section,n=t.grade,r=parseFloat(t.span)*1e3,d=t.support==="supported",m=parseFloat(t.mz),b=parseFloat(t.vz),u=ot.find(z=>z.designation===l),c=we.find(z=>z.grade===n).fy,{gamma_m0:p,E:$,v:_}=We,h=$/(2*(1+_));let g=[];const f=Math.sqrt(250/c),S=u.bf/2/u.tf,F=(u.h-2*(u.tf+u.R1))/u.tw;let N=3,k=3;S<=9.4*f?N=1:S<=10.5*f&&(N=2),F<=84*f?k=1:F<=105*f&&(k=2);const E=Math.max(N,k),w={1:"Plastic (Class 1)",2:"Compact (Class 2)",3:"Semi-Compact (Class 3)"}[E];if(g.push({step:1,title:"Section Classification (IS 800 Table 2)",formula:`ε = ${f.toFixed(2)}, b/tf = ${S.toFixed(1)}, d/tw = ${F.toFixed(1)}`,result:`Overall Class: ${w}`}),E>3){ee("Slender sections not supported currently.","error");return}const C=E<=2?1:u.Zez/u.Zpz,A=u.h*u.tw*c/(Math.sqrt(3)*p*1e3);g.push({step:2,title:"Design Shear Strength (Vd)",formula:"Vd = (h × tw × fyw) / (√3 × γm0)",result:`Vd = ${A.toFixed(2)} kN`});const D=b>.6*A;g.push({step:3,title:"Shear Check",formula:`Vz = ${b} kN, 0.6Vd = ${(.6*A).toFixed(2)} kN`,result:D?"High Shear Case":"Low Shear Case"});let O=0,R="";if(d){const z=E<=2?u.Zpz:u.Zez;O=C*(z*1e3)*c/(p*1e6);const V=1.2*(u.Zez*1e3)*c/(p*1e6);if(O>V&&E<=2&&(O=V,R=" (Governed by 1.2Ze limit)"),D&&E<=2){const J=Math.pow(2*b/A-1,2),se=(u.Zpz*1e3-u.tw*u.h*u.h/4)*c/(p*1e6);O=O-J*(O-se),R=" (Reduced for High Shear)"}g.push({step:4,title:"Design Bending Strength (Md)",formula:`Laterally Supported, βb = ${C.toFixed(2)}`,result:`Md = ${O.toFixed(2)} kN·m`+R})}else{const z=(2*u.bf*Math.pow(u.tf,3)+(u.h-2*u.tf)*Math.pow(u.tw,3))/3,V=u.h-u.tf,J=u.Iyy*1e4,se=.25*J*V*V;g.push({step:4,title:"Torsional Constants (It, Iw)",formula:"Calculation of St. Venant & Warping constants",result:`It = ${(z/1e4).toFixed(2)} cm⁴, Iw = ${(se/1e10).toFixed(2)} cm⁶`});const Y=Math.PI*Math.PI*$*J/(r*r),j=h*z+Math.PI*Math.PI*$*se/(r*r),le=Math.sqrt(Y*j)/1e6;g.push({step:5,title:"Elastic Lateral Buckling Moment (Mcr)",formula:"Mcr = √( (π²EIy/L²) × (GIt + π²EIw/L²) )",result:`Mcr = ${le.toFixed(2)} kN·m`});const K=Math.sqrt(C*(u.Zpz*1e3)*c/1e6/le),Z=.5*(1+.21*(K-.2)+K*K);let X=1/(Z+Math.sqrt(Z*Z-K*K))*c/p;X>c/p&&(X=c/p),g.push({step:6,title:"Design Bending Stress (fbd)",formula:`λLT = ${K.toFixed(3)}, ΦLT = ${Z.toFixed(3)}`,result:`fbd = ${X.toFixed(2)} MPa`}),O=C*(u.Zpz*1e3)*X/1e6,g.push({step:7,title:"Design Bending Strength (Md)",formula:"Md = βb × Zp × fbd",result:`Md = ${O.toFixed(2)} kN·m`})}const B=m<=O,W=b<=A,P=B&&W?"pass":"fail",U=[{id:"moment",label:"Bending Capacity (Mz ≤ Md)",status:B?"pass":"fail",value:m.toFixed(1),limit:O.toFixed(1),unit:"kN·m"},{id:"shear",label:"Shear Capacity (Vz ≤ Vd)",status:W?"pass":"fail",value:b.toFixed(1),limit:A.toFixed(1),unit:"kN"}],G=[{label:"Moment Capacity (Md)",value:O.toFixed(2)+" kN·m",sub:d?"Laterally Supported":"Buckling Controls",status:B?"pass":"fail"},{label:"Shear Capacity (Vd)",value:A.toFixed(2)+" kN",sub:D?"High Shear Condition":"Low Shear Check",status:W?"pass":"fail"},{label:"Section Class",value:`Class ${E}`,status:"info"}],H=`
    <div class="calculator-layout">
      <div class="results-main">
        ${ue(G)}
        <div style="margin: 1.5rem 0; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <strong>Conclusion:</strong> Section <strong>${l}</strong> is <strong>${P==="pass"?"SAFE":"UNSAFE"}</strong> for the applied forces.
        </div>
        ${me("Calculation Steps",g)}
      </div>
      <div class="results-sidebar">
        ${he(U)}
      </div>
    </div>
  `;a.innerHTML=H,q([{label:"Section",value:l},{label:"Md",value:O.toFixed(2)+" kN·m"},{label:"Vd",value:A.toFixed(2)+" kN"},{label:"Status",value:P==="pass"?"✅ SAFE":"❌ UNSAFE"}])}function da(e){e.innerHTML=`
    <div class="calculator-page" id="steel-beam-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Steel Beam Design</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Steel Beam Design</h2>
        <p>Calculate bending and shear capacity of ISMB sections including lateral torsional buckling.</p>
        <span class="calculator-page__code-ref">
          ${x.info} IS 800:2007 — Section 8
        </span>
      </div>

      ${te(["Section classification determines plastic vs elastic section modulus usage","Laterally unsupported case considers Elastic Lateral Buckling Moment (Mcr)","Check for high shear condition incorporates moment capacity reduction if Vz > 0.6*Vd"])}

      ${I("Section & Grade",Yi,x.info)}
      ${I("Span & Support Conditions",Zi,x.building)}
      ${I("Design Loads",Xi,x.calculator)}

      ${oe()}

      <div id="steel-beam-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;const a=ie($t);a&&ce(e,a),e.querySelector("#btn-calculate").addEventListener("click",Qi),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+$t),da(e),q([])})}const Ft="fillet-weld",Ji=[{id:"grade",label:"Steel Grade",type:"select",default:"E250",options:we.map(e=>({value:e.grade,label:e.grade}))}],es=[{id:"site",label:"Welding Location",type:"select",default:"shop",options:[{value:"shop",label:"Shop Welding (γmw = 1.25)"},{value:"field",label:"Field Welding (γmw = 1.50)"}]},{id:"weld_size",label:"Weld Size (s)",type:"select",default:"6",options:[3,4,5,6,8,10,12].map(e=>({value:e.toString(),label:`${e} mm`}))},{id:"t_max",label:"Thickness of Thicker Part",unit:"mm",default:12,min:1,max:100,step:1,tooltip:"To check minimum weld size"}],ts=[{id:"pu",label:"Applied Load (Pu)",unit:"kN",default:150,min:1,max:5e3,step:1}];function as(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#fillet-weld-results");a||(a=document.createElement("div"),a.id="fillet-weld-results",e.appendChild(a));const t=re(e),i=L(t.pu,1,5e3,"Applied Load"),s=L(t.t_max,1,100,"Thickness of Thicker Part");if(!i.valid||!s.valid){ee("Please correct invalid fields before calculating.","error");return}ae(Ft,t);const o=t.grade,l=t.site==="shop",n=parseFloat(t.pu),r=parseFloat(t.weld_size),d=parseFloat(t.t_max),b=we.find(F=>F.grade===o).fu,u=l?We.gamma_mw:We.gamma_mw_field;let v=[],c=3;d<=10?c=3:d<=20?c=5:d<=32?c=6:d<=50?c=8:c=10,v.push({step:1,title:"Minimum Weld Size (IS 800 Table 21)",formula:`For thicker part = ${d} mm`,result:`s,min = ${c} mm`}),r<c&&ee(`Weld size (${r} mm) is less than minimum required (${c} mm).`,"error");const p=.7*r;v.push({step:2,title:"Effective Throat Thickness (t)",formula:"t = 0.7 × s (assumed 90° fusion faces)",result:`t = ${p.toFixed(1)} mm`});const $=b/(Math.sqrt(3)*u);v.push({step:3,title:"Design Stress of Weld (fwd)",formula:`fwd = fu / (√3 × γmw) = ${b} / (√3 × ${u})`,result:`fwd = ${$.toFixed(2)} MPa`});const _=p*$/1e3;v.push({step:4,title:"Weld Capacity per mm",formula:"pdw = t × fwd",result:`pdw = ${_.toFixed(3)} kN/mm`});const h=n/_,g=h+2*r;v.push({step:5,title:"Required Effective Length (Lw)",formula:"Lw = Pu / pdw",result:`Lw = ${h.toFixed(1)} mm`}),v.push({step:6,title:"Actual Length to Provide (Lw,actual)",formula:"Lw,act = Lw + 2s (End Returns)",result:`Lw,act = ${g.toFixed(1)} mm`});const y=[{id:"weld_size_min",label:"Minimum Weld Size (s ≥ s,min)",status:r>=c?"pass":"fail",value:r.toString(),limit:c.toString(),unit:"mm"}],S=[{label:"Total Length to Provide",value:Math.ceil(g)+" mm",sub:`For ${r}mm Fillet Weld`,status:"pass"},{label:"Capacity per mm",value:_.toFixed(2)+" kN",status:"info"},{label:"Throat Thickness",value:p.toFixed(1)+" mm",status:"info"}],M=`
    <div class="calculator-layout">
      <div class="results-main">
        ${ue(S)}
        <div style="margin: 1.5rem 0; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <strong>Action:</strong> Provide a <strong>${r} mm</strong> fillet weld for a total continuous length of <strong>${Math.ceil(g)} mm</strong>.
        </div>
        ${me("Calculation Steps",v)}
      </div>
      <div class="results-sidebar">
        ${he(y)}
      </div>
    </div>
  `;a.innerHTML=M,q([{label:"Weld Size",value:r+" mm"},{label:"Capacity/mm",value:_.toFixed(2)+" kN/mm"},{label:"Length to Provide",value:Math.ceil(g)+" mm"}])}function ua(e){e.innerHTML=`
    <div class="calculator-page" id="fillet-weld-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Fillet Weld Design</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Fillet Weld Design</h2>
        <p>Calculate required fillet weld length for a given design load.</p>
        <span class="calculator-page__code-ref">
          ${x.info} IS 800:2007 — Section 10.5
        </span>
      </div>

      ${te(["Calculated assuming a fusion face angle of 90° (effective throat t = 0.7 × s)","Automatically adds 2s to the effective length to account for weld end returns","Load is assumed uniformly distributed along the entire length"])}

      ${I("Material Grades",Ji,x.info)}
      ${I("Weld Details",es,x.building)}
      ${I("Design Loads",ts,x.calculator)}

      ${oe()}

      <div id="fillet-weld-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;const a=ie(Ft);a&&ce(e,a),e.querySelector("#btn-calculate").addEventListener("click",as),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+Ft),ua(e),q([])})}const Mt="bolted-connection",is=[{id:"grade",label:"Plate Steel Grade",type:"select",default:"E250",options:we.map(e=>({value:e.grade,label:e.grade}))}],ss=[{id:"bolt_grade",label:"Bolt Grade (Property Class)",type:"select",default:"4.6",options:[{value:"4.6",label:"Grade 4.6 (fub = 400 MPa)"},{value:"8.8",label:"Grade 8.8 (fub = 800 MPa)"}]},{id:"bolt_dia",label:"Bolt Diameter (d)",type:"select",default:"20",options:[12,16,20,24,30].map(e=>({value:e.toString(),label:`M${e}`}))}],ls=[{id:"joint_type",label:"Joint Type",type:"select",default:"lap",options:[{value:"lap",label:"Lap Joint (Single Shear)"},{value:"single_butt",label:"Single Cover Butt (Single Shear)"},{value:"double_butt",label:"Double Cover Butt (Double Shear)"}]},{id:"t_main",label:"Main Plate Thickness",unit:"mm",default:12,min:1,max:100,step:1},{id:"t_cover",label:"Cover Plates Thickness",unit:"mm",default:16,min:1,max:100,step:1,tooltip:"Required for Butt Joints"},{id:"pitch",label:"Pitch/Gauge (p)",unit:"mm",default:50,min:20,max:200,step:5},{id:"end_dist",label:"End/Edge (e)",unit:"mm",default:40,min:20,max:100,step:5}],os=[{id:"pu",label:"Applied Load (Pu)",unit:"kN",default:300,min:1,max:5e3,step:1}];function ns(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#bolt-results");a||(a=document.createElement("div"),a.id="bolt-results",e.appendChild(a));const t=re(e),i=L(t.pu,1,5e3,"Applied Load"),s=L(t.t_main,1,100,"Main Plate"),o=L(t.pitch,20,200,"Pitch"),l=L(t.end_dist,20,100,"End Distance");if(!i.valid||!s.valid||!o.valid||!l.valid){ee("Please correct invalid fields before calculating.","error");return}ae(Mt,t);const n=t.grade,r=t.joint_type,d=parseFloat(t.pu),m=parseInt(t.bolt_dia),b=parseFloat(t.bolt_grade),u=parseFloat(t.t_main),v=parseFloat(t.t_cover)||0,c=parseFloat(t.pitch),p=parseFloat(t.end_dist),_=we.find(J=>J.grade===n).fu,h=b===4.6?400:800,g=We.gamma_mb;let f=[],y=m+2;m<=14?y=m+1:m>=24&&(y=m+3),f.push({step:1,title:"Hole Clearance",formula:"d0 = d + clearance",result:`d0 = ${y} mm`});const S=2.5*m,M=1.5*y;f.push({step:2,title:"Pitch & End Distance Check",formula:`p_min = ${S} mm, e_min = ${M} mm`,result:c>=S&&p>=M?"OK":"FAIL (Spacing too small)"});let F=1,N=0;r==="double_butt"&&(F=1,N=1);const k=Math.PI*m*m/4,E=.78*k,w=h/Math.sqrt(3)*(F*E+N*k)/(g*1e3);f.push({step:3,title:"Shear Capacity (Vdsb)",formula:"Vdsb = (fub/√3)(nn×Anb + ns×Asb)/γmb",result:`Vdsb = ${w.toFixed(2)} kN`});const C=p/(3*y),A=c/(3*y)-.25,D=h/_,R=Math.min(C,A,D,1);f.push({step:4,title:"Bearing Coefficient (kb)",formula:"kb = min(e/3d0, p/3d0 - 0.25, fub/fu, 1.0)",result:`kb = ${R.toFixed(3)}`});let B=u;r==="lap"?B=u:(r==="double_butt"||r==="single_butt")&&(B=Math.min(u,v));const P=2.5*R*m*B*_/(g*1e3);f.push({step:5,title:"Bearing Capacity (Vdpb)",formula:"Vdpb = (2.5×kb×d×t×fu) / γmb",result:`Vdpb = ${P.toFixed(2)} kN`});const U=Math.min(w,P);f.push({step:6,title:"Bolt Value (Vd)",formula:"Vd = min(Vdsb, Vdpb)",result:`Vd = ${U.toFixed(2)} kN`});const G=Math.ceil(d/U),H=[{id:"min_pitch",label:"Minimum Pitch Check (p ≥ 2.5d)",status:c>=S?"pass":"fail",value:c.toFixed(0),limit:S.toFixed(0),unit:"mm"},{id:"min_edge",label:"Minimum End Distance Check (e ≥ 1.5d0)",status:p>=M?"pass":"fail",value:p.toFixed(0),limit:M.toFixed(0),unit:"mm"}],z=[{label:"Bolt Value",value:U.toFixed(2)+" kN",sub:w<P?"Governed by Shear":"Governed by Bearing",status:"pass"},{label:"Bolts Required",value:G.toString(),sub:`For load of ${d} kN`,status:"pass"},{label:"Joint Shear Planes",value:(N+F).toString(),status:"info"}],V=`
    <div class="calculator-layout">
      <div class="results-main">
        ${ue(z)}
        <div style="margin: 1.5rem 0; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <strong>Action:</strong> Provide <strong>${G}</strong> numbers of M${m} Grade ${b} bolts.
        </div>
        ${me("Calculation Steps",f)}
      </div>
      <div class="results-sidebar">
        ${he(H)}
      </div>
    </div>
  `;a.innerHTML=V,q([{label:"Bolt Value",value:U.toFixed(2)+" kN"},{label:"Bolts Req",value:G.toString()},{label:"Governing",value:w<P?"Shear":"Bearing"}])}function ma(e){e.innerHTML=`
    <div class="calculator-page" id="bolt-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Bolted Connection Design</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Bolted Connection Design</h2>
        <p>Calculate capacity of bearing-type bolts in shear and bearing.</p>
        <span class="calculator-page__code-ref">
          ${x.info} IS 800:2007 — Section 10.3
        </span>
      </div>

      ${te(["Calculated for ordinary bearing-type bolts (not HSFG)","Net tensile area of bolt is taken as 0.78 × Gross area","Threads are conservatively assumed to intercept the shear plane in lap and single butt joints","Failure by tearing of plates (block shear) is not checked automatically"])}

      ${I("Material Details",is,x.info)}
      ${I("Bolt Specifications",ss,x.shield)}
      ${I("Joint Configuration",ls,x.building)}
      ${I("Design Load",os,x.calculator)}

      ${oe()}

      <div id="bolt-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;const a=ie(Mt);a&&ce(e,a);const t=e.querySelector("#joint_type"),i=e.querySelector("#t_cover"),s=i?i.closest(".input-group"):null;t&&s&&(t.addEventListener("change",o=>{o.target.value==="lap"?s.style.display="none":s.style.display="block"}),a&&a.joint_type==="lap"||t.value==="lap"?s.style.display="none":s.style.display="block"),e.querySelector("#btn-calculate").addEventListener("click",ns),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+Mt),ma(e),q([])})}const pa=[{id:"rcc",name:"Reinforced Cement Concrete (RCC)",weight:25,type:"Concrete"},{id:"pcc",name:"Plain Cement Concrete (PCC)",weight:24,type:"Concrete"},{id:"brick_solid",name:"Common Burnt Clay Bricks",weight:19.2,type:"Masonry"},{id:"brick_flyash",name:"Fly Ash Bricks",weight:16,type:"Masonry"},{id:"block_aac",name:"AAC Blocks",weight:6.5,type:"Masonry"},{id:"block_solid",name:"Solid Concrete Blocks",weight:21,type:"Masonry"},{id:"steel",name:"Structural Steel",weight:78.5,type:"Metals"},{id:"plaster_cm",name:"Cement Mortar Plaster",weight:20.4,type:"Finishes"},{id:"screed",name:"Cement Concrete Screed",weight:24,type:"Finishes"},{id:"marble",name:"Marble Stone",weight:26.5,type:"Finishes"},{id:"granite",name:"Granite Stone",weight:26.5,type:"Finishes"},{id:"tiles_ceramic",name:"Ceramic Tiles",weight:20,type:"Finishes"},{id:"timber",name:"Timber (Hardwood)",weight:8.5,type:"Wood"},{id:"soil_dry",name:"Dry Soil",weight:16,type:"Earth & Water"},{id:"soil_sat",name:"Saturated Soil",weight:20,type:"Earth & Water"},{id:"water",name:"Water",weight:9.81,type:"Earth & Water"},{id:"glass",name:"Glass",weight:25,type:"Miscellaneous"},{id:"gypsum",name:"Gypsum Board / False Ceiling",weight:8,type:"Miscellaneous"}],at=[{group:"Residential Buildings",usage:"Living rooms, Bed rooms",udl:2,point:1.8},{group:"Residential Buildings",usage:"Kitchens",udl:2,point:1.8},{group:"Residential Buildings",usage:"Corridors, Passages, Staircases",udl:3,point:4.5},{group:"Residential Buildings",usage:"Balconies",udl:3,point:1.5},{group:"Educational Buildings",usage:"Classrooms, Lecture rooms",udl:3,point:2.7},{group:"Educational Buildings",usage:"Corridors, Passages, Stairs",udl:4,point:4.5},{group:"Educational Buildings",usage:"Reading rooms (Libraries)",udl:3,point:4.5},{group:"Educational Buildings",usage:"Stack rooms (Libraries)",udl:6,point:4.5},{group:"Office Buildings",usage:"Rooms for general use",udl:2.5,point:2.7},{group:"Office Buildings",usage:"Rooms with computing/filing",udl:3,point:2.7},{group:"Office Buildings",usage:"Corridors, Stairs, Balconies",udl:4,point:4.5},{group:"Commercial / Retail",usage:"Shop floors",udl:4,point:3.6},{group:"Commercial / Retail",usage:"Corridors and Stairs",udl:4,point:4.5},{group:"Assembly Buildings",usage:"Fixed seating (Theatres)",udl:4,point:0},{group:"Assembly Buildings",usage:"No seating (Dance halls, Gyms)",udl:5,point:3.6},{group:"Roofs",usage:"Flat/Pitched covered (Access provided)",udl:1.5,point:1.8},{group:"Roofs",usage:"Flat/Pitched covered (No access)",udl:.75,point:.9}],rs=[{city:"Agra",vb:47},{city:"Ahmedabad",vb:39},{city:"Bengaluru",vb:33},{city:"Bhopal",vb:39},{city:"Bhubaneswar",vb:50},{city:"Chandigarh",vb:47},{city:"Chennai",vb:50},{city:"Delhi",vb:47},{city:"Guwahati",vb:50},{city:"Hyderabad",vb:44},{city:"Jaipur",vb:47},{city:"Kochi",vb:39},{city:"Kolkata",vb:50},{city:"Lucknow",vb:47},{city:"Mumbai",vb:44},{city:"Patna",vb:47},{city:"Pune",vb:39},{city:"Srinagar",vb:39},{city:"Trivandrum",vb:39},{city:"Visakhapatnam",vb:50}],_e=[[10,1.05,1,.91,.8],[15,1.09,1.05,.97,.8],[20,1.12,1.07,1.01,.8],[30,1.15,1.12,1.06,.97],[50,1.2,1.17,1.12,1.1],[100,1.26,1.24,1.2,1.2],[150,1.3,1.28,1.24,1.24],[200,1.32,1.3,1.27,1.27],[250,1.34,1.32,1.29,1.28],[300,1.35,1.34,1.31,1.3],[400,1.37,1.36,1.34,1.32],[500,1.39,1.38,1.36,1.34]];function cs(e,a){const t=a;if(e<=_e[0][0])return _e[0][t];if(e>=_e[_e.length-1][0])return _e[_e.length-1][t];for(let i=0;i<_e.length-1;i++){if(e===_e[i][0])return _e[i][t];if(e>_e[i][0]&&e<_e[i+1][0]){const s=_e[i][0],o=_e[i+1][0],l=_e[i][t],n=_e[i+1][t];return l+(e-s)*(n-l)/(o-s)}}return 1}const ds=[{zone:"II",Z:.1,factor:.1},{zone:"III",Z:.16,factor:.16},{zone:"IV",Z:.24,factor:.24},{zone:"V",Z:.36,factor:.36}],us=[{id:"I_1.5",name:"Important Service/Community Buildings (Hospitals, Schools)",I:1.5},{id:"I_1.2",name:"Residential/Commercial with >200 occupancy",I:1.2},{id:"I_1.0",name:"All other buildings",I:1}],ms=[{id:"OMRF",name:"Ordinary RC Moment-Resisting Frame (OMRF)",R:3},{id:"SMRF",name:"Special RC Moment-Resisting Frame (SMRF)",R:5},{id:"STEEL_OMRF",name:"Steel OMRF",R:4},{id:"STEEL_SMRF",name:"Steel SMRF",R:5},{id:"STEEL_EBF",name:"Steel Eccentrically Braced Frame",R:5},{id:"MASONRY_URM",name:"Unreinforced Masonry",R:1.5},{id:"MASONRY_RM",name:"Reinforced Masonry",R:3}];function ps(e,a){if(e===0)return 1;if(a===1){if(e<.1)return 1+15*e;if(e>=.1&&e<=.4)return 2.5;if(e>.4&&e<=4)return 1/e}else if(a===2){if(e<.1)return 1+15*e;if(e>=.1&&e<=.55)return 2.5;if(e>.55&&e<=4)return 1.36/e}else if(a===3){if(e<.1)return 1+15*e;if(e>=.1&&e<=.67)return 2.5;if(e>.67&&e<=4)return 1.67/e}return a===1?1/4:a===2?1.36/4:a===3?1.67/4:1}const kt="dead-load",fa=[],fs=[{value:"",label:"-- Select Material --"},...pa.map(e=>({value:e.id,label:`${e.name} (${e.weight} kN/m³)`}))];for(let e=1;e<=5;e++)fa.push({id:`mat_${e}`,label:`Layer ${e} Material`,type:"select",options:fs},{id:`thk_${e}`,label:`Layer ${e} Thickness`,unit:"mm",type:"number",min:0,max:2e3,step:5,placeholder:"e.g. 150"});function vs(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#dead-load-results");a||(a=document.createElement("div"),a.id="dead-load-results",e.appendChild(a));const t=re(e);ae(kt,t);let i=0,s=[],o=0;for(let d=1;d<=5;d++){const m=t[`mat_${d}`],b=t[`thk_${d}`];if(m&&b){const u=parseFloat(b);if(u>0){const v=pa.find(c=>c.id===m);if(v){const c=v.weight*(u/1e3);i+=c,o++,s.push({step:o,title:`Layer ${d}: ${v.name}`,formula:`γ × t = ${v.weight.toFixed(1)} kN/m³ × ${(u/1e3).toFixed(3)} m`,result:`q = ${c.toFixed(2)} kN/m²`})}}}}if(o===0){ee("Please select at least one material and provide its thickness.","error");return}s.push({step:"Σ",title:"Total Surface Dead Load",formula:"Sum of all layer loads",result:`w,DL = ${i.toFixed(2)} kN/m²`});const l=i*1.5,n=[{label:"Total Dead Load (Unfactored)",value:i.toFixed(2)+" kN/m²",sub:`From ${o} layers`,status:"pass"},{label:"Factored Dead Load (1.5)",value:l.toFixed(2)+" kN/m²",status:"info"}],r=`
    <div class="calculator-layout">
      <div class="results-main">
        ${ue(n)}
        ${me("Calculation Steps",s)}
      </div>
      <div class="results-sidebar">
        <!-- Optional extra info/checks area -->
        <div style="padding: 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <h4 style="margin-top: 0; color: var(--text-color); font-size: 0.95rem; display: flex; align-items: center; gap: 0.5rem;">
            ${x.info} Note
          </h4>
          <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">
            Dead load factors depend on load combinations. Typically, γf = 1.5 under DL+LL combinations per IS 456 Table 18. Adjust as required for seismic/wind combinations.
          </p>
        </div>
      </div>
    </div>
  `;a.innerHTML=r,q([{label:"Unfactored DL",value:i.toFixed(2)+" kN/m²"},{label:"Factored DL",value:l.toFixed(2)+" kN/m²"}])}function va(e){e.innerHTML=`
    <div class="calculator-page" id="dead-load-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Dead Load Estimator</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Surface Dead Load</h2>
        <p>Calculate the self-weight of composite floor/roof assemblies.</p>
        <span class="calculator-page__code-ref">
          ${x.info} IS 875 (Part 1): 1987
        </span>
      </div>

      ${te(["Calculates total surface load by multiplying material unit weights with specified layer thickness","Factored load assumes a generic load factor of 1.5. Consult IS 456 Table 18 for specific combinations"])}

      <div style="margin-bottom: 2rem;">
        <p style="margin-bottom: 1rem; color: var(--text-muted); font-size: 0.9rem;">
          Select materials and input their thicknesses to calculate the total surface dead load (kN/m²). Leave unused layers blank.
        </p>
        ${I("Assembly Layers",fa,x.building)}
      </div>

      ${oe()}

      <div id="dead-load-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;const a=ie(kt);a&&ce(e,a),e.querySelector("#btn-calculate").addEventListener("click",vs),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+kt),va(e),q([])})}const nt="live-load",bs=[...new Set(at.map(e=>e.group))],gs=[{id:"group",label:"Building Occupancy Type",type:"select",options:[{value:"",label:"-- Select Occupancy --"},...bs.map(e=>({value:e,label:e}))]},{id:"usage",label:"Specific Room / Area Usage",type:"select",options:[{value:"",label:"-- Select Usage --"}]}];function tt(e){const a=document.getElementById("live-load-result-box");if(!e){a.innerHTML="",q([]);return}const t=e.udl*1.5,i=[{label:"UDL (Uniformly Distributed)",value:e.udl.toFixed(2)+" kN/m²",sub:"Factored: "+t.toFixed(2),status:"pass"},{label:"Concentrated Point Load",value:e.point.toFixed(2)+" kN",status:"info"}];a.innerHTML=`
    <div class="calculator-layout" style="margin-top: 2rem;">
      <div class="results-main">
        <div class="results-panel" style="margin-top: 0;">
          <div class="results-panel__header">
            <h3>Live Load Limits (IS 875 Part 2)</h3>
          </div>
          ${ue(i)}
        </div>
      </div>
    </div>
  `,q([{label:"Occupancy",value:e.group},{label:"Usage",value:e.usage.split(",")[0]},{label:"UDL",value:e.udl.toFixed(2)+" kN/m²"}])}function hs(e){e.innerHTML=`
    <div class="calculator-page" id="live-load-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Live Load Reference</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Live Load Reference</h2>
        <p>Quickly lookup imposed loads for various building occupancies.</p>
        <span class="calculator-page__code-ref">
          ${x.info} IS 875 (Part 2): 1987
        </span>
      </div>

      ${te(["Values represent basic characteristic imposed loads without area reductions","For design, these characteristic loads should be multiplied by appropriate partial safety factors (γf)"])}

      ${I("Occupancy Category",gs,x.building)}

      <div id="live-load-result-box"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;const a=e.querySelector("#group"),t=e.querySelector("#usage");t&&!t.options.length>1&&(t.disabled=!0);function i(o,l=""){const n=at.filter(r=>r.group===o);t.innerHTML='<option value="">-- Select Usage --</option>'+n.map(r=>`<option value="${r.usage}">${r.usage}</option>`).join(""),t.disabled=n.length===0,l&&(t.value=l)}a.addEventListener("change",o=>{i(o.target.value),tt(null),ae(nt,{group:o.target.value,usage:""})}),t.addEventListener("change",o=>{const l=a.value,n=o.target.value;if(ae(nt,{group:l,usage:n}),l&&n){const r=at.find(d=>d.group===l&&d.usage===n);tt(r)}else tt(null)});const s=ie(nt);if(s&&s.group&&(a.value=s.group,i(s.group,s.usage),s.usage)){const o=at.find(l=>l.group===s.group&&l.usage===s.usage);o&&tt(o)}}const Lt="wind-load",ys=[{id:"city",label:"Reference City",type:"select",default:"47",options:rs.map(e=>({value:e.vb.toString(),label:`${e.city} (${e.vb} m/s)`}))},{id:"category",label:"Terrain Category",type:"select",default:"3",options:[{value:"1",label:"Category 1 (Exposed sea coasts, flat plains)"},{value:"2",label:"Category 2 (Open terrain, few obstacles)"},{value:"3",label:"Category 3 (Suburbs, small towns)"},{value:"4",label:"Category 4 (Large city centers)"}]}],xs=[{id:"height",label:"Height above ground (z)",unit:"m",default:15,min:5,max:500,step:1},{id:"k1",label:"Risk Coefficient (k1)",default:1,min:.5,max:1.5,step:.01,tooltip:"Typically 1.0 for 50-year design life"},{id:"k3",label:"Topography Factor (k3)",default:1,min:1,max:1.36,step:.01,tooltip:"1.0 if upwind slope < 3°"},{id:"k4",label:"Importance Factor (k4)",default:1,min:1,max:1.3,step:.15,tooltip:"1.3 for post-cyclone structures, 1.0 otherwise"}];function _s(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#wind-load-results");a||(a=document.createElement("div"),a.id="wind-load-results",e.appendChild(a));const t=re(e),i=L(t.height,5,500,"Height (z)"),s=L(t.k1,.5,1.5,"Risk Coefficient (k1)"),o=L(t.k3,1,1.36,"Topography Factor (k3)"),l=L(t.k4,1,1.3,"Importance Factor (k4)");if(!i.valid||!s.valid||!o.valid||!l.valid){ee("Please correct invalid fields before calculating.","error");return}ae(Lt,t);const n=parseFloat(t.city),r=parseInt(t.category),d=parseFloat(t.height),m=parseFloat(t.k1),b=parseFloat(t.k3),u=parseFloat(t.k4);let v=[];v.push({step:1,title:"Basic Wind Speed (Vb)",formula:"IS 875 Part 3 Appendix A",result:`Vb = ${n.toFixed(1)} m/s`});const c=cs(d,r);v.push({step:2,title:"Terrain & Height Factor (k2)",formula:`Category ${r}, z = ${d}m (Table 2)`,result:`k2 = ${c.toFixed(3)}`});const p=n*m*c*b*u;v.push({step:3,title:"Design Wind Speed (Vz)",formula:"Vz = Vb × k1 × k2 × k3 × k4",result:`Vz = ${p.toFixed(2)} m/s`});const _=.6*p*p/1e3;v.push({step:4,title:"Design Wind Pressure (pz)",formula:"pz = 0.6 × Vz² (in N/m²)",result:`pz = ${_.toFixed(3)} kN/m²`});const h=[{label:"Design Wind Pressure (pz)",value:_.toFixed(3)+" kN/m²",sub:`At height ${d}m`,status:"pass"},{label:"Design Wind Speed (Vz)",value:p.toFixed(1)+" m/s",status:"info"},{label:"Factors",value:`k1=${m}, k2=${c.toFixed(2)}`,status:"info"}],g=`
    <div class="calculator-layout">
      <div class="results-main">
        ${ue(h)}
        <div style="margin: 1.5rem 0; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <strong>Note:</strong> Total design wind load on the building = <strong>pz × Ae × Cf</strong> (where Ae is effective frontal area, and Cf is the force coefficient).
        </div>
        ${me("Calculation Steps",v)}
      </div>
      <div class="results-sidebar">
        <div style="padding: 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <h4 style="margin-top: 0; color: var(--text-color); font-size: 0.95rem; display: flex; align-items: center; gap: 0.5rem;">
            ${x.info} Factors Applied
          </h4>
          <ul class="clean-list" style="margin-top: 0.75rem;">
            <li><strong style="color: var(--text-color)">k1:</strong> ${m.toFixed(2)}</li>
            <li><strong style="color: var(--text-color)">k2:</strong> ${c.toFixed(3)}</li>
            <li><strong style="color: var(--text-color)">k3:</strong> ${b.toFixed(2)}</li>
            <li><strong style="color: var(--text-color)">k4:</strong> ${u.toFixed(2)}</li>
          </ul>
        </div>
      </div>
    </div>
  `;a.innerHTML=g,q([{label:"Height (z)",value:d+" m"},{label:"Vz",value:p.toFixed(1)+" m/s"},{label:"pz",value:_.toFixed(3)+" kN/m²"}])}function ba(e){e.innerHTML=`
    <div class="calculator-page" id="wind-load-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Wind Load Calculator</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Wind Load Calculator</h2>
        <p>Calculate the design wind speed and wind pressure at a specified height based on terrain category.</p>
        <span class="calculator-page__code-ref">
          ${x.info} IS 875 (Part 3): 2015
        </span>
      </div>

      ${te(["Calculates the absolute design wind pressure pz factoring terrain/topography","Topography Factor (k3) assumes a default value of 1.0 (gradient < 3°)","Uses empirical equations to continuously compute k2 factor for absolute height z"])}

      ${I("Geography & Terrain",ys,x.building)}
      ${I("Modifiers & Height",xs,x.calculator)}

      ${oe()}

      <div id="wind-load-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;const a=ie(Lt);a&&ce(e,a),e.querySelector("#btn-calculate").addEventListener("click",_s),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+Lt),ba(e),q([])})}const Ct="seismic-load",Ss=[{id:"zone",label:"Seismic Zone (Z)",type:"select",default:"0.24",options:ds.map(e=>({value:e.Z.toString(),label:`Zone ${e.zone} (Z = ${e.Z.toFixed(2)})`}))},{id:"soil",label:"Soil Type",type:"select",default:"2",options:[{value:"1",label:"Type I (Rock / Hard Soil)"},{value:"2",label:"Type II (Medium Soil)"},{value:"3",label:"Type III (Soft Soil)"}]}],$s=[{id:"importance",label:"Importance Factor (I)",type:"select",default:"1",options:us.map(e=>({value:e.I.toString(),label:`${e.name} (I = ${e.I})`}))},{id:"response",label:"Response Reduction (R)",type:"select",default:"5",options:ms.map(e=>({value:e.R.toString(),label:`${e.name} (R = ${e.R})`}))},{id:"frame_type",label:"Structural System",type:"select",default:"rc_bare",options:[{value:"rc_bare",label:"RC Bare Moment Resisting Frame"},{value:"steel_bare",label:"Steel Bare Moment Resisting Frame"},{value:"infilled",label:"All buildings with masonry infills"}]},{id:"h",label:"Building Height (h)",unit:"m",default:15,min:3,max:250,step:1},{id:"d",label:"Base Dimension (d)",unit:"m",default:20,min:5,max:250,step:1,tooltip:"Dimension in Earthquake direction"},{id:"w",label:"Total Seismic Weight (W)",unit:"kN",default:1e4,min:100,max:1e5,step:100}];function Fs(){const e=document.querySelector(".calculator-page");let a=e.querySelector("#seismic-load-results");a||(a=document.createElement("div"),a.id="seismic-load-results",e.appendChild(a));const t=re(e),i=L(t.h,3,250,"Building Height"),s=L(t.w,100,1e5,"Seismic Weight");let o=i.valid&&s.valid;if(t.frame_type==="infilled"&&(L(t.d,5,250,"Base Dimension").valid||(o=!1)),!o){ee("Please correct invalid fields before calculating.","error");return}ae(Ct,t);const l=parseFloat(t.zone),n=parseFloat(t.importance),r=parseFloat(t.response),d=parseInt(t.soil),m=t.frame_type,b=parseFloat(t.h),u=parseFloat(t.d),v=parseFloat(t.w);let c=[],p=0,$="";m==="rc_bare"?(p=.075*Math.pow(b,.75),$="Ta = 0.075 × h^0.75 (RC Moment Resisting Frame)"):m==="steel_bare"?(p=.085*Math.pow(b,.75),$="Ta = 0.085 × h^0.75 (Steel MRF)"):(p=.09*b/Math.sqrt(u),$="Ta = 0.09h / √d (All buildings with masonry infill panels)"),c.push({step:1,title:"Approximate Natural Period (Ta)",formula:$,result:`Ta = ${p.toFixed(3)} sec`});const _=ps(p,d);c.push({step:2,title:"Design Acceleration Spectrum (Sa/g)",formula:`IS 1893 Fig 2 for Soil Type ${d} at Ta=${p.toFixed(3)}s`,result:`Sa/g = ${_.toFixed(3)}`});let h=l/2*(n/r)*_;const g=l/2;let f="";h<g&&(h=g,f=` (Governed by Min Ah = Z/2 = ${g.toFixed(3)})`),c.push({step:3,title:"Horizontal Seismic Coefficient (Ah)",formula:"Ah = (Z/2) × (I/R) × (Sa/g)",result:`Ah = ${h.toFixed(4)}${f}`});const y=h*v;c.push({step:4,title:"Design Seismic Base Shear (VB)",formula:`VB = Ah × W = ${h.toFixed(4)} × ${v}`,result:`VB = ${y.toFixed(2)} kN`});const S=[{label:"Base Shear (VB)",value:y.toFixed(2)+" kN",sub:`Ah = ${h.toFixed(4)}`,status:"pass"},{label:"Natural Period (Ta)",value:p.toFixed(3)+" s",status:"info"},{label:"Spectrum (Sa/g)",value:_.toFixed(3),sub:`Soil Type ${d}`,status:"info"}],M=`
    <div class="calculator-layout">
      <div class="results-main">
        ${ue(S)}
        <div style="margin: 1.5rem 0; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <strong>Note:</strong> Ah = ${h.toFixed(4)}. Base shear VB acts at the base of the building and must be distributed along the height of the building per Clause 7.6.3.
        </div>
        ${me("Calculation Steps",c)}
      </div>
      <div class="results-sidebar">
        <div style="padding: 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
          <h4 style="margin-top: 0; color: var(--text-color); font-size: 0.95rem; display: flex; align-items: center; gap: 0.5rem;">
            ${x.info} Equivalent Static Method
          </h4>
          <p style="margin: 0; font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">
            The static method is restricted to regular buildings of limited height (≤ 15m in seismic zones IV & V). For taller or irregular buildings, dynamic analysis is mandatory.
          </p>
        </div>
      </div>
    </div>
  `;a.innerHTML=M,q([{label:"Time Period",value:p.toFixed(2)+" s"},{label:"VB",value:y.toFixed(1)+" kN"},{label:"Ah",value:h.toFixed(4)}])}function ga(e){e.innerHTML=`
    <div class="calculator-page" id="seismic-load-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Seismic Base Shear</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Seismic Base Shear</h2>
        <p>Determine the total design lateral force (base shear) along the principal direction of the building.</p>
        <span class="calculator-page__code-ref">
          ${x.info} IS 1893 (Part 1): 2016
        </span>
      </div>

      ${te(["Applies the Equivalent Static Method for computing Design Horizontal Seismic Coefficient (Ah)","Approximates natural period (Ta) based on assumed fundamental modes for various structure types","Extracts precise Sa/g boundaries directly from the IS 1893 Fig 2 response spectrum"])}

      ${I("Site Conditions",Ss,x.info)}
      ${I("Structural Parameters",$s,x.building)}

      ${oe()}

      <div id="seismic-load-results"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;const a=ie(Ct);a&&ce(e,a);const t=e.querySelector("#frame_type"),i=e.querySelector("#d"),s=i?i.closest(".input-group"):null;t&&s&&(t.addEventListener("change",o=>{o.target.value==="infilled"?s.style.display="block":s.style.display="none"}),a&&a.frame_type!=="infilled"||t.value!=="infilled"?s.style.display="none":s.style.display="block"),e.querySelector("#btn-calculate").addEventListener("click",Fs),e.querySelector("#btn-clear").addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+Ct),ga(e),q([])})}const Ot="unit-converter",ha={length:{baseUnit:"m",units:{m:1,cm:.01,mm:.001,km:1e3,in:.0254,ft:.3048,yd:.9144,mile:1609.34}},force:{baseUnit:"kN",units:{kN:1,N:.001,kgf:.00980665,tf:9.80665,lbf:.00444822,kips:4.44822}},pressure:{baseUnit:"MPa",units:{MPa:1,"N/mm2":1,"N/m2":1e-6,kPa:.001,"kgf/cm2":.0980665,psi:.00689476,ksi:6.89476}},moment:{baseUnit:"kNm",units:{kNm:1,Nmm:1e-6,Nm:.001,kgfm:.00980665,"lbf-ft":.001355818,"kip-in":.1129848}}},Ms=[{id:"category",label:"Conversion Category",type:"select",default:"length",options:[{value:"length",label:"Length / Distance"},{value:"force",label:"Force / Loads"},{value:"pressure",label:"Stress / Pressure"},{value:"moment",label:"Bending Moment"}]}],ks=`
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
`;function rt(e,a,t){const i=ha[e];if(!i)return;const o=Object.keys(i.units).map(l=>{let n=l;return l==="N/mm2"&&(n="N/mm²"),l==="N/m2"&&(n="N/m²"),l==="kgf/cm2"&&(n="kgf/cm²"),l==="kNm"&&(n="kN·m"),l==="Nmm"&&(n="N·mm"),l==="Nm"&&(n="N·m"),'<option value="'+l+'">'+n+"</option>"}).join("");a.innerHTML=o,t.innerHTML=o,e==="length"?(a.value="m",t.value="ft"):e==="force"?(a.value="kN",t.value="kgf"):e==="pressure"?(a.value="MPa",t.value="N/mm2"):e==="moment"&&(a.value="kNm",t.value="kip-in")}function Ls(e){e.innerHTML=`
    <div class="calculator-page" id="unit-converter-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Unit Converter</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Engineering Unit Converter</h2>
        <p>Instantly convert between common SI, Metric, and Imperial units used in structural engineering.</p>
        <span class="calculator-page__code-ref">
          ${x.info} Universal Utility
        </span>
      </div>

      ${te(["Transforms structural scalars seamlessly with IEEE-754 precision floating point calculations","Avoids trailing decimal expansions automatically out to maximum six relevant decimal precision figures"])}

      ${I("Domain Selection",Ms,x.info)}

      ${ks}

      <div class="print-footer">
        Generated by Stellar Civil | Internal Utility.
      </div>
    </div>
  `;const a=e.querySelector("#category"),t=e.querySelector("#unit_from"),i=e.querySelector("#unit_to"),s=e.querySelector("#val_from"),o=e.querySelector("#val_to");function l(){const r=a.value;if(!r)return;const d=ha[r],m=d.units[t.value],b=d.units[i.value],u=parseFloat(s.value);if(isNaN(u)||!m||!b){o.value="",q([]);return}const c=u*m/b;let p;c===0?p="0":c<1e-4||c>1e6?p=c.toExponential(4):p=parseFloat(c.toFixed(6)).toString(),o.value=p,q([{label:"From",value:s.value+" "+t.options[t.selectedIndex].text},{label:"Converted",value:p+" "+i.options[i.selectedIndex].text}]),ae(Ot,{category:r,unit_from:t.value,unit_to:i.value,val_from:s.value})}const n=ie(Ot);n&&n.category?(a.value=n.category,rt(n.category,t,i),n.unit_from&&(t.value=n.unit_from),n.unit_to&&(i.value=n.unit_to),n.val_from!==void 0&&(s.value=n.val_from)):rt(a.value,t,i),a.addEventListener("change",()=>{rt(a.value,t,i),l()}),t.addEventListener("change",l),i.addEventListener("change",l),s.addEventListener("input",l),l()}const Cs=[{id:"mat_type",label:"Material Type",type:"select",default:"concrete",options:[{value:"concrete",label:"Concrete (IS 456)"},{value:"steel",label:"Structural Steel (IS 2062)"}]}];function ws(e){let a=`
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
  `;Na.forEach(t=>{let i="Ordinary";t>=25&&t<=60?i="Standard":t>60&&(i="High Strength");const s=5e3*Math.sqrt(t),o=.7*Math.sqrt(t);a+=`
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
  `,e.innerHTML=`<div class="calculator-layout" style="margin-top: 2rem;"><div class="results-main">${a}</div></div>`,q([{label:"Viewing",value:"Concrete Properties (IS 456)"}])}function Is(e){let a=`
    <div class="results-panel">
      <div class="results-panel__header">
        <h3>Structural Steel Grades (IS 2062)</h3>
      </div>
      <div style="margin: 1rem 0; padding: 1rem; background: var(--bg-card); border-radius: var(--radius-sm);">
        <p><strong>Universal Properties (IS 800 Cl 2.2.4):</strong></p>
        <ul style="margin-top: 0.5rem; padding-left: 1.5rem; color: var(--text-muted);">
          <li>Modulus of Elasticity, E = ${We.E} N/mm²</li>
          <li>Poisson's Ratio, v = ${We.v}</li>
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
  `;we.forEach(t=>{a+=`
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
  `,e.innerHTML=`<div class="calculator-layout" style="margin-top: 2rem;"><div class="results-main">${a}</div></div>`,q([{label:"Viewing",value:"Structural Steel (IS 2062)"}])}function Es(e){e.innerHTML=`
    <div class="calculator-page" id="material-properties-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Material Guide</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Material Properties Guide</h2>
        <p>Quick reference for standard IS 456 Concrete and IS 2062 Steel grades.</p>
        <span class="calculator-page__code-ref">
          ${x.info} Reference Tables
        </span>
      </div>

      ${te(["Concrete Elastic Modulus (Ec) approximated as 5000√fck (IS 456:2000)","Steel values extracted from IS 2062 specifications for thickness ≤ 20mm"])}

      ${I("Material Database",Cs,x.info)}

      <div id="results-container"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `;const a=e.querySelector("#mat_type"),t=e.querySelector("#results-container");function i(){a.value==="concrete"?ws(t):Is(t)}a.addEventListener("change",i),i()}const zt="rebar-reference",Ds=[{id:"ast_req",label:"Required Area (Ast,req)",unit:"mm²",default:1e3,min:10,max:5e4,step:10},{id:"dia_try",label:"Try Bar Diameter (Φ)",unit:"mm",type:"select",default:"16",options:Dt.map(e=>({value:e.toString(),label:`${e} mm`}))},{id:"calc_type",label:"Calculation Mode",type:"select",default:"spacing",options:[{value:"spacing",label:"Slabs / Walls (Find Spacing per meter width)"},{value:"count",label:"Beams / Columns (Find Number of Bars)"}]},{id:"width",label:"Section Width (b)",unit:"mm",default:300,min:50,max:5e3,step:50,tooltip:"Required to check fit for beams"}],As=`
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
`;function Ts(e){const a=e.querySelector("#rebar-table-body");let t="";Dt.forEach(i=>{const s=Ht(i),o=jt(i),l=Math.PI*i;t+=`
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.75rem; font-weight: bold;">${i} mm</td>
        <td style="padding: 0.75rem;">${s.toFixed(1)}</td>
        <td style="padding: 0.75rem;">${o.toFixed(3)}</td>
        <td style="padding: 0.75rem;">${l.toFixed(1)}</td>
      </tr>
    `}),a.innerHTML=t}function Bs(){const e=document.querySelector(".calculator-page"),a=e.querySelector("#sizing-results-container"),t=re(e);if(!L(t.ast_req,10,5e4,"Required Area").valid){ee("Please correct invalid fields before calculating.","error");return}const s=parseFloat(t.ast_req),o=parseInt(t.dia_try),l=t.calc_type,n=Ht(o);if(l==="spacing"){let r=1e3*n/s;r=Math.floor(r/10)*10,r>300&&(r=300);const d=1e3*n/r;a.innerHTML=`
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
    `,q([{label:"Try Bar",value:`Φ${o}`},{label:"Spacing",value:`${r} mm c/c`}])}else{const r=Math.ceil(s/n),d=r*n;let m="";if(t.width){const b=parseFloat(t.width),u=Math.max(o,20),v=96+r*o+(r-1)*u;v>b?m=`<div class="badge badge--fail" style="margin-top: 1rem; display: inline-block;">Warning: Bars may not fit in single layer (Req Width ${v}mm > ${b}mm)</div>`:m='<div class="badge badge--pass" style="margin-top: 1rem; display: inline-block;">Fits in single layer (Width OK)</div>'}a.innerHTML=`
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
    `,q([{label:"Try Bar",value:`Φ${o}`},{label:"Number",value:`${r} bars`}])}}function ya(e){e.innerHTML=`
    <div class="calculator-page" id="rebar-reference-calc">
      <div class="print-header">
        <div class="print-header__brand">Stellar Civil — Rebar Reference</div>
        <div class="print-header__info"></div>
      </div>

      <div class="calculator-page__header">
        <h2>Rebar Reference & Sizer</h2>
        <p>Standard reinforcement bar properties and an area-to-spacing calculator.</p>
        <span class="calculator-page__code-ref">
          ${x.info} IS 1786
        </span>
      </div>

      ${te(["Rebar area based on nominal diameter (π × d²/4)","Spacing is rounded down to the nearest 10mm for practicality, capped at 300mm max constraint"])}

      ${As}

      ${I("Bar Sizer / Spacing Calculator",Ds,x.calculator)}

      ${oe()}

      <div id="sizing-results-container" style="margin-top: 1.5rem;"></div>

      <div class="print-footer">
        Generated by Stellar Civil | For reference only. Verify with qualified engineer.
      </div>
    </div>
  `,Ts(e);const a=ie(zt);a&&ce(e,a);const t=e.querySelector("#calc_type"),i=e.querySelector("#width"),s=i?i.closest(".input-group"):null;t&&s&&(t.addEventListener("change",n=>{n.target.value==="count"?s.style.display="block":(s.style.display="none",i.value="")}),t.value==="count"?s.style.display="block":s.style.display="none");const o=e.querySelector("#btn-calculate");o&&o.addEventListener("click",Bs);const l=e.querySelector("#btn-clear");l&&l.addEventListener("click",()=>{localStorage.removeItem("stellar_civil_inputs_"+zt),ya(e),q([])})}const Ns=[{code:"IS 456",year:"2000",title:"Plain and Reinforced Concrete - Code of Practice",desc:"The master code for all RCC design and construction in India. Covers limit state design for bending, shear, torsion, and serviceability.",tags:["Concrete","Design","RCC"],file:"/Code Books/is.456.2000.pdf"},{code:"IS 800",year:"2007",title:"General Construction in Steel - Code of Practice",desc:"The primary code for structural steel design using the Limit State Method. Covers tension, compression, bending, and connections.",tags:["Steel","Design"],file:"/Code Books/is.800.2007.pdf"},{code:"IS 875 (Part 1)",year:"1987",title:"Design Loads (Other than Earthquake) - Dead Loads",desc:"Provides unit weights of building materials and stored materials for calculating permanent dead loads.",tags:["Loads","Dead Load"],file:"/Code Books/is.875.1.1987.pdf"},{code:"IS 875 (Part 2)",year:"1987",title:"Design Loads (Other than Earthquake) - Imposed Loads",desc:"Stipulates minimum live loads (UDL and Point Loads) to be assumed for different building occupancies.",tags:["Loads","Live Load"],file:"/Code Books/IS-875---2.pdf"},{code:"IS 875 (Part 3)",year:"2015",title:"Design Loads (Other than Earthquake) - Wind Loads",desc:"Guidelines for determining wind speeds, pressures, and forces on buildings based on terrain, height, and topography.",tags:["Loads","Wind"],file:"/Code Books/is.875.3.2015.pdf"},{code:"IS 1893 (Part 1)",year:"2016",title:"Criteria for Earthquake Resistant Design of Structures",desc:"General provisions and buildings. Covers calculation of design seismic base shear, response spectra, and zone mapping.",tags:["Seismic","Earthquake"],file:"/Code Books/IS-1893---part-1.pdf"},{code:"IS 13920",year:"2016",title:"Ductile Design and Detailing of RC Structures",desc:"Specific provisions for detailing concrete structures subjected to seismic forces to ensure required ductility.",tags:["Detailing","Seismic"],file:"/Code Books/IS-13920.pdf"},{code:"IS 1786",year:"2008",title:"High Strength Deformed Steel Bars and Wires",desc:"Specifications for reinforcing bars (TMT bars) used in concrete, outlining mechanical and chemical properties.",tags:["Material","Rebar"],file:"/Code Books/is.1786.2008.pdf"},{code:"IS 2062",year:"2011",title:"Hot Rolled Medium and High Tensile Structural Steel",desc:"Specifications for structural steel grades (e.g., E250, E350) used in steel structures.",tags:["Material","Steel"],file:"/Code Books/is.2062.2011.pdf"},{code:"IS 2911 (Parts 1-4)",year:"2010",title:"Design and Construction of Pile Foundations",desc:"Comprehensive code for diverse pile foundations including driven cast in-situ, bored cast in-situ, and timber piles.",tags:["Geotech","Piles"],file:"/Code Books/is.2911.1.4.2010.pdf"},{code:"SP 16",year:"1980",title:"Design Aids for Reinforced Concrete to IS 456",desc:"The essential handbook providing charts and tables for rapid design of beams, slabs, columns, and footings.",tags:["Handbook","RCC"],file:"/Code Books/is.sp.16.1980.pdf"},{code:"SP 34",year:"1987",title:"Handbook on Concrete Reinforcement and Detailing",desc:"Provides standard practices for detailing reinforcement in various structural elements like beams, columns, and walls.",tags:["Handbook","Detailing"],file:"/Code Books/is.sp.34.1987.pdf"}];function Rs(e){let a="";Ns.forEach(t=>{const i=t.tags.map(o=>`<span class="badge" style="background: var(--bg-hover); color: var(--text-color); margin-right: 0.5rem;">${o}</span>`).join(""),s=t.file?`
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
          ${x.info} BIS Registry
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
  `}const wt="bbs-generator";let Fe=[],ct=1;const Ps=`
  <div class="calculator-page" id="bbs-generator-calc">
    <div class="print-header">
      <div class="print-header__brand">Stellar Civil — Bar Bending Schedule</div>
      <div class="print-header__info"></div>
    </div>

    <div class="calculator-page__header">
      <h2>Bar Bending Schedule (BBS) Generator</h2>
      <p>Estimate cutting lengths and total reinforcement weight per diameter.</p>
      <span class="calculator-page__code-ref">
        ${x.calculator} Detailing Utility
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
`;function qs(e){const a=e.shape==="straight",t=e.shape==="l_shape";return`
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
          ${Dt.map(i=>`<option value="${i}" ${i===e.dia?"selected":""}>${i}</option>`).join("")}
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
  `}function it(e){const a=e.querySelector("#bbs-tbody");a.innerHTML=Fe.map(qs).join(""),a.querySelectorAll(".row-input-shape").forEach(t=>{t.addEventListener("change",i=>{const s=i.target.closest("tr"),o=i.target.value,l=s.querySelector(".row-input-b"),n=s.querySelector(".row-input-c");o==="straight"?(l.disabled=!0,n.disabled=!0):o==="l_shape"?(l.disabled=!1,n.disabled=!0):(l.disabled=!1,n.disabled=!1)})}),a.querySelectorAll(".btn-del-row").forEach(t=>{t.addEventListener("click",i=>{const s=i.target.closest("tr"),o=parseInt(s.getAttribute("data-id"));Fe=Fe.filter(l=>l.id!==o),it(e)})})}function xa(e){const a=e.querySelectorAll("#bbs-tbody tr"),t=[];a.forEach(i=>{t.push({id:parseInt(i.getAttribute("data-id")),shape:i.querySelector(".row-input-shape").value,dia:parseInt(i.querySelector(".row-input-dia").value)||12,mem:parseInt(i.querySelector(".row-input-mem").value)||1,bars:parseInt(i.querySelector(".row-input-bars").value)||1,a:parseFloat(i.querySelector(".row-input-a").value)||0,b:parseFloat(i.querySelector(".row-input-b").value)||0,c:parseFloat(i.querySelector(".row-input-c").value)||0})}),Fe=t}function Os(e){if(xa(e),ae(wt,{rows:Fe}),Fe.length===0){ee("Add at least one row to calculate.","error");return}let a=0;const t={};let i=`
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
  `;Fe.forEach((l,n)=>{let r=0;l.shape==="straight"?r=l.a:l.shape==="l_shape"?r=l.a+l.b-2*l.dia:l.shape==="u_shape"&&(r=l.a+l.b+l.c-2*(2*l.dia)),r<0&&(r=0);const d=r*l.mem*l.bars/1e3,m=jt(l.dia),b=d*m;a+=b,t[l.dia]||(t[l.dia]=0),t[l.dia]+=b,i+=`
      <tr style="border-bottom: 1px solid var(--border-color);">
        <td style="padding: 0.75rem;">Row ${n+1}</td>
        <td style="padding: 0.75rem; text-transform: capitalize;">${l.shape.replace("_"," ")} (Φ${l.dia})</td>
        <td style="padding: 0.75rem;">${r.toFixed(0)}</td>
        <td style="padding: 0.75rem;">${d.toFixed(2)}</td>
        <td style="padding: 0.75rem; font-weight: bold;">${b.toFixed(2)}</td>
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
      
      <div style="padding: 1.5rem; background: var(--bg-hover); border: 2px solid var(--primary-color); border-radius: var(--radius-md); text-align: center; margin-bottom: 1.5rem;">
        <h4 style="margin-bottom: 0.5rem; font-weight: normal; color: var(--text-muted);">Total Reinforcement Weight</h4>
        <div style="font-size: 2.5rem; font-weight: bold; color: var(--primary-color);">
          ${a.toFixed(2)} kg
        </div>
      </div>
      
      ${s}
      ${i}
    </div>
  `,q([{label:"Total Weight",value:a.toFixed(2)+" kg"},{label:"Items",value:Fe.length.toString()}])}function zs(e){e.innerHTML=Ps;const a=`
    <div style="display: flex; gap: 1rem; width: 100%;">
      <button id="add-btn" class="btn btn-secondary">
        + Add Row
      </button>
      ${oe()}
    </div>
  `;e.querySelector("#action-bar-container").innerHTML=a;const t=ie(wt);t&&t.rows&&Array.isArray(t.rows)&&t.rows.length>0?(Fe=t.rows,ct=Math.max(...Fe.map(i=>i.id))+1):(Fe=[{id:1,shape:"straight",dia:12,mem:1,bars:4,a:3e3,b:0,c:0},{id:2,shape:"l_shape",dia:12,mem:1,bars:4,a:3e3,b:200,c:0}],ct=3),it(e),e.querySelector("#add-btn").addEventListener("click",()=>{xa(e),Fe.push({id:ct++,shape:"straight",dia:12,mem:1,bars:1,a:1e3,b:0,c:0}),it(e)}),e.querySelector("#btn-calculate").addEventListener("click",()=>{Os(e)}),e.querySelector("#btn-clear").addEventListener("click",()=>{Fe=[],it(e),e.querySelector("#results-container").innerHTML="",q([]),localStorage.removeItem("stellar_civil_inputs_"+wt)})}const st=[{id:"rcc",label:"RCC Design (IS 456)",items:[{id:"slab-design",num:"1.1",title:"Rectangular Slab Design"},{id:"beam-singly",num:"1.2",title:"Singly Reinforced Beam"},{id:"beam-doubly",num:"1.3",title:"Doubly Reinforced Beam"},{id:"beam-t",num:"1.4",title:"T-Beam / L-Beam Design"},{id:"column-short",num:"1.5",title:"Short Column Design"},{id:"footing",num:"1.6",title:"Isolated Footing Design"},{id:"staircase",num:"1.7",title:"Staircase Design"},{id:"retaining-wall",num:"1.8",title:"Cantilever Retaining Wall"}]},{id:"limit-state",label:"Limit State Checks",items:[{id:"shear-design",num:"2.1",title:"Shear & Stirrup Design"},{id:"dev-length",num:"2.2",title:"Development Length"},{id:"deflection",num:"2.3",title:"Deflection Check"},{id:"crack-width",num:"2.4",title:"Crack Width Check"}]},{id:"steel",label:"Steel Design (IS 800)",items:[{id:"tension-member",num:"3.1",title:"Tension Member"},{id:"compression-member",num:"3.2",title:"Compression Member"},{id:"steel-beam",num:"3.3",title:"Beam Design"},{id:"fillet-weld",num:"3.4",title:"Fillet Weld Design"},{id:"bolt-design",num:"3.5",title:"Bolted Connection"}]},{id:"loads",label:"Load Calculations",items:[{id:"dead-load",num:"4.1",title:"Dead Load Calculator"},{id:"live-load",num:"4.2",title:"Live Load Reference"},{id:"wind-load",num:"4.3",title:"Wind Load Calculator"},{id:"seismic-load",num:"4.4",title:"Seismic Load Calculator"}]},{id:"utilities",label:"Utilities & Reference",items:[{id:"unit-converter",num:"6.1",title:"Unit Converter"},{id:"material-props",num:"6.2",title:"Material Properties"},{id:"rebar-reference",num:"6.3",title:"Rebar Reference"},{id:"is-cheatsheet",num:"6.4",title:"IS Code Cheatsheet"},{id:"bbs-generator",num:"6.5",title:"Bar Bending Schedule"}]}],lt={};function Q(e,a){lt[e]=a}Q("slab-design",{render:Va});Q("beam-singly",{render:Zt});Q("beam-doubly",{render:Xt});Q("beam-t",{render:Qt});Q("column-short",{render:Jt});Q("footing",{render:ea});Q("staircase",{render:ta});Q("retaining-wall",{render:aa});Q("shear-design",{render:ia});Q("dev-length",{render:sa});Q("deflection",{render:la});Q("crack-width",{render:oa});Q("tension-member",{render:ra});Q("compression-member",{render:ca});Q("steel-beam",{render:da});Q("fillet-weld",{render:ua});Q("bolt-design",{render:ma});Q("dead-load",{render:va});Q("live-load",{render:hs});Q("wind-load",{render:ba});Q("seismic-load",{render:ga});Q("unit-converter",{render:Ls});Q("material-props",{render:Es});Q("rebar-reference",{render:ya});Q("is-cheatsheet",{render:Rs});Q("bbs-generator",{render:zs});document.addEventListener("DOMContentLoaded",()=>{Us(),Gs(),js(),Vs(),Ks(),Ws()});function Us(){const e=Fa();document.documentElement.setAttribute("data-theme",e);const a=document.getElementById("theme-toggle");a&&a.addEventListener("click",()=>{const i=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",i),Ma(i)})}function Gs(){const e=document.getElementById("sidebar-nav");e&&(e.innerHTML=st.map(a=>`
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
  `).join(""),e.querySelectorAll("[data-group-toggle]").forEach(a=>{a.addEventListener("click",()=>{a.parentElement.classList.toggle("collapsed")})}))}function Ws(){const e=document.getElementById("hamburger-btn"),a=document.querySelector(".sidebar"),t=document.querySelector(".sidebar-overlay"),i=document.querySelector(".sidebar__close");function s(){a==null||a.classList.add("open"),t==null||t.classList.add("visible")}function o(){a==null||a.classList.remove("open"),t==null||t.classList.remove("visible")}e==null||e.addEventListener("click",s),t==null||t.addEventListener("click",o),i==null||i.addEventListener("click",o),document.querySelectorAll(".nav-item").forEach(l=>{l.addEventListener("click",()=>{window.innerWidth<=1200&&o()})})}function Vs(){window.addEventListener("hashchange",Ut),Ut()}async function Ut(){const e=window.location.hash.replace("#/","").replace("#",""),a=document.getElementById("main-content"),t=document.getElementById("breadcrumb");if(document.querySelectorAll(".nav-item").forEach(o=>{o.classList.toggle("active",o.dataset.module===e)}),!e||e===""){Hs(a),t&&(t.innerHTML="<strong>Workspace</strong>");return}let i=null,s=null;for(const o of st){const l=o.items.find(n=>n.id===e);if(l){i=l,s=o;break}}if(!i){a.innerHTML=`
      <div class="main-content__inner">
        <div class="welcome-page">
          <h1>Module Not Found</h1>
          <p>The requested calculator module was not found.</p>
        </div>
      </div>`;return}if(t&&(t.innerHTML=`${s.label} <span>›</span> <strong>${i.title}</strong>`),lt[e]){a.innerHTML='<div class="main-content__inner" id="calculator-container"></div>';const o=document.getElementById("calculator-container");try{await lt[e].render(o)}catch(l){console.error(`Error rendering module ${e}:`,l),o.innerHTML=`
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
              ${x.info} Coming Soon
            </span>
          </div>
          <div class="welcome-page" style="min-height:40vh;">
            <div class="welcome-page__icon">${x.calculator}</div>
            <h1>Under Development</h1>
            <p>This module is part of the Stellar Civil calculator suite and will be implemented in a future phase. Please check back soon.</p>
          </div>
        </div>
      </div>`;a.scrollTop=0}function Hs(e){st.reduce((a,t)=>a+t.items.length,0),Object.keys(lt).length,e.innerHTML=`
    <div class="main-content__inner">
      <div class="welcome-page">
        <div class="welcome-page__icon">${x.building}</div>
        <h1>Welcome to Stellar Civil</h1>
        <p>IS Code Design Calculators for Structural Engineers. Select a calculator from the sidebar to get started.</p>

        <div class="welcome-page__grid">
          ${st.map(a=>`
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
    </div>`}function js(){if(Sa()){const a=document.getElementById("disclaimer-modal");a&&a.remove();return}const e=document.getElementById("disclaimer-modal");if(e){e.classList.add("visible");const a=document.getElementById("disclaimer-accept");a==null||a.addEventListener("click",()=>{$a(),e.classList.remove("visible"),setTimeout(()=>e.remove(),300)})}}function Ks(){document.addEventListener("keydown",e=>{var a;if(e.key==="Enter"&&!e.ctrlKey&&!e.metaKey){const t=document.getElementById("btn-calculate");t&&!t.disabled&&((a=document.activeElement)!=null&&a.classList.contains("form-input"))&&(e.preventDefault(),t.click())}if((e.ctrlKey||e.metaKey)&&e.key==="p"){const t=document.getElementById("btn-export-pdf");t&&!t.disabled&&(e.preventDefault(),t.click())}if(e.key==="Escape"){const t=document.querySelector(".results-panel");t&&(t.style.display=t.style.display==="none"?"":"none")}if((e.ctrlKey||e.metaKey)&&e.key==="r"){const t=document.getElementById("btn-clear");t&&(e.preventDefault(),t.click())}})}
