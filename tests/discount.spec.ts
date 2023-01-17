
import { DiscountPage } from "../src/page/dashboard/discount.page";
import { CreateDiscountCodePage } from "../src/page/dashboard/discount-child.page";
import { CheckOutProductPage} from "../src/page/dashboard/checkout-product.page";
import { test } from "../src/fixtures/discount.fixture";

test('test_create_discountcode', async ({discountPage, createDiscountCodePage, checkoutProductPage, context }) => {
    await test.step('Click button Create Discount', async () => {
        await discountPage.clickBtnCreateDiscount();
        await discountPage.page.waitForTimeout(3 * 1000);
    })

    await test.step('Create Discount Code', async () => {
        await createDiscountCodePage.createDiscountCode();
        await createDiscountCodePage.page.waitForTimeout(3 * 1000);
    })

    await test.step('Verify discount code', async () => {
        await createDiscountCodePage.page.goto("https://16-clothing.onshopbase.com/admin/discounts")
        await createDiscountCodePage.page.waitForTimeout(3 * 1000);
        await createDiscountCodePage.verifyDiscountCode();
        await createDiscountCodePage.page.waitForTimeout(3 * 1000);
    })
    await test.step('Checkout Product with discount code', async () => {
        await checkoutProductPage.buyProduct();
        await checkoutProductPage.fillInfo();
        await checkoutProductPage.fillShipping();
        await checkoutProductPage.fillPayment();

    })
    await test.step('Update DiscountCode', async () => {
        await discountPage.page.goto("https://16-clothing.onshopbase.com/admin/discounts")
        await discountPage.page.waitForTimeout(3 * 1000);
        await createDiscountCodePage.updateDisountCode('OCG_2023_TALENT');
    })
    await test.step('Verify Status Discount Code Updated', async () => {
        await createDiscountCodePage.verifyStatusDiscountCodeUpdate();
    })
})