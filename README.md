# Tython

Is a Python/Javascript library that provides a web-accessible, Tigrinya based verson of the Python programming language for Tigrayans to use to learn programming before they learn English. This can also be extended to a version of Python that can be written entirely in Tigrinya. This would involve translate all the standard error messages to Tigrinya. Many can have specific, human guided translation. But automatic translation is needed to make errors and code from all libraries be at at least partially understandable for Tigrinya speakers. Hopefully we can use Lesan.ai for this automatic translation.

## Design

0) A solid attempt will made to create a static webpage.

1) [DONE] Create basic tython to python transpilation interface in React.js

2) Collect python tokens to translate to Tigrinya and put them in a file on github so you can link it on Twitter.

3) Implement `transpileCode` using a token mapping in JSON (outline is already there). This is a direct (character to character/group of characters) transliteration into a Latin alphabet. The output of which would be a valid python code.

4) Use https://www.transcrypt.org/ to further transpile the result python code into Javascript so it can be run on the browser.

5) Integrate this into a text editor within an html page.

6) Potentially extend the basic functionality to a dynamic webpage and backend DB that can retrieve sets of practice problems written in Tigrinya.

## Installation and Development

This is a React.js project with potential react-static integration. To contribute to this repository or run the code locally first install `git`, `nodejs` and `npm` on your device then clone the repository:

```bash
git clone https://github.com/baregawi/Tython.git
```

First `cd` into the root directory and install the software dependencies:
```bash
npm install
```

Then run the following the to view the site locally:

```bash
npm run start
```

The site is deployed via [GitHub Pages](https://pages.github.com/) for now. So it can be view from there as well. If you have dev permissions on the package then your can use the typical `npm run build`, `npm run test` and `npm run deploy` to build, test and deploy the site. Please open a GitHub Issue for any questions or concerns. Development help is much appreciated!
