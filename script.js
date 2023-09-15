document.querySelector('.progress').style.width = '65%';

const employeeData = {
    labels: ['HR', 'Finance', 'IT', 'Marketing', 'Operations'],
    datasets: [{
        label: 'Number of Employees',
        data: [50, 30, 45, 60, 40],
        backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
    }],
};

// Create a bar chart
const barCtx = document.getElementById('employeeBarChart').getContext('2d');
const barChart = new Chart(barCtx, {
    type: 'bar',
    data: employeeData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                stepSize: 10,
            },
        },
    },
});

// Create a pie chart
const pieCtx = document.getElementById('employeePieChart').getContext('2d');
const pieChart = new Chart(pieCtx, {
    type: 'pie',
    data: employeeData,
});
