export default function setCursorToEnd(contentEditableElement) {
    if (!contentEditableElement) return;
    contentEditableElement?.focus();

    var range = document.createRange();

    range.selectNodeContents(contentEditableElement);

    range.collapse(false);

    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}
