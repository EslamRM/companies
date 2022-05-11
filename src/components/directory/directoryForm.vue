<template>
  <div>
    <div class="my-10 sm:mt-20 mb-16 container">
      <div>
        <div class="flex justify-center gap-3 flex-col sm:flex-row">
          <div class="relative mb-2 sm:mb-0 w-full">
            <select
              v-model="emirates"
              class="font-general-medium w-full pl-3 pr-1 sm:pr-11 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg txt-mobile sm:text-xs md:text-sm lg:text-md xl:text-base bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
              id="Emirates"
              name="Emirates"
              required=""
            >
              <option value="Select Emirates">Select Emirates</option>
              <option value="Dubai">Dubai</option>
              <option value="Sharjah">Sharjah</option>
              <option value="Abu Dhab">Abu Dhabi</option>
              <option value="Ajman">Ajman</option>
              <option value="Umm Al Quwain">Umm Al Quwain</option>
              <option value="Ras Al Khaimah">Ras Al Khaimah</option>
              <option value="Fujairah">Fujairah</option>
            </select>
          </div>
          <div class="relative mb-2 sm:mb-0 w-full">
            <select
              v-model="activities"
              class="font-general-medium w-full pl-3 pr-1 sm:pr-11 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg txt-mobile sm:text-xs md:text-sm lg:text-md xl:text-base bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
              id="activities"
              name="activities"
              required=""
            >
              <option value="Select Activities">Select Activities</option>
              <option value="Advertising and Media Services">
                Advertising and Media Services
              </option>
              <option value="Advocate Offices">Advocate Offices</option>
              <option value="Agencies">Agencies</option>
              <option value="Agricultural">Agricultural</option>
              <option value="Agriculture, Livestock and Fisheries Activities">
                Agriculture, Livestock and Fisheries Activities
              </option>
              <option value="Animal Husbandry">Animal Husbandry</option>
              <option value="Animal Sheltering Services">
                Animal Sheltering Services
              </option>
              <option value="Art Gallery">Art Gallery</option>
              <option value="Auditing Offices">Auditing Offices</option>
              <option value="Bakeries and Sweets">Bakeries and Sweets</option>
              <option value="Banks and Financial Services">
                Banks and Financial Services
              </option>
              <option value="Beauty">Beauty</option>
              <option value="Brokerage Services">Brokerage Services</option>
              <option value="Building Cleaning and Other Cleaning Services">
                Building Cleaning and Other Cleaning Services
              </option>
              <option value="Cargo Services">Cargo Services</option>
              <option value="Cinemas and Theaters">Cinemas and Theaters</option>
              <option value="Contracting, Maintenance and Installation Works">
                Contracting, Maintenance and Installation Works
              </option>
              <option value="Craft Activities and Reform">
                Craft Activities and Reform
              </option>
              <option value="Customer Service Centers">
                Customer Service Centers
              </option>
              <option value="Education">Education</option>
              <option value="Educational trip organization services">
                Educational trip organization services
              </option>
              <option value="Extractive Activities (Research and Exploration)">
                Extractive Activities (Research and Exploration)
              </option>
              <option value="Flooring and Furniture Installation">
                Flooring and Furniture Installation
              </option>
              <option value="Forums and Businessmen  Councils">
                Forums and Businessmen Councils
              </option>
              <option
                value="Government Liaison Offices and International Organizations"
              >
                Government Liaison Offices and International Organizations
              </option>
              <option value="Hajj and Umrah Organization Services">
                Hajj and Umrah Organization Services
              </option>
              <option value="Handicrafts">Handicrafts</option>
              <option value="Industrial Activities">
                Industrial Activities
              </option>
              <option value="Industry">Industry</option>
              <option value="Infrastructure and Construction Activities">
                Infrastructure and Construction Activities
              </option>
              <option value="Insurance Services">Insurance Services</option>
              <option value="Investment and Trading Activities">
                Investment and Trading Activities
              </option>
              <option value="Labor Supply Agent">Labor Supply Agent</option>
              <option value="Laboratories">Laboratories</option>
              <option value="Landscaping Services">Landscaping Services</option>
              <option value="Management and Operation Offices">
                Management and Operation Offices
              </option>
              <option value="Marketing Services">Marketing Services</option>
              <option value="Medical and Veterinary Services">
                Medical and Veterinary Services
              </option>
              <option value="Mining and Mineral Processing">
                Mining and Mineral Processing
              </option>
              <option value="Natural Reserves">Natural Reserves</option>
              <option value="Oil and Gas Activities">
                Oil and Gas Activities
              </option>
              <option value="Oil and Gas Extraction and the Relevant Services">
                Oil and Gas Extraction and the Relevant Services
              </option>
              <option
                value="Organizing Services (Events - Conferences - Exhibitions)"
              >
                Organizing Services (Events - Conferences - Exhibitions)
              </option>
              <option value="Other Services">Other Services</option>
              <option value="Parks and Recreational Services">
                Parks and Recreational Services
              </option>
              <option value="Party and Ceremony Halls">
                Party and Ceremony Halls
              </option>
              <option value="Photography Services">Photography Services</option>
              <option value="Printing, Publishing and Related Services">
                Printing, Publishing and Related Services
              </option>
              <option value="Professional Activities">
                Professional Activities
              </option>
              <option value="Projects Investments">Projects Investments</option>
              <option value="Public Auction Halls">Public Auction Halls</option>
              <option value="Real Estate Services">Real Estate Services</option>
              <option value="Rent Services">Rent Services</option>
              <option value="Repairing and Maintenance">
                Repairing and Maintenance
              </option>
              <option value="Representative Offices">
                Representative Offices
              </option>
              <option
                value="Restaurants, Cafeterias, Catering and Meal Preparation Services"
              >
                Restaurants, Cafeterias, Catering and Meal Preparation Services
              </option>
              <option value="Retail Selling">Retail Selling</option>
              <option value="Security and Guarding Services">
                Security and Guarding Services
              </option>
              <option
                value="Services (Consulting - Design and Research Centers)"
              >
                Services (Consulting - Design and Research Centers)
              </option>
              <option value="Services Activities">Services Activities</option>
              <option value="Social and Cultural  Services">
                Social and Cultural Services
              </option>
              <option value="Sports Clubs and Related Services">
                Sports Clubs and Related Services
              </option>
              <option value="Storage">Storage</option>
              <option value="Supporting Activities">
                Supporting Activities
              </option>
              <option value="Tailoring">Tailoring</option>
              <option value="Taxation Services">Taxation Services</option>
              <option value="Technical and Occupational Inspection Services">
                Technical and Occupational Inspection Services
              </option>
              <option value="Technology">Technology</option>
              <option value="Technology Activities">
                Technology Activities
              </option>
              <option value="Telecommunications">Telecommunications</option>
              <option value="Textile and Carpet Cleaning Services">
                Textile and Carpet Cleaning Services
              </option>
              <option value="Tourism">Tourism</option>
              <option value="Tourism Activities">Tourism Activities</option>
              <option value="Trade Centers">Trade Centers</option>
              <option value="Training Centers and Institutions">
                Training Centers and Institutions
              </option>
              <option value="Transport Services">Transport Services</option>
              <option
                value="Vehicles and Bicycles Trade (Electric - Motorcycle - Water)"
              >
                Vehicles and Bicycles Trade (Electric - Motorcycle - Water)
              </option>
              <option value="Waste Collection Services">
                Waste Collection Services
              </option>
              <option value="Waste Treatment">Waste Treatment</option>
              <option value="Wholesale Trading">Wholesale Trading</option>
              <option value="Workshop and Painting Works">
                Workshop and Painting Works
              </option>
            </select>
          </div>
          <div class="relative flex mb-2 sm:mb-0 w-full flex-col sm:flex-row">
            <input
              v-model="companies"
              class="font-general-medium w-full pl-3 pr-1 sm:pr-11 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg txt-mobile sm:text-xs md:text-sm lg:text-md xl:text-base bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Companies"
              aria-label="Name"
            />
            <span
              class="ml-2 bg-primary-light dark:bg-ternary-dark shadow-none md:shadow-sm rounded-xl hidden sm:flex justify-center items-center w-7 sm:w-16 cursor-pointer"
            >
              <img
                src="../../assets/icons/search.svg"
                class="text-ternary-dark dark:text-ternary-light"
              />
            </span>
            <span
              class="font-general-medium pl-3 pr-1 border-1 hover:bg-grey-200 border-gray-200 dark:border-secondary-dark sm:pr-11 py-2 bg-primary-light dark:bg-ternary-dark shadow-none md:shadow-sm rounded-lg sm:hidden w-full flex justify-center items-center mt-2 cursor-pointer"
            >
              Search
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Companyform",
  data() {
    return {
      emirates: "Select Emirates",
      activities: "Select Activities",
      companies: "",
    };
  },
};
</script>
<style>
.search-icon {
  width: 43px;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-icon:hover {
  background: #fafafa;
}
</style>
