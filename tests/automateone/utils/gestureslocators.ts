export class gesturelocators{
    baseURL = "https://automatenow.io/sandbox-automation-testing-practice-website/"
    URL = "https://automatenow.io/sandbox-automation-testing-practice-website/gestures/"
    gesturebtn = "//a[text()='Gestures']"
    actualgesturestitle = "//h1[text()='Gestures']"
    expectedgesturestitle = "Gestures"
    actualgestureboxheading = "//p[text()='Drag the box anywhere on the screen.']"
    expectedgestureboxheading = "Drag the box anywhere on the screen."
    header = "//div[@id='moveMe']"
    image = "//img[@id='dragMe']"
    droplocation = "//div[@id='div2']"
    startlocation = "//div[@id='div1']"
    pointer = "//div[@class='wp-block-jetpack-map-marker mapboxgl-marker mapboxgl-marker-anchor-center']"
    actualcityname = "//h3[text()='Orlando']"
    expectedcityname = "Orlando"
    closebtn= "//button[@class='mapboxgl-popup-close-button']"
    actualmapmessage = "//p[text()='Drag the map in any direction.']"
    expectedmapmessage = "Drag the map in any direction."
    maximizemap = "(//span[@class='mapboxgl-ctrl-icon'])[1]"
    plussymbol = "(//span[@class='mapboxgl-ctrl-icon'])[2]"
    minussymbol = "(//span[@class='mapboxgl-ctrl-icon'])[3]"
    box = "//div[text()='You can move me around']"
    target = "(//div[@class='wp-block-spacer'])[1]"
    actualinitialposition = "//div[@id='moveMe']"
    expectedinitialposition = {'height': 178, 'width': 236.734375, 'x': 119.5, 'y': 240}
    expectedafterposition = {'height': 178, 'width': 236.734375, 'x': 382.5, 'y': 387}
    actualpointerinitialposition = {'height': 38, 'width': 32, 'x': 658.5, 'y': 1036}
    expectedpointerafterposition = {'height': 38, 'width': 32, 'x': 484.5, 'y': 311}
    map = "//canvas[@class='mapboxgl-canvas']"
    expected = "church st"
}