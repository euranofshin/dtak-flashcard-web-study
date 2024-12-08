
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
    return arr; 
}

function get_flashcards(do_shuffle) {
    // How much has been learned?  
    var learned = localStorage.getItem("learned");
    learned = learned ? JSON.parse(learned) : []; // If none, set empty

    // Load words
    var fronts = JSON.parse(localStorage.getItem("fronts")); 
    var backs = JSON.parse(localStorage.getItem("backs"));
   
    // Handle shuffling
    console.log("DO SHUFFLE" + do_shuffle);
    console.log(fronts);
    if(do_shuffle) {
        // Shuffle
        var range = [...Array(fronts.length).keys()];
        range = shuffle(range); 
        learned = learned.map(i => range.indexOf(i)); // position of each learned index in shuffled array
        fronts = range.map(i => fronts[i]);
        backs = range.map(i => backs[i]);

        // Save the shuffled arrays
        localStorage.setItem("fronts", JSON.stringify(fronts)); 
        localStorage.setItem("backs", JSON.stringify(backs)); 
        localStorage.setItem("learned", JSON.stringify(learned));
        
    }
    console.log(fronts);

    // Only return unlearned words
    var range2 = [...Array(fronts.length).keys()];
    const diff = range2.filter(x => !learned.includes(x));
    console.log(diff);
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
        
