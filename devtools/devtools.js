chrome.devtools.panels.create(
    "Demo panel",
    "../assets/sixteen.png",
    "/devtools/demo_panel.html",
    function (panel) {
      console.log("Panel created: ", panel);
    }
);

// Create a new sidebar in elements panel
// Sidebars can only be created in elements panel or sources panel
chrome.devtools.panels.elements.createSidebarPane("Font Properties",
  function(sidebar) {
    sidebar.setPage("/devtools/Sidebar.html");
    sidebar.setHeight("8ex");
  }
);

// Logs all network requests happening in the current tab
chrome.devtools.network.onRequestFinished.addListener(
  function(request) {
   console.log("Request: ",request)         
  }
);