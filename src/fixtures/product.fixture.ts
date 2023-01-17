import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../page/authentication/login.page";
import { ProductPage } from "../page/dashboard/product.page";

const test = base.extend<{ productPage: ProductPage }>({
    productPage: async ({ page }, use) => { //khai báo tên fixture
        //Login vào dashboard

        const loginPage = new LoginPage(page);
        const productPage = new ProductPage(page);
        await loginPage.login();
        await loginPage.page.waitForTimeout(5 * 1000);

        await productPage.navigateToMenu("Products");
        await page.waitForLoadState("networkidle");
        await productPage.clickBtnCreateProduct();
        await page.waitForLoadState("networkidle");

        //use
        await use(productPage);

        //After     
        await productPage.navigateToMenu("Products");
        await productPage.page.waitForTimeout(5 * 1000);
        await productPage.deleteNewProduct();

    }
})

export {
    test,
    expect,
}