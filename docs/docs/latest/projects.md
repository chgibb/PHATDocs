[Home](https://chgibb.github.io/PHATDocs/)

#### For $TAGNAME$
[Contents](https://chgibb.github.io/PHATDocs/docs/latest/home)

# Projects
PHAT uses the concept of projects to group and maintain sets of input data, results and intermediary files together so they can be saved, copied and shared as one package. To create a new project, upon starting PHAT, click on "Create New Project" and give it a name. It will be created and opened if you click "OK". 

# About Projects
PHAT maintains a single "run time" directory (```resources/app/rt/```) internally where all intermediary files and results are written to. A manifest file is maintained within (```resources/app/rt/rt.json```) that describes everything from input files and their locations, to the positions and sizes of various application windows. This folder and it's manifest are what makeup a PHAT project. Anything written into this directory will be saved along with the rest of the project.  

PHAT makes a distinction between "open" and "not open" projects. An "open" project is that which currently resides in ```resources/app/rt/```. "Not open" projects are those which are not currently in ```resources/app/rt/``` and must have their tarballs unpacked into ```resources/app/rt/``` before they can be manipulated.

A project is said to be "not exported" if its tarball is saved to ```resources/app/projects/``` and it has a corresponding entry in ```resources/app/projectManifests.json```. Those projects which are "not exported" will appear in the list of projects in PHAT's "Select Project" window on startup. A project is said to be "exported" if its tarball is saved to a location other than ```resources/app/projects/``` and it has no entry in ```resources/app/projectManifests.json```.

For projects which are "not exported", the ```application.project.isExternal``` key in its manifest will be set to ```false``` and the ```application.project.externalPath``` key will be set to ```""```. The [save project operation](https://github.com/chgibb/PHAT/blob/$TAGNAME$/src/req/operations/SaveCurrentProject.ts) will save projects with ```application.project.isExternal``` set to ```false``` to ```resources/app/projects/uuid``` where ```uuid``` is the UUID of the project. For projects which are "exported", the ```application.project.isExternal``` key in its manifest will be set to ```true``` and the ```application.project.externalPath``` key will be set to an absolute path to the location to save the project tarball on save. The [save project operation](https://github.com/chgibb/PHAT/blob/$TAGNAME$/src/req/operations/SaveCurrentProject.ts) will save projects with ```application.project.isExternal``` set to ```true``` to the path defined in ```application.project.externalPath```. In case "exported" projects have been moved in the filesystem since the last time they were opened, the [open project operation](https://github.com/chgibb/PHAT/blob/$TAGNAME$/src/req/operations/OpenProject.ts) will patch the project's ```application.project.externalPath``` key with the filepath being loaded from.


[Contents](https://chgibb.github.io/PHATDocs/docs/latest/home)