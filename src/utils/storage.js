const KEY = "hero_io_installed_apps";

export function getInstalledIds() {
  try {
    const raw = localStorage.getItem(KEY);
    const ids = raw ? JSON.parse(raw) : [];
    return Array.isArray(ids) ? ids : [];
  } catch {
    return [];
  }
}

export function isInstalled(id) {
  return getInstalledIds().includes(id);
}

export function installApp(id) {
  const ids = getInstalledIds();
  if (!ids.includes(id)) {
    ids.unshift(id);
    localStorage.setItem(KEY, JSON.stringify(ids));
  }
  return ids;
}

export function uninstallApp(id) {
  const ids = getInstalledIds().filter((x) => x !== id);
  localStorage.setItem(KEY, JSON.stringify(ids));
  return ids;
}