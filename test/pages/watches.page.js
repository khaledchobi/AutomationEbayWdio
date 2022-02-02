//import { ChainablePromiseElement } from 'webdriverio'; 

import Page from './page';

class WatchesPage extends Page {
  get promoBanner() {
    return $('section.b-promobanner:nth-child(3)'); // findElement
  }
  get infoTitle() {
    return $('section.b-promobanner:nth-child(3) > div:nth-child(1) > h2:nth-child(1)');
  }
  get shopButton() {
    return $('section.b-promobanner:nth-child(3) > div:nth-child(1) > a:nth-child(3)');
  }

  get watchesCategoryList() {
    return $$('section[id="s0-16-12-0-1[0]-0-0"] ul li'); // 6 elements
  }

  get gender_radio() { return $$('section[id="s0-16-12-0-1[0]-0-0"] ul li'); }


  get fashionLink() {
    return $$('.hl-cat-nav__js-tab a[href*="Fashion"]')[0];
  }
  get watchesLink() {
    return $('.hl-cat-nav__sub-cat-col a[href*="Watches-Parts"]');
  }

  open() {
    super.open('/');
  }

  // getWatchesCategoryListText() {
  //   return this.watchesCategoryList.filter(element => {
  //     console.log(element.getText());
  //   });
    
  // }



  async getWatchesCategoryListText() {
    const watchesList = await [];
    await this.watchesCategoryList.map((element) =>
      watchesList.push(element.getText())
    );
    return watchesList;
  }



  async selectDropdown(element, value){

    for(let i=0; i < element.length; i++){
        const elem = await (element[i]).getText('value');
        if (elem === value){
            // await (element[i]).click()
            // break;
            console.log(await (element[i].getText()));
            
        }
    }
  }
    async selectGender(gender) {
      await this.selectDropdown(await this.gender_radio, gender)

  }

  




}

export default new WatchesPage();