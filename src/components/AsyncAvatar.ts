let Avatar = Promise.resolve(null)
if (typeof window !== "undefined") {
  Avatar = import("./Avatar.svelte")
}
export default Avatar
