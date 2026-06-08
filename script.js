function handleSubmit(e) {
    e.preventDefault();
    alert('Message sent! (Connect EmailJS to make this work for real)');
  }
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => { if (window.scrollY >= section.offsetTop - 100) current = section.getAttribute('id'); });
    navLinks.forEach(link => { link.style.color = link.getAttribute('href') === '#' + current ? 'var(--gold)' : ''; });
  });