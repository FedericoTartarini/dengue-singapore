import React from "react";
import { Helmet } from "react-helmet";

function AboutView() {
  return (
    <section className="text-gray-700 body-font">
      <Helmet>
        <title>About | Dengue Singapore</title>
        <meta
          name="description"
          content="This page describes Dengue Singapore and the author."
        />
      </Helmet>
      <div className="container mx-auto flex flex-col px-5 py-8 justify-center items-center">
        <picture className={"flex justify-center items-center"}>
          <source
            type="image/webp"
            srcSet={require("../Static/Images/me.webp")}
          />
          <source
            type="image/jpeg"
            srcSet={require("../Static/Images/me.jpg")}
          />
          <img
            src={require("../Static/Images/me.jpg")}
            className="lg:w-2/6 md:w-2/6 w-3/6 mb-8 rounded-full border-4 shadow-lg"
            alt="Federico Tartarini"
          />
        </picture>
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Dengue Singapore
          </h1>
          <p className="mb-6 leading-relaxed">
            Hello! My name is Federico Tartarini, the developer of the Dengue
            Singapore website.
          </p>
          <p className="mb-8 leading-relaxed">
            Dengue Singapore is an easy to use web-site which lets you monitor
            the dengue clusters in Singapore. All the data in this website are
            updated daily. Data are downloaded using the APIs provided by the
            National Environment Agency (NEA) in Singapore.
          </p>
          <div className="flex w-full justify-center">
            <a href="https://www.buymeacoffee.com/FedericoT">
              <img
                src="https://cdn.buymeacoffee.com/buttons/arial-orange.png"
                alt="Buy Me A Coffee"
                className="rounded shadow-lg"
                style={{ height: 51, width: 217 }}
              />
            </a>
          </div>
          <p className="text-sm mt-2 text-gray-600 mb-8 w-full">
            To support my work please consider buying me a coffee.
          </p>
          <p className="leading-relaxed mb-6">
            If you enjoyed this website you may also want to visit{" "}
            <a href={"weather.sg"}>Air Quality and Weather SG</a>. This website
            allows you to check the weather forecast and air quality in
            Singapore. With{" "}
            <a href={"weather.sg"}>Air Quality and Weather SG</a> you can
            monitor the current weather conditions in your location as well as
            the 24-h and 2-h weather forecasts for Singapore. It also features a
            rain radar.
          </p>
          <p className="leading-relaxed">
            I would like to thank the Singaporean government who provides the
            data. In addition, I would like to thank the developers at
            OpenStreetMap, Leaflet, React, FontAwesome, Inkscape and Google. I
            could now have created Dengue Singapore without their amazing work.
          </p>
          <p className="leading-relaxed">
            I have released the website code open-source and upload it on
            GitHub. Feel free to{" "}
            <a href="https://github.com/FedericoTartarini/dengue-singapore">
              clone this repository.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutView;
