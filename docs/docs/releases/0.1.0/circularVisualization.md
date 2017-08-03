[Home](https://chgibb.github.io/PHATDocs/)

#### For 0.1.0
[Contents](https://chgibb.github.io/PHATDocs/docs/releases/0.1.0/home)

[Previous: Reports and Analyses](https://chgibb.github.io/PHATDocs/docs/releases/0.1.0/reportsAndAnalyses)

![PHAT Circ Button](https://chgibb.github.io//PHATDocs/docs/latest/CircButton.png)

# Circular Visualization
PHAT provides customizable circular vizualization of reference sequences through the PHAT genome builder. Click "GENOME BUILDER" on the toolbar to open it.

![PHAT Circ Toolbar](https://chgibb.github.io//PHATDocs/docs/latest/CircToolbar2.png)

## Creating and Opening Circular Figures
By default, no figure is open in the editor. Click the "Figures" drop down to see a list of reference files and their figures available to open. Clicking "New Figure" underneath a reference file name will create and open a new figure for that reference file. By default, a figure's name is "New Figure". Below each reference file name is the name of each figure created from it. Click on a figure's name to open it.

![PHAT New Figure](https://chgibb.github.io//PHATDocs/docs/latest/NewFigure.png)

## Brand New Figure
Creating a new figure will generate a visualization of just what is inside of its reference file. Contigs contained within the reference file will be assigned random colours and scaled according to the total size in nucleotides of the reference.

By default, a figure's name is "New Figure". Hover over the name of the figure in its centre and click on it to rename it.

![PHAT Name Figure](https://chgibb.github.io//PHATDocs/docs/latest/NameFigure.png)

By default, a figure's radius is 120. To grow or shrink a figure, edit the radius in the top bar and then click "Update" or press "Enter" to apply the changes to the figure.

By default a track interval of 500 is used but not shown. Click on the checkbox next to "Update" to show or hide the interval. Edit the interval distance in the top bar and click "Update" or press "Enter" to apply the changes to the figure.

## Working With Contigs

### Reference Contigs
Those contigs which are present in the reference file will be visualized and scaled accordingly. These are known as "Reference Contigs", referring to the fact that they are read from the reference file itself. You cannot change their start/end positions or vertical adjustment relative to the figure.

### Custom Contigs
Unfortunately most reference files fail to annotate their sequences with the genes/chromosomes/other features we know exist. PHAT visualizes what is present in the reference file, while also enabling the user to add custom features. In order to add new features, click "Add Contig" in the top bar and enter a start and end position to define where in the reference sequence this contig should be. After clicking "Save Changes", a contig called "New Contig" with a random colour will be rendered at the genomic range specified, and scaled accordingly.

### Editing Contigs
Reference contigs are limited in what properties are editable. You can change their fill colour, text colour and name. You cannot delete them nor change any other properties.

Custom contigs are free to edit as you see fit. You can change their fill colour, text colour, name, vertical adjustment, start and end positions as well as delete them.

Hover over the contig you want to edit until it becomes highlighted, then left click. Click "Save Changes" in the resulting dialog box to save your changes to the contig. Click "Cancel", or click away to cancel.

## Working With Data Tracks
PHAT allows "tracks" of data generated from alignments to be applied to figures, on a per contig basis. Click on "Data Visualization" to view the alignments ran against the reference file. Click the "View Available Tracks" column in a given alignment to view data track options for it.

### Creating Tracks
PHAT allows visualization of alignment coverage and SNP positions as data tracks. By default, no tracks are available. Select a colour for the data track and then click "Generate Coverage Track" or "Generate SNP Track" beside the contig you want to generate a track for. This may take some time depending on the size of the read files and reference file involved. When the track generation is complete, it will be listed under the appropriate section at the top of the "Track Options" dialog, in the colour that it will be displayed in. Currently, you cannot change the colour of a data track after it has been generated.

### Viewing Tracks
You can edit what tracks are displayed on a per alignment basis. Those tracks whose names are bolded will appear on the figure, those which are not bolded will not. You can toggle tracks on and off by clicking on their names. Click "Save Changes" to apply the changes.

## Exporting Figures
Click on "Figure Actions" on the top bar, then "Export to SVG" to save the current figure as an SVG. This may take some time depending on the complexity of the figure.

## Copying Figures
Creating contigs, annotating figures and generating data tracks can be a time consuming process. It is recommended to create contigs and annotate a figure once and then copy it many times to use as a base to build other figures from. Click "Figure Actions", then "Create Copy of Figure" to copy a figure. Any data tracks generated for the figure will be copied as well. This may take some time depending on the complexity of the figure. Any changes to the original figure made after copying it will not be reflected in the copies.

## Deleting Figures
To delete a figure, click "Figure Actions" on the top bar, then "Delete Figure". This cannot be undone.

## Performance
At the time of writing, the genome builder tends to become slow when displaying many data tracks, particularly coverage tracks for large contigs. If you are trying to visualize many large data tracks, it is recommended to close other programs. Working with large, complex figures can become slow overtime. Unfortunately this is due to the technology the genome builder's editor is built upon. Changes made to a figure are saved as you make them but may take some time to reflect in the editor. In some cases it may be faster to make a change to a figure, close the genome builder and then open it again in a new window. We are working to try to improve the editor performance. You can always [help us out](https://github.com/chgibb/PHAT/pulls).

# About Circular Visualization in PHAT
At its core, PHAT's circular visualization is based on the [Angular Plasmid](http://angularplasmid.vixis.com/) library. Angular Plasmid provides a set of AngularJS templates that make it incredibly easy to construct circular figures such as PHAT creates. PHAT expands upon Angular Plasmid by providing a core set of templating functions to build figures. Individual components, such as data tracks, or the "base figure" (all contigs, reference and custom) itself have their templates preassembled and saved to disk. When it comes time to render, a figure template is constructed and the necessary components are injected into it, before being passed to AngularJS to be compiled and rendered in the page.

This is where the main slowness comes from in the genome builder. While we are able to AOT compile the Angular Plasmid templates themselves, relying on AngularJS to JIT compile templates on every rerender comes at a price with large figures. Especially figures with large or multiple coverage tracks. Efforts are made to smooth and optimize the histogram in a coverage track in attempts to reduce the size and complexity of its resultant templates but accuracy of the visualization is favoured over complexity.

The result of compiling Angular Plasmid templates is just an SVG. Some investigation was done into AOT compiling tracks and contigs into SVGs and then assembling them into a canvas at render time using [Angular Server](https://www.npmjs.com/package/angularjs-server). Unfortunately however, we appear to lose the data binding provided by AngularJS when it comes time to render the result. That would mean the entire figure would have to be completely rerendered from scratch whenever a user decided to change text, colours, radius, or track intervals. Angular Server also appeared to have extremely poor performance in testing. Taking several times longer to render a base figure with one contig into an SVG than the equivalent AngularJS operation in browser.

The majority of methods/classes involved in circular figure generation and manipulation are held [here](https://github.com/chgibb/PHAT/blob/0.1.0/src/req/renderer/circularFigure.ts). Template generation methods in most cases are further wrapped by operations and never invoked directly in the renderer context of any window. These methods integrate with the project structure of PHAT to allow for persistence and lazy loading of pieces of figures. The genome builder takes this a step further by wrapping an in memory cache around the disk based methods of the ```circularFigure``` module to reduce trips to disk to fetch figure pieces.

```circularFigure``` further defines a small ```FigureCanvas``` structure describing the assumptions that templates make about the Angular scope in which they will exist in. [This class](https://github.com/chgibb/PHAT/blob/0.1.0/src/req/renderer/circularGenomeBuilderRenderer/genomeView.ts) drives the editor and provides the implementation for constructing and rendering figures as well as figure interactions.

A rewrite of the visualization infrastructure at all levels to some kind of WebGL rendered DSL should probably happen.


[Contents](https://chgibb.github.io/PHATDocs/docs/releases/0.1.0/home)
