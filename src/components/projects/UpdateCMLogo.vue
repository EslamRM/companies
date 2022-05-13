<template>
  <div>
    <div class="uploadWrap">
      <div>
        <div class="img-container" v-if="isCropped">
          <div class="img-holder">
            <div v-if="isCropped">
              <Cropper :src="img" @change="change"></Cropper>
              <div class="save-image flex justify-between">
                <button
                  class="text-sm sm:text-base text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
                  @click="saveImage()"
                >
                  Save
                </button>
                <button
                  class="text-sm sm:text-base text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
                  @click="CancelCrop"
                >
                  Cancel
                </button>
              </div>
            </div>

            <div v-if="before_crop" class="mb-3">
              <div class="img-selected-wrapper">
                <div
                  class="selected-images"
                  v-for="(img, index) in InitialArray"
                  :key="index"
                >
                  <img :src="img" />

                  <span
                    class="material-icons removeIco"
                    @click="delete_image(index)"
                    >X</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="uploader-box">
          <div @click="chooseFile" v-if="ShowChooseFile">
            <div role="button" class="upload">
              <input
                type="file"
                ref="file"
                style="display: none"
                v-on:change="chooseImage($event)"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Cropper, CircleStencil } from "vue-advanced-cropper";
import instance from "../../store/axiosConfig.js";
import "vue-advanced-cropper/dist/style.css";
export default {
  data() {
    return {
      before_crop: true,
      isCropped: false,
      ShowChooseFile: true,
      IsDisabledUpload: false,
      files: [],
      InitialArray: [],
      RealArray: [],
      temp: "",
      cmlogo: null,
      updatedLogo: null,
      mapMarkers: {},
    };
  },
  props: {
    member_id: String,
  },
  components: {
    Cropper,
  },
  methods: {
    getimglogo() {
      this.$emit("cmlogo", this.updatedLogo);
    },
    chooseFile() {
      this.$refs.file.click();
    },
    CancelCrop() {
      this.before_crop = true;
      this.isCropped = false;
      this.ShowChooseFile = true;
    },
    saveImage() {
      this.update_cm_logo(this.$route.query.id, this.member_id);
      this.before_crop = true;
      this.isCropped = false;
      this.ShowChooseFile = true;
    },
    update_cm_logo(council_id, member_id) {
      let formData = new FormData();
      formData.append("file", this.cmlogo);
      instance
        .post(
          "/council/change_member_image/" + council_id + "/" + member_id,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          this.updatedLogo = res.data.profile_image;
          this.getimglogo();
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    change({ canvas }) {
      canvas.toBlob((blob) => {
        this.blobUrl = URL.createObjectURL(blob);
        this.cmlogo = new File(
          [blob],
          "image",
          {
            lastModified: new Date().getTime(),
            type: blob.type,
          },
          "image/jpeg",
          0.3
        );
      });
    },
    chooseImage($event) {
      const file = $event.target.files[0];
      this.logo = file;
      this.img = URL.createObjectURL(file);

      var reader = new FileReader();
      var self = this;
      //Read the contents of Image File.
      reader.readAsDataURL($event.target.files[0]);

      reader.onload = function (e) {
        console.log(self.isCropped);
        //Initiate the JavaScript Image object.
        var image = new Image();

        //Set the Base64 string return from FileReader as source.
        image.src = e.target.result;

        //Validate the File Height and Width.
        image.onload = function () {
          var height = this.height;
          var width = this.width;
          if (height < 210 || width < 210) {
            alert(
              "Please choose file which has minimum height of 210 and width of 210"
            );
            return false;
          }

          self.ShowChooseFile = false;
          self.isCropped = true;

          return true;
        };
      };
    },
    delete_image(index) {
      this.InitialArray.splice(index, 1);
      this.RealArray.splice(index, 1);
      console.log(this.InitialArray);
      console.log(this.RealArray);
    },
  },
};
</script>
<style>
.cropper {
  height: 600px;
  width: 600px;
  background: #ddd;
}
.add-meadia-bx {
  border: 1.4px dotted #d2d2d2;
  padding: 11px;
  margin: 0;
}
.save-image {
  padding: 10px 0px;
}
.save-image button {
  height: 33px;
  min-width: 71px;
}
.img-selected-wrapper {
  display: flex;
  justify-content: center;
}
.selected-images {
  max-width: 105px;
  min-height: 105px;
  position: relative;
  width: 100%;
  height: 100%;
  margin-right: 7.5px;
}
.selected-images img {
  border-radius: 6px;
  bottom: 0px;
  height: 100%;
  left: 0px;
  opacity: 1;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 100%;
}
.selected-images {
  transition: all 0.2s;
}
.selected-images:after {
  content: "";
  height: 100%;
  position: absolute;
  transition: all 0.2s;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0);
}
.selected-images:hover::after {
  background-color: rgba(255, 255, 255, 0.5);
}
.removeIco {
  position: absolute;
  padding: 1px;
  top: 50%;
  left: 50%;
  margin-top: -12px;
  margin-left: -12px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  opacity: 0;
  font-weight: bolder;
  font-size: 16px;
  color: #000;
  cursor: pointer;
}
.selected-images:hover .removeIco {
  opacity: 1;
}
.uploader-box {
  display: flex;
  justify-content: center;
}
.choose-file-btn {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 39px;
  padding: 0;
  padding-left: 9px;
  padding-right: 5px;
}
.choose-file-btn i {
  font-size: 20px;
  margin-left: 2px;
}
.upload {
  width: 30px;
  height: 30px;
  background: #eee;
  color: #00f;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 6px;
  top: 110px;
}
.img-container {
  background: #0000004f;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}
.img-holder {
  max-width: 600px;
  max-height: 600px;
  background: #fff;
  padding: 10px;
  border-radius: 10px;
}
</style>
