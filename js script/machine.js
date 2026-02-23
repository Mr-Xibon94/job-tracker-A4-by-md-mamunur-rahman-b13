// array for interview and rejected jobs
let interviewList =[];
let rejectedList = [];
let currentStatus = 'all';

// job count 
let total = document.getElementById('job-total');
let totalInterview = document.getElementById('job-interview');
let totalRejected = document.getElementById('job-rejected')

// main card body section is called here 
const allCardSection = document.getElementById('all-jobs-card');
const maniContainer = document.querySelector('main');
const cardFilterSection = document.getElementById('filtered-section');

// toggle buttons
const btnAll = document.getElementById('jobs-all-btn');
const btnInterview = document.getElementById('jobs-interview-btn');
const btnRejected = document.getElementById('jobs-rejected-btn');

function jobCalculation () {
    total.innerText = allCardSection.children.length;
    totalInterview.innerText =interviewList.length;
    totalRejected.innerText = rejectedList.length;

}

// calling jabCalculation function 
jobCalculation();

// machine value -> all/interview/rejected buttons toggle

function btnToggle(id) {


    // remove 
    btnAll.classList.remove('btn-neutral', 'bg-blue-400', 'text-white');
    btnInterview.classList.remove('bg-blue-400', 'text-white');
    btnRejected.classList.remove('bg-blue-400', 'text-white');

    // add 
    btnAll.classList.add('text-black');
    btnInterview.classList.add('text-black');
    btnRejected.classList.add('text-black');

    // select button 
    const selectedBtn = document.getElementById(id);
    selectedBtn.classList.add('bg-blue-400', 'text-white');
}


// add functionality with interview button 

maniContainer.addEventListener('click', function(event){
    if(event.target.classList.contains('card-interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        
        const jobTitle = parentNode.querySelector('.jobTitle').innerText;
        // console.log(jobTitle);
        const jobTag = parentNode.querySelector('.jobTag').innerText;
        // console.log(jobTag); 
        const jobAbout = parentNode.querySelector('.jobAbout').innerText;
        const jobStatus = parentNode.querySelector('.jobStatus').innerText;
        const jobNotes = parentNode.querySelector('.jobNotes').innerText;

        parentNode.querySelector('.jobStatus').innerText = 'Interview'; 
        const jobCardInfo = {
            jobTitle,
            jobTitle,
            jobTag,
            jobAbout,
            jobStatus,
            jobNotes,
        }

        // console.log(jobCardInfo); 

        const interviewExist = interviewList.find(item => item.jobTitle == jobCardInfo.jobTitle)

        if(!interviewExist) {
            interviewList.push(jobCardInfo);
        }

        // removing from rejectedList 
        rejectedList = rejectedList.filter(item => item.jobTitle != jobCardInfo.jobTitle)

        jobCalculation();

    } else if (event.target.classList.contains('card-rejected-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        
        const jobTitle = parentNode.querySelector('.jobTitle').innerText;
         console.log(jobTitle);
        const jobTag = parentNode.querySelector('.jobTag').innerText;
        // console.log(jobTag); 
        const jobAbout = parentNode.querySelector('.jobAbout').innerText;
        const jobStatus = parentNode.querySelector('.jobStatus').innerText;
        const jobNotes = parentNode.querySelector('.jobNotes').innerText;

        parentNode.querySelector('.jobStatus').innerText = 'Rejected'; 
        const jobCardInfo = {
            jobTitle,
            jobTitle,
            jobTag,
            jobAbout,
            jobStatus,
            jobNotes,
        }

        // console.log(jobCardInfo); 

        const rejectedExist = rejectedList.find(item => item.jobTitle == jobCardInfo.jobTitle) ;

        if(!rejectedExist) {
            rejectedList.push(jobCardInfo);
            }

            interviewExist = interviewList.filter(item => item.jobTitle != jobCardInfo.jobTitle)

         jobCalculation();

    }
})