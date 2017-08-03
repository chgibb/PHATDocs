const fs = require("fs");

const fse = require("fs-extra");
const walk = require("walk");

const isMarkDown = /\.md/;

module.exports = async function generateReleaseDocsFromLatest(tag_name)
{
    return new Promise((resolve,reject) => {
        let walker = walk.walk(`docs/docs/latest`,{});
        fs.mkdirSync(`docs/docs/releases/${tag_name}`);

        //Patch all doc links to point from latest to the version of this deployment
        //Also patch occurences of $TAGNAME$ with this version
        walker.on("file",function(root,fileStats,next){
            
            if(!isMarkDown.test(fileStats.name))
            {
                fse.copySync(`${root}/${fileStats.name}`,`docs/docs/releases/${tag_name}/${fileStats.name}`);
                next();
                return;
            }

            let file = fs.readFileSync(`${root}/${fileStats.name}`).toString();
            file = file.replace(/\/latest\//g,`/releases/${tag_name}/`);
            file = file.replace(/\$TAGNAME\$/g,`${tag_name}`);     
            fs.writeFileSync(`docs/docs/releases/${tag_name}/${fileStats.name}`,file);
            next();
        });
        walker.on("end",function(){
            resolve();
        });
    });
}