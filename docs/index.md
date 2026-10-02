
<div class="dd10">
  <aside class="dd10-side">
    <div class="dd10-brand">
      <div class="jp">ドーナドーナ</div>
      <small>いっしょにわるいことをしよう</small>
      <strong>多娜多娜 中文 Wiki</strong>
    </div>

    <nav class="dd10-nav">
      <a class="nav active" href="./"><i>◆</i><span><b>首页</b><small>HOME</small></span></a>

      <div class="nav-group open">
        <button class="nav toggle"><i>▤</i><span><b>攻略</b><small>GUIDE</small></span><em>−</em></button>
        <div class="sub">
          <a href="guide/beginner/">新手入门</a>
          <a href="guide/gameplay/">游戏系统</a>
          <a href="guide/combat/">战斗攻略</a>
          <a href="walkthrough/">主线流程</a>
        </div>
      </div>

      <a class="nav" href="characters/"><i>♟</i><span><b>角色</b><small>CHARACTER</small></span><em>›</em></a>
      <a class="nav" href="maps/"><i>●</i><span><b>地图</b><small>MAP</small></span><em>›</em></a>

      <div class="nav-group open">
        <button class="nav toggle"><i>▦</i><span><b>数据库</b><small>DATABASE</small></span><em>−</em></button>
        <div class="sub">
          <a href="database/items/">道具</a>
          <a href="database/weapons/">武器</a>
          <a href="database/skills/">技能</a>
          <a href="database/enemies/">敌人</a>
        </div>
      </div>

      <a class="nav" href="endings/"><i>◆</i><span><b>收集</b><small>COLLECTION</small></span><em>›</em></a>
    </nav>

    <button class="side-search" id="sideSearch"><i>⌕</i><span><b>搜索</b><small>SEARCH</small></span></button>
  </aside>

  <main class="dd10-main">
    <section class="dd10-hero">
      <div class="art" aria-hidden="true"></div>
      <div class="shade"></div>

      <div class="hero-copy">
        <div class="eyebrow">UNOFFICIAL CHINESE WIKI</div>
        <h1><span>多娜多娜</span><br>中文 Wiki</h1>
        <p>《多娜多娜 一起来干坏事吧》<br>非官方中文攻略、角色、地图与游戏数据资料库。</p>
        <div class="actions">
          <a class="primary" href="guide/beginner/">开始攻略 <b>→</b></a>
          <a href="characters/">浏览角色 <b>↗</b></a>
        </div>
      </div>

      <label class="top-search">
        <span>⌕</span>
        <input id="heroSearch" type="search" placeholder="搜索攻略、角色、地图等…">
        <kbd>Ctrl K</kbd>
      </label>

      <div class="scroll">SCROLL <b>⌄</b></div>
    </section>

    <section class="dd10-explore">
      <header><div><small>01</small><h2>EXPLORE</h2></div><span>快速浏览 ///</span></header>
      <div class="cards">
        <a href="guide/beginner/"><small>01 / GUIDE</small><strong>攻略</strong><p>新手入门 · 主线流程 · 战斗系统</p></a>
        <a href="characters/"><small>02 / CHARACTER</small><strong>角色</strong><p>角色资料 · 技能 · 培养建议</p></a>
        <a href="maps/"><small>03 / MAP</small><strong>地图</strong><p>区域攻略 · 掉落 · 探索</p></a>
        <a href="database/items/"><small>04 / DATABASE</small><strong>数据库</strong><p>道具 · 武器 · 技能 · 敌人</p></a>
      </div>
    </section>
  </main>
</div>

<script>
(()=>{
  const root=document.querySelector('.dd10');
  if(!root || root.dataset.ready) return;
  root.dataset.ready='1';

  root.querySelectorAll('.toggle').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const g=btn.closest('.nav-group');
      g.classList.toggle('open');
      btn.querySelector('em').textContent=g.classList.contains('open')?'−':'＋';
    });
  });

  const q=document.getElementById('heroSearch');
  const focusSearch=()=>q && q.focus();
  document.getElementById('sideSearch').addEventListener('click',focusSearch);

  document.addEventListener('keydown',e=>{
    if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){
      e.preventDefault(); focusSearch();
    }
  });

  q.addEventListener('keydown',e=>{
    if(e.key==='Enter' && q.value.trim()){
      const native=document.querySelector('[data-md-component="search"] input');
      if(native){
        native.value=q.value.trim();
        native.dispatchEvent(new Event('input',{bubbles:true}));
        native.focus();
      }
    }
  });
})();
</script>
