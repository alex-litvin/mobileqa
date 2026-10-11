class DeviceControlPage{
    private get skipBtn () { return $('[resource-id="org.wikipedia:id/fragment_onboarding_skip_button"]') }
    private get search () { return $('[resource-id="org.wikipedia:id/search_container"]') }
    public get searchField () { return $('[resource-id="org.wikipedia:id/search_src_text"]')}

    async openSearch(){
        await this.search.click()
    }
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
}

export default new DeviceControlPage()