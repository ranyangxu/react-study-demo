import { useRef } from 'react'
import './uploadImage.css'
function UploadIamge() {
  const imageInput = useRef(null)

  const handleButtonClick = () => {
    imageInput.current.click()
  }

  const handleFileChange = e => {
    const file = e.target.files[0]
    console.log(file)
  }
  return (
    <div className='uploadIamgeContainer'>
      <div className='addBtn' onClick={handleButtonClick}>
        <input type='file' accept='image/*' className='hiddenImageInput' ref={imageInput} onChange={handleFileChange} />
        <span>+</span>
      </div>
    </div>
  )
}

export default UploadIamge
