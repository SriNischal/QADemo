export class fileuploadlocators{
    baseURL = "https://automatenow.io/sandbox-automation-testing-practice-website/"
    uploadfile = "//a[text()='File Upload']"
    actualheader = "//h1[@itemprop='headline']"
    expectedheader = "File Upload"
    actualtext = "//p[text()='You may upload a file that meets the following requirements.']"
    expectedtext = "You may upload a file that meets the following requirements."
    actualfilesize = "//p[text()='Max file size: 1 MB']"
    expectedfilesize = "Max file size: 1 MB"
    actualsupportedfiles = "//p[text()='Supported file types: txt, docx, pdf, jpeg, png, jpg, gif']"
    expectedsupportedfiles = "Supported file types: txt, docx, pdf, jpeg, png, jpg, gif"
    choosefile = "//input[@id='file_upload']"
    selectinputfile = 'input[type="file"]'
    selectfile =  './tests/fixtures/Free_Test_Data_500KB_DOCX.docx'
    unsupportedselectinputfile = 'input[type="file"]'
    unsupportedselectfile = './tests/fixtures/Free_Test_Data_100KB_DOC.doc'
    uploadbutton = "//input[@class='wpcf7-form-control has-spinner wpcf7-submit']"
    actualfileuploadedmessage = "//div[@class='wpcf7-response-output']"
    expectedfileuploadedmessage = "File upload complete"
    actualsandboxtext = "//h1[text()='Sandbox']"
    expectedsandboxtext = "Sandbox"
    actualunsupportedfile = "//span[@class='wpcf7-not-valid-tip']"
    expectedunsupportedfile = "You are not allowed to upload files of this type."
}