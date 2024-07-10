chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "downloadThumbnail",
        title: "Download Thumbnail",
        contexts: ["link"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "downloadThumbnail") {
        const url = info.linkUrl;
        const videoId = new URL(url).searchParams.get("v");
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

        chrome.downloads.download({
            url: thumbnailUrl,
            filename: `${videoId}_thumbnail.jpg`
        });
    }
});