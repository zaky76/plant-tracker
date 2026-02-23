let thrivlingCountList = [];
let strugglingCountList = [];
let currentStatus = 'all'

let totalCount = document.getElementById('totalCount');
let thrivlingCount = document.getElementById('thrivlingCount');
let strugglingCount = document.getElementById('strugglingCount');

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');

const allFilterBtn = document.getElementById('all-filter-btn');
const thrivingFilterBtn = document.getElementById('thriving-filter-btn');
const strugglingFilterBtn = document.getElementById('struggling-filter-btn');
const filteredSection = document.getElementById('filtered-section');


function calculateTotalCount() {
    totalCount.innerText = allCardSection.children.length
    thrivlingCount.innerText = thrivlingCountList.length
    strugglingCount.innerText = strugglingCountList.length
}

calculateTotalCount()


//toggle (When select any button then selected button bg black and text white and other button will bg gray)
function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-black', 'text-white')
    thrivingFilterBtn.classList.remove('bg-black', 'text-white')
    strugglingFilterBtn.classList.remove('bg-black', 'text-white')

    allFilterBtn.classList.add('bg-gray-300', 'text-black')
    thrivingFilterBtn.classList.add('bg-gray-300', 'text-black')
    strugglingFilterBtn.classList.add('bg-gray-300', 'text-black')

    const selected = document.getElementById(id);
    currentStatus = id

    selected.classList.remove('bg-gray-300', 'text-black')
    selected.classList.add('bg-black', 'text-white')

    if(id == 'thriving-filter-btn'){
        allCardSection.classList.add('hidden')
        filteredSection.classList.remove('hidden')
        renderThriving()
    }
    else if(id == 'all-filter-btn'){
        allCardSection.classList.remove('hidden')
        filteredSection.classList.add('hidden')
    }
    else if (id == 'struggling-filter-btn'){
        allCardSection.classList.add('hidden')
        filteredSection.classList.remove('hidden')
        renderStruggling()
    }
}

mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('thriving-btn')) {
        const ParentNode = event.target.parentNode.parentNode;
        const plantName = ParentNode.querySelector('.plantName').innerText;
        const latinName = ParentNode.querySelector('.latinName').innerText;
        const light = ParentNode.querySelector('.light').innerText;
        const water = ParentNode.querySelector('.water').innerText;
        const status = ParentNode.querySelector('.status').innerText;
        const notes = ParentNode.querySelector('.notes').innerText;

         ParentNode.querySelector('.status').innerText  = 'Thrive';

        const CardInfo = {
            plantName,
            latinName,
            light,
            water,
            status:'Thrive',
            notes
        }


        //validation for same card no need push in array
        const plantExist = thrivlingCountList.find(item => item.plantName == CardInfo.plantName)
       

        if (!plantExist) {
            thrivlingCountList.push(CardInfo)
        }

         strugglingCountList = strugglingCountList.filter(item=>item.plantName != CardInfo.plantName)

         calculateTotalCount() 

         if(currentStatus == "struggling-filter-btn"){
            renderStruggling()
        }
        
       
      
    }
    else if (event.target.classList.contains('struggling-btn')) {
        const ParentNode = event.target.parentNode.parentNode;
        const plantName = ParentNode.querySelector('.plantName').innerText;
        const latinName = ParentNode.querySelector('.latinName').innerText;
        const light = ParentNode.querySelector('.light').innerText;
        const water = ParentNode.querySelector('.water').innerText;
        const status = ParentNode.querySelector('.status').innerText;
        const notes = ParentNode.querySelector('.notes').innerText;

         ParentNode.querySelector('.status').innerText  = 'Struggle';

        const CardInfo = {
            plantName,
            latinName,
            light,
            water,
            status:'Struggle',
            notes
        }


        //validation for same card no need push in array
        const plantExist = strugglingCountList.find(item => item.plantName == CardInfo.plantName)
       

        if (!plantExist) {
            strugglingCountList.push(CardInfo)
        }

        thrivlingCountList = thrivlingCountList.filter(item=>item.plantName != CardInfo.plantName)

        if(currentStatus == "thriving-filter-btn"){
            renderThriving()
        }
        calculateTotalCount() 
    }
})

function renderThriving() {
    filteredSection.innerHTML = ''

    for (let thrive of thrivlingCountList) {
        // console.log(thrive);
        let div = document.createElement('div');
        div.className = 'card flex justify-between border border-gray-300 p-10 rounded'
        div.innerHTML = `
         <div class="space-y-4">
                    <div>
                        <p class="plantName text-3xl">${thrive.plantName}</p>
                        <p class="latinName">${thrive.latinName}</p>
                    </div>

                    <div class="flex gap-5">
                        <p class="light bg-gray-200 py-1 px-3">${thrive.light}</p>
                        <p class="water bg-gray-200 py-1 px-3">${thrive.water}</p>
                    </div>

                    <p class="status">${thrive.status}</p>
                    <p class="notes">New leaf unforling by the east window.</p>

                    <div class="flex gap-5">
                        <button class="thriving-btn bg-green-200 px-4 py-2">Thrive</button>
                        <button class="struggling-btn bg-red-200 px-4 py-2">Struggle</button>
                    </div>
                </div>
                <div>
                    <button class="delete-btn bg-red-200 text-red-600 py-2 px-4">Delete</button>
                </div>
            `
            filteredSection.appendChild(div)
    }
}      
function renderStruggling() {
    filteredSection.innerHTML = ''

    for (let struggle of strugglingCountList) {
        // console.log(thrive);
        let div = document.createElement('div');
        div.className = 'card flex justify-between border border-gray-300 p-10 rounded'
        div.innerHTML = `
         <div class="space-y-4">
                    <div>
                        <p class="plantName text-3xl">${struggle.plantName}</p>
                        <p class="latinName">${struggle.latinName}</p>
                    </div>

                    <div class="flex gap-5">
                        <p class="light bg-gray-200 py-1 px-3">${struggle.light}</p>
                        <p class="water bg-gray-200 py-1 px-3">${struggle.water}</p>
                    </div>

                    <p class="status">${struggle.status}</p>
                    <p class="notes">New leaf unforling by the east window.</p>

                    <div class="flex gap-5">
                        <button class="thriving-btn bg-green-200 px-4 py-2">Thrive</button>
                        <button class="struggling-btn bg-red-200 px-4 py-2">Struggle</button>
                    </div>
                </div>
                <div>
                    <button class="delete-btn bg-red-200 text-red-600 py-2 px-4">Delete</button>
                </div>
            `
            filteredSection.appendChild(div)
    }
}      