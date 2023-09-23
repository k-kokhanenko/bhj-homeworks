document.addEventListener("DOMContentLoaded", () => {
    const editor = document.getElementById('editor');

    if (localStorage.editor) {
        editor.textContent = localStorage.editor;
    }
      
    editor.addEventListener('keyup', function(e) {
        localStorage.editor = editor.value;
    });
});


