<template>
  <div class="container mx-auto mt-5 sm:mt-10 sm:mt-20 mb-16">
    <!-- Project header -->
    <ProjectHeader :singleProjectHeader="singleProjectHeader" />

    <!-- Project gallery -->
    <!-- <ProjectGallery :projectImages="projectImages" /> -->
    <Swiper />
    <!-- Project information -->
    <ProjectInfo :projectInfo="projectInfo" :categoryInfo="categoryInfo" />
  </div>
</template>
<script>
import feather from "feather-icons";
import ProjectHeader from "../components/projects/ProjectHeader.vue";
// import ProjectGallery from "../components/projects/ProjectGallery.vue";
import Swiper from "../components/projects/swiper.vue";
import ProjectInfo from "../components/projects/ProjectInfo.vue";

export default {
  name: "Projects",
  components: {
    ProjectHeader,
    Swiper,
    // ProjectGallery,
    ProjectInfo,
  },
  data: () => {
    return {
      singleProjectHeader: {
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
      projectInfo: {
        clientHeading: "About Company",
        companyInfos: [
          {
            id: 1,
            title: "Name",
            details: "Company Ltd",
          },
          {
            id: 2,
            title: "Services",
            details: "Real Estate",
          },
          {
            id: 3,
            title: "Website",
            details: "https://company.com",
          },
          {
            id: 4,
            title: "Phone",
            details: "555 8888 888",
          },
        ],
        objectivesHeading: "Categories",
        objectivesDetails:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
        projectDetailsHeading: "About Us",
        projectDetails: [
          {
            id: 1,
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
          },
          {
            id: 2,
            details:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
          },
        ],
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
      relatedProject: {
        relatedProjectsHeading: "Related Companies",
        relatedProjects: [
          {
            id: 1,
            title: "Mobile UI",
            img: require("@/assets/img/mobile-project-1.jpg"),
          },
          {
            id: 2,
            title: "Web Application",
            img: require("@/assets/img/web-project-1.jpg"),
          },
          {
            id: 3,
            title: "UI Design",
            img: require("@/assets/img/ui-project-2.jpg"),
          },
          {
            id: 4,
            title: "Kabul Mobile App UI",
            img: require("@/assets/img/mobile-project-2.jpg"),
          },
        ],
      },
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>

<style scoped></style>
