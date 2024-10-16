let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title == "") {
      alert("Inputan masih kosong");
      return;
   }

   // Create task container
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `flex justify-between items-center bg-white p-3 rounded shadow`;

   // Add the task title
   task.innerHTML = `
         <p class="font-medium">${title}</p>
         <div>
            <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
                   class="bg-green-500 text-white rounded px-4 py-1 mr-2 cursor-pointer">
            <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
                   class="bg-red-500 text-white rounded px-4 py-1 cursor-pointer">
         </div>
   `;

   // Append the task to the output section
   output.appendChild(task);

   // Clear the input field
   input.value = "";

   // Handle the "SELESAI" button click
   task.querySelector('#btn-selesai').onclick = () => {
      task.querySelector('p').classList.add('line-through', 'text-gray-500');
   };

   // Handle the "HAPUS" button click
   task.querySelector('#btn-hapus').onclick = () => {
      task.remove();
   };

   e.preventDefault();
}
