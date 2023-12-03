namespace Command2 {
   class BlogServices {
      save() {}
      update() {}
      delete() {}
      getPost() {}
      getPosts() {}
      titleToSlug() {}
      dateToHumanize() {}
      getMostViewedPost() {}
      getFeaturedPost() {}
      getMonetizedPost() {}
   }

   interface BlogPost {
      execute(params: any): any
   }

   class SaveBlogPost implements BlogPost {
      execute() {
         const blog = new BlogServices()
         blog.titleToSlug()
         blog.update()
      }
   }

   new SaveBlogPost().execute()
}
