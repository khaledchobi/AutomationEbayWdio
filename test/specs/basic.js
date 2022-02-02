

xdescribe('Ebay Product Search', () => {
    
    it.skip('should open the main url and verify the title', async () => {
      browser.url('https://webdriver.io/')
    
    //expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
    
    

    const subTitle = $('.hero__subtitle') 
    await expect(await subTitle).toHaveText('Next-gen browser and mobile automation test framework for Node.js')

    const getStartedBtn = $('a.button:nth-child(1)')
    await (await getStartedBtn).click()

    await browser.pause(5000)
    

    });
  
    it.skip('should validate page title', async () => {

        await browser.url("https://the-internet.herokuapp.com/login")

        expect(await browser.getTitle()).toEqual('The Internet')
        await expect(browser).toHaveTitle('The Internet')

        const user = $('#username') 
        const pass = $('#password') 
        const submitBtn = $('button[type="submit"]')
        const flash = $('#flash') 

        await (await user).setValue('tomsmith')
        await (await pass).setValue('SuperSecretPassword!')
        await browser.pause(3000)
        await (await submitBtn).click()

        await expect(flash).toBeExisting();
        await expect(flash).toHaveTextContaining('You logged into a secure area!');

        await browser.pause(5000)


        
    });
    
    
    
    
    it.skip('should login with valid credentials', async () => {

        await browser.url("https://the-internet.herokuapp.com/login")

        const inputUsername = $('#username') 
        const inputPassword = $('#password') 
        const btnSubmit = $('button[type="submit"]')
        const flashAlert = $('#flash') 

        await (await inputUsername).setValue('tomsmith')
        await (await inputPassword).setValue('SuperSecretPassword!')
        await (await btnSubmit).click()

        await expect(flashAlert).toBeExisting();
        await expect(flashAlert).toHaveTextContaining('You logged into a secure area!');

        await browser.pause(5000)
    });
  

});