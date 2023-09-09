const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');
const HtmlParser = require('./HtmlParser');
const PDFWriter = require('./PDFWriter');
const Writer = require('./Writer');

let leitor = new Reader();
let escritor = new Writer();

async function main() {
  let data = await leitor.Read('./PlanilhaTeste.csv');
  let dadosProcessados = Processor.Process(data);

  let users = new Table(dadosProcessados);

  let html = await HtmlParser.Parse(users);
  escritor.Write(Date.now() + '.html', html);
  PDFWriter.WritePDF(Date.now() + '.PDF', html);

  console.log(html);
}

main();
