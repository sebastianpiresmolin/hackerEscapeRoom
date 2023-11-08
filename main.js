document.getElementById("headerButton").addEventListener('click', function() {
    let menuOverlay = document.getElementById("menuOverlay");
    let popinMenu = document.getElementById("popinMenu");

    menuOverlay.style.display = 'block'; // This shows my white overlay
    popinMenu.style.display = 'flex'; // This shows my popin menu

    setTimeout(function() {
        menuOverlay.style.opacity = 1;
        popinMenu.style.opacity = 1;
    }, 10);

    document.documentElement.style.overflowY = 'hidden'; // This disables the ability to scroll behind the menu
});

document.getElementById("closebtn").addEventListener('click', function() {
    let menuOverlay = document.getElementById("menuOverlay");
    let popinMenu = document.getElementById("popinMenu");

    menuOverlay.style.opacity = 0;
    popinMenu.style.opacity = 0;
    
    setTimeout(function() {
        menuOverlay.style.display = 'none'; // This hides my white overlay
        popinMenu.style.display = 'none'; // This hides my popin menu
    }, 800);
    
    document.documentElement.style.overflowY = 'auto'; // This enables the ability to scroll again
});
