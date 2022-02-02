import { expect as chaiExpect } from 'chai';
import WatchesPage from '../pages/watches.page';
import { waitAndClick } from '../utilities/helper';
//const { expect } = require("chai");
import allureReporter from '@wdio/allure-reporter'


describe('Watches Page', async () => {
    before(() => {
        WatchesPage.open();
        
        
        //console.log(WatchesPage.getWatchesCategoryListText());
    });
  
    it('should go to watches page link', async () => {

        await browser.pause(5000)
        await WatchesPage.fashionLink.moveTo();
        //await browser.pause(1000); // Implicit Wait
        //await WatchesPage.watchesLink.waitForDisplayed({timeout: 2000}); // Explicit Wait
        //await WatchesPage.watchesLink.click();

        await waitAndClick(await WatchesPage.watchesLink, 5000);

    });
    

    it('should verify the watches category list', async () => {

        //await WatchesPage.getWatchesCategoryListText();
        //await browser.pause(5000)

        //console.log(await WatchesPage.getWatchesCategoryListText()); // This is not solved yet

        // const link = $$('section[id="s0-16-12-0-1[0]-0-0"] ul li'); // 6 elements

        // await link.forEach(element => console.log(element.getText()+"("));


          
        //await browser.pause(5000)

        // const watchesCategoryList = await WatchesPage.getWatchesCategoryListText();
        // chaiExpect(watchesCategoryList).to.deep.equal([
        //     'Jewelry & Watches',
        // 'Watches, Parts & Accessories',
        // 'Watches',
        // 'Parts, Tools & Guides',
        // 'Watch Accessories',
        // 'Watches Mixed Lots',]);
    });
  

    it.skip('should show the banner container', async () => {
        //browser.url('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535');
        //WatchesPage.open();

        //const promoBanner = $('section.b-promobanner:nth-child(3)');
        //await expect(promoBanner).toBeDisplayed();
        
        await expect(WatchesPage.promoBanner).toBeDisplayed();

        // const link = await $$('section[id="s0-16-12-0-1[0]-0-0"] ul li'); // 6 elements
        // await link.forEach(element => console.log(element.getText()+"("));

        // const table = $$('section[id="s0-16-12-0-1[0]-0-0"] ul li'); 
        // const textFromTable = [];

        // await table.map((element) => {
        //     console.log("Text from table column : "+textFromTable.push(element.getText()));
        //     //textFromTable.push(element.getText())
        // })


        // const popularProductsName = $$('section[id="s0-16-12-0-1[0]-0-0"] ul li');
        // const popularProducts = $$("//ul[@id='homefeatured']/li");
        // if(popularProductsName.size() == 6){
        //     //System.out.println("PASSED..");
        // }else{
        //     //System.out.println("Failed..");
        // }
        // for(var element, popularProductsName){
        //     console.log("Product Name: " + element.getText());
        // }

        // const gender = ([
        //         'Jewelry & Watches',
        //     'Watches, Parts & Accessories',
        //     'Watches',
        //     'Parts, Tools & Guides',
        //     'Watch Accessories',
        //     'Watches Mixed Lots',]);

        // await WatchesPage.selectGender('Jewelry & Watches',
        // 'Watches, Parts & Accessories',
        // 'Watches',
        // 'Parts, Tools & Guides',
        // 'Watch Accessories',
        // 'Watches Mixed Lots');



        console.log(await browser.getUrl());

    });

    it.skip('should get text a menu link - JS Function', async () => {
        const text = await $$(function() { // Arrow function is not allowed here.
            // this is Window https://developer.mozilla.org/en-US/docs/Web/API/Window
            // TypeScript users may do something like this
            // return (this as Window).document.querySelectorAll('section[id="s0-16-12-0-1[0]-0-0"] ul')
            return this.document.querySelectorAll('section[id="s0-16-12-0-1[0]-0-0"] ul'); // Element[]
        })[0];
        console.log(await text.$$('li')[0].$('a').getText()); 
        console.log(await text.$$('li')[1].$('strong').getText()); 
        console.log(await text.$$('li')[2].$('a').getText()); 
        console.log(await text.$$('li')[3].$('a').getText()); 
        console.log(await text.$$('li')[4].$('a').getText()); 
        console.log(await text.$$('li')[5].$('a').getText()); 

        console.log(await browser.getUrl());

        console.log(await text.$$('li')[0].getText()); 
        console.log(await text.$$('li')[1].getText()); 
        console.log(await text.$$('li')[2].getText()); 
        console.log(await text.$$('li')[3].getText()); 
        console.log(await text.$$('li')[4].getText()); 
        console.log(await text.$$('li')[5].getText()); 

        console.log(await browser.getUrl());

        
        
    });

    it('should show the banner title', async () => {
        allureReporter.addFeature('Banner Title');

        //const infoTitle = $('section.b-promobanner:nth-child(3) > div:nth-child(1) > h2:nth-child(1)');
        //await expect(infoTitle).toHaveTextContaining('Invest in quality time');
        //await expect(infoTitle).toHaveText('Invest in quality time');

        await expect(WatchesPage.infoTitle).toHaveTextContaining('They deserve to be spoiled');
        
        

    });


    it.skip('should contain link on banner button and verify its clickable', async () => {
        
        //const shopButton = $('section.b-promobanner:nth-child(3) > div:nth-child(1) > a:nth-child(3)');
        //await expect(shopButton).toHaveLinkContaining('/fashion/');
        //await expect(shopButton).toBeClickable();

        await expect(WatchesPage.shopButton).toHaveLinkContaining('/fashion/');
        await expect(WatchesPage.shopButton).toBeClickable();

        //await (shopButton).click();

        await browser.pause(5000)
    
    });

    it.skip('should click on the shop button and verify the new url', async () => {

        //const shopButton = $('section.b-promobanner:nth-child(3) > div:nth-child(1) > a:nth-child(3)'); 
        //await shopButton.click();

        await WatchesPage.shopButton.click();

        const url = await browser.getUrl();

        //await expect(url).to.include('/fashion/');

        chaiExpect(url).to.include('/fashion/');

        await expect(browser).toHaveUrl('https://www.ebay.com/e/fashion/watch-coupon-011922');

        await browser.pause(5000);

    });


    // after(() => {
        
    //     browser.url('https://www.ebay.com/');
    //     browser.pause(5000);
        
    // });
    
    // afterEach(() => {
        
    //     browser.refresh();
    //     browser.pause(5000);
        
    // });

  });
