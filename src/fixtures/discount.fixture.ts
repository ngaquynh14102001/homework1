import { test as base, expect } from "@playwright/test"
import { LoginPage } from "../page/authentication/login.page"
import { CheckOutProductPage } from "../page/dashboard/checkout-product.page";
import { DiscountPage } from "../page/dashboard/discount.page";
import { CreateDiscountCodePage } from "../page/dashboard/discount-child.page";

const test = base.extend<{
    discountPage: DiscountPage,
    createDiscountCodePage: CreateDiscountCodePage
    checkoutProductPage: CheckOutProductPage
}>({
    discountPage: async ({ page }, use) => {
        //before
        const loginPage = new LoginPage(page);
        const discountPage = new DiscountPage(page);

        await test.step('Login Page', async () => {
            await loginPage.login();
            await page.waitForTimeout(5 * 1000);
        });

        await test.step('Chon Discounts', async () => {
            await discountPage.navigateToMenu("Discounts");
            await discountPage.navigateToMenu("Discounts");
            await page.waitForTimeout(3 * 1000);
        })
        //use
        await use(discountPage);

        //after: delete collection
    },
    createDiscountCodePage: async ({ page }, use) => {
        const createDiscountCodePage = new CreateDiscountCodePage(page);
        //use
        await use(createDiscountCodePage);

        //after

        await createDiscountCodePage.page.waitForTimeout(3 * 1000);
        // await createDiscountCodePage.deleteDiscountCode();
    },
    checkoutProductPage: async ({ page }, use) => {
        const checkoutProductPage = new CheckOutProductPage(page);
        //use

        await use(checkoutProductPage);

        //after

        await checkoutProductPage.page.waitForTimeout(3 * 1000);
        // await createDiscountCodePage.deleteDiscountCode();
    },
})

export {
    test,
    expect
}