[Home](https://chgibb.github.io/PHATDocs/)

#### For 0.9.1
[Contents](https://chgibb.github.io/PHATDocs/docs/releases/0.9.1/home)

[Previous: Circular Visualization](https://chgibb.github.io/PHATDocs/docs/releases/0.9.1/circularVisualization)

![PHAT Align Button](https://chgibb.github.io//PHATDocs/docs/releases/0.9.1/AlignButton.png)
![PHAT Circ Button](https://chgibb.github.io//PHATDocs/docs/releases/0.9.1/CircButton.png)
![PHAT Output Button](https://chgibb.github.io//PHATDocs/docs/releases/0.9.1/OutputButton.png)

# BLASTing Alignments
PHAT provides automated submission, retrieval and interpretation of [NCBI](https://www.ncbi.nlm.nih.gov/) [BLAST](https://blast.ncbi.nlm.nih.gov/Blast.cgi) reports for the purposes of genotyping. PHAT will look specifically for unaligned fragments embedded inside of larger, aligned reads in alignments run from within PHAT as well as imported SAM/BAM files. Those identified reads and their fragments are BLASTed.

## Selecting a Reference Sequence Range to BLAST
Typically, only particular regions of an alignment are of interest. PHAT BLASTs operate on sub-sequences. Sequence selection for a given reference genome is performed through the Genome Builder.

![PHAT Circ Toolbar](https://chgibb.github.io/PHATDocs/docs/releases/0.9.1/CircToolbar2.png)

Selecting "Figure Actions", "Select Sequence" on an open figure will began an interactive sequence selection interface.

![Figure Actions](https://chgibb.github.io/PHATDocs/docs/releases/0.9.1/figureActions1.png)


![Select Sequence1](https://chgibb.github.io/PHATDocs/docs/releases/0.9.1/selectSequence1.png)
By default, the selected sequence will be from 1-500 on the reference genome. Adding coverage tracks for the alignments(s) of interest will help to narrow down the area of interest though is not required.

![Select Sequence2](https://chgibb.github.io/PHATDocs/docs/releases/0.9.1/selectSequence2.png)

Once a sequence has been selected, clicking "BLAST an Alignment from Start to End" (where Start and End are the selected sequence's start and end points, respectively) will allow you to then select an alignment to BLAST. Select "BLAST" under the "Options" column of the desired alignment.

# Search Algorithm
For the selected alignment, reads which aligned starting between the selected start and end points, and which are 30nt or greater and contain one or more fragments which did not align, of which one fragment must be 30nt or greater (a "suspicious" read) are BLASTed against the nt database. Each unaligned fragment in every "suspicious" read which is 30nt or greater (a "suspicious" fragment) is BLASTed against the nt database. If no hits are found for a given "suspicious" fragment in nt, the fragment is "re-BLASTed" against the Human G+T database. Only the topmost hit is reported for the read and its fragment(s) regardless of database.

# Viewing BLAST Results
PHAT will report progress on a particular "BLAST Run" (the algorithm described above) in terms of identified "suspicious" reads and BLASTed "suspicious" fragments and reads. When complete, results can be viewed by clicking on the "BLAST Runs" column for the BLASTed alignment in the Output window.
![BLAST Runs1](https://chgibb.github.io/PHATDocs/docs/releases/0.9.1/alignBLASTRuns1.png)

All the "BLAST Runs" for the given alignment, including their start and end positions, how many "suspicious" reads where actually submitted for BLASTing and the program used are viewable here.

![BLAST Runs2](https://chgibb.github.io/PHATDocs/docs/releases/0.9.1/alignBLASTRuns2.png)

Selecting a column will give a read by read breakdown.

![BLAST Runs3](https://chgibb.github.io/PHATDocs/docs/releases/0.9.1/alignBLASTRuns3.png)

For each read BLASTed, the position at which the read began aligning on the reference, the full read, BLAST's top hit for the read, and the top hit's E-value are given. Unaligned fragments in the read are displayed inside the read in red text at the position they actually appear in the read. Hovering over an unaligned fragment will show BLAST's top hit for that fragment.

[Contents](https://chgibb.github.io/PHATDocs/docs/releases/0.9.1/home)

# About BLASTing Alignments in PHAT
This functionality is effectively programmatic use of NCBI's BLAST API. As such, we try to be good API citizens. BLAST requests are only submitted one at a time, and requests for status are submitted with appropriate delay based on [BLAST's API guidelines](https://blast.ncbi.nlm.nih.gov/Blast.cgi?CMD=Web&PAGE_TYPE=BlastDocs&DOC_TYPE=DeveloperInfo). The core API submission and polling logic is implemented [here](https://github.com/chgibb/PHAT/blob/0.9.1/src/BLASTSegmentProcess.ts), based on [BLAST's sample Perl code](https://blast.ncbi.nlm.nih.gov/docs/web_blast.pl).