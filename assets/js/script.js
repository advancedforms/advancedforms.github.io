function buildIndex(posts) {
  var index = elasticlunr(function() {
    this.setRef("url");
    this.addField("title");
    this.addField("content");
  });

  posts.forEach(post => {
    index.addDoc(post);
  });

  return index;
}

function getSearchIndex() {
  if (this.index) return this.index;

  this.index = fetch("/search.json")
    .then(res => res.json())
    .then(buildIndex);

  return this.index;
}

var search = function(query, cb) {
  getSearchIndex().then(index => {
    var results = index
      .search(query)
      .map(result => result.doc)
      .slice(0, 5);

    cb(results);
  });
};

autocomplete("#search", { hint: false }, [
  {
    source: search,
    displayKey: "title"
  }
]).on("autocomplete:selected", function(event, suggestion, dataset, context) {
  window.location.href = suggestion.url;
});
