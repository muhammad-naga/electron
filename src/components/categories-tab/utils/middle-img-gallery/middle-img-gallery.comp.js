import React from 'react';

// Components
import ImageGallery from 'react-image-gallery';

// Assets
import TabThumbnail from '../../../../assets/images/homepage/tabs/thumbnail/tablet.png';

// Styles
import './middle-img-gallery.styles.scss';

const defaultImages = [
  {
    original:
      'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_3929c9a4-1a61-4e52-91fb-8a07d394b56f_1366x.jpg?v=1604559863',
    thumbnail: TabThumbnail,
  },
  {
    original:
      'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_3929c9a4-1a61-4e52-91fb-8a07d394b56f_1366x.jpg?v=1604559863',
    thumbnail: TabThumbnail,
  },
  {
    original:
      'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_3929c9a4-1a61-4e52-91fb-8a07d394b56f_1366x.jpg?v=1604559863',
    thumbnail: TabThumbnail,
  },
];

const MiddleImgGallery = ({ images }) => {
  return (
    <div className="middle-image-gallery-wrapper">
      <div className="category">Donna Karan</div>
      <div className="product-name">Faxtex Product Sample</div>
      <ImageGallery
        items={images ? images : defaultImages}
        showPlayButton={false}
      />
    </div>
  );
};

export default MiddleImgGallery;
