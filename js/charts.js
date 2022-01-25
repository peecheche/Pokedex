const ctx = document.getElementById('stats').getContext('2d');

export function createChart(stats) {
    return  new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                'HP',
                'Attack',
                'Defense',
                ['Special', 'Attack'],
                ['Special', 'Defense'],
                'Speed',
            ],
            datasets: [{
                data: stats,
                backgroundColor: '#BFFFF1',
            }]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                }
            },
            scales: {
                r: {
                    grid: { color: 'white'},
                    pointLables: {color: 'white'},
                    angleLines: {color: 'white'},
                }
            }
        }
    });
}