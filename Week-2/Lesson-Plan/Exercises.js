/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings
 * @returns {array} Array containing the listing objects
 */
function generateListings(numberOfListings) {
  const listings = [];

  const listingType = ["House", "Apartment", "Shed", "Dorm", "Farm"];
  const listingFacilities = ["Parking", "Elevator", "Altan", "Have", "Husdyr"];

  for (let i = 0; i < numberOfListings; i++) {
    const listing = {};
    const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
    const numberOfFacilities = randomIntFromInterval(
      1,
      listingFacilities.length - 1
    );
    const facilities = [];
    for (let i = 0; i < numberOfFacilities; i++) {
      const randomIndexFacilities = randomIntFromInterval(
        0,
        listingFacilities.length - 1
      );
      const randomFacility = listingFacilities[randomIndexFacilities];

      if (!facilities.includes(randomFacility)) {
        facilities.push(randomFacility);
      }
    }

    listing.type = listingType[randomTypeIndex];
    listing.facilities = facilities;
    listing.price = randomIntFromInterval(1, 10000);
    listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
    listing.size = randomIntFromInterval(12, 1000);
    listing.img = `https://loremflickr.com/200/200/${listing.type}`;

    listings.push(listing);
  }

  return listings;
}

const listings = generateListings(37);

// listings.forEach((listing) => {
//   console.log(listing.size);
// });

const listingPrices = listings.map((listing) => listing.price);

const cheapListings = listings
  .filter((listing) => {
    if (listing.price < 5000) {
      return listing;
    }
  })
  .map((x) => x.type);

const expensiveListings = listings
  .filter((listing) => {
    if (listing.price > 5000) {
      return listings;
    }
  })
  .map((x) => x.price);

const parkingListings = listings
  .filter((listing) => {
    if (listing.facilities.indexOf("Parking") > -1) {
      return listing;
    }
  })
  .map((x) => x.facilities);

//   console.log(listingPrices);
//   console.log(cheapListings);
//   console.log(expensiveListings);
//   console.log(parkingListings);

const filter = {
  type: "farm",
};
const filter2 = {
  type: "farm",
  minPrize: 1500000,
};
function filterListings(listings, filter) {
  const filters = Object.keys(filter);
  const acceptedFilters = ["type", "facilities", "price", "hasGarden", "size"];

  //   const valid = acceptedFilters.filter((filter) => {
  //     if (filters.indexOf(filter) === -1) {
  //     }
  //   });

  const filteredListings = listings.filter((x) => {
    return;
  });

  return filteredListings.length;
}

console.log(filterListings(listings, filter));
// console.log(filterListings(listings, filter2));
