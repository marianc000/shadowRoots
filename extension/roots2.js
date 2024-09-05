// roots2.js

function childRoots(root) {
    const roots = [...root.querySelectorAll('*')]
        .map(el => chrome.dom.openOrClosedShadowRoot(el))
        .filter(o => o);

    return [...roots, ...roots.flatMap(childRoots)]
}

const allRoots = childRoots(document.body);

console.log(allRoots);