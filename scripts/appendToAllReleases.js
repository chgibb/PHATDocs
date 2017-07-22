const fs = require("fs");

module.exports = function appendToAllReleases(tag_name,branch)
{
    let allReleases = JSON.parse(fs.readFileSync(`docs/allReleases.json`).toString());
    allReleases.unshift(
        `${new Date}: [PHAT@${tag_name}](https://chgibb.github.io/PHATDocs/releases/${tag_name}/index) cut from ${branch}`
    );
    fs.writeFileSync(`docs/allReleases.json`,JSON.stringify(allReleases,undefined,4));

    let md = `---${"\n"}title: All Releases${"\n"}---${"\n"}`;
    for(let i = 0; i != allReleases.length; ++i)
    {
            md += `${allReleases[i]}  ${"\n"}`;
    }
    fs.writeFileSync(
        `docs/allReleases.md`,
        md
    );
}