window.addEventListener('scroll', function () {
  const layers = document.querySelectorAll('.parallax-layer');
  layers.forEach(layer => {
      const speed = layer.dataset.speed || 0.5;
      layer.style.transform = `translateY(${window.scrollY * speed}px)`;
  });
});
