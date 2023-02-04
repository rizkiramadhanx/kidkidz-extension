export const redirect = (listWeb: string[], containOnUrl: string[]) => {
  listWeb.map((e) => {
    if (window.location.origin.includes(e)) {
      // modal (web terlarang akan redirect)
      location.replace("chrome-extension://" + chrome.runtime.id + "/redirect.html");
    }
  });

  containOnUrl.map((e) => {
    if (window.location.href.includes(e)) {
      // url mengandung kata2 terlarang || lanjutkan or redirect
      // window.location.replace("https://youtube.com");
    }
  });
};
