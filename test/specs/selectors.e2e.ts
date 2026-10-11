describe('Selectors', () => {
    it('should find element by accessibility id', async () => {
        let onboardingSteps = await $('~Шаг 1 из 4')
        await onboardingSteps.saveScreenshot('./screenshots/accessibility.png')
    })

    it('should find element by id', async () => {
        let skip = await $("[resource-id = 'org.wikipedia:id/fragment_onboarding_skip_button']")
        await skip.saveScreenshot('./screenshots/skip.png')
    })

    it('should find element by class name', async () => {
        let globeImage = await $("android.widget.ImageView")
        await globeImage.saveScreenshot('./screenshots/globeImage.png')
    })

    it('should find element by uiselector', async () => {
        let continueBtn = await $(`android=new UiSelector().text("Продолжить")`)
        await continueBtn.saveScreenshot('./screenshots/continueBtn.png')
    })
    
    it.only('should find element xPatch', async () => {
        let otherText = await $('//android.widget.TextView[contains(@text, "Свободная")]')
        await otherText.saveScreenshot('./screenshots/otherText.png')
    })
})