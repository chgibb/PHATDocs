# PHAT 0.4.0-beta.1
### Downloads for This Release
* [Windows Installer](https://github.com/chgibb/PHAT/releases/download/0.4.0-beta.1/phat-win32-x64-setup.exe)  
* [Ubuntu Linux Debian Package](https://github.com/chgibb/PHAT/releases/download/0.4.0-beta.1/phat_0.4.0.beta.1_amd64.deb)  
* [Windows Portable](https://github.com/chgibb/PHAT/releases/download/0.4.0-beta.1/phat-win32-x64-portable.zip)  
* [Linux Portable](https://github.com/chgibb/PHAT/releases/download/0.4.0-beta.1/phat-linux-x64-portable.tar.gz)
#### Experimental
* [Red Hat Package Manager](https://github.com/chgibb/PHAT/releases/download/0.4.0-beta.1/phat-0.4.0-beta.1.x86_64.rpm)

### Documentation for This Release
* [Documentation](https://chgibb.github.io/PHATDocs/docs/releases/0.4.0-beta.1/home)

### Browse Source Code for This Release
* [Source for PHAT@0.4.0-beta.1](https://github.com/chgibb/PHAT/tree/0.4.0-beta.1)
* [Source for PHAT](https://github.com/chgibb/PHAT)

### Changelog
* Added indentation and formatting to all operation logs, making them more readable
* Disable interactivity for large figures( >= 50 contigs or 1,000,000 BP)
* Disable rendering contig names for large figures
* Feed non interactive figures through the same SVG compilation pipeline as data tracks
* Added "Figure Options" dropdown for access to the same editing options available through interacting with the figure
* Interactivity and global contig name display toggles available through "Figure Options"  
[View full diff](https://github.com/chgibb/PHAT/compare/0.3.0-beta.1...0.4.0-beta.1) 
  
## 73 Commits Since Last Release (0.3.0-beta.1) (most recent last)  
Chris Gibb: [renamed symbol](https://github.com/chgibb/PHAT/commit/801f826b911f8adf5884867f4e291f1f6ccee929)  
Chris Gibb: [reverted rename](https://github.com/chgibb/PHAT/commit/89a7f062510d1dcc5876188352e8012cb1b927d4)  
Chris Gibb: [added prop](https://github.com/chgibb/PHAT/commit/17e66b7ae62959e936fae7bb1f82a3c9bd1ccc77)  
Chris Gibb: [differentiate between interactive/non interactive figures](https://github.com/chgibb/PHAT/commit/0e533efdbdff3e513bcb00688c229c78644f3529)  
Chris Gibb: [renamed var](https://github.com/chgibb/PHAT/commit/d3a15dca0f2a25b91a5958f90f04ff55c7d69936)  
Chris Gibb: [clear basefigure svg string on reload](https://github.com/chgibb/PHAT/commit/5bb4a370a39ca6c31db64b07538943b5f9b08d65)  
Chris Gibb: [removed old code](https://github.com/chgibb/PHAT/commit/63a4dfca6c682872fa86969545638a752bc4dd8e)  
Chris Gibb: [cache logic for basefigure svg](https://github.com/chgibb/PHAT/commit/a69c391e23cea461b5f39b68eabf4834a133102a)  
Chris Gibb: [refresh caches on displaying non interactive figures](https://github.com/chgibb/PHAT/commit/b5b89bc9eaa8b51c16eec9890498bf9c0e3473fd)  
Chris Gibb: [broke fetching track svgs into function](https://github.com/chgibb/PHAT/commit/11a5773bc798b883f1d2b2ca012cd55ba7d37b2a)  
Chris Gibb: [broke div removal into function](https://github.com/chgibb/PHAT/commit/0370fc8ea0d7501044a7a50bb98bbce601046d3f)  
Chris Gibb: [export var](https://github.com/chgibb/PHAT/commit/134aefd86e0ec65e84762ac09a23796738ec1560)  
Chris Gibb: [reconstruct div on rerender](https://github.com/chgibb/PHAT/commit/ca0e85acf7e6dc479ec374d4c364f37a9902b7a9)  
Chris Gibb: [allow reseting of base figure](https://github.com/chgibb/PHAT/commit/d35b475dba768cfe566b6db69901f7a555bc6b07)  
Chris Gibb: [handle response from base figure compilation](https://github.com/chgibb/PHAT/commit/ab222533618503ddb36e3c423207ca2746e54134)  
Chris Gibb: [differentiate between interactive and non ineractive contigs when rendering](https://github.com/chgibb/PHAT/commit/48536c98eb1258e8658ae75736db7b44a96977e4)  
Chris Gibb: [disable figure name hovering when noninteractive](https://github.com/chgibb/PHAT/commit/fbdb02ac8a3f497a1cf0b490321d794985b82c22)  
Chris Gibb: [don't render contig names for large figures](https://github.com/chgibb/PHAT/commit/07db4691e649a55d088b65aff9f525ebe02e9ca7)  
Chris Gibb: [noop if figure is non interactive](https://github.com/chgibb/PHAT/commit/f2d8dd9dbb2775c8128d919504fb1e0b778716a6)  
Chris Gibb: [recompile base figure in function](https://github.com/chgibb/PHAT/commit/a79d35d81412747e90d1940815873e861a8b29a7)  
Chris Gibb: [renamed function](https://github.com/chgibb/PHAT/commit/98cfde04d832587cb9b941cc84c98002b9038d4e)  
Chris Gibb: [added figure options dropdown](https://github.com/chgibb/PHAT/commit/190f12831f8131e8f7703f2b0ff7145f9b3d13e9)  
Chris Gibb: [turn off interactivity for figures with large number of bp](https://github.com/chgibb/PHAT/commit/4e42a922cc803d146540b84f5f6a2ac9e71e653d)  
Chris Gibb: [remove markerclass only when noninteractive](https://github.com/chgibb/PHAT/commit/dba09f51c5723693770bb80be2246dd1902b2aeb)  
Chris Gibb: [added logging](https://github.com/chgibb/PHAT/commit/87e28b001aa77770e657ce5c284514642cf10cee)  
Chris Gibb: [removed logging and fixed exit](https://github.com/chgibb/PHAT/commit/6e11ae854f0a9c360a4b7d29a244d5af5d51085a)  
Chris Gibb: [method to gracefully exit forks](https://github.com/chgibb/PHAT/commit/3fb5d43f402fc85e8d0ba814783c9b2ef0a45468)  
Chris Gibb: [move to using exitFork](https://github.com/chgibb/PHAT/commit/6d773cf56013a609e7b487a8271f4cf7c35f833d)  
Chris Gibb: [abstracted out forking](https://github.com/chgibb/PHAT/commit/508f400ed2a9d3d9f5aeecb104a96b055d733f74)  
Chris Gibb: [start using makefork for selected operations](https://github.com/chgibb/PHAT/commit/3c57a94713205c9c935358e20ca610356efc6dcd)  
Chris Gibb: [moved all to makefork](https://github.com/chgibb/PHAT/commit/603defed8044b30f64253764912ee720f2be5f87)  
Chris Gibb: [revert commented out method](https://github.com/chgibb/PHAT/commit/9000539ae2b02ece764f02405054528525f075b7)  
Chris Gibb: [use exitFork for all operations](https://github.com/chgibb/PHAT/commit/2bfafa55215545c18684b8edf839556db31063d6)  
Chris Gibb: [use exitFork during fork failure](https://github.com/chgibb/PHAT/commit/7d9193d132892ef086fb91a221071e21719a26ab)  
Chris Gibb: [add formatting to logs](https://github.com/chgibb/PHAT/commit/71e76040434c2612e320024e7461736670a8feff)  
Chris Gibb: [added UI toggles for interactivity and showing contig names](https://github.com/chgibb/PHAT/commit/a1ab341847bf87986e52e3bf415fb8d3a34d5d46)  
Chris Gibb: [added method to delete svgs for base figures](https://github.com/chgibb/PHAT/commit/e5395aa69abcbd984091823a28be60cdc3121915)  
Chris Gibb: [delete svg in method](https://github.com/chgibb/PHAT/commit/8cfa249b11589d4ce23c74010b884c875696dab9)  
Chris Gibb: [made function synchronous](https://github.com/chgibb/PHAT/commit/d136e9fa1f0952331c8121c92785c208ba9d142f)  
Chris Gibb: [removed trailing comma in import](https://github.com/chgibb/PHAT/commit/92f8942073fb497800c3892e749bbb7c04c10cc8)  
Chris Gibb: [fixed radius update for non interactive figures](https://github.com/chgibb/PHAT/commit/8b3b852c9309968ea00d6748b5fd8b19c80da6fe)  
Chris Gibb: [trigger recompile for figure on track interval change](https://github.com/chgibb/PHAT/commit/debdfbfa2636a29904d7ff13c8f0764c6ce6b9b5)  
Chris Gibb: [recompile on interval display change](https://github.com/chgibb/PHAT/commit/695a1df3e41cdb644e7a185ba35f78c93f351dbe)  
unknown: [Added my name.](https://github.com/chgibb/PHAT/commit/ab091b6d5beb37992d283a378648fe3e641d13c7)  
Zack: [Added my name to Team Members list](https://github.com/chgibb/PHAT/commit/35147f0467657fc716a3ebc26cb74d391eea5d28)  
Chris Gibb: [Merge pull request #650 from chgibb/readmeNick  Added my name.](https://github.com/chgibb/PHAT/commit/059e8dd2f549bfe63a0eeed7be4fafe1496cee04)  
Chris Gibb: [Merge branch 'master' into readmeZack](https://github.com/chgibb/PHAT/commit/86ec477e4c8a59df6e45a43a2a39347034308029)  
Chris Gibb: [Merge pull request #651 from chgibb/readmeZack  Added my name to Team Members list](https://github.com/chgibb/PHAT/commit/e06254cbf166c612543fca878de5143ea80a5736)  
Chris Gibb: [removed old code](https://github.com/chgibb/PHAT/commit/ed0f3e32a1e3f0683603d93ea33c5031c4b9889d)  
Chris Gibb: [log return codes for forks](https://github.com/chgibb/PHAT/commit/1dbe16831e143b075b00ce800266d3b113d49b04)  
Chris Gibb: [exit after callback](https://github.com/chgibb/PHAT/commit/91c04418a535cf5c58daa8b67fe7db369c318b7b)  
Chris Gibb: [added dropdown option for editing figure name](https://github.com/chgibb/PHAT/commit/32bdb45dd7d38862b4342477abf3345443053dfd)  
Chris Gibb: [reset caches for non interactive figures](https://github.com/chgibb/PHAT/commit/772a0b829d90fb045b93484ab106fd4c2d888264)  
Chris Gibb: [refactored saving changes and fixed update for non interactive figures](https://github.com/chgibb/PHAT/commit/fe78c45204dd90119dd95095d70bce23ca2770f5)  
Chris Gibb: [added dropdown option to edit contigs](https://github.com/chgibb/PHAT/commit/9430333e65a457716d00c1f2a9af7bf5d2babede)  
Chris Gibb: [open edit contigs modal onclick](https://github.com/chgibb/PHAT/commit/39ebbee5f94384ebd0dd2b1b6d9856c278905815)  
Chris Gibb: [barebones edit contigs modal](https://github.com/chgibb/PHAT/commit/e549330932f0abc679f07c104e167a233c869fa7)  
Chris Gibb: [render reference contigs with hover](https://github.com/chgibb/PHAT/commit/8bddd53ebff4b6581a8d5d0c26d37533682098fe)  
Chris Gibb: [click to edit custom contigs](https://github.com/chgibb/PHAT/commit/ce697b9aa814a2e342aaf8f5b60e015efa8e41e7)  
Chris Gibb: [click to edit reference contigs](https://github.com/chgibb/PHAT/commit/5204522d77a6ec7e8330247547632357f96c15b4)  
Chris Gibb: [fixed figure update for non interactive figures after saving changes to a contig](https://github.com/chgibb/PHAT/commit/099da7c63610695452b71d80cdb7ee9c6a6cd7dc)  
Chris Gibb: [fixed track loading text](https://github.com/chgibb/PHAT/commit/2077d8f14541a7b260238f347a62ebb2ea50a333)  
Chris Gibb: [fixed noninteractive resizing and interval updates](https://github.com/chgibb/PHAT/commit/91df19fa945d8805b45ec1ae6d223c3c02054c33)  
Chris Gibb: [Merge branch 'master' into 648](https://github.com/chgibb/PHAT/commit/30f09d595bffb14039e20f5595c7e17d938b12e6)  
Chris Gibb: [commented modules](https://github.com/chgibb/PHAT/commit/bb6338e7368de23f83afaa61cd46b03a5691e64f)  
Chris Gibb: [Merge branch '648' of https://github.com/chgibb/phat into 648](https://github.com/chgibb/PHAT/commit/07279877ba3cf2fd7cbd1fce7f2dd4b1224e312a)  
Chris Gibb: [added comments](https://github.com/chgibb/PHAT/commit/9d9b142ce4fdd7c3a8ec9c2b9f767387757765d0)  
Chris Gibb: [Merge pull request #652 from chgibb/648  Non-Interactive Figures](https://github.com/chgibb/PHAT/commit/a31fe78ae1d890fc28cf73076ddfce4919ec6ab2)  
Chris Gibb: [Merge branch 'beta-staging' into master](https://github.com/chgibb/PHAT/commit/1b50946508d25dcf7fb2454b4cab01b359bd1fa8)  
Chris Gibb: [Merge pull request #653 from chgibb/master  Non-Interactive Figures](https://github.com/chgibb/PHAT/commit/f899655dcd0579c74c1ad8992262994d82caf44e)  
Chris Gibb: [Merge branch 'beta' into beta-staging](https://github.com/chgibb/PHAT/commit/7dfe0177363e2bcc6087dc2399dcec2625fd4b44)  
Chris Gibb: [Merge pull request #654 from chgibb/beta-staging  Non-Interactive Figures](https://github.com/chgibb/PHAT/commit/04378ad17055e4fc29dfb3f58d67f22bee9c8256)  
Chris Gibb: [Bumped to 0.4.0-beta.1](https://github.com/chgibb/PHAT/commit/4c2108b841aaebccbf72efda771011a25aae89ab)  