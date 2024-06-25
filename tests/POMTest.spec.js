import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('test', async ({page})=>{

    //Login
    const login=new LoginPage(page); 
    await login.gotoLoginPage();
    await login.login('standard_user' , 'secret_sauce');

    await page.waitForTimeout(1000);

    //Home Page
    const home = new HomePage(page);
    await expect(page.locator(".title")).toHaveText("Products");
    await home.addProductToCart('Sauce Labs Backpack');
    await page.waitForTimeout(3000);
    await home.gotoCart();

    // Cart Page
    const cart = new CartPage(page);
    await page.waitForTimeout(1000)
    const status = await cart.checkProductInCart('Sauce Labs Backpack')
    expect(await status).toBe(true);
})