require 'redcarpet'
require 'redcarpet/render_strip'

module Jekyll
  require 'json'

  class JSONGenerator < Generator
    safe true
    priority :high

    def generate(site)
      # Iterate over all posts
      @items = []

      parse_collection("guides", site.posts)
      parse_collection("actions", site.collections["actions"])
      parse_collection("filters", site.collections["filters"])

      page = JSONPage.new(site, __dir__, "", "search.json")
      page.content = @items.to_json

      site.pages << page
    end

    def parse_collection(type, collection)
      collection.docs.each do |doc|
        content = Redcarpet::Markdown.new(Redcarpet::Render::StripDown).render(doc.content)

        # Remove code snippets
        content = content.gsub(/{% highlight .* %}[\s\S]*?{% endhighlight %}/, '')

        @items << {
          type: type,
          title: doc.data["title"],
          content: content,
          url: doc.url
        }
      end
    end
  end

  class JSONPage < Page
    def read_yaml(*)
      @data ||= {}
    end
  end
end