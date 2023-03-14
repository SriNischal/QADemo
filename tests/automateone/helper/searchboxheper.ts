import { Page } from "@playwright/test";
import search_page from "../pages/search_page";
let search : search_page;
let page : Page;
export class searchtest{
    constructor(public page: Page){
    search = new search_page(page);
}
    async searchtest() {
        const search = new search_page(page);
        await search.gotourl();
        await search.clickonsearchbtn();
        await search.urlvalidation();
        await search.searchtitlevalidation();
        await search.searchmessagevalidation();
        await search.textboxclicking();
        await search.entertextbox();
        await search.submitbtn();
        await search.searchtextpagetitle();
    }
}