    // Small interactive JS for the new design
    (function(){
      const hamburger = document.getElementById('openMenu');
      const mobileMenu = document.getElementById('mobileMenu');
      hamburger && hamburger.addEventListener('click', ()=>{
        const open = mobileMenu.style.display === 'block';
        mobileMenu.style.display = open ? 'none' : 'block';
        hamburger.setAttribute('aria-expanded', String(!open));
      });

      // Flip projects on click or Enter
      document.querySelectorAll('.project-card').forEach(card=>{
        card.addEventListener('click', ()=> card.classList.toggle('is-flipped'));
        card.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.classList.toggle('is-flipped'); }});
      });

      // Smooth scroll for internal links
      document.querySelectorAll('a[href^="#"]').forEach(a=>{
        a.addEventListener('click', function(e){
          const href = this.getAttribute('href');
          if(href === '#') return;
          const el = document.querySelector(href);
          if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'});
            // update active link
            document.querySelectorAll('nav.primary a').forEach(x=>x.classList.remove('active'));
            const target = document.querySelector('nav.primary a[href="'+href+'"]');
            target && target.classList.add('active');
          }
        });
      });

      // Show more: reveal hidden projects (if you want to keep hidden sample)
      const showMore = document.getElementById('showMore');
      if(showMore){
        showMore.addEventListener('click', ()=>{
          // simple behaviour: duplicate last projects to simulate more content
          const grid = document.getElementById('projectsGrid');
          const clones = Array.from(grid.children).slice(0,3).map(n=>n.cloneNode(true));
          clones.forEach(c=>grid.appendChild(c));
          showMore.style.display = 'none';
        });
      }

      // Contact button
      const contactBtn = document.getElementById('contactMe');
      contactBtn && contactBtn.addEventListener('click', ()=>{ location.href = 'mailto:juillat.lucas@gmail.com'; });

      // Reduce animation for prefers-reduced-motion
      if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
        document.getElementById('skillsTrack').style.animation = 'none';
      }
    })();