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
      <div>
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
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
        <div class="flex gap-2 justify-between items-center">
            <button class="py-2 px-4  border border-[#0E7A8126]/15 outline-1 rounded-lg">
            <span >
            <?xml version="1.0" ?>
            <svg class="fill-[#0E7A81]" height="28" viewBox="0 0 1791 1792" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M320 1344q0-26-19-45t-45-19q-27 0-45.5 19t-18.5 45q0 27 18.5 45.5t45.5 18.5q26 0 45-18.5t19-45.5zm160-512v640q0 26-19 45t-45 19h-288q-26 0-45-19t-19-45v-640q0-26 19-45t45-19h288q26 0 45 19t19 45zm1184 0q0 86-55 149 15 44 15 76 3 76-43 137 17 56 0 117-15 57-54 94 9 112-49 181-64 76-197 78h-129q-66 0-144-15.5t-121.5-29-120.5-39.5q-123-43-158-44-26-1-45-19.5t-19-44.5v-641q0-25 18-43.5t43-20.5q24-2 76-59t101-121q68-87 101-120 18-18 31-48t17.5-48.5 13.5-60.5q7-39 12.5-61t19.5-52 34-50q19-19 45-19 46 0 82.5 10.5t60 26 40 40.5 24 45 12 50 5 45 .5 39q0 38-9.5 76t-19 60-27.5 56q-3 6-10 18t-11 22-8 24h277q78 0 135 57t57 135z"/></svg>
            </span>
            </button>
            <button class="py-2 px-4 text-[#0E7A81] border border-[#0E7A8126]/15 outline-1 rounded-lg font-bold text-xl">
            Adopt
            </button>
            <button class="py-2 px-4 text-[#0E7A81] border border-[#0E7A8126]/15 outline-1 rounded-lg font-bold text-xl">
            Details
            </button>
        </div>
      </div>
    `;
    petCard.appendChild(petDiv);
  });
};

loadPetCategories();
loadPetData();
