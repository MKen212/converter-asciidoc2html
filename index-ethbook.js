/* JavaScript converter using asciidoctor to convert asciidoc files to html
 *
 * ethereumbook repository
 *
 * Repository: git@github.com:ethereumbook/ethereumbook.git
 * Directory: C:/Users/Mark/Documents/GitHubRepositories/ethereumbook/
 * 
*/
const asciidoctor = require('asciidoctor')();

function convFile (source, destn) {
  asciidoctor.convertFile(source, { "to_dir": destn });
  console.log(`${source} saved to ${destn}`);
}

let sourceDir = "C:/Users/Mark/Documents/GitHubRepositories/ethereumbook/";
let destn1 = "./output-html";
let destn2 = "./output-html/contrib";  // extra sub-directory required for this repo

/* Format for each file is: convFile(sourceDir + "filename", destnation); */

convFile(sourceDir + "01what-is.asciidoc", destn1);
convFile(sourceDir + "02intro.asciidoc", destn1);
convFile(sourceDir + "03clients.asciidoc", destn1);
convFile(sourceDir + "04keys-addresses.asciidoc", destn1);
convFile(sourceDir + "05wallets.asciidoc", destn1);
convFile(sourceDir + "06transactions.asciidoc", destn1);
convFile(sourceDir + "07smart-contracts-solidity.asciidoc", destn1);
convFile(sourceDir + "08smart-contracts-vyper.asciidoc", destn1);
convFile(sourceDir + "09smart-contracts-security.asciidoc", destn1);
convFile(sourceDir + "10tokens.asciidoc", destn1);
convFile(sourceDir + "11oracles.asciidoc", destn1);
convFile(sourceDir + "12dapps.asciidoc", destn1);
convFile(sourceDir + "13evm.asciidoc", destn1);
convFile(sourceDir + "14consensus.asciidoc", destn1);
convFile(sourceDir + "appdx-dev-tools.asciidoc", destn1);
convFile(sourceDir + "appdx-evm-opcodes-gas.asciidoc", destn1);
convFile(sourceDir + "appdx-forks-history.asciidoc", destn1);
convFile(sourceDir + "appdx-shortlinks.asciidoc", destn1);
convFile(sourceDir + "appdx-standards-eip-erc.asciidoc", destn1);
convFile(sourceDir + "appdx-web3js-tutorial.asciidoc", destn1);
convFile(sourceDir + "book.asciidoc", destn1);

convFile(sourceDir + "contrib/angular4-truffle.asciidoc", destn2);
convFile(sourceDir + "contrib/aws-network-operation.asciidoc", destn2);
convFile(sourceDir + "contrib/aws-network-setup.asciidoc", destn2);
convFile(sourceDir + "contrib/aws-setup.asciidoc", destn2);
convFile(sourceDir + "contrib/design-patterns.asciidoc", destn2);
convFile(sourceDir + "contrib/devp2p-protocol.asciidoc", destn2);
convFile(sourceDir + "contrib/etc-history.asciidoc", destn2);
convFile(sourceDir + "contrib/ethereum-basics.asciidoc", destn2);
convFile(sourceDir + "contrib/ethereum-testnets.asciidoc", destn2);
convFile(sourceDir + "contrib/example.asciidoc", destn2);
convFile(sourceDir + "contrib/google-cloud-testnet.asciidoc", destn2);
convFile(sourceDir + "contrib/governance.asciidoc", destn2);
convFile(sourceDir + "contrib/node-communication-interaction.asciidoc", destn2);
convFile(sourceDir + "contrib/privacy-enhancing-patterns.asciidoc", destn2);
convFile(sourceDir + "contrib/scaling.asciidoc", destn2);
convFile(sourceDir + "contrib/upgradability-patterns.asciidoc", destn2);
convFile(sourceDir + "contrib/using-puppeth.asciidoc", destn2);

convFile(sourceDir + "glossary.asciidoc", destn1);
convFile(sourceDir + "preface.asciidoc", destn1);

console.log("All Converted!");
