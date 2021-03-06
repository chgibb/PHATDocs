# PHAT 0.10.1
### Downloads for This Release 
* [Ubuntu Linux Debian Package](https://github.com/chgibb/PHAT/releases/download/0.10.1/phat_0.10.1_amd64.deb)  
* [Windows Portable](https://github.com/chgibb/PHAT/releases/download/0.10.1/phat-win32-x64-portable.zip)  
* [Linux Portable](https://github.com/chgibb/PHAT/releases/download/0.10.1/phat-linux-x64-portable.tar.gz)
#### Experimental
* [Red Hat Package Manager](https://github.com/chgibb/PHAT/releases/download/0.10.1/phat-0.10.1.x86_64.rpm)

### Documentation for This Release
* [Documentation](https://chgibb.github.io/PHATDocs/docs/releases/0.10.1/home)

### Browse Source Code for This Release
* [Source for PHAT@0.10.1](https://github.com/chgibb/PHAT/tree/0.10.1)
* [Source for PHAT](https://github.com/chgibb/PHAT)

### Changelog
* Hisat2 can now be selected as an aligner in addition to Bowtie2  
* Updated PHAT citation to point to Bioinformatics  
[View full diff](https://github.com/chgibb/PHAT/compare/0.9.2...0.10.1) 
  
## 66 Commits Since Last Release (0.9.2) (most recent last)  
Chris Gibb: [Update README.md](https://github.com/chgibb/PHAT/commit/e471625646ba12010d6661cee4bf6e07c0b2be05)  
Chris Gibb: [Merge pull request #821 from chgibb/beta  Backport Merges and Version](https://github.com/chgibb/PHAT/commit/d2e1ca5f63f5eae398c5e8f0fa49ad93795febf4)  
Chris Gibb: [Update README.md](https://github.com/chgibb/PHAT/commit/830d2c9c63e36e6aff700e6a94e92ea4664d4e58)  
Chris Gibb: [Merge pull request #824 from chgibb/stable  Backport Merges and Version](https://github.com/chgibb/PHAT/commit/c1b966568a8976418d0a8c56963f30822d9d9486)  
Chris Gibb: [bumped version](https://github.com/chgibb/PHAT/commit/273d47944006c5b45da83aa45cf8a9a0373c4f97)  
Chris Gibb: [renamed operation](https://github.com/chgibb/PHAT/commit/fdcc6fb62e53f00c1dcd1b2b46b7d89fd1ad3d32)  
Chris Gibb: [override vscode file watcher settings](https://github.com/chgibb/PHAT/commit/ce1c22d9296641fc63a15d82352c1925abeda985)  
Chris Gibb: [index fasta prior to alignment](https://github.com/chgibb/PHAT/commit/f1b2c211f9e9418669c94b4020583bbb35842f98)  
Chris Gibb: [removed old smoke test step and fixed wait for nonexistent operation](https://github.com/chgibb/PHAT/commit/b161cb831388bb4d0b385fa403f27cc6fab08f3c)  
Chris Gibb: [remove redundant asyncs](https://github.com/chgibb/PHAT/commit/71b4279963cae275a82b99aaa52decd691507438)  
Chris Gibb: [remove ref indexing from gui](https://github.com/chgibb/PHAT/commit/d912560da3aec5d389bdf93d49e12348029425c4)  
Chris Gibb: [initial hisat2 download and bundling](https://github.com/chgibb/PHAT/commit/78f1d935b498a2dbd3e4a2a7123a5748e9cb2279)  
Chris Gibb: [ignore compiled sources in editor](https://github.com/chgibb/PHAT/commit/40220ae41cd163ad870f4740ac881d530ed154b7)  
Chris Gibb: [normalize naming for alignments and start adding hisat2 specific plumbing code](https://github.com/chgibb/PHAT/commit/d48f26587c978ad24845908c2c42ff12f50cfea3)  
Chris Gibb: [normalize more path and file names. Hisat2 index and build plumbing. Start hisat2 index tests](https://github.com/chgibb/PHAT/commit/680d049abb82faac71e4431451641ede4f683461)  
Chris Gibb: [include failed index file in error message](https://github.com/chgibb/PHAT/commit/3ce12d43821059d0989d36302070311200b13e62)  
Chris Gibb: [hisat2 indexing operation plumbing](https://github.com/chgibb/PHAT/commit/0841caeba81f6701576eac02714126a0e1bc7bf0)  
Chris Gibb: [don't require writing of rev.x.ht2 indices](https://github.com/chgibb/PHAT/commit/3cbdd49bce3640be618617610f4547e13414e6da)  
Chris Gibb: [expand file exclusion lists](https://github.com/chgibb/PHAT/commit/a15eb59d1804cc341649d9c3c0c99b533fe173b9)  
Chris Gibb: [hisat2 hpv18 index and hpv16 alignment tests](https://github.com/chgibb/PHAT/commit/d9b55e33b30c238f9f33c3d2a647076d69033c06)  
Chris Gibb: [L6R1 hpv16 and hpv18 hisat2 tests](https://github.com/chgibb/PHAT/commit/28c83b4df4ea09b0387c93bf291e3f8d810147ed)  
Chris Gibb: [fixed typing](https://github.com/chgibb/PHAT/commit/249ff9b105ee586fba966046b2a277e1d1ef674a)  
Chris Gibb: [fixed glob to ignore compiler artifacts](https://github.com/chgibb/PHAT/commit/bfb3cb96d0c819e15e89851c3c8ffeba379bed79)  
Chris Gibb: [fixed hisat2 path quoting](https://github.com/chgibb/PHAT/commit/cdd82135acd7ecadbae15b5e3a1309b098ea7660)  
Chris Gibb: [refactored promise chains and tightened test success criteria for alignments](https://github.com/chgibb/PHAT/commit/7b132cffadf5d2f8c02e496c74cf3528be11160c)  
Chris Gibb: [show aligner used in output and genome builder](https://github.com/chgibb/PHAT/commit/bb2cda6408939b6a03a4497edb58921fe6dcc911)  
Chris Gibb: [expanded modal to fit wider tables. Fixed modal transition error](https://github.com/chgibb/PHAT/commit/b2f5247a5f1b7ba53d8de6f5da270f0e0763d85a)  
chgibb: [initial hisat2 windows bundling](https://github.com/chgibb/PHAT/commit/eb20753fd26acba344e679296c89b186651354e6)  
chgibb: [ignore app directoy in vscode](https://github.com/chgibb/PHAT/commit/18f236bce4d429cca73945aa4e06e7046024b221)  
chgibb: [explicitly reject and resolve](https://github.com/chgibb/PHAT/commit/cc99c09ac788d044e97b02b8b619b18783b2eebf)  
chgibb: [changed quote use and use of perl](https://github.com/chgibb/PHAT/commit/fe64c9253b9929a92f9bf5ac56a27612e75c1a97)  
chgibb: [reject on error](https://github.com/chgibb/PHAT/commit/a1452134670a93a9999729afac463e35b4591a38)  
chgibb: [explicitly return](https://github.com/chgibb/PHAT/commit/c2af3e22196635a79c10c4ef54668096c0e9f2df)  
chgibb: [download linux version on windows for invoke script. Clean artifacts after copying out needed files](https://github.com/chgibb/PHAT/commit/f199b2f11034b0cfb479c1a0767b5631db9b437c)  
chgibb: [download hisat2 archives on start](https://github.com/chgibb/PHAT/commit/74c16b89e23a756c51379bbfe839b6183d9ca399)  
Chris Gibb: [converted tab to spaces](https://github.com/chgibb/PHAT/commit/9fa2964a8d80ccccfb5b5fc6114644bcdb302eaa)  
Chris Gibb: [removed old invoke method](https://github.com/chgibb/PHAT/commit/2e91050e029e1fa91c94f6e9f816472dc225ab80)  
Chris Gibb: [Merge pull request #825 from chgibb/hisat2  Hisat2](https://github.com/chgibb/PHAT/commit/e8a0a3f5461879388baa18bf23a941f8df73e689)  
Chris Gibb: [Merge pull request #827 from chgibb/master  0.10.0-beta.1](https://github.com/chgibb/PHAT/commit/afa20d022e14e96ccb9bfad58952b91c1a4680b5)  
Chris Gibb: [Merge pull request #828 from chgibb/beta-staging  0.10.0-beta.1](https://github.com/chgibb/PHAT/commit/8510387611ff4d1ab6964f9516371b1d4f5a472e)  
Chris Gibb: [Bumped to 0.10.0-beta.1](https://github.com/chgibb/PHAT/commit/310fa41190c92a169be485dc7898814bcbf53358)  
Chris Gibb: [Update README.md](https://github.com/chgibb/PHAT/commit/4d3a1018e9cb0ce08a8a6946972d8802f52d9629)  
Chris Gibb: [Merge pull request #829 from chgibb/beta  Promote 0.10.0-beta.1 to Stable](https://github.com/chgibb/PHAT/commit/29f636249fcbc09f21018f20374543a4b2a5d9b3)  
Chris Gibb: [stop calling disconnect on exit from fork](https://github.com/chgibb/PHAT/commit/19fbcff631423d4e8ec95fd871764cf050029666)  
Chris Gibb: [Update citation to point to Bioinformatics](https://github.com/chgibb/PHAT/commit/6effe77e3dd1fc51f29e946c869d3bad1f6cfa7f)  
Chris Gibb: [updated readme citation](https://github.com/chgibb/PHAT/commit/e51b2961a75fc8c0722593d9c8028ffd4eb4667f)  
Chris Gibb: [make processes opt out of disconnecting IPC channel by default. Opt out InputBamFileProcess](https://github.com/chgibb/PHAT/commit/1925d91bfd641baaadd7193c664e4b33ae2149d9)  
Chris Gibb: [Merge pull request #831 from chgibb/citation  Update Citation Links](https://github.com/chgibb/PHAT/commit/4ce43b59109b77e69b19e6e0d6fcdef5bb71f4cc)  
Chris Gibb: [function to retrieve full operation log content](https://github.com/chgibb/PHAT/commit/ef48f25147f97aae879e0d83fff984cf521f5025)  
Chris Gibb: [print content of operation logs on test failures](https://github.com/chgibb/PHAT/commit/4f5c3e790781fba9b20777e3c44705043fa5cb51)  
Chris Gibb: [fix file eol](https://github.com/chgibb/PHAT/commit/e16142ee827214ec12b19d3f5855aa9b22983b02)  
chgibb: [fixed spacing and use ws regex](https://github.com/chgibb/PHAT/commit/5e85738ef11a2c647b31a722b4925fa32a13d7da)  
chgibb: [fix escape in ws regex](https://github.com/chgibb/PHAT/commit/6a1f9862ba5d253f2bfa9ff2627b6b315b862d8a)  
chgibb: [added unit test for bowtie2 report parsing](https://github.com/chgibb/PHAT/commit/8c9cbd65ee998f67991fa4b0ce41746874a05726)  
chgibb: [refactor report parsing step and add another test case](https://github.com/chgibb/PHAT/commit/5d14b392ebb77bbea02b634ddc32a3aa226b727a)  
chgibb: [delay resolution](https://github.com/chgibb/PHAT/commit/318294ae4bc3c3288bce49693939918d589f990d)  
Chris Gibb: [Removed pre-print notice](https://github.com/chgibb/PHAT/commit/4c5075aac5de144646fe83c2846dbfb227c9eb50)  
Chris Gibb: [Merge branch 'master' into ci](https://github.com/chgibb/PHAT/commit/3c843e3c2f8159804c5024c282983c2bf137b2dc)  
Chris Gibb: [Merge pull request #832 from chgibb/ci  CI Fixes](https://github.com/chgibb/PHAT/commit/25cbd75cd889f6618290112e907e35bdb6f62001)  
Chris Gibb: [Merge pull request #833 from chgibb/master  Update Citation and CI Fixes](https://github.com/chgibb/PHAT/commit/277ec22d576c6411d19f37d5470390a72cef16e9)  
Chris Gibb: [Merge branch 'beta' into beta-staging](https://github.com/chgibb/PHAT/commit/86a50983b82b7c8a43fa4b10e8ce66a1c69dcaa2)  
Chris Gibb: [Merge pull request #834 from chgibb/beta-staging  Update Citation and CI Fixes](https://github.com/chgibb/PHAT/commit/572fe2321fd5f2912c4601440fe867afa67a9f2b)  
Chris Gibb: [Bumped to 0.10.1-beta.1](https://github.com/chgibb/PHAT/commit/60c55cfe1ed96fbedda66207b47d90e096f1cc5c)  
Chris Gibb: [Merge pull request #835 from chgibb/beta  Promote 0.10.1-beta.1 to Stable](https://github.com/chgibb/PHAT/commit/b69034b555ccd0dee3eaa984a406eeda1e33e680)  
Chris Gibb: [Merge pull request #837 from chgibb/stable-staging  Promote 0.10.1-beta.1 to Stable](https://github.com/chgibb/PHAT/commit/fea1d9631bd74c6d499b295b3dabbc0b60d2be1c)  
Chris Gibb: [Bumped to 0.10.1](https://github.com/chgibb/PHAT/commit/57cd2dd1e0bcb4a53d6b547a5c8f0c91b73b551f)  
