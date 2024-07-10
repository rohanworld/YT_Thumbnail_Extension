document.addEventListener('contextmenu', function(event) {
    let el = event.target;
    while (el && el.tagName !== 'A') {
      el = el.parentNode;
    }
    if (el && el.href && el.href.includes('youtube.com/watch')) {
      chrome.runtime.sendMessage({showContextMenu: true});
    }
  });
  