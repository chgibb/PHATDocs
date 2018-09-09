[Home](https://chgibb.github.io/PHATDocs/)

#### For $TAGNAME$
[Contents](https://chgibb.github.io/PHATDocs/docs/latest/home)

[Previous: Circular Visualization](https://chgibb.github.io/PHATDocs/docs/latest/circularVisualization)

![PHAT Align Button](https://chgibb.github.io//PHATDocs/docs/latest/AlignButton.png)
![PHAT Circ Button](https://chgibb.github.io//PHATDocs/docs/latest/CircButton.png)
![PHAT Output Button](https://chgibb.github.io//PHATDocs/docs/latest/OutputButton.png)

# BLASTing Alignments
PHAT provides automated submission, retrieval and interpretation of [NCBI](https://www.ncbi.nlm.nih.gov/) [BLAST](https://blast.ncbi.nlm.nih.gov/Blast.cgi) reports for the purposes of genotyping. PHAT will look specifically for unaligned fragments embedded inside of larger, aligned reads in alignments run from within PHAT as well as imported SAM/BAM files. Those identified reads and their fragments are BLASTed.

## Selecting a Reference Sequence Range to BLAST
Typically, only particular regions of an alignment are of interest. PHAT BLASTs operate on sub-sequences. Sequence selection for a given reference genome is performed through the Genome Builder.

![PHAT Circ Toolbar](https://chgibb.github.io/PHATDocs/docs/latest/CircToolbar2.png)

Selecting "Figure Actions", "Select Sequence" on an open figure will began an interactive sequence selection interface.

![Figure Actions](https://chgibb.github.io/PHATDocs/docs/latest/figureActions1.png)


![Select Sequence1](https://chgibb.github.io/PHATDocs/docs/latest/selectSequence1.png)
By default, the selected sequence will be from 1-500 on the reference genome. Adding coverage tracks for the alignments(s) of interest will help to narrow down the area of interest though is not required.

![Select Sequence1](https://chgibb.github.io/PHATDocs/docs/latest/selectSequence2.png)

Once a sequence has been selected, clicking "BLAST an Alignment from Start to End" (where Start and End are the selected sequence's start and end points, respectively) will allow you to then select an alignment to BLAST. Select "BLAST" under the "Options" column of the desired alignment.

# Search Algorithm
For the selected alignment, reads which aligned starting between the selected start and end points, and which are 30nt or greater and contain one or more fragments which did not align, of which one fragment must be 30nt or greater (a "suspicious" read) are BLASTed against the nt database. Each unaligned fragment in every "suspicious" read which is 30nt or greater (a "suspicious" fragment) is BLASTed against the nt database. If no hits are found for a given "suspicious" fragment in nt, the fragment is "re-BLASTed" against the Human G+T database. Only the topmost hit is reported for the read and its fragment(s) regardless of database.


[Contents](https://chgibb.github.io/PHATDocs/docs/latest/home)