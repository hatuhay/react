import { drupalPostWebform } from './webformAPI';
// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
//  await sleep(500); // simulate server latency
  const result = drupalPostWebform(values);
  result.then();
});
