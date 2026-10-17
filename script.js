const botaoTema = document.getElementById('botao-tema');

function aplicarTema(tema) {
  if (tema === 'claro') {
    document.body.classList.add('tema-claro');
    botaoTema.textContent = '☾';
    botaoTema.setAttribute('aria-label', 'Mudar para tema escuro');
  } else {
    document.body.classList.remove('tema-claro');
    botaoTema.textContent = '☀';
    botaoTema.setAttribute('aria-label', 'Mudar para tema claro');
  }
}

const temaSalvo = localStorage.getItem('tema');
aplicarTema(temaSalvo || 'escuro');

botaoTema.addEventListener('click', function () {
  const estaClaro = document.body.classList.contains('tema-claro');
  const novoTema = estaClaro ? 'escuro' : 'claro';

  aplicarTema(novoTema);
  localStorage.setItem('tema', novoTema);
});