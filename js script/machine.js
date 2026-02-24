// array for interview and rejected jobs
let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

// job count 
let total = document.getElementById('job-total');
let totalInterview = document.getElementById('job-interview');
let totalRejected = document.getElementById('job-rejected')
let availableJobs = document.getElementById('availableJobs');

// main card body section is called here 
const noJobCard = document.getElementById('noJobsCard');
const allCardSection = document.getElementById('all-jobs-card');
const maniContainer = document.querySelector('main');
const cardFilterSection = document.getElementById('filtered-section');

// delete buttons 
// const cardDltBtn = document.getElementById('.card-dlt-btn'); 

// toggle buttons
const btnAll = document.getElementById('jobs-all-btn');
const btnInterview = document.getElementById('jobs-interview-btn');
const btnRejected = document.getElementById('jobs-rejected-btn');

// job available diplay section 
total.innerText = allCardSection.children.length;
availableJobs.innerText = allCardSection.children.length;
function jobCalculation() {

    totalInterview.innerText = interviewList.length;
    totalRejected.innerText = rejectedList.length;

}

// calling jabCalculation function 
jobCalculation();

// machine value -> all/interview/rejected buttons toggle

function btnToggle(id) {

    currentStatus = id;
    console.log(currentStatus)


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

    // add hide and show function 
    if (id == 'jobs-interview-btn') {
        allCardSection.classList.add('hidden');
        cardFilterSection.classList.remove('hidden')

        if (interviewList.length == 0) {
            noJobCard.classList.remove('hidden');
        } else if (interviewList.length > 0) {
            noJobCard.classList.add('hidden');
        }

        renderInterview()
    } else if (id == 'jobs-all-btn') {
        allCardSection.classList.remove('hidden');
        cardFilterSection.classList.add('hidden');
        noJobCard.classList.add('hidden');
    } else if (id == 'jobs-rejected-btn') {
        allCardSection.classList.add('hidden');
        cardFilterSection.classList.remove('hidden');

        if (rejectedList.length == 0) {
            noJobCard.classList.remove('hidden');
        } else if (rejectedList.length > 0) {
            noJobCard.classList.add('hidden');
        }
        renderRejection()
    }
}


// add functionality with interview button 

maniContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('card-interview-btn')) {

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
            jobStatus: 'Interview',
            jobNotes,
        }

        // console.log(jobCardInfo); 

        const interviewExist = interviewList.find(item => item.jobTitle == jobCardInfo.jobTitle)

        if (!interviewExist) {
            interviewList.push(jobCardInfo);
        }

        // removing from rejectedList 
        rejectedList = rejectedList.filter(item => item.jobTitle != jobCardInfo.jobTitle)

        // after remove call the render function 
        if (currentStatus == "jobs-rejected-btn") {
            renderRejection();
        }


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
            jobStatus: 'Rejected',
            jobNotes,
        }

        // console.log(jobCardInfo); 

        const rejectedExist = rejectedList.find(item => item.jobTitle == jobCardInfo.jobTitle);

        if (!rejectedExist) {
            rejectedList.push(jobCardInfo);
        }

        // remove the jobscard from the interview list 

        interviewList = interviewList.filter(item => item.jobTitle != jobCardInfo.jobTitle);



        // if(cardDltBtn.addEventListener('click', function() {
        //     console.log('hi');
        //     rejectedList = rejectedList.filter(item => item.jobTitle != jobCardInfo.jobTitle)
        // }))

        // if (event.target.classList.contains('card-dlt-btn')){

        //     console.log(445)
        //     interviewList = interviewList.filter(item => item.jobTitle != jobCardInfo.jobTitle);
        //     if (currentStatus == "jobs-interview-btn") {
        //     renderInterview();
        // }
        // jobCalculation()
        // }


        // after remove call in render function 
        if (currentStatus == "jobs-interview-btn") {

            renderInterview();
        }


        jobCalculation();

    } else if (event.target.classList.contains('card-dlt-btn')) {
        console.log(54654);
        const parentNode = event.target.parentNode.parentNode.parentNode.parentNode;
        // console.log(parentNode);

        parentNode.classList.add('hidden')
        total.innerText = total.innerText - 1;
        availableJobs.innerHTML = availableJobs.innerText - 1;

    }
})


// interview render section create 
function renderInterview() {


    cardFilterSection.innerHTML = ''

    // creating innerHtml 
    for (let interviews of interviewList) {


        let div = document.createElement('div');
        div.className = "flex justify-between bg-base-200 p-6 shadow rounded-2xl"

        div.innerHTML = `
        <div class="space-y-5">
                        <div class="">
                            <h2 class="jobTitle text-[18px] font-bold">${interviews.jobTitle}</h2>
                            <p class="jobTag text-[16px] text-gray-400">${interviews.jobTag}</p>
                        </div>
                        <div>
                            <p class="jobAbout text-[14px] text-gray-400">${interviews.jobAbout}</p>
                        </div>
                        <div class="">
                            <div class="jobStatus bg-gray-200 inline-block border border-green-600 text-green-600 py-2 px-2.5 text-[14px] mb-2">${interviews.jobStatus}</div>
                            <p class="jobNotes text-[14px]">${interviews.jobNotes}</p>
                        </div>
                        <!-- card button  -->
                        <div class="flex gap-2">
                            <!-- btn-  -->
                            <div
                                class="card-interview-btn inline-block font-medium text-[14px] text-green-600 border border-green-600 p-2 rounded-[5px] cursor-pointer">
                                INTERVIEW</div>
                            <!-- btn-2  -->
                            <div
                                class="card-rejected-btn inline-block font-medium text-[14px] text-red-600 border border-red-600 p-2 rounded-[5px] cursor-pointer">
                                REJECTED</div>
                        </div>
                    </div>
                    <!-- card div section-2  -->
                    <div class="w-[40px] h-[40px] border border-gray-400 p-1.5 rounded-[100%] text-center">
                        <button class=""><i class="fa-solid fa-trash-can"></i></button>
                    </div>

        `
        cardFilterSection.appendChild(div);
    }
}

function renderRejection() {

    cardFilterSection.innerHTML = '';

    // creating innerHtml 
    for (let reject of rejectedList) {


        let div = document.createElement('div');
        div.className = "flex justify-between bg-base-200 p-6 shadow rounded-2xl"

        div.innerHTML = `
        <div class="space-y-5">
                        <div class="">
                            <h2 class="jobTitle text-[18px] font-bold">${reject.jobTitle}</h2>
                            <p class="jobTag text-[16px] text-gray-400">${reject.jobTag}</p>
                        </div>
                        <div>
                            <p class="jobAbout text-[14px] text-gray-400">${reject.jobAbout}</p>
                        </div>
                        <div class="">
                            <div class="jobStatus bg-gray-200 inline-block border border-red-600 text-red-600 py-2 px-2.5 text-[14px] mb-2">${reject.jobStatus}</div>
                            <p class="jobNotes text-[14px]">${reject.jobNotes}</p>
                        </div>
                        <!-- card button  -->
                        <div class="flex gap-2">
                            <!-- btn-  -->
                            <div
                                class="card-interview-btn inline-block font-medium text-[14px] text-green-600 border border-green-600 p-2 rounded-[5px] cursor-pointer">
                                INTERVIEW</div>
                            <!-- btn-2  -->
                            <div
                                class="card-rejected-btn inline-block font-medium text-[14px] text-red-600 border border-red-600 p-2 rounded-[5px] cursor-pointer">
                                REJECTED</div>
                        </div>
                    </div>
                    <!-- card div section-2  -->
                    <div class="w-[40px] h-[40px] border border-gray-400 p-1.5 rounded-[100%] text-center">
                        <button class=""><i class="fa-solid fa-trash-can"></i></button>
                    </div>
            </d>
        `
        cardFilterSection.appendChild(div);
    }

}
