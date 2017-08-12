[Home](https://chgibb.github.io/PHATDocs/)

#### For 0.1.1-beta.7
[Contents](https://chgibb.github.io/PHATDocs/docs/releases/0.1.1-beta.7/home)

[Previous: Running Quality Control (QC) Reports](https://chgibb.github.io/PHATDocs/docs/releases/0.1.1-beta.7/QCReports)

![PHAT Align Button](https://chgibb.github.io//PHATDocs/docs/releases/0.1.1-beta.7/AlignButton.png)

# Running Alignments
In order to run alignments against a reference, it must first be indexed. To run an alignment, click "ALIGN" on the toolbar. Select files to use as forward (1), and reverse (2) reads from the left, and the reference to align against on the right. A confirmation of your selection will appear when you have selected at least 1 read file and 1 reference. If performing paired end alignment, ensure that your forward read and reverse read files have been selected properly. Selecting mismatched files or reversing the ordering of paired files will result in errors or unexpected results. Once you have made your selection, click "ALIGN" which will appear if you have selected at least 1 read file and 1 reference. Feel free to queue multiple different alignments at the same time. PHAT will only run one alignment at a time. The status of the currently running alignment will be displayed at the bottom of the window.

![PHAT Align](https://chgibb.github.io//PHATDocs/docs/releases/0.1.1-beta.7/AlignSelected.png)

PHAT performs 10 different steps when aligning. [Bowtie2](http://bowtie-bio.sourceforge.net/bowtie2/index.shtml) is used to perform the actual alignment. [Samtools](http://www.htslib.org/doc/samtools.html) to prepare the output from Bowtie2 for further processing and to retrieve coverage information. [VarScan](http://dkoboldt.github.io/varscan/) is used to predict SNPs and indels.

At the moment, parameters to tune and customize the steps in PHAT's alignment process are not made available to the user, defaults for each tool are used at each step. We are working to compile a list of useful parameters to expose to the user. Please file an issue on the [PHAT repository](https://github.com/chgibb/PHAT) and let us know what you want to see.

[Next: Reports and Analyses](https://chgibb.github.io/PHATDocs/docs/releases/0.1.1-beta.7/reportsAndAnalyses)

# About Running Alignments
See: [Class for information about a completed alignment](https://github.com/chgibb/PHAT/blob/0.1.1-beta.7/src/req/alignData.ts), [alignment operation](https://github.com/chgibb/PHAT/blob/0.1.1-beta.7/src/req/operations/RunAlignment.ts).

[Contents](https://chgibb.github.io/PHATDocs/docs/releases/0.1.1-beta.7/home)
