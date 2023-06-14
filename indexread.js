window.addEventListener('DOMContentLoaded', (event) => {
  fetch('data.csv')
    .then(response => response.text())
    .then(csvData => {
      const rows = csvData.split('\n');
      const headerRow = rows[0].split(',');
      const table = document.getElementById('csvTable');

      // Add header row
      const headerRowElement = document.getElementById('headerRow');
      for (let i = 0; i < headerRow.length; i++) {
        if (i !== 7 && i < 8) { // Include 7th column, ignore 8th and onwards
          const th = document.createElement('th');
          th.textContent = headerRow[i];
          headerRowElement.appendChild(th);
        }
      }

      // Add data rows
      const dataRowsElement = document.getElementById('dataRows');
      for (let i = 1; i < rows.length; i++) {
        const dataRow = rows[i].split(',');
        const tr = document.createElement('tr');
        for (let j = 0; j < dataRow.length; j++) {
          if (j !== 7 && j < 8) { // Include 7th column, ignore 8th and onwards
            const td = document.createElement('td');

            // Format columns 5 and 6 as buttons if not empty
            if (j === 4 || j === 5) {
              const buttonValue = dataRow[j].trim();
              if (buttonValue !== '') {
                const button = document.createElement('button');
                button.textContent = (j === 4) ? 'VOD' : 'Clips';
                button.addEventListener('click', () => {
                  window.location.href = buttonValue;
                });
                td.appendChild(button);
              } else {
                td.textContent = 'N/A';
              }
            } else {
              td.textContent = dataRow[j];
            }
            tr.appendChild(td);
          }
        }
        dataRowsElement.appendChild(tr);
      }
    })
    .catch(error => console.error('Error:', error));
});