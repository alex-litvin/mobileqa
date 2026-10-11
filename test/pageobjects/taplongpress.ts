
class TapLongPress {
    //selectors
    private get skipBtn () { return $('[resource-id="org.wikipedia:id/fragment_onboarding_skip_button"]') }
    private get search () { return $('[resource-id="org.wikipedia:id/search_container"]') }
    public get searchField () { return $('[resource-id="org.wikipedia:id/search_src_text"]')}
    
    //methods
    

    async tapSkipBtn(){
        await this.skipBtn.waitForEnabled({
            timeout:4000,
            timeoutMsg:'кнопка не доступна после 4 секунд ожидания'
        })

    let location = await this.skipBtn.getLocation() 
    await browser.action('pointer', {
        parameters: { pointerType: 'touch' } 
    })
        .move({x:Math.round(location.x), y:Math.round(location.y)})
        .down()
        .pause(100)
        .up()
        .perform()   

    }

    async longSearchPress(){
        await this.search.waitForExist({
            timeout:4000,           
        })

        let searchLocation = await this.search.getLocation()
        console.log('Выполняю long press(удержание 5 сек)')

        await browser.action('pointer', {
        parameters: { pointerType: 'touch' } 
    })
        .move({x:Math.round(searchLocation.x), y:Math.round(searchLocation.y)})
        .down()
        .pause(5000)
        .up()
        .perform()
    }
}
export default new TapLongPress()