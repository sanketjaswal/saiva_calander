import "./App.css";
// import { Day } from "./components/day";
import { SingleDay } from "./components/singleDay";

function App() {
  return (
    <div className="App">
      <div className="bodyContainer">
        <div className="container">
          <nav className="nav">
            <div className="navIn navIn1">
              <p>SAVIA</p>
              <p>Event calendar June 2022</p>
            </div>
            <div className="navIn navIn2">
              <div className="butons">
                <p>Donate</p>
                <select name="cars" id="dropdown">
                  <option value=""></option>
                  <option value="Sanket">Sanket</option>
                  <option value="Jeevan">Jeevan</option>
                  <option value="Devveer">Devveer</option>
                  <option value="Tonmoy">Tonmoy</option>
                </select>
              </div>
              <div className="butons">
                <p>Volunteer to</p>
                <select name="cars" id="dropdown">
                  <option value=""></option>
                  <option value="Sanket">Sanket</option>
                  <option value="Jeevan">Jeevan</option>
                  <option value="Devveer">Devveer</option>
                  <option value="Tonmoy">Tonmoy</option>
                </select>
              </div>
              <div className="buton2">Attend Selected</div>
            </div>
          </nav>
          <div className="daysHolder">
            <table>
              <tr className="weekHolder">
                <td>Sun</td>
                <td>Mon</td>
                <td>Tue</td>
                <td>Wed</td>
                <td>Thu</td>
                <td>Fri</td>
                <td>Sat</td>
              </tr>
              <tr>
                <td>{/* <SingleDay day="" t1="" t2="" r1="" r2="" /> */}</td>
                <td>{/* <SingleDay day="" t1="" t2="" r1="" r2="" /> */}</td>
                <td>{/* <SingleDay day="" t1="" t2="" r1="" r2="" /> */}</td>
                <td>
                  <SingleDay
                    day="1"
                    t1="10:15-11:35a"
                    t2="10:15-11:35a"
                    r1="Indu Sing A long"
                    r2="Child Presevation"
                  />
                </td>
                <td>
                  <SingleDay
                    day="2"
                    t1="10:15-11:35a"
                    t2=""
                    r1="Indu Sing A long"
                    r2=""
                  />
                </td>
                <td>
                  <SingleDay
                    day="3"
                    t1="4:00-5:00p"
                    t2=""
                    r1="Art by Keys"
                    r2=""
                  />
                </td>
                <td>
                  <SingleDay
                    day="4"
                    t1="9:00-10:00a"
                    t2=""
                    r1="Yoga Guidance"
                    r2=""
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <SingleDay
                    day="5"
                    t1="11:00-12:30p"
                    t2=""
                    r1="Women to women contact"
                    r2=""
                  />
                </td>
                <td>
                  <SingleDay
                    day="6"
                    t1="10:00-11:30p"
                    t2=""
                    r1="Yoga and Meditation"
                    r2=""
                  />
                </td>
                <td>
                  <SingleDay
                    day="7"
                    t1="11:00-12:00p"
                    t2="11:00-12:00p"
                    r1="Technology Hour"
                    r2="Anumapama Shloka"
                  />
                </td>
                <td>
                  <SingleDay
                    day="8"
                    t1="10:15-11:35a"
                    t2=""
                    r1="Indu Sing A long"
                    r2=""
                  />
                </td>
                <td>
                  <SingleDay
                    day="9"
                    t1="10:15-11:35a"
                    t2=""
                    r1="Indu Sing A long"
                    r2=""
                  />
                </td>
                <td>
                  <SingleDay
                    day="10"
                    t1="4:00-5:00p"
                    t2=""
                    r1="Swati art class"
                    r2=""
                  />
                </td>
                <td>
                  <SingleDay
                    day="11"
                    t1="9:00-10:00a"
                    t2=""
                    r1="Yoga Guidance"
                    r2=""
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <SingleDay
                    day="12"
                    t1="11:00-12:30p"
                    t2=""
                    r1="Women to women contact"
                    r2=""
                  />
                </td>
                <td>
                  <SingleDay
                    day="13"
                    t1="10:00-11:30p"
                    t2=""
                    r1="Yoga and Meditation"
                    r2=""
                  />
                </td>
                <td>
                  <SingleDay
                    day="14"
                    t1="11:00-12:00p"
                    t2="11:00-12:00p"
                    r1="Technology Hour"
                    r2="Anumapama Shloka"
                  />
                </td>
                <td>
                  <SingleDay
                    day="15"
                    t1="10:15-11:35a"
                    t2=""
                    r1="Indu Sing A long"
                    r2=""
                  />
                </td>
                <td>
                  <SingleDay
                    day="16"
                    t1="10:15-11:35a"
                    t2=""
                    r1="Indu Sing A long"
                    r2=""
                  />
                </td>
                <td>
                  <SingleDay
                    day="17"
                    t1="4:00-5:00p"
                    t2=""
                    r1="art by Keys"
                    r2=""
                  />
                </td>
                <td>
                  <SingleDay
                    day="18"
                    t1="9:00-10:00a"
                    t2=""
                    r1="Women to women contact"
                    r2=""
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <SingleDay
                    day="19"
                    t1="11:00-12:30p"
                    t2=""
                    r1="Women to women contact"
                    r2=""
                  />
                </td>
                <td>
                  <SingleDay
                    day="20"
                    t1="10:00-11:30p"
                    t2=""
                    r1="Yoga and Meditation"
                    r2=""
                  />
                </td>
                <td>
                  <SingleDay
                    day="21"
                    t1="11:00-12:00p"
                    t2="11:00-12:00p"
                    r1="Technology Hour"
                    r2="Anumapama Shloka"
                  />
                </td>
                <td>
                  <SingleDay
                    day="22"
                    t1="10:15-11:35a"
                    t2="10:15-11:35a"
                    r1="Indu Sing A long"
                    r2="Technology Hour"
                  />
                </td>
                <td>
                  <SingleDay
                    day="23"
                    t1="10:15-11:35a"
                    t2=""
                    r1="Indu Sing A long"
                    r2=""
                  />
                </td>
                <td>
                  <SingleDay
                    day="24"
                    t1="4:00-5:00p"
                    t2="10:15-11:35a"
                    r1="art by Keys"
                    r2="Swati art class"
                  />
                </td>
                <td>
                  <SingleDay
                    day="25"
                    t1="9:00-10:00a"
                    t2="11:00-12:30p"
                    r1="Yoga Guidance"
                    r2="Indu Sing A long"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <SingleDay
                    day="26"
                    t1="11:00-12:30p"
                    t2=""
                    r1="Women to women contact"
                    r2=""
                  />
                </td>
                <td>
                  <SingleDay
                    day="27"
                    t1="10:00-11:30p"
                    t2=""
                    r1="Yoga and Meditation"
                    r2=""
                  />
                </td>
                <td>
                  <SingleDay
                    day="28"
                    t1="11:00-12:00p"
                    t2="11:00-12:00p"
                    r1="Technology Hour"
                    r2="Anumapama Shloka"
                  />
                </td>
                <td>
                  <SingleDay
                    day="29"
                    t1="10:15-11:35a"
                    t2=""
                    r1="Indu Sing A long"
                    r2=""
                  />
                </td>
                <td>
                  <SingleDay
                    day="30"
                    t1="10:15-11:35a"
                    t2=""
                    r1="Indu Sing A long"
                    r2=""
                  />
                </td>
                <td>{/* <SingleDay day="" t1="" t2="" r1="" r2="" /> */}</td>
                <td>{/* <SingleDay day="" t1="" t2="" r1="" r2="" /> */}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
