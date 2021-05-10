/* JavaScript converter using asciidoctor to convert markdown (.md) files to html
 * Preference is to use showdown converter so this is just used as a backup
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

/* Format for each file is: convFile(sourceDir + "filename", destnation); */

convFile(sourceDir + "CONTRIBUTING.md", destn1);
convFile(sourceDir + "LICENSE.md", destn1);
convFile(sourceDir + "README.md", destn1);

console.log("All Converted!");
