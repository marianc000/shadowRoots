// roots1.js

function childRoots(root) {
    const roots = [...root.querySelectorAll('*')]
        .map(el => el.shadowRoot)
        .filter(o => o);

    return [...roots, ...roots.flatMap(childRoots)]
}

const allRoots = childRoots(document);

console.log(allRoots);
