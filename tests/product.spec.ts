import { ProductPage } from "../src/page/dashboard/product.page";
import { Product } from "../src/types/product.type";
import { test, expect } from "../src/fixtures/product.fixture";

//--------------------------------------------------------------------------------------------------

test('test_addproduct', async ({ productPage, context }) => {
    //Click button create product -> viết ở ProductPage
    await test.step('Click button create product', async () => {
        //Chọn menu product -> viết trong DashboardPage 
        await productPage.navigateToMenu("Products");
        await productPage.page.waitForTimeout(5 * 1000);
        await productPage.clickBtnCreateProduct();
        await productPage.page.waitForTimeout(5 * 1000);
    })

    await test.step('Create Product', async () => {
        const product: Product = {
            name: "iPhone 14 Pro Max 128GB - Nga",
            price: 10000,
            comparePrice: 12000,
            option: {
                name: "color",
                values: ['Space black', 'Silver', 'Gold', 'Deep Purple']
            }
        }
        //Create product
            await productPage.createProduct(product);
        
    })
    //Verify new product
    await test.step('Verify new product', async () => {
        await productPage.verifyProduct({ context });
    })
})


