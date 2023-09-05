const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');

let leitor = new Reader();

async function main() {
  let data = await leitor.Read('./PlanilhaTeste.csv');
  let dadosProcessados = Processor.Process(data);

  let users = new Table(dadosProcessados);
}

main();
