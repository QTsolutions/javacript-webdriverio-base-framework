module.exports = new class SearchResultsPage{

    get productFromSearchResults(){
        return $$("//div[@data-component-type='s-search-result']//img")[7];
    }

    async clickOnProductFromSearchResults(){

        let parentWindowId = await browser.getWindowHandle();   //it will return parent window id
        await this.productFromSearchResults.click();
        return parentWindowId;
    }
}