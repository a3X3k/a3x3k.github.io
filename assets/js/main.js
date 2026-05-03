/* ═══════════════════════════════════════════════════════════════
   S. ABHISHEK — PORTFOLIO ENGINE v4.0 — ALL BUGS FIXED
═══════════════════════════════════════════════════════════════ */
'use strict';
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const DATA=window.PUBLICATIONS||[];
const STATS=window.PUBLICATION_STATS||{};
let shown=12,filtered=[...DATA],graphFilter=null;

const experience=[['Data Engineer','Rolls-Royce','Bengaluru, Karnataka','Jun 2023 – Present',['Building robust ETL processes and enterprise-scale data pipelines.','Contributing to business-driven data solutions and critical decision support.','Leveraging Power BI and Azure-based technologies for analytics and processing.']],['Data Engineer Intern','Rolls-Royce','Bengaluru, Karnataka','Dec 2022 – Jun 2023',['Worked on Market Intelligence projects to surface actionable insights.','Built ETL workflows and dashboards to streamline data reporting.']],['Challenge Author','Traboda CyberLabs','Kollam, Kerala','Oct 2021 – Apr 2022',['Designed and authored cybersecurity challenges for competitive platforms.','Specialized in Digital Forensics and Steganography challenge design.']],['CTF Player & Digital Forensics Analyst','Team bi0s','India','Sep 2021 – Apr 2022',['Competed in top-tier Capture The Flag competitions globally.','Focused on forensics and steganography challenge categories.']],['CTF Player','Team bi0s','India','Jan 2021 – Oct 2021',['Built foundations in cybersecurity competition and investigative thinking.']]];
const skills={'Data Engineering':['Data Modeling','ETL Pipelines','Azure Data Factory','SQL Server','Data Quality','Automation'],'Big Data & Cloud':['Databricks','PySpark','Azure','Lakehouse Architecture'],'Programming':['Python','SQL','Automation Scripts'],'Cybersecurity':['Digital Forensics','Steganography','Wireshark','Autopsy','FTK Imager']};
const socials=[['GitHub','@a3x3k','https://github.com/a3x3k'],['LinkedIn','@a3x3k','https://www.linkedin.com/in/a3x3k/'],['Medium','@a3x3k','https://a3x3k.medium.com/'],['X / Twitter','@a3X3k','https://twitter.com/a3X3k'],['Instagram','@a3x3k','https://www.instagram.com/a3x3k'],['Facebook','@a3x3k','https://www.facebook.com/a3x3k']];
const travelStories=[{title:'Salt air, no schedule.',place:'Goa',mood:'Coast',note:'I reached Goa carrying more tiredness than excitement. It was not one of those perfect holiday moods where everything feels planned and bright. I just wanted a few days where nobody asked anything from me.\n\nThe first evening, I walked towards the beach without checking the time. The sky was soft, almost dull, but the air felt lighter. There was salt on my skin, bikes passing behind me, people laughing somewhere far away, and for once I was not rushing to become useful again.\n\nI remember sitting there longer than I thought I would. No big thoughts. No dramatic sunset. Just the water coming and going, and me slowly feeling like myself again.',route:'Oct 2023',img:'url("assets/images/Goa.webp")'},{title:'Cold walks, old hills.',place:'Shimla',mood:'Mountain',note:'Shimla felt old in a comforting way. The roads, the railings, the hill houses, even the cold had a slightly familiar feeling, like it had been waiting there for years.\n\nI remember walking more than I planned. Uphill, downhill, stopping for tea, pretending I was not tired, then walking again. Nothing was very dramatic, but everything had a small charm. The kind that does not announce itself.\n\nBy evening, the air became sharper. I liked that part the most. The lights started coming on slowly and the hills looked less like a place to visit and more like a place to quietly belong for a day.',route:'Apr 2024',img:'url("assets/images/Shimla.jpg")'},{title:'Roads, snow, silence.',place:'Manali',mood:'Mountain',note:'Manali stayed with me through its roads first. Long curves, sudden views, cold wind through the window, and mountains appearing like they had been hiding behind every turn.\n\nThere was snow, yes, and the usual excitement around it. But what I remember more is how often I stopped speaking. Some places make you want to describe everything. Manali did the opposite. I just kept looking outside.\n\nIt was messy, crowded in parts, beautiful in others, and still somehow peaceful inside my head. That is what I liked about it. It did not need to be perfect to become a memory.',route:'Apr 2024',img:'url("assets/images/Manali.jpg")'},{title:'Prayer flags and quiet.',place:'Dharamshala',mood:'Spiritual',note:'Dharamshala did not feel loud even when people were around. There was something soft about the place. Prayer flags, small cafes, monastery corners, mist moving slowly, and mountains sitting quietly behind everything.\n\nI remember feeling calmer without trying to be calm. That is rare. Usually I need time to settle into a place, but here the place settled me first.\n\nI walked slowly there. Not because there was nothing to do, but because rushing felt wrong. Some places ask you to cover them. Dharamshala asked me to breathe properly.',route:'Apr 2024',img:'url("assets/images/Dharamshala.jpg")'},{title:'Pine trees, slow evenings.',place:'Dalhousie',mood:'Mountain',note:'Dalhousie felt like a pause between louder chapters. Pine trees, narrow roads, old buildings, cold evenings, and that slightly sleepy hill-station mood that makes even simple walks feel enough.\n\nI do not remember doing anything grand there. That is probably why I remember it gently. The small things stayed. The sound of footsteps, the chill after sunset, the way views appeared between trees and disappeared again.\n\nIt was quiet without feeling empty. I think I needed that kind of quiet more than I realised.',route:'Apr 2024',img:'url("assets/images/Dalhousie.jpg")'},{title:'Light on still water.',place:'Amritsar',mood:'Spiritual',note:'Amritsar is one of those places I do not want to over-explain. The Golden Temple at night felt different from every photograph I had seen before. The light on the water, the reflection, the movement of people, the calm inside the crowd — it all felt very still.\n\nI remember standing there and not wanting to take too many photos. Some moments become smaller when you keep trying to capture them. This one felt better left slightly untouched.\n\nThere was peace there, but not the empty kind. It was full of people, full of sound, full of devotion, and still somehow soft.',route:'Apr 2024',img:'url("assets/images/Amritsar.jpg")'},{title:'Fast roads, familiar noise.',place:'Delhi',mood:'City',note:'Delhi brought the speed back. After the hills, it felt loud, hot, restless, and completely awake. Metro rides, traffic, food smells, old monuments, crowded streets — everything arrived together.\n\nI usually think I will get tired of Delhi quickly, and I do. But I also enjoy the energy for a while. It has that strange pull. Too much happening, too many people, too many directions, and still you keep moving with it.\n\nIt was not peaceful. But it felt alive. Sometimes that is also a memory worth keeping.',route:'Apr 2024',img:'url("assets/images/Delhi.jpg")'},{title:'Blue water, warm wind.',place:'Phuket',mood:'Coast',note:'Phuket looked like it had been edited before I arrived. The water was too blue, the boats too pretty, the sky too open. Even when it felt touristy, I could not pretend I was not enjoying it.\n\nI remember the warmth most. Warm wind, warm roads, warm evenings after being in the water. The kind of place where the day stretches without asking permission.\n\nThere were many picture-perfect moments, but the ones I liked were simpler — sitting after a long day, tired from the sun, hair messy, skin salty, feeling quietly happy for no serious reason.',route:'Oct 2024',img:'url("assets/images/Phuket.jpg")'},{title:'White temple, softer pace.',place:'Chiang Rai',mood:'Spiritual',note:'Chiang Rai felt like Thailand had lowered its voice. After busier places, it came as a relief. The temples were detailed, strange, beautiful, almost unreal in parts. The White Temple especially felt like walking into someone’s imagination.\n\nBut I remember the pace more than the monument. It was slower. Easier. Less demanding. I did not feel like I had to chase the place.\n\nSome places impress you immediately. Chiang Rai did that, but gently. It gave the trip breathing space.',route:'Oct 2024',img:'url("assets/images/Chiang Rai.jpg")'},{title:'Lights, noise, movement.',place:'Pattaya',mood:'City',note:'Pattaya was not subtle. It was lights, music, beach roads, food, crowds, and that holiday energy that keeps going even when you are already tired.\n\nI would not call it peaceful, but I do not think every trip needs to be peaceful. Sometimes a place is fun because it is loud, because it does not ask you to think too much, because the night just keeps moving.\n\nI remember walking around with no serious plan, just following the noise, laughing at random things, eating late, and letting the place be exactly what it was.',route:'Oct 2024',img:'url("assets/images/Pattaya.jpg")'},{title:'Chaos that somehow works.',place:'Bangkok',mood:'City',note:'Bangkok felt impossible for the first few hours. Too much traffic, too many lights, too many choices, too many things happening at once. Then slowly, without noticing, I started moving with it.\n\nThe city has a rhythm that looks like chaos from outside. Street food, malls, temples, markets, trains, rain, heat — all of it packed tightly together.\n\nI liked that Bangkok never tried to be one thing. It was polished and messy, spiritual and commercial, exhausting and exciting. By the end, the same chaos that overwhelmed me started feeling strangely comfortable.',route:'Oct 2024',img:'url("assets/images/Bangok.jpg")'},{title:'The road begins here.',place:'Jammu',mood:'Mountain',note:'Jammu felt like the first page of the Kashmir trip. Not the main scene yet, but the beginning of the shift. The air was still gentle, but something in the road already told me the mountains were coming.\n\nI remember that early excitement more than any specific spot. Bags, movement, small stops, looking outside often, waiting for the landscape to change.\n\nSome places become memories because of what they are. Jammu became one because of what it opened.',route:'Feb 2025',img:'url("assets/images/Jammu.jpg")'},{title:'River sound, soft valley.',place:'Pahalgam',mood:'Mountain',note:'Pahalgam felt almost too calm to disturb. Rivers, pine trees, horses, snow patches, and valleys that looked arranged but were not. Everything had that soft, cinematic feeling Kashmir gives without trying.\n\nI remember wanting the vehicle to move slower. Every turn looked like something I might miss if I blinked. The cold was there, but it did not feel harsh. It felt clean.\n\nThere are places where you take photos because they are beautiful. Pahalgam was like that. But it was also the kind of place where, after taking the photo, you still keep staring.',route:'Feb 2025',img:'url("assets/images/Pahalgam.webp")'},{title:'White slopes, cold face.',place:'Gulmarg',mood:'Snow',note:'Gulmarg was white everywhere. The kind of white that makes you feel like you have entered a different version of the world. Snow on the ground, snow on roofs, snow in the distance, and cold air hitting the face before anything else.\n\nI remember the childish happiness of it. No matter how many photos I had seen before, standing there felt different. The cable car, the slopes, the quiet between people’s excitement — all of it stayed.\n\nIt was cold enough to be uncomfortable sometimes, but I liked even that. It made the memory sharper.',route:'Feb 2025',img:'url("assets/images/Gulmarg.webp")'},{title:'Lake light, quiet city.',place:'Srinagar',mood:'City',note:'Srinagar felt poetic without trying to be poetic. Dal Lake, houseboats, cold mornings, reflections on water, and conversations that happened softly because the place itself felt soft.\n\nI remember the lake more than the roads. The way everything slowed down around it. The way reflections made the city look like it had another quieter version beneath it.\n\nThere was beauty everywhere, but not a loud kind. Srinagar stayed with me like a line from a song I do not fully remember, but still keep humming.',route:'Feb 2025',img:'url("assets/images/Srinagar.jpg")'},{title:'Big mountains, small words.',place:'Sonmarg',mood:'Snow',note:'Sonmarg made everyone quieter. The mountains felt larger there, more open, less decorated. The air was sharp and the landscape had a rawness that made normal conversation feel unnecessary.\n\nI remember looking around and feeling very small, but not in a bad way. More like a reminder. There are places that put your thoughts back into size.\n\nNothing needed to happen there. The view was enough. The cold was enough. The silence was enough.',route:'Feb 2025',img:'url("assets/images/Sonmarg.webp")'},{title:'Rain, trains, old stories.',place:'London',mood:'City',note:'London felt familiar before it became real. Maybe because I had already seen it in films, photos, books, and other people’s stories. But walking there still felt different.\n\nThere was rain, of course. Trains, bridges, museums, long walks, old buildings beside modern glass, and that layered feeling where every street seems to be carrying more than it shows.\n\nI liked London most when I was not trying too hard. Just walking, watching people, entering stations, coming out somewhere else, and letting the city unfold one grey corner at a time.',route:'Oct 2025',img:'url("assets/images/London.webp")'},{title:'Ordinary streets, calm day.',place:'Derby',mood:'City',note:'Derby gave me the everyday version of the UK. Not the postcard one. Not the one people usually rush to show. Just regular streets, quiet movement, simple buildings, shops, weather, people going about their day.\n\nI liked that more than expected. It made the trip feel less like a tour and more like a small look into normal life somewhere else.\n\nSome cities do not try to impress you. Derby was like that. And because of that, it felt honest.',route:'Oct 2025',img:'url("assets/images/Derby.webp")'},{title:'Stone lanes, slow steps.',place:'York',mood:'Historic',note:'York felt made for walking slowly. Old walls, narrow lanes, stone buildings, little shops, and that feeling that history was not kept separately behind glass. It was just there, part of the street.\n\nI remember taking turns without thinking much. Every corner had texture. Even the quiet parts felt like they had stories stored inside them.\n\nIt was not a loud city for me. It was a looking-down-at-the-stones, looking-up-at-the-buildings kind of place. Slow, detailed, and easy to remember.',route:'Oct 2025',img:'url("assets/images/York.jpg")'},{title:'Rain, corners, student air.',place:'Nottingham',mood:'City',note:'Nottingham had rain, old stories, student energy, and quiet corners that looked good without trying. I liked that mix. It did not feel too polished, and maybe that is why it felt real.\n\nI remember the weather changing the mood of the streets. A little grey, a little cold, but not dull. The kind of day where even ordinary buildings start looking cinematic.\n\nIt felt lived-in. That stayed with me more than any single landmark.',route:'Oct 2025',img:'url("assets/images/Nottingham.webp")'},{title:'Canals, lights, city rhythm.',place:'Birmingham',mood:'City',note:'Birmingham felt sharper than I expected. Modern in parts, industrial in memory, busy without being overwhelming. The canals, lights, food spots, stations, buildings — everything had a practical city rhythm.\n\nI liked it more when evening came. Some cities need light to soften them. Birmingham did. The reflections, movement, and night air made it feel more open.\n\nIt was not trying to be dreamy. It had character in a grounded way, and I respected that.',route:'Oct 2025',img:'url("assets/images/Birmingham.jpg")'},{title:'Skyline after dark.',place:'Kuala Lumpur',mood:'City',note:'Kuala Lumpur surprised me most at night. During the day it felt busy and warm, but after dark the city changed. The skyline lit up, the towers looked unreal, and the streets carried that late food-and-lights energy I always end up liking.\n\nI remember looking up a lot. At buildings, signs, trains passing, the Petronas towers glowing in the distance. It made the city feel bigger than my expectation of it.\n\nKL was not just one mood. It was heat, height, food, traffic, shine, and small tired walks back at the end of long days.',route:'Nov 2025',img:'url("assets/images/Kuala Lampur.jpg")'},{title:'Street art, food, colour.',place:'Penang',mood:'Culture',note:'Penang had personality in almost every lane. Street art, old buildings, food smells, small cafes, colours on walls, and that creative chaos that makes you want to keep walking even when you are tired.\n\nI remember turning into side streets just because they looked interesting. No pressure, no big plan. Just following colour, smell, shade, and curiosity.\n\nIt felt lived-in and artistic at the same time. Not perfect, not polished too much, and that is exactly what made it beautiful.',route:'Nov 2025',img:'url("assets/images/Penang.jpg")'},{title:'Scooters, coffee, rhythm.',place:'Hanoi',mood:'City',note:'Hanoi was chaos from the first minute. Scooters everywhere, tiny shops, narrow streets, strong coffee, people sitting low on plastic stools, and a rhythm that looked impossible until I stopped fighting it.\n\nAt first I kept thinking, how does this work? Then somehow it did. The city moved around me like water. Loud, quick, close, alive.\n\nI remember the coffee, the old streets, the constant movement, and that feeling of being slightly overwhelmed but fully awake.',route:'Nov 2025',img:'url("assets/images/Hanoi.webp")'},{title:'Fog over green hills.',place:'Sapa',mood:'Mountain',note:'Sapa felt like the volume went down. Fog moved slowly over the hills, the terraces appeared in layers, and the cold air made even a small walk feel like something worth remembering.\n\nI liked that I could not see everything clearly. The fog made the place feel private, almost unfinished, like it was revealing only what it wanted to.\n\nSome landscapes are beautiful because they are wide open. Sapa was beautiful because it hid things slowly.',route:'Nov 2025',img:'url("assets/images/Sapa.jpg")'},{title:'Beach, bridges, easy days.',place:'Danang',mood:'Coast',note:'Danang was easy to like. Beach on one side, city life on the other, clean roads, bridges, cafes, warm air, and a calmness that made the days feel simple.\n\nI remember thinking I could stay longer there without needing a reason. It had enough movement to not feel sleepy, but enough space to not feel crowded inside my head.\n\nNot every place has to hit hard. Danang was gentle. That was its charm.',route:'Nov 2025',img:'url("assets/images/Danang.jpg")'},{title:'Soft sunset, slow beach.',place:'Phu Quoc',mood:'Coast',note:'Phu Quoc felt like the reset button near the end of the trip. Warm air, slow beaches, soft sunsets, and days where doing almost nothing still felt complete.\n\nI remember not wanting to fill the time. Just sitting, walking a little, watching the water, eating, resting, then watching the sky change again.\n\nIt was peaceful in a very simple way. No pressure to make it meaningful. And because of that, it became meaningful on its own.',route:'Nov 2025',img:'url("assets/images/Phuquoc.jpg")'},{title:'No pause button.',place:'Ho Chi Minh',mood:'City',note:'Ho Chi Minh City moved like it had no pause button. Scooters, lights, markets, tall buildings, food, noise, and that late-night buzz where the city feels wide awake even when you are tired.\n\nI remember being pulled along by the energy of it. Not always relaxed, but always alert. There was something happening in every direction.\n\nIt was fast, warm, crowded, and alive. The kind of place that leaves you tired, but not empty.',route:'Nov 2025',img:'url("assets/images/Ho Chi Minh.png")'}];

function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function toast(t){const el=document.createElement('div');el.className='toast';el.textContent=t;document.body.appendChild(el);setTimeout(()=>{el.style.opacity='0';el.style.transform='translateX(-50%) translateY(8px)'},1800);setTimeout(()=>el.remove(),2200)}
function animateNumber(el,val){if(!el)return;const end=Number(String(val).replace(/\D/g,''))||0,dur=1100,t0=performance.now();(function s(t){const p=Math.min(1,(t-t0)/dur);el.textContent=Math.round(end*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(s);else el.textContent=val})(t0)}
function themeOf(p){const b=[p.title,p.keywords,p.abstract].join(' ').toLowerCase();if(b.includes('skin')||b.includes('dermat')||b.includes('rosacea'))return'Dermatology AI';if(b.includes('medical')||b.includes('tumor')||b.includes('kidney')||b.includes('fetal')||b.includes('cardiac')||b.includes('lung')||b.includes('bleeding'))return'Medical AI';if(b.includes('cnn')||b.includes('vision')||b.includes('yolo')||b.includes('deep learn')||b.includes('transformer'))return'Computer Vision';if(b.includes('fake')||b.includes('nlp')||b.includes('sentiment')||b.includes('bert'))return'NLP / Trust';if(b.includes('cyber')||b.includes('forensic')||b.includes('security')||b.includes('xss'))return'Security';if(b.includes('audio')||b.includes('sound')||b.includes('auscult')||b.includes('music'))return'Audio AI';return'Applied AI'}
function researchGroupFor(p,mode){if(mode==='year')return String(p.year||'Unknown');if(mode==='type')return p.type||'Publication';return themeOf(p)}
function computeH(pubs){const c=pubs.map(p=>p.citations||0).sort((a,b)=>b-a);let h=0;for(;h<c.length&&c[h]>=h+1;h++);return h}

function initTheme(){$('#themeToggle')?.addEventListener('click',()=>{const l=!document.documentElement.classList.contains('light-mode');document.documentElement.classList.toggle('light-mode',l);localStorage.setItem('theme',l?'light':'dark')})}
function initCursor(){const c=$('#cursor'),r=$('#cursorRing');if(!c||matchMedia('(pointer:coarse)').matches)return;document.addEventListener('mousemove',e=>{c.style.transform=`translate(${e.clientX-6}px,${e.clientY-6}px)`;r.style.transform=`translate(${e.clientX-19}px,${e.clientY-19}px)`});$$('a,button,input,select,textarea,.pub-item,.travel-card,.profile-card,.lib-card').forEach(el=>{el.addEventListener('mouseenter',()=>{c.style.opacity='.4';r.style.transform+=` scale(1.55)`});el.addEventListener('mouseleave',()=>{c.style.opacity='1'})})}
function initTilt(){if(matchMedia('(max-width:760px)').matches)return;$$('.tilt').forEach(card=>{card.addEventListener('mousemove',e=>{const b=card.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;card.style.transform=`perspective(900px) rotateY(${x*9}deg) rotateX(${-y*9}deg)`});card.addEventListener('mouseleave',()=>card.style.transform='perspective(900px) rotateY(0) rotateX(0)')})}

function renderStatic(){
  const sch=window.SCHOLAR_PROFILE||{};
  if($('#heroPubs'))animateNumber($('#heroPubs'),STATS.totalPublications||DATA.length);
  if($('#heroCites'))animateNumber($('#heroCites'),sch.totalCitations||STATS.totalCitations||0);
  const tl=$('#timeline');
  if(tl)tl.innerHTML=experience.map(([r,co,loc,d,tasks])=>`<article class="timeline-item"><span class="timeline-dot"></span><div class="timeline-card"><h3 class="timeline-role">${esc(r)}</h3><p class="timeline-company">${esc(co)}</p><div class="timeline-meta"><span>📍 ${esc(loc)}</span><span>🗓 ${esc(d)}</span></div><ul class="timeline-tasks">${tasks.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></div></article>`).join('');
  const sc=$('#skillsContainer');
  if(sc)sc.innerHTML=Object.entries(skills).map(([cat,tags])=>`<article class="skill-group"><h3 class="skill-category">${esc(cat)}</h3><div class="skill-tags">${tags.map(t=>`<span class="skill-tag">${esc(t)}</span>`).join('')}</div></article>`).join('');
  const sg=$('#socialGrid');
  if(sg)sg.innerHTML=socials.map(([n,h,u])=>`<a class="social-link" href="${esc(u)}" target="_blank" rel="noopener"><div><b>${esc(n)}</b><span>${esc(h)}</span></div><span class="social-arrow">→</span></a>`).join('');
}

function initNav(){
  const ids=['hero','about','experience','education','skills','publications','contact'].filter(id=>$('#'+id));
  const np=$('#navProgress');
  if(np)np.innerHTML=ids.map(id=>`<button data-to="${id}" aria-label="Go to ${id}"></button>`).join('');
  $$('[data-to]').forEach(b=>b.onclick=()=>$('#'+b.dataset.to)?.scrollIntoView({behavior:'smooth'}));
  const obs=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;$$('.nav-links a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id));$$('.nav-progress button').forEach(b=>b.classList.toggle('active',b.dataset.to===e.target.id))}),{threshold:.3});
  ids.forEach(id=>$('#'+id)&&obs.observe($('#'+id)));
  $('#mobileMenu')?.addEventListener('click',()=>$('#navLinks').classList.toggle('open'));
  $$('.nav-links a').forEach(a=>a.addEventListener('click',()=>$('#navLinks').classList.remove('open')));
  const back=$('#backTop');
  if(back){addEventListener('scroll',()=>back.classList.toggle('show',scrollY>600),{passive:true});back.onclick=()=>scrollTo({top:0,behavior:'smooth'})}
}

function initReveal(){
  const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.1});
  $$('.timeline-item,.skill-group,.education-card,.pub-item,.social-link').forEach(x=>obs.observe(x));
}

/* ═══ PUBLICATIONS ═══ */
function populateFilters(){
  const ysel=$('#yearFilter');if(ysel){const ys=[...new Set(DATA.map(p=>p.year).filter(Boolean))].sort((a,b)=>b-a);ysel.innerHTML='<option value="all">All years</option>'+ys.map(y=>`<option>${y}</option>`).join('')}
  const tsel=$('#typeFilter');if(tsel){const ts=[...new Set(DATA.map(p=>p.type).filter(Boolean))].sort();tsel.innerHTML='<option value="all">All types</option>'+ts.map(t=>`<option value="${esc(t)}">${esc(t)}</option>`).join('')}
}

function applyFilters(){
  const q=($('#pubSearch')?.value||'').trim().toLowerCase(),y=$('#yearFilter')?.value||'all',t=$('#typeFilter')?.value||'all',s=$('#sortFilter')?.value||'newest';
  filtered=DATA.filter(p=>{const b=[p.title,p.source,p.authors,p.doi,p.keywords,p.abstract,p.type,p.year,themeOf(p)].join(' ').toLowerCase();return(!q||b.includes(q))&&(y==='all'||String(p.year)===y)&&(t==='all'||p.type===t)&&(!graphFilter||researchGroupFor(p,graphFilter.mode)===graphFilter.value)});
  filtered.sort((a,b)=>s==='cited'?(b.citations||0)-(a.citations||0):s==='title'?String(a.title||'').localeCompare(String(b.title||'')):(Number(b.year)||0)-(Number(a.year)||0)||((b.citations||0)-(a.citations||0)));
  shown=12;renderPubs();
}

function renderStats(){
  const sch=window.SCHOLAR_PROFILE||{};
  const tc=sch.totalCitations||STATS.totalCitations||filtered.reduce((a,p)=>a+(p.citations||0),0);
  const h=sch.hIndex||STATS.hIndex||computeH(DATA);
  const i10=sch.i10Index||STATS.i10Index||DATA.filter(p=>(p.citations||0)>=10).length;
  const ps=$('#pubStats');if(!ps)return;
  ps.innerHTML=`<div class="pub-stat"><b data-count="${filtered.length}">0</b><span>Publications</span></div><div class="pub-stat"><b data-count="${tc}">0</b><span>Total Citations</span></div><div class="pub-stat"><b data-count="${h}">0</b><span>h-index</span></div><div class="pub-stat"><b data-count="${i10}">0</b><span>i10-index</span></div>`;
  $$('.pub-stat b[data-count]',ps).forEach(el=>animateNumber(el,el.dataset.count));
}

function renderChart(){
  const chart=$('#pubChart');if(!chart)return;
  const counts={};filtered.forEach(p=>counts[p.year||'?']=(counts[p.year||'?']||0)+1);
  const keys=Object.keys(counts).sort((a,b)=>(+a||0)-(+b||0)),max=Math.max(1,...Object.values(counts));
  chart.innerHTML=keys.length?keys.map(y=>`<button class="bar" type="button" data-chart-year="${esc(y)}" title="${counts[y]} publications in ${y}"><span class="bar-count">${counts[y]}</span><i style="height:${16+140*counts[y]/max}px"></i><span class="bar-year">${y}</span></button>`).join(''):'<p class="result-count">No data.</p>';
  $$('[data-chart-year]',chart).forEach(b=>b.addEventListener('click',()=>{graphFilter=null;if($('#yearFilter'))$('#yearFilter').value=b.dataset.chartYear;applyFilters()}));
}

function pubCard(p,i){const oa=p.openAccess?.toLowerCase().includes('open')?'<span class="oa-badge">OA</span>':'';return`<article class="pub-item"><div class="pub-year-badge">${p.year||'—'}</div><div class="pub-body"><h3 class="pub-title">${esc(p.title)}</h3><p class="pub-source">${esc(p.source)}</p><p class="pub-meta">${esc(p.type||'Publication')}${p.doi?` &nbsp;·&nbsp; <a class="doi-link" href="https://doi.org/${esc(p.doi)}" target="_blank" rel="noopener">DOI ↗</a>`:''} ${oa}</p><div class="pub-actions"><button class="mini-btn" data-open="${i}">Details</button>${p.link?`<a class="mini-btn" href="${esc(p.link)}" target="_blank" rel="noopener">Scopus ↗</a>`:''}<button class="mini-btn" data-copy="${i}">Cite</button></div></div><div class="pub-citations"><b>${p.citations||0}</b><span>cites</span></div></article>`}

function renderPubs(){
  renderStats();renderChart();
  const rc=$('#resultCount');if(rc)rc.textContent=`Showing ${Math.min(shown,filtered.length)} of ${filtered.length} publications`;
  const pl=$('#pubList');if(pl){pl.innerHTML=filtered.slice(0,shown).map(pubCard).join('')||'<p class="result-count">No publications match.</p>';$$('[data-open]',pl).forEach(b=>b.onclick=()=>openModal(filtered[+b.dataset.open]));$$('[data-copy]',pl).forEach(b=>b.onclick=()=>copyCitation(filtered[+b.dataset.copy]))}
  const lm=$('#loadMore');if(lm)lm.style.display=shown>=filtered.length?'none':'inline-flex';
  renderResearchGraph();
}

function openModal(p){
  const mc=$('#modalContent');if(!mc)return;
  const oa=p.openAccess?.toLowerCase().includes('open')?'<span class="oa-badge">Open Access</span>':'';
  mc.innerHTML=`<h2 class="pub-title" style="font-size:clamp(16px,3vw,26px);margin-bottom:14px">${esc(p.title)}</h2><p class="pub-source" style="margin-bottom:8px">${esc(p.authors||'')}</p>${oa}<div style="margin:16px 0;padding:16px;background:var(--surface2);border-radius:14px;color:var(--muted);font-size:13px;line-height:1.8">${esc(p.abstract||'No abstract available.')}</div><div class="pub-meta" style="line-height:2.2"><b>Source:</b> ${esc(p.source)}<br><b>Year:</b> ${p.year||'—'} &nbsp; <b>Citations:</b> ${p.citations||0}<br><b>DOI:</b> ${p.doi?`<a class="doi-link" href="https://doi.org/${esc(p.doi)}" target="_blank" rel="noopener">${esc(p.doi)} ↗</a>`:'N/A'}<br><b>Type:</b> ${esc(p.type||'—')}<br><b>Keywords:</b> ${esc(p.keywords||'N/A')}</div><div class="pub-actions" style="margin-top:20px;flex-wrap:wrap">${p.link?`<a class="btn-primary" href="${esc(p.link)}" target="_blank" rel="noopener">View on Scopus ↗</a>`:''}${p.doi?`<a class="btn-secondary" href="https://doi.org/${esc(p.doi)}" target="_blank" rel="noopener">DOI Link</a>`:''}<button class="btn-ghost" id="modalCopy">Copy Citation</button></div>`;
  $('#pubModal').classList.add('open');$('#pubModal').setAttribute('aria-hidden','false');$('#modalCopy')?.addEventListener('click',()=>copyCitation(p));
}
function closeModal(){$('#pubModal')?.classList.remove('open');$('#pubModal')?.setAttribute('aria-hidden','true')}
function citationText(p){return`${p.authors||'Abhishek S. et al.'}. (${p.year}). ${p.title}. ${p.source}.${p.doi?' https://doi.org/'+p.doi:''}`}
function copyCitation(p){navigator.clipboard?.writeText(citationText(p));toast('Citation copied!')}
function bibtex(){return filtered.map((p,i)=>`@article{abhishek${p.year}_${i+1},\n  title={${p.title}},\n  author={${p.authors||''}},\n  journal={${p.source}},\n  year={${p.year}},\n  doi={${p.doi||''}}\n}`).join('\n\n')}
function download(n,t,type='text/plain'){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([t],{type}));a.download=n;a.click();URL.revokeObjectURL(a.href)}

function initPubs(){
  if(!$('#pubList'))return;
  populateFilters();renderPubs();
  ['pubSearch','yearFilter','typeFilter','sortFilter'].forEach(id=>$('#'+id)?.addEventListener('input',()=>{graphFilter=null;applyFilters()}));
  $('#loadMore')?.addEventListener('click',()=>{shown+=12;renderPubs()});
  $('#exportBib')?.addEventListener('click',()=>download('abhishek_publications.bib',bibtex()));
  $('#exportJson')?.addEventListener('click',()=>download('abhishek_publications.json',JSON.stringify(filtered,null,2),'application/json'));
  $('#modalClose')?.addEventListener('click',closeModal);
  $('#pubModal')?.addEventListener('click',e=>{if(e.target.id==='pubModal')closeModal()});
}

/* ═══ QUICK LIBRARY (FIXED & NEW) ═══ */
function libColor(theme){const m={'Dermatology AI':'linear-gradient(135deg,#ff6b9d,#c44dff)','Medical AI':'linear-gradient(135deg,#00d4ff,#0066ff)','Computer Vision':'linear-gradient(135deg,#00e5a0,#00b8ff)','NLP / Trust':'linear-gradient(135deg,#ffaa00,#ff6600)','Security':'linear-gradient(135deg,#ff4444,#cc0066)','Audio AI':'linear-gradient(135deg,#a78bfa,#00d4ff)','Applied AI':'linear-gradient(135deg,#16f5a5,#a78bfa)'};return m[theme]||'linear-gradient(135deg,var(--accent),var(--accent3))'}

function renderLibraryCards(pubs){
  const top=[...pubs].sort((a,b)=>(b.citations||0)-(a.citations||0)).slice(0,12);
  return top.map(p=>`<article class="lib-card" data-lib-open="${DATA.indexOf(p)}" tabindex="0" role="button" aria-label="${esc(p.title)}"><div class="lib-accent" style="background:${libColor(themeOf(p))}"></div><span class="lib-theme">${esc(themeOf(p))}</span><h3 class="lib-title">${esc(p.title)}</h3><p class="lib-source">${esc(p.source||'')}</p><div class="lib-footer"><span>${p.year||''}</span><span>${p.citations||0} cites</span></div></article>`).join('');
}

function attachLibraryClicks(container){
  $$('[data-lib-open]',container||document).forEach(el=>{
    el.onclick=()=>openModal(DATA[+el.dataset.libOpen]);
    el.onkeydown=e=>{if(e.key==='Enter'||e.key===' ')openModal(DATA[+el.dataset.libOpen])};
  });
}

function initQuickLibrary(){
  const container=$('#quickLibraryRoot');if(!container)return;
  const themes={};DATA.forEach(p=>{const t=themeOf(p);if(!themes[t])themes[t]={name:t,pubs:[]};themes[t].pubs.push(p)});
  const sorted=Object.values(themes).sort((a,b)=>b.pubs.length-a.pubs.length);
  const allThemes=['All',...sorted.map(t=>t.name)];
  container.innerHTML=`<div class="library-filters">${allThemes.map((t,i)=>`<button class="lib-filter${i===0?' active':''}" data-theme="${esc(t)}">${esc(t)} <span class="lib-count">${t==='All'?DATA.length:(themes[t]?.pubs.length||0)}</span></button>`).join('')}</div><div class="library-grid" id="libraryGrid">${renderLibraryCards(DATA)}</div>`;
  $$('.lib-filter',container).forEach(btn=>{
    btn.onclick=()=>{
      $$('.lib-filter',container).forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const theme=btn.dataset.theme;
      const pubs=theme==='All'?DATA:DATA.filter(p=>themeOf(p)===theme);
      const grid=$('#libraryGrid');
      if(grid){grid.innerHTML=renderLibraryCards(pubs);attachLibraryClicks(grid);}
    };
  });
  attachLibraryClicks(container);
}

/* ═══ RESEARCH GRAPH (FULLY FIXED) ═══ */
let _gTip=null;
function closeGraphTooltip(){if(_gTip){_gTip.style.display='none'}}
function showGraphTooltip(node,e){
  if(!_gTip){_gTip=document.createElement('div');_gTip.id='graphTooltip';_gTip.className='graph-tooltip';document.body.appendChild(_gTip)}
  const x=Math.min(e.clientX+16,innerWidth-300),y=Math.min(e.clientY+16,innerHeight-140);
  _gTip.style.display='block';_gTip.style.left=x+'px';_gTip.style.top=y+'px';
  _gTip.innerHTML=`<b style="display:block;margin-bottom:4px">${esc(node.dataset.title||node.dataset.group)}</b><span style="color:var(--muted);font-size:12px">${esc(node.dataset.group)} · ${esc(node.dataset.cites||'0')} citations</span>`;
}

function renderResearchGraph(){
  const svg=$('#graphSvg');if(!svg)return;
  closeGraphTooltip();svg.classList.remove('graph-ready');
  // *** FIX: Read mode fresh from DOM every single render ***
  const mode=($('#graphMode')?.value||'year').trim().toLowerCase();
  if(!filtered.length){svg.innerHTML='<text x="500" y="260" text-anchor="middle" fill="currentColor" opacity=".4" font-size="16">No publications match current filter</text>';return}
  const top=[...filtered].sort((a,b)=>(b.citations||0)-(a.citations||0)).slice(0,50);
  const groups=[...new Set(top.map(p=>researchGroupFor(p,mode)))];
  const W=1000,H=520,cx=W/2,cy=H/2;
  const palette=['var(--accent)','var(--accent3)','var(--green)','var(--accent2)','var(--pink,#ff4fd8)'];
  let html=`<defs><radialGradient id="pg" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="white" stop-opacity=".95"/><stop offset="40%" stop-color="var(--accent)" stop-opacity=".85"/><stop offset="100%" stop-color="var(--accent3)" stop-opacity=".7"/></radialGradient><filter id="glo" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`;
  html+=`<circle cx="${cx}" cy="${cy}" r="16" fill="var(--accent)" opacity=".15" filter="url(#glo)"/><circle cx="${cx}" cy="${cy}" r="7" fill="var(--accent)"/>`;
  groups.forEach((g,gi)=>{
    const ang=2*Math.PI*gi/groups.length-Math.PI/2,gx=cx+Math.cos(ang)*310,gy=cy+Math.sin(ang)*182,col=palette[gi%palette.length],del=gi*55;
    html+=`<line class="graph-link" style="--delay:${del}ms" x1="${cx}" y1="${cy}" x2="${gx}" y2="${gy}"/>`;
    html+=`<g class="graph-cluster" style="--delay:${del}ms"><circle class="graph-halo" cx="${gx}" cy="${gy}" r="44"/><circle class="graph-node group" cx="${gx}" cy="${gy}" r="23" fill="var(--surface2)" stroke="${col}" stroke-width="1.5" data-group="${esc(g)}" data-cites="${top.filter(p=>researchGroupFor(p,mode)===g).reduce((a,p)=>a+(p.citations||0),0)}" filter="url(#glo)"/><text class="graph-label" x="${gx}" y="${gy-28}" text-anchor="middle">${esc(g.length>14?g.slice(0,13)+'…':g)}</text></g>`;
    const papers=top.filter(p=>researchGroupFor(p,mode)===g).slice(0,9);
    papers.forEach((p,i,arr)=>{
      const sp=Math.min(.34,.14+(arr.length*.018)),pa=ang+(i-(arr.length-1)/2)*sp,pr=80+Math.min(85,(p.citations||0)*2.8),px=gx+Math.cos(pa)*pr,py=gy+Math.sin(pa)*pr,pr2=7+Math.min(19,Math.sqrt((p.citations||0)+1)*2.1),pd=del+120+i*38;
      const st=p.title?.length>46?p.title.slice(0,45)+'…':p.title||'';
      html+=`<line class="graph-link" style="--delay:${pd}ms" x1="${gx}" y1="${gy}" x2="${px}" y2="${py}"/>`;
      html+=`<circle class="graph-node paper" tabindex="0" role="button" cx="${px}" cy="${py}" r="${pr2}" fill="url(#pg)" style="--delay:${pd+55}ms" data-title="${esc(st)}" data-group="${esc(g)}" data-cites="${p.citations||0}"/>`;
    });
  });
  svg.innerHTML=html;
  requestAnimationFrame(()=>svg.classList.add('graph-ready'));
  $$('.graph-node.paper',svg).forEach(n=>{
    n.addEventListener('mousemove',e=>showGraphTooltip(n,e));
    n.addEventListener('focus',()=>{const r=n.getBoundingClientRect();showGraphTooltip(n,{clientX:r.right,clientY:r.top})});
    n.addEventListener('mouseleave',closeGraphTooltip);n.addEventListener('blur',closeGraphTooltip);
    n.addEventListener('click',e=>{e.stopPropagation();closeGraphTooltip();graphFilter={mode,value:n.dataset.group};if(mode==='year'&&$('#yearFilter'))$('#yearFilter').value=n.dataset.group;else if($('#yearFilter'))$('#yearFilter').value='all';if($('#pubSearch'))$('#pubSearch').value='';applyFilters();$('#publications')?.scrollIntoView({behavior:'smooth',block:'start'})});
    n.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ')n.click()});
  });
  $$('.graph-node.group',svg).forEach(n=>{
    n.addEventListener('mousemove',e=>showGraphTooltip(n,e));n.addEventListener('mouseleave',closeGraphTooltip);
    n.addEventListener('click',e=>{e.stopPropagation();closeGraphTooltip();graphFilter={mode,value:n.dataset.group};if(mode==='year'&&$('#yearFilter'))$('#yearFilter').value=n.dataset.group;else if($('#yearFilter'))$('#yearFilter').value='all';if($('#pubSearch'))$('#pubSearch').value='';applyFilters();$('#pubList')?.scrollIntoView({behavior:'smooth',block:'start'})});
  });
}

function initResearchGraph(){
  if(!$('#researchGraph'))return;
  // *** FIX: graphMode change now clears filter and re-runs applyFilters which calls renderResearchGraph ***
  $('#graphMode')?.addEventListener('change',()=>{
    graphFilter=null;
    if($('#yearFilter'))$('#yearFilter').value='all';
    if($('#pubSearch'))$('#pubSearch').value='';
    applyFilters();
  });
  renderResearchGraph();
}

function initScholar(){const p=window.SCHOLAR_PROFILE||{};if(p.totalCitations&&$('#heroCites'))animateNumber($('#heroCites'),p.totalCitations)}

/* ═══ TRAVEL ═══ */

function travelTeaser(note){
  const clean=String(note||'').trim();
  if(!clean)return '';
  const first=clean.split(/(?<=[.!?])\s+/)[0]||clean;
  return first.length>92 ? first.slice(0,89).trim()+'…' : first;
}

function getStories(){
  try{
    const saved=JSON.parse(localStorage.getItem('travelStories')||'[]');
    return [...travelStories,...saved].filter(s=>{
      const title=(s.title||'').trim();
      const place=(s.place||'').trim();
      const note=(s.note||'').trim();
      return title && place && note && title.toLowerCase()!=='untitled journey';
    });
  }catch{return travelStories}
}
function renderTravel(){
  const grid=$('#travelGrid');if(!grid)return;
  const q=($('#travelSearch')?.value||'').toLowerCase(),m=$('#travelMood')?.value||'all';
  const stories=getStories().filter(s=>(m==='all'||s.mood===m)&&[s.title,s.place,s.note,s.route,s.mood].join(' ').toLowerCase().includes(q));
  grid.innerHTML=stories.map((s,i)=>`<article class="travel-card universe-card tilt" data-story="${esc(s.note)}" data-image="${esc(String(s.img||'').replace(/^url\(["']?|["']?\)$/g,''))}"><div class="travel-bg" style="--img:${esc(s.img||'linear-gradient(135deg,#0f172a,#00e5ff)')}" aria-hidden="true"></div><div class="travel-shine" aria-hidden="true"></div><div class="travel-content"><div class="card-topline"><span class="story-no">${String(i+1).padStart(2,'0')}</span><span class="travel-tag">${esc(s.mood)} · ${esc(s.place)}</span></div><h3>${esc(s.title)}</h3><p>${esc(travelTeaser(s.note))}</p><div class="card-bottom"><small>${esc(s.route||'')}</small><span class="open-story">Read memory</span></div></div></article>`).join('')||'<p class="result-count">No stories match.</p>';bindTravelCards();
}
function initTravel(){if(!$('#travelGrid'))return;renderTravel();['travelSearch','travelMood'].forEach(id=>$('#'+id)?.addEventListener('input',renderTravel));const ab=$('#addStory');if(ab){ab.addEventListener('click',()=>{const t=$('#storyTitle')?.value.trim(),pl=$('#storyPlace')?.value.trim(),n=$('#storyNote')?.value.trim();if(!t||!pl||!n){toast('Fill title, place and note');return}const s=JSON.parse(localStorage.getItem('travelStories')||'[]');s.push({title:t,place:pl,mood:'City',note:n,route:'Recent',img:'linear-gradient(135deg,var(--accent),var(--accent3))'});localStorage.setItem('travelStories',JSON.stringify(s));['storyTitle','storyPlace','storyNote'].forEach(id=>{if($('#'+id))$('#'+id).value=''});renderTravel();toast('Story added!')})}}

function bindTravelCards(){
  const modal=document.getElementById('placeStoryModal');if(!modal)return;
  const img=document.getElementById('placeStoryImage'),meta=document.getElementById('placeStoryMeta'),title=document.getElementById('placeStoryTitle'),sub=document.getElementById('placeStorySubtitle'),text=document.getElementById('placeStoryText');
  function openCard(card){
    const copy=card.querySelector('.cinema-copy,.place-copy,.travel-content')||card;
    img.src=card.dataset.image||card.querySelector('img')?.src||'';
    img.alt=copy.querySelector('h2,h3')?.textContent||'';
    meta.textContent=copy.querySelector('span,.travel-tag')?.textContent||'';
    title.textContent=copy.querySelector('h2,h3')?.textContent||'';
    sub.textContent=copy.querySelector('h4,small')?.textContent||'';
    text.textContent=card.dataset.story||copy.querySelector('p')?.textContent||'';
    modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
  }
  $$('.place-card,.cinema-panel,.travel-card').forEach(c=>{
    if(c.dataset.boundStory==='1')return;
    c.dataset.boundStory='1';c.style.cursor='pointer';c.setAttribute('tabindex','0');
    c.addEventListener('click',()=>openCard(c));
    c.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ')openCard(c)});
  });
}

function initCopy(){$('#copyEmail')?.addEventListener('click',()=>{navigator.clipboard?.writeText('abhishekabi2002@gmail.com');toast('Email copied!')})}

function initPalette(){
  const commands=[['About','#about'],['Experience','#experience'],['Education','#education'],['Skills','#skills'],['Publications','#publications'],['Quick Library','#quickLibrarySection'],['Research Graph','#researchGraph'],['Travel','travel.html'],['Contact','#contact'],['Resume','assets/S_Abhishek_Resume.pdf'],['Toggle theme','__theme']];
  const modal=$('#commandModal'),input=$('#commandInput'),results=$('#commandResults');if(!modal||!input||!results)return;
  function open(){modal.classList.add('open');modal.setAttribute('aria-hidden','false');input.focus();draw('')}
  function close(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
  function draw(q){results.innerHTML=commands.filter(c=>c[0].toLowerCase().includes(q.toLowerCase())).map(c=>`<div class="command-result" data-cmd="${esc(c[1])}"><span>${esc(c[0])}</span></div>`).join('');$$('.command-result').forEach(el=>el.onclick=()=>{const cmd=el.dataset.cmd;close();if(cmd==='__theme')$('#themeToggle')?.click();else if(cmd.startsWith('#')){const t=$(cmd);t?t.scrollIntoView({behavior:'smooth'}):location.href='index.html'+cmd}else location.href=cmd})}
  $('#paletteToggle')?.addEventListener('click',open);input.addEventListener('input',()=>draw(input.value));modal.addEventListener('click',e=>{if(e.target.id==='commandModal')close()});addEventListener('keydown',e=>{if(e.key==='Escape'){close();closeModal();closeGraphTooltip()}if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();open()}});
}


function initTravelAnchors(){
  $$('a[href="#all-places"]').forEach(a=>a.addEventListener('click',e=>{
    const target=document.getElementById('all-places')||document.querySelector('.place-country')||document.getElementById('library');
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});history.replaceState(null,'','#all-places')}
  }));
}

function initTravelProgress(){if(!document.body.classList.contains('travel-page'))return;const bar=document.createElement('div');bar.className='travel-progress';document.body.appendChild(bar);addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;bar.style.width=(h?scrollY/h*100:0)+'%'},{passive:true})}

function initAurora(){const a=$('.aurora');if(!a)return;let t=0;(function tick(){t+=.003;a.style.transform=`scale(${1+Math.sin(t)*.04}) rotate(${Math.sin(t*.7)*.7}deg)`;requestAnimationFrame(tick)})()} 

function initPlaceStoryModal(){
  const modal=document.getElementById('placeStoryModal');if(!modal)return;
  const img=document.getElementById('placeStoryImage'),meta=document.getElementById('placeStoryMeta'),title=document.getElementById('placeStoryTitle'),sub=document.getElementById('placeStorySubtitle'),text=document.getElementById('placeStoryText');
  function openCard(card){const copy=card.querySelector('.cinema-copy,.place-copy')||card;img.src=card.dataset.image||card.querySelector('img')?.src||'';img.alt=copy.querySelector('h2,h3')?.textContent||'';meta.textContent=copy.querySelector('span')?.textContent||'';title.textContent=copy.querySelector('h2,h3')?.textContent||'';sub.textContent=copy.querySelector('h4,small')?.textContent||'';text.textContent=card.dataset.story||copy.querySelector('p')?.textContent||'';modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
  function closeCard(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
  bindTravelCards();
  $$('[data-close-place-story]',modal).forEach(el=>el.addEventListener('click',closeCard));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeCard()});
  modal.addEventListener('click',e=>{if(e.target===modal)closeCard()});
}

document.addEventListener('DOMContentLoaded',()=>{
  initTheme();initCursor();initTilt();renderStatic();initNav();initReveal();initPubs();initQuickLibrary();initResearchGraph();initScholar();initTravel();initTravelAnchors();initTravelProgress();initCopy();initPalette();initAurora();initPlaceStoryModal();
  // inject visible class helper
  const s=document.createElement('style');s.textContent='.visible{opacity:1!important;transform:translateY(0)!important}';document.head.appendChild(s);
});
window.addEventListener('scroll',closeGraphTooltip,{passive:true});
document.addEventListener('click',e=>{if(!e.target.closest('.graph-tooltip')&&!e.target.closest('#graphSvg'))closeGraphTooltip()});
