function playAudio() {
  const audio = document.getElementById("speak");
  audio.play();
}

function copyToClipboard(value, callback) {
  window.navigator.clipboard
    .writeText(value)
    .then(callback)
    .catch(console.error);
}

function setupClipboardListeners() {
  const canvas = document.createElement("canvas");

  canvas.width = canvas.height = 1;

  const ctx = canvas.getContext("2d", { willReadFrequently: true });

  const elements = Array.from(document.querySelectorAll(".swatch, .info"));

  for (const element of elements) {
    ctx.clearRect(0, 0, 1, 1);

    element.addEventListener("click", () => {
      const oklchValue = element?.querySelector("p").textContent.trim();

      if (!oklchValue) {
        return;
      }

      ctx.fillStyle = oklchValue;
      ctx.fillRect(0, 0, 1, 1);

      const hexValue =
        "#" +
        Array.from(ctx.getImageData(0, 0, 1, 1).data)
          .slice(0, -1)
          .map((x) => x.toString(16).padStart(2, "0"))
          .join("");

      copyToClipboard(hexValue, displayToast);
    });
  }
}

function displayToast() {
  const toast = document.getElementById("toast");

  if (toast) {
    toast.classList.remove("invisible");
    toast.classList.add("visible");

    setTimeout(() => {
      toast.classList.remove("visible");
      toast.classList.add("invisible");
    }, 1000);
  }
}

function main() {
  setupClipboardListeners();
}

main();
