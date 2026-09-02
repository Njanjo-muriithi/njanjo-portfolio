const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}});
const cards=document.querySelectorAll('.experience-card,.skill-card,.project-card');
cards.forEach(card=>card.addEventListener('pointermove',e=>{
 const r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
 card.style.background=`radial-gradient(circle at ${x}px ${y}px, rgba(36,157,255,.10), transparent 42%), linear-gradient(145deg,rgba(15,27,44,.92),rgba(8,15,25,.96))`;
}));
cards.forEach(card=>card.addEventListener('pointerleave',()=>card.style.background=''));

document.querySelectorAll('.details-btn').forEach(btn => {
  const card = btn.closest('.experience-card');
  const details = btn.nextElementSibling;

  const toggleDetails = () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    btn.classList.toggle('open', !expanded);
    details.hidden = expanded;
    btn.querySelector('span').textContent = expanded ? 'More info' : 'Hide info';
  };

  btn.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleDetails();
  });

  card.addEventListener('click', (event) => {
    if (event.target.closest('button, a')) return;
    toggleDetails();
  });

  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleDetails();
    }
  });
});


document.querySelectorAll('.project-details-btn').forEach(btn => {
  const card = btn.closest('.project-card');
  const details = btn.nextElementSibling;

  const toggleProject = () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    btn.classList.toggle('open', !expanded);
    details.hidden = expanded;
    btn.querySelector('span').textContent = expanded ? 'More info' : 'Hide info';
  };

  btn.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleProject();
  });

  card.addEventListener('click', (event) => {
    if (event.target.closest('button, a')) return;
    toggleProject();
  });

  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleProject();
    }
  });
});

document.querySelectorAll('.copy-email').forEach(btn => {
  btn.addEventListener('click', async () => {
    const email = btn.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      const label = btn.querySelector('small');
      const text = btn.querySelector('span');
      const old = text.innerHTML;
      text.innerHTML = '<small>DONE</small>Email copied';
      setTimeout(() => { text.innerHTML = old; }, 1800);
    } catch (e) {
      window.location.href = 'mailto:' + email;
    }
  });
});
