document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const artworkId = this.getAttribute('data-id');
        window.location.href = `details.html?id=${artworkId}`;
    });
});


 const artworks = [
    {
    id: 1,
    title: "Sunset Dreams",
    image: "./images/art1.jpg",
    description: "A vibrant depiction of a serene sunset over the ocean.",
    price: "$150.00"
    },
    {
    id: 2,
    title: "Mountain Serenity",
    image: "./images/art2.webp",
    description: "A breathtaking view of snow-capped mountains under a clear sky.",
    price: "$200.00"
    },
    {
    id: 3,
    title: "Ocean Breeze",
    image: "./images/art3.jpg",
    description: "Capturing the power and beauty of ocean waves crashing on the shore.",
    price: "$175.00"
    },
    {
    id: 4,
    title: "City Lights",
    image: "./images/art4.jpeg",
    description: "A mesmerizing view of a bustling city at night, illuminated by lights.",
    price: "$250.00"
    },
    {
    id: 5,
    title: "Solden Hour",
    image: "./images/art5.jpeg",
    description: "The magical glow of the golden hour in a peaceful countryside.",
    price: "$300.00"
    },
    {
    id: 6,
    title: "Autumn Bliss",
    image: "./images/art6.jpg",
    description: "A colorful autumn forest with leaves falling gently to the ground.",
    price: "$220.00"
    },
    {
    id: 7,
    title: "Portrait of a Woman",
    image: "./images/art7.jpg",
    description: "A stunning portrait capturing the elegance and grace of a woman.",
    price: "$180.00"
    },
    {
    id: 8,
    title: "Abstract Art",
    image: "./images/art8.jpg",
    description: "A vibrant and thought-provoking abstract painting.",
    price: "$190.00"
    },
    {
    id: 9,
    title: "Wildlife Majesty",
    image: "./images/art9.jpg",
    description: "A powerful depiction of a lion in its natural habitat.",
    price: "$280.00"
    },
    {
    id: 10,
    title: "Floral Garden",
    image: "./images/art10.jpg",
    description: "A colorful and vibrant garden full of blooming flowers.",
    price: "$160.00"
    },

    ];
    

    const urlParams = new URLSearchParams(window.location.search);
    const artworkId = parseInt(urlParams.get('id'));
    

    const artwork = artworks.find(art => art.id === artworkId);
    

    if (artwork) {
    document.getElementById('art-title').textContent = artwork.title;
    document.getElementById('art-image').src = artwork.image;
    document.getElementById('art-description').textContent = artwork.description;
    document.getElementById('art-price').textContent = artwork.price;
    } else {
    document.getElementById('art-title').textContent = "Artwork not found!";
    }


 