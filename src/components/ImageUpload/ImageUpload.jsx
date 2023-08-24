import { useState } from "react";
import api from "../../api";

function ImageUpload() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    // Other text inputs
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    // console.log(formData);
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
    console.log(selectedImage)

  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const imageFormData = new FormData();
    imageFormData.append("image", selectedImage);

    try {
      const response = await api.post("/upload-image", imageFormData, {
        headers: {
          "Content-Type": "multipart/form-data", 
      }});  
      // const imageUrl = response.data.imageUrl;
      // console.log(imageUrl);

      // const response = await api.get("/");
      console.log(response)
      

      // Combine the text input data and image URL
      // const completeFormData = { ...formData, imageUrl };

      // Send the complete form data to the backend
      // await api.post("/submit-form", completeFormData);

      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
      />
      {/* Other text inputs */}
      <input type="file" name="image" onChange={handleImageChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ImageUpload;
