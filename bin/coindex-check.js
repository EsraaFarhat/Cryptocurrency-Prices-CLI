import { Command } from "commander";
const program = new Command();
import check from "../commands/check.js";

program
  .command("price")
  .description("Check price of coins")
  .option('--coin <type>', 'Add specific coin types in CSV format', 'BTC,ETH,XRP')
  .option('--cur <currency>', 'Change the currency', 'USD')
  .action((cmd) => check.price(cmd));

program.parse(process.argv);
