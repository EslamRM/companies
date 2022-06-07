<template>
  <div class="mt-5 mb-5 pb-5 card2">
    <div class="about-head row2">
      <div class="mx-auto mt-3">
        <div class="my-auto">
          <div class="h-full">
            <h6 class="mb-1 text-dark">{{ $route.query.name }}</h6>
          </div>
        </div>
      </div>
      <div class="container overview">
        <h6>Overview</h6>
        <p>
          Dedicated to advancing commercial, trade, and business ties between
          the U.S. and the U.A.E. By leveraging its extensive networks in the
          U.S. and in the region, the U.S.-U.A.E. Business Council provides
          unparalleled access to senior decision makers in business and
          government with the aim of deepening bilateral trade and investment.
        </p>
      </div>
    </div>
    <div class="sectionBox intro card2-body">
      <div class="introWrap">
        <ul class="pb-5">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#344767"
              stroke-width="1"
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
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#344767"
              stroke-width="1"
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
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#344767"
              stroke-width="1"
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
