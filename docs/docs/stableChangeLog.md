* Split reference indexing into two options. Index for alignment, index for visualization
* Allow importing of BAM files produced externally
* Allow linking imported BAM files to inputted reference sequences for visualization
* [#593](https://github.com/chgibb/PHAT/issues/593)
* Update checking will now abort if it takes too long to connect to github.com
* Startup performance improvements
* More aggressively save project manifest. Reduces chance of data loss in the event of operations crashing
* Fixed desync in alignment progress and QC report generation in new windows
* Allow importing of SAM files produced externally
* Allow linking imported SAM files to inputted reference sequences for visualizations
* Prototype process manager available by pressing Ctrl+1 in any window
* Startup and RAM improvements
* Added indentation and formatting to all operation logs, making them more readable
* Disable interactivity for large figures( >= 50 contigs or 1,000,000 BP)
* Disable rendering contig names for large figures
* Feed non interactive figures through the same SVG compilation pipeline as data tracks
* Added "Figure Options" dropdown for access to the same editing options available through interacting with the figure
* Interactivity and global contig name display toggles available through "Figure Options"
* Fixed installer GIF for Windows [#628](https://github.com/chgibb/PHAT/issues/628)