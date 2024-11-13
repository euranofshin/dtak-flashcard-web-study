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
    console.log(learned);
    var count = learned.length;
    document.getElementById("progress_bar").value = count; 
    document.getElementById("progress_bar").max = total; 
    document.getElementById("num_learned").innerHTML = count;
    document.getElementById("num_total").innerHTML = total;
}
