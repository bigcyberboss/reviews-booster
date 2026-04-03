export function handleHashNav(e: React.MouseEvent, href: string) {
  const hash = href.replace("/#", "");
  const el = document.getElementById(hash);

  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `#${hash}`);
  } else {
    e.preventDefault();
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    window.location.href = `${basePath}/#${hash}`;
  }
}
