const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
        age: null
    },
    {
        name: "Blurt",
        age: 21
    },
];

// Q1

const cat = {
    complain: function () {
        console.log("Meow!")
    },
}

cat.complain()

// Q2

const heading = document.querySelector("h3")

heading.innerHTML = `<h3> Update heading </h3>`

// Q3

heading.style.fontSize = "2em";

// Q4

heading.classList.add("sub-heading")

// Q5

const paragraph = document.querySelectorAll("p")

for (let i = 0; i < paragraph.length; i++) {
    const eachP = paragraph[i]
    eachP.style.color = "red"
}

// Q6

const resultsContainer = document.querySelector(".results")

let backgroundColor = "yellow"
resultsContainer.innerHTML += `<p style= "background-color: ${backgroundColor}"> New Paragraph </p>`


// Q7

function listFunction(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name)
    }
}

listFunction(cats)


// Q8 

function createCats(cats) {
    let html = "";
    for (let i = 0; i < cats.length; i++) {

        let displayUnknown = "Age unknown";

        if (cats[i].age) {
            displayUnknown = cats[i].age;
        }

        let fontSize = "13px"
        html += `<div class="cat-information">
            <h5> Name: ${cats[i].name} </h5>
            <p style= "font-size: ${fontSize}"> Age: ${displayUnknown} </p>
            </div>`
    }
    return html;
}

const newHtml = createCats(cats)

const catContainer = document.querySelector(".cat-container")

catContainer.innerHTML = newHtml;