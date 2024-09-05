// sw.js

chrome.action.onClicked.addListener(({ id }) => {
  chrome.scripting.executeScript({
    target: { tabId: id },
    files: ["roots2.js"],
  })
});
