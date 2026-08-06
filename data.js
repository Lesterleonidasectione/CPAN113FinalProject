const recipes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    continent: "Europe",
    country: "Italy",
    type: "Dinner",
    ingredients: [
      "Spaghetti",
      "Eggs",
      "Pancetta",
      "Parmesan cheese",
      "Black pepper"
    ],
    steps: [
      "Boil spaghetti until al dente.",
      "Cook pancetta until crispy.",
      "Whisk eggs and Parmesan together.",
      "Combine hot pasta with pancetta and egg mixture.",
      "Season with black pepper and serve."
    ]
  },

  {
    id: 2,
    name: "Chicken Adobo",
    continent: "Asia",
    country: "Philippines",
    type: "Dinner",
    ingredients: [
      "Chicken",
      "Soy sauce",
      "Vinegar",
      "Garlic",
      "Bay leaves",
      "Peppercorns"
    ],
    steps: [
      "Marinate chicken in soy sauce, vinegar, and garlic.",
      "Simmer with bay leaves and peppercorns.",
      "Cook until chicken is tender and sauce is reduced.",
      "Serve with steamed rice."
    ]
  },

  {
    id: 3,
    name: "Jollof Rice",
    continent: "Africa",
    country: "Nigeria",
    type: "Dinner",
    ingredients: [
      "Long-grain rice",
      "Tomatoes",
      "Red bell peppers",
      "Tomato paste",
      "Onions",
      "Vegetable oil",
      "Curry powder",
      "Thyme",
      "Chicken stock"
    ],
    steps: [
      "Blend tomatoes, red bell peppers, and onions into a smooth puree.",
      "Fry chopped onions and tomato paste in oil until deeply red.",
      "Add the blended tomato mixture, curry, thyme, and stock, then simmer into a rich stew base.",
      "Stir in washed rice, cover tightly, and steam over low heat until tender.",
      "Fluff with a fork and serve hot."
    ]
  },

  {
    id: 4,
    name: "Chicken Tacos",
    continent: "North America",
    country: "Mexico",
    type: "Dinner",
    ingredients: [
      "Corn tortillas",
      "Chicken breast",
      "Lime",
      "Cumin",
      "Chili powder",
      "Cilantro",
      "Diced onions",
      "Salsa"
    ],
    steps: [
      "Season chicken with cumin, chili powder, and lime juice.",
      "Grill or pan-fry chicken until fully cooked, then shred or dice.",
      "Warm corn tortillas in a dry skillet.",
      "Assemble tacos with chicken, diced onions, fresh cilantro, and salsa."
    ]
  },

  {
    id: 5,
    name: "Feijoada",
    continent: "South America",
    country: "Brazil",
    type: "Dinner",
    ingredients: [
      "Black beans",
      "Pork shoulder",
      "Chorizo sausage",
      "Bacon",
      "Garlic",
      "Onions",
      "Bay leaves",
      "Orange slices"
    ],
    steps: [
      "Soak black beans overnight.",
      "Sauté onions, garlic, and bacon in a large pot.",
      "Add pork shoulder, sliced chorizo, soaked beans, and bay leaves.",
      "Cover with water and simmer over low heat for 2 to 3 hours until meats and beans are soft.",
      "Serve hot over white rice with orange slices on the side."
    ]
  },

  {
    id: 6,
    name: "Lamingtons",
    continent: "Oceania",
    country: "Australia",
    type: "Dessert",
    ingredients: [
      "Sponge cake",
      "Powdered sugar",
      "Cocoa powder",
      "Unsalted butter",
      "Milk",
      "Desiccated coconut"
    ],
    steps: [
      "Bake a plain sponge cake and let it cool completely, then cut into even cubes.",
      "Whisk powdered sugar, cocoa powder, melted butter, and milk together into a smooth chocolate icing.",
      "Dip each cake cube into the chocolate icing until fully coated.",
      "Roll the coated cake cubes immediately in desiccated coconut.",
      "Let set on a wire rack before serving."
    ]
  },

  {
    id: 7,
    name: "Chicken and Dumplings",
    continent: "North America",
    country: "US",
    type: "Main",
    ingredients: [
      "2 (10.5 ounce) cans condensed cream of chicken soup",
      "3 (14 ounce) cans chicken broth",
      "3 cups shredded cooked chicken meat",
      "2 (10 ounce) cans refrigerated biscuit dough"
    ],
    steps: [
      "Gather all ingredients.",
      "Stir condensed soup, chicken broth, and shredded chicken together in a large saucepan over medium-high heat until it begins to simmer.",
      "Cut each biscuit into quarters, and gently stir into the simmering soup.",
      "Reduce heat to medium-low, cover, and simmer until biscuits are no longer doughy in the center, 10 to 15 minutes.",
      "Serve and enjoy!"
    ]
  },

  {
    id: 8,
    name: "Guacamole",
    continent: "South America",
    country: "Mexico",
    type: "Dipping",
    ingredients: [
      "2 ripe avocados, peeled and pitted",
      "1 small onion, finely chopped",
      "1 ripe tomato, chopped",
      "1 clove garlic, minced",
      "1 lime, juiced",
      "salt and pepper to taste"
    ],
    steps: [
      "Gather all ingredients.",
      "Mash avocado in a medium serving bowl.",
      "Stir in onion, tomato, and garlic.",
      "Season with lime juice and salt and pepper to taste.",
      "Cover and chill guacamole for 30 minutes to allow flavors to blend."
    ]
  },

  {
    id: 9,
    name: "Chicken Curry",
    continent: "Asia",
    country: "India",
    type: "Main",
    ingredients: [
      "¼ cup olive oil",
      "2 large onions, diced",
      "⅓ cup curry powder, or to taste",
      "6 skinless, boneless chicken breast halves - cut into strips"
    ],
    steps: [
      "Gather the ingredients.",
      "Heat oil in a large skillet over medium heat until hot.",
      "Add onion and sauté until soft and golden brown, 5 to 8 minutes.",
      "Slowly stir in curry powder until well blended.",
      "Add chicken; reduce the heat to low, cover, and cook until chicken is no longer pink in the center and the juices run clear, 20 to 40 minutes.",
      "Uncover and cook, stirring constantly to prevent burning, until pan juices reduce to desired amount, 3 to 5 minutes."
    ]
  },

  {
    id: 10,
    name: "Sour Cream Cheesecake",
    continent: "North America",
    country: "US",
    type: "Dessert",
    ingredients: [
      "1 (9 inch) prepared shortbread pie crust",
      "2 (8 ounce) packages cream cheese",
      "1 cup white sugar",
      "2 large eggs",
      "1 cup sour cream",
      "2 teaspoons vanilla extract"
    ],
    steps: [
      "Gather all ingredients.",
      "Preheat the oven to 325 degrees F (165 degrees C). Place pie crust in a pan.",
      "Cream cheese and sugar creamed together.",
      "Add eggs one at a time, blending well.",
      "Add sour cream and vanilla.",
      "Pour into prepared crust in the pan.",
      "Bake in the preheated oven until the cake is set and jiggles evenly across the top when lightly shaken, 60 to 70 minutes.",
      "Run a knife around the outside edge but leave the cake in the pan.",
      "Let cool on the counter, then place in refrigerator.",
      "Remove from pan when completely chilled, and serve."
    ]
  },

  {
    id: 11,
    name: "Grilled Teriyaki Chicken",
    continent: "Asia",
    country: "Japan",
    type: "Main",
    ingredients: [
      "1 cup teriyaki sauce",
      "¼ cup lemon juice",
      "2 teaspoons finely minced fresh garlic",
      "2 teaspoons sesame oil",
      "4 skinless, boneless chicken breast halves"
    ],
    steps: [
      "Gather all ingredients.",
      "Whisk teriyaki sauce, lemon juice, garlic, and sesame oil together in a bowl.",
      "Pour marinade into a resealable plastic bag. Add chicken, coat with marinade, and seal.",
      "Marinate in the refrigerator for at least 1 hour to overnight.",
      "Preheat an outdoor grill for high heat and lightly oil the grate.",
      "Remove chicken from marinade and shake off excess. Discard remaining marinade.",
      "Cook chicken on the grill until no longer pink in the center and juices run clear, 6 to 8 minutes per side."
    ]
  },

  {
    id: 12,
    name: "Easy Pancakes",
    continent: "North America",
    country: "US",
    type: "Breakfast",
    ingredients: [
      "1 cup all-purpose flour",
      "2 tablespoons white sugar",
      "2 teaspoons baking powder",
      "½ teaspoon salt",
      "1 cup milk",
      "2 tablespoons vegetable oil",
      "1 large egg, beaten"
    ],
    steps: [
      "Gather the ingredients.",
      "Combine flour, sugar, baking powder, and salt in a large bowl; make a well in the center.",
      "Pour in milk, oil, and egg; mix until smooth.",
      "Heat a lightly oiled griddle or frying pan over medium-high heat.",
      "Pour about ¼ cup batter per pancake; cook until bubbles form, then flip.",
      "Cook until browned on the other side."
    ]
  },

  {
    id: 13,
    name: "Chinese Corn Soup",
    continent: "Asia",
    country: "China",
    type: "Soup",
    ingredients: [
      "1 (15 ounce) can cream style corn",
      "1 (14.5 ounce) can low-sodium chicken broth",
      "1 tablespoon cornstarch",
      "2 tablespoons water",
      "1 large egg, beaten"
    ],
    steps: [
      "Combine corn and chicken broth in a saucepan. Bring to a boil.",
      "Mix cornstarch and water; pour into boiling soup and cook until thickened.",
      "Gradually add beaten egg while stirring. Remove from heat and serve."
    ]
  },

  {
    id: 15,
    name: "Jerk Chicken",
    continent: "Central America",
    country: "Jamaica",
    type: "Main",
    ingredients: [
      "6 green onions, chopped",
      "1 onion, chopped",
      "1 chile pepper, minced",
      "¾ cup soy sauce",
      "½ cup distilled white vinegar",
      "¼ cup vegetable oil",
      "2 tablespoons brown sugar",
      "1 tablespoon chopped fresh thyme",
      "½ teaspoon ground cloves",
      "½ teaspoon ground nutmeg",
      "½ teaspoon ground allspice",
      "1 ½ pounds chicken breast halves",
      "lime wedges"
    ],
    steps: [
      "Gather all ingredients.",
      "Combine all marinade ingredients in a food processor.",
      "Coat chicken with marinade and refrigerate 4 to 6 hours.",
      "Preheat grill for high heat and lightly oil grate.",
      "Cook chicken until juices run clear, about 8 to 10 minutes.",
      "Serve with lime wedges."
    ]
  }
];
