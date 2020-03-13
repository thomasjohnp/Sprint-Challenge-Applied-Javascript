// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response.data.articles);

    const cardTopic = Object.entries(response.data.articles);

    cardTopic.forEach(thing => {
      thing[1].forEach(info => {
        const thisCard = Card(info);
        cardEntry.append(thisCard);
      });
    });
  })

  .catch(error => {
    console.log(error);
  });

function Card(args) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgContainer = document.createElement("div");
  const imgSrc = document.createElement("img");
  const byAuthor = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  authorDiv.classList.add("author");
  imgContainer.classList.add("img-container");

  headline.textContent = args.headline;
  imgSrc.src = args.authorPhoto;
  byAuthor.textContent = `By ${args.authorName}`;

  card.append(headline);
  card.append(authorDiv);
  authorDiv.append(imgContainer);
  imgContainer.appendChild(imgSrc);
  authorDiv.append(byAuthor);
  return card;
}

const cardEntry = document.querySelector(".cards-container");
