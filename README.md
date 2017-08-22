# PHATDocs
This repo contains the source code for https://chgibb.github.io/PHATDocs/ as well as the deployment system to make new releases of https://github.com/chgibb/PHAT available for users.

Documentation, changelogs, release notes and download links for each release of PHAT should be kept up to date on PHATDocs. For each release of PHAT, documentation will be copied and links and tags patched from whats in the [latest docs](https://github.com/chgibb/PHATDocs/tree/master/docs/docs/latest). The release's download page will be taken from [here](https://github.com/chgibb/PHATDocs/blob/master/releaseTemplate.md) and its changelog generated from the appropriate template, dependent on what branch is being released from [here](https://github.com/chgibb/PHATDocs/tree/master/docs/docs).  

All new changes should first be merged to ```beta-staging``` before the ```version``` field in ```package.json``` is bumped and the branch is merged to ```beta```. Once a merge has been made to ```beta```, it should be immediately released. ```beta``` should contain EXACTLY what is in the currently LATEST beta release. All efforts should be made to keep changelogs and documentation for new features up to date on this repo so they are accurate upon release.

Once a ```beta``` line has been around long enough, a decision will be made to promote the latest ```beta``` to ```stable```. A pull request for merging ```beta``` to ```stable-staging``` should be opened. One final PR and review from ```stable-staging``` to ```stable``` must be made before releasing a ```stable``` release. 

PHAT should be released only from either the ```beta``` or ```stable``` branch. Attempts to release from other branchs will probably work but will have broken documentation and breaks with our release process.

In order to cut a new release and generate documentation, this repo should be cloned and the following run:  

```node scripts/deploy <token> <tag-name> beta | stable```
Where ```<token>``` is a GitHub token with permission to create releases on https://github.com/chgibb/PHAT ```<tag-name>``` is the version (and git tag) for the release, followed finally by the branch to release from (either ```beta``` or ```stable```). This will result in documentation and changelog being generated, release history being updated and release being created. The results should be committed and pushed.

# Contributing
Please make all PRs against those files in ```docs/docs/latest/```. All files in latest are used to build documentation for the latest release when it is cut. Unless there is erroneous information in documentation for previous releases, they should be left as is.

# How to Cite PHAT (pre-print)
Gibb CM, Jackson R, Mohammed S, Fiaidhi J, Zehbe I. Pathogen-Host Analysis Tool (PHAT): an Integrative Platform to Analyze Pathogen-Host Relationships in Next-Generation Sequencing Data. bioRxiv. https://doi.org/10.1101/178327
