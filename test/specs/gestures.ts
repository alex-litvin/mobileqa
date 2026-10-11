describe('gestures', () => {
    it.skip('tap', async() => {
     let skipBtn = await $('[resource-id="org.wikipedia:id/fragment_onboarding_skip_button"]')
        await skipBtn.waitForEnabled({
            timeout:4000,
            timeoutMsg:'кнопка не доступна после 4 секунд ожидания'
        })

        let location = await skipBtn.getLocation()

        await browser.action('pointer', {
        parameters: { pointerType: 'touch' } 
    })
        .move({x:Math.round(location.x), y:Math.round(location.y)})
        .down()
        .pause(100)
        .up()
        .perform()


    //LONG PRESS

        let search = await $('[resource-id="org.wikipedia:id/search_container"]')
        await search.waitForExist({timeout:4000})

        let searchLocation = await search.getLocation()
        console.log('Выполняю long press(удержание 5 сек)')

        await browser.action('pointer', {
        parameters: { pointerType: 'touch' } 
    })
        .move({x:Math.round(searchLocation.x), y:Math.round(searchLocation.y)})
        .down()
        .pause(5000)
        .up()
        .perform()
});

    it('swipe', async () => {
       let startx = 600
       let starty = 1000
       let endx = 100
       let endy = 1000

        await browser.action('pointer', {
        parameters: { pointerType: 'touch' } 
    })
    .move({x:startx, y:starty})
    .down()
    .pause(300)
    .move({duration:3500, x:endx, y:endy})
    .pause(200)
    .up()
    .perform()

    });

    it('multi touch', async() => {

        await browser.activateApp('com.google.android.apps.maps')
        await browser.pause(2000)

        console.log('Выполняем жест 2мя пальцами')

        await browser.performActions([
            {
                type:'pointer',
                id:'finger1',
                parameters:{pointerType:'touch'},
                actions:[
                    {type:'pointerMove', duration:0, x:500, y:400},
                    {type:'pointerDown'},
                    {type:'pause', duration:200},
                    {type:'pointerMove', duration:2000, x:500, y:950},
                    {type:'pointerUp'}
                ]
            },
            {
                type:'pointer',
                id:'finger2',
                parameters:{pointerType:'touch'},
                actions:[
                    {type:'pointerMove', duration:0, x:500, y:1600},
                    {type:'pointerDown'},
                    {type:'pause', duration:200},
                    {type:'pointerMove', duration:2000, x:500, y:1050},
                    {type:'pointerUp'}
                ]
            },

        ]);

        await browser.releaseActions()
       
    });
});