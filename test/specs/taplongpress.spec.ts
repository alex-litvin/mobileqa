import TapLongPress from '../pageobjects/taplongpress'

describe('tap/long press', () => {
    it('tap/long press', async() => {
        await TapLongPress.tapSkipBtn()
        await TapLongPress.longSearchPress()

        await expect(TapLongPress.searchField).toBeDisplayed()
        await expect(TapLongPress.searchField).toHaveText('Поиск по Википедии')
        
    });
});