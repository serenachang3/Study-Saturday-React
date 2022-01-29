import React from "react";
import axios from "axios";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
    console.log("look here", this.state.studentData);
    this.getStudents = this.getStudents.bind(this);
  }

  async getStudents() {
    try {
      const res = await axios.get("/student"); //the argumentis the url that gives you all students . axios is a runner that has to go to the back end to retrieve data
      const students = res.data;
      this.setState({ students: students });
    } catch (err) {
      console.error(err);
    }
  }
  // componentDidMount is a lifecycle. it runs any functions inside automatically when it runs
  //you can put multiple methods inside too run automatically
  componentDidMount() {
    this.getStudents(); //we want this  to be retrieced as soon as they want this component
  }

  render() {
    return (
      <div>
        <h1> students </h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
            </tr>
                {this.state.students.map((student) => {
                  return (
                    <tr key={student.id}>
                      <td>{student.fullName}</td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    );
  }
}

// {this.state.students.map((individual)  => {
//     return (
//         <key={individual.id} students={stuudents} />
//     )
// })}
