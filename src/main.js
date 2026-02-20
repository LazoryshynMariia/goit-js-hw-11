import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form"); 
const input = document.querySelector(".form-input");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const query = input.value.trim();
    if (query === "") {
        iziToast.error({
            message: "Please enter a search term",
            backgroundColor: '#ef4040',
            position: 'topRight'
        })
        return;
    }
    clearGallery();
    showLoader();

    getImagesByQuery(query)
        .then((res) => {
            if (res.hits.length === 0) {
                iziToast.error({
                    message: `❌ Sorry, there are no images matching your search query. Please try again!`,
                    backgroundColor: '#ef4040',
                    position: 'topRight'
                })
            }
            
            createGallery(res.hits);
            
        })
        .catch((error) => {
            iziToast.error({
                message: "Something went wrong. Please try again!",
                backgroundColor: '#ef4040',
                position: 'topRight',
                icon: null
            })
        })
        .finally(() => {
            hideLoader();
            input.value = "";
        })
}