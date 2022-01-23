function brex() {
  let vend = document.getElementById("vend").value;
  let ad = document.getElementById("ad").value;
  let corp = document.getElementById("corp").value;
  let project = document.getElementById("project").value;

  if (vend === "" || ad == "" || corp == "" || project == "") {
    alert("Please fill all boxes");
  } else {
    vend = parseFloat(vend);
    ad = parseFloat(ad);
    corp = parseFloat(corp);
    project = parseFloat(project);
    let sum = vend + ad + corp + project;
    sum = sum * 0.3;
    let USD = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    document.getElementById("unlim-rewards").innerHTML = USD.format(sum * 1.1);
    document.getElementById("lifetime-rewards").innerHTML = USD.format(
      sum * 1.2
    );
  }
  var node = document.getElementsById("unlim-bar-progress");

  node.style.visibility = "visible";
}
function amex() {
  let vend = document.getElementById("vend").value;
  let ad = document.getElementById("ad").value;
  let corp = document.getElementById("corp").value;
  let project = document.getElementById("project").value;
  if (vend === "" || ad == "" || corp == "" || project == "") {
    alert("Please fill all boxes");
  } else {
    vend = parseFloat(vend);
    ad = parseFloat(ad);
    corp = parseFloat(corp);
    project = parseFloat(project);
    let sum = vend + ad + corp + project;
    sum = sum * 1.3;
    let USD = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    document.getElementById("unlim-rewards").innerHTML = USD.format(sum * 1.1);
    document.getElementById("lifetime-rewards").innerHTML = USD.format(
      sum * 1.2
    );
  }
  var node = document.getElementById("unlim-bar-progress");

  node.style.visibility = "visible";
}
function stripe() {
  let vend = document.getElementById("vend").value;
  let ad = document.getElementById("ad").value;
  let corp = document.getElementById("corp").value;
  let project = document.getElementById("project").value;
  if (vend === "" || ad == "" || corp == "" || project == "") {
    alert("Please fill all boxes");
  } else {
    vend = parseFloat(vend);
    ad = parseFloat(ad);
    corp = parseFloat(corp);
    project = parseFloat(project);
    let sum = vend + ad + corp + project;
    sum = sum * 2.9;
    let USD = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    document.getElementById("unlim-rewards").innerHTML = USD.format(sum * 1.1);
    document.getElementById("lifetime-rewards").innerHTML = USD.format(
      sum * 1.2
    );
  }
  let lifetime = document.getElementById("lifetime-bar-progress");
  let unlim = document.getElementById("unlim-bar-progress");
  lifetime.style.visibility = "visible";
  unlim.style.visibility = "visible";
}
