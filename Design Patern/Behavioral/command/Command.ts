namespace Command {
  interface BlogPost {
    execute(params: any): any;
  }

  class BlogUtility {
    static tittleToSlug() {}
    static dateToHumanize() {}
    static getMostViewedPosts() {}
    static getFeaturedPosts() {}
    static getMonetizedPost() {}
  }

  class SaveBlogPost implements BlogPost {
    execute() {
      BlogUtility.tittleToSlug();
      this.save();
    }

    protected save() {
      //   menyimpan ke db
    }
  }

  class UpdateBlogPost implements BlogPost {
    execute() {
      BlogUtility.tittleToSlug();
      this.update();
    }

    protected update() {
      //   update ke db
    }
  }

  class GetBlogPost implements BlogPost {
    execute(singlePost: boolean) {
      BlogUtility.dateToHumanize();

      if (singlePost) {
        this.getPost();
      } else {
        this.getPosts();
      }
    }

    getPost() {}
    getPosts() {}
  }

  new SaveBlogPost().execute();
}
