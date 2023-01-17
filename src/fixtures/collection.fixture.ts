import { test as base, expect } from "@playwright/test"
import { LoginPage } from "../page/authentication/login.page"
import { CreateCollectionPage } from "../page/dashboard/collection-child.page";
import { CollectionPage } from "../page/dashboard/collection.page"

const test = base.extend<{
    collectionPage: CollectionPage,
    createCollectionPage: CreateCollectionPage
}>({
    collectionPage: async ({ page }, use) => {
        //before
        const loginPage = new LoginPage(page);
        const collectionPage = new CollectionPage(page);

        await test.step('Login Page', async () => {
            await loginPage.login();
            await loginPage.page.waitForTimeout(3 * 1000);

            await collectionPage.navigateToMenu("Products");
            await collectionPage.navigateToMenu("Collections");
            await page.waitForTimeout(3 * 1000);
        })
        //use
        await use(collectionPage);

        //after: delete collection
    },
    createCollectionPage: async ({ page }, use) => {
        const createCollectionPage = new CreateCollectionPage(page);
        //use
        await use(createCollectionPage);

        //after
        await createCollectionPage.navigateToMenu("Products")
        await createCollectionPage.navigateToMenu("Collections");
        await createCollectionPage.page.waitForTimeout(3*1000);
        await createCollectionPage.deleteCollection();
    }
})

export {
    test,
    expect
}