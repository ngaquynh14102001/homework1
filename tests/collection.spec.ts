import { test, expect } from "../src/fixtures/collection.fixture";

test('test_create_collections', async ({ collectionPage, createCollectionPage, context }) => {
    //Click btn Create Collection
    await test.step('Click btn Create Collection', async () => {
        await collectionPage.clickBtnCreateCollection();
        await collectionPage.page.waitForTimeout(3 * 1000);

    })
    //Create Collection
    await test.step('Create Collection', async () => {
        await createCollectionPage.createCollection();
        await createCollectionPage.page.waitForTimeout(3 * 1000);

    })
    //Add Product to Collection
    await test.step('Add Product to Collection', async () => {
        await createCollectionPage.addProductToCollection();
        await createCollectionPage.page.waitForTimeout(3 * 1000);

    })
    //--------------------------------------------------------------------------------------------------
    //Verify collection
    await test.step('Verify collection', async () => {
        await createCollectionPage.verifyCollection(context);
    })
})