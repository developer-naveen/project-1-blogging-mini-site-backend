class BrowserUtilities {
    /**
     * GetBrowser
     */
    public static GetBrowser(): string {
        const userAgent = window.navigator.userAgent;
        const isBrowserIE = (userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident") !== -1) ? true : false;
        const isBrowserEdge = (userAgent.indexOf("Edge/") !== -1) ? true : false;
        const isBrowserChrome = (userAgent.indexOf("Chrome") !== -1) ? true : false;
        const isBrowserFirefox = (userAgent.indexOf("Firefox") !== -1) ? true : false;
        let isBrowserSafari;
        if (userAgent.indexOf("Safari") !== -1) {
            if ((userAgent.indexOf("Chrome") !== -1) || (userAgent.indexOf("Android") !== -1)) {
                isBrowserSafari = false;
            }
            else {
                isBrowserSafari = true;
            }
        }

        if (isBrowserChrome) {
            return "Chrome";
        }
        else if (isBrowserEdge) {
            return "Edge";
        }
        else if (isBrowserFirefox) {
            return "FireFox";
        }
        else if (isBrowserIE) {
            return "Internet Explorer";
        }
        else if (isBrowserSafari) {
            return "Safari";
        }
        else
            {return 'No browser';}
    }

    /**
     * IsOffline
     */
    public IsOffline(): boolean {
        return navigator.onLine
    }

    /**
     * IsOnline
     */
    public IsOnline(): boolean {
        return navigator.onLine;
    }

    /**
     * IsMacMachine
     */
    public IsMacMachine(): boolean {
        return window.navigator.platform === "MacIntel"
    }

    /**
     * IsUbuntuMachine
     */
    public IsUbuntuMachine(): boolean {
        return window.navigator.platform === "Linux"
    }

    /**
     * IsWindowsMachine
     */
    public IsWindowsMachine(): boolean {
        return window.navigator.platform === "Win"
    }

    /**
     * IsBrowser
     */
    public IsBrowser(): boolean {
        return false;
    }

    /**
     * GetUserLanguage
     */
    public GetUserLanguage(): string {
        return navigator.language
    }

    /**
     * IsChargerConnected
     */
    public IsChargerConnected(): boolean {
        return false
    }

    /**
     * getBatteryStatus
     */
    // public getBatteryStatus() {

    //     navigator.getBattery().then(a=> {console.log(a)})
    // }

    /**
     * IsCookieEnabled
     */
    public IsCookieEnabled() {
        return navigator.cookieEnabled
    }

    /**
     * IsCookieDisabled
     */
    public IsCookieDisabled() {
        return navigator.cookieEnabled
    }

    /**
     * IsJavaEnabled
     */
    public IsJavaEnabled() {
        return navigator.javaEnabled
    }
}