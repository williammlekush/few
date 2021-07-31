const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

const changeEveryElement = (elementsArr = [], newText = "") => {
  elementsArr.forEach((elem) => {
    elem.innerHTML = newText;
  });
};

const changeSlogan = ({ group, sloganText }) => {
  const sloganDiv = document.getElementById(group + "-slogan");

  const newSlogan = document.createElement("div");
  newSlogan.id = group + "-slogan-text";
  newSlogan.textContent = sloganText;
  sloganDiv.appendChild(newSlogan);
};

const countParagraphs = () => {
  const paragraphArray = Array.from(document.getElementsByTagName("p"));
  changeEveryElement(paragraphArray, "We are paragraphs.");

  const paragraphsSloganReplacer = {
    group: "paragraphs",
    sloganText: `PARAGRAPH POWER LEVELS X ${paragraphArray.length} !!!!!`,
  };

  changeSlogan(paragraphsSloganReplacer);
};

const countQuotes = () => {
  const quotesArray = Array.from(
    document.getElementById("quotes").getElementsByTagName("p")
  );
  changeEveryElement(quotesArray, "We are quotes.");

  const quotesSloganReplacer = {
    group: "quotes",
    sloganText: `We ${quotesArray.length} quotes quash any quary!`,
  };

  changeSlogan(quotesSloganReplacer);
};

const countPoems = () => {
  const poemsArray = Array.from(
    document.getElementById("poems").getElementsByTagName("p")
  );
  changeEveryElement(poemsArray, "We are poems.");

  const poemsSloganReplacer = {
    group: "poems",
    sloganText: `We ${poemsArray.length} poems pummel any who challenge our position.`,
  };

  changeSlogan(poemsSloganReplacer);
};

button1.addEventListener("click", countParagraphs);
button2.addEventListener("click", countQuotes);
button3.addEventListener("click", countPoems);
