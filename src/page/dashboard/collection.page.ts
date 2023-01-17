import { test, Locator, Page, BrowserContext, expect } from "@playwright/test";
import { LoginPage } from "../authentication/login.page";
import { CreateCollectionPage } from "./collection-child.page";
import { DashBoard } from "./dashboard.page";

export class CollectionPage extends DashBoard {
    inputCollectionName: Locator;
    collectionType: Locator;
    btnSaveCollection: Locator;
    btnAddProduct: Locator;
    inputSearchProduct: Locator;
    checkboxProduct: Locator;
    btnSaveAddProduct: Locator;
    constructor(page: Page) {
        super(page);
    }
    async clickBtnCreateCollection() {
        await this.page.click("//span[normalize-space()='Create collection']");
        await this.page.waitForTimeout(5 * 1000);
    }
    
   
}