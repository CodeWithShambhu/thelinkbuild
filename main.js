function open_all() {
    var x = document.getElementById("list_urls").value.split("\n");
    for (var i = 0; i < x.length; i++)
      if (x[i].indexOf(".") > 0)
        if (x[i].indexOf("://") < 0) window.open("http://" + x[i]);
        else window.open(x[i]);
  }