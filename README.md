# converter-asciidoc2html
Tool to convert asciidoc files to html using asciidoctor
For further information on asciidoc see: https://asciidoctor.org/ or https://github.com/asciidoctor/asciidoctor.js

Activities to convert into HTML first time:
* Using GitBash, clone repository from GitHub: git clone {repository}
* List all asciidocs files in main directory & sub-directories: ls -1d *.asciidoc */*.asciidoc
* Create {indexFile} to convert all asciidoc files to html format
* Remove any existing files from ./output-html & create any required sub-directories
* Using Node.js Terminal, convert docs to html format: node {indexfile}
* Copy "asciidoc.css": copy node_modules\@asciidoctor\core\dist\css\asciidoctor.css output-html (and any sub-directories)
* Copy any {additionalFiles} from repository into ./output-html
* Check html files and make any required adjustments or {updates}
* Move contents of ./output-html directory and sub-directories to final destination

Activities to update HTML subsequent times:
* Using GitBash, update files from GitHub: git pull {repository}
* (Using Node.js Terminal, ensure asciidoctor is up-to-date: npm update)
* List all asciidocs files in main directory & sub-directories: ls -1d *.asciidoc */*.asciidoc
* Update relevant {indexFile} with any changes
* Remove any existing files from ./output-html & create any required sub-directories
* Using Node.js Terminal, convert docs to html format: node {indexfile}
* Copy "asciidoc.css": copy node_modules\@asciidoctor\core\dist\css\asciidoctor.css output-html (and any sub-directories)
* Copy any {additionalFiles} from repository into ./output-html
* Check html files and make any required adjustments or {updates}
* Move contents of ./output-html directory and sub-directories to final destination


Repository-specific information.

ethereumbook:
* Repository: git@github.com:ethereumbook/ethereumbook.git
* Directory: C:/Users/Mark/Documents/GitHubRepositories/ethereumbook/
* Indexfile: index-ethbook.js
* AdditionalFiles: *.html; /images; /misc; /tools
* Updates: book.html: location of "Index" heading & replace all .asciidoc with .html references
* Final Destination: \Malarena SA\Blockchain\Ethereum\ethereumbook

TO DO:
* Update this README.md file with proper markdown comments
* Remove all the hardcoding
* Improve the code so that it reads the files from a database or ini file

