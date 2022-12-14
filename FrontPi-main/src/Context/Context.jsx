import React, { createContext, useState, useEffect } from "react";

export const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [dataUser, setDataUser] = useState({});

  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);
  const [products, setProducts] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [productBookings, setProductBookings] = useState([]);

  // const [carsImage, setCarsImage] = useState([]);

  const [calendar, setCalendar] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      color: "#f48240",
      key: "selection",
    },
  ]);

  const [rent, setRent] = useState();

  // Categories
  const urlCategories = "http://54.159.110.183:8081/categories";
  useEffect(() => {
    fetch(urlCategories)
      .then((responseCategories) => responseCategories.json())
      .then((categoriesJSON) => setCategories(categoriesJSON));
  }, []);

  // Cities
  const urlCities = "http://54.159.110.183:8081/cities";
  useEffect(() => {
    fetch(urlCities)
      .then((responseCities) => responseCities.json())
      .then((citiesJSON) => setCities(citiesJSON));
  }, []);

  // Products
  const urlProducts = "http://54.159.110.183:8081/products";
  useEffect(() => {
    fetch(urlProducts)
      .then((responseProducts) => responseProducts.json())
      .then((productsJSON) => setProducts(productsJSON));
  }, []);

  // Images
  const urlImages = "http://54.159.110.183:8081/images";
  useEffect(() => {
    fetch(urlImages)
      .then((responseImages) => responseImages.json())
      .then((imagesJSON) => setProductImages(imagesJSON));
  }, []);

  // Bookings
  const urlBookings = "http://54.159.110.183:8081/bookings";
  useEffect(() => {
    fetch(urlBookings)
      .then((responseBookings) => responseBookings.json())
      .then((bookingsJSON) => setProductBookings(bookingsJSON));
  }, []);

  // useEffect(() => {
  //   fetch(urlImages)
  //     .then((responseCars) => responseCars.json())
  //     .then((carsJSON) => {
  //       const images = carsJSON.map((car) => {
  //         // const imagens = car.images.map(imagem => {
  //         //   return {
  //         //     original: imagem,
  //         //     thumbnail: imagem
  //         //   }
  //         // })

  //         // return (
  //         //   car.urlImage
  //         // )

  //         return {
  //           ...car,
  //           images: [
  //             {
  //               original: car.urlImage,
  //               thumbnail: car.urlImage,
  //             },
  //             {
  //               original: car.urlImage,
  //               thumbnail: car.urlImage,
  //             },
  //             {
  //               original: car.urlImage,
  //               thumbnail: car.urlImage,
  //             },
  //             {
  //               original: car.urlImage,
  //               thumbnail: car.urlImage,
  //             },
  //           ],
  //         };
  //       });

  //       // console.log(images);
  //       setCarsImage(images);
  //     });
  // }, []);

  return (
    <Context.Provider
      value={{
        dataUser,
        setDataUser,
        categories,
        setCategories,
        cities,
        setCities,
        products,
        setProducts,
        productImages,
        setProductImages,
        productBookings,
        setProductBookings,
        // carsImage,
        // setCarsImage,
        calendar,
        setCalendar,
        rent,
        setRent,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;