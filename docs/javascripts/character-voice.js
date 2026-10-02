(function(){
let audio=null,active=null;
function reset(){if(active)active.classList.remove('is-playing');active=null;}
document.addEventListener('click',function(e){
 const b=e.target.closest('.cp-voice-btn'); if(!b)return;
 const src=b.dataset.voice;if(!src)return;
 if(active===b&&audio&&!audio.paused){audio.pause();audio.currentTime=0;reset();return;}
 if(audio){audio.pause();audio.currentTime=0;} reset();
 active=b;b.classList.add('is-playing');audio=new Audio(src);
 audio.addEventListener('ended',reset,{once:true});
 audio.addEventListener('error',function(){b.classList.remove('is-playing');b.classList.add('is-error');active=null;},{once:true});
 audio.play().catch(reset);
});
})();
