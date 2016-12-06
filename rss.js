$.get('http://www.fs.fed.us/pnw/RSS/news.xml', function (ShowXML) {
  $(ShowXML).find("item").each(function ()){
    var theElement = $(this);
    console.log("title : " + theElement.find("title").text());
    console.log("author     : " + theElement.find("author").text());
       console.log("description: " + theElement.find("description").text());
  }
}
