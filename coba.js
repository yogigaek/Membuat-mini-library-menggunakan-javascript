// Judul
const body = document.getElementsByTagName(`body`)[0];
let h1Body    = document.createElement(`h1`);
h1Body.innerHTML = `Mini Library from JavaScript`;
h1Body.style.textAlign = `center`; h1Body.style.fontFamily = `fantasy`; h1Body.style.fontWeight = `bold`;
body.appendChild(h1Body);

// Button
const button = document.getElementsByTagName(`body`)[0];
let buttonNew = document.createElement(`button`);
buttonNew.innerHTML = `Klik untuk menampilkan table`;
buttonNew.style.display = `inline-Block`; buttonNew.style.padding = `10px 20px`; 
buttonNew.style.position = `absolute`; buttonNew.style.top = `15%`; buttonNew.style.left= `42%`;
button.appendChild(buttonNew);


const createTable = document.getElementsByTagName(`body`)[0];

// Menambahkan event listener
buttonNew.addEventListener(`click`, function() {
    let table = document.createElement(`table`);
    table.style.border = `1px solid black`; table.style.width = `50%`;
    table.style.position = `absolute`; table.style.top = `35%`; table.style.left= `25%`;

    // Data table head
    let head = [`Bulan`];
    let head1 = [`Hasil Panen`];
    let head2 = [`Padi`, `Kacang`, `Jagung`];

    // Data table body
    let dataBody = [
        {bulan: `Januari`, padi: `500 Kg`, kacang: `300 Kg`, Jagung : `600 Kg`},
        {bulan: `Februari`, padi: `342 Kg`, kacang: `200 Kg`, Jagung : `430 Kg`},
        {bulan: `Maret`, padi: `200 Kg`, kacang: `640 Kg`, Jagung : `150 Kg`},
        {bulan: `April`, padi: `500 Kg`, kacang: `120 Kg`, Jagung : `1 Ton`},
        {bulan: `Mei`, padi: `300 Kg`, kacang: `400 Kg`, Jagung : `780 Kg`},
        {bulan: `Juni`, padi: `200 Kg`, kacang: `120 Kg`, Jagung : `342 Kg`},
        {bulan: `Juli`, padi: `560 Kg`, kacang: `560 Kg`, Jagung : `987 Kg`},
        {bulan: `Agustus`, padi: `470 Kg`, kacang: `430 Kg`, Jagung : `145 Kg`},
        {bulan: `September`, padi: `231 Kg`, kacang: `789 Kg`, Jagung : `767 Kg`},
        {bulan: `Oktober`, padi: `456 Kg`, kacang: `123 Kg`, Jagung : `145 Kg`},
        {bulan: `November`, padi: `232 Kg`, kacang: `56 Kg`, Jagung : `678 Kg`},
        {bulan: `Desember`, padi: `98 Kg`, kacang: `456 Kg`, Jagung : `234 Kg`},
    ];


    // Head Table
    let headerRow = document.createElement(`tr`);
    let headerRow1 = document.createElement(`tr`);
    head.forEach(textHead => {
        let headBulan = document.createElement(`th`);
        headBulan.style.border = `1px solid black`;
        headBulan.setAttribute(`rowspan`, `2`);
        headBulan.style.backgroundColor = `yellow`;

        let textNode = document.createTextNode(textHead);
        headBulan.appendChild(textNode);
        headerRow.appendChild(headBulan);
    });
    head1.forEach(textHead1 => {
        let headHasilpanen = document.createElement(`th`);
        headHasilpanen.style.border = `1px solid black`;
        headHasilpanen.setAttribute(`colspan`, `3`);
        headHasilpanen.style.backgroundColor = `green`;

        let textNode1 = document.createTextNode(textHead1);
        headHasilpanen.appendChild(textNode1);
        headerRow.appendChild(headHasilpanen);
    });
    head2.forEach(textHead2 => {
        let headPadi = document.createElement(`th`);
        headPadi.style.border = `1px solid black`;
        let textNode2 = document.createTextNode(textHead2);
        headPadi.appendChild(textNode2);
        headerRow1.appendChild(headPadi);
    });
    table.appendChild(headerRow);
    table.appendChild(headerRow1);

    // Body table
    dataBody.forEach(textBody => {
        let bodyRow = document.createElement(`tr`);

        Object.values(textBody).forEach(text => {
            let cell = document.createElement(`td`);
            cell.style.border = `1px solid black`;
            let node = document.createTextNode(text);
            cell.appendChild(node);
            bodyRow.appendChild(cell);
        })

        table.appendChild(bodyRow);
    });

    createTable.appendChild(table);

});
