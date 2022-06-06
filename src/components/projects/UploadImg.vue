<template>
  <div>
    <div class="uploadWrap">
      <div
        class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-sm sm:text-md"
      >
        <div>
          <div v-if="isCropped">
            <Cropper :src="img" @change="change"></Cropper>
            <div class="save-image flex justify-between">
              <button
                class="text-sm sm:text-base text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
                @click="saveImage"
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

          <div v-if="before_crop && !isCropped" class="mb-3">
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

        <div class="uploader-box">
          <div @click="chooseFile" v-if="ShowChooseFile">
            <div
              role="button"
              class="px-4 py-2.5 w-full text-sm sm:text-base text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
            >
              <input
                type="file"
                ref="file"
                style="display: none"
                v-on:change="chooseImage($event)"
              />
              Upload
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Cropper, CircleStencil } from "vue-advanced-cropper";
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
      mapMarkers: {},
      img_file: null,
    };
  },
  components: {
    Cropper,
  },
  methods: {
    getimgfile() {
      this.$emit("file", this.img_file);
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
      this.before_crop = true;
      this.isCropped = false;
      this.ShowChooseFile = true;
      this.getimgfile();
    },
    change({ canvas }) {
      canvas.toBlob((blob) => {
        this.blobUrl = URL.createObjectURL(blob);
        this.img_file = new File(
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
    pixelsRestriction({
      minWidth,
      minHeight,
      maxWidth,
      maxHeight,
      imageWidth,
      imageHeight,
    }) {
      return {
        minWidth: 220,
        minHeight: 220,
        maxWidth: 400,
        maxHeight: 400,
      };
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
</style>
