let currentData = [];

        document.getElementById('date').addEventListener('change', function () {
            const date = this.value;
            fetchData(date);
        });

        document.getElementById('searchInput').addEventListener('input', function () {
            searchState();
        });

        async function fetchData(selectedDate) {
            try {
                const response = await fetch('https://api.rootnet.in/covid19-in/stats/history');
                const result = await response.json();
                const filteredData = result.data.find(item => item.day === selectedDate);
                currentData = filteredData ? filteredData.regional : [];

                displayData(currentData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        function displayData(data) {
            const grid = document.getElementById('dataGrid');
            grid.innerHTML = '';

            if (data.length === 0) {
                grid.innerHTML = '<p>No data available for this date or search term.</p>';
                return;
            }

            data.forEach(state => {
                const card = document.createElement('div');
                card.className = 'card';

                card.innerHTML = `
          <h2>${state.loc}</h2>
          <p>Confirmed Cases: ${state.totalConfirmed}</p>
          <p>Recovered: ${state.discharged}</p>
          <p>Deaths: ${state.deaths}</p>
        `;

                grid.appendChild(card);
            });
        }

        function searchState() {
            const query = document.getElementById('searchInput').value.toLowerCase();
            const filteredData = currentData.filter(state => state.loc.toLowerCase().includes(query));
            displayData(filteredData);
        }