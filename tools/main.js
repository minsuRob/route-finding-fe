const SheetApiClientFactory = require("./sheet_api_client_factory");
const SheetDownloader = require("./sheet_downloader");

async function main() {
  try {
    const sheetApiClient = await SheetApiClientFactory.create();
    const downloader = new SheetDownloader(sheetApiClient);

    // 아래와 같은 구글 스프레드시트 주소 중 d와 edit 사이에 들어있는 부분이 스프레드시트의 ID 값 입니다.
    // https://docs.google.com/document/d/1bZbLi45kqRyE1fSBphWzFFKaJobcaMplBzr82rRXjPM/edit#
    // const spreadsheetId = "1BOdRTyei37WS6W1WSUQFckW3ckqEwnHotTimB-cpP0I";
    const spreadsheetId = "1zMWMMoxYbyZLrkPV-gnSxV0rJQENvGp_j_SxSUfixRU";

    const notice = await downloader.downloadToJson(
      spreadsheetId,
      "notice",
      "downloaded/notice.json"
    );

    console.log(notice);

    const countryInfo = await downloader.downloadToJson(
      spreadsheetId,
      "gym",
      "downloaded/gym.json"
    );

    console.log(countryInfo);
  } catch (e) {
    console.error(e);
  }
}

main();
