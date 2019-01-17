import React, { Component } from 'react'
import styled from 'styled-components';
import { centerFlex } from '../../../global-styles/Mixins';


class Education extends Component {
  state = {
    schoolName: "",
    schoolDates: "",
    schoolCourse: "",
    schoolDegree: ""
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  // Checking package that will be sent for user info
  checkOnSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
  }

  render() {
    return (
      <MainFormContainer>
        <header>
          <h1>Education</h1>
        </header>
        <div className="container">
          <form onSubmit={this.checkOnSubmit}>
            {/* school */}
            <label htmlFor="userSchoolName">
              School Name:
            </label>
            <input
              type="text"
              id="userSchoolName"
              placeholder="Lambda School"
              name="schoolName"
              value={this.state.schoolName}
              onChange={this.onInputChange}
            />
            <br/>
            {/* schooldates - year/month options? */}
            <label htmlFor="userSchoolDates">
              Dates Attended:
            </label>
            <input
              type="text"
              id="userSchoolDates"
              placeholder="2017-2019"
              name="schoolDates"
              value={this.state.schoolDates}
              onChange={this.onInputChange}
            />
            <br/>
            {/* course */}
            <label htmlFor="userSchoolCourse">
              School Course:
            </label>
            <input
              type="text"
              id="userSchoolCourse"
              placeholder="Computer Science"
              name="schoolCourse"
              value={this.state.schoolCourse}
              onChange={this.onInputChange}
            />
            <br/>
            {/* degree */}
            <label htmlFor="userSchoolDegree">
              Dates Attended:
            </label>
            <input
              type="text"
              id="userSchoolDegree"
              placeholder="Bachelors"
              name="schoolDegree"
              value={this.state.schoolDegree}
              onChange={this.onInputChange}
            />
            <button type="submit">Save Info</button>
          </form>
        </div>
        <div>
          <h1>Your Education</h1>
        </div>
      </MainFormContainer>
    )
  }
}

const MainFormContainer = styled.main`
  width: calc(100% - 220px);
  margin-left: 220px;
  margin-bottom: 100px;
  padding-top: 50px;
  padding-left: 100px;
  h1 {
    font-size: 5rem;
    color: rgb(42,42,42);
  }
  h3 {
    font-size: 2.8rem;
    color: rgb(42,42,42);
  }
  .container {
    margin-bottom: 100px;
  }
`;

export default Education;