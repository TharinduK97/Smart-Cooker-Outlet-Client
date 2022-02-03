import axios from "axios";

export const getProducts = () => {
    return axios.get('https://61fa979892093f0017ad9922.mockapi.io/product')
};

export const getSingleProduct= (id:string) => {
    
     return axios({
     method: 'get',
     url: `https://61fa979892093f0017ad9922.mockapi.io/product/${id}`,
     headers: {
         'Content-Type': 'application/json'
     },
 });
}

export const addNewProduct = (data: object) => {

   return axios({
        method: 'post',
        url: 'https://61fa979892093f0017ad9922.mockapi.io/product',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    });
        
}

const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
          });
      }
    );
  };