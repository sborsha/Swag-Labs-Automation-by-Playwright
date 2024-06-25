exports.CartPage =
class CartPage{
    constructor(page){
        this.page = page;
        this.NoOfProducts = "//*[@class='cart_item_label']/a/div";
    }
    async checkProductInCart(productName){
        const productsInCart = await this.page.$$(this.NoOfProducts);
        for(const product of productsInCart){
            console.log(await product.textContent());
            if(productName === await product.textContent()){
                return true;
                break;
            }
        }
    }
}