// write your code here
document.addEventListener("DOMContentLoaded", () => {
    // Variables
    const ramenMenu = document.getElementById('ramen-menu');
    const ramenDetail = document.getElementById('ramen-detail');
    const detailImage = document.getElementsByClassName('detail-image')[0];
    const name = document.getElementsByClassName('name')[0];
    const restaurant = document.getElementsByClassName('restaurant')[0];
    const rating = document.getElementById('rating-display');
    const comment = document.getElementById('comment-display');

    const form = document.getElementById('new-ramen');

    fetch('http://localhost:3000/ramens')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.forEach((ramen) => {
            let img = document.createElement('img');
            img.src = ramen.image;
            img.addEventListener(
                'click', 
                () => {
                    console.log(detailImage)
                    // ramenDetail.innerHTML = ""
                    detailImage.src = ramen.image;
                    // ramenDetail.appendChild(img);
                    name.textContent = ramen.name;
                    restaurant.textContent = ramen.restaurant;
                    rating.textContent = ramen.rating;
                    comment.textContent = ramen.comment;
                }
            )
            ramenMenu.appendChild(img)
        })
    })

    form.addEventListener('submit', (e) => {
            // Prevent default form submit event behaviour
            e.preventDefault()

            let newName = document.getElementById('new-name').value;
            let newRestaurant = document.getElementById('new-restaurant').value;
            let newImage = document.getElementById('new-image').value;
            let newRating = document.getElementById('new-rating').value;
            let newComment = document.getElementById('new-comment').value;

            console.log(newName);
            console.log(newRestaurant);
            console.log(newImage);
            console.log(newRating);
            console.log(newComment);

            let img2 = document.createElement('img');
            img2.src = newImage;
            img2.addEventListener(
                'click', 
                () => {
                    console.log(detailImage)
                    // ramenDetail.innerHTML = ""
                    detailImage.src = newImage;
                    // ramenDetail.appendChild(img);
                    name.textContent = newName;
                    restaurant.textContent = newRestaurant;
                    rating.textContent = newRating;
                    comment.textContent = newComment;
                }
            )
            ramenMenu.appendChild(img2)


            form.reset()
        }
    )
})