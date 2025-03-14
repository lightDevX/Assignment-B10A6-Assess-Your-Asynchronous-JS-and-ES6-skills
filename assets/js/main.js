const loadPetCategories = async () => {
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
        const data = await res.json()
        displayPetCategories(data.categories)
    } catch (error) {
        console.log("Error data fetching", error);
    }
}

const loadPetData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    const data = await res.json()
    console.log(data);
}



const displayPetCategories = (categories) => {
    const divParent = document.getElementById('btn-list');
    console.log(divParent);
    console.log(categories);
    categories.forEach((item) => {
        console.log(item);
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
        <button
          class="relative flex items-center rounded-xl bg-[#0E7A81] px-12 py-3 text-white"
        >
          ${item.category}
          <span class="ml-2 h-5 w-5">
            <img
              src="${item.category_icon}"
              alt="Category Icon"
              class="h-full w-full object-fill"
            />
          </span>
        </button>
            
        `
        divParent.appendChild(btnDiv);
    });
}




loadPetCategories();
loadPetData();