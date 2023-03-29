const navButtons = document.querySelectorAll(".nav-item");

navButtons.forEach(navButton =>(
    navButton.addEventListener("click",function(){
        const navActive = document.querySelector(".nav-active");

        navActive.classList.toggle("nav-active");
        navButton.classList.toggle("nav-active");
    })
))

const ctx = document.getElementById('myChart');

new Chart(ctx, {
type: 'doughnut',
data: {
    labels: ['Yellow', 'Green', 'Orange', 'Pink'],
    datasets: [{
        data: [7, 5, 3, 5],
        backgroundColor: ["yellow", "green", "orange", "pink"],
        borderWidth: .5,
        cutout: '70%',
    }]
},
options: {
    plugins: {
        tooltip: {
            enabled: false,
        },
        legend: {
            display: false,
        }
    }
}
});

const ctx1 = document.getElementById('myChart1');

new Chart(ctx1, {
type: 'doughnut',
data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
    data: [12, 19, 3, 5, 2, 3],
    borderWidth: 1,
    cutout: '90%',
    }]
},
options: {
    plugins: {
        tooltip: {
            enabled: false,
        },
        legend: {
            display: false,
        }
    }
}
});

const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
type: 'doughnut',
data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
    data: [12, 19, 3, 5, 2, 3],
    borderWidth: 1,
    cutout: '90%',
    }]
},
options: {
    plugins: {
        tooltip: {
            enabled: false,
        },
        legend: {
            display: false,
        }
    }
}
});

const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
type: 'doughnut',
data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
    data: [12, 19, 3, 5, 2, 3],
    borderWidth: 1,
    cutout: '90%',
    }]
},
options: {
    plugins: {
        tooltip: {
            enabled: false,
        },
        legend: {
            display: false,
        }
    }
}
});

const ctx4 = document.getElementById('myChart4');

new Chart(ctx4, {
type: 'doughnut',
data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
    data: [12, 19, 3, 5, 2, 3],
    borderWidth: 1,
    cutout: '90%',
    }]
},
options: {
    plugins: {
        tooltip: {
            enabled: false,
        },
        legend: {
            display: false,
        }
    }
}
});

const ctx5 = document.getElementById('myChart5');

new Chart(ctx5, {
type: 'doughnut',
data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
    data: [12, 19, 3, 5, 2, 3],
    borderWidth: 1,
    cutout: '90%',
    }]
},
options: {
    plugins: {
        tooltip: {
            enabled: false,
        },
        legend: {
            display: false,
        }
    }
}
});

const ctx6 = document.getElementById('myChart6');

new Chart(ctx6, {
type: 'doughnut',
data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
    data: [12, 19, 3, 5, 2, 3],
    borderWidth: 1,
    cutout: '90%',
    }]
},
options: {
    plugins: {
        tooltip: {
            enabled: false,
        },
        legend: {
            display: false,
        }
    }
}
});