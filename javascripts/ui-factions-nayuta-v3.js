
(function(){
  function addNav(){
    const path = location.pathname.replace(/\/+$/,'/');
    const main = document.querySelector('.md-content__inner') || document.querySelector('main') || document.body;
    if (!main || document.querySelector('.ui3-nav')) return;

    let backHref=null, backText=null, crumb=null;
    if (/\/characters\/nayuta\/[^/]+\/$/.test(path)){
      backHref='../'; backText='← NAYUTA / 返回成员'; crumb='CHARACTERS / FACTIONS / NAYUTA / CHARACTER';
    } else if (/\/characters\/nayuta\/$/.test(path)){
      backHref='../../factions/'; backText='← FACTIONS / 返回阵营'; crumb='CHARACTERS / FACTIONS / NAYUTA';
    }
    if(!backHref) return;

    const nav=document.createElement('div');
    nav.className='ui3-nav';
    nav.innerHTML='<a class="ui3-back" href="'+backHref+'">'+backText+'</a><span class="ui3-crumb">'+crumb+'</span>';

    const target=document.querySelector('.ddb-page');
    if(target) target.insertBefore(nav,target.firstChild);
    else main.insertBefore(nav,main.firstChild);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',addNav);
  else addNav();
})();
