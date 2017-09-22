[Home](https://chgibb.github.io/PHATDocs/)

#### For 0.5.0-beta.1
[Contents](https://chgibb.github.io/PHATDocs/docs/releases/0.5.0-beta.1/home)

[Previous: Overview](https://chgibb.github.io/PHATDocs/docs/releases/0.5.0-beta.1/archOverview)

# Contributing

## Setting Up Development Environment
PHAT may be developed on either a Linux based OS or Windows. Both require [git](https://git-scm.com/) as well as the following development dependencies be installed manually for each platform. 

## Manually Installed Dev Dependencies
Note: If you find this list of out of date or incomplete, please [let us know](https://github.com/chgibb/PHAT/pulls).
### Windows
Developing PHAT for Windows requires the following be installed manually:
-  [NodeJS and NPM](https://nodejs.org/en/download/)  
    - Note: All NPM dependencies do not need to be installed manually
- [Cygwin](https://www.cygwin.com/)
    - Note: PHAT builds on our CI system for Windows, [Appveyor](https://www.appveyor.com/) using [MSys2](http://www.msys2.org/) though we recommend Cygwin for hacking on PHAT directly
- Cygwin Packages  
    - wget
    - curl
    - gcc
- [MinGW](http://www.mingw.org/)
- .NET Framework 3.5

### Linux
-  [NodeJS and NPM](https://nodejs.org/en/download/)  
    - Note: All NPM dependencies do not need to be installed manually
- gcc
- gtk2
- rpm  
Note: The majority of development depencies on Linux are installed by running ```bash scripts/install.bash```.

## Preparing Environment
Note: All of PHAT's tooling is written in ```bash``` scripts. This guide assumes Windows users will be using either Cygwin, or MSys2 to develop with.  

After acquiring the necessary manual dependencies for your platform, clone PHAT into a directory of your choice and run ```bash scripts/install.bash``` in the root of the repository directory. This will fetch the remaining development dependencies for your platform as well as all third party programs used by PHAT. This only needs to be run once. 

```scripts/install.bash``` will also create the initial PHAT application package, ```phat-linux-x64``` or ```phat-win32-x64``` depending on your platform. Initally, this package will contain nothing except the third party programs and infrastructure to run PHAT. Running ```bash scripts/build.bash``` will compile all first party code and assets for use. If you happen to break your application package while hacking on PHAT or accidentally delete it, running ```bash scripts/package.bash```, followed by ```bash scripts/build.bash``` will recreate it.

## Hacking on PHAT
In order to see your code changes reflected in PHAT, rerun ```scripts/build.bash```. Because PHAT is heavily process based, you can exploit this to do a form of hot reloading.

Certain actions in PHAT during development may be slower than in release versions due to running unoptimized code and in most cases, without preheated caches. Any changes caused in process bundles by running ```scripts/build.bash``` will invalidate that bundles associated cache and cause PHAT to recompile it, which may cause some jank or lag during development. Caches compiled from unoptimized Javascript bundles will also be slower than their release counterparts.

In order to optimize a PHAT application package, run ```bash scripts/optPackage.bash```. This will optimize and compress Javascript and precompile caches for all window process bundles. Running ```bash scripts/build.bash``` will recompile PHAT as unoptimized.

If you want to test release artifacts for your platform, running ```bash scripts/prepareLinuxRelease.bash``` will prepare all the necessary artifacts for a Linux release (installers, update package, portable edition etc), ```bash scripts/prepareWindowsRelease.bash``` will do the same for Windows. You can only build a release for the platform you are currently on.

Release artifacts should not be built and uploaded manually as part of a release. This process is handled by our CI/CD services automatically.

To test PHAT, first run ```bash scripts/buildtests.bash``` to setup and build the test environment. Running ```npm test``` will then commence the tests. Running ```bash scripts/cleanTests.bash``` will remove the test environment and all artifacts. It will also strip your application package of logs and projects. 

PHAT tests individual components in a separate test environment which mimics the regular application package without any Electron components. PHAT also tests the current application package by compiling special test bundles, swapping them out for the usual ```mainProcess.js``` and running them. After running ```bash scripts/cleanTests.bash``` you will need to run ```bash scripts/build.bash``` to recompile a standard ```mainProcess.js```. Running PHAT after testing, without rebuilding will leave the last test bundle in place inside of the application package. This is useful for debugging tricky tests but isn't usually desirable in most cases.


[Next: Repository Structure](https://chgibb.github.io/PHATDocs/docs/releases/0.5.0-beta.1/repoStructure)

[Contents](https://chgibb.github.io/PHATDocs/docs/releases/0.5.0-beta.1/home)