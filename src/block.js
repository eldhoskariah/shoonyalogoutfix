function blockIt(details) {
  return {
    cancel: true
  };
}

function filterUrls(urls) {
  if (chrome.webRequest.onBeforeRequest.hasListener(blockIt)) {
    chrome.webRequest.onBeforeRequest.removeListener(blockIt);
  }

    try{
      chrome.webRequest.onBeforeRequest.addListener(blockIt, {
        urls: urlsToBlock
      }, ['blocking']);
    } catch (e) {
    }
}

  urlsToBlock = ["https://trade.shoonya.com/NorenWClientPG/ValidateHsToken"];
  filterUrls();




