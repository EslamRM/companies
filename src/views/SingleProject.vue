<template>
  <div
    class="container profile px-3 md:px-0 xl:px-28 mx-auto mt-5 sm:mt-10 sm:mt-20 mb-16"
  >
    <CompanyHeader :singlecompanyHeader="singlecompanyHeader" />
    <Swiper />
    <CompanyInfo :CompanyInfo="CompanyInfo" :categoryInfo="categoryInfo" />
  </div>
</template>
<script>
import feather from "feather-icons";
// import ProjectGallery from "../components/projects/ProjectGallery.vue";
import Swiper from "../components/projects/swiper.vue";
import CompanyInfo from "../components/projects/CompanyInfo.vue";
import instance from "@/store/axiosConfig";
import CompanyHeader from "@/components/projects/CompanyHeader.vue";
export default {
  name: "Projects",
  components: {
    Swiper,
    // ProjectGallery,
    CompanyInfo,
    CompanyHeader,
  },
  data: () => {
    return {
      singlecompanyHeader: {
        singleProjectTitle: "Real Estate company",
        singleProjectDate: "Jul 26, 2021",
        singleProjectTag: "Real Estate",
      },
      projectImages: [
        {
          id: 1,
          title: "Real Estate",
          img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.hubspot.com%2Fsales%2Freal-estate-business&psig=AOvVaw2VvE66rwutLGEOWEuEDE26&ust=1654239321584000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKi-1--XjvgCFQAAAAAdAAAAABAO",
        },
        {
          id: 2,
          title: "Real Estate",
          img: "https://c3c5e8m9.stackpathcdn.com/sites/g/files/aatuss191/files/2018-10/Edelman_Website_Real_Estate_Image_0.jpg",
        },
        {
          id: 3,
          title: "Real Estate",
          img: "http://holrmagazine.com/wp-content/uploads/2022/05/folksgrowth.com-real-estate-business.jpg",
        },
      ],
      CompanyInfo: {
        clientHeading: "About Company",
        name: "",
        email: "",
        phone: "",
        website: "",
        services: "",
        objectivesHeading: "Categories",
        objectivesDetails:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
        projectDetailsHeading: "About Us",
        projectDetails: "",
        socialSharingsHeading: "Follow Us",
        socialSharings: [
          {
            id: 1,
            name: "Twitter",
            icon: "twitter",
            url: "",
          },
          {
            id: 2,
            name: "Instagram",
            icon: "instagram",
            url: "",
          },
          {
            id: 3,
            name: "Facebook",
            icon: "facebook",
            url: "",
          },
          {
            id: 4,
            name: "LinkedIn",
            icon: "linkedin",
            url: "",
          },
          {
            id: 5,
            name: "Youtube",
            icon: "youtube",
            url: "",
          },
        ],
      },
      categoryInfo: {
        categoryHeading: "Real Estate",
        categoryProducts: [
          {
            id: 1,
            title:
              "Modernly Designed Real Estate Surrounded by Nature in Alanya",
            desc: "Lorem ipsum dolor, sit amet consectetur",
            img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQGJuGT6cIvDI7VJAbuddMJkSijQq6vpLpm57dUeUKLMrq974BmN542rjCOSEJ_YYoP5ABVZjDdUOXtiPeJWQOWog8pLq6UG_ZEtfkK1abA&usqp=CAE",
          },
          {
            id: 2,
            title:
              "Real Estate in a Comprehensive Housing Project in North Cyprus",
            desc: "Lorem ipsum dolor, sit amet consectetur",
            img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQGBTelIkoJR23dDqbJcaKt9GT1-qxEorTQxGTtX4qxiN1TYVUdcEq4mJ7p9uZypW8CFO1CIaeEuCMiZzjdm5EKNoEsxW6UMgxZXC5cZ0E&usqp=CAE",
          },
          {
            id: 3,
            title: "Fully Furnished Real Estate in Belek Kadriya",
            desc: "Lorem ipsum dolor, sit amet consectetur",
            img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSfCjKYW3BVKXG20R9ep2mAFvvzTAphO-MYWvbQ7Q8JmMnHc9e4LAJZL_l25jMNU8w_mHf5GV6ji0Q3JuNdM-su-cqvtr8tSqJ8fik7qsGX&usqp=CAE",
          },
          {
            id: 4,
            title: "Antalya Luxury Real Estate with Rich Complex Features",
            desc: "Lorem ipsum dolor, sit amet consectetur",
            img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQu6xJpYOuq1tvwWi8k28T70UACOK-gyQHojmeIYgLaVMBVWdRrQqC-XsLup6qmYlOADlmmsUkqykLtvb7d-mEpHB65uLmYC0RJcEKqLTmv&usqp=CAE",
          },
        ],
      },
    };
  },
  mounted() {
    feather.replace();
    this.getProfile(223);
  },
  updated() {
    feather.replace();
  },
  methods: {
    getProfile(id) {
      instance
        .get("public/company_profile/" + id)
        .then((res) => {
          console.log(res.data);
          this.CompanyInfo.name = res.data.data.business_name;
          this.CompanyInfo.email = res.data.data.email;
          this.CompanyInfo.phone = res.data.data.phone_number;
          this.CompanyInfo.website = res.data.data.website;
          this.CompanyInfo.projectDetails = res.data.data.aboutus;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
@media screen and (max-width: 768px) {
  .profile {
    max-width: none;
  }
}
</style>
