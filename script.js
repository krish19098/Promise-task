// script.js
document.addEventListener("DOMContentLoaded", function () {
    const fetchDataButton = document.getElementById("fetchData");
    const bookInfo = document.querySelector(".book-info");

    fetchDataButton.addEventListener("click", () => {
        fetchBookData()
            .then(displayBookInfo)
            .catch((error) => console.error(error));
    });

    function fetchBookData() {
        return fetch("https://wiki.anidb.net/HTTP_API_Definition")
            .then((response) => response.json());
    }

    function displayBookInfo(data) {
        if (data && data.length > 0) {
            const bookList = document.createElement("ul");
            data.forEach((book) => {
                const listItem = document.createElement("li");
                listItem.textContent = `Title: ${book.title}, Author: ${book.author}`;
                bookList.appendChild(listItem);
            });
            bookInfo.innerHTML = "";
            bookInfo.appendChild(bookList);
        } else {
            bookInfo.textContent = "No book information available.";
        }
    }
});
