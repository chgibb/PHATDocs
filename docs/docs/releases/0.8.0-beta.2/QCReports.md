[Home](https://chgibb.github.io/PHATDocs/)

#### For 0.8.0-beta.2
[Contents](https://chgibb.github.io/PHATDocs/docs/releases/0.8.0-beta.2/home)

[Previous: Inputting Files](https://chgibb.github.io/PHATDocs/docs/releases/0.8.0-beta.2/inputtingFiles)

![PHAT QC Button](https://chgibb.github.io//PHATDocs/docs/releases/0.8.0-beta.2/QCButton.png)

# Running Quality Control (QC) Reports
PHAT makes use of the fantastic [FastQC](https://www.bioinformatics.babraham.ac.uk/projects/fastqc/) to run QC reports for read files.  
To run a QC report for a read file, click the "QC" button on the toolbar.

![PHAT QC Before](https://chgibb.github.io//PHATDocs/docs/releases/0.8.0-beta.2/preQC.png)

Click "Click to Analyze" beside the name of the file that you want to run the report for. This may take some time depending on the size of the file. When the report is complete, the rows for the file in question will change to show an icon indicating whether the test was a success, had a warning or failed.

![PHAT QC After](https://chgibb.github.io//PHATDocs/docs/releases/0.8.0-beta.2/postQC.png)

Click on "View Report" to view the report in full. See [FastQC's documentation](https://www.bioinformatics.babraham.ac.uk/projects/fastqc/Help/) for more information.

![PHAT QC Report](https://chgibb.github.io//PHATDocs/docs/releases/0.8.0-beta.2/QCReport.png)

[Next: Running Alignments](https://chgibb.github.io/PHATDocs/docs/releases/0.8.0-beta.2/runningAlignments)

[Contents](https://chgibb.github.io/PHATDocs/docs/releases/0.8.0-beta.2/home)


# About QC Reports
PHAT makes use of a modifed version of FastQC. It, as well as more details can be found [here](https://github.com/chgibb/FastQC0.11.5).  
See: [QC report class](https://github.com/chgibb/PHAT/blob/0.8.0-beta.2/src/req/QCData.ts), [QC report parser](https://github.com/chgibb/PHAT/blob/0.8.0-beta.2/QCReportSummary.ts), [generate QC report operation](https://github.com/chgibb/PHAT/blob/0.8.0-beta.2/src/req/operations/GenerateQCReport.ts)
