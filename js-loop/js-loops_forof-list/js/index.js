console.clear();

const main = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

for (const programmingLanguage of programmingLanguages) {
  const li = document.createElement("li");
  li.textContent = programmingLanguage;
  ol.appendChild(li);
  console.log(programmingLanguage);
}
