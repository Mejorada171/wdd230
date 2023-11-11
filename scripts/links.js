const baseURL = "https://github.com/Mejorada171/wdd230";
const linksURL = "https://mejorada171.github.io/wdd230/data/links.json"; //GITHUB

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(weeks) {
    let currentWeek = 1
    console.log(weeks);
    weeks.lessons.forEach(week => {
        currentWeek++
        console.log(week)
        let linkItem = document.createElement("li");
        linkItem.innerText = currentWeek + "° ";
        week.links.forEach(link => {
            let linkAnchor = document.createElement("a");
            linkAnchor.href = link.url;
            linkAnchor.innerText = link.title + "|";
            linkItem.appendChild(linkAnchor);
        })
        document.getElementById("activities").appendChild(linkItem);
    });
}

getLinks()