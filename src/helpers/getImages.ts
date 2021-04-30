import axios from "axios";

export const getImages = (term: string, imageFunc: any, loadingFunc: any) => {
  axios
    .get(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
    .then((response) => {
      imageFunc(response.data.hits);
      loadingFunc(false);
    })
    .catch((error) => console.log(error));
};
