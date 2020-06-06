// Add your code here
function submitData (userName, userEmail)
{
  let configObj = {
    method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name: userName,
    emai:userEmail
  })
};
  return (fetch('http://localhost:3000/users'),configObj)
}