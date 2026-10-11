describe('scrolling', () => {
    it('should perform a smooth scroll down a page', async() => {

        /*let size = await browser.getWindowSize()
        console.log(size)   */

        let skipBtn = await $('[resource-id="org.wikipedia:id/fragment_onboarding_skip_button"]')
        await skipBtn.waitForEnabled({
            timeout:4000,
            timeoutMsg:'кнопка не доступна после 4 секунд ожидания'
        })
       await skipBtn.click()

       browser.action('pointer', {
        parameters: { pointerType: 'touch' } // "mouse" is default value, also possible: "pen" or "touch"
    })
        .move({x:360, y:1280})
        .down()
        .pause(300)
        .move({duration:2000, x:360, y:480})
        .up()
        .perform()

    await browser.pause(2000)
    });

    it('should perform a smooth scroll down a page with for ', async () => {

        let skipBtn = await $('[resource-id="org.wikipedia:id/fragment_onboarding_skip_button"]')
        await skipBtn.waitForEnabled({
            timeout:4000,
            timeoutMsg:'кнопка не доступна после 4 секунд ожидания'
        })
       await skipBtn.click()

       await browser.pause(1000)

       for( let i=0; i<4; i++){
        console.log(`Сейчас скролл номер ${i + 1}`)

        browser.action('pointer', {
        parameters: { pointerType: 'touch' } // "mouse" is default value, also possible: "pen" or "touch"
    })
    .move({x:360, y:1280})
    .down()
    .pause(300)
    .move({duration:1500, x:360, y:480})
    .up()
    .perform()

    await browser.pause(1000)
       }              
    });

    it.only('native Android scroll', async () => {
        let skipBtn = await $('[resource-id="org.wikipedia:id/fragment_onboarding_skip_button"]')
        await skipBtn.waitForEnabled({
            timeout:4000,
            timeoutMsg:'кнопка не доступна после 4 секунд ожидания'
        })
       await skipBtn.click()

       await browser.pause(1000)

       let targetElement = await $('android=new UiScrollable(new UiSelector().scrollable(true))' + '.scrollIntoView(new UiSelector().text("В новостях"))');

       await targetElement.waitForDisplayed({timeout:4000})
       console.log('Элемент найден!')
    
});
});