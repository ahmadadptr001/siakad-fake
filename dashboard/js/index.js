
const moon = document.querySelector('.bxs-moon');
moon.addEventListener('click', function () {
      console.log(moon.classList)
      if (moon.classList[4] == 'bxs-moon') {
            moon.classList.remove('bxs-moon');
            moon.classList.add('bxs-sun');
            document.body.setAttribute('data-bs-theme', "light");
      } else {
            moon.classList.remove('bxs-sun');
            moon.classList.add('bxs-moon');
            document.body.setAttribute("data-bs-theme", "dark")
      }
})


function createGrafic(IDElement, typeGrafic, labelsGrafic, labelGrafic, dataLabel, backgroundGrafic){
      const element = document.getElementById(IDElement);
      new Chart(element, {
            type: typeGrafic,
            data: {
                  labels:labelsGrafic,
                  datasets: [{
                        label: labelGrafic,
                        data: dataLabel,
                        backgroundColor: backgroundGrafic,
                        borderColor: "gray",
                        borderWidth: 1,
                        barThickness: 40
                  }]
            },
            options: {
                  scales: {
                        y: {
                              beginAtZero: true,
                              min: 0,
                              max: 4.0
                        },
                        x: {
                              beginAtZero: true
                        }
                  },
                  animations: {
                        tension: {
                              duration: 2000,
                              easing: 'alternate',
                              from: 1,
                              to: 0,
                              loop: true
                        }
                  },
            }
      });

}

createGrafic(
      "ips", "line", ["Sem. I", "Sem.II", "Sem. III", "Sem. IV"], 'Nilai IPS / Semester',
      [3.47, 3.71], ['greenYellow', 'green', 'gray', 'gray'])

createGrafic(
            "ipk", "bar", ["Sem. I", "Sem.II", "Sem. III", "Sem. IV"], 'Nilai ipk',
            [3.47, 3.59], ['greenYellow', 'greenYellow', 'gray', 'gray'])



