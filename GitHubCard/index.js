/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
let cardsContainer = document.querySelector(".cards");

axios.get("https://api.github.com/users/CyrusTheCurator").then(myData => {
  cardsContainer.appendChild(cardComponent(myData));
});

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
const followersArray = [];

followersArray.push("tetondan");
followersArray.push("dustinmyers");
followersArray.push("justsml");
followersArray.push("luishrd");
followersArray.push("bigknell");

axios.get("https://api.github.com/users/tetondan").then(returnedData => {
  followersArray.push(returnedData);
});

axios.get("https://api.github.com/users/dustinmyers").then(returnedData => {
  followersArray.push(returnedData);
});

axios.get("https://api.github.com/users/justsml").then(returnedData => {
  followersArray.push(returnedData);
});

axios.get("https://api.github.com/users/luishrd").then(returnedData => {
  followersArray.push(returnedData);
});

followersArray.forEach(item => {
  axios.get(`https://api.github.com/users/${item}`).then(returnedData => {
    cardsContainer.appendChild(cardComponent(returnedData));
  });
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
let cardComponent = dataObject => {
  let card = document.createElement("div");
  let userImg = document.createElement("img");
  let cardInfo = document.createElement("div");
  let name = document.createElement("h3");
  let userName = document.createElement("p");
  let location = document.createElement("p");
  let profile = document.createElement("p");
  let profileAnchorLink = document.createElement("a");
  let followers = document.createElement("p");
  let following = document.createElement("p");
  let bio = document.createElement("p");

  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  userName.classList.add("username");

  card.appendChild(userImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  profile.appendChild(profileAnchorLink);

  //userImg.src = dataObject.data.avatar_url;
  name.textContent = dataObject.data.name;
  userName.textContent = dataObject.data.login;
  location.textContent = dataObject.data.location;
  profileAnchorLink.textContent = "Profile Page";
  profileAnchorLink.href = dataObject.data.html_url;
  followers.textContent = `Followers: ${dataObject.data.followers}`;
  following.textContent = `Following: ${dataObject.data.following}`;
  bio.textContent = `Bio: ${dataObject.data.bio}`;

  return card;
};

let testObject = { name: "bill", doesHeDance: "no" };

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
