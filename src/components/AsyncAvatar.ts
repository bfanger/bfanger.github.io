let Avatar: Promise<any> = Promise.resolve(null)
if (typeof window !== "undefined") {
  Avatar = import("./Avatar.svelte")
}
export default Avatar
