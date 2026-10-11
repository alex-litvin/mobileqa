describe('waits', () => {
    it('should demonstrate basic explicit waits', async() => {
        let skipBtn = await $('[resource-id="org.wikipedia:id/fragment_onboarding_skip_button"]')
        await skipBtn.waitForEnabled({
            timeout:4000,
            timeoutMsg:'кнопка не доступна после 4 секунд ожидания'
        })
       await skipBtn.click()

       let search = await $('[resource-id="org.wikipedia:id/search_container"]')
       await search.waitForExist({
            timeout:4000,
            timeoutMsg:'поисковый контейнер не появился после 4 секунд ожидания'
        })
       await search.click()

       let searchInput = await $('[resource-id="org.wikipedia:id/search_src_text"]')
       await searchInput.waitForDisplayed({
         timeout:4000,
         interval:100,
         timeoutMsg:'поле поиска не появилось после 4 секунд'})
       await searchInput.setValue('WebdriverIO')
      
    });

    it.only('waitUntil()', async() => {
         let skipBtn = await $('[resource-id="org.wikipedia:id/fragment_onboarding_skip_button"]')
       await skipBtn.click()

       let search = await $('[resource-id="org.wikipedia:id/search_container"]')
       await search.click()

       let searchInput = await $('[resource-id="org.wikipedia:id/search_src_text"]')
       await searchInput.setValue('Реал Мадрид')

       let firstResultTitle = $('[resource-id="org.wikipedia:id/page_list_item_title"]')

       await browser.waitUntil(
        async()=>{
            let actualText = await firstResultTitle.getText()
            console.log('Текущий текст в поиске', actualText)
            return actualText.includes('Мадрид')

       }, { 
        timeout:5000, 
        timeoutMsg:'Заголовок не содержит слово Мадрид', 
        interval:200 
    })

        await firstResultTitle.click()
    });
   
});