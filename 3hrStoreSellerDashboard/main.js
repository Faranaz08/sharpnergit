
const myForm = document.getElementById('myForm');
const named = document.getElementById('name');
const description = document.getElementById('desc');
const price = document.getElementById('price');
const quantity = document.getElementById('quant');
const itemList = document.querySelector('.items');

const fetchData = async () => {
    try {
        const response = await axios.get('https://crudcrud.com/api/5b2239df358844f1a1d16b402839bff3/items');
        const items = response.data;

        items.forEach(item => {
            addItemToUI(item);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const addItemToUI = (item) => {
    const buyOne = createBuyButton("BUY ONE", item);
    const buyTwo = createBuyButton("BUY TWO", item);
    const buyThree = createBuyButton("BUY THREE", item);

    const listItem = document.createElement('li');
    listItem.append(document.createTextNode(`${item.name} : ${item.description} : ${item.price} : ${item.quantity}`));
    listItem.append(buyOne);
    listItem.append(buyTwo);
    listItem.append(buyThree);

    itemList.append(listItem);
};

const createBuyButton = (text, item) => {
    const buyButton = document.createElement('button');
    buyButton.innerText = text;
    buyButton.addEventListener('click', async () => {
        if (item.quantity > 0) {
            item.quantity = item.quantity- 1;
            // Update the quantity in the existing list item
            itemList.innerHTML = '';
            fetchData();

            try {
                const response = await axios.put(`https://crudcrud.com/api/5b2239df358844f1a1d16b402839bff3/items/${item._id}`, item);
                console.log("Data updated successfully:", response.data);
            } catch (error) {
                console.error("Error updating data:", error);
            }
        }
    });

    return buyButton;
};

myForm.onsubmit = async (e) => {
    e.preventDefault();
    const itemObj = {
        name: named.value,
        description: description.value,
        price: price.value,
        quantity: quantity.value
    };

    try {
        const response = await axios.post('https://crudcrud.com/api/5b2239df358844f1a1d16b402839bff3/items', itemObj);
        addItemToUI(response.data);

        console.log("Data stored successfully:", response.data);

        named.value = "";
        description.value = "";
        price.value = "";
        quantity.value = "";
    } catch (error) {
        console.error("Error storing data:", error);
    }
};

fetchData();
