function oppdaterKlokke() {
    const now = new Date();
    // Formaterer tiden til tt:mm:ss
    const tid = now.toLocaleTimeString('no-NO');
    document.getElementById('klokke').innerText = tid;
}

function toggleMenu() {
    const menuPanel = document.getElementById('menuPanel');
    const menuButton = document.getElementById('menuButton');
    const isOpen = menuPanel.classList.toggle('open');
    menuPanel.setAttribute('aria-hidden', String(!isOpen));
    menuButton.setAttribute('aria-expanded', String(isOpen));
}

function closeMenu() {
    const menuPanel = document.getElementById('menuPanel');
    const menuButton = document.getElementById('menuButton');
    menuPanel.classList.remove('open');
    menuPanel.setAttribute('aria-hidden', 'true');
    menuButton.setAttribute('aria-expanded', 'false');
}

function handleMenuItem(event) {
    const action = event.target.dataset.action;
    if (!action) return;

    // Navigate to the page corresponding to the action
    window.location.href = '/' + action;

    closeMenu();
}

document.addEventListener('DOMContentLoaded', () => {
    oppdaterKlokke();
    setInterval(oppdaterKlokke, 1000);

    const menuButton = document.getElementById('menuButton');
    const menuPanel = document.getElementById('menuPanel');

    menuButton.addEventListener('click', toggleMenu);
    menuPanel.addEventListener('click', handleMenuItem);

    document.addEventListener('click', (event) => {
        if (!menuPanel.contains(event.target) && !menuButton.contains(event.target)) {
            closeMenu();
        }
    });
});
