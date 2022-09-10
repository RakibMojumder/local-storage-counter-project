
function getCount() {
    let counter = getItemFromLocalStorage('counter');

    if (counter.count) {
        let count = counter.count;
        return count;
    } else {
        let count = 0;
        return count;
    }
}


let count = getCount();

document.getElementById('click-btn').addEventListener('click', () => {
    count++;
    const counterName = 'count';
    setItemToLocalStorage(counterName, count);
    displayCountToUI();
});


function getItemFromLocalStorage() {
    const savedCounterItem = localStorage.getItem('counter');
    let counter = {};

    if (savedCounterItem) {
        counter = JSON.parse(savedCounterItem);
    }

    return counter;
};


function setItemToLocalStorage(countName, count) {
    const counter = getItemFromLocalStorage('counter');

    counter[countName] = count;

    const counterStr = JSON.stringify(counter);
    localStorage.setItem('counter', counterStr);
};


const displayCountToUI = () => {
    const displayCount = document.getElementById('display-count');
    displayCount.innerText = count;
};


const displayCountToUIFromLocalStorage = () => {
    const displayCount = document.getElementById('display-count');
    const counter = getItemFromLocalStorage('counter');

    if (counter.count) {
        displayCount.innerText = counter.count;
    } else {
        displayCount.innerText = count;
    }
};


displayCountToUIFromLocalStorage()