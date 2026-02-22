

// machine value -> all/interview/rejected buttons toggle

function btnToggle (id) {
    const btnAll = document.getElementById('jobs-all-btn');
    const btnInterview = document.getElementById('jobs-interview-btn');
    const btnRejected = document.getElementById('jobs-rejected-btn');

    // remove 
    btnAll.classList.remove('btn-neutral', 'bg-blue-400','text-white');
    btnInterview.classList.remove('bg-blue-400','text-white');
    btnRejected.classList.remove('bg-blue-400', 'text-white');

    // add 
    btnAll.classList.add('text-black'); 
    btnInterview.classList.add ('text-black');
    btnRejected.classList.add ('text-black');

    // select button 
    const selectedBtn = document.getElementById(id);
    selectedBtn.classList.add('bg-blue-400','text-white');
}