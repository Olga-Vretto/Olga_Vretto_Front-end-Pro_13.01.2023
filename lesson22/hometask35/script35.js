const body = document.getElementById("my-table");
const table = document.createElement("table");
for (let i = 0; i < 10; i++) {
  const tableRow = document.createElement("tr");
  for (let j = 0; j < 10; j++) {
    const tableData = document.createElement("td");
    tableData.innerHTML = Math.floor(Math.random() * 100) + 1;
    tableData.style.padding = "10px";
    tableRow.append(tableData);
  }
  table.append(tableRow);
}
body.append(table);
