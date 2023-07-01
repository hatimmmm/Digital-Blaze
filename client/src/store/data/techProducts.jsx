const techProducts = {
  Apple: {
    logo: "img/brand-logo/Apple.png",
    products: [
      {
        id: 1,
        name: "iPhone 12 Pro Max",
        brand: "Apple",
        price: 1099,
        image: "img/apple/iphone12.png",
        description:
          "The latest and greatest iPhone with a triple-camera system and A14 Bionic chip.",
        inStock: true,
      },
      {
        id: 2,
        name: "MacBook Air",
        brand: "Apple",
        price: 999,
        image: "img/apple/macbookair.png",
        description:
          "A lightweight and portable MacBook with a Retina display and Touch ID.",
        inStock: false,
      },
      {
        id: 3,
        name: "iPad Pro",
        brand: "Apple",
        price: 799,
        image: "img/apple/ipad.png",
        description:
          "A powerful and versatile tablet from Apple with a Liquid Retina display and A12Z Bionic chip.",
        inStock: true,
      },
      {
        id: 4,
        name: "Apple Watch Series 6",
        brand: "Apple",
        price: 399,
        image: "img/apple/applewatch.png",
        description:
          "The latest and greatest smartwatch from Apple with a always-on Retina display and ECG sensor.",
        inStock: true,
      },
      {
        id: 5,
        name: "AirPods Pro",
        brand: "Apple",
        price: 249,
        image: "img/apple/airpods.png",
        description:
          "High-quality wireless earbuds from Apple with noise cancellation and transparent mode.",
        inStock: true,
      },
      {
        id: 6,
        name: "HomePod Mini",
        brand: "Apple",
        price: 99,
        image: "img/apple/homepod.png",
        description:
          "A compact and powerful smart speaker from Apple with Siri integration and 360-degree audio.",
        inStock: false,
      },
      {
        id: 7,
        name: "Mac mini",
        brand: "Apple",
        price: 699,
        image: "img/apple/macmini.png",
        description:
          "A small yet powerful desktop computer from Apple with a M1 chip and macOS.",
        inStock: true,
      },
      {
        id: 8,
        name: "Apple TV 4K",
        brand: "Apple",
        price: 179,
        image: "img/apple/appletv.png",
        description:
          "A streaming device from Apple with 4K HDR and Dolby Atmos support.",
        inStock: true,
      },
    ],
  },
  Samsung: {
    logo: "img/brand-logo/Samsung.png",
    products: [
      {
        id: 9,
        name: "Galaxy S21 Ultra",
        brand: "Samsung",
        price: 1299,
        image: "img/samsung/galaxys21.png",
        description:
          "A high-end Samsung smartphone with a 108MP camera and 5G capabilities.",
        inStock: true,
      },
      {
        id: 10,
        name: "Galaxy Tab S7",
        brand: "Samsung",
        price: 599,
        image: "img/samsung/galaxy_s7_plus.png",
        description:
          "A sleek and powerful tablet from Samsung with a 11.5-inch Super AMOLED display.",
        inStock: false,
      },
      {
        id: 11,
        name: "Galaxy Buds Pro",
        brand: "Samsung",
        price: 199,
        image: "img/samsung/galaxy-buds.png",
        description:
          "High-quality wireless earbuds from Samsung with active noise cancellation and ambient sound mode.",
        inStock: true,
      },
      {
        id: 12,
        name: "Samsung QLED 8K TV",
        brand: "Samsung",
        price: 2999,
        image: "img/samsung/samsung-qled.png",
        description:
          "A high-end 8K QLED TV from Samsung with a large 65-inch display and AI-powered upscaling.",
        inStock: true,
      },
      {
        id: 13,
        name: "Samsung Galaxy Watch 3",
        brand: "Samsung",
        price: 399,
        image: "img/samsung/galaxy-watch.png",
        description:
          "A stylish and feature-rich smartwatch from Samsung with a rotating bezel and ECG sensor.",
        inStock: true,
      },
      {
        id: 14,
        name: "Samsung T7 Touch Portable SSD",
        brand: "Samsung",
        price: 129,
        image: "img/samsung/ssd.png",
        description:
          "A portable and secure external SSD from Samsung with a fingerprint sensor and USB 3.2 Gen 2 support",
      },
    ],
  },
  Microsoft: {
    logo: "img/brand-logo/Microsoft.png",
    products: [
      {
        id: 15,
        name: "Surface Laptop 4",
        brand: "Microsoft",
        price: 999,
        image: "img/microsoft/surface4.png",
        description:
          "A sleek and powerful laptop from Microsoft with a 11th Gen Intel Core processor.",
        inStock: false,
      },
      {
        id: 16,
        name: "Surface Pro 7",
        brand: "Microsoft",
        price: 799,
        image: "img/microsoft/surface-pro7.png",
        description:
          "A versatile and portable 2-in-1 device from Microsoft with a 12.3-inch touchscreen display.",
        inStock: true,
      },
      {
        id: 17,
        name: "Xbox Series X",
        brand: "Microsoft",
        price: 499,
        image: "img/microsoft/seriesx.png",
        description:
          "The latest and most powerful gaming console from Microsoft with 4K and 120fps capabilities.",
        inStock: true,
      },
      {
        id: 18,
        name: "Microsoft Surface Headphones 2",
        brand: "Microsoft",
        price: 249,
        image: "img/microsoft/surface-headphones2.png",
        description:
          "High-quality wireless headphones from Microsoft with active noise cancellation and Cortana integration.",
        inStock: true,
      },
      {
        id: 19,
        name: "Microsoft Surface Dock 2",
        brand: "Microsoft",
        price: 259,
        image: "img/microsoft/dock2.png",
        description:
          "A compact and powerful docking station from Microsoft for the Surface devices.",
        inStock: true,
      },
      {
        id: 21,
        name: "Microsoft Surface Precision Mouse",
        brand: "Microsoft",
        price: 99,
        image: "img/microsoft/precision-mouse.png",
        description:
          "A high-precision mouse from Microsoft with customizable buttons and thumb wheel.",
        inStock: true,
      },

      {
        id: 23,
        name: "Microsoft Band 2",
        brand: "Microsoft",
        price: 199,
        image: "img/microsoft/surface-band.png",
        description:
          "A fitness tracker and smartwatch from Microsoft with a curved AMOLED display.",
        inStock: true,
      },
      {
        id: 24,
        name: "Microsoft Surface Book 2",
        brand: "Microsoft",
        price: 1599,
        image: "img/microsoft/surface-book2.png",
        description:
          "A high-performance laptop from Microsoft with a detachable display and graphics card.",
        inStock: true,
      },
      {
        id: 25,
        name: "Microsoft Surface Go 2",
        brand: "Microsoft",
        price: 399,
        image: "img/microsoft/surface-go.png",
        description:
          "A lightweight and portable 2-in-1 device from Microsoft with a 10.5-inch touchscreen display.",
        inStock: true,
      },
    ],
  },
  Google: {
    logo: "img/brand-logo/Google.png",
    products: [
      {
        id: 26,
        name: "Google Pixel 5",
        brand: "Google",
        price: 699,
        image: "img/google/pixel-5.png",
        description:
          "The latest smartphone from Google with a 90Hz OLED display and 5G capabilities.",
        inStock: true,
      },
      {
        id: 27,
        name: "Google Nest Hub Max",
        brand: "Google",
        price: 229,
        image: "img/google/nest-hub-max.png",
        description:
          "A powerful and versatile smart display from Google with a 10-inch HD display and Google Assistant integration.",
        inStock: true,
      },
      {
        id: 28,
        name: "Google Chromecast with Google TV",
        brand: "Google",
        price: 49,
        image: "img/google/chromecast.png",
        description:
          "A streaming device from Google with 4K HDR capabilities and a built-in Google Assistant remote.",
        inStock: true,
      },
      {
        id: 29,
        name: "Google Pixel Buds",
        brand: "Google",
        price: 179,
        image: "img/google/pixel-buds.png",
        description:
          "High-quality wireless earbuds from Google with real-time translation and integrated Google Assistant.",
        inStock: true,
      },
      {
        id: 30,
        name: "Google Nest Mini",
        brand: "Google",
        price: 49,
        image: "img/google/Nest-Mini.png",
        description:
          "A compact and powerful smart speaker from Google with Google Assistant integration and improved sound.",
        inStock: true,
      },
      {
        id: 31,
        name: "Google Pixelbook Go",
        brand: "Google",
        price: 649,
        image: "img/google/Pixelbook-Go.png",
        description:
          "A lightweight and portable laptop from Google with a 13.3-inch touchscreen display and Chrome OS.",
        inStock: true,
      },
      {
        id: 32,
        name: "Google Stadia",
        brand: "Google",
        price: 9.99,
        image: "img/google/stadia.png",
        description:
          "A cloud gaming platform from Google that allows you to play games on any device with internet access.",
        inStock: true,
      },
      {
        id: 33,
        name: "Google Nest Cam Indoor",
        brand: "Google",
        price: 129,
        image: "img/google/nest-cam.png",
        description:
          "A high-definition indoor security camera from Google with night vision and two-way audio.",
        inStock: true,
      },
      {
        id: 34,
        name: "Google Nest Hello",
        brand: "Google",
        price: 229,
        image: "img/google/Nest-doorbell.png",
        description:
          "A video doorbell from Google with a HD camera, night vision and two-way audio.",
        inStock: true,
      },
    ],
  },
};

export default techProducts;
