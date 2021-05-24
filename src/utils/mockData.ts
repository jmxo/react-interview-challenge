const mockCars = {
  cars: [
    {
      stockNumber: 84797,
      manufacturerName: "BMW",
      modelName: "5er",
      color: "black",
      mileage: {
        number: 199956,
        unit: "km",
      },
      fuelType: "Diesel",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
    },
    {
      stockNumber: 59366,
      manufacturerName: "Chrysler",
      modelName: "Crossfire",
      color: "yellow",
      mileage: {
        number: 199932,
        unit: "km",
      },
      fuelType: "Petrol",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
    },
    {
      stockNumber: 72130,
      manufacturerName: "BMW",
      modelName: "3er",
      color: "black",
      mileage: {
        number: 199885,
        unit: "km",
      },
      fuelType: "Petrol",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
    },
    {
      stockNumber: 43326,
      manufacturerName: "Chrysler",
      modelName: "PT Cruiser",
      color: "red",
      mileage: {
        number: 199833,
        unit: "km",
      },
      fuelType: "Petrol",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
    },
    {
      stockNumber: 51778,
      manufacturerName: "Mercedes-Benz",
      modelName: "CLC-Klasse",
      color: "yellow",
      mileage: {
        number: 199508,
        unit: "km",
      },
      fuelType: "Diesel",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
    },
    {
      stockNumber: 60033,
      manufacturerName: "Volkswagen",
      modelName: "T6",
      color: "blue",
      mileage: {
        number: 199356,
        unit: "km",
      },
      fuelType: "Diesel",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
    },
    {
      stockNumber: 27143,
      manufacturerName: "Chrysler",
      modelName: "ES",
      color: "green",
      mileage: {
        number: 199188,
        unit: "km",
      },
      fuelType: "Petrol",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
    },
    {
      stockNumber: 55243,
      manufacturerName: "BMW",
      modelName: "6er",
      color: "black",
      mileage: {
        number: 198702,
        unit: "km",
      },
      fuelType: "Petrol",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
    },
    {
      stockNumber: 54548,
      manufacturerName: "Volkswagen",
      modelName: "Golf I",
      color: "black",
      mileage: {
        number: 198644,
        unit: "km",
      },
      fuelType: "Petrol",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
    },
    {
      stockNumber: 13412,
      manufacturerName: "Dodge",
      modelName: "Caliber",
      color: "blue",
      mileage: {
        number: 198610,
        unit: "km",
      },
      fuelType: "Diesel",
      pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
    },
  ],
  totalPageCount: 100,
  totalCarsCount: 1000,
};

const mockColors = {
  colors: ["red", "blue", "green", "black", "yellow", "white", "silver"],
};

const mockManufacturers = {
  manufacturers: [
    {
      name: "Audi",
      models: [
        {
          name: "100",
        },
        {
          name: "200",
        },
        {
          name: "50",
        },
        {
          name: "80/90",
        },
        {
          name: "A1",
        },
        {
          name: "A2",
        },
        {
          name: "A3",
        },
        {
          name: "A4",
        },
        {
          name: "A4 Allroad",
        },
        {
          name: "A5",
        },
        {
          name: "A6",
        },
        {
          name: "A6 Allroad",
        },
        {
          name: "A7",
        },
        {
          name: "A8",
        },
        {
          name: "Allroad",
        },
        {
          name: "Cabriolet",
        },
        {
          name: "Coupe",
        },
        {
          name: "Q2",
        },
        {
          name: "Q3",
        },
        {
          name: "Q5",
        },
        {
          name: "Q7",
        },
        {
          name: "Quattro",
        },
        {
          name: "R8",
        },
        {
          name: "RS 3",
        },
        {
          name: "RS 4",
        },
        {
          name: "RS 5",
        },
        {
          name: "RS 6",
        },
        {
          name: "RS 7",
        },
        {
          name: "RS Q3",
        },
        {
          name: "S1",
        },
        {
          name: "S3",
        },
        {
          name: "S4",
        },
        {
          name: "S5",
        },
        {
          name: "S6",
        },
        {
          name: "S7",
        },
        {
          name: "S8",
        },
        {
          name: "SQ5",
        },
        {
          name: "SQ7",
        },
        {
          name: "TT",
        },
        {
          name: "TT Roadster",
        },
        {
          name: "V8",
        },
      ],
    },
    {
      name: "BMW",
      models: [
        {
          name: "1er",
        },
        {
          name: "2er",
        },
        {
          name: "3er",
        },
        {
          name: "4er",
        },
        {
          name: "5er",
        },
        {
          name: "6er",
        },
        {
          name: "7er",
        },
        {
          name: "8er",
        },
        {
          name: "X1",
        },
        {
          name: "X2",
        },
        {
          name: "X3",
        },
        {
          name: "X4",
        },
        {
          name: "X5",
        },
        {
          name: "X6",
        },
        {
          name: "Z1",
        },
        {
          name: "Z3",
        },
        {
          name: "Z4",
        },
        {
          name: "Z8",
        },
        {
          name: "i3",
        },
        {
          name: "i8",
        },
      ],
    },
    {
      name: "Chrysler",
      models: [
        {
          name: "300 C",
        },
        {
          name: "300 M",
        },
        {
          name: "Crossfire",
        },
        {
          name: "Daytona Shelby",
        },
        {
          name: "ES",
        },
        {
          name: "GS",
        },
        {
          name: "GTS",
        },
        {
          name: "Grand Voyager",
        },
        {
          name: "Le Baron",
        },
        {
          name: "Neon",
        },
        {
          name: "New Yorker",
        },
        {
          name: "PT Cruiser",
        },
        {
          name: "Saratoga",
        },
        {
          name: "Sebring",
        },
        {
          name: "Stratus",
        },
        {
          name: "Viper",
        },
        {
          name: "Vision",
        },
        {
          name: "Voyager",
        },
      ],
    },
    {
      name: "Dodge",
      models: [
        {
          name: "Avenger",
        },
        {
          name: "Caliber",
        },
        {
          name: "Journey",
        },
        {
          name: "Nitro",
        },
      ],
    },
    {
      name: "Fiat",
      models: [
        {
          name: "124 Spider",
        },
        {
          name: "124 Sport/Spider",
        },
        {
          name: "126",
        },
        {
          name: "127",
        },
        {
          name: "131",
        },
        {
          name: "500",
        },
        {
          name: "500L",
        },
        {
          name: "500X",
        },
        {
          name: "850 T/900 T/-E",
        },
        {
          name: "Albea",
        },
        {
          name: "Argenta",
        },
        {
          name: "Barchetta",
        },
        {
          name: "Brava",
        },
        {
          name: "Bravo",
        },
        {
          name: "Cinquecento",
        },
        {
          name: "Coupe",
        },
        {
          name: "Croma",
        },
        {
          name: "Doblo",
        },
        {
          name: "Ducato",
        },
        {
          name: "Fiorino",
        },
        {
          name: "Freemont",
        },
        {
          name: "Fullback",
        },
        {
          name: "Grande Punto",
        },
        {
          name: "Idea",
        },
        {
          name: "Linea",
        },
        {
          name: "Marea",
        },
        {
          name: "Multipla",
        },
        {
          name: "Palio",
        },
        {
          name: "Panda",
        },
        {
          name: "Punto",
        },
        {
          name: "Qubo",
        },
        {
          name: "Regata",
        },
        {
          name: "Ritmo",
        },
        {
          name: "Scudo",
        },
        {
          name: "Sedici",
        },
        {
          name: "Seicento",
        },
        {
          name: "Stilo",
        },
        {
          name: "Strada",
        },
        {
          name: "Talento",
        },
        {
          name: "Tempra",
        },
        {
          name: "Tipo",
        },
        {
          name: "Ulysse",
        },
        {
          name: "Uno",
        },
        {
          name: "X 1/9",
        },
      ],
    },
    {
      name: "Mercedes-Benz",
      models: [
        {
          name: "107 Coupe/Roadster",
        },
        {
          name: "123",
        },
        {
          name: "190/190 E",
        },
        {
          name: "207 D - 210 D",
        },
        {
          name: "A-Klasse",
        },
        {
          name: "B-Klasse",
        },
        {
          name: "C-Klasse",
        },
        {
          name: "CL-Coupe",
        },
        {
          name: "CLA-Klasse",
        },
        {
          name: "CLC-Klasse",
        },
        {
          name: "CLK-Klasse",
        },
        {
          name: "CLS-Klasse",
        },
        {
          name: "Citan",
        },
        {
          name: "SLC-Klasse",
        },
        {
          name: "E-Klasse",
        },
        {
          name: "E-Klasse T Modell",
        },
        {
          name: "G-Modell",
        },
        {
          name: "GL-Klasse",
        },
        {
          name: "GLA-Klasse",
        },
        {
          name: "GLC-Klasse",
        },
        {
          name: "GLE-Klasse",
        },
        {
          name: "GLK-Klasse",
        },
        {
          name: "GLS-Klasse",
        },
        {
          name: "GT AMG",
        },
        {
          name: "M-Klasse",
        },
        {
          name: "MB 100 D",
        },
        {
          name: "R-Klasse",
        },
        {
          name: "S-Coupe",
        },
        {
          name: "S-Klasse",
        },
        {
          name: "SL-Klasse",
        },
        {
          name: "SLK-Klasse",
        },
        {
          name: "SLR McLaren",
        },
        {
          name: "SLS AMG",
        },
        {
          name: "Sprinter",
        },
        {
          name: "Strich Acht",
        },
        {
          name: "Transporter",
        },
        {
          name: "V-Klasse",
        },
        {
          name: "Vaneo",
        },
        {
          name: "Viano",
        },
        {
          name: "Vito",
        },
        {
          name: "Vito Tourer",
        },
        {
          name: "X-Klasse",
        },
      ],
    },
    {
      name: "Porsche",
      models: [
        {
          name: "718 Boxster",
        },
        {
          name: "718 Cayman",
        },
        {
          name: "911",
        },
        {
          name: "918 Spyder",
        },
        {
          name: "924",
        },
        {
          name: "928",
        },
        {
          name: "944",
        },
        {
          name: "968",
        },
        {
          name: "Boxster",
        },
        {
          name: "Cayenne",
        },
        {
          name: "Cayman",
        },
        {
          name: "Macan",
        },
        {
          name: "Panamera",
        },
        {
          name: "Panamera Sport Turismo",
        },
      ],
    },
    {
      name: "Skoda",
      models: [
        {
          name: "Citigo",
        },
        {
          name: "Fabia",
        },
        {
          name: "Favorit",
        },
        {
          name: "Felicia",
        },
        {
          name: "Forman",
        },
        {
          name: "Karoq",
        },
        {
          name: "Kodiaq",
        },
        {
          name: "Octavia",
        },
        {
          name: "Pickup",
        },
        {
          name: "Rapid",
        },
        {
          name: "Roomster",
        },
        {
          name: "Skoda 105",
        },
        {
          name: "Skoda 120",
        },
        {
          name: "Skoda 130",
        },
        {
          name: "Superb",
        },
        {
          name: "Yeti",
        },
      ],
    },
    {
      name: "Tesla",
      models: [
        {
          name: "Model S",
        },
        {
          name: "Model X",
        },
        {
          name: "Roadster",
        },
      ],
    },
    {
      name: "Volkswagen",
      models: [
        {
          name: "Amarok",
        },
        {
          name: "Arteon",
        },
        {
          name: "Beetle / New Beetle",
        },
        {
          name: "Bora",
        },
        {
          name: "CC",
        },
        {
          name: "Caddy",
        },
        {
          name: "Corrado",
        },
        {
          name: "Crafter",
        },
        {
          name: "Derby",
        },
        {
          name: "Eos",
        },
        {
          name: "Fox",
        },
        {
          name: "Golf I",
        },
        {
          name: "Golf II",
        },
        {
          name: "Golf III",
        },
        {
          name: "Golf IV",
        },
        {
          name: "Golf Plus",
        },
        {
          name: "Golf V",
        },
        {
          name: "Golf VI",
        },
        {
          name: "Golf VII",
        },
        {
          name: "Golf VII Sportsvan",
        },
        {
          name: "Jetta",
        },
        {
          name: "Kaefer 1200",
        },
        {
          name: "LT",
        },
        {
          name: "Lupo",
        },
        {
          name: "Passat",
        },
        {
          name: "Phaeton",
        },
        {
          name: "Polo",
        },
        {
          name: "Santana",
        },
        {
          name: "Scirocco",
        },
        {
          name: "Scirocco II",
        },
        {
          name: "Sharan",
        },
        {
          name: "T-Roc",
        },
        {
          name: "T3",
        },
        {
          name: "T4",
        },
        {
          name: "T5",
        },
        {
          name: "T6",
        },
        {
          name: "Taro",
        },
        {
          name: "Tiguan",
        },
        {
          name: "Tiguan Allspace",
        },
        {
          name: "Touareg",
        },
        {
          name: "Touran",
        },
        {
          name: "Vento",
        },
      ],
    },
  ],
};

export { mockCars, mockColors, mockManufacturers };
