function editElement(ref, match, replacer) {
const content = ref.textContent;
const matching = new RegExp(match, 'g');
const editing = content.replace(matching, replacer);
ref.textContent = editing;

}