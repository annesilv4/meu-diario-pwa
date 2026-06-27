const notes = [];

function formatDatePtBR(dateISO) {
    const [year, month, day] = dateISO.split("-");
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("pt-BR");
}

function addNotes() {
    const title = document.getElementById("titulo").value;
    const description = document.getElementById("descricao").value;
    const date = document.getElementById("data").value;

    if (!title || !description || !date) {
        console.error("Preencha todos os campos");
        return;
    }

    notes.push({
        title,
        description,
        date,
    });

    document.getElementById("titulo").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("data").value = "";

    renderNotes();
}

function deleteNote(index) {
    notes.splice(index, 1);
    renderNotes();
}

function renderNotes() {
    const note = document.getElementById("notes-container");

    note.innerHTML += "";

    notes.forEach((nts, index) => {
        note.innerHTML += `
            <div class="note">
                <div class="conteudo">
                    <strong class="note-date">📅 ${formatDatePtBR(nts.date)}</strong>
                    <strong class="note-title">${nts.title}</strong>
                    <strong class="note-description">${nts.description}</strong>
                </div>

                <button
                    class="excluir"
                    onclick="deleteNote(${index})"
                >
                    X
                </button>
            </div>
        `
    })
}