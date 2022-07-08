import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Championship Tracker</h1>
                <h3>Dog's Name</h3>
                <input type="text" 
                placeholder="Dog's Call Name" />
            </div>
            <div class='btn button'>
                <button class='btn btn-outline-dark btn-lg'>
                  1
                </button>
                <button class='btn btn-outline-dark btn-lg'>
                  2
                </button>
                <button class='btn btn-outline-dark btn-lg'>
                  3
                </button>
                <button class='btn btn-outline-dark btn-lg'>
                  4
                </button>
                <button class='btn btn-outline-dark btn-lg'>
                  5
                </button>
                <span>15</span>
                <div class="progress">
  <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
            </div>
`;
