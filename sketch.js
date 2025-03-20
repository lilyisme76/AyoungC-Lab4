let video;
let audio;
let img;

function setup() {
  createCanvas(600, 600);
  
  // video 요소를 setup 내부에서 생성
  video = createCapture(VIDEO);
  video.size(500, 500);
  video.hide(); // DOM에 기본 생성된 video 요소를 숨기고, 캔버스에 그리기 위함
  
  
  // 이미지 요소 생성
  img = createImg('https://media.nga.gov/iiif/873cdb22-532a-43da-8bc7-9fbaf6ec640e/full/!384,384/0/default.jpg', 'Love as Folly');
  img.style('position', 'absolute');
  img.style('left', '50%');
  img.style('transform', 'translateX(-50%)');
  img.style('top', '70px');  
};