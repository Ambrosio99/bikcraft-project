function MenuAtivo() {
  const links = document.querySelectorAll(".header-menu a");
  function ativarLink(item) {
    const url = location.href;
    const href = item.href;

    if (url.includes(href)) {
      item.classList.add("ativo");
    }
  }
  links.forEach(ativarLink);
}
MenuAtivo();
