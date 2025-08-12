export function MenuFunction() {
    const btn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".dropdown-menu");
    const lines = document.querySelectorAll(".lines");

    document.body.classList.toggle('overflow-hidden')
    lines.forEach(e => {
        e.classList.toggle('bg-white/80');
    })

    if (!btn || !menu) return;

    menu.classList.toggle('pl-3');
    if (menu.classList.contains('w-0')) {
        menu.classList.replace('w-0', 'w-screen');
        btn.classList.replace('bg-white/65', 'bg-gray-700')
    } else {
        menu.classList.replace('w-screen', 'w-0');
        btn.classList.replace('bg-gray-700', 'bg-white/65')
    };
}

export default MenuFunction