const GitHubAPI = require("github-api");

module.exports = async function getLastTag(user,repo,token,branch)
{
    return new Promise((resolve,reject) => {
        const ghapi = new GitHubAPI({token : token});
        let tag;
        //find last release for either beta/stable
        ghapi.getRepo(user,repo).listReleases().then((tagsRes) => {
            if(branch == "beta")
            {
                for(let i = 0; i != tagsRes.data.length; ++i)
                {
                    if(/beta/.test(tagsRes.data[i].tag_name))
                    {
                        resolve(tagsRes.data[i].tag_name);
                    }
                }
            }
            else if(branch != "beta")
            {
                for(let i = 0; i != tagsRes.data.length; ++i)
                {
                    if(/beta/.test(tagsRes.data[i].tag_name))
                        continue;
                    else
                    {
                        resolve(tagsRes.data[i].tag_name);
                    }
                }
            }
            reject();
        });
    });
}