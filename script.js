document.addEventListener("DOMContentLoaded", function () {
  let dataForm = document.getElementById("dataForm");
  let usernameInput = document.getElementById("username");
  let passwordInput = document.getElementById("password");
  let textInput = document.getElementById("textInput");
  let rememberMeCheckbox = document.getElementById("rememberMe");
  let toggleSwitchCheckbox = document.getElementById("toggleSwitch");
  let radioSelectionInputs = document.querySelectorAll('input[name="radioSelection"]');
  let dropdownOptions = document.getElementById("dropdownOptions");
  let nextButton = document.getElementById("nextButton");
  let cancelButton = document.getElementById("cancelButton");

  dataForm.addEventListener("change", function () {
    let username = usernameInput.value;
    let password = passwordInput.value;
    let text = textInput.value;
    let rememberMe = rememberMeCheckbox.checked;
    let toggleSwitch = toggleSwitchCheckbox.checked;
    let radioSelection = Array.from(radioSelectionInputs).find(function (input) {
      return input.checked;
    });
    let dropdownValue = dropdownOptions.value;

    let containsInvalidCharacters = /[^a-zA-Z0-9]/.test(text);
    if (containsInvalidCharacters) {
      let assistiveText = document.querySelector(".assistive-text");
      assistiveText.textContent = "Error message informing me of a problem";
      assistiveText.style.display = "block";
      nextButton.disabled = true;
      return;
    }

    if (username && password && text && radioSelection && dropdownValue) {
      nextButton.disabled = false;
    } else {
      nextButton.disabled = true;
    }
  });

  textInput.addEventListener("input", function () {
    let assistiveText = document.querySelector(".assistive-text");
    assistiveText.style.display = "none";
  });

  dataForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let username = usernameInput.value;
    let password = passwordInput.value;
    let text = textInput.value;
    let rememberMe = rememberMeCheckbox.checked;
    let toggleSwitch = toggleSwitchCheckbox.checked;
    let radioSelection = Array.from(radioSelectionInputs).find(function (input) {
      return input.checked;
    });
    let dropdownValue = dropdownOptions.value;

    let data = {
      username: username,
      password: password,
      text: text,
      rememberMe: rememberMe,
      toggleSwitch: toggleSwitch,
      radioSelection: radioSelection ? radioSelection.value : "",
      dropdownOptions: dropdownValue,
    };

    alert(JSON.stringify(data));
  });

  cancelButton.addEventListener("click", function () {
    dataForm.reset();
  });
});
