function typeWriterEffect(elementId, speed) {
    const element = document.getElementById(elementId);
    const fullText = element.textContent;
    element.textContent = ""; // Clear the text

    const textSpan = document.createElement("span");
    const cursorSpan = document.createElement("span");
    cursorSpan.className = "cursor";
    cursorSpan.textContent = "┃";

    element.appendChild(textSpan);
    element.appendChild(cursorSpan);

    let i = 0;
    function type() {
        if (i < fullText.length) {
            textSpan.textContent += fullText.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}