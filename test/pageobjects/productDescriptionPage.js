module.exports = new class ProductDescriptionPage{

    get productPrize(){
        return $("//div[@id='corePrice_feature_div']//span[@class='a-price-whole']");
    }

    get addToCartBtn(){
        return $('#add-to-cart-button');
    }

    get goToCartBtn(){
        return $('#sw-gtc');
    }

    async addProductTocartAndReturnThePrice(parentWindowId){
        let allWindowHandle = await browser.getWindowHandles();
        for(let i =0; i<allWindowHandle.length;i++){
            if(allWindowHandle[i]!=parentWindowId){
                await browser.switchToWindow(allWindowHandle[i]);
                break;
            }
        }

        let price =await this.productPrize.getText();
        await this.addToCartBtn.click();
        return price;
    }

    async navigateToCartPage(){
        await this.goToCartBtn.click();
    }
}