gettingvalue();
let storeEdit = null;
function clickinput() {
  let todosEle;
  let userinput = document.getElementById("inputuser").value;
  let itemGet = localStorage.getItem("itemName");
  todosEle = JSON.parse(itemGet);
  console.log(itemGet);
  if (storeEdit !== null) {
    todosEle.splice(storeEdit, 1, userinput);
    localStorage.setItem("itemName", JSON.stringify(todosEle));
    storeEdit = null;
    gettingvalue();
    return;
  }
  if (userinput == "") {
    alert("enter valid input");
    return;
  }
  if (itemGet === null) {
    todosEle = [];
  }

  todosEle.push(userinput);
  console.log(todosEle);
  localStorage.setItem("itemName", JSON.stringify(todosEle));

  gettingvalue();
}
function gettingvalue() {
  let overall = document.getElementById("overalldiv");
  let itemGet = localStorage.getItem("itemName");
  let parsedvalue = JSON.parse(itemGet);
  // console.log(parsedvalue);
  let html = "";
  parsedvalue.map((each, index) => {
    html =
      html +
      `<div class="inputouter" id="">
          <input type="checkbox" onchange="checkboxchanged(${index})" id="check${index}" value="" class="checkbox">
          <p id="values${index}"> ${each} </p>
          <div class="btndiv">
            <button class="editbtn" onclick="editTodo(${index})"><i class="ri-edit-box-fill"></i></button>
            <button class="deletebtn"  onclick="Delete(${index})"><i class="ri-delete-bin-6-fill"></i></button>
          </div>
        </div>`;
  });
  overall.innerHTML = html;
}
function editTodo(i) {
  console.log(i);
  let itemGet = JSON.parse(localStorage.getItem("itemName"));
  let userinput = document.getElementById("inputuser");
  userinput.value = itemGet[i];
  storeEdit = i;
}
function Delete(ind) {
  console.log(ind);
  let itemGet = JSON.parse(localStorage.getItem("itemName"));
  itemGet.splice(ind, 1);
  localStorage.setItem("itemName", JSON.stringify(itemGet));
  gettingvalue();
}
function checkboxchanged(index) {
  let checkbox = document.getElementById("check" + index);
  let relust = checkbox.checked;
  let text = document.getElementById(`values${index}`);
  if (relust == true) {
    console.log(text);
    text.style.textDecoration = "line-Through";
  } else {
    text.style.textDecoration = "none";
  }
}
