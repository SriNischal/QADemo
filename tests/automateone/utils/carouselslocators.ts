export class carouselslocators{
    baseURL = "https://automatenow.io/sandbox-automation-testing-practice-website/"
    URL = "https://automatenow.io/sandbox-automation-testing-practice-website/carousel/"
    carouselsbtn = "//a[text()='Carousels']"
    actualcarouselheader = "//h1[text()='Carousel']"
    expectedcarouselheader = "Carousel"
    firstimage = "(//img[@data-id='4379'])[1]"
    secondimage = "(//img[@data-image-title='cypress-vs-selenium'])[2]"
    thirdimage = "(//img[@data-id='4722'])[1]"
    fourthimage = "(//img[@data-id='4414'])[2]"
    fifthimgae = "(//img[@data-id='4421'])[2]"
    nextbutton = "button.nav-button__next"
    actualfirstimagepath = {path: "image-vaidation-1-win32.png"}
    expectedfirstimagepath = '/sandbox_carousel.spec.ts-snapshots/image-vaidation-1-win32.png'
    actualsecondimagepath = {path: "image-vaidation-2-win32.png"}
    expectedsecondimagepath = '/sandbox_carousel.spec.ts-snapshots/image-vaidation-2-win32.png'
    actualthirdimagepath = {path: "image-vaidation-3-win32.png"}
    expectedthirdimagepath = '/sandbox_carousel.spec.ts-snapshots/image-vaidation-3-win32.png'
    actualfourthimagepath = {path: "image-vaidation-4-win32.png"}
    expectedfourthimagepath = '/sandbox_carousel.spec.ts-snapshots/image-vaidation-4-win32.png'
    actualfifthimagepath = {path: "image-vaidation-5-win32.png"}
    expectedfifthimagepath = '/sandbox_carousel.spec.ts-snapshots/image-vaidation-5-win32.png'
    clickfirstimage = "(//img[@alt='Cypress Logo | Cypress.io Logo | Cypress Automation Tool Logo'])[3]" 
    firstimagetitle = "(//picture[@data-image-title='cypress-logo'])[1]"
    clicksecondimage = "(//img[@alt='Cypress vs selenium | Cypress vs Selenium architecture | Cypress vs Selenium Side by Side'])[3]"
    secondimagetitle = "(//img[@alt='Cypress vs selenium | Cypress vs Selenium architecture | Cypress vs Selenium Side by Side'])[1]"
    clickthirdimage = "(//img[@alt='automateNow YouTube Channel | automate now YouTube'])[2]"
    thirdimagetitle = "(//img[@alt='automateNow YouTube Channel | automate now YouTube'])[1]"
    clickfourthimage = "(//img[@alt='What Is Headless Chrome | What Does Headless Chrome Mean'])[3]"
    fourthimagetitle = "(//img[@alt='What Is Headless Chrome | What Does Headless Chrome Mean'])[2]"
    clickfifthimage = "(//img[@alt='GitHub Logo | Sourcetree Logo | GitHub and Sourcetree'])[3]"
    fifthimagetitle = "(//img[@alt='GitHub Logo | Sourcetree Logo | GitHub and Sourcetree'])[2]"
    expectedfirstimagename = "Cypress Logo | Cypress.io Logo | Cypress Automation Tool Logo"
    expectedsecondimagename = "Cypress vs selenium | Cypress vs Selenium architecture | Cypress vs Selenium Side by Side"
    expectedthirdimagename = "automateNow YouTube Channel | automate now YouTube"
    expectedfourthimagename = "What Is Headless Chrome | What Does Headless Chrome Mean"
    expectedfifthimagename = "GitHub Logo | Sourcetree Logo | GitHub and Sourcetree"
} 