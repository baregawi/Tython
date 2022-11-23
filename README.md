# Tython

Is a Python/Javascript library that provides a web-accessible, Tigrinya based verson of the Python programming language for Tigrayans to use to learn programming before they learn English. This can also be extended to a version of Python that can be written entirely in Tigrinya. This would involve translate all the standard error messages to Tigrinya. Many can have specific, human guided translation. But automatic translation is needed to make errors and code from all libraries be at at least partially understandable for Tigrinya speakers. Hopefully we can use Lesan.ai for this automatic translation.

## Design

0) The result is a **static** webpage

1) Create a transpiler that takes a Tigrinya based python file and does direct (character to character/group of characters) transliteration into a Latin alphabet. The output of which would be a valid python code.

2) Use https://www.transcrypt.org/ to further transpile the result python code into Javascript so it can be run on the browser.

3) Integrate this into a text editor within an html page.

4) Potentially extend the basic functionality to a dynamic webpage and backend DB that can retrieve sets of practice problems written in Tigrinya.

### Translation of English Python char sequences for tokens to Ge'ez char sequences.

For this portion we need to map every keyword in python to it's corresponding Tigrinya keyword written in the ge'ez script. In addition to keywords we must do the same for [Python Built in functions](https://docs.python.org/3/library/functions.html) and the names of the built in python libraries (likely their primary functions as well).
