const genders = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];

const countries = [
  {
    value: "Pakistan",
    label: "Pakistan",
  },
  {
    value: "United Arab Emirates",
    label: "United Arab Emirates",
  },
  {
    value: "Saudi Arabia",
    label: "Saudi Arabia",
  },
];

const cities = [
  {
    value: "Islamabad",
    label: "Islamabad",
    country: "Pakistan",
  },
  {
    value: "Karachi",
    label: "Karachi",
    country: "Pakistan",
  },
  {
    value: "Lahore",
    label: "Lahore",
    country: "Pakistan",
  },
  {
    value: "Dubai",
    label: "Dubai",
    country: "United Arab Emirates",
  },
  {
    value: "Abu Dhabi",
    label: "Abu Dhabi",
    country: "United Arab Emirates",
  },
  {
    value: "Sharjah",
    label: "Sharjah",
    country: "United Arab Emirates",
  },
  {
    value: "Ryadh",
    label: "Ryadh",
    country: "Saudi Arabia",
  },
  {
    value: "Jeddah",
    label: "Jeddah",
    country: "Saudi Arabia",
  },
  {
    value: "Medina",
    label: "Medina",
    country: "Saudi Arabia",
  },
  {
    value: "Mecca",
    label: "Mecca",
    country: "Saudi Arabia",
  },
];

const getCities = (country) => {
  return cities.filter((city) => city.country === country);
};

export { genders, countries, getCities };
