// Lightbox for project screenshots
(() => {
  const box = document.getElementById('lightbox');
  if (!box || typeof box.showModal !== 'function') return;
  const track = box.querySelector('.lightbox__track');

  document.querySelectorAll('.shot[data-gallery]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const alt = btn.querySelector('img')?.alt || '';
      track.replaceChildren(...btn.dataset.gallery.split(',').map((name, i) => {
        const img = new Image();
        img.src = `assets/img/${name}.webp`;
        img.alt = `${alt.split(' — ')[0]}, скриншот ${i + 1}`;
        return img;
      }));
      box.showModal();
      track.scrollTop = 0;
    });
  });

  box.querySelector('.lightbox__close').addEventListener('click', () => box.close());
  box.addEventListener('click', (e) => { if (e.target === box || e.target === track) box.close(); });
})();
