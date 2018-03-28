[Home](https://chgibb.github.io/PHATDocs/)

#### For 0.7.13-beta.1
[Contents](https://chgibb.github.io/PHATDocs/docs/releases/0.7.13-beta.1/home)

[Previous: Repository Structure](https://chgibb.github.io/PHATDocs/docs/releases/0.7.13-beta.1/repoStructure)

# Performance
We strive to provide performance in all our functionality implemented in first-party code. That is, features implemented first-party, but most importantly in our genome visualization. That functionality implemented by third-party code/binaries (such as alignment, QC reports etc) is not a focus of our continual profiling and optimization efforts. Monthly manual stress tests of genome visualization are performed using bacterial genomes with simulated alignments on an Acer C720p Chromebook running Ubuntu 14.04LTS. The primary goal being to keep startup times for application components under 1 second, RAM use (especially when visualising genomes with massive coverage) low and genome resizing and rendering times down. Here, we try to explain individual methods and techniques utilized to try to keep PHAT performant.

## V8 Switches
On startup, ```--expose_gc```, ```--nolazy```, ```--serialize_eager```, and ```--always_compact``` are applied through ```Electron.app.commandLine.appendSwitch```.
- ```--expose_gc``` is used to expose V8's garbage collector as a global function, invokable throughout the application. The genome builder uses this to invoke a GC pass immediately after rerendering a figure in order to try to keep its own footprint as low as possible and in an attempt to keep slowdowns deterministic.
- ```--no_lazy``` disables V8's lazy compilation. Everything that can be compiled, should be compiled. This is used to support our code caching strategy.
- ```--serialize_eager``` similiar to ```--no_lazy```. Applies when caching scripts. This is used to support our code caching strategy.
- ```--always_compact``` causes V8 to perform memory compaction on every GC pass. This is used to try to keep memory use down.

## V8 Code Caching
Through ```Node.js```' [VM module](https://nodejs.org/api/vm.html), we make heavy use of V8's code caching features in our own [code caching module](https://github.com/chgibb/PHAT/blob/0.7.13-beta.1/src/req/bootStrapCodeCache.ts). See some discussion [here](https://v8project.blogspot.ca/2015/07/code-caching.html). PHAT never executes any Javascript directly. All Javascript is compiled into ```.cdata``` files. In the case where existing ```.cdata``` is rejected due to a change in source (such as through updates), new ```.cdata``` is compiled and then run on the user's machine directly. These files are not shipped in updates in an attempt to keep update downloads as small as possible as well as to prevent issues with different CPUs. V8 will reject cached code compiled on a machine with a different microarchitecture.
## Javascript Bundle Optimizations
Over time, the currently employed set of bundle optimizations has evolved. Regular benchmarking has shown these specific optimizations, in the specific order they are listed yields fastest loading code (when combined with code caching, as described above). Performance benchmarking should be a continuous process. These are always subject to change if better performance can be had.

### RollupJS
[RollupJS](https://github.com/rollup/rollup) is used to pair down first party code to the minimum required at runtime. ```require``` statements for third-party modules are localised to the functions which require them in an attempt to eliminate bundling of third-party code into processes which don't require it.

### Bundle Collapsing
[bundle collapsing](https://github.com/substack/bundle-collapser) is used to remove paths from ```require``` statements and turn them into integers. This has shown to be a non-trivial share of bundle size.

### Minification
[Uglify-es](https://www.npmjs.com/package/uglify-es) is used to eliminate whitespace and strip comments, the majority of bundle size. Currently, property names are depended upon heavily at runtime. If we can figure out how to enable aggressive optimizations (such as symbol renaming) without breaking PHAT, there will be far more savings to be had.

### IIF/IIFE Optimizations
[Optimize-js](https://github.com/nolanlawson/optimize-js) is applied as a final step. A fantastic explanation and discussion is included at the link.

## Circular Visualization Performance
[ngPlasmid](https://github.com/chgibb/ngPlasmid) drives PHAT's circular visualization. ```ngPlasmid``` was born out of an attempt to improve the performance of [Angular Plasmid](https://github.com/vixis/angularplasmid), upon which PHAT's circular visualization is based. Discussion on techniques employed can be found in its [repository](https://github.com/chgibb/ngPlasmid).

[Contents](https://chgibb.github.io/PHATDocs/docs/releases/0.7.13-beta.1/home)