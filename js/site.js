$(document).ready(function() {
  var template = Handlebars.compile($('#github_item_template').html());
  $.getJSON('http://localhost:7272/github_items.json').done(function(response) {
    var html = '';
    $.each(response, function(i, item) {
      html += template(item);
    });
    $('#feed').html(html);
  });
});
