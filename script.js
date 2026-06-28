const STORAGE_KEY = "diario-notas";
let notes = [];
let deferredPrompt = null;

function loadNotes() {
    const saved = localStorage.getItem(STORAGE_KEY);
    notes = saved ? JSON.parse(saved) : [];
}

function saveNotes() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

function formatDatePtBR(dateISO) {
    const [year, month, day] = dateISO.split("-");
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("pt-BR");
}

function addNotes() {
    const title = document.getElementById("titulo").value.trim();
    const description = document.getElementById("descricao").value.trim();
    const date = document.getElementById("data").value;

    if (!title || !description || !date) {
        alert("Preencha todos os campos.");
        return;
    }

    notes.push({ title, description, date });

    document.getElementById("titulo").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("data").value = "";

    saveNotes();
    renderNotes();
}

function deleteNote(index) {
    notes.splice(index, 1);
    saveNotes();
    renderNotes();
}

function renderNotes() {
    const container = document.getElementById("notes-container");
    container.innerHTML = "";

    if (notes.length === 0) {
        container.innerHTML = '<p class="empty-notes">Nenhuma anotação registrada.</p>';
        return;
    }

    notes.forEach((nts, index) => {
        container.innerHTML += `
            <div class="note">
                <div class="conteudo">
                    <strong class="note-date">📅 ${formatDatePtBR(nts.date)}</strong>
                    <strong class="note-title">${nts.title}</strong>
                    <p class="note-description">${nts.description}</p>
                </div>

                <button
                    class="excluir"
                    onclick="deleteNote(${index})"
                    aria-label="Excluir anotação"
                >
                    X
                </button>
            </div>
        `;
    });
}

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js");
    });
}

const installBtn = document.getElementById("btn-install");

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    installBtn.hidden = false;
});

installBtn.addEventListener("click", async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    installBtn.hidden = true;
});

loadNotes();
renderNotes();
