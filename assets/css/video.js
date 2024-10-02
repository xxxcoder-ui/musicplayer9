#video-gallery {
  width: 100%;
}

.videoGallery .rsTmb {
  padding: 20px;
}
.videoGallery .rsThumbs .rsThumb {
  width: 220px;
  height: 80px;
  border-bottom: 1px solid #2E2E2E;
}
.videoGallery .rsThumbs {
  width: 220px;
  padding: 0;
}
.videoGallery .rsThumb:hover {
  background: #000;
}
.videoGallery .rsThumb.rsNavSelected {
  background-color: #02874A;
  border-bottom:-color #02874A;
}

.sampleBlock {
  left: 3%; 
  top: 1%; 
  width: 100%;
  max-width: 400px;
}


@media screen and (min-width: 0px) and (max-width: 500px) {
  .videoGallery .rsTmb {
    padding: 6px 8px;
  }
  .videoGallery .rsTmb h5 {
    font-size: 12px;
    line-height: 17px;
  }
  .videoGallery .rsThumbs.rsThumbsVer {
    width: 100px;
    padding: 0;
  }
  .videoGallery .rsThumbs .rsThumb {
    width: 100px;
    height: 47px;
  }
  .videoGallery .rsTmb span {
    display: none;
  }
  .videoGallery .rsOverflow,
  .royalSlider.videoGallery {
    height: 300px !important;
  }
  .sampleBlock {
    font-size: 14px;
  }
}
