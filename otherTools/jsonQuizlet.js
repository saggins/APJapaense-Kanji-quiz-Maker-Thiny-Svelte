
const puppeteer = require('puppeteer');
const fs = require('fs')
async function makeJSON(url, path) {
  const { v1: uuidv1, } = require('uuid');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto(url);
  await page.waitForSelector('.TermText');

  cardArray = [];
  let elementArray = await page.$$('.TermText');
  for (i = 0; i < elementArray.length; i++) {
    let kanji = await page.evaluate(el => el.textContent, elementArray[i]);
    let hirigana = await page.evaluate(el => el.textContent, elementArray[i + 1]);
    let cardobj = {
      "id" : uuidv1(),
      "kanji": kanji,
      "hirigana": hirigana,
    }
    cardArray.push(cardobj)
    i++
  }
  await browser.close();

  json = JSON.stringify({"list": cardArray})
  fs.writeFile(path, json, 'utf-8', function (err) {
    if (err) throw err;
    console.log('complete');
  })

}

allKanjiList = ["https://quizlet.com/517484729/ap-kanji-list-1-flash-cards/", "https://quizlet.com/519711492/ap-kanji-list-2-flash-cards/", "https://quizlet.com/520457246/ap-kanji-list-3-flash-cards/", "https://quizlet.com/533867989/ap-kanji-list-4-%E5%A0%B4%E5%A7%8B-flash-cards/", "https://quizlet.com/540953735/ap-kanji-list-5-%E7%A9%BA%E6%B1%BA-flash-cards/", "https://quizlet.com/544688441/ap-kanji-list-6-%E7%94%B7%E8%80%85-flash-cards/", "https://quizlet.com/553692059/ap-kanji-list-7-%E7%9F%A5%E9%9B%AA-flash-cards/"]
kanjiNameList = []
for (const url of allKanjiList) {
  let AllNames = url.split("/")
  let name = AllNames[AllNames.length-2]
  makeJSON(url, "./public/cardData/" + name + ".json" )
  kanjiNameList.push(name)
} 
fs.writeFile('./public/cardData/index.json', JSON.stringify( {"list": kanjiNameList}), 'utf-8', function (err) {
  if (err) throw err;
  console.log('complete');
})
