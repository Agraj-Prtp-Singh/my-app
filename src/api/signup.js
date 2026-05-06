import axios from "axios";

const SIGNUP_URL = "https://devplat.heraldcollege.edu.np/herald-auth/auth/signup";

export async function signupUser(payload) {
  const response = await axios.post(SIGNUP_URL, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
}
