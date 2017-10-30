# PHAT 0.7.4-beta.1
### Downloads for This Release 
* [Ubuntu Linux Debian Package](https://github.com/chgibb/PHAT/releases/download/0.7.4-beta.1/phat_0.7.4.beta.1_amd64.deb)  
* [Windows Portable](https://github.com/chgibb/PHAT/releases/download/0.7.4-beta.1/phat-win32-x64-portable.zip)  
* [Linux Portable](https://github.com/chgibb/PHAT/releases/download/0.7.4-beta.1/phat-linux-x64-portable.tar.gz)
#### Experimental
* [Red Hat Package Manager](https://github.com/chgibb/PHAT/releases/download/0.7.4-beta.1/phat-0.7.4-beta.1.x86_64.rpm)

### Documentation for This Release
* [Documentation](https://chgibb.github.io/PHATDocs/docs/releases/0.7.4-beta.1/home)

### Browse Source Code for This Release
* [Source for PHAT@0.7.4-beta.1](https://github.com/chgibb/PHAT/tree/0.7.4-beta.1)
* [Source for PHAT](https://github.com/chgibb/PHAT)

### Changelog
* Fixed navbar scrolling in genome builder
* Fixed genome builder side bar colour
* Improved radius and BP inputs in navbar
* Improved feedback hovering cells and rows in tables
* Fixed DOM leak. ~3x to ~4x decrease in memory usage
* Integrated GC invocations into rendering pipeline
* Memory will decrease/increase appropriately when moving between simple/complex figures
* Integrated new [SVG compiler](https://github.com/chgibb/ngPlasmid). Anywhere from ~5x to ~160x faster coverage track compilation  
[View full diff](https://github.com/chgibb/PHAT/compare/0.7.0-beta.1...0.7.4-beta.1) 
  
## 40 Commits Since Last Release (0.7.0-beta.1) (most recent last)  
Chris Gibb: [updated](https://github.com/chgibb/PHAT/commit/239af3515f4aa72db26f9935b008e951f61bc011)  
Chris Gibb: [added zoom prop](https://github.com/chgibb/PHAT/commit/3cd17c5feb3b4ac738631fb72a072db5772c6d30)  
Chris Gibb: [added back setting zoom](https://github.com/chgibb/PHAT/commit/78e5d43a0e5fdd9611609e0ebc882c1752f21c25)  
Chris Gibb: [fixed id generation on divs](https://github.com/chgibb/PHAT/commit/721dfe8e9c20c48b901966f00f86a4d10c39a8fa)  
Mitchell Pynn: [Top Fixed NavBar, cleaned up input section](https://github.com/chgibb/PHAT/commit/0b7e712f44706b012baca5845b5316929584396c)  
Zack: [Added cellHover css class for highlighting clickable buttons within tables, applied it to FastaView](https://github.com/chgibb/PHAT/commit/80cc6fd4428bf0acd3233c2bc74baa8c745f6cab)  
Chris Gibb: [Merge branch 'master' into 670](https://github.com/chgibb/PHAT/commit/94eea9a240972b1e97e55acf7ae9335705f60b5a)  
Unknown: [Removed placeholder text](https://github.com/chgibb/PHAT/commit/ec1f7e861b8648758dd103fbc6d750c919cceba0)  
Unknown: [Merge remote-tracking branch 'origin/670' into 670](https://github.com/chgibb/PHAT/commit/5c12549188146ba6c7beb8b4e4359b36b8f09c8b)  
Chris Gibb: [Merge branch 'master' into 670](https://github.com/chgibb/PHAT/commit/f0807141a3353d486672c56499a9a9a7a35c78c8)  
Zack: [changed cellHover color](https://github.com/chgibb/PHAT/commit/d7205331e51f6de29787f07050cb9a2a81813650)  
Chris Gibb: [Merge branch 'master' into Zack](https://github.com/chgibb/PHAT/commit/09f1c445a4b6a2cb60f4654c98748def1b0bdbc3)  
Zack: [Applied cellHover to the rest of PHAT, added cursor change to the cellHover css](https://github.com/chgibb/PHAT/commit/0498230226eebca733ec67bebdf91a1b1f10a3b2)  
Zack: [Merge branch 'Zack' of https://github.com/chgibb/phat into Zack](https://github.com/chgibb/PHAT/commit/cc535ef043e39de05ce317f12d742a52c7a68265)  
Chris Gibb: [Merge branch 'master' into 670](https://github.com/chgibb/PHAT/commit/d25fa3426af69fa3b1b6895db8594c2ece6fefe7)  
Chris Gibb: [Merge branch 'master' into Zack](https://github.com/chgibb/PHAT/commit/5953c0ecdff9ae3c332d7353ceaaf52ab4697fac)  
Chris Gibb: [Merge pull request #697 from chgibb/Zack  Modified activeHover and added CellHover class](https://github.com/chgibb/PHAT/commit/139b61a38143e2aa8cea35f843e760a365f7eb4d)  
Chris Gibb: [Merge branch 'master' into 670](https://github.com/chgibb/PHAT/commit/56fe0e28749b2ce7d9dda47a86f59651bf884b06)  
Chris Gibb: [Merge pull request #696 from chgibb/670  Genome Builder Nav Improvments](https://github.com/chgibb/PHAT/commit/7c6ffd80a7d46f01aceb84e2272733f451270f23)  
Chris Gibb: [updated](https://github.com/chgibb/PHAT/commit/991775316f6faf7d14379a0e351a0feaca100f3d)  
Chris Gibb: [added packages](https://github.com/chgibb/PHAT/commit/654bef32b66c11e3768c240a632847c393a1322d)  
Chris Gibb: [integrated ngplasmid into method](https://github.com/chgibb/PHAT/commit/e49d61e13e480099b2aa9a33b69ef5aa8cec1ef3)  
Chris Gibb: [fixed method](https://github.com/chgibb/PHAT/commit/939ef2701093b18ef6603faf2f702c1cfbb898cb)  
Chris Gibb: [compile coverage tracks in-process](https://github.com/chgibb/PHAT/commit/7611c7a887765869a36f90891407b9a9ba747453)  
Chris Gibb: [added await](https://github.com/chgibb/PHAT/commit/4efcfaa3ba836e784594924b09416744d98dca4f)  
Chris Gibb: [stop interleaving to allow for dom updates](https://github.com/chgibb/PHAT/commit/ae892eb707644e57cb7edf78305fc651369a721d)  
Chris Gibb: [updated comments](https://github.com/chgibb/PHAT/commit/b94d0799cbd8db7cbe0a19f2a73d08601239f50e)  
Chris Gibb: [changed target to esNext](https://github.com/chgibb/PHAT/commit/d84c41a0b577d354357e8a881b97f2d953529219)  
Chris Gibb: [removed logging](https://github.com/chgibb/PHAT/commit/ea110ce5ec7bd65cea1e94861cf9185f03468c15)  
Chris Gibb: [renamed symbol and fixed DOM leak](https://github.com/chgibb/PHAT/commit/2fe0d4826c6b346812cdbcb7a9102fa0f8ab80d0)  
Chris Gibb: [updated deps](https://github.com/chgibb/PHAT/commit/e36c2d12b1edd73f3c5ece4e76b3fe3e9ed8702a)  
Chris Gibb: [added packages](https://github.com/chgibb/PHAT/commit/ebd6b5cef3737465b4f5ddb3eaae7aec983cf604)  
Chris Gibb: [moved to programmatic rollup. Fixing compat with rollup and cjs deps](https://github.com/chgibb/PHAT/commit/0e1113ef96587e915613868ec3385f98b016599b)  
Chris Gibb: [fixed import](https://github.com/chgibb/PHAT/commit/27e3f45797d81c477ef437bf3c2b3c9db3b42d52)  
Chris Gibb: [Merge pull request #704 from chgibb/ngPlasmid2  Genome Builder Performance Improvements](https://github.com/chgibb/PHAT/commit/eee4352c0cd7cbd8f0078608a8796554dec5ace0)  
Chris Gibb: [Merge branch 'beta-staging' into master](https://github.com/chgibb/PHAT/commit/b6bbe4328380f3c0532cd91ca24bc135f61f18c0)  
Chris Gibb: [Update README.md](https://github.com/chgibb/PHAT/commit/5602117767b6fe7554c63f5d9d4f8a23d4f4149f)  
Chris Gibb: [Merge pull request #705 from chgibb/master  0.7.4-beta.1](https://github.com/chgibb/PHAT/commit/c07a60327b1a65a4cea69d401714398d1b913059)  
Chris Gibb: [Merge pull request #706 from chgibb/beta-staging  0.7.4-beta.1](https://github.com/chgibb/PHAT/commit/327ad343de1125a4d5249828840ed450ddd6f965)  
Chris Gibb: [Bumped to 0.7.4-beta.1](https://github.com/chgibb/PHAT/commit/f5a8fdab1bc1d0bd2576b6468705d7cca947a4e4)  
