const GitHubAPI = require("github-api");
module.exports = async function bumpVersion(user,repo,token,tag_name,branch)
{
    return new Promise((resolve,reject) => {
        const ghapi = new GitHubAPI({token : token});
        const repoHandle = ghapi.getRepo(user,repo);
        repoHandle.getContents(branch,"package.json",true,function(error,result,request){
            if(error)
            {
                console.log(error);
                return reject(error);
            }
            let package = result;
            package.version = tag_name;
            repoHandle.writeFile(
                branch,
                "package.json",
                JSON.stringify(package,undefined,4),
                `Bumped to ${tag_name}`,
                {},
                function(error,result,request)
                {
                    if(error)
                    {
                        console.log(error);
                        return reject(error);
                    }
                    return resolve();
                }
            );
        });
    });
}