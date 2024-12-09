// The FoodItem class represents an individual food item.
class FoodItem {
    // Constructor for creating a FoodItem object with a name, image, and link
    constructor(name, image, link) {
        this.name = name;   
        this.image = image; 
        this.link = link; 
    }

    // Method to render the HTML structure for this food item
    render() {
        return `
            <div class="col-md-2 mb-4">  <!-- Bootstrap column for responsive grid layout -->
                <figure>
                    <!-- Image of the food item with dynamic src and alt attributes -->
                    <img src="${this.image}" alt="${this.name}" class="img-fluid" style="max-width: 250px; height: 250px;">
                    <figcaption>${this.name}</figcaption>  <!-- Display the name of the food item -->
                    <div class="button-container">
                        <!-- A link containing a button to see more details about the food item -->
                        <a href="${this.link}">
                            <button class="see-more-btn">See More</button>
                        </a>
                    </div>
                </figure>
            </div>
        `;
    }
}

// Breakfast Section Items - An array of FoodItem objects for the breakfast category
const breakfastItems = [
    new FoodItem("Sesame Instant Ramen", "img/seasami instant ramen.webp", "breakfast/index.html"),
    new FoodItem("Peanut Butter & Chia Berry Jam Muffin", "img/Peanut Butter & Chia Berry Jam English Muffin.webp", "breakfast/peanut.html"),
    new FoodItem("Avocado Breakfast Salad", "img/AVOCADO BREAKFAST SALAD.webp", "breakfast/avado.html"),
    new FoodItem("Feta Egg and Spinach", "img/EWL-feta-egg-and-spinach-breakfast-taco-step-05-2399-facf1af19e874405bffc5b55b80dc035.webp", "breakfast/feta.html"),
    new FoodItem("High Protein Black Bean", "img/HIGH PROTEIN BLACKBEAN.webp", "breakfast/bb.html")
];

// Lunch Section Items - An array of FoodItem objects for the lunch category
const lunchItems = [
    new FoodItem("Buffalo Chicken", "img/Buffalo Chicken.jpg", "lunch/buffalo.html"),
    new FoodItem("Veggie & Hummus Sandwich", "img/Veggie & Hummus Sandwich.jpg", "lunch/vegg.html"),
    new FoodItem("Lettuce Wraps", "img/Lettuce Wraps.webp", "lunch/lettuce.html"),
    new FoodItem("Chicken Salad", "img/cobb salad.jpg", "lunch/cobb salad.html"),
    new FoodItem("Chicken Quesadillas", "img/Chicken Quesadillas.jpg", "lunch/chicken.html")
];

// Dinner Section Items - An array of FoodItem objects for the dinner category
const dinnerItems = [
    new FoodItem("Chicken Adobo", "/img/image.png", "/dinner/adobo.html"),
    new FoodItem("Chicken Binagoongan", "/img/chicken-binagoongan.jpg", "/dinner/chicken.html"),
    new FoodItem("Chicken Gising Gising", "/img/Chicken Gising Gising.jpg", "/dinner/gising.html"),
    new FoodItem("Escabeche", "/img/escabeche.webp", "/dinner/escabech.html"),
    new FoodItem("Pineapple-Chicken", "/img/Pineapple-Chicken-Filipino-Version.jpg", "/dinner/malapot.html")
];

// The FoodSection class represents a section of food items (e.g., breakfast, lunch, dinner).
class FoodSection {
    // Constructor for creating a FoodSection with a title and items (food items)
    constructor(title, items) {
        this.title = title;  // Title of the section (e.g., Breakfast, Lunch, Dinner)
        this.items = items;  // List of FoodItem objects to be displayed in this section
    }

    // Method to render the HTML structure for the entire food section
    render() {
        // Map over the items array and render each FoodItem's HTML, then join them together
        let itemsHTML = this.items.map(item => item.render()).join('');
        return `
            <div class="container">
                <h2>${this.title}</h2>  <!-- Title of the section -->
                <div class="row text-center">  <!-- Bootstrap grid for layout -->
                    ${itemsHTML}  <!-- Insert the rendered food item HTML here -->
                </div>
            </div>
        `;
    }
}

// Get the element with the ID "app" where the food sections will be rendered
const appContainer = document.getElementById("app");

// Create instances of FoodSection for each category (Breakfast, Lunch, Dinner)
const breakfastSection = new FoodSection("BREAKFAST", breakfastItems);
const lunchSection = new FoodSection("LUNCH", lunchItems);
const dinnerSection = new FoodSection("DINNER", dinnerItems);

// Render each section and insert the HTML into the appContainer
appContainer.innerHTML = `
    ${breakfastSection.render()}  <!-- Render the Breakfast section -->
    ${lunchSection.render()}      <!-- Render the Lunch section -->
    ${dinnerSection.render()}     <!-- Render the Dinner section -->
`;
