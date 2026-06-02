// ========================================
// Dialed GG — Color Memory Game
// Site interactions
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  // --- FAQ Accordion ---
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(function(question) {
    question.addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      const answer = this.nextElementSibling;

      // Close all FAQ items
      faqQuestions.forEach(function(q) {
        q.setAttribute('aria-expanded', 'false');
        q.nextElementSibling.classList.remove('open');
      });

      // If this one wasn't open, open it
      if (!expanded) {
        this.setAttribute('aria-expanded', 'true');
        answer.classList.add('open');
      }
    });
  });

  // --- Smooth scroll for nav links ---
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Track outgoing game clicks ---
  document.querySelectorAll('a[href*="mirofish.my"]').forEach(function(link) {
    link.addEventListener('click', function() {
      // Analytics tracking placeholder
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'click', {
          event_category: 'outbound',
          event_label: 'play_game',
          transport_type: 'beacon'
        });
      }
    });
  });
});
