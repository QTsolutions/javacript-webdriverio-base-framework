module.exports = new class Basepage{

    async navigateToUrl(){
        await browser.url('/');
        browser.maximizeWindow();
    }
}