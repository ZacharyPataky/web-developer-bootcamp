const password = prompt("Enter a password: ");

// Password must be 6+ characters
if (password.length >= 6)
{
    // Password cannot include a space
    if (password.indexOf(' ') === -1) { console.log("Valid Password!"); }
    else { console.log("Oops, the password cannot contain a space."); }
}
else { console.log("The password is too short.  It must be 6+ characters."); }

// // Password cannot include a space
// if (password.indexOf(' ') === -1) { console.log("Yay, no space!"); }
// else { console.log("Oops, the password cannot contain a space."); }