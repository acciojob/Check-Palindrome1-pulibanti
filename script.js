// complete the given function

function palindrome(str){
	  // Remove non-alphanumeric characters and convert to lowercase
  const cleanString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Check if the clean string is equal to its reversed version
  return cleanString === cleanString.split('').reverse().join('');
}
module.exports = palindrome
