export const simpleUrl = (url) => {
  let simpleUrl = url.replace("https://", "").replace("http://", "").replace("www.", "")
  simpleUrl = simpleUrl.replace(/\/$/, "")
  return simpleUrl.length > 30 ? simpleUrl.slice(0, 30) + "..." : simpleUrl
}
