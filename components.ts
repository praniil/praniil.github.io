type NavLink = {
    label: string;
    href: string;
}

//navbar components array
const navigationLinks: NavLink[] = [
    {label: "About", href: "about.html"},
    {label: "Blogs", href: "blogs.html"},
    {label: "Projects", href: "projects.html"},
    {label: "Contact", href: "contact.html"},
    {label: "Resume", href: "resume.html"}
]

function buildHeader(): string{
    const linksHTML:string = navigationLinks.map((link: NavLink): string => {
        return `<li><a href="${link.href}">${link.label}</a></li>`;
    })
    .join("");
    return `
        <a href="landing_page.html" class="logo">Pranil</a>
        <nav>
          <ul class="navbar">
            ${linksHTML}
          </ul>
        </nav>
    `;
}

function buildFooter(): string {
  const year: number = new Date().getFullYear();
  return `<p>© ${year} Pranil Parajuli</p>`;
}

function injectComponents(): void {
  const header = document.querySelector<HTMLElement>("header");
  const footer = document.querySelector<HTMLElement>("footer");

  if (header) {
    header.innerHTML = buildHeader();
  }

  if (footer) {
    footer.innerHTML = buildFooter();
  }
}

document.addEventListener("DOMContentLoaded", injectComponents);
