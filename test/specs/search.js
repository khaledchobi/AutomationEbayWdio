import SearchPage from '../pages/search.page';
import { waitForTextChange } from '../utilities/helper';
import resources from '../resources';
import allureReporter from '@wdio/allure-reporter'

describe('Ebay Product Search', async () => {
    it('should open the main url and verify the title', async () => {
      
        //browser.url('https://www.ebay.com/');
        await SearchPage.open();
        //expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay')
        
        expect(browser).toHaveTitle(await resources.homeTitle); // came from index.js
      
        //SearchPage.open();
      //expect(browser).toHaveTitle(resources.homeTitle);

      //await browser.pause(5000)
      
    });

    it('should search for a product and verify the search text value', async () => {
      allureReporter.addSeverity('Critical');
        //const searchInput = $('#gh-ac');
        //const searchBtn = $('#gh-btn'); 

        //await searchInput.setValue('Laptop');
        //await searchInput.addValue('Laptop');

        await SearchPage.searchInput.addValue('Laptop');

        //await searchBtn.click();
        await SearchPage.searchBtn.click();

        //expect(searchInput).toHaveValue('Laptop');
        expect(SearchPage.searchInput).toHaveValue('Laptop');

        await browser.pause(5000);
    
        
      });

      it('should redirect to a new page and verify the title', async () => {
        //expect(browser).toHaveTitle('Laptop | eBay');
        expect(browser).toHaveTitle(await resources.laptopTitle); // came from index.js
      });

      it('should update the search category', async () => {

        allureReporter.addFeature('Search category');

        //const category = $('#gh-cat > option:nth-child(1)');

        await browser.waitUntil(
          async function () {
            return await SearchPage.category.getText() === 'PC Laptops & Netbooks';
          },
          { timeout: 5000 }
        );

        // await browser.waitUntil(
        //   async () => (await SearchPage.category.getText()) === 'PC Laptops & Netbooks',
        //   {
        //       timeout: 5000,
        //       timeoutMsg: 'expected text to be different after 5s'
        //   }
        // );
        
        //await waitForTextChange(await SearchPage.category, 'PC Laptops & Netbooks', 10000);
        //expect(category).toHaveText('PC Laptops & Netbooks');

        expect(SearchPage.category).toHaveText('PC Laptops & Netbooks');

      });
  
    
  });