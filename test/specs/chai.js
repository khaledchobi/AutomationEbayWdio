import { expect as chaiExpect, assert } from 'chai';
import 'chai/register-should';
//const { expect } = require("chai");


xdescribe('Watches Page', () => {
    // before(() => {
    //   WatchesPage.open();
    //   WatchesPage.fashionLink.moveTo();
    //   // browser.pause(1000); // Implicit Wait
    //   waitAndClick(WatchesPage.watchesLink, 10000);
    // });
  
    
  
    it.skip('should show the banner container', async () => {

        browser.url('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535');
        const promoBanner = $('section._FFFFFF01718F');

        await expect(promoBanner).toBeDisplayed()


    });

    it.skip('should show the banner title', async () => {

        const infoTitle = await $('section.b-promobanner:nth-child(3) > div:nth-child(1) > h2:nth-child(1)');
        const infoTitleText = await infoTitle.getText();


        await expect(infoTitle).toHaveTextContaining('Invest in quality time');
        //await expect(infoTitle).toHaveText('Invest in quality time');
        chaiExpect(infoTitleText).to.not.be.empty;

        //infoTitle.should.not.be.empty;

        infoTitleText.should.not.be.empty;
        assert.isNotEmpty(infoTitleText);

    });


    it.skip('should contain link on banner button and verify its clickable', async () => {
        
        const shopButton = $('section.b-promobanner:nth-child(3) > div:nth-child(1) > a:nth-child(3)');
        const tag = await shopButton.getTagName();

        await expect(shopButton).toHaveLinkContaining('/fashion/');
        await expect(shopButton).toBeClickable();

        chaiExpect(tag).to.equal('a');
        tag.should.be.equal('a');

        //await (shopButton).click();

        await browser.pause(5000)
    
    });

    it.skip('should click on the shop button and verify the new url', async () => {

        const shopButton = $('section.b-promobanner:nth-child(3) > div:nth-child(1) > a:nth-child(3)'); 
        await shopButton.click();

        const url = await browser.getUrl();

        //await expect(url).to.include('/fashion/');

        chaiExpect(url).to.include('/fashion/');

        await expect(browser).toHaveUrl('https://www.ebay.com/e/fashion/watch-coupon-011922');

        await browser.pause(5000);

    });


  
    

  });
