export default function apiCall (){
  const tickers = fetch('https://api.wazirx.com/api/v2/tickers');
  console.log(tickers);
};
