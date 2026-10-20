  // ANIMAÇÃO DE ENTRADA
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); }
      });
    }, { threshold: .15 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // JANELA DOS BENEFÍCIOS DO PLANO
    const modal = document.getElementById('modalPlano');
    document.getElementById('abrirBeneficios').addEventListener('click', () => modal.showModal());
    document.getElementById('fecharBeneficios').addEventListener('click', () => modal.close());
    modal.addEventListener('click', e => { if (e.target === modal) modal.close(); }); // clicar fora fecha

    // ANO DINÂMICO
    document.getElementById('ano').textContent = new Date().getFullYear();