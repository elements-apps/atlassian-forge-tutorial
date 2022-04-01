# Contribute to this tutorial

## Tutorial redaction

This tutorial is written using the [Asciidoc language](https://docs.asciidoctor.org/asciidoc/latest/) and converted into a website using [Asciidoctor processor](https://docs.asciidoctor.org/asciidoctor/latest/).

Since the Asciidoc language is just text, you can use any text editors. 
However, some IDEs / text editors support Asciidoc syntax out of the box or using an extension. 
See the [tooling page](https://docs.asciidoctor.org/asciidoctor/latest/tooling/) from the Asciidoctor documentation.

Regarding the content, each part of the tutorial is in a dedicated `.adoc` file and included in a parent file using the Asciidoc `include::` directive.

## Website generation

To locally generate the tutorial website from the Asciidoc files, you have to [install Asciidoctor](https://docs.asciidoctor.org/asciidoctor/latest/install/).
Once it's done, you can run the following command:


````
asciidoctor -D ./public --backend=html5 -o index.html ./src/asciidoc/main.adoc
````

This will generate an `index.html` file in the `./public` folder.
This HTML file contains images as data-uri (eg. `data:image/png;base64...`).

A custom CSS is applied using the `./src/asciidoc/style.css` file, which includes the Asciidoctor base stylesheet.

## Tutorial implementation

To help learners, this tutorial also contains the code of the Forge application to create.
If you add or edit some parts in this tutorial, ensure to also update the implementation in `./src/typescript`. 

## Submitting a modification

Create a pull-request in this repository and check:

- The generated website contains your changes and previous ones;
- The tutorial implementation reflect your changes and still compile;
- The tutorial version is incremented and the changelog part completed in the `./src/asciidoc/main.adoc` file 
- Your name in added to the author part of the `./src/asciidoc/main.adoc` file using the [multi-authors syntax](https://docs.asciidoctor.org/asciidoc/latest/document/multiple-authors/#multi-author-syntax)

Once accepted, your submission will be merged to the `main` branch and GitHub actions will deploy a new version of the tutorial website.

