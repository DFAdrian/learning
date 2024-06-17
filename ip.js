async function getIP() {
  try {
    const response = await fetch("https://ipinfo.io/json");
    const data = await response.json();
    const currentIP = data.ip;
    const storedIP = localStorage.getItem("lastSentIP");

    // Check if the current IP is the same as the stored IP
    if (currentIP !== storedIP) {
      console.log(`New IP: ${currentIP}`);

      // Set the IP address in the hidden input field
      document.getElementById("ip").value = currentIP;

      // Submit the form
      document.getElementById("ip-form").submit();

      // Store the current IP in localStorage
      localStorage.setItem("lastSentIP", currentIP);
    } else {
      console.log("IP address has already been sent.");
    }
  } catch (error) {
    console.error("Error fetching IP address:", error);
  }
}

getIP();

const ip = "184.88.123.38"; // Example IP address
const url = `http://ipwhois.app/json/${ip}`;

async function getInfo() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There was an error!", error);
  }
}

getInfo().then((res) => console.log(res));
