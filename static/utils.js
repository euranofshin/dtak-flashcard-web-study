function get_flashcards() {
    // How much has been learned?  
    var learned = localStorage.getItem("learned");
    learned = learned ? JSON.parse(learned) : []; // If none, set empty

    // Load words
    const fronts = JSON.parse(localStorage.getItem("fronts")); 
    const backs = JSON.parse(localStorage.getItem("backs"));
   
    // Only return unlearned words
    const range = [...Array(fronts.length).keys()];
    const diff = range.filter(x => !learned.includes(x));
    const unlearned_fronts = diff.map(index => fronts[index]);
    const unlearned_backs = diff.map(index => backs[index]);
    
    return {'fronts': unlearned_fronts, 'backs':unlearned_backs, 'indices':diff}
}

function set_progress_bar() {
    // Set progress bar
    var total = JSON.parse(localStorage.getItem("fronts")).length;
    var learned = localStorage.getItem("learned");
    learned = learned ? JSON.parse(learned) : []; // If none, set empty
    var count = learned.length;
    document.getElementById("progress_bar").style.width = parseInt(count / total * 100) + "%"; 
    //document.getElementById("progress_bar").max = total; 
    document.getElementById("num_learned").innerHTML = count;
    document.getElementById("num_total").innerHTML = total;
}
        
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
    return arr; 
}
