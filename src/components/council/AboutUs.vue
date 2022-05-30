<template>
  <div class="mt-5 mb-5 card2">
    <div class="about-head row2">
      <div class="mx-auto mt-3">
        <div class="my-auto">
          <div class="h-full">
            <h6 class="mb-1 text-dark">Alec Thompson</h6>
            <p class="mb-0 text-sm font-weight-bold text-dark">
              CEO / Co-Founder
            </p>
          </div>
        </div>
      </div>
      <div class="container overview">
        <h6>Overview</h6>
        <p>
          The British Council builds connections, understanding and trust
          between people in the UK and other countries through arts and culture,
          education and the English language. We work in two ways – directly
          with individuals to transform their lives, and with governments and
          partners to make a bigger difference for the longer term, creating
          benefit for millions of people all over the world. We help young
          people to gain the skills, confidence and connections they are looking
          for to realise their potential and to participate in strong and
          inclusive communities. We support them to learn English, to get a
          high-quality education and to gain internationally recognised
          qualifications. Our work in arts and culture stimulates creative
          expression and exchange and nurtures creative enterprise. We connect
          the best of the UK with the world and the best of the world with the
          UK. These connections lead to an understanding of each other's
          strengths and of the challenges and values that we share. This builds
          trust between people in the UK and other nations which endures even
          when official relations may be strained. We work on the ground in more
          than 100 countries. In 2019-20 we connected with 80 million people
          directly and with 791 million overall, including online and through
          our broadcasts and publications.
        </p>
      </div>
    </div>
    <div class="sectionBox intro card2-body">
      <div class="introWrap">
        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#344767"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div data-v-5d7eaf7d="" class="right">
              <div class="introType">Country / Region:</div>
              <div class="introValue">United Arab Emirates</div>
            </div>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#344767"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div data-v-5d7eaf7d="" class="right">
              <div class="introType">Year Established:</div>
              <div class="introValue">N/A</div>
            </div>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#344767"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <div class="right">
              <div class="introType">Website:</div>
              <div class="introValue">N/A</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "council-about",
};
</script>
<style>
.sectionBox {
  background: #fff;
  margin: auto;
  max-width: 960px;
  width: 100%;
  padding: 20px 30px 30px;
}
.heroHea {
  font-size: 2.11rem;
  font-weight: 600;
  overflow-wrap: break-word;
  word-wrap: break-word;
  text-align: center;
  padding-bottom: 19px;
  border-bottom: 1px solid #dbe3ef;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.introWrap {
  width: 100%;
  margin-top: 1.9em;
}
.introWrap ul {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(227px, 1fr));
  grid-gap: 30px;
}
.introWrap li {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.introWrap li svg {
  width: 60px;
  height: 60px;
  padding: 10px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #dae2ed;
  border-radius: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.introWrap li .right {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-left: 12px;
}
.introType,
.introValue {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
}
.introValue {
  color: #888;
  font-weight: 500;
}
.overview {
  color: #405270;
  line-height: 2;
  margin-top: 10px;
}
</style>
