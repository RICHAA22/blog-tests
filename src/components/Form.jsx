import React from "react";

function Form() {
  return (
    <div className="form">
    <div class="container">
      <div class="row align-items-center my-5">
        <div class="col-lg-7">
          <img
            class="img-fluid rounded mb-4 mb-lg-0"
            src="http://placehold.it/900x400"
            alt=""
          />
        </div>
        <div class="col-lg-5">
          <h1 class="font-weight-light">SAVE YOUR DATA</h1>
          {/* TextFile = () => {
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('myInput').value], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  } */}
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" class="btn btn-primary" style={{backgroundColor: "green"}}>Click here!</button>
</form>
  {/* <script>
        document.getElementById('submit')
        //onclick events
        onClick(){

        }
  </script> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;