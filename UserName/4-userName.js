function getUserName() {
  let emailValue = document.getElementById("email").value;
  let regularExp = new RegExp("^[A-Za-z]+");
  let emailname = emailValue.match(regularExp);
  let userName = emailname + Math.floor(Math.random() * 100);
  document.getElementById("userName").value = userName;

  //   To generate 3 more username with random characters appended
  //   i. The second suggestion should have 4 additional random characters appended
  //   ii. The third suggestion should have 5 additional random characters appended
  //   iii. And the 4th (and the last) suggestion should have 6 additional characters appended to
  //   the first username suggestion.
  let randomUserName = [];
  for (let i = 4; i < 7; i++) {
    randomUserName.push(
      emailname +
        Math.random()
          .toString(36)
          .substring(2, 2 + i)
    );
  }
  // List of all generated Usernames
  randomUserName.unshift(userName);
  console.log(randomUserName);
  alert(`Here's the suggetion for usernames: ${randomUserName.toString()}`);
}
