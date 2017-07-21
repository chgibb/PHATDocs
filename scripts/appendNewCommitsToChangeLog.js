const fs = require("fs");
const cp = require("child_process");

module.exports = async function appendNewCommitsToChangeLog(user,repo,token,last_tag,tag_name,branch)
{
    return new Promise((resolve,reject) => {
        let res = undefined;
        let curl = cp.spawn(`/bin/sh`,[`-c`,`curl -X "GET" "https://api.github.com/repos/${user}/${repo}/compare/${last_tag}...${branch}" -H "Authorization: token ${token}"`])
        curl.stdout.on("data",function(data){
            if(!res)
                res = Buffer.from(data);
            else
                res = Buffer.concat([res,data]);
        });
        curl.stderr.on("data",function(data){
        });
        curl.on("close",function(){
            let commits = JSON.parse(res.toString()).commits;
            fs.appendFileSync(`docs/docs/${branch}ChangeLog.md`,`  ${"\n"}## ${commits.length} Commits Since Last Release (${last_tag}) (most recent last)  ${"\n"}`);
            for(let i = 0; i != commits.length; ++i)
            {
                //extract the commit sha out of the url
                let parts = commits[i].commit.url.split(`/`);
                let shaForURL = parts[8];
                //place commit messages with line breaks on one line
                let message = commits[i].commit.message.replace(/\n/g," ");
                fs.appendFileSync(`docs/docs/${branch}ChangeLog.md`,`${commits[i].commit.author.name}: [${message}](https://github.com/${user}/${repo}/commit/${shaForURL})  ${"\n"}`);
            }
            resolve();
        });
    });
}
