const BASE_URL = "https://api.redclass.redberryinternship.ge";

export async function registerUser({
  username,
  email,
  password,
  password_confirmation,
  avatar,
}) {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("password_confirmation", password_confirmation);
  if (avatar) {
    formData.append("avatar", avatar);
  }

  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
}
