const puppeteer=require("puppeteer");
const loginLink="https://www.hackerrank.com/login";
const email="priyan5689@gmail.com";
password="priyan@123";
const codeObj=require("./code");

let browserOpen=puppeteer.launch({
    headless:false,
    args:["--start maximised"],
    defaultViewport:null
})
let page;
browserOpen.then(function(browserObj){
    let browserOpenPromise=browserObj.newPage();
    return browserOpenPromise;
}).then(function(newTab){
    page=newTab;
    let hackerrankOpenPromise=newTab.goto(loginLink);
    return hackerrankOpenPromise;
}).then(function(){
    let emailEnterPromise=page.type("input#input-1.input",email,{delay:50});
    return emailEnterPromise;
}).then(function(){
    let passordPromise=page.type("input[type='password']",password,{delay:50})
    return passordPromise;
}).then(function(){
    let loginClick=page.click("button.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    return loginClick;
}).then(function(){
    let waitforSelector1=page.waitForSelector("div.topic-item.bold");
    return waitforSelector1;
}).then(function(){
    let clickPromise=page.click("div.topic-item.bold");
    return clickPromise;
}).then(function(){
    let gettoWarmup=waitAndClick('input[value="warmup"]',page)
    return gettoWarmup;
}).then(function(){
    let waitFor3sSec=page.waitForTimeout(3000)
    return waitFor3sSec
}).then(function(){
   let allChallanges=page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled",{delay:50})
   return allChallanges
}).then(function(quesArr){
    // console.log("No of question",quesArr.length);
    let questionClick=quesArr[0].click();
    return questionClick
}).then(function(){
    let focusEditorPromise=waitAndClick("div.monaco-editor.no-user-select.vs",page)
    return focusEditorPromise
}).then(function(){
    let checkboxPromise=waitAndClick("input.checkbox-input",page)
    return checkboxPromise
}).then(function(){
    let editorPromise=page.waitForSelector("textarea#input-1.input.text-area.custominput.auto-width")
    return editorPromise
}).then(function(){
    let answerPromise=page.type("textarea#input-1.input.text-area.custominput.auto-width",codeObj,{delay:50});
    return answerPromise;
}).then(function(){
    let controlPromise=page.keyboard.down("Control")
    return controlPromise
}).then(function(){
    let APromise=page.keyboard.press("A",{delay:100})
    return APromise
}).then(function(){
    let XPressPromise=page.keyboard.press("X",{delay:100})
    return XPressPromise
}).then(function(){
    let controlPromise=page.keyboard.up("Control")
    return controlPromise
}).then(function(){
    let editPromise=waitAndClick("div.monaco-editor.no-user-select.vs",page)
    return editPromise
}).then(function(){
    let controlPromise=page.keyboard.down("Control")
    return controlPromise
}).then(function(){
    let APromise=page.keyboard.press("A",{delay:50})
    return APromise
}).then(function(){
    let VPromise=page.keyboard.press("V",{delay:50})
    return VPromise
}).then(function(){
    let controlPromise=page.keyboard.up("Control")
    return controlPromise
}).then(function(){
    let submitPromise=page.click("button.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled")
    return submitPromise
})














//     let checkboxPromise=page.waitForSelector('input[value="warmup"]');
//     return checkboxPromise;
// }).then(function(){
//     let clickcheckboxPromise=page.click('input[value="warmup"]');
//     return clickcheckboxPromise;
// })







function waitAndClick(selector,cPage){
    return new Promise(function(resolve,reject){
        let waitForModelPromise=cPage.waitForSelector(selector)
        waitForModelPromise.then(function(){
            let clickModal=cPage.click(selector)
            return clickModal
        }).then(function(){
            resolve()
        }).catch(function(err){
            reject()
        })
    })
}