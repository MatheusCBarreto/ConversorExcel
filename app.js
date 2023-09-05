const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');
const HtmlParser = require('./HtmlParser');

let leitor = new Reader();

async function main() {
  let data = await leitor.Read('./PlanilhaTeste.csv');
  let dadosProcessados = Processor.Process(data);

  let users = new Table(dadosProcessados);

  let html = await HtmlParser.Parse(users);

  console.log(html);
}

main();
