describe('basic elements', () => {
    it('should demonstrate basic elements actions ', async () => {
       //1)click()
       let skipBtn = await $('[resource-id="org.wikipedia:id/fragment_onboarding_skip_button"]')
       await skipBtn.click()

       await browser.pause(1500)

       //2)переход к поиску
       let search = await $('[resource-id="org.wikipedia:id/search_container"]')
       await search.click()
       await browser.pause(2000)

       //3. ввод текста полностью
       let searchInput = await $('[resource-id="org.wikipedia:id/search_src_text"]')
       await searchInput.setValue('WebdriverIO')
       //4. получить текст
       let currentText1 = await searchInput.getText()
       console.log(`текс такойто: ${currentText1}`)
       //5. очистка поля
       await searchInput.clearValue()
       console.log('поле очищено')
       //6.проверка видимости елемента
       await searchInput.setValue('real madrid')
       let firstElement = $('//androidx.recyclerview.widget.RecyclerView[@resource-id="org.wikipedia:id/search_results_list"]/android.view.ViewGroup[1]')
       let isVisible = await firstElement.isDisplayed()
       console.log('Елемент отображается: ', isVisible)
       //7. взять координаты елемента
       let location = await firstElement.getLocation()
       console.log(`Координаты: x=${location.x}, y=${location.y}`)

    })
})