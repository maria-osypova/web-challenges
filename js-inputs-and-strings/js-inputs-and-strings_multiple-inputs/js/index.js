// Task 1: Copy

const firstCopyInput = document.querySelector("[data-js=first-copy-input]");
const secondCopyInput = document.querySelector("[data-js=second-copy-input]");
const copyButton = document.querySelector("[data-js=copy-button]");

copyButton.addEventListener("click", () => {
  firstCopyInput.value = firstCopyInput.value;
  secondCopyInput.value = firstCopyInput.value;
});

// Task 2: Copy and Uppercase

const firstCopyInUppercaseInput = document.querySelector(
  "[data-js=first-copy-uppercase-input]"
);
const secondCopyInUppercaseInput = document.querySelector(
  "[data-js=second-copy-uppercase-input]"
);
const copyInUppercaseButton = document.querySelector(
  "[data-js=copy-uppercase-button]"
);
copyInUppercaseButton.addEventListener("click", () => {
  firstCopyInUppercaseInput.value = firstCopyInUppercaseInput.value;
  secondCopyInUppercaseInput.value =
    firstCopyInUppercaseInput.value.toUpperCase();
});

// Task 3: Switch Values

const firstSwitchValueInput = document.querySelector(
  "[data-js=first-switch-value-input]"
);
const secondSwitchValueInput = document.querySelector(
  "[data-js=second-switch-value-input]"
);
const switchValueButton = document.querySelector(
  "[data-js=switch-value-button]"
);
switchValueButton.addEventListener("click", () => {
  const tempValue = firstSwitchValueInput.value;
  firstSwitchValueInput.value = secondSwitchValueInput.value;
  secondSwitchValueInput.value = tempValue;
});
