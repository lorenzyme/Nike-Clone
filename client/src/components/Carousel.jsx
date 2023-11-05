import { useState } from 'react';
import '../Styles.css';

const photos = [
    {
      id: 'p1',
      title: 'Photo One',
      url: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/81694d7b-7b00-4a41-9c09-81e8ce01075c/life-mens-chore-coat-r4k91t.png',
    },
    {
      id: 'p2',
      title: 'Photo Two',
      url: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/599f6303-6c54-4a69-b477-ee57d94a04bc/windrunner-primaloft-mens-storm-fit-hooded-puffer-jacket-bnWqB9.png',
    },
    {
      id: 'p3',
      title: 'Photo Three',
      url: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/90fd7624-39a2-466f-bf61-6751d7a4ff49/sportswear-womens-jacket-NMSXbn.png',
    },
    {
      id: 'p4',
      title: 'Photo Four',
      url: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/19555e0e-dd38-4f52-a751-ef0745bd68ed/sportswear-phoenix-cozy-boucl%C3%A9-womens-slim-cropped-knit-short-sleeve-top-TjQDhh.png',
    },
  ];
  
  function Carousel() {
    // show the photo with this index
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // move to the next photo
    const next = () => {
      setCurrentIndex((currentIndex + 1) % photos.length);
    };
  
    // move to the previous photo
    const prev = () => {
      setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
    };
  
    return (
      <>
        {/* Render the carousel */}
        <div className='carousel'>
          {photos.map((photo) => (
            <div
              key={photo.id}
  
              // if the photo is the current photo, show it
              className={
                photos[currentIndex].id === photo.id ? 'fade' : 'slide fade'
              }
            >
              <img id='photo' src={photo.url} alt={photo.title} />
            </div>
          ))}
  
     
          <button onClick={prev} className='prev'>
            &lt;
          </button>
  
    
          <button onClick={next} className='next'>
            &gt;
          </button>
        </div>
  
  
        <div className='dots'>
          {photos.map((photo) => (
            <span
              key={photo.id}
              // dot highlighter
              className={
                photos[currentIndex].id === photo.id ? 'dot active' : 'dot'
              }
              // when the user clicks on a dot, go to the corresponding photo
              onClick={() => setCurrentIndex(photos.indexOf(photo))}
            ></span>
          ))}
        </div>
      </>
    );
  }

  export default Carousel;