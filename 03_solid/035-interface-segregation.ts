interface Printer {
  print(doc: Document): void;
}

interface Scanner {
  scan(doc: Document): void;
}

interface Fax {
  fax(doc: Document): void;
}

class MultiFunctionPrinter implements Printer, Scanner, Fax {
  print(doc: Document): void {
    console.log("Print:", doc.title);
  }

  scan(doc: Document): void {
    console.log("Scan:", doc.title);
  }

  fax(doc: Document): void {
    console.log("Fax:", doc.title);
  }
}

class SimplePrinter implements Printer {
  print(doc: Document): void {
    console.log("Print:", doc.title);
  }
}

class FaxMachine implements Fax {
  fax(doc: Document): void {
    console.log("Sending fax", doc);
  }
}

interface Post {
  title: string;
  content: string;
}

interface Comment {
  title: string;
  content: string;
}

interface PostCreator {
  createPost(post: Post): void;
}

interface CommentCreator {
  createComment(comment: Comment): void;
}

interface PostSharer {
  sharePost(post: Post): void;
}

class Admin implements PostCreator, CommentCreator, PostSharer {
  createPost(post: Post): void {
    console.log("Created post", post.title);
  }

  createComment(comment: Comment): void {
    console.log("Created comment", comment.title);
  }

  sharePost(post: Post): void {
    console.log("Shared post", post.title);
  }
}

class Regular implements CommentCreator, PostSharer {
  createComment(comment: Comment): void {
    console.log("Created comment", comment.title);
  }

  sharePost(post: Post): void {
    console.log("Shared post", post.title);
  }
}
