const homePage = require('../pageobjects/homePage');
const basePage = require('../pageobjects/basePage');
const searchResultsPage = require('../pageobjects/searchResultsPage');
const ProductDescriptionPage = require('../pageobjects/productDescriptionPage');

var parentWindowId;
var price;
describe('Place order journey',async()=>{

    it('open amazon url',async()=>{
        
        await basePage.navigateToUrl();
        await expect(browser).toHaveUrl("https://www.amazon.in/");
    })

    it('validate search keyword',async()=>{
        await homePage.searchForGivenKeyword('Bean Bag');
        let elem = await $("#twotabsearchtextbox");
        await expect(elem).toHaveValue('Bean Bag');
    })

    it('validate search keyword',async()=>{
        parentWindowId= await searchResultsPage.clickOnProductFromSearchResults();
         let name = await $("#nav-logo-sprites");
         await expect(name).toBeDisplayed();
         await browser.pause(2000);
    })

    it("validate add cart",async()=>{
        price = await ProductDescriptionPage.addProductTocartAndReturnThePrice(parentWindowId);
        let elem = await $("(//a[@class='a-link-normal'])[2]");
        await browser.pause(2000);
        await expect(elem).toBeDisplayed();
    })

    it("validate goTocart",async()=>{
        await ProductDescriptionPage.navigateToCartPage();
        let elem = await $("(//span[@class='a-color-secondary'])[2]");
        await browser.pause(2000);
        await expect(elem).toHaveText("Price");
    
    })
   
    it("validate cart price",async()=>{
        let elem=await $("(//div[@data-name='Subtotals']//span[@class='a-size-medium a-color-base sc-price sc-white-space-nowrap'])[1]");
        await browser.pause(2000);
        await expect(elem).toHaveTextContaining(price);
        
        
    })
})






