/** union narrowing */
(() => {
  function getResource(id: string | number) {
    id.toLocaleString();
    id.toFixed(2)
    id.replace("1", "2");
  }

  function getResourceNarrowed(id: string | number) {
    id.toLocaleString();
    if (typeof id === "string") {
      id.replace("1", "2");
    }

    if (typeof id === "number") {
      id.toFixed(2);
    }
  }
})();

/** typeof */

(() => {
  interface FetchOptions {
    url: string;
    method?: string;
    headers?: any;
  }

  function fetch(options: FetchOptions | string) {
    if (typeof options === "string") {
      options = { url: options };
    }
    console.log(options.method);
  }
})();

/** instanceof */

(() => {
  function stringifyParams(
    params: URLSearchParams | Record<string, string>
  ): string {
    if (params instanceof URLSearchParams) {
      return params.toString();
    }
    return Object.entries(params)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");
  }
})();

/** in operator */

(() => {
  interface Image {
    url: string;
    name: string;
    username: string;
  }

  interface Text {
    content: string;
    username: string;
  }

  type Post = Image | Text;

  function renderPost(post: Post): string {
    console.log(post.username);
    if ("url" in post) {
      return `${post.name} ${post.url}`;
    }
    return post.content;
  }

  function badRender() {
    // explicar ventajas de tener post: Post
    const post = {
      content: "example",
      username: "me",
      url: {
        path: "/image.png",
      },
    };
    renderPost(post);
  }
})();

/** Type predicates */

(() => {
  interface Image {
    url: string;
    name: string;
    username: string;
  }

  interface Text {
    content: string;
    username: string;
  }

  type Post = Image | Text;

  function isImage(post: Post): post is Image {
    return "url" in post;
  }

  function renderPost(post: Post): string {
    console.log(post.username);
    if (isImage(post)) {
      return `${post.name} ${post.url}`;
    }
    return post.content;
  }
})();
