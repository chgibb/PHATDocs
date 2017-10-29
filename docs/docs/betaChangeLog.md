* Fixed navbar scrolling in genome builder
* Fixed genome builder side bar colour
* Improved radius and BP inputs in navbar
* Improved feedback hovering cells and rows in tables
* Fixed DOM leak. ~3x to ~4x decrease in memory usage
* Integrated GC invocations into rendering pipeline
* Memory will decrease/increase appropriately when moving between simple/complex figures
* Integrated new [SVG compiler](https://github.com/chgibb/ngPlasmid). Anywhere from ~5x to ~160x faster coverage track compilation