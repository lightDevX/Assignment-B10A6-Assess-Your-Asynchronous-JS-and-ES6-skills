const loadPetCategories = async () => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/peddy/categories`,
    );
    const data = await res.json();
    displayPetCategories(data.categories);
  } catch (error) {
    console.log("Error data fetching", error);
  }
};

const loadPetData = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/peddy/pets",
    );
    const data = await res.json();
    displayPetCard(data.pets);
  } catch (error) {
    console.log("Error data fetching", error);
  }
};

const displayPetCategories = (categories) => {
  const divParent = document.getElementById("btn-list");
  console.log(divParent);
  console.log(categories);
  categories.forEach((item) => {
    console.log(item);
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
        <button
          class="relative flex items-center rounded-xl bg-[#0E7A81] px-12 py-3 text-white"
        >
        <span class="mr-2 h-5 w-5">
            <img
              src="${item.category_icon}"
              alt="Category Icon"
              class="h-full w-full object-fill"
            />
          </span>
          ${item.category}
          
        </button>
            
        `;
    divParent.appendChild(btnDiv);
  });
};

const displayPetCard = (pets) => {
  const petCard = document.getElementById("pet-card");
  console.log(petCard);
  console.log(pets);
  pets.forEach((pet) => {
    console.log(pet);
    const petDiv = document.createElement("div");
    petDiv.classList.add("rounded-md", "border-2", "border-gray-300/30", "p-5");
    petDiv.innerHTML = `
    <div class="space-y-5 p-1">
      <div class="h-40 w-72">
          <img
            src="${pet.image}" alt="Pet Image"
            class="h-full w-full rounded-lg object-cover"
          />
      </div>
        <h1 class="text-xl font-bold">${pet.pet_name}</h1>
        <p class="text-base font-normal text-[#131313B3] opacity-70">
          Breed: ${pet.breed}
        </p>
        <p class="text-base font-normal text-[#131313B3] opacity-70">
          Birth: ${pet.date_of_birth}
        </p>
        <p class="text-base font-normal text-[#131313B3] opacity-70">
          Gender: ${pet.gender}
        </p>
        <p class="text-base font-normal text-[#131313B3] opacity-70">
          Price : ${pet.price} $
        </p>
      </div>
    `;
    petCard.appendChild(petDiv);
  });
};

loadPetCategories();
loadPetData();
