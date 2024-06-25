exports.HomePage =
class HomePage{
    constructor(page){
        this.page=page;
        this.homepageTitle = '.title';
        this.productList = "//*[@class='inventory_list']/div/div/div/a";
        this.addtoCart = "#add-to-cart";
        this.cartBtn = ".shopping_cart_link";

    }

    async addProductToCart(productName){
        const productList = await this.page.$$(this.productList);
        for(const product of productList){
            if (productName ===await product.textContent()){
                await product.click()
                break;
            }
        }
        await this.page.on('dialog', async dialog=>{
            if (dialog.message().includes('added')){
                await dialog.accept();
            }
        })
        await this.page.locator(this.addtoCart).click();
    }
    async gotoCart(){
        await this.page.locator(this.cartBtn).click();
    }
    
}