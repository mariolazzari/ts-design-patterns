class User {
  constructor(name: string, email: string) {}
}

// user auth needs to be in a dedicated class, not in User one.
class UserAuth {
  constructor(user: User) {}

  authenticate(password: string) {}
}

class BlogPost {
  title: string;
  text: string;

  constructor(title: string, text: string) {
    this.title = title;
    this.text = text;
  }

  createPost() {}

  updatePost() {}

  deletePost() {}

  //   displayPost() {
  //     return `<h1>${this.title}</h1><p>${this.text}</p>`;
  //   }
}

class BlogPostDisplay {
  constructor(public post: BlogPost) {}

  displayHTML() {
    return `<h1>${this.post.title}</h1><p>${this.post.text}</p>`;
  }

  displayJSON() {
    return JSON.stringify(this.post);
  }
}
