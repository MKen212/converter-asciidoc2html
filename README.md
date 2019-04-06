# converter-asciidoc2html
Tool to convert asciidoc files to html using asciidoctor

Activities to convert into HTML first time:
* Using GitBash, clone repository from GitHub: git clone {repository}
* List all asciidocs in main directory & sub-directories: ls -1d *.asciidoc */*.asciidoc
* Create index.js to convert all asciidoc files to html format
* Remove any existing files from ./output-html
* Using Node.js Terminal, convert docs to html format: node {indexfile}
* Copy "asciidoc.css" from main directory to ./output-html and any generated sub-directories
* Copy any {additionalFiles} from repository into ./output-html
* Check html files and make any required adjustments
* Move contents of ./output-html directory and sub-directories to final destination

Activities to update HTML subsequent times:
* Using GitBash, update files from GitHub: git pull {repository}
* (Using Node.js Terminal, ensure asciidoctor is up-to-date: npm update)
* List all asciidocs in main directory & sub-directories: ls -1d *.asciidoc */*.asciidoc
* Update relevant index.js with any changes
* Remove any existing files from ./output-html
* Using Node.js Terminal, convert docs to html format: node {indexfile}
* Copy "asciidoc.css" from main directory to /output-html and any generated sub-directories
* Copy any {additionalFiles} from repository into ./output-html
* Check html files and make any required adjustments
* Move contents of ./output-html directory and sub-directories to final destination



Repository-specific information:

ethereumbook
* Repository: git@github.com:ethereumbook/ethereumbook.git
* Directory: C:/Users/Mark/Documents/GitHubRepositories/ethereumbook/
* indexfile: index-ethbook.js
* AdditionalFiles: *.html; /images; /misc; /tools
* Update book.html: location of "Index" heading & replace all .asciidoc with .html references
* Final Destination: \Malarena SA\Blockchain\Ethereum\ethereumbook


