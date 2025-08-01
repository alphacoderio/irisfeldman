function redirectobmobile(redirectPage) {
    // Define your mobile site's URL
    const mobileSiteURL = `/mobile/${redirectPage}`;

    // Regular expression to detect mobile user agents
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);

    // Redirect if it's a mobile device
    if (isMobileDevice) {
        window.location.href = mobileSiteURL;
    }
}