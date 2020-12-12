import GhostContentAPI from "@tryghost/content-api"

// Create API instance with site credentials
const api = new GhostContentAPI({
    url: 'http://localhost:2368',
    key: '119adafdb5de7d4955cd6564e7',
    version: "v3"
  });

  export async function getPosts() {
    return await api.posts
      .browse({
        fields:'id,title,slug,featured_image, featured',
        include: 'tags'
      })
      .catch(err => {
        console.error(err);
      });
  }