window.onload = function triggerEntityId() {
  var mboxes;
  if (window.location.pathname.endsWith("Partners_Promotions")) {
    mboxes = ["partner-mbox"];
  }
  if (window.location.pathname.endsWith("Dir-iyah")) {
    mboxes = ["attractions-mbox"];
  }
  if (window.location.pathname.indexOf("/en/see-do/destinations/") != -1) {
    var urlParts = window.location.pathname.split("/en/see-do/destinations/");
    if (urlParts.length > 1 && urlParts[1].includes("/")) {
      mboxes = [
        "attractions-mbox",
        "food-trending-mbox",
        "food-what-to-eat-mbox",
      ];
    } else {
      mboxes = ["city-mbox", "dest-map-mbox", "discover-mbox"];
    }
    if (window.location.pathname.endsWith("province")) {
      mboxes = ["region-mbox"];
    }
  } else if (window.location.pathname.indexOf("/en/do/") != -1) {
    mboxes = ["trending-mbox"];
  }
  if (window.location.pathname.indexOf("/adventure-activities") != -1) {
    mboxes = ["discover_adventure_mbox"];
  }
  if (window.location.pathname.indexOf("/lifestyle") != -1) {
    mboxes = ["discover_lifestyle_mbox"];
  }
  if (window.location.pathname.indexOf("/culture") != -1) {
    mboxes = ["discover_culture_mbox"];
  }
  if (window.location.pathname.indexOf("/family-activities") != -1) {
    mboxes = ["discover_family_mbox"];
  }

  if (mboxes && adobe && adobe.target) {
    for (let i = 0; i < mboxes.length; i++) {
      adobe.target.getOffer({
        mbox: mboxes[i],
        success: function (offers) {
          if (console && console.log) {
            console.log("pageload offer", offers);
          }
        },
        error: function (status, error) {
          if (console && console.log) {
            console.log("pageload offer error", error);
          }
        },
        timeout: 5000,
      });
    }
  }
};
