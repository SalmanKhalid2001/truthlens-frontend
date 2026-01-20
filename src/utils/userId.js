export function getUserId() {
  let id = localStorage.getItem("truthlens_user_id");

  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("truthlens_user_id", id);
  }

  return id;
}
