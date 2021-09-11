const sound = document.getElementById('sound');
const api = () => {
    const input = document.getElementById('inp-word');
    const inputtext = input.value;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputtext}`;
    fetch(url)
        .then(res => res.json())
        .then(data => display(data))
}


const display = data => {

    const result = document.getElementById('result');
    result.textContent = '';
    const input = document.getElementById('inp-word');
    const inputtext = input.value;

    const div = document.createElement('div');
    div.classList.add('definition');
    div.innerHTML = `<div class="title" > <h1>${inputtext}</h1>
    <button onclick="playsound()"> <i class="fas fa-volume-up"></i></button>
    </div> 
    <h6 class="partofs">${data[0].meanings[0].partOfSpeech}</h6>
    <h3 id="defi">${data[0].meanings[0].definitions[0].definition}</h3>`;
    sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
    result.appendChild(div);

}
function playsound() {
    sound.play();
}
