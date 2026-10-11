import DeviceControlPage from '../pageobjects/deviceControl'

describe('Android Device State & System Keys', () => {
    
    it('should restore state after going to background', async() => {
        await DeviceControlPage.tapSkipBtn()
        await DeviceControlPage.openSearch()
        await DeviceControlPage.searchField.setValue('Google')

        await browser.background(5)

        await expect(DeviceControlPage.searchField).toHaveText('Google')
    });

    it('should close search using system Back button', async() => {
        await DeviceControlPage.tapSkipBtn()
        await DeviceControlPage.openSearch()

        await browser.pressKeyCode(4)
        await browser.pressKeyCode(4)

        await expect(DeviceControlPage.searchField).not.toBeDisplayed()
    });

    it('should change device orietation beetween Portrait and Landscape', async() => {
        await DeviceControlPage.tapSkipBtn()

        await browser.setOrientation('LANDSCAPE')

        let currentOrientation = await browser.getOrientation()
        await expect(currentOrientation).toBe('LANDSCAPE')

        await browser.setOrientation('PORTRAIT')

        let restoredOrientation = await browser.getOrientation()
        await expect(restoredOrientation).toBe('PORTRAIT')
    });

    it('should tagle mobile data network connection ', async() => {
        await DeviceControlPage.tapSkipBtn()

        await browser.toggleAirplaneMode(true)
        await browser.pause(2000)

        await browser.toggleAirplaneMode(false)
        await browser.pause(3000)

    });

    it('should verify soft keyboard visibility and hide it', async() => {
        await DeviceControlPage.tapSkipBtn()
        await DeviceControlPage.openSearch()
        await DeviceControlPage.searchField.click()

        let isKeyboardVisible = await browser.isKeyboardShown()
        await expect(isKeyboardVisible).toBe(true)

        await browser.hideKeyboard()

        let isKeyboardHidden = await browser.isKeyboardShown()
        await expect(isKeyboardHidden).toBe(false)        

    });
 
});