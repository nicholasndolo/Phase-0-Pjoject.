const h2 = document.createElement("h2")
document.body.append(h2)
h2.textContent = "Possibe ways to mitigate depression among the youth."

const element = document.createElement("div")  
document.body.append(element)

const ol = document.createElement("ol");


for (let i = 0; i < 3; i++) {
    const toDo = ["Learn how to code", "Exercise", "Listen to music"];

    const li = document.createElement("li");
    li.textContent = `${toDo}`;
    ol.append(li);
  }
  
element.append(ol);

const element1 = getElementById("introduction")
element.style.fontSize = "30px";
element.style.color = red;