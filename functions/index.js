export default {
  async fetch(request) {
    const url = new URL(request.url)

    if (url.pathname === "/api") {
      return new Response("Hello from API", {
        headers: { "content-type": "text/plain" }
      })
    }

    // Serve o HTML normalmente
    return fetch(request)
  }
}
