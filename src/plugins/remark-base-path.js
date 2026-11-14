
export function remarkBasePath({ base = '' } = {}) {
  const normalizedBase = base.replace(/\/+$/, '');

  return (tree) => {
    function visit(node) {
      if (!node || typeof node !== 'object') return;

      if (
        normalizedBase &&
        node.type === 'image' &&
        typeof node.url === 'string' &&
        /^\/(images|icons)\//.test(node.url) &&
        !node.url.startsWith(`${normalizedBase}/`)
      ) {
        node.url = `${normalizedBase}${node.url}`;
      }

      if (Array.isArray(node.children)) {
        node.children.forEach(visit);
      }
    }

    visit(tree);
  };
}
