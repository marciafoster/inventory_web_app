function removeButton(event) {
  if (event.target.tagName === 'BUTTON') {
    const resourceItem = event.target.parentNode;
    resourceItem.parentNode.removeChild(resourceItem);
  }
}

document.getElementById('inventoryForm').addEventListener('submit', function (event) {
  event.preventDefault();

  let size = document.getElementById('size').value;
  let image = document.getElementById('image').value;
  let price = document.getElementById('price').value;
  let inStock = document.getElementById('inStock').checked ? 'Yes' : 'No';

  let listItem = document.createElement('li');
  listItem.className = 'removeButton';
  listItem.innerHTML = `
    <h2>${size}</h2>
    <img src="${image}" width="300" height="300" alt="${size} Cake">
    <p>Price: $${price}</p>
    <form>
      <label for="small">In Stock</label>
      <label>
        <input type="radio" name="response" value="yes" ${inStock === 'Yes' ? 'checked' : ''}>
        Yes
      </label>
      <label>
        <input type="radio" name="response" value="no" ${inStock === 'No' ? 'checked' : ''}>
        No
      </label>
    </form>
    <button onclick="removeButton(event)">Remove</button>
  `;

  document.getElementById('resourceList').appendChild(listItem);

  document.getElementById('size').value = '';
  document.getElementById('image').value = '';
  document.getElementById('price').value = '';
  document.getElementById('inStock').checked = false;
});
