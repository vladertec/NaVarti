const Gallery = ({ galleryItems }) => {
  if (galleryItems.length === 0) {
    return null
  }

  return (
    <div className="gallery">
      {galleryItems.map((photo, index) => (
        <div key={index} className="gallery__photo-container">
          <img
            className="gallery__img"
            src={photo.photoUrl}
            alt={`Gallery item ${index + 1}`}
          />
        </div>
      ))}
    </div>
  )
}

export default Gallery
