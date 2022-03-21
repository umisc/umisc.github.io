import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/banner";

import "../styles/about.sass";

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="Committee" />
      <Banner class_suffix="deep" />
      <div className="about-container">
        <div className="about-content">
          <h1>Committee</h1>
          <center className="committee-tables">
          <h4>2021 - 2022</h4>
            <table style={{ fontFamily: "Source Code Pro" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Arshia Arora</td>
                  <td>President</td>
                </tr>
                <tr>
                  <td>Proma Ali</td>
                  <td>Secretary</td>
                </tr>
                <tr>
                  <td>Apuroop Chunduri</td>
                  <td>Treasurer</td>
                </tr>
                <tr>
                  <td>Bowen Feng</td>
                  <td>Education Director</td>
                </tr>
                <tr>
                  <td>Seen Yan Lee</td>
                  <td>Publicity Director</td>
                </tr>
                <tr>
                  <td>Thanakon Kimsan</td>
                  <td>Publicity Director</td>
                </tr>
                <tr>
                  <td>Tristan Gao</td>
                  <td>IT Director</td>
                </tr>
                <tr>
                  <td>Sean Chen</td>
                  <td>Events Director</td>
                </tr>
              </tbody>
            </table>
            <h4>2020 - 2021</h4>
            <table style={{ fontFamily: "Source Code Pro" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kaif Ahsan</td>
                  <td>President</td>
                </tr>
                <tr>
                  <td>Mustafa Awni</td>
                  <td>Secretary</td>
                </tr>
                <tr>
                  <td>Livya Riany</td>
                  <td>Treasurer</td>
                </tr>
                <tr>
                  <td>Ayesha Ahmed</td>
                  <td>General Committee</td>
                </tr>
                <tr>
                  <td>Arshia Arora</td>
                  <td>General Committee</td>
                </tr>
                <tr>
                  <td>Syed Ahammad Newaz Saif</td>
                  <td>General Committee</td>
                </tr>
                <tr>
                  <td>Kumar Soorya</td>
                  <td>General Committee</td>
                </tr>
                <tr>
                  <td>Kushal Jaiswal</td>
                  <td>IT Officer</td>
                </tr>
                <tr>
                  <td>Apuroop Chunduri</td>
                  <td>First Year Representative</td>
                </tr>
              </tbody>
            </table>
            <h4>2019 - 2020</h4>
            <table style={{ fontFamily: "Source Code Pro" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Joseph Surin</td>
                  <td>President</td>
                </tr>
                <tr>
                  <td>Kaif Ahsan</td>
                  <td>Secretary</td>
                </tr>
                <tr>
                  <td>Chuanshu Jiang</td>
                  <td>Treasurer</td>
                </tr>
                <tr>
                  <td>Annie Nie</td>
                  <td>General Committee</td>
                </tr>
                <tr>
                  <td>Darren Xuan</td>
                  <td>General Committee</td>
                </tr>
                <tr>
                  <td>Chris Chamberlain</td>
                  <td>General Committee</td>
                </tr>
                <tr>
                  <td>Tian Qiu</td>
                  <td>General Committee</td>
                </tr>
              </tbody>
            </table>
            <h4>2019 Sem 2</h4>
            <table style={{ fontFamily: "Source Code Pro" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: "<!-- 🙃🙃 --!>Takuhiro Kikuchi",
                    }}
                  ></td>
                  <td>President</td>
                </tr>
                <tr>
                  <td>Joshua Ong</td>
                  <td>Secretary</td>
                </tr>
                <tr>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: "<!-- our president --!>Asil Mian",
                    }}
                  ></td>
                  <td>Treasurer</td>
                </tr>
                <tr>
                  <td>Shevon Mendis</td>
                  <td>General Committee</td>
                </tr>
                <tr>
                  <td>Ethan Cheng</td>
                  <td>General Committee</td>
                </tr>
                <tr>
                  <td>Chuanshu Jiang</td>
                  <td>General Committee</td>
                </tr>
                <tr>
                  <td>Joseph Surin</td>
                  <td>General Committee</td>
                </tr>
                <tr>
                  <td>John Stephenson</td>
                  <td>Education Officer</td>
                </tr>
                <tr>
                  <td>Kaif Ahsan</td>
                  <td>Education Officer</td>
                </tr>
              </tbody>
            </table>
            <h4>2018 - 2019 Sem 1</h4>
            <table style={{ fontFamily: "Source Code Pro" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Takuhiro Kikuchi</td>
                  <td>President</td>
                </tr>
                <tr>
                  <td>Joshua Ong</td>
                  <td>Secretary</td>
                </tr>
                <tr>
                  <td>Asil Mian</td>
                  <td>Treasurer</td>
                </tr>
                <tr>
                  <td>Shevon Mendis</td>
                  <td>General Committee</td>
                </tr>
                <tr>
                  <td>Ethan Cheng</td>
                  <td>General Committee</td>
                </tr>
                <tr>
                  <td>Michael Manoussakis</td>
                  <td>General Committee</td>
                </tr>
                <tr>
                  <td>Manindra Arora</td>
                  <td>General Committee</td>
                </tr>
                <tr>
                  <td>John Stephenson</td>
                  <td>Education Officer</td>
                </tr>
                <tr>
                  <td>Kaif Ahsan</td>
                  <td>Education Officer</td>
                </tr>
              </tbody>
            </table>
            <h4>2017 - 2018</h4>
            <table style={{ fontFamily: "Source Code Pro" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tarnvir Grewal</td>
                  <td>President</td>
                </tr>
                <tr>
                  <td>Abhineet Gupta</td>
                  <td>Secretary</td>
                </tr>
                <tr>
                  <td>Danish Bassi</td>
                  <td>Treasurer</td>
                </tr>
                <tr>
                  <td>Terence Denning</td>
                  <td>General Committee</td>
                </tr>
                <tr>
                  <td>Takuhiro Kikuchi</td>
                  <td>General Committee</td>
                </tr>
                <tr>
                  <td>Max Giammario</td>
                  <td>General Committee</td>
                </tr>
              </tbody>
            </table>
          </center>
        </div>
      </div>
    </Layout>
  );
};
export default AboutPage;
